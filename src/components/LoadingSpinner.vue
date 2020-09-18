<template>
    <div class="loading-spinner">
        <svg class="loading-spinner-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" :stroke="lightOrDark" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    </div>
</template>

<script>
export default {
     name: 'LoadingSpinner',
     props: ['shade'],
     computed: {
             lightOrDark() {
                if (this.shade === 'light') {
                    return '#ddd';
                } else {
                    return '#666';
                }
             }
     }
}
</script>


<style lang="scss">
.loading-spinner-svg {
    transform-origin: 50px 50px; 

    @keyframes spin {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
    }
}
</style>