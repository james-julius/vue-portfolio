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
import gsap from 'gsap';

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
            const [r, g, b] = [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)]
            const randomColor = `rgb(${r},${g},${b})`;
            gsap.to('.left-side', 5, {"--leftSide-bgColor": randomColor});
            gsap.to('nav', 5, {
                "--nav-bgColor":  randomColor,
                "--nav-borderColor":  'white',
                "--nav-textColor": 'white'
            });
        }
    },
    mounted() {
        // Set the first colour change off
        this.randomColorFlow();
        
        // Keep the colours changing. Interval doesn't launch immediately
        this.letTheColorsKeepFlowing = setInterval(() => {
            const [r, g, b] = [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)]
            const randomColor = `rgb(${r},${g},${b})`;
            gsap.to('.left-side', 5, {"--leftSide-bgColor": randomColor});
            gsap.to('nav', 5, {
                "--nav-bgColor":  randomColor,
                "--nav-borderColor":  'white',
                "--nav-textColor": 'white'
            });
        }, 5000);
    },
    beforeDestroy() {
        console.log('component will destroy');
       window.clearInterval(this.letTheColorsKeepFlowing);
    },
    components: {
        Nav,
        LeftSide,
        RightSide
    },
}
</script>