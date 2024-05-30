import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { provideFirebaseApp, initializeApp as firebaseInitializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore as firebaseGetFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChRUcd5EbdfKjFbLrSXq-x6LU3jA9AQ2c",
  authDomain: "chat-app-6c7a9.firebaseapp.com",
  projectId: "chat-app-6c7a9",
  storageBucket: "chat-app-6c7a9.appspot.com",
  messagingSenderId: "909193507065",
  appId: "1:909193507065:web:fe3239ee7e6d489f883228",
  measurementId: "G-NT26MVEBJG"
};

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom([
      provideFirebaseApp(() => firebaseInitializeApp(firebaseConfig)),
      provideFirestore(() => firebaseGetFirestore())
    ]),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
