import Vue from 'vue';
const eventBus = new Vue();
const globalState = {
    caseStudies: [
        {
            heading: "Unique Health",
            subHeading: 'A nutrition quiz website and app',
            content: "Unique Health is a approached me with a view to re-designing their website, and infrastructure to allow for paywalling.",
            stack: ['laravel', 'wordpress', 'woocommerce', 'mysql'],
            imageSrc: 'uHealthMobile.png',
            iframeSrc: 'https://www.u-niquehealth.co.uk',
            bgColor: '#f74040'
        },
        {
            heading: "CricketVision",
            subHeading: 'A coaching company based in Hertfordshire, UK.',
            content: "I designed and developed the front-end for a booking app with x3 user groups: Clubs, Coaches and Customers.",
            stack: ['html', 'css', 'react', 'strapi'],
            imageSrc: 'cricketVisionMobile.png',
            iframeSrc: 'https://app.cricketvision.co.uk',
            bgColor: 'rgb(39, 169, 79)'
        },
        {
            heading: "VolunteerSafe",
            subHeading: 'Created in COVID-19, VolunteerSafe is an Identity Verification platform for grassroots volunteering organisations.',
            content: `I designed and developed the front-end in Adobe XD, and co-ordinated a team of x5 developers in creating the front-end.`,
            stack: ['html', 'css', 'react'],
            imageSrc: 'vSafeMobile.png',
            iframeSrc: 'https://www.volunteersafe.com',
            bgColor: '#6074c4'
        },
        {
            heading: "Cult Mia",
            content: "",
            stack: ['shopify'],
            imageSrc: 'cultMiaMobile.png',
            iframeSrc: 'https://www.cultmia.com',
            bgColor: '#fff'
        },
        {
            heading: "Reli",
            content: "",
            stack: ['squarespace'],
            imageSrc: 'reliMobile.png',
            iframeSrc: 'https://reli.eco',
            bgColor: '#303030'
        }
    ]
};

export { eventBus, globalState};