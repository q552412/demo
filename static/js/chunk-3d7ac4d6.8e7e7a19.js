(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d7ac4d6"],{"0dcf":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{},[i("ScreenshotUpload",{attrs:{fileList:e.previewImage},on:{updateList:e.updateTemplateImg}}),e._l(e.previewImage,(function(t,n){return i("div",{key:t.imageSrcLocal},[i("input",{staticClass:"myInput",attrs:{type:"text"},domProps:{value:t}}),i("button",{on:{click:function(i){return e.viewThis(t)}}},[e._v("预览")]),i("button",{on:{click:function(t){return e.myFunction(n)}}},[e._v("复制")])])})),i("el-dialog",{attrs:{title:"预览",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{staticStyle:{width:"100%"}},["图片"==e.getFileType(e.viewTarget)?[i("img",{attrs:{src:e.viewTarget,width:"100%"}})]:"视频"==e.getFileType(e.viewTarget)?[i("video",{attrs:{controls:"",width:"100%"}},[i("source",{attrs:{src:e.viewTarget,type:"video/mp4"}}),e._v(" Download the "),i("a",{attrs:{href:e.viewTarget}},[e._v("MP4")]),e._v(" video. ")])]:[e._v(" 暂不支持预览 ")]],2),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],2)},r=[],a=(i("caad"),i("d81d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploadBox"},[i("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:function(t){return e.outside(t)},expression:"(e) => outside(e)"}],staticClass:"file-input",class:{buleBorder:e.isPaste},attrs:{tabindex:"0"},on:{paste:e.handlePaste,drop:function(t){return t.preventDefault(),e.handleFileDrop(t)},dragover:function(e){e.preventDefault()},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.removeFile(e.selectedFiles.length-1)},click:e.btnColorChange,dblclick:e.triggerFileSelect}},[e._l(e.selectedFiles,(function(t,n){return i("div",{key:n,staticClass:"file-info"},[e.isImageFile(t)?i("div",{staticClass:"image-preview"},[i("custom-image",{attrs:{src:t.imageSrc,fit:"contain"}}),i("i",{staticClass:"el-icon-error delBtn",on:{click:function(t){return e.removeFile(n)}}})],1):t.hasOwnProperty("file")?i("div",{staticClass:"otherFile"},[i("i",{staticClass:"el-icon-error delBtn",on:{click:function(t){return e.removeFile(n)}}}),i("i",{class:e.fileIconClass(t.file)}),i("span",[e._v(e._s(t.file.name)+" - "+e._s(e.fileDisplaySize(t.file.size)))])]):i("div",{staticClass:"otherFile"},[i("i",{staticClass:"el-icon-folder"}),i("i",{staticClass:"el-icon-error delBtn",on:{click:function(t){return e.removeFile(n)}}}),i("span",[e._v("非图片类型")])])])})),0===e.selectedFiles.length?i("div",{staticClass:"placeholder"},[e._v("在这里粘贴或拖放文件(双击选择文件)")]):e._e()],2),i("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",multiple:""},on:{change:e.handleFileSelect}}),i("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.showProcess,expression:"showProcess"}],staticStyle:{width:"200px","margin-top":"8px"},attrs:{percentage:e.progressPercent}})],1)}),s=[],o=i("c7eb"),c=i("1da1"),l=(i("2ca0"),i("a434"),i("ac1f"),i("5319"),i("2532"),i("b680"),i("127f")),u={name:"ScreenshotUpload",props:{fileList:{type:[Array,String],default:[]}},data:function(){return{selectedFiles:[],uploadedList:[],isPaste:!1,showProcess:!1,progressPercent:0}},watch:{selectedFiles:function(){this.btn_uploadFile()}},computed:{},mounted:function(){var e=this.fileList;e?("string"===typeof this.fileList?(this.selectedFiles[0]||(this.selectedFiles[0]={}),this.selectedFiles[0]["imageSrc"]=e,this.uploadedList[0]=e):(this.selectedFiles=this.fileList.map((function(e){return{imageSrc:e}})),this.uploadedList=this.fileList),this.$forceUpdate()):this.selectedFiles=[]},methods:{outside:function(e){this.isPaste=!1},btnColorChange:function(){this.isPaste=!0},triggerFileSelect:function(e){e.preventDefault(),this.$refs.fileInput.click()},handleFileSelect:function(e){this.handleFiles(e.target.files),e.target.value=""},handlePaste:function(e){if(e.clipboardData&&e.clipboardData.items)for(var t=e.clipboardData.items,i=0;i<t.length;i++)"file"===t[i].kind&&this.handleFiles([t[i].getAsFile()])},handleFileDrop:function(e){this.handleFiles(e.dataTransfer.files)},handleFiles:function(e){for(var t=this,i=function(){var i=e[n];if(t.isImageFile2(i)){var r=new FileReader;r.readAsDataURL(i),r.onload=function(){t.selectedFiles.push({file:i,imageSrc:r.result,imageSrcLocal:r.result})}}else t.selectedFiles.push({file:i,imageSrc:null})},n=0;n<e.length;n++)i()},fileIconClass:function(e){return e.type.startsWith("image/")?"el-icon-picture":"text/plain"===e.type?"el-icon-document":"el-icon-folder"},isImageFile:function(e){if(e.hasOwnProperty("file"))return e.file.type.startsWith("image/");var t,i=[".jpg",".jpeg",".png",".gif",".bmp"],n=null===(t=e.imageSrc)||void 0===t?void 0:t.substring(e.imageSrc.lastIndexOf(".")).toLowerCase();return i.includes(n)},isImageFile2:function(e){return e.type.startsWith("image/")},removeFile:function(e){this.selectedFiles.splice(e,1),this.uploadedList.splice(e,1),this.$emit("updateList",this.selectedFiles)},btn_uploadFile:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var i,n,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.selectedFiles.length){t.next=2;break}return t.abrupt("return");case 2:i=0;case 3:if(!(i<e.selectedFiles.length)){t.next=18;break}if(n=e.selectedFiles[i].file,e.isFileUploaded(e.selectedFiles[i].imageSrc)){t.next=15;break}return e.showProcess=!0,t.next=9,Object(l["a"])(n,(function(t){var i=Math.floor(t.loaded/t.total*100||0);e.progressPercent=i}));case 9:r=t.sent,e.showProcess=!1,e.progressPercent=0,console.log("res>>>>>",r.replace(/oss-static-cn.liyi.co/i,"static-oss.gs-souvenir.com")),e.uploadedList[i]=r,e.selectedFiles[i].imageSrc=r;case 15:i++,t.next=3;break;case 18:e.$emit("updateList",e.selectedFiles);case 19:case"end":return t.stop()}}),t)})))()},isFileUploaded:function(e){return this.uploadedList.includes(e)},fileDisplaySize:function(e){return"".concat((e/1024).toFixed(1),"K")}}},d=u,f=(i("bd12"),i("2877")),p=Object(f["a"])(d,a,s,!1,null,"7d1a4134",null),g=p.exports,h={components:{ScreenshotUpload:g},name:"tool1",data:function(){return{previewImage:[],dialogVisible:!1,viewTarget:null}},computed:{},watch:{},methods:{getFileType:function(e){var t=null===e||void 0===e?void 0:e.split(".").pop().toLowerCase(),i=["jpg","jpeg","png","gif","bmp"],n=["mp4","avi","mov","wmv","flv"];return i.includes(t)?"图片":n.includes(t)?"视频":"文件"},viewThis:function(e){this.dialogVisible=!0,this.viewTarget=e},updateTemplateImg:function(e){this.previewImage=e.map((function(e){return e.imageSrc}))},myFunction:function(e){var t=document.getElementsByClassName("myInput")[e];t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),this.$message("复制成功")}},created:function(){},mounted:function(){}},v=h,m=Object(f["a"])(v,n,r,!1,null,"a413ca24",null);t["default"]=m.exports},"127f":function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var n,r=i("c7eb"),a=i("1da1"),s=(i("b0c0"),i("8a79"),i("d3b7"),i("b64b"),i("e9c4"),i("ac1f"),i("5319"),i("bc3a")),o=i.n(s),c=o.a.CancelToken,l=o.a.create({baseURL:""});function u(e,t){return l({url:e,method:"post",data:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function d(e,t,i){return n=c.source(),l({url:e,method:"post",data:t,headers:{"Content-Type":"multipart/form-data"},cancelToken:n.token,onUploadProgress:function(e){"function"===typeof i&&i(e)}})}i("4360");var f="https://oss-cloud.gs-souvenir.com/gyoss/oss/web/config",p=/[\!\@\#\$\%\^\&\*\(\)\+\=\{\}\|\[\]\\\:\"\;\'\<\>\?\,\.\/\`\~]/gi,g="CNOss",h=function(e){var t=new Date,i=t.getMonth()+1;i>=1&&i<=9&&(i="0"+i);var n=t.getDate();n>=0&&n<=9&&(n="0"+n);var r=t.getFullYear()+i+n;e=e||32;for(var a="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",s=a.length,o="",c=0;c<e;c++)o+=a.charAt(Math.floor(Math.random()*s));return r+o},v=function(e){var t=e.lastIndexOf("."),i="";if(-1!==t){i=e.substring(t);var n=i.indexOf("?");if(-1!==n){var r="";return r=i.substring(0,n),r}return i}},m=function(e){var t=e.lastIndexOf("."),i="";return-1!==t&&(i=e.substring(0,t)),i},w=function(e){var t=h(6);return t+=v(e.name),t},F=function(e,t,i){var n=new FormData;n.append("policy",e.policy),n.append("OSSAccessKeyId",e.accessid),n.append("signature",e.signature),n.append("success_action_status","201");var r=e.dir;return r.endsWith("/")||(r+="/"),n.append("key",r+t),n.append("name",t),n.append("file",i),n},b=function(e,t){return new Promise((function(i,n){var r=(new Date).getTime()/1e3,a=localStorage.getItem(e)?Math.round(JSON.parse(localStorage.getItem(e)).expire):0;r>a-5?u(e,t).then((function(t){var n=t.data.data;localStorage.setItem(e,JSON.stringify(n)),i(n)})).catch((function(t){localStorage.removeItem(e),n("获取签名失败")})):i(JSON.parse(localStorage.getItem(e)))}))},y=function(){var e=Object(a["a"])(Object(r["a"])().mark((function e(t,i){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r={systemName:g,modelDir:"quoteManage",isSSL:1},a=new FormData;a.append("systemName",r.systemName),a.append("modelDir",r.modelDir),a.append("isSSL",r.isSSL);var s="",o=m(t.name).replace(/\s+/g,"_").replace(p,"");s=o+"_"+w(t),b(f,a).then((function(r){var a=F(r,s,t);d(r.url,a,(function(e){"function"===typeof i&&i(e)})).then((function(t){var i=r.url+a.get("key");i=i.replace(/oss-static-cn.liyi.co/i,"static-oss.gs-souvenir.com"),e(i)})).catch((function(e){localStorage.removeItem(f),e.msg="OSS文件上传失败",n(e)}))})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},"2ca0":function(e,t,i){"use strict";var n=i("23e7"),r=i("06cf").f,a=i("50c4"),s=i("5a34"),o=i("1d80"),c=i("ab13"),l=i("c430"),u="".startsWith,d=Math.min,f=c("startsWith"),p=!l&&!f&&!!function(){var e=r(String.prototype,"startsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(e){var t=String(o(this));s(e);var i=a(d(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return u?u.call(t,n,i):t.slice(i,i+n.length)===n}})},"408a":function(e,t,i){var n=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"8a79":function(e,t,i){"use strict";var n=i("23e7"),r=i("06cf").f,a=i("50c4"),s=i("5a34"),o=i("1d80"),c=i("ab13"),l=i("c430"),u="".endsWith,d=Math.min,f=c("endsWith"),p=!l&&!f&&!!function(){var e=r(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!p&&!f},{endsWith:function(e){var t=String(o(this));s(e);var i=arguments.length>1?arguments[1]:void 0,n=a(t.length),r=void 0===i?n:d(a(i),n),c=String(e);return u?u.call(t,c,r):t.slice(r-c.length,r)===c}})},b680:function(e,t,i){"use strict";var n=i("23e7"),r=i("a691"),a=i("408a"),s=i("1148"),o=i("d039"),c=1..toFixed,l=Math.floor,u=function(e,t,i){return 0===t?i:t%2===1?u(e,t-1,i*e):u(e*e,t/2,i)},d=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,i,n,o,c=a(this),f=r(e),p=[0,0,0,0,0,0],g="",h="0",v=function(e,t){var i=-1,n=t;while(++i<6)n+=e*p[i],p[i]=n%1e7,n=l(n/1e7)},m=function(e){var t=6,i=0;while(--t>=0)i+=p[t],p[t]=l(i/e),i=i%e*1e7},w=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var i=String(p[e]);t=""===t?i:t+s.call("0",7-i.length)+i}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(t=d(c*u(2,69,1))-69,i=t<0?c*u(2,-t,1):c/u(2,t,1),i*=4503599627370496,t=52-t,t>0){v(0,i),n=f;while(n>=7)v(1e7,0),n-=7;v(u(10,n,1),0),n=t-1;while(n>=23)m(1<<23),n-=23;m(1<<n),v(1,1),m(2),h=w()}else v(0,i),v(1<<-t,0),h=w()+s.call("0",f);return f>0?(o=h.length,h=g+(o<=f?"0."+s.call("0",f-o)+h:h.slice(0,o-f)+"."+h.slice(o-f))):h=g+h,h}})},bd12:function(e,t,i){"use strict";i("e5f3")},e5f3:function(e,t,i){},e9c4:function(e,t,i){var n=i("23e7"),r=i("d066"),a=i("d039"),s=r("JSON","stringify"),o=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,l=/^[\uDC00-\uDFFF]$/,u=function(e,t,i){var n=i.charAt(t-1),r=i.charAt(t+1);return c.test(e)&&!l.test(r)||l.test(e)&&!c.test(n)?"\\u"+e.charCodeAt(0).toString(16):e},d=a((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&n({target:"JSON",stat:!0,forced:d},{stringify:function(e,t,i){var n=s.apply(null,arguments);return"string"==typeof n?n.replace(o,u):n}})}}]);