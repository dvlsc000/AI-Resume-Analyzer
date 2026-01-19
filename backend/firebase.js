import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
export const bucket = admin.storage().bucket();
