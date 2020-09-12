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
    </div>
</template>

<script>
import Homepage from './Homepage';
import CaseStudy from './CaseStudy';
import { globalState } from '../../Global';

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
            caseStudies: globalState.caseStudies
        }
    }
}
</script>

<style lang="scss">

</style>