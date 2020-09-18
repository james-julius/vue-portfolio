<template>
    <div :style="additionalStyle" :class="`img-container ${carouselClasses}`" @hover="handleHover(ref)">
        <img :src="require(`@/assets/${imageSrc}`)" />
        <LoadingSpinner v-if="iFrameLoading" shade="light"/>
        <iframe :ref="`iframe-ref-${itemIndex}`" :src="loadedIFrameSrc"/>
        <div class="scrim"/>
        <span class="visitSiteButton" @click="setActiveIFrame(refProp)">Activate Site</span>
    </div>
</template>

<script>
import './Carousel.scss';
import LoadingSpinner from '../LoadingSpinner';

export default {
    name: 'CarouselItem',
    props: [
        'imageSrc', 
        'iframeSrc',
        'carouselClassList',
        'previousIndex',
        'currentIndex',
        'itemIndex'
    ],
    data: function() {
            return {
                carouselClasses: this.carouselClassList,
                iFrameLoading: false
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
            (this.itemIndex === this.currentIndex) ? 
                this.carouselClasses = 'selected' : 
                this.carouselClasses = '';
        }
    },
    methods: {
        setActiveIFrame: function () {
            // Here we only load the iframe src when the active class is present. Otherwise, all iframes will load upon page load.
            this.loadedIFrameSrc = this.iframeSrc;
            this.carouselClasses = 'selected active';
            this.iFrameLoading = true;
            this.$refs[`iframe-ref-${this.itemIndex}`].onload(() => {
                console.log('iframe has loaded');
                this.iFrameLoading = false;
            });
        },
    }
}
</script>