<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">홈</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">전자 제품</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">의류</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">식품</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
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
    async productInsert() {

      this.product.category_id = this.categoryList.filter(c => {
        return (c.category1 == this.cate1 && c.category2 == this.cate2 && c.category3 == this.cate3);
      })[0].id;


      await this.$api("/api/productInsert", {param:[this.product]});
    },
    async getCategoryList(){
      let categoryList = await this.$api("/api/categoryList", {});
      this.categoryList = categoryList;

      let oCategory = {};
      categoryList.forEach(item => {
        oCategory[item.category1] = item.id;
      });
      let category1 = [];
      for(let key in oCategory) {
        category1.push(key);
      }
      this.category1 = category;

      let category2 = [];
      category2 = categoryList.filter(c => {
        return c.category1 == c.category1[0];
      });
      let oCategory2 = {};
      category2.forEach(item => {
        oCategory2[item.category2] = item.id;
      });

      for(let key in oCategory2) {
        category2.push(key);
      }
      this.category2 = category2;
    },
    changeCategory1(){

      this.category3 = [];
      let categoryList = this.catetoryList.filter(c => {
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

      let categoryList = this.catetoryList.filter(c => {
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

    }

  }

}
</script>