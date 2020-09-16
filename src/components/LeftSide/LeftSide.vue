<template>
    <div 
        :class="`left-side ${classNames}`" 
        ref="leftSide"
        :style="leftSideStyle"
        >
        <Carousel 
            v-if="mode === 'carousel'" 
            :carouselIndex="currentPage - 1"
        />
        <Particles 
            v-if="mode === 'particles'"
        />
    </div>
</template>

<script>
import Carousel from './Carousel';
import Particles from './Particles';
export default {
    name: 'LeftSide', 
    props: {
        image: Object,
        currentPage: Number,
        mode: String
    },
    data: function() {
        return {
            classNames: '',
            leftSideStyle: ''
        }
    },
    components: {
        Carousel,
        Particles
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