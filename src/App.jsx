// App.js
import React, { useState, createContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing';
import Header from './components/Header';
import List from './pages/List';
import Mypage from './pages/Mypage';
import GlobalStyle from './styles/global';

export const CreditContextValue = createContext();
export const CreditContextAction = createContext();

function App() {
  const [myCredit, setMyCredit] = useState(() => {
    const localCredit = localStorage.getItem('credit');
    if (localCredit) {
      return ~~localCredit;
    }
    return 3000;
  });

  const handleCreditPlus = (credit) => {
    setMyCredit((prev) => prev + credit);
  };

  const handleCreditMinus = (credit) => {
    myCredit - credit >= 0
      ? setMyCredit((prev) => prev - credit)
      : toast('크레딧이 부족합니다.');
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
          <ToastContainer
            position="top-center"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Flip}
          />
        </CreditContextAction.Provider>
      </CreditContextValue.Provider>
    </>
  );
}

export default App;
