import { useDispatch, useSelector } from "react-redux";
import { clearFormData, setProfile } from "../features/profileSlice";

const Profiles = () => {
  const formData = useSelector((state: any) => state.formSlice.formData);
  const profile = useSelector((state:any) => state.formSlice.profile)

  const dispatch = useDispatch();

 
    const handleLogOut = ()=>{
      dispatch(clearFormData());
      dispatch(setProfile(!profile))
    }

  return (
    <div className="profiles rounded-lg text-white font-semibold z-10 bg-gray-900">
      <p className="mb-5">{formData.email}</p>
      <h2>Profile Management</h2>
      <h2>Account Details</h2>
      <h2>Deposit to Wallet</h2>
      <h2>Security & Encryption</h2>
      <h2>Swap Options</h2>
      <h2>Withdrawal 💵</h2>
      <h2>Settings ⚙️</h2>
      <button onClick={handleLogOut}>Log-Out 🎒</button>
    </div>
  );
};

export default Profiles;