import { useContext, useState } from "react"
import { useQuery } from "react-query"
import UserContext from "../../state/useContext"
import { fetchMorePrices, fetchMorePricesID } from "../../api/api"
import Buy from "./Buy"
import Sell from "./Sell"



const BuySell = () => {

  const {Cid}:any = useContext(UserContext)
  const {data: coin}:any = useQuery(["morePrices", Cid],()=> fetchMorePricesID(Cid))
  const {data: cyrpto}:any = useQuery(["morePrices"], fetchMorePrices)
  const [toggle, setToggle] = useState(true)


  return (
    <div className="bsell flex flex-col gap-5 items-center mt-2 p-2 font-semibold text-sm">

{Cid === "" ? <h2 className="flex items-center gap-2"><img src={`https://assets.coincap.io/assets/icons/${(cyrpto?.data[0]).symbol.toLowerCase()}@2x.png`} width="30px"/><h2>{cyrpto?.data[0].symbol} / USDC</h2> </h2>:

      <h2 className="flex items-center gap-2"><img src={`https://assets.coincap.io/assets/icons/${coin?.data.symbol.toLowerCase()}@2x.png`} width="30px"/>  <h2>{coin?.data.symbol} / USDC</h2></h2> }
    
      <div className="flex  justify-center w-full">
        <button className={`p-4 bg-gray-800 w-full hover:text-green-500 ${toggle && "border-t border-green-500"}` } onClick={()=>setToggle(true)}>Buy</button><button className={`p-4 bg-gray-800 w-full ${!toggle && "border-t border-red-500"}  hover:text-red-500`} onClick={()=>setToggle(false)}>Sell</button>
      </div>

      <div className="bs flex flex-col items-center gap-5">
      {toggle ? <Buy/> : <Sell/>}

   
   </div>


       </div>
  )
}
export default BuySell