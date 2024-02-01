import { Link } from "react-router-dom"

const Market = () => {
  return (
    <div className='pop-up-menus  text-white font-semibold z-10 bg-gray-900'>
        <div className="container-market flex justify-center items-center gap-4">
            <div>
              <Link to={"/"}>Spot 🚀</Link>
               <Link to={"/"}>Margin</Link>
               <Link to={"/"}>APIs</Link>

            </div>
            <div>
             <Link to={"/"}>P2P</Link>
             <Link to={"/"}>Trading Bots 🤖 </Link>
             <Link to={"/"}>Convert</Link>

            </div>
        </div>
         
    </div>
  )
}
export default Market