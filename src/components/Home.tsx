import React from "react";
import { Link } from "react-router-dom";
import TodoListPage from './pages/TodoListPage';

const Home: React.FC = () => {

  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
        metus ac metus vulputate porta rhoncus at lacus. Proin dictum erat eget
        convallis lobortis. Aliquam purus arcu, pulvinar vitae massa et,
        vulputate commodo lacus. Etiam scelerisque auctor elementum. Morbi vitae
        ultricies ante. Donec in ornare erat
      </p>
      <Link to="/login">Logout</Link>
      <TodoListPage />
    </div>
  );
};

export default Home;
