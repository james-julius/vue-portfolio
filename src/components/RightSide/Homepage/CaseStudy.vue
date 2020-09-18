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
        <div class="color-spacer"/>
        <div class="desktop-img">
                <img :src="require(`@/assets/${desktopImg}`)" alt="Desktop image of site"/>
        </div> 
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
        stack: Array,
        desktopImg: String
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
        grid-area: 1/1/2/8;
    }
    .content {
        display: flex;
        align-items: flex-start;
        text-align: left;
        grid-area: 2/1/11/8;
        margin-left: 2vw;
        p {
            white-space: pre-line;
        }
    }
    .color-spacer {
        grid-area: 15/1/16/16;
        background-color: var(--leftSide-bgColor);
    }

    .desktop-img {
        grid-area: 9/1/14/7;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left center;
        display: flex;
        margin-left: 2vw;
        img {
            height: 100%;
            width: auto;
        }
    }

    @media (max-width: 750px) {
        .headline {
            grid-area: 1/1/2/17;
        }
        .content {
            grid-area: 2/1/8/17;
        }
        .technologies {
            grid-area: 9/1/12/16;
        }
        .desktop-img {
            display: none;
        }
    }
}
</style>