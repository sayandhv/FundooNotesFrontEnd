import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api/';

export default class AxiosService{
    postService(url,reqPayload,token,httpAuthOption){
        console.log(reqPayload);
       return axios.post(BASE_URL+url,reqPayload,token&&httpAuthOption)
    }


    getService(url, token,httpAuthOptions) {
        return axios.get(BASE_URL + url, token && httpAuthOptions)
      }
}