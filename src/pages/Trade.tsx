
import TradeBoxes from "../components/TradeBoxes"
import TradeGoods from "../components/TradeGoods"
import TradeNav from "../components/TradeNav"

import Navbar from "../components/Navbar"




const Trade = () => {



  return (
    <div className="bg-gray-900">
           <Navbar/>
    <div className="trade  text-white flex flex-col">
        <div className="trade-container">
        <div className="m-5 font-bold mt-10">
        <h1 className=" text-2xl">Markets Overview <span className="text-gray-400 text-xl">Trading Data</span></h1>
        </div>
        <div className="flex gap-10 m-5">
        <TradeBoxes/>
        </div>
        <TradeNav/>
        <div className="nav-text m-8 font-semibold">
            <h2 className="text-xl p-1">Top Token Market Capitilization</h2>
            <p className="text-sm p-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iste!</p>
            <button className="p-1">Show More</button>
        </div>
        <div>
            <TradeGoods/>
        </div>
        </div>
   </div>
   </div>
  )
}
export default Trade