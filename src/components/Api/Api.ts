import axios from 'axios';

const API_URL = 'https://dev-api.contender-logistics.draketechdev.ca/api';
const CRUD_API_URL = 'https://crudcrud.com/api/920ab6b34c354fb89eaee3529b061c1b';

export const login = (body: { email: string; password: string }) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, body);
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      dispatch({ type: 'LOGIN_SUCCESS', user, token });
      return response;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', error });
      throw error;
    }
  };
};

export const getTodos = () => {
  return axios.get(`${CRUD_API_URL}/todos`);
};

export const createTodo = (body: any) => {
  return axios.post(`${CRUD_API_URL}/todos`, body);
};

export const updateTodo = (id: string, body: any) => {
  return axios.put(`${CRUD_API_URL}/todos/${id}`, body);
};

export const deleteTodo = (id: string) => {
  return axios.delete(`${CRUD_API_URL}/todos/${id}`);
};
