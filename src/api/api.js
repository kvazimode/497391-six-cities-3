import axios from 'axios';

const Error = {
  UNAUTHORIZED: 401
};

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onError = (error) => {
    throw error;
  }

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
