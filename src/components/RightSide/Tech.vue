<template>
    <li>
        <span :class="logoClasses">
            <img :src="imageSrc" :alt="imageAlt"/>
        </span>
        <span :class="textClasses">
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
        },
        textClasses: {
            type: String,
            default: 'text-container'
        }
    }
}
</script>