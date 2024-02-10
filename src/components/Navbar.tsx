import { useContext, useState } from "react"
import UserContext from "../state/useContext"
import { Link } from "react-router-dom"
import Market from "./Market"
import NewCrypto from "./NewCrypto"


const Navbar = () => {
    const [market, setMarket] = useState(false)
    const [newCrypto, setNewCrypto] = useState(false)
  
    const {handleLogin}:any = useContext(UserContext)
  

  return (
    <div >
    <nav>
      <ul className='flex font-semibold text-gray-600'>
        <li className="li1" >
          <Link to='/'>CryptoVola</Link>
        </li>
        <li onMouseEnter={() => setMarket(true)}>
          <Link to='/trade'>Market</Link>
        </li>
        <li className="li2" onMouseEnter={() => setNewCrypto(true)}>
          <Link to='/trade'>New Crypto</Link>
        </li>
      </ul>
      <ul  className='flex'>
        <Link to={"/login"}><li className='mr-6 p-3 font-semibold' onClick={handleLogin}>Click to Login</li></Link>
        <div></div>
      </ul>
    </nav>
    {market && <div onMouseLeave={() => setMarket(false)}><Market/></div>}
    {newCrypto && <div  onMouseLeave={() => setNewCrypto(false)}><NewCrypto/></div>}
</div> 
  )
}
export default Navbar