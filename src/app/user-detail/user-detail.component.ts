import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  users$: Observable<User[]>;
  userId?: string;
  // route: any;
  user: User | undefined;

  constructor(
    public dialog: MatDialog,
    public dialogUser: MatDialog,
    private route: ActivatedRoute,
    private firestore: Firestore
  ) {

    const usersCollection = collection(this.firestore, 'users'); // Referenziert die 'users'-Sammlung
    this.users$ = collectionData(usersCollection, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  


  getUser(id: string) {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return getDoc(userDocRef);
  }

  editMenu() {}

  openAddressDialog() {
    // console.log('test');
    
    const dialog = this.dialog.open(DialogEditAddressComponent, {
      data: this.user,
      height: '600px',
      width: '500px',
    });
    dialog.componentInstance.user = this.user;

    
  }

  openUserDialog() {
    // console.log('test');
    
    const dialogUser = this.dialog.open(DialogEditUserComponent, {
      height: '600px',
      width: '500px',
    });
    dialogUser.componentInstance.user = this.user;
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.getUser(this.userId).then((docSnap) => {
      if (docSnap.exists()) {
        this.user = docSnap.data() as User;   
      } else {
        console.log('No such document!');
      }
    });
  }
}
