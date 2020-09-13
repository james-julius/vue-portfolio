<template>
    <nav :class="navClassList">
        <div class="nav-slider" @click="expandHideNav"/>
        <ul>
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
    width: 400px;
    top: 3vh;
    height: 5vh;
    z-index: 9;
    background-color: #fff6ec;
    transition: 2s ease-in-out;
    // background-color: lemonchiffon;
    &.hidden {
        left: -356px;
        transition: 2s ease-in-out;
    }
    &.expanded {
        left: 356px;
        transition: 2s ease-in-out;
    }
    .nav-slider {
        position: absolute;
        left: -44px;
        border: 22px solid transparent;
        border-right: 22px solid crimson;
        height: 0px;
        width: 0px;
        z-index: 11;
        cursor: pointer;
    }
    ul {
        display: flex;
        height: 100%;
        width: 100%;
        margin: 0px;
        list-style: none;
        padding:0px;
        li {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 5px solid crimson;
            border-left: 1px solid crimson;
            font-weight: bold;
            cursor: pointer;
        }
    }
}
</style>