/* case products */
import caseProduct1 from "../assets/products/cases/iphone_blue/blue-case-back-430x491.jpg.webp";
import caseProduct2 from "../assets/products/cases/iphone_xr/w-accessories-product-iphone-xr-10-1-430x491.jpg.webp";
import caseProduct3 from "../assets/products/cases/iphone_green/green-case-back-430x491.jpg.webp";
import caseProduct4 from '../assets/products/cases/iphone_deep_violet/w-accessories-product-iphone-12-violet-1-430x491.jpg.webp';
import caseProduct5 from '../assets/products/cases/iphone_dusty_pink/w-accessories-product-iphone-13-3-430x491.jpg.webp';
import caseProduct6 from '../assets/products/cases/iphone_black/w-accessories-product-iphone-13-6-430x491.jpg.webp';
import caseProduct7 from '../assets/products/cases/iphone_red-rose/w-accessories-product-iphone-13-2-430x491.jpg.webp';
import caseProduct8 from '../assets/products/cases/iphone_lavender/w-accessories-product-link-3-1-430x491.jpg.webp';
import caseProduct9 from '../assets/products/cases/iphone_blackwhite/w-accessories-product-12-pro-4-430x491.jpg.webp';
import caseProduct10 from '../assets/products/cases/iphone_leather/w-accessories-product-iphone-11-pro-7-430x491.jpg.webp'
/*  */

/* straps products */
import strapProduct1 from '../assets/products/straps/green_sport_band/straps-silicone-1-430x491.jpg'
import strapProduct2 from '../assets/products/straps/solo_loop_black/straps-sport-2-430x491.jpg'
import strapProduct3 from '../assets/products/straps/apple_watch_series_6/w-accessories-product-17-430x491.jpg'
import strapProduct4 from '../assets/products/straps/milanese_loop_band_dark_blue/straps-metal-6-430x491.jpg'
import strapProduct5 from '../assets/products/straps/metal_magnetic_space_gold/straps-metal-3-430x491.jpg'
import strapProduct6 from '../assets/products/straps/modern_buckle_brown/straps-leather-6-430x491.jpg'
import strapProduct7 from '../assets/products/straps/mordern_buckle_apple_watch/straps-metal-12-430x491.jpg'
import strapProduct8 from '../assets/products/straps/nylon_apple_watch/w-accessories-product-15-430x491.jpg'
import strapProduct9 from '../assets/products/straps/steel_band_silver/straps-ltd-4-430x491.jpg'
import strapProduct10 from '../assets/products/straps/woodcessories/straps-ltd-5-430x491.jpg'
/*  */

const products = [
  {
    category: "cases",
    productsDetail: [
      {
        id: 1,
        name: "iPhone 12 Pro Moment Case - Blue",
        model: "iPhone 12 pro",
        price: "$149.00",
        status: "stocking",
        sale: "",
        src: caseProduct1
      },
      {
        id: 2,
        name: "Full Aquarelle iPhone XR",
        model: "iPhone XR",
        price: "$169.00",
        status: "stocking",
        sale: "",
        src: caseProduct2
      },
      {
        id: 3,
        name: "iPhone 12 Pro Moment Case - Olive",
        model: "iPhone 12 pro",
        rating: 5,
        price: "$149.00",
        status: "hot",
        sale: "0",
        src: caseProduct3
      },
      {
        id: 4,
        name: "Leather Case iPhone 12 Deep Violet",
        model: "iPhone 12",
        price: "$230.00",
        status: "stocking",
        sale: "",
        src: caseProduct4
      },
      {
        id: 5,
        name: "iPhone 13 Case Luxe - Dusty Pink",
        model: "iPhone 13",
        price: "$149.00",
        status: "sold out",
        sale: "",
        src: caseProduct5
      },
      {
        id: 6,
        name: "iPhone 13 Case Max - Black",
        model: "iPhone 13",
        price: "$159.00",
        status: "sold out",
        sale: "",
        src: caseProduct6
      },
      {
        id: 7,
        name: "iPhone 13 Case With MagSafe - Red Rose",
        model: "iPhone 13",
        price: "$199.00",
        status: "sale",
        sale: "-30%",
        salePrice: "$139.00",
        src: caseProduct7
      },
      {
        id: 8,
        name: "Epik Silicone Case Full - Lavender",
        model: "iPhone 12",
        price: "$99.00",
        status: "stocking",
        sale: "",
        src: caseProduct8
      },
      {
        id: 9,
        name: "iPhone 12 Pro Max Silicone - Black/White",
        model: "iPhone 12 pro",
        price: "$99.00",
        status: "stocking",
        sale: "",
        src: caseProduct9
      },
      {
        id: 10,
        name: "Leather Case iPhone 11 Pro",
        model: "iPhone 11 pro",
        price: "$230.00",
        status: "stocking",
        sale: "",
        src: caseProduct10
      },
    ],
  },
  {
    category: "straps",
    productsDetail: [
      {
        id: 1,
        name: "Green Sport Band",
        model: "Silicone",
        price: "$149.00",
        src: strapProduct1
      },
      {
        id: 2,
        name: "Solo Loop Black",
        model: "Sport",
        price: "$199.00",
        src: strapProduct2
      },
      {
        id: 3,
        name: "Apple Watch Series 6",
        model: "Silicone",
        price: "$399.00",
        src: strapProduct3
      },
      {
        id: 4,
        name: "Milanese Loop Band Dark Blue",
        model: "Metal",
        price: "$149.00",
        src: strapProduct4
      },
      {
        id: 5,
        name: "Metal Magnetic Space Gold",
        model: "Metal",
        price: "$169.00",
        src: strapProduct5
      },
      {
        id: 6,
        name: "Modern Buckle Brown",
        model: "Leather",
        price: "$169.00",
        src: strapProduct6
      },
      {
        id: 7,
        name: "Modern Buckle Apple Watch",
        model: "Silicone",
        price: "$149.00",
        src: strapProduct7
      },
      {
        id: 8,
        name: "Nylon Apple Watch",
        model: "Canvas",
        price: "$349.00",
        src: strapProduct8,
        rating: 5,
      },
      {
        id: 9,
        name: "Steel Band Silver",
        model: "Limited series",
        price: "$349.00",
        src: strapProduct9
      },
      {
        id: 10,
        name: "Woodcessories - EcoStrap",
        model: "Limited series",
        price: "$137.00",
        src: strapProduct10
      },
    ],
  },
  {
    category: "magsafe",
    productsDetail: [
      {
        id: 1,
        name: "Card Sleeve FX20",
        model: "Wallet",
        price: "$89.00",
        status: "stocking",
        sale: "",
      },
      {
        id: 2,
        name: "Anker Magnetic Battery",
        model: "MagSafe Battery",
        price: "$65.00",
        status: "new",
        sale: "",
      },
      {
        id: 3,
        name: "MagSafe Card Sleeve",
        model: "Wallet",
        price: "$79.00",
        status: "new",
        sale: "",
      },
      {
        id: 4,
        name: "MagSafe Compatible Card Wallet",
        model: "Wallet",
        price: "$39.00",
        status: "stocking",
        sale: "",
      },
      {
        id: 5,
        name: "MagSafe Powerbank - 6000mAh",
        model: "MagSafe Battery",
        price: "$59.00",
        status: "stocking",
        sale: "",
      },
      {
        id: 6,
        name: "Leather Wallet Saddle (Sequoia Green)",
        model: "Wallet",
        price: "$169.00",
        status: "stocking",
        sale: "",
      },
      {
        id: 7,
        name: "Magnetic Wireless iPhone 13 | 12",
        model: "MagSafe Battery",
        price: "$99.00",
        status: "stocking",
        sale: "",
      },
      {
        id: 8,
        name: "Magnetic 10W Qi",
        model: "MagSafe Battery",
        price: "$119.00",
        status: "hot",
        sale: "",
      },
      {
        id: 9,
        name: "MagSafee Battery Pack",
        model: "MagSafe Battery",
        price: "$65.00",
        status: "stocking",
        sale: "",
      },
      {
        id: 10,
        name: "MagSafe Black Card Sleeve",
        model: "Wallet",
        price: "$89.00",
        status: "stocking",
        sale: "",
      },
    ],
  },
];

export default products;
