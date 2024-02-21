import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../features/profileSlice";

const ChartNav = () => {
  const formData = useSelector((state: any) => state.formSlice.formData);
  const profile = useSelector((state:any) => state.formSlice.profile)
  const dispatch = useDispatch();


  return (
    <div className=" flex items-center justify-between border border-gray-500 font-semibold">
      <div className="flex items-center gap-10 p-5">
        <button className="bg-gray-800 p-3 hover:bg-gray-700 rounded-xl">BTC-USD</button>
        <p> data.map row</p>
        <p> data.map row</p>
        <p> data.map row</p>
        <p> data.map row</p>
        </div>
        <div className="flex items-center gap-5 ">
         <div>{formData.email}</div>
         <div><img className="img2" onClick={()=> dispatch(setProfile(!profile))} /></div>
        </div>
      </div>
  )
}
export default ChartNav