<template>
    <div :ref="refProp" :class="`img-container ${carouselClassList}`" @hover="handleHover(ref)">
        <img :src="require(`@/assets/${imageSrc}`)"/>
        <iframe :src="iframeSrc"/>
        <div class="scrim"/>
        <span class="visitSiteButton" @click="setActiveIndex(refProp)">Activate Site</span>
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
        // 'setActiveIndex',
        'carouselClassList'
    ],
    methods: {
        setActiveIndex: function (ref) {
            console.log('setting active index at ref: ', ref);
            console.log(this.$refs);
            this.carouselClassList = 'img-container active';
        },
    }
}
</script>

<style scoped>

</style>