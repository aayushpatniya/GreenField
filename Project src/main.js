import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Order from './components/Order.vue'
import Cart from './components/Cart.vue'
import ItemList from './components/ItemList.vue'
import CatagoryList from './components/CatagoryList.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import OrderPlaced from './components/OrderPlaced.vue'
import {store} from './store';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/order', component: Order },
    { path: '/itemList', component: ItemList },
    { path: '/catagoryList', component: CatagoryList },
    { path: '/signUp', component: SignUp },
    { path: '/login', component: Login },
    { path: '/orderPlaced', component: OrderPlaced },
    { path: '/cart', component: Cart }
  ],
  mode : 'history'
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
