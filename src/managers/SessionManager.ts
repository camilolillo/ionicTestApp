import { Injectable } from '@angular/core';

//imports firebase
import firebase from 'firebase/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})

export class SessionManager {

    //agrego constructor
    constructor(public fireAuth: AngularFireAuth) { }


    private readonly temporaryUserName: string = 'user';
    private readonly temporaryPass: string = 'pass';

    performLogin(user: string, password: string): boolean {
        if(user == this.temporaryUserName && password == this.temporaryPass) {
            return true;
        } else {
            return false;
        }  
    }

    async signOut() {
        return await this.fireAuth.signOut()
    }

    async registerUserWith(email: string, password: string) {
        return await this.fireAuth.createUserWithEmailAndPassword(email, password)
    }

    async loginWith(email: string, password: string) {
        return await this.fireAuth.signInWithEmailAndPassword(email, password)
    }

    async resetPassword(email: string) {
        return await this.fireAuth.sendPasswordResetEmail(email)
    }

    async getProfile() {
        return await this.fireAuth.currentUser
    }
}