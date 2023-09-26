<template>
      <main>
        <div class="container mt-4">
          <div class="row">
            <div class=" col-md-5">
              <img src="https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/lsjpwkwb/19ea5ec758ca4864ad0526158d9e8486.jpg" class="card-img-top" alt="...">
            </div>
            <div class="col-md-7">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ product.product_name }}</h5>
                  <div class="card-text pt-4">{{ product.product_price }}</div>
                  <div class="card-text pt-4 ">
                    <span class="badge bg-dark">{{ product.cateroty1 }}</span>
                    <span class="badge bg-dark">{{ product.cateroty2 }}</span>
                    <span class="badge bg-dark">{{ product.cateroty3 }}</span>
                  </div>
                  <div class="card-text pt-4 ">
                    배송비 : {{ product.delivery_price }} | 도서산간(제주도) : {{ product.add_delivery_price }} | 택배배송 | {{ product.outbound_days }}일 내에 출고

                  </div>
                  <div class="card-text pt-4" style="width: 120px;">
                    <div class="input-group mb-3 d-flex ">
                      <span class="input-group-text" @click="calPrice(-1)">-</span>
                      <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" v-model="count">
                      <span class="input-group-text" @click="calPrice(+1)">+</span>
                    </div>
                  </div>
                  <p class="card-text pt-4" >총 상품금액 : {{ totalPrice }}</p>
                  <div class="btn-group pt-2">
                    <button type="button" class="btn btn-outline-secondary">장바구니</button>
                    <button type="button" class="btn btn-outline-secondary">주문하기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
</template>

<script>
export default {
  data() {
    return {
      productId: 0,
      product: {},
      count: 0,
      totalPrice: 0
    }
  },

  created() {
    this.productId = this.$route.query.product_id;
    this.getProductDetail()
  },
  methods: {
    async getProductDetail() {
      let productDetail = await this.$api("/api/product", {param: this.productId});
      if(productDetail.length > 0) {
        this.product = productDetail[0];
        this.totalPrice = productDetail[0].product_price;
      }
      
      console.log(this.productDetail);
    },
    calPrice(cnt) {
      let count = this.count + cnt;
      if(count < 1) {
        this.count == 1;
        this.totalPrice = this.product.product_price;
      } else {
        this.count = count;
        this.totalPrice = this.product.product_price * this.count;

      }

    }
  }


}

</script>