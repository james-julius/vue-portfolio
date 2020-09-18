<template>
    <div class="rightPage">
        <LoadingSpinner shade="dark"/>
    </div>
</template>

<script>
import LoadingSpinner from '../../LoadingSpinner';
export default {
    name: 'LoadingCaseStudy',
    components: {
        LoadingSpinner
    }
}
</script>

<style lang="scss">
    .rightPage {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>