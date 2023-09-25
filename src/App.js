import './App.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Specials from './components/Specials/Specials';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Specials/>
      <Contact/>
      <Footer/>      
    </>
  );
}

export default App;
