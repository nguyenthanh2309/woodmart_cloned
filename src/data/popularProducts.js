import carousel1 from '../assets/popular_products/wallet_black/w-accessories-product-14-2-430x491.jpg.webp';
import carousel2 from '../assets/popular_products/silicone/accessories-product-olive-strap-1-430x491.jpg.webp';
import carousel3 from '../assets/popular_products/airpod_case/accessories-product-blue-airpods-1-1-430x491.jpg.webp';
import carousel4 from '../assets/popular_products/iphone-13/w-accessories-product-iphone-13-1-3.jpg.webp';
import carousel5 from '../assets/popular_products/lightning/cables-lightning-12-1-430x491.jpg.webp';
import carousel6 from '../assets/popular_products/stand_and_docks/charge-station-wireless-charge-3-1-430x491.jpg.webp';

const popularProducts = [
    {
        id: 1,
        name: 'iPhone Leather Wallet Black',
        model: 'Wallet',
        stocking: 'stocking',
        status: 'sale',
        price: '$199.00',
        sale: '-25%',
        salePrice: '$149.00',
        src: carousel1
    },
    {
        id: 2,
        name: "Everyday Leather Strap - Olive",
        model: 'silicone',
        stocking: 'stocking',
        status: 'normal',
        price: '$199.00',
        src: carousel2
    },
    {
        id: 3,
        name: 'Case for Airpod - Blue',
        model: 'Cases',
        stocking: 'stocking',
        status: 'normal',
        price: '$9.99',
        src: carousel3
    },
    {
        id: 4,
        name: 'iPhone 13 Case - Smokey Black',
        model: 'iPhone 13',
        stocking: 'sold out',
        status: 'hot',
        price: '$169.00',
        src: carousel4
    },
    {
        id: 5,
        name: 'Lightning Cable USB-A',
        model: 'Lightning',
        stocking: 'stocking',
        status: 'new',
        price: '$25.00',
        src: carousel5
    },
    {
        id: 6,
        name: 'Fast Wireless Charger 3in1',
        model: 'Stands & docks',
        stocking: 'stocking',
        status: 'normal',
        price: '$249.00',
        src: carousel6
    }
]

export default popularProducts;