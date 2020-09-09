<template>
    <div class="technologies">
        <ul>
            <template v-for="tech in validatedStack">
                <Tech 
                    :key="tech.name"
                    :name="tech.name"
                    :imageSrc="require(`@/assets/tech/${tech.imageSrc}`)"
                    :textClasses="tech.textClasses"
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
            console.log('using called with technology: ', technology)
            console.log(this.stack);
            if (this.stack.includes(technology)) {
                console.log('test result: , ', true) 
                return true;
            }
            else {
                return false
            }
        }
    },
    computed: {
        validatedStack: function () {
            const storedData = {
                'laravel': {
                    name: 'Laravel',
                    imageSrc: 'laravel-logo.svg'
                },
                'react': {
                    name: 'React',
                    imageSrc: 'reactjs.png',
                },
                'wordpress': {
                    name: 'Wordpress',
                    imageSrc: 'wordpress.png'
                },
                'mysql': {
                    name: 'MySQL',
                    imageSrc: ''
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
        grid-area: 7/9/17/13;
        background-color: grey;
        ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
            li {
                display: flex;
                flex: 1 1 auto;
                justify-content: flex-start;
                align-items: center;
                .logo-container {
                    height: 100%;
                    width: 30%;
                    .tech-logo {
                        height: 30px;
                        width: 30px;
                        width: auto;
                    }
                    .text-container {
                        width: 70%;
                    }
                }
            }
        }
    }
</style>