import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDF9Ws5WkEgEgW0yB5UMoGEZIuoY6IhG2w',
  authDomain: 'bibliostore-d5195.firebaseapp.com',
  databaseURL: 'https://bibliostore-d5195.firebaseio.com',
  projectId: 'bibliostore-d5195',
  storageBucket: 'bibliostore-d5195.appspot.com',
  messagingSenderId: '881493351532',
  appId: '1:881493351532:web:efeff44d02cd12a9a3cc49'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
