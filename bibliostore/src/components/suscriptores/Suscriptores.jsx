import React from 'react';
import { useFirebaseConnect, useFirestoreConnect } from 'react-redux-firebase';

const Suscriptores = () => {
  useFirestoreConnect(['suscriptores']);
  return <h1>Suscriptores</h1>;
};

export default Suscriptores;
