<template>
    <div class="page-container">
        <Nav :currentPage="currentPage"/>
        <LeftSide 
            mode="particles"
            :currentPage="currentPage"
        />
        <RightSide
            mode="about"
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
    data: function() {
        return {
            letTheColorsKeepFlowing: null
        }
    },
    methods: {
        randomColorFlow() {
            const [r, g, b] = [Math.floor(Math.random()*210),Math.floor(Math.random()*210),Math.floor(Math.random()*210)]
            const randomColor = `rgb(${r},${g},${b})`;
            document.documentElement.style.setProperty('--leftSide-bgColor', randomColor);
            document.documentElement.style.setProperty('--nav-bgColor', randomColor);
        }
    },
    mounted() {
        // Set the first colour change off
        this.randomColorFlow();
        
        // Keep the colours changing. Interval doesn't launch immediately
        this.letTheColorsKeepFlowing = setInterval(() => {
            const [r, g, b] = [Math.floor(Math.random()*210),Math.floor(Math.random()*210),Math.floor(Math.random()*210)]
            const randomColor = `rgb(${r},${g},${b})`;
            document.documentElement.style.setProperty('--leftSide-bgColor', randomColor);
            document.documentElement.style.setProperty('--nav-bgColor', randomColor);
        }, 10000);
    },
    beforeDestroy() {
       window.clearInterval(this.letTheColorsKeepFlowing);
    },
    components: {
        Nav,
        LeftSide,
        RightSide
    },
}
</script>