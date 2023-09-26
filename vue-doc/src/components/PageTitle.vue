<template>
    <h2>{{ staticTitle }}</h2>
    <h2>{{ dynamicTitle }}</h2>
</template>

<script>
    export default {
        props: {
            staticTitle: {
                type: String,
                default: "Default Title"
            },
            dynamicTitle: {
                type: String,
                default: "Default Title"
            }
        }
    }
</script>