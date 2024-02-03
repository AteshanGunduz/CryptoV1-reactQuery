
import './App.css'
import Display from './components/Display'
import { Link, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from './state/useContext';
import Market from './components/Market';
import NewCrypto from './components/NewCrypto';
import Promotion from './components/Promotion';
import MorePrices from './components/MorePrices';



function App() {
  const [market, setMarket] = useState(false)
  const [newCrypto, setNewCrypto] = useState(false)

  const {handleLogin}:any = useContext(UserContext)



  return (
    <div className='app bg-gray-900'>
    <div >
        <nav>
          <ul className='flex font-semibold text-gray-600'>
            <li >
              <Link to=''>CryptoVola</Link>
            </li>
            <li onMouseEnter={() => setMarket(true)}>
              <Link to='/'>Market</Link>
            </li>
            <li onMouseEnter={() => setNewCrypto(true)}>
              <Link to='/'>New Crypto</Link>
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
    
    <div className='side flex justify-between items-center z-0'>
    <Promotion/>
    <Outlet/>
    <Display/>
     </div>
     <MorePrices/>
   
</div>
   
  )
}

export default App
