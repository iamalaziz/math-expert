import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import HomeScreen from './screens/HomeScreen';
import QuestionsScreen from './screens/QuestionsScreen/QuestionsScreen';
import DashboardScreen from './screens/DashboardScreen';

import { Provider } from 'react-redux';
import store from './store.js';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />}></Route>
      <Route path="/questions" element={<QuestionsScreen />}></Route>
      <Route path="/dashboard" element={<DashboardScreen />}></Route>
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
