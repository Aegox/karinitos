import styles from "../styles/Product.module.css";

const Product = ({title, data}) => {

  return (
		<div id={title} className={styles.main}>
      <h1>{title}</h1>
      <div className={styles.container}>{data.map((i) => {
        return (
          <img src={i["url"].slice(5)}/>
        )
        })
      }</div>		
    </div>
  )
}

export default Product;

