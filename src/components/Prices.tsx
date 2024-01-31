import { useContext, useState } from "react"
import UserContext from "../state/useContext"
import { QueryClient, useQuery, useQueryClient } from "react-query"
import { fetchCryptoID } from "../api/api"




const Prices = () => {

    const {theId}:any = useContext(UserContext)

    const {isLoading, data, isError}:any = useQuery(["cyrptoId", theId], ()=>fetchCryptoID(theId))
      

    if (isLoading) {
        return <h2></h2>
      }
    
      if (isError) {  
        return <h2>There is a Problem 💩</h2>
      }

      console.log(data);
    
  return (
    <div >
       <div className="price-container flex flex-col font-semibold gap-2">
        <h2>{data.data.symbol}</h2>
        <h4>Price: {data.data.price_24h}</h4>
        <h4>Volume: {data.data.volume_24h}</h4>
        <h4>Last Trade Price: {data.data.last_trade_price}</h4>
        </div>
    </div>
  )
}
export default Prices