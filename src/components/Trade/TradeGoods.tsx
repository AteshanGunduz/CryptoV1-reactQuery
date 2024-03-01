import { UseQueryResult, useQuery, useQueryClient } from "react-query"
import { fetchTickers } from "../../api/api"
import { useEffect, useRef, useState } from "react";

const TradeGoods = () => {
  const queryClient = useQueryClient();

  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)

  const { data, isLoading, isError }: UseQueryResult<any>  = useQuery(['tickers', start, end], ()=>fetchTickers(start,end));
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [data]);
  
  if (isLoading) {
    return <h2></h2>
  }

  if (isError) {  
    return <h2>There is a Problem 💩</h2>
  }
  const handleButtonClick = () => {
    setStart((prev) => prev + 10);
    setEnd((prev) => prev + 10);

    const key = ['tickers', start + 10, end + 10]; 
    queryClient.invalidateQueries(key, { refetchActive: true });
  };


  const formatNumber = (value:any) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      compactDisplay: 'short',
      maximumSignificantDigits: 3,
    });
  
    return formatter.format(value);
  };

  return (
    <div className="price-con m-5 p-2 ">
       
        <div className="flex flex-col gap-3 p-5">
        <div className="con-nav flex gap-10 p-3 pr-10 pl-10 justify-between font-semibold">
            <div>Name</div>
            <div className="ml-14">Price</div>
            <div className="ml-10">Change</div>
            <div>24Volume</div>
            <div>MarketCap</div>
            <div>Action</div>
        </div>
          {data.map((coin:any)=>{
            return <div className="side-coin flex gap-10 p-3 pr-10 pl-10 justify-between " key={coin.symbol}>
              <div className="flex gap-3 ">
             <img src={`https://assets.coincap.io/assets/icons/${(coin).symbol.toLowerCase()}@2x.png`} width="30px"/>
            <h2>{coin.symbol}</h2>
            </div>
            <h2>${parseFloat(coin.quotes.USD.price).toFixed(2)}</h2> 
            <h2 className={String(coin.quotes.USD.percent_change_24h).includes("-") ? "text-red-500" : "text-green-500"}>{coin.quotes.USD.percent_change_24h}%</h2> 
            <h2>{formatNumber(parseFloat(coin.quotes.USD.volume_24h).toFixed(0))}</h2>
            <h2>{formatNumber(parseFloat(coin.quotes.USD.market_cap).toFixed(0))}</h2>
            <div className="flex gap-5">
                <button>💵</button>
                <button>🚀</button>
            </div>
            </div>
          })}
        </div>
        <div className="flex justify-center mr-9" >
        <button className="p-2 font-semibold mb-10" onClick={handleButtonClick}>Show More</button>
        </div>
        <div ref={bottomRef}></div>
     
    </div>
  )
}
export default TradeGoods