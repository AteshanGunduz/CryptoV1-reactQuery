import { useContext } from "react"
import UserContext from "../state/useContext"
import { useQuery} from "react-query"
import { fetchCryptoID } from "../api/api"
import { useParams } from "react-router"



const Prices = () => {

    const {theId}:any = useContext(UserContext)

    const {isLoading, data, isError}:any = useQuery(["cyrptoId", theId], ()=>fetchCryptoID(theId))

    const params = useParams()
      console.log(params);

    if (isLoading) {
        return <h2></h2>
      }
    
      if (isError) {  
        return <h2>There is a Problem 💩</h2>
      }

      console.log(data);
    
  return (
    <div>
       <div className="price-container flex flex-col justify-center items-center font-semibold gap-2 mt-4">
        <h2>{data.data.symbol}</h2>
        <h4>Price: {data.data.price_24h}</h4>
        <h4>Volume: {data.data.volume_24h}</h4>
        <h4>Last Trade Price: {data.data.last_trade_price}</h4>
        </div>
    </div>
  )
}
export default Prices