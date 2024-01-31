import axios from "axios";




export const fetchCrypto = () => {
   return axios.get("https://api.blockchain.com/v3/exchange/tickers")
}



export const fetchCryptoID = (theId:string) => {
   return axios.get(`https://api.blockchain.com/v3/exchange/tickers/${theId}`)
}
