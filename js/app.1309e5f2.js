(function(e){function t(t){for(var l,c,i=t[0],s=t[1],o=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(l=!1)}l&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var l={},r={app:0},a=[];function c(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=l,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(n,l,function(t){return e[t]}.bind(null,l));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5405:function(e,t,n){"use strict";n("9930")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23"),r={class:"app-wrapper"},a=Object(l["e"])("div",{class:"header"},[Object(l["e"])("div",{class:"header__name"},"Имя"),Object(l["e"])("div",{class:"header__lenght"},"Размер"),Object(l["e"])("div",{class:"header__type"},"Тип")],-1);function c(e,t,n,c,i,s){var o=Object(l["l"])("FolderView");return Object(l["h"])(),Object(l["d"])("div",r,[a,Object(l["g"])(o,{name:"root",folders:e.folders,files:e.files,isOpen:!0},null,8,["folders","files"])])}n("b0c0");Object(l["j"])("data-v-5e304fc6");var i={class:"folders-list"},s={class:"folders-list__folder"},o=Object(l["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-folder-fill",viewBox:"0 0 16 16"},[Object(l["e"])("path",{d:"M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"})],-1),p={class:"folders-list__folder-name",style:{cursor:"pointer"}},d={key:0,xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-arrow-90deg-down",viewBox:"0 0 16 16",style:{transform:"scale(-1, 1)"}},f=Object(l["e"])("path",{"fill-rule":"evenodd",d:"M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"},null,-1),b=[f],u={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right",viewBox:"0 0 16 16"},h=Object(l["e"])("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"},null,-1),g=[h],j=Object(l["e"])("div",{class:"folders-list__length"},null,-1),O=Object(l["e"])("div",{class:"folders-list__type"},"directory",-1);function v(e,t,n,r,a,c){var f=Object(l["l"])("FolderView",!0),h=Object(l["l"])("FileView");return Object(l["h"])(),Object(l["d"])("ul",i,[Object(l["e"])("div",{class:"folders-list__wrapper",onClick:t[0]||(t[0]=function(e){return n.isOpen=!n.isOpen})},[Object(l["e"])("div",s,[o,Object(l["e"])("span",p,Object(l["m"])(n.name),1),n.isOpen?(Object(l["h"])(),Object(l["d"])("svg",d,b)):Object(l["c"])("",!0),n.isOpen?Object(l["c"])("",!0):(Object(l["h"])(),Object(l["d"])("svg",u,g))]),j,O]),n.isOpen?(Object(l["h"])(),Object(l["d"])(l["a"],{key:0},[(Object(l["h"])(!0),Object(l["d"])(l["a"],null,Object(l["k"])(n.folders,(function(e){return Object(l["h"])(),Object(l["d"])("li",{class:"folders-list__item",key:e.name},[Object(l["g"])(f,{name:e.name,folders:e.folders,files:e.files,isOpen:!1},null,8,["name","folders","files"])])})),128)),(Object(l["h"])(!0),Object(l["d"])(l["a"],null,Object(l["k"])(n.files,(function(e){return Object(l["h"])(),Object(l["d"])("li",{key:e.name},[Object(l["g"])(h,{name:e.name,type:e.type,length:e.length},null,8,["name","type","length"])])})),128))],64)):Object(l["c"])("",!0)])}Object(l["i"])();n("a9e3");Object(l["j"])("data-v-2b9c425c");var m={class:"file-row"},w={class:"file-row__name"},y=Object(l["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-file-text-fill",viewBox:"0 0 16 16"},[Object(l["e"])("path",{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"})],-1),_={class:"file-row__lenght"},x={class:"file-row__type"};function k(e,t,n,r,a,c){return Object(l["h"])(),Object(l["d"])("div",m,[Object(l["e"])("div",w,[y,Object(l["f"])(" "+Object(l["m"])(n.name),1)]),Object(l["e"])("div",_,Object(l["m"])(n.length),1),Object(l["e"])("div",x,Object(l["m"])(n.type),1)])}Object(l["i"])();var A={name:"FileView",props:{name:String,type:String,length:String}};n("bb3f");A.render=k,A.__scopeId="data-v-2b9c425c";var M=A,z={data:function(){return{}},name:"FolderView",components:{FileView:M},props:{name:String,folders:Array,files:Array,depth:Number,isOpen:Boolean}};n("a279");z.render=v,z.__scopeId="data-v-5e304fc6";var S=z,V={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},H={name:"App",components:{FolderView:S},data:function(){return V}};n("5405");H.render=c;var F=H;n("f5df1");Object(l["b"])(F).mount("#app")},7806:function(e,t,n){},9930:function(e,t,n){},a279:function(e,t,n){"use strict";n("7806")},bb3f:function(e,t,n){"use strict";n("cd48")},cd48:function(e,t,n){}});
//# sourceMappingURL=app.1309e5f2.js.map