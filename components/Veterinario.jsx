import React from 'react';

const Veterinario = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Servicios Veterinarios - Pet-Health Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Cuidado especializado para animales de granja con profesionales calificados
          </p>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Atención Veterinaria Especializada
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              En Pet-Health Services contamos con un equipo de veterinarios especializados 
              en animales de granja, comprometidos con la salud, bienestar y productividad 
              de tus animales. Nuestra experiencia en el sector nos permite ofrecer soluciones 
              integrales adaptadas a las necesidades específicas de cada especie.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
            Nuestros Servicios Veterinarios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">🏥 Consultas Veterinarias</h3>
              <p className="text-gray-700 mb-4">
                Evaluación completa y diagnóstico profesional de la salud de tus animales
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Exámenes físicos completos</li>
                <li>• Diagnóstico de enfermedades</li>
                <li>• Evaluación de condición corporal</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">💉 Programas de Vacunación</h3>
              <p className="text-gray-700 mb-4">
                Planes de vacunación personalizados para cada tipo de animal
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vacunas para bovinos, porcinos, aves</li>
                <li>• Calendarios personalizados</li>
                <li>• Control de enfermedades endémicas</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">🔪 Procedimientos Quirúrgicos</h3>
              <p className="text-gray-700 mb-4">
                Cirugías especializadas con equipamiento moderno y seguro
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cirugías menores y mayores</li>
                <li>• Castraciones y esterilizaciones</li>
                <li>• Procedimientos de emergencia</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">👨‍🔬 Salud Reproductiva</h3>
              <p className="text-gray-700 mb-4">
                Manejo y optimización de la reproducción en animales de granja
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Inseminación artificial</li>
                <li>• Diagnóstico de gestación</li>
                <li>• Manejo reproductivo</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">🔬 Servicios de Laboratorio</h3>
              <p className="text-gray-700 mb-4">
                Análisis clínicos y diagnósticos especializados
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Análisis de sangre y orina</li>
                <li>• Coprológicos y parasitológicos</li>
                <li>• Diagnóstico bacteriológico</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">🚑 Atención de Emergencias</h3>
              <p className="text-gray-700 mb-4">
                Servicio 24/7 para casos urgentes y críticos
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Atención inmediata</li>
                <li>• Cuidados intensivos</li>
                <li>• Tratamiento de trauma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
            Especialidades por Especie
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">🐄</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Bovinos</h3>
              <p className="text-gray-700">
                Ganado lechero y de carne, manejo reproductivo y nutricional
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">🐖</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Porcinos</h3>
              <p className="text-gray-700">
                Cerdos de engorde y reproducción, control sanitario
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">🐑</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Ovinos/Caprinos</h3>
              <p className="text-gray-700">
                Ovejas y cabras, manejo de hatos y producción
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">🐓</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Aves de Corral</h3>
              <p className="text-gray-700">
                Gallinas, pollos, pavos y otras aves de producción
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
            ¿Por Qué Elegir Nuestros Servicios Veterinarios?
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✅</span>
                <div>
                  <span className="text-gray-800 font-semibold text-lg">Experiencia Comprobada</span>
                  <p className="text-gray-700">Más de 10 años sirviendo a productores colombianos</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✅</span>
                <div>
                  <span className="text-gray-800 font-semibold text-lg">Tecnología Avanzada</span>
                  <p className="text-gray-700">Equipos modernos para diagnóstico y tratamiento preciso</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✅</span>
                <div>
                  <span className="text-gray-800 font-semibold text-lg">Enfoque Preventivo</span>
                  <p className="text-gray-700">Programas de salud preventiva para evitar enfermedades</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✅</span>
                <div>
                  <span className="text-gray-800 font-semibold text-lg">Atención Personalizada</span>
                  <p className="text-gray-700">Soluciones adaptadas a las necesidades de cada granja</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✅</span>
                <div>
                  <span className="text-gray-800 font-semibold text-lg">Soporte Continuo</span>
                  <p className="text-gray-700">Acompañamiento permanente en el cuidado de tus animales</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Agenda tu Consulta Veterinaria
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros veterinarios están listos para ayudarte a mantener la salud 
            y productividad de tus animales de granja.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <div className="space-y-3 text-lg">
              <p className="flex items-center justify-center">
                Emergencias: +57 1 234 5678
              </p>
              <p className="flex items-center justify-center">
                veterinarios@pethealthservices.com
              </p>
              <p className="flex items-center justify-center">
                Atención: 24/7 para emergencias
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Solicitar Consulta
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-300">
              Emergencias
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Veterinario;