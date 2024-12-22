interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  content?: string;
}

export function getBlogPosts(): BlogPost[] {
  return [
    {
      id: 'cuidados-cachorro-teckel',
      title: 'Cuidados esenciales para tu cachorro Teckel',
      excerpt: 'Aprende los mejores consejos para cuidar a tu nuevo cachorro Teckel, desde la alimentación hasta el entrenamiento.',
      image: '/images/blog/cuidados-teckel.jpg',
      date: '2024-05-03',
      category: 'Cuidados',
      readTime: '7 min',
      content: `
        Los cachorros Teckel, también conocidos como perros salchicha, son adorables y llenos de energía. Sin embargo, requieren cuidados especiales para asegurar su salud y bienestar. En este artículo, te proporcionaremos los mejores consejos para cuidar a tu nuevo cachorro Teckel.

        ## Alimentación

        Una dieta equilibrada es fundamental para el crecimiento y desarrollo de tu cachorro Teckel. Opta por alimentos de alta calidad, específicos para cachorros de raza pequeña.

        ### Recomendaciones:
        - Alimento seco de alta calidad
        - Porciones adecuadas a su edad y tamaño
        - Agua fresca siempre disponible

        ## Ejercicio

        Los cachorros Teckel son activos y necesitan ejercicio diario, pero sin excederse para evitar problemas en sus largas espaldas.

        ### Actividades recomendadas:
        - Paseos cortos y frecuentes
        - Juegos suaves en casa
        - Evitar saltos y escaleras

        ## Socialización

        La socialización temprana es clave para que tu cachorro Teckel se convierta en un perro equilibrado y sociable.

        ### Consejos:
        - Exponerlo a diferentes personas, lugares y sonidos
        - Organizar encuentros con otros cachorros
        - Reforzar positivamente su comportamiento

        ## Salud

        Los Teckel son propensos a ciertos problemas de salud, por lo que es importante estar atento a cualquier señal.

        ### Problemas comunes:
        - Problemas de espalda
        - Obesidad
        - Problemas dentales

        ## Conclusión

        Cuidar a un cachorro Teckel requiere dedicación y atención, pero la recompensa es un compañero leal y cariñoso. Sigue estos consejos y disfruta de la maravillosa experiencia de tener un perro salchicha en tu vida.
      `
    },
    {
      id: 'entrenamiento-teckel',
      title: 'Guía de entrenamiento para cachorros Teckel',
      excerpt: 'Descubre las técnicas más efectivas para entrenar a tu cachorro Teckel y fomentar un comportamiento positivo.',
      image: '/images/blog/entrenamiento-teckel.jpg',
      date: '2024-05-01',
      category: 'Entrenamiento',
      readTime: '5 min',
      content: `
        Entrenar a un cachorro Teckel puede ser un desafío, pero con paciencia y las técnicas adecuadas, lograrás que tu perro se convierta en un compañero obediente y feliz. En esta guía, te proporcionaremos los mejores consejos para entrenar a tu cachorro Teckel.

        ## Comandos básicos

        Comienza con los comandos básicos como "sentado", "quieto" y "ven". Utiliza refuerzo positivo, como premios y elogios, para motivar a tu cachorro.

        ### Pasos:
        1. Elige un lugar tranquilo
        2. Utiliza comandos cortos y claros
        3. Refuerza positivamente cada logro

        ## Entrenamiento en casa

        El entrenamiento en casa es fundamental para evitar accidentes y establecer una rutina.

        ### Consejos:
        - Establece horarios regulares para salir a hacer sus necesidades
        - Utiliza un lugar específico para que haga sus necesidades
        - Premia cada vez que lo haga en el lugar correcto

        ## Socialización

        La socialización es clave para que tu cachorro Teckel se sienta cómodo en diferentes situaciones.

        ### Recomendaciones:
        - Exponerlo a diferentes personas, lugares y sonidos
        - Organizar encuentros con otros cachorros
        - Reforzar positivamente su comportamiento

        ## Problemas de comportamiento

        Si tu cachorro Teckel presenta problemas de comportamiento, como ladridos excesivos o mordiscos, busca ayuda profesional.

        ### Soluciones:
        - Identifica la causa del problema
        - Utiliza técnicas de modificación de conducta
        - Consulta a un entrenador canino

        ## Conclusión

        Entrenar a un cachorro Teckel requiere paciencia y constancia, pero la recompensa es un compañero leal y obediente. Sigue estos consejos y disfruta de la maravillosa experiencia de tener un perro salchicha bien educado.
      `
    },
    {
      id: 'salud-teckel',
      title: 'Problemas de salud comunes en cachorros Teckel',
      excerpt: 'Infórmate sobre los problemas de salud más frecuentes en los Teckel y cómo prevenirlos.',
      image: '/images/blog/salud-teckel.jpg',
      date: '2024-04-28',
      category: 'Salud',
      readTime: '6 min',
      content: `
        Los cachorros Teckel, también conocidos como perros salchicha, son propensos a ciertos problemas de salud debido a su particular anatomía. En este artículo, te informaremos sobre los problemas de salud más frecuentes en los Teckel y cómo prevenirlos.

        ## Problemas de espalda

        Los Teckel son propensos a problemas de espalda debido a su larga columna vertebral.

        ### Recomendaciones:
        - Evitar saltos y escaleras
        - Mantener un peso saludable
        - Utilizar arnés en lugar de collar

        ## Obesidad

        La obesidad es un problema común en los Teckel, ya que tienden a ganar peso fácilmente.

        ### Consejos:
        - Controlar las porciones de comida
        - Proporcionar ejercicio diario
        - Evitar darles comida de la mesa

        ## Problemas dentales

        Los Teckel son propensos a problemas dentales, como la acumulación de sarro y la enfermedad periodontal.

        ### Cuidados:
        - Cepillar sus dientes regularmente
        - Proporcionar juguetes para masticar
        - Llevarlo al veterinario para revisiones dentales

        ## Otros problemas de salud

        Además de los problemas mencionados, los Teckel también pueden ser propensos a:
        - Problemas oculares
        - Problemas cardíacos
        - Problemas de piel

        ## Conclusión

        Conocer los problemas de salud más comunes en los Teckel te permitirá tomar medidas preventivas y asegurar una vida larga y saludable para tu compañero peludo. Sigue estos consejos y disfruta de la maravillosa experiencia de tener un perro salchicha en tu vida.
      `
    }
  ];
}
