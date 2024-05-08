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
    landPrice: '7000CFA/m',
    cardTitle: 'Ngaoundere',
    cardListItems: [
        {
            superficial: '200 sqft',
            price: '7M',
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
            price: '10,000 FCFA',
            superficial: '300 sqft',
            text: 'Situé À 3 Km De L\'axe National N°1 Plus Précisement Entrée Ecole De Nkometou III Juste Après Le Péage. Zone Électrifiée Et Accessible En Voiture Jusque Dans Le Site.'
        }
    ]
}

export default data
