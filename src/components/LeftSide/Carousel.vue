<template>
    <div class="carousel">
    <input type="number" v-model="desiredIndex" min="1" max="6"/>
    <button @click="goToIndex(desiredIndex)">Rotate</button>
        <figure ref="figure" :index="1">
            <div ref="rOne" class="img-container active">
                <img class="cricketVisionMob show-front" src="../../assets/cricketVisionMobile.png"/>
                <iframe src="https://app.cricketvision.co.uk"/>
            </div>
            <div ref="rTwo" class="img-container">
                <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
                <iframe src="https://www.u-niquehealth.co.uk"/>
            </div>
            <div ref="rThree" class="img-container">
                <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
                <iframe src="https://www.volunteersafe.com"/>
            </div>
            <div ref="rFour" class="img-container">
                <img class="cricketVisionMob" src="../../assets/cricketVisionMobile.png"/>
                <iframe src="https://app.cricketvision.co.uk"/>
            </div>
            <div ref="rFive" class="img-container">
                <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
                <iframe src="https://www.u-niquehealth.co.uk"/>
            </div>
            <div ref="rSix" class="img-container">
                <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/>
                <iframe src="https://www.volunteersafe.com"/>
            </div>
        </figure>
    </div>
</template>

<script>
import './Carousel.scss';
const carouselSides = 6;
export default {
    name: 'Carousel',
    data: function() {
        return {
            currentIndex: 0,
            desiredIndex: 1
        }
    },
    methods: {
        incrementIndex: function () {
            const theta = 2 * 3.141592653589793 / carouselSides;
            this.$refs.figure.style.transform = `rotateY(-${theta}rad)`;
            this.currentIndex ++;
        },
        goToIndex: function () {
            const theta = 2 * 3.141592653589793 / carouselSides;
            console.log('Will move forward ', this.desiredIndex, 'sides')
            this.$refs.figure.style.transform = `rotateY(${this.desiredIndex * theta}rad)`;
        }
    }
}
</script>

<style lang="scss">

</style>