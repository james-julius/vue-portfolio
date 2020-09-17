<template>
    <div class="technologies">
        <div class="tech-header">
            <h3>Technologies Used</h3>
        </div>
        <ul>
            <template v-for="tech in validatedStack">
                <Tech 
                    :key="tech.name"
                    :name="tech.name"
                    :imageSrc="tech.imageSrc"
                    :logoClasses="tech.logoClasses"
                />
            </template>
        </ul>
    </div>
</template>

<script>
import Tech from './Tech';
export default {
    name: 'Technologies',
    methods: {
        using(technology) {
            if (this.stack.includes(technology)) {
                console.log('test result: , ', true) 
                return true;
            }
            else {
                return false;
            }
        }
    },
    computed: {
        validatedStack: function () {
            const storedData = {
                'html': {
                    name: 'HTML5',
                    imageSrc: 'html5.png'
                },
                'css': {
                    name: 'CSS3',
                    imageSrc: 'CSS.png'
                },
                'laravel': {
                    name: 'Laravel',
                    imageSrc: 'laravel-logo.svg'
                },
                'react': {
                    name: 'React.js',
                    imageSrc: 'reactjs.png',
                },
                'wordpress': {
                    name: 'Wordpress',
                    imageSrc: 'wordpress.png',
                    imgClasses: ''
                },
                'strapi': {
                    name: 'Strapi',
                    imageSrc: 'strapi.webp',
                    imgClasses: ''
                },
                'woocommerce': {
                    name: 'WooCommerce',
                    imageSrc: 'woologo.svg',
                    imgClasses: ''
                },
                'squarespace': {
                    name: 'Squarespace',
                    imageSrc: 'squarespace.png',
                    imgClasses: ''
                },
                'shopify': {
                    name: 'Shopify',
                    imageSrc: 'shopify.webp',
                    imgClasses: ''
                },
                'mysql': {
                    name: 'MySQL',
                    imageSrc: 'mysql.png'
                }
            };
            let validated = [];
            for (let tech in this.stack) {
                let stackKey = this.stack[tech];
                if (storedData[stackKey]) {
                    validated.push(storedData[stackKey])
                }
            }
            return validated;
        }
    },
    components: {
        Tech
    },
    props: {
        stack: Array
    }
}
</script>

<style lang="scss">
    .technologies {
        grid-area: 3/9/13/13;
        .tech-header {
            border-bottom: 1px solid grey;
        }
        ul {
            list-style: none;
            margin: 0px;
            padding: 10px 0px 0px 0px;
            li {
                font-weight: bold;
                margin: 2px auto;
            }
        }
        @media (max-width: 750px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            .tech-header {
                text-align: left;
                width: 100%;
                padding-left: 5vw;
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                li {
                    display: flex;
                    justify-content: space-around;
                    width: 49vw;
                    max-width: 49vw;
                    .logo-container {
                        margin-right: 5px;
                    }
                    .text-container {
                        font-size: .8rem;
                    }
                }
            }
        }
    }
</style>