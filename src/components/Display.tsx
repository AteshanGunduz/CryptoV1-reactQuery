import { useQuery } from "react-query"
import { fetchCrypto } from "../api/api"
import { useContext } from "react"
import UserContext from "../state/useContext"





const Display = () => {
  const {isLoading, data, isError} = useQuery("cyrpto", fetchCrypto)
  const {handleClick}:any = useContext(UserContext)
  


  if (isLoading) {
      return <h2>Loading...</h2>
    }
  
    if (isError) {  
      return <h2>There is a Problem 💩</h2>
    }
  
 



  return (
    <div className="the-container flex flex-col justify-evenly items-start gap-2 p-2">
      {data?.data.map((cyrpto: any)=>{
        return <div key={cyrpto.symbol} className="text-gray-600 p-1 " >
          <button className="font-semibold p-3" onClick={()=>handleClick(cyrpto.symbol)}>{cyrpto.symbol}</button>
          </div>
      })}
    </div>
  )
}
export default Display