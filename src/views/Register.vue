<template>
    <div class="text-center container">
        <form action="#" @submit.prevent="register"  style="max-width: 330px; margin:0px auto;">
            <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
            <h1 class="h3 mb-3 fw-normal">建立帳號</h1>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="reg-email" placeholder="name@example.com" v-model="user.email">
                <label for="floatingInput">電子信箱</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="reg-pass" placeholder="Password" v-model="user.pass">
                <label for="floatingPassword">密碼</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="reg-repass" placeholder="Password" v-model="user.repass">
                <label for="floatingPassword">確認密碼</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="reg-name" placeholder="Password" v-model="user.name">
                <label for="floatingPassword">姓名</label>
            </div>
            <div class="card card-body mb-1" v-if="error" style="border-left: 5px solid rgb(220, 53, 69);">
                {{error}}
            </div>
            <div class="mb-3">
                <label class="form-check-label">已有帳號嗎？ <router-link to="/login">點我登入</router-link></label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">註冊</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
export default {
    name:'Register',
    data(){
        return{
            user:{
                email:"",
                pass:"",
                repass:"",
                name:"",
                detail:{}
            },
            onload: false,
            error:""
        }
    },
    methods:{
        register: function(){
            if(this.user.pass != this.user.repass){
                this.error = '密碼與確認密碼不一樣';
                return;
            }
            this.error = ""
            this.onload = true
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.pass)
            .then((userCredential) => {
                console.log(userCredential.user);
                this.user.detail = userCredential.user
                this.initialize(this.user.detail.uid)
                return userCredential.user.updateProfile({
                    displayName: this.user.name
                })
            })
            .catch((error) => {
                this.error = this.error_handling(error.code)
                this.onload = false
            });
        },
        initialize: function(token){
            firebase.firestore().collection("service").doc(token).set({
                tags:["早餐","午餐","晚餐","交通","食物","文具","其他"],
                colors:["#0d6efd","#6c757d","#198754","#0dcaf0","#ffc107","#dc3545","#212529"],
                inc_color:["#0d6efd","#6c757d"],
                inc_tags:["轉帳","現金"]
            })
            .then(() => {
                this.onload = false
                firebase.auth().signOut().then(() => {
                    this.$toast.success("註冊成功",{position:"top-right"});
                }).catch((error) => {
                    console.log(error)
                });
            })
            .catch((error) => {
                var my = (error.code + '\n' + error.message)
                alert(my);
            });
        },
        error_handling: function(error){
            if(error == "auth/email-already-in-use"){
                return "信箱已有人使用"
            }else if(error == "auth/user-disabled"){
                return "此帳戶已被停用"
            }else if(error == "auth/operation-not-allowed"){
                return "管理員已停止帳號註冊"
            }else if(error == "auth/weak-password"){
                return "密碼過短"
            }
        }
    }
}
</script>
