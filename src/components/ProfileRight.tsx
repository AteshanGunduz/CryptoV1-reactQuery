import { useSelector } from "react-redux";

const ProfileRight = () => {

  const formData = useSelector((state: any) => state.formSlice.formData);



  return (
    <div className="text-white m-10 flex flex-col items-center w-full ">
      <div className="flex flex-col items-center gap-4">
        <div className=" flex flex-col gap-4 justify-center">
        <div className="img2"></div>
         <button>Change Avatar</button>
        </div>
        <h2>{formData.email}</h2>
        </div>
      <div>
      </div>

      <div className="flex flex-col gap-4 m-10">
      <label htmlFor="">Change Email</label>
      <input type="text" />
      <label htmlFor="">Change UserName</label>
      <input type="text" />
      </div>
      
  
      </div>
  )
}
export default ProfileRight