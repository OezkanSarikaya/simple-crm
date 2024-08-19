import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from './../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { MatDialogRef } from '@angular/material/dialog';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,CommonModule,FormsModule,MatButtonModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user?: User;
  loading = false;
  userId?:string;
  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}
  private firestore: Firestore = inject(Firestore);

  saveUser() {
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    updateDoc(userDocRef, {
      firstName: this.user?.firstName,
      lastName: this.user?.lastName,
      email: this.user?.email,
      // weitere Felder hier hinzufügen
    }).then(() => {
      console.log('User updated successfully');
      this.dialogRef.close(this.user); // Schließt den Dialog nach erfolgreichem Speichern
    }).catch(error => {
      console.error('Error updating user: ', error);
    });   
  }


}
