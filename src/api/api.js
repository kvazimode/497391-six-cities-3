import axios from 'axios';

const Error = {
  UNAUTHORIZED: 401
};

const createAPI = (onUnauth) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error.response.status === Error.UNAUTHORIZED) {
      onUnauth();
      throw error;
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
