import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  users$: Observable<User[]>;

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users'); // Referenziert die 'users'-Sammlung
    this.users$ = collectionData(usersCollection, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);

  userId?: string;
  route: any;

  // ngOnInit(): void {
  //   this.userId = this.route.snapshot.paramMap.get('id')!;
  //   // Verwende userId, um Details des Benutzers zu laden
  //   console.log(this.userId);
  // }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {
      height: '600px',
      width: '500px',
    });
  }
}
