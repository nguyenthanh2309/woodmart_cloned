import caseImg from "../assets/categories/wood-accessories-category-1-132.jpg.webp";
import magsafeImg from "../assets/categories/wood-accessories-category-2.jpg.webp";
import cableImg from "../assets/categories/wood-accessories-category-3.jpg.webp";
import chargerImg from "../assets/categories/wood-accessories-category-4.jpg.webp";
import strapImg from "../assets/categories/wood-accessories-category-5.jpg.webp";
import powerBanks from "../assets/categories/wood-accessories-category-6-1.jpg.webp";

const categories = [{
        id: 1,
        name: "Cases",
        path: 'cases',
        total: 51,
        src: caseImg,
    },
    {
        id: 2,
        name: 'MagSafe',
        path: 'magsafe',
        total: 15,
        src: magsafeImg
    },
    {
        id: 3,
        name: 'Cables',
        path: 'cables',
        total: 18,
        src: cableImg
    },
    {
        id: 4,
        name: 'Charger',
        path: 'charger',
        total: 12,
        src: chargerImg
    },
    {
        id: 5,
        name: 'Straps',
        path: 'straps',
        total: 38,
        src: strapImg
    },
    {
        id: 6,
        name: "Power Banks",
        path: 'power_banks',
        total: 18,
        src: powerBanks
    }
];

export default categories;