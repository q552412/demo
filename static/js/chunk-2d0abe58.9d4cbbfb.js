(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abe58"],{"16da":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableList,height:"680","header-cell-style":{textAlign:"center",background:"#E1F1FF",color:"#000"},"cell-style":{textAlign:"center"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"cateName",label:"名称"}})],1),t("div",{staticClass:"paging_box1"},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total,sizes, prev, pager, next",total:e.list.length},on:{"size-change":e.changeSize,"current-change":e.changeNum}})],1)],1)},c=[],s=(t("fb6a"),t("d81d"),{name:"",components:{},data:function(){return{list:[{id:12,cateName:"Lanyards"},{id:25,cateName:"Lapel Pins"},{id:40,cateName:"Challenge Coins"},{id:45,cateName:"Medals"},{id:51,cateName:"Trading Pins"},{id:52,cateName:"Badges"},{id:53,cateName:"Belt Buckles"},{id:54,cateName:"Patches"},{id:55,cateName:"PVC Patches"},{id:67,cateName:"Custom Neon Signs"},{id:68,cateName:"Kiss Cut Stickers"},{id:72,cateName:"Bumper Stickers"},{id:74,cateName:"Die Cut Stickers"},{id:78,cateName:"Circle Stickers"},{id:80,cateName:"Holographic Stickers"},{id:82,cateName:"Oval Stickers"},{id:84,cateName:"Rectangle Stickers"},{id:86,cateName:"Round Corner Stickers"},{id:88,cateName:"Square Stickers"},{id:90,cateName:"Transfer Stickers"},{id:96,cateName:"Car Stickers"},{id:99,cateName:"Clear Stickers"},{id:102,cateName:"Static Cling Stickers"},{id:104,cateName:"White Vinyl"},{id:106,cateName:"Stickers"},{id:107,cateName:"Embroidered Patches"},{id:108,cateName:"Printed Patches"},{id:109,cateName:"Woven Patches"},{id:110,cateName:"Chenille Patches"},{id:111,cateName:"Leather Patches"},{id:112,cateName:"Metal Enamel Keychains"},{id:117,cateName:"Acrylic Keychains"},{id:118,cateName:"PVC Keychains"},{id:121,cateName:"3D Embroidered Patches"},{id:122,cateName:"FlexPatches"},{id:132,cateName:"Mailing Labels"},{id:133,cateName:"Die Cut Labels"},{id:135,cateName:"Circle Labels"},{id:137,cateName:"Clear Labels"},{id:139,cateName:"Rectangle Labels"},{id:141,cateName:"Square Labels"},{id:143,cateName:"Oval Labels"},{id:146,cateName:"Custom Labels"},{id:147,cateName:"Decals"},{id:148,cateName:"Car Decals"},{id:149,cateName:"Wall Decals"},{id:150,cateName:"Vinyl Decals"},{id:151,cateName:"Floor Decals"},{id:152,cateName:"Window Decals"},{id:158,cateName:"Pin Badges"},{id:159,cateName:"Embroidered Badges"},{id:160,cateName:"Button Badges"},{id:178,cateName:"qqqqtest"},{id:180,cateName:"tttttt"}],pageNum:1,pageSize:20,multipleSelection:[]}},computed:{tableList:function(){return this.list.slice(this.pageSize*(this.pageNum-1),this.pageSize*this.pageNum)}},watch:{},methods:{changeSize:function(e){this.pageNum=1,this.pageSize=e},changeNum:function(e){this.pageNum=e},handleSelectionChange:function(e){this.multipleSelection=e.map((function(e){return e.id}))}},created:function(){},mounted:function(){}}),n=s,l=t("2877"),d=Object(l["a"])(n,i,c,!1,null,"09824746",null);a["default"]=d.exports}}]);