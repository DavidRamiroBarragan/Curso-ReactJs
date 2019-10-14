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

export const validarFormulario = () => ({
  type: VALIDAR_FORMULARIO
});
