!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.plekanmodules=e():t.plekanmodules=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=64)}([function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,p=l?u.render:u.beforeCreate;l?u.render=function(t,e){return c.call(e),p(t,e)}:u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:a,options:u}}},function(t,e,n){"use strict";var r=n(7),o=n.n(r),i=n(45);e.a={debug:!0,state:{languages:[],currentLanguge:"",translateLanguage:"",moduleList:[],rows:[],translateMode:!1,vm:null,editorStart:null,selo:null,editorElement:null,editorElementDynamic:null,editorElementStable:null},init:function(t,e){this.state[t]=e},addRow:function(t,e){var n=JSON.parse(o()(t));n.index=i.v1(),isNaN(e)?this.state.rows.push(n):this.state.rows.splice(e,0,n),this.state.vm.$plekanEvent.onAdd(n)},updateRows:function(t,e){var n=JSON.parse(o()(this.state.rows));n[t]=e,this.state.rows=n,this.state.vm.$plekanEvent.onUpdate(n,t)},deleteRow:function(t,e){var n=this.state.rows.splice(e,1);this.state.vm.$plekanEvent.onDelete(n,e)},dublicateRow:function(t,e){this.addRow(t,e),this.state.vm.$plekanEvent.onDuplicate(t,e)},sortRows:function(t,e){this.state.rows.move(e,t),this.state.vm.$plekanEvent.onSort(t,e)},changeTranslateMode:function(){this.state.translateMode=!this.state.translateMode}}},function(t,e,n){"use strict";var r=n(7),o=n.n(r),i=n(4),a=n.n(i),s=n(5);e.a={props:["store","index","displayLanguage"],data:function(){return{DEFAULT_CONTENT:'<div contenteditable="true">DEFAULT</div>',_updatable:null}},computed:{_languages:function(){return this.store.state.languages},me:function(){return this.store.state.rows[this.index]},_content:function(){return this.me.contents[this.displayLanguage].html||this.DEFAULT_CONTENT}},mounted:function(){var t=this,e=this.$el.querySelectorAll("[contenteditable]");a()(e).map(function(t){return e[t].contentEditable=!0,!0}),this._languages.map(function(e){try{var n=t.me.contents[e].html;t.me.contents[e].html=n||t.DEFAULT_CONTENT}catch(n){var r=JSON.parse(o()(t.me));r.contents[e]={},r.contents[e].html=t.DEFAULT_CONTENT,r.contents[e].fields={},t.store.updateRows(t.index,r)}return!0}),this._setEditable(),document.addEventListener("mousedown",function(e){var r=e.target,o=!!n.i(s.a)(r,"plekan-modal");t._updatable=n.i(s.b)(r,t.store.state.editorElement)||o||"editor"===r.className}),document.addEventListener("mouseup",function(){t._updatable=null}),document.addEventListener("domupdated",function(){t._updateHTML()},!1)},updated:function(){this._setEditable()},methods:{_setEditable:function(){var t=this;this.$el.onfocus=function(){t.store.state.editorElementStable.classList.add("active")},this.$el.onblur=function(){t._updatable||(t._updateHTML(),t.store.state.editorElementDynamic.classList.remove("active"),t.store.state.editorElementStable.classList.remove("active"))}},_updateHTML:function(){this.me.contents[this.displayLanguage].html=this.$el.innerHTML.trim()}}}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports={default:n(23),__esModule:!0}},function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return l});var r=n(4),o=n.n(r),i=n(1);Element.prototype.remove=function(){this.parentElement.removeChild(this)},NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var t=this.length-1;t>=0;t--)this[t]&&this[t].parentElement&&this[t].parentElement.removeChild(this[t])},Array.prototype.move=function(t,e){if(e>=this.length)for(var n=e-this.length;1+n--;)this.push(void 0);return this.splice(e,0,this.splice(t,1)[0]),this};var a=function(t,e){try{for(;(t=t.parentNode)&&t!==e;);return!!t}catch(t){return!1}},s=function(t){for(var e=t,n=[];e;)n.unshift(e),e=e.parentNode;return n},u=function(t,e){var n=s(t),r=null;return o()(n).map(function(t,o){var i=n[o];return i.className&&-1!==i.className.indexOf(e)&&(r=i),!0}),r},c=function(){var t=i.a.state.selo.selection.focusNode.parentNode,e=s(t),n=document.getElementsByTagName("a");o()(n).map(function(t){return n[t].classList.remove("active"),!0}),e.map(function(t){var e=document.querySelector('a[data-tagname="'+t.tagName+'"]');return e&&e.classList.add("active"),!0})},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i.a.state.selo.restoreSelection(i.a.state.sel),document.execCommand(t,!1,e),c()}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports={default:n(22),__esModule:!0}},function(t,e,n){t.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(17),o=n(11);t.exports=function(t){return r(o(t))}},function(t,e){function n(t,e){var n=e||0,o=r;return o[t[n++]]+o[t[n++]]+o[t[n++]]+o[t[n++]]+"-"+o[t[n++]]+o[t[n++]]+"-"+o[t[n++]]+o[t[n++]]+"-"+o[t[n++]]+o[t[n++]]+"-"+o[t[n++]]+o[t[n++]]+o[t[n++]]+o[t[n++]]+o[t[n++]]+o[t[n++]]}for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);t.exports=n},function(t,e,n){(function(e){var n,r=e.crypto||e.msCrypto;if(r&&r.getRandomValues){var o=new Uint8Array(16);n=function(){return r.getRandomValues(o),o}}if(!n){var i=new Array(16);n=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}t.exports=n}).call(e,n(48))},function(t,e,n){var r=n(9),o=n(3),i=n(28),a=n(32),s=function(t,e,n){var u,c,l,p=t&s.F,d=t&s.G,f=t&s.S,m=t&s.P,v=t&s.B,h=t&s.W,g=d?o:o[e]||(o[e]={}),x=g.prototype,b=d?r:f?r[e]:(r[e]||{}).prototype;d&&(n=e);for(u in n)(c=!p&&b&&void 0!==b[u])&&u in g||(l=c?b[u]:n[u],g[u]=d&&"function"!=typeof b[u]?n[u]:v&&c?i(l,r):h&&b[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):m&&"function"==typeof l?i(Function.call,l):l,m&&((g.virtual||(g.virtual={}))[u]=l,t&s.R&&x&&!x[u]&&a(x,u,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(35),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(11);t.exports=function(t){return Object(r(t))}},,,function(t,e,n){var r=n(3),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(44),t.exports=n(3).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(13),o=n(41),i=n(40);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=o(u.length),l=i(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(24);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(10),o=n(9).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(34),o=n(37);t.exports=n(8)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(8)&&!n(6)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(25),o=n(33),i=n(42),a=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(31),o=n(13),i=n(26)(!1),a=n(38)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(16),o=n(3),i=n(6);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(39)("keys"),o=n(43);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(9),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(12),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(12),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(19),o=n(18);n(36)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(46),o=n(47),i=o;i.v1=r,i.v4=o,t.exports=i},function(t,e,n){function r(t,e,n){var r=e&&n||0,o=e||[];t=t||{};var a=void 0!==t.clockseq?t.clockseq:u,p=void 0!==t.msecs?t.msecs:(new Date).getTime(),d=void 0!==t.nsecs?t.nsecs:l+1,f=p-c+(d-l)/1e4;if(f<0&&void 0===t.clockseq&&(a=a+1&16383),(f<0||p>c)&&void 0===t.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=p,l=d,u=a,p+=122192928e5;var m=(1e4*(268435455&p)+d)%4294967296;o[r++]=m>>>24&255,o[r++]=m>>>16&255,o[r++]=m>>>8&255,o[r++]=255&m;var v=p/4294967296*1e4&268435455;o[r++]=v>>>8&255,o[r++]=255&v,o[r++]=v>>>24&15|16,o[r++]=v>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var h=t.node||s,g=0;g<6;++g)o[r+g]=h[g];return e||i(o)}var o=n(15),i=n(14),a=o(),s=[1|a[0],a[1],a[2],a[3],a[4],a[5]],u=16383&(a[6]<<8|a[7]),c=0,l=0;t.exports=r},function(t,e,n){function r(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null),t=t||{};var a=t.random||(t.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var s=0;s<16;++s)e[r+s]=a[s];return e||i(a)}var o=n(15),i=n(14);t.exports=r},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,,,,,,function(t,e,n){var r=n(0)(n(78),n(121),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(79),n(120),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(80),n(119),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(81),n(118),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(82),n(117),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(83),n(116),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(84),n(115),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(85),n(114),null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(56),o=n.n(r),i=n(57),a=n.n(i),s=n(58),u=n.n(s),c=n(59),l=n.n(c),p=n(60),d=n.n(p),f=n(61),m=n.n(f),v=n(62),h=n.n(v),g=n(63),x=n.n(g),b=[{name:"plekanmodule1",group:"text",thumbnail:"plekanmodule1.png",context:o.a},{name:"plekanmodule2",group:"text",thumbnail:"plekanmodule2.png",context:a.a},{name:"plekanmodule3",group:"text",thumbnail:"plekanmodule3.png",context:u.a},{name:"plekanmodule4",group:"text",thumbnail:"plekanmodule4.png",context:l.a},{name:"plekanmodule5",group:"text",thumbnail:"plekanmodule5.png",context:d.a},{name:"plekanmodule6",group:"text",thumbnail:"plekanmodule6.png",context:m.a},{name:"plekanmodule7",group:"text",thumbnail:"plekanmodule7.png",context:h.a},{name:"plekanmodule8",group:"text",thumbnail:"plekanmodule8.png",context:x.a}];e.default=b},,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:'<section class="plekan-module-1">\n      <div class="plekan-xs-12 plekan-sm-12 plekan-md-12 plekan-lg-12">\n        <div class="p-text-center">\n          <h2>I <a href="">LOVE</a> <small>plekan</small></h2>\n          <hr>\n        </div>\n        <h1 class="p-text-center">Did you like it?</h1>\n      </div>\n    </section>'}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:'<section class="plekan-module-2">\n      <div class="plekan-xs-12 plekan-sm-6 plekan-md-6 plekan-lg-6">\n        \n        <h4>Sunset</h4>\n        <p>\n        The spinning Earth lit by the Sun as seen from far above the North Pole. All along the terminator, the rays from the sun hit Earth horizontally, neglecting any atmospheric effects and Earth\'s orbital motion.\n        Sunset is distinct from twilight, which has three phases, the first being civil twilight, which begins once the Sun has disappeared below the horizon, and continues[....]</p>\n      </div>\n      <div class="plekan-xs-12 plekan-sm-6 plekan-md-6 plekan-lg-6">\n        <img src="https://photos.smugmug.com/Landscape/Sunrise-Sunset/i-P6c3cjn/0/M/IMG_6426-Pano-M.jpg" alt="">\n      </div>\n    </section>'}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:' <section class="plekan-module-3">\n      <div class="plekan-xs-12 plekan-sm-12 plekan-md-4 plekan-lg-4">\n        <img src="http://img2.rnkr-static.com/node_img/1589/31779858/C100/eilidh-mccormick-people-in-film-photo-1.jpg" alt="">\n        <div class="desc">\n          <h4>Özge </h4>\n          <p>Lorem ipsum dolor sit amet, consectetur.</p>\n          <div class="social">\n            <a href="">facebook</a>\n            <a href="">twitter</a>\n            <a href="">github</a>\n          </div>\n        </div>\n      </div>\n      <div class="plekan-xs-12 plekan-sm-12 plekan-md-4 plekan-lg-4">\n        <img src="http://img1.rnkr-static.com/user_node_img/66/1313341/C100/john-qualen-people-in-tv-photo-u1.jpg" alt="">\n          <div class="desc">\n          <h4>Abdullah </h4>\n          <p>Lorem ipsum dolor sit amet, consectetur.</p>\n          <div class="social">\n            <a href="">facebook</a>\n            <a href="">twitter</a>\n            <a href="">github</a>\n          </div>\n        </div>\n      </div>\n      <div class="plekan-xs-12 plekan-sm-12 plekan-md-4 plekan-lg-4">\n        <img src="http://celtic-heroes.com/forum/images/avatars/gallery/Stock/DefaultAva.jpg" alt="">\n          <div class="desc">\n          <h4>Deniz </h4>\n          <p>Lorem ipsum dolor sit amet, consectetur.</p>\n          <div class="social">\n            <a href="">facebook</a>\n            <a href="">twitter</a>\n            <a href="">github</a>\n          </div>\n        </div>\n      </div>\n    </section>'}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:'<section class="plekan-module-4">\n        <img src="http://blog.globalknowledge.com/wp-content/uploads/2015/09/SAP-Universe54051886Blog.jpg" alt="">\n        <div class="p-text-center">\n          <h4>Universe</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reprehenderit.</p>\n        </div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, distinctio repellat ab dolorum ex excepturi illo praesentium repellendus, numquam cupiditate obcaecati dolore necessitatibus vero nemo blanditiis autem dolor consequatur est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea totam nobis, enim laboriosam id beatae reru msa Lorem </p>\n      </section>\n'}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:'<section class="plekan-module-5">\n      <h1>Lorem ipsum dolor sit amet, consectetur.</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio aspernatur ab atque voluptatibus quo hic pariatur, similique aliquid laboriosam quam eius quae amet? Ipsa cumque sapiente in, pariatur dolorem.</p>\n    </section>'}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:'   <section class="plekan-module-6">\n      <div class="plekan-xs-4 plekan-sm-4 plekan-md-4 plekan-lg-4">\n        <img src="http://static.boredpanda.com/blog/wp-content/uploads/2016/04/beautiful-fluffy-cat-british-longhair-thumb.jpg" alt="">   \n      </div>\n      <div class="plekan-xs-8 plekan-sm-8 plekan-md-8 plekan-lg-8">\n      <h4>Lorem ipsum dolor sit.</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum provident, voluptatem, odit sunt eos error aspernatur. Quo dolorem cumque quis aut fugiat tempora, alias! Accusantium voluptatibus nemo corrupti suscipit tempore.</p>\n          <hr>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero id, quaerat eaque consectetur quod ducimus temporibus quidem odit adipisci facere sed, quo autem eum deserunt! Consequatur debitis vitae cupiditate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore laborum qui fuga doloribus culpa reprehenderit sint expedita dicta est minima laboriosam enim nisi sed quibusdam cupiditate, quod velit, ullam modi.</p>\n      </div>  \n    </section>'}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:' <section class="plekan-module-7">\n       <table class="table">\n          <thead>\n            <tr>\n              <th>Firstname</th>\n              <th>Lastname</th>\n              <th>Email</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>John</td>\n              <td>Doe</td>\n              <td>john@example.com</td>\n            </tr>\n            <tr>\n              <td>Mary</td>\n              <td>Moe</td>\n              <td>mary@example.com</td>\n            </tr>\n            <tr>\n              <td>July</td>\n              <td>Dooley</td>\n              <td>july@example.com</td>\n            </tr>\n          </tbody>\n        </table>\n    </section>'}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={mixins:[r.a],data:function(){return{DEFAULT_CONTENT:'<section class="plekan-module-8">\n      <img src="http://www.w3schools.com/css/trolltunga.jpg" alt="">\n      <h2>Lorem ipsum dolor sit.</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique natus nemo ratione, labore impedit facere eaque incidunt in praesentium quaerat ea excepturi, dolor ullam quisquam quae ex quidem tenetur a.</p>\n    </section>'}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"plekan-template",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t._content)}})},staticRenderFns:[]}}])});
//# sourceMappingURL=plekanmodules.js.map