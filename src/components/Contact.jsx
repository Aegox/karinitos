import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import sentEmail from '../utils/emailjs-sent.js';
import swal from 'sweetalert';


const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tipo_evento: '',
    cantidad_personas: '',
    fecha_evento: '',
    mensaje: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();
    await sentEmail(formData)
      .then(()=>{ 
        swal("", "Tu correo se ha enviado!", "success");
        document.querySelector('.formulary').reset()
      }
      )

  };
  
  console.log(formData)

  return (
    <main className={styles.container}>
      <form id={styles.form} class="formulary" onSubmit={handleSubmit}>
        <h1>Contactanos para Cotizar!</h1>
        <label>
          Nombre
          <input name="nombre" type="text" onChange={handleChange} />
        </label>
        <label>
          Correo
          <input name="correo" type="email" onChange={handleChange} />
        </label>
        <label>
          Telefono
          <input name="telefono" type="phone" onChange={handleChange} />
        </label>
        <label>
          Tipo de Evento
          <select name="tipo_evento" onChange={handleChange}>
            <option>Escoje una opcion</option>
            <option value="Ancheta">Ancheta</option>
            <option value="Caja de regalo">Caja de Regalo</option>
            <option value="Foami">Foami</option>
            <option value="Decoracion">Decoración</option>
          </select>
        </label>
        <label>
          Cantidad personas aprox
          <input
            name="cantidad_personas"
            type="number"
            onChange={handleChange}
          />
        </label>
        <label>
          Fecha del Evento
          <input name="fecha" type="date" onChange={handleChange} />
        </label>
        <label id={styles.mensaje}>
          Mensaje
          <textarea
            name="mensaje"
            rows="10"
            cols="100"
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>Enviar Mensaje</button>
      </form>
    </main>
  );
};

export default Contact;

