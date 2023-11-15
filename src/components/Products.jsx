import data from "../data.json";
import styles from "../styles/Products.module.css";

const Products = () => {
	return (
		<main className={styles.container}>
			{data["cajas-de-regalo"]["genericas"].map(i => <Product data={i}/>)}
		</main>
	)
};

export default Products;
