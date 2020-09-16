import Vue from 'vue';
const eventBus = new Vue();
const globalState = {
    setCurrentPage: function(input) {
        this.currentPage = input;
    },
    currentPage: 0,
    caseStudies: [
        {
            heading: "Unique Health",
            subHeading: 'A nutrition quiz website and app',
            content: "Unique Health is a approached me with a view to re-designing their website, and infrastructure to allow for paywalling.",
            stack: ['laravel', 'wordpress', 'woocommerce', 'mysql'],
            imageSrc: 'uHealthMobile.png',
            iframeSrc: 'https://www.u-niquehealth.co.uk',
            colors: {
                bgColor: '#f74040',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        },
        {
            heading: "CricketVision",
            subHeading: 'A coaching company based in Hertfordshire, UK.',
            content: "I designed and developed the front-end for a booking app with x3 user groups: Clubs, Coaches and Customers.",
            stack: ['html', 'css', 'react', 'strapi'],
            imageSrc: 'cricketVisionMobile.png',
            iframeSrc: 'https://app.cricketvision.co.uk',
            colors: {
                bgColor: 'rgb(39, 169, 79)',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        },
        {
            heading: "VolunteerSafe",
            subHeading: 'Created in COVID-19, VolunteerSafe is an Identity Verification platform for grassroots volunteering organisations.',
            content: `I designed and developed the front-end in Adobe XD, and co-ordinated a team of x5 developers in creating the front-end.`,
            stack: ['html', 'css', 'react'],
            imageSrc: 'vSafeMobile.png',
            iframeSrc: 'https://www.volunteersafe.com',
            colors: {
                bgColor: '#6074c4',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        },
        {
            heading: "Cult Mia",
            content: "",
            stack: ['shopify'],
            imageSrc: 'cultMiaMobile.png',
            iframeSrc: 'https://www.cultmia.com',
            colors: {
                bgColor: '#eee',
                navTextColor: 'rgb(20,20,20)',
                navBorderColor: '#ddd'
            }
        },
        {
            heading: "Reli",
            content: "",
            stack: ['squarespace'],
            imageSrc: 'reliMobile.png',
            iframeSrc: 'https://reli.eco',
            colors: {
                bgColor: '#303030',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        }
    ]
};

export { eventBus, globalState};