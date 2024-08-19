import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from './../../models/user.class';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Firestore,collection,doc, setDoc, updateDoc } from '@angular/fire/firestore';
// import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule
    // UserDetailComponent,
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss',
})
export class DialogEditAddressComponent {
  user?: User;
  loading = false;
  userId?:string;
  route: any;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {
    // this.user = this.user;
  }

  private firestore: Firestore = inject(Firestore);

  // ngOnInit(): void {
  //   // console.log('result', this.user);
  // }

  saveAddress() {
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    updateDoc(userDocRef, {
      city: this.user?.city,
      street: this.user?.street,
      zipCode: this.user?.zipCode,
      // weitere Felder hier hinzufügen
    }).then(() => {
      console.log('User updated successfully');
      this.dialogRef.close(this.user); // Schließt den Dialog nach erfolgreichem Speichern
    }).catch(error => {
      console.error('Error updating user: ', error);
    });   
  }


}
