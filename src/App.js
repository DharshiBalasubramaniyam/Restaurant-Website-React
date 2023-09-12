import './App.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Specials from './components/Specials/Specials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Specials/>
      <Footer/>
    </>
  );
}

export default App;
