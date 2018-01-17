import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  
  const database = firebase.database();
  const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };
//   //child_remove
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   });

//   //child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   });

//   //child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   });

  
// //   database.ref('expenses').on('value', (snapshot) => {
// //       const expenses = [];

// //       snapshot.forEach((childSnapshot) => {
// //           expenses.push({
// //               id: childSnapshot.key,
// //               ...childSnapshot.val()
// //           })
// //       })
// //       console.log(expenses)
// //   })


// //   database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //       const expenses = [];

// //       snapshot.forEach((childSnapshot) => {
// //           expenses.push({
// //               id: childSnapshot.key,
// //               ...childSnapshot.val()
// //           })
// //       })
// //       console.log(expenses)
// //   })
//   database.ref('expenses').push({
//       description: 'Gas bill',
//       note: 'Gas bill for January 2018',
//       amount: 250,
//       createdAt: 3000
//   })
// //   database.ref('notes').push({
// //       title: 'Course Topics',
// //       body: 'Angular, React, Python'
// //   });
// // database.ref('notes/-L2U-izbH96B17MZ9BYb').remove()
  

// //   database.ref().on('value', (snapshot) => {
// //       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })
//   database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   });

//   database.ref()
//   .once('value')
//   .then((snapshot) => {
//    const val= snapshot.val();
//    console.log(val);
//   })
//   .catch((e) => {
//       console.log('Error fetching data', e)
//   })

//   database.ref().set({
//     name: 'Peter Adeoye',
//     age: 28,
//     stressLevel: 7,
//     job: {
//         title: 'Software Developer',
//         company: 'Starlight'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'USA'
//     }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   })

//   database.ref('attributes').set({
//       height: '1.8m',
//       weight: '65kg'
//   });
  
//   database.ref('isSingle')
//   .remove()
//   .then(() => {
//       console.log('Data was removed')
//   }).catch((e) => {
//       console.log('Did not remove data', e)
//   })
