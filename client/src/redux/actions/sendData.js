import axios from 'axios';
import { API_URL } from '../../config';

export const sendData = (formData) => {
  axios
    .post(`${API_URL}/post`, formData)
    .then((res) => {
      alert(`Here is server response: ${JSON.stringify(res.data)}`);
    })
    .catch((error) => {
      alert('Hey, something went wrong try again...');
    });
};

export default sendData;
