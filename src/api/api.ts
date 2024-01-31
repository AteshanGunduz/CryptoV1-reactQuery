import axios from "axios";
import { useContext } from "react";
import UserContext from "../state/useContext";




export const fetchCrypto = () => {
   return axios.get("https://api.blockchain.com/v3/exchange/tickers")
}



export const fetchCryptoID = (theId:string) => {
   return axios.get(`https://api.blockchain.com/v3/exchange/tickers/${theId}`)
}
