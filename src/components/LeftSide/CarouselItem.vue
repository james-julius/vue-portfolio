<template>
    <div :ref="refProp" :style="additionalStyle" :class="`img-container ${carouselClasses}`" @hover="handleHover(ref)">
        <img :src="require(`@/assets/${imageSrc}`)" />
        <!-- <div class="iframe-container"> -->
            <!-- <svg :src="require(`@/assets/brightLoader.svg`)" /> -->
            <iframe :src="loadedIFrameSrc"/>
        <!-- </div> -->
        <div class="scrim"/>
        <span class="visitSiteButton" @click="setActiveIFrame(refProp)">Activate Site</span>
    </div>
</template>

<script>
import './Carousel.scss';
export default {
    name: 'CarouselItem',
    props: [
        'refProp', 
        'imageSrc', 
        'iframeSrc',
        'carouselClassList',
        'previousIndex',
        'currentIndex',
        'itemIndex'
    ],
    data: function() {
            return {
                loadedIFrameSrc: '',
                carouselClasses: this.carouselClassList
            }
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
        },
    }
}
</script>

<style scoped>

</style>