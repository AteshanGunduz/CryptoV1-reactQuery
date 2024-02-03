import { Link } from "react-router-dom"

import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCountryCode } from "../api/api";

const Promotion = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSelect, setIsSelect] = useState(false)
  const [selectedDial, setSelectedDial] = useState("")

  const {data, isLoading, isError}:any = useQuery("code", fetchCountryCode)

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>Error fetching data</div>
  }

  const handleInputChange = (e: any) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    let formattedValue = numericValue.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    setInputValue(formattedValue);
  };

  const handleCustomSelect = ()=>{
    setIsSelect(!isSelect)
  }


  const handleDial = (dial1: any,dial:any) =>{
   setSelectedDial(dial1 + dial)
   setIsSelect(false)
  }



  return (
    <div className='big flex flex-col m-12 p-10 items-center text-white'>
        <div className="text-5xl">
        
        <h2>Login to Get Rich 🚀</h2>
        <div className="mt-10">
        <h2> With</h2>
        <h2 className="text-yellow-300">456,984,956 </h2>
        <h2> Users</h2>
        </div>

        <div className="phone text-gray-600 text-xl">
        <button onClick={handleCustomSelect}>{selectedDial? selectedDial : "Dial Code" }</button>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Phone Number" maxLength={10} className="text-xl"/>
        </div>

        {isSelect && ( <div className="codes flex flex-col justif-center items-center bg-gray-900">
        {data.map((phon:any)=>{
          return <button key={phon.cca2} onClick={()=>handleDial(phon.idd.root, phon.idd && phon.idd.suffixes && phon.idd.suffixes.length > 0 ? phon.idd.suffixes[0] : "")} className="text-white flex items-center gap-1 m-1 hover:bg-transparent">
            <img src={phon.flags.png}
           width="35px" />
          {phon.idd.root}{phon.idd && phon.idd.suffixes && phon.idd.suffixes.length > 0 ? phon.idd.suffixes[0] : ""}</button>
        })}
         </div>)}
       

          <div className="mt-10 text-yellow-300 text-3xl flex gap-5 font-bold">
          <Link to={"/login"}><h2>👉 Start Trading Now </h2></Link>
        </div>
        
        </div>
        
      
      </div>
  )
}
export default Promotion