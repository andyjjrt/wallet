<template>
  <div>
    
    <div class="row g-1">
      <div class="col text-center" v-for="days in weeks" :key="days.date">
        <div class="d-grid gap-2">
          <span v-if="days.date === today.date" class="btn btn-sm btn-success">{{days.date}}</span>
          <span v-else class="btn btn-sm"  @click="click_date(days.month,days.date,days.year)">{{days.date}}</span>
        </div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
      <div class="fs-1">{{today.month}}月{{today.date}}日</div>
      <router-link to="/main/record" tag="button" class="btn btn-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
        </svg>
      </router-link>
    </div>
    <br>
    <div v-if="on_load === false">
      <List :list="list" :tags="tags" :colors="colors" :inc_colors="inc_colors" :inc_tags="inc_tags" @delete_done="delete_done" @edit_done="edit_done" />
    </div>
    <div class="d-flex justify-content-center" v-else>
      載入中...
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import List from "@/components/List"
export default {
  name: "Home",
  props:{
    tags: Array,
    colors: Array,
    inc_tags: Array,
    inc_colors: Array
  },
  components:{
    List
  },
  data(){
    return{
      wallets:new Array(),
      weeks: new Array(),
      today:{
        month:new Date().getMonth()+1,
        date: new Date().getDate(),
        year: new Date().getFullYear()
      },
      query_: new Array(),
      query_btn:"全部",
      list: new Array(),
      on_load: false
    }
  },
  created(){
    this.init()
  },
  methods: {
    initialize_data: function(){
      this.wallets = new Array(),
      this.weeks =  new Array(),
      this.today = {
        month:new Date().getMonth()+1,
        date: new Date().getDate(),
        year: new Date().getFullYear()
      },
      this.query_ =  new Array(),
      this.query_btn = "全部",
      this.list =  new Array()
    },
    init: function () {
      this.on_load = true;
      this.initialize_data()
      var curr = new Date; // get current date
      var day = curr.getDay();
      for(var i=0;i<7;i++){
        if(i-day!=0){
          var days = i-day;
          var newDate =   new Date(curr.getTime()+(days * 24 * 60 * 60 * 1000));
          this.weeks.push({"month": newDate.getMonth() + 1, "date": newDate.getDate(), "year": newDate.getFullYear()});
        }
        else{
          newDate = curr
          this.weeks.push({"month": newDate.getMonth() + 1, "date": newDate.getDate(), "year": newDate.getFullYear()});
        }
          
      }
      this.wallets = new Array()
      var token = firebase.auth().currentUser.uid;
      let tmp = new Date();
      tmp = tmp.toISOString()
      firebase.firestore().collection("service").doc(token).collection("wallet").doc(tmp.split("-")[0] + "-" + tmp.split("-")[1]).collection("detail").get()
        .then((docs) => {
          for(var items in docs.docs){
            this.wallets.push(docs.docs[items].data())
          }
          this.wallets.sort(function (a, b) {
            return a.time - b.time;
          });
          this.query_ = new Array();
          this.query_ = this.inc_tags
          this.query_ = this.query_.concat(this.tags);
          this.on_load = false;
          this.$emit("total");
          let today_f = this.today
          this.list = this.wallets.filter(function(val){
            if(val.year == today_f.year && val.month == today_f.month && val.date == today_f.date){
              return true;
            }
              return false;
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    click_date: function(month, date,year){
      this.today = {
        month: month,
        date: date,
        year: year
      };
      let today_f = this.today
          this.list = this.wallets.filter(function(val){
            if(val.year == today_f.year && val.month == today_f.month && val.date == today_f.date){
              return true;
            }
              return false;
          });
    },
    delete_done: function(){
      this.$emit("total")
      this.init()
    },
    edit_done: function(){
      this.$emit("total")
      this.init()
    }
  },
};
</script>

<style scoped>
</style>
