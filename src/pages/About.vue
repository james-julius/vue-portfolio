<template>
    <div class="page-container">
        <Nav :currentPage="currentPage"/>
        <LeftSide 
            mode="particles"
            :currentPage="currentPage"
        />
        <RightSide 
            :currentPage="currentPage"
        />
    </div>
</template>

<script>
import Nav from '../components/Nav/Nav';
import LeftSide from '../components/LeftSide/LeftSide';
import RightSide from '../components/RightSide/RightSide';

export default {
    name: 'About',
    props: ['currentPage'],
    components: {
        Nav,
        LeftSide,
        RightSide
    },
}
</script>