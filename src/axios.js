import axios from "axios";
import {baseUrl} from './Constant/Constant'


const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    baseURL:baseUrl,
  });

  export default instance