import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationUseCase {

  constructor(private fireAuth: AngularFireAuth, private db: AngularFireDatabase) {}

  async execute(email: string, password: string) : Promise<any> {
    // Registra al usuario en Firebase Authentication
    const userCredential = await this.fireAuth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    if (user) {
      // Obtén el UID y guarda el UID y el correo en Realtime Database
      const uid = user.uid;
      await this.db.object(`/users/${uid}`).set({
        email: email
      });
    }

    return userCredential;
  }
}
