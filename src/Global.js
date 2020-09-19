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
            subHeading: 'A digital health start-up specialised in personalised nutrition and consultations',
            content: `Unique Health offers an online quiz to schools and families to measure their children's health. Wanting to expand into the D2C market, they approached me to fully re-design their website and consult on how to improve their existing site and quiz web-app. \n \n In response, I created the new website as a custom woocommerce theme, giving them full e-commerce functionality and an editable blog. I overhauled the existing Laravel application and database to tier access to premium users. Lastly, I connected the Woocommerce website via SSO and created a unified user database.`,
            stack: ['laravel', 'wordpress', 'woocommerce', 'mysql', 'html', 'css'],
            imageSrc: 'uHealthMobile.jpeg',
            desktopImg: 'unique-health-desktop.jpeg',
            iframeSrc: 'https://www.u-niquehealth.co.uk',
            iframeOK: true,
            ctaButtonText: 'Get a quote for Laravel development',
            colors: {
                bgColor: '#f74040',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        },
        {
            heading: "CricketVision",
            subHeading: 'A UK-based cricket coaching company.',
            content: `CricketVision manages a team of coaches for their own client-base, as well as other clubs across Hertfordshire, UK. They sought to become a tech company by automating in-house processes. \n
                    To do so, I designed and developed the entire front-end for a coach management web-app. Built in React.js, it serves three user groups: Clubs, Coaches and Customers. Each manage their jobs in a different way through dashboards and live feeds.`,
            stack: ['html', 'css', 'react', 'strapi'],
            imageSrc: 'cVisionMobile.jpeg',
            desktopImg: 'cricketvision-desktop.jpeg',
            iframeSrc: 'https://app.cricketvision.co.uk',
            iframeOK: true,
            ctaButtonText: 'Get a quote for React.js development',
            colors: {
                bgColor: 'rgb(39, 169, 79)',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        },
        {
            heading: "VolunteerSafe",
            subHeading: 'Created in COVID-19, VolunteerSafe is an Identity Verification platform for grassroots volunteering organisations.',
            content: `This web-app allowed grassroots volunteering organisations to request an account, and be able to pass volunteers through a series of automated background checks. After passing the background checks, the volunteers can join organisations as a verified volunteer. \n
            I designed and developed the front-end in Adobe XD and React.js. I co-coordinated the team of x5 volunteer developers in creating the front-end, and worked with volunteering groups to understand their requirements, and build in features they would need to use.`,
            stack: ['html', 'css', 'react'],
            imageSrc: 'vSafeMobile.jpeg',
            desktopImg: 'volunteersafe-desktop.jpeg',
            iframeSrc: 'https://www.volunteersafe.com',
            iframeOK: true,
            ctaButtonText: 'Get a quote for React.js development',
            colors: {
                bgColor: '#6074c4',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        },
        {
            heading: "Cult Mia",
            subHeading: 'Cult Mia is an e-commerce store that curates and sells designer products from around the world.',
            content: `I'm currently working with Cult Mia to deliver a slew of shopify theme customisations that enhance their online shopping experience and seamlessly integrate with the site's premium feel. \n
                      Work to date includes installing a custom data layer within the app to allow for deeper customisation, as well as creating Shopify page templates and theme components using Shopify's templating language Liquid.`,
            stack: ['shopify', 'html', 'css'],
            imageSrc: 'cultMiaMobile.jpeg',
            desktopImg: 'cult-mia-desktop.jpeg',
            iframeSrc: 'https://www.cultmia.com',
            iframeOK: false,
            ctaButtonText: 'Get a quote for React.js development',
            colors: {
                bgColor: '#aaa',
                navTextColor: 'rgb(20,20,20)',
                navBorderColor: '#ddd'
            }
        },
        {
            heading: "Reli",
            subHeading: `ReLi is making the world's next generation of eco-friendly technology, beginning with phone cases.`,
            content: `I've been working with ReLi to customise their Squarespace site, and optimise it to maximise conversions across their e-commerce funnel. \n
            To date, I've installed all marketing tech integrations for the company and have been advising on digital marketing strategy.
            This includes installing Inspectlet, Google Tag Manager, Analytics and Optimize. We've worked together to code a series of cross-site A/B/C optimisations that target different consumer audiences and channes.`,
            stack: ['squarespace', 'html', 'css'],
            imageSrc: 'reliMobile.jpeg',
            desktopImg: 'reli-desktop.jpeg',
            ctaButtonText: 'Get a quote for web development',
            iframeSrc: 'https://reli.eco',
            iframeOK: true,
            colors: {
                bgColor: '#303030',
                navTextColor: 'white',
                navBorderColor: 'white'
            }
        }
    ]
};

export { eventBus, globalState};