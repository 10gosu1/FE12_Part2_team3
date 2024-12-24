import React, { createContext, useState } from 'react';

export const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chartData, setChartData] = useState([]);

  return (
    <ChartContext.Provider value={{ chartData, setChartData }}>
      {children}
    </ChartContext.Provider>
  );
};
