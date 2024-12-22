interface Puppy {
  id: string;
  name: string;
  description: string;
  image: string;
  age: string;
}

export function getServices(): Puppy[] {
  return [
    {
      id: 'teckel-1',
      name: "Buddy",
      description: "Encantador Teckel miniatura de pelo corto, juguetón y cariñoso. Ideal para familias activas.",
      image: '/images/cachorros/teckel_01.jpg',
      age: '3 meses'
    },
    {
      id: 'teckel-2',
      name: "Luna",
      description: "Preciosa Teckel estándar de pelo largo, dulce y tranquila. Perfecta para un hogar relajado.",
      image: '/images/cachorros/teckel_02.jpg',
      age: '4 meses'
    },
    {
      id: 'teckel-3',
      name: "Rocky",
      description: "Alegre Teckel kaninchen de pelo duro, aventurero y curioso. Siempre listo para explorar.",
      image: '/images/cachorros/teckel_03.jpg',
      age: '2 meses'
    },
    {
      id: 'teckel-4',
      name: "Daisy",
      description: "Adorable Teckel miniatura de pelo corto, compañera y leal. Una excelente adición a cualquier familia.",
      image: '/images/cachorros/teckel_04.jpg',
      age: '3 meses'
    }
  ];
}
