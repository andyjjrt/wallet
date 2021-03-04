<template>
    <div>
        <div class="row mb-3">
            <div class="col">
                <div class="d-grid gap-2">
                    <button class="btn btn-success" type="button" v-if="type === '收入'" @click="s_type('收入')">收入</button>
                    <button class="btn btn-outline-success" type="button" v-else @click="s_type('收入')">收入</button>
                </div>
            </div>
            <div class="col">
                <div class="d-grid gap-2">
                    <button class="btn btn-warning" type="button" v-if="type === '支出'" @click="s_type('支出')">支出</button>
                    <button class="btn btn-outline-warning" type="button" v-else @click="s_type('支出')">支出</button>
                </div>
            </div>
        </div>
        <form action="#" @submit.prevent="new_add">
            <div class="mb-3">
                <vc-date-picker v-model="date" :model-config="modelConfig">
                    <template v-slot="{ inputValue, inputEvents }">
                        <input
                        class="form-control form-control-lg"
                        :value="inputValue"
                        v-on="inputEvents"
                        />
                    </template>
                </vc-date-picker>
            </div>
            <div class="mb-3" v-if="type === '支出'">
                <div style="overflow: auto;white-space: nowrap;">
                    <span v-for="index in tags.length" :key="index" style="padding: 3px">
                        <button type="button" class="btn" :style="{'color' : 'white', 'background-color': colors[index-1],'border-color' : colors[index-1]}" v-if="tags[index-1] === select_tag" @click="s_tag(tags[index-1])">{{tags[index-1]}}</button>
                        <button type="button" class="btn" :style="{'color' : colors[index-1],'border-color' : colors[index-1]}" v-else @click="s_tag(tags[index-1])">{{tags[index-1]}}</button>
                        <span>&nbsp;</span>
                    </span>
                </div>
            </div>
            <div class="mb-3" v-if="type === '收入'">
                <div style="overflow: auto;white-space: nowrap;">
                    <span v-for="index in inc_tags.length" :key="index" style="padding: 3px">
                        <button type="button" class="btn" :style="{'color' : 'white', 'background-color': inc_colors[index-1],'border-color' : inc_colors[index-1]}" v-if="inc_tags[index-1] === select_tag" @click="s_tag(inc_tags[index-1])">{{inc_tags[index-1]}}</button>
                        <button type="button" class="btn" :style="{'color' : inc_colors[index-1],'border-color' : inc_colors[index-1]}" v-else @click="s_tag(inc_tags[index-1])">{{inc_tags[index-1]}}</button>
                        <span>&nbsp;</span>
                    </span>
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" pattern="[0-9]*" inputmode="numeric" id="item_count" placeholder="place" v-model="count" autofocus autocomplete="off"/>
                <label>金額</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="item_name" placeholder="place" v-model="name" autocomplete="off">
                <label>名稱(選填)</label>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit" :class="{'disabled' : onload}">紀錄</button>
            </div>
        </form>
        
    </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
export default {
    name:"record",
    props:{
        tags: Array,
        colors: Array,
        inc_tags: Array,
        inc_colors: Array
    },
    data(){
        return{
            select_tag:"",
            type:"支出",
            name:"",
            count:"",
            date:"",
            modelConfig: {
                type: 'string',
                mask: 'YYYY-MM-DD', // Uses 'iso' if missing
            },
            onload: false
        }
    },
    created(){
        var tmp = new Date()
        this.date = tmp.toISOString().split("T")[0]
    },
    methods:{
        new_add: function(){
            if(this.onload == true){
                return
            }
            this.onload = true
            if(this.count == "" || this.date == ""){
                this.$toast.error("請填滿所有欄位",{position:"top-right"})
                this.onload = false
                return;
            }
            
            var token = firebase.auth().currentUser.uid;
            var _count = parseInt(this.count);
            if(this.type == "支出"){
                _count = _count * -1
                if(this.select_tag == ""){
                    this.select_tag = "其他"
                }
            }else{
                if(this.select_tag == ""){
                    this.select_tag = "現金"
                }
            }
            var _uuid = this._uuid()
            firebase.firestore().collection("service").doc(token).collection("wallet").doc(this.date.split("-")[0] + "-" + this.date.split("-")[1]).set({
                secure: 0 
            })
            .catch((error) => {
                console.log(error)
                this.$router.push("/main")
            });
            firebase.firestore().collection("service").doc(token).collection("wallet").doc(this.date.split("-")[0] + "-" + this.date.split("-")[1]).collection("detail").doc(_uuid).set({
                count: _count,
                name: this.name,
                tag: this.select_tag,
                type: this.type,
                _uuid: _uuid,
                month: new Date(this.date).getMonth()+1,
                date: new Date(this.date).getDate(),
                year: new Date(this.date).getFullYear(),
                time: new Date(this.date).getTime(),
            })
            .then(() => {
                this.$toast.success("新增一筆" + this.type ,{position:"top-right"})
                this.$router.push("/main")
            })
            .catch((error) => {
                console.log(error)
                this.$router.push("/main")
            });
        },
        s_tag: function(tag){
            this.select_tag = tag
        },
        s_type: function(type){
            this.type = type
            this.select_tag = ""
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
    }
}
</script>

<style>

</style>