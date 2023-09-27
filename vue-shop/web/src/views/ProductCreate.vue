<template>
      <main>
        <div class="container mt-4">
          <h2 class="text-center">제품 등록</h2>
          <div class="row mt-5">
            <div class="col-8">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">제품명</span>
                <input type="text" class="form-control" v-model="product.product_name" aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-8">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">가격</span>
                <input type="text" class="form-control" v-model="product.product_price" aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">전자제품</span>
                <select class="form-select"  v-model="cate2" @change="changeCategory1">
                  <option :value="cate" :key="i" v-for="(cate, i) in category1">{{cate}}</option>
              </select>
              </div>
            </div>
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">컴퓨터</span>
                <select class="form-select" v-model="cate2" @change="changeCategory2">
                  <option :value="cate" :key="i" v-for="(cate, i) in category2">{{cate}}</option>
                </select>
              </div>
            </div>
            <div class="col-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">악세사리</span>
                <select class="form-select" v-model="cate2" @change="changeCategory3">
                  <option :value="cate" :key="i" v-for="(cate, i) in category3">{{cate}}</option>
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
            <button type="button" class="btn btn-secondary">등록</button>
            <button type="button" class="btn btn-dark" @click="goTo">취소</button>
          </div>
        </div>

      </main>
</template>

<script>
export default {
  data() {
    return {
      product: {
        product_name : "",
        product_price: 0,
        delivery_price: 0, 
        add_delivery_price: 0,
        product_tags: "",
        outbound_days: 0,
        seller_id: 1,
        category_id: 1
      },
      categoryList: [],
      category1: [],
      category2: [],
      category3: [],
      cate1: "",
      cate2: "",
      cate3: ""
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.getCategoryList();

  },
  mounted() {
    if(this.user.email == undefined) {
      this.$router.push({path:'/'})
    }
  },
  methods: {
    goToList(){
      this.$router.push({path:'/sales'}); 
    },
    async getCategoryList(){
      let categoryList = await this.$api("/api/categoryList",{});
      this.categoryList = categoryList;
      
      let oCategory = {};
      categoryList.forEach(item => {
        oCategory[item.category1] = item.id;
      });

      let category1 = [];
      for(let key in oCategory) {
        category1.push(key);
      }

      setTimeout(() => {
        console.log(hello);
      }, 10000);

       this.category1 = category1;

      let category2 = [];
      category2 = categoryList.filter(c => {
        return c.category1 == category1[0];
      });

      let oCategory2 = {};
      category2.forEach(item => {
        oCategory2[item.category2] = item.id;
      });

      category2 = [];
      for(let key in oCategory2) {
        category2.push(key);
      }

      this.category2 = category2;

      // console.log(category2);

    },
    changeCategory1(){
      // this.cate1
      this.category3 = [];
      let categoryList = this.categoryList.filter(c => {
        return c.category1 == this.cate1;
      });

      let oCategory2 = {};
      categoryList.forEach(item => {
        oCategory2[item.category2] = item.id;
      });

      let category2 = [];
      for(let key in oCategory2) {
        category2.push(key);
      }

      this.category2 = category2;
    },
    changeCategory2(){
      let categoryList = this.categoryList.filter(c => {
        return (c.category1 == this.cate1 && c.category2 == this.cate2);
      });

      let oCategory3 = {};
      categoryList.forEach(item => {
        oCategory3[item.category3] = item.id;
      });

      let category3 = [];
      for(let key in oCategory3) {
        category3.push(key);
      }

      this.category3 = category3;
    },
    async productInsert() {
      if(this.product.product_name == "") {
        return this.$swal("제품명은 필수 입력값입니다.");
      }

      if(this.product.product_price == "" || this.product.product_price == 0) {
        return this.$swal("제품 가격을 입력하세요.");
      }

      if(this.product.delivery_price == "" || this.product.delivery_price == 0) {
        return this.$swal("배송료를 입력하세요.");
      }

      if(this.product.outbound_days == "" || this.product.outbound_days == 0) {
        return this.$swal("출고일을 입력하세요.");
      }

      this.product.category_id = this.categoryList.filter(c => {
        return (c.category1 == this.cate1 && c.category2 == this.cate2 && c.category3 == this.cate3);
      })[0].id;

      await this.$api("/api/productInsert",{param:[this.product]});
      this.$router.push({path:'/sales'});

        

    }
  }
}
</script>