// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';
import List from './pages/List';
import Mypage from './pages/Mypage';
import GlobalStyle from './styles/global';

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      {location.pathname !== '/' && <Header />}
      <div className="inner">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
