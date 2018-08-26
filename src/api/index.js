import axios from 'axios';

export default (method, url, params={}) => {

  const baseOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': process.env.REACT_APP_API_AUTHORIZATION,
    },
    responseType: 'json',
    crossdomain: true,
    method,
    url,
    params,
  };
  
  const requestInterceptor = config => ({ ...baseOptions });
  const handleRequestError = error => console.log(error);
  const responseInterceptor = res => res.data;
  
  const api = axios.create();
  api.interceptors.request.use(requestInterceptor, handleRequestError);
  api.interceptors.response.use(responseInterceptor, handleRequestError);

  return api({ ...baseOptions }).then(response => {
    return response.json().then(json => {
      return response.ok ? json : Promise.reject(json);
    });
  });
}
