<template>
    <nav :class="navClassList">
        <ul class="nav-list">
            <li @click="handleNavClick('/')">Home</li>
            <li @click="handleNavClick('/about')">About Me</li>
            <li @click="handleNavClick('/contact')">Get in touch</li>
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
        handleNavClick(url) {
            if (this.$router.currentRoute.path !== url) {
                this.$router.push(url)
            } else {
                document.body.scrollTop = 0;
            }
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
    --nav-textColor: white;
    --nav-borderColor: white;
    border-bottom: 1px solid white;
    &.hidden {
        left: -356px;
        transition: 2s ease-in-out;
    }
    &.expanded {
        left: 356px;
        transition: 2s ease-in-out;
    }
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
            border-right: 1px solid var(--nav-borderColor);
            border-left: 1px solid var(--nav-borderColor);
            color: var(--nav-textColor);
            font-weight: bold;
            cursor: pointer;
            &:first-child {
                border-left: 2px solid var(--nav-borderColor);   
            }
            &:hover {
                background-image: linear-gradient(to bottom, var(--rightSide-bgColor), white);
                color: darkslategray;
                transition: .7s ease-in-out;
            }
        }
        &:after {
            content: "";
            width: 100%;
            height: 5px;
            position: absolute;
            bottom: -5px;
            background-image: linear-gradient( to top,  var(--rightSide-bgColor), var(--nav-text-color));
        }
    }
}
</style>