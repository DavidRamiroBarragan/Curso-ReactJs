import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

// http://react-redux-firebase.com/docs/getting_started.html

const firebaseConfig = {
  apiKey: 'AIzaSyDF9Ws5WkEgEgW0yB5UMoGEZIuoY6IhG2w',
  authDomain: 'bibliostore-d5195.firebaseapp.com',
  databaseURL: 'https://bibliostore-d5195.firebaseio.com',
  projectId: 'bibliostore-d5195',
  storageBucket: 'bibliostore-d5195.appspot.com',
  messagingSenderId: '881493351532',
  appId: '1:881493351532:web:efeff44d02cd12a9a3cc49'
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, rrfConfig),
//   reduxFirestore(firebase)
// )(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStoreWithFirebase(rootReducer, initialState, compose(
//   reactReduxFirebase(firebase),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

export { store, rrfProps };
