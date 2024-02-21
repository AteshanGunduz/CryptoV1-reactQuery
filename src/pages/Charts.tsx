

import BuySell from "../components/Chart/BuySell"
import ChartNav from "../components/Chart/ChartNav"
import SideMenu from "../components/Chart/SideMenu"
import TradingWiew from "../components/TradingWiew"



const Charts = () => {


  return (
    <div className="text-white flex justify-center relative ">
      <SideMenu/>
      <div className="flex-col border border-gray-500">
      <ChartNav/>
      <main className="flex gap-1">
        <div className="tradingchart">
        <TradingWiew/>
        </div>
        <BuySell/>
      </main>
      </div>
    </div>
  )
}
export default Charts