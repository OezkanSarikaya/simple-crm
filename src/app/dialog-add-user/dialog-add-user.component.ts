import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatProgressBarModule,
    CommonModule,  

  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  user = new User();
  birthDate?: Date;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>


  ) {}

  private firestore: Firestore = inject(Firestore);

  async saveUser() {
    this.loading = true;
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
    }

    console.log('Current user is:', this.user);

    try {
      const userCollection = collection(this.firestore, 'users'); // Referenziert die 'users'-Sammlung
      const result = await addDoc(userCollection, { ...this.user }); // Fügt ein Dokument zur Sammlung hinzu
      console.log('User added: ', result);
      this.loading = false;
      this.dialogRef.close();
      // ngForm.resetForm();
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }
}
