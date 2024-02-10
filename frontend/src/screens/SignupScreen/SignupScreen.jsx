import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdOutlineLockOpen } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

import { toast } from 'react-toastify';

import '../LoginScreen/_login.scss';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section className="login">
      <h2>Register</h2>
      <p className="welcome-text">Happy to see you in our family!</p>
      <form onSubmit={submitHandler}>
        <div className="textbox">
          <input
            type="text"
            placeholder="Username..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span>
            <FaRegCircleUser />
          </span>
        </div>
        <div className="textbox">
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>
            <AiOutlineMail />
          </span>
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>
            <MdOutlineLockOpen />
          </span>
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Confirm Password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span>
            <MdOutlineLockOpen />
          </span>
        </div>
        <button type="submit">REGISTER</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
          Login
        </Link>
      </p>
    </section>
  );
};

export default SignupScreen;
