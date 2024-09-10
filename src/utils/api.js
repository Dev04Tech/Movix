import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";//url variable 
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; //store tokeb
//we can directily paste the api token to it insted of this import value 

const headers = {          //parnet me headers honge usme api call karn hai 
      //isiliye ye banaya hai 
    Authorization: "bearer " + TMDB_TOKEN,
};

//method  
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};