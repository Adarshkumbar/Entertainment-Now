//This file used for api calls using "AXIOS"

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

 const headers = {
    Authorization: "bearer "+TMDB_TOKEN, 
 }

 export const fetchDataFromApi = async (url,params) =>{
   // 1st parameter is url like popular movies. so on
   try {
     const { data } = await axios.get(BASE_URL + url, {
       //whatever we get response from axios.get we store in data
       headers,
       params,
     }); // 1st parameter is url (or end pt like popular,movies etc ).2nd is options/config
     return data;
   } catch (err) {
     console.log(err);
     return err;
   }
 }