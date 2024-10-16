import './App.css';
import Home from './components/Home'
import About from './components/About';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Work></Work>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
