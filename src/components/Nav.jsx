import styles from "../styles/Nav.module.css";

const Nav = () => {

  return (
     	<nav className={styles.bottombrand}>
        <a href="/">Inicio</a>
    				<a href="#about">Sobre nosotros</a>
    				<a href="#Cajas de Regalo">Cajas de Regalo</a>	
						<a href="#Anchetas">Anchetas</a>
    				<a href="#Decoraciones para Fiestas">Decoraciones</a>
						<a href="#Figuras de Foami">Foami</a>
    				<a href="#contacto">Contacto</a>
			</nav>
  )
}

export default Nav;
