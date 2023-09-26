<template>
    {{ injectData }}
</template>

<script>
export default {

    data() {
        return {
            injectData: ''
        };
    },
    inject: provideData,
    mounted() {
        this.injectData = this.provideData;
        
    }
}
</script>