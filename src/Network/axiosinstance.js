import axios from "axios";

export const axiosinstance = axios.create ({
    baseURL : "http://localhost:8080/api/v1",
    // headers:{
    //     'Content-Type': 'application/json'
    //   }
})