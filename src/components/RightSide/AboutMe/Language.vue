<template>
    <li>
        <span class="skill-logo">
            <template v-if="isEmoji">
                {{emoji}}
            </template>
            <img v-else
                :src="require(`@/assets/languages/${imgSrc}`)"
                alt="logo"
            />
        </span>
        <span class="skill-text">
            <p>{{name}}</p>
        </span>
    </li>
</template>

<script>
export default {
    name: 'Language',
    props: ['imgSrc', 'name', 'isEmoji', 'emoji']
}
</script>
