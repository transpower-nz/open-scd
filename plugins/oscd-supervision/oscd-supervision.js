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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$8=globalThis,e$i=t$8.ShadowRoot&&(void 0===t$8.ShadyCSS||t$8.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$l=Symbol(),o$q=new WeakMap;class n$o{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$i&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$q.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$q.set(s,t));}return t}toString(){return this.cssText}}const r$c=t=>new n$o("string"==typeof t?t:t+"",void 0,s$l),S$5=(s,o)=>{if(e$i)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$8.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$7=e$i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$c(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$a,defineProperty:e$h,getOwnPropertyDescriptor:r$b,getOwnPropertyNames:h$5,getOwnPropertySymbols:o$p,getPrototypeOf:n$n}=Object,a$6=globalThis,c$6=a$6.trustedTypes,l$l=c$6?c$6.emptyScript:"",p$4=a$6.reactiveElementPolyfillSupport,d$5=(t,s)=>t,u$4={toAttribute(t,s){switch(s){case Boolean:t=t?l$l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$4=(t,s)=>!i$a(t,s),y$3={attribute:!0,type:String,converter:u$4,reflect:!1,hasChanged:f$4};Symbol.metadata??=Symbol("metadata"),a$6.litPropertyMetadata??=new WeakMap;class b$2 extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$3){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$h(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$b(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$3}static _$Ei(){if(this.hasOwnProperty(d$5("elementProperties")))return;const t=n$n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$5("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$5("properties"))){const t=this.properties,s=[...h$5(t),...o$p(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$7(s));}else void 0!==s&&i.push(c$7(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$E_?.delete(t);}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$5(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$4).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$4;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i,e=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$4)(e?r:this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$ET();}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET();}updated(t){}firstUpdated(t){}}b$2.elementStyles=[],b$2.shadowRootOptions={mode:"open"},b$2[d$5("elementProperties")]=new Map,b$2[d$5("finalized")]=new Map,p$4?.({ReactiveElement:b$2}),(a$6.reactiveElementVersions??=[]).push("2.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$7=globalThis,i$9=t$7.trustedTypes,s$k=i$9?i$9.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$g="$lit$",h$4=`lit$${(Math.random()+"").slice(9)}$`,o$o="?"+h$4,n$m=`<${o$o}>`,r$a=document,l$k=()=>r$a.createComment(""),c$5=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$5=Array.isArray,u$3=t=>a$5(t)||"function"==typeof t?.[Symbol.iterator],d$4="[ \t\n\f\r]",f$3=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$2=/-->/g,_$2=/>/g,m$2=RegExp(`>|${d$4}(?:([^\\s"'>=/]+)(${d$4}*=${d$4}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$3=/'/g,g$2=/"/g,$$2=/^(?:script|style|textarea|title)$/i,w$2=Symbol.for("lit-noChange"),T$2=Symbol.for("lit-nothing"),A$2=new WeakMap,E$2=r$a.createTreeWalker(r$a,129);function C$2(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$k?s$k.createHTML(i):i}const P$2=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$3;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$3?"!--"===u[1]?c=v$2:void 0!==u[1]?c=_$2:void 0!==u[2]?($$2.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$2):void 0!==u[3]&&(c=m$2):c===m$2?">"===u[0]?(c=r??f$3,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$2:'"'===u[3]?g$2:p$3):c===g$2||c===p$3?c=m$2:c===v$2||c===_$2?c=f$3:(c=m$2,r=void 0);const x=c===m$2&&t[i+1].startsWith("/>")?" ":"";l+=c===f$3?s+n$m:d>=0?(o.push(a),s.slice(0,d)+e$g+s.slice(d)+h$4+x):s+h$4+(-2===d?i:x);}return [C$2(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V$2{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P$2(t,s);if(this.el=V$2.createElement(f,n),E$2.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E$2.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$g)){const i=v[a++],s=r.getAttribute(t).split(h$4),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k$2:"?"===e[1]?H$2:"@"===e[1]?I$2:R$2}),r.removeAttribute(t);}else t.startsWith(h$4)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$2.test(r.tagName)){const t=r.textContent.split(h$4),s=t.length-1;if(s>0){r.textContent=i$9?i$9.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$k()),E$2.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$k());}}}else if(8===r.nodeType)if(r.data===o$o)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$4,t+1));)d.push({type:7,index:c}),t+=h$4.length-1;}c++;}}static createElement(t,i){const s=r$a.createElement("template");return s.innerHTML=t,s}}function N$2(t,i,s=t,e){if(i===w$2)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$5(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N$2(t,h._$AS(t,i.values),h,e)),i}class S$4{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$a).importNode(i,!0);E$2.currentNode=e;let h=E$2.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M$2(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L$2(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E$2.nextNode(),o++);}return E$2.currentNode=r$a,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M$2{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T$2,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N$2(this,t,i),c$5(t)?t===T$2||null==t||""===t?(this._$AH!==T$2&&this._$AR(),this._$AH=T$2):t!==this._$AH&&t!==w$2&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u$3(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T$2&&c$5(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$a.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V$2.createElement(C$2(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S$4(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A$2.get(t.strings);return void 0===i&&A$2.set(t.strings,i=new V$2(t)),i}T(t){a$5(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M$2(this.k(l$k()),this.k(l$k()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R$2{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T$2,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T$2;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N$2(this,t,i,0),o=!c$5(t)||t!==this._$AH&&t!==w$2,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N$2(this,e[s+n],i,n),r===w$2&&(r=this._$AH[n]),o||=!c$5(r)||r!==this._$AH[n],r===T$2?t=T$2:t!==T$2&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T$2?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k$2 extends R$2{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T$2?void 0:t;}}class H$2 extends R$2{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T$2);}}class I$2 extends R$2{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N$2(this,t,i,0)??T$2)===w$2)return;const s=this._$AH,e=t===T$2&&s!==T$2||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T$2&&(s===T$2||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L$2{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N$2(this,t);}}const Z$2=t$7.litHtmlPolyfillSupport;Z$2?.(V$2,M$2),(t$7.litHtmlVersions??=[]).push("3.1.0");

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$6=globalThis,e$f=t$6.ShadowRoot&&(void 0===t$6.ShadyCSS||t$6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$j=Symbol(),o$n=new WeakMap;class n$l{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$f&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$n.set(s,t));}return t}toString(){return this.cssText}}const r$9=t=>new n$l("string"==typeof t?t:t+"",void 0,s$j),i$8=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$l(o,t,s$j)},S$3=(s,o)=>{if(e$f)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$6.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$4=e$f?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$9(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$7,defineProperty:e$e,getOwnPropertyDescriptor:r$8,getOwnPropertyNames:h$3,getOwnPropertySymbols:o$m,getPrototypeOf:n$k}=Object,a$4=globalThis,c$3=a$4.trustedTypes,l$j=c$3?c$3.emptyScript:"",p$2=a$4.reactiveElementPolyfillSupport,d$3=(t,s)=>t,u$2={toAttribute(t,s){switch(s){case Boolean:t=t?l$j:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$2=(t,s)=>!i$7(t,s),y$2={attribute:!0,type:String,converter:u$2,reflect:!1,hasChanged:f$2};Symbol.metadata??=Symbol("metadata"),a$4.litPropertyMetadata??=new WeakMap;class b$1 extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$2){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$e(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$8(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$2}static _$Ei(){if(this.hasOwnProperty(d$3("elementProperties")))return;const t=n$k(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$3("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$3("properties"))){const t=this.properties,s=[...h$3(t),...o$m(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$4(s));}else void 0!==s&&i.push(c$4(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$E_?.delete(t);}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$3(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$2).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$2;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i,e=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$2)(e?r:this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$ET();}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET();}updated(t){}firstUpdated(t){}}b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$3("elementProperties")]=new Map,b$1[d$3("finalized")]=new Map,p$2?.({ReactiveElement:b$1}),(a$4.reactiveElementVersions??=[]).push("2.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$5=globalThis,i$6=t$5.trustedTypes,s$i=i$6?i$6.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$d="$lit$",h$2=`lit$${(Math.random()+"").slice(9)}$`,o$l="?"+h$2,n$j=`<${o$l}>`,r$7=document,l$i=()=>r$7.createComment(""),c$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$3=Array.isArray,u$1=t=>a$3(t)||"function"==typeof t?.[Symbol.iterator],d$2="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_$1=/>/g,m$1=RegExp(`>|${d$2}(?:([^\\s"'>=/]+)(${d$2}*=${d$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$1=/'/g,g$1=/"/g,$$1=/^(?:script|style|textarea|title)$/i,y$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$1=y$1(1),b=y$1(2),w$1=Symbol.for("lit-noChange"),T$1=Symbol.for("lit-nothing"),A$1=new WeakMap,E$1=r$7.createTreeWalker(r$7,129);function C$1(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$i?s$i.createHTML(i):i}const P$1=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$1?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_$1:void 0!==u[2]?($$1.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$1):void 0!==u[3]&&(c=m$1):c===m$1?">"===u[0]?(c=r??f$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$1:'"'===u[3]?g$1:p$1):c===g$1||c===p$1?c=m$1:c===v$1||c===_$1?c=f$1:(c=m$1,r=void 0);const x=c===m$1&&t[i+1].startsWith("/>")?" ":"";l+=c===f$1?s+n$j:d>=0?(o.push(a),s.slice(0,d)+e$d+s.slice(d)+h$2+x):s+h$2+(-2===d?i:x);}return [C$1(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V$1{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P$1(t,s);if(this.el=V$1.createElement(f,n),E$1.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E$1.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$d)){const i=v[a++],s=r.getAttribute(t).split(h$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k$1:"?"===e[1]?H$1:"@"===e[1]?I$1:R$1}),r.removeAttribute(t);}else t.startsWith(h$2)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$1.test(r.tagName)){const t=r.textContent.split(h$2),s=t.length-1;if(s>0){r.textContent=i$6?i$6.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$i()),E$1.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$i());}}}else if(8===r.nodeType)if(r.data===o$l)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$2,t+1));)d.push({type:7,index:c}),t+=h$2.length-1;}c++;}}static createElement(t,i){const s=r$7.createElement("template");return s.innerHTML=t,s}}function N$1(t,i,s=t,e){if(i===w$1)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$2(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N$1(t,h._$AS(t,i.values),h,e)),i}class S$2{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$7).importNode(i,!0);E$1.currentNode=e;let h=E$1.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M$1(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L$1(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E$1.nextNode(),o++);}return E$1.currentNode=r$7,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M$1{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N$1(this,t,i),c$2(t)?t===T$1||null==t||""===t?(this._$AH!==T$1&&this._$AR(),this._$AH=T$1):t!==this._$AH&&t!==w$1&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u$1(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T$1&&c$2(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$7.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V$1.createElement(C$1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S$2(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A$1.get(t.strings);return void 0===i&&A$1.set(t.strings,i=new V$1(t)),i}T(t){a$3(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M$1(this.k(l$i()),this.k(l$i()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R$1{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T$1;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N$1(this,t,i,0),o=!c$2(t)||t!==this._$AH&&t!==w$1,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N$1(this,e[s+n],i,n),r===w$1&&(r=this._$AH[n]),o||=!c$2(r)||r!==this._$AH[n],r===T$1?t=T$1:t!==T$1&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k$1 extends R$1{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T$1?void 0:t;}}class H$1 extends R$1{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T$1);}}class I$1 extends R$1{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N$1(this,t,i,0)??T$1)===w$1)return;const s=this._$AH,e=t===T$1&&s!==T$1||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T$1&&(s===T$1||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L$1{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N$1(this,t);}}const Z$1=t$5.litHtmlPolyfillSupport;Z$1?.(V$1,M$1),(t$5.litHtmlVersions??=[]).push("3.1.0");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M$1(i.insertBefore(l$i(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s$h extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w$1}}s$h._$litElement$=!0,s$h[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$h});const r$6=globalThis.litElementPolyfillSupport;r$6?.({LitElement:s$h});(globalThis.litElementVersions??=[]).push("4.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$k={attribute:!0,type:String,converter:u$4,reflect:!1,hasChanged:f$4},r$5=(t=o$k,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$i(t){return (e,o)=>"object"==typeof o?r$5(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$4(r){return n$i({...r,state:!0,attribute:!1})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$c=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$b(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$c(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$c(n,s,{get(){return o(this)}})}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e$a;function r$3(r){return (n,o)=>e$c(n,o,{get(){return (this.renderRoot??(e$a??=document.createDocumentFragment())).querySelectorAll(r)}})}

/** Utility function to create element with `tagName` and its`attributes` */
function createElement(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}
/** @returns the cartesian product of `arrays` */
function crossProduct$1(...arrays) {
    return arrays.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())), [[]]);
}

const tAbstractConductingEquipment = [
    "TransformerWinding",
    "ConductingEquipment",
];
const tEquipment = [
    "GeneralEquipment",
    "PowerTransformer",
    ...tAbstractConductingEquipment,
];
const tEquipmentContainer = ["Substation", "VoltageLevel", "Bay"];
const tGeneralEquipmentContainer = ["Process", "Line"];
const tAbstractEqFuncSubFunc = ["EqSubFunction", "EqFunction"];
const tPowerSystemResource = [
    "SubFunction",
    "Function",
    "TapChanger",
    "SubEquipment",
    ...tEquipment,
    ...tEquipmentContainer,
    ...tGeneralEquipmentContainer,
    ...tAbstractEqFuncSubFunc,
];
const tLNodeContainer = ["ConnectivityNode", ...tPowerSystemResource];
const tCertificate = ["GOOSESecurity", "SMVSecurity"];
const tNaming = ["SubNetwork", ...tCertificate, ...tLNodeContainer];
const tAbstractDataAttribute = ["BDA", "DA"];
const tControlWithIEDName = ["SampledValueControl", "GSEControl"];
const tControlWithTriggerOpt = ["LogControl", "ReportControl"];
const tControl = [...tControlWithIEDName, ...tControlWithTriggerOpt];
const tControlBlock = ["GSE", "SMV"];
const tUnNaming = [
    "ConnectedAP",
    "PhysConn",
    "SDO",
    "DO",
    "DAI",
    "SDI",
    "DOI",
    "Inputs",
    "RptEnabled",
    "Server",
    "ServerAt",
    "SettingControl",
    "Communication",
    "Log",
    "LDevice",
    "DataSet",
    "AccessPoint",
    "IED",
    "NeutralPoint",
    ...tControl,
    ...tControlBlock,
    ...tAbstractDataAttribute,
];
const tAnyLN = ["LN0", "LN"];
const tAnyContentFromOtherNamespace = [
    "Text",
    "Private",
    "Hitem",
    "AccessControl",
];
const tCert = ["Subject", "IssuerName"];
const tDurationInMilliSec = ["MinTime", "MaxTime"];
const tIDNaming = ["LNodeType", "DOType", "DAType", "EnumType"];
const tServiceYesNo = [
    "FileHandling",
    "TimeSyncProt",
    "CommProt",
    "SGEdit",
    "ConfSG",
    "GetDirectory",
    "GetDataObjectDefinition",
    "DataObjectDirectory",
    "GetDataSetValue",
    "SetDataSetValue",
    "DataSetDirectory",
    "ReadWrite",
    "TimerActivatedControl",
    "GetCBValues",
    "GSEDir",
    "ConfLdName",
];
const tServiceWithMaxAndMaxAttributes = ["DynDataSet", "ConfDataSet"];
const tServiceWithMax = [
    "GSSE",
    "GOOSE",
    "ConfReportControl",
    "SMVsc",
    ...tServiceWithMaxAndMaxAttributes,
];
const tServiceWithMaxNonZero = ["ConfLogControl", "ConfSigRef"];
const tServiceSettings = [
    "ReportSettings",
    "LogSettings",
    "GSESettings",
    "SMVSettings",
];
const tBaseElement = ["SCL", ...tNaming, ...tUnNaming, ...tIDNaming];
const sCLTags = [
    ...tBaseElement,
    ...tAnyContentFromOtherNamespace,
    "Header",
    "LNode",
    "Val",
    "Voltage",
    "Services",
    ...tCert,
    ...tDurationInMilliSec,
    "Association",
    "FCDA",
    "ClientLN",
    "IEDName",
    "ExtRef",
    "Protocol",
    ...tAnyLN,
    ...tServiceYesNo,
    "DynAssociation",
    "SettingGroups",
    ...tServiceWithMax,
    ...tServiceWithMaxNonZero,
    ...tServiceSettings,
    "ConfLNs",
    "ClientServices",
    "SupSubscription",
    "ValueHandling",
    "RedProt",
    "McSecurity",
    "KDC",
    "Address",
    "P",
    "ProtNs",
    "EnumVal",
    "Terminal",
    "BitRate",
    "Authentication",
    "DataTypeTemplates",
    "History",
    "OptFields",
    "SmvOpts",
    "TrgOps",
    "SamplesPerSec",
    "SmpRate",
    "SecPerSamples",
];
const tBaseNameSequence = ["Text", "Private"];
const tNamingSequence = [...tBaseNameSequence];
const tUnNamingSequence = [...tBaseNameSequence];
const tIDNamingSequence = [...tBaseNameSequence];
const tAbstractDataAttributeSequence = [...tUnNamingSequence, "Val"];
const tLNodeContainerSequence = [...tNamingSequence, "LNode"];
const tPowerSystemResourceSequence = [...tLNodeContainerSequence];
const tEquipmentSequence = [...tPowerSystemResourceSequence];
const tEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "PowerTransformer",
    "GeneralEquipment",
];
const tAbstractConductingEquipmentSequence = [
    ...tEquipmentSequence,
    "Terminal",
];
const tControlBlockSequence = [...tUnNamingSequence, "Address"];
const tControlSequence = [...tNamingSequence];
const tControlWithIEDNameSequence = [...tControlSequence, "IEDName"];
const tAnyLNSequence = [
    ...tUnNamingSequence,
    "DataSet",
    "ReportControl",
    "LogControl",
    "DOI",
    "Inputs",
    "Log",
];
const tGeneralEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "Function",
];
const tControlWithTriggerOptSequence = [...tControlSequence, "TrgOps"];
const tAbstractEqFuncSubFuncSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "EqSubFunction",
];
const tags$1 = {
    AccessControl: {
        parents: ["LDevice"],
        children: [],
    },
    AccessPoint: {
        parents: ["IED"],
        children: [
            ...tNamingSequence,
            "Server",
            "LN",
            "ServerAt",
            "Services",
            "GOOSESecurity",
            "SMVSecurity",
        ],
    },
    Address: {
        parents: ["ConnectedAP", "GSE", "SMV"],
        children: ["P"],
    },
    Association: {
        parents: ["Server"],
        children: [],
    },
    Authentication: {
        parents: ["Server"],
        children: [],
    },
    BDA: {
        parents: ["DAType"],
        children: [...tAbstractDataAttributeSequence],
    },
    BitRate: {
        parents: ["SubNetwork"],
        children: [],
    },
    Bay: {
        parents: ["VoltageLevel"],
        children: [
            ...tEquipmentContainerSequence,
            "ConductingEquipment",
            "ConnectivityNode",
            "Function",
        ],
    },
    ClientLN: {
        parents: ["RptEnabled"],
        children: [],
    },
    ClientServices: {
        parents: ["Services"],
        children: ["TimeSyncProt", "McSecurity"],
    },
    CommProt: {
        parents: ["Services"],
        children: [],
    },
    Communication: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "SubNetwork"],
    },
    ConductingEquipment: {
        parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "EqFunction",
            "SubEquipment",
        ],
    },
    ConfDataSet: {
        parents: ["Services"],
        children: [],
    },
    ConfLdName: {
        parents: ["Services"],
        children: [],
    },
    ConfLNs: {
        parents: ["Services"],
        children: [],
    },
    ConfLogControl: {
        parents: ["Services"],
        children: [],
    },
    ConfReportControl: {
        parents: ["Services"],
        children: [],
    },
    ConfSG: {
        parents: ["SettingGroups"],
        children: [],
    },
    ConfSigRef: {
        parents: ["Services"],
        children: [],
    },
    ConnectedAP: {
        parents: ["SubNetwork"],
        children: [...tUnNamingSequence, "Address", "GSE", "SMV", "PhysConn"],
    },
    ConnectivityNode: {
        parents: ["Bay", "Line"],
        children: [...tLNodeContainerSequence],
    },
    DA: {
        parents: ["DOType"],
        children: [...tAbstractDataAttributeSequence],
    },
    DAI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "Val"],
    },
    DAType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "BDA", "ProtNs"],
    },
    DO: {
        parents: ["LNodeType"],
        children: [...tUnNamingSequence],
    },
    DOI: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    DOType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "SDO", "DA"],
    },
    DataObjectDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataSet: {
        parents: [...tAnyLN],
        children: [...tNamingSequence, "FCDA"],
    },
    DataSetDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataTypeTemplates: {
        parents: ["SCL"],
        children: ["LNodeType", "DOType", "DAType", "EnumType"],
    },
    DynAssociation: {
        parents: ["Services"],
        children: [],
    },
    DynDataSet: {
        parents: ["Services"],
        children: [],
    },
    EnumType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "EnumVal"],
    },
    EnumVal: {
        parents: ["EnumType"],
        children: [],
    },
    EqFunction: {
        parents: [
            "GeneralEquipment",
            "TapChanger",
            "TransformerWinding",
            "PowerTransformer",
            "SubEquipment",
            "ConductingEquipment",
        ],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    EqSubFunction: {
        parents: ["EqSubFunction", "EqFunction"],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    ExtRef: {
        parents: ["Inputs"],
        children: [],
    },
    FCDA: {
        parents: ["DataSet"],
        children: [],
    },
    FileHandling: {
        parents: ["Services"],
        children: [],
    },
    Function: {
        parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
        children: [
            ...tPowerSystemResourceSequence,
            "SubFunction",
            "GeneralEquipment",
            "ConductingEquipment",
        ],
    },
    GeneralEquipment: {
        parents: [
            "SubFunction",
            "Function",
            ...tGeneralEquipmentContainer,
            ...tAbstractEqFuncSubFunc,
            ...tEquipmentContainer,
        ],
        children: [...tEquipmentSequence, "EqFunction"],
    },
    GetCBValues: {
        parents: ["Services"],
        children: [],
    },
    GetDataObjectDefinition: {
        parents: ["Services"],
        children: [],
    },
    GetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    GetDirectory: {
        parents: ["Services"],
        children: [],
    },
    GOOSE: {
        parents: ["Services"],
        children: [],
    },
    GOOSESecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    GSE: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence, "MinTime", "MaxTime"],
    },
    GSEDir: {
        parents: ["Services"],
        children: [],
    },
    GSEControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "Protocol"],
    },
    GSESettings: {
        parents: ["Services"],
        children: [],
    },
    GSSE: {
        parents: ["Services"],
        children: [],
    },
    Header: {
        parents: ["SCL"],
        children: ["Text", "History"],
    },
    History: {
        parents: ["Header"],
        children: ["Hitem"],
    },
    Hitem: {
        parents: ["History"],
        children: [],
    },
    IED: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "Services", "AccessPoint", "KDC"],
    },
    IEDName: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    Inputs: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "ExtRef"],
    },
    IssuerName: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    KDC: {
        parents: ["IED"],
        children: [],
    },
    LDevice: {
        parents: ["Server"],
        children: [...tUnNamingSequence, "LN0", "LN", "AccessControl"],
    },
    LN: {
        parents: ["AccessPoint", "LDevice"],
        children: [...tAnyLNSequence],
    },
    LN0: {
        parents: ["LDevice"],
        children: [
            ...tAnyLNSequence,
            "GSEControl",
            "SampledValueControl",
            "SettingControl",
        ],
    },
    LNode: {
        parents: [...tLNodeContainer],
        children: [...tUnNamingSequence],
    },
    LNodeType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "DO"],
    },
    Line: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "Voltage",
            "ConductingEquipment",
        ],
    },
    Log: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence],
    },
    LogControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence],
    },
    LogSettings: {
        parents: ["Services"],
        children: [],
    },
    MaxTime: {
        parents: ["GSE"],
        children: [],
    },
    McSecurity: {
        parents: ["GSESettings", "SMVSettings", "ClientServices"],
        children: [],
    },
    MinTime: {
        parents: ["GSE"],
        children: [],
    },
    NeutralPoint: {
        parents: ["TransformerWinding"],
        children: [...tUnNamingSequence],
    },
    OptFields: {
        parents: ["ReportControl"],
        children: [],
    },
    P: {
        parents: ["Address", "PhysConn"],
        children: [],
    },
    PhysConn: {
        parents: ["ConnectedAP"],
        children: [...tUnNamingSequence, "P"],
    },
    PowerTransformer: {
        parents: [...tEquipmentContainer],
        children: [
            ...tEquipmentSequence,
            "TransformerWinding",
            "SubEquipment",
            "EqFunction",
        ],
    },
    Private: {
        parents: [],
        children: [],
    },
    Process: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "ConductingEquipment",
            "Substation",
            "Line",
            "Process",
        ],
    },
    ProtNs: {
        parents: ["DAType", "DA"],
        children: [],
    },
    Protocol: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    ReadWrite: {
        parents: ["Services"],
        children: [],
    },
    RedProt: {
        parents: ["Services"],
        children: [],
    },
    ReportControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence, "OptFields", "RptEnabled"],
    },
    ReportSettings: {
        parents: ["Services"],
        children: [],
    },
    RptEnabled: {
        parents: ["ReportControl"],
        children: [...tUnNamingSequence, "ClientLN"],
    },
    SamplesPerSec: {
        parents: ["SMVSettings"],
        children: [],
    },
    SampledValueControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "SmvOpts"],
    },
    SecPerSamples: {
        parents: ["SMVSettings"],
        children: [],
    },
    SCL: {
        parents: [],
        children: [
            ...tBaseNameSequence,
            "Header",
            "Substation",
            "Communication",
            "IED",
            "DataTypeTemplates",
            "Line",
            "Process",
        ],
    },
    SDI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    SDO: {
        parents: ["DOType"],
        children: [...tNamingSequence],
    },
    Server: {
        parents: ["AccessPoint"],
        children: [
            ...tUnNamingSequence,
            "Authentication",
            "LDevice",
            "Association",
        ],
    },
    ServerAt: {
        parents: ["AccessPoint"],
        children: [...tUnNamingSequence],
    },
    Services: {
        parents: ["IED", "AccessPoint"],
        children: [
            "DynAssociation",
            "SettingGroups",
            "GetDirectory",
            "GetDataObjectDefinition",
            "DataObjectDirectory",
            "GetDataSetValue",
            "SetDataSetValue",
            "DataSetDirectory",
            "ConfDataSet",
            "DynDataSet",
            "ReadWrite",
            "TimerActivatedControl",
            "ConfReportControl",
            "GetCBValues",
            "ConfLogControl",
            "ReportSettings",
            "LogSettings",
            "GSESettings",
            "SMVSettings",
            "GSEDir",
            "GOOSE",
            "GSSE",
            "SMVsc",
            "FileHandling",
            "ConfLNs",
            "ClientServices",
            "ConfLdName",
            "SupSubscription",
            "ConfSigRef",
            "ValueHandling",
            "RedProt",
            "TimeSyncProt",
            "CommProt",
        ],
    },
    SetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    SettingControl: {
        parents: ["LN0"],
        children: [...tUnNamingSequence],
    },
    SettingGroups: {
        parents: ["Services"],
        children: ["SGEdit", "ConfSG"],
    },
    SGEdit: {
        parents: ["SettingGroups"],
        children: [],
    },
    SmpRate: {
        parents: ["SMVSettings"],
        children: [],
    },
    SMV: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence],
    },
    SmvOpts: {
        parents: ["SampledValueControl"],
        children: [],
    },
    SMVsc: {
        parents: ["Services"],
        children: [],
    },
    SMVSecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    SMVSettings: {
        parents: ["Services"],
        children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"],
    },
    SubEquipment: {
        parents: [
            "TapChanger",
            "PowerTransformer",
            "ConductingEquipment",
            "TransformerWinding",
            ...tAbstractConductingEquipment,
        ],
        children: [...tPowerSystemResourceSequence, "EqFunction"],
    },
    SubFunction: {
        parents: ["SubFunction", "Function"],
        children: [
            ...tPowerSystemResourceSequence,
            "GeneralEquipment",
            "ConductingEquipment",
            "SubFunction",
        ],
    },
    SubNetwork: {
        parents: ["Communication"],
        children: [...tNamingSequence, "BitRate", "ConnectedAP"],
    },
    Subject: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    Substation: {
        parents: ["SCL"],
        children: [...tEquipmentContainerSequence, "VoltageLevel", "Function"],
    },
    SupSubscription: {
        parents: ["Services"],
        children: [],
    },
    TapChanger: {
        parents: ["TransformerWinding"],
        children: [...tPowerSystemResourceSequence, "SubEquipment", "EqFunction"],
    },
    Terminal: {
        parents: [...tEquipment],
        children: [...tUnNamingSequence],
    },
    Text: {
        parents: sCLTags.filter((tag) => tag !== "Text" && tag !== "Private"),
        children: [],
    },
    TimerActivatedControl: {
        parents: ["Services"],
        children: [],
    },
    TimeSyncProt: {
        parents: ["Services", "ClientServices"],
        children: [],
    },
    TransformerWinding: {
        parents: ["PowerTransformer"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "TapChanger",
            "NeutralPoint",
            "EqFunction",
            "SubEquipment",
        ],
    },
    TrgOps: {
        parents: ["ReportControl"],
        children: [],
    },
    Val: {
        parents: ["DAI", "DA", "BDA"],
        children: [],
    },
    ValueHandling: {
        parents: ["Services"],
        children: [],
    },
    Voltage: {
        parents: ["VoltageLevel"],
        children: [],
    },
    VoltageLevel: {
        parents: ["Substation"],
        children: [...tEquipmentContainerSequence, "Voltage", "Bay", "Function"],
    },
};
const tagSet$1 = new Set(sCLTags);
function isSCLTag(tag) {
    return tagSet$1.has(tag);
}

/**
 * Helper function for to determine schema valid `reference` for OpenSCD
 * core Insert event.
 * !! only valid with Edition 2.1 projects (2007B4)
 * @param parent - The parent element the new child shall be added to
 * @param tag - The `tagName` of the new child
 * @returns Reference for new [[`tag`]] child within [[`parent`]]  or `null`
 */
function getReference(parent, tag) {
    if (!isSCLTag(tag))
        return null;
    const parentTag = parent.tagName;
    const children = Array.from(parent.children);
    if (parentTag === "Services" ||
        parentTag === "SettingGroups" ||
        !isSCLTag(parentTag))
        return children.find((child) => child.tagName === tag) ?? null;
    const sequence = tags$1[parentTag].children;
    let index = sequence.findIndex((element) => element === tag);
    if (index < 0)
        return null;
    let nextSibling;
    while (index < sequence.length && !nextSibling) {
        // eslint-disable-next-line no-loop-func
        nextSibling = children.find((child) => child.tagName === sequence[index]);
        index += 1;
    }
    return nextSibling ?? null;
}

/** @returns object reference acc. IEC 61850-7-3 for control block elements */
function controlBlockObjRef(ctrlBlock) {
    const iedName = ctrlBlock.closest("IED")?.getAttribute("name");
    const ldInst = ctrlBlock.closest("LDevice")?.getAttribute("inst");
    const parentLn = ctrlBlock.closest("LN,LN0");
    const prefix = parentLn?.getAttribute("prefix") ?? "";
    const lnClass = parentLn?.getAttribute("lnClass");
    const lnInst = parentLn?.getAttribute("inst") ?? "";
    const cbName = ctrlBlock.getAttribute("name");
    if (!iedName || !ldInst || !lnClass || !cbName)
        return null;
    return `${iedName}${ldInst}/${prefix}${lnClass}${lnInst}.${cbName}`;
}

/**
 * Locates control block from an ExtRef element.
 * NOTE: Only supports > Edition 2 using the srcXXX attributes.
 * @param extRef - SCL ExtRef element.
 * @returns Either ReportControl/GSEControl/SampledValueControl or null
 * if not found.
 */
function sourceControlBlock(extRef) {
    const [iedName, srcPrefix, srcLNInst, srcCBName] = [
        "iedName",
        "srcPrefix",
        "srcLNInst",
        "srcCBName",
    ].map((attr) => extRef.getAttribute(attr));
    const doc = extRef.ownerDocument;
    const srcLDInst = extRef.getAttribute("srcLDInst") ?? extRef.getAttribute("ldInst");
    const srcLNClass = extRef.getAttribute("srcLNClass") ?? "LLN0";
    const serviceType = extRef.getAttribute("serviceType") ?? extRef.getAttribute("pServT");
    if (!iedName || !srcLDInst || !srcCBName || serviceType === "Poll")
        return null;
    const lDevice = `:root > IED[name="${iedName}"] > AccessPoint > Server > LDevice[inst="${srcLDInst}"]`;
    const maybeReport = !serviceType || serviceType === "Report";
    const maybeGSE = !serviceType || serviceType === "GOOSE";
    const maybeSMV = !serviceType || serviceType === "SMV";
    const anyLN = srcLNClass === "LLN0" ? "LN0" : "LN";
    const lnClass = `[lnClass="${srcLNClass}"]`;
    let lnPrefixQualifiers;
    if (anyLN === "LN") {
        lnPrefixQualifiers =
            srcPrefix && srcPrefix !== ""
                ? [`[prefix="${srcPrefix}"]`]
                : [":not([prefix])", '[prefix=""]'];
    }
    else {
        lnPrefixQualifiers = [":not([prefix])"];
    }
    // On LN0 srcLNInst missing on the ExtRef means an inst=""
    // On LN inst must be a non-empty string and so srcLNInst
    // must also be a non-empty string and be present
    const lnInst = anyLN !== "LN0" && srcLNInst ? `[inst="${srcLNInst}"]` : '[inst=""]';
    const cbName = `[name="${srcCBName}"]`;
    const cbTypes = [
        maybeReport ? `ReportControl${cbName}` : null,
        maybeGSE ? `GSEControl${cbName}` : null,
        maybeSMV ? `SampledValueControl${cbName}` : null,
    ].filter((s) => !!s);
    return doc.querySelector(crossProduct$1([`${lDevice}>${anyLN}${lnClass}${lnInst}`], lnPrefixQualifiers, [">"], cbTypes)
        .map((strings) => strings.join(""))
        .join(","));
}

function getChildElementsByTagName(element, tag) {
    return Array.from(element.children).filter((element) => element.tagName === tag);
}
/** maximum value for `lnInst` attribute */
const maxLnInst$1 = 99;
const lnInstRange$1 = Array(maxLnInst$1)
    .fill(1)
    .map((_, i) => `${i + 1}`);
/**
 * Generator function returning unique `inst` or `lnInst` attribute for element
 * [[`tagName`]] within [[`parent`]].
 * ```md
 * Valid range for both `inst` and `lnInst` is between 1 and 99
 * ```
 * @param parent - The parent element to be scanned for `inst` or `lnInst`
 * values already in use. Be sure to create a new generator every time the
 * children of this element change in SCL.
 * @param tagName - Tag name of the child elements containing the
 * `lnInst` or `inst` attribute
 * @returns a function generating increasing unused `inst` or `lnInst` values
 * element with [[`tagName`]] within [[`parent`]] on subsequent invocations
 */
function lnInstGenerator(parent, tagName) {
    const generators = new Map();
    const generatedAttribute = tagName === "LN" ? "inst" : "lnInst";
    return (lnClass) => {
        if (!generators.has(lnClass)) {
            const lnInstOrInst = new Set(getChildElementsByTagName(parent, tagName)
                .filter((element) => element.getAttribute("lnClass") === lnClass)
                .map((element) => element.getAttribute(generatedAttribute)));
            generators.set(lnClass, () => {
                const uniqueLnInstOrInst = lnInstRange$1.find((lnInst) => !lnInstOrInst.has(lnInst));
                if (uniqueLnInstOrInst)
                    lnInstOrInst.add(uniqueLnInstOrInst);
                return uniqueLnInstOrInst;
            });
        }
        return generators.get(lnClass)();
    };
}

function type(supervision) {
    const serviceType = supervision.sourceControlBlock.tagName;
    return serviceType === "GSEControl" ? "GoCBRef" : "SvCBRef";
}
function supervisionLnClass(supervision) {
    const serviceType = supervision.sourceControlBlock.tagName;
    return serviceType === "GSEControl" ? "LGOS" : "LSVS";
}
/** @returns Unique attribute `inst` for supervision logical nodes. */
function globalLnInstGenerator() {
    const lnInstGenerators = new Map();
    return (supervision) => {
        const ied = supervision.subscriberIedOrLn;
        const lnClass = supervisionLnClass(supervision);
        const formLn = ied.querySelector(`LN[lnClass="${lnClass}"]`);
        const lDevice = formLn.parentElement;
        const iedName = `${ied.getAttribute("name")}`;
        if (!lnInstGenerators.has(iedName))
            lnInstGenerators.set(iedName, lnInstGenerator(lDevice, "LN"));
        return lnInstGenerators.get(iedName)(lnClass);
    };
}
/** @returns Whether child `DA` with name `setSrcRef` can edited by SCL editor */
function isSrcRefEditable$1(supervisionLn) {
    const lnClass = supervisionLn.getAttribute("lnClass");
    const cbRefType = lnClass === "LGOS" ? "GoCBRef" : "SvCBRef";
    if (supervisionLn.querySelector(`:scope > DOI[name="${cbRefType}"] > 
        DAI[name="setSrcRef"][valImport="true"][valKind="RO"],
       :scope > DOI[name="${cbRefType}"] > 
        DAI[name="setSrcRef"][valImport="true"][valKind="Conf"]`))
        return true;
    const rootNode = supervisionLn.ownerDocument;
    const lnType = supervisionLn.getAttribute("lnType");
    const goOrSvCBRef = rootNode.querySelector(`DataTypeTemplates > 
        LNodeType[id="${lnType}"][lnClass="${lnClass}"] > DO[name="${cbRefType}"]`);
    const cbRefId = goOrSvCBRef?.getAttribute("type");
    const setSrcRef = rootNode.querySelector(`DataTypeTemplates > DOType[id="${cbRefId}"] > DA[name="setSrcRef"]`);
    return ((setSrcRef?.getAttribute("valKind") === "Conf" ||
        setSrcRef?.getAttribute("valKind") === "RO") &&
        setSrcRef.getAttribute("valImport") === "true");
}

const maxGseMacAddress = 0x010ccd0101ff;
const minGseMacAddress = 0x010ccd010000;
const maxSmvMacAddress = 0x010ccd0401ff;
const minSmvMacAddress = 0x010ccd040000;
function convertToMac(mac) {
    const str = 0 + mac.toString(16).toUpperCase();
    const arr = str.match(/.{1,2}/g);
    return arr.join("-");
}
Array(maxGseMacAddress - minGseMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minGseMacAddress + i));
Array(maxSmvMacAddress - minSmvMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minSmvMacAddress + i));

const maxGseAppId = 0x3fff;
const minGseAppId = 0x0000;
// APPID range for Type1A(Trip) GOOSE acc. IEC 61850-8-1
const maxGseTripAppId = 0xbfff;
const minGseTripAppId = 0x8000;
const maxSmvAppId = 0x7fff;
const minSmvAppId = 0x4000;
Array(maxGseAppId - minGseAppId)
    .fill(1)
    .map((_, i) => (minGseAppId + i).toString(16).toUpperCase().padStart(4, "0"));
Array(maxGseTripAppId - minGseTripAppId)
    .fill(1)
    .map((_, i) => (minGseTripAppId + i).toString(16).toUpperCase().padStart(4, "0"));
Array(maxSmvAppId - minSmvAppId)
    .fill(1)
    .map((_, i) => (minSmvAppId + i).toString(16).toUpperCase().padStart(4, "0"));

/** @returns Whether a supervision LN holds a valid control block object ref */
function holdsValidObjRef(ln, type) {
    const objRef = ln.querySelector(`:scope > DOI[name="${type}"] > DAI[name="setSrcRef"] > Val`)?.textContent;
    if (!objRef)
        return false;
    // IEDnameLDinst/prefixLnClassLnInst.CbName
    const indexSlash = objRef.indexOf("/");
    const indexDot = objRef.indexOf(".");
    return (indexSlash !== 0 &&
        indexSlash < indexDot + 1 &&
        indexDot - 1 < objRef.length);
}
/** @returns Whether `Services` element requirement is met */
function withinSupervisionLimits(supervision) {
    const subscriberIed = supervision.subscriberIedOrLn.tagName === "IED"
        ? supervision.subscriberIedOrLn
        : supervision.subscriberIedOrLn.closest("IED");
    const lnClass = supervisionLnClass(supervision);
    const max = subscriberIed
        ?.querySelector("Services > SupSubscription")
        ?.getAttribute(`${lnClass === "LGOS" ? "maxGo" : "maxSv"}`);
    if (!max || isNaN(parseInt(max, 10)))
        return false;
    const existingSupervisionLNs = Array.from(subscriberIed.querySelectorAll(`LN[lnClass="${lnClass}"]`));
    if (existingSupervisionLNs.length < parseInt(max, 10))
        return true;
    const availableSupervisorSpots = existingSupervisionLNs.filter((ln) => !holdsValidObjRef(ln, type(supervision)));
    return (existingSupervisionLNs.length === parseInt(max, 10) &&
        availableSupervisorSpots.length > 0);
}
/** @returns Whether `DA`|`DAI` with name `setSrcRef` is editable */
function isSrcRefEditable(supervision) {
    const lnClass = supervisionLnClass(supervision);
    const ln = supervision.subscriberIedOrLn.tagName === "LN"
        ? supervision.subscriberIedOrLn
        : supervision.subscriberIedOrLn.querySelector(`LN[lnClass="${lnClass}"]`);
    const doiName = type(supervision);
    if (ln.querySelector(`:scope > DOI[name="${doiName}"] > 
        DAI[name="setSrcRef"][valImport="true"][valKind="RO"],
       :scope > DOI[name="${doiName}"] > 
        DAI[name="setSrcRef"][valImport="true"][valKind="Conf"]`))
        return true;
    const rootNode = ln.ownerDocument;
    const lnType = ln.getAttribute("lnType");
    const goOrSvCBRef = rootNode.querySelector(`DataTypeTemplates > 
            LNodeType[id="${lnType}"][lnClass="${lnClass}"] > DO[name="${type(supervision)}"]`);
    const cbRefId = goOrSvCBRef?.getAttribute("type");
    const setSrcRef = rootNode.querySelector(`DataTypeTemplates > DOType[id="${cbRefId}"] > DA[name="setSrcRef"]`);
    return ((setSrcRef?.getAttribute("valKind") === "Conf" ||
        setSrcRef?.getAttribute("valKind") === "RO") &&
        setSrcRef.getAttribute("valImport") === "true");
}
/**
 * A pre requirement for a subscription supervision is an already existing
 * LN of the class `LGOS` or `LSVS` in the subscriber IED.
 * @returns Whether there is a logical node element `LN` with the class `LGOS`, `LSVS`
 */
function existFirstSupervisionOfType(supervision) {
    const lnClass = supervision.sourceControlBlock.tagName === "GSEControl" ? "LGOS" : "LSVS";
    const firstSupervisionOfType = supervision.subscriberIedOrLn.querySelector(`:scope > AccessPoint > Server > LDevice > LN[lnClass="${lnClass}"]`);
    return firstSupervisionOfType ? true : false;
}
/** @returns Whether [[`controlBlock`]] is supervised in [[`subscriberIed`]] */
function isControlBlockSupervised(supervision) {
    const subscriberIed = supervision.subscriberIedOrLn.tagName === "IED"
        ? supervision.subscriberIedOrLn
        : supervision.subscriberIedOrLn.closest("IED");
    const lnClass = supervision.sourceControlBlock.tagName === "GSEControl" ? "LGOS" : "LSVS";
    const refType = supervision.sourceControlBlock.tagName === "GSEControl"
        ? "GoCBRef"
        : "SvCBRef";
    return Array.from(subscriberIed?.querySelectorAll(`:scope > AccessPoint > Server > LDevice > LN[lnClass="${lnClass}"] 
      > DOI[name="${refType}"] > DAI[name="setSrcRef"] > Val`)).some((val) => val.textContent === controlBlockObjRef(supervision.sourceControlBlock));
}
/** Whether subscription supervision instantiation can be performed.
 * ```md
 * - check if `valImport` and `valKind` allow to change subscriber logical node
 * - check whether the control block is already supervised in the IED
 * - check whether there is an available location for the control block
 *   reference to be stored in the supervision source reference.
 * - check whether `Service` element requirements are met
 * - check whether the logical node has missing or empty `Val` content
 *   (iedOrLn is LN)
 * ```
 * @returns Whether subscription supervision can be done */
function canInstantiateSubscriptionSupervision(supervision, options = {
    newSupervisionLn: false,
    fixedLnInst: -1,
    checkEditableSrcRef: true,
    checkDuplicateSupervisions: true,
    checkMaxSupervisionLimits: true,
}) {
    if (options.checkDuplicateSupervisions &&
        isControlBlockSupervised(supervision))
        return false;
    if (supervision.subscriberIedOrLn.tagName === "LN") {
        const type = supervision.sourceControlBlock.tagName === "GSEControl"
            ? "GoCBRef"
            : "SvCBRef";
        if (holdsValidObjRef(supervision.subscriberIedOrLn, type))
            return false;
    }
    else {
        if (!existFirstSupervisionOfType(supervision))
            return false;
    }
    if (options.checkMaxSupervisionLimits &&
        !withinSupervisionLimits(supervision))
        return false;
    if (options.checkEditableSrcRef && !isSrcRefEditable(supervision))
        return false;
    return true;
}

function isFixedInst(options) {
    return "fixedInst" in options;
}
function isNewSupervisionLn(options) {
    return "newSupervisionLn" in options;
}
function createSupervisionDaiElement(input) {
    const dai = createElement(input.doc, "DAI", { name: "setSrcRef" });
    const val = createElement(input.doc, "Val", {});
    dai.appendChild(val);
    val.textContent = input.controlBlockReference;
    return dai;
}
function createSupervisionDoiElement(input) {
    const doi = createElement(input.doc, "DOI", { name: input.cbRefType });
    const dai = createElement(input.doc, "DAI", { name: "setSrcRef" });
    const val = createElement(input.doc, "Val", {});
    doi.appendChild(dai);
    dai.appendChild(val);
    val.textContent = input.controlBlockReference;
    return doi;
}
function cdRefType(logicalNode) {
    const lnClass = logicalNode.getAttribute("lnClass");
    const cbRefType = lnClass === "LGOS" ? "GoCBRef" : "SvCBRef";
    return cbRefType;
}
function availableSupervisionLn(supervision, usedSupervisions) {
    const lnClass = supervisionLnClass(supervision);
    const cbRefType = type(supervision);
    return (Array.from(supervision.subscriberIedOrLn.querySelectorAll(`:scope > AccessPoint > Server > LDevice > LN[lnClass="${lnClass}"]`))
        // filter already used available logical nodes
        .filter((ln) => !usedSupervisions?.has(ln))
        .find((ln) => {
        return (ln.querySelector(`:scope > DOI[name="${cbRefType}"] > DAI[name="setSrcRef"] > Val`) === null ||
            ln.querySelector(`:scope > DOI[name="${cbRefType}"] > DAI[name="setSrcRef"] > Val`)?.textContent === "");
    }) ?? null);
}
function createSupervisionLogicalNode(supervision, controlBlockReference, inst) {
    const subscriberIed = supervision.subscriberIedOrLn;
    const lnClass = supervisionLnClass(supervision);
    const formLn = subscriberIed.querySelector(`LN[lnClass="${lnClass}"]`);
    const parent = formLn.parentElement;
    const lnType = formLn.getAttribute("lnType");
    const prefix = formLn.getAttribute("prefix");
    const ln = createElement(subscriberIed.ownerDocument, "LN", {
        prefix,
        lnClass,
        lnType,
        inst,
    });
    const openScdTag = createElement(subscriberIed.ownerDocument, "Private", {
        type: "OpenSCD.create",
    });
    ln.appendChild(openScdTag);
    const lastSupervisionLn = parent.querySelector(`:scope > LN[lnClass="${lnClass}"]:last-child`);
    const reference = lastSupervisionLn
        ? lastSupervisionLn.nextElementSibling
        : getReference(parent, "LN");
    const doc = ln.ownerDocument;
    const cbRefType = cdRefType(ln);
    ln.appendChild(createSupervisionDoiElement({
        doc,
        cbRefType,
        controlBlockReference,
    }));
    return { parent, node: ln, reference };
}
function updateSupervisionLogicalNode(controlBlockReference, logicalNode) {
    const doc = logicalNode.ownerDocument;
    const cbRefType = cdRefType(logicalNode);
    const createSupervisionElementInput = {
        doc,
        cbRefType,
        controlBlockReference,
    };
    const doi = logicalNode.querySelector(`:scope > DOI[name="${cbRefType}"]`);
    if (!doi)
        return {
            parent: logicalNode,
            node: createSupervisionDoiElement(createSupervisionElementInput),
            reference: getReference(logicalNode, "DOI"),
        };
    const dai = logicalNode.querySelector(`:scope > DOI[name="${cbRefType}"] > DAI[name="setSrcRef"]`);
    if (!dai)
        return {
            parent: doi,
            node: createSupervisionDaiElement(createSupervisionElementInput),
            reference: getReference(doi, "DAI"),
        };
    const val = logicalNode.querySelector(`:scope > DOI[name="${cbRefType}"] > DAI[name="setSrcRef"] > Val`);
    if (!val) {
        const newVal = createElement(doc, "Val", {});
        dai.appendChild(newVal);
        newVal.textContent = controlBlockReference;
        return { parent: dai, node: newVal, reference: getReference(dai, "Val") };
    }
    const cbRef = document.createTextNode(controlBlockReference);
    return { parent: val, node: cbRef, reference: null };
}
/** @returns Insert edit on unused supervision logical node or new supervision logical node */
function createSupervisionEdit(supervision, options) {
    const sourceControlBlock = supervision.sourceControlBlock;
    const controlBlockReference = controlBlockObjRef(sourceControlBlock);
    if (!controlBlockReference)
        return null;
    if (supervision.subscriberIedOrLn.tagName === "LN")
        return updateSupervisionLogicalNode(controlBlockReference, supervision.subscriberIedOrLn);
    if (isNewSupervisionLn(options) && options.newSupervisionLn) {
        const inst = options.fixedInst
            ? options.fixedInst
            : options.instGenerator(supervision);
        return createSupervisionLogicalNode(supervision, controlBlockReference, inst);
    }
    const unusedSupervisionLogicalNode = availableSupervisionLn(supervision, options?.usedSupervisions);
    if (!unusedSupervisionLogicalNode) {
        const inst = isFixedInst(options)
            ? options.fixedInst
            : options.instGenerator(supervision);
        return createSupervisionLogicalNode(supervision, controlBlockReference, inst);
    }
    options.usedSupervisions?.add(unusedSupervisionLogicalNode);
    return updateSupervisionLogicalNode(controlBlockReference, unusedSupervisionLogicalNode);
}

await fetch(new URL(new URL('assets/nsd-0a370a57.json', import.meta.url).href, import.meta.url)).then((res) => res.json());

/**
 * Instantiate supervision logical node (LGOS/LSVS) for [[`sourceControlBlock`]]
 * within a [[`subscriberIedOrLn`]].
 * @param supervision
 * @param options
 * @return Insert edit or null, if supervision is not possible
 */
function instantiateSubscriptionSupervision(supervision, options = {
    newSupervisionLn: false,
    fixedLnInst: -1,
    checkEditableSrcRef: true,
    checkDuplicateSupervisions: true,
    checkMaxSupervisionLimits: true,
}) {
    if (!canInstantiateSubscriptionSupervision(supervision, options))
        return null;
    if (options.fixedLnInst >= 0)
        return createSupervisionEdit(supervision, {
            newSupervisionLn: options.newSupervisionLn,
            fixedInst: `${options.fixedLnInst}`,
        });
    if (supervision.subscriberIedOrLn.tagName === "LN")
        return createSupervisionEdit(supervision, { fixedInst: "-1" });
    /** Global as multiple subscription could be defined for different subscriber IEDs */
    const instGenerator = globalLnInstGenerator();
    if (options.newSupervisionLn && options.fixedLnInst === -1)
        return createSupervisionEdit(supervision, {
            newSupervisionLn: true,
            instGenerator,
        });
    return createSupervisionEdit(supervision, { instGenerator });
}

/** @returns Whether other subscribed ExtRef of the same control block exist */
function isControlBlockSubscribed(supervisionLn) {
    const controlObjRef = supervisionLn.querySelector(`:scope > DOI[name="GoCBRef"] > DAI[name="setSrcRef"] > Val, 
    :scope > DOI[name="SvCBRef"] > DAI[name="setSrcRef"] > Val`)?.textContent;
    const extRefs = Array.from(supervisionLn.closest("IED").querySelectorAll(`:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef, 
      :scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef`));
    return extRefs.some((extRef) => {
        const [srcCBName, srcLDInst, iedName] = [
            "srcCBName",
            "srcLDInst",
            "iedName",
        ].map((attr) => extRef.getAttribute(attr));
        return controlObjRef === `${iedName}${srcLDInst}/LLN0.${srcCBName}`;
    });
}
function canRemoveSupervision(supervisionLn, options) {
    if (!isSrcRefEditable$1(supervisionLn))
        return false;
    if (options.checkSubscription && isControlBlockSubscribed(supervisionLn))
        return false;
    return true;
}
function removeSupervision(supervisionLn, options = {
    removeSupervisionLn: false,
    checkSubscription: true,
}) {
    if (!canRemoveSupervision(supervisionLn, options))
        return null;
    if (options.removeSupervisionLn)
        return { node: supervisionLn };
    const val = supervisionLn.querySelector(`:scope > DOI[name="GoCBRef"] > DAI[name="setSrcRef"] > Val, 
    :scope > DOI[name="SvCBRef"] > DAI[name="setSrcRef"] > Val`);
    if (!val)
        return null;
    const node = Array.from(val.childNodes).find((childNode) => childNode.nodeType === Node.TEXT_NODE);
    return { node };
}

/** @returns Whether a given element is within a Private section */
function isPublic(element) {
    return !element.closest("Private");
}

/** @returns parent `tagName` s for SCL (2007B4) element tag  */
function parentTags(tagName) {
    if (!isSCLTag(tagName))
        return [];
    return tags$1[tagName].parents;
}

const indexedSCLTags = ["ExtRef", "IEDName", "P", "ProtNs", "Val"];
const voidSelector = ":not(*)";
function crossProduct(...arrays) {
    return arrays.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())), [[]]);
}
function pathParts(identity) {
    const path = identity.split(">");
    const end = path.pop();
    const start = path.join(">");
    return [start, end];
}
function hitemSelector(tagName, identity) {
    const [version, revision] = identity.split("\t");
    if (!version || !revision)
        return voidSelector;
    return `${tagName}[version="${version}"][revision="${revision}"]`;
}
function terminalSelector(tagName, identity) {
    const [parentIdentity, connectivityNode] = pathParts(identity);
    const parentSelectors = parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(","));
    return crossProduct(parentSelectors, [">"], [`${tagName}[connectivityNode="${connectivityNode}"]`])
        .map((strings) => strings.join(""))
        .join(",");
}
function lNodeSelector(tagName, identity) {
    if (identity.endsWith(")")) {
        const [parentIdentity, childIdentity] = pathParts(identity);
        const [lnClass, lnType] = childIdentity
            .substring(1, childIdentity.length - 1)
            .split(" ");
        if (!lnClass || !lnType)
            return voidSelector;
        const parentSelectors = parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(","));
        return crossProduct(parentSelectors, [">"], [`${tagName}[iedName="None"][lnClass="${lnClass}"][lnType="${lnType}"]`])
            .map((strings) => strings.join(""))
            .join(",");
    }
    const [iedName, ldInst, prefix, lnClass, lnInst] = identity.split(/[ /]/);
    if (!iedName || !ldInst || !lnClass)
        return voidSelector;
    const [iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors,] = [
        [`[iedName="${iedName}"]`],
        ldInst === "(Client)"
            ? [":not([ldInst])", '[ldInst=""]']
            : [`[ldInst="${ldInst}"]`],
        prefix ? [`[prefix="${prefix}"]`] : [":not([prefix])", '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [":not([lnInst])", '[lnInst=""]'],
    ];
    return crossProduct([tagName], iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors)
        .map((strings) => strings.join(""))
        .join(",");
}
function kDCSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [iedName, apName] = childIdentity.split(" ");
    return `${selector("IED", parentIdentity)}>${tagName}[iedName="${iedName}"][apName="${apName}"]`;
}
function associationSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [iedName, ldInst, prefix, lnClass, lnInst] = childIdentity.split(/[ /]/);
    const parentSelectors = parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(","));
    const [iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors,] = [
        [`[iedName="${iedName}"]`],
        [`[ldInst="${ldInst}"]`],
        prefix ? [`[prefix="${prefix}"]`] : [":not([prefix])", '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [":not([lnInst])", '[lnInst=""]'],
    ];
    return crossProduct(parentSelectors, [">"], [tagName], iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors)
        .map((strings) => strings.join(""))
        .join(",");
}
function lDeviceSelector(tagName, identity) {
    const [iedName, inst] = identity.split(">>");
    if (!inst)
        return voidSelector;
    return `IED[name="${iedName}"] ${tagName}[inst="${inst}"]`;
}
function fCDASelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [ldInst, prefix, lnClass, lnInst] = childIdentity.split(/[ /.]/);
    const matchDoDa = childIdentity.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/);
    const doName = matchDoDa && matchDoDa[1] ? matchDoDa[1] : "";
    const daName = matchDoDa && matchDoDa[2] ? matchDoDa[2] : "";
    const matchFx = childIdentity.match(/\(([A-Z]{2})/);
    const matchIx = childIdentity.match(/ \[([0-9]{1,2})\]/);
    const fc = matchFx && matchFx[1] ? matchFx[1] : "";
    const ix = matchIx && matchIx[1] ? matchIx[1] : "";
    const [parentSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, fcSelectors, ixSelectors,] = [
        parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(",")),
        [`[ldInst="${ldInst}"]`],
        prefix ? [`[prefix="${prefix}"]`] : [":not([prefix])", '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [":not([lnInst])", '[lnInst=""]'],
        [`[doName="${doName}"]`],
        daName ? [`[daName="${daName}"]`] : [":not([daName])", '[daName=""]'],
        [`[fc="${fc}"]`],
        ix ? [`[ix="${ix}"]`] : [":not([ix])", '[ix=""]'],
    ];
    return crossProduct(parentSelectors, [">"], [tagName], ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, fcSelectors, ixSelectors)
        .map((strings) => strings.join(""))
        .join(",");
}
function lNSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const parentSelectors = parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(","));
    const [prefix, lnClass, inst] = childIdentity.split(" ");
    if (!lnClass)
        return voidSelector;
    const [prefixSelectors, lnClassSelectors, instSelectors] = [
        prefix ? [`[prefix="${prefix}"]`] : [":not([prefix])", '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        [`[inst="${inst}"]`],
    ];
    return crossProduct(parentSelectors, [">"], [tagName], prefixSelectors, lnClassSelectors, instSelectors)
        .map((strings) => strings.join(""))
        .join(",");
}
function clientLNSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const parentSelectors = parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(","));
    const [iedName, apRef, ldInst, prefix, lnClass, lnInst] = childIdentity.split(/[ /]/);
    const [iedNameSelectors, apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors,] = [
        iedName ? [`[iedName="${iedName}"]`] : [":not([iedName])", '[iedName=""]'],
        apRef ? [`[apRef="${apRef}"]`] : [":not([apRef])", '[apRef=""]'],
        ldInst ? [`[ldInst="${ldInst}"]`] : [":not([ldInst])", '[ldInst=""]'],
        prefix ? [`[prefix="${prefix}"]`] : [":not([prefix])", '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [":not([lnInst])", '[lnInst=""]'],
    ];
    return crossProduct(parentSelectors, [">"], [tagName], iedNameSelectors, apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors)
        .map((strings) => strings.join(""))
        .join(",");
}
function ixNamingSelector(tagName, identity, depth = -1) {
    // eslint-disable-next-line no-param-reassign
    if (depth === -1)
        depth = identity.split(">").length;
    const [parentIdentity, childIdentity] = pathParts(identity);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_0, name, _1, ix] = childIdentity.match(/([^[]*)(\[([0-9]*)\])?/);
    if (!name)
        return voidSelector;
    const parentSelectors = parentTags(tagName)
        .flatMap((parentTag) => parentTag === "SDI"
        ? ixNamingSelector(parentTag, parentIdentity, depth - 1).split(",")
        : selector(parentTag, parentIdentity).split(","))
        // eslint-disable-next-line no-shadow
        .filter((selector) => !selector.startsWith(voidSelector));
    if (parentSelectors.length === 0)
        return voidSelector;
    const [nameSelectors, ixSelectors] = [
        [`[name="${name}"]`],
        ix ? [`[ix="${ix}"]`] : ['[ix=""]', ":not([ix])"],
    ];
    return crossProduct(parentSelectors, [">"], [tagName], nameSelectors, ixSelectors)
        .map((strings) => strings.join(""))
        .join(",");
}
function connectedAPSelector(tagName, identity) {
    const [iedName, apName] = identity.split(" ");
    if (!iedName || !apName)
        return voidSelector;
    return `${tagName}[iedName="${iedName}"][apName="${apName}"]`;
}
function controlBlockSelector(tagName, identity) {
    const [ldInst, cbName] = identity.split(" ");
    if (!ldInst || !cbName)
        return voidSelector;
    return `${tagName}[ldInst="${ldInst}"][cbName="${cbName}"]`;
}
function physConnSelector(tagName, identity) {
    const [parentIdentity, pcType] = pathParts(identity);
    const [parentSelectors, typeSelectors] = [
        parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(",")),
        pcType ? [`[type="${pcType}"]`] : [""],
    ];
    return crossProduct(parentSelectors, [">"], [tagName], typeSelectors)
        .map((strings) => strings.join(""))
        .join(",");
}
function enumValSelector(tagName, identity) {
    const [parentIdentity, ord] = pathParts(identity);
    return `${selector("EnumType", parentIdentity)}>${tagName}[ord="${ord}"]`;
}
function sCLSelector() {
    return ":root";
}
function namingSelector(tagName, identity, depth = -1) {
    // eslint-disable-next-line no-param-reassign
    if (depth === -1)
        depth = identity.split(">").length;
    const [parentIdentity, name] = pathParts(identity);
    if (!name)
        return voidSelector;
    // eslint-disable-next-line prefer-destructuring
    const parents = parentTags(tagName);
    const parentSelectors = parents
        .flatMap((parentTag) => selectorTags[parentTag] === selectorTags.Substation
        ? namingSelector(parentTag, parentIdentity, depth - 1).split(",")
        : selector(parentTag, parentIdentity).split(","))
        // eslint-disable-next-line no-shadow
        .filter((selector) => !selector.startsWith(voidSelector));
    if (parentSelectors.length === 0)
        return voidSelector;
    return crossProduct(parentSelectors, [">"], [tagName], [`[name="${name}"]`])
        .map((strings) => strings.join(""))
        .join(",");
}
function singletonSelector(tagName, identity) {
    // eslint-disable-next-line prefer-destructuring
    const parents = parentTags(tagName);
    const parentSelectors = parents
        .flatMap((parentTag) => selector(parentTag, identity).split(","))
        // eslint-disable-next-line no-shadow
        .filter((selector) => !selector.startsWith(voidSelector));
    if (parentSelectors.length === 0)
        return voidSelector;
    return crossProduct(parentSelectors, [">"], [tagName])
        .map((strings) => strings.join(""))
        .join(",");
}
function idNamingSelector(tagName, identity) {
    const id = identity.replace(/^#/, "");
    if (!id)
        return voidSelector;
    return `${tagName}[id="${id}"]`;
}
const selectorTags = {
    AccessControl: singletonSelector,
    AccessPoint: namingSelector,
    Address: singletonSelector,
    Association: associationSelector,
    Authentication: singletonSelector,
    BDA: namingSelector,
    BitRate: singletonSelector,
    Bay: namingSelector,
    ClientLN: clientLNSelector,
    ClientServices: singletonSelector,
    CommProt: singletonSelector,
    Communication: singletonSelector,
    ConductingEquipment: namingSelector,
    ConfDataSet: singletonSelector,
    ConfLdName: singletonSelector,
    ConfLNs: singletonSelector,
    ConfLogControl: singletonSelector,
    ConfReportControl: singletonSelector,
    ConfSG: singletonSelector,
    ConfSigRef: singletonSelector,
    ConnectedAP: connectedAPSelector,
    ConnectivityNode: namingSelector,
    DA: namingSelector,
    DAI: ixNamingSelector,
    DAType: idNamingSelector,
    DO: namingSelector,
    DOI: namingSelector,
    DOType: idNamingSelector,
    DataObjectDirectory: singletonSelector,
    DataSet: namingSelector,
    DataSetDirectory: singletonSelector,
    DataTypeTemplates: singletonSelector,
    DynAssociation: singletonSelector,
    DynDataSet: singletonSelector,
    EnumType: idNamingSelector,
    EnumVal: enumValSelector,
    EqFunction: namingSelector,
    EqSubFunction: namingSelector,
    ExtRef: () => voidSelector,
    FCDA: fCDASelector,
    FileHandling: singletonSelector,
    Function: namingSelector,
    GeneralEquipment: namingSelector,
    GetCBValues: singletonSelector,
    GetDataObjectDefinition: singletonSelector,
    GetDataSetValue: singletonSelector,
    GetDirectory: singletonSelector,
    GOOSE: singletonSelector,
    GOOSESecurity: namingSelector,
    GSE: controlBlockSelector,
    GSEDir: singletonSelector,
    GSEControl: namingSelector,
    GSESettings: singletonSelector,
    GSSE: singletonSelector,
    Header: singletonSelector,
    History: singletonSelector,
    Hitem: hitemSelector,
    IED: namingSelector,
    IEDName: () => voidSelector,
    Inputs: singletonSelector,
    IssuerName: singletonSelector,
    KDC: kDCSelector,
    LDevice: lDeviceSelector,
    LN: lNSelector,
    LN0: singletonSelector,
    LNode: lNodeSelector,
    LNodeType: idNamingSelector,
    Line: namingSelector,
    Log: namingSelector,
    LogControl: namingSelector,
    LogSettings: singletonSelector,
    MaxTime: singletonSelector,
    McSecurity: singletonSelector,
    MinTime: singletonSelector,
    NeutralPoint: terminalSelector,
    OptFields: singletonSelector,
    P: () => voidSelector,
    PhysConn: physConnSelector,
    PowerTransformer: namingSelector,
    Private: () => voidSelector,
    Process: namingSelector,
    ProtNs: () => voidSelector,
    Protocol: singletonSelector,
    ReadWrite: singletonSelector,
    RedProt: singletonSelector,
    ReportControl: namingSelector,
    ReportSettings: singletonSelector,
    RptEnabled: singletonSelector,
    SamplesPerSec: singletonSelector,
    SampledValueControl: namingSelector,
    SecPerSamples: singletonSelector,
    SCL: sCLSelector,
    SDI: ixNamingSelector,
    SDO: namingSelector,
    Server: singletonSelector,
    ServerAt: singletonSelector,
    Services: singletonSelector,
    SetDataSetValue: singletonSelector,
    SettingControl: singletonSelector,
    SettingGroups: singletonSelector,
    SGEdit: singletonSelector,
    SmpRate: singletonSelector,
    SMV: controlBlockSelector,
    SmvOpts: singletonSelector,
    SMVsc: singletonSelector,
    SMVSecurity: namingSelector,
    SMVSettings: singletonSelector,
    SubEquipment: namingSelector,
    SubFunction: namingSelector,
    SubNetwork: namingSelector,
    Subject: singletonSelector,
    Substation: namingSelector,
    SupSubscription: singletonSelector,
    TapChanger: namingSelector,
    Terminal: terminalSelector,
    Text: singletonSelector,
    TimerActivatedControl: singletonSelector,
    TimeSyncProt: singletonSelector,
    TransformerWinding: namingSelector,
    TrgOps: singletonSelector,
    Val: () => voidSelector,
    ValueHandling: singletonSelector,
    Voltage: singletonSelector,
    VoltageLevel: namingSelector,
};
function selector(tagName, identity) {
    return selectorTags[tagName](tagName, identity);
}
function findExtRef(root, tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const parentSelectors = parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(","));
    if (childIdentity.endsWith("]")) {
        const [intAddr] = childIdentity.split("[");
        const intAddrSelectors = [`[intAddr="${intAddr}"]`];
        const index = childIdentity &&
            childIdentity.match(/\[([0-9]+)\]/) &&
            childIdentity.match(/\[([0-9]+)\]/)[1]
            ? parseFloat(childIdentity.match(/\[([0-9]+)\]/)[1])
            : NaN;
        const extRefSelector = crossProduct(parentSelectors, [">"], [tagName], intAddrSelectors)
            .map((strings) => strings.join(""))
            .join(",");
        return (Array.from(root.querySelectorAll(extRefSelector)).filter(isPublic)[index] ?? null);
    }
    let iedName;
    let ldInst;
    let prefix;
    let lnClass;
    let lnInst;
    let doName;
    let daName;
    let serviceType;
    let srcCBName;
    let srcLDInst;
    let srcPrefix;
    let srcLNClass;
    let srcLNInst;
    if (!childIdentity.includes(":") && !childIdentity.includes("@")) {
        [iedName, ldInst, prefix, lnClass, lnInst, doName, daName] =
            childIdentity.split(/[ /]/);
    }
    else if (childIdentity.includes(":") && !childIdentity.includes("@")) {
        [
            serviceType,
            srcCBName,
            srcLDInst,
            srcPrefix,
            srcLNClass,
            srcLNInst,
            iedName,
            ldInst,
            prefix,
            lnClass,
            lnInst,
            doName,
            daName,
        ] = childIdentity.split(/[ /:]/);
    }
    const [iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, serviceTypeSelectors, srcCBNameSelectors, srcLDInstSelectors, srcPrefixSelectors, srcLNClassSelectors, srcLNInstSelectors,] = [
        iedName ? [`[iedName="${iedName}"]`] : [":not([iedName])"],
        ldInst ? [`[ldInst="${ldInst}"]`] : [":not([ldInst])", '[ldInst=""]'],
        prefix ? [`[prefix="${prefix}"]`] : [":not([prefix])", '[prefix=""]'],
        lnClass ? [`[lnClass="${lnClass}"]`] : [":not([lnClass])"],
        lnInst ? [`[lnInst="${lnInst}"]`] : [":not([lnInst])", '[lnInst=""]'],
        doName ? [`[doName="${doName}"]`] : [":not([doName])"],
        daName ? [`[daName="${daName}"]`] : [":not([daName])", '[daName=""]'],
        serviceType
            ? [`[serviceType="${serviceType}"]`]
            : [":not([serviceType])", '[serviceType=""]'],
        srcCBName
            ? [`[srcCBName="${srcCBName}"]`]
            : [":not([srcCBName])", '[srcCBName=""]'],
        srcLDInst
            ? [`[srcLDInst="${srcLDInst}"]`]
            : [":not([srcLDInst])", '[srcLDInst=""]'],
        srcPrefix
            ? [`[srcPrefix="${srcPrefix}"]`]
            : [":not([srcPrefix])", '[srcPrefix=""]'],
        srcLNClass
            ? [`[srcLNClass="${srcLNClass}"]`]
            : [":not([srcLNClass])", '[srcLNClass=""]'],
        srcLNInst
            ? [`[srcLNInst="${srcLNInst}"]`]
            : [":not([srcLNInst])", '[srcLNInst=""]'],
    ];
    const extRefSelector = crossProduct(parentSelectors, [">"], [tagName], iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, serviceTypeSelectors, srcCBNameSelectors, srcLDInstSelectors, srcPrefixSelectors, srcLNClassSelectors, srcLNInstSelectors)
        .map((strings) => strings.join(""))
        .join(",");
    return (Array.from(root.querySelectorAll(extRefSelector)).filter(isPublic)[0] ??
        null);
}
function findIEDName(root, tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [iedName, apRef, ldInst, prefix, lnClass, lnInst] = childIdentity.split(/[ /]/);
    const [parentSelectors, apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors,] = [
        parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(",")),
        apRef ? [`[apRef="${apRef}"]`] : [":not([apRef])", '[apRef=""]'],
        ldInst ? [`[ldInst="${ldInst}"]`] : [":not([ldInst])", '[ldInst=""]'],
        prefix ? [`[prefix="${prefix}"]`] : [":not([prefix])", '[prefix=""]'],
        lnClass ? [`[lnClass="${lnClass}"]`] : [":not([lnClass])", '[lnClass=""]'],
        lnInst ? [`[lnInst="${lnInst}"]`] : [":not([lnInst])", '[lnInst=""]'],
    ];
    const iEDNameSelector = crossProduct(parentSelectors, [">"], [tagName], apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors)
        .map((strings) => strings.join(""))
        .join(",");
    return (Array.from(root.querySelectorAll(iEDNameSelector))
        .filter(isPublic)
        .find((iEDName) => iEDName.textContent === iedName) ?? null);
}
function findP(root, tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [type] = childIdentity.split(" ");
    const index = childIdentity &&
        childIdentity.match(/\[([0-9]+)\]/) &&
        childIdentity.match(/\[([0-9]+)\]/)[1]
        ? parseFloat(childIdentity.match(/\[([0-9]+)\]/)[1])
        : NaN;
    const [parentSelectors, typeSelectors] = [
        parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(",")),
        [`[type="${type}"]`],
    ];
    const pSelector = crossProduct(parentSelectors, [">"], [tagName], typeSelectors)
        .map((strings) => strings.join(""))
        .join(",");
    return Number.isNaN(index)
        ? Array.from(root.querySelectorAll(pSelector)).find(isPublic) ?? null
        : Array.from(root.querySelectorAll(pSelector)).filter(isPublic)[index] ??
            null;
}
function findProtNs(root, tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [type, protNsContent] = childIdentity.split("\t");
    const [parentSelectors, typeSelector] = [
        parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(",")),
        type && type !== "8-MMS"
            ? [`[type="${type}"]`]
            : [":not([type])", '[type="8-MMS"]'],
    ];
    const protNsSelector = crossProduct(parentSelectors, [">"], [tagName], typeSelector)
        .map((strings) => strings.join(""))
        .join(",");
    return (Array.from(root.querySelectorAll(protNsSelector))
        .filter(isPublic)
        .find((protNs) => protNs.textContent === protNsContent) ?? null);
}
function findVal(root, tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [sGroup, indexText] = childIdentity.split(" ");
    const index = parseFloat(indexText);
    const parentSelectors = parentTags(tagName).flatMap((parentTag) => selector(parentTag, parentIdentity).split(","));
    const [nameSelectors] = [sGroup ? [`[sGroup="${sGroup}"]`] : [""]];
    const valSelector = crossProduct(parentSelectors, [">"], [tagName], nameSelectors)
        .map((strings) => strings.join(""))
        .join(",");
    return (Array.from(root.querySelectorAll(valSelector)).filter(isPublic)[index] ??
        null);
}
const sclTags = {
    ExtRef: findExtRef,
    IEDName: findIEDName,
    P: findP,
    ProtNs: findProtNs,
    Val: findVal,
};
const tagSet = new Set(indexedSCLTags);
function isIndexedSCL(tag) {
    return tagSet.has(tag);
}
function find(root, tagName, identity) {
    if (typeof identity !== "string" || !isSCLTag(tagName))
        return null;
    if (isIndexedSCL(tagName))
        return sclTags[tagName](root, tagName, identity);
    return (Array.from(root.querySelectorAll(selectorTags[tagName](tagName, identity))).filter(isPublic)[0] ?? null);
}

/* eslint-disable no-use-before-define */
function hitemIdentity(e) {
    return `${e.getAttribute("version")}\t${e.getAttribute("revision")}`;
}
function terminalIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("connectivityNode")}`;
}
function lNodeIdentity(e) {
    const [iedName, ldInst, prefix, lnClass, lnInst, lnType] = [
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "lnType",
    ].map((name) => e.getAttribute(name));
    if (iedName === "None")
        return `${identity(e.parentElement)}>(${lnClass} ${lnType})`;
    return `${iedName} ${ldInst || "(Client)"}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}`;
}
function kDCIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("iedName")} ${e.getAttribute("apName")}`;
}
function associationIdentity(e) {
    const [iedName, ldInst, prefix, lnClass, lnInst] = [
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "lnType",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}`;
}
function lDeviceIdentity(e) {
    return `${identity(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function iEDNameIdentity(e) {
    const iedName = e.textContent;
    const [apRef, ldInst, prefix, lnClass, lnInst] = [
        "apRef",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ""} ${ldInst || ""}/${prefix ?? ""} ${lnClass ?? ""} ${lnInst ?? ""}`;
}
function fCDAIdentity(e) {
    const [ldInst, prefix, lnClass, lnInst, doName, daName, fc, ix] = [
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "doName",
        "daName",
        "fc",
        "ix",
    ].map((name) => e.getAttribute(name));
    const dataPath = `${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}.${doName} ${daName || ""}`;
    return `${identity(e.parentElement)}>${dataPath} (${fc}${ix ? ` [${ix}]` : ""})`;
}
function extRefIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const parentIdentity = identity(e.parentElement);
    const iedName = e.getAttribute("iedName");
    const intAddr = e.getAttribute("intAddr");
    const intAddrIndex = Array.from(e.parentElement.querySelectorAll(`ExtRef[intAddr="${intAddr}"]`)).indexOf(e);
    if (intAddr)
        return `${parentIdentity}>${intAddr}[${intAddrIndex}]`;
    const [ldInst, prefix, lnClass, lnInst, doName, daName, serviceType, srcLDInst, srcPrefix, srcLNClass, srcLNInst, srcCBName,] = [
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "doName",
        "daName",
        "serviceType",
        "srcLDInst",
        "srcPrefix",
        "srcLNClass",
        "srcLNInst",
        "srcCBName",
    ].map((name) => e.getAttribute(name));
    const defaultSrcPrefix = "";
    const finalSrcPrefix = srcPrefix ?? defaultSrcPrefix;
    const defaultSrcLNInst = "";
    const finalSrcLNInst = srcLNInst ?? defaultSrcLNInst;
    const cbPath = srcCBName
        ? `${serviceType}:${srcCBName} ${srcLDInst}/${finalSrcPrefix} ${srcLNClass} ${finalSrcLNInst}`
        : "";
    const defaultPrefix = "";
    const finalPrefix = prefix ?? defaultPrefix;
    const defaultLnInst = "";
    const finalLnInst = lnInst ?? defaultLnInst;
    const defaultDaName = "";
    const finalDaName = daName || defaultDaName;
    const dataPath = `${iedName} ${ldInst}/${finalPrefix} ${lnClass} ${finalLnInst} ${doName} ${finalDaName}`;
    return `${parentIdentity}>${cbPath ? `${cbPath} ` : ""}${dataPath}`;
}
function lNIdentity(e) {
    const [prefix, lnClass, inst] = ["prefix", "lnClass", "inst"].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${prefix ?? ""} ${lnClass} ${inst}`;
}
function clientLNIdentity(e) {
    const [apRef, iedName, ldInst, prefix, lnClass, lnInst] = [
        "apRef",
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ""} ${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst}`;
}
function ixNamingIdentity(e) {
    const [name, ix] = ["name", "ix"].map((naming) => e.getAttribute(naming));
    return `${identity(e.parentElement)}>${name}${ix ? `[${ix}]` : ""}`;
}
function valIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const sGroup = e.getAttribute("sGroup");
    const index = Array.from(e.parentElement.children)
        .filter((child) => child.getAttribute("sGroup") === sGroup)
        .findIndex((child) => child.isSameNode(e));
    return `${identity(e.parentElement)}>${sGroup ? `${sGroup}` : ""} ${index}`;
}
function connectedAPIdentity(e) {
    const [iedName, apName] = ["iedName", "apName"].map((name) => e.getAttribute(name));
    return `${iedName} ${apName}`;
}
function controlBlockIdentity(e) {
    const [ldInst, cbName] = ["ldInst", "cbName"].map((name) => e.getAttribute(name));
    return `${ldInst} ${cbName}`;
}
function physConnIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const pcType = e.getAttribute("type");
    if (e.parentElement.children.length > 1 &&
        pcType !== "Connection" &&
        pcType !== "RedConn")
        return NaN;
    return `${identity(e.parentElement)}>${pcType}`;
}
function pIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const eParent = e.parentElement;
    const eType = e.getAttribute("type");
    if (eParent.tagName === "PhysConn")
        return `${identity(e.parentElement)}>${eType}`;
    const index = Array.from(e.parentElement.children)
        .filter((child) => child.getAttribute("type") === eType)
        .findIndex((child) => child.isSameNode(e));
    return `${identity(e.parentElement)}>${eType} [${index}]`;
}
function enumValIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("ord")}`;
}
function protNsIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const type = e.getAttribute("type");
    return `${identity(e.parentElement)}>${type || "8-MMS"}\t${e.textContent}`;
}
function sCLIdentity() {
    return "";
}
function namingIdentity(e) {
    return e.parentElement.tagName === "SCL"
        ? e.getAttribute("name")
        : `${identity(e.parentElement)}>${e.getAttribute("name")}`;
}
function singletonIdentity(e) {
    return identity(e.parentElement).toString();
}
function idNamingIdentity(e) {
    return `#${e.id}`;
}
const tags = {
    AccessControl: {
        identity: singletonIdentity,
    },
    AccessPoint: {
        identity: namingIdentity,
    },
    Address: {
        identity: singletonIdentity,
    },
    Association: {
        identity: associationIdentity,
    },
    Authentication: {
        identity: singletonIdentity,
    },
    BDA: {
        identity: namingIdentity,
    },
    BitRate: {
        identity: singletonIdentity,
    },
    Bay: {
        identity: namingIdentity,
    },
    ClientLN: {
        identity: clientLNIdentity,
    },
    ClientServices: {
        identity: singletonIdentity,
    },
    CommProt: {
        identity: singletonIdentity,
    },
    Communication: {
        identity: singletonIdentity,
    },
    ConductingEquipment: {
        identity: namingIdentity,
    },
    ConfDataSet: {
        identity: singletonIdentity,
    },
    ConfLdName: {
        identity: singletonIdentity,
    },
    ConfLNs: {
        identity: singletonIdentity,
    },
    ConfLogControl: {
        identity: singletonIdentity,
    },
    ConfReportControl: {
        identity: singletonIdentity,
    },
    ConfSG: {
        identity: singletonIdentity,
    },
    ConfSigRef: {
        identity: singletonIdentity,
    },
    ConnectedAP: {
        identity: connectedAPIdentity,
    },
    ConnectivityNode: {
        identity: namingIdentity,
    },
    DA: {
        identity: namingIdentity,
    },
    DAI: {
        identity: ixNamingIdentity,
    },
    DAType: {
        identity: idNamingIdentity,
    },
    DO: {
        identity: namingIdentity,
    },
    DOI: {
        identity: namingIdentity,
    },
    DOType: {
        identity: idNamingIdentity,
    },
    DataObjectDirectory: {
        identity: singletonIdentity,
    },
    DataSet: {
        identity: namingIdentity,
    },
    DataSetDirectory: {
        identity: singletonIdentity,
    },
    DataTypeTemplates: {
        identity: singletonIdentity,
    },
    DynAssociation: {
        identity: singletonIdentity,
    },
    DynDataSet: {
        identity: singletonIdentity,
    },
    EnumType: {
        identity: idNamingIdentity,
    },
    EnumVal: {
        identity: enumValIdentity,
    },
    EqFunction: {
        identity: namingIdentity,
    },
    EqSubFunction: {
        identity: namingIdentity,
    },
    ExtRef: {
        identity: extRefIdentity,
    },
    FCDA: {
        identity: fCDAIdentity,
    },
    FileHandling: {
        identity: singletonIdentity,
    },
    Function: {
        identity: namingIdentity,
    },
    GeneralEquipment: {
        identity: namingIdentity,
    },
    GetCBValues: {
        identity: singletonIdentity,
    },
    GetDataObjectDefinition: {
        identity: singletonIdentity,
    },
    GetDataSetValue: {
        identity: singletonIdentity,
    },
    GetDirectory: {
        identity: singletonIdentity,
    },
    GOOSE: {
        identity: singletonIdentity,
    },
    GOOSESecurity: {
        identity: namingIdentity,
    },
    GSE: {
        identity: controlBlockIdentity,
    },
    GSEDir: {
        identity: singletonIdentity,
    },
    GSEControl: {
        identity: namingIdentity,
    },
    GSESettings: {
        identity: singletonIdentity,
    },
    GSSE: {
        identity: singletonIdentity,
    },
    Header: {
        identity: singletonIdentity,
    },
    History: {
        identity: singletonIdentity,
    },
    Hitem: {
        identity: hitemIdentity,
    },
    IED: {
        identity: namingIdentity,
    },
    IEDName: {
        identity: iEDNameIdentity,
    },
    Inputs: {
        identity: singletonIdentity,
    },
    IssuerName: {
        identity: singletonIdentity,
    },
    KDC: {
        identity: kDCIdentity,
    },
    LDevice: {
        identity: lDeviceIdentity,
    },
    LN: {
        identity: lNIdentity,
    },
    LN0: {
        identity: singletonIdentity,
    },
    LNode: {
        identity: lNodeIdentity,
    },
    LNodeType: {
        identity: idNamingIdentity,
    },
    Line: {
        identity: namingIdentity,
    },
    Log: {
        identity: namingIdentity,
    },
    LogControl: {
        identity: namingIdentity,
    },
    LogSettings: {
        identity: singletonIdentity,
    },
    MaxTime: {
        identity: singletonIdentity,
    },
    McSecurity: {
        identity: singletonIdentity,
    },
    MinTime: {
        identity: singletonIdentity,
    },
    NeutralPoint: {
        identity: terminalIdentity,
    },
    OptFields: {
        identity: singletonIdentity,
    },
    P: {
        identity: pIdentity,
    },
    PhysConn: {
        identity: physConnIdentity,
    },
    PowerTransformer: {
        identity: namingIdentity,
    },
    Process: {
        identity: namingIdentity,
    },
    ProtNs: {
        identity: protNsIdentity,
    },
    Protocol: {
        identity: singletonIdentity,
    },
    ReadWrite: {
        identity: singletonIdentity,
    },
    RedProt: {
        identity: singletonIdentity,
    },
    ReportControl: {
        identity: namingIdentity,
    },
    ReportSettings: {
        identity: singletonIdentity,
    },
    RptEnabled: {
        identity: singletonIdentity,
    },
    SamplesPerSec: {
        identity: singletonIdentity,
    },
    SampledValueControl: {
        identity: namingIdentity,
    },
    SecPerSamples: {
        identity: singletonIdentity,
    },
    SCL: {
        identity: sCLIdentity,
    },
    SDI: {
        identity: ixNamingIdentity,
    },
    SDO: {
        identity: namingIdentity,
    },
    Server: {
        identity: singletonIdentity,
    },
    ServerAt: {
        identity: singletonIdentity,
    },
    Services: {
        identity: singletonIdentity,
    },
    SetDataSetValue: {
        identity: singletonIdentity,
    },
    SettingControl: {
        identity: singletonIdentity,
    },
    SettingGroups: {
        identity: singletonIdentity,
    },
    SGEdit: {
        identity: singletonIdentity,
    },
    SmpRate: {
        identity: singletonIdentity,
    },
    SMV: {
        identity: controlBlockIdentity,
    },
    SmvOpts: {
        identity: singletonIdentity,
    },
    SMVsc: {
        identity: singletonIdentity,
    },
    SMVSecurity: {
        identity: namingIdentity,
    },
    SMVSettings: {
        identity: singletonIdentity,
    },
    SubEquipment: {
        identity: namingIdentity,
    },
    SubFunction: {
        identity: namingIdentity,
    },
    SubNetwork: {
        identity: namingIdentity,
    },
    Subject: {
        identity: singletonIdentity,
    },
    Substation: {
        identity: namingIdentity,
    },
    SupSubscription: {
        identity: singletonIdentity,
    },
    TapChanger: {
        identity: namingIdentity,
    },
    Terminal: {
        identity: terminalIdentity,
    },
    Text: {
        identity: singletonIdentity,
    },
    TimerActivatedControl: {
        identity: singletonIdentity,
    },
    TimeSyncProt: {
        identity: singletonIdentity,
    },
    TransformerWinding: {
        identity: namingIdentity,
    },
    TrgOps: {
        identity: singletonIdentity,
    },
    Val: {
        identity: valIdentity,
    },
    ValueHandling: {
        identity: singletonIdentity,
    },
    Voltage: {
        identity: singletonIdentity,
    },
    VoltageLevel: {
        identity: namingIdentity,
    },
};
/** @returns Identity string for a valid SCL element or NaN */
function identity(e) {
    if (e === null)
        return NaN;
    if (e.closest("Private"))
        return NaN;
    const tag = e.tagName;
    if (isSCLTag(tag))
        return tags[tag].identity(e);
    return NaN;
}

function newEditEvent(edit) {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: edit,
    });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$9=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$5=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$8(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$5(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$3(t){return e$8({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$j=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$7(e){return o$j({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$4(i,n){return o$j({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$6(e){return o$j({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$h;const e$5=null!=(null===(n$h=window.HTMLSlotElement)||void 0===n$h?void 0:n$h.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$h(n){const{slot:l,selector:t}=null!=n?n:{};return o$j({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$5(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$i(o,n,r){let l,s=o;return "object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$h({slot:s,flatten:n,selector:r}):o$j({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$g=Symbol(),n$g=new WeakMap;class o$h{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$g)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$g.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$g.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$h("string"==typeof t?t:t+"",void 0,s$g),i$3=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$h(n,t,s$g)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$f;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$g=e$3.reactiveElementPolyfillSupport,n$f={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$2=(t,i)=>i!==t&&(i==i||t==t),l$g={attribute:!0,type:String,converter:n$f,reflect:!1,hasChanged:a$2};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$g){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$g}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$g){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$f).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$f;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$g||o$g({ReactiveElement:d$1}),(null!==(s$f=e$3.reactiveElementVersions)&&void 0!==s$f?s$f:e$3.reactiveElementVersions=[]).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$2=window,s$e=i$2.trustedTypes,e$2=s$e?s$e.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$f="$lit$",n$e=`lit$${(Math.random()+"").slice(9)}$`,l$f="?"+n$e,h=`<${l$f}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$f+s.slice(v)+n$e+w):s+n$e+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$f)||i.startsWith(n$e)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$f).split(n$e),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$e),i=t.length-1;if(i>0){h.textContent=s$e?s$e.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$f)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$e,t+1));)v.push({type:7,index:r}),t+=n$e.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$e?s$e.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$2.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$1=i$2.litHtmlVersions)&&void 0!==t$1?t$1:i$2.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$e,o$e;class s$d extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$d.finalized=!0,s$d._$litElement$=!0,null===(l$e=globalThis.litElementHydrateSupport)||void 0===l$e||l$e.call(globalThis,{LitElement:s$d});const n$d=globalThis.litElementPolyfillSupport;null==n$d||n$d({LitElement:s$d});(null!==(o$e=globalThis.litElementVersions)&&void 0!==o$e?o$e:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$c = i$3 `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Icon = class Icon extends s$d {
    /** @soyTemplate */
    render() {
        return x `<span><slot></slot></span>`;
    }
};
Icon.styles = [styles$c];
Icon = __decorate([
    e$9('mwc-icon')
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
function closest$1(element, selector) {
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
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$d,o$d;class s$c extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$c.finalized=!0,s$c._$litElement$=!0,null===(l$d=globalThis.litElementHydrateSupport)||void 0===l$d||l$d.call(globalThis,{LitElement:s$c});const n$c=globalThis.litElementPolyfillSupport;null==n$c||n$c({LitElement:s$c});(null!==(o$d=globalThis.litElementVersions)&&void 0!==o$d?o$d:globalThis.litElementVersions=[]).push("3.3.3");

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
class BaseElement extends s$c {
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
var cssClasses$8 = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings$6 = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers$4 = {
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
            return cssClasses$8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings$6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers$4;
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
            }, numbers$4.FG_DEACTIVATION_MS);
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
 */var l$c,o$c;class s$b extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$b.finalized=!0,s$b._$litElement$=!0,null===(l$c=globalThis.litElementHydrateSupport)||void 0===l$c||l$c.call(globalThis,{LitElement:s$b});const n$b=globalThis.litElementPolyfillSupport;null==n$b||n$b({LitElement:s$b});(null!==(o$c=globalThis.litElementVersions)&&void 0!==o$c?o$c:globalThis.litElementVersions=[]).push("3.3.3");

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
 */const o$b=e$1(class extends i$1{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i="important",n$a=" !"+i,o$a=e$1(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ht){this.ht=new Set;for(const t in r)this.ht.add(t);return this.render(r)}this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ht.add(t);const r="string"==typeof e&&e.endsWith(n$a);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i:""):s[t]=e;}}return T}});

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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$b(classes)}"
          style="${o$a({
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
    i$4('.mdc-ripple-surface')
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
    e$8({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
    e$8({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
    e$8({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
    e$8({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
    e$8({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
    e$8({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
    e$8({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "hovering", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
    t$3()
], RippleBase.prototype, "topPos", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$b = i$3 `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Ripple = class Ripple extends RippleBase {
};
Ripple.styles = [styles$b];
Ripple = __decorate([
    e$9('mwc-ripple')
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
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$b,o$9;class s$a extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$a.finalized=!0,s$a._$litElement$=!0,null===(l$b=globalThis.litElementHydrateSupport)||void 0===l$b||l$b.call(globalThis,{LitElement:s$a});const n$9=globalThis.litElementPolyfillSupport;null==n$9||n$9({LitElement:s$a});(null!==(o$9=globalThis.litElementVersions)&&void 0!==o$9?o$9:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$a=l=>null!=l?l:A;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ButtonBase extends s$a {
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
          class="mdc-button ${o$b(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l$a(this.ariaHasPopup)}"
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
        <span class="slot-container ${o$b({
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
    e$8({ type: String, attribute: 'aria-haspopup' })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
    e$8({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
    e$8({ type: Boolean, attribute: 'trailingicon' })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
    e$8({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
    e$8({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
    e$8({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
    i$4('#button')
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$6('mwc-ripple')
], ButtonBase.prototype, "ripple", void 0);
__decorate([
    t$3()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$7({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$a = i$3 `.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Button = class Button extends ButtonBase {
};
Button.styles = [styles$a];
Button = __decorate([
    e$9('mwc-button')
], Button);

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
var cssClasses$7 = {
    ROOT: 'mdc-form-field',
};
var strings$5 = {
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
            return cssClasses$7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "strings", {
        get: function () {
            return strings$5;
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
var _a$2, _b$1;
// ShadyDOM should submit <input> elements in component internals
const USING_SHADY_DOM = (_b$1 = (_a$2 = window.ShadyDOM) === null || _a$2 === void 0 ? void 0 : _a$2.inUse) !== null && _b$1 !== void 0 ? _b$1 : false;
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
    e$8({ type: Boolean })
], FormElement.prototype, "disabled", void 0);

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
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$9,o$8;class s$9 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$9.finalized=!0,s$9._$litElement$=!0,null===(l$9=globalThis.litElementHydrateSupport)||void 0===l$9||l$9.call(globalThis,{LitElement:s$9});const n$8=globalThis.litElementPolyfillSupport;null==n$8||n$8({LitElement:s$9});(null!==(o$8=globalThis.litElementVersions)&&void 0!==o$8?o$8:globalThis.litElementVersions=[]).push("3.3.3");

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
      <div class="mdc-form-field ${o$b(classes)}">
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
    e$8({ type: Boolean })
], FormfieldBase.prototype, "alignEnd", void 0);
__decorate([
    e$8({ type: Boolean })
], FormfieldBase.prototype, "spaceBetween", void 0);
__decorate([
    e$8({ type: Boolean })
], FormfieldBase.prototype, "nowrap", void 0);
__decorate([
    e$8({ type: String }),
    observer(async function (label) {
        var _a;
        (_a = this.input) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-label', label);
    })
], FormfieldBase.prototype, "label", void 0);
__decorate([
    i$4('.mdc-form-field')
], FormfieldBase.prototype, "mdcRoot", void 0);
__decorate([
    o$i('', true, '*')
], FormfieldBase.prototype, "slottedInputs", void 0);
__decorate([
    i$4('label')
], FormfieldBase.prototype, "labelEl", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$9 = i$3 `.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Formfield = class Formfield extends FormfieldBase {
};
Formfield.styles = [styles$9];
Formfield = __decorate([
    e$9('mwc-formfield')
], Formfield);

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
var strings$4 = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers$3 = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses$6 = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
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
var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    __extends(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return strings$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return cssClasses$6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return numbers$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += numbers$3.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$8,o$7;class s$8 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$8.finalized=!0,s$8._$litElement$=!0,null===(l$8=globalThis.litElementHydrateSupport)||void 0===l$8||l$8.call(globalThis,{LitElement:s$8});const n$7=globalThis.litElementPolyfillSupport;null==n$7||n$7({LitElement:s$8});(null!==(o$7=globalThis.litElementVersions)&&void 0!==o$7?o$7:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class NotchedOutlineBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCNotchedOutlineFoundation;
        this.width = 0;
        this.open = false;
        this.lastOpen = this.open;
    }
    createAdapter() {
        return {
            addClass: (className) => this.mdcRoot.classList.add(className),
            removeClass: (className) => this.mdcRoot.classList.remove(className),
            setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
            removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
        };
    }
    openOrClose(shouldOpen, width) {
        if (!this.mdcFoundation) {
            return;
        }
        if (shouldOpen && width !== undefined) {
            this.mdcFoundation.notch(width);
        }
        else {
            this.mdcFoundation.closeNotch();
        }
    }
    render() {
        this.openOrClose(this.open, this.width);
        const classes = o$b({
            'mdc-notched-outline--notched': this.open,
        });
        return x `
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
    }
}
__decorate([
    i$4('.mdc-notched-outline')
], NotchedOutlineBase.prototype, "mdcRoot", void 0);
__decorate([
    e$8({ type: Number })
], NotchedOutlineBase.prototype, "width", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], NotchedOutlineBase.prototype, "open", void 0);
__decorate([
    i$4('.mdc-notched-outline__notch')
], NotchedOutlineBase.prototype, "notchElement", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$8 = i$3 `.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let NotchedOutline = class NotchedOutline extends NotchedOutlineBase {
};
NotchedOutline.styles = [styles$8];
NotchedOutline = __decorate([
    e$9('mwc-notched-outline')
], NotchedOutline);

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
var cssClasses$5 = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};

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
var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    __extends(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function () {
            _this.handleShakeAnimationEnd();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return cssClasses$5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter$1 = (labelElement) => {
    return {
        addClass: (className) => labelElement.classList.add(className),
        removeClass: (className) => labelElement.classList.remove(className),
        getWidth: () => labelElement.scrollWidth,
        registerInteractionHandler: (evtType, handler) => {
            labelElement.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            labelElement.removeEventListener(evtType, handler);
        },
    };
};
class FloatingLabelDirective extends i$1 {
    constructor(partInfo) {
        super(partInfo);
        this.foundation = null;
        this.previousPart = null;
        switch (partInfo.type) {
            // Only allow Attribute and Part bindings
            case t.ATTRIBUTE:
            case t.PROPERTY:
                break;
            default:
                throw new Error('FloatingLabel directive only support attribute and property parts');
        }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, [label]) {
        if (part !== this.previousPart) {
            if (this.foundation) {
                this.foundation.destroy();
            }
            this.previousPart = part;
            const labelElement = part.element;
            labelElement.classList.add('mdc-floating-label');
            const adapter = createAdapter$1(labelElement);
            this.foundation = new MDCFloatingLabelFoundation(adapter);
            this.foundation.init();
        }
        return this.render(label);
    }
    render(_label) {
        return this.foundation;
    }
}
const floatingLabel = e$1(FloatingLabelDirective);

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
var cssClasses$4 = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
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
var MDCLineRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function (evt) {
            _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(cssClasses$4.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(cssClasses$4.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter = (lineElement) => {
    return {
        addClass: (className) => lineElement.classList.add(className),
        removeClass: (className) => lineElement.classList.remove(className),
        hasClass: (className) => lineElement.classList.contains(className),
        setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
        registerEventHandler: (evtType, handler) => {
            lineElement.addEventListener(evtType, handler);
        },
        deregisterEventHandler: (evtType, handler) => {
            lineElement.removeEventListener(evtType, handler);
        },
    };
};
class LineRippleDirective extends i$1 {
    constructor(partInfo) {
        super(partInfo);
        this.previousPart = null;
        this.foundation = null;
        switch (partInfo.type) {
            case t.ATTRIBUTE:
            case t.PROPERTY:
                return;
            default:
                throw new Error('LineRipple only support attribute and property parts.');
        }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, _params) {
        if (this.previousPart !== part) {
            if (this.foundation) {
                this.foundation.destroy();
            }
            this.previousPart = part;
            const lineElement = part.element;
            lineElement.classList.add('mdc-line-ripple');
            const adapter = createAdapter(lineElement);
            this.foundation = new MDCLineRippleFoundation(adapter);
            this.foundation.init();
        }
        return this.render();
    }
    render() {
        return this.foundation;
    }
}
const lineRipple = e$1(LineRippleDirective);

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
var strings$3 = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses$3 = {
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    LABEL_FLOATING: 'mdc-text-field--label-floating',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
    WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter',
};
var numbers$2 = {
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern',
    'min',
    'max',
    'required',
    'step',
    'minlength',
    'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value
 * is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color',
    'date',
    'datetime-local',
    'month',
    'range',
    'time',
    'week',
];

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
var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function () {
            _this.activateFocus();
        };
        _this.inputBlurHandler = function () {
            _this.deactivateFocus();
        };
        _this.inputInputHandler = function () {
            _this.handleInput();
        };
        _this.setPointerXOffset = function (evt) {
            _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function () {
            _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function (attributesList) {
            _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return numbers$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat", {
        get: function () {
            var type = this.getNativeInput().type;
            return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() ||
                this.isBadInput();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                setInputAttr: function () { return undefined; },
                removeInputAttr: function () { return undefined; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () {
                    return new MutationObserver(function () { return undefined; });
                },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                setLabelRequired: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var e_1, _a, e_2, _b;
        if (this.adapter.hasLabel() && this.getNativeInput().required) {
            this.adapter.setLabelRequired(true);
        }
        if (this.adapter.isFocused()) {
            this.inputFocusHandler();
        }
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_1 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
                var evtType = POINTERDOWN_EVENTS_1_1.value;
                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.validationObserver =
            this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var e_3, _a, e_4, _b;
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_2 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
                var evtType = POINTERDOWN_EVENTS_2_1.value;
                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                _this.styleValidity(true);
                _this.adapter.setLabelRequired(_this.getNativeInput().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setcharacterCounter(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
            return;
        }
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * numbers$2.LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        }
        else {
            this.adapter.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText &&
            (this.helperText.isPersistent() || !this.helperText.isValidation() ||
                !this.valid)) {
            this.helperText.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) {
            return;
        }
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput().value = value;
        }
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
            var isValid = this.isValid();
            this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            if (this.validateOnValueChange) {
                this.adapter.shakeLabel(this.shouldShake);
            }
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) {
            this.adapter.shakeLabel(shouldShake);
        }
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */
    MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
        this.validateOnValueChange = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */
    MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon) {
            this.trailingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon) {
            this.trailingIcon.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */
    MDCTextFieldFoundation.prototype.setcharacterCounter = function (currentLength) {
        if (!this.characterCounter) {
            return;
        }
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */
    MDCTextFieldFoundation.prototype.isBadInput = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid = function () {
        return this.getNativeInput().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.addClass(INVALID);
        }
        if (this.helperText) {
            this.helperText.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText.isValidation();
            if (!helperTextValidation) {
                return;
            }
            var helperTextVisible = this.helperText.isVisible();
            var helperTextId = this.helperText.getId();
            if (helperTextVisible && helperTextId) {
                this.adapter.setInputAttr(strings$3.ARIA_DESCRIBEDBY, helperTextId);
            }
            else {
                this.adapter.removeInputAttr(strings$3.ARIA_DESCRIBEDBY);
            }
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter.addClass(FOCUSED);
        }
        else {
            this.adapter.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(isDisabled);
        }
        if (this.trailingIcon) {
            this.trailingIcon.setDisabled(isDisabled);
        }
    };
    /**
     * Styles the component based on the label floating state.
     */
    MDCTextFieldFoundation.prototype.styleFloating = function (isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
        if (isFloating) {
            this.adapter.addClass(LABEL_FLOATING);
        }
        else {
            this.adapter.removeClass(LABEL_FLOATING);
        }
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput = function () {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCTextFieldFoundation$1 = MDCTextFieldFoundation;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$7,o$6;class s$7 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$7.finalized=!0,s$7._$litElement$=!0,null===(l$7=globalThis.litElementHydrateSupport)||void 0===l$7||l$7.call(globalThis,{LitElement:s$7});const n$6=globalThis.litElementPolyfillSupport;null==n$6||n$6({LitElement:s$7});(null!==(o$6=globalThis.litElementVersions)&&void 0!==o$6?o$6:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=o=>void 0===o.strings,s$6={},a=(o,l=s$6)=>o._$AH=l;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$6=e$1(class extends i$1{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===T||t$1===A)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return T}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return T}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return T;return a(i),t$1}});

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const passiveEvents = ['touchstart', 'touchmove', 'scroll', 'mousewheel'];
const createValidityObj = (customValidity = {}) => {
    /*
     * We need to make ValidityState an object because it is readonly and
     * we cannot use the spread operator. Also, we don't export
     * `CustomValidityState` because it is a leaky implementation and the user
     * already has access to `ValidityState` in lib.dom.ts. Also an interface
     * {a: Type} can be casted to {readonly a: Type} so passing any object
     * should be fine.
     */
    const objectifiedCustomValidity = {};
    // eslint-disable-next-line guard-for-in
    for (const propName in customValidity) {
        /*
         * Casting is needed because ValidityState's props are all readonly and
         * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
         * interface is the same as ValidityState (but not readonly), but the
         * function signature casts the output to ValidityState (thus readonly).
         */
        objectifiedCustomValidity[propName] =
            customValidity[propName];
    }
    return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
};
/** @soyCompatible */
class TextFieldBase extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCTextFieldFoundation$1;
        this.value = '';
        this.type = 'text';
        this.placeholder = '';
        this.label = '';
        this.icon = '';
        this.iconTrailing = '';
        this.disabled = false;
        this.required = false;
        this.minLength = -1;
        this.maxLength = -1;
        this.outlined = false;
        this.helper = '';
        this.validateOnInitialRender = false;
        this.validationMessage = '';
        this.autoValidate = false;
        this.pattern = '';
        this.min = '';
        this.max = '';
        /**
         * step can be a number or the keyword "any".
         *
         * Use `String` typing to pass down the value as a string and let the native
         * input cast internally as needed.
         */
        this.step = null;
        this.size = null;
        this.helperPersistent = false;
        this.charCounter = false;
        this.endAligned = false;
        this.prefix = '';
        this.suffix = '';
        this.name = '';
        this.readOnly = false;
        this.autocapitalize = '';
        this.outlineOpen = false;
        this.outlineWidth = 0;
        this.isUiValid = true;
        this.focused = false;
        this._validity = createValidityObj();
        this.validityTransform = null;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    get willValidate() {
        return this.formElement.willValidate;
    }
    get selectionStart() {
        return this.formElement.selectionStart;
    }
    get selectionEnd() {
        return this.formElement.selectionEnd;
    }
    focus() {
        const focusEvt = new CustomEvent('focus');
        this.formElement.dispatchEvent(focusEvt);
        this.formElement.focus();
    }
    blur() {
        const blurEvt = new CustomEvent('blur');
        this.formElement.dispatchEvent(blurEvt);
        this.formElement.blur();
    }
    select() {
        this.formElement.select();
    }
    setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
        this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    update(changedProperties) {
        if (changedProperties.has('autoValidate') && this.mdcFoundation) {
            this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
        }
        if (changedProperties.has('value') && typeof this.value !== 'string') {
            this.value = `${this.value}`;
        }
        super.update(changedProperties);
    }
    setFormData(formData) {
        if (this.name) {
            formData.append(this.name, this.value);
        }
    }
    /** @soyTemplate */
    render() {
        const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
        const shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
        /** @classMap */
        const classes = {
            'mdc-text-field--disabled': this.disabled,
            'mdc-text-field--no-label': !this.label,
            'mdc-text-field--filled': !this.outlined,
            'mdc-text-field--outlined': this.outlined,
            'mdc-text-field--with-leading-icon': this.icon,
            'mdc-text-field--with-trailing-icon': this.iconTrailing,
            'mdc-text-field--end-aligned': this.endAligned,
        };
        return x `
      <label class="mdc-text-field ${o$b(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
    }
    updated(changedProperties) {
        if (changedProperties.has('value') &&
            changedProperties.get('value') !== undefined) {
            this.mdcFoundation.setValue(this.value);
            if (this.autoValidate) {
                this.reportValidity();
            }
        }
    }
    /** @soyTemplate */
    renderRipple() {
        return this.outlined ? '' : x `
      <span class="mdc-text-field__ripple"></span>
    `;
    }
    /** @soyTemplate */
    renderOutline() {
        return !this.outlined ? '' : x `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
    }
    /** @soyTemplate */
    renderLabel() {
        return !this.label ?
            '' :
            x `
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
    }
    /** @soyTemplate */
    renderLeadingIcon() {
        return this.icon ? this.renderIcon(this.icon) : '';
    }
    /** @soyTemplate */
    renderTrailingIcon() {
        return this.iconTrailing ? this.renderIcon(this.iconTrailing, true) : '';
    }
    /** @soyTemplate */
    renderIcon(icon, isTrailingIcon = false) {
        /** @classMap */
        const classes = {
            'mdc-text-field__icon--leading': !isTrailingIcon,
            'mdc-text-field__icon--trailing': isTrailingIcon
        };
        return x `<i class="material-icons mdc-text-field__icon ${o$b(classes)}">${icon}</i>`;
    }
    /** @soyTemplate */
    renderPrefix() {
        return this.prefix ? this.renderAffix(this.prefix) : '';
    }
    /** @soyTemplate */
    renderSuffix() {
        return this.suffix ? this.renderAffix(this.suffix, true) : '';
    }
    /** @soyTemplate */
    renderAffix(content, isSuffix = false) {
        /** @classMap */
        const classes = {
            'mdc-text-field__affix--prefix': !isSuffix,
            'mdc-text-field__affix--suffix': isSuffix
        };
        return x `<span class="mdc-text-field__affix ${o$b(classes)}">
        ${content}</span>`;
    }
    /** @soyTemplate */
    renderInput(shouldRenderHelperText) {
        const minOrUndef = this.minLength === -1 ? undefined : this.minLength;
        const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
        const autocapitalizeOrUndef = this.autocapitalize ?
            this.autocapitalize :
            undefined;
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        const ariaLabelledbyOrUndef = !!this.label ? 'label' : undefined;
        const ariaControlsOrUndef = shouldRenderHelperText ? 'helper-text' : undefined;
        const ariaDescribedbyOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
            'helper-text' :
            undefined;
        // TODO: live() directive needs casting for lit-analyzer
        // https://github.com/runem/lit-analyzer/pull/91/files
        // TODO: lit-analyzer labels min/max as (number|string) instead of string
        return x `
      <input
          aria-labelledby=${l$a(ariaLabelledbyOrUndef)}
          aria-controls="${l$a(ariaControlsOrUndef)}"
          aria-describedby="${l$a(ariaDescribedbyOrUndef)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${l$6(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l$a(minOrUndef)}"
          maxlength="${l$a(maxOrUndef)}"
          pattern="${l$a(this.pattern ? this.pattern : undefined)}"
          min="${l$a(this.min === '' ? undefined : this.min)}"
          max="${l$a(this.max === '' ? undefined : this.max)}"
          step="${l$a(this.step === null ? undefined : this.step)}"
          size="${l$a(this.size === null ? undefined : this.size)}"
          name="${l$a(this.name === '' ? undefined : this.name)}"
          inputmode="${l$a(this.inputMode)}"
          autocapitalize="${l$a(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
    }
    /** @soyTemplate */
    renderLineRipple() {
        return this.outlined ?
            '' :
            x `
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
    }
    /** @soyTemplate */
    renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) {
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        /** @classMap */
        const classes = {
            'mdc-text-field-helper-text--persistent': this.helperPersistent,
            'mdc-text-field-helper-text--validation-msg': showValidationMessage,
        };
        const ariaHiddenOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
            undefined :
            'true';
        const helperText = showValidationMessage ? this.validationMessage : this.helper;
        return !shouldRenderHelperText ? '' : x `
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${l$a(ariaHiddenOrUndef)}"
             class="mdc-text-field-helper-text ${o$b(classes)}"
             >${helperText}</div>
        ${this.renderCharCounter(shouldRenderCharCounter)}
      </div>`;
    }
    /** @soyTemplate */
    renderCharCounter(shouldRenderCharCounter) {
        const length = Math.min(this.value.length, this.maxLength);
        return !shouldRenderCharCounter ? '' : x `
      <span class="mdc-text-field-character-counter"
            >${length} / ${this.maxLength}</span>`;
    }
    onInputFocus() {
        this.focused = true;
    }
    onInputBlur() {
        this.focused = false;
        this.reportValidity();
    }
    checkValidity() {
        const isValid = this._checkValidity(this.value);
        if (!isValid) {
            const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
            this.dispatchEvent(invalidEvent);
        }
        return isValid;
    }
    reportValidity() {
        const isValid = this.checkValidity();
        this.mdcFoundation.setValid(isValid);
        this.isUiValid = isValid;
        return isValid;
    }
    _checkValidity(value) {
        const nativeValidity = this.formElement.validity;
        let validity = createValidityObj(nativeValidity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
            this.mdcFoundation.setUseNativeValidation(false);
        }
        else {
            this.mdcFoundation.setUseNativeValidation(true);
        }
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    handleInputChange() {
        this.value = this.formElement.value;
    }
    createAdapter() {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
    }
    getRootAdapterMethods() {
        return Object.assign({ registerTextFieldInteractionHandler: (evtType, handler) => this.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: (handler) => {
                const getAttributesList = (mutationsList) => {
                    return mutationsList.map((mutation) => mutation.attributeName)
                        .filter((attributeName) => attributeName);
                };
                const observer = new MutationObserver((mutationsList) => {
                    handler(getAttributesList(mutationsList));
                });
                const config = { attributes: true };
                observer.observe(this.formElement, config);
                return observer;
            }, deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect() }, addHasRemoveClass(this.mdcRoot));
    }
    getInputAdapterMethods() {
        return {
            getNativeInput: () => this.formElement,
            // since HelperTextFoundation is not used, aria-describedby a11y logic
            // is implemented in render method instead of these adapter methods
            setInputAttr: () => undefined,
            removeInputAttr: () => undefined,
            isFocused: () => this.shadowRoot ?
                this.shadowRoot.activeElement === this.formElement :
                false,
            registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler, { passive: evtType in passiveEvents }),
            deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler),
        };
    }
    getLabelAdapterMethods() {
        return {
            floatLabel: (shouldFloat) => this.labelElement &&
                this.labelElement.floatingLabelFoundation.float(shouldFloat),
            getLabelWidth: () => {
                return this.labelElement ?
                    this.labelElement.floatingLabelFoundation.getWidth() :
                    0;
            },
            hasLabel: () => Boolean(this.labelElement),
            shakeLabel: (shouldShake) => this.labelElement &&
                this.labelElement.floatingLabelFoundation.shake(shouldShake),
            setLabelRequired: (isRequired) => {
                if (this.labelElement) {
                    this.labelElement.floatingLabelFoundation.setRequired(isRequired);
                }
            },
        };
    }
    getLineRippleAdapterMethods() {
        return {
            activateLineRipple: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.activate();
                }
            },
            deactivateLineRipple: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.deactivate();
                }
            },
            setLineRippleTransformOrigin: (normalizedX) => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
                }
            },
        };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        var _a;
        // @ts-ignore
        const result = await super.getUpdateComplete();
        await ((_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete);
        return result;
    }
    // tslint:enable:ban-ts-ignore
    firstUpdated() {
        var _a;
        super.firstUpdated();
        this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
        if (this.validateOnInitialRender) {
            this.reportValidity();
        }
        // wait for the outline element to render to update the notch width
        (_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete.then(() => {
            var _a;
            // `foundation.notchOutline()` assumes the label isn't floating and
            // multiplies by a constant, but the label is already is floating at this
            // stage, therefore directly set the outline width to the label width
            this.outlineWidth =
                ((_a = this.labelElement) === null || _a === void 0 ? void 0 : _a.floatingLabelFoundation.getWidth()) || 0;
        });
    }
    getOutlineAdapterMethods() {
        return {
            closeOutline: () => this.outlineElement && (this.outlineOpen = false),
            hasOutline: () => Boolean(this.outlineElement),
            notchOutline: (labelWidth) => {
                const outlineElement = this.outlineElement;
                if (outlineElement && !this.outlineOpen) {
                    this.outlineWidth = labelWidth;
                    this.outlineOpen = true;
                }
            }
        };
    }
    async layout() {
        await this.updateComplete;
        const labelElement = this.labelElement;
        if (!labelElement) {
            this.outlineOpen = false;
            return;
        }
        const shouldFloat = !!this.label && !!this.value;
        labelElement.floatingLabelFoundation.float(shouldFloat);
        if (!this.outlined) {
            return;
        }
        this.outlineOpen = shouldFloat;
        await this.updateComplete;
        /* When the textfield automatically notches due to a value and label
         * being defined, the textfield may be set to `display: none` by the user.
         * this means that the notch is of size 0px. We provide this function so
         * that the user may manually resize the notch to the floated label's
         * width.
         */
        const labelWidth = labelElement.floatingLabelFoundation.getWidth();
        if (this.outlineOpen) {
            this.outlineWidth = labelWidth;
            await this.updateComplete;
        }
    }
}
__decorate([
    i$4('.mdc-text-field')
], TextFieldBase.prototype, "mdcRoot", void 0);
__decorate([
    i$4('input')
], TextFieldBase.prototype, "formElement", void 0);
__decorate([
    i$4('.mdc-floating-label')
], TextFieldBase.prototype, "labelElement", void 0);
__decorate([
    i$4('.mdc-line-ripple')
], TextFieldBase.prototype, "lineRippleElement", void 0);
__decorate([
    i$4('mwc-notched-outline')
], TextFieldBase.prototype, "outlineElement", void 0);
__decorate([
    i$4('.mdc-notched-outline__notch')
], TextFieldBase.prototype, "notchElement", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "value", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "type", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "placeholder", void 0);
__decorate([
    e$8({ type: String }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.label !== oldVal) {
            this.layout();
        }
    })
], TextFieldBase.prototype, "label", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "icon", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "iconTrailing", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], TextFieldBase.prototype, "disabled", void 0);
__decorate([
    e$8({ type: Boolean })
], TextFieldBase.prototype, "required", void 0);
__decorate([
    e$8({ type: Number })
], TextFieldBase.prototype, "minLength", void 0);
__decorate([
    e$8({ type: Number })
], TextFieldBase.prototype, "maxLength", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.outlined !== oldVal) {
            this.layout();
        }
    })
], TextFieldBase.prototype, "outlined", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "helper", void 0);
__decorate([
    e$8({ type: Boolean })
], TextFieldBase.prototype, "validateOnInitialRender", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "validationMessage", void 0);
__decorate([
    e$8({ type: Boolean })
], TextFieldBase.prototype, "autoValidate", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "pattern", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "min", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "max", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "step", void 0);
__decorate([
    e$8({ type: Number })
], TextFieldBase.prototype, "size", void 0);
__decorate([
    e$8({ type: Boolean })
], TextFieldBase.prototype, "helperPersistent", void 0);
__decorate([
    e$8({ type: Boolean })
], TextFieldBase.prototype, "charCounter", void 0);
__decorate([
    e$8({ type: Boolean })
], TextFieldBase.prototype, "endAligned", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "prefix", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "suffix", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "name", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "inputMode", void 0);
__decorate([
    e$8({ type: Boolean })
], TextFieldBase.prototype, "readOnly", void 0);
__decorate([
    e$8({ type: String })
], TextFieldBase.prototype, "autocapitalize", void 0);
__decorate([
    t$3()
], TextFieldBase.prototype, "outlineOpen", void 0);
__decorate([
    t$3()
], TextFieldBase.prototype, "outlineWidth", void 0);
__decorate([
    t$3()
], TextFieldBase.prototype, "isUiValid", void 0);
__decorate([
    t$3()
], TextFieldBase.prototype, "focused", void 0);
__decorate([
    e$7({ passive: true })
], TextFieldBase.prototype, "handleInputChange", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$7 = i$3 `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let TextField = class TextField extends TextFieldBase {
};
TextField.styles = [styles$7];
TextField = __decorate([
    e$9('mwc-textfield')
], TextField);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$5,o$5;class s$5 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$5.finalized=!0,s$5._$litElement$=!0,null===(l$5=globalThis.litElementHydrateSupport)||void 0===l$5||l$5.call(globalThis,{LitElement:s$5});const n$5=globalThis.litElementPolyfillSupport;null==n$5||n$5({LitElement:s$5});(null!==(o$5=globalThis.litElementVersions)&&void 0!==o$5?o$5:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires request-selected {RequestSelectedDetail}
 * @fires list-item-rendered
 */
class ListItemBase extends s$5 {
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${o$b(graphicClasses)}">
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
    i$4('slot')
], ListItemBase.prototype, "slotElement", void 0);
__decorate([
    e$6('mwc-ripple')
], ListItemBase.prototype, "ripple", void 0);
__decorate([
    e$8({ type: String })
], ListItemBase.prototype, "value", void 0);
__decorate([
    e$8({ type: String, reflect: true })
], ListItemBase.prototype, "group", void 0);
__decorate([
    e$8({ type: Number, reflect: true })
], ListItemBase.prototype, "tabindex", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true }),
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
    e$8({ type: Boolean, reflect: true })
], ListItemBase.prototype, "twoline", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], ListItemBase.prototype, "activated", void 0);
__decorate([
    e$8({ type: String, reflect: true })
], ListItemBase.prototype, "graphic", void 0);
__decorate([
    e$8({ type: Boolean })
], ListItemBase.prototype, "multipleGraphics", void 0);
__decorate([
    e$8({ type: Boolean })
], ListItemBase.prototype, "hasMeta", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true }),
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
    e$8({ type: Boolean, reflect: true }),
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
    t$3()
], ListItemBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    t$3()
], ListItemBase.prototype, "_managingList", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$6 = i$3 `:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ListItem = class ListItem extends ListItemBase {
};
ListItem.styles = [styles$6];
ListItem = __decorate([
    e$9('mwc-list-item')
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
var _a$1, _b;
var cssClasses$2 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list',
};
(_a$1 = {},
    _a$1["" + cssClasses$2.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
    _a$1["" + cssClasses$2.LIST_ITEM_CLASS] = 'mdc-list-item',
    _a$1["" + cssClasses$2.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
    _a$1["" + cssClasses$2.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
    _a$1["" + cssClasses$2.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
    _a$1["" + cssClasses$2.ROOT] = 'mdc-list',
    _a$1);
var deprecatedClassNameMap = (_b = {},
    _b["" + cssClasses$2.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
    _b["" + cssClasses$2.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
    _b["" + cssClasses$2.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
    _b["" + cssClasses$2.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
    _b["" + cssClasses$2.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
    _b["" + cssClasses$2.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
    _b["" + cssClasses$2.ROOT] = 'mdc-deprecated-list',
    _b);
var strings$2 = {
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
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$2.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$2.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$2.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$2.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$2.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$2.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$2.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$2.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$2.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$2.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$2.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$2.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
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
        return strings$2;
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
                this.adapter.getAttributeForElementIndex(index, strings$2.ARIA_CURRENT);
        }
        const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        const ariaAttribute = isAriaCurrent ? strings$2.ARIA_CURRENT : strings$2.ARIA_SELECTED;
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
          role="${l$a(role)}"
          aria-label="${l$a(ariaLabel)}"
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
    e$8({ type: String })
], ListBase.prototype, "emptyMessage", void 0);
__decorate([
    i$4('.mdc-deprecated-list')
], ListBase.prototype, "mdcRoot", void 0);
__decorate([
    o$i('', true, '*')
], ListBase.prototype, "assignedElements", void 0);
__decorate([
    o$i('', true, '[tabindex="0"]')
], ListBase.prototype, "tabbableElements", void 0);
__decorate([
    e$8({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setUseActivatedClass(value);
        }
    })
], ListBase.prototype, "activatable", void 0);
__decorate([
    e$8({ type: Boolean }),
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
    e$8({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setWrapFocus(value);
        }
    })
], ListBase.prototype, "wrapFocus", void 0);
__decorate([
    e$8({ type: String }),
    observer(function (_newValue, oldValue) {
        if (oldValue !== undefined) {
            this.updateItems();
        }
    })
], ListBase.prototype, "itemRoles", void 0);
__decorate([
    e$8({ type: String })
], ListBase.prototype, "innerRole", void 0);
__decorate([
    e$8({ type: String })
], ListBase.prototype, "innerAriaLabel", void 0);
__decorate([
    e$8({ type: Boolean })
], ListBase.prototype, "rootTabbable", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true }),
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
const styles$5 = i$3 `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let List = class List extends ListBase {
};
List.styles = [styles$5];
List = __decorate([
    e$9('mwc-list')
], List);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$4 = i$3 `:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
/**
 * Unique symbol for marking roots
 */
const selectionController = Symbol('selection controller');
/**
 * Set of checkable elements with added metadata
 */
class SingleSelectionSet {
    constructor() {
        this.selected = null;
        this.ordered = null;
        this.set = new Set();
    }
}
/**
 * Controller that provides behavior similar to a native `<input type="radio">`
 * group.
 *
 * Behaviors:
 *
 * - Selection via key navigation (currently LTR is supported)
 * - Deselection of other grouped, checkable controls upon selection
 * - Grouping of checkable elements by name
 *   - Defaults grouping scope to host shadow root
 *   - Document-wide scoping enabled
 * - Land focus only on checked element. Focuses leading element when none
 *   checked.
 *
 * Intended Usage:
 *
 * ```ts
 * class MyElement extends HTMLElement {
 *   private selectionController: SingleSelectionController | null = null;
 *   name = "";
 *   global = false;
 *
 *   private _checked = false;
 *   set checked(checked: boolean) {
 *     const oldVal = this._checked;
 *     if (checked === oldVal) return;
 *
 *     this._checked = checked;
 *
 *     if (this.selectionController) {
 *       this.selectionController.update(this)
 *     }
 *   }
 *
 *   get checked() {
 *     return this._checked;
 *   }
 *
 *   connectedCallback() {
 *     this.selectionController = SelectionController.getController(this);
 *     this.selectionController.register(this);
 *     this.selectionController.update(this);
 *   }
 *
 *   disconnectedCallback() {
 *     this.selectionController!.unregister(this);
 *     this.selectionController = null;
 *   }
 * }
 * ```
 */
class SingleSelectionController {
    constructor(element) {
        this.sets = {};
        this.focusedSet = null;
        this.mouseIsDown = false;
        this.updating = false;
        element.addEventListener('keydown', (e) => {
            this.keyDownHandler(e);
        });
        element.addEventListener('mousedown', () => {
            this.mousedownHandler();
        });
        element.addEventListener('mouseup', () => {
            this.mouseupHandler();
        });
    }
    /**
     * Get a controller for the given element. If no controller exists, one will
     * be created. Defaults to getting the controller scoped to the element's root
     * node shadow root unless `element.global` is true. Then, it will get a
     * `window.document`-scoped controller.
     *
     * @param element Element from which to get / create a SelectionController. If
     *     `element.global` is true, it gets a selection controller scoped to
     *     `window.document`.
     */
    static getController(element) {
        const useGlobal = !('global' in element) || ('global' in element && element.global);
        const root = useGlobal ? document :
            element.getRootNode();
        let controller = root[selectionController];
        if (controller === undefined) {
            controller = new SingleSelectionController(root);
            root[selectionController] = controller;
        }
        return controller;
    }
    keyDownHandler(e) {
        const element = e.target;
        if (!('checked' in element)) {
            return;
        }
        if (!this.has(element)) {
            return;
        }
        if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
            this.selectNext(element);
        }
        else if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
            this.selectPrevious(element);
        }
    }
    mousedownHandler() {
        this.mouseIsDown = true;
    }
    mouseupHandler() {
        this.mouseIsDown = false;
    }
    /**
     * Whether or not the controller controls  the given element.
     *
     * @param element element to check
     */
    has(element) {
        const set = this.getSet(element.name);
        return set.set.has(element);
    }
    /**
     * Selects and returns the controlled element previous to the given element in
     * document position order. See
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element element relative from which preceding element is fetched
     */
    selectPrevious(element) {
        const order = this.getOrdered(element);
        const i = order.indexOf(element);
        const previous = order[i - 1] || order[order.length - 1];
        this.select(previous);
        return previous;
    }
    /**
     * Selects and returns the controlled element next to the given element in
     * document position order. See
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element element relative from which following element is fetched
     */
    selectNext(element) {
        const order = this.getOrdered(element);
        const i = order.indexOf(element);
        const next = order[i + 1] || order[0];
        this.select(next);
        return next;
    }
    select(element) {
        element.click();
    }
    /**
     * Focuses the selected element in the given element's selection set. User's
     * mouse selection will override this focus.
     *
     * @param element Element from which selection set is derived and subsequently
     *     focused.
     * @deprecated update() method now handles focus management by setting
     *     appropriate tabindex to form element.
     */
    focus(element) {
        // Only manage focus state when using keyboard
        if (this.mouseIsDown) {
            return;
        }
        const set = this.getSet(element.name);
        const currentFocusedSet = this.focusedSet;
        this.focusedSet = set;
        if (currentFocusedSet != set && set.selected && set.selected != element) {
            set.selected.focus();
        }
    }
    /**
     * @return Returns true if atleast one radio is selected in the radio group.
     */
    isAnySelected(element) {
        const set = this.getSet(element.name);
        for (const e of set.set) {
            if (e.checked) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns the elements in the given element's selection set in document
     * position order.
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element Element from which selection set is derived and subsequently
     *     ordered.
     */
    getOrdered(element) {
        const set = this.getSet(element.name);
        if (!set.ordered) {
            set.ordered = Array.from(set.set);
            set.ordered.sort((a, b) => a.compareDocumentPosition(b) == Node.DOCUMENT_POSITION_PRECEDING ?
                1 :
                0);
        }
        return set.ordered;
    }
    /**
     * Gets the selection set of the given name and creates one if it does not yet
     * exist.
     *
     * @param name Name of set
     */
    getSet(name) {
        if (!this.sets[name]) {
            this.sets[name] = new SingleSelectionSet();
        }
        return this.sets[name];
    }
    /**
     * Register the element in the selection controller.
     *
     * @param element Element to register. Registers in set of `element.name`.
     */
    register(element) {
        // TODO(b/168546148): Remove accessing 'name' via getAttribute() when new
        // base class is created without single selection controller. Component
        // maybe booted up after it is connected to DOM in which case properties
        // (including `name`) are not updated yet.
        const name = element.name || element.getAttribute('name') || '';
        const set = this.getSet(name);
        set.set.add(element);
        set.ordered = null;
    }
    /**
     * Unregister the element from selection controller.
     *
     * @param element Element to register. Registers in set of `element.name`.
     */
    unregister(element) {
        const set = this.getSet(element.name);
        set.set.delete(element);
        set.ordered = null;
        if (set.selected == element) {
            set.selected = null;
        }
    }
    /**
     * Unselects other elements in element's set if element is checked. Noop
     * otherwise.
     *
     * @param element Element from which to calculate selection controller update.
     */
    update(element) {
        if (this.updating) {
            return;
        }
        this.updating = true;
        const set = this.getSet(element.name);
        if (element.checked) {
            for (const e of set.set) {
                if (e == element) {
                    continue;
                }
                e.checked = false;
            }
            set.selected = element;
        }
        // When tabbing through land focus on the checked radio in the group.
        if (this.isAnySelected(element)) {
            for (const e of set.set) {
                if (e.formElementTabIndex === undefined) {
                    break;
                }
                e.formElementTabIndex = e.checked ? 0 : -1;
            }
        }
        this.updating = false;
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
var strings$1 = {
    NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
};
var cssClasses$1 = {
    DISABLED: 'mdc-radio--disabled',
    ROOT: 'mdc-radio',
};

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
var MDCRadioFoundation = /** @class */ (function (_super) {
    __extends(MDCRadioFoundation, _super);
    function MDCRadioFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCRadioFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCRadioFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRadioFoundation.prototype.setDisabled = function (disabled) {
        var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
        this.adapter.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter.addClass(DISABLED);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
    };
    return MDCRadioFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRadioFoundation$1 = MDCRadioFoundation;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$4,o$4;class s$4 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$4.finalized=!0,s$4._$litElement$=!0,null===(l$4=globalThis.litElementHydrateSupport)||void 0===l$4||l$4.call(globalThis,{LitElement:s$4});const n$4=globalThis.litElementPolyfillSupport;null==n$4||n$4({LitElement:s$4});(null!==(o$4=globalThis.litElementVersions)&&void 0!==o$4?o$4:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires checked
 * @soyCompatible
 */
class RadioBase extends FormElement {
    constructor() {
        super(...arguments);
        this._checked = false;
        this.useStateLayerCustomProperties = false;
        this.global = false;
        this.disabled = false;
        this.value = 'on';
        this.name = '';
        /**
         * Touch target extends beyond visual boundary of a component by default.
         * Set to `true` to remove touch target added to the component.
         * @see https://material.io/design/usability/accessibility.html
         */
        this.reducedTouchTarget = false;
        this.mdcFoundationClass = MDCRadioFoundation$1;
        /**
         * input's tabindex is updated based on checked status.
         * Tab navigation will be removed from unchecked radios.
         */
        this.formElementTabIndex = 0;
        this.focused = false;
        this.shouldRenderRipple = false;
        this.rippleElement = null;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            this.ripple.then((v) => {
                this.rippleElement = v;
            });
            return this.ripple;
        });
    }
    get checked() {
        return this._checked;
    }
    /**
     * We define our own getter/setter for `checked` because we need to track
     * changes to it synchronously.
     *
     * The order in which the `checked` property is set across radio buttons
     * within the same group is very important. However, we can't rely on
     * UpdatingElement's `updated` callback to observe these changes (which is
     * also what the `@observer` decorator uses), because it batches changes to
     * all properties.
     *
     * Consider:
     *
     *   radio1.disabled = true;
     *   radio2.checked = true;
     *   radio1.checked = true;
     *
     * In this case we'd first see all changes for radio1, and then for radio2,
     * and we couldn't tell that radio1 was the most recently checked.
     */
    set checked(isChecked) {
        var _a, _b;
        const oldValue = this._checked;
        if (isChecked === oldValue) {
            return;
        }
        this._checked = isChecked;
        if (this.formElement) {
            this.formElement.checked = isChecked;
        }
        (_a = this._selectionController) === null || _a === void 0 ? void 0 : _a.update(this);
        if (isChecked === false) {
            // Remove focus ring when unchecked on other radio programmatically.
            // Blur on input since this determines the focus style.
            (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.blur();
        }
        this.requestUpdate('checked', oldValue);
        // useful when unchecks self and wrapping element needs to synchronize
        // TODO(b/168543810): Remove triggering event on programmatic API call.
        this.dispatchEvent(new Event('checked', { bubbles: true, composed: true }));
    }
    _handleUpdatedValue(newValue) {
        // the observer function can't access protected fields (according to
        // closure compiler) because it's not a method on the class, so we need this
        // wrapper.
        this.formElement.value = newValue;
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? x `<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` :
            '';
    }
    get isRippleActive() {
        var _a;
        return ((_a = this.rippleElement) === null || _a === void 0 ? void 0 : _a.isActive) || false;
    }
    connectedCallback() {
        super.connectedCallback();
        // Note that we must defer creating the selection controller until the
        // element has connected, because selection controllers are keyed by the
        // radio's shadow root. For example, if we're stamping in a lit map
        // or repeat, then we'll be constructed before we're added to a root node.
        //
        // Also note if we aren't using native shadow DOM, we still need a
        // SelectionController, because we should update checked status of other
        // radios in the group when selection changes. It also simplifies
        // implementation and testing to use one in all cases.
        //
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this._selectionController = SingleSelectionController.getController(this);
        this._selectionController.register(this);
        // Radios maybe checked before connected, update selection as soon it is
        // connected to DOM. Last checked radio button in the DOM will be selected.
        //
        // NOTE: If we update selection only after firstUpdate() we might mistakenly
        // update checked status before other radios are rendered.
        this._selectionController.update(this);
    }
    disconnectedCallback() {
        // The controller is initialized in connectedCallback, so if we are in
        // disconnectedCallback then it must be initialized.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._selectionController.unregister(this);
        this._selectionController = undefined;
    }
    focus() {
        this.formElement.focus();
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setNativeControlDisabled: (disabled) => {
                this.formElement.disabled = disabled;
            } });
    }
    handleFocus() {
        this.focused = true;
        this.handleRippleFocus();
    }
    handleClick() {
        // Firefox has weird behavior with radios if they are not focused
        this.formElement.focus();
    }
    handleBlur() {
        this.focused = false;
        this.formElement.blur();
        this.rippleHandlers.endFocus();
    }
    setFormData(formData) {
        if (this.name && this.checked) {
            formData.append(this.name, this.value);
        }
    }
    /**
     * @soyTemplate
     * @soyAttributes radioAttributes: input
     * @soyClasses radioClasses: .mdc-radio
     */
    render() {
        /** @classMap */
        const classes = {
            'mdc-radio--touch': !this.reducedTouchTarget,
            'mdc-ripple-upgraded--background-focused': this.focused,
            'mdc-radio--disabled': this.disabled,
        };
        return x `
      <div class="mdc-radio ${o$b(classes)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${l$a(this.ariaLabel)}"
          aria-labelledby="${l$a(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
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
    changeHandler() {
        this.checked = this.formElement.checked;
    }
}
__decorate([
    i$4('.mdc-radio')
], RadioBase.prototype, "mdcRoot", void 0);
__decorate([
    i$4('input')
], RadioBase.prototype, "formElement", void 0);
__decorate([
    t$3()
], RadioBase.prototype, "useStateLayerCustomProperties", void 0);
__decorate([
    e$8({ type: Boolean })
], RadioBase.prototype, "global", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], RadioBase.prototype, "checked", null);
__decorate([
    e$8({ type: Boolean }),
    observer(function (disabled) {
        this.mdcFoundation.setDisabled(disabled);
    })
], RadioBase.prototype, "disabled", void 0);
__decorate([
    e$8({ type: String }),
    observer(function (value) {
        this._handleUpdatedValue(value);
    })
], RadioBase.prototype, "value", void 0);
__decorate([
    e$8({ type: String })
], RadioBase.prototype, "name", void 0);
__decorate([
    e$8({ type: Boolean })
], RadioBase.prototype, "reducedTouchTarget", void 0);
__decorate([
    e$8({ type: Number })
], RadioBase.prototype, "formElementTabIndex", void 0);
__decorate([
    t$3()
], RadioBase.prototype, "focused", void 0);
__decorate([
    t$3()
], RadioBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$6('mwc-ripple')
], RadioBase.prototype, "ripple", void 0);
__decorate([
    ariaProperty,
    e$8({ attribute: 'aria-label' })
], RadioBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$8({ attribute: 'aria-labelledby' })
], RadioBase.prototype, "ariaLabelledBy", void 0);
__decorate([
    e$7({ passive: true })
], RadioBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$3 = i$3 `.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Radio = class Radio extends RadioBase {
};
Radio.styles = [styles$3];
Radio = __decorate([
    e$9('mwc-radio')
], Radio);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class RadioListItemBase extends ListItemBase {
    constructor() {
        super(...arguments);
        this.left = false;
        this.graphic = 'control';
        this._changeFromClick = false;
    }
    render() {
        const radioClasses = {
            'mdc-deprecated-list-item__graphic': this.left,
            'mdc-deprecated-list-item__meta': !this.left,
        };
        const text = this.renderText();
        const graphic = this.graphic && this.graphic !== 'control' && !this.left ?
            this.renderGraphic() :
            x ``;
        const meta = this.hasMeta && this.left ? this.renderMeta() : x ``;
        const ripple = this.renderRipple();
        return x `
      ${ripple}
      ${graphic}
      ${this.left ? '' : text}
      <mwc-radio
          global
          class=${o$b(radioClasses)}
          tabindex=${this.tabindex}
          name=${l$a(this.group === null ? undefined : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? text : ''}
      ${meta}`;
    }
    onClick() {
        this._changeFromClick = true;
        super.onClick();
    }
    async onChange(evt) {
        const checkbox = evt.target;
        const changeFromProp = this.selected === checkbox.checked;
        if (!changeFromProp) {
            this._skipPropRequest = true;
            this.selected = checkbox.checked;
            await this.updateComplete;
            this._skipPropRequest = false;
            if (!this._changeFromClick) {
                this.fireRequestSelected(this.selected, 'interaction');
            }
        }
        this._changeFromClick = false;
    }
}
__decorate([
    i$4('slot')
], RadioListItemBase.prototype, "slotElement", void 0);
__decorate([
    i$4('mwc-radio')
], RadioListItemBase.prototype, "radioElement", void 0);
__decorate([
    e$8({ type: Boolean })
], RadioListItemBase.prototype, "left", void 0);
__decorate([
    e$8({ type: String, reflect: true })
], RadioListItemBase.prototype, "graphic", void 0);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let RadioListItem = class RadioListItem extends RadioListItemBase {
};
RadioListItem.styles = [styles$6, styles$4];
RadioListItem = __decorate([
    e$9('mwc-radio-list-item')
], RadioListItem);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$3,o$3;class s$3 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$3.finalized=!0,s$3._$litElement$=!0,null===(l$3=globalThis.litElementHydrateSupport)||void 0===l$3||l$3.call(globalThis,{LitElement:s$3});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$3});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$2 = i$3 `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$2,o$2;class s$2 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$2.finalized=!0,s$2._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$2});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s$2});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class IconButtonToggleBase extends s$2 {
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
          class="mdc-icon-button mdc-icon-button--display-flex ${o$b(classes)}"
          aria-pressed="${l$a(ariaPressedValue)}"
          aria-label="${l$a(ariaLabelValue)}"
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
    i$4('.mdc-icon-button')
], IconButtonToggleBase.prototype, "mdcRoot", void 0);
__decorate([
    ariaProperty,
    e$8({ type: String, attribute: 'aria-label' })
], IconButtonToggleBase.prototype, "ariaLabel", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], IconButtonToggleBase.prototype, "disabled", void 0);
__decorate([
    e$8({ type: String })
], IconButtonToggleBase.prototype, "onIcon", void 0);
__decorate([
    e$8({ type: String })
], IconButtonToggleBase.prototype, "offIcon", void 0);
__decorate([
    e$8({ type: String })
], IconButtonToggleBase.prototype, "ariaLabelOn", void 0);
__decorate([
    e$8({ type: String })
], IconButtonToggleBase.prototype, "ariaLabelOff", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], IconButtonToggleBase.prototype, "on", void 0);
__decorate([
    e$6('mwc-ripple')
], IconButtonToggleBase.prototype, "ripple", void 0);
__decorate([
    t$3()
], IconButtonToggleBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$7({ passive: true })
], IconButtonToggleBase.prototype, "handleRippleMouseDown", null);
__decorate([
    e$7({ passive: true })
], IconButtonToggleBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let IconButtonToggle = class IconButtonToggle extends IconButtonToggleBase {
};
IconButtonToggle.styles = [styles$2];
IconButtonToggle = __decorate([
    e$9('mwc-icon-button-toggle')
], IconButtonToggle);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class IconButtonBase extends s$3 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.icon = '';
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
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
    render() {
        return x `<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l$a(this.ariaHasPopup)}"
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
    ${this.icon ? x `<i class="material-icons">${this.icon}</i>` : ''}
    <span
      ><slot></slot
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
    e$8({ type: Boolean, reflect: true })
], IconButtonBase.prototype, "disabled", void 0);
__decorate([
    e$8({ type: String })
], IconButtonBase.prototype, "icon", void 0);
__decorate([
    ariaProperty,
    e$8({ type: String, attribute: 'aria-label' })
], IconButtonBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$8({ type: String, attribute: 'aria-haspopup' })
], IconButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    i$4('button')
], IconButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$6('mwc-ripple')
], IconButtonBase.prototype, "ripple", void 0);
__decorate([
    t$3()
], IconButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$7({ passive: true })
], IconButtonBase.prototype, "handleRippleMouseDown", null);
__decorate([
    e$7({ passive: true })
], IconButtonBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let IconButton = class IconButton extends IconButtonBase {
};
IconButton.styles = [styles$2];
IconButton = __decorate([
    e$9('mwc-icon-button')
], IconButton);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (isTemplatePartActive(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = isCEPolyfill ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!isTemplatePartActive(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
const commentMarker = ` ${marker} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = lastAttributeNameRegex.exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : nodeMarker);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                    marker;
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if (policy !== undefined) {
            // this is secure because `this.strings` is a TemplateStringsArray.
            // TODO: validate this when
            // https://github.com/tc39/proposal-array-is-template-object is
            // implemented.
            value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') {
                return String(v);
            }
            if (typeof v === 'string' || !isIterable(v)) {
                return v;
            }
        }
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!isDirective(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (isDirective(this.value)) {
            const directive = this.value;
            this.value = noChange;
            directive(this);
        }
        if (this.value === noChange) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());
        part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === noChange) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof TemplateResult) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === nothing) {
            this.value = nothing;
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new TemplateInstance(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = noChange;
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = noChange;
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render$1 = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        removeNodes(container, container.firstChild);
        parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new PropertyCommitter(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        const committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new NodePart(options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = templateCaches.get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(marker);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new Template(result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                removeNodesFromTemplate(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) {
        insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
    }
    else {
        content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        removeNodesFromTemplate(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    if (!options || typeof options !== 'object' || !options.scopeName) {
        throw new Error('The `scopeName` option is required.');
    }
    const scopeName = options.scopeName;
    const hasRendered = parts.has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render$1(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = parts.get(renderContainer);
        parts.delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof TemplateInstance ?
            part.value.template :
            undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        removeNodes(container, container.firstChild);
        container.appendChild(renderContainer);
        parts.set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        const descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== undefined) {
            Object.defineProperty(this.prototype, name, descriptor);
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this
                    .requestUpdateInternal(name, oldValue, options);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */
    static getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) ||
            defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
            superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._updateState = 0;
        this._updatePromise =
            new Promise((res) => this._enableUpdatingResolver = res);
        this._changedProperties = new Map();
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        // Ensure first connection completes an update. Updates cannot complete
        // before connection.
        this.enableUpdating();
    }
    enableUpdating() {
        if (this._enableUpdatingResolver !== undefined) {
            this._enableUpdatingResolver();
            this._enableUpdatingResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        // tslint:disable-next-line:no-unnecessary-type-assertion
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor.getPropertyOptions(propName);
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    requestUpdateInternal(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            options = options || ctor.getPropertyOptions(name);
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._updatePromise = this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this.requestUpdateInternal(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this._updatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        const result = this.performUpdate();
        // If `performUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this._hasRequestedUpdate;
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this._hasRequestedUpdate) {
            return;
        }
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
            else {
                this._markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
            throw e;
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @deprecated Override `getUpdateComplete()` instead for forward
     *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
     */
    _getUpdateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
        this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement[_a] = true;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign(Object.assign({}, element), { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like the Closure Compiler.
 * @category Decorator
 * @deprecated `internalProperty` has been renamed to `state` in lit-element
 *     3.0. Please update to `state` now to be compatible with 3.0.
 */
function internalProperty(options) {
    return property({ attribute: false, hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged });
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like the Closure Compiler.
 * @category Decorator
 */
const state = (options) => internalProperty(options);
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        if (cache) {
            const prop = name !== undefined ? name : protoOrDescriptor.key;
            const key = typeof prop === 'symbol' ? Symbol() : `__${prop}`;
            descriptor.get = function () {
                if (this[key] === undefined) {
                    (this[key] =
                        this.renderRoot.querySelector(selector));
                }
                return this[key];
            };
        }
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
    (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
    ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `supportsAdoptingStyleSheets` is true then we assume
            // CSSStyleSheet is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.5.1');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */
const renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */
class LitElement extends UpdatingElement {
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    static getStyles() {
        return this.styles;
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Only gather styles once per class
        if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
            return;
        }
        // Take care not to call `this.getStyles()` multiple times since this
        // generates new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.getStyles();
        if (Array.isArray(userStyles)) {
            // De-duplicate styles preserving the _last_ instance in the set.
            // This is a performance optimization to avoid duplicated styles that can
            // occur especially when composing via subclassing.
            // The last item is kept to try to preserve the cascade order with the
            // assumption that it's most important that last added styles override
            // previous styles.
            const addStyles = (styles, set) => styles.reduceRight((set, s) => 
            // Note: On IE set.add() does not return the set
            Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
            // Array.from does not work on Set in IE, otherwise return
            // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
            const set = addStyles(userStyles, new Set());
            const styles = [];
            set.forEach((v) => styles.unshift(v));
            this._styles = styles;
        }
        else {
            this._styles = userStyles === undefined ? [] : [userStyles];
        }
        // Ensure that there are no invalid CSSStyleSheet instances here. They are
        // invalid in two conditions.
        // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
        //     this is impossible to check except via .replaceSync or use
        // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
        //     false)
        this._styles = this._styles.map((s) => {
            if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                // Flatten the cssText from the passed constructible stylesheet (or
                // undetectable non-constructible stylesheet). The user might have
                // expected to update their stylesheets over time, but the alternative
                // is a crash.
                const cssText = Array.prototype.slice.call(s.cssRules)
                    .reduce((css, rule) => css + rule.cssText, '');
                return unsafeCSS(cssText);
            }
            return s;
        });
    }
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    initialize() {
        super.initialize();
        this.constructor._getUniqueStyles();
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (supportsAdoptingStyleSheets) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const templateResult = this.render();
        super.update(changedProperties);
        // If render is not implemented by the component, don't call lit-html render
        if (templateResult !== renderNotImplemented) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */
    render() {
        return renderNotImplemented;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */
LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */
LitElement.render = render;
/** @nocollapse */
LitElement.shadowRootOptions = { mode: 'open' };

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const isStrTagged = (val) => typeof val !== 'string' && 'strTag' in val;
/**
 * Render the result of a `str` tagged template to a string. Note we don't need
 * to do this for Lit templates, since Lit itself handles rendering.
 */
const joinStringsAndValues = (strings, values, valueOrder) => {
    let concat = strings[0];
    for (let i = 1; i < strings.length; i++) {
        concat += values[valueOrder ? valueOrder[i - 1] : i - 1];
        concat += strings[i];
    }
    return concat;
};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Default identity msg implementation. Simply returns the input template with
 * no awareness of translations. If the template is str-tagged, returns it in
 * string form.
 */
const defaultMsg = ((template) => isStrTagged(template)
    ? joinStringsAndValues(template.strings, template.values)
    : template);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Deferred {
    constructor() {
        this.settled = false;
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    resolve(value) {
        this.settled = true;
        this._resolve(value);
    }
    reject(error) {
        this.settled = true;
        this._reject(error);
    }
}

/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */
for (let i = 0; i < 256; i++) {
    ((i >> 4) & 15).toString(16) + (i & 15).toString(16);
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let loading = new Deferred();
// The loading promise must be initially resolved, because that's what we should
// return if the user immediately calls setLocale(sourceLocale).
loading.resolve();

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Make a string or lit-html template localizable.
 *
 * @param template A string, a lit-html template, or a function that returns
 * either a string or lit-html template.
 * @param options Optional configuration object with the following properties:
 *   - id: Optional project-wide unique identifier for this template. If
 *     omitted, an id will be automatically generated from the template strings.
 *   - desc: Optional description
 */
let msg = defaultMsg;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$1;class s$1 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$1.finalized=!0,s$1._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s$1});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s$1});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class CheckboxBase extends FormElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.name = '';
        this.value = 'on';
        /**
         * Touch target extends beyond visual boundary of a component by default.
         * Set to `true` to remove touch target added to the component.
         * @see https://material.io/design/usability/accessibility.html
         */
        this.reducedTouchTarget = false;
        this.animationClass = '';
        this.shouldRenderRipple = false;
        this.focused = false;
        // MDC Foundation is unused
        this.mdcFoundationClass = undefined;
        this.mdcFoundation = undefined;
        this.rippleElement = null;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            this.ripple.then((v) => this.rippleElement = v);
            return this.ripple;
        });
    }
    createAdapter() {
        return {};
    }
    update(changedProperties) {
        const oldIndeterminate = changedProperties.get('indeterminate');
        const oldChecked = changedProperties.get('checked');
        const oldDisabled = changedProperties.get('disabled');
        if (oldIndeterminate !== undefined || oldChecked !== undefined ||
            oldDisabled !== undefined) {
            const oldState = this.calculateAnimationStateName(!!oldChecked, !!oldIndeterminate, !!oldDisabled);
            const newState = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
            this.animationClass = `${oldState}-${newState}`;
        }
        super.update(changedProperties);
    }
    calculateAnimationStateName(checked, indeterminate, disabled) {
        if (disabled) {
            return 'disabled';
        }
        else if (indeterminate) {
            return 'indeterminate';
        }
        else if (checked) {
            return 'checked';
        }
        else {
            return 'unchecked';
        }
    }
    // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? this.renderRippleTemplate() : '';
    }
    /** @soyTemplate */
    renderRippleTemplate() {
        return x `<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`;
    }
    /**
     * @soyTemplate
     * @soyAttributes checkboxAttributes: input
     * @soyClasses checkboxClasses: .mdc-checkbox
     */
    render() {
        const selected = this.indeterminate || this.checked;
        /* eslint-disable eqeqeq */
        // tslint:disable:triple-equals
        /** @classMap */
        const classes = {
            'mdc-checkbox--disabled': this.disabled,
            'mdc-checkbox--selected': selected,
            'mdc-checkbox--touch': !this.reducedTouchTarget,
            'mdc-ripple-upgraded--background-focused': this.focused,
            // transition animiation classes
            'mdc-checkbox--anim-checked-indeterminate': this.animationClass == 'checked-indeterminate',
            'mdc-checkbox--anim-checked-unchecked': this.animationClass == 'checked-unchecked',
            'mdc-checkbox--anim-indeterminate-checked': this.animationClass == 'indeterminate-checked',
            'mdc-checkbox--anim-indeterminate-unchecked': this.animationClass == 'indeterminate-unchecked',
            'mdc-checkbox--anim-unchecked-checked': this.animationClass == 'unchecked-checked',
            'mdc-checkbox--anim-unchecked-indeterminate': this.animationClass == 'unchecked-indeterminate',
        };
        // tslint:enable:triple-equals
        /* eslint-enable eqeqeq */
        const ariaChecked = this.indeterminate ? 'mixed' : undefined;
        return x `
      <div class="mdc-checkbox mdc-checkbox--upgraded ${o$b(classes)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${l$a(this.name)}"
              aria-checked="${l$a(ariaChecked)}"
              aria-label="${l$a(this.ariaLabel)}"
              aria-labelledby="${l$a(this.ariaLabelledBy)}"
              aria-describedby="${l$a(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? 'true' : 'false'}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
    }
    setFormData(formData) {
        if (this.name && this.checked) {
            formData.append(this.name, this.value);
        }
    }
    handleFocus() {
        this.focused = true;
        this.handleRippleFocus();
    }
    handleBlur() {
        this.focused = false;
        this.handleRippleBlur();
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
    handleChange() {
        this.checked = this.formElement.checked;
        this.indeterminate = this.formElement.indeterminate;
    }
    resetAnimationClass() {
        this.animationClass = '';
    }
    get isRippleActive() {
        var _a;
        return ((_a = this.rippleElement) === null || _a === void 0 ? void 0 : _a.isActive) || false;
    }
}
__decorate([
    i$4('.mdc-checkbox')
], CheckboxBase.prototype, "mdcRoot", void 0);
__decorate([
    i$4('input')
], CheckboxBase.prototype, "formElement", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], CheckboxBase.prototype, "checked", void 0);
__decorate([
    e$8({ type: Boolean })
], CheckboxBase.prototype, "indeterminate", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true })
], CheckboxBase.prototype, "disabled", void 0);
__decorate([
    e$8({ type: String, reflect: true })
], CheckboxBase.prototype, "name", void 0);
__decorate([
    e$8({ type: String })
], CheckboxBase.prototype, "value", void 0);
__decorate([
    ariaProperty,
    e$8({ type: String, attribute: 'aria-label' })
], CheckboxBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$8({ type: String, attribute: 'aria-labelledby' })
], CheckboxBase.prototype, "ariaLabelledBy", void 0);
__decorate([
    ariaProperty,
    e$8({ type: String, attribute: 'aria-describedby' })
], CheckboxBase.prototype, "ariaDescribedBy", void 0);
__decorate([
    e$8({ type: Boolean })
], CheckboxBase.prototype, "reducedTouchTarget", void 0);
__decorate([
    t$3()
], CheckboxBase.prototype, "animationClass", void 0);
__decorate([
    t$3()
], CheckboxBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    t$3()
], CheckboxBase.prototype, "focused", void 0);
__decorate([
    e$6('mwc-ripple')
], CheckboxBase.prototype, "ripple", void 0);
__decorate([
    e$7({ passive: true })
], CheckboxBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = i$3 `.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Checkbox = class Checkbox extends CheckboxBase {
};
Checkbox.styles = [styles$1];
Checkbox = __decorate([
    e$9('mwc-checkbox')
], Checkbox);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class CheckListItemBase extends ListItemBase {
    constructor() {
        super(...arguments);
        this.left = false;
        this.graphic = 'control';
    }
    render() {
        const checkboxClasses = {
            'mdc-deprecated-list-item__graphic': this.left,
            'mdc-deprecated-list-item__meta': !this.left,
        };
        const text = this.renderText();
        const graphic = this.graphic && this.graphic !== 'control' && !this.left ?
            this.renderGraphic() :
            x ``;
        const meta = this.hasMeta && this.left ? this.renderMeta() : x ``;
        const ripple = this.renderRipple();
        return x `
      ${ripple}
      ${graphic}
      ${this.left ? '' : text}
      <span class=${o$b(checkboxClasses)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? text : ''}
      ${meta}`;
    }
    async onChange(evt) {
        const checkbox = evt.target;
        const changeFromProp = this.selected === checkbox.checked;
        if (!changeFromProp) {
            this._skipPropRequest = true;
            this.selected = checkbox.checked;
            await this.updateComplete;
            this._skipPropRequest = false;
        }
    }
}
__decorate([
    i$4('slot')
], CheckListItemBase.prototype, "slotElement", void 0);
__decorate([
    i$4('mwc-checkbox')
], CheckListItemBase.prototype, "checkboxElement", void 0);
__decorate([
    e$8({ type: Boolean })
], CheckListItemBase.prototype, "left", void 0);
__decorate([
    e$8({ type: String, reflect: true })
], CheckListItemBase.prototype, "graphic", void 0);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let CheckListItem = class CheckListItem extends CheckListItemBase {
};
CheckListItem.styles = [styles$6, styles$4];
CheckListItem = __decorate([
    e$9('mwc-check-list-item')
], CheckListItem);

function slotItem$1(item) {
    if (!item.closest('oscd-filtered-list') || !item.parentElement)
        return item;
    if (item.parentElement instanceof OscdFilteredList)
        return item;
    return slotItem$1(item.parentElement);
}
function hideFiltered$1(item, searchText) {
    const itemInnerText = item.innerText + '\n';
    const childInnerText = Array.from(item.children)
        .map(child => child.innerText)
        .join('\n');
    const value = item.value;
    const filterTarget = (itemInnerText +
        childInnerText +
        value).toUpperCase();
    const terms = searchText
        .toUpperCase()
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .trim()
        .split(/\s+/g);
    (terms.length === 1 && terms[0] === '') ||
        terms.every(term => {
            // regexp escape
            const reTerm = new RegExp(`*${term}*`.replace(/\*/g, '.*').replace(/\?/g, '.{1}'), 'i');
            return reTerm.test(filterTarget);
        })
        ? slotItem$1(item).classList.remove('hidden')
        : slotItem$1(item).classList.add('hidden');
}
function redispatchEvent(element, event) {
    element.requestUpdate();
    // For bubbling events in SSR light DOM (or composed), stop their propagation  // and dispatch the copy.
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
        event.stopPropagation();
        copy.stopPropagation();
    }
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
        event.preventDefault();
    }
    return dispatched;
}
/**
 * @fires {ActionEvent} action - Fired when a selection has been made via click or keyboard action.
 * @fires {SelectedEvent} selected - Fired when a selection has been made. `index` is the selected index (will be of type `Set<number>` if multi and `number` if single), and `diff` (of type `IndexDiff`\*\*) represents the diff of added and removed indices from previous selection.
 * @summary A list with a textfield that filters the list items for given or separated terms.
 * @tag oscd-filtered-list
 */
class OscdFilteredList extends LitElement {
    /** Currently-selected list item(s). When `multi` is `true`, `selected` is of type `ListItemBase[]` and when `false`, `selected` is of type `ListItemBase`. `selected` is `null` when no item is selected. */
    get selected() {
        return this.list.selected;
    }
    /** Index / indices of selected item(s). When `multi` is `true`, `index` is of type `number` and when `false`, `index` is of type `Set<number>`. Unset indicies are `-1` and empty `Set<number>` for single and multi selection respectively. */
    get index() {
        return this.list.index;
    }
    get existCheckListItem() {
        return this.items.some(item => item instanceof CheckListItem);
    }
    get isAllSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .every(checkItem => checkItem.selected);
    }
    get isSomeSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .some(checkItem => checkItem.selected);
    }
    onCheckAll() {
        const select = !this.isAllSelected;
        this.items
            .filter(item => !item.disabled && !item.classList.contains('hidden'))
            .forEach(item => (item.selected = select));
    }
    onFilterInput() {
        Array.from(this.querySelectorAll('mwc-list-item, mwc-check-list-item, mwc-radio-list-item')).forEach(item => hideFiltered$1(item, this.searchField.value));
    }
    firstUpdated() {
        var _a, _b;
        this.items = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot')) === null || _b === void 0 ? void 0 : _b.assignedElements({ flatten: true });
    }
    constructor() {
        super();
        /** Whether the check all option (checkbox next to search text field) is activated */
        this.disableCheckAll = false;
        /** When `true`, pressing `up` on the keyboard when focused on the first item will focus the last item and `down` when focused on the last item will focus the first item. */
        this.wrapFocus = false;
        /** When `true`, enables selection of multiple items. This will result in `index` being of type `Set<number>` and selected returning `ListItemBase[]`. */
        this.multi = false;
        /** Sets activated attribute on selected items which provides a focus-persistent highlight. */
        this.activatable = false;
        /** All list items that are available for selection. Eligible items have the `[mwc-list-item]` attribute which `ListItemBase` applies automatically. */
        this.items = [];
        this.addEventListener('selected', event => {
            redispatchEvent(this, event);
        });
        this.addEventListener('action', event => {
            redispatchEvent(this, event);
        });
    }
    renderCheckAll() {
        return this.existCheckListItem && !this.disableCheckAll
            ? html `<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
                this.onCheckAll();
            }}
          ></mwc-checkbox
        ></mwc-formfield>`
            : html ``;
    }
    render() {
        var _a, _b;
        return html `<div id="tfcontainer">
        <abbr title="${(_a = this.searchFieldLabel) !== null && _a !== void 0 ? _a : msg('Filter')}"
          ><mwc-textfield
            label="${(_b = this.searchFieldLabel) !== null && _b !== void 0 ? _b : ''}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      <mwc-list
        .multi=${this.multi}
        .activatable=${this.activatable}
        .wrapFocus=${this.wrapFocus}
      >
        <slot />
      </mwc-list>`;
    }
}
OscdFilteredList.styles = css `
    ${unsafeCSS(List.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
__decorate([
    property({ type: String })
], OscdFilteredList.prototype, "searchFieldLabel", void 0);
__decorate([
    property({ type: Boolean })
], OscdFilteredList.prototype, "disableCheckAll", void 0);
__decorate([
    property({ type: String })
], OscdFilteredList.prototype, "filter", void 0);
__decorate([
    property({ type: Boolean })
], OscdFilteredList.prototype, "wrapFocus", void 0);
__decorate([
    property({ type: Boolean })
], OscdFilteredList.prototype, "multi", void 0);
__decorate([
    property({ type: Boolean })
], OscdFilteredList.prototype, "activatable", void 0);
__decorate([
    query('mwc-list')
], OscdFilteredList.prototype, "list", void 0);
__decorate([
    property()
], OscdFilteredList.prototype, "items", void 0);
__decorate([
    state()
], OscdFilteredList.prototype, "existCheckListItem", null);
__decorate([
    state()
], OscdFilteredList.prototype, "isAllSelected", null);
__decorate([
    state()
], OscdFilteredList.prototype, "isSomeSelected", null);
__decorate([
    query('mwc-textfield')
], OscdFilteredList.prototype, "searchField", void 0);

window.customElements.define('oscd-filtered-list', OscdFilteredList);

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
var cssClasses = {
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
var strings = {
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
var numbers = {
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
        _this.escapeKeyAction = strings.CLOSE_ACTION;
        _this.scrimClickAction = strings.CLOSE_ACTION;
        _this.autoStackButtons = true;
        _this.areButtonsStacked = false;
        _this.suppressDefaultPressSelector = strings.SUPPRESS_DEFAULT_PRESS_SELECTOR;
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
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return numbers;
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
        if (this.adapter.hasClass(cssClasses.STACKED)) {
            this.setAutoStackButtons(false);
        }
        this.isFullscreen = this.adapter.hasClass(cssClasses.FULLSCREEN);
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
        this.adapter.addClass(cssClasses.OPENING);
        if (this.isFullscreen) {
            // A scroll event listener is registered even if the dialog is not
            // scrollable on open, since the window resize event, or orientation
            // change may make the dialog scrollable after it is opened.
            this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
        }
        if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
            this.adapter.addClass(cssClasses.SCRIM_HIDDEN);
        }
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        // Wait a frame once display is no longer "none", to establish basis for
        // animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses.OPEN);
            _this.adapter.addBodyClass(cssClasses.SCROLL_LOCK);
            _this.layout();
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
                _this.adapter.notifyOpened();
            }, numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
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
        this.adapter.addClass(cssClasses.CLOSING);
        this.adapter.removeClass(cssClasses.OPEN);
        this.adapter.removeBodyClass(cssClasses.SCROLL_LOCK);
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
        }, numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.showSurfaceScrim = function () {
        var _this = this;
        this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWING);
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWN);
        });
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.hideSurfaceScrim = function () {
        this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWN);
        this.adapter.addClass(cssClasses.SURFACE_SCRIM_HIDING);
    };
    /**
     * Handles `transitionend` event triggered when surface scrim animation is
     * finished.
     */
    MDCDialogFoundation.prototype.handleSurfaceScrimTransitionEnd = function () {
        this.adapter.removeClass(cssClasses.SURFACE_SCRIM_HIDING);
        this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWING);
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
        var isScrim = this.adapter.eventTargetMatches(evt.target, strings.SCRIM_SELECTOR);
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
        this.adapter.removeClass(cssClasses.OPENING);
        this.adapter.removeClass(cssClasses.CLOSING);
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
        this.adapter.removeClass(cssClasses.STACKED);
        var areButtonsStacked = this.adapter.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter.addClass(cssClasses.STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked) {
            this.adapter.reverseButtons();
            this.areButtonsStacked = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.toggleScrollableClasses = function () {
        // Remove the class first to let us measure the natural height of the
        // content.
        this.adapter.removeClass(cssClasses.SCROLLABLE);
        if (this.adapter.isContentScrollable()) {
            this.adapter.addClass(cssClasses.SCROLLABLE);
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
            this.adapter.addClass(cssClasses.SCROLL_DIVIDER_HEADER);
        }
        else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_HEADER)) {
            this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_HEADER);
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerFooter = function () {
        if (!this.adapter.isScrollableContentAtBottom()) {
            this.adapter.addClass(cssClasses.SCROLL_DIVIDER_FOOTER);
        }
        else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_FOOTER)) {
            this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_FOOTER);
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
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

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
                const element = closest$1(e.target, `[${this.actionAttribute}]`);
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
            [cssClasses.STACKED]: this.stacked,
        };
        let heading = x ``;
        if (this.heading) {
            heading = this.renderHeading();
        }
        const actionsClasses = {
            'mdc-dialog__actions': !this.hideActions,
        };
        return x `
    <div class="mdc-dialog ${o$b(classes)}"
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
              class="${o$b(actionsClasses)}">
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
    i$4('.mdc-dialog')
], DialogBase.prototype, "mdcRoot", void 0);
__decorate([
    i$4('slot[name="primaryAction"]')
], DialogBase.prototype, "primarySlot", void 0);
__decorate([
    i$4('slot[name="secondaryAction"]')
], DialogBase.prototype, "secondarySlot", void 0);
__decorate([
    i$4('#contentSlot')
], DialogBase.prototype, "contentSlot", void 0);
__decorate([
    i$4('.mdc-dialog__content')
], DialogBase.prototype, "contentElement", void 0);
__decorate([
    i$4('.mdc-container')
], DialogBase.prototype, "conatinerElement", void 0);
__decorate([
    e$8({ type: Boolean })
], DialogBase.prototype, "hideActions", void 0);
__decorate([
    e$8({ type: Boolean }),
    observer(function () {
        this.forceLayout();
    })
], DialogBase.prototype, "stacked", void 0);
__decorate([
    e$8({ type: String })
], DialogBase.prototype, "heading", void 0);
__decorate([
    e$8({ type: String }),
    observer(function (newAction) {
        this.mdcFoundation.setScrimClickAction(newAction);
    })
], DialogBase.prototype, "scrimClickAction", void 0);
__decorate([
    e$8({ type: String }),
    observer(function (newAction) {
        this.mdcFoundation.setEscapeKeyAction(newAction);
    })
], DialogBase.prototype, "escapeKeyAction", void 0);
__decorate([
    e$8({ type: Boolean, reflect: true }),
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
    e$8()
], DialogBase.prototype, "defaultAction", void 0);
__decorate([
    e$8()
], DialogBase.prototype, "actionAttribute", void 0);
__decorate([
    e$8()
], DialogBase.prototype, "initialFocusAttribute", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = i$3 `.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Dialog = class Dialog extends DialogBase {
};
Dialog.styles = [styles];
Dialog = __decorate([
    e$9('mwc-dialog')
], Dialog);

function slotItem(item) {
    if (!item.closest('oscd-filtered-list') || !item.parentElement)
        return item;
    // eslint-disable-next-line no-use-before-define
    if (item.parentElement instanceof OscdFilteredListOld)
        return item;
    return slotItem(item.parentElement);
}
function hideFiltered(item, searchText) {
    const itemInnerText = `${item.innerText}\n`;
    const childInnerText = Array.from(item.children)
        .map(child => child.innerText)
        .join('\n');
    const { value } = item;
    const filterTarget = (itemInnerText +
        childInnerText +
        value).toUpperCase();
    const terms = searchText
        .toUpperCase()
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .trim()
        .split(/\s+/g);
    // eslint-disable-next-line no-unused-expressions
    (terms.length === 1 && terms[0] === '') ||
        terms.every(term => {
            // regexp escape
            const reTerm = new RegExp(`*${term}*`.replace(/\*/g, '.*').replace(/\?/g, '.{1}'), 'i');
            return reTerm.test(filterTarget);
        })
        ? slotItem(item).classList.remove('hidden')
        : slotItem(item).classList.add('hidden');
}
/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms.
 * This is based on a legacy code base which is no longer compatible with the @open-scd/oscd-filtered-list
 * component.
 */
let OscdFilteredListOld = class OscdFilteredListOld extends ListBase {
    get existCheckListItem() {
        return this.items.some(item => item instanceof CheckListItem);
    }
    get isAllSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .every(checkItem => checkItem.selected);
    }
    get isSomeSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .some(checkItem => checkItem.selected);
    }
    onCheckAll() {
        const select = !this.isAllSelected;
        this.items
            .filter(item => !item.disabled && !item.classList.contains('hidden'))
            .forEach(item => {
            // eslint-disable-next-line no-param-reassign
            item.selected = select;
        });
    }
    onFilterInput() {
        Array.from(this.querySelectorAll('mwc-list-item, mwc-check-list-item, mwc-radio-list-item')).forEach(item => hideFiltered(item, this.searchField.value));
    }
    onListItemConnected(e) {
        super.onListItemConnected(e);
        this.requestUpdate();
    }
    constructor() {
        super();
        /** Whether the check all option (checkbox next to search text field) is activated */
        this.disableCheckAll = false;
        this.addEventListener('selected', () => {
            this.requestUpdate();
        });
    }
    renderCheckAll() {
        return this.existCheckListItem && !this.disableCheckAll
            ? x$1 `<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
                this.onCheckAll();
            }}
          ></mwc-checkbox
        ></mwc-formfield>`
            : x$1 ``;
    }
    render() {
        return x$1 `<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? 'filter'}"
          ><mwc-textfield
            label="${this.searchFieldLabel ?? ''}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      ${super.render()}`;
    }
};
// TODO: Is it possible to remove the any typing here?
OscdFilteredListOld.styles = i$8 `
    ${r$9(List.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
__decorate([
    n$i({ type: String })
], OscdFilteredListOld.prototype, "searchFieldLabel", void 0);
__decorate([
    n$i({ type: Boolean })
], OscdFilteredListOld.prototype, "disableCheckAll", void 0);
__decorate([
    r$4()
], OscdFilteredListOld.prototype, "existCheckListItem", null);
__decorate([
    r$4()
], OscdFilteredListOld.prototype, "isAllSelected", null);
__decorate([
    r$4()
], OscdFilteredListOld.prototype, "isSomeSelected", null);
__decorate([
    e$b('mwc-textfield')
], OscdFilteredListOld.prototype, "searchField", void 0);
OscdFilteredListOld = __decorate([
    t$4('oscd-filtered-list-old')
], OscdFilteredListOld);

function newSelectedItemsChangedEvent(selectedItems, 
// TODO: There is an issue in OpenSCD core for DOM types causing this
// eslint-disable-next-line no-undef
eventInitDict) {
    return new CustomEvent('selected-items-changed', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { selectedItems, ...eventInitDict?.detail }
    });
}
/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms
 */
let FilterButton = class FilterButton extends OscdFilteredListOld {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    toggleList() {
        this.filterDialog.show();
    }
    onClosing() {
        const selectedItems = [];
        if (this.selected) {
            if (this.selected instanceof Array) {
                this.selected.forEach(item => selectedItems.push(item.value));
            }
            else {
                selectedItems.push(this.selected.value);
            }
            this.dispatchEvent(newSelectedItemsChangedEvent(selectedItems));
        }
    }
    render() {
        return x$1 `
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : 'Filter'}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          Close
        </mwc-button>
      </mwc-dialog>
    `;
    }
};
FilterButton.styles = i$8 `
    ${r$9(OscdFilteredListOld.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
__decorate([
    n$i()
], FilterButton.prototype, "header", void 0);
__decorate([
    n$i()
], FilterButton.prototype, "icon", void 0);
__decorate([
    n$i({ type: Boolean })
], FilterButton.prototype, "disabled", void 0);
__decorate([
    e$b('#filterDialog')
], FilterButton.prototype, "filterDialog", void 0);
FilterButton = __decorate([
    t$4('oscd-filter-button')
], FilterButton);

/**
 * Extract the 'name' attribute from the given XML element.
 * @param element - The element to extract name from.
 * @returns the name, or undefined if there is no name.
 */
function getNameAttribute(element) {
    const name = element.getAttribute('name');
    return name || undefined;
}
/**
 * Extract the 'desc' attribute from the given XML element.
 * @param element - The element to extract description from.
 * @returns the name, or undefined if there is no description.
 */
function getDescriptionAttribute(element) {
    const name = element.getAttribute('desc');
    return name || undefined;
}
/** Sorts selected `ListItem`s to the top and disabled ones to the bottom. */
function compareNames(a, b) {
    if (typeof a === 'string' && typeof b === 'string')
        return a.localeCompare(b);
    if (typeof a === 'object' && typeof b === 'string')
        return (a.getAttribute('name') ?? '').localeCompare(b);
    if (typeof a === 'string' && typeof b === 'object')
        return a.localeCompare(b.getAttribute('name'));
    if (typeof a === 'object' && typeof b === 'object')
        return (a.getAttribute('name') ?? '').localeCompare(b.getAttribute('name') ?? '');
    return 0;
}
/** maximum value for `lnInst` attribute */
const maxLnInst = 99;
const lnInstRange = Array(maxLnInst)
    .fill(1)
    .map((_, i) => `${i + 1}`);
/**
 * @param lnElements - The LN elements to be scanned for `inst`
 * values already in use.
 * @returns first available inst value for LN or undefined if no inst is available
 */
function minAvailableLogicalNodeInstance(lnElements) {
    const lnInsts = new Set(lnElements.map(ln => ln.getAttribute('inst') || ''));
    return lnInstRange.find(lnInst => !lnInsts.has(lnInst));
}

const pathsSVG = {
    gooseIcon: b `<path d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
    smvIcon: b `'<path d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
const gooseIcon = b `<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pathsSVG.gooseIcon}</svg>`;
const smvIcon = b `<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pathsSVG.smvIcon}</svg>`;
function getIconButton(type, state) {
    return b `<svg
    slot="${state ? 'onIcon' : 'offIcon'}"
    xmlns="http://www.w3.orgs/2000/svg"
    viewBox="0 0 24 24" 
  >
    ${pathsSVG[type]}
  </svg>`;
}
const gooseActionIcon = getIconButton('gooseIcon', false);
const smvActionIcon = getIconButton('smvIcon', true);

const SCL_NAMESPACE = 'http://www.iec.ch/61850/2003/SCL';
/**
 * Creates a string pointer to the control block element.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @returns null if the control block is undefined or a string pointer to the control block element
 */
function controlBlockReference(controlBlock) {
    if (!controlBlock)
        return null;
    const anyLn = controlBlock.closest('LN,LN0');
    const prefix = anyLn?.getAttribute('prefix') ?? '';
    const lnClass = anyLn?.getAttribute('lnClass');
    const lnInst = anyLn?.getAttribute('inst') ?? '';
    const ldInst = controlBlock.closest('LDevice')?.getAttribute('inst');
    const iedName = controlBlock.closest('IED')?.getAttribute('name');
    const cbName = controlBlock.getAttribute('name');
    if (!cbName && !iedName && !ldInst && !lnClass)
        return null;
    return `${iedName}${ldInst}/${prefix}${lnClass}${lnInst}.${cbName}`;
}
/**
 * Searches for first instantiated LGOS/LSVS LN for presence of DOI>DAI[valKind=Conf/RO][valImport=true]
 * given a supervision type and if necessary then searches DataTypeTemplates for
 * DOType>DA[valKind=Conf/RO][valImport=true] to determine if modifications to supervision are allowed.
 * @param ied - SCL IED element.
 * @param supervisionType - either 'LGOS' or 'LSVS' supervision LN classes.
 * @returns boolean indicating if subscriptions are allowed.
 */
function isSupervisionModificationAllowed(ied, supervisionType) {
    const firstSupervisionLN = ied.querySelector(`LN[lnClass="${supervisionType}"]`);
    // no supervision logical nodes => no new supervision possible
    if (firstSupervisionLN === null)
        return false;
    return canRemoveSupervision(firstSupervisionLN, {
        removeSupervisionLn: true,
        checkSubscription: false
    });
}
/**
 * Counts the max number of LN instances with supervision allowed for
 * the given control block's type of message.
 *
 * @param subscriberIED The subscriber IED
 * @param controlBlockType The GOOSE or SMV message element
 * @returns The max number of LN instances with supervision allowed
 */
function maxSupervisions(subscriberIED, controlBlockType) {
    const maxAttr = controlBlockType === 'GSEControl' ? 'maxGo' : 'maxSv';
    const maxValues = parseInt(subscriberIED
        .querySelector('Services>SupSubscription')
        ?.getAttribute(maxAttr) ?? '0', 10);
    return Number.isNaN(maxValues) ? 0 : maxValues;
}
/** Returns an new LN instance available for supervision instantiation
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns The LN instance or null if no LN instance could be found or created
 */
function createNewSupervisionLnInst(subscriberIED, supervisionType) {
    const newLN = subscriberIED.ownerDocument.createElementNS(SCL_NAMESPACE, 'LN');
    const openScdTag = subscriberIED.ownerDocument.createElementNS(SCL_NAMESPACE, 'Private');
    openScdTag.setAttribute('type', 'OpenSCD.create');
    newLN.appendChild(openScdTag);
    newLN.setAttribute('lnClass', supervisionType);
    // TODO: Why is this here? getSupervisionCbRefs is not of use.
    // Have adjusted to just find the first supervision, no need for it to be instantiated.
    // To create a new LGOS/LSVS LN there should be no need for a Val element to exist somewhere else.
    // const supervisionName = supervisionType === 'LGOS' ? 'GoCBRef' : 'SvCBRef';
    const selectorString = `LN[lnClass="${supervisionType}"],LN0[lnClass="${supervisionType}"]`;
    // TOD: Think as to why this removed portion might be needed...
    // >DOI[name="${supervisionName}"]>DAI[name="setSrcRef"]>Val,
    //   LN0[lnClass="${supervisionType}"]>DOI[name="${supervisionName}"]>DAI[name="setSrcRef"]>Val`;
    const firstSiblingSupervisionLN = Array.from(subscriberIED.querySelectorAll(selectorString))[0];
    if (!firstSiblingSupervisionLN)
        return null;
    newLN.setAttribute('lnType', firstSiblingSupervisionLN?.getAttribute('lnType') ?? '');
    /* Before we return, we make sure that LN's inst is unique, non-empty
    and also the minimum inst as the minimum of all available in the IED */
    const inst = newLN.getAttribute('inst') ?? '';
    if (inst === '') {
        const instNumber = minAvailableLogicalNodeInstance(Array.from(subscriberIED.querySelectorAll(`LN[lnClass="${supervisionType}"]`)));
        if (!instNumber)
            return null;
        newLN.setAttribute('inst', instNumber);
    }
    return newLN;
}
/** Returns an new LN instance available for supervision instantiation
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns The LN instance or null if no LN instance could be found or created
 */
function createNewSupervisionLnEvent(ied, supervisionType) {
    const newLN = createNewSupervisionLnInst(ied, supervisionType);
    if (!newLN)
        return null;
    const parent = ied.querySelector(`LN[lnClass="${supervisionType}"]`)
        ?.parentElement;
    if (parent && newLN) {
        const edit = {
            parent,
            node: newLN,
            reference: parent.querySelector(`LN[lnClass="${supervisionType}"]:last-child`)
                ?.nextElementSibling ?? null
        };
        return edit;
    }
    return null;
}

const controlTag = { GOOSE: 'GSEControl', SMV: 'SampledValueControl' };
const supervisionLnType = { GOOSE: 'LGOS', SMV: 'LSVS' };
function controlBlockDescription(control) {
    const name = control.getAttribute('name');
    const iedName = control.closest('IED').getAttribute('name');
    const lN0 = control.closest('LN0');
    const lDevice = lN0.closest('LDevice');
    const ldInst = lDevice.getAttribute('inst');
    const lnPrefix = lN0.getAttribute('prefix');
    const lnClass = lN0.getAttribute('lnClass');
    const lnInst = lN0.getAttribute('inst');
    const desc = control.getAttribute('desc');
    const lN0Desc = lN0?.getAttribute('desc');
    const descriptions = [desc, lN0Desc].filter(a => !!a).join(' > ');
    const pathName = [iedName, '>', name].filter(a => !!a).join(' ');
    const pathLDeviceAndLN = [ldInst, '/', lnPrefix, lnClass, lnInst]
        .filter(a => !!a)
        .join(' ');
    const pathDescription = descriptions;
    return { pathName, pathLDeviceAndLN, pathDescription };
}
function supervisionPath(supLn) {
    const ln = supLn.closest('LN, LN0');
    const lDevice = ln.closest('LDevice');
    const ldInst = lDevice.getAttribute('inst');
    const lnPrefix = ln.getAttribute('prefix');
    const lnClass = ln.getAttribute('lnClass');
    const lnInst = ln.getAttribute('inst');
    const path = [ldInst, '/', lnPrefix, lnClass, lnInst]
        .filter(a => !!a)
        .join(' ');
    return path;
}
function getSupervisionCBRef(ln) {
    const type = ln.getAttribute('lnClass') === 'LGOS' ? 'GoCBRef' : 'SvCBRef';
    return (ln.querySelector(`DOI[name="${type}"] > DAI[name="setSrcRef"] > Val`)
        ?.textContent ?? null);
}
function isGOOSEorSMV(extRef, type) {
    return (extRef.getAttribute('serviceType') === type ||
        extRef.getAttribute('pServT') === type);
}
function closest(array, target) {
    return array.sort((a, b) => Math.abs(target - a) - Math.abs(target - b))[0];
}
const progressIcons = {
    0: 'circle',
    10: 'clock_loader_10',
    20: 'clock_loader_20',
    40: 'clock_loader_40',
    60: 'clock_loader_60',
    80: 'clock_loader_80',
    90: 'clock_loader_90',
    100: 'stroke_full'
};
function getUsageIcon(percent) {
    const closestIconPercent = closest(Object.keys(progressIcons).map(i => parseInt(i, 10)), percent);
    return progressIcons[`${closestIconPercent}`];
}
/**
 * Creates a regular expression to allow case-insensitive searching of list
 * items.
 *
 * * Supports globbing with * and
 * * Supports quoting using both ' and " and is an AND-ing search which
 *   narrows as further search text is added.
 *
 * @param searchExpression
 * @returns a regular expression
 */
function getSearchRegex(searchExpression) {
    if (searchExpression === '') {
        return /.*/i;
    }
    const terms = searchExpression
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .trim()
        .match(/(?:[^\s"']+|['"][^'"]*["'])+/g) ?? [];
    const expandedTerms = terms.map(term => term.replace(/\*/g, '.*').replace(/\?/g, '.{1}').replace(/"|'/g, ''));
    const regexString = expandedTerms.map(term => `(?=.*${term})`);
    return new RegExp(`${regexString.join('')}.*`, 'i');
}
/**
 * Ensures callback is not called more frequently than `delay`
 * @param callback - Function to be debounced.
 * @param delay - Duration of debounce in ms.
 */
function debounce(callback, delay = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
/**
 * Fetches used control block references for a given IED and control type
 * (GOOSE or SMV) and returns them as an array
 * @param ied - SCL IED element.
 * @param type - Either `GOOSE` or `SMV`.
 * @returns an array of control block references.
 */
function getSubscribedCBRefs(ied, type) {
    if (!ied)
        return [];
    const extRefs = Array.from(ied.getElementsByTagName('ExtRef')) ?? [];
    const controlBlockRefs = new Set();
    extRefs.forEach(extRef => {
        if (isGOOSEorSMV(extRef, type)) {
            const cb = sourceControlBlock(extRef);
            if (cb)
                controlBlockRefs.add(controlBlockReference(cb) ?? 'Unknown Control');
        }
    });
    return Array.from(controlBlockRefs);
}
/**
 * Gets GSEControl or SampledValueControl elements _except_ for the
 * selected IED.
 * @param ied - Selected IED SCL element.
 * @param controlType - Either `GOOSE` or `SMV`
 * @returns an array of `GSEControl` or `SampledValueControl` elements.
 */
function getOtherIedControlElements(ied, controlType) {
    if (!ied)
        return [];
    const iedName = getNameAttribute(ied);
    return Array.from(ied.ownerDocument.querySelectorAll(`LN0 > ${controlTag[controlType]}`))
        .filter(cb => getNameAttribute(cb.closest('IED')) !== iedName)
        .sort((a, b) => `${identity(a)}`.localeCompare(`${identity(b)}`));
}
/**
 * Retrieve supervision LNs for GOOSE or SMV.
 * @param ied - An IED SCL element.
 * @param controlType - Either `GOOSE` or `SMV`.
 * @returns An array of LN elements.
 */
function getSupervisionLNs(ied, controlType) {
    if (!ied)
        return [];
    return Array.from(ied.querySelectorAll(`LN[lnClass="${supervisionLnType[controlType]}"]`)).sort((a, b) => `${identity(a)}`.localeCompare(`${identity(b)}`));
}
/**
 * Retrieve control block references for a given IED whose references is used
 * within a supervision node.
 * @param ied - An SCL IED Element.
 * @param controlType - Either `GOOSE` or `SMV`.
 * @returns An array of control block references.
 */
function getSupervisedCBRefs(ied, controlType) {
    if (!ied)
        return [];
    const supervisedCbRefs = [];
    const controlElements = getOtherIedControlElements(ied, controlType);
    const subscribedCbRefs = getSubscribedCBRefs(ied, controlType);
    getSupervisionLNs(ied, controlType).forEach(lN => {
        const cbRef = getSupervisionCBRef(lN);
        if (cbRef !== null && cbRef !== '') {
            const controlElement = controlElements.find(control => cbRef === controlBlockReference(control)) ?? null;
            if (controlElement) {
                if (!supervisedCbRefs.includes(cbRef) &&
                    subscribedCbRefs.includes(cbRef))
                    supervisedCbRefs.push(cbRef);
            }
        }
    });
    return supervisedCbRefs;
}
/**
 * Get control block references for an IED and a
 * specific control type
 * @param ied - An SCL IED element.
 * @param controlType - Either `GOOSE` or `SMV`.
 * @returns An array of control block references.
 */
function getCBRefs(ied, controlType) {
    return getOtherIedControlElements(ied, controlType).map(cb => controlBlockReference(cb) ?? 'Unknown Control');
}
function getSupervisionLnDescription(supLn) {
    const descriptionLn = getDescriptionAttribute(supLn);
    const doi = supLn.querySelector(`:scope > DOI[name="St"]`);
    let doiDesc = doi ? getDescriptionAttribute(doi) : undefined;
    if (!doiDesc) {
        doiDesc =
            doi?.querySelector(':scope > DAI[name="d"] > Val')?.textContent ??
                undefined;
    }
    return [descriptionLn, doiDesc].filter(d => d !== undefined).join(' > ');
}
/**
 * Editor to allow allocation of GOOSE and SMV supervision LNs
 * to control blocks
 */
class OscdSupervision extends s$h {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.controlType = 'GOOSE';
        this.selectedIEDs = [];
        /**
         * Control block references for non-selected IEDs
         */
        this.otherIedsCBRefs = [];
        /**
         * Control block references for which selected IED
         * has a subscription in an `ExtRef` element
         */
        this.selectedIedSubscribedCBRefs = [];
        /**
         * Control block references for which the selected IED
         * has an supervision LN referenced to
         */
        this.selectedIedSupervisedCBRefs = [];
        this.searchUnusedSupervisions = /.*/i;
        this.selectedControl = null;
        this.selectedSupervision = null;
        this.newSupervision = false;
        this.instantiatedSupervisionLNs = 0;
        this.availableSupervisionLNs = 0;
    }
    get iedList() {
        return this.doc
            ? Array.from(this.doc.querySelectorAll(':root > IED')).sort((a, b) => compareNames(a, b))
            : [];
    }
    get selectedIed() {
        // When there is no IED selected, or the selected IED has no parent
        // (IED has been removed) select the first IED from the list
        if (this.selectedIEDs.length >= 1) {
            return this.iedList.find(element => {
                const iedName = getNameAttribute(element);
                return this.selectedIEDs[0] === iedName;
            });
        }
        return undefined;
    }
    /**
     * Update stores of control block references which have (from this IED)
     * supervisions or subscriptions or belong to other IEDs
     */
    updateCBRefInfo(ied, controlType) {
        this.otherIedsCBRefs = getCBRefs(ied, controlType);
        this.selectedIedSubscribedCBRefs = getSubscribedCBRefs(ied, controlType);
        this.selectedIedSupervisedCBRefs = getSupervisedCBRefs(ied, controlType);
        const maxSupervisionLNs = ied
            ? maxSupervisions(ied, controlTag[this.controlType])
            : 0;
        this.instantiatedSupervisionLNs = getSupervisionLNs(ied, this.controlType).length;
        this.availableSupervisionLNs =
            maxSupervisionLNs - this.instantiatedSupervisionLNs;
    }
    firstUpdated() {
        this.updateCBRefInfo(this.selectedIed, this.controlType);
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        // When the document is updated, we reset the selected IED.
        // TODO: Detect same document opened twice.
        if (_changedProperties.has('doc')) {
            this.selectedIEDs = [];
            if (this.iedList.length > 0) {
                const iedName = getNameAttribute(this.iedList[0]);
                if (iedName) {
                    this.selectedIEDs = [iedName];
                    this.updateCBRefInfo(this.selectedIed, this.controlType);
                }
            }
        }
        if (_changedProperties.has('selectedIEDs')) {
            this.updateCBRefInfo(this.selectedIed, this.controlType);
            this.clearListSelections();
            this.resetSearchFilters();
        }
        if (_changedProperties.has('editCount') && _changedProperties.size === 1) {
            // when change is introduced through undo and redo need to update cached
            // variables and reset any in-progress user action
            this.updateCBRefInfo(this.selectedIed, this.controlType);
            this.clearListSelections();
        }
        // We dynamically change the interactivity and must call
        // this method to update the tabindex, otherwise we end up
        // with an inability to select items.
        // See layout in https://www.npmjs.com/package/@material/mwc-list#methods
        if (this.selectedUnusedSupervisionsListUI)
            this.selectedUnusedSupervisionsListUI.layout();
        if (this.removeUsedSupervisionsListUI)
            this.removeUsedSupervisionsListUI.layout();
        if (this.deleteSupervisionsListsUI) {
            this.deleteSupervisionsListsUI.forEach((list) => list.layout());
        }
    }
    // eslint-disable-next-line class-methods-use-this
    renderUnusedSupervisionNode(lN) {
        const description = getSupervisionLnDescription(lN);
        const controlBlockRef = getSupervisionCBRef(lN);
        const invalidControlBlock = controlBlockRef !== '' &&
            !this.otherIedsCBRefs.includes(controlBlockRef ?? 'Unknown control block') &&
            controlBlockRef !== null;
        const notSubscribedControlBlock = controlBlockRef !== '' &&
            !this.selectedIedSubscribedCBRefs.includes(controlBlockRef ?? 'Unknown control block') &&
            controlBlockRef !== null;
        return x$1 `
      <mwc-list-item
        ?twoline=${!!description ||
            !!invalidControlBlock ||
            !!notSubscribedControlBlock}
        class="mitem available"
        graphic="icon"
        ?hasMeta=${invalidControlBlock || notSubscribedControlBlock}
        ?noninteractive=${this.selectedIedSupervisedCBRefs.length ===
            this.selectedIedSubscribedCBRefs.length}
        data-ln="${identity(lN)}"
        value="${identity(lN)}"
        title="${supervisionPath(lN)}
${description ?? ''}"
      >
        <span>${supervisionPath(lN)}</span>
        ${description || invalidControlBlock || notSubscribedControlBlock
            ? x$1 `<span slot="secondary"
              >${description}${description &&
                (invalidControlBlock || notSubscribedControlBlock)
                ? ' - '
                : ''}${invalidControlBlock
                ? `Invalid Control Block reference: "${controlBlockRef}"`
                : ''}${notSubscribedControlBlock && !invalidControlBlock
                ? `Control block not subscribed: "${controlBlockRef}"`
                : ''}
            </span>`
            : T$1}
        <mwc-icon slot="graphic">monitor_heart</mwc-icon>
        ${invalidControlBlock || notSubscribedControlBlock
            ? x$1 `<mwc-icon class="invalid-mapping" slot="meta"
              >${invalidControlBlock ? 'warning' : 'error'}</mwc-icon
            >`
            : ''}
      </mwc-list-item>
      <!-- TODO: In future add wizards -->
    `;
    }
    // eslint-disable-next-line class-methods-use-this
    renderSupervisionListItem(lN, interactive) {
        const description = getSupervisionLnDescription(lN);
        return x$1 `
      <mwc-list-item
        ?twoline=${!!description}
        ?noninteractive=${!interactive}
        class="sup-ln mitem"
        graphic="icon"
        data-ln="${identity(lN)}"
        value="${identity(lN)}"
        title="${supervisionPath(lN)}
${description || ''}"
      >
        <span>${supervisionPath(lN)}</span>
        ${description
            ? x$1 `<span slot="secondary">${description}</span>`
            : T$1}
        <mwc-icon slot="graphic">monitor_heart</mwc-icon>
      </mwc-list-item>
      <!-- TODO: In future add with wizards 
      <mwc-icon-button
        class="sup-btn"
        icon="edit"
      ></mwc-icon-button> -->
    `;
    }
    clearListSelections() {
        this.selectedControl = null;
        this.selectedSupervision = null;
        this.newSupervision = false;
        if (this.selectedUnusedControlUI) {
            this.selectedUnusedControlUI.selected = false;
            this.selectedUnusedControlUI.activated = false;
        }
        if (this.selectedUnusedSupervisionUI) {
            this.selectedUnusedSupervisionUI.selected = false;
            this.selectedUnusedSupervisionUI.activated = false;
        }
    }
    getSelectedIedSupLNs(used = true, unused = false) {
        return getSupervisionLNs(this.selectedIed, this.controlType)
            .filter(lN => {
            const cbRef = getSupervisionCBRef(lN);
            const cbRefUsed = this.selectedIedSubscribedCBRefs.includes(cbRef ?? 'Unknown Control');
            return (cbRefUsed && used) || (!cbRefUsed && unused);
        })
            .sort((lnA, lnB) => {
            // ensure stable sort order based on object path and instance number
            const instA = `${identity(lnA.parentElement)} ${lnA
                .getAttribute('inst')
                .padStart(5, '0')}`;
            const instB = `${identity(lnB.parentElement)} ${lnB
                .getAttribute('inst')
                .padStart(5, '0')}`;
            return instA.localeCompare(instB);
        });
    }
    searchUnusedSupervisionLN(supLn) {
        const description = getSupervisionLnDescription(supLn);
        const supervisionSearchText = `${identity(supLn)} ${description}`;
        return (this.searchUnusedSupervisions &&
            this.searchUnusedSupervisions.test(supervisionSearchText));
    }
    renderUnusedSupervisionLNs(used = false, unused = false) {
        if (!this.selectedIed)
            return x$1 ``;
        const supervisionType = this.controlType === 'GOOSE' ? 'LGOS' : 'LSVS';
        return x$1 `${this.getSelectedIedSupLNs(used, unused)
            .filter(supLn => this.searchUnusedSupervisionLN(supLn))
            .map(lN => x$1 `${this.renderUnusedSupervisionNode(lN)}`)}
      <mwc-list-item
        hasMeta
        class="sup-ln mitem available"
        graphic="icon"
        data-ln="NEW"
        value="New ${supervisionType} Supervision"
        ?noninteractive=${this.selectedIedSupervisedCBRefs.length ===
            this.selectedIedSubscribedCBRefs.length ||
            this.availableSupervisionLNs === 0}
      >
        <span
          >New ${supervisionType} Supervision
          ${this.instantiatedSupervisionLNs > 0
            ? x$1 `— ${this.availableSupervisionLNs} available</span>
                </div>`
            : T$1}
        </span>
        <mwc-icon slot="graphic">heart_plus</mwc-icon>
      </mwc-list-item>`;
    }
    renderDeleteIcons(used = true, unused = false, withFiltering = false) {
        const firstSupervision = getSupervisionLNs(this.selectedIed, this.controlType)[0];
        return x$1 `<mwc-list
      class="column mlist deleter"
      @selected=${(ev) => {
            const selectedListItem = ev.target.selected;
            if (!selectedListItem)
                return;
            const { ln } = selectedListItem.dataset;
            const supLn = find(this.doc, 'LN', ln);
            const deleteEdit = removeSupervision(supLn, {
                removeSupervisionLn: true,
                checkSubscription: false
            });
            if (deleteEdit)
                this.dispatchEvent(newEditEvent(deleteEdit));
            this.updateCBRefInfo(this.selectedIed, this.controlType);
            this.clearListSelections();
            selectedListItem.selected = false;
            selectedListItem.activated = false;
        }}
    >
      <!-- show additional item to allow delete button alignment -->
      ${unused ? x$1 `<mwc-list-item twoline></mwc-list-item>` : T$1}
      ${this.getSelectedIedSupLNs(used, unused)
            .filter(supLn => !withFiltering ||
            (withFiltering && this.searchUnusedSupervisionLN(supLn)))
            .map(lN => x$1 `
            <mwc-list-item
              ?noninteractive=${!isSupervisionModificationAllowed(this.selectedIed, supervisionLnType[this.controlType])}
              twoline
              graphic="icon"
              data-ln="${identity(lN)}"
              value="${identity(lN)}"
              title="${lN === firstSupervision
            ? 'First supervision logical node cannot be removed'
            : ''}"
            >
              <mwc-icon
                class="column button mitem ${lN !== firstSupervision
            ? 'deletable'
            : ''}"
                slot="graphic"
                label="Delete supervision logical node"
                data-lN="${identity(lN)}"
                >${lN === firstSupervision ? 'block' : 'delete'}</mwc-icon
              >
            </mwc-list-item>
          `)}
      <!-- show additional item to allow delete button alignment -->
      ${unused
            ? x$1 `<mwc-list-item twoline noninteractive></mwc-list-item>`
            : T$1}
    </mwc-list>`;
    }
    renderUsedSupervisionLNs() {
        if (!this.selectedIed)
            return x$1 ``;
        const usedSupervisions = this.getSelectedIedSupLNs(true, false);
        if (usedSupervisions.length === 0)
            return x$1 `<h3>No supervision nodes used</h3>`;
        return x$1 `<mwc-list class="column mlist suplist">
      ${usedSupervisions.map(lN => x$1 `${this.renderSupervisionListItem(lN, false)}`)}
    </mwc-list>`;
    }
    renderUsedSupervisionRemovalIcons() {
        return x$1 `<mwc-list
      id="removeUsedSupervisions"
      class="column remover mlist"
      @selected=${(ev) => {
            const selectedListItem = ev.target.selected;
            if (!selectedListItem)
                return;
            const { ln } = selectedListItem.dataset;
            const supLn = find(this.doc, 'LN', ln);
            const cbRef = getSupervisionCBRef(supLn);
            const controlBlock = getOtherIedControlElements(this.selectedIed, this.controlType).find(control => cbRef === controlBlockReference(control)) ?? null;
            if (controlBlock) {
                const removeEdit = removeSupervision(supLn, {
                    removeSupervisionLn: false,
                    checkSubscription: false
                });
                if (removeEdit)
                    this.dispatchEvent(newEditEvent(removeEdit));
                this.updateCBRefInfo(this.selectedIed, this.controlType);
                this.clearListSelections();
                selectedListItem.selected = false;
                selectedListItem.activated = false;
            }
        }}
    >
      ${this.getSelectedIedSupLNs(true, false).map(lN => x$1 `
          <mwc-list-item
            ?noninteractive=${!isSupervisionModificationAllowed(this.selectedIed, supervisionLnType[this.controlType])}
            graphic="icon"
            twoline
            data-ln="${identity(lN)}"
            value="${identity(lN)}"
          >
            <mwc-icon
              slot="graphic"
              title="Remove supervision of this control block"
              class="column button mitem deletable"
              >heart_minus</mwc-icon
            >
          </mwc-list-item>
        `)}
    </mwc-list>`;
    }
    renderControl(controlElement, interactive = false) {
        if (!controlElement)
            return x$1 ``;
        const { pathName, pathLDeviceAndLN, pathDescription } = controlBlockDescription(controlElement);
        const datasetName = controlElement.getAttribute('datSet');
        const controlId = controlElement.tagName === 'GSEControl'
            ? controlElement.getAttribute('appID')
            : controlElement.getAttribute('smvID');
        let secondLineDesc = pathLDeviceAndLN;
        if (pathDescription && !datasetName) {
            secondLineDesc += ` - ${pathDescription} (Id: ${controlId})}`;
        }
        else if (pathDescription && datasetName) {
            secondLineDesc += ` - ${pathDescription} (Dataset: ${datasetName}, Id: ${controlId})`;
        }
        else if (!pathDescription && datasetName) {
            secondLineDesc += ` - (Dataset: ${datasetName}, Id: ${controlId})`;
        }
        return x$1 `<mwc-list-item
      ?noninteractive=${!interactive &&
            !this.selectedSupervision &&
            !this.newSupervision}
      graphic="icon"
      ?twoline=${!!pathDescription || !!datasetName}
      data-control="${identity(controlElement)}"
      value="${pathName}"
      title="${pathName}
${secondLineDesc}"
    >
      <span>${pathName}</span>
      <span slot="secondary">${secondLineDesc}</span>
      <mwc-icon slot="graphic"
        >${this.controlType === 'GOOSE' ? gooseIcon : smvIcon}</mwc-icon
      >
    </mwc-list-item>`;
    }
    renderUsedControls() {
        if (!this.selectedIed)
            return x$1 ``;
        return x$1 `<mwc-list class="column mlist conlist">
      ${this.getSelectedIedSupLNs(true, false).map(lN => {
            const cbRef = getSupervisionCBRef(lN);
            const controlElement = getOtherIedControlElements(this.selectedIed, this.controlType).find(control => cbRef === controlBlockReference(control));
            return this.renderControl(controlElement);
        })}</mwc-list
    >`;
    }
    renderInfo() {
        const supervisionType = this.controlType === 'GOOSE' ? 'LGOS' : 'LSVS';
        return x$1 `<div class="side-icons">
      ${this.selectedIed &&
            !isSupervisionModificationAllowed(this.selectedIed, supervisionLnType[this.controlType])
            ? x$1 `<mwc-icon-button
            title="This IED does not support ${supervisionType} supervision modification."
            icon="warning"
          ></mwc-icon-button>`
            : T$1}
    </div>`;
    }
    renderIedSelector() {
        return x$1 `<div id="iedSelector">
      <oscd-filter-button
        id="iedFilter"
        icon="developer_board"
        header="IED Selector"
        @selected-items-changed="${(e) => {
            this.selectedIEDs = e.detail.selectedItems;
            // reset control selection
            this.selectedControl = null;
            this.resetSearchFilters();
            this.updateCBRefInfo(this.selectedIed, this.controlType);
        }}"
      >
        ${this.iedList.map(ied => {
            const name = getNameAttribute(ied);
            const descr = getDescriptionAttribute(ied);
            const type = ied.getAttribute('type');
            const manufacturer = ied.getAttribute('manufacturer');
            return x$1 ` <mwc-radio-list-item
            value="${name}"
            ?twoline="${!!(type && manufacturer)}"
            ?selected="${this.selectedIEDs?.includes(name ?? '')}"
          >
            ${name} ${descr ? x$1 ` (${descr})` : x$1 ``}
            <span slot="secondary">
              ${type} ${type && manufacturer ? x$1 `&mdash;` : T$1}
              ${manufacturer}
            </span>
          </mwc-radio-list-item>`;
        })}
      </oscd-filter-button>
      <h2>
        ${this.selectedIed
            ? getNameAttribute(this.selectedIed)
            : 'No IED Selected'}
        (${this.selectedIed?.getAttribute('type') ?? 'Unknown Type'})
      </h2>
    </div>`;
    }
    resetSearchFilters() {
        if (this.filterUnusedSupervisionInputUI) {
            this.filterUnusedSupervisionInputUI.value = '';
            this.searchUnusedSupervisions = /.*/i;
        }
        if (this.filterUnusedControlBlocksList) {
            const textField = this.filterUnusedControlBlocksList?.shadowRoot?.querySelector('mwc-textfield');
            if (textField)
                textField.value = '';
        }
    }
    renderUnusedControlList() {
        return x$1 `<oscd-filtered-list
      id="unusedControls"
      class="conlist"
      @selected=${(ev) => {
            const selectedListItem = (ev.target.selected);
            if (!selectedListItem)
                return;
            const { control } = selectedListItem.dataset;
            const selectedControl = find(this.doc, controlTag[this.controlType], control ?? 'Unknown');
            this.selectedControl = selectedControl;
            if (this.selectedControl &&
                (this.selectedSupervision || this.newSupervision)) {
                if (this.selectedSupervision) {
                    //  TODO: We have to remove first to use the scl-lib function
                    //  We hope to have an upstream overwrite option before too long
                    //  See https://github.com/OpenEnergyTools/scl-lib/issues/79
                    const edits = [];
                    const removalEdit = removeSupervision(this.selectedSupervision, {
                        removeSupervisionLn: false,
                        checkSubscription: false
                    });
                    if (removalEdit)
                        edits.push(removalEdit);
                    this.dispatchEvent(newEditEvent(edits));
                }
                const instantiationEdit = instantiateSubscriptionSupervision({
                    subscriberIedOrLn: this.newSupervision
                        ? this.selectedIed
                        : this.selectedSupervision,
                    sourceControlBlock: this.selectedControl
                }, {
                    newSupervisionLn: this.newSupervision,
                    fixedLnInst: -1,
                    checkEditableSrcRef: true,
                    checkDuplicateSupervisions: true,
                    checkMaxSupervisionLimits: true
                });
                if (instantiationEdit)
                    this.dispatchEvent(newEditEvent(instantiationEdit));
                selectedListItem.selected = false;
                selectedListItem.activated = false;
                this.clearListSelections();
            }
            this.updateCBRefInfo(this.selectedIed, this.controlType);
            this.clearListSelections();
        }}
    >
      ${!this.selectedIed
            ? x$1 ``
            : x$1 `${getOtherIedControlElements(this.selectedIed, this.controlType)
                .filter(control => this.selectedIedSubscribedCBRefs.includes(controlBlockReference(control) ?? 'Unknown Control') &&
                !this.selectedIedSupervisedCBRefs.includes(controlBlockReference(control) ?? 'Unknown Control'))
                .map(controlElement => x$1 `${this.renderControl(controlElement, true)}`)}`}
    </oscd-filtered-list>`;
    }
    renderUnusedSupervisionList() {
        return x$1 `<div class="filteredList">
      <div class="searchField mitem sup-ln suplist">
        <abbr title="Search"
          ><mwc-textfield
            id="filterUnusedSupervisionInput"
            iconTrailing="search"
            outlined
            @input=${debounce(() => {
            this.searchUnusedSupervisions = getSearchRegex(this.filterUnusedSupervisionInputUI.value);
        })}
          ></mwc-textfield
        ></abbr>
      </div>
      <mwc-list
        id="unusedSupervisions"
        activatable
        @selected=${(ev) => {
            const selectedListItem = (ev.target.selected);
            if (!selectedListItem)
                return;
            // if user has allready selected a control
            if (this.selectedUnusedControlUI) {
                this.selectedUnusedControlUI.selected = false;
                this.selectedUnusedControlUI.activated = false;
            }
            const { ln } = selectedListItem.dataset;
            const selectedSupervision = find(this.doc, 'LN', ln ?? 'Unknown');
            this.newSupervision = ln === 'NEW';
            this.selectedSupervision = selectedSupervision;
            this.selectedControl = null;
        }}
      >
        ${this.renderUnusedSupervisionLNs(false, true)}
      </mwc-list>
    </div>`;
    }
    renderUnusedControlBlocksAndSupervisions() {
        let titleText;
        if (this.selectedSupervision) {
            titleText = supervisionPath(this.selectedSupervision) ?? '';
        }
        if (this.newSupervision) {
            titleText = 'New Supervision LN';
        }
        const supervisionType = this.controlType === 'GOOSE' ? 'LGOS' : 'LSVS';
        return x$1 `<section class="unused">
      <div class="column-unused">
        <h2>
          <span
            class="${this.selectedSupervision || this.newSupervision
            ? 'selected'
            : ''}"
          >
            ${this.selectedSupervision || this.newSupervision
            ? titleText
            : `Available ${this.controlType === 'GOOSE' ? 'LGOS' : 'LSVS'} Supervisions`}
          </span>
          <mwc-icon-button
            id="createNewLN"
            class="greyOutDisabled"
            title="Create New ${supervisionType} Supervision - ${this
            .availableSupervisionLNs} available"
            icon="heart_plus"
            ?disabled=${this.availableSupervisionLNs <= 0}
            @click=${() => {
            if (this.selectedIed) {
                const edit = createNewSupervisionLnEvent(this.selectedIed, supervisionType);
                if (edit) {
                    this.dispatchEvent(newEditEvent(edit));
                    this.updateCBRefInfo(this.selectedIed, this.controlType);
                    this.clearListSelections();
                }
            }
        }}
          ></mwc-icon-button>
        </h2>
        <div class="available-grouper">
          ${this.renderUnusedSupervisionList()}
          ${this.renderDeleteIcons(false, true, true)}
        </div>
      </div>
      <hr />
      <div class="column-unused">
        <h2
          class="${this.selectedSupervision || this.newSupervision
            ? 'selected title-element text'
            : ''}"
        >
          ${this.controlType === 'GOOSE'
            ? 'Select GOOSE Control Block'
            : 'Select SV Control Block'}
        </h2>
        ${this.renderUnusedControlList()}
      </div>
    </section>`;
    }
    renderControlSelector() {
        return x$1 `<mwc-icon-button-toggle
      id="controlType"
      label="Change between GOOSE and Sampled Value publishers"
      @click=${() => {
            if (this.controlType === 'GOOSE') {
                this.controlType = 'SMV';
            }
            else {
                this.controlType = 'GOOSE';
            }
            this.updateCBRefInfo(this.selectedIed, this.controlType);
            this.clearListSelections();
            this.resetSearchFilters();
        }}
      >${gooseActionIcon}${smvActionIcon}
    </mwc-icon-button-toggle>`;
    }
    render() {
        if (!this.doc)
            return x$1 ``;
        if (this.iedList.length === 0)
            return x$1 `<h1>No IEDs present</h1>`;
        const usedSupLNs = this.getSelectedIedSupLNs(true, false).length;
        const totalSupLNs = this.getSelectedIedSupLNs(true, true).length;
        const percentUsed = (usedSupLNs / totalSupLNs) * 100;
        return x$1 `<div id="container">
      <div id="controlSection">
        ${this.renderIedSelector()} ${this.renderInfo()}
      </div>
      <div id="scrollableArea">
        <section>
          <div id="controlSelector" class="column">
            ${this.renderControlSelector()}
            <h2>
              ${this.controlType === 'GOOSE' ? 'LGOS' : 'LSVS'} Supervisions
            </h2>
            <div class="side-icons">
              <div class="usage-group">
                <mwc-icon>${getUsageIcon(percentUsed)}</mwc-icon>
                <span class="usage">${usedSupLNs} / ${totalSupLNs} used</span>
              </div>
            </div>
          </div>
          <div class="column deleter"></div>
          <div class="column remover"></div>
          <h2 id="cbTitle" class="column">
            ${this.controlType === 'GOOSE'
            ? 'GOOSE Control Blocks'
            : 'SV Control Blocks'}
          </h2>
          ${this.renderUsedSupervisionLNs()}
          ${this.renderDeleteIcons(true, false)}
          ${this.renderUsedSupervisionRemovalIcons()}
          ${this.renderUsedControls()}
        </section>
        ${this.selectedIed &&
            isSupervisionModificationAllowed(this.selectedIed, supervisionLnType[this.controlType])
            ? x$1 `${this.renderUnusedControlBlocksAndSupervisions()}`
            : T$1}
      </div>
    </div>`;
    }
}
OscdSupervision.styles = i$8 `
    :host {
      --disabledVisibleElement: rgba(0, 0, 0, 0.38);
      --scrollbarBG: var(--mdc-theme-background, #cfcfcf00);
      --thumbBG: var(--mdc-button-disabled-ink-color, #996cd8cc);
    }

    :host(.moving) section {
      opacity: 0.3;
    }

    section {
      background-color: var(--mdc-theme-surface);
      transition: all 200ms linear;
      outline-color: var(--mdc-theme-primary);
      outline-style: solid;
      outline-width: 0px;
      opacity: 1;
    }
    h1 > nav,
    h2 > nav,
    h3 > nav,
    h1 > abbr > mwc-icon-button,
    h2 > abbr > mwc-icon-button,
    h3 > abbr > mwc-icon-button {
      float: right;
    }

    abbr[title] {
      border-bottom: none !important;
      cursor: inherit !important;
      text-decoration: none !important;
    }

    mwc-list-item[noninteractive] {
      font-weight: 500;
    }

    #container {
      width: 100%;
      height: 100%;
      display: block;
      overflow: hidden;
      height: calc(100vh - 112px);
    }

    #scrollableArea {
      overflow-y: scroll;
      height: calc(100vh - 200px);
      scrollbar-width: auto;
      scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    }

    #scrollableArea::-webkit-scrollbar {
      width: 6px;
    }

    #scrollableArea::-webkit-scrollbar-track {
      background: var(--scrollbarBG);
    }

    #scrollableArea::-webkit-scrollbar-thumb {
      background: var(--thumbBG);
      border-radius: 6px;
    }

    @media (max-width: 700px) {
      #container {
        height: calc(100vh - 110px);
      }
    }

    h1,
    h2,
    h3,
    .usage {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
      transition: background-color 150ms linear;
    }

    .usage {
      font-size: 16px;
      display: inline-flex;
    }

    h2.selected,
    h2 .selected {
      font-weight: 400;
      color: var(--mdc-theme-primary, #6200ee);
    }

    #cbTitle,
    #controlSelector,
    #controlSelector > mwc-formfield,
    #iedSelector {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    #controlSection {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      align-items: center;
    }

    section {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      padding: 10px 20px 0px 20px;
      margin: 10px;
    }

    section.unused {
      flex-wrap: nowrap;
    }

    #supervisionItems {
      display: flex;
      flex-direction: row;
    }

    .sup-btn {
      /* TODO: Discuss with Christian - actually need a theme in OpenSCD core! */
      --mdc-theme-text-disabled-on-light: LightGray;
      max-width: 50px;
    }

    .sup-ln {
      justify-content: flex-start;
      width: 100%;
    }

    #iedFilter,
    #controlType {
      --mdc-icon-size: 32px;
    }

    #iedFilter {
      color: var(--mdc-theme-secondary, #018786);
    }

    #controlType > svg {
      border-radius: 24px;
      background-color: var(--mdc-theme-secondary, #018786);
      color: var(--mdc-theme-on-secondary, white);
    }

    .button {
      --mdc-icon-size: 32px;
      color: var(--mdc-theme-secondary, #018786);
      padding-right: 5px;
    }

    /* TODO: Match theme colours, but how? */
    .greyOutDisabled {
      --mdc-theme-text-disabled-on-light: var(--disabledVisibleElement);
    }

    .mitem.available[noninteractive] {
      color: var(--disabledVisibleElement);
    }

    mwc-list-item[noninteractive] > mwc-icon.button {
      color: var(--disabledVisibleElement);
    }

    .item-grouper {
      display: flex;
      align-items: center;
    }

    .remover,
    .deleter {
      max-width: 50px;
    }

    .mitem {
      height: 72px;
    }

    .mitem.button {
      justify-content: space-around;
    }

    .deletable:hover {
      color: var(--mdc-theme-error, red);
    }

    .usage-group {
      display: flex;
      align-items: center;
      padding-left: 10px;
    }

    .side-icons {
      display: flex;
    }

    mwc-list-item[noninteractive] {
      font-weight: 400;
    }

    .column {
      display: flex;
      /* A little hacky - the fixed width columns will allow the others to grow */
      flex: 1 1 40%;
      flex-direction: column;
      justify-content: space-between;
    }

    .column-unused {
      display: flex;
      flex: 1 1 48%;
      flex-direction: column;
    }

    .conlist,
    .suplist {
      overflow: hidden;
    }

    #createNewLN {
      float: right;
    }

    .available-grouper {
      display: flex;
      justify-content: space-between;
    }

    #unusedSupervisions {
      width: 100%;
    }

    .invalid-mapping {
      color: var(--mdc-theme-error, red);
    }

    .searchField {
      display: flex;
      flex: auto;
    }

    .searchField abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    .searchField mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    .filteredList {
      width: 100%;
    }
  `;
__decorate([
    n$i({ attribute: false })
], OscdSupervision.prototype, "doc", void 0);
__decorate([
    n$i()
], OscdSupervision.prototype, "docName", void 0);
__decorate([
    n$i()
], OscdSupervision.prototype, "editCount", void 0);
__decorate([
    n$i()
], OscdSupervision.prototype, "controlType", void 0);
__decorate([
    r$4()
], OscdSupervision.prototype, "iedList", null);
__decorate([
    r$4()
], OscdSupervision.prototype, "selectedIEDs", void 0);
__decorate([
    n$i({ type: String })
], OscdSupervision.prototype, "searchUnusedSupervisions", void 0);
__decorate([
    r$4()
], OscdSupervision.prototype, "selectedIed", null);
__decorate([
    r$4()
], OscdSupervision.prototype, "selectedControl", void 0);
__decorate([
    r$4()
], OscdSupervision.prototype, "selectedSupervision", void 0);
__decorate([
    r$4()
], OscdSupervision.prototype, "newSupervision", void 0);
__decorate([
    e$b('#unusedControls')
], OscdSupervision.prototype, "selectedUnusedControlsListUI", void 0);
__decorate([
    e$b('#unusedSupervisions')
], OscdSupervision.prototype, "selectedUnusedSupervisionsListUI", void 0);
__decorate([
    r$3('.mlist.deleter')
    // TODO: Why???
    // eslint-disable-next-line no-undef
], OscdSupervision.prototype, "deleteSupervisionsListsUI", void 0);
__decorate([
    e$b('#removeUsedSupervisions')
], OscdSupervision.prototype, "removeUsedSupervisionsListUI", void 0);
__decorate([
    e$b('#unusedControls mwc-list-item[selected]')
], OscdSupervision.prototype, "selectedUnusedControlUI", void 0);
__decorate([
    e$b('#unusedSupervisions mwc-list-item[selected]')
], OscdSupervision.prototype, "selectedUnusedSupervisionUI", void 0);
__decorate([
    e$b('#scrollableArea > section > mwc-list.deleter > mwc-list-item[selected]')
], OscdSupervision.prototype, "selectedUsedSupervisionDeleteUI", void 0);
__decorate([
    e$b('#removeUsedSupervisions > mwc-list-item[selected]')
], OscdSupervision.prototype, "selectedUsedSupervisionRemoveUI", void 0);
__decorate([
    e$b('#unusedSupervisions > mwc-list-item[selected]')
], OscdSupervision.prototype, "selectedUnusedSupervisionDeleteUI", void 0);
__decorate([
    e$b('#filterUnusedSupervisionInput')
], OscdSupervision.prototype, "filterUnusedSupervisionInputUI", void 0);
__decorate([
    e$b('#unusedControls')
], OscdSupervision.prototype, "filterUnusedControlBlocksList", void 0);

export { OscdSupervision as default };
//# sourceMappingURL=oscd-supervision.js.map
