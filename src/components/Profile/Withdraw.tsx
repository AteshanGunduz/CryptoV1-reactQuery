const Withdraw = () => {
  return (
    <div className="flex  gap-10 p-4 justify-center items-center mt-10">
      <div className="w-60">
        <h2>Withdraw to Bank</h2>
        <button>Add your bank account</button>
        <p>Bank address provided must belong to you.</p>
      </div>
      <div className="w-60">
        <h2>Withdraw to Crypto Address</h2>
        <div className="flex flex-col ">
              <label htmlFor=""> Cyrpto Address to withdraw</label>
              <input type="text" className="text-black" />
        </div>
        <button>Confirm</button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est asperiores mollitia fugiat repellat, repellendus porro officiis consequatur, ex, enim reiciendis recusandae ullam? Asperiores ab nam vitae veniam laborum necessitatibus quis reiciendis incidunt quo quia. Esse non magni neque aspernatur dolores.</p>
      </div>
    </div>
  )
}
export default Withdraw