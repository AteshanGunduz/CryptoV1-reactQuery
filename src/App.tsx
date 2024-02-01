
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Display from './components/Display'
import { BrowserRouter, Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Prices from './components/Prices';
import { useContext } from 'react';
import UserContext from './state/useContext';
import LoginForm from './components/LoginForm';



function App() {

  const {handleLogin, loginPage}:any = useContext(UserContext)



  return (
    <div>
    <div >
        <nav>
          <ul className='flex font-semibold text-gray-600'>
            <li>
              <Link to=''>CryptoVola</Link>
            </li>
            <li>
              <Link to='/'>Market</Link>
            </li>
            <li>
              <Link to='/'>New Crypto</Link>
            </li>
          </ul>
          <ul  className='flex'>
            <Link to={"/login"}><li className='mr-6 p-3 font-semibold' onClick={handleLogin}>Click to Login</li></Link>
            <div></div>
          </ul>
        </nav>
    </div>
    <div className='side flex justify-between'>
    <div></div>
    <Outlet/>
    <Display/>
   
     </div>
   
</div>
   
  )
}

export default App
