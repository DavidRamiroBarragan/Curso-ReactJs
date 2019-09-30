import React from 'react';

export default function Criptomonedas({ criptomoneda }) {
  const { FullName, Name } = criptomoneda.CoinInfo;
  return <option value={Name}>{FullName}</option>;
}
