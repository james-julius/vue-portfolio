<template>
    <div class="carousel" ref="carousel">
    <!-- <span class="dev-controls">
        <button @click="incrementIndex()">+</button>
        <button @click="decrementIndex()">-</button>
        <button style="margin-left: 5px;" @click="goToIndex(desiredIndex)">Go to</button>
        <input type="number" v-model="desiredIndex" min="1" max="6"/>
    </span> -->
    <!-- <h5 style="font-weight: bold; color: white;">Index: {{currentIndex}}</h5>
    <h5 style="font-weight: bold; color: white;">Prop Index: {{carouselIndex}}</h5> -->
    
        <figure ref="figure" :index="1" :figureStyle="figureStyle">
            <CarouselItem
                v-for="(item, index) in carouselItems"
                :key="index"
                :itemIndex="index"
                :refProp="`carousel-item-${index}`"
                :imageSrc="item.imageSrc"
                :setActiveIndex="setActiveIndex"
                :currentIndex="currentIndex"
                :previousIndex="previousIndex"
                :iframeSrc="item.iframeSrc"
                :carouselClassList="item.carouselClassList"
            />
        </figure>
    </div>
</template>

<script>
import './Carousel.scss';
import CarouselItem from './CarouselItem';
import { globalState } from '../../Global';
export default {
    name: 'Carousel',
    props: {
        carouselIndex: Number
    },
    components: {
        CarouselItem
    },
    // mounted() {
    //     // We test the browser to see if it's safari, and apply different 3d rotation css
    //     // This also needs to happen in the first carouselItem.
    //     const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    //     console.log('Carousel.vue safari test: ', isSafari)
    //         console.log('THIS VVVVV')
    //         console.log(this);    
    //     if (isSafari) {
    //         console.log('THIS VVVVV')
    //         console.log(this);    
    //     this.$refs.figure.style.transformOrigin = '0 0';
    //     }
    // },
    computed: {
            figureStyle() {
                // We test the browser to see if it's safari, and apply different 3d rotation css
                // This also needs to happen in the first carouselItem.
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                console.log('Carousel.vue safari test: ', isSafari)
                if (isSafari) {
                    return 'transform-origin: 0 0;';
                } else {
                    return ''
                }
            }
    },
    watch: {
        carouselIndex: function(newVal, oldVal) {
            // We watch the page number passed down, - 1 and change the carousel's index.
            // Check to make sure it's not max or min of the sides.
            if (newVal === this.carouselSides) return;
            if (newVal <= -1) return;
            else {
                this.goToIndex(newVal);
                this.currentIndex = newVal;
                this.previousIndex = oldVal;
            }
        }
    },
    data: function() {
        return {
            carouselSides: 5,
            currentIndex: 0,
            previousIndex: null,
            desiredIndex: 1,
            rotationDegree: 0,
            carouselItems: globalState.caseStudies
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
        // setActiveIndex: function (ref) {
        //     console.log('setting active index at ref: ', ref);
        //     console.log(this.$refs);
        //     this.$refs[ref].classlist = 'img-container active';
        // },
        goToIndex: function (index) {
            const theta = 2 * 3.141592653589793 / this.carouselSides;
            // console.log('Moving to index #', index);
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