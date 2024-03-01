import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchAvatarSeed } from "../../api/api";






const AccountDetails = () => {
  const formData = useSelector((state: any) => state.formSlice.formData);
  const {}:any = useQuery(["seed"], ()=>fetchAvatarSeed(formData.firstName.slice(0,1),formData.lastName.slice(0,1)))



  return (
    <div className="text-white w-full">
     
      <div className="mt-10 flex flex-col gap-5 w-full">
      <div> AccountDetails</div>
      <div className="flex justify-between"><h2>Legal Name</h2> <p>name</p></div>
      <div className="flex justify-between"><h2>Date of Birth</h2><p>19xx</p></div>
      <div className="flex justify-between"><h2>Address</h2><p>Turkey</p></div>
      <div className="flex justify-between"><h2>Privacy Policy</h2></div>
      </div>

      
    
    
    <div className="flex flex-col gap-4 m-10">
      <label htmlFor="">Change Email</label>
      <input type="text" />
      <label htmlFor="">Change UserName</label>
      <input type="text" />
      </div>
      

      <div>
        <div>
          <h2>Close Account</h2>
          <p>Closing your account cant be undone. Please make sure your account balance is $0.00 before you begin</p>
        </div>
        <button>Close Account</button>
      </div>
    </div>




  )
}
export default AccountDetails