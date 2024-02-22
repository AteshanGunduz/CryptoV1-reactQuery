import { useQuery } from "react-query"
import { fetchMorePrices } from "../../api/api"

const TradeHistory = () => {

  const {isLoading, data, isError}:any = useQuery(["morePrices"], fetchMorePrices)
  
  if (isLoading) {
    return <h2></h2>
  }

  if (isError) {  
    return <h2>There is a Problem 💩</h2>
  }

  

  return (
    <div className="history border text-white border-gray-500 flex flex-col p-1">

    <div className="font-semibold p-1 text-sm">Trade History</div>
    <div className="flex justify-around gap-8">
      <div>AMOUNT</div>
      <div>PRICE</div>
      <div>TIME</div>
    </div>
    {data.data.map((coin:any) => (
      <div key={coin.rank} className="flex justify-between gap-6 font-semibold text-xs">
        <div>0,2{parseFloat(coin.quotes.USD.volume_24h).toFixed(0)}</div>
        <div className={String(coin.quotes.USD.percent_change_24h).includes("-") ? "flex flex-col items-end w-11 text-red-500" : " flex flex-col items-end w-11 text-green-500"}>{parseFloat(coin.quotes.USD.price).toFixed(2)}</div>
        <div>{(coin.last_updated).slice(0,10)}</div>
      </div>
    ))}
  </div>
  )
}
export default TradeHistory