import styles from './styles/App.module.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from './components/Products.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const App = () => {

  return (
    <div className={styles.container}>
      <Header/>
      <About/>
      <Contact/>
      <Products/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.0376020896967!2d-74.08422802773099!3d4.756948174628153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85e9657c98bb%3A0x1fb778e9770e297e!2sKari%C3%B1itos%20Detalles%20%26%20Papeleria!5e0!3m2!1ses!2sco!4v1700135068865!5m2!1ses!2sco" width="75%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<Footer/>
    </div>
  )
}

export default App
