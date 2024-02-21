import { useContext, useState } from "react"
import UserContext from "../state/useContext"
import { Link } from "react-router-dom"
import Market from "./Market"
import NewCrypto from "./NewCrypto"
import { useDispatch, useSelector } from "react-redux"
import { setProfile } from "../features/profileSlice"

const Navbar = () => {
    const [market, setMarket] = useState(false)
    const [newCrypto, setNewCrypto] = useState(false)
  
    const {handleLogin}:any = useContext(UserContext)
    const profile = useSelector((state:any) => state.formSlice.profile)
    const dispatch = useDispatch();
    const formData = useSelector((state: any) => state.formSlice.formData);

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
      <ul  className='flex items-center'>
        {formData.email === "" ?  <Link to={"/login"}><li className='mr-6 p-3 text-yellow-300 text-lg font-bold hover:text-yellow-200' onClick={handleLogin}>Log In</li></Link> : <p className="profile-name text-white font-semibold mr-6 p-3">{formData.email}</p> }
        {formData.email === "" ? <div className="img1"></div> : <div onClick={()=> dispatch(setProfile(!profile))} className="img2"></div>}
      </ul>
    </nav>
    {market && <div onMouseLeave={() => setMarket(false)}><Market/></div>}
    {newCrypto && <div  onMouseLeave={() => setNewCrypto(false)}><NewCrypto/></div>}
</div> 
  )
}
export default Navbar