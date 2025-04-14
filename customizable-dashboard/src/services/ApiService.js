import axios from 'axios';
// import Utils from '../utilities';
// import { clearIntervelCall } from '../refresh-token';

// axios.interceptors.request.use((config) => {
//   let token = Utils.authToken();
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
//   return config;
// });

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     let elem = document.querySelector('.login-card');
//     if (error.response?.status === 401) {
//       if (error.response?.data?.message !== 'expired') {
//         clearIntervelCall();
//         redirectToLogin();
//       } else {
//         if (error.response?.data?.loginType === 'cognito') {
//           clearIntervelCall();
//           let cognitoCard = document.querySelector('.cognito-card');
//           cognitoCard && cognitoCard.classList.remove('d-none');
//         } else {
//           elem && elem.classList.remove('d-none');
//         }
//       }
//     } else if (error.response?.status === 403) {
//       let errorSnackbar = document.querySelector('.err-snackbar');
//       errorSnackbar && errorSnackbar.classList.remove('d-none');
//       setTimeout(() => {
//         errorSnackbar.classList.add('d-none');  
//       },5000);
//     }
//     return Promise.reject(error);
//   }
// );

// const redirectToLogin = () => {
//   Utils.setStoredValue('resp', null);
//   window.location.reload();
// };

const ApiRequest = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};

export default ApiRequest;
