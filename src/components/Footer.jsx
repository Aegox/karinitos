import styles from '../styles/Footer.module.css';

const Footer = () => {

  return (
   <footer>
		<div className={styles.container}>
			<div>
				<section className={styles.textsocial}>
					<h3>AMAMOS LO QUE HACEMOS</h3>	
					<h3>SIGUENOS EN INSTAGRAM!</h3>	
					<h3>ENCUENTRANOS EN FACEBOOK</h3>	
				</section>
				<section className={styles.description}>
					<img src="../assets/karinitos.png" alt=""/>
					<h4>Hacemos que compartir sea hermoso dandole a tu seres queridos los mejores detalles.</h4>
				</section>
			</div>
			<section className={styles.contact}>
				<h1>NOS PUEDES CONTACTAR</h1>
				<article>
					<h4>Phone: 3224209113</h4>
					<h4>Email: infokarinitos@gmail.com</h4>
					<h4>Web: karinitos.com</h4>
					<h4>Calle 158, 99-23</h4>
				</article>
			</section>
		</div>
		<section className={styles.copyright}>
			<h6>Karinitos | Todos los derechos reservados | Bogota, Colombia | 2023</h6>	
		</section>
	</footer>  
	)
}

export default Footer;
