<template>
    <li>
        <span :class="'logo-container ' + logoClasses">
            <img class="tech-logo"
                :src="require(`@/assets/frameworks/${imageSrc}`)" 
                :alt="imageAlt"
            />
        </span>
        <span class="'text-container">
            <p>{{name}}</p>
        </span>
        <br/>
    </li>
</template>

<script>
export default {
    name: 'Tech',
    props: {
        imageSrc: {
            type: String,
        },
        imageAlt: {
            type: String,
        },
        name: {
            type: String,
        },
        logoClasses: {
            type: String,
            default: 'logo-container'
        }
    }
}
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        flex: 1 1 auto;
        justify-content: flex-start;
        align-items: center;
        .logo-container {
            height: 100%;
            width: 30%;
            .tech-logo {
                max-height: 50px;
                max-width: 50px;
                width: auto;
            }
            .text-container {
                width: 70%;
                p {
                    font-weight: bold;
                }
            }
        }
    }
</style>