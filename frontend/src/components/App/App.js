import Header from '../Nav/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
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
      </div>
    </div>
  );
}

export default App;
