import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdOutlineLockOpen } from 'react-icons/md';

import { toast } from 'react-toastify';

import './_login.scss';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err.data.message || err.error);
    }
  };
  
  if(isLoading) return <h2>Loading...</h2>
  
  return (
    <section className="login">
      <h2>Login</h2>
      <p className="welcome-text">Welcome Back!</p>
      <form onSubmit={submitHandler}>
        <div className="textbox">
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>
            <FaRegCircleUser />
          </span>
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Enter Password..."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>
            <MdOutlineLockOpen />
          </span>
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <p>
        No account yet?{' '}
        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
          Register
        </Link>
      </p>
    </section>
  );
};

export default LoginScreen;
