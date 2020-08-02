import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Mail } from '../_models/models';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private MailDoc: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
    this.MailDoc = this.afs.collection('Messages');
  }

  async sendMail(mail: Mail) {
    try {
      await this.MailDoc.add(mail);
    } catch (error) {
      alert(error.message);
      console.log('user Update Error', error);
    }
  }
}
