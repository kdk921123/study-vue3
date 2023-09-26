<template>

    <slot-child>
        <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:default>
            <h2>Default</h2>
        </template>
        <template v-slot:footer>
            <h1>Footer</h1>
        </template>
    </slot-child>

</template>

<script>
import SlotChild from '@/components/SlotChild.vue';
export default {
    name: '',
    components: {SlotChild},
    data() {
        return {
            sampleData: ''
        };
    },
    setup() {
    },
    created() {
    },
    mounted() {
    },
    unmounted() {
    },
    methods: {
    }
    }
</script>