const SideMenu = () => {
  return (
    <div className="flex flex-col gap-10 p-5 border border-gray-500 font-semibold">
    <div className="flex flex-col items-center hover:bg-gray-700 p-1 rounded-xl">©️</div>
    <div className="flex flex-col items-center hover:bg-gray-700 p-1 rounded-xl"><div>💵</div><div>Spot</div> </div>
    <div className="flex flex-col items-center hover:bg-gray-700 p-1 rounded-xl"><div>📊</div><div>Futures</div></div>
    <div className="flex flex-col items-center hover:bg-gray-700 p-1 rounded-xl"><div>🐖</div><div>Porfolio</div></div>
    <div className="flex flex-col items-center hover:bg-gray-700 p-1 rounded-xl"><div>👩🏻‍🔧</div><div>Orders</div></div>
    <div className="flex flex-col items-center hover:bg-gray-700 p-1 rounded-xl"><div>💰</div><div>Earn</div></div>
    <div className="flex flex-col items-center hover:bg-gray-700 p-1 rounded-xl"><div>⚙️</div><div>More</div></div>
    </div>
  )
}
export default SideMenu