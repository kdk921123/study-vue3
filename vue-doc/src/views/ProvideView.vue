<template>
    <inject-component />
</template>

<script>
    import InjectComponent from '@/components/InjectComponent.vue'
    export default {
        name: '',
        components: {InjectComponent},
        data() {
            return {
                provideData: "From Provide"
            };
        },
        provide() {
            return this.provideData;
            
        }
    }
</script>