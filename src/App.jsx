import styles from './styles/App.module.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from './components/Products.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const App = () => {

  return (
    <div>
      <Header/>
      <About/>
      <Contact/>
      <Products/>
			<Footer/>
    </div>
  )
}

export default App
