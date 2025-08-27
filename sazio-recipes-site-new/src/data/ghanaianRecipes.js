import bankuImg from '../assets/images/banku.png';
import fufuImg from '../assets/images/fufu.webp';
import waakyeImg from '../assets/images/waakye.png';
import jollofImg from '../assets/images/jollof.png';
import kokoImg from '../assets/images/koko.png';
import kenkeyImg from '../assets/images/kenkey.png';

const ghanaianRecipes = [
  {
    id: 1,
    title: "Banku with Okro Stew",
    desc: "Traditional fermented corn and cassava dough served with rich okro stew",
    img: bankuImg,
    category: "main-dishes",
    difficulty: "Medium",
    cookTime: "45 mins",
    servings: 4,
    rating: 4.9,
    ingredients: [
      "2 cups corn flour",
      "1 cup cassava flour",
      "Water for mixing",
      "Salt to taste",
      "Fresh okro",
      "Palm oil",
      "Onions",
      "Tomatoes",
      "Pepper",
      "Fish or meat"
    ],
    instructions: [
      "Mix corn and cassava flour with water to form a smooth paste",
      "Allow to ferment for 24-48 hours",
      "Cook the fermented mixture while stirring continuously",
      "Shape into balls and serve with okro stew"
    ]
  },
  {
    id: 2,
    title: "Fufu with Light Soup",
    desc: "Smooth pounded yam and plantain served with aromatic light soup",
    img: fufuImg,
    category: "main-dishes",
    difficulty: "Medium",
    cookTime: "40 mins",
    servings: 4,
    rating: 4.8,
    ingredients: [
      "2 large yams",
      "2 ripe plantains",
      "Water for boiling",
      "Salt to taste",
      "Fresh herbs",
      "Meat or fish",
      "Pepper",
      "Onions",
      "Garlic"
    ],
    instructions: [
      "Boil yam and plantain until soft",
      "Pound together in a mortar until smooth",
      "Shape into balls",
      "Prepare light soup with meat and herbs",
      "Serve fufu with hot soup"
    ]
  },
  {
    id: 3,
    title: "Waakye with Shito",
    desc: "Rice and beans cooked with sorghum leaves, served with spicy black pepper sauce",
    img: waakyeImg,
    category: "main-dishes",
    difficulty: "Easy",
    cookTime: "60 mins",
    servings: 6,
    rating: 4.7,
    ingredients: [
      "2 cups rice",
      "1 cup black-eyed beans",
      "Sorghum leaves",
      "Water",
      "Salt",
      "Shito (black pepper sauce)",
      "Gari",
      "Plantain"
    ],
    instructions: [
      "Soak beans overnight",
      "Cook beans with sorghum leaves",
      "Add rice and cook until tender",
      "Serve with shito, gari, and fried plantain"
    ]
  },
  {
    id: 4,
    title: "Jollof Rice",
    desc: "Famous West African rice dish cooked in rich tomato sauce with spices",
    img: jollofImg,
    category: "main-dishes",
    difficulty: "Medium",
    cookTime: "50 mins",
    servings: 6,
    rating: 4.9,
    ingredients: [
      "3 cups long grain rice",
      "Tomato paste",
      "Fresh tomatoes",
      "Onions",
      "Garlic",
      "Ginger",
      "Scotch bonnet pepper",
      "Vegetable oil",
      "Chicken stock",
      "Spices"
    ],
    instructions: [
      "Blend tomatoes, onions, garlic, and ginger",
      "Fry tomato paste in oil until dark",
      "Add blended mixture and cook",
      "Add rice and stock, cook until tender"
    ]
  },
  {
    id: 5,
    title: "Koko with Koose",
    desc: "Traditional millet porridge served with spicy bean cakes",
    img: kokoImg,
    category: "breakfast",
    difficulty: "Easy",
    cookTime: "30 mins",
    servings: 4,
    rating: 4.6,
    ingredients: [
      "2 cups millet flour",
      "Water",
      "Sugar to taste",
      "Ginger",
      "Black-eyed beans",
      "Onions",
      "Pepper",
      "Oil for frying"
    ],
    instructions: [
      "Mix millet flour with water and ginger",
      "Cook until thickened, add sugar",
      "For koose, blend beans with spices",
      "Fry bean mixture in hot oil",
      "Serve koko with hot koose"
    ]
  },
  {
    id: 6,
    title: "Kenkey with Fish",
    desc: "Fermented corn dough wrapped in corn husks, served with grilled fish",
    img: kenkeyImg,
    category: "main-dishes",
    difficulty: "Hard",
    cookTime: "120 mins",
    servings: 4,
    rating: 4.8,
    ingredients: [
      "Corn flour",
      "Water",
      "Salt",
      "Corn husks",
      "Fresh fish",
      "Pepper",
      "Onions",
      "Tomatoes"
    ],
    instructions: [
      "Mix corn flour with water and allow to ferment",
      "Cook half the mixture",
      "Mix cooked and uncooked portions",
      "Wrap in corn husks and steam",
      "Serve with grilled fish and pepper sauce"
    ]
  }
];

export default ghanaianRecipes;

export const ghanaianCategories = [
  { 
    id: 'breakfast', 
    name: 'Breakfast', 
    icon: '🌅', 
    description: 'Traditional morning meals',
    dishes: ['Waakye', 'Tom Brown', 'Hausa Koko', 'Koko with Koose']
  },
  { 
    id: 'lunch', 
    name: 'Lunch', 
    icon: '☀️', 
    description: 'Midday favorites',
    dishes: ['Red Red', 'Waakye', 'Jollof Rice', 'Fried Rice']
  },
  { 
    id: 'dinner', 
    name: 'Dinner', 
    icon: '🌙', 
    description: 'Evening staples',
    dishes: ['Fufu', 'Banku', 'Jollof Rice', 'Kenkey']
  },
  { 
    id: 'snacks', 
    name: 'Snacks', 
    icon: '🥜', 
    description: 'Street food and light bites',
    dishes: ['Kelewele', 'Bofrot', 'Chin Chin', 'Groundnuts']
  },
  { 
    id: 'beverages', 
    name: 'Beverages', 
    icon: '🥤', 
    description: 'Traditional drinks',
    dishes: ['Sobolo', 'Bissap', 'Palm Wine', 'Asaana']
  },
  { 
    id: 'desserts', 
    name: 'Desserts', 
    icon: '🍰', 
    description: 'Sweet treats',
    dishes: ['Bofrot', 'Tatale', 'Coconut Candy', 'Plantain Cake']
  }
];

export const ghanaianRegions = [
  { name: 'Ashanti Region', specialties: ['Fufu', 'Kontomire Stew', 'Ampesi'] },
  { name: 'Volta Region', specialties: ['Banku', 'Akple', 'Abolo'] },
  { name: 'Northern Ghana', specialties: ['Waakye', 'Tuo Zaafi', 'Dawadawa'] },
  { name: 'Central Region', specialties: ['Fante Fante', 'Etsew', 'Kaklo'] },
  { name: 'Western Region', specialties: ['Palm Nut Soup', 'Konkonte', 'Omo Tuo'] },
  { name: 'Eastern Region', specialties: ['Ampesi', 'Nkate Nkwan', 'Eto'] },
  { name: 'Greater Accra', specialties: ['Kenkey', 'Kpokpoi', 'Ga Kenkey'] }
];

export const traditionalIngredients = [
  { name: 'Cassava', description: 'Root vegetable used for fufu and gari' },
  { name: 'Plantain', description: 'Versatile fruit used ripe or unripe' },
  { name: 'Palm Oil', description: 'Traditional cooking oil from palm fruit' },
  { name: 'Yam', description: 'Starchy tuber, staple food' },
  { name: 'Scotch Bonnet', description: 'Very hot pepper, signature flavor' },
  { name: 'Dawadawa', description: 'Fermented locust beans seasoning' },
  { name: 'Kontomire', description: 'Cocoyam leaves, leafy vegetable' },
  { name: 'Shito', description: 'Spicy black pepper sauce' }
];