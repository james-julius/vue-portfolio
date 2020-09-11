<template>
    <div class="right-side">
        <PageOne 
            :heading="`James Julius Darby`" 
            :subHeading="`Web developer based in Los Angeles, CA`"
            :content="`Web developer based in Los Angeles, CA`"
        />
        <CaseStudy 
            heading="Unique Health"
            :content="`Unique Health approached me with a view to re-designing their website, and infrastructure to allow for paywalling.`"
        />
    </div>
</template>

<script>
import PageOne from './P1';
// import CaseStudy from './CaseStudy';
export default {
    name: 'RightSide',
    components: {
        PageOne,
        // CaseStudy
    }
}
</script>

<style lang="scss">

</style>