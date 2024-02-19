import { Link } from "react-router-dom"

const ProfileLeft = () => {
  return (
    <div className="profile-left text-white font-semibold">
      <Link to={"/profilemanager/"}><h2>Profile Management</h2></Link>
      <Link to={"/profilemanager/account-details"}><h2>Account Details</h2></Link>
      <Link to={"/profilemanager/deposit"}> <h2>Deposit to Wallet</h2></Link>
      <Link to={"/profilemanager/security"}><h2>Security & Encryption</h2></Link>
      <Link to={"/profilemanager/swap"}><h2>Swap Options</h2></Link>
      <Link to={"/profilemanager/withdrawal"}> <h2>Withdrawal 💵</h2></Link>
      <Link to={"/profilemanager/settings"}> <h2>Settings ⚙️</h2></Link>
    </div>
  )
}
export default ProfileLeft