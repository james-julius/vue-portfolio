<template>
    <div class="page-container">
        <Nav :currentPage="currentPage"/>
        <LeftSide 
            mode="carousel"
            :currentPage="currentPage"
        />
            <RightSide 
                mode="homepage"
                :currentPage="currentPage"
        />
    </div>
</template>

<script>
import Nav from '../components/Nav/Nav';
import LeftSide from '../components/LeftSide/LeftSide';
import RightSide from '../components/RightSide/RightSide';

export default {
    name: 'Home',
    props: ['currentPage'],
    created() {
        // Reset color variables
        const crimson = '#dc143c';
        document.documentElement.style.setProperty('--leftSide-bgColor', crimson);
        document.documentElement.style.setProperty('--nav-bgColor', crimson);
        document.documentElement.style.setProperty('--nav-borderColor', 'white');
        document.documentElement.style.setProperty('--nav-textColor', 'white');
        
    },
    components: {
        Nav,
        LeftSide,
        RightSide
    },
}
</script>