<template>
    <div class="rightPage">
        <div class="headline">
            <h1>{{heading}}</h1>
            <h4>{{subHeading}}</h4>
        </div>
        <div class="content">
            <p>{{content}}</p>
        </div>
        <Technologies
            :stack="stack"
        />
    </div>
</template>

<script>
import Technologies from './Technologies';

export default {
    name: 'CaseStudy',
    components: {
        Technologies
    },
    props: {
        heading: String,
        subHeading: String,
        content: String,
        stack: Array
    }
}
</script>

<style lang="scss" scoped>
.rightPage {
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
        grid-area: 3/1/4/8;
    }
    .content {
        display: flex;
        align-items: center;
        text-align: left;
        grid-area: 4/1/7/8;
        margin-left: 2vw;
    }

    .arrow {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 1vh;
        align-items: flex-start;
        grid-area: 11/1/17/2;
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
                right: 6px;
            }
            img {
                width: 50%;
                position: relative;
                right: 14px;
                bottom: 2px;
            }
        }
    }

    // .technologies {

    // }

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