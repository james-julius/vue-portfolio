<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Get in touch</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
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
    // background-color: lemonchiffon;
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