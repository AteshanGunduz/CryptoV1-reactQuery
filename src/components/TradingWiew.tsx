import{ useEffect, useRef, memo } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container && !container.querySelector('.tradingview-widget-container__widget')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "W",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        enable_publishing: false,
        allow_symbol_change: true,
        calendar: false,
        support_host: "https://www.tradingview.com"
      });

      container.appendChild(script);
    }

    return () => {
      if (container) {
        const widgetContainer = container.querySelector('.tradingview-widget-container__widget');
        if (widgetContainer) {
          container.removeChild(widgetContainer);
        }
      }
    };
  }, []); 

  return (
    <div className="tradingview-widget-container flex" ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
};

export default memo(TradingViewWidget);