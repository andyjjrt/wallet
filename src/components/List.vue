<template>
    <div>
        <div class="modal fade" id="delete_alert" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="staticBackdropLabel">
                        <span class="badge bg-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                            </svg>
                        </span>
                        注意！
                        </h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        確認刪除？
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary btn-sm" @click="delete_note()" data-bs-dismiss="modal">刪除</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="edit_model" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> 
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="staticBackdropLabel">
                        <span class="badge bg-light text-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>   
                        </span>
                        編輯
                        </h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="button" v-if="edit_pannel.type === '收入'" @click="s_type('收入')">收入</button>
                                    <button class="btn btn-outline-success" type="button" v-else @click="s_type('收入')">收入</button>
                                </div>
                            </div>
                            <div class="col">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-warning" type="button" v-if="edit_pannel.type === '支出'" @click="s_type('支出')">支出</button>
                                    <button class="btn btn-outline-warning" type="button" v-else @click="s_type('支出')">支出</button>
                                </div>
                            </div>
                        </div>
                        <form action="#" @submit.prevent="edit_note">
                            <div class="mb-3">
                                <vc-date-picker v-model="edit_pannel.date" :model-config="edit_pannel.modelConfig">
                                    <template v-slot="{ inputValue, inputEvents }">
                                        <input
                                        class="form-control form-control-lg"
                                        :value="inputValue"
                                        v-on="inputEvents"
                                        />
                                    </template>
                                </vc-date-picker>
                            </div>
                            <div class="mb-3" v-if="edit_pannel.type === '支出'">
                                <div style="overflow: auto;white-space: nowrap;">
                                    <span v-for="index in tags.length" :key="index" style="padding: 3px">
                                        <button type="button" class="btn" :style="{'color' : 'white', 'background-color': colors[index-1],'border-color' : colors[index-1]}" v-if="tags[index-1] === edit_pannel.select_tag" @click="s_tag(tags[index-1])">{{tags[index-1]}}</button>
                                        <button type="button" class="btn" :style="{'color' : colors[index-1],'border-color' : colors[index-1]}" v-else @click="s_tag(tags[index-1])">{{tags[index-1]}}</button>
                                        <span>&nbsp;</span>
                                    </span>
                                </div>
                            </div>
                            <div class="mb-3" v-if="edit_pannel.type === '收入'">
                                <div style="overflow: auto;white-space: nowrap;">
                                    <span v-for="index in inc_tags.length" :key="index" style="padding: 3px">
                                        <button type="button" class="btn" :style="{'color' : 'white', 'background-color': inc_colors[index-1],'border-color' : inc_colors[index-1]}" v-if="inc_tags[index-1] === edit_pannel.select_tag" @click="s_tag(inc_tags[index-1])">{{inc_tags[index-1]}}</button>
                                        <button type="button" class="btn" :style="{'color' : inc_colors[index-1],'border-color' : inc_colors[index-1]}" v-else @click="s_tag(inc_tags[index-1])">{{inc_tags[index-1]}}</button>
                                        <span>&nbsp;</span>
                                    </span>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="item_count" placeholder="place" pattern="[0-9]*" inputmode="numeric" v-model="edit_pannel.count" autofocus />
                                <label>金額</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="item_name" placeholder="place" v-model="edit_pannel.name">
                                <label>名稱(選填)</label>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit" data-bs-dismiss="modal" @click="edit_note">修改</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <transition-group name="list" tag="div">
            <div v-if="list.length == 0" key="no_data" class="list-item">
                    <div class="card card-body" style="border-left: 5px solid #dc3545">
                        <div class="d-flex justify-content-between">
                            <h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                                沒有紀錄...
                            </h5>
                        </div>
                    </div>
            </div>
            <div v-for="item in list" :key="item._uuid" class="mb-1 list-item">
                <div class="card card-body" :style="get_border(item.type)">
                            <div class="d-flex justify-content-between">
                                <h5>
                                    <span class="badge rounded-pill" :style="get_tag(item.type,item.tag)">{{item.tag}}</span>
                                    {{item.name}}
                                </h5>
                                <h5>
                                    {{item.count}}
                                    <span role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>
                                    </span>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#delete_alert" @click="delete_uuid = item._uuid,delete_year = item.year.toString(), delete_month = item.month.toString().padStart(2, '0');">
                                                <span class="badge bg-danger">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                    </svg>
                                                </span>
                                                刪除
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#edit_model" @click="reverse_edit(item);delete_uuid = item._uuid,delete_year = item.year.toString(), delete_month = item.month.toString().padStart(2, '0');">
                                                <span class="badge bg-light text-dark">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                    </svg>                      
                                                </span>
                                                編輯
                                            </button>
                                        </li>
                                    </ul>
                                </h5>
                            </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
export default {
    name:"List",
    props:{
        tags: Array,
        colors: Array,
        inc_tags: Array,
        inc_colors: Array,
        list: Array,
    },
    data(){
        return{
            delete_uuid:"",
            delete_month:"",
            delete_year:"",
            edit_pannel:{
                select_tag:"",
                type:"支出",
                name:"",
                count:"",
                date:"",
                _uuid:"",
                modelConfig: {
                    type: 'string',
                    mask: 'YYYY-MM-DD', // Uses 'iso' if missing
                },
            }
        }
    },
    methods:{
        get_border: function(type){
            if(type == "收入"){
                return "border-left: 5px solid #198754;"
            }else{
                return "border-left: 5px solid #ffc107;"
            }
        },
        get_tag: function(type,tag){
            if(type == "收入"){
                if(this.inc_tags.indexOf(tag) == -1){
                    return {'background-color': 'rgb(0, 0, 0)'};
                }
                return {'background-color': this.inc_colors[this.inc_tags.indexOf(tag)]};
            }else{
                if(this.tags.indexOf(tag) == -1){
                    return {'background-color': 'rgb(0, 0, 0)'};
                }
                return {'background-color': this.colors[this.tags.indexOf(tag)]};
            }
        },
        delete_note: function(){
            var token = firebase.auth().currentUser.uid;
            let this_vue = this
            firebase.firestore().collection("service").doc(token).collection("wallet").doc(this.delete_year + "-" + this.delete_month).collection("detail").doc(this.delete_uuid).delete()
            .then(function(){
                this_vue.$emit("delete_done","success");
                this_vue.$toast.success("成功刪除",{position:"top-right"})
            })
            .catch(function(error){
                console.error(error)
            })
        },
        edit_note: function(){
            if(this.edit_pannel.count == "" || this.edit_pannel.date == ""){
                this.$toast.error("請填滿所有欄位",{position:"top-right"})
                return;
            }
            var _count = parseInt(this.edit_pannel.count);
            if(this.edit_pannel.type == "支出"){
                _count = _count * -1
                if(this.edit_pannel.select_tag == ""){
                    this.edit_pannel.select_tag = "其他"
                }
            }else{
                if(this.edit_pannel.select_tag == ""){
                    this.edit_pannel.select_tag = "現金"
                }
            }
            let this_vue = this
            var token = firebase.auth().currentUser.uid;
            firebase.firestore().collection("service").doc(token).collection("wallet").doc(this.edit_pannel.date.split("-")[0] + "-" + this.edit_pannel.date.split("-")[1]).set({
                secure: 0 
            }).then(()=>{
                firebase.firestore().collection("service").doc(token).collection("wallet").doc(this.delete_year + "-" + this.delete_month).collection("detail").doc(this.delete_uuid).delete()
                .then(function(){
                    firebase.firestore().collection("service").doc(token).collection("wallet").doc(this_vue.edit_pannel.date.split("-")[0] + "-" + this_vue.edit_pannel.date.split("-")[1]).collection("detail").doc(this_vue.edit_pannel._uuid).set({
                        count: _count,
                        name: this_vue.edit_pannel.name,
                        tag: this_vue.edit_pannel.select_tag,
                        type: this_vue.edit_pannel.type,
                        _uuid: this_vue.edit_pannel._uuid,
                        month: new Date(this_vue.edit_pannel.date).getMonth()+1,
                        date: new Date(this_vue.edit_pannel.date).getDate(),
                        year: new Date(this_vue.edit_pannel.date).getFullYear(),
                        time: new Date(this_vue.edit_pannel.date).getTime(),
                    })
                    .then(function(){
                        this_vue.$emit("edit_done","success");
                        this_vue.$toast.success("成功刪除",{position:"top-right"})
                    })
                    .catch(function(error){
                        console.error(error)
                    })
                })
                .catch(function(error){
                    console.error(error)
                })
            })
            .catch((error) => {
                this.$toast.danger(error.message)
                this.$router.push("/main")
            });
            
            
            
        },
        s_tag: function(tag){
            this.edit_pannel.select_tag = tag
        },
        s_type: function(type){
            this.edit_pannel.type = type
            this.edit_pannel.select_tag = ""
        },
        reverse_edit: function(item){
            console.log(item)
            this.edit_pannel.select_tag = item.tag;
            this.edit_pannel._uuid = item._uuid;
            this.edit_pannel.type = item.type;
            this.edit_pannel.name = item.name;
            this.edit_pannel.count = item.count;
            if(this.edit_pannel.count < 0){
                this.edit_pannel.count *= -1
            }
            let tmp = new Date(item.year, item.month-1, item.date+1);
            this.edit_pannel.date = tmp.toISOString().split('T')[0]
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
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>