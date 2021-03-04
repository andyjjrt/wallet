<template>
    <div>
        <InfoModal />
        <div class="modal fade" id="Add_tag" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">新增標籤</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="#" @submit.prevent="add_tag()">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="a" required v-model="new_add.name" autocomplete="off">
                                <label for="floatingInput">標籤名稱</label>
                            </div>
                            <div class="mb-3">
                                <p for="floatingInput">標籤顏色</p>
                                <v-swatches v-model="new_add.color" popover-x="left" swatches="text-advanced" show-fallback fallback-input-type="color"></v-swatches>
                            </div>
                            <br><br>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" data-bs-dismiss="modal" type="submit" @click="add_tag()">新增</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="Edit_tag" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">編輯標籤</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="#" @submit.prevent="edit_tag()">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="tag_edit_input" placeholder="a" required v-model="new_edit.name" autocomplete="off">
                                <label for="floatingInput">標籤名稱</label>
                            </div>
                            <div class="mb-3">
                                <p for="floatingInput">標籤顏色</p>
                                <v-swatches v-model="new_edit.color" popover-x="left" swatches="text-advanced" show-fallback fallback-input-type="color"></v-swatches>
                            </div>
                            <br><br>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" data-bs-dismiss="modal" type="submit" @click="edit_tag()">完成</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <h2>設定 <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">V1.0.1-build220</button></h2>
        <div v-if="pannel === '0'">
            <div class="list-group">
                <a role="button" @click="pannel = '1'" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <h5>編輯支出標籤</h5>
                    <h5><span class="badge bg-primary rounded-pill">{{tmp.length}}</span></h5>
                </a>
                <a role="button" @click="pannel = '2'" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <h5>編輯收入標籤</h5>
                    <h5><span class="badge bg-primary rounded-pill">{{tmp1.length}}</span></h5>
                </a>
            </div>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-sm-1">
                    <button role="button" class="btn btn-light" @click="pannel = '0'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                        </svg>
                    </button>
                </div>
                <br><br>
                <div class="col-sm-11">
                    <div class="d-grid gap-2">
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Add_tag">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                                    <path d="M.5 3l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                                    <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                新增標籤
                            </button>
                            <button type="button" class="btn btn-outline-primary" @click="upload_tag()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                    <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                </svg>
                                儲存標籤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div v-if="pannel === '1'">
                <transition-group name="list" tag="div">
                    <div v-for="(item,index) in tmp" v-bind:key="item.id_" class="mb-1 list-item">
                        <div class="card card-body">
                            <div class="d-flex justify-content-between">
                                <h5><span class="badge rounded-pill" :style="get_tag(item.colors)">{{item.tag}}</span></h5>
                                <span>
                                    <span role="button" style="padding: 5px" @click="move_up_tag(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                                        </svg>
                                    </span>
                                    <span role="button" style="padding: 5px" @click="move_down_tag(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                        </svg>
                                    </span>
                                    <span role="button" style="padding: 5px" data-bs-toggle="modal" data-bs-target="#Edit_tag" @click="new_edit.name = item.tag; new_edit.color = item.colors; new_edit.uuid = item.id_, new_edit.index = index">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                        </svg>                      
                                    </span>
                                    <span role="button" style="padding: 5px" @click="delete_tag(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>                  
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
            <div v-if="pannel === '2'">
                <transition-group name="list" tag="div">
                    <div v-for="(item,index) in tmp1" v-bind:key="item.id_" class="mb-1 list-item">
                        <div class="card card-body">
                            <div class="d-flex justify-content-between">
                                <h5><span class="badge rounded-pill" :style="get_tag(item.colors)">{{item.tag}}</span></h5>
                                <span>
                                    <span role="button" style="padding: 5px" @click="move_up_inc_tag(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                                        </svg>
                                    </span>
                                    <span role="button" style="padding: 5px" @click="move_down_inc_tag(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                        </svg>
                                    </span>
                                    <span role="button" style="padding: 5px" data-bs-toggle="modal" data-bs-target="#Edit_tag" @click="new_edit.name = item.tag; new_edit.color = item.colors; new_edit.uuid = item.id_, new_edit.index = index">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                        </svg>                      
                                    </span>
                                    <span role="button" style="padding: 5px" @click="delete_inc_tag(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>                  
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
            
        </div>
        <br>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-warning" @click="logout">登出</button>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
import firebase from "firebase/app"
import "firebase/auth"
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'
import InfoModal from "@/components/InfoModal"
export default {
    name:"Profile",
    components: { VSwatches,InfoModal },
    props:{
        tags: Array,
        colors: Array,
        inc_tags: Array,
        inc_colors: Array
    },
    data(){
        return{
            tmp:new Array(),
            tmp1: new Array(),
            pannel: "0",
            new_add:{
                color:"#002101",
                name:""
            },
            new_edit:{
                color:"",
                name:"",
                uuid:"",
                index:0
            }, 
        }
    },
    watch:{
        pannel: function(){
            this.init_tmp()
        },
        tags: function(){
            this.init_tmp()
        },
        inc_tags: function(){
            this.init_tmp()
        }
    },
    created(){
        this.init_tmp()
    },
    methods:{
        logout: function(){
            firebase.auth().signOut().then(() => {
                this.$toast.success("登出成功",{position:"top-right"});
            }).catch((error) => {
                console.log(error)
            });
        },
        get_tag: function(color){
            return {'background-color': color};
        },
        delete_tag: function(index){
            this.$toast.success("刪除\"" + this.tmp[index].tag + "\"",{position:"top-right"});
            this.tmp.splice(index,1);
        },
        move_up_tag: function(index){
            if(index == 0){
                return
            }
            let tmp1 = this.tmp[index]
            let tmp2 = this.tmp[index-1]
            Vue.set(this.tmp, index-1, tmp1)
            Vue.set(this.tmp, index, tmp2)
        },
        move_down_tag: function(index){
            if(index == this.tmp.length-1){
                return
            }
            let tmp1 = this.tmp[index]
            let tmp2 = this.tmp[index+1]
            Vue.set(this.tmp, index+1, tmp1)
            Vue.set(this.tmp, index, tmp2)
        },
        delete_inc_tag: function(index){
            this.$toast.success("刪除\"" + this.tmp1[index].tag + "\"",{position:"top-right"});
            this.tmp1.splice(index,1);
        },
        move_up_inc_tag: function(index){
            if(index == 0){
                return
            }
            let tmp1 = this.tmp1[index]
            let tmp2 = this.tmp1[index-1]
            Vue.set(this.tmp1, index-1, tmp1)
            Vue.set(this.tmp1, index, tmp2)
        },
        move_down_inc_tag: function(index){
            if(index == this.tmp1.length-1){
                return
            }
            let tmp1 = this.tmp1[index]
            let tmp2 = this.tmp1[index+1]
            Vue.set(this.tmp1, index+1, tmp1)
            Vue.set(this.tmp1, index, tmp2)
        },
        init_tmp: function(){
            this.tmp = new Array()
            this.tmp1 = new Array()
            for(let i = 0; i < this.tags.length; i++){
                this.tmp.push({
                    tag: this.tags[i],
                    colors: this.colors[i],
                    id_: this._uuid()
                })
            }
            for(let i = 0; i < this.inc_tags.length; i++){
                this.tmp1.push({
                    tag: this.inc_tags[i],
                    colors: this.inc_colors[i],
                    id_: this._uuid()
                })
            }
        },
        _uuid: function(){
            var d = Date.now();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                d += performance.now(); //use high-precision timer if available
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        },
        add_tag: function(){
            if(this.new_add.name == ""){
                this.$toast.error("標籤名稱不可空白",{position:"top-right"});
                return;
            }
            if(this.pannel == "1"){
                this.tmp.push({
                    tag: this.new_add.name,
                    colors: this.new_add.color,
                    id_: this._uuid()
                })
            }else{
                this.tmp1.push({
                    tag: this.new_add.name,
                    colors: this.new_add.color,
                    id_: this._uuid()
                })
            }
            this.$toast.success("新增完成",{position:"top-right"});
        },
        edit_tag: function(){
            if(this.new_edit.name == ""){
                this.$toast.error("標籤名稱不可空白",{position:"top-right"});
                return;
            }
            let after_edit = {
                tag: this.new_edit.name,
                colors: this.new_edit.color,
                id_: this.new_edit.uuid
            }
            if(this.pannel == "1"){
                Vue.set(this.tmp, this.new_edit.index, after_edit)
            }else{
                Vue.set(this.tmp1, this.new_edit.index, after_edit)
            }
            this.$toast.success("編輯完成",{position:"top-right"});
        },
        upload_tag: function(){
            let new_tags = {}
            if(this.pannel == "1"){
                new_tags.tags = new Array();
                new_tags.colors = new Array();
                for(let i = 0; i < this.tmp.length; i++){
                    new_tags.tags.push(this.tmp[i].tag)
                    new_tags.colors.push(this.tmp[i].colors)
                }
                new_tags.inc_tags = this.inc_tags;
                new_tags.inc_color = this.inc_colors
                if(new_tags.tags.indexOf("其他") == -1){
                    this.$toast.error("支出標籤內必須含有\"其他\"標籤",{position:"top-right"});
                    return;
                }
            }else{
                new_tags.inc_tags = new Array();
                new_tags.inc_color = new Array();
                for(let i = 0; i < this.tmp1.length; i++){
                    new_tags.inc_tags.push(this.tmp1[i].tag)
                    new_tags.inc_color.push(this.tmp1[i].colors)
                }
                new_tags.tags = this.tags;
                new_tags.colors = this.colors
                if(new_tags.inc_tags.indexOf("現金") == -1){
                    this.$toast.error("收入標籤內必須含有\"現金\"標籤",{position:"top-right"});
                    return;
                }
            }
            var token = firebase.auth().currentUser.uid;
            firebase.firestore().collection("service").doc(token).set(new_tags)
            .then((res) => {
                console.log("success")
                this.$toast.success("標籤更新成功！",{position:"top-right"});
                this.$emit("reload_tag", res);
            })
            .catch((error) => {
                var my = (error.code + '\n' + error.message)
                alert(my);
            });
        }
    }
}
</script>

<style>
.list-item {
  transition: all .4s;
  display: inline-block;
  width: 100%
}
.list-enter, .list-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>