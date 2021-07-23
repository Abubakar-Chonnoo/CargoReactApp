import './App.css';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Service from './components/Service/Service';
import Offer from './components/Offer/Offer';
import About from './components/About/About';
import Staff from './components/Staff/Staff';
import Pricing from './components/Pricing/Pricing';
import Question from './components/Question/Question';
import Why from './components/Why/Why';
import Client from './components/Client/Client';
import Article from './components/Article/Article';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Main />
      <Service />
      <Offer />
      <About />
      <Staff />
      <Pricing />
      <Question />
      <Why />
      <Client />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
