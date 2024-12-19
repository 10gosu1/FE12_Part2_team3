// App.js
import React, { useState, createContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';
import List from './pages/List';
import Mypage from './pages/Mypage';
import GlobalStyle from './styles/global';

export const CreditContextValue = createContext();
export const CreditContextAction = createContext();

function App() {
  const [myCredit, setMyCredit] = useState(0);

  useEffect(() => {
    const localCredit = localStorage.getItem('credit');
    if (localCredit) {
      setMyCredit(~~localCredit);
    }
  }, []);

  const handleCreditPlus = (credit) => {
    setMyCredit((prev) => prev + credit);
  };

  const handleCreditMinus = (credit) => {
    myCredit - credit >= 0
      ? setMyCredit((prev) => prev - credit)
      : alert('크레딧 부족!');
  };

  useEffect(() => {
    localStorage.setItem('credit', myCredit);
  }, [myCredit]);

  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      {location.pathname !== '/' && <Header />}

      <CreditContextValue.Provider value={myCredit}>
        <CreditContextAction.Provider
          value={{ handleCreditPlus, handleCreditMinus, setMyCredit }}
        >
          <div className="inner">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/list" element={<List />} />
              <Route path="/mypage" element={<Mypage />} />
            </Routes>
          </div>
        </CreditContextAction.Provider>
      </CreditContextValue.Provider>
    </>
  );
}

export default App;
