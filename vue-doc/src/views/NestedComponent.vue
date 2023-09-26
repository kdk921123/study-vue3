<template>
    <div>
      
        <PageTitle staticTitle="Static Title" :dynamicTitle="dynamicTitle"/>
        <PropComponent :number="number" :boolean="boolean" :array="array" :object="object"/>
        <ChildEvent @send-message="sendMessage" ref="child_event"/>
        <button type="button" @click="changeChildData">Change Child Data</button>
       
    </div>
</template>

<script>
import ChildEvent from '@/components/ChildEvent.vue';
import PageTitle from '@/components/PageTitle.vue';
import PropComponent from '@/components/PropComponent.vue';
export default {
    name: 'NestedComponent',
    components: { PageTitle, PropComponent, ChildEvent },
    data() {
        return {
            dynamicTitle: 'Dynamic Title',
            number: 100,
            boolean: true,
            array: [4, 5, 6],
            object: {name : "Lee", age : 24}
        };
    },
    mounted() {
        // this.$refs.child_event.$refs.btn.click();
        // this.$refs.child_event.callFromParent();
    },
    unmounted() {
    },
    computed: {
        mag(){
            console.log(this.$refs.child_event.msg);
        }
       
    },
    methods: {
        changeChildData() {
            this.$refs.child_event.msg = "From Parent Message";
        },
        sendMessage(data) {
            console.log(data);
        }
    }
    }
</script>