<template>
    <div class="carousel">
    <button @click="setIndex(currentIndex)">Rotate</button>
        <figure ref="figure" :index="1">
            <div ref="1" class="img-container active">
                <img class="cricketVisionMob show-front" src="../../assets/cricketVisionMobile.png"/>
                <iframe src="https://app.cricketvision.co.uk"/>
            </div>
            <div ref="2" class="img-container">
                <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
                <iframe src="https://www.u-niquehealth.co.uk"/>
            </div>
            <div ref="3" class="img-container">
                <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
                <iframe src="https://www.volunteersafe.com"/>
            </div>
            <div ref="4" class="img-container">
                <img class="cricketVisionMob" src="../../assets/cricketVisionMobile.png"/>
                <iframe src="https://app.cricketvision.co.uk"/>
            </div>
            <div ref="5" class="img-container">
                <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
                <iframe src="https://www.u-niquehealth.co.uk"/>
            </div>
            <div ref="6" class="img-container">
                <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
                <iframe src="https://www.volunteersafe.com"/>
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