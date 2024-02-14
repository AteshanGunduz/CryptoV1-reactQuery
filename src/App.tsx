
import './App.css'
import Display from './components/Display'
import {Outlet} from 'react-router-dom';
import Promotion from './components/Promotion';
import MorePrices from './components/MorePrices';
import Navbar from './components/Navbar';
import Profiles from './components/Profiles';
import { useSelector } from 'react-redux';



function App() {
 
  const profile = useSelector((state:any) => state.formSlice.profile);

  return (
    <div className='app bg-gray-900'>
    <Navbar/>
    {profile && (<Profiles/>)}
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
