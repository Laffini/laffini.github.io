(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"columns pt-5"},[n("div",{staticClass:"column is-center is-4 is-offset-4"},[n("Card",{attrs:{jobTitle:t.job,name:t.name,description:t.description,email:t.email,gitHub:t.gitHubUrl,linkedIn:t.linkedInUrl,imageAlt:t.imageAlt,imgSrc:t.imgSrc}})],1)])])},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card is-small"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-horizontal-center is-4by3"},[r("img",{attrs:{src:n("d01f"),alt:t.imageAlt}})])]),r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(t.name))]),r("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.jobTitle))])])]),r("div",{staticClass:"content"},[t._v(" "+t._s(t.description)+" "),r("p",{staticClass:"pt-4"},[t._v("📧: "),r("a",{domProps:{innerHTML:t._s(t.email)}})]),r("p",[t._v(" 👨‍💻: "),r("a",{attrs:{target:"_blank",rel:"noopener",href:t.gitHub}},[t._v("GitHub")])]),r("p",[t._v(" 🌐: "),r("a",{attrs:{target:"_blank",rel:"noopener",href:t.linkedIn}},[t._v("LinkedIn")])])])])])},s=[],l={name:"Card",props:{description:String,linkedIn:String,gitHub:String,email:String,name:String,jobTitle:String,imageAlt:String}},c=l,u=n("2877"),p=Object(u["a"])(c,o,s,!1,null,null,null),f=p.exports,d=(n("92c6"),{name:"App",components:{Card:f},data:function(){return{linkedInUrl:"https://www.linkedin.com/in/thomas-lafford/",gitHubUrl:"https://github.com/Laffini",email:"tom&commat;laffyco&period;net",name:"Tom Lafford",job:"Aerospace Software Development Engineer",description:"Multi-disciplined apprentice Software Engineer. Working at BAE Systems\n          and studying a BSc (Hons) in Software Engineering from the University of\n          Central Lancashire.",imageAlt:"A picture of Tom Lafford",imgSrc:"../assets/tomlafford.png"}}}),m=d,g=(n("034f"),Object(u["a"])(m,i,a,!1,null,null,null)),b=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},d01f:function(t,e,n){t.exports=n.p+"img/tomlafford.69448b03.png"}});
//# sourceMappingURL=app.329bd756.js.map