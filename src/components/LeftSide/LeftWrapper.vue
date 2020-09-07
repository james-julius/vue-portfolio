<template>
    <div class="left-side">
        <img class="showcase-image" :src="image.src" :alt="image.alt" />
    </div>
</template>

<script>
export default {
    name: 'LeftSide', 
    props: {
        image: Object
    }
}
</script>

<style lang="scss">
.showcase-image {
    height: 100%;
    width: 100%;
}
</style>