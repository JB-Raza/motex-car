import { BLOG_IMAGES, BRAND_IMAGES, CAR_BODY_IMAGES, CARD_CAR_IMAGES, DEALERS_IMAGES, IMAGES, TESTIMONIAL_IMAGES } from "./files";

export const carListings = [
  {
    _id: 0,
    images: [CARD_CAR_IMAGES.Car_1, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4, CARD_CAR_IMAGES.Car_1],
    title: 'Toyota Corolla X',
    rating: 4.5,
    totalReviews: 120,
    price: 2300,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'sedan',
      condition: 'used',
      mileage: '23',
      transmission: 'automatic',
      model: '2023',
      fuelType: 'hybrid',
      color: 'Silver',
      doors: 4,
      cylinders: 4,
      engineSize: '1.8L',
      VIN: '1234567890ABCDEFG'
    },
    carFeatures: [
      'Touchscreen Infotainment System',
      'Adaptive Cruise Control',
      'Lane Departure Alert',
      'Automatic Climate Control',
      'Backup Camera',
      'Bluetooth Connectivity'
    ],
    carHistory: [
      'Single owner vehicle',
      'Accident-free history',
      'Regularly serviced at dealership'
    ],
    location: 'Los Angeles, CA',
    reviews: [
      { _id: 0, authorName: "Daniel Wellman", authorAvatar: IMAGES.Review_1, comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.", datePosted: "January 31, 2023" },
      { _id: 1, authorName: "Emily Johnson", authorAvatar: IMAGES.Review_2, comment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", datePosted: "February 15, 2023" },
      { _id: 2, authorName: "Michael Lee", authorAvatar: IMAGES.Review_3, comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", datePosted: "March 10, 2023" }
    ]
  },
  {
    _id: 1,
    images: [CARD_CAR_IMAGES.Car_8, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4],
    title: 'Honda Civic Turbo',
    rating: 4.8,
    totalReviews: 90,
    price: 2800,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'sedan',
      condition: 'new',
      mileage: '18',
      transmission: 'manual',
      model: '2024',
      fuelType: 'petrol',
      color: 'Red',
      doors: 4,
      cylinders: 4,
      engineSize: '1.5L Turbo',
      VIN: '9876543210ZYXWVUT'
    },
    carFeatures: [
      'Turbocharged Engine',
      'Sporty Interior Trim',
      'LED Headlights',
      'Apple CarPlay/Android Auto',
      'Sunroof',
      'Keyless Entry'
    ],
    carHistory: [
      'Brand new from factory',
      'Full manufacturer warranty'
    ],
    location: 'New York, NY',
    reviews: [
      { _id: 0, authorName: "Sophia Davis", authorAvatar: IMAGES.Review_1, comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", datePosted: "February 28, 2024" },
      { _id: 1, authorName: "James Wilson", authorAvatar: IMAGES.Review_1, comment: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", datePosted: "March 5, 2024" }
    ]
  },
  {
    _id: 2,
    images: [CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4],
    title: 'Kia Sportage AWD',
    rating: 4.2,
    totalReviews: 45,
    price: 3500,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'SUV',
      condition: 'used',
      mileage: '21',
      transmission: 'automatic',
      model: '2022',
      fuelType: 'diesel',
      color: 'White',
      doors: 4,
      cylinders: 4,
      engineSize: '2.4L',
      VIN: 'ABCDEFGH123456789'
    },
    carFeatures: [
      'All-Wheel Drive',
      'Panoramic Sunroof',
      'Blind-Spot Monitoring',
      'Heated and Ventilated Seats',
      'Infotainment System',
      'Roof Rails'
    ],
    carHistory: [
      'Two owners',
      'Minor front bumper repair',
      'Well-maintained'
    ],
    location: 'Chicago, IL',
    reviews: [
      { _id: 0, authorName: "Olivia Brown", authorAvatar: IMAGES.Review_1, comment: "Curabitur pretium tincidunt lacus. Nulla facilisi. Nullam faucibus mi quis velit.", datePosted: "January 10, 2024" },
      { _id: 1, authorName: "Ethan Taylor", authorAvatar: IMAGES.Review_1, comment: "Donec quis dui at sapien porttitor luctus. Nam quis sem sed mauris.", datePosted: "January 20, 2024" }
    ]
  },
  {
    _id: 3,
    images: [CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4],
    title: 'Hyundai Sonata',
    rating: 4.0,
    totalReviews: 60,
    price: 2700,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'sedan',
      condition: 'used',
      mileage: '25',
      transmission: 'manual',
      model: '2021',
      fuelType: 'petrol',
      color: 'Gray',
      doors: 4,
      cylinders: 4,
      engineSize: '2.5L',
      VIN: 'HIJKLMNOPQRSTUVWXYZ'
    },
    carFeatures: [
      'Leather Upholstery',
      'Heated Steering Wheel',
      'Digital Cockpit Display',
      'Wireless Phone Charging',
      'Forward Collision-Avoidance Assist',
      'Smart Trunk Release'
    ],
    carHistory: [
      'Single owner vehicle',
      'Regular oil changes',
      'No major repairs'
    ],
    location: 'Houston, TX',
    reviews: [
      { _id: 0, authorName: "Liam Rodriguez", authorAvatar: IMAGES.Review_1, comment: "Fusce ac orci quis orci ultricies tristique. Nam ut sem eget nunc suscipit.", datePosted: "November 1, 2023" },
      { _id: 1, authorName: "Ava Martinez", authorAvatar: IMAGES.Review_1, comment: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", datePosted: "November 15, 2023" }
    ]
  },
  {
    _id: 4,
    images: [CARD_CAR_IMAGES.Car_4, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4],
    title: 'Tesla Model 3',
    rating: 4.9,
    totalReviews: 210,
    price: 4300,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'sedan',
      condition: 'new',
      mileage: '12',
      transmission: 'automatic',
      model: '2024',
      fuelType: 'electric',
      color: 'Black',
      doors: 4,
      cylinders: 0,
      engineSize: 'N/A',
      VIN: 'TUVWX1234567890YZ'
    },
    carFeatures: [
      'Autopilot',
      'All-Glass Roof',
      '15-inch Touchscreen Display',
      'Over-the-Air Software Updates',
      'Sentry Mode',
      'Heated Seats'
    ],
    carHistory: [
      'Brand new from Tesla',
      'Full factory warranty'
    ],
    location: 'San Francisco, CA',
    reviews: [
      { _id: 0, authorName: "Noah Miller", authorAvatar: IMAGES.Review_1, comment: "Praesent ut nisl in nulla interdum interdum. Integer nec neque eu ligula.", datePosted: "March 1, 2024" },
      { _id: 1, authorName: "Isabella Garcia", authorAvatar: IMAGES.Review_1, comment: "Maecenas sed diam eget risus varius blandit sit amet non magna.", datePosted: "March 10, 2024" }
    ]
  },
  {
    _id: 5,
    images: [CARD_CAR_IMAGES.Car_5, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4],
    title: 'BMW X5 M Sport',
    rating: 4.6,
    totalReviews: 98,
    price: 5000,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'SUV',
      condition: 'used',
      mileage: '20',
      transmission: 'automatic',
      model: '2022',
      fuelType: 'diesel',
      color: 'Blue',
      doors: 4,
      cylinders: 6,
      engineSize: '3.0L Turbo',
      VIN: 'ASDFGHJKL12345678'
    },
    carFeatures: [
      'M Sport Package',
      'Harman Kardon Sound System',
      'Head-Up Display',
      'Multi-Contour Seats',
      'Adaptive Suspension',
      'Panoramic Sunroof'
    ],
    carHistory: [
      'Single owner vehicle',
      'Certified Pre-Owned',
      'Full service records'
    ],
    location: 'Miami, FL',
    reviews: [
      { _id: 0, authorName: "Jacob Thompson", authorAvatar: IMAGES.Review_1, comment: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.", datePosted: "September 20, 2023" },
      { _id: 1, authorName: "Mia Hernandez", authorAvatar: IMAGES.Review_1, comment: "Nullam id dolor id nibh ultricies vehicula ut id elit.", datePosted: "October 5, 2023" }
    ]
  },
  {
    _id: 6,
    images: [CARD_CAR_IMAGES.Car_6, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4],
    title: 'Audi A4 S Line',
    rating: 4.3,
    totalReviews: 74,
    price: 3900,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'sedan',
      condition: 'used',
      mileage: '19',
      transmission: 'automatic',
      model: '2023',
      fuelType: 'hybrid',
      color: 'Gray',
      doors: 4,
      cylinders: 4,
      engineSize: '2.0L Turbo',
      VIN: 'QWERTYUIOP9876543'
    },
    carFeatures: [
      'Quattro All-Wheel Drive',
      'Virtual Cockpit',
      'Bang & Olufsen Sound System',
      'Matrix-design LED headlights',
      'Sport Suspension',
      'Leather Interior'
    ],
    carHistory: [
      'One owner',
      'Accident-free',
      'Full service records'
    ],
    location: 'Denver, CO',
    reviews: [
      { _id: 0, authorName: "Alexander White", authorAvatar: IMAGES.Review_1, comment: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.", datePosted: "December 2, 2023" },
      { _id: 1, authorName: "Charlotte Moore", authorAvatar: IMAGES.Review_1, comment: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.", datePosted: "December 20, 2023" }
    ]
  },
  {
    _id: 7,
    images: [CARD_CAR_IMAGES.Car_7, CARD_CAR_IMAGES.Car_2, CARD_CAR_IMAGES.Car_3, CARD_CAR_IMAGES.Car_4],
    title: 'Suzuki Swift GLX',
    rating: 4.1,
    totalReviews: 33,
    price: 2100,
    description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English.",
    highlightInfo: {
      bodyType: 'hatchback',
      condition: 'new',
      mileage: '24',
      transmission: 'manual',
      model: '2024',
      fuelType: 'petrol',
      color: 'White',
      doors: 4,
      cylinders: 4,
      engineSize: '1.2L',
      VIN: 'ZXCVBNMLKJHGFEDCB'
    },
    carFeatures: [
      'Touchscreen Infotainment',
      'Rear Parking Sensors',
      'Push-Button Start',
      'Automatic Climate Control',
      'Dual Airbags',
      'ABS with EBD'
    ],
    carHistory: [
      'Brand new from factory',
      'Full manufacturer warranty'
    ],
    location: 'Seattle, WA',
    reviews: [
      { _id: 0, authorName: "William Harris", authorAvatar: IMAGES.Review_1, comment: "Cras mattis consectetur purus sit amet fermentum.", datePosted: "April 1, 2024" },
      { _id: 1, authorName: "Evelyn King", authorAvatar: IMAGES.Review_1, comment: "Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.", datePosted: "April 10, 2024" }
    ]
  },

]


export const carBodyTypes = [
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_1,
    title: "sedan",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_2,
    title: "compact",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_3,
    title: "convertible",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_4,
    title: "SUV",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_5,
    title: "crossover",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_6,
    title: "wagon",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_7,
    title: "sports",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_8,
    title: "pickup",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_9,
    title: "family MPV",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_10,
    title: "Coupe",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_11,
    title: "electric",
  },
  {
    imageUrl: CAR_BODY_IMAGES.CarBody_12,
    title: "luxury",
  },
]

export const carBrands = [
  {
    imageUrl: BRAND_IMAGES.Brand_1,
    title: "Ferrari",
  },
  {
    imageUrl: BRAND_IMAGES.Brand_2,
    title: "Hyundai",
  },
  {
    imageUrl: BRAND_IMAGES.Brand_3,
    title: "Mercedes Benz",
  },
  {
    imageUrl: BRAND_IMAGES.Brand_4,
    title: "Toyota",
  },
  {
    imageUrl: BRAND_IMAGES.Brand_5,
    title: "BMW",
  },
  {
    imageUrl: BRAND_IMAGES.Brand_6,
    title: "Nissan",
  },
]


export const carDealers = [
  {
    _id: "d001",
    title: "City Motors NY",
    imageUrl: DEALERS_IMAGES.Dealer_1,
    address: "123 Elm Street, New York",
    phone: "(212) 555-0143",
    availableListings: [
      { listingId: "l001", name: "Toyota Corolla 2020" },
      { listingId: "l002", name: "Honda Civic 2019" }
    ]
  },
  {
    _id: "d002",
    title: "Westside Auto LA",
    imageUrl: DEALERS_IMAGES.Dealer_2,
    address: "456 Oak Avenue, Los Angeles",
    phone: "(310) 555-0198",
    availableListings: [
      { listingId: "l003", name: "Ford Mustang 2021" }
    ]
  },
  {
    _id: "d003",
    title: "Midwest Wheels",
    imageUrl: DEALERS_IMAGES.Dealer_3,
    address: "789 Maple Drive, Chicago",
    phone: "(773) 555-0234",
    availableListings: [
      { listingId: "l004", name: "Chevy Malibu 2018" },
      { listingId: "l005", name: "Nissan Altima 2020" }
    ]
  },
  {
    _id: "d004",
    title: "Houston Auto Hub",
    imageUrl: DEALERS_IMAGES.Dealer_4,
    address: "321 Pine Road, Houston",
    phone: "(713) 555-0321",
    availableListings: []
  },
  {
    _id: "d005",
    title: "Florida DriveTime",
    imageUrl: DEALERS_IMAGES.Dealer_5,
    address: "654 Cedar Lane, Miami",
    phone: "(305) 555-0456",
    availableListings: [
      { listingId: "l006", name: "Kia Soul 2021" }
    ]
  },
  {
    _id: "d006",
    title: "Seattle Auto Market",
    imageUrl: DEALERS_IMAGES.Dealer_6,
    address: "987 Birch Blvd, Seattle",
    phone: "(206) 555-0678",
    availableListings: [
      { listingId: "l007", name: "Subaru Outback 2022" }
    ]
  },
  {
    _id: "d007",
    title: "Denver Auto Spot",
    imageUrl: DEALERS_IMAGES.Dealer_7,
    address: "147 Spruce Court, Denver",
    phone: "(720) 555-0789",
    availableListings: [
      { listingId: "l008", name: "Jeep Wrangler 2019" },
      { listingId: "l009", name: "Hyundai Elantra 2020" }
    ]
  },
  {
    _id: "d008",
    title: "Phoenix Car Central",
    imageUrl: DEALERS_IMAGES.Dealer_8,
    address: "258 Walnut Way, Phoenix",
    phone: "(602) 555-0890",
    availableListings: []
  }
]

export const testimonialData = [
  {
    _id: "1a2b3c4d5e",
    authorName: "Alice Johnson",
    authorImage: TESTIMONIAL_IMAGES.Testimonial_1,
    review: "Absolutely loved the experience! Would highly recommend."
  },
  {
    _id: "2b3c4d5e6f",
    authorName: "Mark Thompson",
    authorImage: TESTIMONIAL_IMAGES.Testimonial_2,
    review: "The service was okay, but could be improved in some areas."
  },
  {
    _id: "3c4d5e6f7g",
    authorName: "Sara Lee",
    authorImage: TESTIMONIAL_IMAGES.Testimonial_3,
    review: "Fantastic atmosphere and great support. I’ll be back!"
  },
  {
    _id: "4d5e6f7g8h",
    authorName: "David Kim",
    authorImage: TESTIMONIAL_IMAGES.Testimonial_4,
    review: "Didn’t meet my expectations. Staff was a bit rude."
  },
  {
    _id: "5e6f7g8h9i",
    authorName: "Emily Nguyen",
    authorImage: TESTIMONIAL_IMAGES.Testimonial_5,
    review: "Excellent service and very friendly staff. Highly recommended!"
  }
]

export const sampleArticles = [
  {
    _id: "1a2b3c",
    imageUrl: BLOG_IMAGES.Blog_1,
    authorName: "Jane Doe",
    datePosted: "2025-07-01",
    title: "Exploring the Future of Web Development",
  },
  {
    _id: "4d5e6f",
    imageUrl: BLOG_IMAGES.Blog_2,
    authorName: "John Smith",
    datePosted: "2025-07-15",
    title: "Understanding Async in JavaScript",
  },
  {
    _id: "7g8h9i",
    imageUrl: BLOG_IMAGES.Blog_3,
    authorName: "Alice Johnson",
    datePosted: "2025-07-25",
    title: "UI/UX Principles for Modern Applications",
  },
]


export const availableCarBrands = [
  { _id: 1, title: "Toyota" },
  { _id: 2, title: "Ford" },
  { _id: 3, title: "BMW" },
  { _id: 4, title: "Hyundai" },
  { _id: 5, title: "Peugeot" },
  { _id: 6, title: "Tata Motors" }
]

// chat data

export const sampleChatsData = [
  {
    _id: "chat1",
    recepientId: "user101",
    recepientName: "Angela",
    profilePic: IMAGES.Chat_1,
    activeStatus: "online",
    messages: [
      { sender: "me", reciever: "user101", message: "Hey Angela, how are you?" },
      { sender: "user101", reciever: "me", message: "I'm good! How about you?" }
    ]
  },
  {
    _id: "chat2",
    recepientId: "user102",
    recepientName: "John",
    profilePic: IMAGES.Chat_2,
    activeStatus: "offline",
    messages: [
      { sender: "me", reciever: "user102", message: "Are you coming to the party?" },
      { sender: "user102", reciever: "me", message: "Yes, I’ll be there by 8!" }
    ]
  },
  {
    _id: "chat3",
    recepientId: "user103",
    recepientName: "Sophia",
    profilePic: IMAGES.Chat_3,
    activeStatus: "away",
    messages: [
      { sender: "me", reciever: "user103", message: "Can you send me the report?" },
      { sender: "user103", reciever: "me", message: "Sure, sending it now!" }
    ]
  },
  {
    _id: "chat4",
    recepientId: "user104",
    recepientName: "Liam",
    profilePic: IMAGES.Chat_4,
    activeStatus: "online",
    messages: [
      { sender: "me", reciever: "user104", message: "Lunch today?" },
      { sender: "user104", reciever: "me", message: "Yes, let's go at 1 PM." }
    ]
  },
  {
    _id: "chat5",
    recepientId: "user105",
    recepientName: "Emily",
    profilePic: IMAGES.Chat_1,
    activeStatus: "busy",
    messages: [
      { sender: "me", reciever: "user105", message: "Did you complete the task?" },
      { sender: "user105", reciever: "me", message: "Almost done. Will update you soon." }
    ]
  },
  {
    _id: "chat6",
    recepientId: "user106",
    recepientName: "Noah",
    profilePic: IMAGES.Chat_2,
    activeStatus: "offline",
    messages: [
      { sender: "me", reciever: "user106", message: "Long time no see!" },
      { sender: "user106", reciever: "me", message: "Yeah! Let’s catch up this weekend." }
    ]
  },
  {
    _id: "chat7",
    recepientId: "user107",
    recepientName: "Olivia",
    profilePic: IMAGES.Chat_3,
    activeStatus: "online",
    messages: [
      { sender: "me", reciever: "user107", message: "Your presentation was amazing!" },
      { sender: "user107", reciever: "me", message: "Thank you so much!" }
    ]
  },
  {
    _id: "chat8",
    recepientId: "user108",
    recepientName: "James",
    profilePic: IMAGES.Chat_4,
    activeStatus: "away",
    messages: [
      { sender: "me", reciever: "user108", message: "Can we reschedule the meeting?" },
      { sender: "user108", reciever: "me", message: "Sure, how about tomorrow?" }
    ]
  },
  {
    _id: "chat9",
    recepientId: "user109",
    recepientName: "Ava",
    profilePic: IMAGES.Chat_1,
    activeStatus: "online",
    messages: [
      { sender: "me", reciever: "user109", message: "What’s the status of the order?" },
      { sender: "user109", reciever: "me", message: "It has been shipped!" }
    ]
  },
  {
    _id: "chat10",
    recepientId: "user110",
    recepientName: "William",
    profilePic: IMAGES.Chat_2,
    activeStatus: "busy",
    messages: [
      { sender: "me", reciever: "user110", message: "Don’t forget the meeting at 4." },
      { sender: "user110", reciever: "me", message: "Got it, thanks for the reminder." }
    ]
  }
];







