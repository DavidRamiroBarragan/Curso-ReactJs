import React from 'react';
import { revisarPresupuesto } from '../Helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => (
  <>
    <div className='alert alert-primary'>Presupuesto: € {presupuesto}</div>
    <div className={revisarPresupuesto(presupuesto, restante)}>
      Restante: € {restante}
    </div>
  </>
);

export default ControlPresupuesto;
