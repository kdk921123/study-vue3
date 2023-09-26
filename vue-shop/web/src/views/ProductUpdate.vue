<template>
      <main>
        <div class="container mt-4">
          <h2 class="text-center">제품 수정</h2>
          <div class="row mt-5">
            <div class="col-8">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">제품명</span>
                <input type="text" v-model="product.product_name" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-8">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">가격</span>
                <input type="text" v-model="product.product_price" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">전자제품</span>
                <select class="form-select">
                  <option selected></option>
                  <option value="1">노트북</option>
                  <option value="2">모니터</option>
                  <option value="3">마우스</option>
              </select>
              </div>
            </div>
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">컴퓨터</span>
                <select class="form-select">
                  <option selected></option>
                  <option value="1">노트북</option>
                  <option value="2">모니터</option>
                  <option value="3">마우스</option>
              </select>
              </div>
            </div>
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">악세사리</span>
                <select class="form-select">
                  <option selected></option>
                  <option value="1">노트북</option>
                  <option value="2">모니터</option>
                  <option value="3">마우스</option>
              </select>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">배송비</span>
                <input type="text" v-model="product.delivery_price" class="form-control"  aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">추가 배송비</span>
                <input type="text"  v-model="product.add_delivery_price" class="form-control" aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">출고일</span>
                <input type="text"  v-model="product.outbound_days" class="form-control"  aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-8">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">태그</span>
                <input type="text" v-model="product.product_tags" class="form-control"   aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="btn pt-2">
            <button type="button" class="btn btn-secondary" >수정</button>
            <button type="button" class="btn btn-dark" @click="goToList" >취소</button>
          </div>
        </div>
      </main>
</template>

<script>
export default {
  data() {
    return {
      productId: 0,
      product: {}
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    if(this.user.email == undefined) {
      this.$router.push({path:'/'})
    }
  },
  created() {
    this.productId = this.$route.query.product_id;
    this.getProductDetail();
  },

  methods: {
    goToList() {
      this.$router.push({path:'/sales'})
    },
    async getProductDetail() {
      let productDetail = await this.$api("/api/productDetail", {param:[this.productId]});
      if(productDetail.length > 0) {
        this.product = productDetail;
      }
    }


  }

}
</script>