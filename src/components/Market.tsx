import { Link } from "react-router-dom"

const Market = () => {
  return (
    <div className='pop-up-menus m-1 rounded-lg text-white font-semibold z-10 bg-gray-900'>
        <div className="container-market flex justify-center items-center gap-4">
            <div>
              <Link to={"/trade"}>Spot 🚀</Link>
               <Link to={"/trade"}>Margin</Link>
               <Link to={"/trade"}>APIs</Link>

            </div>
            <div>
             <Link to={"/trade"}>P2P</Link>
             <Link to={"/trade"}>Trading Bots 🤖 </Link>
             <Link to={"/trade"}>Convert</Link>

            </div>
        </div>
         
    </div>
  )
}
export default Market