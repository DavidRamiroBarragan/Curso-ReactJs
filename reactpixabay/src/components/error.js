import React from 'react';

const error = ({ mensaje }) => {
  return (
    <p className='my-3 p-4 text-white text-center alert alert-danger'>
      {mensaje}
    </p>
  );
};

export default error;
