import { Component, OnInit } from '@angular/core';
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

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {
    // this.user = this.user;
  }

  // ngOnInit(): void {
  //   // console.log('result', this.user);
  // }
}
