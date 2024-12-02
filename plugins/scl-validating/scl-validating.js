/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$9=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$4=Symbol(),n$7=new WeakMap;class o$8{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$9&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$7.set(s,t));}return t}toString(){return this.cssText}}const r$3=t=>new o$8("string"==typeof t?t:t+"",void 0,s$4),i$5=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$8(n,t,s$4)},S$1=(s,n)=>{e$9?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$2=e$9?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$3;const e$8=window,r$2=e$8.trustedTypes,h$2=r$2?r$2.emptyScript:"",o$7=e$8.reactiveElementPolyfillSupport,n$6={toAttribute(t,i){switch(i){case Boolean:t=t?h$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$5={attribute:!0,type:String,converter:n$6,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$5){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$5}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$2(i));}else void 0!==i&&s.push(c$2(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$5){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$6).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$6;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$7||o$7({ReactiveElement:u$1}),(null!==(s$3=e$8.reactiveElementVersions)&&void 0!==s$3?s$3:e$8.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$4=window,s$2=i$4.trustedTypes,e$7=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$6="$lit$",n$5=`lit$${(Math.random()+"").slice(9)}$`,l$4="?"+n$5,h$1=`<${l$4}>`,r$1=document,u=()=>r$1.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$1=Array.isArray,v=t=>c$1(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$1.createTreeWalker(r$1,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$7?e$7.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h$1:v>=0?(e.push(d),s.slice(0,v)+o$6+s.slice(v)+n$5+w):s+n$5+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$6)||i.startsWith(n$5)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$6).split(n$5),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$5),i=t.length-1;if(i>0){h.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$4)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$5,t+1));)v.push({type:7,index:r}),t+=n$5.length-1;}r++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$1).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$1,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$2?s$2.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$4.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$4.litHtmlVersions)&&void 0!==t$2?t$2:i$4.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$3,o$5;class s$1 extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$1.finalized=!0,s$1._$litElement$=!0,null===(l$3=globalThis.litElementHydrateSupport)||void 0===l$3||l$3.call(globalThis,{LitElement:s$1});const n$4=globalThis.litElementPolyfillSupport;null==n$4||n$4({LitElement:s$1});(null!==(o$5=globalThis.litElementVersions)&&void 0!==o$5?o$5:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$6=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$5=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$3(n){return (t,o)=>void 0!==o?e$5(n,t,o):i$3(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return n$3({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$4=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$4(e){return o$4({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$2(i,n){return o$4({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$3(e){return o$4({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$2;const e$2=null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$2(n){const{slot:l,selector:t}=null!=n?n:{};return o$4({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$2(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$3(o,n,r){let l,s=o;return "object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$2({slot:s,flatten:n,selector:r}):o$4({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$9 = i$5 `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Icon = class Icon extends s$1 {
    /** @soyTemplate */
    render() {
        return x `<span><slot></slot></span>`;
    }
};
Icon.styles = [styles$9];
Icon = __decorate([
    e$6('mwc-icon')
], Icon);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */
const isNodeElement = (node) => {
    return node.nodeType === Node.ELEMENT_NODE;
};
function addHasRemoveClass(element) {
    return {
        addClass: (className) => {
            element.classList.add(className);
        },
        removeClass: (className) => {
            element.classList.remove(className);
        },
        hasClass: (className) => element.classList.contains(className),
    };
}
const fn = () => { };
const optionsBlock = {
    get passive() {
        return false;
    }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
const deepActiveElementPath = (doc = window.document) => {
    let activeElement = doc.activeElement;
    const path = [];
    if (!activeElement) {
        return path;
    }
    while (activeElement) {
        path.push(activeElement);
        if (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
        }
        else {
            break;
        }
    }
    return path;
};
const doesElementContainFocus = (element) => {
    const activePath = deepActiveElementPath();
    if (!activePath.length) {
        return false;
    }
    const deepActiveElement = activePath[activePath.length - 1];
    const focusEv = new Event('check-if-focused', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    document.body.addEventListener('check-if-focused', listener);
    deepActiveElement.dispatchEvent(focusEv);
    document.body.removeEventListener('check-if-focused', listener);
    return composedPath.indexOf(element) !== -1;
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class BaseElement extends s$1 {
    click() {
        if (this.mdcRoot) {
            this.mdcRoot.focus();
            this.mdcRoot.click();
            return;
        }
        super.click();
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        if (this.mdcFoundationClass) {
            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
        }
    }
    firstUpdated() {
        this.createFoundation();
    }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$4 = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings$4 = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers$3 = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function () {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function (e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function () {
            _this.deactivateImpl();
        };
        _this.focusHandler = function () {
            _this.handleFocus();
        };
        _this.blurHandler = function () {
            _this.handleBlur();
        };
        _this.resizeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame) {
            cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function () {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
        var e_2, _a;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        }
        else {
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
        var e_3, _a;
        try {
            for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState = _this.defaultActivationState();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function () {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame.width / 2,
                y: this.frame.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        var endPoint = {
            x: (this.frame.width / 2) - (this.initialSize / 2),
            y: (this.frame.height / 2) - (this.initialSize / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, numbers$3.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function () {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function () {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        }
        else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function () {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal = function () {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize = initialSize - 1;
        }
        else {
            this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRippleFoundation$1 = MDCRippleFoundation;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$1{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2=e$1(class extends i$1{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i="important",n$1=" !"+i,o$1=e$1(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ht){this.ht=new Set;for(const t in r)this.ht.add(t);return this.render(r)}this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ht.add(t);const r="string"==typeof e&&e.endsWith(n$1);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i:""):s[t]=e;}}return T}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class RippleBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.accent = false;
        this.unbounded = false;
        this.disabled = false;
        this.activated = false;
        this.selected = false;
        this.internalUseStateLayerCustomProperties = false;
        this.hovering = false;
        this.bgFocused = false;
        this.fgActivation = false;
        this.fgDeactivation = false;
        this.fgScale = '';
        this.fgSize = '';
        this.translateStart = '';
        this.translateEnd = '';
        this.leftPos = '';
        this.topPos = '';
        this.mdcFoundationClass = MDCRippleFoundation$1;
    }
    get isActive() {
        return matches(this.parentElement || this, ':active');
    }
    createAdapter() {
        return {
            browserSupportsCssVars: () => true,
            isUnbounded: () => this.unbounded,
            isSurfaceActive: () => this.isActive,
            isSurfaceDisabled: () => this.disabled,
            addClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = true;
                        break;
                }
            },
            removeClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = false;
                        break;
                }
            },
            containsEventTarget: () => true,
            registerInteractionHandler: () => undefined,
            deregisterInteractionHandler: () => undefined,
            registerDocumentInteractionHandler: () => undefined,
            deregisterDocumentInteractionHandler: () => undefined,
            registerResizeHandler: () => undefined,
            deregisterResizeHandler: () => undefined,
            updateCssVariable: (varName, value) => {
                switch (varName) {
                    case '--mdc-ripple-fg-scale':
                        this.fgScale = value;
                        break;
                    case '--mdc-ripple-fg-size':
                        this.fgSize = value;
                        break;
                    case '--mdc-ripple-fg-translate-end':
                        this.translateEnd = value;
                        break;
                    case '--mdc-ripple-fg-translate-start':
                        this.translateStart = value;
                        break;
                    case '--mdc-ripple-left':
                        this.leftPos = value;
                        break;
                    case '--mdc-ripple-top':
                        this.topPos = value;
                        break;
                }
            },
            computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
            getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        };
    }
    startPress(ev) {
        this.waitForFoundation(() => {
            this.mdcFoundation.activate(ev);
        });
    }
    endPress() {
        this.waitForFoundation(() => {
            this.mdcFoundation.deactivate();
        });
    }
    startFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleFocus();
        });
    }
    endFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleBlur();
        });
    }
    startHover() {
        this.hovering = true;
    }
    endHover() {
        this.hovering = false;
    }
    /**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */
    waitForFoundation(fn) {
        if (this.mdcFoundation) {
            fn();
        }
        else {
            this.updateComplete.then(fn);
        }
    }
    update(changedProperties) {
        if (changedProperties.has('disabled')) {
            // stop hovering when ripple is disabled to prevent a stuck "hover" state
            // When re-enabled, the outer component will get a `mouseenter` event on
            // the first movement, which will call `startHover()`
            if (this.disabled) {
                this.endHover();
            }
        }
        super.update(changedProperties);
    }
    /** @soyTemplate */
    render() {
        const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
        const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
        /** @classMap */
        const classes = {
            'mdc-ripple-surface--accent': this.accent,
            'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
            'mdc-ripple-surface--accent--activated': this.accent && this.activated,
            'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
            'mdc-ripple-surface--accent--selected': this.accent && this.selected,
            'mdc-ripple-surface--disabled': this.disabled,
            'mdc-ripple-surface--hover': this.hovering,
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--selected': this.selected,
            'mdc-ripple-upgraded--background-focused': this.bgFocused,
            'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
            'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
            'mdc-ripple-upgraded--unbounded': this.unbounded,
            'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties,
        };
        return x `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$2(classes)}"
          style="${o$1({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
        })}"></div>`;
    }
}
__decorate([
    i$2('.mdc-ripple-surface')
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
    n$3({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
    n$3({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
    n$3({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
    n$3({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
    n$3({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
    n$3({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
    n$3({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "hovering", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "topPos", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$8 = i$5 `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Ripple = class Ripple extends RippleBase {
};
Ripple.styles = [styles$8];
Ripple = __decorate([
    e$6('mwc-ripple')
], Ripple);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TypeScript version of the decorator
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
function tsDecorator(prototype, name, descriptor) {
    const constructor = prototype.constructor;
    if (!descriptor) {
        /**
         * lit uses internal properties with two leading underscores to
         * provide storage for accessors
         */
        const litInternalPropertyKey = `__${name}`;
        descriptor =
            constructor.getPropertyDescriptor(name, litInternalPropertyKey);
        if (!descriptor) {
            throw new Error('@ariaProperty must be used after a @property decorator');
        }
    }
    // descriptor must exist at this point, reassign so typescript understands
    const propDescriptor = descriptor;
    let attribute = '';
    if (!propDescriptor.set) {
        throw new Error(`@ariaProperty requires a setter for ${name}`);
    }
    // TODO(b/202853219): Remove this check when internal tooling is
    // compatible
    // tslint:disable-next-line:no-any bail if applied to internal generated class
    if (prototype.dispatchWizEvent) {
        return descriptor;
    }
    const wrappedDescriptor = {
        configurable: true,
        enumerable: true,
        set(value) {
            if (attribute === '') {
                const options = constructor.getPropertyOptions(name);
                // if attribute is not a string, use `name` instead
                attribute =
                    typeof options.attribute === 'string' ? options.attribute : name;
            }
            if (this.hasAttribute(attribute)) {
                this.removeAttribute(attribute);
            }
            propDescriptor.set.call(this, value);
        }
    };
    if (propDescriptor.get) {
        wrappedDescriptor.get = function () {
            return propDescriptor.get.call(this);
        };
    }
    return wrappedDescriptor;
}
/**
 * A property decorator proxies an aria attribute to an internal node
 *
 * This decorator is only intended for use with ARIA attributes, such as `role`
 * and `aria-label` due to screenreader needs.
 *
 * Upon first render, `@ariaProperty` will remove the attribute from the host
 * element to prevent screenreaders from reading the host instead of the
 * internal node.
 *
 * This decorator should only be used for non-Symbol public fields decorated
 * with `@property`, or on a setter with an optional getter.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @ariaProperty
 *   @property({ type: String, attribute: 'aria-label' })
 *   ariaLabel!: string;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function ariaProperty(protoOrDescriptor, name, 
// tslint:disable-next-line:no-any any is required as a return type from decorators
descriptor) {
    if (name !== undefined) {
        return tsDecorator(protoOrDescriptor, name, descriptor);
    }
    else {
        throw new Error('@ariaProperty only supports TypeScript Decorators');
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */
class RippleHandlers {
    constructor(
    /** Function that returns a `mwc-ripple` */
    rippleFn) {
        this.startPress = (ev) => {
            rippleFn().then((r) => {
                r && r.startPress(ev);
            });
        };
        this.endPress = () => {
            rippleFn().then((r) => {
                r && r.endPress();
            });
        };
        this.startFocus = () => {
            rippleFn().then((r) => {
                r && r.startFocus();
            });
        };
        this.endFocus = () => {
            rippleFn().then((r) => {
                r && r.endFocus();
            });
        };
        this.startHover = () => {
            rippleFn().then((r) => {
                r && r.startHover();
            });
        };
        this.endHover = () => {
            rippleFn().then((r) => {
                r && r.endHover();
            });
        };
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$1=l=>null!=l?l:A;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ButtonBase extends s$1 {
    constructor() {
        super(...arguments);
        this.raised = false;
        this.unelevated = false;
        this.outlined = false;
        this.dense = false;
        this.disabled = false;
        this.trailingIcon = false;
        this.fullwidth = false;
        this.icon = '';
        this.label = '';
        this.expandContent = false;
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    /** @soyTemplate */
    renderOverlay() {
        return x ``;
    }
    /** @soyTemplate */
    renderRipple() {
        const filled = this.raised || this.unelevated;
        return this.shouldRenderRipple ?
            x `<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` :
            '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.startFocus();
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.endFocus();
            buttonElement.blur();
        }
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'mdc-button--raised': this.raised,
            'mdc-button--unelevated': this.unelevated,
            'mdc-button--outlined': this.outlined,
            'mdc-button--dense': this.dense,
        };
    }
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: #button
     * @soyClasses buttonClasses: #button
     */
    render() {
        return x `
      <button
          id="button"
          class="mdc-button ${o$2(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l$1(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o$2({
            flex: this.expandContent
        })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
      </button>`;
    }
    /** @soyTemplate */
    renderIcon() {
        return x `
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
    }
    handleRippleActivate(evt) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(evt);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
ButtonBase.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    ariaProperty,
    n$3({ type: String, attribute: 'aria-haspopup' })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
    n$3({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'trailingicon' })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
    n$3({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
    n$3({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
    n$3({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
    i$2('#button')
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$3('mwc-ripple')
], ButtonBase.prototype, "ripple", void 0);
__decorate([
    t$1()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$4({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$7 = i$5 `.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Button = class Button extends ButtonBase {
};
Button.styles = [styles$7];
Button = __decorate([
    e$6('mwc-button')
], Button);

/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
    var _a, _b, _c;
    /* Symbols for private properties */
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
    /* Symbols for private static methods */
    const _topChanged = Symbol();
    const _swapInertedSibling = Symbol();
    const _inertSiblings = Symbol();
    const _restoreInertedSiblings = Symbol();
    const _getParents = Symbol();
    const _getDistributedChildren = Symbol();
    const _isInertable = Symbol();
    const _handleMutations = Symbol();
    class BlockingElementsImpl {
        constructor() {
            /**
             * The blocking elements.
             */
            this[_a] = [];
            /**
             * Used to keep track of the parents of the top element, from the element
             * itself up to body. When top changes, the old top might have been removed
             * from the document, so we need to memoize the inerted parents' siblings
             * in order to restore their inerteness when top changes.
             */
            this[_b] = [];
            /**
             * Elements that are already inert before the first blocking element is
             * pushed.
             */
            this[_c] = new Set();
        }
        destructor() {
            // Restore original inertness.
            this[_restoreInertedSiblings](this[_topElParents]);
            // Note we don't want to make these properties nullable on the class,
            // since then we'd need non-null casts in many places. Calling a method on
            // a BlockingElements instance after calling destructor will result in an
            // exception.
            const nullable = this;
            nullable[_blockingElements] = null;
            nullable[_topElParents] = null;
            nullable[_alreadyInertElements] = null;
        }
        get top() {
            const elems = this[_blockingElements];
            return elems[elems.length - 1] || null;
        }
        push(element) {
            if (!element || element === this.top) {
                return;
            }
            // Remove it from the stack, we'll bring it to the top.
            this.remove(element);
            this[_topChanged](element);
            this[_blockingElements].push(element);
        }
        remove(element) {
            const i = this[_blockingElements].indexOf(element);
            if (i === -1) {
                return false;
            }
            this[_blockingElements].splice(i, 1);
            // Top changed only if the removed element was the top element.
            if (i === this[_blockingElements].length) {
                this[_topChanged](this.top);
            }
            return true;
        }
        pop() {
            const top = this.top;
            top && this.remove(top);
            return top;
        }
        has(element) {
            return this[_blockingElements].indexOf(element) !== -1;
        }
        /**
         * Sets `inert` to all document elements except the new top element, its
         * parents, and its distributed content.
         */
        [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
            const toKeepInert = this[_alreadyInertElements];
            const oldParents = this[_topElParents];
            // No new top, reset old top if any.
            if (!newTop) {
                this[_restoreInertedSiblings](oldParents);
                toKeepInert.clear();
                this[_topElParents] = [];
                return;
            }
            const newParents = this[_getParents](newTop);
            // New top is not contained in the main document!
            if (newParents[newParents.length - 1].parentNode !== document.body) {
                throw Error('Non-connected element cannot be a blocking element');
            }
            // Cast here because we know we'll call _inertSiblings on newParents
            // below.
            this[_topElParents] = newParents;
            const toSkip = this[_getDistributedChildren](newTop);
            // No previous top element.
            if (!oldParents.length) {
                this[_inertSiblings](newParents, toSkip, toKeepInert);
                return;
            }
            let i = oldParents.length - 1;
            let j = newParents.length - 1;
            // Find common parent. Index 0 is the element itself (so stop before it).
            while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
                i--;
                j--;
            }
            // If up the parents tree there are 2 elements that are siblings, swap
            // the inerted sibling.
            if (oldParents[i] !== newParents[j]) {
                this[_swapInertedSibling](oldParents[i], newParents[j]);
            }
            // Restore old parents siblings inertness.
            i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
            // Make new parents siblings inert.
            j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
        }
        /**
         * Swaps inertness between two sibling elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_swapInertedSibling](oldInert, newInert) {
            const siblingsToRestore = oldInert[_siblingsToRestore];
            // oldInert is not contained in siblings to restore, so we have to check
            // if it's inertable and if already inert.
            if (this[_isInertable](oldInert) && !oldInert.inert) {
                oldInert.inert = true;
                siblingsToRestore.add(oldInert);
            }
            // If newInert was already between the siblings to restore, it means it is
            // inertable and must be restored.
            if (siblingsToRestore.has(newInert)) {
                newInert.inert = false;
                siblingsToRestore.delete(newInert);
            }
            newInert[_parentMO] = oldInert[_parentMO];
            newInert[_siblingsToRestore] = siblingsToRestore;
            oldInert[_parentMO] = undefined;
            oldInert[_siblingsToRestore] = undefined;
        }
        /**
         * Restores original inertness to the siblings of the elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_restoreInertedSiblings](elements) {
            for (const element of elements) {
                const mo = element[_parentMO];
                mo.disconnect();
                element[_parentMO] = undefined;
                const siblings = element[_siblingsToRestore];
                for (const sibling of siblings) {
                    sibling.inert = false;
                }
                element[_siblingsToRestore] = undefined;
            }
        }
        /**
         * Inerts the siblings of the elements except the elements to skip. Stores
         * the inerted siblings into the element's symbol `_siblingsToRestore`.
         * Pass `toKeepInert` to collect the already inert elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_inertSiblings](elements, toSkip, toKeepInert) {
            for (const element of elements) {
                // Assume element is not a Document, so it must have a parentNode.
                const parent = element.parentNode;
                const children = parent.children;
                const inertedSiblings = new Set();
                for (let j = 0; j < children.length; j++) {
                    const sibling = children[j];
                    // Skip the input element, if not inertable or to be skipped.
                    if (sibling === element || !this[_isInertable](sibling) ||
                        (toSkip && toSkip.has(sibling))) {
                        continue;
                    }
                    // Should be collected since already inerted.
                    if (toKeepInert && sibling.inert) {
                        toKeepInert.add(sibling);
                    }
                    else {
                        sibling.inert = true;
                        inertedSiblings.add(sibling);
                    }
                }
                // Store the siblings that were inerted.
                element[_siblingsToRestore] = inertedSiblings;
                // Observe only immediate children mutations on the parent.
                const mo = new MutationObserver(this[_handleMutations].bind(this));
                element[_parentMO] = mo;
                let parentToObserve = parent;
                // If we're using the ShadyDOM polyfill, then our parent could be a
                // shady root, which is an object that acts like a ShadowRoot, but isn't
                // actually a node in the real DOM. Observe the real DOM parent instead.
                const maybeShadyRoot = parentToObserve;
                if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
                    parentToObserve = maybeShadyRoot.host;
                }
                mo.observe(parentToObserve, {
                    childList: true,
                });
            }
        }
        /**
         * Handles newly added/removed nodes by toggling their inertness.
         * It also checks if the current top Blocking Element has been removed,
         * notifying and removing it.
         */
        [_handleMutations](mutations) {
            const parents = this[_topElParents];
            const toKeepInert = this[_alreadyInertElements];
            for (const mutation of mutations) {
                // If the target is a shadowRoot, get its host as we skip shadowRoots when
                // computing _topElParents.
                const target = mutation.target.host || mutation.target;
                const idx = target === document.body ?
                    parents.length :
                    parents.indexOf(target);
                const inertedChild = parents[idx - 1];
                const inertedSiblings = inertedChild[_siblingsToRestore];
                // To restore.
                for (let i = 0; i < mutation.removedNodes.length; i++) {
                    const sibling = mutation.removedNodes[i];
                    if (sibling === inertedChild) {
                        console.info('Detected removal of the top Blocking Element.');
                        this.pop();
                        return;
                    }
                    if (inertedSiblings.has(sibling)) {
                        sibling.inert = false;
                        inertedSiblings.delete(sibling);
                    }
                }
                // To inert.
                for (let i = 0; i < mutation.addedNodes.length; i++) {
                    const sibling = mutation.addedNodes[i];
                    if (!this[_isInertable](sibling)) {
                        continue;
                    }
                    if (toKeepInert && sibling.inert) {
                        toKeepInert.add(sibling);
                    }
                    else {
                        sibling.inert = true;
                        inertedSiblings.add(sibling);
                    }
                }
            }
        }
        /**
         * Returns if the element is inertable.
         */
        [_isInertable](element) {
            return false === /^(style|template|script)$/.test(element.localName);
        }
        /**
         * Returns the list of newParents of an element, starting from element
         * (included) up to `document.body` (excluded).
         */
        [_getParents](element) {
            const parents = [];
            let current = element;
            // Stop to body.
            while (current && current !== document.body) {
                // Skip shadow roots.
                if (current.nodeType === Node.ELEMENT_NODE) {
                    parents.push(current);
                }
                // ShadowDom v1
                if (current.assignedSlot) {
                    // Collect slots from deepest slot to top.
                    while (current = current.assignedSlot) {
                        parents.push(current);
                    }
                    // Continue the search on the top slot.
                    current = parents.pop();
                    continue;
                }
                current = current.parentNode ||
                    current.host;
            }
            return parents;
        }
        /**
         * Returns the distributed children of the element's shadow root.
         * Returns null if the element doesn't have a shadow root.
         */
        [_getDistributedChildren](element) {
            const shadowRoot = element.shadowRoot;
            if (!shadowRoot) {
                return null;
            }
            const result = new Set();
            let i;
            let j;
            let nodes;
            const slots = shadowRoot.querySelectorAll('slot');
            if (slots.length && slots[0].assignedNodes) {
                for (i = 0; i < slots.length; i++) {
                    nodes = slots[i].assignedNodes({
                        flatten: true,
                    });
                    for (j = 0; j < nodes.length; j++) {
                        if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                            result.add(nodes[j]);
                        }
                    }
                }
                // No need to search for <content>.
            }
            return result;
        }
    }
    document.$blockingElements =
        new BlockingElementsImpl();
})();

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define('inert', factory) :
  (factory());
}(undefined, (function () {
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * This work is licensed under the W3C Software and Document License
   * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
   */

  (function () {
    // Return early if we're not running inside of the browser.
    if (typeof window === 'undefined') {
      return;
    }

    // Convenience function for converting NodeLists.
    /** @type {typeof Array.prototype.slice} */
    var slice = Array.prototype.slice;

    /**
     * IE has a non-standard name for "matches".
     * @type {typeof Element.prototype.matches}
     */
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

    /** @type {string} */
    var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

    /**
     * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
     * attribute.
     *
     * Its main functions are:
     *
     * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
     *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
     *   each focusable node in the subtree with the singleton `InertManager` which manages all known
     *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
     *   instance exists for each focusable node which has at least one inert root as an ancestor.
     *
     * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
     *   attribute is removed from the root node). This is handled in the destructor, which calls the
     *   `deregister` method on `InertManager` for each managed inert node.
     */

    var InertRoot = function () {
      /**
       * @param {!HTMLElement} rootElement The HTMLElement at the root of the inert subtree.
       * @param {!InertManager} inertManager The global singleton InertManager object.
       */
      function InertRoot(rootElement, inertManager) {
        _classCallCheck(this, InertRoot);

        /** @type {!InertManager} */
        this._inertManager = inertManager;

        /** @type {!HTMLElement} */
        this._rootElement = rootElement;

        /**
         * @type {!Set<!InertNode>}
         * All managed focusable nodes in this InertRoot's subtree.
         */
        this._managedNodes = new Set();

        // Make the subtree hidden from assistive technology
        if (this._rootElement.hasAttribute('aria-hidden')) {
          /** @type {?string} */
          this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute('aria-hidden', 'true');

        // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
        this._makeSubtreeUnfocusable(this._rootElement);

        // Watch for:
        // - any additions in the subtree: make them unfocusable too
        // - any removals from the subtree: remove them from this inert root's managed nodes
        // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
        //   element, make that node a managed node.
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
      }

      /**
       * Call this whenever this object is about to become obsolete.  This unwinds all of the state
       * stored in this object and updates the state of all of the managed nodes.
       */


      _createClass(InertRoot, [{
        key: 'destructor',
        value: function destructor() {
          this._observer.disconnect();

          if (this._rootElement) {
            if (this._savedAriaHidden !== null) {
              this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
            } else {
              this._rootElement.removeAttribute('aria-hidden');
            }
          }

          this._managedNodes.forEach(function (inertNode) {
            this._unmanageNode(inertNode.node);
          }, this);

          // Note we cast the nulls to the ANY type here because:
          // 1) We want the class properties to be declared as non-null, or else we
          //    need even more casts throughout this code. All bets are off if an
          //    instance has been destroyed and a method is called.
          // 2) We don't want to cast "this", because we want type-aware optimizations
          //    to know which properties we're setting.
          this._observer = /** @type {?} */null;
          this._rootElement = /** @type {?} */null;
          this._managedNodes = /** @type {?} */null;
          this._inertManager = /** @type {?} */null;
        }

        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */

      }, {
        key: '_makeSubtreeUnfocusable',


        /**
         * @param {!Node} startNode
         */
        value: function _makeSubtreeUnfocusable(startNode) {
          var _this2 = this;

          composedTreeWalk(startNode, function (node) {
            return _this2._visitNode(node);
          });

          var activeElement = document.activeElement;

          if (!document.body.contains(startNode)) {
            // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
            var node = startNode;
            /** @type {!ShadowRoot|undefined} */
            var root = undefined;
            while (node) {
              if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                root = /** @type {!ShadowRoot} */node;
                break;
              }
              node = node.parentNode;
            }
            if (root) {
              activeElement = root.activeElement;
            }
          }
          if (startNode.contains(activeElement)) {
            activeElement.blur();
            // In IE11, if an element is already focused, and then set to tabindex=-1
            // calling blur() will not actually move the focus.
            // To work around this we call focus() on the body instead.
            if (activeElement === document.activeElement) {
              document.body.focus();
            }
          }
        }

        /**
         * @param {!Node} node
         */

      }, {
        key: '_visitNode',
        value: function _visitNode(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!HTMLElement} */node;

          // If a descendant inert root becomes un-inert, its descendants will still be inert because of
          // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
          if (element !== this._rootElement && element.hasAttribute('inert')) {
            this._adoptInertRoot(element);
          }

          if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
            this._manageNode(element);
          }
        }

        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */

      }, {
        key: '_manageNode',
        value: function _manageNode(node) {
          var inertNode = this._inertManager.register(node, this);
          this._managedNodes.add(inertNode);
        }

        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */

      }, {
        key: '_unmanageNode',
        value: function _unmanageNode(node) {
          var inertNode = this._inertManager.deregister(node, this);
          if (inertNode) {
            this._managedNodes['delete'](inertNode);
          }
        }

        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */

      }, {
        key: '_unmanageSubtree',
        value: function _unmanageSubtree(startNode) {
          var _this3 = this;

          composedTreeWalk(startNode, function (node) {
            return _this3._unmanageNode(node);
          });
        }

        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */

      }, {
        key: '_adoptInertRoot',
        value: function _adoptInertRoot(node) {
          var inertSubroot = this._inertManager.getInertRoot(node);

          // During initialisation this inert root may not have been registered yet,
          // so register it now if need be.
          if (!inertSubroot) {
            this._inertManager.setInert(node, true);
            inertSubroot = this._inertManager.getInertRoot(node);
          }

          inertSubroot.managedNodes.forEach(function (savedInertNode) {
            this._manageNode(savedInertNode.node);
          }, this);
        }

        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */

      }, {
        key: '_onMutation',
        value: function _onMutation(records, self) {
          records.forEach(function (record) {
            var target = /** @type {!HTMLElement} */record.target;
            if (record.type === 'childList') {
              // Manage added nodes
              slice.call(record.addedNodes).forEach(function (node) {
                this._makeSubtreeUnfocusable(node);
              }, this);

              // Un-manage removed nodes
              slice.call(record.removedNodes).forEach(function (node) {
                this._unmanageSubtree(node);
              }, this);
            } else if (record.type === 'attributes') {
              if (record.attributeName === 'tabindex') {
                // Re-initialise inert node if tabindex changes
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                // already managed nodes from this inert subroot.
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                this._managedNodes.forEach(function (managedNode) {
                  if (target.contains(managedNode.node)) {
                    inertSubroot._manageNode(managedNode.node);
                  }
                });
              }
            }
          }, this);
        }
      }, {
        key: 'managedNodes',
        get: function get() {
          return new Set(this._managedNodes);
        }

        /** @return {boolean} */

      }, {
        key: 'hasSavedAriaHidden',
        get: function get() {
          return this._savedAriaHidden !== null;
        }

        /** @param {?string} ariaHidden */

      }, {
        key: 'savedAriaHidden',
        set: function set(ariaHidden) {
          this._savedAriaHidden = ariaHidden;
        }

        /** @return {?string} */
        ,
        get: function get() {
          return this._savedAriaHidden;
        }
      }]);

      return InertRoot;
    }();

    /**
     * `InertNode` initialises and manages a single inert node.
     * A node is inert if it is a descendant of one or more inert root elements.
     *
     * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
     * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
     * is intrinsically focusable or not.
     *
     * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
     * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
     * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
     * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
     * or removes the `tabindex` attribute if the element is intrinsically focusable.
     */


    var InertNode = function () {
      /**
       * @param {!Node} node A focusable element to be made inert.
       * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
       */
      function InertNode(node, inertRoot) {
        _classCallCheck(this, InertNode);

        /** @type {!Node} */
        this._node = node;

        /** @type {boolean} */
        this._overrodeFocusMethod = false;

        /**
         * @type {!Set<!InertRoot>} The set of descendant inert roots.
         *    If and only if this set becomes empty, this node is no longer inert.
         */
        this._inertRoots = new Set([inertRoot]);

        /** @type {?number} */
        this._savedTabIndex = null;

        /** @type {boolean} */
        this._destroyed = false;

        // Save any prior tabindex info and make this node untabbable
        this.ensureUntabbable();
      }

      /**
       * Call this whenever this object is about to become obsolete.
       * This makes the managed node focusable again and deletes all of the previously stored state.
       */


      _createClass(InertNode, [{
        key: 'destructor',
        value: function destructor() {
          this._throwIfDestroyed();

          if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var element = /** @type {!HTMLElement} */this._node;
            if (this._savedTabIndex !== null) {
              element.setAttribute('tabindex', this._savedTabIndex);
            } else {
              element.removeAttribute('tabindex');
            }

            // Use `delete` to restore native focus method.
            if (this._overrodeFocusMethod) {
              delete element.focus;
            }
          }

          // See note in InertRoot.destructor for why we cast these nulls to ANY.
          this._node = /** @type {?} */null;
          this._inertRoots = /** @type {?} */null;
          this._destroyed = true;
        }

        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */

      }, {
        key: '_throwIfDestroyed',


        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function _throwIfDestroyed() {
          if (this.destroyed) {
            throw new Error('Trying to access destroyed InertNode');
          }
        }

        /** @return {boolean} */

      }, {
        key: 'ensureUntabbable',


        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function ensureUntabbable() {
          if (this.node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!HTMLElement} */this.node;
          if (matches.call(element, _focusableElementsString)) {
            if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
              return;
            }

            if (element.hasAttribute('tabindex')) {
              this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            }
            element.setAttribute('tabindex', '-1');
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.focus = function () {};
              this._overrodeFocusMethod = true;
            }
          } else if (element.hasAttribute('tabindex')) {
            this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            element.removeAttribute('tabindex');
          }
        }

        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */

      }, {
        key: 'addInertRoot',
        value: function addInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots.add(inertRoot);
        }

        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */

      }, {
        key: 'removeInertRoot',
        value: function removeInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots['delete'](inertRoot);
          if (this._inertRoots.size === 0) {
            this.destructor();
          }
        }
      }, {
        key: 'destroyed',
        get: function get() {
          return (/** @type {!InertNode} */this._destroyed
          );
        }
      }, {
        key: 'hasSavedTabIndex',
        get: function get() {
          return this._savedTabIndex !== null;
        }

        /** @return {!Node} */

      }, {
        key: 'node',
        get: function get() {
          this._throwIfDestroyed();
          return this._node;
        }

        /** @param {?number} tabIndex */

      }, {
        key: 'savedTabIndex',
        set: function set(tabIndex) {
          this._throwIfDestroyed();
          this._savedTabIndex = tabIndex;
        }

        /** @return {?number} */
        ,
        get: function get() {
          this._throwIfDestroyed();
          return this._savedTabIndex;
        }
      }]);

      return InertNode;
    }();

    /**
     * InertManager is a per-document singleton object which manages all inert roots and nodes.
     *
     * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
     * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
     * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
     * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
     * is created for each such node, via the `_managedNodes` map.
     */


    var InertManager = function () {
      /**
       * @param {!Document} document
       */
      function InertManager(document) {
        _classCallCheck(this, InertManager);

        if (!document) {
          throw new Error('Missing required argument; InertManager needs to wrap a document.');
        }

        /** @type {!Document} */
        this._document = document;

        /**
         * All managed nodes known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertNode>}
         */
        this._managedNodes = new Map();

        /**
         * All inert roots known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertRoot>}
         */
        this._inertRoots = new Map();

        /**
         * Observer for mutations on `document.body`.
         * @type {!MutationObserver}
         */
        this._observer = new MutationObserver(this._watchForInert.bind(this));

        // Add inert style.
        addInertStyle(document.head || document.body || document.documentElement);

        // Wait for document to be loaded.
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }

      /**
       * Set whether the given element should be an inert root or not.
       * @param {!HTMLElement} root
       * @param {boolean} inert
       */


      _createClass(InertManager, [{
        key: 'setInert',
        value: function setInert(root, inert) {
          if (inert) {
            if (this._inertRoots.has(root)) {
              // element is already inert
              return;
            }

            var inertRoot = new InertRoot(root, this);
            root.setAttribute('inert', '');
            this._inertRoots.set(root, inertRoot);
            // If not contained in the document, it must be in a shadowRoot.
            // Ensure inert styles are added there.
            if (!this._document.body.contains(root)) {
              var parent = root.parentNode;
              while (parent) {
                if (parent.nodeType === 11) {
                  addInertStyle(parent);
                }
                parent = parent.parentNode;
              }
            }
          } else {
            if (!this._inertRoots.has(root)) {
              // element is already non-inert
              return;
            }

            var _inertRoot = this._inertRoots.get(root);
            _inertRoot.destructor();
            this._inertRoots['delete'](root);
            root.removeAttribute('inert');
          }
        }

        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */

      }, {
        key: 'getInertRoot',
        value: function getInertRoot(element) {
          return this._inertRoots.get(element);
        }

        /**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */

      }, {
        key: 'register',
        value: function register(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (inertNode !== undefined) {
            // node was already in an inert subtree
            inertNode.addInertRoot(inertRoot);
          } else {
            inertNode = new InertNode(node, inertRoot);
          }

          this._managedNodes.set(node, inertNode);

          return inertNode;
        }

        /**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */

      }, {
        key: 'deregister',
        value: function deregister(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (!inertNode) {
            return null;
          }

          inertNode.removeInertRoot(inertRoot);
          if (inertNode.destroyed) {
            this._managedNodes['delete'](node);
          }

          return inertNode;
        }

        /**
         * Callback used when document has finished loading.
         */

      }, {
        key: '_onDocumentLoaded',
        value: function _onDocumentLoaded() {
          // Find all inert roots in document and make them actually inert.
          var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
          inertElements.forEach(function (inertElement) {
            this.setInert(inertElement, true);
          }, this);

          // Comment this out to use programmatic API only.
          this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
        }

        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */

      }, {
        key: '_watchForInert',
        value: function _watchForInert(records, self) {
          var _this = this;
          records.forEach(function (record) {
            switch (record.type) {
              case 'childList':
                slice.call(record.addedNodes).forEach(function (node) {
                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }
                  var inertElements = slice.call(node.querySelectorAll('[inert]'));
                  if (matches.call(node, '[inert]')) {
                    inertElements.unshift(node);
                  }
                  inertElements.forEach(function (inertElement) {
                    this.setInert(inertElement, true);
                  }, _this);
                }, _this);
                break;
              case 'attributes':
                if (record.attributeName !== 'inert') {
                  return;
                }
                var target = /** @type {!HTMLElement} */record.target;
                var inert = target.hasAttribute('inert');
                _this.setInert(target, inert);
                break;
            }
          }, this);
        }
      }]);

      return InertManager;
    }();

    /**
     * Recursively walk the composed tree from |node|.
     * @param {!Node} node
     * @param {(function (!HTMLElement))=} callback Callback to be called for each element traversed,
     *     before descending into child nodes.
     * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
     */


    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        var element = /** @type {!HTMLElement} */node;
        if (callback) {
          callback(element);
        }

        // Descend into node:
        // If it has a ShadowRoot, ignore all child elements - these will be picked
        // up by the <content> or <shadow> elements. Descend straight into the
        // ShadowRoot.
        var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback);
          return;
        }

        // If it is a <content> element, descend into distributed elements - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'content') {
          var content = /** @type {!HTMLContentElement} */element;
          // Verifies if ShadowDom v0 is supported.
          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
          for (var i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback);
          }
          return;
        }

        // If it is a <slot> element, descend into assigned nodes - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'slot') {
          var slot = /** @type {!HTMLSlotElement} */element;
          // Verify if ShadowDom v1 is supported.
          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
          for (var _i = 0; _i < _distributedNodes.length; _i++) {
            composedTreeWalk(_distributedNodes[_i], callback);
          }
          return;
        }
      }

      // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
      // element, nor a <shadow> element recurse normally.
      var child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback);
        child = child.nextSibling;
      }
    }

    /**
     * Adds a style element to the node containing the inert specific styles
     * @param {!Node} node
     */
    function addInertStyle(node) {
      if (node.querySelector('style#inert-style, link#inert-style')) {
        return;
      }
      var style = document.createElement('style');
      style.setAttribute('id', 'inert-style');
      style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
      node.appendChild(style);
    }

    if (!HTMLElement.prototype.hasOwnProperty('inert')) {
      /** @type {!InertManager} */
      var inertManager = new InertManager(document);

      Object.defineProperty(HTMLElement.prototype, 'inert', {
        enumerable: true,
        /** @this {!HTMLElement} */
        get: function get() {
          return this.hasAttribute('inert');
        },
        /** @this {!HTMLElement} */
        set: function set(inert) {
          inertManager.setInert(this, inert);
        }
      });
    }
  })();

})));

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$3 = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked',
    FULLSCREEN: 'mdc-dialog--fullscreen',
    // Class for showing a scroll divider on full-screen dialog header element.
    // Should only be displayed on scrollable content, when the dialog content is
    // scrolled "underneath" the header.
    SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
    // Class for showing a scroll divider on a full-screen dialog footer element.
    // Should only be displayed on scrolalble content, when the dialog content is
    // obscured "underneath" the footer.
    SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
    // The "surface scrim" is a scrim covering only the surface of a dialog. This
    // is used in situations where a confirmation dialog is shown over an already
    // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
    // is sized as a modal and so in these situations we display a "surface scrim"
    // to prevent a "double scrim" (where the scrim from the secondary
    // confirmation dialog would overlap with the scrim from the full-screen
    // dialog).
    SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
    // "Showing" animating class for the surface-scrim.
    SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
    // "Hiding" animating class for the surface-scrim.
    SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
    // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
    // Note that we only hide the original scrim rather than removing it entirely
    // to prevent interactions with the content behind this scrim, and to capture
    // scrim clicks.
    SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden',
};
var strings$3 = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DESTROY_ACTION: 'destroy',
    INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
        'textarea',
        '.mdc-menu .mdc-list-item',
        '.mdc-menu .mdc-deprecated-list-item',
    ].join(', '),
    SURFACE_SELECTOR: '.mdc-dialog__surface',
};
var numbers$2 = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
};

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
var AnimationFrame = /** @class */ (function () {
    function AnimationFrame() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    AnimationFrame.prototype.request = function (key, callback) {
        var _this = this;
        this.cancel(key);
        var frameID = requestAnimationFrame(function (frame) {
            _this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    };
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    AnimationFrame.prototype.cancel = function (key) {
        var rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    };
    /**
     * Cancels all queued callback.
     */
    AnimationFrame.prototype.cancelAll = function () {
        var _this = this;
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            _this.cancel(key);
        });
    };
    /**
     * Returns the queue of unexecuted callback keys.
     */
    AnimationFrame.prototype.getQueue = function () {
        var queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            queue.push(key);
        });
        return queue;
    };
    return AnimationFrame;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["POLL_SCROLL_POS"] = "poll_scroll_position";
    AnimationKeys["POLL_LAYOUT_CHANGE"] = "poll_layout_change";
})(AnimationKeys || (AnimationKeys = {}));
var MDCDialogFoundation = /** @class */ (function (_super) {
    __extends(MDCDialogFoundation, _super);
    function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCDialogFoundation.defaultAdapter), adapter)) || this;
        _this.dialogOpen = false;
        _this.isFullscreen = false;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        _this.escapeKeyAction = strings$3.CLOSE_ACTION;
        _this.scrimClickAction = strings$3.CLOSE_ACTION;
        _this.autoStackButtons = true;
        _this.areButtonsStacked = false;
        _this.suppressDefaultPressSelector = strings$3.SUPPRESS_DEFAULT_PRESS_SELECTOR;
        _this.animFrame = new AnimationFrame();
        _this.contentScrollHandler = function () {
            _this.handleScrollEvent();
        };
        _this.windowResizeHandler = function () {
            _this.layout();
        };
        _this.windowOrientationChangeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return numbers$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function () {
            return {
                addBodyClass: function () { return undefined; },
                addClass: function () { return undefined; },
                areButtonsStacked: function () { return false; },
                clickDefaultButton: function () { return undefined; },
                eventTargetMatches: function () { return false; },
                getActionFromEvent: function () { return ''; },
                getInitialFocusEl: function () { return null; },
                hasClass: function () { return false; },
                isContentScrollable: function () { return false; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeBodyClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                reverseButtons: function () { return undefined; },
                trapFocus: function () { return undefined; },
                registerContentEventHandler: function () { return undefined; },
                deregisterContentEventHandler: function () { return undefined; },
                isScrollableContentAtTop: function () { return false; },
                isScrollableContentAtBottom: function () { return false; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCDialogFoundation.prototype.init = function () {
        if (this.adapter.hasClass(cssClasses$3.STACKED)) {
            this.setAutoStackButtons(false);
        }
        this.isFullscreen = this.adapter.hasClass(cssClasses$3.FULLSCREEN);
    };
    MDCDialogFoundation.prototype.destroy = function () {
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.handleAnimationTimerEnd();
        }
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.animFrame.cancelAll();
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
    };
    MDCDialogFoundation.prototype.open = function (dialogOptions) {
        var _this = this;
        this.dialogOpen = true;
        this.adapter.notifyOpening();
        this.adapter.addClass(cssClasses$3.OPENING);
        if (this.isFullscreen) {
            // A scroll event listener is registered even if the dialog is not
            // scrollable on open, since the window resize event, or orientation
            // change may make the dialog scrollable after it is opened.
            this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
        }
        if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
            this.adapter.addClass(cssClasses$3.SCRIM_HIDDEN);
        }
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        // Wait a frame once display is no longer "none", to establish basis for
        // animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses$3.OPEN);
            _this.adapter.addBodyClass(cssClasses$3.SCROLL_LOCK);
            _this.layout();
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
                _this.adapter.notifyOpened();
            }, numbers$2.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    };
    MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (!this.dialogOpen) {
            // Avoid redundant close calls (and events), e.g. from keydown on elements
            // that inherently emit click
            return;
        }
        this.dialogOpen = false;
        this.adapter.notifyClosing(action);
        this.adapter.addClass(cssClasses$3.CLOSING);
        this.adapter.removeClass(cssClasses$3.OPEN);
        this.adapter.removeBodyClass(cssClasses$3.SCROLL_LOCK);
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.adapter.releaseFocus();
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(action);
        }, numbers$2.DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.showSurfaceScrim = function () {
        var _this = this;
        this.adapter.addClass(cssClasses$3.SURFACE_SCRIM_SHOWING);
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses$3.SURFACE_SCRIM_SHOWN);
        });
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.hideSurfaceScrim = function () {
        this.adapter.removeClass(cssClasses$3.SURFACE_SCRIM_SHOWN);
        this.adapter.addClass(cssClasses$3.SURFACE_SCRIM_HIDING);
    };
    /**
     * Handles `transitionend` event triggered when surface scrim animation is
     * finished.
     */
    MDCDialogFoundation.prototype.handleSurfaceScrimTransitionEnd = function () {
        this.adapter.removeClass(cssClasses$3.SURFACE_SCRIM_HIDING);
        this.adapter.removeClass(cssClasses$3.SURFACE_SCRIM_SHOWING);
    };
    MDCDialogFoundation.prototype.isOpen = function () {
        return this.dialogOpen;
    };
    MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction;
    };
    MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction = action;
    };
    MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction;
    };
    MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction = action;
    };
    MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons;
    };
    MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons = autoStack;
    };
    MDCDialogFoundation.prototype.getSuppressDefaultPressSelector = function () {
        return this.suppressDefaultPressSelector;
    };
    MDCDialogFoundation.prototype.setSuppressDefaultPressSelector = function (selector) {
        this.suppressDefaultPressSelector = selector;
    };
    MDCDialogFoundation.prototype.layout = function () {
        var _this = this;
        this.animFrame.request(AnimationKeys.POLL_LAYOUT_CHANGE, function () {
            _this.layoutInternal();
        });
    };
    /** Handles click on the dialog root element. */
    MDCDialogFoundation.prototype.handleClick = function (evt) {
        var isScrim = this.adapter.eventTargetMatches(evt.target, strings$3.SCRIM_SELECTOR);
        // Check for scrim click first since it doesn't require querying ancestors.
        if (isScrim && this.scrimClickAction !== '') {
            this.close(this.scrimClickAction);
        }
        else {
            var action = this.adapter.getActionFromEvent(evt);
            if (action) {
                this.close(action);
            }
        }
    };
    /** Handles keydown on the dialog root element. */
    MDCDialogFoundation.prototype.handleKeydown = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (!isEnter) {
            return;
        }
        var action = this.adapter.getActionFromEvent(evt);
        if (action) {
            // Action button callback is handled in `handleClick`,
            // since space/enter keydowns on buttons trigger click events.
            return;
        }
        // `composedPath` is used here, when available, to account for use cases
        // where a target meant to suppress the default press behaviour
        // may exist in a shadow root.
        // For example, a textarea inside a web component:
        // <mwc-dialog>
        //   <horizontal-layout>
        //     #shadow-root (open)
        //       <mwc-textarea>
        //         #shadow-root (open)
        //           <textarea></textarea>
        //       </mwc-textarea>
        //   </horizontal-layout>
        // </mwc-dialog>
        var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
        var isDefault = this.suppressDefaultPressSelector ?
            !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) :
            true;
        if (isEnter && isDefault) {
            this.adapter.clickDefaultButton();
        }
    };
    /** Handles keydown on the document. */
    MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscape && this.escapeKeyAction !== '') {
            this.close(this.escapeKeyAction);
        }
    };
    /**
     * Handles scroll event on the dialog's content element -- showing a scroll
     * divider on the header or footer based on the scroll position. This handler
     * should only be registered on full-screen dialogs with scrollable content.
     */
    MDCDialogFoundation.prototype.handleScrollEvent = function () {
        var _this = this;
        // Since scroll events can fire at a high rate, we throttle these events by
        // using requestAnimationFrame.
        this.animFrame.request(AnimationKeys.POLL_SCROLL_POS, function () {
            _this.toggleScrollDividerHeader();
            _this.toggleScrollDividerFooter();
        });
    };
    MDCDialogFoundation.prototype.layoutInternal = function () {
        if (this.autoStackButtons) {
            this.detectStackedButtons();
        }
        this.toggleScrollableClasses();
    };
    MDCDialogFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(cssClasses$3.OPENING);
        this.adapter.removeClass(cssClasses$3.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to
     * factor in Firefox reflow behavior.
     */
    MDCDialogFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDialogFoundation.prototype.detectStackedButtons = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter.removeClass(cssClasses$3.STACKED);
        var areButtonsStacked = this.adapter.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter.addClass(cssClasses$3.STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked) {
            this.adapter.reverseButtons();
            this.areButtonsStacked = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.toggleScrollableClasses = function () {
        // Remove the class first to let us measure the natural height of the
        // content.
        this.adapter.removeClass(cssClasses$3.SCROLLABLE);
        if (this.adapter.isContentScrollable()) {
            this.adapter.addClass(cssClasses$3.SCROLLABLE);
            if (this.isFullscreen) {
                // If dialog is full-screen and scrollable, check if a scroll divider
                // should be shown.
                this.toggleScrollDividerHeader();
                this.toggleScrollDividerFooter();
            }
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerHeader = function () {
        if (!this.adapter.isScrollableContentAtTop()) {
            this.adapter.addClass(cssClasses$3.SCROLL_DIVIDER_HEADER);
        }
        else if (this.adapter.hasClass(cssClasses$3.SCROLL_DIVIDER_HEADER)) {
            this.adapter.removeClass(cssClasses$3.SCROLL_DIVIDER_HEADER);
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerFooter = function () {
        if (!this.adapter.isScrollableContentAtBottom()) {
            this.adapter.addClass(cssClasses$3.SCROLL_DIVIDER_FOOTER);
        }
        else if (this.adapter.hasClass(cssClasses$3.SCROLL_DIVIDER_FOOTER)) {
            this.adapter.removeClass(cssClasses$3.SCROLL_DIVIDER_FOOTER);
        }
    };
    return MDCDialogFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCDialogFoundation$1 = MDCDialogFoundation;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Specifies an observer callback that is run when the decorated property
 * changes. The observer receives the current and old value as arguments.
 */
const observer = (observer) => 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
    // if we haven't wrapped `updated` in this class, do so
    if (!proto.constructor
        ._observers) {
        proto.constructor._observers = new Map();
        const userUpdated = proto.updated;
        proto.updated = function (changedProperties) {
            userUpdated.call(this, changedProperties);
            changedProperties.forEach((v, k) => {
                const observers = this.constructor
                    ._observers;
                const observer = observers.get(k);
                if (observer !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    observer.call(this, this[k], v);
                }
            });
        };
        // clone any existing observers (superclasses)
        // eslint-disable-next-line no-prototype-builtins
    }
    else if (!proto.constructor.hasOwnProperty('_observers')) {
        const observers = proto.constructor._observers;
        proto.constructor._observers = new Map();
        observers.forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (v, k) => proto.constructor._observers.set(k, v));
    }
    // set this method
    proto.constructor._observers.set(propName, observer);
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const blockingElements = document.$blockingElements;
class DialogBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.hideActions = false;
        this.stacked = false;
        this.heading = '';
        this.scrimClickAction = 'close';
        this.escapeKeyAction = 'close';
        this.open = false;
        this.defaultAction = 'close';
        this.actionAttribute = 'dialogAction';
        this.initialFocusAttribute = 'dialogInitialFocus';
        this.initialSupressDefaultPressSelector = '';
        this.mdcFoundationClass = MDCDialogFoundation$1;
        this.boundHandleClick = null;
        this.boundHandleKeydown = null;
        this.boundHandleDocumentKeydown = null;
    }
    set suppressDefaultPressSelector(selector) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setSuppressDefaultPressSelector(selector);
        }
        else {
            this.initialSupressDefaultPressSelector = selector;
        }
    }
    /**
     * @export
     */
    get suppressDefaultPressSelector() {
        return this.mdcFoundation ?
            this.mdcFoundation.getSuppressDefaultPressSelector() :
            this.initialSupressDefaultPressSelector;
    }
    get primaryButton() {
        let assignedNodes = this.primarySlot.assignedNodes();
        assignedNodes = assignedNodes.filter((node) => node instanceof HTMLElement);
        const button = assignedNodes[0];
        return button ? button : null;
    }
    emitNotification(name, action) {
        const init = { detail: action ? { action } : {} };
        const ev = new CustomEvent(name, init);
        this.dispatchEvent(ev);
    }
    getInitialFocusEl() {
        const initFocusSelector = `[${this.initialFocusAttribute}]`;
        // only search light DOM. This typically handles all the cases
        const lightDomQs = this.querySelector(initFocusSelector);
        if (lightDomQs) {
            return lightDomQs;
        }
        // if not in light dom, search each flattened distributed node.
        const primarySlot = this.primarySlot;
        const primaryNodes = primarySlot.assignedNodes({ flatten: true });
        const primaryFocusElement = this.searchNodeTreesForAttribute(primaryNodes, this.initialFocusAttribute);
        if (primaryFocusElement) {
            return primaryFocusElement;
        }
        const secondarySlot = this.secondarySlot;
        const secondaryNodes = secondarySlot.assignedNodes({ flatten: true });
        const secondaryFocusElement = this.searchNodeTreesForAttribute(secondaryNodes, this.initialFocusAttribute);
        if (secondaryFocusElement) {
            return secondaryFocusElement;
        }
        const contentSlot = this.contentSlot;
        const contentNodes = contentSlot.assignedNodes({ flatten: true });
        const initFocusElement = this.searchNodeTreesForAttribute(contentNodes, this.initialFocusAttribute);
        return initFocusElement;
    }
    searchNodeTreesForAttribute(nodes, attribute) {
        for (const node of nodes) {
            if (!(node instanceof HTMLElement)) {
                continue;
            }
            if (node.hasAttribute(attribute)) {
                return node;
            }
            else {
                const selection = node.querySelector(`[${attribute}]`);
                if (selection) {
                    return selection;
                }
            }
        }
        return null;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { addBodyClass: () => document.body.style.overflow = 'hidden', removeBodyClass: () => document.body.style.overflow = '', areButtonsStacked: () => this.stacked, clickDefaultButton: () => {
                const primary = this.primaryButton;
                if (primary) {
                    primary.click();
                }
            }, eventTargetMatches: (target, selector) => target ? matches(target, selector) : false, getActionFromEvent: (e) => {
                if (!e.target) {
                    return '';
                }
                const element = closest(e.target, `[${this.actionAttribute}]`);
                const action = element && element.getAttribute(this.actionAttribute);
                return action;
            }, getInitialFocusEl: () => {
                return this.getInitialFocusEl();
            }, isContentScrollable: () => {
                const el = this.contentElement;
                return el ? el.scrollHeight > el.offsetHeight : false;
            }, notifyClosed: (action) => this.emitNotification('closed', action), notifyClosing: (action) => {
                if (!this.closingDueToDisconnect) {
                    // Don't set our open state to closed just because we were
                    // disconnected. That way if we get reconnected, we'll know to
                    // re-open.
                    this.open = false;
                }
                this.emitNotification('closing', action);
            }, notifyOpened: () => this.emitNotification('opened'), notifyOpening: () => {
                this.open = true;
                this.emitNotification('opening');
            }, reverseButtons: () => { }, releaseFocus: () => {
                blockingElements.remove(this);
            }, trapFocus: (el) => {
                if (!this.isConnected) {
                    // this is the case where it is opened and closed and then removed
                    // from DOM before the animation has completed. Blocking Elements will
                    // throw if this is the case
                    return;
                }
                blockingElements.push(this);
                if (el) {
                    el.focus();
                }
            }, registerContentEventHandler: (evtType, handler) => {
                const el = this.contentElement;
                el.addEventListener(evtType, handler);
            }, deregisterContentEventHandler: (evtType, handler) => {
                const el = this.contentElement;
                el.removeEventListener(evtType, handler);
            }, isScrollableContentAtTop: () => {
                const el = this.contentElement;
                return el ? el.scrollTop === 0 : false;
            }, isScrollableContentAtBottom: () => {
                const el = this.contentElement;
                return el ?
                    Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight :
                    false;
            }, registerWindowEventHandler: (evtType, handler) => {
                window.addEventListener(evtType, handler, applyPassive());
            }, deregisterWindowEventHandler: (evtType, handler) => {
                window.removeEventListener(evtType, handler, applyPassive());
            } });
    }
    render() {
        const classes = {
            [cssClasses$3.STACKED]: this.stacked,
        };
        let heading = x ``;
        if (this.heading) {
            heading = this.renderHeading();
        }
        const actionsClasses = {
            'mdc-dialog__actions': !this.hideActions,
        };
        return x `
    <div class="mdc-dialog ${o$2(classes)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${heading}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${o$2(actionsClasses)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
    }
    renderHeading() {
        return x `
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
    }
    firstUpdated() {
        super.firstUpdated();
        this.mdcFoundation.setAutoStackButtons(true);
        if (this.initialSupressDefaultPressSelector) {
            this.suppressDefaultPressSelector =
                this.initialSupressDefaultPressSelector;
        }
        else {
            this.suppressDefaultPressSelector = [
                this.suppressDefaultPressSelector, 'mwc-textarea',
                'mwc-menu mwc-list-item', 'mwc-select mwc-list-item'
            ].join(', ');
        }
        this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation);
        this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation);
        this.boundHandleDocumentKeydown =
            this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.open && this.mdcFoundation && !this.mdcFoundation.isOpen()) {
            // We probably got disconnected while we were still open. Re-open,
            // matching the behavior of native <dialog>.
            this.setEventListeners();
            this.mdcFoundation.open();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.open && this.mdcFoundation) {
            // If this dialog is opened and then disconnected, we want to close
            // the foundation, so that 1) any pending timers are cancelled
            // (in particular for trapFocus), and 2) if we reconnect, we can open
            // the foundation again to retrigger animations and focus.
            this.removeEventListeners();
            this.closingDueToDisconnect = true;
            this.mdcFoundation.close(this.currentAction || this.defaultAction);
            this.closingDueToDisconnect = false;
            this.currentAction = undefined;
            // When we close normally, the releaseFocus callback handles removing
            // ourselves from the blocking elements stack. However, that callback
            // happens on a delay, and when we are closing due to a disconnect we
            // need to remove ourselves before the blocking element polyfill's
            // mutation observer notices and logs a warning, since it's not valid to
            // be in the blocking elements stack while disconnected.
            blockingElements.remove(this);
        }
    }
    forceLayout() {
        this.mdcFoundation.layout();
    }
    focus() {
        const initialFocusEl = this.getInitialFocusEl();
        initialFocusEl && initialFocusEl.focus();
    }
    blur() {
        if (!this.shadowRoot) {
            return;
        }
        const activeEl = this.shadowRoot.activeElement;
        if (activeEl) {
            if (activeEl instanceof HTMLElement) {
                activeEl.blur();
            }
        }
        else {
            const root = this.getRootNode();
            const activeEl = root instanceof Document ? root.activeElement : null;
            if (activeEl instanceof HTMLElement) {
                activeEl.blur();
            }
        }
    }
    setEventListeners() {
        if (this.boundHandleClick) {
            this.mdcRoot.addEventListener('click', this.boundHandleClick);
        }
        if (this.boundHandleKeydown) {
            this.mdcRoot.addEventListener('keydown', this.boundHandleKeydown, applyPassive());
        }
        if (this.boundHandleDocumentKeydown) {
            document.addEventListener('keydown', this.boundHandleDocumentKeydown, applyPassive());
        }
    }
    removeEventListeners() {
        if (this.boundHandleClick) {
            this.mdcRoot.removeEventListener('click', this.boundHandleClick);
        }
        if (this.boundHandleKeydown) {
            this.mdcRoot.removeEventListener('keydown', this.boundHandleKeydown);
        }
        if (this.boundHandleDocumentKeydown) {
            document.removeEventListener('keydown', this.boundHandleDocumentKeydown);
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    i$2('.mdc-dialog')
], DialogBase.prototype, "mdcRoot", void 0);
__decorate([
    i$2('slot[name="primaryAction"]')
], DialogBase.prototype, "primarySlot", void 0);
__decorate([
    i$2('slot[name="secondaryAction"]')
], DialogBase.prototype, "secondarySlot", void 0);
__decorate([
    i$2('#contentSlot')
], DialogBase.prototype, "contentSlot", void 0);
__decorate([
    i$2('.mdc-dialog__content')
], DialogBase.prototype, "contentElement", void 0);
__decorate([
    i$2('.mdc-container')
], DialogBase.prototype, "conatinerElement", void 0);
__decorate([
    n$3({ type: Boolean })
], DialogBase.prototype, "hideActions", void 0);
__decorate([
    n$3({ type: Boolean }),
    observer(function () {
        this.forceLayout();
    })
], DialogBase.prototype, "stacked", void 0);
__decorate([
    n$3({ type: String })
], DialogBase.prototype, "heading", void 0);
__decorate([
    n$3({ type: String }),
    observer(function (newAction) {
        this.mdcFoundation.setScrimClickAction(newAction);
    })
], DialogBase.prototype, "scrimClickAction", void 0);
__decorate([
    n$3({ type: String }),
    observer(function (newAction) {
        this.mdcFoundation.setEscapeKeyAction(newAction);
    })
], DialogBase.prototype, "escapeKeyAction", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true }),
    observer(function (isOpen) {
        // Check isConnected because we could have been disconnected before first
        // update. If we're now closed, then we shouldn't start the MDC foundation
        // opening animation. If we're now closed, then we've already closed the
        // foundation in disconnectedCallback.
        if (this.mdcFoundation && this.isConnected) {
            if (isOpen) {
                this.setEventListeners();
                this.mdcFoundation.open();
            }
            else {
                this.removeEventListeners();
                this.mdcFoundation.close(this.currentAction || this.defaultAction);
                this.currentAction = undefined;
            }
        }
    })
], DialogBase.prototype, "open", void 0);
__decorate([
    n$3()
], DialogBase.prototype, "defaultAction", void 0);
__decorate([
    n$3()
], DialogBase.prototype, "actionAttribute", void 0);
__decorate([
    n$3()
], DialogBase.prototype, "initialFocusAttribute", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$6 = i$5 `.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Dialog = class Dialog extends DialogBase {
};
Dialog.styles = [styles$6];
Dialog = __decorate([
    e$6('mwc-dialog')
], Dialog);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$2 = {
    ROOT: 'mdc-form-field',
};
var strings$2 = {
    LABEL_SELECTOR: '.mdc-form-field > label',
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFormFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCFormFieldFoundation, _super);
    function MDCFormFieldFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCFormFieldFoundation.defaultAdapter), adapter)) || this;
        _this.click = function () {
            _this.handleClick();
        };
        return _this;
    }
    Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
        get: function () {
            return {
                activateInputRipple: function () { return undefined; },
                deactivateInputRipple: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCFormFieldFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.handleClick = function () {
        var _this = this;
        this.adapter.activateInputRipple();
        requestAnimationFrame(function () {
            _this.adapter.deactivateInputRipple();
        });
    };
    return MDCFormFieldFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCFormFieldFoundation$1 = MDCFormFieldFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$1, _b$1;
// ShadyDOM should submit <input> elements in component internals
const USING_SHADY_DOM = (_b$1 = (_a$1 = window.ShadyDOM) === null || _a$1 === void 0 ? void 0 : _a$1.inUse) !== null && _b$1 !== void 0 ? _b$1 : false;
/** @soyCompatible */
class FormElement extends BaseElement {
    constructor() {
        super(...arguments);
        /**
         * Disabled state for the component. When `disabled` is set to `true`, the
         * component will not be added to form submission.
         */
        this.disabled = false;
        /**
         * Form element that contains this element
         */
        this.containingForm = null;
        this.formDataListener = (ev) => {
            if (!this.disabled) {
                this.setFormData(ev.formData);
            }
        };
    }
    findFormElement() {
        // If the component internals are not in Shadow DOM, subscribing to form
        // data events could lead to duplicated data, which may not work correctly
        // on the server side.
        if (!this.shadowRoot || USING_SHADY_DOM) {
            return null;
        }
        const root = this.getRootNode();
        const forms = root.querySelectorAll('form');
        for (const form of Array.from(forms)) {
            if (form.contains(this)) {
                return form;
            }
        }
        return null;
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.containingForm = this.findFormElement();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.addEventListener('formdata', this.formDataListener);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
        this.containingForm = null;
    }
    click() {
        if (this.formElement && !this.disabled) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    firstUpdated() {
        super.firstUpdated();
        if (this.shadowRoot) {
            this.mdcRoot.addEventListener('change', (e) => {
                this.dispatchEvent(new Event('change', e));
            });
        }
    }
}
FormElement.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    n$3({ type: Boolean })
], FormElement.prototype, "disabled", void 0);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class FormfieldBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.alignEnd = false;
        this.spaceBetween = false;
        this.nowrap = false;
        this.label = '';
        this.mdcFoundationClass = MDCFormFieldFoundation$1;
    }
    createAdapter() {
        return {
            registerInteractionHandler: (type, handler) => {
                this.labelEl.addEventListener(type, handler);
            },
            deregisterInteractionHandler: (type, handler) => {
                this.labelEl.removeEventListener(type, handler);
            },
            activateInputRipple: async () => {
                const input = this.input;
                if (input instanceof FormElement) {
                    const ripple = await input.ripple;
                    if (ripple) {
                        ripple.startPress();
                    }
                }
            },
            deactivateInputRipple: async () => {
                const input = this.input;
                if (input instanceof FormElement) {
                    const ripple = await input.ripple;
                    if (ripple) {
                        ripple.endPress();
                    }
                }
            },
        };
    }
    get input() {
        var _a, _b;
        return (_b = (_a = this.slottedInputs) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    render() {
        const classes = {
            'mdc-form-field--align-end': this.alignEnd,
            'mdc-form-field--space-between': this.spaceBetween,
            'mdc-form-field--nowrap': this.nowrap
        };
        return x `
      <div class="mdc-form-field ${o$2(classes)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
    }
    click() {
        this._labelClick();
    }
    _labelClick() {
        const input = this.input;
        if (input) {
            input.focus();
            input.click();
        }
    }
}
__decorate([
    n$3({ type: Boolean })
], FormfieldBase.prototype, "alignEnd", void 0);
__decorate([
    n$3({ type: Boolean })
], FormfieldBase.prototype, "spaceBetween", void 0);
__decorate([
    n$3({ type: Boolean })
], FormfieldBase.prototype, "nowrap", void 0);
__decorate([
    n$3({ type: String }),
    observer(async function (label) {
        var _a;
        (_a = this.input) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-label', label);
    })
], FormfieldBase.prototype, "label", void 0);
__decorate([
    i$2('.mdc-form-field')
], FormfieldBase.prototype, "mdcRoot", void 0);
__decorate([
    o$3('', true, '*')
], FormfieldBase.prototype, "slottedInputs", void 0);
__decorate([
    i$2('label')
], FormfieldBase.prototype, "labelEl", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$5 = i$5 `.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Formfield = class Formfield extends FormfieldBase {
};
Formfield.styles = [styles$5];
Formfield = __decorate([
    e$6('mwc-formfield')
], Formfield);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$4 = i$5 `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class IconButtonToggleBase extends s$1 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.onIcon = '';
        this.offIcon = '';
        this.on = false;
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    handleClick() {
        this.on = !this.on;
        this.dispatchEvent(new CustomEvent('icon-button-toggle-change', { detail: { isOn: this.on }, bubbles: true }));
    }
    click() {
        this.mdcRoot.focus();
        this.mdcRoot.click();
    }
    focus() {
        this.rippleHandlers.startFocus();
        this.mdcRoot.focus();
    }
    blur() {
        this.rippleHandlers.endFocus();
        this.mdcRoot.blur();
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? x `
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` :
            '';
    }
    /** @soyTemplate */
    render() {
        /** @classMap */
        const classes = {
            'mdc-icon-button--on': this.on,
        };
        const hasToggledAriaLabel = this.ariaLabelOn !== undefined && this.ariaLabelOff !== undefined;
        const ariaPressedValue = hasToggledAriaLabel ? undefined : this.on;
        const ariaLabelValue = hasToggledAriaLabel ?
            (this.on ? this.ariaLabelOn : this.ariaLabelOff) :
            this.ariaLabel;
        return x `<button
          class="mdc-icon-button mdc-icon-button--display-flex ${o$2(classes)}"
          aria-pressed="${l$1(ariaPressedValue)}"
          aria-label="${l$1(ariaLabelValue)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`;
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
__decorate([
    i$2('.mdc-icon-button')
], IconButtonToggleBase.prototype, "mdcRoot", void 0);
__decorate([
    ariaProperty,
    n$3({ type: String, attribute: 'aria-label' })
], IconButtonToggleBase.prototype, "ariaLabel", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], IconButtonToggleBase.prototype, "disabled", void 0);
__decorate([
    n$3({ type: String })
], IconButtonToggleBase.prototype, "onIcon", void 0);
__decorate([
    n$3({ type: String })
], IconButtonToggleBase.prototype, "offIcon", void 0);
__decorate([
    n$3({ type: String })
], IconButtonToggleBase.prototype, "ariaLabelOn", void 0);
__decorate([
    n$3({ type: String })
], IconButtonToggleBase.prototype, "ariaLabelOff", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], IconButtonToggleBase.prototype, "on", void 0);
__decorate([
    e$3('mwc-ripple')
], IconButtonToggleBase.prototype, "ripple", void 0);
__decorate([
    t$1()
], IconButtonToggleBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$4({ passive: true })
], IconButtonToggleBase.prototype, "handleRippleMouseDown", null);
__decorate([
    e$4({ passive: true })
], IconButtonToggleBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let IconButtonToggle = class IconButtonToggle extends IconButtonToggleBase {
};
IconButtonToggle.styles = [styles$4];
IconButtonToggle = __decorate([
    e$6('mwc-icon-button-toggle')
], IconButtonToggle);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires request-selected {RequestSelectedDetail}
 * @fires list-item-rendered
 */
class ListItemBase extends s$1 {
    constructor() {
        super(...arguments);
        this.value = '';
        this.group = null;
        this.tabindex = -1;
        this.disabled = false;
        this.twoline = false;
        this.activated = false;
        this.graphic = null;
        this.multipleGraphics = false;
        this.hasMeta = false;
        this.noninteractive = false;
        this.selected = false;
        this.shouldRenderRipple = false;
        this._managingList = null;
        this.boundOnClick = this.onClick.bind(this);
        this._firstChanged = true;
        this._skipPropRequest = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
        this.listeners = [
            {
                target: this,
                eventNames: ['click'],
                cb: () => {
                    this.onClick();
                },
            },
            {
                target: this,
                eventNames: ['mouseenter'],
                cb: this.rippleHandlers.startHover,
            },
            {
                target: this,
                eventNames: ['mouseleave'],
                cb: this.rippleHandlers.endHover,
            },
            {
                target: this,
                eventNames: ['focus'],
                cb: this.rippleHandlers.startFocus,
            },
            {
                target: this,
                eventNames: ['blur'],
                cb: this.rippleHandlers.endFocus,
            },
            {
                target: this,
                eventNames: ['mousedown', 'touchstart'],
                cb: (e) => {
                    const name = e.type;
                    this.onDown(name === 'mousedown' ? 'mouseup' : 'touchend', e);
                },
            },
        ];
    }
    get text() {
        const textContent = this.textContent;
        return textContent ? textContent.trim() : '';
    }
    render() {
        const text = this.renderText();
        const graphic = this.graphic ? this.renderGraphic() : x ``;
        const meta = this.hasMeta ? this.renderMeta() : x ``;
        return x `
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
    }
    renderRipple() {
        if (this.shouldRenderRipple) {
            return x `
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
        }
        else if (this.activated) {
            return x `<div class="fake-activated-ripple"></div>`;
        }
        else {
            return '';
        }
    }
    renderGraphic() {
        const graphicClasses = {
            multi: this.multipleGraphics,
        };
        return x `
      <span class="mdc-deprecated-list-item__graphic material-icons ${o$2(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
    }
    renderMeta() {
        return x `
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
    }
    renderText() {
        const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
        return x `
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
    }
    renderSingleLine() {
        return x `<slot></slot>`;
    }
    renderTwoline() {
        return x `
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
    }
    onClick() {
        this.fireRequestSelected(!this.selected, 'interaction');
    }
    onDown(upName, evt) {
        const onUp = () => {
            window.removeEventListener(upName, onUp);
            this.rippleHandlers.endPress();
        };
        window.addEventListener(upName, onUp);
        this.rippleHandlers.startPress(evt);
    }
    fireRequestSelected(selected, source) {
        if (this.noninteractive) {
            return;
        }
        const customEv = new CustomEvent('request-selected', { bubbles: true, composed: true, detail: { source, selected } });
        this.dispatchEvent(customEv);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.noninteractive) {
            this.setAttribute('mwc-list-item', '');
        }
        for (const listener of this.listeners) {
            for (const eventName of listener.eventNames) {
                listener.target.addEventListener(eventName, listener.cb, { passive: true });
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners) {
            for (const eventName of listener.eventNames) {
                listener.target.removeEventListener(eventName, listener.cb);
            }
        }
        if (this._managingList) {
            this._managingList.debouncedLayout ?
                this._managingList.debouncedLayout(true) :
                this._managingList.layout(true);
        }
    }
    // composed flag, event fire through shadow root and up through composed tree
    firstUpdated() {
        const ev = new Event('list-item-rendered', { bubbles: true, composed: true });
        this.dispatchEvent(ev);
    }
}
__decorate([
    i$2('slot')
], ListItemBase.prototype, "slotElement", void 0);
__decorate([
    e$3('mwc-ripple')
], ListItemBase.prototype, "ripple", void 0);
__decorate([
    n$3({ type: String })
], ListItemBase.prototype, "value", void 0);
__decorate([
    n$3({ type: String, reflect: true })
], ListItemBase.prototype, "group", void 0);
__decorate([
    n$3({ type: Number, reflect: true })
], ListItemBase.prototype, "tabindex", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (value) {
            this.setAttribute('aria-disabled', 'true');
        }
        else {
            this.setAttribute('aria-disabled', 'false');
        }
    })
], ListItemBase.prototype, "disabled", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], ListItemBase.prototype, "twoline", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], ListItemBase.prototype, "activated", void 0);
__decorate([
    n$3({ type: String, reflect: true })
], ListItemBase.prototype, "graphic", void 0);
__decorate([
    n$3({ type: Boolean })
], ListItemBase.prototype, "multipleGraphics", void 0);
__decorate([
    n$3({ type: Boolean })
], ListItemBase.prototype, "hasMeta", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (value) {
            this.removeAttribute('aria-checked');
            this.removeAttribute('mwc-list-item');
            this.selected = false;
            this.activated = false;
            this.tabIndex = -1;
        }
        else {
            this.setAttribute('mwc-list-item', '');
        }
    })
], ListItemBase.prototype, "noninteractive", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true }),
    observer(function (value) {
        const role = this.getAttribute('role');
        const isAriaSelectable = role === 'gridcell' || role === 'option' ||
            role === 'row' || role === 'tab';
        if (isAriaSelectable && value) {
            this.setAttribute('aria-selected', 'true');
        }
        else if (isAriaSelectable) {
            this.setAttribute('aria-selected', 'false');
        }
        if (this._firstChanged) {
            this._firstChanged = false;
            return;
        }
        if (this._skipPropRequest) {
            return;
        }
        this.fireRequestSelected(value, 'property');
    })
], ListItemBase.prototype, "selected", void 0);
__decorate([
    t$1()
], ListItemBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    t$1()
], ListItemBase.prototype, "_managingList", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$3 = i$5 `:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ListItem = class ListItem extends ListItemBase {
};
ListItem.styles = [styles$3];
ListItem = __decorate([
    e$6('mwc-list-item')
], ListItem);

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * KEY provides normalized string values for keys.
 */
var KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab',
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9,
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return KEY.UNKNOWN;
}

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a, _b;
var cssClasses$1 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list',
};
(_a = {},
    _a["" + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
    _a["" + cssClasses$1.LIST_ITEM_CLASS] = 'mdc-list-item',
    _a["" + cssClasses$1.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
    _a["" + cssClasses$1.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
    _a["" + cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
    _a["" + cssClasses$1.ROOT] = 'mdc-list',
    _a);
var deprecatedClassNameMap = (_b = {},
    _b["" + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
    _b["" + cssClasses$1.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
    _b["" + cssClasses$1.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
    _b["" + cssClasses$1.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
    _b["" + cssClasses$1.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
    _b["" + cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
    _b["" + cssClasses$1.ROOT] = 'mdc-deprecated-list',
    _b);
var strings$1 = {
    ACTION_EVENT: 'MDCList:action',
    SELECTION_CHANGE_EVENT: 'MDCList:selectionChange',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
};
var numbers$1 = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const integerSort = (a, b) => {
    return a - b;
};
const findIndexDiff = (oldSet, newSet) => {
    const oldArr = Array.from(oldSet);
    const newArr = Array.from(newSet);
    const diff = { added: [], removed: [] };
    const oldSorted = oldArr.sort(integerSort);
    const newSorted = newArr.sort(integerSort);
    let i = 0;
    let j = 0;
    while (i < oldSorted.length || j < newSorted.length) {
        const oldVal = oldSorted[i];
        const newVal = newSorted[j];
        if (oldVal === newVal) {
            i++;
            j++;
            continue;
        }
        if (oldVal !== undefined && (newVal === undefined || oldVal < newVal)) {
            diff.removed.push(oldVal);
            i++;
            continue;
        }
        if (newVal !== undefined && (oldVal === undefined || newVal < oldVal)) {
            diff.added.push(newVal);
            j++;
            continue;
        }
    }
    return diff;
};
const ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isIndexSet(selectedIndex) {
    return selectedIndex instanceof Set;
}
const createSetFromIndex = (index) => {
    const entry = index === numbers$1.UNSET_INDEX ? new Set() : index;
    return isIndexSet(entry) ? new Set(entry) : new Set([entry]);
};
class MDCListFoundation extends MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
        this.isMulti_ = false;
        this.wrapFocus_ = false;
        this.isVertical_ = true;
        this.selectedIndex_ = numbers$1.UNSET_INDEX;
        this.focusedItemIndex_ = numbers$1.UNSET_INDEX;
        this.useActivatedClass_ = false;
        this.ariaCurrentAttrValue_ = null;
    }
    static get strings() {
        return strings$1;
    }
    static get numbers() {
        return numbers$1;
    }
    static get defaultAdapter() {
        return {
            focusItemAtIndex: () => undefined,
            getFocusedElementIndex: () => 0,
            getListItemCount: () => 0,
            isFocusInsideList: () => false,
            isRootFocused: () => false,
            notifyAction: () => undefined,
            notifySelected: () => undefined,
            getSelectedStateForElementIndex: () => false,
            setDisabledStateForElementIndex: () => undefined,
            getDisabledStateForElementIndex: () => false,
            setSelectedStateForElementIndex: () => undefined,
            setActivatedStateForElementIndex: () => undefined,
            setTabIndexForElementIndex: () => undefined,
            setAttributeForElementIndex: () => undefined,
            getAttributeForElementIndex: () => null,
        };
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setWrapFocus(value) {
        this.wrapFocus_ = value;
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setMulti(value) {
        this.isMulti_ = value;
        const currentIndex = this.selectedIndex_;
        if (value) {
            // number to set
            if (!isIndexSet(currentIndex)) {
                const isUnset = currentIndex === numbers$1.UNSET_INDEX;
                this.selectedIndex_ = isUnset ? new Set() : new Set([currentIndex]);
            }
        }
        else {
            // set to first sorted number in set
            if (isIndexSet(currentIndex)) {
                if (currentIndex.size) {
                    const vals = Array.from(currentIndex).sort(integerSort);
                    this.selectedIndex_ = vals[0];
                }
                else {
                    this.selectedIndex_ = numbers$1.UNSET_INDEX;
                }
            }
        }
    }
    /**
     * Sets the isVertical_ private variable.
     */
    setVerticalOrientation(value) {
        this.isVertical_ = value;
    }
    /**
     * Sets the useActivatedClass_ private variable.
     */
    setUseActivatedClass(useActivated) {
        this.useActivatedClass_ = useActivated;
    }
    getSelectedIndex() {
        return this.selectedIndex_;
    }
    setSelectedIndex(index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isMulti_) {
            this.setMultiSelectionAtIndex_(createSetFromIndex(index));
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    }
    /**
     * Focus in handler for the list items.
     */
    handleFocusIn(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
        }
    }
    /**
     * Focus out handler for the list items.
     */
    handleFocusOut(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */
        setTimeout(() => {
            if (!this.adapter.isFocusInsideList()) {
                this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    }
    /**
     * Key handler for the list.
     */
    handleKeydown(event, isRootListItem, listItemIndex) {
        const isArrowLeft = normalizeKey(event) === 'ArrowLeft';
        const isArrowUp = normalizeKey(event) === 'ArrowUp';
        const isArrowRight = normalizeKey(event) === 'ArrowRight';
        const isArrowDown = normalizeKey(event) === 'ArrowDown';
        const isHome = normalizeKey(event) === 'Home';
        const isEnd = normalizeKey(event) === 'End';
        const isEnter = normalizeKey(event) === 'Enter';
        const isSpace = normalizeKey(event) === 'Spacebar';
        if (this.adapter.isRootFocused()) {
            if (isArrowUp || isEnd) {
                event.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                event.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        let currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-deprecated-list-item ancestor from
                // the current list (not from a sublist), return early.
                return;
            }
        }
        let nextIndex;
        if ((this.isVertical_ && isArrowDown) ||
            (!this.isVertical_ && isArrowRight)) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                const target = event.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent(event);
                this.setSelectedIndexOnAction_(currentIndex, true);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    }
    /**
     * Click handler for the list.
     */
    handleSingleSelection(index, isInteraction, force) {
        if (index === numbers$1.UNSET_INDEX) {
            return;
        }
        this.setSelectedIndexOnAction_(index, isInteraction, force);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    }
    /**
     * Focuses the next element on the list.
     */
    focusNextElement(index) {
        const count = this.adapter.getListItemCount();
        let nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter.focusItemAtIndex(nextIndex);
        return nextIndex;
    }
    /**
     * Focuses the previous element on the list.
     */
    focusPrevElement(index) {
        let prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter.focusItemAtIndex(prevIndex);
        return prevIndex;
    }
    focusFirstElement() {
        this.adapter.focusItemAtIndex(0);
        return 0;
    }
    focusLastElement() {
        const lastIndex = this.adapter.getListItemCount() - 1;
        this.adapter.focusItemAtIndex(lastIndex);
        return lastIndex;
    }
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    setEnabled(itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
    }
    /**
     * Ensures that preventDefault is only called if the containing element
     * doesn't consume the event, and it will cause an unintended scroll.
     */
    preventDefaultEvent(evt) {
        const target = evt.target;
        const tagName = `${target.tagName}`.toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    }
    setSingleSelectionAtIndex_(index, isInteraction = true) {
        if (this.selectedIndex_ === index) {
            return;
        }
        // unset previous
        if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
            this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
            }
        }
        // set new
        if (isInteraction) {
            this.adapter.setSelectedStateForElementIndex(index, true);
        }
        if (this.useActivatedClass_) {
            this.adapter.setActivatedStateForElementIndex(index, true);
        }
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
        this.adapter.notifySelected(index);
    }
    setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
        const oldIndex = createSetFromIndex(this.selectedIndex_);
        const diff = findIndexDiff(oldIndex, newIndex);
        if (!diff.removed.length && !diff.added.length) {
            return;
        }
        for (const removed of diff.removed) {
            if (isInteraction) {
                this.adapter.setSelectedStateForElementIndex(removed, false);
            }
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(removed, false);
            }
        }
        for (const added of diff.added) {
            if (isInteraction) {
                this.adapter.setSelectedStateForElementIndex(added, true);
            }
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(added, true);
            }
        }
        this.selectedIndex_ = newIndex;
        this.adapter.notifySelected(newIndex, diff);
    }
    /**
     * Sets aria attribute for single selection at given index.
     */
    setAriaForSingleSelectionAtIndex_(index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex_ === numbers$1.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter.getAttributeForElementIndex(index, strings$1.ARIA_CURRENT);
        }
        const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        const ariaAttribute = isAriaCurrent ? strings$1.ARIA_CURRENT : strings$1.ARIA_SELECTED;
        if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
    setTabindexAtIndex_(index) {
        if (this.focusedItemIndex_ === numbers$1.UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no
            // preselected items.
            this.adapter.setTabIndexForElementIndex(0, -1);
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
        }
        this.adapter.setTabIndexForElementIndex(index, 0);
    }
    setTabindexToFirstSelectedItem_() {
        let targetIndex = 0;
        if (typeof this.selectedIndex_ === 'number' &&
            this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
            targetIndex = this.selectedIndex_;
        }
        else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
            targetIndex = Math.min(...this.selectedIndex_);
        }
        this.setTabindexAtIndex_(targetIndex);
    }
    isIndexValid_(index) {
        if (index instanceof Set) {
            if (!this.isMulti_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.size === 0) {
                return true;
            }
            else {
                let isOneInRange = false;
                for (const entry of index) {
                    isOneInRange = this.isIndexInRange_(entry);
                    if (isOneInRange) {
                        break;
                    }
                }
                return isOneInRange;
            }
        }
        else if (typeof index === 'number') {
            if (this.isMulti_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' +
                    index);
            }
            return index === numbers$1.UNSET_INDEX || this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    }
    isIndexInRange_(index) {
        const listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    }
    /**
     * Sets selected index on user action, toggles checkbox / radio based on
     * toggleCheckbox value. User interaction should not toggle list item(s) when
     * disabled.
     */
    setSelectedIndexOnAction_(index, isInteraction, force) {
        if (this.adapter.getDisabledStateForElementIndex(index)) {
            return;
        }
        let checkedIndex = index;
        if (this.isMulti_) {
            checkedIndex = new Set([index]);
        }
        if (!this.isIndexValid_(checkedIndex)) {
            return;
        }
        if (this.isMulti_) {
            this.toggleMultiAtIndex(index, force, isInteraction);
        }
        else {
            if (isInteraction || force) {
                this.setSingleSelectionAtIndex_(index, isInteraction);
            }
            else {
                const isDeselection = this.selectedIndex_ === index;
                if (isDeselection) {
                    this.setSingleSelectionAtIndex_(numbers$1.UNSET_INDEX);
                }
            }
        }
        if (isInteraction) {
            this.adapter.notifyAction(index);
        }
    }
    toggleMultiAtIndex(index, force, isInteraction = true) {
        let newSelectionValue = false;
        if (force === undefined) {
            newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
        }
        else {
            newSelectionValue = force;
        }
        const newSet = createSetFromIndex(this.selectedIndex_);
        if (newSelectionValue) {
            newSet.add(index);
        }
        else {
            newSet.delete(index);
        }
        this.setMultiSelectionAtIndex_(newSet, isInteraction);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function debounceLayout(callback, waitInMS = 50) {
    let timeoutId;
    // tslint:disable-next-line
    return function (updateItems = true) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(updateItems);
        }, waitInMS);
    };
}
const isListItem = (element) => {
    return element.hasAttribute('mwc-list-item');
};
function clearAndCreateItemsReadyPromise() {
    const oldResolver = this.itemsReadyResolver;
    this.itemsReady = new Promise((res) => {
        // TODO(b/175626389): Type '(value: never[] | PromiseLike<never[]>) => void'
        // is not assignable to type '(value?: never[] | PromiseLike<never[]> |
        // undefined) => void'.
        return this.itemsReadyResolver = res;
    });
    oldResolver();
}
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 */
class ListBase extends BaseElement {
    constructor() {
        super();
        this.mdcAdapter = null;
        this.mdcFoundationClass = MDCListFoundation;
        this.activatable = false;
        this.multi = false;
        this.wrapFocus = false;
        this.itemRoles = null;
        this.innerRole = null;
        this.innerAriaLabel = null;
        this.rootTabbable = false;
        this.previousTabindex = null;
        this.noninteractive = false;
        this.itemsReadyResolver = (() => {
            //
        });
        this.itemsReady = Promise.resolve([]);
        // tslint:enable:ban-ts-ignore
        this.items_ = [];
        const debouncedFunction = debounceLayout(this.layout.bind(this));
        this.debouncedLayout = (updateItems = true) => {
            clearAndCreateItemsReadyPromise.call(this);
            debouncedFunction(updateItems);
        };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        // @ts-ignore
        const result = await super.getUpdateComplete();
        await this.itemsReady;
        return result;
    }
    get items() {
        return this.items_;
    }
    updateItems() {
        var _a;
        const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
        const listItems = [];
        for (const node of nodes) {
            if (isListItem(node)) {
                listItems.push(node);
                node._managingList = this;
            }
            if (node.hasAttribute('divider') && !node.hasAttribute('role')) {
                node.setAttribute('role', 'separator');
            }
        }
        this.items_ = listItems;
        const selectedIndices = new Set();
        this.items_.forEach((item, index) => {
            if (this.itemRoles) {
                item.setAttribute('role', this.itemRoles);
            }
            else {
                item.removeAttribute('role');
            }
            if (item.selected) {
                selectedIndices.add(index);
            }
        });
        if (this.multi) {
            this.select(selectedIndices);
        }
        else {
            const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
            this.select(index);
        }
        const itemsUpdatedEv = new Event('items-updated', { bubbles: true, composed: true });
        this.dispatchEvent(itemsUpdatedEv);
    }
    get selected() {
        const index = this.index;
        if (!isIndexSet(index)) {
            if (index === -1) {
                return null;
            }
            return this.items[index];
        }
        const selected = [];
        for (const entry of index) {
            selected.push(this.items[entry]);
        }
        return selected;
    }
    get index() {
        if (this.mdcFoundation) {
            return this.mdcFoundation.getSelectedIndex();
        }
        return -1;
    }
    render() {
        const role = this.innerRole === null ? undefined : this.innerRole;
        const ariaLabel = this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
        const tabindex = this.rootTabbable ? '0' : '-1';
        return x `
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l$1(role)}"
          aria-label="${l$1(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
    }
    renderPlaceholder() {
        var _a;
        const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
        if (this.emptyMessage !== undefined && nodes.length === 0) {
            return x `
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
        }
        return null;
    }
    firstUpdated() {
        super.firstUpdated();
        if (!this.items.length) {
            // required because this is called before observers
            this.mdcFoundation.setMulti(this.multi);
            // for when children upgrade before list
            this.layout();
        }
    }
    onFocusIn(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusIn(evt, index);
        }
    }
    onFocusOut(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusOut(evt, index);
        }
    }
    onKeydown(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            const target = evt.target;
            const isRootListItem = isListItem(target);
            this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
        }
    }
    onRequestSelected(evt) {
        if (this.mdcFoundation) {
            let index = this.getIndexOfTarget(evt);
            // might happen in shady dom slowness. Recalc children
            if (index === -1) {
                this.layout();
                index = this.getIndexOfTarget(evt);
                // still not found; may not be mwc-list-item. Unsupported case.
                if (index === -1) {
                    return;
                }
            }
            const element = this.items[index];
            if (element.disabled) {
                return;
            }
            const selected = evt.detail.selected;
            const source = evt.detail.source;
            this.mdcFoundation.handleSingleSelection(index, source === 'interaction', selected);
            evt.stopPropagation();
        }
    }
    getIndexOfTarget(evt) {
        const elements = this.items;
        const path = evt.composedPath();
        for (const pathItem of path) {
            let index = -1;
            if (isNodeElement(pathItem) && isListItem(pathItem)) {
                index = elements.indexOf(pathItem);
            }
            if (index !== -1) {
                return index;
            }
        }
        return -1;
    }
    createAdapter() {
        this.mdcAdapter = {
            getListItemCount: () => {
                if (this.mdcRoot) {
                    return this.items.length;
                }
                return 0;
            },
            getFocusedElementIndex: this.getFocusedItemIndex,
            getAttributeForElementIndex: (index, attr) => {
                const listElement = this.mdcRoot;
                if (!listElement) {
                    return '';
                }
                const element = this.items[index];
                return element ? element.getAttribute(attr) : '';
            },
            setAttributeForElementIndex: (index, attr, val) => {
                if (!this.mdcRoot) {
                    return;
                }
                const element = this.items[index];
                if (element) {
                    element.setAttribute(attr, val);
                }
            },
            focusItemAtIndex: (index) => {
                const element = this.items[index];
                if (element) {
                    element.focus();
                }
            },
            setTabIndexForElementIndex: (index, value) => {
                const item = this.items[index];
                if (item) {
                    item.tabindex = value;
                }
            },
            notifyAction: (index) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index };
                const ev = new CustomEvent('action', init);
                this.dispatchEvent(ev);
            },
            notifySelected: (index, diff) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index, diff };
                const ev = new CustomEvent('selected', init);
                this.dispatchEvent(ev);
            },
            isFocusInsideList: () => {
                return doesElementContainFocus(this);
            },
            isRootFocused: () => {
                const mdcRoot = this.mdcRoot;
                const root = mdcRoot.getRootNode();
                return root.activeElement === mdcRoot;
            },
            setDisabledStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.disabled = value;
            },
            getDisabledStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.disabled;
            },
            setSelectedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.selected = value;
            },
            getSelectedStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.selected;
            },
            setActivatedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.activated = value;
            },
        };
        return this.mdcAdapter;
    }
    selectUi(index, activate = false) {
        const item = this.items[index];
        if (item) {
            item.selected = true;
            item.activated = activate;
        }
    }
    deselectUi(index) {
        const item = this.items[index];
        if (item) {
            item.selected = false;
            item.activated = false;
        }
    }
    select(index) {
        if (!this.mdcFoundation) {
            return;
        }
        this.mdcFoundation.setSelectedIndex(index);
    }
    toggle(index, force) {
        if (this.multi) {
            this.mdcFoundation.toggleMultiAtIndex(index, force);
        }
    }
    onListItemConnected(e) {
        const target = e.target;
        this.layout(this.items.indexOf(target) === -1);
    }
    layout(updateItems = true) {
        if (updateItems) {
            this.updateItems();
        }
        const first = this.items[0];
        for (const item of this.items) {
            item.tabindex = -1;
        }
        if (first) {
            if (this.noninteractive) {
                if (!this.previousTabindex) {
                    this.previousTabindex = first;
                }
            }
            else {
                first.tabindex = 0;
            }
        }
        this.itemsReadyResolver();
    }
    getFocusedItemIndex() {
        if (!this.mdcRoot) {
            return -1;
        }
        if (!this.items.length) {
            return -1;
        }
        const activeElementPath = deepActiveElementPath();
        if (!activeElementPath.length) {
            return -1;
        }
        for (let i = activeElementPath.length - 1; i >= 0; i--) {
            const activeItem = activeElementPath[i];
            if (isListItem(activeItem)) {
                return this.items.indexOf(activeItem);
            }
        }
        return -1;
    }
    focusItemAtIndex(index) {
        for (const item of this.items) {
            if (item.tabindex === 0) {
                item.tabindex = -1;
                break;
            }
        }
        this.items[index].tabindex = 0;
        this.items[index].focus();
    }
    focus() {
        const root = this.mdcRoot;
        if (root) {
            root.focus();
        }
    }
    blur() {
        const root = this.mdcRoot;
        if (root) {
            root.blur();
        }
    }
}
__decorate([
    n$3({ type: String })
], ListBase.prototype, "emptyMessage", void 0);
__decorate([
    i$2('.mdc-deprecated-list')
], ListBase.prototype, "mdcRoot", void 0);
__decorate([
    o$3('', true, '*')
], ListBase.prototype, "assignedElements", void 0);
__decorate([
    o$3('', true, '[tabindex="0"]')
], ListBase.prototype, "tabbableElements", void 0);
__decorate([
    n$3({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setUseActivatedClass(value);
        }
    })
], ListBase.prototype, "activatable", void 0);
__decorate([
    n$3({ type: Boolean }),
    observer(function (newValue, oldValue) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setMulti(newValue);
        }
        if (oldValue !== undefined) {
            this.layout();
        }
    })
], ListBase.prototype, "multi", void 0);
__decorate([
    n$3({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setWrapFocus(value);
        }
    })
], ListBase.prototype, "wrapFocus", void 0);
__decorate([
    n$3({ type: String }),
    observer(function (_newValue, oldValue) {
        if (oldValue !== undefined) {
            this.updateItems();
        }
    })
], ListBase.prototype, "itemRoles", void 0);
__decorate([
    n$3({ type: String })
], ListBase.prototype, "innerRole", void 0);
__decorate([
    n$3({ type: String })
], ListBase.prototype, "innerAriaLabel", void 0);
__decorate([
    n$3({ type: Boolean })
], ListBase.prototype, "rootTabbable", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true }),
    observer(function (value) {
        var _a, _b;
        if (value) {
            const tabbable = (_b = (_a = this.tabbableElements) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
            this.previousTabindex = tabbable;
            if (tabbable) {
                tabbable.setAttribute('tabindex', '-1');
            }
        }
        else if (!value && this.previousTabindex) {
            this.previousTabindex.setAttribute('tabindex', '0');
            this.previousTabindex = null;
        }
    })
], ListBase.prototype, "noninteractive", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$2 = i$5 `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let List = class List extends ListBase {
};
List.styles = [styles$2];
List = __decorate([
    e$6('mwc-list')
], List);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    CLOSING: 'mdc-snackbar--closing',
    OPEN: 'mdc-snackbar--open',
    OPENING: 'mdc-snackbar--opening',
};
var strings = {
    ACTION_SELECTOR: '.mdc-snackbar__action',
    ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
    CLOSED_EVENT: 'MDCSnackbar:closed',
    CLOSING_EVENT: 'MDCSnackbar:closing',
    DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
    LABEL_SELECTOR: '.mdc-snackbar__label',
    OPENED_EVENT: 'MDCSnackbar:opened',
    OPENING_EVENT: 'MDCSnackbar:opening',
    REASON_ACTION: 'action',
    REASON_DISMISS: 'dismiss',
    SURFACE_SELECTOR: '.mdc-snackbar__surface',
};
var numbers = {
    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
    INDETERMINATE: -1,
    MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
    MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
    // These variables need to be kept in sync with the values in _variables.scss.
    SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
    SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
    /**
     * Number of milliseconds to wait between temporarily clearing the label text
     * in the DOM and subsequently restoring it. This is necessary to force IE 11
     * to pick up the `aria-live` content change and announce it to the user.
     */
    ARIA_LIVE_DELAY_MS: 1000,
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var OPENING = cssClasses.OPENING, OPEN = cssClasses.OPEN, CLOSING = cssClasses.CLOSING;
var REASON_ACTION = strings.REASON_ACTION, REASON_DISMISS = strings.REASON_DISMISS;
var MDCSnackbarFoundation = /** @class */ (function (_super) {
    __extends(MDCSnackbarFoundation, _super);
    function MDCSnackbarFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSnackbarFoundation.defaultAdapter), adapter)) || this;
        _this.opened = false;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        _this.autoDismissTimer = 0;
        _this.autoDismissTimeoutMs = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
        _this.closeOnEscape = true;
        return _this;
    }
    Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                announce: function () { return undefined; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                removeClass: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCSnackbarFoundation.prototype.destroy = function () {
        this.clearAutoDismissTimer();
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = 0;
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(OPEN);
        this.adapter.removeClass(CLOSING);
    };
    MDCSnackbarFoundation.prototype.open = function () {
        var _this = this;
        this.clearAutoDismissTimer();
        this.opened = true;
        this.adapter.notifyOpening();
        this.adapter.removeClass(CLOSING);
        this.adapter.addClass(OPENING);
        this.adapter.announce();
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(OPEN);
            _this.animationTimer = setTimeout(function () {
                var timeoutMs = _this.getTimeoutMs();
                _this.handleAnimationTimerEnd();
                _this.adapter.notifyOpened();
                if (timeoutMs !== numbers.INDETERMINATE) {
                    _this.autoDismissTimer = setTimeout(function () {
                        _this.close(REASON_DISMISS);
                    }, timeoutMs);
                }
            }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */
    MDCSnackbarFoundation.prototype.close = function (reason) {
        var _this = this;
        if (reason === void 0) { reason = ''; }
        if (!this.opened) {
            // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
            return;
        }
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        this.clearAutoDismissTimer();
        this.opened = false;
        this.adapter.notifyClosing(reason);
        this.adapter.addClass(cssClasses.CLOSING);
        this.adapter.removeClass(cssClasses.OPEN);
        this.adapter.removeClass(cssClasses.OPENING);
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(reason);
        }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
    };
    MDCSnackbarFoundation.prototype.isOpen = function () {
        return this.opened;
    };
    MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
        return this.autoDismissTimeoutMs;
    };
    MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
        // Use shorter variable names to make the code more readable
        var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
        var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;
        var indeterminateValue = numbers.INDETERMINATE;
        if (timeoutMs === numbers.INDETERMINATE || (timeoutMs <= maxValue && timeoutMs >= minValue)) {
            this.autoDismissTimeoutMs = timeoutMs;
        }
        else {
            throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
        }
    };
    MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
        return this.closeOnEscape;
    };
    MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
        this.closeOnEscape = closeOnEscape;
    };
    MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
        var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscapeKey && this.getCloseOnEscape()) {
            this.close(REASON_DISMISS);
        }
    };
    MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
        this.close(REASON_ACTION);
    };
    MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
        this.close(REASON_DISMISS);
    };
    MDCSnackbarFoundation.prototype.clearAutoDismissTimer = function () {
        clearTimeout(this.autoDismissTimer);
        this.autoDismissTimer = 0;
    };
    MDCSnackbarFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(cssClasses.OPENING);
        this.adapter.removeClass(cssClasses.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCSnackbarFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    return MDCSnackbarFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCSnackbarFoundation$1 = MDCSnackbarFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s(i,t);return !0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l(t);}};function n(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i;}function h(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i);}const l=i=>{var t$1,s,o,r;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n));};class c extends i$1{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s(this,i),o(this));}setValue(t){if(e(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const { ARIA_LIVE_DELAY_MS } = MDCSnackbarFoundation$1.numbers;
/**
 * A lit directive implementation of @material/mdc-snackbar/util.ts#announce,
 * which does some tricks to ensure that snackbar labels will be handled
 * correctly by screen readers.
 *
 * The existing MDC announce util function is difficult to use directly here,
 * because Lit can crash when DOM that it is managing changes outside of its
 * purvue. In this case, we would render our labelText as the text content of
 * the label div, but the MDC announce function then clears that text content,
 * and resets it after a timeout (see below for why). We do the same thing here,
 * but in a way that fits into Lit's lifecycle.
 *
 * TODO(aomarks) Investigate whether this can be simplified; but to do that we
 * first need testing infrastructure to verify that it remains compatible with
 * screen readers. For example, can we just create an entirely new label node
 * every time we open or labelText changes? If not, and the async text/::before
 * swap is strictly required, can we at elast make this directive more generic
 * (e.g. so that we don't hard-code the name of the label class).
 */
class AccessibleSnackbarLabel extends c {
    constructor(partInfo) {
        super(partInfo);
        this.labelEl = null;
        this.timerId = null;
        this.previousPart = null;
        if (partInfo.type !== t.CHILD) {
            throw new Error('AccessibleSnackbarLabel only supports child parts.');
        }
    }
    update(part, [labelText, isOpen]) {
        var _a;
        if (!isOpen) {
            // We never need to do anything if we're closed, even if the label also
            // changed in this batch of changes. We'll fully reset the label text
            // whenever we next open.
            return;
        }
        if (this.labelEl === null) {
            // Create the label element once, the first time we open.
            const wrapperEl = document.createElement('div');
            const labelTemplate = x `<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;
            D(labelTemplate, wrapperEl);
            const labelEl = wrapperEl.firstElementChild;
            labelEl.textContent = labelText;
            // endNode can't be a Document, so it must have a parent.
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            (_a = part.endNode) === null || _a === void 0 ? void 0 : _a.parentNode.insertBefore(labelEl, part.endNode);
            this.labelEl = labelEl;
            // No need to do anything more for ARIA the first time we open. We just
            // created the element with the current label, so screen readers will
            // detect it fine.
            return labelEl;
        }
        const labelEl = this.labelEl;
        // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing
        // the message twice.
        labelEl.setAttribute('aria-live', 'off');
        // Temporarily clear `textContent` to force a DOM mutation event that will
        // be detected by screen readers. `aria-live` elements are only announced
        // when the element's `textContent` *changes*, so snackbars sent to the
        // browser in the initial HTML response won't be read unless we clear the
        // element's `textContent` first. Similarly, displaying the same snackbar
        // message twice in a row doesn't trigger a DOM mutation event, so screen
        // readers won't announce the second message unless we first clear
        // `textContent`.
        //
        // We have to clear the label text two different ways to make it work in
        // all browsers and screen readers:
        //
        //   1. `textContent = ''` is required for IE11 + JAWS
        //   2. the lit render of `'&nbsp;'` is required for Chrome + JAWS and
        //       NVDA
        //
        // All other browser/screen reader combinations support both methods.
        //
        // The wrapper `<span>` visually hides the space character so that it
        // doesn't cause jank when added/removed. N.B.: Setting `position:
        // absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting
        // the DOM change.
        //
        // This technique has been tested in:
        //
        //   * JAWS 2019:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * NVDA 2018:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * ChromeVox 53
        labelEl.textContent = '';
        // Updating an element using both Lit's `render` as well as setting its
        // `textContent` can cause later renders to throw because setting
        // `textContent` will remove Lit's part marker comments. This directive
        // needs to set `labelEl`'s `textContent` to trigger the expected screen
        // reader behavior, so it needs to avoid `render` for `labelEl` altogether.
        const spaceSpan = document.createElement('span');
        spaceSpan.style.display = 'inline-block';
        spaceSpan.style.width = '0';
        spaceSpan.style.height = '1px';
        spaceSpan.textContent = '\u00A0'; // U+00A0 is &nbsp;
        labelEl.appendChild(spaceSpan);
        // Prevent visual jank by temporarily displaying the label text in the
        // ::before pseudo-element. CSS generated content is normally announced by
        // screen readers (except in IE 11; see
        // https://tink.uk/accessibility-support-for-css-generated-content/);
        // however, `aria-live` is turned off, so this DOM update will be ignored
        // by screen readers.
        labelEl.setAttribute('data-mdc-snackbar-label-text', labelText);
        if (this.timerId !== null) {
            // We hadn't yet swapped the textContent back in since the last time we
            // opened or changed the label. Cancel that task so we don't clobber the
            // new label.
            clearTimeout(this.timerId);
        }
        this.timerId = window.setTimeout(() => {
            this.timerId = null;
            // Allow screen readers to announce changes to the DOM again.
            labelEl.setAttribute('aria-live', 'polite');
            // Remove the message from the ::before pseudo-element.
            labelEl.removeAttribute('data-mdc-snackbar-label-text');
            // Restore the original label text, which will be announced by
            // screen readers.
            labelEl.textContent = labelText;
            this.setValue(this.labelEl);
        }, ARIA_LIVE_DELAY_MS);
        return labelEl;
    }
    render(labelText, isOpen) {
        if (!isOpen) {
            return x ``;
        }
        return x `
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${labelText}</div>`;
    }
}
const accessibleSnackbarLabel = e$1(AccessibleSnackbarLabel);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const { OPENING_EVENT, OPENED_EVENT, CLOSING_EVENT, CLOSED_EVENT, } = MDCSnackbarFoundation$1.strings;
class SnackbarBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSnackbarFoundation$1;
        this.open = false;
        this.timeoutMs = 5000;
        this.closeOnEscape = false;
        this.labelText = '';
        this.stacked = false;
        this.leading = false;
        this.reason = '';
    }
    render() {
        const classes = {
            'mdc-snackbar--stacked': this.stacked,
            'mdc-snackbar--leading': this.leading,
        };
        return x `
      <div class="mdc-snackbar ${o$2(classes)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${accessibleSnackbarLabel(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { announce: () => {
                /* We handle announce ourselves with the accessible directive. */
            }, notifyClosed: (reason) => {
                this.dispatchEvent(new CustomEvent(CLOSED_EVENT, { bubbles: true, cancelable: true, detail: { reason: reason } }));
            }, notifyClosing: (reason) => {
                this.open = false;
                this.dispatchEvent(new CustomEvent(CLOSING_EVENT, { bubbles: true, cancelable: true, detail: { reason: reason } }));
            }, notifyOpened: () => {
                this.dispatchEvent(new CustomEvent(OPENED_EVENT, { bubbles: true, cancelable: true }));
            }, notifyOpening: () => {
                this.open = true;
                this.dispatchEvent(new CustomEvent(OPENING_EVENT, { bubbles: true, cancelable: true }));
            } });
    }
    /** @export */
    show() {
        this.open = true;
    }
    /** @export */
    close(reason = '') {
        this.reason = reason;
        this.open = false;
    }
    firstUpdated() {
        super.firstUpdated();
        if (this.open) {
            this.mdcFoundation.open();
        }
    }
    _handleKeydown(e) {
        this.mdcFoundation.handleKeyDown(e);
    }
    _handleActionClick(e) {
        this.mdcFoundation.handleActionButtonClick(e);
    }
    _handleDismissClick(e) {
        this.mdcFoundation.handleActionIconClick(e);
    }
}
__decorate([
    i$2('.mdc-snackbar')
], SnackbarBase.prototype, "mdcRoot", void 0);
__decorate([
    i$2('.mdc-snackbar__label')
], SnackbarBase.prototype, "labelElement", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                this.mdcFoundation.open();
            }
            else {
                this.mdcFoundation.close(this.reason);
                this.reason = '';
            }
        }
    })
], SnackbarBase.prototype, "open", void 0);
__decorate([
    observer(function (value) {
        this.mdcFoundation.setTimeoutMs(value);
    }),
    n$3({ type: Number })
], SnackbarBase.prototype, "timeoutMs", void 0);
__decorate([
    observer(function (value) {
        this.mdcFoundation.setCloseOnEscape(value);
    }),
    n$3({ type: Boolean })
], SnackbarBase.prototype, "closeOnEscape", void 0);
__decorate([
    n$3({ type: String })
], SnackbarBase.prototype, "labelText", void 0);
__decorate([
    n$3({ type: Boolean })
], SnackbarBase.prototype, "stacked", void 0);
__decorate([
    n$3({ type: Boolean })
], SnackbarBase.prototype, "leading", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = i$5 `.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action .mdc-button__ripple::before,.mdc-snackbar__action .mdc-button__ripple::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover .mdc-button__ripple::before,.mdc-snackbar__action.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__focus-ring{display:none}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Snackbar = class Snackbar extends SnackbarBase {
};
Snackbar.styles = [styles$1];
Snackbar = __decorate([
    e$6('mwc-snackbar')
], Snackbar);

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Observe a target's property for changes. When a property changes, the
 * provided `Observer` function will be invoked with the properties current and
 * previous values.
 *
 * The returned cleanup function will stop listening to changes for the
 * provided `Observer`.
 *
 * @template T The observed target type.
 * @template K The observed property.
 * @param target - The target to observe.
 * @param property - The property of the target to observe.
 * @param observer - An observer function to invoke each time the property
 *     changes.
 * @return A cleanup function that will stop observing changes for the provided
 *     `Observer`.
 */
function observeProperty(target, property, observer) {
    var targetObservers = installObserver(target, property);
    var observers = targetObservers.getObservers(property);
    observers.push(observer);
    return function () {
        observers.splice(observers.indexOf(observer), 1);
    };
}
/**
 * A Map of all `TargetObservers` that have been installed.
 */
var allTargetObservers = new WeakMap();
/**
 * Installs a `TargetObservers` for the provided target (if not already
 * installed), and replaces the given property with a getter and setter that
 * will respond to changes and call `TargetObservers`.
 *
 * Subsequent calls to `installObserver()` with the same target and property
 * will not override the property's previously installed getter/setter.
 *
 * @template T The observed target type.
 * @template K The observed property to create a getter/setter for.
 * @param target - The target to observe.
 * @param property - The property to create a getter/setter for, if needed.
 * @return The installed `TargetObservers` for the provided target.
 */
function installObserver(target, property) {
    var observersMap = new Map();
    if (!allTargetObservers.has(target)) {
        allTargetObservers.set(target, {
            isEnabled: true,
            getObservers: function (key) {
                var observers = observersMap.get(key) || [];
                if (!observersMap.has(key)) {
                    observersMap.set(key, observers);
                }
                return observers;
            },
            installedProperties: new Set()
        });
    }
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers.installedProperties.has(property)) {
        // The getter/setter has already been replaced for this property
        return targetObservers;
    }
    // Retrieve (or create if it's a plain property) the original descriptor from
    // the target...
    var descriptor = getDescriptor(target, property) || {
        configurable: true,
        enumerable: true,
        value: target[property],
        writable: true
    };
    // ...and create a copy that will be used for the observer.
    var observedDescriptor = __assign({}, descriptor);
    var descGet = descriptor.get, descSet = descriptor.set;
    if ('value' in descriptor) {
        // The descriptor is a simple value (not a getter/setter).
        // For our observer descriptor that we copied, delete the value/writable
        // properties, since they are incompatible with the get/set properties
        // for descriptors.
        delete observedDescriptor.value;
        delete observedDescriptor.writable;
        // Set up a simple getter...
        var value_1 = descriptor.value;
        descGet = function () { return value_1; };
        // ...and setter (if the original property was writable).
        if (descriptor.writable) {
            descSet = function (newValue) {
                value_1 = newValue;
            };
        }
    }
    if (descGet) {
        observedDescriptor.get = function () {
            // `this as T` needed for closure conformance
            return descGet.call(this);
        };
    }
    if (descSet) {
        observedDescriptor.set = function (newValue) {
            var e_4, _a;
            // `thus as T` needed for closure conformance
            var previous = descGet ? descGet.call(this) : newValue;
            descSet.call(this, newValue);
            if (targetObservers.isEnabled && (!descGet || newValue !== previous)) {
                try {
                    for (var _b = __values(targetObservers.getObservers(property)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer(newValue, previous);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        };
    }
    targetObservers.installedProperties.add(property);
    Object.defineProperty(target, property, observedDescriptor);
    return targetObservers;
}
/**
 * Retrieves the descriptor for a property from the provided target. This
 * function will walk up the target's prototype chain to search for the
 * descriptor.
 *
 * @template T The target type.
 * @template K The property type.
 * @param target - The target to retrieve a descriptor from.
 * @param property - The name of the property to retrieve a descriptor for.
 * @return the descriptor, or undefined if it does not exist. Keep in mind that
 *     plain properties may not have a descriptor defined.
 */
function getDescriptor(target, property) {
    var descriptorTarget = target;
    var descriptor;
    while (descriptorTarget) {
        descriptor = Object.getOwnPropertyDescriptor(descriptorTarget, property);
        if (descriptor) {
            break;
        }
        // Walk up the instance's prototype chain in case the property is declared
        // on a superclass.
        descriptorTarget = Object.getPrototypeOf(descriptorTarget);
    }
    return descriptor;
}
/**
 * Enables or disables all observers for a provided target. Changes to observed
 * properties will not call any observers when disabled.
 *
 * @template T The observed target type.
 * @param target - The target to enable or disable observers for.
 * @param enabled - True to enable or false to disable observers.
 */
function setObserversEnabled(target, enabled) {
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers) {
        targetObservers.isEnabled = enabled;
    }
}

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCObserverFoundation = /** @class */ (function (_super) {
    __extends(MDCObserverFoundation, _super);
    function MDCObserverFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /** A set of cleanup functions to unobserve changes. */
        _this.unobserves = new Set();
        return _this;
    }
    MDCObserverFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unobserve();
    };
    /**
     * Observe a target's properties for changes using the provided map of
     * property names and observer functions.
     *
     * @template T The target type.
     * @param target - The target to observe.
     * @param observers - An object whose keys are target properties and values
     *     are observer functions that are called when the associated property
     *     changes.
     * @return A cleanup function that can be called to unobserve the
     *     target.
     */
    MDCObserverFoundation.prototype.observe = function (target, observers) {
        var e_1, _a;
        var _this = this;
        var cleanup = [];
        try {
            for (var _b = __values(Object.keys(observers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var property = _c.value;
                var observer = observers[property].bind(this);
                cleanup.push(this.observeProperty(target, property, observer));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var unobserve = function () {
            var e_2, _a;
            try {
                for (var cleanup_1 = __values(cleanup), cleanup_1_1 = cleanup_1.next(); !cleanup_1_1.done; cleanup_1_1 = cleanup_1.next()) {
                    var cleanupFn = cleanup_1_1.value;
                    cleanupFn();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (cleanup_1_1 && !cleanup_1_1.done && (_a = cleanup_1.return)) _a.call(cleanup_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.unobserves.delete(unobserve);
        };
        this.unobserves.add(unobserve);
        return unobserve;
    };
    /**
     * Observe a target's property for changes. When a property changes, the
     * provided `Observer` function will be invoked with the properties current
     * and previous values.
     *
     * The returned cleanup function will stop listening to changes for the
     * provided `Observer`.
     *
     * @template T The observed target type.
     * @template K The observed property.
     * @param target - The target to observe.
     * @param property - The property of the target to observe.
     * @param observer - An observer function to invoke each time the property
     *     changes.
     * @return A cleanup function that will stop observing changes for the
     *     provided `Observer`.
     */
    MDCObserverFoundation.prototype.observeProperty = function (target, property, observer) {
        return observeProperty(target, property, observer);
    };
    /**
     * Enables or disables all observers for the provided target. Disabling
     * observers will prevent them from being called until they are re-enabled.
     *
     * @param target - The target to enable or disable observers for.
     * @param enabled - Whether or not observers should be called.
     */
    MDCObserverFoundation.prototype.setObserversEnabled = function (target, enabled) {
        setObserversEnabled(target, enabled);
    };
    /**
     * Clean up all observers and stop listening for property changes.
     */
    MDCObserverFoundation.prototype.unobserve = function () {
        var e_3, _a;
        try {
            // Iterate over a copy since unobserve() will remove themselves from the set
            for (var _b = __values(__spreadArray([], __read(this.unobserves))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var unobserve = _c.value;
                unobserve();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    return MDCObserverFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * CSS classes used for switch.
 */
var CssClasses;
(function (CssClasses) {
    CssClasses["PROCESSING"] = "mdc-switch--processing";
    CssClasses["SELECTED"] = "mdc-switch--selected";
    CssClasses["UNSELECTED"] = "mdc-switch--unselected";
})(CssClasses || (CssClasses = {}));
/**
 * Query selectors used for switch.
 */
var Selectors;
(function (Selectors) {
    Selectors["RIPPLE"] = ".mdc-switch__ripple";
})(Selectors || (Selectors = {}));

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * `MDCSwitchFoundation` provides a state-only foundation for a switch
 * component.
 *
 * State observers and event handler entrypoints update a component's adapter's
 * state with the logic needed for switch to function.
 */
var MDCSwitchFoundation = /** @class */ (function (_super) {
    __extends(MDCSwitchFoundation, _super);
    function MDCSwitchFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    /**
     * Initializes the foundation and starts observing state changes.
     */
    MDCSwitchFoundation.prototype.init = function () {
        this.observe(this.adapter.state, {
            disabled: this.stopProcessingIfDisabled,
            processing: this.stopProcessingIfDisabled,
        });
    };
    /**
     * Event handler for switch click events. Clicking on a switch will toggle its
     * selected state.
     */
    MDCSwitchFoundation.prototype.handleClick = function () {
        if (this.adapter.state.disabled) {
            return;
        }
        this.adapter.state.selected = !this.adapter.state.selected;
    };
    MDCSwitchFoundation.prototype.stopProcessingIfDisabled = function () {
        if (this.adapter.state.disabled) {
            this.adapter.state.processing = false;
        }
    };
    return MDCSwitchFoundation;
}(MDCObserverFoundation));
/**
 * `MDCSwitchRenderFoundation` provides a state and rendering foundation for a
 * switch component.
 *
 * State observers and event handler entrypoints update a component's
 * adapter's state with the logic needed for switch to function.
 *
 * In response to state changes, the rendering foundation uses the component's
 * render adapter to keep the component's DOM updated with the state.
 */
/** @class */ ((function (_super) {
    __extends(MDCSwitchRenderFoundation, _super);
    function MDCSwitchRenderFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes the foundation and starts observing state changes.
     */
    MDCSwitchRenderFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        this.observe(this.adapter.state, {
            disabled: this.onDisabledChange,
            processing: this.onProcessingChange,
            selected: this.onSelectedChange,
        });
    };
    /**
     * Initializes the foundation from a server side rendered (SSR) component.
     * This will sync the adapter's state with the current state of the DOM.
     *
     * This method should be called after `init()`.
     */
    MDCSwitchRenderFoundation.prototype.initFromDOM = function () {
        // Turn off observers while setting state
        this.setObserversEnabled(this.adapter.state, false);
        this.adapter.state.selected = this.adapter.hasClass(CssClasses.SELECTED);
        // Ensure aria-checked is set if attribute is not present
        this.onSelectedChange();
        this.adapter.state.disabled = this.adapter.isDisabled();
        this.adapter.state.processing =
            this.adapter.hasClass(CssClasses.PROCESSING);
        // Re-observe state
        this.setObserversEnabled(this.adapter.state, true);
        this.stopProcessingIfDisabled();
    };
    MDCSwitchRenderFoundation.prototype.onDisabledChange = function () {
        this.adapter.setDisabled(this.adapter.state.disabled);
    };
    MDCSwitchRenderFoundation.prototype.onProcessingChange = function () {
        this.toggleClass(this.adapter.state.processing, CssClasses.PROCESSING);
    };
    MDCSwitchRenderFoundation.prototype.onSelectedChange = function () {
        this.adapter.setAriaChecked(String(this.adapter.state.selected));
        this.toggleClass(this.adapter.state.selected, CssClasses.SELECTED);
        this.toggleClass(!this.adapter.state.selected, CssClasses.UNSELECTED);
    };
    MDCSwitchRenderFoundation.prototype.toggleClass = function (addClass, className) {
        if (addClass) {
            this.adapter.addClass(className);
        }
        else {
            this.adapter.removeClass(className);
        }
    };
    return MDCSwitchRenderFoundation;
})(MDCSwitchFoundation));

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class SwitchBase extends FormElement {
    constructor() {
        super(...arguments);
        // MDCSwitchState
        this.processing = false;
        this.selected = false;
        // Aria
        /** @soyPrefixAttribute */
        this.ariaLabel = '';
        /** @soyPrefixAttribute */
        this.ariaLabelledBy = '';
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
        // FormElement
        this.name = '';
        this.value = 'on';
        this.mdcFoundationClass = MDCSwitchFoundation;
    }
    setFormData(formData) {
        if (this.name && this.selected) {
            formData.append(this.name, this.value);
        }
    }
    click() {
        var _a, _b;
        // Switch uses a hidden input as its form element, but a different <button>
        // for interaction. It overrides click() from FormElement to avoid clicking
        // the hidden input.
        if (this.disabled) {
            return;
        }
        (_a = this.mdcRoot) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = this.mdcRoot) === null || _b === void 0 ? void 0 : _b.click();
    }
    /** @soyTemplate */
    render() {
        return x `
      <button
        type="button"
        class="mdc-switch ${o$2(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${l$1(this.ariaLabel || undefined)}"
        aria-labelledby="${l$1(this.ariaLabelledBy || undefined)}"
        .disabled=${this.disabled}
        @click=${this.handleClick}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointerenter="${this.handlePointerEnter}"
        @pointerleave="${this.handlePointerLeave}"
      >
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__handle-track">
          ${this.renderHandle()}
        </div>
      </button>

      <input
        type="checkbox"
        aria-hidden="true"
        name="${this.name}"
        .checked=${this.selected}
        .value=${this.value}
      >
    `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'mdc-switch--processing': this.processing,
            'mdc-switch--selected': this.selected,
            'mdc-switch--unselected': !this.selected,
        };
    }
    /** @soyTemplate */
    renderHandle() {
        return x `
      <div class="mdc-switch__handle">
        ${this.renderShadow()}
        ${this.renderRipple()}
        <div class="mdc-switch__icons">
          ${this.renderOnIcon()}
          ${this.renderOffIcon()}
        </div>
      </div>
    `;
    }
    /** @soyTemplate */
    renderShadow() {
        return x `
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay"></div>
      </div>
    `;
    }
    /** @soyTemplate */
    renderRipple() {
        if (this.shouldRenderRipple) {
            return x `
        <div class="mdc-switch__ripple">
          <mwc-ripple
            internalUseStateLayerCustomProperties
            .disabled="${this.disabled}"
            unbounded>
          </mwc-ripple>
        </div>
      `;
        }
        else {
            return x ``;
        }
    }
    /** @soyTemplate */
    renderOnIcon() {
        return x `
      <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
      </svg>
    `;
    }
    /** @soyTemplate */
    renderOffIcon() {
        return x `
      <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
        <path d="M20 13H4v-2h16v2z" />
      </svg>
    `;
    }
    handleClick() {
        var _a;
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.handleClick();
    }
    handleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleBlur() {
        this.rippleHandlers.endFocus();
    }
    handlePointerDown(event) {
        event.target.setPointerCapture(event.pointerId);
        this.rippleHandlers.startPress(event);
    }
    handlePointerUp() {
        this.rippleHandlers.endPress();
    }
    handlePointerEnter() {
        this.rippleHandlers.startHover();
    }
    handlePointerLeave() {
        this.rippleHandlers.endHover();
    }
    createAdapter() {
        return { state: this };
    }
}
__decorate([
    n$3({ type: Boolean })
], SwitchBase.prototype, "processing", void 0);
__decorate([
    n$3({ type: Boolean })
], SwitchBase.prototype, "selected", void 0);
__decorate([
    ariaProperty,
    n$3({ type: String, attribute: 'aria-label' })
], SwitchBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    n$3({ type: String, attribute: 'aria-labelledby' })
], SwitchBase.prototype, "ariaLabelledBy", void 0);
__decorate([
    e$3('mwc-ripple')
], SwitchBase.prototype, "ripple", void 0);
__decorate([
    t$1()
], SwitchBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    n$3({ type: String, reflect: true })
], SwitchBase.prototype, "name", void 0);
__decorate([
    n$3({ type: String })
], SwitchBase.prototype, "value", void 0);
__decorate([
    i$2('input')
], SwitchBase.prototype, "formElement", void 0);
__decorate([
    i$2('.mdc-switch')
], SwitchBase.prototype, "mdcRoot", void 0);
__decorate([
    e$4({ passive: true })
], SwitchBase.prototype, "handlePointerDown", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = i$5 `.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-flex;outline:none}input{display:none}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#6200ee;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch:disabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-track-color, #d7bbff)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}.mdc-switch.mdc-switch--selected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--unselected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242);--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242);--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242);--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Switch = class Switch extends SwitchBase {
};
Switch.styles = [styles];
Switch = __decorate([
    e$6('mwc-switch')
], Switch);

async function dAValidator(element) {
    if (isTypeMissing(element))
        return [
            {
                title: `Missing mandatory attribute type`,
                message: `${element.parentElement?.getAttribute("id")}>${element.getAttribute("name")}`,
            },
        ];
    const child = getTypeChild(element);
    if (child === null)
        return [
            {
                title: `Type attribute is not referencing any DAType or EnumType`,
                message: `${element.parentElement?.getAttribute("id")}>${element.getAttribute("name")}`,
            },
        ];
    return [];
}

async function getChildren(cdc, daName) {
    const nsd73 = await iec6185073;
    const dataAttribute = nsd73
        .querySelector(`CDC[name="${cdc}"] > DataAttribute[name="${daName}"]`)
        ?.getAttribute("type");
    return Array.from(nsd73.querySelectorAll(`ConstructedAttributes > ConstructedAttribute[name="${dataAttribute}"] > SubDataAttribute[presCond="M"]`));
}
async function getServiceChildren(daName) {
    const nsd81 = await iec6185081;
    return Array.from(nsd81.querySelectorAll(`ServiceConstructedAttributes > ServiceConstructedAttribute[name="${daName}"] > ` +
        ` SubDataAttribute[presCond="M"]`));
}
async function getMandatoryChildren(daType) {
    const id = daType.getAttribute("id");
    if (!id)
        return [];
    const dataAttribute = daType
        .closest("DataTypeTemplates")
        ?.querySelector(`DOType > DA[type="${id}"]`);
    const daName = dataAttribute?.getAttribute("name");
    if (daName && ["Oper", "SBOw", "SBO", "Cancel"].includes(daName))
        return getServiceChildren(daName);
    const cdc = dataAttribute?.parentElement?.getAttribute("cdc");
    return getChildren(cdc, daName);
}
async function missingMandatoryChildren$2(daType) {
    const mandatoryChildren = await getMandatoryChildren(daType);
    const mandatoryChildNames = mandatoryChildren.map((DA) => DA.getAttribute("name"));
    const missingDaNames = mandatoryChildNames.filter((da) => !daType.querySelector(`BDA[name="${da}"]`));
    return missingDaNames.map((missingDa) => ({
        title: `Missing mandatory child data attribute ${missingDa}`,
        message: `${daType.getAttribute("id")}`,
    }));
}
async function dATypeValidator(daType) {
    const errors = [];
    if (daType.tagName !== "DAType")
        return [];
    const missingChildren = await missingMandatoryChildren$2(daType);
    const issuesChildren = await validateChildren(daType);
    return errors.concat(missingChildren, issuesChildren);
}

/* eslint-disable no-promise-executor-return */
async function dOValidator(doOrSdo) {
    if (isTypeMissing(doOrSdo))
        return [
            {
                title: `Missing mandatory attribute type`,
                message: `${doOrSdo.parentElement?.getAttribute("id")}>${doOrSdo.getAttribute("name")}`,
            },
        ];
    const child = getTypeChild(doOrSdo);
    if (child === null)
        return [
            {
                title: `Type attribute is not referencing any DOType`,
                message: `${doOrSdo.parentElement?.getAttribute("id")}>${doOrSdo.getAttribute("name")}`,
            },
        ];
    return [];
}

async function getSpecificDataObject(lnClass, doName) {
    if (!lnClass || !doName)
        return null;
    const lNodeClasses = getAdjacentClass(await iec6185074, lnClass);
    return (lNodeClasses
        .flatMap((lNodeClass) => Array.from(lNodeClass.querySelectorAll(`DataObject`)))
        .find((dataObject) => dataObject.getAttribute("name") === doName) ?? null);
}
async function getNsdReference(element) {
    const id = element.getAttribute("id");
    if (!id)
        return null;
    const doOrSdo = element
        .closest("DataTypeTemplates")
        ?.querySelector(`LNodeType > DO[type="${id}"], LNodeType > SDO[type="${id}"]`);
    const doName = doOrSdo?.getAttribute("name");
    const lNodeType = doOrSdo?.parentElement;
    const lnClass = lNodeType?.getAttribute("lnClass");
    return getSpecificDataObject(lnClass, doName);
}
function getControlServicePresConditions(ctlModel) {
    if (!ctlModel || ctlModel === "status-only")
        return [];
    if (ctlModel.includes("direct"))
        return ["MOctrl"];
    if (ctlModel.includes("normal"))
        return ["MOctrl", "MOsbo", "MOsboNormal"];
    if (ctlModel.includes("enhanced"))
        return ["MOctrl", "MOsbo", "MOsboEnhanced"];
    return [];
}
async function getMandatoryDataAttribute(doType, cdc) {
    const nsd73 = await iec6185073;
    const nsd81 = await iec6185081;
    const dataAttributes = Array.from(nsd73.querySelectorAll(`CDC[name="${cdc}"] > DataAttribute[presCond="M"]`));
    const servicePresConds = getControlServicePresConditions(doType.querySelector('DA[name="ctlModel"] > Val')?.textContent?.trim());
    const serviceDataAttribute = Array.from(nsd81.querySelectorAll(`ServiceCDC[cdc="${cdc}"] > ServiceDataAttribute`)).filter((da) => servicePresConds.includes(da.getAttribute("presCond")));
    return dataAttributes.concat(serviceDataAttribute);
}
async function validateAttributes(doType, cdc) {
    const reference = await getNsdReference(doType);
    if (reference && cdc !== reference.getAttribute("type"))
        return [
            {
                title: `Incorrect common data class. Expected is ${reference}`,
                message: `${doType.getAttribute("id")}(${cdc})`,
            },
        ];
    return [];
}
async function missingMandatoryChildren$1(dotype, cdc) {
    const errors = [];
    const mandatoryDAs = (await getMandatoryDataAttribute(dotype, cdc)).map((DA) => DA.getAttribute("name"));
    mandatoryDAs.forEach((mandatoryDa) => {
        if (!dotype.querySelector(`DA[name="${mandatoryDa}"]`))
            errors.push({
                title: `Missing mandatory data attribute ${mandatoryDa}`,
                message: `${dotype.getAttribute("id")}(${cdc})`,
            });
    });
    return errors;
}
async function dOTypeValidator(doType) {
    const errors = [];
    if (doType.tagName !== "DOType")
        return [];
    const cdc = doType.getAttribute("cdc");
    if (!cdc)
        return [
            {
                title: `Missing mandatory attribute cdc`,
                message: `${doType.getAttribute("id")}`,
            },
        ];
    const incorrectAttributes = await validateAttributes(doType, cdc);
    const missingChildren = await missingMandatoryChildren$1(doType, cdc);
    const issuesChildren = await validateChildren(doType);
    return errors.concat(missingChildren, issuesChildren, incorrectAttributes);
}

/* eslint-disable no-promise-executor-return */
async function getMandatoryDataObject(base) {
    const lnodeclasses = getAdjacentClass(await iec6185074, base);
    return lnodeclasses.flatMap((lnodeclass) => Array.from(lnodeclass.querySelectorAll('DataObject[presCond="M"]')));
}
async function missingMandatoryChildren(lNodeType, lnClass) {
    const errors = [];
    const mandatoryDOs = await (await getMandatoryDataObject(lnClass)).map((DO) => DO.getAttribute("name"));
    mandatoryDOs.forEach((mandatoryDO) => {
        if (!lNodeType.querySelector(`DO[name="${mandatoryDO}"]`))
            errors.push({
                title: `The mandatory data object ${mandatoryDO} is missing`,
                message: `${lNodeType.getAttribute("id")}(${lnClass}) > ${mandatoryDO}`,
            });
    });
    return errors;
}
async function lNodeTypeValidator(element) {
    const errors = [];
    const lnClass = element.getAttribute("lnClass");
    if (!lnClass)
        return [
            {
                title: `Missing mandatory attribute lnClass`,
                message: `${element.getAttribute("id")}(${lnClass})`,
            },
        ];
    const missingChildren = await missingMandatoryChildren(element, lnClass);
    const issuesChildren = await validateChildren(element);
    return errors.concat(missingChildren, issuesChildren);
}

const iec6185074 = fetch(new URL("./nsd/IEC_61850-7-4_2007B3.nsd", import.meta.url))
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "application/xml"));
const iec6185073 = fetch(new URL("./nsd/IEC_61850-7-3_2007B3.nsd", import.meta.url))
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "application/xml"));
fetch(new URL("./nsd/IEC_61850-7-2_2007B3.nsd", import.meta.url))
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "application/xml"));
const iec6185081 = fetch(new URL("./nsd/IEC_61850-8-1_2003A2.nsd", import.meta.url))
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "application/xml"));
function isTypeMissing(element) {
    const { tagName } = element;
    const isTypeMandatory = tagName === "DO" ||
        tagName === "SDO" ||
        ((tagName === "DA" || tagName === "BDA") &&
            (element.getAttribute("bType") === "Enum" ||
                element.getAttribute("bType") === "Struct"));
    const isTypeMissing = !element.getAttribute("type");
    return isTypeMandatory && isTypeMissing;
}
function getTypeChild(element) {
    const isStruct = element.getAttribute("bType") === "Struct";
    const isEnum = element.getAttribute("bType") === "Enum";
    const isDo = element.tagName === "DO" || element.tagName === "SDO";
    const referenceTag = isDo
        ? "DOType"
        : isStruct || isEnum
            ? isStruct
                ? "DAType"
                : "EnumType"
            : null;
    if (!referenceTag)
        return undefined;
    return (element
        .closest("DataTypeTemplates")
        ?.querySelector(`${referenceTag}[id="${element.getAttribute("type")}"]`) ?? null);
}
function getAdjacentClass(nsd, base) {
    if (base === "")
        return [];
    const adjacents = getAdjacentClass(nsd, nsd
        .querySelector(`LNClass[name="${base}"], AbstractLNClass[name="${base}"]`)
        ?.getAttribute("base") ?? "");
    return Array.from(nsd.querySelectorAll(`LNClass[name="${base}"], AbstractLNClass[name="${base}"]`)).concat(adjacents);
}
async function validateChildren(element) {
    const issues = [];
    const children = Array.from(element.children);
    for (const child of children) {
        const validator = tagValidator[child.tagName];
        if (!validator)
            continue;
        const childIssues = await validator(child);
        if (childIssues.length)
            for (const childIssue of childIssues)
                issues.push(childIssue);
    }
    return issues;
}
const tagValidator = {
    LNodeType: lNodeTypeValidator,
    DOType: dOTypeValidator,
    DAType: dATypeValidator,
    DO: dOValidator,
    SDO: dOValidator,
    DA: dAValidator,
    BDA: dAValidator,
};

async function* validate$1(doc) {
    const [version, revision, release] = [
        doc.documentElement.getAttribute("version") ?? "",
        doc.documentElement.getAttribute("revision") ?? "",
        doc.documentElement.getAttribute("release") ?? "",
    ];
    if (!(version === "2007" && revision === "B" && Number(release) > 3)) {
        yield [];
        return;
    }
    const data = doc.querySelector("DataTypeTemplates");
    if (!data) {
        yield [];
        return;
    }
    const children = Array.from(data.children);
    for (const child of children) {
        const validator = tagValidator[child.tagName];
        if (!validator)
            continue;
        const childIssues = validator(child);
        yield childIssues;
    }
}

function isValidationResult(msg) {
    return (typeof msg !== "string" &&
        msg.file !== undefined &&
        msg.valid !== undefined &&
        msg.loaded === undefined);
}
function isValidationError(msg) {
    return (typeof msg !== "string" &&
        msg.file !== undefined &&
        msg.valid === undefined &&
        msg.loaded === undefined);
}
function isLoadSchemaResult(msg) {
    return (typeof msg !== "string" &&
        msg.file !== undefined &&
        msg.valid === undefined &&
        msg.loaded !== undefined);
}
const validators = {};
async function validate(xml, xsd) {
    const issues = [];
    async function getValidator(xsd, xsdName) {
        // Catch browsers not supporting workers
        if (!window.Worker)
            throw new Error("Invalid schema");
        // Avoid init same XSD multiple times
        if (validators[xsdName])
            return validators[xsdName];
        const worker = new Worker(new URL("./xmlvalidate/worker.js", import.meta.url));
        async function validate(xml, xmlName, results) {
            return new Promise((resolve) => {
                worker.addEventListener("message", (e) => {
                    if (isValidationResult(e.data) && e.data.file === xmlName) {
                        resolve(e.data);
                    }
                    else if (isValidationError(e.data)) {
                        const parts = e.data.message.split(": ", 2);
                        const description = parts[1] ? parts[1] : parts[0];
                        const qualifiedTag = parts[1] ? ` (${parts[0]})` : "";
                        results.push({
                            title: description,
                            message: `${e.data.file}:${e.data.line} ${e.data.node} ${e.data.part}${qualifiedTag}`,
                        });
                    }
                });
                worker.postMessage({ content: xml, name: xmlName });
            });
        }
        validators[xsdName] = validate;
        return new Promise((resolve, reject) => {
            worker.addEventListener("message", (e) => {
                if (isLoadSchemaResult(e.data)) {
                    if (e.data.loaded)
                        resolve(validate);
                    else
                        reject("Schema cannot be loaded");
                }
            });
            worker.postMessage({ content: xsd, name: xsdName });
        });
    }
    try {
        const validate = await getValidator(xsd.content, xsd.name);
        const result = await validate(xml.content, xml.name, issues);
        if (result.valid)
            issues.push({ title: "Project is schema valid" });
    }
    catch {
        return null;
    }
    return issues;
}

const schemas = {
    '2003': `<?xml version="1.0" encoding="UTF-8"?>
  <xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified"
      targetNamespace="http://www.iec.ch/61850/2003/SCL" version="1.7"
      xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:scl="http://www.iec.ch/61850/2003/SCL"
      xmlns:xs="http://www.w3.org/2001/XMLSchema">
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:simpleType name="tRef">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value=".+/.+/.+/.+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAnyName">
          <xs:restriction base="xs:normalizedString"/>
      </xs:simpleType>
      <xs:simpleType name="tName">
          <xs:restriction base="tAnyName">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[\\d,\\p{L}]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrLdName">
          <xs:restriction base="xs:Name">
              <xs:maxLength value="64"/>
              <xs:pattern value="\\p{L}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stU">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Lu}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stL">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Ll}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPAddr">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="IP"/>
              <xs:enumeration value="IP-SUBNET"/>
              <xs:enumeration value="IP-GATEWAY"/>
              <xs:enumeration value="OSI-NSAP"/>
              <xs:enumeration value="OSI-TSEL"/>
              <xs:enumeration value="OSI-SSEL"/>
              <xs:enumeration value="OSI-PSEL"/>
              <xs:enumeration value="OSI-AP-Title"/>
              <xs:enumeration value="OSI-AP-Invoke"/>
              <xs:enumeration value="OSI-AE-Qualifier"/>
              <xs:enumeration value="OSI-AE-Invoke"/>
              <xs:enumeration value="MAC-Address"/>
              <xs:enumeration value="APPID"/>
              <xs:enumeration value="VLAN-PRIORITY"/>
              <xs:enumeration value="VLAN-ID"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionPTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="\\p{Lu}[\\d,\\p{L},\\-]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPTypeEnum">
          <xs:union memberTypes="tPredefinedPTypeEnum tExtensionPTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedAttributeNameEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="T"/>
              <xs:enumeration value="Test"/>
              <xs:enumeration value="Check"/>
              <xs:enumeration value="SIUnit"/>
              <xs:enumeration value="Oper"/>
              <xs:enumeration value="SBO"/>
              <xs:enumeration value="SBOw"/>
              <xs:enumeration value="Cancel"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionAttributeNameEnum">
          <xs:restriction base="tRestrName1stL"/>
      </xs:simpleType>
      <xs:simpleType name="tAttributeNameEnum">
          <xs:union memberTypes="tPredefinedAttributeNameEnum tExtensionAttributeNameEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCommonConductingEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="CBR"/>
              <xs:enumeration value="DIS"/>
              <xs:enumeration value="VTR"/>
              <xs:enumeration value="CTR"/>
              <xs:enumeration value="GEN"/>
              <xs:enumeration value="CAP"/>
              <xs:enumeration value="REA"/>
              <xs:enumeration value="CON"/>
              <xs:enumeration value="MOT"/>
              <xs:enumeration value="EFN"/>
              <xs:enumeration value="PSH"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="BSH"/>
              <xs:enumeration value="CAB"/>
              <xs:enumeration value="GIL"/>
              <xs:enumeration value="LIN"/>
              <xs:enumeration value="RRC"/>
              <xs:enumeration value="SAR"/>
              <xs:enumeration value="TCF"/>
              <xs:enumeration value="TCR"/>
              <xs:enumeration value="IFL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="E\\p{Lu}*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCommonConductingEquipmentEnum">
          <xs:union memberTypes="tPredefinedCommonConductingEquipmentEnum tExtensionEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPowerTransformerEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tTransformerWindingEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTW"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedEquipmentEnum">
          <xs:union
              memberTypes="tCommonConductingEquipmentEnum tPowerTransformerEnum tTransformerWindingEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tEquipmentEnum">
          <xs:union memberTypes="tPredefinedEquipmentEnum tExtensionEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="AXN"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="MOT"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="E\\p{Lu}*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGeneralEquipmentEnum">
          <xs:union memberTypes="tPredefinedGeneralEquipmentEnum tExtensionGeneralEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tServiceSettingsEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Dyn"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="Fix"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPhaseEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="A"/>
              <xs:enumeration value="B"/>
              <xs:enumeration value="C"/>
              <xs:enumeration value="N"/>
              <xs:enumeration value="all"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAuthenticationEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="none"/>
              <xs:enumeration value="password"/>
              <xs:enumeration value="week"/>
              <xs:enumeration value="strong"/>
              <xs:enumeration value="certificate"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAssociationKindEnum">
          <xs:restriction base="xs:token">
              <xs:enumeration value="pre-established"/>
              <xs:enumeration value="predefined"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLPHDEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LPHD"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLLN0Enum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LLN0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupAEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="A[A-Z]*"/>
              <xs:enumeration value="ANCR"/>
              <xs:enumeration value="ARCO"/>
              <xs:enumeration value="ATCC"/>
              <xs:enumeration value="AVCO"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupCEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="C[A-Z]*"/>
              <xs:enumeration value="CILO"/>
              <xs:enumeration value="CSWI"/>
              <xs:enumeration value="CALH"/>
              <xs:enumeration value="CCGR"/>
              <xs:enumeration value="CPOW"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupGEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="G[A-Z]*"/>
              <xs:enumeration value="GAPC"/>
              <xs:enumeration value="GGIO"/>
              <xs:enumeration value="GSAL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupIEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="I[A-Z]*"/>
              <xs:enumeration value="IHMI"/>
              <xs:enumeration value="IARC"/>
              <xs:enumeration value="ITCI"/>
              <xs:enumeration value="ITMI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupMEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="M[A-Z]*"/>
              <xs:enumeration value="MMXU"/>
              <xs:enumeration value="MDIF"/>
              <xs:enumeration value="MHAI"/>
              <xs:enumeration value="MHAN"/>
              <xs:enumeration value="MMTR"/>
              <xs:enumeration value="MMXN"/>
              <xs:enumeration value="MSQI"/>
              <xs:enumeration value="MSTA"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupPEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="P[A-Z]*"/>
              <xs:enumeration value="PDIF"/>
              <xs:enumeration value="PDIS"/>
              <xs:enumeration value="PDIR"/>
              <xs:enumeration value="PDOP"/>
              <xs:enumeration value="PDUP"/>
              <xs:enumeration value="PFRC"/>
              <xs:enumeration value="PHAR"/>
              <xs:enumeration value="PHIZ"/>
              <xs:enumeration value="PIOC"/>
              <xs:enumeration value="PMRI"/>
              <xs:enumeration value="PMSS"/>
              <xs:enumeration value="POPF"/>
              <xs:enumeration value="PPAM"/>
              <xs:enumeration value="PSCH"/>
              <xs:enumeration value="PSDE"/>
              <xs:enumeration value="PTEF"/>
              <xs:enumeration value="PTOC"/>
              <xs:enumeration value="PTOF"/>
              <xs:enumeration value="PTOV"/>
              <xs:enumeration value="PTRC"/>
              <xs:enumeration value="PTTR"/>
              <xs:enumeration value="PTUC"/>
              <xs:enumeration value="PTUV"/>
              <xs:enumeration value="PUPF"/>
              <xs:enumeration value="PTUF"/>
              <xs:enumeration value="PVOC"/>
              <xs:enumeration value="PVPH"/>
              <xs:enumeration value="PZSU"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupREnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="R[A-Z]*"/>
              <xs:enumeration value="RSYN"/>
              <xs:enumeration value="RDRE"/>
              <xs:enumeration value="RADR"/>
              <xs:enumeration value="RBDR"/>
              <xs:enumeration value="RDRS"/>
              <xs:enumeration value="RBRF"/>
              <xs:enumeration value="RDIR"/>
              <xs:enumeration value="RFLO"/>
              <xs:enumeration value="RPSB"/>
              <xs:enumeration value="RREC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupSEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="S[A-Z]*"/>
              <xs:enumeration value="SARC"/>
              <xs:enumeration value="SIMG"/>
              <xs:enumeration value="SIML"/>
              <xs:enumeration value="SPDC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupTEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="T[A-Z]*"/>
              <xs:enumeration value="TCTR"/>
              <xs:enumeration value="TVTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupXEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="X[A-Z]*"/>
              <xs:enumeration value="XCBR"/>
              <xs:enumeration value="XSWI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupYEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="Y[A-Z]*"/>
              <xs:enumeration value="YPTR"/>
              <xs:enumeration value="YEFN"/>
              <xs:enumeration value="YLTC"/>
              <xs:enumeration value="YPSH"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupZEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="Z[A-Z]*"/>
              <xs:enumeration value="ZAXN"/>
              <xs:enumeration value="ZBAT"/>
              <xs:enumeration value="ZBSH"/>
              <xs:enumeration value="ZCAB"/>
              <xs:enumeration value="ZCAP"/>
              <xs:enumeration value="ZCON"/>
              <xs:enumeration value="ZGEN"/>
              <xs:enumeration value="ZGIL"/>
              <xs:enumeration value="ZLIN"/>
              <xs:enumeration value="ZMOT"/>
              <xs:enumeration value="ZREA"/>
              <xs:enumeration value="ZRRC"/>
              <xs:enumeration value="ZSAR"/>
              <xs:enumeration value="ZTCF"/>
              <xs:enumeration value="ZTCR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNEnum">
          <xs:union
              memberTypes="tDomainLNGroupAEnum tDomainLNGroupCEnum tDomainLNGroupGEnum tDomainLNGroupIEnum tDomainLNGroupMEnum tDomainLNGroupPEnum tDomainLNGroupREnum tDomainLNGroupSEnum tDomainLNGroupTEnum tDomainLNGroupXEnum tDomainLNGroupYEnum tDomainLNGroupZEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tPredefinedLNClassEnum">
          <xs:union memberTypes="tLPHDEnum tLLN0Enum tDomainLNEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tExtensionLNClassEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:pattern value="\\p{Lu}+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNClassEnum">
          <xs:union memberTypes="tPredefinedLNClassEnum tExtensionLNClassEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="SPS"/>
              <xs:enumeration value="DPS"/>
              <xs:enumeration value="INS"/>
              <xs:enumeration value="ACT"/>
              <xs:enumeration value="ACD"/>
              <xs:enumeration value="SEC"/>
              <xs:enumeration value="BCR"/>
              <xs:enumeration value="MV"/>
              <xs:enumeration value="CMV"/>
              <xs:enumeration value="SAV"/>
              <xs:enumeration value="WYE"/>
              <xs:enumeration value="DEL"/>
              <xs:enumeration value="SEQ"/>
              <xs:enumeration value="HMV"/>
              <xs:enumeration value="HWYE"/>
              <xs:enumeration value="HDEL"/>
              <xs:enumeration value="SPC"/>
              <xs:enumeration value="DPC"/>
              <xs:enumeration value="INC"/>
              <xs:enumeration value="BSC"/>
              <xs:enumeration value="ISC"/>
              <xs:enumeration value="APC"/>
              <xs:enumeration value="SPG"/>
              <xs:enumeration value="ING"/>
              <xs:enumeration value="ASG"/>
              <xs:enumeration value="CURVE"/>
              <xs:enumeration value="DPL"/>
              <xs:enumeration value="LPL"/>
              <xs:enumeration value="CSD"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:pattern value="\\p{Lu}+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCDCEnum">
          <xs:union memberTypes="tPredefinedCDCEnum tExtensionCDCEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tTrgOptEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="dchg"/>
              <xs:enumeration value="qchg"/>
              <xs:enumeration value="dupd"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tTrgOptControlEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="dchg"/>
              <xs:enumeration value="qchg"/>
              <xs:enumeration value="dupd"/>
              <xs:enumeration value="period"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tFCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="ST"/>
              <xs:enumeration value="MX"/>
              <xs:enumeration value="CO"/>
              <xs:enumeration value="SP"/>
              <xs:enumeration value="SG"/>
              <xs:enumeration value="SE"/>
              <xs:enumeration value="SV"/>
              <xs:enumeration value="CF"/>
              <xs:enumeration value="DC"/>
              <xs:enumeration value="EX"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="BOOLEAN"/>
              <xs:enumeration value="INT8"/>
              <xs:enumeration value="INT16"/>
              <xs:enumeration value="INT24"/>
              <xs:enumeration value="INT32"/>
              <xs:enumeration value="INT128"/>
              <xs:enumeration value="INT8U"/>
              <xs:enumeration value="INT16U"/>
              <xs:enumeration value="INT24U"/>
              <xs:enumeration value="INT32U"/>
              <xs:enumeration value="FLOAT32"/>
              <xs:enumeration value="FLOAT64"/>
              <xs:enumeration value="Enum"/>
              <xs:enumeration value="Dbpos"/>
              <xs:enumeration value="Tcmd"/>
              <xs:enumeration value="Quality"/>
              <xs:enumeration value="Timestamp"/>
              <xs:enumeration value="VisString32"/>
              <xs:enumeration value="VisString64"/>
              <xs:enumeration value="VisString129"/>
              <xs:enumeration value="VisString255"/>
              <xs:enumeration value="Octet64"/>
              <xs:enumeration value="Struct"/>
              <xs:enumeration value="EntryTime"/>
              <xs:enumeration value="Unicode255"/>
              <xs:enumeration value="Check"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Lu}[\\p{L},\\d]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tBasicTypeEnum">
          <xs:union memberTypes="tPredefinedBasicTypeEnum tExtensionBasicTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tValKindEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Spec"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="RO"/>
              <xs:enumeration value="Set"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGSEControlTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="GSSE"/>
              <xs:enumeration value="GOOSE"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSIUnitEnum">
          <xs:restriction base="xs:token">
              <xs:enumeration value="none"/>
              <xs:enumeration value="m"/>
              <xs:enumeration value="kg"/>
              <xs:enumeration value="s"/>
              <xs:enumeration value="A"/>
              <xs:enumeration value="K"/>
              <xs:enumeration value="mol"/>
              <xs:enumeration value="cd"/>
              <xs:enumeration value="deg"/>
              <xs:enumeration value="rad"/>
              <xs:enumeration value="sr"/>
              <xs:enumeration value="Gy"/>
              <xs:enumeration value="q"/>
              <xs:enumeration value="°C"/>
              <xs:enumeration value="Sv"/>
              <xs:enumeration value="F"/>
              <xs:enumeration value="C"/>
              <xs:enumeration value="S"/>
              <xs:enumeration value="H"/>
              <xs:enumeration value="V"/>
              <xs:enumeration value="ohm"/>
              <xs:enumeration value="J"/>
              <xs:enumeration value="N"/>
              <xs:enumeration value="Hz"/>
              <xs:enumeration value="lx"/>
              <xs:enumeration value="Lm"/>
              <xs:enumeration value="Wb"/>
              <xs:enumeration value="T"/>
              <xs:enumeration value="W"/>
              <xs:enumeration value="Pa"/>
              <xs:enumeration value="m^2"/>
              <xs:enumeration value="m^3"/>
              <xs:enumeration value="m/s"/>
              <xs:enumeration value="m/s^2"/>
              <xs:enumeration value="m^3/s"/>
              <xs:enumeration value="m/m^3"/>
              <xs:enumeration value="M"/>
              <xs:enumeration value="kg/m^3"/>
              <xs:enumeration value="m^2/s"/>
              <xs:enumeration value="W/m K"/>
              <xs:enumeration value="J/K"/>
              <xs:enumeration value="ppm"/>
              <xs:enumeration value="s^-1"/>
              <xs:enumeration value="rad/s"/>
              <xs:enumeration value="VA"/>
              <xs:enumeration value="Watts"/>
              <xs:enumeration value="VAr"/>
              <xs:enumeration value="phi"/>
              <xs:enumeration value="cos_phi"/>
              <xs:enumeration value="Vs"/>
              <xs:enumeration value="V^2"/>
              <xs:enumeration value="As"/>
              <xs:enumeration value="A^2"/>
              <xs:enumeration value="A^2 s"/>
              <xs:enumeration value="VAh"/>
              <xs:enumeration value="Wh"/>
              <xs:enumeration value="VArh"/>
              <xs:enumeration value="V/Hz"/>
              <xs:enumeration value="b/s"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tUnitMultiplierEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value=""/>
              <xs:enumeration value="m"/>
              <xs:enumeration value="k"/>
              <xs:enumeration value="M"/>
              <xs:enumeration value="mu"/>
              <xs:enumeration value="y"/>
              <xs:enumeration value="z"/>
              <xs:enumeration value="a"/>
              <xs:enumeration value="f"/>
              <xs:enumeration value="p"/>
              <xs:enumeration value="n"/>
              <xs:enumeration value="c"/>
              <xs:enumeration value="d"/>
              <xs:enumeration value="da"/>
              <xs:enumeration value="h"/>
              <xs:enumeration value="G"/>
              <xs:enumeration value="T"/>
              <xs:enumeration value="P"/>
              <xs:enumeration value="E"/>
              <xs:enumeration value="Z"/>
              <xs:enumeration value="Y"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:attributeGroup name="agDesc">
          <xs:attribute form="unqualified" name="desc" type="xs:normalizedString" use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tBaseElement">
          <xs:sequence>
              <xs:any maxOccurs="unbounded" minOccurs="0" namespace="##other" processContents="lax"/>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Private"
                  type="tPrivate"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tUnNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="name" type="tName" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tIDNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="id" type="tName" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" mixed="true" name="tAnyContentFromOtherNamespace">
          <xs:sequence maxOccurs="unbounded" minOccurs="0">
              <xs:any namespace="##other" processContents="lax"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType mixed="true" name="tText">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tPrivate">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tHeader">
          <xs:sequence>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" minOccurs="0" name="History">
                  <xs:complexType>
                      <xs:sequence>
                          <xs:element form="qualified" maxOccurs="unbounded" name="Hitem"
                              type="tHitem"/>
                      </xs:sequence>
                  </xs:complexType>
              </xs:element>
          </xs:sequence>
          <xs:attribute form="unqualified" name="id" type="xs:normalizedString" use="required"/>
          <xs:attribute form="unqualified" name="version" type="xs:normalizedString"/>
          <xs:attribute default="" form="unqualified" name="revision" type="xs:normalizedString"/>
          <xs:attribute form="unqualified" name="toolID" type="xs:normalizedString"/>
          <xs:attribute default="IEDName" form="unqualified" name="nameStructure" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:Name">
                      <xs:enumeration value="IEDName"/>
                      <!-- xs:enumeration value="FuncName"/ -->
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType mixed="true" name="tHitem">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="version" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="revision" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="when" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="who" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="what" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="why" type="xs:normalizedString"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVal">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute form="unqualified" name="sGroup" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tValueWithUnit">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute form="unqualified" name="unit" type="tSIUnitEnum" use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tVoltage">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="V" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tBitRateInMbPerSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="b/s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute fixed="M" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInMilliSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute fixed="m" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:attributeGroup name="agVirtual">
          <xs:attribute default="false" form="unqualified" name="virtual" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tLNodeContainer">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="LNode"
                          type="tLNode"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tPowerSystemResource">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipmentContainer">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="PowerTransformer" type="tPowerTransformer">
                          <xs:unique name="uniqueWindingInPowerTransformer">
                              <xs:selector xpath="./scl:TransformerWinding"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tAbstractConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="2" minOccurs="0" name="Terminal"
                          type="tTerminal"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="tSubEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:attribute form="unqualified" name="type" type="tCommonConductingEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attribute default="none" form="unqualified" name="phase" type="tPhaseEnum"
                      use="optional"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPowerTransformer">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="TransformerWinding"
                          type="tTransformerWinding"/>
                  </xs:sequence>
                  <xs:attribute fixed="PTR" form="unqualified" name="type"
                      type="tPowerTransformerEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTransformerWinding">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TapChanger" type="tTapChanger"
                      />
                  </xs:sequence>
                  <xs:attribute fixed="PTW" form="unqualified" name="type"
                      type="tTransformerWindingEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTapChanger">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attribute fixed="LTC" form="unqualified" name="type" type="xs:Name"
                      use="required"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGeneralEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:attribute form="unqualified" name="type" type="tGeneralEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubstation">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="VoltageLevel"
                          type="tVoltageLevel">
                          <xs:unique name="uniqueBayInVoltageLevel">
                              <xs:selector xpath="./scl:Bay"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniquePowerTransformerInVoltageLevel">
                              <xs:selector xpath="./scl:PowerTransformer"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInVoltageLevel">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInVoltageLevel">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="tFunction">
                          <xs:unique name="uniqueSubFunctionInFunction">
                              <xs:selector xpath="./scl:SubFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInFunction">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVoltageLevel">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Voltage" type="tVoltage"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="Bay" type="tBay">
                          <xs:unique name="uniquePowerTransformerInBay">
                              <xs:selector xpath="./scl:PowerTransformer"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueConductingEquipmentInBay">
                              <xs:selector xpath="./scl:ConductingEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInBay">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInBay">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBay">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="tConductingEquipment"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConnectivityNode" type="tConnectivityNode"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNode">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="lnInst" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute default="None" form="unqualified" name="iedName" type="tName"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="ldInst" type="tAnyName"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubFunction" type="tSubFunction">
                          <xs:unique name="uniqueGeneralEquipmentInSubFunction">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectivityNode">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer">
                  <xs:attribute form="unqualified" name="pathName" type="tRef" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTerminal">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="name" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="connectivityNode" type="tRef" use="required"/>
                  <xs:attribute form="unqualified" name="substationName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="voltageLevelName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="bayName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="cNodeName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:element name="Substation" type="tSubstation">
          <xs:unique name="uniqueVoltageLevelInSubstation">
              <xs:selector xpath="./scl:VoltageLevel"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniquePowerTranformerInSubstation">
              <xs:selector xpath="./scl:PowerTransformer"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueGeneralEquipmentInSubstation">
              <xs:selector xpath="./scl:GeneralEquipment"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueFunctionInSubstation">
              <xs:selector xpath="./scl:Function"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="ConnectivityNodeKey">
              <xs:selector xpath=".//scl:ConnectivityNode"/>
              <xs:field xpath="@pathName"/>
          </xs:key>
          <!-- This identity constraint must be removed, as there is a problem with the (according to part 6 text)
    predefined connectivity node grounded resp GROUNDED. If a terminal references this node, which
    is naturally NOT defined explicitely in the SCL file, verification fails. As far as I know, there is no way
    to restrict the constraint in this respect, so that for value grounded it is allowed to have no explicit definition.
    <xs:keyref name="ref2ConnectivityNode" refer="ConnectivityNodeKey">
        <xs:selector xpath=".//scl:Terminal"/>
        <xs:field xpath="@connectivityNode"/>
    </xs:keyref>
    -->
          <xs:unique name="uniqueLNode">
              <xs:selector xpath=".//scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
          <xs:unique name="uniqueChildNameInSubstation">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agAuthentication">
          <xs:attribute default="true" form="unqualified" name="none" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="password" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="weak" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="strong" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="certificate" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agSmvOpts">
          <xs:attribute default="false" form="unqualified" name="refreshTime" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleSynchronized" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleRate" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="security" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataRef" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agOptFields">
          <xs:attribute default="false" form="unqualified" name="seqNum" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="timeStamp" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataSet" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="reasonCode" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataRef" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="entryID" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="configRef" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLDRef">
          <xs:attribute form="unqualified" name="iedName" type="tName" use="required"/>
          <xs:attribute form="unqualified" name="ldInst" type="tName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLNRef">
          <xs:attributeGroup ref="agLDRef"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
          <xs:attribute form="unqualified" name="lnInst" type="tAnyName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agDORef">
          <xs:attributeGroup ref="agLNRef"/>
          <xs:attribute form="unqualified" name="doName" type="tName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agDARef">
          <xs:attributeGroup ref="agDORef"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="optional"/>
      </xs:attributeGroup>
      <xs:complexType name="tIED">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Services" type="tServices"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="AccessPoint"
                          type="tAccessPoint">
                          <xs:unique name="uniqueLNInAccessPoint">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="manufacturer" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="configVersion" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServices">
          <xs:all>
              <xs:element form="qualified" minOccurs="0" name="DynAssociation" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SettingGroups">
                  <xs:complexType>
                      <xs:all>
                          <xs:element form="qualified" minOccurs="0" name="SGEdit"
                              type="tServiceYesNo"/>
                          <xs:element form="qualified" minOccurs="0" name="ConfSG"
                              type="tServiceYesNo"/>
                      </xs:all>
                  </xs:complexType>
              </xs:element>
              <xs:element form="qualified" minOccurs="0" name="GetDirectory" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataObjectDefinition"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataObjectDirectory"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataSetValue" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SetDataSetValue" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataSetDirectory" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfDataSet"
                  type="tServiceWithMaxAndMaxAttributesAndModify"/>
              <xs:element form="qualified" minOccurs="0" name="DynDataSet"
                  type="tServiceWithMaxAndMaxAttributes"/>
              <xs:element form="qualified" minOccurs="0" name="ReadWrite" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="TimerActivatedControl"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfReportControl"
                  type="tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="GetCBValues" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLogControl" type="tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="ReportSettings" type="tReportSettings"/>
              <xs:element form="qualified" minOccurs="0" name="LogSettings" type="tLogSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSESettings" type="tGSESettings"/>
              <xs:element form="qualified" minOccurs="0" name="SMVSettings" type="tSMVSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSEDir" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GOOSE" type="tServiceWithMaxAndClient"/>
              <xs:element form="qualified" minOccurs="0" name="GSSE" type="tServiceWithMaxAndClient"/>
              <xs:element form="qualified" minOccurs="0" name="FileHandling" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLNs" type="tConfLNs"/>
          </xs:all>
      </xs:complexType>
      <xs:complexType name="tAccessPoint">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:choice minOccurs="0">
                      <xs:element form="qualified" name="Server" type="tServer">
                          <xs:unique name="uniqueAssociationInServer">
                              <xs:selector xpath="./scl:Association"/>
                              <xs:field xpath="@associationID"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element maxOccurs="unbounded" ref="LN"/>
                  </xs:choice>
                  <xs:attribute default="false" form="unqualified" name="router" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="clock" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServer">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" name="Authentication">
                          <xs:complexType>
                              <xs:attributeGroup ref="agAuthentication"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" name="LDevice"
                          type="tLDevice">
                          <xs:unique name="uniqueLNInLDevice">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="Association" type="tAssociation"/>
                  </xs:sequence>
                  <xs:attribute default="30" form="unqualified" name="timeout" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLDevice">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element ref="LN0"/>
                      <xs:element maxOccurs="unbounded" minOccurs="0" ref="LN"/>
                      <xs:element form="qualified" minOccurs="0" name="AccessControl"
                          type="tAccessControl"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="inst" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="ldName" type="tRestrLdName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tAccessControl">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAssociation">
          <xs:attribute form="unqualified" name="kind" type="tAssociationKindEnum" use="required"/>
          <xs:attribute form="unqualified" name="associationID" type="tName" use="optional"/>
          <xs:attributeGroup ref="agLNRef"/>
      </xs:complexType>
      <xs:element name="LN0">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tLN0"/>
              </xs:complexContent>
          </xs:complexType>
          <xs:unique name="uniqueReportControlInLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueGSEControlInLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueSampledValueControlInLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyLN0">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReportLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLogLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetGSELN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetSVLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
      </xs:element>
      <xs:element name="LN" type="tLN">
          <xs:unique name="uniqueReportControlInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyInLN">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReport" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLog" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
      </xs:element>
      <xs:complexType abstract="true" name="tAnyLN">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DataSet"
                          type="tDataSet"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ReportControl" type="tReportControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="LogControl" type="tLogControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DOI"
                          type="tDOI"/>
                      <xs:element form="qualified" minOccurs="0" name="Inputs" type="tInputs"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN0">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GSEControl" type="tGSEControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SampledValueControl" type="tSampledValueControl"/>
                      <xs:element form="qualified" minOccurs="0" name="SettingControl"
                          type="tSettingControl"/>
                      <xs:element form="qualified" minOccurs="0" name="SCLControl" type="tSCLControl"/>
                      <xs:element form="qualified" minOccurs="0" name="Log" type="tLog"/>
                  </xs:sequence>
                  <xs:attribute fixed="LLN0" form="unqualified" name="lnClass" type="tLNClassEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDataSet">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="FCDA" type="tFCDA"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFCDA">
          <xs:attribute form="unqualified" name="ldInst" type="tName" use="optional"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="lnInst" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="doName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControl">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:attribute form="unqualified" name="datSet" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControlWithTriggerOpt">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TrgOps" type="tTrgOps"/>
                  </xs:sequence>
                  <xs:attribute default="0" form="unqualified" name="intgPd" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTrgOps">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="period" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:sequence>
                      <xs:element form="qualified" name="OptFields">
                          <xs:complexType>
                              <xs:attributeGroup ref="agOptFields"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="RptEnabled" type="tRptEnabled"
                      />
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="rptID" type="tName" use="optional">
                      <xs:annotation>
                          <xs:documentation xml:lang="en">Even if rptID is optional, it is
                              recommended, for backward compatibility reason, that tools that
                              instantiate ReportControl element, set the attribute rptID to the
                              default system value defined by 8-1: the reference to the Report Control
                              Block.</xs:documentation>
                      </xs:annotation>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="buffered" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="bufTime" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tRptEnabled">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ClientLN"
                          type="tClientLN"/>
                  </xs:sequence>
                  <xs:attribute default="1" form="unqualified" name="max" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tClientLN">
          <xs:attributeGroup ref="agLNRef"/>
      </xs:complexType>
      <xs:complexType name="tLogControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:attribute form="unqualified" name="logName" type="tName" use="required"/>
                  <xs:attribute default="true" form="unqualified" name="logEna" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="reasonCode" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tInputs">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ExtRef" type="tExtRef"
                      />
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tExtRef">
          <xs:attributeGroup ref="agDORef"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="intAddr" type="xs:normalizedString" use="optional"/>
      </xs:complexType>
      <xs:complexType mixed="true" name="tLog">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tControlWithIEDName">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="IEDName"
                          type="tName"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGSEControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:attribute default="GOOSE" form="unqualified" name="type"
                      type="tGSEControlTypeEnum" use="optional"/>
                  <xs:attribute form="unqualified" name="appID" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSampledValueControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:sequence>
                      <xs:element form="qualified" name="SmvOpts">
                          <xs:complexType>
                              <xs:attributeGroup ref="agSmvOpts"/>
                          </xs:complexType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="smvID" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute default="true" form="unqualified" name="multicast" type="xs:boolean"/>
                  <xs:attribute form="unqualified" name="smpRate" type="xs:unsignedInt" use="required"/>
                  <xs:attribute form="unqualified" name="nofASDU" type="xs:unsignedInt" use="required"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSettingControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="numOfSGs" type="xs:unsignedInt"
                      use="required"/>
                  <xs:attribute default="1" form="unqualified" name="actSG" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSCLControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI"/>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tRestrName1stU" use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI"/>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="Set" form="unqualified" name="valKind" type="tValKindEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceYesNo"/>
      <xs:complexType name="tServiceWithMax">
          <xs:attribute form="unqualified" name="max" type="xs:unsignedInt" use="required"/>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributes">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute form="unqualified" name="maxAttributes" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndModify">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributesAndModify">
          <xs:complexContent>
              <xs:extension base="tServiceWithMaxAndMaxAttributes">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndClient">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="true" form="unqualified" name="client" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tServiceSettings">
          <xs:attribute default="Fix" form="unqualified" name="cbName" type="tServiceSettingsEnum"
              use="optional"/>
          <xs:attribute default="Fix" form="unqualified" name="datSet" type="tServiceSettingsEnum"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="rptID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="bufTime"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLogSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="logEna"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGSESettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="appID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="dataLabel"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMVSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="SmpRate">
                          <xs:simpleType>
                              <xs:restriction base="xs:decimal">
                                  <xs:minInclusive value="0"/>
                              </xs:restriction>
                          </xs:simpleType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute default="Fix" form="unqualified" name="svID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="smpRate"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConfLNs">
          <xs:attribute default="false" form="unqualified" name="fixPrefix" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="fixLnInst" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:element name="IED" type="tIED">
          <xs:unique name="uniqueAccessPointInIED">
              <xs:selector xpath="./scl:AccessPoint"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice"/>
              <xs:field xpath="@inst"/>
          </xs:key>
          <xs:keyref name="ref2LDeviceInIED" refer="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0/scl:LogControl"/>
              <xs:field xpath="@logName"/>
          </xs:keyref>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:complexType abstract="true" name="tControlBlock">
          <xs:annotation>
              <xs:documentation xml:lang="en">A control block within a Logical Device (in
                  LLN0).</xs:documentation>
          </xs:annotation>
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="ldInst" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="cbName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCommunication">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="SubNetwork"
                          type="tSubNetwork">
                          <xs:unique name="uniqueConnectedAP">
                              <xs:selector xpath="./scl:ConnectedAP"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@apName"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubNetwork">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="BitRate"
                          type="tBitRateInMbPerSec"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ConnectedAP"
                          type="tConnectedAP">
                          <xs:unique name="uniqueGSEinConnectedAP">
                              <xs:selector xpath="./scl:GSE"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                          <xs:unique name="uniqueSMVinConnectedAP">
                              <xs:selector xpath="./scl:SMV"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional">
                      <xs:annotation>
                          <xs:documentation xml:lang="en">The bus protocol types are defined in IEC
                              61850 Part 8 and 9</xs:documentation>
                      </xs:annotation>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectedAP">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="GSE"
                          type="tGSE"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="SMV"
                          type="tSMV"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="PhysConn"
                          type="tPhysConn"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="iedName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="apName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAddress">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="P" type="tP"/>
          </xs:sequence>
      </xs:complexType>
      <xs:complexType name="tGSE">
          <xs:complexContent>
              <xs:extension base="tControlBlock">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="MinTime"
                          type="tDurationInMilliSec"/>
                      <xs:element form="qualified" minOccurs="0" name="MaxTime"
                          type="tDurationInMilliSec"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMV">
          <xs:complexContent>
              <xs:extension base="tControlBlock"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPhysConn">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="P" type="tP"/>
          </xs:sequence>
          <xs:attribute form="unqualified" name="type" type="xs:normalizedString" use="required"/>
      </xs:complexType>
      <xs:complexType name="tP">
          <xs:simpleContent>
              <xs:extension base="tPAddr">
                  <xs:attribute form="unqualified" name="type" type="tPTypeEnum" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP">
          <xs:annotation>
              <xs:documentation xml:lang="en">A TCP/IP address</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-SUBNET">
          <xs:annotation>
              <xs:documentation xml:lang="en">A subnet Mask for TCP/IP profiles</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP-SUBNET" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-GATEWAY">
          <xs:annotation>
              <xs:documentation xml:lang="en">A First Hop IP gateway address for TCP/IP
                  profiles</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP-GATEWAY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-NSAP">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Network Address</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="40"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-NSAP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-TSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Transport Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="8"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-TSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-SSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Session Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-SSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-PSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Presentation Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-PSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Title">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AP Title value</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9,]+"/>
                  <xs:attribute fixed="OSI-AP-Title" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
              <!--<xs:pattern value="&#34;[\\d,&#44;]+&#34;"/>-->
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Invoke">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AP Invoke ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AP-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Qualifier">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AE Qualifier</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AE-Qualifier" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Invoke">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AE Invoke ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AE-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_MAC-Address">
          <xs:annotation>
              <xs:documentation xml:lang="en">A Media Access Address value</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="17"/>
                  <xs:maxLength value="17"/>
                  <xs:pattern
                      value="[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}"/>
                  <xs:attribute fixed="MAC-Address" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_APPID">
          <xs:annotation>
              <xs:documentation xml:lang="en">An Application Identifier</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="4"/>
                  <xs:maxLength value="4"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="APPID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-PRIORITY">
          <xs:annotation>
              <xs:documentation xml:lang="en">A VLAN User Priority</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-7]"/>
                  <xs:attribute fixed="VLAN-PRIORITY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-ID">
          <xs:annotation>
              <xs:documentation xml:lang="en">A VLAN ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="3"/>
                  <xs:maxLength value="3"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="VLAN-ID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:element name="Communication" type="tCommunication">
          <xs:unique name="uniqueSubNetwork">
              <xs:selector xpath="./scl:SubNetwork"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agDATrgOp">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tAbstractDataAttribute">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="bType" type="tBasicTypeEnum" use="required"/>
                  <xs:attribute default="Set" form="unqualified" name="valKind" type="tValKindEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="type" type="tAnyName" use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="count" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNodeType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="DO" type="tDO"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDO">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tRestrName1stU" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="transient" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDO" type="tSDO"/>
                      <xs:element form="qualified" name="DA" type="tDA"/>
                  </xs:choice>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="cdc" type="tCDCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDO">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute">
                  <xs:attributeGroup ref="agDATrgOp"/>
                  <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="BDA" type="tBDA"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEnumType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="EnumVal"
                          type="tEnumVal"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEnumVal">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute form="unqualified" name="ord" type="xs:integer" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDataTypeTemplates">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="LNodeType" type="tLNodeType">
                  <xs:unique name="uniqueDOInLNodeType">
                      <xs:selector xpath="scl:DO"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" name="DOType" type="tDOType">
                  <xs:unique name="uniqueDAorSDOInDOType">
                      <xs:selector xpath="./*"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DAType"
                  type="tDAType">
                  <xs:unique name="uniqueBDAInDAType">
                      <xs:selector xpath="scl:BDA"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="EnumType"
                  type="tEnumType">
                  <xs:unique name="uniqueOrdInEnumType">
                      <xs:selector xpath="scl:EnumVal"/>
                      <xs:field xpath="@ord"/>
                  </xs:unique>
              </xs:element>
          </xs:sequence>
      </xs:complexType>
      <xs:element name="DataTypeTemplates" type="tDataTypeTemplates">
          <xs:unique name="uniqueLNodeType">
              <xs:selector xpath="scl:LNodeType"/>
              <xs:field xpath="@id"/>
              <xs:field xpath="@iedType"/>
          </xs:unique>
          <xs:key name="DOTypeKey">
              <xs:selector xpath="scl:DOType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:keyref name="ref2DOType" refer="DOTypeKey">
              <xs:selector xpath="scl:LNodeType/scl:DO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:keyref name="ref2DOTypeForSDO" refer="DOTypeKey">
              <xs:selector xpath="scl:DOType/scl:SDO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:key name="DATypeKey">
              <xs:selector xpath="scl:DAType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:key name="EnumTypeKey">
              <xs:selector xpath="scl:EnumType"/>
              <xs:field xpath="@id"/>
          </xs:key>
      </xs:element>
      <xs:element name="SCL">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tBaseElement">
                      <xs:sequence>
                          <xs:element name="Header" type="tHeader">
                              <xs:unique name="uniqueHitem">
                                  <xs:selector xpath="./scl:History/scl:Hitem"/>
                                  <xs:field xpath="@version"/>
                                  <xs:field xpath="@revision"/>
                              </xs:unique>
                          </xs:element>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Substation"/>
                          <xs:element minOccurs="0" ref="Communication"/>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="IED"/>
                          <xs:element minOccurs="0" ref="DataTypeTemplates"/>
                      </xs:sequence>
                  </xs:extension>
              </xs:complexContent>
          </xs:complexType>
          <xs:unique name="uniqueSubstation">
              <xs:selector xpath="./scl:Substation"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="IEDKey">
              <xs:selector xpath="./scl:IED"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:key name="LNodeTypeKey">
              <xs:selector xpath="./scl:DataTypeTemplates/scl:LNodeType"/>
              <xs:field xpath="@id"/>
              <xs:field xpath="@lnClass"/>
          </xs:key>
          <xs:keyref name="ref2LNodeTypeDomain1" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeDomain2" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeLLN0" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
      </xs:element>
  </xs:schema>
  `,
    '2007B': `<?xml version="1.0" encoding="utf-8" ?>
<xs:schema xmlns:scl="http://www.iec.ch/61850/2003/SCL" xmlns="http://www.iec.ch/61850/2003/SCL" elementFormDefault="qualified" targetNamespace="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.

			Implemented Ed. 2 Tissues: 658, 668, 687, 768, 779, 789, 804, 806, 807, 822, 824, 845, 853, 855, 856, 857, 886, 936, 1175, 1189, 1208.
			Tissues not relevant for the SCL schema: 660, 661 (Ed.3), 663, 678, 699, 700, 705, 706 (Ed.3), 718, 719, 721, 731, 733, 752, 769, 787, 788, 815, 823, 825, 837, 847, 865, 873, 883, 884, 885, 901, 914, 915, 918, 927 (Ed.3), 930, 938, 949, 961, 1048, 1054, 1059, 1118, 1130, 1131, 1147, 1161, 1168, 1170 (Ed.3), 1173, 1188, 1195, 1200, 1204, 1207, 1221, 1224, 1241 (Ed.3), 1255, 1257 (Ed.3), 1284.
		</xs:documentation>
  </xs:annotation>
  <xs:element name="SCL">
    <xs:complexType>
      <xs:complexContent>
        <xs:extension base="tBaseElement">
          <xs:sequence>
            <xs:element name="Header" type="tHeader">
              <xs:unique name="uniqueHitem">
                <xs:selector xpath="./scl:History/scl:Hitem" />
                <xs:field xpath="@version" />
                <xs:field xpath="@revision" />
              </xs:unique>
            </xs:element>
            <xs:element ref="Substation" minOccurs="0" maxOccurs="unbounded" />
            <xs:element ref="Communication" minOccurs="0" />
            <xs:element ref="IED" minOccurs="0" maxOccurs="unbounded" />
            <xs:element ref="DataTypeTemplates" minOccurs="0" />
            <xs:element ref="Line" minOccurs="0" maxOccurs="unbounded" />
            <xs:element ref="Process" minOccurs="0" maxOccurs="unbounded" />
          </xs:sequence>
          <xs:attribute name="version" fixed="2007" type="tSclVersion" use="required" />
          <xs:attribute name="revision" fixed="B" type="tSclRevision" use="required" />
          <xs:attribute name="release" fixed="1" type="tSclRelease" use="optional" />
        </xs:extension>
      </xs:complexContent>
    </xs:complexType>
    <xs:key name="SubstationKey">
      <xs:selector xpath="./scl:Substation|./scl:Process|./scl:Line" />
      <xs:field xpath="@name" />
    </xs:key>
    <xs:key name="IEDKey">
      <xs:selector xpath="./scl:IED" />
      <xs:field xpath="@name" />
    </xs:key>
    <xs:key name="LNodeTypeKey">
      <xs:selector xpath="./scl:DataTypeTemplates/scl:LNodeType" />
      <xs:field xpath="@id" />
      <xs:field xpath="@lnClass" />
    </xs:key>
    <xs:keyref name="ref2LNodeTypeDomain1" refer="LNodeTypeKey">
      <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:LN" />
      <xs:field xpath="@lnType" />
      <xs:field xpath="@lnClass" />
    </xs:keyref>
    <xs:keyref name="ref2LNodeTypeDomain2" refer="LNodeTypeKey">
      <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN" />
      <xs:field xpath="@lnType" />
      <xs:field xpath="@lnClass" />
    </xs:keyref>
    <xs:keyref name="ref2LNodeTypeLLN0" refer="LNodeTypeKey">
      <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0" />
      <xs:field xpath="@lnType" />
      <xs:field xpath="@lnClass" />
    </xs:keyref>
    <xs:keyref name="refConnectedAP2IED" refer="IEDKey">
      <xs:selector xpath="./scl:Communication/scl:SubNetwork/scl:ConnectedAP" />
      <xs:field xpath="@iedName" />
    </xs:keyref>
    <xs:keyref name="ref2SubstationFromTerminal" refer="SubstationKey">
      <xs:selector xpath=".//scl:Terminal" />
      <xs:field xpath="@substationName" />
    </xs:keyref>
    <xs:key name="ConnectivityNodeKey">
      <xs:selector xpath=".//scl:ConnectivityNode" />
      <xs:field xpath="@pathName" />
    </xs:key>
  </xs:element>
  <!--Schema items added from SCL.2007B1.2014-07-18\\SCL_Substation.xsd-->
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
		</xs:documentation>
  </xs:annotation>
  <xs:attributeGroup name="agVirtual">
    <xs:attribute name="virtual" default="false" type="xs:boolean" use="optional" />
  </xs:attributeGroup>
  <xs:complexType abstract="true" name="tLNodeContainer">
    <xs:complexContent>
      <xs:extension base="tNaming">
        <xs:sequence>
          <xs:element name="LNode" type="tLNode" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tPowerSystemResource">
    <xs:complexContent>
      <xs:extension base="tLNodeContainer" />
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tEquipmentContainer">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:sequence>
          <xs:element name="PowerTransformer" type="tPowerTransformer" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInPowerTransformer">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInPTR">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="GeneralEquipment" type="tGeneralEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInGeneralEquipment">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInGE">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tEquipment">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:attributeGroup ref="agVirtual" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tAbstractConductingEquipment">
    <xs:complexContent>
      <xs:extension base="tEquipment">
        <xs:sequence>
          <xs:element name="Terminal" type="tTerminal" minOccurs="0" maxOccurs="2" />
          <xs:element name="SubEquipment" type="tSubEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInSubEquipment">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInACESubEquipment">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tConductingEquipment">
    <xs:complexContent>
      <xs:extension base="tAbstractConductingEquipment">
        <xs:sequence>
          <xs:element name="EqFunction" type="tEqFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFuncForCE">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInFuncForCE">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" type="tCommonConductingEquipmentEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSubEquipment">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:sequence>
          <xs:element name="EqFunction" type="tEqFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFuncForSubEq">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInFuncForSubEq">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="phase" default="none" type="tPhaseEnum" use="optional" />
        <xs:attributeGroup ref="agVirtual" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tPowerTransformer">
    <xs:complexContent>
      <xs:extension base="tEquipment">
        <xs:sequence>
          <xs:element name="TransformerWinding" type="tTransformerWinding" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInTransformerWinding">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInPTW">
              <xs:selector xpath="./scl:SubEquipment|./scl:TapChanger|./scl:EqFunction" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="SubEquipment" type="tSubEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInSubEquipmentPTR">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInPTRSubEquipment">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="EqFunction" type="tEqFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFuncForPTR">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInFuncForPTR">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" fixed="PTR" type="tPowerTransformerEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tTransformerWinding">
    <xs:complexContent>
      <xs:extension base="tAbstractConductingEquipment">
        <xs:sequence>
          <xs:element name="TapChanger" type="tTapChanger" minOccurs="0">
            <xs:unique name="uniqueLNodeInTapChanger">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInLTC">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="NeutralPoint" type="tTerminal" minOccurs="0" />
          <xs:element name="EqFunction" type="tEqFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFuncForPTW">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInFuncForPTW">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" fixed="PTW" type="tTransformerWindingEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tTapChanger">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:sequence>
          <xs:element name="SubEquipment" type="tSubEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInSubEquipmentLTC">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInLTCSubEquipment">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="EqFunction" type="tEqFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFuncForLTC">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInFuncForLTC">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" fixed="LTC" type="xs:Name" use="required" />
        <xs:attributeGroup ref="agVirtual" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tGeneralEquipment">
    <xs:complexContent>
      <xs:extension base="tEquipment">
        <xs:sequence>
          <xs:element name="EqFunction" type="tEqFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFuncForGE">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInFuncForGE">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" type="tGeneralEquipmentEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSubstation">
    <xs:complexContent>
      <xs:extension base="tEquipmentContainer">
        <xs:sequence>
          <xs:element name="VoltageLevel" type="tVoltageLevel" maxOccurs="unbounded">
            <xs:unique name="uniqueChildNameInVoltageLevel">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
            <xs:unique name="uniqueLNodeInVoltageLevel">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
          </xs:element>
          <xs:element name="Function" type="tFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFunctionSS">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInSubstationFunc">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tVoltageLevel">
    <xs:complexContent>
      <xs:extension base="tEquipmentContainer">
        <xs:sequence>
          <xs:element name="Voltage" type="tVoltage" minOccurs="0" />
          <xs:element name="Bay" type="tBay" maxOccurs="unbounded">
            <xs:unique name="uniqueChildNameInBay">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
            <xs:unique name="uniqueLNodeInBay">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
          </xs:element>
          <xs:element name="Function" type="tFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFunctionVL">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInVoltageLevelFunc">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="nomFreq" use="optional">
          <xs:simpleType>
            <xs:restriction base="xs:decimal">
              <xs:minInclusive value="0" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
        <xs:attribute name="numPhases" use="optional">
          <xs:simpleType>
            <xs:restriction base="xs:unsignedByte">
              <xs:minExclusive value="0" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tBay">
    <xs:complexContent>
      <xs:extension base="tEquipmentContainer">
        <xs:sequence>
          <xs:element name="ConductingEquipment" type="tConductingEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInConductingEquipment">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInCE">
              <xs:selector xpath="./scl:SubEquipment|./scl:EqFunction" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="ConnectivityNode" type="tConnectivityNode" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInConnectivityNode">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
          </xs:element>
          <xs:element name="Function" type="tFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFunctionB">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInBayFunc">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tLNode">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="iedName" default="None" type="tIEDName" use="optional" />
        <xs:attribute name="ldInst" default="" type="tLDInstOrEmpty" use="optional" />
        <xs:attribute name="prefix" default="" type="tPrefix" use="optional" />
        <xs:attribute name="lnClass" type="tLNClassEnum" use="required" />
        <xs:attribute name="lnInst" default="" type="tLNInstOrEmpty" use="optional" />
        <xs:attribute name="lnType" type="tName" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tFunction">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:sequence>
          <xs:element name="SubFunction" type="tSubFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInSubFunction">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInSubFunc">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="GeneralEquipment" type="tGeneralEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInGeneralEquipmentOfFunction">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInGEFunc">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="ConductingEquipment" type="tConductingEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInConductingEquipmentOfFunction">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInCondEq">
              <xs:selector xpath="./scl:SubEquipment|./scl:EqFunction" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" type="xs:normalizedString" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSubFunction">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:sequence>
          <xs:element name="GeneralEquipment" type="tGeneralEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInGeneralEquipmentOfSubFunction">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInGESubFunc">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="ConductingEquipment" type="tConductingEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInConductingEquipmentOfSubFunction">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueSubEquipmentSubFunc">
              <xs:selector xpath="./scl:SubEquipment" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="SubFunction" type="tSubFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInSubSubFunction">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueSubSubFunc">
              <xs:selector xpath="./scl:SubFunction" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" type="xs:normalizedString" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tAbstractEqFuncSubFunc">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:sequence>
          <xs:element name="GeneralEquipment" type="tGeneralEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInGeneralEquipmentOfFuncForEquipment">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInGEFuncForEquipment">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="EqSubFunction" type="tEqSubFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInSubFuncForEquipment">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueSubFuncForEquipment">
              <xs:selector xpath="./scl:EqSubFunction" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" type="xs:normalizedString" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tEqFunction">
    <xs:complexContent>
      <xs:extension base="tAbstractEqFuncSubFunc" />
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tEqSubFunction">
    <xs:complexContent>
      <xs:extension base="tAbstractEqFuncSubFunc" />
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tConnectivityNode">
    <xs:complexContent>
      <xs:extension base="tLNodeContainer">
        <xs:attribute name="pathName" type="tRef" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tTerminal">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="name" default="" type="tAnyName" use="optional" />
        <xs:attribute name="connectivityNode" type="tRef" use="required" />
        <xs:attribute name="processName" type="tProcessName" use="optional" />
        <xs:attribute name="substationName" type="tName" use="required" />
        <xs:attribute name="voltageLevelName" type="tName" use="required" />
        <xs:attribute name="bayName" type="tName" use="required" />
        <xs:attribute name="cNodeName" type="tName" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tGeneralEquipmentContainer">
    <xs:complexContent>
      <xs:extension base="tPowerSystemResource">
        <xs:sequence>
          <xs:element name="GeneralEquipment" type="tGeneralEquipment" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInGeneralEquipment2">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInGE2">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
          <xs:element name="Function" type="tFunction" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueLNodeInFunction">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
            <xs:unique name="uniqueChildNameInFunction">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tLine">
    <xs:complexContent>
      <xs:extension base="tGeneralEquipmentContainer">
        <xs:sequence>
          <xs:element name="ConductingEquipment" type="tConductingEquipment" maxOccurs="unbounded" />
          <xs:element name="ConnectivityNode" type="tConnectivityNode" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="type" type="tLineType" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tProcess">
    <xs:complexContent>
      <xs:extension base="tGeneralEquipmentContainer">
        <xs:sequence>
          <xs:element name="ConductingEquipment" type="tConductingEquipment" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="Substation" type="tSubstation" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueChildNameInProcessSubstation">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
            <xs:unique name="uniqueLNodeInProcessSubstation">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
          </xs:element>
          <xs:element name="Line" type="tLine" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="Process" type="tProcess" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueChildNameInSubProcess">
              <xs:selector xpath="./*" />
              <xs:field xpath="@name" />
            </xs:unique>
            <xs:unique name="uniqueLNodeInSubProcess">
              <xs:selector xpath="./scl:LNode" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" type="tProcessType" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Substation" type="tSubstation">
    <xs:unique name="uniqueChildNameInSubstation">
      <xs:selector xpath="./*" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueLNodeInSubstation">
      <xs:selector xpath="./scl:LNode" />
      <xs:field xpath="@lnInst" />
      <xs:field xpath="@lnClass" />
      <xs:field xpath="@iedName" />
      <xs:field xpath="@ldInst" />
      <xs:field xpath="@prefix" />
    </xs:unique>
  </xs:element>
  <xs:element name="Process" type="tProcess">
    <xs:unique name="uniqueChildNameInProcess">
      <xs:selector xpath="./*" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueLNodeInProcess">
      <xs:selector xpath="./scl:LNode" />
      <xs:field xpath="@lnInst" />
      <xs:field xpath="@lnClass" />
      <xs:field xpath="@iedName" />
      <xs:field xpath="@ldInst" />
      <xs:field xpath="@prefix" />
    </xs:unique>
  </xs:element>
  <xs:element name="Line" type="tLine">
    <xs:unique name="uniqueChildNameInLine">
      <xs:selector xpath="./*" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueLNodeInLine">
      <xs:selector xpath="./scl:LNode" />
      <xs:field xpath="@lnInst" />
      <xs:field xpath="@lnClass" />
      <xs:field xpath="@iedName" />
      <xs:field xpath="@ldInst" />
      <xs:field xpath="@prefix" />
    </xs:unique>
  </xs:element>
  <!--Schema items added from SCL.2007B1.2014-07-18\\SCL_BaseTypes.xsd-->
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
		</xs:documentation>
  </xs:annotation>
  <xs:attributeGroup name="agDesc">
    <xs:attribute name="desc" default="" type="xs:normalizedString" use="optional" />
  </xs:attributeGroup>
  <xs:complexType abstract="true" name="tBaseElement">
    <xs:sequence>
      <xs:any minOccurs="0" maxOccurs="unbounded" namespace="##other" processContents="lax" />
      <xs:element name="Text" type="tText" minOccurs="0" />
      <xs:element name="Private" type="tPrivate" minOccurs="0" maxOccurs="unbounded" />
    </xs:sequence>
    <xs:anyAttribute namespace="##other" processContents="lax" />
  </xs:complexType>
  <xs:complexType abstract="true" name="tUnNaming">
    <xs:complexContent>
      <xs:extension base="tBaseElement">
        <xs:attributeGroup ref="agDesc" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tNaming">
    <xs:complexContent>
      <xs:extension base="tBaseElement">
        <xs:attribute name="name" type="tName" use="required" />
        <xs:attributeGroup ref="agDesc" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tIDNaming">
    <xs:complexContent>
      <xs:extension base="tBaseElement">
        <xs:attribute name="id" type="tName" use="required" />
        <xs:attributeGroup ref="agDesc" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" mixed="true" name="tAnyContentFromOtherNamespace">
    <xs:sequence minOccurs="0" maxOccurs="unbounded">
      <xs:any namespace="##other" processContents="lax" />
    </xs:sequence>
    <xs:anyAttribute namespace="##other" processContents="lax" />
  </xs:complexType>
  <xs:complexType mixed="true" name="tText">
    <xs:complexContent>
      <xs:extension base="tAnyContentFromOtherNamespace">
        <xs:attribute name="source" type="xs:anyURI" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType mixed="true" name="tPrivate">
    <xs:complexContent>
      <xs:extension base="tAnyContentFromOtherNamespace">
        <xs:attribute name="type" use="required">
          <xs:simpleType>
            <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
        <xs:attribute name="source" type="xs:anyURI" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tHeader">
    <xs:sequence>
      <xs:element name="Text" type="tText" minOccurs="0" />
      <xs:element name="History" minOccurs="0">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Hitem" type="tHitem" maxOccurs="unbounded" />
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
    <xs:attribute name="id" type="xs:normalizedString" use="required" />
    <xs:attribute name="version" type="xs:normalizedString" use="optional" />
    <xs:attribute name="revision" default="" type="xs:normalizedString" use="optional" />
    <xs:attribute name="toolID" type="xs:normalizedString" use="optional" />
    <xs:attribute name="nameStructure" default="IEDName" use="optional">
      <xs:simpleType>
        <xs:restriction base="xs:Name">
          <xs:enumeration value="IEDName" />
        </xs:restriction>
      </xs:simpleType>
    </xs:attribute>
  </xs:complexType>
  <xs:complexType mixed="true" name="tHitem">
    <xs:complexContent>
      <xs:extension base="tAnyContentFromOtherNamespace">
        <xs:attribute name="version" type="xs:normalizedString" use="required" />
        <xs:attribute name="revision" type="xs:normalizedString" use="required" />
        <xs:attribute name="when" type="xs:normalizedString" use="required" />
        <xs:attribute name="who" type="xs:normalizedString" />
        <xs:attribute name="what" type="xs:normalizedString" />
        <xs:attribute name="why" type="xs:normalizedString" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tVal">
    <xs:simpleContent>
      <xs:extension base="xs:normalizedString">
        <xs:attribute name="sGroup" type="xs:unsignedInt" use="optional" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tValueWithUnit">
    <xs:simpleContent>
      <xs:extension base="xs:decimal">
        <xs:attribute name="unit" type="xs:token" use="required" />
        <xs:attribute name="multiplier" default="" type="tUnitMultiplierEnum" use="optional" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tVoltage">
    <xs:simpleContent>
      <xs:restriction base="tValueWithUnit">
        <xs:attribute name="unit" fixed="V" type="xs:token" use="required" />
        <xs:attribute name="multiplier" default="" type="tUnitMultiplierEnum" use="optional" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tDurationInSec">
    <xs:simpleContent>
      <xs:restriction base="tValueWithUnit">
        <xs:attribute name="unit" fixed="s" type="xs:token" use="required" />
        <xs:attribute name="multiplier" default="" type="tUnitMultiplierEnum" use="optional" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tDurationInMilliSec">
    <xs:simpleContent>
      <xs:extension base="xs:decimal">
        <xs:attribute name="unit" fixed="s" type="xs:token" use="optional" />
        <xs:attribute name="multiplier" fixed="m" type="tUnitMultiplierEnum" use="optional" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tBitRateInMbPerSec">
    <xs:simpleContent>
      <xs:extension base="xs:decimal">
        <xs:attribute name="unit" fixed="b/s" type="xs:normalizedString" use="optional" />
        <xs:attribute name="multiplier" fixed="M" type="tUnitMultiplierEnum" use="optional" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <!--Schema items added from SCL.2007B1.2014-07-18\\SCL_Enums.xsd-->
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
		</xs:documentation>
  </xs:annotation>
  <xs:simpleType name="tPredefinedPTypeEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="IP" />
      <xs:enumeration value="IP-SUBNET" />
      <xs:enumeration value="IP-GATEWAY" />
      <xs:enumeration value="OSI-NSAP" />
      <xs:enumeration value="OSI-TSEL" />
      <xs:enumeration value="OSI-SSEL" />
      <xs:enumeration value="OSI-PSEL" />
      <xs:enumeration value="OSI-AP-Title" />
      <xs:enumeration value="OSI-AP-Invoke" />
      <xs:enumeration value="OSI-AE-Qualifier" />
      <xs:enumeration value="OSI-AE-Invoke" />
      <xs:enumeration value="MAC-Address" />
      <xs:enumeration value="APPID" />
      <xs:enumeration value="VLAN-PRIORITY" />
      <xs:enumeration value="VLAN-ID" />
      <xs:enumeration value="SNTP-Port" />
      <xs:enumeration value="MMS-Port" />
      <xs:enumeration value="DNSName" />
      <xs:enumeration value="IPv6FlowLabel" />
      <xs:enumeration value="IPv6ClassOfTraffic" />
      <xs:enumeration value="C37-118-IP-Port" />
      <xs:enumeration value="IP-UDP-PORT" />
      <xs:enumeration value="IP-TCP-PORT" />
      <xs:enumeration value="IPv6" />
      <xs:enumeration value="IPv6-SUBNET" />
      <xs:enumeration value="IPv6-GATEWAY" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tExtensionPTypeEnum">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[A-Z][0-9A-Za-z\\-]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPTypeEnum">
    <xs:union memberTypes="tPredefinedPTypeEnum tExtensionPTypeEnum" />
  </xs:simpleType>
  <xs:simpleType name="tPredefinedPTypePhysConnEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="Type" />
      <xs:enumeration value="Plug" />
      <xs:enumeration value="Cable" />
      <xs:enumeration value="Port" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPTypePhysConnEnum">
    <xs:union memberTypes="tPredefinedPTypePhysConnEnum tExtensionPTypeEnum" />
  </xs:simpleType>
  <xs:simpleType name="tPredefinedAttributeNameEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="T" />
      <xs:enumeration value="Test" />
      <xs:enumeration value="Check" />
      <xs:enumeration value="SIUnit" />
      <xs:enumeration value="Oper" />
      <xs:enumeration value="SBO" />
      <xs:enumeration value="SBOw" />
      <xs:enumeration value="Cancel" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tExtensionAttributeNameEnum">
    <xs:restriction base="tRestrName1stL">
      <xs:maxLength value="60" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tAttributeNameEnum">
    <xs:union memberTypes="tPredefinedAttributeNameEnum tExtensionAttributeNameEnum" />
  </xs:simpleType>
  <xs:simpleType name="tPredefinedCommonConductingEquipmentEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="CBR" />
      <xs:enumeration value="DIS" />
      <xs:enumeration value="VTR" />
      <xs:enumeration value="CTR" />
      <xs:enumeration value="GEN" />
      <xs:enumeration value="CAP" />
      <xs:enumeration value="REA" />
      <xs:enumeration value="CON" />
      <xs:enumeration value="MOT" />
      <xs:enumeration value="EFN" />
      <xs:enumeration value="PSH" />
      <xs:enumeration value="BAT" />
      <xs:enumeration value="BSH" />
      <xs:enumeration value="CAB" />
      <xs:enumeration value="GIL" />
      <xs:enumeration value="LIN" />
      <xs:enumeration value="RES" />
      <xs:enumeration value="RRC" />
      <xs:enumeration value="SAR" />
      <xs:enumeration value="TCF" />
      <xs:enumeration value="TCR" />
      <xs:enumeration value="IFL" />
      <xs:enumeration value="FAN" />
      <xs:enumeration value="SCR" />
      <xs:enumeration value="SMC" />
      <xs:enumeration value="PMP" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tExtensionEquipmentEnum">
    <xs:restriction base="xs:Name">
      <xs:minLength value="3" />
      <xs:pattern value="E[A-Z]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tCommonConductingEquipmentEnum">
    <xs:union memberTypes="tPredefinedCommonConductingEquipmentEnum tExtensionEquipmentEnum" />
  </xs:simpleType>
  <xs:simpleType name="tPowerTransformerEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="PTR" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tTransformerWindingEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="PTW" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPredefinedGeneralEquipmentEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="AXN" />
      <xs:enumeration value="BAT" />
      <xs:enumeration value="MOT" />
      <xs:enumeration value="FAN" />
      <xs:enumeration value="FIL" />
      <xs:enumeration value="PMP" />
      <xs:enumeration value="TNK" />
      <xs:enumeration value="VLV" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tExtensionGeneralEquipmentEnum">
    <xs:restriction base="xs:Name">
      <xs:minLength value="3" />
      <xs:pattern value="E[A-Z]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tGeneralEquipmentEnum">
    <xs:union memberTypes="tPredefinedGeneralEquipmentEnum tExtensionGeneralEquipmentEnum" />
  </xs:simpleType>
  <xs:simpleType name="tServiceSettingsNoDynEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="Conf" />
      <xs:enumeration value="Fix" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tServiceSettingsEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="Dyn" />
      <xs:enumeration value="Conf" />
      <xs:enumeration value="Fix" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tRedProtEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="none" />
      <xs:enumeration value="hsr" />
      <xs:enumeration value="prp" />
      <xs:enumeration value="rstp" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tSMVDeliveryEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="unicast" />
      <xs:enumeration value="multicast" />
      <xs:enumeration value="both" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPhaseEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="A" />
      <xs:enumeration value="B" />
      <xs:enumeration value="C" />
      <xs:enumeration value="N" />
      <xs:enumeration value="all" />
      <xs:enumeration value="none" />
      <xs:enumeration value="AB" />
      <xs:enumeration value="BC" />
      <xs:enumeration value="CA" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tAuthenticationEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="none" />
      <xs:enumeration value="password" />
      <xs:enumeration value="weak" />
      <xs:enumeration value="strong" />
      <xs:enumeration value="certificate" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tAssociationKindEnum">
    <xs:restriction base="xs:token">
      <xs:enumeration value="pre-established" />
      <xs:enumeration value="predefined" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLPHDEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="LPHD" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLLN0Enum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="LLN0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tSystemLNGroupEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="L[A-Z]*" />
      <xs:pattern value="LLN0" />
      <xs:enumeration value="LLN0" />
      <xs:enumeration value="LPHD" />
      <xs:enumeration value="LCCH" />
      <xs:enumeration value="LGOS" />
      <xs:enumeration value="LSVS" />
      <xs:enumeration value="LTIM" />
      <xs:enumeration value="LTMS" />
      <xs:enumeration value="LTRK" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupAEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="A[A-Z]*" />
      <xs:enumeration value="ANCR" />
      <xs:enumeration value="ARCO" />
      <xs:enumeration value="ARIS" />
      <xs:enumeration value="ATCC" />
      <xs:enumeration value="AVCO" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupCEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="C[A-Z]*" />
      <xs:enumeration value="CALH" />
      <xs:enumeration value="CCGR" />
      <xs:enumeration value="CILO" />
      <xs:enumeration value="CPOW" />
      <xs:enumeration value="CSWI" />
      <xs:enumeration value="CSYN" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupFEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="F[A-Z]*" />
      <xs:enumeration value="FCNT" />
      <xs:enumeration value="FCSD" />
      <xs:enumeration value="FFIL" />
      <xs:enumeration value="FLIM" />
      <xs:enumeration value="FPID" />
      <xs:enumeration value="FRMP" />
      <xs:enumeration value="FSPT" />
      <xs:enumeration value="FXOT" />
      <xs:enumeration value="FXUT" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupGEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="G[A-Z]*" />
      <xs:enumeration value="GAPC" />
      <xs:enumeration value="GGIO" />
      <xs:enumeration value="GLOG" />
      <xs:enumeration value="GSAL" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupIEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="I[A-Z]*" />
      <xs:enumeration value="IARC" />
      <xs:enumeration value="IHMI" />
      <xs:enumeration value="ISAF" />
      <xs:enumeration value="ITCI" />
      <xs:enumeration value="ITMI" />
      <xs:enumeration value="ITPC" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupKEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="K[A-Z]*" />
      <xs:enumeration value="KFAN" />
      <xs:enumeration value="KFIL" />
      <xs:enumeration value="KPMP" />
      <xs:enumeration value="KTNK" />
      <xs:enumeration value="KVLV" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupMEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="M[A-Z]*" />
      <xs:enumeration value="MDIF" />
      <xs:enumeration value="MENV" />
      <xs:enumeration value="MFLK" />
      <xs:enumeration value="MHAI" />
      <xs:enumeration value="MHAN" />
      <xs:enumeration value="MHYD" />
      <xs:enumeration value="MMDC" />
      <xs:enumeration value="MMET" />
      <xs:enumeration value="MMTN" />
      <xs:enumeration value="MMTR" />
      <xs:enumeration value="MMXN" />
      <xs:enumeration value="MMXU" />
      <xs:enumeration value="MSQI" />
      <xs:enumeration value="MSTA" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupPEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="P[A-Z]*" />
      <xs:enumeration value="PDIF" />
      <xs:enumeration value="PDIR" />
      <xs:enumeration value="PDIS" />
      <xs:enumeration value="PDOP" />
      <xs:enumeration value="PDUP" />
      <xs:enumeration value="PFRC" />
      <xs:enumeration value="PHAR" />
      <xs:enumeration value="PHIZ" />
      <xs:enumeration value="PIOC" />
      <xs:enumeration value="PMRI" />
      <xs:enumeration value="PMSS" />
      <xs:enumeration value="POPF" />
      <xs:enumeration value="PPAM" />
      <xs:enumeration value="PRTR" />
      <xs:enumeration value="PSCH" />
      <xs:enumeration value="PSDE" />
      <xs:enumeration value="PTEF" />
      <xs:enumeration value="PTHF" />
      <xs:enumeration value="PTOC" />
      <xs:enumeration value="PTOF" />
      <xs:enumeration value="PTOV" />
      <xs:enumeration value="PTRC" />
      <xs:enumeration value="PTTR" />
      <xs:enumeration value="PTUC" />
      <xs:enumeration value="PTUF" />
      <xs:enumeration value="PTUV" />
      <xs:enumeration value="PUPF" />
      <xs:enumeration value="PVOC" />
      <xs:enumeration value="PVPH" />
      <xs:enumeration value="PZSU" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupQEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="Q[A-Z]*" />
      <xs:enumeration value="QFVR" />
      <xs:enumeration value="QITR" />
      <xs:enumeration value="QIUB" />
      <xs:enumeration value="QVTR" />
      <xs:enumeration value="QVUB" />
      <xs:enumeration value="QVVR" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupREnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="R[A-Z]*" />
      <xs:enumeration value="RADR" />
      <xs:enumeration value="RBDR" />
      <xs:enumeration value="RBRF" />
      <xs:enumeration value="RDIR" />
      <xs:enumeration value="RDRE" />
      <xs:enumeration value="RDRS" />
      <xs:enumeration value="RFLO" />
      <xs:enumeration value="RMXU" />
      <xs:enumeration value="RPSB" />
      <xs:enumeration value="RREC" />
      <xs:enumeration value="RSYN" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupSEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="S[A-Z]*" />
      <xs:enumeration value="SARC" />
      <xs:enumeration value="SCBR" />
      <xs:enumeration value="SIMG" />
      <xs:enumeration value="SIML" />
      <xs:enumeration value="SLTC" />
      <xs:enumeration value="SOPM" />
      <xs:enumeration value="SPDC" />
      <xs:enumeration value="SPTR" />
      <xs:enumeration value="SSWI" />
      <xs:enumeration value="STMP" />
      <xs:enumeration value="SVBR" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupTEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="T[A-Z]*" />
      <xs:enumeration value="TANG" />
      <xs:enumeration value="TAXD" />
      <xs:enumeration value="TCTR" />
      <xs:enumeration value="TDST" />
      <xs:enumeration value="TFLW" />
      <xs:enumeration value="TFRQ" />
      <xs:enumeration value="TGSN" />
      <xs:enumeration value="THUM" />
      <xs:enumeration value="TLVL" />
      <xs:enumeration value="TMGF" />
      <xs:enumeration value="TMVM" />
      <xs:enumeration value="TPOS" />
      <xs:enumeration value="TPRS" />
      <xs:enumeration value="TRTN" />
      <xs:enumeration value="TSND" />
      <xs:enumeration value="TTMP" />
      <xs:enumeration value="TTNS" />
      <xs:enumeration value="TVBR" />
      <xs:enumeration value="TVTR" />
      <xs:enumeration value="TWPH" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupXEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="X[A-Z]*" />
      <xs:enumeration value="XCBR" />
      <xs:enumeration value="XSWI" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupYEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="Y[A-Z]*" />
      <xs:enumeration value="YEFN" />
      <xs:enumeration value="YLTC" />
      <xs:enumeration value="YPSH" />
      <xs:enumeration value="YPTR" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNGroupZEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="Z[A-Z]*" />
      <xs:enumeration value="ZAXN" />
      <xs:enumeration value="ZBAT" />
      <xs:enumeration value="ZBSH" />
      <xs:enumeration value="ZCAB" />
      <xs:enumeration value="ZCAP" />
      <xs:enumeration value="ZCON" />
      <xs:enumeration value="ZGEN" />
      <xs:enumeration value="ZGIL" />
      <xs:enumeration value="ZLIN" />
      <xs:enumeration value="ZMOT" />
      <xs:enumeration value="ZREA" />
      <xs:enumeration value="ZRES" />
      <xs:enumeration value="ZRRC" />
      <xs:enumeration value="ZSAR" />
      <xs:enumeration value="ZSCR" />
      <xs:enumeration value="ZSMC" />
      <xs:enumeration value="ZTCF" />
      <xs:enumeration value="ZTCR" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDomainLNEnum">
    <xs:union memberTypes="tDomainLNGroupAEnum tDomainLNGroupCEnum tDomainLNGroupFEnum tDomainLNGroupGEnum tDomainLNGroupIEnum tDomainLNGroupKEnum tDomainLNGroupMEnum tDomainLNGroupPEnum tDomainLNGroupQEnum tDomainLNGroupREnum tDomainLNGroupSEnum tDomainLNGroupTEnum tDomainLNGroupXEnum tDomainLNGroupYEnum tDomainLNGroupZEnum" />
  </xs:simpleType>
  <xs:simpleType name="tPredefinedLNClassEnum">
    <xs:union memberTypes="tSystemLNGroupEnum tDomainLNEnum" />
  </xs:simpleType>
  <xs:simpleType name="tExtensionLNClassEnum">
    <xs:restriction base="xs:Name">
      <xs:length value="4" />
      <xs:pattern value="[A-Z]+" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLNClassEnum">
    <xs:union memberTypes="tPredefinedLNClassEnum tExtensionLNClassEnum" />
  </xs:simpleType>
  <xs:simpleType name="tPredefinedCDCEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="SPS" />
      <xs:enumeration value="DPS" />
      <xs:enumeration value="INS" />
      <xs:enumeration value="ENS" />
      <xs:enumeration value="ACT" />
      <xs:enumeration value="ACD" />
      <xs:enumeration value="SEC" />
      <xs:enumeration value="BCR" />
      <xs:enumeration value="HST" />
      <xs:enumeration value="VSS" />
      <xs:enumeration value="MV" />
      <xs:enumeration value="CMV" />
      <xs:enumeration value="SAV" />
      <xs:enumeration value="WYE" />
      <xs:enumeration value="DEL" />
      <xs:enumeration value="SEQ" />
      <xs:enumeration value="HMV" />
      <xs:enumeration value="HWYE" />
      <xs:enumeration value="HDEL" />
      <xs:enumeration value="SPC" />
      <xs:enumeration value="DPC" />
      <xs:enumeration value="INC" />
      <xs:enumeration value="ENC" />
      <xs:enumeration value="BSC" />
      <xs:enumeration value="ISC" />
      <xs:enumeration value="APC" />
      <xs:enumeration value="BAC" />
      <xs:enumeration value="SPG" />
      <xs:enumeration value="ING" />
      <xs:enumeration value="ENG" />
      <xs:enumeration value="ORG" />
      <xs:enumeration value="TSG" />
      <xs:enumeration value="CUG" />
      <xs:enumeration value="VSG" />
      <xs:enumeration value="ASG" />
      <xs:enumeration value="CURVE" />
      <xs:enumeration value="CSG" />
      <xs:enumeration value="DPL" />
      <xs:enumeration value="LPL" />
      <xs:enumeration value="CSD" />
      <xs:enumeration value="CST" />
      <xs:enumeration value="BTS" />
      <xs:enumeration value="UTS" />
      <xs:enumeration value="LTS" />
      <xs:enumeration value="GTS" />
      <xs:enumeration value="MTS" />
      <xs:enumeration value="NTS" />
      <xs:enumeration value="STS" />
      <xs:enumeration value="CTS" />
      <xs:enumeration value="OTS" />
      <xs:enumeration value="VSD" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tExtensionCDCEnum">
    <xs:restriction base="xs:Name">
      <xs:minLength value="1" />
      <xs:maxLength value="5" />
      <xs:pattern value="[A-Za-z]+" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tCDCEnum">
    <xs:restriction base="tPredefinedCDCEnum" />
  </xs:simpleType>
  <xs:simpleType name="tFCEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="ST" />
      <xs:enumeration value="MX" />
      <xs:enumeration value="CO" />
      <xs:enumeration value="SP" />
      <xs:enumeration value="SG" />
      <xs:enumeration value="SE" />
      <xs:enumeration value="SV" />
      <xs:enumeration value="CF" />
      <xs:enumeration value="DC" />
      <xs:enumeration value="EX" />
      <xs:enumeration value="SR" />
      <xs:enumeration value="BL" />
      <xs:enumeration value="OR" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPredefinedBasicTypeEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="BOOLEAN" />
      <xs:enumeration value="INT8" />
      <xs:enumeration value="INT16" />
      <xs:enumeration value="INT24" />
      <xs:enumeration value="INT32" />
      <xs:enumeration value="INT64" />
      <xs:enumeration value="INT128" />
      <xs:enumeration value="INT8U" />
      <xs:enumeration value="INT16U" />
      <xs:enumeration value="INT24U" />
      <xs:enumeration value="INT32U" />
      <xs:enumeration value="FLOAT32" />
      <xs:enumeration value="FLOAT64" />
      <xs:enumeration value="Enum" />
      <xs:enumeration value="Dbpos" />
      <xs:enumeration value="Tcmd" />
      <xs:enumeration value="Quality" />
      <xs:enumeration value="Timestamp" />
      <xs:enumeration value="VisString32" />
      <xs:enumeration value="VisString64" />
      <xs:enumeration value="VisString65" />
      <xs:enumeration value="VisString129" />
      <xs:enumeration value="VisString255" />
      <xs:enumeration value="Octet64" />
      <xs:enumeration value="Unicode255" />
      <xs:enumeration value="Struct" />
      <xs:enumeration value="EntryTime" />
      <xs:enumeration value="Check" />
      <xs:enumeration value="ObjRef" />
      <xs:enumeration value="Currency" />
      <xs:enumeration value="PhyComAddr" />
      <xs:enumeration value="TrgOps" />
      <xs:enumeration value="OptFlds" />
      <xs:enumeration value="SvOptFlds" />
      <xs:enumeration value="EntryID" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tBasicTypeEnum">
    <xs:restriction base="tPredefinedBasicTypeEnum" />
  </xs:simpleType>
  <xs:simpleType name="tValKindEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="Spec" />
      <xs:enumeration value="Conf" />
      <xs:enumeration value="RO" />
      <xs:enumeration value="Set" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tGSEControlTypeEnum">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="GSSE" />
      <xs:enumeration value="GOOSE" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tUnitMultiplierEnum">
    <xs:restriction base="xs:normalizedString">
      <xs:enumeration value="" />
      <xs:enumeration value="m" />
      <xs:enumeration value="k" />
      <xs:enumeration value="M" />
      <xs:enumeration value="mu" />
      <xs:enumeration value="y" />
      <xs:enumeration value="z" />
      <xs:enumeration value="a" />
      <xs:enumeration value="f" />
      <xs:enumeration value="p" />
      <xs:enumeration value="n" />
      <xs:enumeration value="c" />
      <xs:enumeration value="d" />
      <xs:enumeration value="da" />
      <xs:enumeration value="h" />
      <xs:enumeration value="G" />
      <xs:enumeration value="T" />
      <xs:enumeration value="P" />
      <xs:enumeration value="E" />
      <xs:enumeration value="Z" />
      <xs:enumeration value="Y" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tRightEnum">
    <xs:restriction base="xs:normalizedString">
      <xs:enumeration value="full" />
      <xs:enumeration value="fix" />
      <xs:enumeration value="dataflow" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tSDOCount">
    <xs:union memberTypes="xs:unsignedInt tRestrName1stL" />
  </xs:simpleType>
  <xs:simpleType name="tDACount">
    <xs:union memberTypes="xs:unsignedInt tAttributeNameEnum" />
  </xs:simpleType>
  <xs:simpleType name="tSmpMod">
    <xs:restriction base="xs:normalizedString">
      <xs:enumeration value="SmpPerPeriod" />
      <xs:enumeration value="SmpPerSec" />
      <xs:enumeration value="SecPerSmp" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPredefinedPhysConnTypeEnum">
    <xs:restriction base="xs:normalizedString">
      <xs:enumeration value="Connection" />
      <xs:enumeration value="RedConn" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tExtensionPhysConnTypeEnum">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[A-Z][0-9A-Za-z\\-]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPhysConnTypeEnum">
    <xs:union memberTypes="tPredefinedPhysConnTypeEnum tExtensionPhysConnTypeEnum" />
  </xs:simpleType>
  <xs:simpleType name="tServiceType">
    <xs:restriction base="xs:Name">
      <xs:enumeration value="Poll" />
      <xs:enumeration value="Report" />
      <xs:enumeration value="GOOSE" />
      <xs:enumeration value="SMV" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPredefinedTypeOfSecurityEnum">
    <xs:restriction base="xs:normalizedString">
      <xs:enumeration value="None" />
      <xs:enumeration value="Signature" />
      <xs:enumeration value="SignatureAndEncryption" />
    </xs:restriction>
  </xs:simpleType>
  <!--Schema items added from SCL.2007B1.2014-07-18\\SCL_BaseSimpleTypes.xsd-->
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
		</xs:documentation>
  </xs:annotation>
  <xs:simpleType name="tRef">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value=".+/.+/.+/.+(/.+)*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tAnyName">
    <xs:restriction base="xs:normalizedString" />
  </xs:simpleType>
  <xs:simpleType name="tName">
    <xs:restriction base="tAnyName">
      <xs:minLength value="1" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tAcsiName">
    <xs:restriction base="xs:Name">
      <xs:pattern value="[A-Za-z][0-9A-Za-z_]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tRestrName1stU">
    <xs:restriction base="xs:Name">
      <xs:pattern value="[A-Z][0-9A-Za-z]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tRestrName1stL">
    <xs:restriction base="xs:Name">
      <xs:pattern value="[a-z][0-9A-Za-z]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tPAddr">
    <xs:restriction base="xs:normalizedString">
      <xs:minLength value="1" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tSclVersion">
    <xs:restriction base="tName">
      <xs:pattern value="2[0-2][0-9]{2}" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tSclRevision">
    <xs:restriction base="xs:Name">
      <xs:pattern value="[A-Z]" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tSclRelease">
    <xs:restriction base="xs:unsignedByte">
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tEmpty">
    <xs:restriction base="xs:normalizedString">
      <xs:maxLength value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tIEDName">
    <xs:restriction base="tAcsiName">
      <xs:maxLength value="64" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tOnlyRelativeIEDName">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="@" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tIEDNameOrRelative">
    <xs:union memberTypes="tIEDName tOnlyRelativeIEDName" />
  </xs:simpleType>
  <xs:simpleType name="tLDName">
    <xs:restriction base="xs:normalizedString">
      <xs:maxLength value="64" />
      <xs:pattern value="[A-Za-z][0-9A-Za-z_]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLDInst">
    <xs:restriction base="xs:normalizedString">
      <xs:maxLength value="64" />
      <xs:pattern value="[A-Za-z0-9][0-9A-Za-z_]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLDInstOrEmpty">
    <xs:union memberTypes="tLDInst tEmpty" />
  </xs:simpleType>
  <xs:simpleType name="tPrefix">
    <xs:restriction base="xs:normalizedString">
      <xs:maxLength value="11" />
      <xs:pattern value="[A-Za-z][0-9A-Za-z_]*" />
      <xs:pattern value="" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLNInst">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[0-9]{1,12}" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLNInstOrEmpty">
    <xs:union memberTypes="tLNInst tEmpty" />
  </xs:simpleType>
  <xs:simpleType name="tDataName">
    <xs:restriction base="tRestrName1stU">
      <xs:maxLength value="12" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tDataSetName">
    <xs:restriction base="tAcsiName">
      <xs:maxLength value="32" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tCBName">
    <xs:restriction base="tAcsiName">
      <xs:maxLength value="32" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLogName">
    <xs:restriction base="tAcsiName">
      <xs:maxLength value="32" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tAccessPointName">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[A-Za-z0-9][0-9A-Za-z_]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tAssociationID">
    <xs:restriction base="xs:normalizedString">
      <xs:minLength value="1" />
      <xs:pattern value="[0-9A-Za-z]+" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tVisibleBasicLatin">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[ -~]*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tMessageID">
    <xs:restriction base="tVisibleBasicLatin">
      <xs:minLength value="1" />
      <xs:maxLength value="129" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tFullAttributeName">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tFullDOName">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tSubDataName">
    <xs:restriction base="tRestrName1stL">
      <xs:minLength value="1" />
      <xs:maxLength value="60" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tNamespaceName">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value="[ -~]+:20\\d\\d[A-Z]?" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tLineType">
    <xs:restriction base="xs:normalizedString">
      <xs:minLength value="1" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tProcessType">
    <xs:restriction base="xs:normalizedString">
      <xs:minLength value="1" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tProcessName">
    <xs:restriction base="xs:normalizedString">
      <xs:pattern value=".+(/.+)*" />
    </xs:restriction>
  </xs:simpleType>
  <!--Schema items added from SCL.2007B1.2014-07-18\\SCL_IED.xsd-->
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
		</xs:documentation>
  </xs:annotation>
  <xs:attributeGroup name="agAuthentication">
    <xs:attribute name="none" default="true" type="xs:boolean" use="optional" />
    <xs:attribute name="password" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="weak" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="strong" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="certificate" default="false" type="xs:boolean" use="optional" />
  </xs:attributeGroup>
  <xs:attributeGroup name="agSmvOpts">
    <xs:attribute name="refreshTime" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="sampleSynchronized" fixed="true" type="xs:boolean" use="optional" />
    <xs:attribute name="sampleRate" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="dataSet" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="security" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="timestamp" default="false" type="xs:boolean" use="optional" />
  </xs:attributeGroup>
  <xs:attributeGroup name="agOptFields">
    <xs:attribute name="seqNum" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="timeStamp" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="dataSet" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="reasonCode" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="dataRef" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="entryID" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="configRef" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="bufOvfl" default="true" type="xs:boolean" use="optional" />
  </xs:attributeGroup>
  <xs:attributeGroup name="agLDRef">
    <xs:attributeGroup ref="agDesc" />
    <xs:attribute name="iedName" type="tIEDName" use="required" />
    <xs:attribute name="ldInst" type="tLDInst" use="required" />
  </xs:attributeGroup>
  <xs:attributeGroup name="agLNRef">
    <xs:attributeGroup ref="agLDRef" />
    <xs:attribute name="prefix" default="" type="tPrefix" use="optional" />
    <xs:attribute name="lnClass" type="tLNClassEnum" use="required" />
    <xs:attribute name="lnInst" type="tLNInstOrEmpty" use="required" />
  </xs:attributeGroup>
  <xs:complexType name="tIED">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="Services" type="tServices" minOccurs="0" />
          <xs:element name="AccessPoint" type="tAccessPoint" maxOccurs="unbounded">
            <xs:unique name="uniqueLNInAccessPoint">
              <xs:selector xpath="./scl:LN" />
              <xs:field xpath="@inst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@prefix" />
            </xs:unique>
          </xs:element>
          <xs:element name="KDC" type="tKDC" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="name" type="tIEDName" use="required" />
        <xs:attribute name="type" type="xs:normalizedString" use="optional" />
        <xs:attribute name="manufacturer" type="xs:normalizedString" use="optional" />
        <xs:attribute name="configVersion" type="xs:normalizedString" use="optional" />
        <xs:attribute name="originalSclVersion" type="tSclVersion" use="optional" />
        <xs:attribute name="originalSclRevision" type="tSclRevision" use="optional" />
        <xs:attribute name="originalSclRelease" type="tSclRelease" use="optional" />
        <xs:attribute name="engRight" default="full" type="tRightEnum" use="optional" />
        <xs:attribute name="owner" type="xs:normalizedString" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tServices">
    <xs:all>
      <xs:element name="DynAssociation" type="tServiceWithOptionalMax" minOccurs="0" />
      <xs:element name="SettingGroups" type="tSettingGroups" minOccurs="0" />
      <xs:element name="GetDirectory" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="GetDataObjectDefinition" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="DataObjectDirectory" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="GetDataSetValue" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="SetDataSetValue" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="DataSetDirectory" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="ConfDataSet" type="tServiceForConfDataSet" minOccurs="0" />
      <xs:element name="DynDataSet" type="tServiceWithMaxAndMaxAttributes" minOccurs="0" />
      <xs:element name="ReadWrite" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="TimerActivatedControl" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="ConfReportControl" type="tServiceConfReportControl" minOccurs="0" />
      <xs:element name="GetCBValues" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="ConfLogControl" type="tServiceWithMaxNonZero" minOccurs="0" />
      <xs:element name="ReportSettings" type="tReportSettings" minOccurs="0" />
      <xs:element name="LogSettings" type="tLogSettings" minOccurs="0" />
      <xs:element name="GSESettings" type="tGSESettings" minOccurs="0" />
      <xs:element name="SMVSettings" type="tSMVSettings" minOccurs="0" />
      <xs:element name="GSEDir" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="GOOSE" type="tGOOSEcapabilities" minOccurs="0" />
      <xs:element name="GSSE" type="tServiceWithMax" minOccurs="0" />
      <xs:element name="SMVsc" type="tSMVsc" minOccurs="0" />
      <xs:element name="FileHandling" type="tFileHandling" minOccurs="0" />
      <xs:element name="ConfLNs" type="tConfLNs" minOccurs="0" />
      <xs:element name="ClientServices" type="tClientServices" minOccurs="0" />
      <xs:element name="ConfLdName" type="tServiceYesNo" minOccurs="0" />
      <xs:element name="SupSubscription" type="tSupSubscription" minOccurs="0" />
      <xs:element name="ConfSigRef" type="tServiceWithMaxNonZero" minOccurs="0" />
      <xs:element name="ValueHandling" type="tValueHandling" minOccurs="0" />
      <xs:element name="RedProt" type="tRedProt" minOccurs="0" />
      <xs:element name="TimeSyncProt" type="tTimeSyncProt" minOccurs="0" />
      <xs:element name="CommProt" type="tCommProt" minOccurs="0" />
    </xs:all>
    <xs:attribute name="nameLength" default="32" use="optional">
      <xs:simpleType>
        <xs:restriction base="xs:token">
          <xs:pattern value="32" />
          <xs:pattern value="64" />
          <xs:pattern value="6[5-9]" />
          <xs:pattern value="[7-9]\\d" />
          <xs:pattern value="[1-9]\\d\\d+" />
        </xs:restriction>
      </xs:simpleType>
    </xs:attribute>
  </xs:complexType>
  <xs:complexType name="tAccessPoint">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:choice minOccurs="0">
            <xs:element name="Server" type="tServer">
              <xs:unique name="uniqueAssociationInServer">
                <xs:selector xpath="./scl:Association" />
                <xs:field xpath="@associationID" />
              </xs:unique>
            </xs:element>
            <xs:element ref="LN" maxOccurs="unbounded" />
            <xs:element name="ServerAt" type="tServerAt" />
          </xs:choice>
          <xs:element name="Services" type="tServices" minOccurs="0" />
          <xs:element name="GOOSESecurity" type="tCertificate" minOccurs="0" maxOccurs="7" />
          <xs:element name="SMVSecurity" type="tCertificate" minOccurs="0" maxOccurs="7" />
        </xs:sequence>
        <xs:attribute name="name" type="tAccessPointName" use="required" />
        <xs:attribute name="router" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="clock" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="kdc" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tCertificate">
    <xs:complexContent>
      <xs:extension base="tNaming">
        <xs:sequence>
          <xs:element name="Subject" type="tCert" />
          <xs:element name="IssuerName" type="tCert" />
        </xs:sequence>
        <xs:attribute name="xferNumber" type="xs:unsignedInt" use="optional" />
        <xs:attribute name="serialNumber" use="required">
          <xs:simpleType>
            <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1" />
              <xs:pattern value="[0-9]+" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tCert">
    <xs:attribute name="commonName" use="required">
      <xs:simpleType>
        <xs:restriction base="xs:normalizedString">
          <xs:minLength value="4" />
          <xs:pattern value="none" />
          <xs:pattern value="CN=.+" />
        </xs:restriction>
      </xs:simpleType>
    </xs:attribute>
    <xs:attribute name="idHierarchy" use="required">
      <xs:simpleType>
        <xs:restriction base="xs:normalizedString">
          <xs:minLength value="1" />
        </xs:restriction>
      </xs:simpleType>
    </xs:attribute>
  </xs:complexType>
  <xs:complexType name="tServerAt">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="apName" type="tAccessPointName" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tServer">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="Authentication">
            <xs:complexType>
              <xs:attributeGroup ref="agAuthentication" />
            </xs:complexType>
          </xs:element>
          <xs:element name="LDevice" type="tLDevice" maxOccurs="unbounded">
            <xs:unique name="uniqueLNInLDevice">
              <xs:selector xpath="./scl:LN" />
              <xs:field xpath="@inst" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@prefix" />
            </xs:unique>
          </xs:element>
          <xs:element name="Association" type="tAssociation" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="timeout" default="30" type="xs:unsignedInt" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tLDevice">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element ref="LN0" />
          <xs:element ref="LN" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="AccessControl" type="tAccessControl" minOccurs="0" />
        </xs:sequence>
        <xs:attribute name="inst" type="tLDInst" use="required" />
        <xs:attribute name="ldName" type="tLDName" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType mixed="true" name="tAccessControl">
    <xs:complexContent>
      <xs:extension base="tAnyContentFromOtherNamespace" />
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tAssociation">
    <xs:attributeGroup ref="agLNRef" />
    <xs:attribute name="kind" type="tAssociationKindEnum" use="required" />
    <xs:attribute name="associationID" type="tAssociationID" use="optional" />
  </xs:complexType>
  <xs:element name="LN0">
    <xs:complexType>
      <xs:complexContent>
        <xs:extension base="tLN0" />
      </xs:complexContent>
    </xs:complexType>
    <xs:unique name="uniqueReportControlInLN0">
      <xs:selector xpath="./scl:ReportControl" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueLogControlInLN0">
      <xs:selector xpath="./scl:LogControl" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueGSEControlInLN0">
      <xs:selector xpath="./scl:GSEControl" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueSampledValueControlInLN0">
      <xs:selector xpath="./scl:SampledValueControl" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:key name="DataSetKeyLN0">
      <xs:selector xpath="./scl:DataSet" />
      <xs:field xpath="@name" />
    </xs:key>
    <xs:keyref name="ref2DataSetReportLN0" refer="DataSetKeyLN0">
      <xs:selector xpath="./scl:ReportControl" />
      <xs:field xpath="@datSet" />
    </xs:keyref>
    <xs:keyref name="ref2DataSetLogLN0" refer="DataSetKeyLN0">
      <xs:selector xpath="./scl:LogControl" />
      <xs:field xpath="@datSet" />
    </xs:keyref>
    <xs:keyref name="ref2DataSetGSELN0" refer="DataSetKeyLN0">
      <xs:selector xpath="./scl:GSEControl" />
      <xs:field xpath="@datSet" />
    </xs:keyref>
    <xs:keyref name="ref2DataSetSVLN0" refer="DataSetKeyLN0">
      <xs:selector xpath="./scl:SampledValueControl" />
      <xs:field xpath="@datSet" />
    </xs:keyref>
    <xs:unique name="uniqueDOIinLN0">
      <xs:selector xpath="./scl:DOI" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueLogInLN0">
      <xs:selector xpath="./scl:Log" />
      <xs:field xpath="@name" />
    </xs:unique>
  </xs:element>
  <xs:element name="LN" type="tLN">
    <xs:unique name="uniqueReportControlInLN">
      <xs:selector xpath="./scl:ReportControl" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueLogControlInLN">
      <xs:selector xpath="./scl:LogControl" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:key name="DataSetKeyInLN">
      <xs:selector xpath="./scl:DataSet" />
      <xs:field xpath="@name" />
    </xs:key>
    <xs:keyref name="ref2DataSetReport" refer="DataSetKeyInLN">
      <xs:selector xpath="./scl:ReportControl" />
      <xs:field xpath="@datSet" />
    </xs:keyref>
    <xs:keyref name="ref2DataSetLog" refer="DataSetKeyInLN">
      <xs:selector xpath="./scl:LogControl" />
      <xs:field xpath="@datSet" />
    </xs:keyref>
    <xs:unique name="uniqueDOIinLN">
      <xs:selector xpath="./scl:DOI" />
      <xs:field xpath="@name" />
    </xs:unique>
    <xs:unique name="uniqueLogInLN">
      <xs:selector xpath="./scl:Log" />
      <xs:field xpath="@name" />
    </xs:unique>
  </xs:element>
  <xs:complexType abstract="true" name="tAnyLN">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="DataSet" type="tDataSet" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="ReportControl" type="tReportControl" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="LogControl" type="tLogControl" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="DOI" type="tDOI" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniqueSDI_DAIinDOI">
              <xs:selector xpath="./scl:DAI|./scl:SDI" />
              <xs:field xpath="@name" />
              <xs:field xpath="@ix" />
            </xs:unique>
          </xs:element>
          <xs:element name="Inputs" type="tInputs" minOccurs="0">
            <xs:unique name="uniqueExtRefInInputs">
              <xs:selector xpath="./scl:ExtRef" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@ldInst" />
              <xs:field xpath="@prefix" />
              <xs:field xpath="@lnClass" />
              <xs:field xpath="@lnInst" />
              <xs:field xpath="@doName" />
              <xs:field xpath="@daName" />
              <xs:field xpath="@intAddr" />
            </xs:unique>
          </xs:element>
          <xs:element name="Log" type="tLog" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="lnType" type="tName" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tLN">
    <xs:complexContent>
      <xs:extension base="tAnyLN">
        <xs:attribute name="prefix" default="" type="tPrefix" use="optional" />
        <xs:attribute name="lnClass" type="tLNClassEnum" use="required" />
        <xs:attribute name="inst" type="tLNInst" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tLN0">
    <xs:complexContent>
      <xs:extension base="tAnyLN">
        <xs:sequence>
          <xs:element name="GSEControl" type="tGSEControl" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="SampledValueControl" type="tSampledValueControl" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="SettingControl" type="tSettingControl" minOccurs="0" />
        </xs:sequence>
        <xs:attribute name="lnClass" fixed="LLN0" type="tLNClassEnum" use="required" />
        <xs:attribute name="inst" fixed="" type="xs:normalizedString" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tDataSet">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:choice maxOccurs="unbounded">
          <xs:element name="FCDA" type="tFCDA" />
        </xs:choice>
        <xs:attribute name="name" type="tDataSetName" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tFCDA">
    <xs:attribute name="ldInst" type="tLDInst" use="optional" />
    <xs:attribute name="prefix" default="" type="tPrefix" use="optional" />
    <xs:attribute name="lnClass" type="tLNClassEnum" use="optional" />
    <xs:attribute name="lnInst" type="tLNInst" use="optional" />
    <xs:attribute name="doName" type="tFullDOName" use="optional" />
    <xs:attribute name="daName" type="tFullAttributeName" use="optional" />
    <xs:attribute name="fc" type="tFCEnum" use="required" />
    <xs:attribute name="ix" type="xs:unsignedInt" use="optional" />
  </xs:complexType>
  <xs:complexType abstract="true" name="tControl">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="name" type="tCBName" use="required" />
        <xs:attribute name="datSet" type="tDataSetName" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tControlWithTriggerOpt">
    <xs:complexContent>
      <xs:extension base="tControl">
        <xs:sequence>
          <xs:element name="TrgOps" type="tTrgOps" minOccurs="0" />
        </xs:sequence>
        <xs:attribute name="intgPd" default="0" type="xs:unsignedInt" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tTrgOps">
    <xs:attribute name="dchg" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="qchg" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="dupd" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="period" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="gi" default="true" type="xs:boolean" use="optional" />
  </xs:complexType>
  <xs:complexType name="tReportControl">
    <xs:complexContent>
      <xs:extension base="tControlWithTriggerOpt">
        <xs:sequence>
          <xs:element name="OptFields">
            <xs:complexType>
              <xs:attributeGroup ref="agOptFields" />
            </xs:complexType>
          </xs:element>
          <xs:element name="RptEnabled" type="tRptEnabled" minOccurs="0" />
        </xs:sequence>
        <xs:attribute name="rptID" type="tMessageID" use="optional" />
        <xs:attribute name="confRev" type="xs:unsignedInt" use="required" />
        <xs:attribute name="buffered" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="bufTime" default="0" type="xs:unsignedInt" use="optional" />
        <xs:attribute name="indexed" default="true" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tRptEnabled">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="ClientLN" type="tClientLN" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="max" default="1" type="xs:unsignedInt" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tClientLN">
    <xs:attributeGroup ref="agLNRef" />
    <xs:attribute name="apRef" type="tAccessPointName" use="optional" />
  </xs:complexType>
  <xs:complexType name="tLogControl">
    <xs:complexContent>
      <xs:extension base="tControlWithTriggerOpt">
        <xs:attribute name="ldInst" type="tLDInst" use="optional" />
        <xs:attribute name="prefix" default="" type="tPrefix" use="optional" />
        <xs:attribute name="lnClass" default="LLN0" type="tLNClassEnum" use="optional" />
        <xs:attribute name="lnInst" type="tLNInst" use="optional" />
        <xs:attribute name="logName" type="tLogName" use="required" />
        <xs:attribute name="logEna" default="true" type="xs:boolean" use="optional" />
        <xs:attribute name="reasonCode" default="true" type="xs:boolean" use="optional" />
        <xs:attribute name="bufTime" default="0" type="xs:unsignedInt" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tInputs">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="ExtRef" type="tExtRef" maxOccurs="unbounded" />
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tExtRef">
    <xs:attributeGroup ref="agDesc" />
    <xs:attribute name="iedName" type="tIEDNameOrRelative" use="optional" />
    <xs:attribute name="ldInst" type="tLDInst" use="optional" />
    <xs:attribute name="prefix" type="tPrefix" use="optional" />
    <xs:attribute name="lnClass" type="tLNClassEnum" use="optional" />
    <xs:attribute name="lnInst" type="tLNInst" use="optional" />
    <xs:attribute name="doName" type="tFullDOName" use="optional" />
    <xs:attribute name="daName" type="tFullAttributeName" use="optional" />
    <xs:attribute name="intAddr" type="xs:normalizedString" use="optional" />
    <xs:attribute name="serviceType" type="tServiceType" use="optional" />
    <xs:attribute name="srcLDInst" type="tLDInst" use="optional" />
    <xs:attribute name="srcPrefix" type="tPrefix" use="optional" />
    <xs:attribute name="srcLNClass" type="tLNClassEnum" use="optional" />
    <xs:attribute name="srcLNInst" type="tLNInst" use="optional" />
    <xs:attribute name="srcCBName" type="tCBName" use="optional" />
  </xs:complexType>
  <xs:complexType name="tLog">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="name" type="tLogName" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tControlWithIEDName">
    <xs:complexContent>
      <xs:extension base="tControl">
        <xs:sequence>
          <xs:element name="IEDName" minOccurs="0" maxOccurs="unbounded">
            <xs:complexType>
              <xs:simpleContent>
                <xs:extension base="tIEDName">
                  <xs:attribute name="apRef" type="tAccessPointName" use="optional" />
                  <xs:attribute name="ldInst" type="tLDInst" use="optional" />
                  <xs:attribute name="prefix" type="tPrefix" use="optional" />
                  <xs:attribute name="lnClass" type="tLNClassEnum" use="optional" />
                  <xs:attribute name="lnInst" type="tLNInst" use="optional" />
                </xs:extension>
              </xs:simpleContent>
            </xs:complexType>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="confRev" type="xs:unsignedInt" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tProtocol">
    <xs:simpleContent>
      <xs:extension base="xs:normalizedString">
        <xs:attribute name="mustUnderstand" fixed="true" type="xs:boolean" use="required" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tGSEControl">
    <xs:complexContent>
      <xs:extension base="tControlWithIEDName">
        <xs:sequence>
          <xs:element name="Protocol" type="tProtocol" minOccurs="0" fixed="R-GOOSE" />
        </xs:sequence>
        <xs:attribute name="type" default="GOOSE" type="tGSEControlTypeEnum" use="optional" />
        <xs:attribute name="appID" type="tMessageID" use="required" />
        <xs:attribute name="fixedOffs" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="securityEnable" default="None" type="tPredefinedTypeOfSecurityEnum" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSampledValueControl">
    <xs:complexContent>
      <xs:extension base="tControlWithIEDName">
        <xs:sequence>
          <xs:element name="SmvOpts">
            <xs:complexType>
              <xs:attributeGroup ref="agSmvOpts" />
            </xs:complexType>
          </xs:element>
          <xs:element name="Protocol" type="tProtocol" minOccurs="0" fixed="R-SV" />
        </xs:sequence>
        <xs:attribute name="smvID" type="tMessageID" use="required" />
        <xs:attribute name="multicast" default="true" type="xs:boolean" />
        <xs:attribute name="smpRate" type="xs:unsignedInt" use="required" />
        <xs:attribute name="nofASDU" type="xs:unsignedInt" use="required" />
        <xs:attribute name="smpMod" default="SmpPerPeriod" type="tSmpMod" use="optional" />
        <xs:attribute name="securityEnable" default="None" type="tPredefinedTypeOfSecurityEnum" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSettingControl">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="numOfSGs" use="required">
          <xs:simpleType>
            <xs:restriction base="xs:unsignedInt">
              <xs:minInclusive value="1" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
        <xs:attribute name="actSG" default="1" use="optional">
          <xs:simpleType>
            <xs:restriction base="xs:unsignedInt">
              <xs:minInclusive value="1" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
        <xs:attribute name="resvTms" type="xs:unsignedShort" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tDOI">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:choice minOccurs="0" maxOccurs="unbounded">
          <xs:element name="SDI" type="tSDI">
            <xs:unique name="uniqueSDI_DAIinSDI">
              <xs:selector xpath="./scl:DAI|./scl:SDI" />
              <xs:field xpath="@name" />
              <xs:field xpath="@ix" />
            </xs:unique>
          </xs:element>
          <xs:element name="DAI" type="tDAI" />
        </xs:choice>
        <xs:attribute name="name" type="tDataName" use="required" />
        <xs:attribute name="ix" type="xs:unsignedInt" use="optional" />
        <xs:attribute name="accessControl" type="xs:normalizedString" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSDI">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:choice minOccurs="0" maxOccurs="unbounded">
          <xs:element name="SDI" type="tSDI" />
          <xs:element name="DAI" type="tDAI" />
        </xs:choice>
        <xs:attribute name="name" type="tAttributeNameEnum" use="required" />
        <xs:attribute name="ix" type="xs:unsignedInt" use="optional" />
        <xs:attribute name="sAddr" type="xs:normalizedString" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tDAI">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="Val" type="tVal" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="name" type="tAttributeNameEnum" use="required" />
        <xs:attribute name="sAddr" type="xs:normalizedString" use="optional" />
        <xs:attribute name="valKind" type="tValKindEnum" use="optional" />
        <xs:attribute name="ix" type="xs:unsignedInt" use="optional" />
        <xs:attribute name="valImport" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tServiceYesNo" />
  <xs:complexType name="tServiceWithOptionalMax">
    <xs:attribute name="max" type="xs:unsignedInt" use="optional" />
  </xs:complexType>
  <xs:complexType name="tServiceWithMax">
    <xs:attribute name="max" type="xs:unsignedInt" use="required" />
  </xs:complexType>
  <xs:complexType name="tServiceWithMaxNonZero">
    <xs:attribute name="max" use="required">
      <xs:simpleType>
        <xs:restriction base="xs:unsignedInt">
          <xs:minExclusive value="0" />
        </xs:restriction>
      </xs:simpleType>
    </xs:attribute>
  </xs:complexType>
  <xs:complexType name="tServiceConfReportControl">
    <xs:complexContent>
      <xs:extension base="tServiceWithMax">
        <xs:attribute name="bufMode" use="optional">
          <xs:simpleType>
            <xs:restriction base="xs:Name">
              <xs:enumeration value="unbuffered" />
              <xs:enumeration value="buffered" />
              <xs:enumeration value="both" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
        <xs:attribute name="bufConf" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tServiceWithMaxAndMaxAttributes">
    <xs:complexContent>
      <xs:extension base="tServiceWithMax">
        <xs:attribute name="maxAttributes" use="optional">
          <xs:simpleType>
            <xs:restriction base="xs:unsignedInt">
              <xs:minExclusive value="0" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tServiceWithMaxAndModify">
    <xs:complexContent>
      <xs:extension base="tServiceWithMax">
        <xs:attribute name="modify" default="true" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tServiceForConfDataSet">
    <xs:complexContent>
      <xs:extension base="tServiceWithMaxAndMaxAttributes">
        <xs:attribute name="modify" default="true" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tClientServices">
    <xs:sequence>
      <xs:element name="TimeSyncProt" type="tTimeSyncProt" minOccurs="0" />
    </xs:sequence>
    <xs:attribute name="goose" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="gsse" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="bufReport" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="unbufReport" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="readLog" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="sv" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="supportsLdName" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="maxAttributes" use="optional">
      <xs:simpleType>
        <xs:restriction base="xs:unsignedInt" />
      </xs:simpleType>
    </xs:attribute>
    <xs:attribute name="maxReports" use="optional">
      <xs:simpleType>
        <xs:restriction base="xs:unsignedInt" />
      </xs:simpleType>
    </xs:attribute>
    <xs:attribute name="maxGOOSE" use="optional">
      <xs:simpleType>
        <xs:restriction base="xs:unsignedInt" />
      </xs:simpleType>
    </xs:attribute>
    <xs:attribute name="maxSMV" use="optional">
      <xs:simpleType>
        <xs:restriction base="xs:unsignedInt" />
      </xs:simpleType>
    </xs:attribute>
  </xs:complexType>
  <xs:complexType abstract="true" name="tServiceSettings">
    <xs:attribute name="cbName" default="Fix" type="tServiceSettingsNoDynEnum" use="optional" />
    <xs:attribute name="datSet" default="Fix" type="tServiceSettingsEnum" use="optional" />
  </xs:complexType>
  <xs:complexType name="tReportSettings">
    <xs:complexContent>
      <xs:extension base="tServiceSettings">
        <xs:attribute name="rptID" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="optFields" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="bufTime" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="trgOps" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="intgPd" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="resvTms" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="owner" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tLogSettings">
    <xs:complexContent>
      <xs:extension base="tServiceSettings">
        <xs:attribute name="logEna" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="trgOps" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="intgPd" default="Fix" type="tServiceSettingsEnum" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tGSESettings">
    <xs:complexContent>
      <xs:extension base="tServiceSettings">
        <xs:attribute name="appID" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="dataLabel" default="Fix" type="tServiceSettingsEnum" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSMVSettings">
    <xs:complexContent>
      <xs:extension base="tServiceSettings">
        <xs:choice maxOccurs="unbounded">
          <xs:element name="SmpRate">
            <xs:simpleType>
              <xs:restriction base="xs:unsignedInt">
                <xs:minExclusive value="0" />
              </xs:restriction>
            </xs:simpleType>
          </xs:element>
          <xs:element name="SamplesPerSec">
            <xs:simpleType>
              <xs:restriction base="xs:unsignedInt">
                <xs:minExclusive value="0" />
              </xs:restriction>
            </xs:simpleType>
          </xs:element>
          <xs:element name="SecPerSamples">
            <xs:simpleType>
              <xs:restriction base="xs:unsignedInt">
                <xs:minExclusive value="0" />
              </xs:restriction>
            </xs:simpleType>
          </xs:element>
        </xs:choice>
        <xs:attribute name="svID" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="optFields" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="smpRate" default="Fix" type="tServiceSettingsEnum" use="optional" />
        <xs:attribute name="samplesPerSec" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="pdcTimeStamp" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tConfLNs">
    <xs:attribute name="fixPrefix" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="fixLnInst" default="false" type="xs:boolean" use="optional" />
  </xs:complexType>
  <xs:complexType name="tValueHandling">
    <xs:attribute name="setToRO" default="false" type="xs:boolean" use="optional" />
  </xs:complexType>
  <xs:complexType name="tFileHandling">
    <xs:complexContent>
      <xs:extension base="tServiceYesNo">
        <xs:attribute name="mms" default="true" type="xs:boolean" use="optional" />
        <xs:attribute name="ftp" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="ftps" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tGOOSEcapabilities">
    <xs:complexContent>
      <xs:extension base="tServiceWithMax">
        <xs:attribute name="fixedOffs" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tRedProt">
    <xs:attribute name="hsr" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="prp" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="rstp" default="false" type="xs:boolean" use="optional" />
  </xs:complexType>
  <xs:complexType name="tTimeSyncProt">
    <xs:complexContent>
      <xs:extension base="tServiceYesNo">
        <xs:attribute name="sntp" default="true" type="xs:boolean" use="optional" />
        <xs:attribute name="c37_238" default="false" type="xs:boolean" use="optional" />
        <xs:attribute name="other" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSMVsc">
    <xs:complexContent>
      <xs:extension base="tServiceWithMax">
        <xs:attribute name="delivery" default="multicast" type="tSMVDeliveryEnum" use="optional" />
        <xs:attribute name="deliveryConf" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSupSubscription">
    <xs:attribute name="maxGo" type="xs:unsignedInt" use="required" />
    <xs:attribute name="maxSv" type="xs:unsignedInt" use="required" />
  </xs:complexType>
  <xs:complexType name="tCommProt">
    <xs:complexContent>
      <xs:extension base="tServiceYesNo">
        <xs:attribute name="ipv6" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tKDC">
    <xs:attribute name="iedName" type="tIEDName" use="required" />
    <xs:attribute name="apName" type="tAccessPointName" use="required" />
  </xs:complexType>
  <xs:complexType name="tSettingGroups">
    <xs:all>
      <xs:element name="SGEdit" minOccurs="0">
        <xs:complexType>
          <xs:complexContent>
            <xs:extension base="tServiceYesNo">
              <xs:attribute name="resvTms" default="false" type="xs:boolean" use="optional" />
            </xs:extension>
          </xs:complexContent>
        </xs:complexType>
      </xs:element>
      <xs:element name="ConfSG" minOccurs="0">
        <xs:complexType>
          <xs:complexContent>
            <xs:extension base="tServiceYesNo">
              <xs:attribute name="resvTms" default="false" type="xs:boolean" use="optional" />
            </xs:extension>
          </xs:complexContent>
        </xs:complexType>
      </xs:element>
    </xs:all>
  </xs:complexType>
  <xs:element name="IED" type="tIED">
    <xs:key name="LDeviceInIEDKey">
      <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice" />
      <xs:field xpath="@inst" />
    </xs:key>
    <xs:keyref name="ref2LDeviceInDataSetForFCDAinLN" refer="LDeviceInIEDKey">
      <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN/scl:DataSet/scl:FCDA" />
      <xs:field xpath="@ldInst" />
    </xs:keyref>
    <xs:keyref name="ref2LDeviceInDataSetForFCDAinLN0" refer="LDeviceInIEDKey">
      <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0/scl:DataSet/scl:FCDA" />
      <xs:field xpath="@ldInst" />
    </xs:keyref>
    <xs:key name="AccessPointInIEDKey">
      <xs:selector xpath="./scl:AccessPoint" />
      <xs:field xpath="@name" />
    </xs:key>
    <xs:keyref name="ServerAtRef2AccessPoint" refer="AccessPointInIEDKey">
      <xs:selector xpath="./scl:AccessPoint/scl:ServerAt" />
      <xs:field xpath="@apName" />
    </xs:keyref>
  </xs:element>
  <!--Schema items added from SCL.2007B1.2014-07-18\\SCL_Communication.xsd-->
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
		</xs:documentation>
  </xs:annotation>
  <xs:complexType abstract="true" name="tControlBlock">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="Address" type="tAddress" minOccurs="0" />
        </xs:sequence>
        <xs:attribute name="ldInst" type="tLDInst" use="required" />
        <xs:attribute name="cbName" type="tCBName" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tCommunication">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="SubNetwork" type="tSubNetwork" maxOccurs="unbounded">
            <xs:unique name="uniqueConnectedAP">
              <xs:selector xpath="./scl:ConnectedAP" />
              <xs:field xpath="@iedName" />
              <xs:field xpath="@apName" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSubNetwork">
    <xs:complexContent>
      <xs:extension base="tNaming">
        <xs:sequence>
          <xs:element name="BitRate" type="tBitRateInMbPerSec" minOccurs="0" />
          <xs:element name="ConnectedAP" type="tConnectedAP" maxOccurs="unbounded">
            <xs:unique name="uniqueGSEinConnectedAP">
              <xs:selector xpath="./scl:GSE" />
              <xs:field xpath="@cbName" />
              <xs:field xpath="@ldInst" />
            </xs:unique>
            <xs:unique name="uniqueSMVinConnectedAP">
              <xs:selector xpath="./scl:SMV" />
              <xs:field xpath="@cbName" />
              <xs:field xpath="@ldInst" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="type" type="xs:normalizedString" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tConnectedAP">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="Address" type="tAddress" minOccurs="0" />
          <xs:element name="GSE" type="tGSE" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="SMV" type="tSMV" minOccurs="0" maxOccurs="unbounded" />
          <xs:element name="PhysConn" type="tPhysConn" minOccurs="0" maxOccurs="unbounded">
            <xs:unique name="uniquePTypeInPhysConn">
              <xs:selector xpath="./scl:P" />
              <xs:field xpath="@type" />
            </xs:unique>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="iedName" type="tIEDName" use="required" />
        <xs:attribute name="apName" type="tAccessPointName" use="required" />
        <xs:attribute name="redProt" type="tRedProtEnum" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tAddress">
    <xs:sequence>
      <xs:element name="P" type="tP" maxOccurs="unbounded" />
    </xs:sequence>
  </xs:complexType>
  <xs:complexType name="tGSE">
    <xs:complexContent>
      <xs:extension base="tControlBlock">
        <xs:sequence>
          <xs:element name="MinTime" type="tDurationInMilliSec" minOccurs="0" />
          <xs:element name="MaxTime" type="tDurationInMilliSec" minOccurs="0" />
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSMV">
    <xs:complexContent>
      <xs:extension base="tControlBlock" />
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tPhysConn">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="P" type="tP_PhysConn" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="type" type="tPhysConnTypeEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tP_PhysConn">
    <xs:simpleContent>
      <xs:extension base="tPAddr">
        <xs:attribute name="type" type="tPTypePhysConnEnum" use="required" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP">
    <xs:simpleContent>
      <xs:extension base="tPAddr">
        <xs:attribute name="type" type="tPTypeEnum" use="required" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tP_IPbase">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern id="IPv4" value="([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IP">
    <xs:simpleContent>
      <xs:restriction base="tP_IPbase">
        <xs:attribute name="type" fixed="IP" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IP-SUBNET">
    <xs:simpleContent>
      <xs:restriction base="tP_IPbase">
        <xs:attribute name="type" fixed="IP-SUBNET" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IP-GATEWAY">
    <xs:simpleContent>
      <xs:restriction base="tP_IPbase">
        <xs:attribute name="type" fixed="IP-GATEWAY" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tP_IPv6base">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern id="IPv6" value="([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IPv6">
    <xs:simpleContent>
      <xs:restriction base="tP_IPv6base">
        <xs:attribute name="type" fixed="IPv6" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IPv6-SUBNET">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern id="IPv6_Subnet" value="/[1-9]|/[1-9][0-9]|/1[0-1][0-9]|/12[0-7]" />
        <xs:attribute name="type" fixed="IPv6-SUBNET" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IPv6-GATEWAY">
    <xs:simpleContent>
      <xs:restriction base="tP_IPv6base">
        <xs:attribute name="type" fixed="IPv6-GATEWAY" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_DNSName">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="\\S*" />
        <xs:attribute name="type" fixed="DNSName" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IPv6FlowLabel">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="[0-9a-fA-F]{1,5}" />
        <xs:attribute name="type" fixed="IPv6FlowLabel" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-NSAP">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:maxLength value="40" />
        <xs:pattern value="[0-9A-F]+" />
        <xs:attribute name="type" fixed="OSI-NSAP" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-TSEL">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:maxLength value="8" />
        <xs:pattern value="[0-9A-F]+" />
        <xs:attribute name="type" fixed="OSI-TSEL" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-SSEL">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:maxLength value="16" />
        <xs:pattern value="[0-9A-F]+" />
        <xs:attribute name="type" fixed="OSI-SSEL" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-PSEL">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:maxLength value="16" />
        <xs:pattern value="[0-9A-F]+" />
        <xs:attribute name="type" fixed="OSI-PSEL" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-AP-Title">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="[0-9,]+" />
        <xs:attribute name="type" fixed="OSI-AP-Title" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-AP-Invoke">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:maxLength value="5" />
        <xs:pattern value="[0-9]+" />
        <xs:attribute name="type" fixed="OSI-AP-Invoke" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-AE-Qualifier">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:maxLength value="5" />
        <xs:pattern value="[0-9]+" />
        <xs:attribute name="type" fixed="OSI-AE-Qualifier" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_OSI-AE-Invoke">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:maxLength value="5" />
        <xs:pattern value="[0-9]+" />
        <xs:attribute name="type" fixed="OSI-AE-Invoke" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_MAC-Address">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}" />
        <xs:attribute name="type" fixed="MAC-Address" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_APPID">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="[0-9A-F]{4}" />
        <xs:attribute name="type" fixed="APPID" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_VLAN-PRIORITY">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="[0-7]" />
        <xs:attribute name="type" fixed="VLAN-PRIORITY" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_VLAN-ID">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="[0-9A-F]{3}" />
        <xs:attribute name="type" fixed="VLAN-ID" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType abstract="true" name="tP_Port">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern value="0" />
        <xs:pattern value="[1-9][0-9]{0,3}" />
        <xs:pattern value="[1-5][0-9]{4,4}" />
        <xs:pattern value="6[0-4][0-9]{3,3}" />
        <xs:pattern value="65[0-4][0-9]{2,2}" />
        <xs:pattern value="655[0-2][0-9]" />
        <xs:pattern value="6553[0-5]" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_SNTP-Port">
    <xs:simpleContent>
      <xs:restriction base="tP_Port">
        <xs:attribute name="type" fixed="SNTP-Port" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_MMS-Port">
    <xs:simpleContent>
      <xs:restriction base="tP_Port">
        <xs:attribute name="type" fixed="MMS-Port" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_UDP-Port">
    <xs:simpleContent>
      <xs:restriction base="tP_Port">
        <xs:attribute name="type" fixed="IP-UDP-PORT" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_TCP-Port">
    <xs:simpleContent>
      <xs:restriction base="tP_Port">
        <xs:attribute name="type" fixed="IP-TCP-PORT" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_IPv6ClassOfTraffic">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern id="Values0-255" value="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]" />
        <xs:attribute name="type" fixed="IPv6ClassOfTraffic" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tP_C37-118-IP-Port">
    <xs:simpleContent>
      <xs:restriction base="tP">
        <xs:pattern id="Values1025-65535" value="102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]" />
        <xs:attribute name="type" fixed="C37-118-IP-Port" type="tPTypeEnum" use="required" />
      </xs:restriction>
    </xs:simpleContent>
  </xs:complexType>
  <xs:element name="Communication" type="tCommunication">
    <xs:unique name="uniqueSubNetwork">
      <xs:selector xpath="./scl:SubNetwork" />
      <xs:field xpath="@name" />
    </xs:unique>
  </xs:element>
  <!--Schema items added from SCL.2007B1.2014-07-18\\SCL_DataTypeTemplates.xsd-->
  <xs:annotation>
    <xs:documentation xml:lang="en">
			SCL schema version "2007" revision "B" release 1,  for IEC 61850-6 Ed. 2.1. Draft 2014-07-18.

			COPYRIGHT (c) IEC, 2014. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
		</xs:documentation>
  </xs:annotation>
  <xs:attributeGroup name="agDATrgOp">
    <xs:attribute name="dchg" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="qchg" default="false" type="xs:boolean" use="optional" />
    <xs:attribute name="dupd" default="false" type="xs:boolean" use="optional" />
  </xs:attributeGroup>
  <xs:complexType abstract="true" name="tAbstractDataAttribute">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:sequence>
          <xs:element name="Val" type="tVal" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="name" type="tAttributeNameEnum" use="required" />
        <xs:attribute name="sAddr" type="xs:normalizedString" use="optional" />
        <xs:attribute name="bType" type="tBasicTypeEnum" use="required" />
        <xs:attribute name="valKind" default="Set" type="tValKindEnum" use="optional" />
        <xs:attribute name="type" type="tAnyName" use="optional" />
        <xs:attribute name="count" default="0" type="tDACount" use="optional" />
        <xs:attribute name="valImport" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tLNodeType">
    <xs:complexContent>
      <xs:extension base="tIDNaming">
        <xs:sequence>
          <xs:element name="DO" type="tDO" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="iedType" default="" type="tAnyName" use="optional" />
        <xs:attribute name="lnClass" type="tLNClassEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tDO">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="name" type="tDataName" use="required" />
        <xs:attribute name="type" type="tName" use="required" />
        <xs:attribute name="accessControl" type="xs:normalizedString" use="optional" />
        <xs:attribute name="transient" default="false" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tDOType">
    <xs:complexContent>
      <xs:extension base="tIDNaming">
        <xs:choice minOccurs="0" maxOccurs="unbounded">
          <xs:element name="SDO" type="tSDO" />
          <xs:element name="DA" type="tDA">
            <xs:unique name="uniqueProtNsInDA">
              <xs:selector xpath="scl:ProtNs" />
              <xs:field xpath="@type" />
              <xs:field xpath="." />
            </xs:unique>
          </xs:element>
        </xs:choice>
        <xs:attribute name="iedType" default="" type="tAnyName" use="optional" />
        <xs:attribute name="cdc" type="tCDCEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tSDO">
    <xs:complexContent>
      <xs:extension base="tUnNaming">
        <xs:attribute name="name" type="tSubDataName" use="required" />
        <xs:attribute name="type" type="tName" use="required" />
        <xs:attribute name="count" default="0" type="tSDOCount" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tDA">
    <xs:complexContent>
      <xs:extension base="tAbstractDataAttribute">
        <xs:sequence>
          <xs:element name="ProtNs" type="tProtNs" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attributeGroup ref="agDATrgOp" />
        <xs:attribute name="fc" type="tFCEnum" use="required" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tDAType">
    <xs:complexContent>
      <xs:extension base="tIDNaming">
        <xs:sequence>
          <xs:element name="BDA" type="tBDA" maxOccurs="unbounded" />
          <xs:element name="ProtNs" type="tProtNs" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="iedType" default="" type="tAnyName" use="optional" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tBDA">
    <xs:complexContent>
      <xs:extension base="tAbstractDataAttribute" />
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tEnumType">
    <xs:complexContent>
      <xs:extension base="tIDNaming">
        <xs:sequence>
          <xs:element name="EnumVal" type="tEnumVal" maxOccurs="unbounded" />
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:complexType name="tProtNs">
    <xs:simpleContent>
      <xs:extension base="tNamespaceName">
        <xs:attribute name="type" default="8-MMS" use="optional">
          <xs:simpleType>
            <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tEnumVal">
    <xs:simpleContent>
      <xs:extension base="xs:normalizedString">
        <xs:attribute name="ord" type="xs:int" use="required" />
        <xs:attributeGroup ref="agDesc" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="tDataTypeTemplates">
    <xs:sequence>
      <xs:element name="LNodeType" type="tLNodeType" maxOccurs="unbounded">
        <xs:unique name="uniqueDOInLNodeType">
          <xs:selector xpath="scl:DO" />
          <xs:field xpath="@name" />
        </xs:unique>
      </xs:element>
      <xs:element name="DOType" type="tDOType" maxOccurs="unbounded">
        <xs:unique name="uniqueDAorSDOInDOType">
          <xs:selector xpath="./*" />
          <xs:field xpath="@name" />
        </xs:unique>
      </xs:element>
      <xs:element name="DAType" type="tDAType" minOccurs="0" maxOccurs="unbounded">
        <xs:unique name="uniqueBDAInDAType">
          <xs:selector xpath="scl:BDA" />
          <xs:field xpath="@name" />
        </xs:unique>
        <xs:unique name="uniqueProtNs">
          <xs:selector xpath="scl:ProtNs" />
          <xs:field xpath="@type" />
          <xs:field xpath="." />
        </xs:unique>
      </xs:element>
      <xs:element name="EnumType" type="tEnumType" minOccurs="0" maxOccurs="unbounded">
        <xs:unique name="uniqueOrdInEnumType">
          <xs:selector xpath="scl:EnumVal" />
          <xs:field xpath="@ord" />
        </xs:unique>
        <xs:unique name="uniqueEnumValue">
          <xs:selector xpath="scl:EnumVal" />
          <xs:field xpath="." />
        </xs:unique>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
  <xs:element name="DataTypeTemplates" type="tDataTypeTemplates">
    <xs:unique name="uniqueLNodeType">
      <xs:selector xpath="scl:LNodeType" />
      <xs:field xpath="@id" />
    </xs:unique>
    <xs:key name="DOTypeKey">
      <xs:selector xpath="scl:DOType" />
      <xs:field xpath="@id" />
    </xs:key>
    <xs:keyref name="ref2DOType" refer="DOTypeKey">
      <xs:selector xpath="scl:LNodeType/scl:DO" />
      <xs:field xpath="@type" />
    </xs:keyref>
    <xs:keyref name="ref2DOTypeForSDO" refer="DOTypeKey">
      <xs:selector xpath="scl:DOType/scl:SDO" />
      <xs:field xpath="@type" />
    </xs:keyref>
    <xs:key name="DATypeKey">
      <xs:selector xpath="scl:DAType" />
      <xs:field xpath="@id" />
    </xs:key>
    <xs:key name="EnumTypeKey">
      <xs:selector xpath="scl:EnumType" />
      <xs:field xpath="@id" />
    </xs:key>
  </xs:element>
  </xs:schema>
  `,
    '2007B4': `<?xml version="1.0" encoding="UTF-8"?>
  <xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified"
      targetNamespace="http://www.iec.ch/61850/2003/SCL" version="2007B4"
      xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:scl="http://www.iec.ch/61850/2003/SCL"
      xmlns:xs="http://www.w3.org/2001/XMLSchema">
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".        Implemented Ed. 2 Tissues
              (since "2007B"): 948, 1050, 1175, 1189, 1208, 1328, 1359, 1365, 1397, 1434, 1448, 1450,
              1458, 1472.    Tissues not relevant for the SCL schema (since "2007B"): 706 (Ed.3), 837,
              847, 865, 873, 883, 884, 885, 938, 949, 961, 1048, 1054, 1059, 1118, 1130, 1131, 1147,
              1161, 1168, 1170 (Ed.3), 1173, 1185, 1188, 1195, 1200, 1204, 1207, 1221, 1224, 1241
              (Ed.3), 1255, 1257 (Ed.3), 1280, 1284, 1327, 1337, 1354, 1395, 1398, 1399, 1400, 1401,
              1402, 1415, 1416, 1419, 1421, 1431, 1444, 1445, 1446, 1447, 1451, 1452, 1457, 1461,
              1471.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:simpleType name="tConnectivityNodeReference">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value=".+/.+(/.+)*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAnyName">
          <xs:restriction base="xs:normalizedString"/>
      </xs:simpleType>
      <xs:simpleType name="tName">
          <xs:restriction base="tAnyName">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tID">
          <xs:restriction base="xs:token">
              <xs:minLength value="1"/>
              <xs:maxLength value="255"/>
              <xs:pattern value="\\S+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAcsiName">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stU">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[A-Z][0-9A-Za-z]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stL">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[a-z][0-9A-Za-z]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPAddr">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSclVersion">
          <xs:restriction base="tName">
              <xs:pattern value="2[0-2][0-9]{2}"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSclRevision">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[A-Z]"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSclRelease">
          <xs:restriction base="xs:unsignedByte">
              <xs:minExclusive value="0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tEmpty">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="64"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]{0,2}"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]{4,63}"/>
              <xs:pattern value="[A-MO-Za-z][0-9A-Za-z_]{3}"/>
              <xs:pattern value="N[0-9A-Za-np-z_][0-9A-Za-z_]{2}"/>
              <xs:pattern value="No[0-9A-Za-mo-z_][0-9A-Za-z_]"/>
              <xs:pattern value="Non[0-9A-Za-df-z_]"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDNameIsNone">
          <xs:restriction base="tAcsiName">
              <xs:pattern value="None"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDNameOrNone">
          <xs:union memberTypes="tIEDName tIEDNameIsNone"/>
      </xs:simpleType>
      <xs:simpleType name="tOnlyRelativeIEDName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="@"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDNameOrRelative">
          <xs:union memberTypes="tIEDName tOnlyRelativeIEDName"/>
      </xs:simpleType>
      <xs:simpleType name="tLDName">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="64"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLDInst">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="64"/>
              <xs:pattern value="[A-Za-z0-9][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLDInstOrEmpty">
          <xs:union memberTypes="tLDInst tEmpty"/>
      </xs:simpleType>
      <xs:simpleType name="tPrefix">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="11"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]*"/>
              <xs:pattern value=""/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNInst">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[0-9]{1,12}"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNInstOrEmpty">
          <xs:union memberTypes="tLNInst tEmpty"/>
      </xs:simpleType>
      <xs:simpleType name="tDataName">
          <xs:restriction base="tRestrName1stU">
              <xs:maxLength value="12"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDataSetName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="32"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCBName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="32"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLogName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="32"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAccessPointName">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="32"/>
              <xs:pattern value="[A-Za-z0-9][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAssociationID">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
              <xs:pattern value="[0-9A-Za-z]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tVisibleBasicLatin">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[ -~]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tMessageID">
          <xs:restriction base="tVisibleBasicLatin">
              <xs:minLength value="1"/>
              <xs:maxLength value="129"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tFullAttributeName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern
                  value="[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tFullDOName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSubDataName">
          <xs:restriction base="tRestrName1stL">
              <xs:minLength value="1"/>
              <xs:maxLength value="60"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tNamespaceName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[ -~]+:20\\d\\d[A-Z]?"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLineType">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tProcessType">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tProcessName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value=".+(/.+)*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tEnumStringValue">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="127"/>
              <xs:pattern value="[\\p{IsBasicLatin}\\p{IsLatin-1Supplement}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="IP"/>
              <xs:enumeration value="IP-SUBNET"/>
              <xs:enumeration value="IP-GATEWAY"/>
              <xs:enumeration value="OSI-NSAP"/>
              <xs:enumeration value="OSI-TSEL"/>
              <xs:enumeration value="OSI-SSEL"/>
              <xs:enumeration value="OSI-PSEL"/>
              <xs:enumeration value="OSI-AP-Title"/>
              <xs:enumeration value="OSI-AP-Invoke"/>
              <xs:enumeration value="OSI-AE-Qualifier"/>
              <xs:enumeration value="OSI-AE-Invoke"/>
              <xs:enumeration value="MAC-Address"/>
              <xs:enumeration value="APPID"/>
              <xs:enumeration value="VLAN-PRIORITY"/>
              <xs:enumeration value="VLAN-ID"/>
              <xs:enumeration value="SNTP-Port"/>
              <xs:enumeration value="MMS-Port"/>
              <xs:enumeration value="DNSName"/>
              <xs:enumeration value="IPv6FlowLabel"/>
              <xs:enumeration value="IPv6ClassOfTraffic"/>
              <xs:enumeration value="C37-118-IP-Port"/>
              <xs:enumeration value="IP-UDP-PORT"/>
              <xs:enumeration value="IP-TCP-PORT"/>
              <xs:enumeration value="IPv6"/>
              <xs:enumeration value="IPv6-SUBNET"/>
              <xs:enumeration value="IPv6-GATEWAY"/>
              <xs:enumeration value="IPv6-IGMPv3Src"/>
              <xs:enumeration value="IP-IGMPv3Src"/>
              <xs:enumeration value="IP-ClassOfTraffic"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionPTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[A-Z][0-9A-Za-z\\-]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPTypeEnum">
          <xs:union memberTypes="tPredefinedPTypeEnum tExtensionPTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPTypePhysConnEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Type"/>
              <xs:enumeration value="Plug"/>
              <xs:enumeration value="Cable"/>
              <xs:enumeration value="Port"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPTypePhysConnEnum">
          <xs:union memberTypes="tPredefinedPTypePhysConnEnum tExtensionPTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedAttributeNameEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="T"/>
              <xs:enumeration value="Test"/>
              <xs:enumeration value="Check"/>
              <xs:enumeration value="SIUnit"/>
              <xs:enumeration value="Oper"/>
              <xs:enumeration value="SBO"/>
              <xs:enumeration value="SBOw"/>
              <xs:enumeration value="Cancel"/>
              <xs:enumeration value="Addr"/>
              <xs:enumeration value="PRIORITY"/>
              <xs:enumeration value="VID"/>
              <xs:enumeration value="APPID"/>
              <xs:enumeration value="TransportInUse"/>
              <xs:enumeration value="IPClassOfTraffic"/>
              <xs:enumeration value="IPv6FlowLabel"/>
              <xs:enumeration value="IPAddressLength"/>
              <xs:enumeration value="IPAddress"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionAttributeNameEnum">
          <xs:restriction base="tRestrName1stL">
              <xs:maxLength value="60"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAttributeNameEnum">
          <xs:union memberTypes="tPredefinedAttributeNameEnum tExtensionAttributeNameEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCommonConductingEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="CBR"/>
              <xs:enumeration value="DIS"/>
              <xs:enumeration value="VTR"/>
              <xs:enumeration value="CTR"/>
              <xs:enumeration value="GEN"/>
              <xs:enumeration value="CAP"/>
              <xs:enumeration value="REA"/>
              <xs:enumeration value="CON"/>
              <xs:enumeration value="MOT"/>
              <xs:enumeration value="EFN"/>
              <xs:enumeration value="PSH"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="BSH"/>
              <xs:enumeration value="CAB"/>
              <xs:enumeration value="GIL"/>
              <xs:enumeration value="LIN"/>
              <xs:enumeration value="RES"/>
              <xs:enumeration value="RRC"/>
              <xs:enumeration value="SAR"/>
              <xs:enumeration value="TCF"/>
              <xs:enumeration value="TCR"/>
              <xs:enumeration value="IFL"/>
              <xs:enumeration value="FAN"/>
              <xs:enumeration value="SCR"/>
              <xs:enumeration value="SMC"/>
              <xs:enumeration value="PMP"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="3"/>
              <xs:pattern value="E[A-Z]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCommonConductingEquipmentEnum">
          <xs:union memberTypes="tPredefinedCommonConductingEquipmentEnum tExtensionEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPowerTransformerEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tTransformerWindingEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTW"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="AXN"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="MOT"/>
              <xs:enumeration value="FAN"/>
              <xs:enumeration value="FIL"/>
              <xs:enumeration value="PMP"/>
              <xs:enumeration value="TNK"/>
              <xs:enumeration value="VLV"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="3"/>
              <xs:pattern value="E[A-Z]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGeneralEquipmentEnum">
          <xs:union memberTypes="tPredefinedGeneralEquipmentEnum tExtensionGeneralEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tServiceSettingsNoDynEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="Fix"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tServiceSettingsEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Dyn"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="Fix"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRedProtEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="none"/>
              <xs:enumeration value="hsr"/>
              <xs:enumeration value="prp"/>
              <xs:enumeration value="rstp"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSMVDeliveryEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="unicast"/>
              <xs:enumeration value="multicast"/>
              <xs:enumeration value="both"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPhaseEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="A"/>
              <xs:enumeration value="B"/>
              <xs:enumeration value="C"/>
              <xs:enumeration value="N"/>
              <xs:enumeration value="all"/>
              <xs:enumeration value="none"/>
              <xs:enumeration value="AB"/>
              <xs:enumeration value="BC"/>
              <xs:enumeration value="CA"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAuthenticationEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="none"/>
              <xs:enumeration value="password"/>
              <xs:enumeration value="weak"/>
              <xs:enumeration value="strong"/>
              <xs:enumeration value="certificate"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAssociationKindEnum">
          <xs:restriction base="xs:token">
              <xs:enumeration value="pre-established"/>
              <xs:enumeration value="predefined"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLPHDEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LPHD"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLLN0Enum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LLN0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSystemLNGroupEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="L[A-Z]*"/>
              <xs:pattern value="LLN0"/>
              <xs:enumeration value="LLN0"/>
              <xs:enumeration value="LPHD"/>
              <xs:enumeration value="LCCH"/>
              <xs:enumeration value="LGOS"/>
              <xs:enumeration value="LSVS"/>
              <xs:enumeration value="LTIM"/>
              <xs:enumeration value="LTMS"/>
              <xs:enumeration value="LTRK"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupAEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="A[A-Z]*"/>
              <xs:enumeration value="ANCR"/>
              <xs:enumeration value="ARCO"/>
              <xs:enumeration value="ARIS"/>
              <xs:enumeration value="ATCC"/>
              <xs:enumeration value="AVCO"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupCEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="C[A-Z]*"/>
              <xs:enumeration value="CALH"/>
              <xs:enumeration value="CCGR"/>
              <xs:enumeration value="CILO"/>
              <xs:enumeration value="CPOW"/>
              <xs:enumeration value="CSWI"/>
              <xs:enumeration value="CSYN"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupFEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="F[A-Z]*"/>
              <xs:enumeration value="FCNT"/>
              <xs:enumeration value="FCSD"/>
              <xs:enumeration value="FFIL"/>
              <xs:enumeration value="FLIM"/>
              <xs:enumeration value="FPID"/>
              <xs:enumeration value="FRMP"/>
              <xs:enumeration value="FSPT"/>
              <xs:enumeration value="FXOT"/>
              <xs:enumeration value="FXUT"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupGEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="G[A-Z]*"/>
              <xs:enumeration value="GAPC"/>
              <xs:enumeration value="GGIO"/>
              <xs:enumeration value="GLOG"/>
              <xs:enumeration value="GSAL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupIEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="I[A-Z]*"/>
              <xs:enumeration value="IARC"/>
              <xs:enumeration value="IHMI"/>
              <xs:enumeration value="ISAF"/>
              <xs:enumeration value="ITCI"/>
              <xs:enumeration value="ITMI"/>
              <xs:enumeration value="ITPC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupKEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="K[A-Z]*"/>
              <xs:enumeration value="KFAN"/>
              <xs:enumeration value="KFIL"/>
              <xs:enumeration value="KPMP"/>
              <xs:enumeration value="KTNK"/>
              <xs:enumeration value="KVLV"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupMEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="M[A-Z]*"/>
              <xs:enumeration value="MDIF"/>
              <xs:enumeration value="MENV"/>
              <xs:enumeration value="MFLK"/>
              <xs:enumeration value="MHAI"/>
              <xs:enumeration value="MHAN"/>
              <xs:enumeration value="MHYD"/>
              <xs:enumeration value="MMDC"/>
              <xs:enumeration value="MMET"/>
              <xs:enumeration value="MMTN"/>
              <xs:enumeration value="MMTR"/>
              <xs:enumeration value="MMXN"/>
              <xs:enumeration value="MMXU"/>
              <xs:enumeration value="MSQI"/>
              <xs:enumeration value="MSTA"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupPEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="P[A-Z]*"/>
              <xs:enumeration value="PDIF"/>
              <xs:enumeration value="PDIR"/>
              <xs:enumeration value="PDIS"/>
              <xs:enumeration value="PDOP"/>
              <xs:enumeration value="PDUP"/>
              <xs:enumeration value="PFRC"/>
              <xs:enumeration value="PHAR"/>
              <xs:enumeration value="PHIZ"/>
              <xs:enumeration value="PIOC"/>
              <xs:enumeration value="PMRI"/>
              <xs:enumeration value="PMSS"/>
              <xs:enumeration value="POPF"/>
              <xs:enumeration value="PPAM"/>
              <xs:enumeration value="PRTR"/>
              <xs:enumeration value="PSCH"/>
              <xs:enumeration value="PSDE"/>
              <xs:enumeration value="PTEF"/>
              <xs:enumeration value="PTHF"/>
              <xs:enumeration value="PTOC"/>
              <xs:enumeration value="PTOF"/>
              <xs:enumeration value="PTOV"/>
              <xs:enumeration value="PTRC"/>
              <xs:enumeration value="PTTR"/>
              <xs:enumeration value="PTUC"/>
              <xs:enumeration value="PTUF"/>
              <xs:enumeration value="PTUV"/>
              <xs:enumeration value="PUPF"/>
              <xs:enumeration value="PVOC"/>
              <xs:enumeration value="PVPH"/>
              <xs:enumeration value="PZSU"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupQEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="Q[A-Z]*"/>
              <xs:enumeration value="QFVR"/>
              <xs:enumeration value="QITR"/>
              <xs:enumeration value="QIUB"/>
              <xs:enumeration value="QVTR"/>
              <xs:enumeration value="QVUB"/>
              <xs:enumeration value="QVVR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupREnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="R[A-Z]*"/>
              <xs:enumeration value="RADR"/>
              <xs:enumeration value="RBDR"/>
              <xs:enumeration value="RBRF"/>
              <xs:enumeration value="RDIR"/>
              <xs:enumeration value="RDRE"/>
              <xs:enumeration value="RDRS"/>
              <xs:enumeration value="RFLO"/>
              <xs:enumeration value="RMXU"/>
              <xs:enumeration value="RPSB"/>
              <xs:enumeration value="RREC"/>
              <xs:enumeration value="RSYN"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupSEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="S[A-Z]*"/>
              <xs:enumeration value="SARC"/>
              <xs:enumeration value="SCBR"/>
              <xs:enumeration value="SIMG"/>
              <xs:enumeration value="SIML"/>
              <xs:enumeration value="SLTC"/>
              <xs:enumeration value="SOPM"/>
              <xs:enumeration value="SPDC"/>
              <xs:enumeration value="SPTR"/>
              <xs:enumeration value="SSWI"/>
              <xs:enumeration value="STMP"/>
              <xs:enumeration value="SVBR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupTEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="T[A-Z]*"/>
              <xs:enumeration value="TANG"/>
              <xs:enumeration value="TAXD"/>
              <xs:enumeration value="TCTR"/>
              <xs:enumeration value="TDST"/>
              <xs:enumeration value="TFLW"/>
              <xs:enumeration value="TFRQ"/>
              <xs:enumeration value="TGSN"/>
              <xs:enumeration value="THUM"/>
              <xs:enumeration value="TLVL"/>
              <xs:enumeration value="TMGF"/>
              <xs:enumeration value="TMVM"/>
              <xs:enumeration value="TPOS"/>
              <xs:enumeration value="TPRS"/>
              <xs:enumeration value="TRTN"/>
              <xs:enumeration value="TSND"/>
              <xs:enumeration value="TTMP"/>
              <xs:enumeration value="TTNS"/>
              <xs:enumeration value="TVBR"/>
              <xs:enumeration value="TVTR"/>
              <xs:enumeration value="TWPH"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupXEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="X[A-Z]*"/>
              <xs:enumeration value="XCBR"/>
              <xs:enumeration value="XSWI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupYEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="Y[A-Z]*"/>
              <xs:enumeration value="YEFN"/>
              <xs:enumeration value="YLTC"/>
              <xs:enumeration value="YPSH"/>
              <xs:enumeration value="YPTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupZEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="Z[A-Z]*"/>
              <xs:enumeration value="ZAXN"/>
              <xs:enumeration value="ZBAT"/>
              <xs:enumeration value="ZBSH"/>
              <xs:enumeration value="ZCAB"/>
              <xs:enumeration value="ZCAP"/>
              <xs:enumeration value="ZCON"/>
              <xs:enumeration value="ZGEN"/>
              <xs:enumeration value="ZGIL"/>
              <xs:enumeration value="ZLIN"/>
              <xs:enumeration value="ZMOT"/>
              <xs:enumeration value="ZREA"/>
              <xs:enumeration value="ZRES"/>
              <xs:enumeration value="ZRRC"/>
              <xs:enumeration value="ZSAR"/>
              <xs:enumeration value="ZSCR"/>
              <xs:enumeration value="ZSMC"/>
              <xs:enumeration value="ZTCF"/>
              <xs:enumeration value="ZTCR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNEnum">
          <xs:union
              memberTypes="tDomainLNGroupAEnum tDomainLNGroupCEnum tDomainLNGroupFEnum tDomainLNGroupGEnum tDomainLNGroupIEnum tDomainLNGroupKEnum tDomainLNGroupMEnum tDomainLNGroupPEnum tDomainLNGroupQEnum tDomainLNGroupREnum tDomainLNGroupSEnum tDomainLNGroupTEnum tDomainLNGroupXEnum tDomainLNGroupYEnum tDomainLNGroupZEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tPredefinedLNClassEnum">
          <xs:union memberTypes="tSystemLNGroupEnum tDomainLNEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tExtensionLNClassEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="[A-Z]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNClassEnum">
          <xs:union memberTypes="tPredefinedLNClassEnum tExtensionLNClassEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="SPS"/>
              <xs:enumeration value="DPS"/>
              <xs:enumeration value="INS"/>
              <xs:enumeration value="ENS"/>
              <xs:enumeration value="ACT"/>
              <xs:enumeration value="ACD"/>
              <xs:enumeration value="SEC"/>
              <xs:enumeration value="BCR"/>
              <xs:enumeration value="HST"/>
              <xs:enumeration value="VSS"/>
              <xs:enumeration value="MV"/>
              <xs:enumeration value="CMV"/>
              <xs:enumeration value="SAV"/>
              <xs:enumeration value="WYE"/>
              <xs:enumeration value="DEL"/>
              <xs:enumeration value="SEQ"/>
              <xs:enumeration value="HMV"/>
              <xs:enumeration value="HWYE"/>
              <xs:enumeration value="HDEL"/>
              <xs:enumeration value="SPC"/>
              <xs:enumeration value="DPC"/>
              <xs:enumeration value="INC"/>
              <xs:enumeration value="ENC"/>
              <xs:enumeration value="BSC"/>
              <xs:enumeration value="ISC"/>
              <xs:enumeration value="APC"/>
              <xs:enumeration value="BAC"/>
              <xs:enumeration value="SPG"/>
              <xs:enumeration value="ING"/>
              <xs:enumeration value="ENG"/>
              <xs:enumeration value="ORG"/>
              <xs:enumeration value="TSG"/>
              <xs:enumeration value="CUG"/>
              <xs:enumeration value="VSG"/>
              <xs:enumeration value="ASG"/>
              <xs:enumeration value="CURVE"/>
              <xs:enumeration value="CSG"/>
              <xs:enumeration value="DPL"/>
              <xs:enumeration value="LPL"/>
              <xs:enumeration value="CSD"/>
              <xs:enumeration value="CST"/>
              <xs:enumeration value="BTS"/>
              <xs:enumeration value="UTS"/>
              <xs:enumeration value="LTS"/>
              <xs:enumeration value="GTS"/>
              <xs:enumeration value="MTS"/>
              <xs:enumeration value="NTS"/>
              <xs:enumeration value="STS"/>
              <xs:enumeration value="CTS"/>
              <xs:enumeration value="OTS"/>
              <xs:enumeration value="VSD"/>
              <xs:enumeration value="ORS"/>
              <xs:enumeration value="TCS"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:maxLength value="5"/>
              <xs:pattern value="[A-Za-z]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCDCEnum">
          <xs:restriction base="tPredefinedCDCEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tFCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="ST"/>
              <xs:enumeration value="MX"/>
              <xs:enumeration value="CO"/>
              <xs:enumeration value="SP"/>
              <xs:enumeration value="SG"/>
              <xs:enumeration value="SE"/>
              <xs:enumeration value="SV"/>
              <xs:enumeration value="CF"/>
              <xs:enumeration value="DC"/>
              <xs:enumeration value="EX"/>
              <xs:enumeration value="SR"/>
              <xs:enumeration value="BL"/>
              <xs:enumeration value="OR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="BOOLEAN"/>
              <xs:enumeration value="INT8"/>
              <xs:enumeration value="INT16"/>
              <xs:enumeration value="INT24"/>
              <xs:enumeration value="INT32"/>
              <xs:enumeration value="INT64"/>
              <xs:enumeration value="INT128"/>
              <xs:enumeration value="INT8U"/>
              <xs:enumeration value="INT16U"/>
              <xs:enumeration value="INT24U"/>
              <xs:enumeration value="INT32U"/>
              <xs:enumeration value="FLOAT32"/>
              <xs:enumeration value="FLOAT64"/>
              <xs:enumeration value="Enum"/>
              <xs:enumeration value="Dbpos"/>
              <xs:enumeration value="Tcmd"/>
              <xs:enumeration value="Quality"/>
              <xs:enumeration value="Timestamp"/>
              <xs:enumeration value="VisString32"/>
              <xs:enumeration value="VisString64"/>
              <xs:enumeration value="VisString65"/>
              <xs:enumeration value="VisString129"/>
              <xs:enumeration value="VisString255"/>
              <xs:enumeration value="Octet64"/>
              <xs:enumeration value="Unicode255"/>
              <xs:enumeration value="Struct"/>
              <xs:enumeration value="EntryTime"/>
              <xs:enumeration value="Check"/>
              <xs:enumeration value="ObjRef"/>
              <xs:enumeration value="Currency"/>
              <xs:enumeration value="PhyComAddr"/>
              <xs:enumeration value="TrgOps"/>
              <xs:enumeration value="OptFlds"/>
              <xs:enumeration value="SvOptFlds"/>
              <xs:enumeration value="LogOptFlds"/>
              <xs:enumeration value="EntryID"/>
              <xs:enumeration value="Octet6"/>
              <xs:enumeration value="Octet16"/>
              <!-- for 61850-8-1 Edition 2.1 -->
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tBasicTypeEnum">
          <xs:restriction base="tPredefinedBasicTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tValKindEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Spec"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="RO"/>
              <xs:enumeration value="Set"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGSEControlTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="GSSE"/>
              <xs:enumeration value="GOOSE"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tUnitMultiplierEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value=""/>
              <xs:enumeration value="m"/>
              <xs:enumeration value="k"/>
              <xs:enumeration value="M"/>
              <xs:enumeration value="mu"/>
              <xs:enumeration value="y"/>
              <xs:enumeration value="z"/>
              <xs:enumeration value="a"/>
              <xs:enumeration value="f"/>
              <xs:enumeration value="p"/>
              <xs:enumeration value="n"/>
              <xs:enumeration value="c"/>
              <xs:enumeration value="d"/>
              <xs:enumeration value="da"/>
              <xs:enumeration value="h"/>
              <xs:enumeration value="G"/>
              <xs:enumeration value="T"/>
              <xs:enumeration value="P"/>
              <xs:enumeration value="E"/>
              <xs:enumeration value="Z"/>
              <xs:enumeration value="Y"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRightEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="full"/>
              <xs:enumeration value="fix"/>
              <xs:enumeration value="dataflow"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSDOCount">
          <xs:union memberTypes="xs:unsignedInt tRestrName1stL"/>
      </xs:simpleType>
      <xs:simpleType name="tDACount">
          <xs:union memberTypes="xs:unsignedInt tAttributeNameEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tSmpMod">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="SmpPerPeriod"/>
              <xs:enumeration value="SmpPerSec"/>
              <xs:enumeration value="SecPerSmp"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPhysConnTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="Connection"/>
              <xs:enumeration value="RedConn"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionPhysConnTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[A-Z][0-9A-Za-z\\-]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPhysConnTypeEnum">
          <xs:union memberTypes="tPredefinedPhysConnTypeEnum tExtensionPhysConnTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tServiceType">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Poll"/>
              <xs:enumeration value="Report"/>
              <xs:enumeration value="GOOSE"/>
              <xs:enumeration value="SMV"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedTypeOfSecurityEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="None"/>
              <xs:enumeration value="Signature"/>
              <xs:enumeration value="SignatureAndEncryption"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:attributeGroup name="agDesc">
          <xs:attribute default="" form="unqualified" name="desc" type="xs:normalizedString"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tBaseElement">
          <xs:sequence>
              <xs:any maxOccurs="unbounded" minOccurs="0" namespace="##other" processContents="lax"/>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Private"
                  type="tPrivate"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tUnNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="name" type="tName" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tIDNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="id" type="tID" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" mixed="true" name="tAnyContentFromOtherNamespace">
          <xs:sequence maxOccurs="unbounded" minOccurs="0">
              <xs:any namespace="##other" processContents="lax"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType mixed="true" name="tText">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tPrivate">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="type" use="required">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tHeader">
          <xs:sequence>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" minOccurs="0" name="History">
                  <xs:complexType>
                      <xs:sequence>
                          <xs:element form="qualified" maxOccurs="unbounded" name="Hitem"
                              type="tHitem"/>
                      </xs:sequence>
                  </xs:complexType>
              </xs:element>
          </xs:sequence>
          <xs:attribute form="unqualified" name="id" type="xs:normalizedString" use="required"/>
          <xs:attribute form="unqualified" name="version" type="xs:normalizedString" use="optional"/>
          <xs:attribute default="" form="unqualified" name="revision" type="xs:normalizedString"
              use="optional"/>
          <xs:attribute form="unqualified" name="toolID" type="xs:normalizedString" use="optional"/>
          <xs:attribute default="IEDName" form="unqualified" name="nameStructure" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:Name">
                      <xs:enumeration value="IEDName"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType mixed="true" name="tHitem">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="version" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="revision" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="when" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="who" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="what" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="why" type="xs:normalizedString"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVal">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute form="unqualified" name="sGroup" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tValueWithUnit">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute form="unqualified" name="unit" type="xs:token" use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tVoltage">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="V" form="unqualified" name="unit" type="xs:token"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="xs:token"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInMilliSec">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="xs:token"
                      use="optional"/>
                  <xs:attribute fixed="m" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tBitRateInMbPerSec">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute fixed="b/s" form="unqualified" name="unit" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute fixed="M" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:attributeGroup name="agVirtual">
          <xs:attribute default="false" form="unqualified" name="virtual" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tLNodeContainer">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="LNode"
                          type="tLNode"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tPowerSystemResource">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipmentContainer">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="PowerTransformer" type="tPowerTransformer">
                          <xs:unique name="uniqueLNodeInPowerTransformer">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInPTR">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGE">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tAbstractConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="2" minOccurs="0" name="Terminal"
                          type="tTerminal"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="tSubEquipment">
                          <xs:unique name="uniqueLNodeInSubEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInACESubEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForCE">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForCE">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tCommonConductingEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForSubEq">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForSubEq">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute default="none" form="unqualified" name="phase" type="tPhaseEnum"
                      use="optional"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPowerTransformer">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="TransformerWinding"
                          type="tTransformerWinding">
                          <xs:unique name="uniqueLNodeInTransformerWinding">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInPTW">
                              <xs:selector
                                  xpath="./scl:SubEquipment | ./scl:TapChanger | ./scl:EqFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="scl:tSubEquipment">
                          <xs:unique name="uniqueLNodeInSubEquipmentPTR">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInPTRSubEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForPTR">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForPTR">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute fixed="PTR" form="unqualified" name="type"
                      type="tPowerTransformerEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTransformerWinding">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TapChanger" type="tTapChanger">
                          <xs:unique name="uniqueLNodeInTapChanger">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInLTC">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="NeutralPoint" type="tTerminal"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForPTW">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForPTW">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute fixed="PTW" form="unqualified" name="type"
                      type="tTransformerWindingEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTapChanger">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="scl:tSubEquipment">
                          <xs:unique name="uniqueLNodeInSubEquipmentLTC">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInLTCSubEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForLTC">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForLTC">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute fixed="LTC" form="unqualified" name="type" type="xs:Name"
                      use="required"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGeneralEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForGE">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForGE">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tGeneralEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubstation">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="VoltageLevel"
                          type="tVoltageLevel">
                          <xs:unique name="uniqueChildNameInVoltageLevel">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInVoltageLevel">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="tFunction">
                          <xs:unique name="uniqueLNodeInFunctionSS">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInSubstationFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVoltageLevel">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Voltage" type="tVoltage"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="Bay" type="tBay">
                          <xs:unique name="uniqueChildNameInBay">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInBay">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="scl:tFunction">
                          <xs:unique name="uniqueLNodeInFunctionVL">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInVoltageLevelFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="nomFreq" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:decimal">
                              <xs:minInclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="numPhases" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedByte">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBay">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="tConductingEquipment">
                          <xs:unique name="uniqueLNodeInConductingEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInCE">
                              <xs:selector xpath="./scl:SubEquipment | ./scl:EqFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConnectivityNode" type="tConnectivityNode">
                          <xs:unique name="uniqueLNodeInConnectivityNode">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="scl:tFunction">
                          <xs:unique name="uniqueLNodeInFunctionB">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInBayFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNode">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="None" form="unqualified" name="iedName" type="tIEDNameOrNone"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="ldInst" type="tLDInstOrEmpty"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute default="" form="unqualified" name="lnInst" type="tLNInstOrEmpty"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubFunction" type="tSubFunction">
                          <xs:unique name="uniqueLNodeInSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInSubFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipmentOfFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGEFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="tConductingEquipment">
                          <xs:unique name="uniqueLNodeInConductingEquipmentOfFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInCondEq">
                              <xs:selector xpath="./scl:SubEquipment | ./scl:EqFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipmentOfSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGESubFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="scl:tConductingEquipment">
                          <xs:unique name="uniqueLNodeInConductingEquipmentOfSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueSubEquipmentSubFunc">
                              <xs:selector xpath="./scl:SubEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubFunction" type="scl:tSubFunction">
                          <xs:unique name="uniqueLNodeInSubSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueSubSubFunc">
                              <xs:selector xpath="./scl:SubFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tAbstractEqFuncSubFunc">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipmentOfFuncForEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGEFuncForEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqSubFunction" type="scl:tEqSubFunction">
                          <xs:unique name="uniqueLNodeInSubFuncForEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueSubFuncForEquipment">
                              <xs:selector xpath="./scl:EqSubFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEqFunction">
          <xs:complexContent>
              <xs:extension base="tAbstractEqFuncSubFunc"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEqSubFunction">
          <xs:complexContent>
              <xs:extension base="tAbstractEqFuncSubFunc"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectivityNode">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer">
                  <xs:attribute form="unqualified" name="pathName" type="tConnectivityNodeReference"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTerminal">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="name" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="connectivityNode"
                      type="tConnectivityNodeReference" use="required"/>
                  <xs:attribute form="unqualified" name="processName" type="tProcessName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="substationName" type="tName" use="optional"/>
                  <xs:attribute form="unqualified" name="voltageLevelName" type="tName" use="optional"/>
                  <xs:attribute form="unqualified" name="bayName" type="tName" use="optional"/>
                  <xs:attribute form="unqualified" name="cNodeName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="lineName" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tGeneralEquipmentContainer">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipment2">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGE2">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="tFunction">
                          <xs:unique name="uniqueLNodeInFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFunction">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLine">
          <xs:complexContent>
              <xs:extension base="tGeneralEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Voltage" type="tVoltage"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ConductingEquipment"
                          type="scl:tConductingEquipment"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConnectivityNode" type="scl:tConnectivityNode"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tLineType" use="optional"/>
                  <xs:attribute form="unqualified" name="nomFreq" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:decimal">
                              <xs:minInclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="numPhases" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedByte">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tProcess">
          <xs:complexContent>
              <xs:extension base="tGeneralEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="scl:tConductingEquipment"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="Substation" type="tSubstation">
                          <xs:unique name="uniqueChildNameInProcessSubstation">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInProcessSubstation">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Line"
                          type="tLine"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Process"
                          type="tProcess">
                          <xs:unique name="uniqueChildNameInSubProcess">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInSubProcess">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tProcessType" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:element name="Substation" type="tSubstation">
          <xs:unique name="uniqueChildNameInSubstation">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLNodeInSubstation">
              <xs:selector xpath="./scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
      </xs:element>
      <xs:element name="Process" type="tProcess">
          <xs:unique name="uniqueChildNameInProcess">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLNodeInProcess">
              <xs:selector xpath="./scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
      </xs:element>
      <xs:element name="Line" type="tLine">
          <xs:unique name="uniqueChildNameInLine">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLNodeInLine">
              <xs:selector xpath="./scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agAuthentication">
          <xs:attribute default="true" form="unqualified" name="none" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="password" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="weak" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="strong" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="certificate" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agSmvOpts">
          <xs:attribute default="false" form="unqualified" name="refreshTime" type="xs:boolean"
              use="optional"/>
          <xs:attribute fixed="true" form="unqualified" name="sampleSynchronized" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleRate" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataSet" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="security" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="timestamp" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="synchSourceId" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agOptFields">
          <xs:attribute default="false" form="unqualified" name="seqNum" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="timeStamp" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataSet" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="reasonCode" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataRef" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="entryID" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="configRef" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="true" form="unqualified" name="bufOvfl" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLDRef">
          <xs:attributeGroup ref="scl:agDesc"/>
          <xs:attribute form="unqualified" name="iedName" type="tIEDName" use="required"/>
          <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLNRef">
          <xs:attributeGroup ref="agLDRef"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
          <xs:attribute form="unqualified" name="lnInst" type="tLNInstOrEmpty" use="required"/>
      </xs:attributeGroup>
      <xs:complexType name="tIED">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Services" type="tServices"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="AccessPoint"
                          type="tAccessPoint">
                          <xs:unique name="uniqueLNInAccessPoint">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="KDC"
                          type="tKDC"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tIEDName" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="manufacturer" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="configVersion" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="2003" form="unqualified" name="originalSclVersion"
                      type="tSclVersion" use="optional"/>
                  <xs:attribute default="A" form="unqualified" name="originalSclRevision"
                      type="tSclRevision" use="optional"/>
                  <xs:attribute default="1" form="unqualified" name="originalSclRelease"
                      type="tSclRelease" use="optional"/>
                  <xs:attribute default="full" form="unqualified" name="engRight" type="tRightEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="owner" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServices">
          <xs:all>
              <xs:element form="qualified" minOccurs="0" name="DynAssociation"
                  type="scl:tServiceWithOptionalMax"/>
              <xs:element form="qualified" minOccurs="0" name="SettingGroups"
                  type="scl:tSettingGroups"/>
              <xs:element form="qualified" minOccurs="0" name="GetDirectory" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataObjectDefinition"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataObjectDirectory"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataSetValue"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SetDataSetValue"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataSetDirectory"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfDataSet"
                  type="scl:tServiceForConfDataSet"/>
              <xs:element form="qualified" minOccurs="0" name="DynDataSet"
                  type="scl:tServiceWithMaxAndMaxAttributes"/>
              <xs:element form="qualified" minOccurs="0" name="ReadWrite" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="TimerActivatedControl"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfReportControl"
                  type="scl:tServiceConfReportControl"/>
              <xs:element form="qualified" minOccurs="0" name="GetCBValues" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLogControl"
                  type="scl:tServiceWithMaxNonZero"/>
              <xs:element form="qualified" minOccurs="0" name="ReportSettings"
                  type="scl:tReportSettings"/>
              <xs:element form="qualified" minOccurs="0" name="LogSettings" type="scl:tLogSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSESettings" type="scl:tGSESettings"/>
              <xs:element form="qualified" minOccurs="0" name="SMVSettings" type="scl:tSMVSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSEDir" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GOOSE" type="scl:tGOOSEcapabilities"/>
              <xs:element form="qualified" minOccurs="0" name="GSSE" type="scl:tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="SMVsc" type="scl:tSMVsc"/>
              <xs:element form="qualified" minOccurs="0" name="FileHandling" type="scl:tFileHandling"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLNs" type="scl:tConfLNs"/>
              <xs:element form="qualified" minOccurs="0" name="ClientServices"
                  type="scl:tClientServices"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLdName" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SupSubscription"
                  type="scl:tSupSubscription"/>
              <xs:element form="qualified" minOccurs="0" name="ConfSigRef"
                  type="scl:tServiceWithMaxNonZero"/>
              <xs:element form="qualified" minOccurs="0" name="ValueHandling"
                  type="scl:tValueHandling"/>
              <xs:element form="qualified" minOccurs="0" name="RedProt" type="scl:tRedProt"/>
              <xs:element form="qualified" minOccurs="0" name="TimeSyncProt" type="scl:tTimeSyncProt"/>
              <xs:element form="qualified" minOccurs="0" name="CommProt" type="scl:tCommProt"/>
          </xs:all>
          <xs:attribute default="32" form="unqualified" name="nameLength" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:token">
                      <xs:pattern value="32"/>
                      <xs:pattern value="64"/>
                      <xs:pattern value="6[5-9]"/>
                      <xs:pattern value="[7-9]\\d"/>
                      <xs:pattern value="[1-9]\\d\\d+"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType name="tAccessPoint">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:choice minOccurs="0">
                          <xs:element form="qualified" name="Server" type="scl:tServer">
                              <xs:unique name="uniqueAssociationInServer">
                                  <xs:selector xpath="./scl:Association"/>
                                  <xs:field xpath="@associationID"/>
                              </xs:unique>
                          </xs:element>
                          <xs:element maxOccurs="unbounded" ref="scl:LN"/>
                          <xs:element form="qualified" name="ServerAt" type="tServerAt"/>
                      </xs:choice>
                      <xs:element form="qualified" minOccurs="0" name="Services" type="scl:tServices"/>
                      <xs:element form="qualified" maxOccurs="7" minOccurs="0" name="GOOSESecurity"
                          type="tCertificate"/>
                      <xs:element form="qualified" maxOccurs="7" minOccurs="0" name="SMVSecurity"
                          type="tCertificate"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAccessPointName" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="router" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="clock" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="kdc" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCertificate">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" name="Subject" type="tCert"/>
                      <xs:element form="qualified" name="IssuerName" type="tCert"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="xferNumber" type="xs:unsignedInt"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="serialNumber" use="required">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                              <xs:pattern value="[0-9]+"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCert">
          <xs:attribute form="unqualified" name="commonName" use="required">
              <xs:simpleType>
                  <xs:restriction base="xs:normalizedString">
                      <xs:minLength value="4"/>
                      <xs:pattern value="none"/>
                      <xs:pattern value="CN=.+"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="idHierarchy" use="required">
              <xs:simpleType>
                  <xs:restriction base="xs:normalizedString">
                      <xs:minLength value="1"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType name="tServerAt">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="apName" type="tAccessPointName"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServer">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" name="Authentication">
                          <xs:complexType>
                              <xs:attributeGroup ref="agAuthentication"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" name="LDevice"
                          type="tLDevice">
                          <xs:unique name="uniqueLNInLDevice">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="Association" type="tAssociation"/>
                  </xs:sequence>
                  <xs:attribute default="30" form="unqualified" name="timeout" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLDevice">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element ref="LN0"/>
                      <xs:element maxOccurs="unbounded" minOccurs="0" ref="LN"/>
                      <xs:element form="qualified" minOccurs="0" name="AccessControl"
                          type="tAccessControl"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="inst" type="tLDInst" use="required"/>
                  <xs:attribute form="unqualified" name="ldName" type="tLDName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tAccessControl">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAssociation">
          <xs:attributeGroup ref="agLNRef"/>
          <xs:attribute form="unqualified" name="kind" type="tAssociationKindEnum" use="required"/>
          <xs:attribute form="unqualified" name="associationID" type="tAssociationID" use="optional"/>
      </xs:complexType>
      <xs:element name="LN0">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tLN0"/>
              </xs:complexContent>
          </xs:complexType>
          <xs:unique name="uniqueReportControlInLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueGSEControlInLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueSampledValueControlInLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyLN0">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReportLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLogLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetGSELN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetSVLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:unique name="uniqueDOIinLN0">
              <xs:selector xpath="./scl:DOI"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogInLN0">
              <xs:selector xpath="./scl:Log"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:element name="LN" type="tLN">
          <xs:unique name="uniqueReportControlInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyInLN">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReport" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLog" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:unique name="uniqueDOIinLN">
              <xs:selector xpath="./scl:DOI"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogInLN">
              <xs:selector xpath="./scl:Log"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:complexType abstract="true" name="tAnyLN">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DataSet"
                          type="tDataSet"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ReportControl" type="tReportControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="LogControl" type="tLogControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DOI"
                          type="tDOI">
                          <xs:unique name="uniqueSDI_DAIinDOI">
                              <xs:selector xpath="./scl:DAI | ./scl:SDI"/>
                              <xs:field xpath="@name"/>
                              <xs:field xpath="@ix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="Inputs" type="tInputs">
                          <!--<xs:unique name="uniqueExtRefInInputs">
                <xs:selector xpath="./scl:ExtRef"/>
                <xs:field xpath="@iedName"/>
                <xs:field xpath="@ldInst"/>
                <xs:field xpath="@prefix"/>
                <xs:field xpath="@lnClass"/>
                <xs:field xpath="@lnInst"/>
                <xs:field xpath="@doName"/>
                <xs:field xpath="@daName"/>
                <xs:field xpath="@intAddr"/>
              </xs:unique>-->
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Log"
                          type="scl:tLog"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="tLNInst" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN0">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GSEControl" type="tGSEControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SampledValueControl" type="tSampledValueControl"/>
                      <xs:element form="qualified" minOccurs="0" name="SettingControl"
                          type="tSettingControl"/>
                  </xs:sequence>
                  <xs:attribute fixed="LLN0" form="unqualified" name="lnClass" type="tLNClassEnum"
                      use="required"/>
                  <xs:attribute fixed="" form="unqualified" name="inst" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDataSet">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded">
                      <xs:element form="qualified" name="FCDA" type="tFCDA"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tDataSetName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFCDA">
          <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="optional"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="lnInst" type="tLNInst" use="optional"/>
          <xs:attribute form="unqualified" name="doName" type="tFullDOName" use="optional"/>
          <xs:attribute form="unqualified" name="daName" type="tFullAttributeName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
          <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tCBName" use="required"/>
                  <xs:attribute form="unqualified" name="datSet" type="tDataSetName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControlWithTriggerOpt">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TrgOps" type="tTrgOps"/>
                  </xs:sequence>
                  <xs:attribute default="0" form="unqualified" name="intgPd" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTrgOps">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="period" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="true" form="unqualified" name="gi" type="xs:boolean" use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:sequence>
                      <xs:element form="qualified" name="OptFields">
                          <xs:complexType>
                              <xs:attributeGroup ref="agOptFields"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="RptEnabled" type="tRptEnabled"
                      />
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="rptID" type="tMessageID" use="optional"/>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="buffered" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="bufTime" type="xs:unsignedInt"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="indexed" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tRptEnabled">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ClientLN"
                          type="tClientLN"/>
                  </xs:sequence>
                  <xs:attribute default="1" form="unqualified" name="max" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tClientLN">
          <xs:attributeGroup ref="agLNRef"/>
          <xs:attribute form="unqualified" name="apRef" type="tAccessPointName" use="optional"/>
      </xs:complexType>
      <xs:complexType name="tLogControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="optional"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix"
                      use="optional"/>
                  <xs:attribute default="LLN0" form="unqualified" name="lnClass" type="tLNClassEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnInst" type="tLNInst" use="optional"/>
                  <xs:attribute form="unqualified" name="logName" type="tLogName" use="required"/>
                  <xs:attribute default="true" form="unqualified" name="logEna" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="reasonCode" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="bufTime" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tInputs">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ExtRef" type="tExtRef"
                      />
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tExtRef">
          <xs:attributeGroup ref="scl:agDesc"/>
          <xs:attribute form="unqualified" name="iedName" type="tIEDNameOrRelative" use="optional"/>
          <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="optional"/>
          <xs:attribute form="unqualified" name="prefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="lnInst" type="tLNInst" use="optional"/>
          <xs:attribute form="unqualified" name="doName" type="tFullDOName" use="optional"/>
          <xs:attribute form="unqualified" name="daName" type="tFullAttributeName" use="optional"/>
          <xs:attribute form="unqualified" name="intAddr" type="xs:normalizedString" use="optional"/>
          <xs:attribute form="unqualified" name="serviceType" type="tServiceType" use="optional"/>
          <xs:attribute form="unqualified" name="srcLDInst" type="tLDInst" use="optional"/>
          <xs:attribute form="unqualified" name="srcPrefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="srcLNClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="srcLNInst" type="tLNInst" use="optional"/>
          <xs:attribute form="unqualified" name="srcCBName" type="tCBName" use="optional"/>
          <xs:attribute form="unqualified" name="pServT" type="tServiceType" use="optional"/>
          <xs:attribute form="unqualified" name="pLN" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="pDO" type="tFullDOName" use="optional"/>
          <xs:attribute form="unqualified" name="pDA" type="tFullAttributeName" use="optional"/>
      </xs:complexType>
      <xs:complexType name="tLog">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tLogName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tControlWithIEDName">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="IEDName">
                          <xs:complexType>
                              <xs:simpleContent>
                                  <xs:extension base="tIEDName">
                                      <xs:attribute form="unqualified" name="apRef"
                                          type="tAccessPointName" use="optional"/>
                                      <xs:attribute form="unqualified" name="ldInst" type="tLDInst"
                                          use="optional"/>
                                      <xs:attribute form="unqualified" name="prefix" type="tPrefix"
                                          use="optional"/>
                                      <xs:attribute form="unqualified" name="lnClass"
                                          type="tLNClassEnum" use="optional"/>
                                      <xs:attribute form="unqualified" name="lnInst" type="tLNInst"
                                          use="optional"/>
                                  </xs:extension>
                              </xs:simpleContent>
                          </xs:complexType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tProtocol">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute fixed="true" form="unqualified" name="mustUnderstand"
                      type="xs:boolean" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tGSEControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:sequence>
                      <xs:element fixed="R-GOOSE" form="qualified" minOccurs="0" name="Protocol"
                          type="tProtocol"/>
                  </xs:sequence>
                  <xs:attribute default="GOOSE" form="unqualified" name="type"
                      type="tGSEControlTypeEnum" use="optional"/>
                  <xs:attribute form="unqualified" name="appID" type="tMessageID" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="fixedOffs" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="None" form="unqualified" name="securityEnable"
                      type="scl:tPredefinedTypeOfSecurityEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSampledValueControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:sequence>
                      <xs:element form="qualified" name="SmvOpts">
                          <xs:complexType>
                              <xs:attributeGroup ref="agSmvOpts"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element fixed="R-SV" form="qualified" minOccurs="0" name="Protocol"
                          type="tProtocol"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="smvID" type="tMessageID" use="required"/>
                  <xs:attribute default="true" form="unqualified" name="multicast" type="xs:boolean"/>
                  <xs:attribute form="unqualified" name="smpRate" type="xs:unsignedInt" use="required"/>
                  <xs:attribute form="unqualified" name="nofASDU" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="SmpPerPeriod" form="unqualified" name="smpMod" type="tSmpMod"
                      use="optional"/>
                  <xs:attribute default="None" form="unqualified" name="securityEnable"
                      type="tPredefinedTypeOfSecurityEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSettingControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="numOfSGs" use="required">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minInclusive value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute default="1" form="unqualified" name="actSG" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minInclusive value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="resvTms" type="xs:unsignedShort"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI">
                          <xs:unique name="uniqueSDI_DAIinSDI">
                              <xs:selector xpath="./scl:DAI | ./scl:SDI"/>
                              <xs:field xpath="@name"/>
                              <xs:field xpath="@ix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tDataName" use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI"/>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="valKind" type="tValKindEnum" use="optional"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
                  <xs:attribute form="unqualified" name="valImport" type="xs:boolean" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceYesNo"/>
      <xs:complexType name="tServiceWithOptionalMax">
          <xs:attribute form="unqualified" name="max" type="xs:unsignedInt" use="optional"/>
      </xs:complexType>
      <xs:complexType name="tServiceWithMax">
          <xs:attribute form="unqualified" name="max" type="xs:unsignedInt" use="required"/>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxNonZero">
          <xs:attribute form="unqualified" name="max" use="required">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt">
                      <xs:minExclusive value="0"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType name="tServiceConfReportControl">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="both" form="unqualified" name="bufMode" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:Name">
                              <xs:enumeration value="unbuffered"/>
                              <xs:enumeration value="buffered"/>
                              <xs:enumeration value="both"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute default="false" form="unqualified" name="bufConf" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="maxBuf" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributes">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute form="unqualified" name="maxAttributes" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndModify">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceForConfDataSet">
          <xs:complexContent>
              <xs:extension base="tServiceWithMaxAndMaxAttributes">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tClientServices">
          <xs:sequence>
              <xs:element form="qualified" minOccurs="0" name="TimeSyncProt" type="scl:tTimeSyncProt"/>
              <xs:element form="qualified" minOccurs="0" name="McSecurity" type="scl:tMcSecurity"/>
          </xs:sequence>
          <xs:attribute default="false" form="unqualified" name="goose" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="gsse" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="bufReport" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="unbufReport" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="readLog" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sv" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="supportsLdName" type="xs:boolean"
              use="optional"/>
          <xs:attribute form="unqualified" name="maxAttributes" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="maxReports" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="maxGOOSE" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="maxSMV" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute default="false" form="unqualified" name="rGOOSE" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="rSV" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="noIctBinding" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tServiceSettings">
          <xs:attribute default="Fix" form="unqualified" name="cbName"
              type="tServiceSettingsNoDynEnum" use="optional"/>
          <xs:attribute default="Fix" form="unqualified" name="datSet" type="tServiceSettingsEnum"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="rptID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="bufTime"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="resvTms" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="owner" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLogSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="logEna"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGSESettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="McSecurity"
                          type="scl:tMcSecurity"/>
                  </xs:sequence>
                  <xs:attribute default="Fix" form="unqualified" name="appID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="dataLabel"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="kdaParticipant"
                      type="xs:boolean" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMVSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:sequence>
                      <xs:choice maxOccurs="unbounded">
                          <xs:element form="qualified" name="SmpRate">
                              <xs:simpleType>
                                  <xs:restriction base="xs:unsignedInt">
                                      <xs:minExclusive value="0"/>
                                  </xs:restriction>
                              </xs:simpleType>
                          </xs:element>
                          <xs:element form="qualified" name="SamplesPerSec">
                              <xs:simpleType>
                                  <xs:restriction base="xs:unsignedInt">
                                      <xs:minExclusive value="0"/>
                                  </xs:restriction>
                              </xs:simpleType>
                          </xs:element>
                          <xs:element form="qualified" name="SecPerSamples">
                              <xs:simpleType>
                                  <xs:restriction base="xs:unsignedInt">
                                      <xs:minExclusive value="0"/>
                                  </xs:restriction>
                              </xs:simpleType>
                          </xs:element>
                      </xs:choice>
                      <xs:element form="qualified" minOccurs="0" name="McSecurity"
                          type="scl:tMcSecurity"/>
                  </xs:sequence>
                  <xs:attribute default="Fix" form="unqualified" name="svID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="smpRate"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="samplesPerSec"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="pdcTimeStamp"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="synchSrcId" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="nofASDU"
                      type="tServiceSettingsNoDynEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="kdaParticipant"
                      type="xs:boolean" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConfLNs">
          <xs:attribute default="false" form="unqualified" name="fixPrefix" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="fixLnInst" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tValueHandling">
          <xs:attribute default="false" form="unqualified" name="setToRO" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tFileHandling">
          <xs:complexContent>
              <xs:extension base="tServiceYesNo">
                  <xs:attribute default="true" form="unqualified" name="mms" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="ftp" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="ftps" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGOOSEcapabilities">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="false" form="unqualified" name="fixedOffs" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="goose" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="rGOOSE" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tRedProt">
          <xs:attribute default="false" form="unqualified" name="hsr" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="prp" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="rstp" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tTimeSyncProt">
          <xs:complexContent>
              <xs:extension base="tServiceYesNo">
                  <xs:attribute default="true" form="unqualified" name="sntp" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="iec61850_9_3"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="c37_238" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="other" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMVsc">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="multicast" form="unqualified" name="delivery"
                      type="tSMVDeliveryEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="deliveryConf"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="sv" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="rSV" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSupSubscription">
          <xs:attribute form="unqualified" name="maxGo" type="xs:unsignedInt" use="required"/>
          <xs:attribute form="unqualified" name="maxSv" type="xs:unsignedInt" use="required"/>
      </xs:complexType>
      <xs:complexType name="tCommProt">
          <xs:complexContent>
              <xs:extension base="tServiceYesNo">
                  <xs:attribute default="false" form="unqualified" name="ipv6" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tMcSecurity">
          <xs:attribute default="false" form="unqualified" name="signature" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="encryption" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tKDC">
          <xs:attribute form="unqualified" name="iedName" type="tIEDName" use="required"/>
          <xs:attribute form="unqualified" name="apName" type="tAccessPointName" use="required"/>
      </xs:complexType>
      <xs:complexType name="tSettingGroups">
          <xs:all>
              <xs:element form="qualified" minOccurs="0" name="SGEdit">
                  <xs:complexType>
                      <xs:complexContent>
                          <xs:extension base="tServiceYesNo">
                              <xs:attribute default="false" form="unqualified" name="resvTms"
                                  type="xs:boolean" use="optional"/>
                          </xs:extension>
                      </xs:complexContent>
                  </xs:complexType>
              </xs:element>
              <xs:element form="qualified" minOccurs="0" name="ConfSG">
                  <xs:complexType>
                      <xs:complexContent>
                          <xs:extension base="tServiceYesNo">
                              <xs:attribute default="false" form="unqualified" name="resvTms"
                                  type="xs:boolean" use="optional"/>
                          </xs:extension>
                      </xs:complexContent>
                  </xs:complexType>
              </xs:element>
          </xs:all>
      </xs:complexType>
      <xs:element name="IED" type="tIED">
          <xs:key name="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice"/>
              <xs:field xpath="@inst"/>
          </xs:key>
          <xs:keyref name="ref2LDeviceInDataSetForFCDAinLN" refer="LDeviceInIEDKey">
              <xs:selector
                  xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN/scl:DataSet/scl:FCDA"/>
              <xs:field xpath="@ldInst"/>
          </xs:keyref>
          <xs:keyref name="ref2LDeviceInDataSetForFCDAinLN0" refer="LDeviceInIEDKey">
              <xs:selector
                  xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0/scl:DataSet/scl:FCDA"/>
              <xs:field xpath="@ldInst"/>
          </xs:keyref>
          <xs:key name="AccessPointInIEDKey">
              <xs:selector xpath="./scl:AccessPoint"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ServerAtRef2AccessPoint" refer="AccessPointInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:ServerAt"/>
              <xs:field xpath="@apName"/>
          </xs:keyref>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:complexType abstract="true" name="tControlBlock">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="required"/>
                  <xs:attribute form="unqualified" name="cbName" type="tCBName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCommunication">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="SubNetwork"
                          type="tSubNetwork">
                          <xs:unique name="uniqueConnectedAP">
                              <xs:selector xpath="./scl:ConnectedAP"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@apName"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubNetwork">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="BitRate"
                          type="tBitRateInMbPerSec"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ConnectedAP"
                          type="tConnectedAP">
                          <xs:unique name="uniqueGSEinConnectedAP">
                              <xs:selector xpath="./scl:GSE"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                          <xs:unique name="uniqueSMVinConnectedAP">
                              <xs:selector xpath="./scl:SMV"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectedAP">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="GSE"
                          type="tGSE"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="SMV"
                          type="tSMV"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="PhysConn"
                          type="tPhysConn">
                          <xs:unique name="uniquePTypeInPhysConn">
                              <xs:selector xpath="./scl:P"/>
                              <xs:field xpath="@type"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="iedName" type="tIEDName" use="required"/>
                  <xs:attribute form="unqualified" name="apName" type="tAccessPointName"
                      use="required"/>
                  <xs:attribute form="unqualified" name="redProt" type="scl:tRedProtEnum"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAddress">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="P" type="tP"/>
          </xs:sequence>
      </xs:complexType>
      <xs:complexType name="tGSE">
          <xs:complexContent>
              <xs:extension base="tControlBlock">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="MinTime"
                          type="tDurationInMilliSec"/>
                      <xs:element form="qualified" minOccurs="0" name="MaxTime"
                          type="tDurationInMilliSec"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMV">
          <xs:complexContent>
              <xs:extension base="tControlBlock"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPhysConn">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="P"
                          type="tP_PhysConn"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tPhysConnTypeEnum" use="required"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tP_PhysConn">
          <xs:simpleContent>
              <xs:extension base="tPAddr">
                  <xs:attribute form="unqualified" name="type" type="tPTypePhysConnEnum"
                      use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP">
          <xs:simpleContent>
              <xs:extension base="tPAddr">
                  <xs:attribute form="unqualified" name="type" type="tPTypeEnum" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tP_IPbase">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="IPv4"
                      value="([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
                  />
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-SUBNET">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP-SUBNET" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-GATEWAY">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP-GATEWAY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tP_IPv6base">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="IPv6" value="([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6">
          <xs:simpleContent>
              <xs:restriction base="tP_IPv6base">
                  <xs:attribute fixed="IPv6" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6-SUBNET">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="IPv6_Subnet" value="/[1-9]|/[1-9][0-9]|/1[0-1][0-9]|/12[0-7]"/>
                  <xs:attribute fixed="IPv6-SUBNET" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6-GATEWAY">
          <xs:simpleContent>
              <xs:restriction base="tP_IPv6base">
                  <xs:attribute fixed="IPv6-GATEWAY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_DNSName">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="\\S*"/>
                  <xs:attribute fixed="DNSName" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6FlowLabel">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9a-fA-F]{1,5}"/>
                  <xs:attribute fixed="IPv6FlowLabel" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-NSAP">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="40"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-NSAP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-TSEL">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="8"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-TSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-SSEL">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-SSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-PSEL">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-PSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Title">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9,]+"/>
                  <xs:attribute fixed="OSI-AP-Title" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Invoke">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="[0-9]+"/>
                  <xs:attribute fixed="OSI-AP-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Qualifier">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="[0-9]+"/>
                  <xs:attribute fixed="OSI-AE-Qualifier" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Invoke">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="[0-9]+"/>
                  <xs:attribute fixed="OSI-AE-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_MAC-Address">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern
                      value="[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}"/>
                  <xs:attribute fixed="MAC-Address" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_APPID">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9A-F]{4}"/>
                  <xs:attribute fixed="APPID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-PRIORITY">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-7]"/>
                  <xs:attribute fixed="VLAN-PRIORITY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-ID">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9A-F]{3}"/>
                  <xs:attribute fixed="VLAN-ID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tP_Port">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="0"/>
                  <xs:pattern value="[1-9][0-9]{0,3}"/>
                  <xs:pattern value="[1-5][0-9]{4,4}"/>
                  <xs:pattern value="6[0-4][0-9]{3,3}"/>
                  <xs:pattern value="65[0-4][0-9]{2,2}"/>
                  <xs:pattern value="655[0-2][0-9]"/>
                  <xs:pattern value="6553[0-5]"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_SNTP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="SNTP-Port" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_MMS-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="MMS-Port" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_UDP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="IP-UDP-PORT" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_TCP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="IP-TCP-PORT" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6ClassOfTraffic">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="Values0-255" value="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"/>
                  <xs:attribute fixed="IPv6ClassOfTraffic" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_C37-118-IP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="Values1025-65535"
                      value="102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]"/>
                  <xs:attribute fixed="C37-118-IP-Port" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6-IGMPv3Src">
          <xs:simpleContent>
              <xs:restriction base="tP_IPv6base">
                  <xs:attribute fixed="IPv6-IGMPv3Src" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-IGMPv3Src">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP-IGMPv3Src" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-ClassOfTraffic">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="2"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="IP-ClassOfTraffic" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:element name="Communication" type="tCommunication">
          <xs:unique name="uniqueSubNetwork">
              <xs:selector xpath="./scl:SubNetwork"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agDATrgOp">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tAbstractDataAttribute">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="bType" type="tBasicTypeEnum" use="required"/>
                  <xs:attribute default="Set" form="unqualified" name="valKind" type="tValKindEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="type" type="tAnyName" use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="count" type="tDACount"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="valImport" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNodeType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="DO" type="tDO"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDO">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tDataName" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="transient" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDO" type="tSDO"/>
                      <xs:element form="qualified" name="DA" type="tDA">
                          <xs:unique name="uniqueProtNsInDA">
                              <xs:selector xpath="scl:ProtNs"/>
                              <xs:field xpath="@type"/>
                              <xs:field xpath="."/>
                          </xs:unique>
                      </xs:element>
                  </xs:choice>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="cdc" type="tCDCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDO">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tSubDataName" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
                  <xs:attribute default="0" form="unqualified" name="count" type="tSDOCount"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ProtNs"
                          type="tProtNs"/>
                  </xs:sequence>
                  <xs:attributeGroup ref="agDATrgOp"/>
                  <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="BDA" type="tBDA"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ProtNs"
                          type="tProtNs"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEnumType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="EnumVal"
                          type="tEnumVal"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tProtNs">
          <xs:simpleContent>
              <xs:extension base="tNamespaceName">
                  <xs:attribute default="8-MMS" form="unqualified" name="type" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tEnumVal">
          <xs:simpleContent>
              <xs:extension base="tEnumStringValue">
                  <xs:attribute form="unqualified" name="ord" type="xs:int" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDataTypeTemplates">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="LNodeType" type="tLNodeType">
                  <xs:unique name="uniqueDOInLNodeType">
                      <xs:selector xpath="scl:DO"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" name="DOType" type="tDOType">
                  <xs:unique name="uniqueDAorSDOInDOType">
                      <xs:selector xpath="./*"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DAType"
                  type="tDAType">
                  <xs:unique name="uniqueBDAInDAType">
                      <xs:selector xpath="scl:BDA"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
                  <xs:unique name="uniqueProtNs">
                      <xs:selector xpath="scl:ProtNs"/>
                      <xs:field xpath="@type"/>
                      <xs:field xpath="."/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="EnumType"
                  type="tEnumType">
                  <xs:unique name="uniqueOrdInEnumType">
                      <xs:selector xpath="scl:EnumVal"/>
                      <xs:field xpath="@ord"/>
                  </xs:unique>
                  <xs:unique name="uniqueEnumValue">
                      <xs:selector xpath="scl:EnumVal"/>
                      <xs:field xpath="."/>
                  </xs:unique>
              </xs:element>
          </xs:sequence>
      </xs:complexType>
      <xs:element name="DataTypeTemplates" type="tDataTypeTemplates">
          <xs:key name="DOTypeKey">
              <xs:selector xpath="scl:DOType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:keyref name="ref2DOType" refer="DOTypeKey">
              <xs:selector xpath="scl:LNodeType/scl:DO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:keyref name="ref2DOTypeForSDO" refer="DOTypeKey">
              <xs:selector xpath="scl:DOType/scl:SDO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:unique name="uniqueDTT_ID">
              <xs:selector xpath="*"/>
              <xs:field xpath="@id"/>
          </xs:unique>
          <xs:key name="EnumTypeDATypeKey">
              <xs:selector xpath="scl:DAType | scl:EnumType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:keyref name="ref2EnumTypeDAType" refer="scl:EnumTypeDATypeKey">
              <xs:selector xpath="scl:DOType/scl:DA | scl:DAType/scl:BDA"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
      </xs:element>
      <xs:element name="SCL">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tBaseElement">
                      <xs:sequence>
                          <xs:element name="Header" type="tHeader">
                              <xs:unique name="uniqueHitem">
                                  <xs:selector xpath="./scl:History/scl:Hitem"/>
                                  <xs:field xpath="@version"/>
                                  <xs:field xpath="@revision"/>
                              </xs:unique>
                          </xs:element>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Substation"/>
                          <xs:element minOccurs="0" ref="Communication"/>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="IED"/>
                          <xs:element minOccurs="0" ref="DataTypeTemplates"/>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Line"/>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Process"/>
                      </xs:sequence>
                      <xs:attribute fixed="2007" name="version" type="tSclVersion" use="required"/>
                      <xs:attribute fixed="B" name="revision" type="tSclRevision" use="required"/>
                      <xs:attribute fixed="4" name="release" type="tSclRelease" use="required"/>
                  </xs:extension>
              </xs:complexContent>
          </xs:complexType>
          <xs:key name="SubstationKey">
              <xs:selector xpath="./scl:Substation | ./scl:Process | ./scl:Line"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:key name="IEDKey">
              <xs:selector xpath="./scl:IED"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:key name="LNodeTypeKey">
              <xs:selector xpath="./scl:DataTypeTemplates/scl:LNodeType"/>
              <xs:field xpath="@id"/>
              <xs:field xpath="@lnClass"/>
          </xs:key>
          <xs:keyref name="ref2LNodeTypeDomain1" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeDomain2" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeLLN0" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="refConnectedAP2IED" refer="IEDKey">
              <xs:selector xpath="./scl:Communication/scl:SubNetwork/scl:ConnectedAP"/>
              <xs:field xpath="@iedName"/>
          </xs:keyref>
          <xs:keyref name="ref2SubstationFromTerminal" refer="scl:SubstationKey">
              <xs:selector xpath=".//scl:Terminal"/>
              <xs:field xpath="@substationName"/>
          </xs:keyref>
          <xs:key name="ConnectivityNodeKey">
              <xs:selector xpath=".//scl:ConnectivityNode"/>
              <xs:field xpath="@pathName"/>
          </xs:key>
      </xs:element>
  </xs:schema>
  `,
};
const versionToSchema = {
    '': '2003',
    '2007': '2007B',
    '2007A': '2007B',
    '2007B': '2007B',
    '2007B1': '2007B',
    '2007B2': '2007B4',
    '2007B3': '2007B4',
    '2007B4': '2007B4',
};
function getSchema(version, revision, release) {
    const schemaVersion = versionToSchema[version + revision + release];
    return schemas[schemaVersion !== null && schemaVersion !== void 0 ? schemaVersion : '2007B'];
}

/* eslint-disable import/no-extraneous-dependencies */
async function validateSchema(doc, docName) {
    var _a, _b, _c;
    const [version, revision, release] = [
        (_a = doc.documentElement.getAttribute('version')) !== null && _a !== void 0 ? _a : '',
        (_b = doc.documentElement.getAttribute('revision')) !== null && _b !== void 0 ? _b : '',
        (_c = doc.documentElement.getAttribute('release')) !== null && _c !== void 0 ? _c : '',
    ];
    const docContent = new XMLSerializer().serializeToString(doc);
    const schema = getSchema(version, revision, release);
    const schemaName = `SCL${version}${revision}${release}.xsd`;
    return validate({ content: docContent, name: docName }, { content: schema, name: schemaName });
}

/** An editor [[`plugin`]] to configure validators and display their issue centrally */
class SclValidatingPlugin extends s$1 {
    constructor() {
        super(...arguments);
        /** The name of the document being edited */
        this._docName = '';
        /** Issues return by the schema validator */
        this.schemaIssues = [];
        /** Issues returned by the template validator */
        this.templateIssues = [];
        /** Whether schema validator has had the initial run */
        this.waitForSchemaRun = true;
        /** Whether template validator has had the initial run */
        this.waitForTemplateRun = true;
        /** Whether schema validator shall run after each change to the doc */
        this.autoValidateSchema = false;
        /** Whether template validator shall run after each change to the doc */
        this.autoValidateTemplate = false;
    }
    set docName(docName) {
        if (docName === '')
            return;
        this.resetValidation();
        this.autoValidate();
    }
    get docName() {
        return this._docName;
    }
    /** SCL change indicator */
    set editCount(count) {
        if (this.doc)
            this.autoValidate();
    }
    async run() {
        this.dialog.show();
    }
    async validateSchema() {
        this.schemaIssues.length = 0;
        await this.requestUpdate('schemaIssues');
        const result = await validateSchema(this.doc, this.docName);
        this.schemaIssues = result || [{ title: 'Invalid Schema!' }];
        this.waitForSchemaRun = false;
        if (this.schemaIssues.length) {
            this.alertSchemaIssue.labelText =
                this.schemaIssues[this.schemaIssues.length - 1].title;
            this.alertSchemaIssue.show();
        }
        this.requestUpdate('schemaIssues');
    }
    async validateTemplates() {
        this.templateIssues.length = 0;
        this.waitForTemplateRun = false;
        for await (const issue of validate$1(this.doc)) {
            this.templateIssues.push(...issue);
            this.requestUpdate('templateIssues');
        }
        if (this.templateIssues.length) {
            this.alertTemplateIssue.labelText =
                this.templateIssues[this.templateIssues.length - 1].title;
            this.alertTemplateIssue.show();
        }
        this.requestUpdate('templateIssues');
    }
    async autoValidate() {
        if (this.autoValidateTemplate)
            this.validateTemplates();
        if (this.autoValidateSchema)
            this.validateSchema();
    }
    async resetValidation() {
        this.schemaIssues.length = 0;
        this.templateIssues.length = 0;
        this.waitForSchemaRun = true;
        this.waitForTemplateRun = true;
    }
    // eslint-disable-next-line class-methods-use-this
    renderValidatorsIssues(issues) {
        if (issues.length === 0)
            return [x `<li divider padded role="separator"></li>`];
        return [
            x `<li divider padded role="separator"></li>`,
            ...issues.map(issue => x ` <abbr title="${`${issue.title}\n${issue.message}`}"
          ><mwc-list-item ?twoline=${!!issue.message}>
            <span> ${issue.title}</span>
            <span slot="secondary">${issue.message}</span>
          </mwc-list-item></abbr
        >`),
        ];
    }
    renderTemplateValidator() {
        return x `<div style="display: flex; flex-direction: row">
        <div style="display: flex; flex-direction: column; flex: auto;">
          <div style="display: flex; flex-direction: row">
            <h3 style="flex:auto">
              ${`Template issues (${this.waitForTemplateRun
            ? 'Run template validator'
            : this.templateIssues.length})`}
            </h3>
            <mwc-icon-button-toggle
              class="expand template"
              onIcon="expand_less"
              offIcon="expand_more"
              @click="${() => this.requestUpdate()}"
            ></mwc-icon-button-toggle>
          </div>
          <div style="display: flex; flex-direction: row">
            <div style="display:flex; align-items:center; flex:auto">
              <mwc-button
                class="run template"
                style="float: right"
                label="${`${this.waitForTemplateRun ? '' : 'Re-'}Run manual validation`}"
                @click="${this.validateTemplates}"
              ></mwc-button>
            </div>
            <div style="display: flex">
              <mwc-formfield label="Auto validate on change" alignEnd>
                <mwc-switch
                  class="auto template"
                  @click="${() => {
            this.autoValidateTemplate = !this.autoValidateTemplate;
        }}"
                ></mwc-switch>
              </mwc-formfield>
            </div>
          </div>
        </div>
      </div>
      ${this.expandTemplate && this.expandTemplate.on
            ? x `<mwc-list>
            <li divider padded role="separator"></li>
          </mwc-list>`
            : x `<mwc-list id="content" wrapFocus
            >${this.renderValidatorsIssues(this.templateIssues)}</mwc-list
          >`}`;
    }
    renderSchemaValidator() {
        return x `<div style="display: flex; flex-direction: row">
        <div style="display: flex; flex-direction: column; flex: auto;">
          <div style="display: flex; flex-direction: row">
            <h3 style="flex:auto">
              ${`Schema issues (${this.waitForSchemaRun
            ? 'Run schema validator'
            : this.schemaIssues.length})`}
            </h3>
            <mwc-icon-button-toggle
              class="expand schema"
              onIcon="expand_less"
              offIcon="expand_more"
              @click="${() => this.requestUpdate()}"
            ></mwc-icon-button-toggle>
          </div>
          <div style="display: flex; flex-direction: row">
            <div style="display:flex; align-items:center; flex:auto">
              <mwc-button
                class="run schema"
                style="float: right"
                label="${`${this.waitForSchemaRun ? '' : 'Re-'}Run manual validation`}"
                @click="${this.validateSchema}"
              ></mwc-button>
            </div>
            <div style="display: flex">
              <mwc-formfield label="Auto validate on change" alignEnd>
                <mwc-switch
                  class="auto schema"
                  @click="${() => {
            this.autoValidateSchema = !this.autoValidateSchema;
        }}"
                ></mwc-switch>
              </mwc-formfield>
            </div>
          </div>
        </div>
      </div>
      ${this.expandSchema && this.expandSchema.on
            ? x `<mwc-list>
            <li divider padded role="separator"></li>
          </mwc-list>`
            : x `<mwc-list id="content" wrapFocus
            >${this.renderValidatorsIssues(this.schemaIssues)}</mwc-list
          >`}`;
    }
    render() {
        if (!this.doc)
            return x `<mwc-dialog class="content dialog"
        ><div>No SCL file loaded, yet!</div>
        <mwc-button
          label="Cancel"
          slot="secondaryAction"
          dialogAction="close"
        ></mwc-button>
      </mwc-dialog>`;
        return x `<mwc-dialog class="content dialog">
        ${this.renderSchemaValidator()}${this.renderTemplateValidator()}
        <mwc-button
          label="Cancel"
          slot="secondaryAction"
          dialogAction="close"
        ></mwc-button>
      </mwc-dialog>
      <mwc-snackbar class="alert schema" .timeoutMs=${5000}>
        <mwc-button slot="action" @click=${() => this.dialog.show()}
          >DETAIL</mwc-button
        > </mwc-snackbar
      ><mwc-snackbar class="alert template" .timeoutMs=${4000}>
        <mwc-button slot="action" @click=${() => this.dialog.show()}
          >DETAIL</mwc-button
        >
      </mwc-snackbar>`;
    }
}
SclValidatingPlugin.styles = i$5 `
    mwc-dialog {
      --mdc-dialog-max-width: 90vw;
      --mdc-dialog-min-width: 50vw;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
__decorate([
    n$3({ attribute: false })
], SclValidatingPlugin.prototype, "doc", void 0);
__decorate([
    n$3()
], SclValidatingPlugin.prototype, "docName", null);
__decorate([
    n$3({ type: Number })
], SclValidatingPlugin.prototype, "editCount", null);
__decorate([
    t$1()
], SclValidatingPlugin.prototype, "schemaIssues", void 0);
__decorate([
    t$1()
], SclValidatingPlugin.prototype, "templateIssues", void 0);
__decorate([
    t$1()
], SclValidatingPlugin.prototype, "waitForSchemaRun", void 0);
__decorate([
    t$1()
], SclValidatingPlugin.prototype, "waitForTemplateRun", void 0);
__decorate([
    t$1()
], SclValidatingPlugin.prototype, "autoValidateSchema", void 0);
__decorate([
    t$1()
], SclValidatingPlugin.prototype, "autoValidateTemplate", void 0);
__decorate([
    i$2('.content.dialog')
], SclValidatingPlugin.prototype, "dialog", void 0);
__decorate([
    i$2('.expand.template')
], SclValidatingPlugin.prototype, "expandTemplate", void 0);
__decorate([
    i$2('.expand.schema')
], SclValidatingPlugin.prototype, "expandSchema", void 0);
__decorate([
    i$2('.run.template')
], SclValidatingPlugin.prototype, "manualTriggerTemplateValidator", void 0);
__decorate([
    i$2('.run.schema')
], SclValidatingPlugin.prototype, "manualTriggerSchemaValidator", void 0);
__decorate([
    i$2('.alert.schema')
], SclValidatingPlugin.prototype, "alertSchemaIssue", void 0);
__decorate([
    i$2('.alert.template')
], SclValidatingPlugin.prototype, "alertTemplateIssue", void 0);
__decorate([
    i$2('.auto.schema')
], SclValidatingPlugin.prototype, "toggleAutoValidateSchema", void 0);
__decorate([
    i$2('.auto.template')
], SclValidatingPlugin.prototype, "toggleAutoValidateTemplate", void 0);

export { SclValidatingPlugin as default };
//# sourceMappingURL=scl-validating.js.map
