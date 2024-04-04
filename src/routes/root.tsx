import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';
import Home from '../components/Home';
import TodoListPage from '../components/pages/TodoListPage';
import { useSelector } from 'react-redux';
import { RootState } from '../components/store';

const AppRoutes = () => {
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/todos" element={isAuthenticated ? <TodoListPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
