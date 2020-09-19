<template>
    <div 
        :class="`left-side ${extraClassNames}`" 
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
        mode: String,
        extraClassNames: String
    },
    data: function() {
        return {
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
    transition: 2s ease-in-out;
    background-color: var(--leftSide-bgColor);
    height: 100%;
    width: 100%;
    max-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>