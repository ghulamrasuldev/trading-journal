// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";
import "./tradingViewChart.css";
import { useSelector } from "react-redux";


let tvScriptLoadingPromise;

export default function TradingViewWidget() {

  const mode=useSelector(state=>state.mode)
  const onLoadScriptRef = useRef();

  useEffect(() => {
    const myData = [
      { time: "2022-01-01", value: 100 },
      { time: "2022-01-02", value: 110 },
      { time: "2022-01-03", value: 120 },
      { time: "2022-01-03", value: 120 },
      { time: "2022-01-03", value: 120 },
      { time: "2022-01-03", value: 120 },

      // Add more data points as needed
    ];

    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("technical-analysis-chart-demo") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          container_id: "technical-analysis-chart-demo",
          datafeed: {
            onReady: (callback) => {
              // Use the setData method to provide custom data to the chart
              callback({
                bars: myData,
              });
            },
          },
          width: "50%",
          height: "100%",
          autosize: true,
          symbol: "AAPL",
          interval: "D",
          timezone: "exchange",
          theme: mode? "dark":"light",
          style: "1",
          bg: "red",
          toolbar_bg: "black",
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: true,
          studies: [
            "ROC@tv-basicstudies",
            "StochasticRSI@tv-basicstudies",
            "MASimple@tv-basicstudies",
          ],
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
          locale: "en",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="technical-analysis-chart-demo" />
      <div className="tradingview-widget-copyright">
        {/* <a href="https://www.tradingview.com/symbols/AAPL/" rel="noopener" target="_blank"><span className="blue-text">AAPL stock chart</span></a> by TradingView */}
        {/* <p>heloooooooooooo</p> */}
      </div>
    </div>
  );
}
