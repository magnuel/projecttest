import axios from 'axios';

const API_URL = 'https://dev-api.contender-logistics.draketechdev.ca/api';
const CRUD_API_URL = 'https://api.crudcrud.com/api/16be57dbfcc04ed1ae78300551b3862d';

export const login = (body: { email: string; password: string }) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, body);
      const { user, accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      dispatch({ type: 'LOGIN_SUCCESS', user, accessToken });
      return response;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', error });
      throw error;
    }
  };
};

export const getTodos = () => {
  const accessToken = localStorage.getItem('accessToken'); // Obtener token de acceso del localStorage
  return axios.get(`${CRUD_API_URL}/todos`, { headers: { Authorization: `Bearer ${accessToken}` } });
};

export const createTodo = (body: any) => {
  const accessToken = localStorage.getItem('accessToken'); // Obtener token de acceso del localStorage
  return axios.post(`${CRUD_API_URL}/todos`, body, { headers: { Authorization: `Bearer ${accessToken}` } });
};

export const updateTodo = (id: string, body: any) => {
  const accessToken = localStorage.getItem('accessToken'); // Obtener token de acceso del localStorage
  return axios.put(`${CRUD_API_URL}/todos/${id}`, body, { headers: { Authorization: `Bearer ${accessToken}` } });
};

export const deleteTodo = (id: string) => {
  const accessToken = localStorage.getItem('accessToken'); // Obtener token de acceso del localStorage
  return axios.delete(`${CRUD_API_URL}/todos/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
};
