export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  image: string;
  gallery?: string[];
  tag: string;
  description: string;
  price: number;
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  facilities?: string[];
}

export const packages: TourPackage[] = [
  {
    id: 'maldives-paradise',
    title: 'Maldives Paradise Escape',
    location: 'Maldives',
    duration: '5 Days / 4 Nights',
    groupSize: '2-4 People',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=800'
    ],
    tag: 'Honeymoon',
    price: 95000,
    description: 'Experience ultimate luxury in the heart of the Indian Ocean. Our Maldives Paradise Escape offers crystal clear waters, white sandy beaches, and overwater villas that will take your breath away.',
    itinerary: [
      { day: 1, title: 'Arrival & Transfer', description: 'Arrive at Male International Airport and transfer to your luxury resort via speedboat.' },
      { day: 2, title: 'Snorkeling Adventure', description: 'Explore the vibrant coral reefs and swim with colorful marine life.' },
      { day: 3, title: 'Spa & Relaxation', description: 'Enjoy a full day of pampering at the resort\'s world-class spa.' },
      { day: 4, title: 'Sunset Cruise', description: 'Witness a magical sunset while cruising on a traditional Dhoni.' },
      { day: 5, title: 'Departure', description: 'Final breakfast at the resort and transfer back to the airport.' }
    ],
    included: ['Luxury Accommodation', 'All Meals', 'Speedboat Transfers', 'Snorkeling Gear', 'Sunset Cruise'],
    facilities: ['Free Wi-Fi', 'Private Pool', 'Spa & Wellness', 'Ocean View', 'Room Service']
  },
  {
    id: 'bali-cultural',
    title: 'Bali Cultural Wonders',
    location: 'Bali, Indonesia',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 10 People',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1539314171919-90c50fda9d0f?auto=format&fit=crop&q=80&w=800'
    ],
    tag: 'Cultural',
    price: 65000,
    description: 'Discover the spiritual heart of Indonesia. From ancient temples to lush rice terraces, this tour immerses you in the rich traditions and natural beauty of Bali.',
    itinerary: [
      { day: 1, title: 'Ubud Arrival', description: 'Check into your boutique villa in Ubud, the cultural capital of Bali.' },
      { day: 2, title: 'Temple Tour', description: 'Visit Tirta Empul and the iconic Tegalalang Rice Terrace.' },
      { day: 3, title: 'Monkey Forest', description: 'A walk through the sacred Monkey Forest and local craft markets.' },
      { day: 4, title: 'Mount Batur Sunrise', description: 'Early morning trek to the summit of Mount Batur for sunrise.' },
      { day: 5, title: 'Beach Club Day', description: 'Transfer to Seminyak for a day of sun and surf.' },
      { day: 6, title: 'Uluwatu Temple', description: 'Visit the cliffside Uluwatu Temple and watch a Kecak fire dance.' },
      { day: 7, title: 'Farewell', description: 'Last minute shopping and transfer to the airport.' }
    ],
    included: ['Boutique Accommodation', 'Daily Breakfast', 'Private Guide', 'Entrance Fees', 'Airport Transfers'],
    facilities: ['Free Wi-Fi', 'Swimming Pool', 'Restaurant', 'Air Conditioning', 'Airport Shuttle']
  },
  {
    id: 'swiss-alps',
    title: 'Swiss Alps Adventure',
    location: 'Switzerland',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 8 People',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1527668752968-14ce70a27dd3?auto=format&fit=crop&q=80&w=800'
    ],
    tag: 'Adventure',
    price: 185000,
    description: 'A high-altitude journey through the most stunning peaks in Europe. Perfect for those who love fresh mountain air and breathtaking vistas.',
    itinerary: [
      { day: 1, title: 'Lucerne Arrival', description: 'Arrive in the picturesque city of Lucerne.' },
      { day: 2, title: 'Mount Pilatus', description: 'Take the world\'s steepest cogwheel railway to the top of Mount Pilatus.' },
      { day: 3, title: 'Interlaken', description: 'Scenic train ride to Interlaken, the adventure capital of Switzerland.' },
      { day: 4, title: 'Jungfraujoch', description: 'Visit the "Top of Europe" at 3,454 meters above sea level.' },
      { day: 5, title: 'Grindelwald First', description: 'Enjoy the cliff walk and zip-lining in Grindelwald.' },
      { day: 6, title: 'Zurich Departure', description: 'Train to Zurich for your flight home.' }
    ],
    included: ['4-Star Hotels', 'Swiss Travel Pass', 'Mountain Excursions', 'Daily Breakfast', 'Professional Guide'],
    facilities: ['Free Wi-Fi', 'Heating', 'Restaurant', 'Bar/Lounge', 'Spa']
  },
  {
    id: 'dubai-desert',
    title: 'Dubai Desert Safari',
    location: 'Dubai, UAE',
    duration: '4 Days / 3 Nights',
    groupSize: 'Up to 6 People',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800'
    ],
    tag: 'Luxury',
    price: 55000,
    description: 'Experience the magic of the Arabian desert combined with the futuristic luxury of Dubai. A short but intense getaway.',
    itinerary: [
      { day: 1, title: 'City of Gold', description: 'Arrive in Dubai and visit the Burj Khalifa and Dubai Mall.' },
      { day: 2, title: 'Desert Safari', description: 'Dune bashing, camel riding, and a traditional BBQ dinner under the stars.' },
      { day: 3, title: 'Old Dubai', description: 'Explore the Gold and Spice Souks and cross the Creek in an Abra.' },
      { day: 4, title: 'Departure', description: 'Morning at leisure and transfer to DXB airport.' }
    ],
    included: ['Luxury Hotel', 'Burj Khalifa Tickets', 'Desert Safari Tour', 'Airport Transfers', 'Daily Breakfast'],
    facilities: ['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Air Conditioning', 'Restaurant']
  },
  {
    id: 'thailand-islands',
    title: 'Thailand Island Hopping',
    location: 'Phuket, Thailand',
    duration: '8 Days / 7 Nights',
    groupSize: 'Up to 12 People',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=800'
    ],
    tag: 'Beach',
    price: 45000,
    description: 'The ultimate tropical adventure. Explore the stunning islands of the Andaman Sea, from hidden lagoons to world-famous beaches.',
    itinerary: [
      { day: 1, title: 'Phuket Arrival', description: 'Check into your beachfront resort in Phuket.' },
      { day: 2, title: 'Phi Phi Islands', description: 'Full day boat tour to Maya Bay and Bamboo Island.' },
      { day: 3, title: 'James Bond Island', description: 'Explore the famous limestone cliffs of Phang Nga Bay.' },
      { day: 4, title: 'Krabi Transfer', description: 'Scenic ferry ride to the beautiful Railay Beach.' },
      { day: 5, title: 'Four Islands Tour', description: 'Visit Koh Poda, Chicken Island, and Tup Island.' },
      { day: 6, title: 'Free Day', description: 'Relax on the beach or explore local markets.' },
      { day: 7, title: 'Return to Phuket', description: 'Transfer back to Phuket for a farewell dinner.' },
      { day: 8, title: 'Departure', description: 'Transfer to Phuket International Airport.' }
    ],
    included: ['Resort Accommodation', 'Boat Tours', 'Daily Breakfast', 'Local Guides', 'All Transfers'],
    facilities: ['Free Wi-Fi', 'Beachfront', 'Swimming Pool', 'Bar', 'Air Conditioning']
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters',
    location: 'Kerala, India',
    duration: '5 Days / 4 Nights',
    groupSize: 'Up to 4 People',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1587222318667-31212ce2828d?auto=format&fit=crop&q=80&w=800'
    ],
    tag: 'Relaxation',
    price: 35000,
    description: 'Known as "God\'s Own Country", Kerala offers a serene escape through its network of canals, lagoons, and lush green landscapes.',
    itinerary: [
      { day: 1, title: 'Cochin Arrival', description: 'Explore the historic Fort Kochi and see the Chinese fishing nets.' },
      { day: 2, title: 'Munnar Hills', description: 'Drive to Munnar and visit the tea plantations.' },
      { day: 3, title: 'Alleppey Houseboat', description: 'Board a traditional Kettuvallam for an overnight cruise.' },
      { day: 4, title: 'Backwater Village', description: 'Experience local life in a traditional backwater village.' },
      { day: 5, title: 'Departure', description: 'Transfer back to Cochin for your flight.' }
    ],
    included: ['Houseboat Stay', 'Boutique Hotels', 'All Meals on Houseboat', 'Private Car', 'Spice Plantation Tour'],
    facilities: ['Free Wi-Fi', 'Restaurant', 'Air Conditioning', 'Room Service', 'Lake View']
  }
];
