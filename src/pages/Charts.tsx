

import { useSelector } from "react-redux"
import BuySell from "../components/Chart/BuySell"
import ChartNav from "../components/Chart/ChartNav"
import SideMenu from "../components/Chart/SideMenu"
import Profiles from "../components/Profile/Profiles"
import TradingWiew from "../components/TradingWiew"
import TradeHistory from "../components/Chart/TradeHistory"
import Orders from "../components/Chart/Orders"



const Charts = () => {
  const profile = useSelector((state:any) => state.formSlice.profile);

  return (
    <div className="charts w-full text-white flex justify-between relative bg-gray-900 z-0">
      <SideMenu/>
      <div className="flex-col  w-full border border-gray-500">
 
   <div>
   <ChartNav/>
   </div>
    
  
     
      {profile && (<Profiles/>)}
      <main className="flex">
        <div className="tradingchart flex flex-col">
        <TradingWiew/>
        <Orders/>
        </div>
        <TradeHistory/>
        <BuySell/>
      </main>
      </div>
    </div>
  )
}
export default Charts