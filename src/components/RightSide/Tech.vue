<template>
    <li>
        <span :class="'logo-container ' + logoClasses">
            <img :src="require(`@/assets/tech/${imageSrc}`)" :alt="imageAlt" style="max-width: 50px; height: 50px; width: auto;"/>
        </span>
        <span class="'text-container">
            <p>{{name}}</p>
        </span>
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
                height: 30px;
                width: 30px;
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