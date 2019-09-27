import React from 'react';

const Informacion = ({ info }) => {
  if (Object.keys(info).length === 0) return null;
  return (
    <>
      <div className='card border-light'>
        <div className='card-header bg-primary text-llight font-weight-bold'>
          Información artista
        </div>
        <div className='card-body'>
          <img src={info.strArtistThumb} alt='Logo artista' />
          <p className='card-text'>Genero: {info.strGenre}</p>
          <h2 className='card-text text-center'>Biografia:</h2>
          <p className='card-text'>{info.strBiographyES}</p>
        </div>
      </div>
    </>
  );
};

export default Informacion;
