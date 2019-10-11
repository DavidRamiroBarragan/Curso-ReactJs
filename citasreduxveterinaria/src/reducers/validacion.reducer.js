const intitialState = {
  error: false
};

export default function (state=intitialState, action){
  switch (action.type) {
    case 'VALIDAR_FORMULARIO':
      return {
        ...state,
        error: action.payload

      }


    default:
      return state;
  }
}
