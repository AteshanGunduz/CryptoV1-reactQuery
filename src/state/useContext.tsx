import {createContext, useState } from "react"



const UserContext = createContext({})

const MyProvider = ({children}:any) => {
   
  const [theId, setTheId] = useState("BTC-USD")

 const handleClick = (id:string)=>{
    setTheId(id)
    
  }


  const valueToShare = {
    handleClick,
    theId
  }


  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  )
}

export default UserContext
export  {MyProvider}