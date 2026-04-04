export interface Vehicle {
  id: number;
  name: string;
  price: string;
  lepasKunci?: string;
  image: string;
  passengers: string;
  transmission: string;
}

export const vehicles: { en: Vehicle[]; id: Vehicle[] } = {
  id: [
    {
      id: 1,
      name: 'Honda Brio',
      price: 'Rp 650.000',
      lepasKunci: 'Rp 350.000',
      image: '/image/cars/honda_brio.jpeg',
      passengers: '4 Kursi',
      transmission: 'Auto/Manual'
    },
    {
      id: 2,
      name: 'Avanza G Series',
      price: 'Rp 700.000',
      lepasKunci: 'Rp 350.000',
      image: '/image/cars/avanza-black.jpeg',
      passengers: '7 Kursi',
      transmission: 'Auto/Manual'
    },
    {
      id: 7,
      name: 'Mobilio',
      price: 'Rp 650.000',
      lepasKunci: 'Rp 300.000',
      image: '/image/cars/mobilio.png',
      passengers: '7 Kursi',
      transmission: 'Auto/Manual'
    },
    {
      id: 6,
      name: 'Innova Reborn',
      price: 'Rp 900.000',
      lepasKunci: 'Rp 350.000 / Rp. 400.000',
      image: '/image/cars/innova-reborn.png',
      passengers: '7 Kursi',
      transmission: 'Auto/Manual'
    },
    {
      id: 5,
      name: 'Elf Long',
      price: 'Rp 1.200.000',
      image: '/image/cars/elf-long.jpeg',
      passengers: '15-19 Kursi',
      transmission: 'Manual'
    },
    {
      id: 3,
      name: 'Toyota HIACE',
      price: 'Rp 1.200.000',
      image: '/image/cars/toyota-hiace.png',
      passengers: '15 Kursi',
      transmission: 'Manual'
    },
    {
      id: 9,
      name: 'Fortuner',
      price: 'Rp 1.400.000',
      image: '/image/cars/fortuner.png',
      passengers: '7 Kursi',
      transmission: 'Auto'
    },
    {
      id: 8,
      name: 'Pajero',
      price: 'Rp 1.500.000',
      image: '/image/cars/pajero.png',
      passengers: '7 Kursi',
      transmission: 'Auto'
    },
    {
      id: 4,
      name: 'Bus Medium & Big Bus',
      price: 'Rp 1.800.000',
      image: '/image/cars/medium-bus.jpeg',
      passengers: '30-50 Kursi',
      transmission: 'Manual'
    },
    {
      id: 10,
      name: 'Alphard',
      price: 'Rp 3.300.000',
      image: '/image/cars/alphard.jpeg',
      passengers: '7 Kursi',
      transmission: 'Auto'
    }
  ],
  en: [
    {
      id: 1,
      name: 'Honda Brio',
      price: 'IDR 650,000',
      lepasKunci: 'IDR 350,000',
      image: '/image/cars/honda_brio.jpeg',
      passengers: '4 Seats',
      transmission: 'Auto/Manual'
    },
    {
      id: 2,
      name: 'Avanza G Series',
      price: 'IDR 700,000',
      lepasKunci: 'IDR 350,000',
      image: '/image/cars/avanza-black.jpeg',
      passengers: '7 Seats',
      transmission: 'Auto/Manual'
    },
    {
      id: 7,
      name: 'Mobilio',
      price: 'IDR 650,000',
      lepasKunci: 'IDR 300,000',
      image: '/image/cars/mobilio.png',
      passengers: '7 Seats',
      transmission: 'Auto/Manual'
    },
    {
      id: 6,
      name: 'Innova Reborn',
      price: 'IDR 900,000',
      lepasKunci: 'IDR 350,000 / 400,000',
      image: '/image/cars/innova-reborn.png',
      passengers: '7 Seats',
      transmission: 'Auto/Manual'
    },
    {
      id: 5,
      name: 'Elf Long',
      price: 'IDR 1,200,000',
      image: '/image/cars/elf-long.jpeg',
      passengers: '15-19 Seats',
      transmission: 'Manual'
    },
    {
      id: 3,
      name: 'Toyota HIACE',
      price: 'IDR 1,200,000',
      image: '/image/cars/toyota-hiace.png',
      passengers: '15 Seats',
      transmission: 'Manual'
    },
    {
      id: 9,
      name: 'Fortuner',
      price: 'IDR 1,400,000',
      image: '/image/cars/fortuner.png',
      passengers: '7 Seats',
      transmission: 'Auto'
    },
    {
      id: 8,
      name: 'Pajero',
      price: 'IDR 1,500,000',
      image: '/image/cars/pajero.png',
      passengers: '7 Seats',
      transmission: 'Auto'
    },
    {
      id: 4,
      name: 'Bus Medium & Big Bus',
      price: 'IDR 1,800,000',
      image: '/image/cars/medium-bus.jpeg',
      passengers: '30-50 Seats',
      transmission: 'Manual'
    },
    {
      id: 10,
      name: 'Alphard',
      price: 'IDR 3,300,000',
      image: '/image/cars/alphard.jpeg',
      passengers: '7 Seats',
      transmission: 'Auto'
    }
  ]
};
