import { useContext } from "react"
import UserContext from "../state/useContext"
import { useQuery} from "react-query"
import { fetchCryptoID } from "../api/api"
import { useParams } from "react-router"
import { Link } from "react-router-dom"




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
    <div className="background-price">
       <div className="price-container flex justify-center items-center font-semibold gap-2 ">
        <h2 className="text-yellow-300">{data.data.symbol}</h2>
        <h4>${data.data.price_24h}</h4>
        <Link to={"/trade"}><button className="text-white text-sm border border-solid border-2 border-yellow-300 rounded-lg"> Go to Market</button></Link>
        </div>
        <div className='price-part text-white font-semibold'>
      <div>Market Update 2024 Verion 2.4</div>
      <div>Singapoure FSS Chief Industry US Chairman</div>
      <div>Strategic Funding Round With Participation From Sony</div>
      <div className='text-sm '>Learn More 💵 </div>
    </div>
    </div>
  )
}
export default Prices