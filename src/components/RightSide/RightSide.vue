<template>
    <div ref="background" class="right-side">
        <template v-if="mode === 'homepage'">
            <Homepage/>
            <CaseStudy 
                v-for="(caseStudy, index) in caseStudies"
                :key="index"
                :heading="caseStudy.heading"
                :subHeading="caseStudy.subHeading"
                :content="caseStudy.content"
                :desktopImg="caseStudy.desktopImg"
                :websiteUrl="caseStudy.iframeSrc"
                :ctaButtonText="caseStudy.ctaButtonText"
                :stack="caseStudy.stack"
            />
        </template>

        <template v-if="mode === 'about'">
            <AboutMe/>
        </template>

        <template v-if="mode === 'quote'">
            <GetQuote/>
        </template>
    </div>
</template>

<script>
import { globalState } from '../../Global';

export default {
    name: 'RightSide',
    components: {
        Homepage: () => import('./Homepage/Homepage'),
        AboutMe: () => import('./AboutMe/AboutMe'),
        CaseStudy: () => import('./Homepage/CaseStudy'),
        GetQuote: () => import('./GetQuote/GetQuote')
    },
    props: {
        currentPage: Number,
        mode: String
    },
    methods: {
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