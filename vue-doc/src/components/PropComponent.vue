<template>
    <div>
        <span>Number : {{ number }}</span>
    </div>

    <div>
        <span>Boolean : {{ boolean }}</span>
    </div>

    <div>
        <span>Array : {{ array }}</span>
    </div>

    <div>
        <span>Object : {{ object }}</span>
    </div>

    <div>
        <span></span>
    </div>


</template>

<script>
    export default {
        props: {
            number: {
                type: Number,
                default: 0
            },
            boolean: {
                type: Boolean,
                default: false
            },
            array: {
                type: Array,
                default: [1,2,3]
            },
            object: {
                type: Object,
                default: {name : "Kim", age : 31}
            },
            propOption: {
                type: [String, Number, Function, Object],
                required: true,
                default: function() {
                    return {name: 'Kim'};
                },
                validator: function(data) {
                    return data.name == 'Kim';
                }

            }



        }
    }
</script>