<template>
    <div class="carousel">
    <span class="dev-controls">
        <button @click="incrementIndex()">+</button>
        <button @click="decrementIndex()">-</button>
        <button style="margin-left: 5px;" @click="goToIndex(desiredIndex)">Go to</button>
        <input type="number" v-model="desiredIndex" min="1" max="6"/>
    </span>
    <h5 style="font-weight: bold; color: white;">Index: {{currentIndex}}</h5>
    
        <figure ref="figure" :index="1">
            <div ref="rOne" class="img-container">
                <img class="show-front" src="../../assets/cricketVisionMobile.png"/>
                <!-- <iframe src="https://app.cricketvision.co.uk"/> -->
            </div>
            <div ref="rTwo" class="img-container">
                <img class="show-front" src="../../assets/uHealthMobile.png"/>
                <!-- <iframe src="https://www.u-niquehealth.co.uk"/> -->
            </div>
            <div ref="rThree" class="img-container">
                <img class="show-front" src="../../assets/vSafeMobile.png"/>
                <!-- <iframe src="https://www.volunteersafe.com"/> -->
            </div>
            <div ref="rFour" class="img-container">
                <img class="show-front" src="../../assets/cultMiaMobile.png"/>
                <!-- <iframe src="https://www.cultmia.com"/> -->
            </div>
            <div ref="rFive" class="img-container">
                <img class="show-front" src="../../assets/reliMobile.png"/>
                <!-- <iframe src="https://reli.eco"/> -->
            </div>
            <div ref="rSix" class="img-container">
                <img class="show-front" src="../../assets/vSafeMobile.png"/>
                <!-- <iframe src="https://www.volunteersafe.com"/> -->
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
            carouselSides: 6,
            currentIndex: 0,
            desiredIndex: 1,
            rotationDegree: 0
        }
    },
    methods: {
        incrementIndex: function () {
            const theta = 2 * 3.141592653589793 / this.carouselSides;
            this.$refs.figure.style.transform = `rotateY(${this.rotationDegree + theta}rad)`;
            this.rotationDegree+= theta;
            this.currentIndex ++;
        },
        decrementIndex: function () {
            const theta = 2 * 3.141592653589793 / this.carouselSides;
            this.$refs.figure.style.transform = `rotateY(${this.rotationDegree - theta}rad)`;
            this.rotationDegree-= theta;
            this.currentIndex --;
        },
        goToIndex: function () {
            const theta = 2 * 3.141592653589793 / this.carouselSides;
            console.log('Will move forward ', this.desiredIndex, 'sides');
            this.$refs.figure.style.transform = `rotateY(${this.desiredIndex * theta}rad)`;
            this.currentIndex = this.desiredIndex;
            this.rotationDegree+= this.desiredIndex * theta;
        }
    }
}
</script>

<style lang="scss">
.dev-controls {
    display: inline-flex;
    height: 30px;
    justify-content: center;
    button {
        min-width: 40px;
    }
    input {
        min-width: 50px;
    }
}
</style>