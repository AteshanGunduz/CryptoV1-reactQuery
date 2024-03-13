import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const Buy = () => {
  const focus = useRef<HTMLLabelElement | null>(null)
  const focus2 = useRef<HTMLLabelElement | null>(null)
  const [limit, setLimit] = useState(0)
  const [amount, setAmount] = useState(0)


  const handleFocus = ()=>{
    if (focus.current) {
      focus.current.style.border = '1px solid yellow';
    }
  }

  const handleBlur = () => {
    if (focus.current) {
      focus.current.style.border = '1px solid gray';
    }
  };

  
  const handleFocus2 = ()=>{
    if (focus2.current) {
      focus2.current.style.border = '1px solid yellow';
    }
  }

  const handleBlur2 = () => {
    if (focus2.current) {
      focus2.current.style.border = '1px solid gray';
    }
  };


  return (
    <div className="flex flex-col gap-4 text-xs">
       <div>   
      <div className="flex gap-3 justify-center mb-3 text-xs">
        <button>LIMIT</button><button>MARKET</button><button>STOP LIMIT</button>
      </div>

      <div className="flex flex-col items-center gap-3">
        <label htmlFor="limit" className="flex gap-2 w-full justify-between tems-center gap-2 border border-gray-600 p-2 rounded-xl" onFocus={handleFocus} ref={focus} tabIndex={0} onBlur={handleBlur}>
        <h2>LIMIT PRICE</h2>
        <input type="number" id="limit"  className="w-20 bg-gray-900 focus:outline-none" onChange={(e)=>setLimit(parseFloat(e.target.value))}/>
        </label>
        <div className="flex gap-2 justify-center text-xs">
          <button>MID</button><button>BID</button><button>1%⬇️</button><button>5%⬇️</button>
        </div>
        <label htmlFor="amount" className="flex items-center w-full justify-between gap-2 border border-gray-600 p-2 rounded-xl" onFocus={handleFocus2} ref={focus2} tabIndex={0} onBlur={handleBlur2}>
        <h2>AMOUNT</h2>
        <input type="number" id="amount" className="w-20 bg-gray-900 focus:outline-none" onChange={(e)=>setAmount(parseFloat(e.target.value))} />
        <button>usd</button>
        </label>
        <div className="flex gap-2 justify-center text-xs">
          <button>25%</button><button>50%</button><button>MAX</button>
        </div>
      </div>
      
      </div>

      <div className="flex flex-col  gap-5 border border-gray-700 p-2 ">
        <div className="flex gap-2 justify-between">
          <h1>PAY WITH</h1>
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

      
      <div className="flex flex-col  gap-5 border border-gray-700 p-2 ">
        <div className="flex gap-2 justify-between">
          <h1>SUBTOTAL</h1>
          <p>{limit * amount}</p>
        </div>
        <div className="flex gap-2 justify-between">
          <h1>EST.FEE</h1>
          <p>{(limit * amount * 0.005).toFixed(5) }</p>
        </div>
        <div className="flex gap-2 justify-between">
          <h1>TOTAL COST</h1>
          <p>{(limit * amount) - parseFloat((limit * amount * 0.005).toFixed(5))}</p>
        </div>
      </div>

      <div className="text-center">
        <Link to={"/profilemanager/deposit"}><button id="btn" className="bg-blue-600 p-2 rounded-xl">Add funds to contintue</button></Link>
      </div>

      </div>
  )
}
export default Buy