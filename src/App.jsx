// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import List from './pages/List';
import Mypage from './pages/Mypage';

function App() {
  return (
    <>
      <Link to="/list">로고</Link>
      <br />
      <Link to="/mypage">마이페이지</Link>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<List />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  );
}

export default App;
