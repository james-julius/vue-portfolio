<template>
    <div class="pageOne">
        <div class="headline">
            <h1>{{heading}}</h1>
        </div>
        <div class="sub-heading">
            <h3>{{subHeading}}</h3>
        </div>

        <div class="arrow">
            <p>Discover<br/>My Portfolio</p>
            <span class="arrow-container">
                <img :click="nextPage" src="../../assets/ctarrow.svg" />
                <p class="upright-p">SCROLL</p>
            </span>
        </div>
        <div class="link-list">
            <ul>
                <li>About Me</li>
                <li>Client Projects</li>
                <li>Side Projects</li>
                <li>Get a Quote</li>
            </ul>
        </div>
        <span class="sideline"/>
        <!-- <button>Discover my portfolio</button> -->
    </div>
</template>
<script>
export default {
    name: 'PageOne',
    props: {
        heading: String,
        subHeading: String,
        content: String
    },
    methods: {
        nextPage() {

        }
    }
}
</script>

<style lang="scss">
.pageOne {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template: repeat(16, 1fr) / repeat(12, 1fr);
    h1 {
        font-size: 3rem;
    }
    h1, h3 {
        padding-left: 2vw;
        margin: 0px;
        text-align: left;
    }
    .headline {
        grid-area: 5/1/6/13;
    }
    .sub-heading {
        display: flex;
        align-items: center;
        grid-area: 6/1/7/8;
    }

    .arrow {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 1vh;
        align-items: flex-start;
        grid-area: 11/1/17/4;
        // background-color: lightcyan;
        padding-left: 1vw;
        // border-bottom: 1px solid aquamarine;
        p {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: left;
            margin-bottom: 5px;
            &.upright-p {
                writing-mode: vertical-rl;
                text-orientation: upright;
                letter-spacing: -5px;
                margin: 0px;
                font-size: 1.2rem;
            }
        }
        .arrow-container {
            display: flex;
            p {
                text-align: left;
                position: relative;
                right: 43px;
                top: 5px;
            }
            img {
                width: 50%;
                position: relative;
                right: 14px;
                bottom: 2px;
            }
        }
    }

    .sideline {
        grid-area: 1/12/17/13;
        // border-left: 1px solid aquamarine;
    }
    .link-list {
        grid-area: 10/9/17/13;
        ul {
            height: 100%;
            width: 100%;
            margin: 0px;
            padding: 0px;
            display: flex;
            flex-direction: column;
            justify-content: stretch;
            align-items: stretch;
            list-style: none;
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 1 1 auto;
                background-color: lemonchiffon;
                font-weight: bold;
                font-size: 1.15rem;
                cursor: pointer;
                border-bottom: 5px solid crimson;
            }
        }
    }

}
</style>