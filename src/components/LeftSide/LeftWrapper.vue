<template>
    <div class="left-side">
        <!-- <iframe src="https://u-niquehealth.co.uk"/> -->
        <img class="cricketVisionMob" src="../../assets/cricketVisionMobile.png"/>
        <img class="uHealthMob" src="../../assets/uHealthMobile.png"/>
        <img class="volunteerSafeMob" src="../../assets/volunteerSafeMobile.png"/> 
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
.left-side {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template: repeat(16, 1fr) / repeat(12, 1fr);

    .cricketVisionMob {
        grid-area: 2/7/10/11;
        height: 100%;
        width: 100%;
    }
    .uHealthMob {
        grid-area: 8/2/16/6;
        height: 100%;
        width: 100%;
        
    }
    .volunteerSafeMob {
        grid-area: 5/5/13/9;
        height: 100%;
        width: 100%;

    }
}
</style>