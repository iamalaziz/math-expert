import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import QuestionsScreen from './screens/QuestionsScreen/QuestionsScreen';
import TestScreen from './screens/TestScreen/TestScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

import { Provider } from 'react-redux';
import store from './store.js';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import SignupScreen from './screens/SignupScreen/SignupScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />}></Route>
      <Route path="/questions" element={<QuestionsScreen />}></Route>
      <Route path="/questions/:id" element={<TestScreen />}></Route>
      <Route path="/dashboard" element={<DashboardScreen />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/register" element={<SignupScreen />}></Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
