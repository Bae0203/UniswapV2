import axios from "axios";

export const customAxios = axios.create({
  baseURL:
    "https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=",
});
