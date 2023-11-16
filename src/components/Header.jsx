import Nav from "./Nav.jsx";
import styles from "../styles/Header.module.css";


const Header = () => {

  return (
    <header>
			<div className={styles.topbrand}>
				<article>
					Llamanos al 322-4209113 |
					<a href="mailto:infokarinitos@gmail.co">infokarinitos@gmail.com</a>
				</article>
				<article>
					<img src="/assets/instagram.svg" width="25px" alt=""/>
					<img src="/assets/facebook.svg" width="25px" alt=""/>
					<img src="/assets/whatsapp.svg" width="25px" alt=""/>
				</article>
				
			</div>	
			<div className={styles.centerbrand}>
				<img src="/assets/karinitos.png" alt=""/>	
			</div>
      <Nav/>  
    </header>
  )
}

export default Header;
