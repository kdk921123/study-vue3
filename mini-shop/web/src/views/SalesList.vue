<template>
    <div>
      <main>
        <div class="container mt-4">
          <div class="float-end mb-2">
            <button type="button" class="btn btn-dark" @click="goToInsert">제품 등록</button>
          </div>
          <table class="table table-borderd">
            <thead>
              <tr>
                <th></th>
                <th>제품명</th>
                <th>가격</th>
                <th>배송비</th>
                <th>추가 배송비</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr :key="i" v-for="(product, i) in productList">
                <td></td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.product_price }}</td>
                <td>{{ product.delivery_price }}</td>
                <td>{{ product.add_delivery_price }}</td>
                <td>
                  <button type="button" class="btn btn-dark" @click="goToUpdate(product.id)">수정</button>
                  <button type="button" class="btn btn-danger" @click="deleteProduct(product.id)">삭제</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
</template>
<script>
export default {
  data() {
    return {
      productList: []
    }
  },

  created() {
    this.getProductList()
  },
  methods: {
    async getProductList() {
      this.productList = await this.$api("/api/productList", {});
      console.log(this.productList);
    },
    goToInsert() {
      this.$router.push({path: '/create'})
    },

    goToDetail(product_id) {
      this.$router.push({path:'/detail', query:{product_id:product_id}});
    },
    goToUpdate(product_id) {
      this.$router.push({path:'/update', query:{product_id: product_id}})
    },
    async deleteProduct(product_id){
      await this.$api("/api/delete", {param: [product_id]});
      this.getProductList();
    }

  }


}

</script>