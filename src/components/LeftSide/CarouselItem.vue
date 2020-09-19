<template>
    <div :style="additionalStyle" :ref="`img-container-ref-${itemIndex}`" :class="`img-container ${carouselClasses}`" @hover="handleHover(ref)">
        <img :src="require(`@/assets/${imageSrc}`)" />
        <template v-if="isCurrentIFrame">
            <LoadingSpinner v-if="iFrameLoading" shade="light"/>
            <iframe v-if="iFrameOK" :ref="`iframe-ref-${itemIndex}`" :src="loadedIFrameSrc" />
            <div class="scrim"/>
            <span class="visitSiteButton" @click="setActiveIFrame()">Activate Site</span>
        </template>
    </div>
</template>

<script>
import './Carousel.scss';
import LoadingSpinner from '../LoadingSpinner';

export default {
    name: 'CarouselItem',
    props: [
        'imageSrc', 
        'iFrameSrc',
        'iFrameOK',
        'previousIndex',
        'currentIndex',
        'itemIndex'
    ],
    mounted() {
        // We need to make sure the first iframe is selectable upon page load. If not, it is only selected when 
        // the index comes back to it.
        if(this.itemIndex === 0) {
            this.carouselClasses = 'selected';
            this.isCurrentIFrame = true;
        }
    },
    data: function() {
            return {
                carouselClasses: 'not-selected',
                iFrameLoading: false,
                loadedIFrameSrc: '',
                isCurrentIFrame: false
            }
    },
    components: {
        LoadingSpinner
    },
    computed: {
        additionalStyle() {
            const isSafari = window.safari !== undefined;
            if (isSafari && this.itemIndex === 0) {
                return 'transform: translateZ(var(--apothem))';
            } else {
                return '';
            }
        }
    },
    watch: {
        currentIndex: function() {
            if (this.itemIndex === this.currentIndex || this.itemIndex === 0 && this.previousIndex !== 1) {
                this.carouselClasses = 'selected';
                 if (this.iFrameOK) this.isCurrentIFrame = true;
            } else {
                this.isCurrentIFrame = false;
                this.carouselClasses = 'not-selected';
            }
        }
    },
    methods: {
        setActiveIFrame: function () {
            // Here we only load the iframe src when the active class is present. Otherwise, all iframes will load upon page load.
            this.loadedIFrameSrc = this.iFrameSrc;
            this.carouselClasses = 'selected active';
            this.iFrameLoading = true;
            const [iframeRef, imgContainerRef ] = [`iframe-ref-${this.itemIndex}`,`img-container-ref-${this.itemIndex}`];

            // Weird glitch happens to unique health iframe's zIndex when loaded on chrome. We need to re-set the containing div's zIndex to the same to stop it.
            this.$refs[imgContainerRef].style.zIndex = 3;
            this.$refs[iframeRef].addEventListener('load', () => {
                this.iFrameLoading = false;
            });
        },
    }
}
</script>