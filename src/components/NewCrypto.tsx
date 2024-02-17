import { Link } from "react-router-dom"

const NewCrypto = () => {
  return (
    <div className="new-crypto ml-6 m-1 rounded-lg z-10 bg-gray-900">
       <div className="flex justify-center items-center gap-6 text-white font-semibold">
        <Link to={"/trade"}><p>🥔 PotatoCoin</p></Link>
        <Link to={"/trade"}><p>🥕 CarrotCoin</p></Link>
        <Link to={"/trade"}><p>🍅 TomatoCoin</p></Link>
        <Link to={"/trade"}><p>🥒 PickleCoin</p></Link>
       </div>
    </div>
  )
}
export default NewCrypto