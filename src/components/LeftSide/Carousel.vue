<template>
    <div class="carousel">
    <!-- <span class="dev-controls">
        <button @click="incrementIndex()">+</button>
        <button @click="decrementIndex()">-</button>
        <button style="margin-left: 5px;" @click="goToIndex(desiredIndex)">Go to</button>
        <input type="number" v-model="desiredIndex" min="1" max="6"/>
    </span> -->
    <!-- <h5 style="font-weight: bold; color: white;">Index: {{currentIndex}}</h5>
    <h5 style="font-weight: bold; color: white;">Prop Index: {{carouselIndex}}</h5> -->
    
        <figure ref="figure" :index="1">
            <div ref="rOne" class="img-container" @hover="handleHover(rOne)">
                <img class="show-front" src="../../assets/uHealthMobile.png"/>
                <iframe src="https://www.u-niquehealth.co.uk"/>
                <div class="scrim"/>
                <span class="visitSiteButton">Visit Site</span>
            </div>
            <div ref="rTwo" class="img-container" @hover="handleHover(rTwo)">
                <img class="show-front" src="../../assets/cricketVisionMobile.png"/>
                <iframe src="https://app.cricketvision.co.uk"/>
                <div class="scrim"/>
                <span class="visitSiteButton">Visit Site</span>
            </div>
            <div ref="rThree" class="img-container" @hover="handleHover(rThree)">
                <img class="show-front" src="../../assets/vSafeMobile.png"/>
                <iframe src="https://www.volunteersafe.com"/>
                <div class="scrim"/>
                <span class="visitSiteButton">Visit Site</span>
            </div>
            <div ref="rFour" class="img-container" @hover="handleHover(rFour)">
                <img class="show-front" src="../../assets/cultMiaMobile.png"/>
                <iframe src="https://www.cultmia.com"/>
                <div class="scrim"/>
                <span class="visitSiteButton">Visit Site</span>
            </div>
            <div ref="rFive" class="img-container" @hover="handleHover(rFive)">
                <img class="show-front" src="../../assets/reliMobile.png"/>
                <iframe src="https://reli.eco"/>
                <div class="scrim"/>
                <span class="visitSiteButton">Visit Site</span>
            </div>
        </figure>
    </div>
</template>

<script>
import './Carousel.scss';
export default {
    name: 'Carousel',
    props: {
        carouselIndex: Number
    },
    watch: {
        carouselIndex: function(newVal) {
            // We watch the page number passed down, - 1 and change the carousel's index.
            // Check to make sure it's not max or min of the sides.
            if (newVal === this.carouselSides) return;
            if (newVal <= -1) return;
            else {
                this.goToIndex(newVal);
            }
        }
    },
    data: function() {
        return {
            carouselSides: 5,
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
        goToIndex: function (index) {
            const theta = 2 * 3.141592653589793 / this.carouselSides;
            console.log('Moving to index #', index);
            this.$refs.figure.style.transform = `rotateY(${index * theta}rad)`;
            this.currentIndex = index;
            this.rotationDegree+= index * theta;
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