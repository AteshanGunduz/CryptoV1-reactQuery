import BuySell from "../components/Chart/BuySell"
import ChartNav from "../components/Chart/ChartNav"
import OrderBook from "../components/Chart/OrderBook"
import SideMenu from "../components/Chart/SideMenu"
import TheChart from "../components/Chart/TheChart"
import TradeHistory from "../components/Chart/TradeHistory"

const Charts = () => {
  return (
    <div className="text-white flex">
      <SideMenu/>
      <div className="flex-col border border-gray-500">
      <ChartNav/>
      <main className="flex gap-1">
        <TheChart/>
        <OrderBook/>
        <TradeHistory/>
        <BuySell/>
      </main>
      </div>
    </div>
  )
}
export default Charts