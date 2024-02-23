const Orders = () => {
  return (
    <div className="flex flex-col gap-2">
        <div className="flex justify-evenly">
            <h2>Orders</h2>
            <button>Cancel all</button>
            <button>View all</button>
            <button>All Markets</button>
            <button>All Statuses</button>
        </div>
        <div className="flex justify-evenly">
            <p>TIME PLACED</p>
            <p>NAME</p>
            <p>TYPE</p>
            <p>SIDE</p>
            <p>PRICE</p>
            <p>AMOUNT</p>
            <p>%FILLED</p>
            <p>TOTAL</p>
            <p>STATUS</p>
        </div>
        <div className="flex justify-center items-center text-2xl">💹</div>

    </div>
  )
}
export default Orders