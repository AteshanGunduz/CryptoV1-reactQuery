import { useContext } from "react"
import UserContext from "../../state/useContext"
import { useQuery } from "react-query"
import { fetchMorePricesID } from "../../api/api"



const Cyrpto = () => {
    const {Cid, handleCyrptoToggle}:any = useContext(UserContext)

    const {data: coin}:any = useQuery(["morePrices", Cid],()=> fetchMorePricesID(Cid))

   
    



  return (
    <div>
      <div className="flex items-center gap-5" key={coin?.data.id}>
      <button className="bg-gray-800 p-3 hover:bg-gray-700 rounded-xl flex w-28 items-center justify-around" onClick={()=>handleCyrptoToggle()}><img src={`https://assets.coincap.io/assets/icons/${coin?.data.symbol.toLowerCase()}@2x.png`} width="30px"/>  <h2>{coin?.data.symbol}</h2></button>
        <h2><p className="text-gray-200 text-xs">INDEX PRICE</p> ${parseFloat(coin?.data.quotes.USD.price).toFixed(2)}</h2> 
            <h2  className={String(coin?.data.quotes.USD.percent_change_24h).includes("-") ? "text-red-500" : "text-green-500"}>
              <p className="text-gray-200 text-xs">24HOUR CHANGE</p>{coin?.data.quotes.USD.percent_change_24h}%</h2> 
              <h2><p className="text-gray-200 text-xs">24HOUR VOLUME</p> ${parseFloat(coin?.data.quotes.USD.volume_24h).toFixed(2)}</h2> 
              <h2><p className="text-gray-200 text-xs">ATH PRICE</p> ${parseFloat(coin?.data.quotes.USD.ath_price).toFixed(2)}</h2>

              <h2  className={String(coin?.data.quotes.USD.percent_change_12h).includes("-") ? "text-red-500" : "text-green-500"}>
              <p className="text-gray-200 text-xs">12HOUR CHANGE</p>{coin?.data.quotes.USD.percent_change_12h}%</h2> 
              <h2  className={String(coin?.data.quotes.USD.percent_change_6h).includes("-") ? "text-red-500" : "text-green-500"}>
              <p className="text-gray-200 text-xs">6HOUR CHANGE</p>{coin?.data.quotes.USD.percent_change_6h}%</h2> 
              <h2  className={String(coin?.data.quotes.USD.percent_change_1h).includes("-") ? "text-red-500" : "text-green-500"}>
              <p className="text-gray-200 text-xs">1HOUR CHANGE</p>{coin?.data.quotes.USD.percent_change_1h}%</h2>  
        
       </div> 
    </div>
  )
}
export default Cyrpto

