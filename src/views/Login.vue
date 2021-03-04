<template>
    <div class="container">
        <InfoModal />
        <form action="#" @submit.prevent="login" style="max-width: 330px; margin:0px auto;" class="text-center ">
            <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
            <h1 class="h3 mb-3 fw-normal">登入</h1>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required autofocus v-model="user.email">
                <label for="floatingInput">電子信箱</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required v-model="user.pass">
                <label for="floatingPassword">密碼</label>
            </div>
            <div class="card card-body mb-1" v-if="error" style="border-left: 5px solid rgb(220, 53, 69);">
                {{error}}
            </div>
            <div class="mb-3">
                <label class="form-check-label">沒有帳號嗎？ <router-link to="/register">點我註冊</router-link></label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" :class="{'disabled' : onload}" type="submit">登入</button>
            <br><br>
            <div class="mb-3">
                <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">V1.0.1-build220</button>
            </div>
        </form>
        
    </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import InfoModal from "@/components/InfoModal"
export default {
    name:'Login',
    components:{InfoModal},
    data(){
        return{
            user:{
                email:"",
                pass:"",
                detail:{}
            },
            onload: false,
            error:""
        }
    },
    methods:{
        login: function(){
            this.onload = true;
            this.error = ""
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.pass)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(user)
                this.user.detail = user;
                this.$toast.success("登入成功",{position:"top-right"});
                this.onload = false
            })
            .catch((error) => {
                this.error = this.error_handling(error.code)
                this.onload = false
            });
        },
        error_handling: function(error){
            if(error == "auth/invalid-email"){
                return "信箱格式錯誤"
            }else if(error == "auth/user-disabled"){
                return "此帳戶已被停用"
            }else if(error == "auth/user-not-found"){
                return "無此帳戶"
            }else if(error == "auth/wrong-password"){
                return "密碼錯誤"
            }
        }
    }
}
</script>

<style>
    div #login {
        display: flex;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>