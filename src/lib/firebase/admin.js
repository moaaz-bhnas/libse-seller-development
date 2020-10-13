import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      clientEmail: process.env.CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
    databaseURL: "https://libse-1.firebaseio.com",
  });
}

export default firebaseAdmin;
