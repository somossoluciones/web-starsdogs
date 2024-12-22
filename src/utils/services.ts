interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  content?: string;
}

export function getServices(): Service[] {
  return [
    {
      id: 'amarres-amor',
      title: "Amarres de Amor",
      description: "Rituales efectivos y seguros para unir almas gemelas y recuperar el amor perdido. Resultados garantizados en 7 días.",
      image: '/images/services/amarre-amor.jpg',
      duration: '7-21 días',
      content: `
# Amarres de Amor Efectivos

Los amarres de amor son rituales poderosos diseñados para unir dos almas destinadas a estar juntas. Nuestros amarres son realizados con las técnicas más efectivas y seguras.

## ¿Qué Incluye el Servicio?

- Consulta inicial gratuita
- Ritual personalizado según tu caso
- Protección energética
- Seguimiento durante el proceso
- Garantía de resultados

## Tipos de Amarres

### Amarre Clásico
- Ideal para recuperar el amor perdido
- Resultados en 7-14 días
- Incluye ritual de protección

### Amarre Intensivo
- Para casos difíciles
- Resultados en 14-21 días
- Incluye limpieza energética

### Amarre Definitivo
- Unión permanente
- Resultados en 21-40 días
- Incluye endulzamiento

## Proceso del Ritual

1. Evaluación inicial gratuita
2. Preparación de materiales
3. Realización del ritual
4. Período de manifestación
5. Seguimiento y ajustes

## Garantía de Resultados

Ofrecemos garantía de resultados en todos nuestros trabajos. Si no ves cambios en el tiempo establecido, realizamos ajustes sin costo adicional.

¿Necesitas ayuda para recuperar a tu ser amado? Contáctanos ahora para una consulta gratuita.`
    },
    {
      id: 'retorno-pareja',
      title: "Retorno de Pareja",
      description: "Técnicas ancestrales para reconectar corazones y recuperar a tu ex pareja. Vuelve a conquistar ese amor especial.",
      image: '/images/services/retorno-pareja.jpg',
      duration: '7-21 días',
      content: `
# Retorno de Pareja Garantizado

El retorno de pareja es un trabajo espiritual especializado para recuperar a tu ex pareja de manera efectiva y duradera. Utilizamos técnicas ancestrales comprobadas.

## Beneficios del Servicio

- Reconexión emocional profunda
- Eliminación de terceras personas
- Fortalecimiento del vínculo
- Protección de la relación

## Nuestro Método

### Fase 1: Diagnóstico
- Análisis de la situación
- Identificación de bloqueos
- Plan de acción personalizado

### Fase 2: Limpieza
- Eliminación de energías negativas
- Apertura de caminos
- Preparación energética

### Fase 3: Retorno
- Ritual de reconexión
- Activación del amor
- Protección del vínculo

## Resultados Esperados

- Primeros cambios: 3-5 días
- Contacto inicial: 5-7 días
- Reconciliación: 7-14 días
- Unión definitiva: 14-21 días

¿Quieres recuperar a tu ex pareja? Contáctanos ahora para una consulta gratuita.`
    },
    {
      id: 'endulzamiento',
      title: "Endulzamientos",
      description: "Rituales de endulzamiento para armonizar relaciones y atraer el amor verdadero a tu vida. Recupera la dulzura del amor.",
      image: '/images/services/endulzamiento.jpg',
      duration: '3-7 días',
      content: `
# Endulzamientos para el Amor

Los rituales de endulzamiento son trabajos espirituales diseñados para suavizar corazones y mejorar las relaciones. Perfectos para resolver conflictos y atraer armonía.

## ¿Para Qué Sirven?

- Mejorar la comunicación en la pareja
- Resolver conflictos amorosos
- Aumentar el romance y la pasión
- Atraer nuevas oportunidades de amor

## Tipos de Endulzamientos

### Endulzamiento Básico
- Para mejorar la comunicación
- Resultados en 3-5 días
- Ideal para conflictos leves

### Endulzamiento con Miel
- Para intensificar el amor
- Resultados en 5-7 días
- Perfecto para renovar la pasión

### Endulzamiento Especial
- Para casos complejos
- Resultados en 7-14 días
- Incluye protección especial

## Proceso del Ritual

1. Consulta personalizada
2. Selección de ingredientes
3. Ritual de endulzamiento
4. Activación energética
5. Seguimiento de resultados

¿Necesitas endulzar una relación? Contáctanos para una consulta gratuita.`
    },
    {
      id: 'limpieza',
      title: "Limpieza Espiritual",
      description: "Purificación energética para eliminar bloqueos y atraer abundancia en todos los aspectos de tu vida.",
      image: '/images/services/limpieza.jpg',
      duration: '1-3 días',
      content: `
# Limpieza Espiritual Profunda

La limpieza espiritual es fundamental para eliminar energías negativas y abrir caminos hacia el amor y la prosperidad. Un ritual esencial para comenzar cualquier trabajo espiritual.

## Beneficios

- Eliminación de energías negativas
- Apertura de caminos
- Protección espiritual
- Mayor claridad mental
- Mejora en las relaciones

## Tipos de Limpiezas

### Limpieza Básica
- Para mantenimiento energético
- Duración: 1 sesión
- Resultados inmediatos

### Limpieza Profunda
- Para casos de bloqueos fuertes
- Duración: 3 sesiones
- Incluye protección

### Limpieza Especial
- Para situaciones complejas
- Duración: 7 sesiones
- Protección permanente

## El Proceso

1. Diagnóstico energético
2. Selección de hierbas
3. Ritual de limpieza
4. Protección final
5. Consejos de mantenimiento

¿Sientes que necesitas una limpieza espiritual? Contáctanos para una evaluación gratuita.`
    }
  ];
}