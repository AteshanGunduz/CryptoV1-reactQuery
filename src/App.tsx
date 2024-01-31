
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Display from './components/Display'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Prices from './components/Prices';


const queryClient = new QueryClient()


function App() {

  return (
    <div>
     <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div >
        <nav>
          <ul className='flex font-semibold text-gray-600'>
            <li>
              <Link to='/'>CyrpotoVola</Link>
            </li>
            <li>
              <Link to='/'>Market</Link>
            </li>
            <li>
              <Link to='/'>New Cyrpto</Link>
            </li>
          </ul>
          <ul>
            <div></div>
          </ul>
        </nav>
    </div>
    <div className='flex justify-between items-center m-1'>
      <div className='m-20'>
     <Prices/>
     </div>
    <Display/>
    </div>
    </BrowserRouter>

    </QueryClientProvider>
    </div>
  )
}

export default App
