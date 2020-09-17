<template>
    <div class="rightPage">
        <div class="headline">
            <h2>{{heading}}</h2>
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
    h2 {
        font-size: 2.3rem;
    }
    h1, h2, h3, h4 {
        padding-left: 2vw;
        margin: 10px 0px;
        text-align: left;
    }
    .headline {
        grid-area: 3/1/4/8;
    }
    .content {
        display: flex;
        align-items: flex-start;
        text-align: left;
        grid-area: 4/1/13/8;
        margin-left: 2vw;
        p {
            white-space: pre-line;
        }
    }

    .sideline {
        grid-area: 1/12/17/13;
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
                border-bottom: 5px solid #dc143c;
            }
        }
    }
    @media (max-width: 750px) {
        .headline {
            grid-area: 3/1/4/17;
        }
        .content {
            grid-area: 4/1/10/17;
        }
        .technologies {
            grid-area: 11/1/14/16;
        }
    }
}
</style>