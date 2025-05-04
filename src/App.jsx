import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Habits from './pages/Habits';

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate('/habits');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <div>
      {isAuth && <button onClick={handleLogout}>Выйти</button>}

      <Routes>
        <Route path="/login" element={isAuth ? <Navigate to="/habits" /> : <Login onLogin={handleLogin} />} />
        <Route path="/habits" element={isAuth ? <Habits /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuth ? "/habits" : "/login"} />} />
      </Routes>
    </div>
  );
}

export default App;
