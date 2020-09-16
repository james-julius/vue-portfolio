<template>
    <div class="pageOne">
        <div class="headline">
            <h1>{{heading}}</h1>
        </div>
        <div class="sub-heading">
            <h3>{{subHeading}}</h3>
        </div>
        <DynamicSocials/>
        <div class="arrow">
            <p>Scroll to view<br/>my portfolio</p>
            <span class="arrow-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="115" viewBox="0 0 60 115">
                    <g id="Group_1" data-name="Group 1" transform="translate(-42 -30)">
                        <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(42 30)" fill="#fff" stroke="#707070" stroke-linecap="round" stroke-width="5">
                            <rect width="60" height="115" rx="30" stroke="none" fill="transparent"/>
                            <rect x="2.5" y="2.5" width="55" height="110" rx="27.5" fill="transparent"/>
                        </g>
                        <g  id="Path_1" data-name="Path 1" transform="translate(68 52)" fill="#707070">
                            <path class="mousewheel" d="M 4 7.5 C 2.070090055465698 7.5 0.5 5.929910182952881 0.5 4 C 0.5 2.070090055465698 2.070090055465698 0.5 4 0.5 C 5.929910182952881 0.5 7.5 2.070090055465698 7.5 4 C 7.5 5.929910182952881 5.929910182952881 7.5 4 7.5 Z" stroke="none"/>
                            <path class="mousewheel" d="M 4 1 C 2.345789909362793 1 1 2.345789909362793 1 4 C 1 5.654210090637207 2.345789909362793 7 4 7 C 5.654210090637207 7 7 5.654210090637207 7 4 C 7 2.345789909362793 5.654210090637207 1 4 1 M 4 0 C 6.209139823913574 0 8 1.790860176086426 8 4 C 8 6.209139823913574 6.209139823913574 8 4 8 C 1.790860176086426 8 0 6.209139823913574 0 4 C 0 1.790860176086426 1.790860176086426 0 4 0 Z" stroke="none" fill="#707070"/>
                        </g>
                    </g>
                </svg>
            </span>
        </div>
        <span class="sideline"/>
    </div>
</template>
<script>
import DynamicSocials from './DynamicSocials/DynamicSocials';
export default {
    name: 'PageOne',
    props: {
        heading: String,
        subHeading: String,
        content: String
    },
    components: {
        DynamicSocials
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

    .dynamic-socials {
        grid-area: 7/1/8/4;
    }

    .arrow {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 1vh;
        align-items: flex-start;
        grid-area: 11/1/17/4;
        padding-left: 1vw;

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
            animation: lightflash 3s infinite ease-in-out;

            @keyframes lightflash {
                0% { opacity: 1}
                50% {  opacity: 0.9}
                100% { opacity: 1}
            }
            .mousewheel {
                animation: scroll-wheel 2s infinite;
                @keyframes scroll-wheel {
                    0% { 
                        transform: translateY(8px);
                    }
                    75% { 
                        transform: translateY(0px);
                    }
                    100% {
                        transform: translateY(8px);
                    }
                }
            }
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