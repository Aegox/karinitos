import styles from "../styles/Nav.module.css";

const Nav = () => {

  return (
     	<nav className={styles.bottombrand}>
    				<a href="#">Inicio</a>
    				<a href="#">Sobre nosotros</a>
    				<a href="#">Cajas de Regalo</a>	
						<a href="#">Anchetas</a>
    				<a href="#">Decoraciones</a>
						<a href="#">Foami</a>
    				<a href="#">Contacto</a>
			</nav>
  )
}

export default Nav;
