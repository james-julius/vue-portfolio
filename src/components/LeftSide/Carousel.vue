<template>
    <div class="carousel">
        <figure ref="figure" :index="1">
            <img class="cricketVisionMob" src="../../assets/cricketVisionMobile.png"/>
            <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
            <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
            <img class="cricketVisionMob" src="../../assets/cricketVisionMobile.png"/>
            <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
            <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
        </figure>
    <button @click="setIndex(currentIndex)">Rotate</button>
    </div>
</template>

<script>
import './Carousel.scss';
export default {
    name: 'Carousel',
    data: function() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        setIndex: function (index) {
            const theta = 2 * 3.141592653589793 / 6;
            this.$refs.figure.style.transform = `rotateY(${index * theta}rad)`;
            this.currentIndex ++;
        }
    }
}
</script>

<style lang="scss">

</style>