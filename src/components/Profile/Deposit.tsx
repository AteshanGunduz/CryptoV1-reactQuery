

const Deposit = () => {
  return (
    <div className="w-full p-10">
      <div className="flex p-10 gap-10">

        <div className="w-full">
          <h2> Wire Deposit</h2>
          <div>
            <h3>Account Name</h3>
            <h3>Company Name</h3>
            <h3>Account Adrees to Deposit</h3>
          </div>
          <div>
            <p>We are currently accepting USD payments</p>
            <p>The amount deposited will be converted to USDC automatically</p>
          </div>
        </div> 

        <div> 
          <h2>Deposit Crypto</h2>

          <div>
            <h3>Generate a Crypto Adreess for Deposit</h3> 
            <select name="" id="" className="text-black">
              <option value="">BTC</option>
              <option value="">ETH</option>
              <option value="">ADA</option>
            </select>
            <button>Confirm</button>
          </div>

          <div>
            <div className="flex flex-col ">
              <label htmlFor=""> Btc Newgig</label>
              <input type="text" className="text-black" placeholder="12jkhkhsdfsdfsdf32fsdsdf23fsdf23asas" disabled />
            </div>
            <div className="flex flex-col">
              <label htmlFor=""> Btc Seagul</label>
              <input type="text" className="text-black" placeholder="12312sdfsdfsdf32fsdsdf23fsdf23ddd" disabled/>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem eius, aliquam ut ea iure fugiat modi voluptate architecto nemo deleniti sint atque, nostrum expedita aperiam? Ipsa voluptas dignissimos a recusandae.</p>
        </div>

      
      </div>
     
   
    </div>
  )
}
export default Deposit