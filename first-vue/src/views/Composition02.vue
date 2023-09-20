<template>
        <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1">
            <span> + </span>
            <input tyoe="text" v-model="num1">
            <span> = </span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>

<script>
import {reactive, computed} from 'vue';
export default {
    name: 'Composition02',
    setup() {
        let state = reactive({
            num1: 0,
            num2: 0,
            result: computed(()=> parseInt(state.num1) + parseInt(state.num2))
        });

        return {
            state
        }
    }
}
</script>