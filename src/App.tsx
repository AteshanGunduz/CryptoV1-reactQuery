
import './App.css'
import Display from './components/Display'
import {Outlet} from 'react-router-dom';
import Promotion from './components/Promotion';
import MorePrices from './components/MorePrices';
import Navbar from './components/Navbar';



function App() {
 

  return (
    <div className='app bg-gray-900'>
    <Navbar/>
    
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
