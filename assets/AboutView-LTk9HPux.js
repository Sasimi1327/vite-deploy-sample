import{_ as s,c as o,o as a,a as r}from"./index-8e-yPkqg.js";const n={data(){return{user:{}}},methods:{getUser(){console.log("這是產品上架的環境"),this.$http.get("https://randomuser.me/api/").then(t=>{this.user=t.data.results[0],console.log(this.user)})}},mounted(){this.getUser()}},c={class:"about"},h=r("h1",null,"This is an about page",-1),i=[h];function u(e,t,_,d,l,p){return a(),o("div",c,i)}const f=s(n,[["render",u]]);export{f as default};