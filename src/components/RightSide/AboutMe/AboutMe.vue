<template>
    <div class="about-me">
        <div class="heading">
            <h2>Hi, I'm James. Is this coming through?</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
}
</script>

<style lang="scss">
.about-me {
    display: grid;
    grid-template: repeat(1fr, 12), repeat(1fr, 8);
    .heading {
        
    }
}
</style>