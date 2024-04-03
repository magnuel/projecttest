import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';
import Home from '../components/Home';
import TodoListPage from '../components/pages/TodoListPage';
import PrivateRoute from './PrivateRoutes';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route  path='/' element={<PrivateRoute/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/todos' element={<TodoListPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
