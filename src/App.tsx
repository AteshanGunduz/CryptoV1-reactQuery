
import './App.css'
import Display from './components/Display'
import {Outlet} from 'react-router-dom';
import Promotion from './components/Promotion';
import MorePrices from './components/MorePrices';
import Navbar from './components/Navbar';
import Profiles from './components/Profiles';
import { useSelector } from 'react-redux';
import Charts from './pages/Charts';



function App() {
 
  const profile = useSelector((state:any) => state.formSlice.profile);
  const formData = useSelector((state: any) => state.formSlice.formData);

  return (
    <div className='app bg-gray-900'>
    <Navbar/>
    {profile && (<Profiles/>)}
    <div className='side flex justify-between items-center z-0'>
    {!formData.email ?
    <div>
     <Promotion/>
     <Outlet/>
     <Display/>
     <MorePrices/>
    </div>
    : <Charts/>
    }
   
     </div>
     
   
</div>
   
  )
}

export default App
