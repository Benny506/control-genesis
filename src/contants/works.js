import lavenderCareLogo from '../assets/works/lavendercare-logo.svg'
import flexxxaLogo from '../assets/works/flexxxa-logo.png'
import scrap2StyleLogo from '../assets/works/scrap2style-logo.jpeg'
import latejcreationsLogo from '../assets/works/latejcreations-logo.jpeg'
import mumLogo from '../assets/works/mum-logo.png'
import foreStanceLogo from '../assets/logos/forestance/logo.png'


const works = [
    {
        companyName: 'LavenderCare',
        logo: lavenderCareLogo,
        type: 'App',
        siteUrl: 'https://lavendercare.co',
        appUrls: [
            {
                for: 'IOS',
                url: 'https://apps.apple.com/us/app/lavendercare/id6755245847'
            },
            {
                for: 'ANDROID',
                url: 'https://play.google.com/store/apps/details?id=com.lavendercare.lavendercare'
            }
        ],
        tags: ['healthcare', 'mother-hood companion'],
        ecosystem: [
            {
                title: 'Labs Dashboard',
                url: 'https://labs.lavendercare.co',
            },
            {
                title: 'Provider Dashboard',
                url: 'https://provider.lavendercare.co',
            },
            {
                title: 'Hospital Management System',
                url: 'https://hospital-management-system.lavendercare.co/',
            },
            {
                title: 'Products Dashboard',
                url: 'https://product-inventory.lavendercare.co/',
            },
            {
                title: 'Pharmacy Dashboard',
                url: 'https://pharmacy.lavendercare.co/',
            },
        ]
    },
    {
        companyName: 'flexXxa',
        logo: flexxxaLogo,
        type: 'App',
        siteUrl: 'https://app.flexxxa.com/',
        appUrls: [
            {
                for: 'IOS',
                url: 'https://apps.apple.com/ng/app/flexxxa/id6755444419'
            },
            {
                for: 'ANDROID',
                url: 'https://play.google.com/store/apps/details?id=com.useumbrella.flexxa.app'
            }
        ],
        tags: ['events', 'social'],
    },
    {
        companyName: 'Scrap2Style',
        logo: scrap2StyleLogo,
        type: 'Site',
        siteUrl: 'https://scrap2style.com/',
        tags: ['e-commerce', 'wholesale, retail & pre-orders']
    },
    {
        companyName: 'LaTej-Creations',
        logo: latejcreationsLogo,
        type: 'Site',
        siteUrl: 'https://latejcreations.com/',
        tags: ['e-commerce', 'wholesale, retail & pre-orders']
    },
    {
        companyName: 'My-Uni-Map',
        logo: mumLogo,
        type: 'App',
        siteUrl: 'https://my-uni-map.com/',
        appUrls: [
            {
                for: 'IOS',
                url: 'https://apps.apple.com/us/app/my-uni-map/id6749601810'
            },
            {
                for: 'ANDROID',
                url: 'https://play.google.com/store/apps/details?id=com.controlgenesis.mum'
            }
        ],
        tags: ['Navigation', 'Campus LifeStyle']
    },
    {
        companyName: 'ForeStance',
        logo: foreStanceLogo,
        type: 'Site',
        siteUrl: 'https://forestance.com',
        tags: ['brand strategy & identity', 'creative direction', 'digital experience']
    },
];

export default works;