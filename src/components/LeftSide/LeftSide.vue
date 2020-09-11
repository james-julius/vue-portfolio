<template>
    <div class="left-side">
        <Carousel />
    </div>
</template>

<script>
import Carousel from './Carousel';
export default {
    name: 'LeftSide', 
    props: {
        image: Object,
        currentPage: Number
    },
    components: {
        Carousel
    }
}
</script>

<style lang="scss">
.left-side {
    height: 100%;
    width: 100%;
    max-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>