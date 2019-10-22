import React from 'react';
import { useFirebaseConnect, useFirestoreConnect } from 'react-redux-firebase';

const Suscriptores = () => {
  useFirebaseConnect(['suscriptores']);
  useFirestoreConnect([
    { collection: 'suscriptores' } // or 'todos'
  ])
  return <h1>Suscriptores</h1>;
};

export default Suscriptores;
