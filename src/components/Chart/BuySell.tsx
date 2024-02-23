const BuySell = () => {
  return (
    <div className="bsell flex flex-col gap-5 items-center p-2 font-semibold text-sm">

      <h2>USD-BTC</h2>
    
      <div className="flex gap-2 justify-center w-full">
        <button className="p-4 bg-gray-500">Buy</button><button className="p-4 bg-gray-500">Sell</button>
      </div>

      <div className="flex flex-col items-center gap-5">

     
      <div className="flex gap-2 justify-center">
        <button>LIMIT</button><button>MARKET</button><button>STOP LIMIT</button>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2">
        <h2>LIMIT PRICE</h2>
        <input type="text" />
        </div>
        <div className="flex gap-2 justify-center">
          <button>MID</button><button>BID</button><button>1%⬇️</button><button>5%⬇️</button>
        </div>
        <div className="flex gap-2">
        <h2>AMOUNT</h2>
        <input type="text" />
        <button>usd</button>
        </div>
        <div className="flex gap-2 justify-center">
          <button>25%</button><button>50%</button><button>MAX</button>
        </div>
      </div>
      
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 justify-center">
          <h1>PAY WITH</h1>
          <p>USDC</p>
        </div>
        <div className="flex gap-2 justify-center">
          <h1>EXECUTION</h1>
          <button>Allow taker</button>
        </div>
        <div className="flex gap-2 justify-center">
          <h1>TIME IN FORCE</h1>
          <button>Good Til Cancelled</button>
        </div>
      </div>

      
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 justify-center">
          <h1>SUBTOTAL</h1>
          <p>--</p>
        </div>
        <div className="flex gap-2 justify-center">
          <h1>EST.FEE</h1>
          <p>--</p>
        </div>
        <div className="flex gap-2 justify-center">
          <h1>TOTAL</h1>
          <p>--</p>
        </div>
      </div>

      <div>
        <button>Add funds to contintue</button>
      </div>

      












       </div>
  )
}
export default BuySell