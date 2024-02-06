
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
        <div className="m-5">
        <h1>Markets Overview <span>Trading Data</span></h1>
        </div>
        <div className="flex gap-10 m-10">
        <TradeBoxes/>
        </div>
        <TradeNav/>
        <div>
            <h2>Top Token Market Capitilization</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iste!</p>
            <button>Show More</button>
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