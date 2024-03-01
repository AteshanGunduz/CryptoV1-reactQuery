import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchAvatarSeed } from "../../api/api";

const ProfileRight = () => {

  const formData = useSelector((state: any) => state.formSlice.formData);
  const {data}:any = useQuery(["seed"], ()=>fetchAvatarSeed(formData.firstName.slice(0,1),formData.lastName.slice(0,1)))


  return (
    <div className="text-white m-10 flex flex-col items-center w-full gap-4">
      <div className="mb-10 text-lg font-semibold">Profile Info</div>
      <div className="flex items-center justify-center items-center gap-4 w-full font-semibold">
        <div className=" flex justify-start items-center text-sm">
        <div><img className="img2" src={data.config.url} /></div>
        <h2>{formData.email}</h2>
        </div>
        <button className="ml-3 hover:text-gray-200">Change Avatar</button>
        </div>
      <div>
      </div>

      <div className="mt-10 flex flex-col gap-5 w-full font-semibold text-sm">
      
      <div className="flex justify-between"><h2>Display Name</h2> <p>{formData.firstName} {formData.lastName}</p></div>
      <div className="flex justify-between"><h2>Email Address</h2><p>{formData.email}</p></div>
      <div className="flex justify-between items-center">
        <div>
          <h2>Crypto Addresses</h2>
          <p>For Individual and Exchange Accounts</p>
        </div>
        map.account owned crypto images
      </div>
      </div>
    

  
  
      </div>
  )
}
export default ProfileRight