<template>
    <div>
      <main>
        <div class="container mt-4">
            <div class="row">
                <div class="col-12">
                    <select class="form-select">
                        <option selected></option>
                        <option value="1">노트북</option>
                        <option value="2">모니터</option>
                        <option value="3">마우스</option>

                    </select>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-lg-3 col-md-6" :key="i" v-for="(product, i) in productList">
                    <div class="card" style="width: 18rem;">
                        <a @click="goToDetail(product.id)">
                          <img src="https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/lsjpwkwb/19ea5ec758ca4864ad0526158d9e8486.jpg" class="card-img-top" alt="...">
                        </a>
                          <div class="card-body">
                          <h5 class="card-title">{{ product.product_name }}</h5>
                          <p class="card-text">{{ product.product_price }}</p>
                          <p class="card-text">
                            <span class="badge bg-dark">{{ product.category1 }}</span>
                            <span class="badge bg-dark">{{ product.category2 }}</span>
                            <span class="badge bg-dark">{{ product.category3 }}</span>
                          </p>
                          <div class="btn-group">
                            <button type="button" class="btn btn-outline-secondary">장바구니</button>
                            <button type="button" class="btn btn-outline-secondary">구매</button>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
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
    goToDetail(product_id) {
      this.$router.push({path:'/detail', query:{product_id:product_id}});
    }
  }


}

</script>