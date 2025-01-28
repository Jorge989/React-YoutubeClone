import axios from "axios";


export const BASE_URL = "https://youtube-v31.p.rapidapi.com";


export const fetchFromAPI = async (url, additionalParams = {}) => {
  try {

    const params = {
      maxResults: 50,
      ...additionalParams,
    };


    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
      },
      params, 
    });

    return data; 
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error.response?.data || error.message);
    throw error;
  }
};