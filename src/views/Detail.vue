<template>
    <div>
        <div v-if="init_load === 'true'">
            <div v-if="detail_empty === 'true'">
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
            <div v-else>
                <div class="list-group" v-if="choose_state === '0'">
                    <div v-for="(time,index) in time_line" :key="index">
                        <div role="button" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded" @click="choose_month = time;choose_state = '1';display_type = 'detail';select_date=null;get_Date_money();" v-if="time_count_p[index] !== 0 || time_count_n[index] !== 0">
                            <h5><span>{{time}}</span></h5>
                            <h5><span class="badge bg-primary rounded-pill">{{time_count_p[index] + time_count_n[index]}}</span></h5>
                        </div>
                        <div role="button" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded" v-else @click="toggle_empty()">
                            <h5><span>{{time}}</span></h5>
                            <h5><span class="badge bg-primary rounded-pill">{{time_count_p[index] + time_count_n[index]}}</span></h5>
                        </div>
                    </div>
                </div>
                <div  v-else-if="choose_state === '1'">
                    <div class="d-flex justify-content-between">
                        <button role="button" class="btn btn-light" @click="choose_state = '0'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                            </svg>
                        </button>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <div class="dropdown">
                                <button role="button" class="btn btn-light" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
                                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                    </svg>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <vue-blob-json-csv file-type="csv" :file-name="choose_month" tag-name="button" :data="export_csv_data()" class="dropdown-item" :fields="['year','month','date','type','tag','name','count']" @success="toggle_download()">
                                            下載{{choose_month}}報表(.csv)
                                        </vue-blob-json-csv>
                                    </li>
                                </ul>
                            </div>
                            <button role="button" class="btn btn-light" @click="display_type = 'chart'; chart_options.title.text = choose_month + ' 概況';donut_options.title.text = choose_month ;" v-if="display_type == 'detail'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
                                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                                </svg>
                            </button>
                            <button role="button" class="btn btn-light" @click="display_type = 'detail'" v-if="display_type == 'chart'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <br>
                    <div class="row" v-if="display_type == 'detail'">
                        <div class = "col-md">
                            <div v-if="date_load === false">
                                <div class="row gx-3">
                                    <div class="col">
                                        <div class="border border-success border-4 rounded-pill text-center">
                                            <div class="fs-3">
                                                {{time_count_p[time_line.indexOf(choose_month)]}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class=" border border-warning border-4 rounded-pill text-center">
                                            <div class="fs-3">
                                                {{time_count_n[time_line.indexOf(choose_month)]}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="fs-3">
                                <vc-date-picker :attributes="cal_attr" v-model="select_date" is-expanded :step="0" :min-date="new Date(choose_month)" :max-date="new Date(choose_month.split('-')[0],choose_month.split('-')[1],0)"/>
                            </div>
                            <br>
                        </div>
                        <div class="col-md">
                            <div v-if="date_load === false">
                                <List :list="list" :tags="tags" :colors="colors" :inc_colors="inc_colors" :inc_tags="inc_tags" @delete_done="delete_done" @edit_done="edit_done" />
                            </div>
                            <br><br>
                        </div>
                    </div>
                    <div class="row" v-if="display_type == 'chart'">
                        <div class = "col-md-6">
                            <div v-if="date_load === false">
                                <div class="row gx-3">
                                    <div class="col">
                                        <div class="border border-success border-4 rounded-pill text-center">
                                            <div class="fs-3">
                                                {{time_count_p[time_line.indexOf(choose_month)]}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class=" border border-warning border-4 rounded-pill text-center">
                                            <div class="fs-3">
                                                {{time_count_n[time_line.indexOf(choose_month)]}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div style=" margin: 0 auto; position: relative; max-height:400px; max-width:400px">
                                <Chart :chartdata="chart_data" :options="chart_options" />
                            </div>
                            <br>
                        </div>
                        <div class="col-md-6">
                            <div class="d-grid gap-2">
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="out" v-model="display_chart">
                                    <label class="btn btn-outline-primary" for="btnradio1">支出</label>
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="inc" v-model="display_chart">
                                    <label class="btn btn-outline-primary" for="btnradio2">收入</label>
                                </div>
                            </div>
                            <br>
                            <div>
                                <div v-if="display_chart === 'out'" style=" margin: 0 auto; position: relative; max-height:400px; max-width:400px">
                                    <Donut :chartdata="donut_data" :options="donut_options" />
                                </div>
                                <div v-else-if="display_chart === 'inc'" style=" margin: 0 auto; position: relative; max-height:400px; max-width:400px">
                                    <Donut2 :chartdata="donut_data_inc" :options="donut_options" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            載入中...
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import List from "@/components/List"
import Chart from '@/components/Chart'
import Donut from "@/components/Donut"
import Donut2 from "@/components/Donut"
export default {
    name:"Profile",
    props:{
        tags: Array,
        colors: Array,
        inc_tags: Array,
        inc_colors: Array
    },
    components:{
        List,
        Chart,
        Donut,
        Donut2
    },
    data(){
        return{
            create_time:"",
            wallets: {},
            time_line: new Array(),
            time_count_p: new Array(),
            time_count_n: new Array(),
            init_load: "false",
            select_date:"",
            choose_state: "0",
            choose_date:"",
            choose_month:"",
            cal_attr:[
                {
                    //收入
                    bar:
                    {
                        style: {
                            backgroundColor: '#198754',
                        }
                    },
                    dates:[]
                },
                {
                    bar:
                    {
                        style: {
                            backgroundColor: '#ffc107',
                        }
                    },
                    dates:[]
                }

            ],
            delete_uuid:"",
            delete_month:"",
            date_load:false,
            list: new Array(),
            detail_empty: 'false',
            display_type: 'detail',
            display_chart:"out",
            chart_data:{
                labels: [],
                datasets: [
                    {
                        type:'line',
                        pointRadius:0,
                        label: '總和',
                        borderWidth: 2,
                        fill: false,
                        borderColor:"#7b7b7b",
                        data: [],
                    },
                    {
                        type:'bar',
                        label: '收入',
                        backgroundColor:"#198754ad",
                        borderColor:"#198754",
                        data: [],
                    },
                    {
                        type:'bar',
                        label: '支出',
                        backgroundColor:"#ffc107ad",
                        borderColor:"#ffc107",
                        data: [],
                    }
                ]
            },
            chart_options: {
					title: {
						display: true,
						text: ''
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
			},
            donut_data:{
                datasets: [{
					data: [
						1,2,3,4,5
					],
                    backgroundColor:[],
					label: 'Dataset 1'
				}],
				labels: [
				]
            },
            donut_data_inc:{
                datasets: [{
					data: [
						1,2,3,4,5
					],
                    backgroundColor:[],
					label: 'Dataset 1'
				}],
				labels: []
            },
            donut_options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Chart.js Doughnut Chart'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			},
            test_data: [
              {
                userId: 1,
                id: 1,
                title: 'delectus aut autem',
                completed: false
              },
              {
                userId: 1,
                id: 2,
                title: 'quis ut nam facilis et officia qui',
                completed: false
              },
              {
                userId: 1,
                id: 3,
                title: 'fugiat veniam minus',
                completed: false
              }
            ]
        }
    },
    watch:{
        select_date: function(val){
            let tmp = new Date(val);
            this.choose_date = tmp.getDate().toString()
            this.list = this.wallets[this.choose_month][this.choose_date]
        }
    },
    created(){
        this.init();
    },
    methods:{
        init: function(){
            this.wallets = {}
            this.time_line = new Array();
            this.time_count_p = new Array();
            this.time_count_n = new Array();
            this.donut_data.labels = this.tags
            this.donut_data.datasets[0].backgroundColor = this.colors
            this.donut_data_inc.labels = this.inc_tags
            this.donut_data_inc.datasets[0].backgroundColor = this.inc_colors
            this.create_time = firebase.auth().currentUser.metadata.a;
            var token = firebase.auth().currentUser.uid;
            firebase.firestore().collection("service").doc(token).collection("wallet").get()
            .then((docs) => {
                if(docs.docs.length == 0){
                    this.detail_empty = 'true'
                }
                docs.forEach((doc) => {
                    this.wallets[doc.id] = {"count":0};
                    let date = new Date(doc.id.split("-")[0],parseInt(doc.id.split("-")[1]),0).getDate();
                    for(let i = 1; i <= date; i++){
                        this.wallets[doc.id][i] = new Array();
                    }
                    firebase.firestore().collection("service").doc(token).collection("wallet").doc(doc.id).collection("detail").get()
                    .then((doc1) => {
                        let count_n = 0, count_p = 0
                        doc1.forEach((doc2) => {
                            this.wallets[doc.id][doc2.data().date].push(doc2.data())
                            this.wallets[doc.id].count += doc2.data().count
                            if(doc2.data().count < 0){
                                count_n += doc2.data().count
                            }else{
                                count_p += doc2.data().count
                            }
                        });
                        this.time_line.push(doc.id)
                        this.time_count_p.push(count_p)
                        this.time_count_n.push(count_n)
                        if(this.choose_state == 1)
                            this.list = this.wallets[this.choose_month][this.choose_date]
                            let tmp = new Date(this.select_date);
                            this.choose_date = tmp.getDate().toString()
                            this.get_Date_money();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                })
            })
            .then(() => {
                this.get_Date_money();
            })
            .catch((error) => {
                console.error(error)
            });
        },
        get_Date: function(date_str){
            let date = new Date(date_str.split("-")[0],parseInt(date_str.split("-")[1]),0).getDate();
            return date
        },
        get_Date_money: function(){
            this.cal_attr = [{
                            //收入
                            bar:
                            {
                                style: {
                                    backgroundColor: '#198754',
                                }
                            },
                            dates:[]
                        },
                        {
                            bar:
                            {
                                style: {
                                    backgroundColor: '#ffc107',
                                }
                            },
                            dates:[]
            }]
            this.chart_data.labels = new Array();
            this.chart_data.datasets[0].data = new Array();
            this.chart_data.datasets[1].data = new Array();
            this.chart_data.datasets[2].data = new Array();
            this.donut_data.datasets[0].data = new Array();
            this.donut_data_inc.datasets[0].data = new Array();
            for(let i = 0; i < this.tags.length; i++){
                this.donut_data.datasets[0].data.push(0)
            }
            for(let i = 0; i < this.inc_tags.length; i++){
                this.donut_data_inc.datasets[0].data.push(0)
            }
            let initial_count = 0;
            for(let a = 1; a <= new Date(this.choose_month.split("-")[0],this.choose_month.split("-")[1],0).getDate(); a++){
                this.chart_data.labels.push(a)
                let count_p = false, p_count = 0;
                let count_n = false, n_count = 0;
                let service = this.wallets[this.choose_month][a]
                for(let item in service){
                    if(service[item].count >= 0){
                        count_p = true
                        p_count += service[item].count
                        let tag_tmp = this.inc_tags.indexOf(service[item].tag)
                        this.donut_data_inc.datasets[0].data[tag_tmp] += service[item].count
                    }else if(service[item].count < 0){
                        count_n = true
                        n_count += service[item].count
                        let tag_tmp = this.tags.indexOf(service[item].tag)
                        this.donut_data.datasets[0].data[tag_tmp] -= service[item].count
                    }
                }
                if(count_p == true){
                    this.cal_attr[0].dates.push(new Date(service[0].year,service[0].month-1,service[0].date))
                }
                if(count_n == true){
                    this.cal_attr[1].dates.push(new Date(service[0].year,service[0].month-1,service[0].date))
                }
                this.chart_data.datasets[1].data.push(p_count)
                this.chart_data.datasets[2].data.push(n_count)
                initial_count += p_count + n_count;
                this.chart_data.datasets[0].data.push(initial_count)
            }
            this.init_load = "true";
        },
        delete_done: function(){
            this.$emit("total")
            this.init()
        },
        edit_done: function(){
            this.$emit("total")
            this.init()
        },
        export_csv_data: function(){
            let export_data = new Array();
            for(let item in this.wallets[this.choose_month]){
                for(let note in this.wallets[this.choose_month][item]){
                    export_data.push(this.wallets[this.choose_month][item][note])
                }
            }
            return export_data
        },
        toggle_download: function(){
            this.$toast.success('下載成功',{position:'top-right'})
        },
        toggle_empty: function(){
            this.$toast.warning("這個月沒有紀錄",{position:"top-right"})
        }
    }
}
</script>

<style>

</style>

