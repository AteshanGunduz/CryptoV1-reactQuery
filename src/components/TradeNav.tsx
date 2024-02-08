const TradeNav = () => {
  return (
    <div className="m-5">
        <div className="trade-nav flex flex-col font-semibold">
            <div className="flex justify-between ">
                <div className="flex gap-5 m-2">
                    <h2>Favorites</h2>
                    <h2>All Cryptos</h2>
                    <h2>Spot/Margin</h2>
                    <h2>Features Markets</h2>
                    <h2>New Listing</h2>
                    <h2>Zones</h2>
                </div>
                <button>🔎</button>
            </div>
            <div className="flex gap-10 m-2 ">
                <h2>All</h2>
                <h2>Layer1</h2>
                <h2>Metaverse</h2>
                <h2>Monitoring</h2>
                <h2>Seed</h2>
                <h2>Meme</h2>
                <h2>Liquid Stacking</h2>
            </div>
        </div>
    </div>
  )
}
export default TradeNav