import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nmailer from 'nodemailer';

admin.initializeApp();
const db = admin.firestore();

// import * as sgmail from '@sendgrid/mail';

// const API_KEY = functions.config().sendgrid.key;
// const TEMP_ID = functions.config().sendgrid.template;

// sgmail.setApiKey(API_KEY);

export const newMail = functions.firestore
  .document('Messages/{messageId}')
  .onCreate(async (_change, context) => {
    // const messageID = context.params.messageId;

    const postSnap = await db
      .collection('Messages')
      .doc(context.params.messageId)
      .get();

    const message = postSnap.data() || {};

    // const msg = {
    //     to: 'justinjkorkie@gmail.com',
    //     from: 'justinjkorkie@gmail.com',
    //     templateId: TEMP_ID,
    //     dynamic_template_data: {
    //         name: message.name,
    //         surname: message.surname,
    //         subject: message.subject,
    //         message: message.message,
    //         email: message.email
    //     }
    // }

    // NODEMAILER ////////////////////////////////
    //////////////////////////////////////////////

    const transporter = nmailer.createTransport({
      service: 'gmail',
      auth: {
        user: functions.config().nodemailer.email,
        pass: functions.config().nodemailer.pass,
      },
    });

    const mailOptions = {
      from: 'korkiezpbusiness@gmail.com',
      to: 'korkiezpbusiness@gmail.com',
      subject: message.subject,
      text: '',
      html: `<p>${message.message}</p>
            <strong>From: ${message.name} ${message.surname} Email: ${message.email}</strong>`,
    };

    console.log(
      `${message.name} ${message.surname} ${message.message} ${message.email} ${message.subject}`
    );

    try {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      return 'success';
      // return await sgmail.send({
      //     to: 'justinjkorkie@gmail.com',
      //     from: 'korkiezpbusiness@gmail.com',
      //     templateId: TEMP_ID,
      //     dynamicTemplateData: {
      //         name: message.name,
      //         surname: message.surname,
      //         subject: message.subject,
      //         message: message.message,
      //         email: message.email
      //     }
      // });
    } catch {
      return Error;
    }
  });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
