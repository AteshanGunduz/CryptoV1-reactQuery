import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../features/profileSlice";
import { useQuery } from "react-query";
import { fetchAvatarSeed } from "../../api/api";

const ChartNav = () => {
  const formData = useSelector((state: any) => state.formSlice.formData);
  const profile = useSelector((state:any) => state.formSlice.profile)
  const dispatch = useDispatch();




  const {isLoading , data, isError}:any = useQuery(["seed"], ()=>fetchAvatarSeed(formData.firstName.slice(0,1),formData.lastName.slice(0,1)))

  if (isLoading) {
    return <h2></h2>
  }

  if (isError) {  
    return <h2>There is a Problem 💩</h2>
  }

  

  return (
    <nav className=" flex items-center justify-between  font-semibold">
      <div className="flex items-center gap-10 p-5">
        <button className="bg-gray-800 p-3 hover:bg-gray-700 rounded-xl">BTC-USD</button>
        <p> data.map row</p>
        <p> data.map row</p>
        <p> data.map row</p>
        <p> data.map row</p>
        </div>
        <div className="flex items-center gap-5 ">
         <div>{formData.firstName} {formData.lastName}</div>
         <div><img className="img2" src={data.config.url} onClick={()=> dispatch(setProfile(!profile))} /></div>
        </div>
      </nav>
  )
}
export default ChartNav