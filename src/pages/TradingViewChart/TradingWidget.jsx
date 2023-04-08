import React, { useEffect } from 'react';
import TradingViewWidget from 'tradingview';

const MyChartComponent = () => {
  useEffect(() => {
    // Custom data to be added to the chart
    const myData = [
      { time: '2022-01-01', value: 100 },
      { time: '2022-01-02', value: 110 },
      { time: '2022-01-03', value: 120 },
      // Add more data points as needed
    ];

    // Create a new datafeed object
    const myDatafeed = {
      // Implement getBars method to provide custom data
      getBars: (symbolInfo, resolution, from, to, callback) => {
        // Process data and pass it to the callback function
        callback(myData);
      },
    };

    // Configure the TradingView widget options
    const widgetOptions = {
      symbol: 'AAPL',
      interval: 'D',
      container_id: 'tv-chart-container',
      datafeed: myDatafeed, // Use the custom datafeed
      // Other widget options
    };

    // Create the TradingView widget
    const tvWidget = new TradingViewWidget(widgetOptions);
    // Optionally, you can store the `tvWidget` instance in a state or a ref
    // for further interactions or updates

    // Clean up the widget when the component unmounts
    return () => {
      tvWidget.remove();
    };
  }, []); // Empty dependency array to run the effect only on mount/unmount

  return (
    <div>
      <div id="tv-chart-container" />
    </div>
  );
};

export default MyChartComponent;