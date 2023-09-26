<template>
    <div>
        <span>Full Name1 : {{ fullName1 }}</span>
        <input type="text" v-model="firstName">
    </div>
    <div>
        <span>Full Name2 : {{ fullName2 }}</span>
        <input type="text" v-model="firstName">
    </div>
</template>

<script>
export default {
    name: 'ComputedAndWatch',
    components: {},
    data() {
        return {
            firstName: 'Kim',
            lastName: 'Dong-kyu',
            fullName2: ''
        };
    },
    computed: {
        fullName1() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    watch: {
        firstName() {
            this.fullName2 = this.firstName + ' ' + this.lastName;
        },
        lastName() {
            this.fullName2 = this.firstName + ' ' + this.lastName;
        }

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