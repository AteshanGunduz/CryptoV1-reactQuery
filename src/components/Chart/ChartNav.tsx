import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../features/profileSlice";
import { useQuery } from "react-query";
import { fetchAvatarSeed, fetchMorePrices } from "../../api/api";
import { useContext } from "react";
import UserContext from "../../state/useContext";
import Cyrpto from "./Cyrpto";

const ChartNav = () => {
  const formData = useSelector((state: any) => state.formSlice.formData);
  const profile = useSelector((state:any) => state.formSlice.profile)
  const dispatch = useDispatch();

  const {handleCyrptoToggle, toggle, handelCyrptoClick, Cid}:any = useContext(UserContext)

  
  const {data: cyrpto}:any = useQuery(["morePrices"], fetchMorePrices)
  const {isLoading , data, isError}:any = useQuery(["seed"], ()=>fetchAvatarSeed(formData.firstName.slice(0,1),formData.lastName.slice(0,1)))

  if (isLoading) {
    return <h2></h2>
  }

  if (isError) {  
    return <h2>There is a Problem 💩</h2>
  }



  

  return (
    <nav className=" flex items-center justify-between  font-semibold ">
      <div className="flex items-center gap-10 p-5">
        <div className="">
        {Cid === "" ?   <button className="bg-gray-800 p-3 hover:bg-gray-700 rounded-xl flex w-28 justify-around" onClick={()=>handleCyrptoToggle()}><img src={`https://assets.coincap.io/assets/icons/${(cyrpto?.data[0]).symbol.toLowerCase()}@2x.png`} width="30px"/>
            <h2>{cyrpto?.data[0].symbol}</h2></button> : <Cyrpto/>}
      
    

         {toggle && (<div className="cyrpto-toggle bg-gray-900 ">
          {cyrpto?.data.map((coin:any)=>{
          return <div key={coin.id} className="">
            <button className="bg-gray-900 p-3 hover:bg-gray-700 rounded-xl flex w-28 justify-around" onClick={()=>handelCyrptoClick(coin.id)}>  <img src={`https://assets.coincap.io/assets/icons/${(coin).symbol.toLowerCase()}@2x.png`} width="30px"/>
            <h2>{coin.symbol}</h2></button>
          </div>
         })}
         </div>)}
       
         </div>
        
      
        </div>
        <div className="flex items-center gap-5 ">
         <div>{formData.firstName} {formData.lastName}</div>
         <div><img className="img2" src={data.config.url} onClick={()=> dispatch(setProfile(!profile))} /></div>
        </div>
      </nav>
  )
}
export default ChartNav