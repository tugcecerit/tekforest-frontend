
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Register from './components/Register';
import Signin from './components/Signin'

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
      <Register />
      <Signin />
    </div>
  );
}

export default App;
