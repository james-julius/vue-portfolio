<template>
    <div :ref="refProp" :class="`img-container ${carouselClassList}`" @hover="handleHover(ref)">
        <img :src="require(`@/assets/${imageSrc}`)"/>
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
                loadedIFrameSrc: ''
            }
    },
    watch: {
        currentIndex: function() {
            (this.itemIndex === this.currentIndex) ? 
                this.carouselClassList = 'selected' : 
                this.carouselClassList = '';
        }
    },
    methods: {
        setActiveIFrame: function (ref) {
            console.log('activating iFrame at ref: ', ref);
            // Here we only load the iframe src when the active class is present. Otherwise, all iframes will load upon page load.
            this.loadedIFrameSrc = this.iframeSrc;
            this.carouselClassList = 'selected active';
        },
    }
}
</script>

<style scoped>

</style>