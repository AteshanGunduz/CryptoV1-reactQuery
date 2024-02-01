
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Display from './components/Display'
import { BrowserRouter, Link } from 'react-router-dom';
import Prices from './components/Prices';
import { useContext } from 'react';
import UserContext from './state/useContext';
import LoginForm from './components/LoginForm';


const queryClient = new QueryClient()


function App() {

  const {handleLogin, loginPage}:any = useContext(UserContext)



  return (
    <div>
     <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div >
        <nav>
          <ul className='flex font-semibold text-gray-600'>
            <li>
              <Link to='/'>CryptoVola</Link>
            </li>
            <li>
              <Link to='/'>Market</Link>
            </li>
            <li>
              <Link to='/'>New Crypto</Link>
            </li>
          </ul>
          <ul  className='flex'>
            <button className='mr-6 p-3' onClick={handleLogin}>Login</button>
            <div></div>
          </ul>
        </nav>
    </div>
    <div className='flex justify-between items-start m-1'>
      <div className='m-20'>
     <Prices/>
     </div>
     <div className='mt-20'>
        {loginPage && (<LoginForm/>)}
      </div>
    <Display/>
    </div>
    </BrowserRouter>

    </QueryClientProvider>
    </div>
  )
}

export default App
