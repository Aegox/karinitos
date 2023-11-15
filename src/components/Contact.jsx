import styles from '../styles/Contact.module.css';

const Contact  = () => {
	return (
		<main className={styles.container}>
      <form id={styles.form}>
        <h1>Contactanos para Cotizar!</h1>
        <label>
          Nombre
          <input name="nombre" type="text"/>
        </label>
        <label>
          Correo
          <input name="correo" type="email"/>
        </label>
        <label>
          Telefono
          <input name="telefono" type="phone"/>
        </label>        
        <label>
          Tipo de Evento
          <select name="tipo_evento"> 
            <option>
              Escoje una opcion
            </option>

          </select>
        </label>
        <label>
          Cantidad personas aprox
          <input name="cantidad_personas" type="number"/>
        </label>        
        <label>
          Fecha del Evento
          <input name="fecha" type="date"/>
        </label>
        <label id={styles.mensaje}>
          Mensaje
          <textarea  name="mensaje" rows="10" cols="100" ></textarea>
        </label>
        <button>Enviar Mensaje</button>
      </form>
    </main>
  )
}

export default Contact;

