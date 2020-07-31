import axios from 'axios';
export const LISTAR_USUARIOS = 'LISTAR_USUARIOS';

export function listarUsuarios() {
  return (dispatch) => {
    return axios
      .get('https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE')
      .then((response) => {
        dispatch({ type: LISTAR_USUARIOS, payload: response.data.result });
      });
  };
}
