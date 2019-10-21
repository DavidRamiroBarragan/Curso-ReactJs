import React from 'react';
import { useFirebaseConnect } from 'react-redux-firebase';

const Suscriptores = () => {
  useFirebaseConnect(['suscriptores']);
  return <h1>Suscriptores</h1>;
};

export default Suscriptores;
