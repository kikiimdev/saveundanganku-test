import{u as Bt}from"./composables.5168b7b2.js";import{a as Pt,r as ne,b as it,w as dn,u as De,e as fn,f as at,h as pn,i as N,j as U,p as te,k as Ft,l as mn,m as he,q as gn,s as D,t as xe,v as M,x as Z,F as $e,y as ot,o as le,z as yn,c as bn}from"./entry.168bb45b.js";const vn=()=>null;function Rt(...n){var p,y,C,k,G,ce,ue;const e=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(e);let[t,r,s={}]=n;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=(p=s.server)!=null?p:!0,s.default=(y=s.default)!=null?y:vn,s.lazy=(C=s.lazy)!=null?C:!1,s.immediate=(k=s.immediate)!=null?k:!0;const i=Pt(),a=()=>i.isHydrating?i.payload.data[t]:i.static.data[t],c=()=>a()!==void 0;i._asyncData[t]||(i._asyncData[t]={data:ne((ue=(ce=a())!=null?ce:(G=s.default)==null?void 0:G.call(s))!=null?ue:null),pending:ne(!c()),error:ne(i.payload._errors[t]?it(i.payload._errors[t]):null)});const o={...i._asyncData[t]};o.refresh=o.execute=(S={})=>{if(i._asyncDataPromises[t]){if(S.dedupe===!1)return i._asyncDataPromises[t];i._asyncDataPromises[t].cancelled=!0}if(S._initial&&c())return a();o.pending.value=!0;const $=new Promise((v,X)=>{try{v(r(i))}catch(Ee){X(Ee)}}).then(v=>{if($.cancelled)return i._asyncDataPromises[t];s.transform&&(v=s.transform(v)),s.pick&&(v=wn(v,s.pick)),o.data.value=v,o.error.value=null}).catch(v=>{var X,Ee;if($.cancelled)return i._asyncDataPromises[t];o.error.value=v,o.data.value=De((Ee=(X=s.default)==null?void 0:X.call(s))!=null?Ee:null)}).finally(()=>{$.cancelled||(o.pending.value=!1,i.payload.data[t]=o.data.value,o.error.value&&(i.payload._errors[t]=it(o.error.value)),delete i._asyncDataPromises[t])});return i._asyncDataPromises[t]=$,i._asyncDataPromises[t]};const u=()=>o.refresh({_initial:!0}),d=s.server!==!1&&i.payload.serverRendered;{const S=pn();if(S&&!S._nuxtOnBeforeMountCbs){S._nuxtOnBeforeMountCbs=[];const v=S._nuxtOnBeforeMountCbs;S&&(fn(()=>{v.forEach(X=>{X()}),v.splice(0,v.length)}),at(()=>v.splice(0,v.length)))}d&&i.isHydrating&&c()?o.pending.value=!1:S&&(i.payload.serverRendered&&i.isHydrating||s.lazy)&&s.immediate?S._nuxtOnBeforeMountCbs.push(u):s.immediate&&u(),s.watch&&dn(s.watch,()=>o.refresh());const $=i.hook("app:data:refresh",v=>{if(!v||v.includes(t))return o.refresh()});S&&at($)}const l=Promise.resolve(i._asyncDataPromises[t]).then(()=>o);return Object.assign(l,o),l}function _n(...n){const e=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(e);const[t,r,s]=n;return Rt(t,r,{...s,lazy:!0},null)}function wn(n,e){const t={};for(const r of e)t[r]=n[r];return t}const Sn=n=>Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0)),q=(n,e)=>(t,r)=>(Bt(()=>n({...Sn(t),...r.attrs},r)),()=>{var s,i;return e?(i=(s=r.slots).default)==null?void 0:i.call(s):null}),J={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String};N({name:"NoScript",inheritAttrs:!1,props:{...J,title:String,body:Boolean,renderPriority:[String,Number]},setup:q((n,{slots:e})=>{var s;const t={...n},r=(((s=e.default)==null?void 0:s.call(e))||[]).filter(({children:i})=>i).map(({children:i})=>i).join("");return r&&(t.children=r),{noscript:[t]}})});N({name:"Link",inheritAttrs:!1,props:{...J,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:q(n=>({link:[n]}))});N({name:"Base",inheritAttrs:!1,props:{...J,href:String,target:String},setup:q(n=>({base:n}))});const En=N({name:"Title",inheritAttrs:!1,setup:q((n,{slots:e})=>{var r,s,i;return{title:((i=(s=(r=e.default)==null?void 0:r.call(e))==null?void 0:s[0])==null?void 0:i.children)||null}})}),In=N({name:"Meta",inheritAttrs:!1,props:{...J,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:q(n=>{const e={...n};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})});N({name:"Style",inheritAttrs:!1,props:{...J,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:q((n,{slots:e})=>{var s,i,a;const t={...n},r=(a=(i=(s=e.default)==null?void 0:s.call(e))==null?void 0:i[0])==null?void 0:a.children;return r&&(t.children=r),{style:[t]}})});const Dn=N({name:"Head",inheritAttrs:!1,setup:(n,e)=>()=>{var t,r;return(r=(t=e.slots).default)==null?void 0:r.call(t)}});N({name:"Html",inheritAttrs:!1,props:{...J,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:q(n=>({htmlAttrs:n}),!0)});N({name:"Body",inheritAttrs:!1,props:{...J,renderPriority:[String,Number]},setup:q(n=>({bodyAttrs:n}),!0)});const Tn=()=>Pt().$img,An={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:n=>["anonymous","use-credentials","",!0,!1].includes(n)},decoding:{type:String,default:void 0,validator:n=>["async","auto","sync"].includes(n)}},Cn=n=>{const e=U(()=>({provider:n.provider,preset:n.preset})),t=U(()=>({width:te(n.width),height:te(n.height),alt:n.alt,referrerpolicy:n.referrerpolicy,usemap:n.usemap,longdesc:n.longdesc,ismap:n.ismap,crossorigin:n.crossorigin===!0?"anonymous":n.crossorigin||void 0,loading:n.loading,decoding:n.decoding})),r=U(()=>({...n.modifiers,width:te(n.width),height:te(n.height),format:n.format,quality:n.quality,background:n.background,fit:n.fit}));return{options:e,attrs:t,modifiers:r}},Nn={...An,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},On=N({name:"NuxtImg",props:Nn,setup:(n,e)=>{const t=Tn(),r=Cn(n),s=ne(!1),i=U(()=>t.getSizes(n.src,{...r.options.value,sizes:n.sizes,modifiers:{...r.modifiers.value,width:te(n.width),height:te(n.height)}})),a=U(()=>{const l=r.attrs.value;return n.sizes&&(l.sizes=i.value.sizes,l.srcset=i.value.srcset),l}),c=U(()=>{let l=n.placeholder;if(l===""&&(l=!0),!l||s.value)return!1;if(typeof l=="string")return l;const p=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return t(n.src,{...r.modifiers.value,width:p[0],height:p[1],quality:p[2]||50},r.options.value)}),o=U(()=>n.sizes?i.value.src:t(n.src,r.modifiers.value,r.options.value)),u=U(()=>c.value?c.value:o.value);if(n.preload){const l=Object.values(i.value).every(p=>p);Bt({link:[{rel:"preload",as:"image",...l?{href:i.value.src,imagesizes:i.value.sizes,imagesrcset:i.value.srcset}:{href:u.value}}]})}const d=ne(null);return Ft(()=>{if(c.value){const l=new Image;l.src=o.value,l.onload=()=>{d.value.src=o.value,s.value=!0}}}),()=>mn("img",{ref:d,key:u.value,src:u.value,...a.value,...e.attrs})}}),kn=N({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:e,attrs:t}){const r=ne(!1);return Ft(()=>{r.value=!0}),s=>{var o;if(r.value)return(o=e.default)==null?void 0:o.call(e);const i=e.fallback||e.placeholder;if(i)return i();const a=s.fallback||s.placeholder||"",c=s.fallbackTag||s.placeholderTag||"span";return he(c,t,a)}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vn=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],o=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(o&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},xt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,o=s+2<n.length,u=o?n[s+2]:0,d=i>>2,l=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,y=u&63;o||(y=64,a||(p=64)),r.push(t[d],t[l],t[p],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lt(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vn(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const l=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||l==null)throw Error();const p=i<<2|c>>4;if(r.push(p),u!==64){const y=c<<4&240|u>>2;if(r.push(y),l!==64){const C=u<<6&192|l;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Bn=function(n){const e=Lt(n);return xt.encodeByteArray(e,!0)},Ae=function(n){return Bn(n).replace(/\./g,"")},Pn=function(n){try{return xt.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Fn(){try{return typeof indexedDB=="object"}catch{return!1}}function Rn(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Ln(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=()=>Ln().__FIREBASE_DEFAULTS__,$n=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mn=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pn(n[1]);return e&&JSON.parse(e)},$t=()=>{try{return xn()||$n()||Mn()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Un=n=>{var e,t;return(t=(e=$t())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jn=n=>{const e=Un(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Hn=()=>{var n;return(n=$t())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[Ae(JSON.stringify(t)),Ae(JSON.stringify(a)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="FirebaseError";class ae extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gn,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wn(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ae(s,c,r)}}function Wn(n,e){return n.replace(Kn,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kn=/\{\$([^}]+)}/g;function Ge(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ct(i)&&ct(a)){if(!Ge(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ct(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n){return n&&n._delegate?n._delegate:n}class ge{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jn(e))try{this.getOrInitializeService({instanceIdentifier:W})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=W){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=W){return this.instances.has(e)}getOptions(e=W){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yn(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=W){return this.component?this.component.multipleInstances?e:W:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yn(n){return n===W?void 0:n}function Jn(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(g||(g={}));const Zn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},er=g.INFO,tr={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},nr=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=tr[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jt{constructor(e){this.name=e,this._logLevel=er,this._logHandler=nr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const rr=(n,e)=>e.some(t=>n instanceof t);let ut,lt;function sr(){return ut||(ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ir(){return lt||(lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ht=new WeakMap,We=new WeakMap,zt=new WeakMap,Me=new WeakMap,et=new WeakMap;function ar(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(j(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ht.set(t,n)}).catch(()=>{}),et.set(e,n),e}function or(n){if(We.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});We.set(n,e)}let Ke={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return We.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zt.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return j(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cr(n){Ke=n(Ke)}function ur(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ue(this),e,...t);return zt.set(r,e.sort?e.sort():[e]),j(r)}:ir().includes(n)?function(...e){return n.apply(Ue(this),e),j(Ht.get(this))}:function(...e){return j(n.apply(Ue(this),e))}}function lr(n){return typeof n=="function"?ur(n):(n instanceof IDBTransaction&&or(n),rr(n,sr())?new Proxy(n,Ke):n)}function j(n){if(n instanceof IDBRequest)return ar(n);if(Me.has(n))return Me.get(n);const e=lr(n);return e!==n&&(Me.set(n,e),et.set(e,n)),e}const Ue=n=>et.get(n);function hr(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=j(a);return r&&a.addEventListener("upgradeneeded",o=>{r(j(a.result),o.oldVersion,o.newVersion,j(a.transaction))}),t&&a.addEventListener("blocked",()=>t()),c.then(o=>{i&&o.addEventListener("close",()=>i()),s&&o.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const dr=["get","getKey","getAll","getAllKeys","count"],fr=["put","add","delete","clear"],je=new Map;function ht(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(je.get(e))return je.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=fr.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dr.includes(t)))return;const i=async function(a,...c){const o=this.transaction(a,s?"readwrite":"readonly");let u=o.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&o.done]))[0]};return je.set(e,i),i}cr(n=>({...n,get:(e,t,r)=>ht(e,t)||n.get(e,t,r),has:(e,t)=>!!ht(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mr(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function mr(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qe="@firebase/app",dt="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new jt("@firebase/app"),gr="@firebase/app-compat",yr="@firebase/analytics-compat",br="@firebase/analytics",vr="@firebase/app-check-compat",_r="@firebase/app-check",wr="@firebase/auth",Sr="@firebase/auth-compat",Er="@firebase/database",Ir="@firebase/database-compat",Dr="@firebase/functions",Tr="@firebase/functions-compat",Ar="@firebase/installations",Cr="@firebase/installations-compat",Nr="@firebase/messaging",Or="@firebase/messaging-compat",kr="@firebase/performance",Vr="@firebase/performance-compat",Br="@firebase/remote-config",Pr="@firebase/remote-config-compat",Fr="@firebase/storage",Rr="@firebase/storage-compat",Lr="@firebase/firestore",xr="@firebase/firestore-compat",$r="firebase",Mr="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="[DEFAULT]",Ur={[Qe]:"fire-core",[gr]:"fire-core-compat",[br]:"fire-analytics",[yr]:"fire-analytics-compat",[_r]:"fire-app-check",[vr]:"fire-app-check-compat",[wr]:"fire-auth",[Sr]:"fire-auth-compat",[Er]:"fire-rtdb",[Ir]:"fire-rtdb-compat",[Dr]:"fire-fn",[Tr]:"fire-fn-compat",[Ar]:"fire-iid",[Cr]:"fire-iid-compat",[Nr]:"fire-fcm",[Or]:"fire-fcm-compat",[kr]:"fire-perf",[Vr]:"fire-perf-compat",[Br]:"fire-rc",[Pr]:"fire-rc-compat",[Fr]:"fire-gcs",[Rr]:"fire-gcs-compat",[Lr]:"fire-fst",[xr]:"fire-fst-compat","fire-js":"fire-js",[$r]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new Map,Je=new Map;function jr(n,e){try{n.container.addComponent(e)}catch(t){K.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ne(n){const e=n.name;if(Je.has(e))return K.debug(`There were multiple attempts to register component ${e}.`),!1;Je.set(e,n);for(const t of Ce.values())jr(t,n);return!0}function Hr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},H=new Mt("app","Firebase",zr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=Mr;function qt(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ye,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw H.create("bad-app-name",{appName:String(s)});if(t||(t=Hn()),!t)throw H.create("no-options");const i=Ce.get(s);if(i){if(Ge(t,i.options)&&Ge(r,i.config))return i;throw H.create("duplicate-app",{appName:s})}const a=new Xn(s);for(const o of Je.values())a.addComponent(o);const c=new qr(t,r,a);return Ce.set(s,c),c}function Wr(n=Ye){const e=Ce.get(n);if(!e&&n===Ye)return qt();if(!e)throw H.create("no-app",{appName:n});return e}function re(n,e,t){var r;let s=(r=Ur[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),K.warn(c.join(" "));return}Ne(new ge(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="firebase-heartbeat-database",Qr=1,ye="firebase-heartbeat-store";let He=null;function Gt(){return He||(He=hr(Kr,Qr,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ye)}}}).catch(n=>{throw H.create("idb-open",{originalErrorMessage:n.message})})),He}async function Yr(n){try{return(await Gt()).transaction(ye).objectStore(ye).get(Wt(n))}catch(e){if(e instanceof ae)K.warn(e.message);else{const t=H.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});K.warn(t.message)}}}async function ft(n,e){try{const r=(await Gt()).transaction(ye,"readwrite");return await r.objectStore(ye).put(e,Wt(n)),r.done}catch(t){if(t instanceof ae)K.warn(t.message);else{const r=H.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});K.warn(r.message)}}}function Wt(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=1024,Xr=30*24*60*60*1e3;class Zr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ts(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Xr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pt(),{heartbeatsToSend:t,unsentEntries:r}=es(this._heartbeatsCache.heartbeats),s=Ae(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pt(){return new Date().toISOString().substring(0,10)}function es(n,e=Jr){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),mt(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),mt(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ts{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fn()?Rn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ft(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ft(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mt(n){return Ae(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n){Ne(new ge("platform-logger",e=>new pr(e),"PRIVATE")),Ne(new ge("heartbeat",e=>new Zr(e),"PRIVATE")),re(Qe,dt,n),re(Qe,dt,"esm2017"),re("fire-js","")}ns("");var rs="firebase",ss="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re(rs,ss,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new jt("@firebase/firestore");function Oe(n,...e){if(se.logLevel<=g.DEBUG){const t=e.map(nt);se.debug(`Firestore (${oe}): ${n}`,...t)}}function tt(n,...e){if(se.logLevel<=g.ERROR){const t=e.map(nt);se.error(`Firestore (${oe}): ${n}`,...t)}}function Kt(n,...e){if(se.logLevel<=g.WARN){const t=e.map(nt);se.warn(`Firestore (${oe}): ${n}`,...t)}}function nt(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const e=`FIRESTORE (${oe}) INTERNAL ASSERTION FAILED: `+n;throw tt(e),new Error(e)}function A(n,e){n||O()}function Pe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="ok",is="cancelled",de="unknown",m="invalid-argument",as="deadline-exceeded",os="not-found",cs="permission-denied",Xe="unauthenticated",us="resource-exhausted",ie="failed-precondition",ls="aborted",hs="out-of-range",Qt="unimplemented",ds="internal",fs="unavailable";class h extends ae{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ps{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(T.UNAUTHENTICATED))}shutdown(){}}class ms{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gs{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(A(typeof e.accessToken=="string"),new Yt(e.accessToken,new T(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ys{constructor(e,t,r,s){this.t=e,this.i=t,this.o=r,this.u=s,this.type="FirstParty",this.user=T.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(A(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class bs{constructor(e,t,r,s){this.t=e,this.i=t,this.o=r,this.u=s}getToken(){return Promise.resolve(new ys(this.t,this.i,this.o,this.u))}start(e,t){e.enqueueRetryable(()=>t(T.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _s{constructor(e){this.m=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(A(typeof e.token=="string"),new vs(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,r,s,i,a,c,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.useFetchStreams=o}}class be{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new be("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof be&&e.projectId===this.projectId&&e.database===this.database}}class ve{constructor(e,t,r){t===void 0?t=0:t>e.length&&O(),r===void 0?r=e.length-t:r>e.length-t&&O(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ve.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ve?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class w extends ve{construct(e,t,r){return new w(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new h(m,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new w(t)}static emptyPath(){return new w([])}}const Ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends ve{construct(e,t,r){return new B(e,t,r)}static isValidIdentifier(e){return Ss.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new B(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new h(m,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new h(m,"Path has trailing escape character: "+e);const o=e[s+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new h(m,"Path has invalid escape sequence: "+e);r+=o,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new h(m,"Unterminated ` in path: "+e);return new B(t)}static emptyPath(){return new B([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(w.fromString(e))}static fromName(e){return new I(w.fromString(e).popFirst(5))}static empty(){return new I(w.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&w.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return w.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new w(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n,e,t){if(!t)throw new h(m,`Function ${n}() cannot be called with an empty ${e}.`)}function yt(n){if(!I.isDocumentKey(n))throw new h(m,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bt(n){if(I.isDocumentKey(n))throw new h(m,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Es(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new h(m,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Es(n);throw new h(m,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){return n==null}function vt(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,f;function wt(n){if(n===void 0)return tt("RPC_ERROR","HTTP error has no status"),de;switch(n){case 200:return gt;case 400:return ie;case 401:return Xe;case 403:return cs;case 404:return os;case 409:return ls;case 416:return hs;case 429:return us;case 499:return is;case 500:return de;case 501:return Qt;case 503:return fs;case 504:return as;default:return n>=200&&n<300?gt:n>=400&&n<500?ie:n>=500&&n<600?ds:de}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(f=_t||(_t={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";class Ts extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.p=t+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,t,r,s,i){const a=this.T(e,t);Oe("RestConnection","Sending: ",a,r);const c={};return this.A(c,s,i),this.R(e,a,c,r).then(o=>(Oe("RestConnection","Received: ",o),o),o=>{throw Kt("RestConnection",`${e} failed with error: `,o,"url: ",a,"request:",r),o})}P(e,t,r,s,i,a){return this.I(e,t,r,s,i)}A(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+oe,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,t){const r=Ds[e];return`${this.p}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.V=t}$(e,t){throw new Error("Not supported by FetchConnection")}async R(e,t,r,s){var i;const a=JSON.stringify(s);let c;try{c=await this.V(t,{method:"POST",headers:r,body:a})}catch(o){const u=o;throw new h(wt(u.status),"Request failed with error: "+u.statusText)}if(!c.ok){let o=await c.json();Array.isArray(o)&&(o=o[0]);const u=(i=o==null?void 0:o.error)===null||i===void 0?void 0:i.message;throw new h(wt(c.status),`Request failed with error: ${u!=null?u:c.statusText}`)}return c.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=As(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function _(n,e){return n<e?-1:n>e?1:0}function Ns(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function st(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new x(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new x(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}x.EMPTY_BYTE_STRING=new x("");const Os=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Q(n){if(A(!!n),typeof n=="string"){let e=0;const t=Os.exec(n);if(A(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:b(n.seconds),nanos:b(n.nanos)}}function b(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?x.fromBase64String(n):x.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new h(m,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new h(m,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new h(m,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new h(m,"Timestamp seconds out of range: "+e)}static now(){return L.fromMillis(Date.now())}static fromDate(e){return L.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new L(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_(this.nanoseconds,e.nanoseconds):_(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Zt(n){const e=n.mapValue.fields.__previous_value__;return Xt(e)?Zt(e):e}function we(n){const e=Q(n.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie={fields:{__type__:{stringValue:"__max__"}}};function Y(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xt(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:O()}function ke(n,e){if(n===e)return!0;const t=Y(n);if(t!==Y(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return we(n).isEqual(we(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Q(r.timestampValue),a=Q(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return _e(r.bytesValue).isEqual(_e(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return b(r.geoPointValue.latitude)===b(s.geoPointValue.latitude)&&b(r.geoPointValue.longitude)===b(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return b(r.integerValue)===b(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=b(r.doubleValue),a=b(s.doubleValue);return i===a?vt(i)===vt(a):isNaN(i)&&isNaN(a)}return!1}(n,e);case 9:return Ns(n.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(r,s){const i=r.mapValue.fields||{},a=s.mapValue.fields||{};if(St(i)!==St(a))return!1;for(const c in i)if(i.hasOwnProperty(c)&&(a[c]===void 0||!ke(i[c],a[c])))return!1;return!0}(n,e);default:return O()}}function Se(n,e){return(n.values||[]).find(t=>ke(t,e))!==void 0}function Ve(n,e){if(n===e)return 0;const t=Y(n),r=Y(e);if(t!==r)return _(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return _(n.booleanValue,e.booleanValue);case 2:return function(s,i){const a=b(s.integerValue||s.doubleValue),c=b(i.integerValue||i.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Et(n.timestampValue,e.timestampValue);case 4:return Et(we(n),we(e));case 5:return _(n.stringValue,e.stringValue);case 6:return function(s,i){const a=_e(s),c=_e(i);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),c=i.split("/");for(let o=0;o<a.length&&o<c.length;o++){const u=_(a[o],c[o]);if(u!==0)return u}return _(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const a=_(b(s.latitude),b(i.latitude));return a!==0?a:_(b(s.longitude),b(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const a=s.values||[],c=i.values||[];for(let o=0;o<a.length&&o<c.length;++o){const u=Ve(a[o],c[o]);if(u)return u}return _(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ie&&i===Ie)return 0;if(s===Ie)return 1;if(i===Ie)return-1;const a=s.fields||{},c=Object.keys(a),o=i.fields||{},u=Object.keys(o);c.sort(),u.sort();for(let d=0;d<c.length&&d<u.length;++d){const l=_(c[d],u[d]);if(l!==0)return l;const p=Ve(a[c[d]],o[u[d]]);if(p!==0)return p}return _(c.length,u.length)}(n.mapValue,e.mapValue);default:throw O()}}function Et(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return _(n,e);const t=Q(n),r=Q(e),s=_(t.seconds,r.seconds);return s!==0?s:_(t.nanos,r.nanos)}function en(n){return!!n&&"arrayValue"in n}function It(n){return!!n&&"nullValue"in n}function Dt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ze(n){return!!n&&"mapValue"in n}function fe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return st(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=fe(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fe(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Tt{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{}class R extends tn{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ks(e,t,r):t==="array-contains"?new Ps(e,r):t==="in"?new Fs(e,r):t==="not-in"?new Rs(e,r):t==="array-contains-any"?new Ls(e,r):new R(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Vs(e,r):new Bs(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ve(t,this.value)):t!==null&&Y(this.value)===Y(t)&&this.matchesComparison(Ve(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fe extends tn{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new Fe(e,t)}matches(e){return this.op==="and"?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(t=>t.isInequality());return e!==null?e.field:null}F(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class ks extends R{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vs extends R{constructor(e,t){super(e,"in",t),this.keys=nn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Bs extends R{constructor(e,t){super(e,"not-in",t),this.keys=nn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nn(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class Ps extends R{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return en(t)&&Se(t.arrayValue,this.value)}}class Fs extends R{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Se(this.value.arrayValue,t)}}class Rs extends R{constructor(e,t){super(e,"not-in",t)}matches(e){if(Se(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Se(this.value.arrayValue,t)}}class Ls extends R{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!en(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Se(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.timestamp=e}static fromTimestamp(e){return new E(e)}static min(){return new E(new L(0,0))}static max(){return new E(new L(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.value=e}static empty(){return new P({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ze(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fe(t)}setAll(e){let t=B.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const o=this.getFieldsMap(t);this.applyChanges(o,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=fe(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ze(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){st(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new P(fe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new V(e,0,E.min(),E.min(),E.min(),P.empty(),0)}static newFoundDocument(e,t,r,s){return new V(e,1,t,E.min(),r,s,0)}static newNoDocument(e,t){return new V(e,2,t,E.min(),E.min(),P.empty(),0)}static newUnknownDocument(e,t){return new V(e,3,t,E.min(),E.min(),P.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(E.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=P.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=P.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=E.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof V&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new V(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.S=null}}function At(n,e=null,t=[],r=[],s=null,i=null,a=null){return new xs(n,e,t,r,s,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=o,this.q=null,this.O=null,this.startAt,this.endAt}}function Ms(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Us(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Ct(n){const e=Pe(n);if(e.q===null){e.q=[];const t=Us(e),r=Ms(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new Te(t)),e.q.push(new Te(B.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Te(B.keyField(),i))}}}return e.q}function js(n){const e=Pe(n);if(!e.O)if(e.limitType==="F")e.O=At(e.path,e.collectionGroup,Ct(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ct(e)){const a=i.dir==="desc"?"asc":"desc";t.push(new Te(i.field,a))}const r=e.endAt?new Tt(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Tt(e.startAt.position,e.startAt.inclusive):null;e.O=At(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.O}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zs=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qs=(()=>({and:"AND",or:"OR"}))();class Gs{constructor(e,t){this.databaseId=e,this.k=t}}function pe(n){return A(!!n),E.fromTimestamp(function(e){const t=Q(e);return new L(t.seconds,t.nanos)}(n))}function rn(n,e){return function(t){return new w(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Ws(n,e){return rn(n.databaseId,e.path)}function Ze(n,e){const t=function(s){const i=w.fromString(s);return A(an(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new h(m,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new h(m,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I((A((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Nt(n,e){return rn(n.databaseId,e)}function Ks(n){return new w(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qs(n,e){return"found"in e?function(t,r){A(!!r.found),r.found.name,r.found.updateTime;const s=Ze(t,r.found.name),i=pe(r.found.updateTime),a=r.found.createTime?pe(r.found.createTime):E.min(),c=new P({mapValue:{fields:r.found.fields}});return V.newFoundDocument(s,i,a,c)}(n,e):"missing"in e?function(t,r){A(!!r.missing),A(!!r.readTime);const s=Ze(t,r.missing),i=pe(r.readTime);return V.newNoDocument(s,i)}(n,e):O()}function Ys(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Nt(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Nt(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(o){if(o.length!==0)return sn(Fe.create(o,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(o){if(o.length!==0)return o.map(u=>function(d){return{field:ee(d.field),direction:Js(d.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const a=function(o,u){return o.k||Is(u)?u:{value:u}}(n,e.limit);var c;return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(t.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),t}function Js(n){return Hs[n]}function Xs(n){return zs[n]}function Zs(n){return qs[n]}function ee(n){return{fieldPath:n.canonicalString()}}function sn(n){return n instanceof R?function(e){if(e.op==="=="){if(Dt(e.value))return{unaryFilter:{field:ee(e.field),op:"IS_NAN"}};if(It(e.value))return{unaryFilter:{field:ee(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dt(e.value))return{unaryFilter:{field:ee(e.field),op:"IS_NOT_NAN"}};if(It(e.value))return{unaryFilter:{field:ee(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ee(e.field),op:Xs(e.op),value:e.value}}}(n):n instanceof Fe?function(e){const t=e.getFilters().map(r=>sn(r));return t.length===1?t[0]:{compositeFilter:{op:Zs(e.op),filters:t}}}(n):O()}function an(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){return new Gs(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.C=s,this.Z=!1}tt(){if(this.Z)throw new h(ie,"The client has already been terminated.")}I(e,t,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.I(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Xe&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new h(de,s.toString())})}P(e,t,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.P(e,t,r,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Xe&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new h(de,i.toString())})}terminate(){this.Z=!0}}async function ni(n,e){const t=Pe(n),r=Ks(t.C)+"/documents",s={documents:e.map(o=>Ws(t.C,o))},i=await t.P("BatchGetDocuments",r,s,e.length),a=new Map;i.forEach(o=>{const u=Qs(t.C,o);a.set(u.key.toString(),u)});const c=[];return e.forEach(o=>{const u=a.get(o.toString());A(!!u),c.push(u)}),c}async function ri(n,e){const t=Pe(n),r=Ys(t.C,js(e));return(await t.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,a,c){const o=Ze(i,a.name),u=pe(a.updateTime),d=a.createTime?pe(a.createTime):E.min(),l=new P({mapValue:{fields:a.fields}}),p=V.newFoundDocument(o,u,d,l);return c&&p.setHasCommittedMutations(),c?p.setHasCommittedMutations():p}(t.C,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Map;function on(n){if(n._terminated)throw new h(ie,"The client has already been terminated.");if(!me.has(n)){Oe("ComponentProvider","Initializing Datastore");const i=function(o){return new Ts(o,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new ws(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),a=ei(n._databaseId),c=function(o,u,d,l){return new ti(o,u,d,l)}(n._authCredentials,n._appCheckCredentials,i,a);me.set(n,c)}var e,t,r,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return me.get(n)}class Ot{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new h(m,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new h(m,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,a){if(s===!0&&a===!0)throw new h(m,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ot({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new h(ie,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new h(ie,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ot(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new ps;switch(t.type){case"gapi":const r=t.client;return new bs(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new h(m,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=me.get(e);t&&(Oe("ComponentProvider","Removing Datastore"),me.delete(e),t.terminate())}(this),Promise.resolve()}}function si(n,e){const t=typeof n=="object"?n:Wr(),r=typeof n=="string"?n:e||"(default)",s=Hr(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=jn("firestore");i&&ii(s,...i)}return s}function ii(n,e,t,r={}){var s;const i=(n=rt(n,Re))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Kt("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=T.MOCK_USER;else{a=qn(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new h(m,"mockUserToken must contain 'sub' or 'user_id' field!");c=new T(o)}n._authCredentials=new ms(new Yt(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new z(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new F(this.firestore,e,this._key)}}class Le{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Le(this.firestore,e,this._query)}}class z extends Le{constructor(e,t,r){super(e,t,new $s(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new F(this.firestore,null,new I(e))}withConverter(e){return new z(this.firestore,e,this._path)}}function ai(n,e,...t){if(n=Ut(n),Jt("collection","path",e),n instanceof Re){const r=w.fromString(e,...t);return bt(r),new z(n,null,r)}{if(!(n instanceof F||n instanceof z))throw new h(m,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(w.fromString(e,...t));return bt(r),new z(n.firestore,null,r)}}function oi(n,e,...t){if(n=Ut(n),arguments.length===1&&(e=Cs.N()),Jt("doc","path",e),n instanceof Re){const r=w.fromString(e,...t);return yt(r),new F(n,null,new I(r))}{if(!(n instanceof F||n instanceof z))throw new h(m,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(w.fromString(e,...t));return yt(r),new F(n.firestore,n instanceof z?n.converter:null,new I(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(x.fromBase64String(e))}catch(t){throw new h(m,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(x.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new h(m,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new h(m,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new h(m,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _(this._lat,e._lat)||_(this._long,e._long)}}const ui=new RegExp("[~\\*/\\[\\]]");function li(n,e,t){if(e.search(ui)>=0)throw kt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new cn(...e.split("."))._internalPath}catch{throw kt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function kt(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let o="";return(i||a)&&(o+=" (found",i&&(o+=` in field ${r}`),a&&(o+=` in document ${s}`),o+=")"),new h(m,c+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new F(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ln(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(di("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ln extends un{data(){return super.data()}}class hi{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function di(n,e){return typeof e=="string"?li(n,e):e instanceof cn?e._internalPath:e._delegate._internalPath}class hn extends class{convertValue(e,t="none"){switch(Y(e)){case 0:return null;case 1:return e.booleanValue;case 2:return b(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_e(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){const r={};return st(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new ci(b(e.latitude),b(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Zt(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(we(e));default:return null}}convertTimestamp(e){const t=Q(e);return new L(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=w.fromString(e);A(an(r));const s=new be(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(t)||tt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new F(this.firestore,null,t)}}function fi(n){const e=on((n=rt(n,F)).firestore),t=new hn(n.firestore);return ni(e,[n._key]).then(r=>{A(r.length===1);const s=r[0];return new un(n.firestore,t,n._key,s.isFoundDocument()?s:null,n.converter)})}function pi(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new h(Qt,"limitToLast() queries require specifying at least one orderBy() clause")})((n=rt(n,Le))._query);const e=on(n.firestore),t=new hn(n.firestore);return ri(e,n._query).then(r=>{const s=r.map(i=>new ln(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new hi(n,s)})}(function(n){oe=n})(`${Gr}_lite`),Ne(new ge("firestore/lite",(n,{instanceIdentifier:e,options:t})=>{const r=n.getProvider("app").getImmediate(),s=new Re(new gs(n.getProvider("auth-internal")),new _s(n.getProvider("app-check-internal")),function(i,a){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new h(m,'"projectId" not provided in firebase.initializeApp.');return new be(i.options.projectId,a)}(r,e),r);return t&&s._setSettings(t),s},"PUBLIC").setMultipleInstances(!0)),re("firestore-lite","3.8.0",""),re("firestore-lite","3.8.0","esm2017");const mi={apiKey:"AIzaSyBecR6k-IXOr47emLGmm7yHQXO0O6rNWH8",authDomain:"saveundanganku.firebaseapp.com",databaseURL:"https://saveundanganku.firebaseio.com",projectId:"saveundanganku",storageBucket:"saveundanganku.appspot.com",messagingSenderId:"736816236997",appId:"1:736816236997:web:c3cefef977159aeae663ac",measurementId:"G-XLS332VT8W"},gi=qt(mi),Vt=si(gi),qe={findMany:async n=>{const e=ai(Vt,n);return(await pi(e)).docs.map(s=>({id:s.id,...s.data()}))},findUnique:async n=>{const e=oi(Vt,n),t=await fi(e);return{id:t.id,...t.data()}}},yi={style:{display:"block"}},bi={style:{display:"block"}},vi=M("h2",null,"Ucapan-ucapan",-1),_i={style:{margin:"0"}},Ei=N({__name:"[slug]",setup(n){const e=gn(),{slug:t}=e.params,r=async()=>{const d=await qe.findUnique(`urls/${t}`);return await qe.findUnique(`invitations/${d==null?void 0:d.invitationId}`)},{data:s}=Rt("data",()=>r()),{data:i}=_n("comments",()=>{var d;return qe.findMany(`invitations/${(d=s.value)==null?void 0:d.id}/comments`)},{watch:[s]});function a(){return"https://saveundanganku-test.vercel.app/"}function c(){var p,y,C,k;const d=(y=(p=s.value)==null?void 0:p.groomNickName)!=null?y:"",l=(k=(C=s.value)==null?void 0:C.brideNickName)!=null?k:"";return`${d} & ${l} | SaveUndanganku`}function o(){var y,C,k,G;const d=(C=(y=s.value)==null?void 0:y.groomNickName)!=null?C:"",l=(G=(k=s.value)==null?void 0:k.brideNickName)!=null?G:"";return`Undangan digital pernikahan ${d} & ${l}`}function u(){var l,p;return(p=(l=s.value)==null?void 0:l.backgroundImage)!=null?p:""}return(d,l)=>{var ce,ue;const p=En,y=In,C=Dn,k=On,G=kn;return le(),he($e,null,[D(C,null,{default:xe(()=>[D(p,null,{default:xe(()=>[yn(Z(c()),1)]),_:1}),D(y,{name:"description",content:o()},null,8,["content"]),D(y,{property:"og:type",content:"website"}),D(y,{property:"og:url",content:a()},null,8,["content"]),D(y,{property:"og:title",content:c()},null,8,["content"]),D(y,{property:"og:description",content:o()},null,8,["content"]),D(y,{property:"og:image",content:u()},null,8,["content"]),D(y,{property:"twitter:card",content:"summary_large_image"}),D(y,{property:"twitter:url",content:a()},null,8,["content"]),D(y,{property:"twitter:title",content:c()},null,8,["content"]),D(y,{property:"twitter:description",content:o()},null,8,["content"]),D(y,{property:"twitter:image",content:u()},null,8,["content"])]),_:1}),M("h1",null,Z(De(t)),1),M("h2",null,Z(c()),1),M("h3",null,Z(o()),1),M("div",yi,[(le(!0),he($e,null,ot((ue=(ce=De(s))==null?void 0:ce.galleryImages)!=null?ue:[],(S,$)=>(le(),bn(k,{key:$,src:S,format:"webp",width:"600px"},null,8,["src"]))),128))]),D(G,null,{default:xe(()=>[M("div",bi,[vi,(le(!0),he($e,null,ot(De(i),S=>(le(),he("div",{key:S.id,style:{display:"block","margin-bottom":"12px"}},[M("strong",null,Z(S.displayName),1),M("p",_i,Z(S.text),1)]))),128))])]),_:1})],64)}}});export{Ei as default};
