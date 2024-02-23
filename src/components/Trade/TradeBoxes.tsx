import { useQuery } from "react-query"
import { fetchMorePrices } from "../../api/api"

const TradeBoxes = () => {

    const {isLoading, data, isError}:any = useQuery(["morePrices"], fetchMorePrices)
  
    if (isLoading) {
      return <h2></h2>
    }
  
    if (isError) {  
      return <h2>There is a Problem 💩</h2>
    }

    const one = data.data.slice(0,3)
    const two = data.data.slice(3,6)
    const three= data.data.slice(6,9)
    const four = data.data.slice(9,12)

 

  return (
  <div className="coin-container flex gap-5 font-semibold">
    <div className="coin-box flex flex-col gap-2">
       {one.map((coin:any)=>{
        return <div className="flex gap-5" key={coin.symbol}>
            <img src={`https://assets.coincap.io/assets/icons/${(coin).symbol.toLowerCase()}@2x.png`} width="30px"/>
            <h2>{coin.symbol}</h2>
            <h2>${parseFloat(coin.quotes.USD.price).toFixed(2)}</h2> 
            <h2 className={String(coin.quotes.USD.percent_change_24h).includes("-") ? "text-red-500" : "text-green-500"}>{coin.quotes.USD.percent_change_24h}%</h2> 
            </div>
       })}
    </div>

    <div className="coin-box flex flex-col  gap-2">
    {two.map((coin:any)=>{
        return <div className="flex gap-5" key={coin.symbol}>
            <img src={`https://assets.coincap.io/assets/icons/${(coin).symbol.toLowerCase()}@2x.png`} width="30px"/>
            <h2>{coin.symbol}</h2>
            <h2>${parseFloat(coin.quotes.USD.price).toFixed(2)}</h2> 
            <h2  className={String(coin.quotes.USD.percent_change_24h).includes("-") ? "text-red-500" : "text-green-500"}>{coin.quotes.USD.percent_change_24h}%</h2> 
            </div>
       })}
    </div>

    <div className="coin-box flex flex-col  gap-2">
    {three.map((coin:any)=>{
        return <div className="flex gap-5" key={coin.symbol}>
            <img src={`https://assets.coincap.io/assets/icons/${(coin).symbol.toLowerCase()}@2x.png`} width="30px"/>
            <h2>{coin.symbol}</h2>
            <h2>${parseFloat(coin.quotes.USD.price).toFixed(2)}</h2> 
            <h2  className={String(coin.quotes.USD.percent_change_24h).includes("-") ? "text-red-500" : "text-green-500"}>{coin.quotes.USD.percent_change_24h}%</h2> 
            </div>
       })}
    </div>

     <div className="coin-box flex flex-col  gap-2">
      {four.map((coin:any)=>{
        return <div className="flex gap-5" key={coin.symbol}>
            <img src={`https://assets.coincap.io/assets/icons/${(coin).symbol.toLowerCase()}@2x.png`} width="30px"/>
            <h2>{coin.symbol}</h2>
            <h2>${parseFloat(coin.quotes.USD.price).toFixed(2)}</h2> 
            <h2  className={String(coin.quotes.USD.percent_change_24h).includes("-") ? "text-red-500" : "text-green-500"}>{coin.quotes.USD.percent_change_24h}%</h2> 
            </div>
       })}
     </div>


     </div>

  )
}
export default TradeBoxes