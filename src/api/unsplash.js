import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID oLANbRBfTrlJiG_WkTOpK_1vPaqj51BpTTA26PqwQ9I',
  },
});
