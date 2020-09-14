<template>
    <vue-particles class="vue-particles"
        color="#88f"
        :particleOpacity="0.7"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="1"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="4"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    
    />
</template>
<script>
export default {
    name: 'Particles'
}
</script>

<style lang="scss">
.vue-particles {
    height: 100%;
    width: 100%;
}
</style>