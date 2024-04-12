import {CardProps} from "@chakra-ui/card";
import {PricingProps} from "@/component/subComponents/PricingComponent";

export const lists: CardProps[] = [
    {
        id: 1,
        image: "house.jpg",
        title: "House on Etoudi",
        text: "Yaounde",
        link: "/lands/Etoudi",
        price: "$5,000",
        tags: "For Sale",
        properties_1: "6 bedRooms",
        properties_2: "2 Baths",
        perimeter: "200 sqft",
    },
    {
        id: 2,
        image: "house.jpg",
        title: "House in Nlongkak",
        text: "Yaounde",
        price: "$10,00",
        tags: "For Sale",
        properties_1: "9 bedRooms",
        properties_2: "3 Baths",
        perimeter: "200 sqft",
    },
    {
        id: 3,
        image: "house.jpg",
        title: "A piece of land",
        text: "Douala",
        price: "$2.500",
        tags: "For Sale",
        properties_1: "6 bedRooms",
        properties_2: "2 Baths",
        perimeter: "200 sqft",
    },
    {
        id: 4,
        image: "house.jpg",
        title: "Quality Apartment For Sale",
        text: "Buea",
        price: "$3,000",
        tags: "For Sale",
        properties_1: "6 bedRooms",
        properties_2: "2 Baths",
        perimeter: "500 sqft",
    },
    {
        id: 5,
        image: "house.jpg",
        title: "Family House",
        text: "Germany",
        price: "$3,800",
        tags: "For Sale",
        properties_1: "10 bedRooms",
        properties_2: "2 Baths",
        perimeter: "700 sqft",
    }
]

export const cities: CardProps[] = [
    {
        id: 1,
        image: 'cmr-google-maps.png',
        properties_1: '2 properties',
        title: 'Yaounde',
    },
    {
        id: 2,
        image: 'cmr-google-maps.png',
        properties_1: '1 properties',
        title: 'Garoua',
    },
    {
        id: 3,
        image: 'cmr-google-maps.png',
        properties_1: '5 properties',
        title: 'Edea',
    },
    {
        id: 4,
        image: 'cmr-google-maps.png',
        properties_1: '10 properties',
        title: 'Yaounde',
    },
    {
        id: 5,
        image: 'cmr-google-maps.png',
        properties_1: '5 properties',
        title: 'Buea',
    },
    {
        id: 6,
        image: 'cmr-google-maps.png',
        properties_1: '7 properties',
        title: 'Yaounde',
    },
    {
        id: 7,
        image: 'cmr-google-maps.png',
        properties_1: '10 properties',
        title: 'Bamenda',
    },

]

export const pricing: PricingProps[] = [
    {
        id: 1,
        tag: "Professional",
        price: "599.00",
        text: "Proffesional listing submission, active for 60 days",
    },
    {
        id: 2,
        tag: "Business",
        price: "999.00",
        text: "Business listing submission, active for 90 days",
    },
    {
        id: 3,
        tag: "Basic",
        price: "Free",
        text: "Basic listing submission, active for 30 days",
    },
]

export const pricingLists = [
    {
        id: 1,
        propOne: "All Operating Supported",
        propTwo: "20 Property Listings",
        propThree: "60 Days Availability",
        propFour: "Feature Properties",
        propFive: "24/7 Full Support",
    },
    {
        id: 2,
        propOne: "All Operating Supported",
        propTwo: "30 Property Listings",
        propThree: "90 Days Availability",
        propFour: "Feature Properties",
        propFive: "24/7 Full Support",
    },
    {
        id: 3,
        propOne: "All Operating Supported",
        propTwo: "10 Property Listings",
        propThree: "30 Days Availability",
        propFour: "Feature Properties",
        propFive: "24/7 Full Support",
    },
]
