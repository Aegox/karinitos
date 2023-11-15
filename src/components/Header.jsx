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
					<img src="./public/assets/instagram.svg" width="25px" alt=""/>
					<img src="./public/assets/facebook.svg" width="25px" alt=""/>
					<img src="./public/assets/whatsapp.svg" width="25px" alt=""/>
				</article>
				
			</div>	
			<div className={styles.centerbrand}>
				<img src="./public/assets/karinitos.png" alt=""/>	
			</div>
      <Nav/>  
    </header>
  )
}

export default Header;
