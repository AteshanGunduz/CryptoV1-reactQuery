import { Link } from "react-router-dom"


export const NotFoundPage = () => {
  return (
    <div className='font-semibold m-20'>
       <h1> Something went wrong 💩 404</h1>
       <Link to="/">Go Back to Home 👆</Link>
        
    </div>
  )
}