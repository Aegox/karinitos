import styles from "../styles/Landing.module.css"

const Comment = ({text , user_name}) => {
  const image_url = ""
  return (
    <article>
        <svg width="25px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792" id="1548776150" class="svg u_1548776150" data-icon-name="fa-quote-right"> <path fill="#E1B495" d="M768 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zM1664 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z" id="1851842656"></path> 
</svg>
        <p>{text}</p>
        <span>{user_name}</span>
    </article>
  )
}


const About = () => {

  const coments = [
    {
      text: "“Me gusto mucho lo que me hicieron, los volveria a contratar.”",
      user_name: "Maribel Hernandez"
    },
    {
      text: "“Muy cumplidos con todo lo que me prometieron, todo salio como yo queria.”",
      user_name: "Rosa Maria obando"
    },
    {
      text: "“Me asesoran de manera clara y muy profesional, todos en la fiesta quedaron encantados, me gusto mucho” ",
      user_name: "Familia Velandia Martinez"
    },
    {
      text: "“Hubo algunos pequeños detalles que no me agradaron, sin embargo todo lo demas salio muy bien, en general me gusto mucho. Nada es perfecto”",
      user_name: "Luis Armando Perez"
    },
  ]

    return (
        <main className={styles.container}>
          <section className={styles.introduccion}>
            <span>Hacemos que compartir sea hermoso dandole a tu seres queridos los mejores detalles.</span>
            <img src="/assets/image1.png"/>
          </section>
          <section className={styles.about}>
            <article className={styles.text}>
              <h1>Sobre Nosotros</h1>
              <p>Bienvenidos a <strong> Karinitos Decoraciones, anchetas y regalos</strong>, el destino perfecto para transformar momentos especiales en experiencias inolvidables. Nos dedicamos con pasión a la creación de manualidades, adornos y decoraciones que agregan un toque único a tus eventos más importantes. </p>
              <p>En Karinitos Decoraciones, anchetas y regalos, creemos en la magia de los detalles, y es por eso que cada pieza que creamos está impregnada de amor y creatividad. Desde hermosas decoraciones para eventos hasta encantadoras anchetas llenas de regalos cuidadosamente seleccionados, nuestro compromiso es superar tus expectativas y hacer que cada ocasión sea verdaderamente especial.</p>
              <p> Descubre el arte de celebrar con nosotros y deja que Karinitos Decoraciones, anchetas y regalos sea tu socio en la creación de <strong>momentos inolvidables</strong>.</p>
            </article>
            <article className={styles.images}>
              <img src="/assets/decoraciones/decoracion-para-fiestas-04.jpeg"/>
              <img src="/assets/anchetas/anchetas-03.jpeg"/> 
            </article>
          </section>       
          <section className={styles.coments}>       
            <h1>Porque la gente nos prefiere?</h1>
            <div>{coments.map(i => { 
              return (<Comment text={i.text} user_name={i.user_name}/>)
            })}
            </div>
          </section>       
        </main>
    )
};

export default About;
