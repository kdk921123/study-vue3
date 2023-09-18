<template>
    <button type="button" @click="childFunc" ref="btn">click</button>

</template>

<script>
    export default {
        data() {
            return {
                mag: ""
            };
        },

        methods: {

            childFunc() {
                alert(this.msg);
            },

            callFromParent() {
                alert("From Parent Function");
            }



        }
    }
</script>