import { Link } from "react-router-dom"

const NewCrypto = () => {
  return (
    <div className="new-crypto z-10 bg-gray-900">
       <div className="flex flex-col justify-center items-center gap-3 text-white font-semibold">
        <Link to={"/"}><p>🥔 PotatoCoin</p></Link>
        <Link to={"/"}><p>🥕 CarrotCoin</p></Link>
        <Link to={"/"}><p>🍅 TomatoCoin</p></Link>
        <Link to={"/"}><p>🥒 PickleCoin</p></Link>
       </div>
    </div>
  )
}
export default NewCrypto