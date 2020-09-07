<template>
    <div class="right-side">
        <PageOne 
            :heading="`James Darby`" 
            :subHeading="`Web developer based in Los Angeles, CA`"
            :content="`Web developer based in Los Angeles, CA`"
        />
    </div>
</template>

<script>
import PageOne from './P1';
export default {
    name: 'RightSide',
    components: {
        PageOne
    }
}
</script>

<style lang="scss">

</style>