const Sell = () => {
  return (
    <div className="flex flex-col gap-4 text-sm">
         <div>   
      <div className="flex gap-3 justify-center text-xs mb-3">
        <button>LIMIT</button><button>MARKET</button><button>STOP LIMIT</button>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-2">
        <h2>LIMIT PRICE</h2>
        <input type="text" />
        </div>
        <div className="flex gap-2 justify-center text-xs">
          <button>MID</button><button>ASK</button><button>1%⬆️</button><button>5%⬆️</button>
        </div>
        <div className="flex gap-2">
        <h2>AMOUNT</h2>
        <input type="text" />
        <button>usd</button>
        </div>
        <div className="flex gap-2 justify-center text-xs">
          <button>25%</button><button>50%</button><button>MAX</button>
        </div>
      </div>
      
      </div>

      <div className="flex flex-col gap-5 border border-gray-700 p-2 ">
        <div className="flex gap-2 justify-between">
          <h1>ADD CASH TO</h1>
          <p>USDC</p>
        </div>
        <div className="flex gap-2 justify-between">
          <h1>EXECUTION</h1>
          <button>Allow taker</button>
        </div>
        <div className="flex gap-2 justify-between">
          <h1>TIME IN FORCE</h1>
          <button>Good Til Cancelled</button>
        </div>
      </div>

      
      <div className="flex flex-col gap-5 border border-gray-700 p-2 ">
        <div className="flex gap-2 justify-between">
          <h1>SUBTOTAL</h1>
          <p>--</p>
        </div>
        <div className="flex gap-2 justify-between">
          <h1>EST.FEE</h1>
          <p>--</p>
        </div>
        <div className="flex gap-2 justify-between">
          <h1>TOTAL</h1>
          <p>--</p>
        </div>
      </div>

      <div className=" text-center">
        <button  className="bg-blue-600 p-2 rounded-xl">Add funds to contintue</button>
      </div>
    </div>
  )
}
export default Sell