import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { login } from "../components/Api/Api";
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from "./redux/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password })(dispatch);
      const { user, token } = response.data;
      dispatch(loginSuccess(user));
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign in
      </Button>
    </form>
  );
};

export default Login;
