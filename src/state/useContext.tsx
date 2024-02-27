import {createContext, useState } from "react"



const UserContext = createContext({})

const MyProvider = ({children}:any) => {
   
  const [theId, setTheId] = useState("BTC-USD")
  const [loginPage, setLoginPage] = useState(false)
  const [Cid, setCid] = useState("")
  const [toggle, setToggle] = useState(false)

 const handleClick = (id:string)=>{
    setTheId(id)
    
  }

  const handleLogin = ()=>{
   setLoginPage(!loginPage)
  }

  const handleCyrptoToggle = ()=>{
    setToggle(!toggle)
  }

  const handelCyrptoClick = (id:string)=>{
    setCid(id)
    setToggle(false)
  }

  


  const valueToShare = {
    handleClick,
    theId,
    handleLogin,
    loginPage,
    Cid,
    handelCyrptoClick,
    handleCyrptoToggle,
    toggle
  }


  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  )
}

export default UserContext
export  {MyProvider}