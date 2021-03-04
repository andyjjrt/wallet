import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import Record from '../views/Record.vue'
import Profile from '../views/Profile.vue'
import Detail from '../views/Detail.vue'
import firebase from "firebase/app"
import "firebase/auth"
Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: Main,
    props: true,
    meta: {requiresAuth: true},
    children:[
      {
        path:"",
        name:"Home",
        component: Home,
      },
      {
        path:"detail",
        name:"Detail",
        component: Detail,
      },
      {
        path:"record",
        name:"Record",
        component: Record,
      },
      {
        path:"profile",
        name:"Profile",
        component: Profile,
      },
      { path: '*', redirect: '/main' },
    ]
  },
 
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  { path: '/*', redirect: '/main' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass:'active',
  routes,
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  firebase.auth().onAuthStateChanged(function(user){
    if(!user && requiresAuth){
      next({name:"Login"});
    }else{
      if(user &&(to.name == "Login" || to.name == "Register")){
        next({name:"Home"});
      }
      next();
    }
  })
});

export default router
