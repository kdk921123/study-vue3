<template>
    <button type="button" @click="childFunc" ref="btn">click</button>

</template>

<script>
    export default {
        data() {
            return {
                mag: "",
                childMsg: "From Child"
            };
        },
        mounted(){
            this.$emit('send-message', this.childMsg);
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