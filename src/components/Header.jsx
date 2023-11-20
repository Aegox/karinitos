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
          <a href="https://www.instagram.com/karinitosdetalles_14/" target="_blank">
            <img src="/assets/instagram.svg" width="25px" alt="Logo Instagram"/>
          </a>
          <a href="https://www.facebook.com/p/Kari%C3%B1itos-Detalles-100063709255787/?paipv=0&eav=AfY53UzLKuFsBvwRhax6BTZP5wgeV4egp-kXZq5Q7fsGEKa3r7LPM10XEVvOFefYOQQ&_rdr" target="_blank">
            <img src="/assets/facebook.svg" width="25px" alt="Logo Facebook"/>
          </a>
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
