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
            content: `Unique Health offers an online quiz to schools and families to measure their children's health. Wanting to expand into the D2C market, they approached me to 
                      fully re-design their website and overhaul the existing back-end to implement SSO with a paywalled quiz. I designed the website as a custom woocommerce theme, 
                      installed tiered user roles and authentication gates in the Laravel app, fully integrated with the website through a dashboard and SSO.`,
            stack: ['laravel', 'wordpress', 'woocommerce', 'mysql', 'html', 'css'],
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
            content: `I designed and developed the front-end for coach management software designed for cricket clubs. The React.js app serves three kinds of users: Clubs, Coaches and 
                      Customers.

                      Clubs can manage job requests from customers, shown through a live feed of requests. They may assign coaches to each job, and handle job applications from coaches through the Strapi back-end.
                      
                      Coaches can apply to clubs, and be able to apply for jobs handled through CricketVision itself. Customers may log onto the app and request coaching sessions from clubs and coaches.

                      Coaches and clubs are delivered programmatic emails with upcoming jobs, the status of each, and reminders before jobs are due to take place.
                    `,
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
            content: `This web-app allowed grassroots volunteering organisations to request an account, and be able to pass volunteers through a series of automated background checks.
                      After passing the background checks, the volunteers can join organisations as a verified volunteer. I designed and developed the front-end in Adobe XD, and 
                      co-coordinated a team of x3 volunteer developers in creating the front-end. Additionally, I handled Jumio and Twilio API integrations.`,
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
            subHeading: 'Cult Mia is an e-commerce store that curates and sells designer products from around the world.',
            content: `I'm currently working with Cult Mia to deliver a slew of shopify theme customisations that enhance the shopper experience and seamlessly integrate with the site's premium feel.
                      Work to date includes installing a custom data layer within the app to allow for deeper customisation, creating shopify page templates and theme components using Shopify's
                      templating language, Liquid.`,
            stack: ['shopify', 'html', 'css'],
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
            subHeading: `ReLi is making the world's next generation of eco-friendly technology, beginning with phone cases.`,
            content: ` I've been working with them to customise their squarespace site, install all marketing tech integrations and advise on digital marketing strategy.
            This includes installing Inspectlet, Google Tag Manager, Analytics and Optimize. We've worked to create a series of cross-site A/B/C optimisations to target different consumer audiences and channes.`,
            stack: ['squarespace', 'html', 'css'],
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