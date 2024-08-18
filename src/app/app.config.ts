import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-761a2',
        appId: '1:250458926565:web:b47301e5b79082ab89d30c',
        storageBucket: 'simple-crm-761a2.appspot.com',
        apiKey: 'AIzaSyAIcx7Xvt4TaYFF8n9f-mChH-2H3Xez2bM',
        authDomain: 'simple-crm-761a2.firebaseapp.com',
        messagingSenderId: '250458926565',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
