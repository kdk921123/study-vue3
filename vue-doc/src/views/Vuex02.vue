<template>
    <p>{{ cartCount }}</p>
</template>

<script>
    export default {

        computed: {
            cartCount() {
                return this.$cart.getters.cartCount;
            }
        },

        methods: {

        }
    }
</script>