import {ButtonElement} from "@/component/subComponents/buttonComponent";

interface LandData {
    Data: [
        {
            title: string;
            price: string;
            text: string;
            superficial: string;
        }
    ];
    landTitle: string;
    landDescription: string;
    landPrice: string;
    cardTitle: string;
    cardListItems: {
      superficial: string;
      price: string;
      onClick: () => void;
    }[],
    imageSrc?: string;
}

const data: LandData = {
    landTitle: 'Information about the land',
    landDescription: 'Located at Etoudi',
    landPrice: '300,000CFA/m',
    cardTitle: 'Etoudi',
    cardListItems: [
        {
            superficial: '200 sqft',
            price: '5M',
            onClick: <ButtonElement />,
        },
        {
            superficial: '500 sqft',
            price: '2M',
            onClick: <ButtonElement />,
        },
        {
            superficial: '400 sqft',
            price: '6M',
            onClick: <ButtonElement />,
        },
        {
            superficial: '700 sqft',
            price: '9M',
            onClick: <ButtonElement />,
        },
    ],
    imageSrc: '/cmr-google-maps.png',
    Data: [
        {
            title: 'Formule à distance',
            price: '500,000',
            superficial: '300 sqft',
            text: 'Accès à une connexion internet illimitée'
        }
    ]
}

export default data
