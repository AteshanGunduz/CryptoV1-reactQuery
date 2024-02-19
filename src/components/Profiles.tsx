import { useDispatch, useSelector } from "react-redux";
import { clearFormData, setProfile } from "../features/profileSlice";
import { Link, Outlet } from "react-router-dom";

const Profiles = () => {

  const profile = useSelector((state:any) => state.formSlice.profile)

  const dispatch = useDispatch();

 
    const handleLogOut = ()=>{
      dispatch(clearFormData());
      dispatch(setProfile(!profile))
    }

  return (
    <div className="profiles rounded-lg text-white font-semibold z-10 bg-gray-900">
      <Link to={"/profilemanager"}><h2>Profile Management</h2></Link>
      <Link to={"/profilemanager/account-details"}><h2>Account Details</h2></Link>
      <Link to={"/profilemanager/deposit"}> <h2>Deposit to Wallet</h2></Link>
      <Link to={"/profilemanager/security"}><h2>Security & Encryption</h2></Link>
      <Link to={"/profilemanager/swap"}><h2>Swap Options</h2></Link>
      <Link to={"/profilemanager/withdrawal"}> <h2>Withdrawal 💵</h2></Link>
      <Link to={"/profilemanager/settings"}> <h2>Settings ⚙️</h2></Link>
       <button onClick={handleLogOut}>Log-Out 🎒</button>
    </div>
  );
};

export default Profiles;