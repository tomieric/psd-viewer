(function(t){function e(e){for(var a,i,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/psd-viewer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ca":function(t,e,n){"use strict";var a=n("15e5"),r=n.n(a);r.a},"01ff":function(t,e,n){},"15e5":function(t,e,n){},"2e25":function(t,e,n){"use strict";var a=n("d063"),r=n.n(a);r.a},"50ca":function(t,e,n){"use strict";var a=n("58ae"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Layout",[a("Header",[a("div",{staticClass:"text-center"},[a("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[a("div",{staticClass:"layout-logo"},[a("img",{attrs:{src:n("cf05")}}),t._v("psd-viwer")]),a("Slider",{staticClass:"layout-nav-slider",attrs:{"show-input":"",disabled:t.ratioDisabled},model:{value:t.ratio,callback:function(e){t.ratio=e},expression:"ratio"}}),a("div",{staticClass:"layout-nav"},[a("Upload",{attrs:{"before-upload":t.handleUpload,action:"","show-upload-list":!1}},[a("Button",{attrs:{type:"primary",icon:"ios-cloud-upload-outline"}},[t._v("选择上传PSD文件")])],1),a("Button",{attrs:{icon:"ios-cloud-download-outline"},on:{click:t.onDownloadPsdFile}},[t._v("下载test.psd")])],1)],1)],1)]),a("Content",{style:{padding:"0 50px",overflow:"auto"}},[a("div",{staticClass:"canvas",style:t.canvasStyle},[t.layerData.length?t._l(t.layerData,(function(t,e){return a("image"===t.type?"imageLayer":"textLayer",{key:e,tag:"component",attrs:{data:t.data}})})):a("emptyData",[a("Upload",{attrs:{"before-upload":t.handleUpload,action:"","show-upload-list":!1}},[a("Button",{attrs:{icon:"md-add",type:"primary",ghost:""}},[t._v("选择上传PSD文件")])],1)],1)],2)])],1)],1)},o=[],i=(n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("26e9"),n("b0c0"),n("a9e3"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),n("2fa7")),c=(n("96cf"),n("89ba")),l=n("8ec5"),s=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.data.visible,expression:"data.visible"}],staticClass:"component",style:t.componentStyle,attrs:{"data-layer-name":t.data.name}},[n("img",{attrs:{src:t.data.imgURL,alt:t.data.name}})])},d=[],p={props:["data"],computed:{componentStyle:function(){var t=this.data,e=t.width,n=t.height,a=t.top,r=t.left,o=t.opacity,i=t.blendMode;return{width:"".concat(e||0,"px"),height:"".concat(n||0,"px"),top:"".concat(a||0,"px"),left:"".concat(r||0,"px"),opacity:o,"mix-blend-mode":i}}}},f=p,h=n("2877"),y=Object(h["a"])(f,u,d,!1,null,null,null),m=y.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.data.visible,expression:"data.visible"}],staticClass:"component",style:t.componentStyle,attrs:{"data-layer-name":t.data.name}},[t._l(t.textObjs,(function(e,a){return[n(e.tag,{key:a,tag:"component",style:e.style,attrs:{contenteditable:""},domProps:{innerHTML:t._s(e.text)}}),e.br?n("br",{key:"br-"+a}):t._e()]}))],2)},v=[],g=(n("99af"),n("d81d"),n("fb6a"),n("ac1f"),n("5319"),{MicrosoftYaHei:"Microsoft YaHei"}),x={props:["data"],computed:{componentStyle:function(){var t=this.data,e=t.width,n=t.height,a=t.top,r=t.left,o=t.opacity,i=t.blendMode;return{width:"".concat(e||0,"px"),height:"".concat(n||0,"px"),top:"".concat(a||0,"px"),left:"".concat(r||0,"px"),opacity:o,"mix-blend-mode":i}},textObjs:function(){var t=this,e=0,n=0,a=this.data,r=a.runLengthArray,o=a.runArray,i=a.textValue,c=a.colors,l=a.fonts,s=a.fillOpacity,u=a.effects,d=a.transform,p=d.yy;return r.map((function(a,r){e=n,n=e+a;var d=i.slice(e,n),f=o[r].StyleSheet.StyleSheetData,h=f.FontSize,y=f.Leading,m=f.FauxBold,b=f.FauxItalic,v=f.Tracking,g=f.Underline,x=f.Font,w=f.Strikethrough,O=f.FontBaseline,S=f.FontCaps,j=c[r],_="none";g&&(_="underline"),w&&(_="line-through");var D="span";1===O&&(h*=.5,D="sup"),2===O&&(h*=.5,D="sub"),h=.01*Math.round(h*p*100),y=.01*Math.round(y*p*100);var P=h/1e3*v;j||(j=[0,0,0,255]);var k=(j[3]||255)/255,F=/(\n|\r)/g.test(d);return{text:F?d.replace(/(\t|\s){1}$/g,""):d.replace(/(\t|\s)/g,"&nbsp;"),br:F,tag:D,style:{fontSize:"".concat(h,"px"),lineHeight:"".concat(Math.max(h,y),"px"),letterSpacing:"".concat(P,"px"),transform:y>h?"translateY(".concat(h-y,"px)"):void 0,fontWeight:m?700:500,fontStyle:b?"italic":"normal",fontFamily:t.handleFontFamily(l[x]),color:"rgba(".concat(j[0],", ").concat(j[1],", ").concat(j[2],", ").concat(k,")"),textDecoration:_,textTransform:S?"uppercase":"none",textFillColor:s?"rgba(".concat(j[0],", ").concat(j[1],", ").concat(j[2],", ").concat(s,")"):"none",textStroke:u?t.getTextStroke(u.FrFX):"initial",textShadow:u?t.getTextShadow(u.DrSh):"initial"}}}))}},created:function(){console.log(this.data)},methods:{handleFontFamily:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t=t.replace(/[^a-zA-Z-_]/g,""),t=t.replace(/-/g," "),g[t]||t},getTextStroke:function(t){if(!t)return"none";var e=[0,0,0,0],n=e[0],a=e[1],r=e[2],o=t["Sz  "].value,i=t["Clr "];return n=i["Rd  "],a=i["Grn "],r=i["Bl  "],"".concat(o,"px rgb(").concat(n,", ").concat(a,", ").concat(r,")")},getTextShadow:function(t){if(!t)return"none";var e=[0,0,0,0],n=e[0],a=e[1],r=e[2],o=t["Clr "];return n=o["Rd  "],a=o["Grn "],r=o["Bl  "],"".concat(t["Ckmt"].value,"px ").concat(t["Dstn"].value,"px ").concat(t["blur"].value,"px rgba(").concat(n,", ").concat(a,", ").concat(r,", ").concat(t["Opct"].value/100,")")}}},w=x,O=(n("2e25"),Object(h["a"])(w,b,v,!1,null,"c61e7862",null)),S=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty-placeholder"},[n("Icon",{attrs:{type:"ios-filing-outline"}}),t._t("default")],2)},_=[],D=(n("01ca"),{}),P=Object(h["a"])(D,j,_,!1,null,null,null),k=P.exports;function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L={name:"app",components:{imageLayer:m,textLayer:S,emptyData:k},data:function(){return{layerData:[],ratio:100,ratioDisabled:!0,document:{width:0,height:0}}},computed:{canvasStyle:function(){var t=this.document,e=t.width,n=t.height;return e&&n?{width:"".concat(e,"px"),height:"".concat(n,"px"),"max-height":"".concat(n,"px"),transform:"scale(".concat(this.ratio/100,")")}:{}}},methods:{onDownloadPsdFile:function(){window.open("https://github.com/tomieric/psd-viewer/raw/master/test.psd","_blank")},handleUpload:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,o,i,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$Spin.show(),this.ratioDisabled=!0,n=window.URL.createObjectURL(e),t.next=5,s.a.fromURL(n);case 5:return a=t.sent,r=a.tree().descendants(),o=a.tree(),i=o._children.reverse(),c=o.export().document,this.document=Object.assign(this.document,c),this.document.width>window.innerWidth-40?this.ratio=Number((window.innerWidth/this.document.width*100).toFixed(2)):this.ratio=100,l=[],u=function t(e){e.forEach((function(e){if(e.isGroup())t(e._children);else{var n,a,o,i={},c=e.name,s=e.top,u=e.left,d=e.right,p=e.width,f=e.height,h=e.bottom,y=e.layer,m=y.opacity,b=y.fillOpacity,v=y.blendMode,g=y.clipped,x=y.visible,w=y.image;b=y.fillOpacity?y.fillOpacity().layer.adjustments.fillOpacity.obj.value:0,m=Math.round(100*m/255)/100,b=Math.round(100*b/255)/100;var O=e.get("objectEffects"),S=e.get("vectorOrigination"),j=r.find((function(t){return t.layer===y})),_=j.get("typeTool");if(_){n="text",a=e.export(),o=a.text;var D=_.engineData.EngineDict.StyleRun,P=D.RunArray,k=D.RunLengthArray;i=M({},o.font,{transform:o.transform,textValue:o.value||_.textValue,name:c,vectorOrigination:S?S.data:{},effects:O?O.data:{},fonts:_.fonts(),runArray:P,runLengthArray:k})}else n="image";l.push({type:n,data:M({name:c,top:s,left:u,width:p,height:f,right:d,bottom:h,imgURL:w.toBase64(),blendMode:v.mode,clipped:g,opacity:m,fillOpacity:b,visible:x,vectorOrigination:S?S.data:{},effects:O?O.data:{}},i)})}}))},u(i),this.layerData=l,this.ratioDisabled=!1,this.$Spin.hide(),t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},C=L,R=(n("50ca"),Object(h["a"])(C,r,o,!1,null,"c9a5df1a",null)),T=R.exports,U=n("f825"),E=n.n(U);n("f8ce"),n("01ff");a["default"].config.productionTip=!1,a["default"].use(E.a),new a["default"]({render:function(t){return t(T)}}).$mount("#app")},"58ae":function(t,e,n){},"8ec5":function(t,e){t.exports=PSD},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d063:function(t,e,n){}});