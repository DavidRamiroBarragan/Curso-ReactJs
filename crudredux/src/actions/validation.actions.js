import {
  VALIDAR_FORMULARIO,
  VALIDAR_FORMULARIO_SUCCESS,
  VALIDAR_FORMULARIO_ERROR
} from '../types';


export function validarFormularioAction() {
 return dispatch => {
   dispatch(validarFormulario());
 }
}

export const validarFormulario = () => {
  return {
    type: VALIDAR_FORMULARIO
  }
};

export const validacionExito = () => {
  return {
    type: VALIDAR_FORMULARIO_SUCCESS
  }
};

export const validacionError = () => {
  return {
    type: VALIDAR_FORMULARIO_ERROR
  }
};
