import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contacto</h1>
      <p>Envíanos un correo a info@pethealth.com o llámanos al 123-456-789.</p>
      <ul>
        <li>Ubicaciones</li>
        <li>Soporte técnico</li>
      </ul>
      <form>
        <input type="text" placeholder="Tu Nombre" style={{ display: 'block', margin: '10px 0' }} />
        <textarea placeholder="Tu Mensaje" style={{ display: 'block', margin: '10px 0' }}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;