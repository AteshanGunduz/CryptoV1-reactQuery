import { useQuery } from "react-query";
import { fetchMorePrices } from "../../api/api";

const MorePrices = () => {

    const {isLoading, data, isError}:any = useQuery(["morePrices"], fetchMorePrices)

 
    if (isLoading) {
        return <h2></h2>
      }
    
      if (isError) {  
        return <h2>There is a Problem 💩</h2>
      }

      console.log(data);

  return (
    <div className="more-prices-container text-white gap-4">
       {data.data.map((cyrpto:any)=>{
        return <div className="flex flex-col" key={crypto.randomUUID()}>
            <div>{cyrpto.symbol}/USD</div>
            <div>{parseFloat(cyrpto.quotes.USD.price).toFixed(4)}</div>
        </div>
       })}
    </div>
  )
}
export default MorePrices