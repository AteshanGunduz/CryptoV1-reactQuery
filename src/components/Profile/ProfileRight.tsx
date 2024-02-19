import { useSelector } from "react-redux";

const ProfileRight = () => {

  const formData = useSelector((state: any) => state.formSlice.formData);



  return (
    <div className="text-white m-10 flex flex-col items-center w-full ">
      <div className="flex items-center justify-center items-center gap-4 w-full">
        <div className=" flex  gap-4 justify-center items-center">
        <div className="img2"></div>
        <h2>{formData.email}</h2>
        </div>
        <button>Change Avatar</button>
        </div>
      <div>
      </div>

      <div className="mt-10 flex flex-col gap-5 w-full">
      <div>Profile Info</div>
      <div className="flex justify-between"><h2>Display Name</h2> <p>name</p></div>
      <div className="flex justify-between"><h2>Email Address</h2><p>{formData.email}</p></div>
      <div className="flex justify-between items-center">
        <div>
          <h2>Crypto Addresses</h2>
          <p>For Individual and Exchange Accounts</p>
        </div>
        map.account crypto images
      </div>
      </div>
    

  
  
      </div>
  )
}
export default ProfileRight