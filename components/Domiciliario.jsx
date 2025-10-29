import React from 'react';

const Domicilios = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Servicios a Domicilio - Pet-Health Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Cuidado profesional para tus animales de granja directamente en tu ubicación
          </p>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Servicio Veterinario en tu Granja
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              En Pet-Health Services entendemos que transportar animales de granja puede ser complicado 
              y estresante para ellos. Por eso llevamos nuestros servicios profesionales veterinarios 
              hasta tu granja, garantizando la comodidad y bienestar de tus animales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
            Nuestros Servicios a Domicilio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🚑 Consultas Veterinarias</h3>
              <p className="text-gray-700">
                Evaluación completa de la salud de tus animales en su entorno natural
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-3">💉 Vacunaciones</h3>
              <p className="text-gray-700">
                Programas de vacunación personalizados según las necesidades de tu granja
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🔬 Cirugías Móviles</h3>
              <p className="text-gray-700">
                Procedimientos quirúrgicos básicos con equipos especializados portátiles
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-3">👨‍🔬 Programas de Salud Reproductiva</h3>
              <p className="text-gray-700">
                Seguimiento y manejo reproductivo para maximizar la productividad
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-3">📦 Entrega de Productos</h3>
              <p className="text-gray-700">
                Alimentos, suplementos y medicamentos entregados directamente en tu granja
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🎓 Asesorías Técnicas</h3>
              <p className="text-gray-700">
                Capacitación en cuidado animal y manejo adecuado de especies de granja
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
            Zonas de Cobertura
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Actualmente cubrimos granjas en zonas rurales de Colombia, con especial enfoque en 
            aquellas áreas donde el acceso a servicios veterinarios especializados es limitado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <span className="text-green-700 font-medium">📍 Zonas rurales de Cundinamarca</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <span className="text-green-700 font-medium">📍 Región cafetera</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <span className="text-green-700 font-medium">📍 Zonas ganaderas de los Llanos Orientales</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <span className="text-green-700 font-medium">📍 Áreas agrícolas de Antioquia</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <span className="text-green-700 font-medium">📍 Zonas lecheras de Nariño</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <span className="text-green-700 font-medium">📍 Y muchas más zonas rurales del país</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
            ¿Cómo Solicitar Nuestros Servicios a Domicilio?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-md border border-green-200">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Contacto</h3>
              <p className="text-gray-700">
                Llámanos o completa el formulario en línea con los detalles de tu solicitud
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md border border-green-200">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Evaluación</h3>
              <p className="text-gray-700">
                Nuestro equipo evalúa tus necesidades y programa la visita
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md border border-green-200">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Visita</h3>
              <p className="text-gray-700">
                Nuestros especialistas llegan a tu granja con todo el equipo necesario
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md border border-green-200">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Seguimiento</h3>
              <p className="text-gray-700">
                Realizamos seguimiento continuo para garantizar la salud de tus animales
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
            Beneficios de Nuestro Servicio a Domicilio
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✅</span>
                <span className="text-gray-700 text-lg">Reduce el estrés en los animales al evitar su transporte</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✅</span>
                <span className="text-gray-700 text-lg">Diagnóstico más preciso en el entorno natural del animal</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✅</span>
                <span className="text-gray-700 text-lg">Atención inmediata en casos de emergencia</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✅</span>
                <span className="text-gray-700 text-lg">Asesoría personalizada según las condiciones específicas de tu granja</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✅</span>
                <span className="text-gray-700 text-lg">Prevención de enfermedades mediante programas de salud preventiva</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✅</span>
                <span className="text-gray-700 text-lg">Mejora en la productividad y bienestar animal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Solicita tu Servicio a Domicilio
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estamos comprometidos con el bienestar de los animales de granja en Colombia. 
            Contáctanos para programar una visita o resolver tus dudas sobre nuestros servicios.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <div className="space-y-3 text-lg">
              <p className="flex items-center justify-center">
                Teléfono: +57 1 234 5678
              </p>
              <p className="flex items-center justify-center">
                Email: domicilios@pethealthservices.com
              </p>
              <p className="flex items-center justify-center">
                Horario: Lunes a Domingo 6:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          
          <button className="bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Solicitar Servicio a Domicilio
          </button>
        </div>
      </section>
    </div>
  );
};

export default Domiciliario;