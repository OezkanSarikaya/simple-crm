import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from './../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { MatDialogRef } from '@angular/material/dialog';

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
  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}
}
