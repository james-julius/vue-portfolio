<template>
    <nav :class="navClassList">
        <div class="nav-slider" @click="expandHideNav"/>
        <ul class="nav-list">
            <li>Home</li>
            <li>About Me</li>
            <li>Get in touch</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data: function() {
        return {
            navClassList: ''
        }
    },
    methods: {
        expandHideNav() {
            console.log('expand hide nav triggered');
            (this.navClassList === 'expanded') ? 
                this.navClassList === 'hidden' : 
                this.navClassList === 'expanded';
        }
    }
}
</script>

<style lang="scss">
nav {
    display: inline-flex;
    position: fixed;
    right: 0px;
    width: 50vw;
    height: 5vh;
    z-index: 9;
    background-color: crimson;
    transition: 2s ease-in-out;
    color: white;
    &.hidden {
        left: -356px;
        transition: 2s ease-in-out;
    }
    &.expanded {
        left: 356px;
        transition: 2s ease-in-out;
    }
    // .nav-slider {
    //     position: absolute;
    //     left: -42px;
    //     border: 21px solid transparent;
    //     border-right: 21px solid crimson;
    //     height: 0px;
    //     width: 0px;
    //     z-index: 11;
    //     cursor: pointer;
    // }
    ul {
        display: flex;
        height: 100%;
        width: 100%;
        margin: 0px;
        list-style: none;
        padding:0px;
        background-color: var(--nav-bgColor);
        li {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid white;
            border-left: 1px solid white;
            font-weight: bold;
            cursor: pointer;
            &:first-child {
                border-left: 2px solid white;   
            }
            &:hover {
                background-image: linear-gradient(to top, white, var(--leftSide-bgColor));
                opacity: 0.8;
                transition: 2s ease-in-out;
            }
        }
        &:after {
            content: "";
            width: 100%;
            height: 5px;
            position: absolute;
            bottom: -5px;
            background-image: linear-gradient( to bottom,  var(--rightSide-bgColor), white);
        }
        // &:before {
        //     content: "";
        //     width: 100%;
        //     height: 3px;
        //     position: absolute;
        //     top: 0px;
        //     background-image: linear-gradient( to right, crimson, purple);
        // }
    }
}
</style>