import axios from "axios";


export const fetchCrypto = () => {
   return axios.get("https://api.blockchain.com/v3/exchange/tickers")
}



export const fetchCryptoID = (theId:string) => {
   return axios.get(`https://api.blockchain.com/v3/exchange/tickers/${theId}`)
}



export const fetchCountryCode = async () => {
   try {
     const response = await axios.get("https://restcountries.com/v3.1/all");
     return response.data;
   } catch (error) {
     console.error("Error fetching country code:", error);
   }
 };


 
export const fetchMorePrices = () => {
  return axios.get("https://api.coinpaprika.com/v1/tickers")
}


export const fetchTickers = async (start:any, end:any): Promise<any> => {
  const response = await fetch(`https://api.coinpaprika.com/v1/tickers?start=${start}&limit=${end}`);
  const data = await response.json();
  return data;
};

export const fetchAvatarSeed= async(seed1:string, seed2:string) => {
  return axios.get(`https://api.dicebear.com/7.x/initials/svg?seed=${seed1+seed2}`)
}
