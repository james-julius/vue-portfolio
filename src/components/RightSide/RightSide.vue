<template>
    <div ref="background" class="right-side">
        <Homepage 
            :heading="`James Julius Darby`" 
            :subHeading="`Web developer based in Los Angeles, CA`"
            :content="`Web developer based in Los Angeles, CA`"
        />
        <CaseStudy 
            v-for="caseStudy in caseStudies"
            :key="caseStudy"
            :heading="caseStudy.heading"
            :subHeading="caseStudy.subHeading"
            :content="caseStudy.content"
            :stack="caseStudy.stack"
        />
        <!-- <CaseStudy 
            :heading="activeCaseStudy.heading"
            :subHeading="activeCaseStudy.subHeading"
            :content="activeCaseStudy.content"
            :stack="activeCaseStudy.stack"
        />
        <CaseStudy 
            :heading="activeCaseStudy.heading"
            :subHeading="activeCaseStudy.subHeading"
            :content="activeCaseStudy.content"
            :stack="activeCaseStudy.stack"
        /> -->
        
            <!-- <span style="display: fixed; height: 100px; width: 100px; top: 50px; right: 50px;">
                <button @click="nextSlide()">Next Slide</button>
            </span> -->
    </div>
</template>

<script>
import Homepage from './Homepage';
import CaseStudy from './CaseStudy';
export default {
    name: 'RightSide',
    components: {
        Homepage,
        CaseStudy
    },
    props: {
        currentPage: Number
    },
    mounted() {
    },
    methods: {
        // handleScroll() {
        //     console.log('handleScroll Called')
        //     console.log(window.scrollY);
        //     this.lastKnownScrollPosition = window.scrollY;

        //     if (!this.currentlyScrolling) {
        //         console.log('not currently scrolling');
        //         window.requestAnimationFrame(function() {
        //             console.log('reqAnimation frame running')
        //             this.currentlyScrolling = false;
        //         });

        //         this.currentlyScrolling = true;
        //     }
        // },
        nextPage() {
            if (this.showCaseStudies) {
                if (this.currentCaseStudy < this.caseStudies.length -1) {
                    this.currentCaseStudy ++;
                } else {
                    return;
                }
            }
        },
        prevPage() {
            if (!this.showCaseStudies) return;
            this.currentCaseStudy --;
        }
    },
    computed: {
        activeCaseStudy: () => {
            return this.caseStudies[this.currentCaseStudy]
        }
    },
    data: () => { 
        return {
            currentlyScrolling: false,
            lastKnownScrollPosition: 0,
            showCaseStudies: false,
            currentCaseStudy: 0,
            caseStudies: [
                {
                    heading: "Unique Health",
                    subHeading: 'A nutrition quiz website and app',
                    content: "Unique Health is a approached me with a view to re-designing their website, and infrastructure to allow for paywalling.",
                    stack: ['laravel', 'wordpress', 'woocommerce', 'mysql'],
                    bgColor: '#f74040'
                },
                {
                    heading: "CricketVision",
                    subHeading: 'A coaching company based in Hertfordshire, UK.',
                    content: "I designed and developed the front-end for a booking app with x3 user groups: Clubs, Coaches and Customers.",
                    stack: ['html', 'css', 'react', 'strapi'],
                    bgColor: 'rgb(39, 169, 79)'
                },
                {
                    heading: "VolunteerSafe",
                    subHeading: 'Created in COVID-19, VolunteerSafe is an Identity Verification platform for grassroots volunteering organisations.',
                    content: `I designed and developed the front-end in Adobe XD, and co-ordinated a team of x5 developers in creating the front-end.`,
                    stack: ['html', 'css', 'react'],
                    bgColor: '#6074c4'
                },
                {
                    heading: "Cult Mia",
                    content: "",
                    stack: ['shopify'],
                    bgColor: '#fff'
                },
                {
                    heading: "Reli",
                    content: "",
                    stack: ['squarespace'],
                    bgColor: '#303030'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

</style>