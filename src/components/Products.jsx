import data from "../data.json";
import styles from "../styles/Products.module.css";
import Product from "./Product.jsx"

const Products = () => {
	return (
    <main className={styles.container}>
      <Product title="Cajas de Regalo" data={data["cajas-de-regalo"]}/> 
      <Product title="Anchetas" data={data["anchetas"]}/>
      <Product title="Arreglos de Flores" data={data["decoraciones"][0]["arreglo-de-flores"]} />
      <Product title="Decoraciones para Fiestas" data={data["decoraciones"][3]["decoracion-para-fiestas"]} />
      <Product title="Decoraciones para Pasteles" data={data["decoraciones"][4]["decoracion-para-pasteles"]} />
      <Product title="Figuras de Icopor" data={data["decoraciones"][5]["figuras-de-icopor"]} />
      <Product title="Globos Personalizados" data={data["decoraciones"][6]["globos-personalizados"]} />
      <Product title="Marcado de Cuadernos" data={data["decoraciones"][7]["marcado-de-cuadernos"]} />
      <Product title="Figuras de Foami" data={data["foami"][1]["figuras-de-foami"]} />
      <Product title="Toppers" data={data["foami"][3]["toppers-amor"].concat(data["foami"][4]["toppers-feliz-dia"])} />
      <Product title="Maquetas" data={data["foami"][2]["maquetas"]} />
      

    </main>
	)
};

export default Products;
