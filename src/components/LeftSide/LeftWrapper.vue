<template>
    <div class="left-side">
        <!-- <iframe src="https://u-niquehealth.co.uk"/> -->
        <Carousel />
    </div>
</template>

<script>
import Carousel from './Carousel';
export default {
    name: 'LeftSide', 
    props: {
        image: Object
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
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>