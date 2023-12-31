import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mixin(mixins).user(store).mount('#app')

window.Kakao.init("key")
