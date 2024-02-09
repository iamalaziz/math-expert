import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './_app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
