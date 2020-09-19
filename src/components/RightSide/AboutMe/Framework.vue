<template>
    <li>
        <span class="framework-logo">
            <img 
                :src="require(`@/assets/frameworks/${imgSrc}`)"
                alt="logo"
            />
        </span>
        <span class="framework-text">
            <p>{{name}}</p>
        </span>
    </li>
</template>

<script>
export default {
    name: 'Framework',
    props: ['imgSrc', 'name']
}
</script>
