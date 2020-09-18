<template>
    <nav :class="navClassList">
        <ul class="nav-list">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/about">About Me</router-link></li>
            <li><router-link to="/contact">Get in touch</router-link></li>
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
        },
        isActive(url) {
            if (this.$router.currentRoute.path !== url) {
                return 'actiev'
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
            font-weight: bold;
            cursor: pointer;
            a {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                color: var(--nav-textColor);
                margin: 0px; 
                padding: 0px;
                &:hover {
                    background-image: linear-gradient(to bottom, var(--rightSide-bgColor), white);
                    color: darkslategray;
                    transition: .7s ease-in-out;
                }
                &.router-link-active {
                    background-image: linear-gradient(to bottom, var(--rightSide-bgColor), white);
                    color: darkslategray;
                }
            }

            &:first-child {
                border-left: 2px solid var(--nav-borderColor);   
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