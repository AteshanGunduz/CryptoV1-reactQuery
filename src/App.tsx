
import './App.css'
import Display from './components/LoginPage/Display'
import {Outlet} from 'react-router-dom';
import Promotion from './components/LoginPage/Promotion';
import MorePrices from './components/LoginPage/MorePrices';
import Navbar from './components/Navbar';
import Profiles from './components/Profile/Profiles';
import { useSelector } from 'react-redux';
import Charts from './pages/Charts';




function App() {
 
  const profile = useSelector((state:any) => state.formSlice.profile);
  const formData = useSelector((state: any) => state.formSlice.formData);

  return (
    <div className='app bg-gray-900'>
    {profile && (<Profiles/>)}
    {!formData.email ?
    (<div>
      <Navbar/>
     <div className='side flex justify-between items-center z-0'>
     <Promotion/>
     <Outlet/>
     <Display/>
     </div>
     <MorePrices/>
     </div>
     ): <Charts/>
    }  
   </div>
   
  )
}

export default App
