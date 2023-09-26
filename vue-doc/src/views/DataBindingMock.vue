<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{ i }}</td>
                    <td>{{ product.productName }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    name: 'DataBindingMock',
    components: {},
    data() {
        return {
            productList: []
        };
    },
    setup() {
    },
    created() {
        this.getList();
    },
    mounted() {
    },
    unmounted() {
    },
    methods: {
        async getList() {
           this.productList = await this.$api("https://8fa2273d-4900-407a-b008-83c354feed91.mock.pstmn.io/list", "get");
        } 
    }
    }
</script>