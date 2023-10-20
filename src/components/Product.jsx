import styles from '../styles/Product.module.css';

const Product = ({data}) => {
	let path = data.path.split("")
	path.splice(1, 0, "/src")
	
	return (
		<main className={styles.container}>
			<img className={styles.image} src={path.join("")} alt=""/>
			<section className={styles.descProduct}>
				<h4>{data.name}</h4>
				<h5>{data.description}</h5>	
			</section>
    </main>
  )
}

export default Product;

