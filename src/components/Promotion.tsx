import { Link } from "react-router-dom"

const Promotion = () => {
  return (
    <div className='big flex flex-col m-12 p-10 items-center text-white'>
        <div className="text-5xl">
        
        <h2>Login to Get Rich 🚀</h2>
        <div className="mt-10">
        <h2> With</h2>
        <h2 className="text-yellow-300">456,984,956 </h2>
        <h2> Users</h2>
        </div>
        <input type="email" placeholder="Phone Number" className="text-xl mt-10"/>
          <div className="mt-10 text-yellow-300 text-3xl flex gap-5 font-bold">
          <Link to={"/login"}><h2>👉 Start Trading Now </h2></Link>
        </div>
        
        </div>
        
      
      </div>
  )
}
export default Promotion