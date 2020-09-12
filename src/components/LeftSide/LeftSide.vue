<template>
    <div 
        :class="`left-side ${classNames}`" 
        ref="leftSide"
        :style="leftSideStyle"
        >
        <Carousel :carouselIndex="currentPage - 1"/>
    </div>
</template>

<script>
import Carousel from './Carousel';
import { globalState } from '../../Global';
export default {
    name: 'LeftSide', 
    props: {
        image: Object,
        currentPage: Number
    },
    data: function() {
        return {
            classNames: '',
            leftSideStyle: ''
        }
    },
    watch: {
        currentPage: function(newVal) {
            let bgColor = globalState.caseStudies[newVal].bgColor;
            this.leftSideStyle = {
                '--leftSide-bgColor': bgColor
            }
        }
    },
    components: {
        Carousel
    }
}
</script>

<style lang="scss">
.left-side {
    background-color: var(--leftSide-bgColor);
    height: 100%;
    width: 100%;
    max-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>