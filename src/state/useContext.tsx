import {createContext, useState } from "react"



const UserContext = createContext({})

const MyProvider = ({children}:any) => {
   
  const [theId, setTheId] = useState("BTC-USD")
  const [loginPage, setLoginPage] = useState(false)

 const handleClick = (id:string)=>{
    setTheId(id)
    
  }

  const handleLogin = ()=>{
   setLoginPage(!loginPage)
  }

  


  const valueToShare = {
    handleClick,
    theId,
    handleLogin,
    loginPage
  }


  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  )
}

export default UserContext
export  {MyProvider}