document.addEventListener('DOMContentLoaded', function() {
  // Carrusel funcional - VERSIÓN CORREGIDA CON DESCRIPCIONES
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const sliderItems = document.querySelectorAll('.slider-item');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  const dots = document.querySelectorAll('.slider-dot');
  
  let currentSlide = 0;
  const totalSlides = sliderItems.length;
  let slideInterval;
  
  // Inicializar el carrusel
  function initSlider() {
    // Asegurarse de que el wrapper tenga el ancho correcto
    sliderWrapper.style.width = `${totalSlides * 100}%`;
    
    // Asegurarse de que cada slide tenga el ancho correcto y sea visible
    sliderItems.forEach(item => {
      item.style.width = `${100 / totalSlides}%`;
      item.style.display = 'block'; // Asegurar que todos los slides sean visibles
    });
    
    // Mostrar el primer slide activo
    goToSlide(0);
  }
  
  // Función para cambiar de slide
  function goToSlide(slideIndex) {
    if (slideIndex < 0) {
      currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = slideIndex;
    }
    
    // Calcular el desplazamiento
    const translateX = -currentSlide * (100 / totalSlides);
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
    
    // Actualizar dots activos
    updateDots();
    
    // Actualizar descripciones si es necesario
    updateDescriptions();
  }
  
  // Función para actualizar los dots activos
  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  
  // Función para actualizar las descripciones (si están fuera del carrusel)
  function updateDescriptions() {
    // Si tienes descripciones fuera del carrusel que necesitan actualizarse
    const descriptions = document.querySelectorAll('.slide-description');
    if (descriptions.length > 0) {
      descriptions.forEach((desc, index) => {
        desc.style.display = index === currentSlide ? 'block' : 'none';
      });
    }
  }
  
  // Función para siguiente slide
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  
  // Función para slide anterior
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }
  
  // Configurar botones del carrusel
  if (nextButton && prevButton) {
    nextButton.addEventListener('click', function() {
      nextSlide();
      restartSlider();
    });
    
    prevButton.addEventListener('click', function() {
      prevSlide();
      restartSlider();
    });
  }
  
  // Configurar dots del carrusel
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      goToSlide(index);
      restartSlider();
    });
  });
  
  // Iniciar carrusel automático
  function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // Pausar carrusel al interactuar
  function pauseSlider() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }
  
  // Reiniciar carrusel después de pausa
  function restartSlider() {
    pauseSlider();
    startSlider();
  }
  
  // Event listeners para pausar/reanudar
  if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', pauseSlider);
    sliderWrapper.addEventListener('mouseleave', restartSlider);
    
    // Para dispositivos táctiles
    sliderWrapper.addEventListener('touchstart', pauseSlider);
    sliderWrapper.addEventListener('touchend', restartSlider);
  }
  
  // Inicializar el carrusel
  initSlider();
  
  // Iniciar carrusel automático
  startSlider();
  
  // Navegación por teclado
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      restartSlider();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      restartSlider();
    }
  });
  
  // Botón "¡Conoce nuestros servicios!" en hero section
  const heroButton = document.querySelector('.hero .btn-primary');
  if (heroButton) {
    heroButton.addEventListener('click', function() {
      // Desplazarse suavemente a la sección de servicios
      document.querySelector('.services').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }
  
  // Asegurar que las descripciones dentro del carrusel sean visibles
  // Esto es importante si las descripciones están dentro de .slider-item
  function ensureDescriptionsVisible() {
    const captions = document.querySelectorAll('.slider-caption');
    captions.forEach(caption => {
      caption.style.display = 'block';
      caption.style.visibility = 'visible';
      caption.style.opacity = '1';
    });
  }
  
  // Llamar a la función después de un breve delay para asegurar que el DOM esté listo
  setTimeout(ensureDescriptionsVisible, 100);
});