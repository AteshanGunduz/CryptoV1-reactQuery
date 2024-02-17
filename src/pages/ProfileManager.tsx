
import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import ProfileLeft from "../components/ProfileLeft"




const ProfileManager = () => {


  return (
      <div className="bg-gray-900">
           <Navbar/>
           <div className="p-con flex justify-center">
           <div className="prof-container flex">
           <ProfileLeft/>
           <div className="text-white">
           <Outlet />
           </div>
           
           </div>
           </div>
      </div>
  )
}
export default ProfileManager