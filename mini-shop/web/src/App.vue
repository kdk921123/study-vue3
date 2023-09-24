<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MINI</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link  class="nav-link active" to="/">제품 리스트</router-link >
              </li>
              <li class="nav-item">
                <router-link  class="nav-link" to="/detail" >제품 상세</router-link >
              </li>
              <li v-if="user.email != undefined" class="nav-item">
                <router-link  class="nav-link" to="/create" >제품 등록</router-link >
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div v-if="user.email==undefined">
              <button class="btn btn-danger" type="button" @click="kakaoLogin">Login</button>
            </div>
            <div v-else>
              <button class="btn btn-danger" type="button" @click="kakaoLogout">Logout</button>
            </div>
          </div>
        </div>
      </nav>

  <router-view/>
</template>
<script>
  export default {
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    methods: {
      kakaoLogin() {
        window.kakao.Auth.login({
          scope: 'profile, account_email, gender',
          success: this.getProfile

        });
      },
      getProfile(authObj) {
        console.log(authObj);
        window.kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            this.login(kakao_account);
            console.log(kakao_account);
          }
        });
      },
      async login(kakao_account) {
        await this.$api("/api/login", {
          param: [
            {email: kakao_account.email, nick_name: kakao_account.profile.nickname},
            {nick_name: kakao_account.profile.nickname}
          ]
        });
        this.$store.commit("user", kakao_account);

      },
      kakaoLogout() {
        window.Kakao.Auth.logout((response) => {
          console.log(response);
          this.$store.commit("user", {});
        });
    }

    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
