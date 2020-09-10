<template>
    <div class="carousel">
    <button @click="setIndex(currentIndex)">Rotate</button>
        <figure ref="figure" :index="1">
            <div class="img-container">
                <img class="cricketVisionMob show-front" src="../../assets/cricketVisionMobile.png"/>
            </div>
            <div class="img-container">
                <!-- <img class="uHealthMob" src="../../assets/uHealthMobile.png"/> -->
                <iframe src="https://www.u-niquehealth.co.uk"/>
            </div>
            <div class="img-container">
                <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
            </div>
            <div class="img-container">
                <img class="cricketVisionMob" src="../../assets/cricketVisionMobile.png"/>
            </div>
            <div class="img-container">
                <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
            </div>
            <div class="img-container">
                <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
            </div>
        </figure>
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