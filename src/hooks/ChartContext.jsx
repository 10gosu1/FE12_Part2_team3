import React, { createContext, useState } from 'react';

export const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chartData, setChartData] = useState([]);

  const updateChartData = (idolId, newVoteCount) => {
    setChartData((prevData) =>
      prevData.map((idol) =>
        idol.id === idolId ? { ...idol, totalVotes: newVoteCount } : idol,
      ),
    );
  };

  return (
    <ChartContext.Provider value={{ chartData, setChartData, updateChartData }}>
      {children}
    </ChartContext.Provider>
  );
};
