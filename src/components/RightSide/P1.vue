<template>
    <div class="pageOne">
        <div class="headline">
            <h1>{{heading}}</h1>
        </div>
        <div class="sub-heading">
            <h3>{{subHeading}}</h3>
        </div>

        <div class="arrow">
            <p>View my portfolio</p>
            <img src="../../assets/ctarrow.svg" />
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
    }
}
</script>

<style lang="scss">
.pageOne {
    height: 100%;
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
        grid-area: 5/1/6/8;
    }
    .sub-heading {
        display: flex;
        align-items: center;
        grid-area: 6/1/7/8;
    }

    .arrow {
        grid-area: 8/2/15/4;
        // background-color: black;
        // border-bottom: 1px solid aquamarine;
        p {
            font-size: .8rem;
            font-weight: bold;
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
                background-color: beige;
                font-weight: bold;
                font-size: 1.15rem;
                cursor: pointer;
            }
        }
    }

}
</style>