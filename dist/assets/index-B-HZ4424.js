function ZE(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function eT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nh={exports:{}},za={},Ph={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function tT(){if(ny)return Ce;ny=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function A(V){return V===null||typeof V!="object"?null:(V=I&&V[I]||V["@@iterator"],typeof V=="function"?V:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,$={};function b(V,K,he){this.props=V,this.context=K,this.refs=$,this.updater=he||O}b.prototype.isReactComponent={},b.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},b.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function q(){}q.prototype=b.prototype;function ee(V,K,he){this.props=V,this.context=K,this.refs=$,this.updater=he||O}var ie=ee.prototype=new q;ie.constructor=ee,W(ie,b.prototype),ie.isPureReactComponent=!0;var ue=Array.isArray,le=Object.prototype.hasOwnProperty,ge={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function x(V,K,he){var Ie,xe={},ke=null,je=null;if(K!=null)for(Ie in K.ref!==void 0&&(je=K.ref),K.key!==void 0&&(ke=""+K.key),K)le.call(K,Ie)&&!N.hasOwnProperty(Ie)&&(xe[Ie]=K[Ie]);var Fe=arguments.length-2;if(Fe===1)xe.children=he;else if(1<Fe){for(var $e=Array(Fe),Et=0;Et<Fe;Et++)$e[Et]=arguments[Et+2];xe.children=$e}if(V&&V.defaultProps)for(Ie in Fe=V.defaultProps,Fe)xe[Ie]===void 0&&(xe[Ie]=Fe[Ie]);return{$$typeof:n,type:V,key:ke,ref:je,props:xe,_owner:ge.current}}function k(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function M(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(he){return K[he]})}var L=/\/+/g;function C(V,K){return typeof V=="object"&&V!==null&&V.key!=null?M(""+V.key):K.toString(36)}function Ye(V,K,he,Ie,xe){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var je=!1;if(V===null)je=!0;else switch(ke){case"string":case"number":je=!0;break;case"object":switch(V.$$typeof){case n:case e:je=!0}}if(je)return je=V,xe=xe(je),V=Ie===""?"."+C(je,0):Ie,ue(xe)?(he="",V!=null&&(he=V.replace(L,"$&/")+"/"),Ye(xe,K,he,"",function(Et){return Et})):xe!=null&&(P(xe)&&(xe=k(xe,he+(!xe.key||je&&je.key===xe.key?"":(""+xe.key).replace(L,"$&/")+"/")+V)),K.push(xe)),1;if(je=0,Ie=Ie===""?".":Ie+":",ue(V))for(var Fe=0;Fe<V.length;Fe++){ke=V[Fe];var $e=Ie+C(ke,Fe);je+=Ye(ke,K,he,$e,xe)}else if($e=A(V),typeof $e=="function")for(V=$e.call(V),Fe=0;!(ke=V.next()).done;)ke=ke.value,$e=Ie+C(ke,Fe++),je+=Ye(ke,K,he,$e,xe);else if(ke==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return je}function pt(V,K,he){if(V==null)return V;var Ie=[],xe=0;return Ye(V,Ie,"","",function(ke){return K.call(he,ke,xe++)}),Ie}function mt(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(he){(V._status===0||V._status===-1)&&(V._status=1,V._result=he)},function(he){(V._status===0||V._status===-1)&&(V._status=2,V._result=he)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var Le={current:null},B={transition:null},re={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:B,ReactCurrentOwner:ge};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:pt,forEach:function(V,K,he){pt(V,function(){K.apply(this,arguments)},he)},count:function(V){var K=0;return pt(V,function(){K++}),K},toArray:function(V){return pt(V,function(K){return K})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=b,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ee,Ce.StrictMode=s,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Ce.act=te,Ce.cloneElement=function(V,K,he){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=W({},V.props),xe=V.key,ke=V.ref,je=V._owner;if(K!=null){if(K.ref!==void 0&&(ke=K.ref,je=ge.current),K.key!==void 0&&(xe=""+K.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for($e in K)le.call(K,$e)&&!N.hasOwnProperty($e)&&(Ie[$e]=K[$e]===void 0&&Fe!==void 0?Fe[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Ie.children=he;else if(1<$e){Fe=Array($e);for(var Et=0;Et<$e;Et++)Fe[Et]=arguments[Et+2];Ie.children=Fe}return{$$typeof:n,type:V.type,key:xe,ref:ke,props:Ie,_owner:je}},Ce.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=x,Ce.createFactory=function(V){var K=x.bind(null,V);return K.type=V,K},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:f,render:V}},Ce.isValidElement=P,Ce.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:mt}},Ce.memo=function(V,K){return{$$typeof:v,type:V,compare:K===void 0?null:K}},Ce.startTransition=function(V){var K=B.transition;B.transition={};try{V()}finally{B.transition=K}},Ce.unstable_act=te,Ce.useCallback=function(V,K){return Le.current.useCallback(V,K)},Ce.useContext=function(V){return Le.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return Le.current.useDeferredValue(V)},Ce.useEffect=function(V,K){return Le.current.useEffect(V,K)},Ce.useId=function(){return Le.current.useId()},Ce.useImperativeHandle=function(V,K,he){return Le.current.useImperativeHandle(V,K,he)},Ce.useInsertionEffect=function(V,K){return Le.current.useInsertionEffect(V,K)},Ce.useLayoutEffect=function(V,K){return Le.current.useLayoutEffect(V,K)},Ce.useMemo=function(V,K){return Le.current.useMemo(V,K)},Ce.useReducer=function(V,K,he){return Le.current.useReducer(V,K,he)},Ce.useRef=function(V){return Le.current.useRef(V)},Ce.useState=function(V){return Le.current.useState(V)},Ce.useSyncExternalStore=function(V,K,he){return Le.current.useSyncExternalStore(V,K,he)},Ce.useTransition=function(){return Le.current.useTransition()},Ce.version="18.3.1",Ce}var ry;function Lf(){return ry||(ry=1,Ph.exports=tT()),Ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function nT(){if(sy)return za;sy=1;var n=Lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,v){var w,I={},A=null,O=null;v!==void 0&&(A=""+v),p.key!==void 0&&(A=""+p.key),p.ref!==void 0&&(O=p.ref);for(w in p)s.call(p,w)&&!l.hasOwnProperty(w)&&(I[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)I[w]===void 0&&(I[w]=p[w]);return{$$typeof:e,type:f,key:A,ref:O,props:I,_owner:o.current}}return za.Fragment=t,za.jsx=d,za.jsxs=d,za}var iy;function rT(){return iy||(iy=1,Nh.exports=nT()),Nh.exports}var y=rT(),Q=Lf();const sT=eT(Q),iT=ZE({__proto__:null,default:sT},[Q]);var Gu={},bh={exports:{}},nn={},Dh={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function oT(){return oy||(oy=1,function(n){function e(B,re){var te=B.length;B.push(re);e:for(;0<te;){var V=te-1>>>1,K=B[V];if(0<o(K,re))B[V]=re,B[te]=K,te=V;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var re=B[0],te=B.pop();if(te!==re){B[0]=te;e:for(var V=0,K=B.length,he=K>>>1;V<he;){var Ie=2*(V+1)-1,xe=B[Ie],ke=Ie+1,je=B[ke];if(0>o(xe,te))ke<K&&0>o(je,xe)?(B[V]=je,B[ke]=te,V=ke):(B[V]=xe,B[Ie]=te,V=Ie);else if(ke<K&&0>o(je,te))B[V]=je,B[ke]=te,V=ke;else break e}}return re}function o(B,re){var te=B.sortIndex-re.sortIndex;return te!==0?te:B.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();n.unstable_now=function(){return d.now()-f}}var p=[],v=[],w=1,I=null,A=3,O=!1,W=!1,$=!1,b=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(B){for(var re=t(v);re!==null;){if(re.callback===null)s(v);else if(re.startTime<=B)s(v),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(v)}}function ue(B){if($=!1,ie(B),!W)if(t(p)!==null)W=!0,mt(le);else{var re=t(v);re!==null&&Le(ue,re.startTime-B)}}function le(B,re){W=!1,$&&($=!1,q(x),x=-1),O=!0;var te=A;try{for(ie(re),I=t(p);I!==null&&(!(I.expirationTime>re)||B&&!M());){var V=I.callback;if(typeof V=="function"){I.callback=null,A=I.priorityLevel;var K=V(I.expirationTime<=re);re=n.unstable_now(),typeof K=="function"?I.callback=K:I===t(p)&&s(p),ie(re)}else s(p);I=t(p)}if(I!==null)var he=!0;else{var Ie=t(v);Ie!==null&&Le(ue,Ie.startTime-re),he=!1}return he}finally{I=null,A=te,O=!1}}var ge=!1,N=null,x=-1,k=5,P=-1;function M(){return!(n.unstable_now()-P<k)}function L(){if(N!==null){var B=n.unstable_now();P=B;var re=!0;try{re=N(!0,B)}finally{re?C():(ge=!1,N=null)}}else ge=!1}var C;if(typeof ee=="function")C=function(){ee(L)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,pt=Ye.port2;Ye.port1.onmessage=L,C=function(){pt.postMessage(null)}}else C=function(){b(L,0)};function mt(B){N=B,ge||(ge=!0,C())}function Le(B,re){x=b(function(){B(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){W||O||(W=!0,mt(le))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(B){switch(A){case 1:case 2:case 3:var re=3;break;default:re=A}var te=A;A=re;try{return B()}finally{A=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,re){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=A;A=B;try{return re()}finally{A=te}},n.unstable_scheduleCallback=function(B,re,te){var V=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,B){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=te+K,B={id:w++,callback:re,priorityLevel:B,startTime:te,expirationTime:K,sortIndex:-1},te>V?(B.sortIndex=te,e(v,B),t(p)===null&&B===t(v)&&($?(q(x),x=-1):$=!0,Le(ue,te-V))):(B.sortIndex=K,e(p,B),W||O||(W=!0,mt(le))),B},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(B){var re=A;return function(){var te=A;A=re;try{return B.apply(this,arguments)}finally{A=te}}}}(Oh)),Oh}var ay;function aT(){return ay||(ay=1,Dh.exports=oT()),Dh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function lT(){if(ly)return nn;ly=1;var n=Lf(),e=aT();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){d(r,i),d(r+"Capture",i)}function d(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function A(r){return p.call(I,r)?!0:p.call(w,r)?!1:v.test(r)?I[r]=!0:(w[r]=!0,!1)}function O(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,i,a,c){if(i===null||typeof i>"u"||O(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(r,i,a,c,h,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];b[i]=new $(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function ee(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(q,ee);b[i]=new $(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(q,ee);b[i]=new $(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(q,ee);b[i]=new $(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function ie(r,i,a,c){var h=b.hasOwnProperty(i)?b[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,a,h,c)&&(a=null),c||h===null?A(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?r.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var ue=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),ge=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),M=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),pt=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),B=Symbol.iterator;function re(r){return r===null||typeof r!="object"?null:(r=B&&r[B]||r["@@iterator"],typeof r=="function"?r:null)}var te=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+r}var he=!1;function Ie(r,i){if(!r||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(r,[],i)}else{try{i.call()}catch(z){c=z}r.call(i.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var h=z.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,S=g.length-1;1<=E&&0<=S&&h[E]!==g[S];)S--;for(;1<=E&&0<=S;E--,S--)if(h[E]!==g[S]){if(E!==1||S!==1)do if(E--,S--,0>S||h[E]!==g[S]){var R=`
`+h[E].replace(" at new "," at ");return r.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",r.displayName)),R}while(1<=E&&0<=S);break}}}finally{he=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function xe(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Ie(r.type,!1),r;case 11:return r=Ie(r.type.render,!1),r;case 1:return r=Ie(r.type,!0),r;default:return""}}function ke(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case ge:return"Portal";case k:return"Profiler";case x:return"StrictMode";case C:return"Suspense";case Ye:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case M:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case L:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case pt:return i=r.displayName||null,i!==null?i:ke(r.type)||"Memo";case mt:i=r._payload,r=r._init;try{return ke(r(i))}catch{}}return null}function je(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(i);case 8:return i===x?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(r){var i=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function pr(r){r._valueTracker||(r._valueTracker=Et(r))}function Ri(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function Hr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ls(r,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ni(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Go(r,i){i=i.checked,i!=null&&ie(r,"checked",i,!1)}function Qo(r,i){Go(r,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?Pi(r,i.type,a):i.hasOwnProperty("defaultValue")&&Pi(r,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Dl(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Pi(r,i,a){(i!=="number"||Hr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,i,a,c){if(r=r.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=i.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,c&&(r[h].defaultSelected=!0);return}i!==null||r[h].disabled||(i=r[h])}i!==null&&(i.selected=!0)}}function Yo(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function bi(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Fe(a)}}function Di(r,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Jo(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function gt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yt(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?gt(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,Xo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,h)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Kr(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fs=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(r){Fs.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),js[i]=js[r]})});function Zo(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||js.hasOwnProperty(r)&&js[r]?(""+i).trim():i+"px"}function ea(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=Zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,h):r[a]=h}}var ta=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(r,i){if(i){if(ta[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ra(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Us=null;function Oi(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Vi=null,mn=null,Hn=null;function Mi(r){if(r=ka(r)){if(typeof Vi!="function")throw Error(t(280));var i=r.stateNode;i&&(i=uu(i),Vi(r.stateNode,r.type,i))}}function Kn(r){mn?Hn?Hn.push(r):Hn=[r]:mn=r}function sa(){if(mn){var r=mn,i=Hn;if(Hn=mn=null,Mi(r),i)for(r=0;r<i.length;r++)Mi(i[r])}}function Bs(r,i){return r(i)}function ia(){}var vr=!1;function oa(r,i,a){if(vr)return r(i,a);vr=!0;try{return Bs(r,i,a)}finally{vr=!1,(mn!==null||Hn!==null)&&(ia(),sa())}}function st(r,i){var a=r.stateNode;if(a===null)return null;var c=uu(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Li=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){Li=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Li=!1}function zs(r,i,a,c,h,g,E,S,R){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(J){this.onError(J)}}var $s=!1,ji=null,kn=!1,aa=null,sd={onError:function(r){$s=!0,ji=r}};function Fi(r,i,a,c,h,g,E,S,R){$s=!1,ji=null,zs.apply(sd,arguments)}function Ol(r,i,a,c,h,g,E,S,R){if(Fi.apply(this,arguments),$s){if($s){var z=ji;$s=!1,ji=null}else throw Error(t(198));kn||(kn=!0,aa=z)}}function Cn(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function qs(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Rn(r){if(Cn(r)!==r)throw Error(t(188))}function Vl(r){var i=r.alternate;if(!i){if(i=Cn(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Rn(h),r;if(g===c)return Rn(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var E=!1,S=h.child;S;){if(S===a){E=!0,a=h,c=g;break}if(S===c){E=!0,c=h,a=g;break}S=S.sibling}if(!E){for(S=g.child;S;){if(S===a){E=!0,a=g,c=h;break}if(S===c){E=!0,c=g,a=h;break}S=S.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function la(r){return r=Vl(r),r!==null?Ui(r):null}function Ui(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Ui(r);if(i!==null)return i;r=r.sibling}return null}var Bi=e.unstable_scheduleCallback,ua=e.unstable_cancelCallback,Ml=e.unstable_shouldYield,id=e.unstable_requestPaint,qe=e.unstable_now,Ll=e.unstable_getCurrentPriorityLevel,Ws=e.unstable_ImmediatePriority,Gr=e.unstable_UserBlockingPriority,gn=e.unstable_NormalPriority,ca=e.unstable_LowPriority,jl=e.unstable_IdlePriority,Hs=null,sn=null;function Fl(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Hs,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Bl,da=Math.log,Ul=Math.LN2;function Bl(r){return r>>>=0,r===0?32:31-(da(r)/Ul|0)|0}var zi=64,$i=4194304;function Qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ks(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,h=r.suspendedLanes,g=r.pingedLanes,E=a&268435455;if(E!==0){var S=E&~h;S!==0?c=Qr(S):(g&=E,g!==0&&(c=Qr(g)))}else E=a&~h,E!==0?c=Qr(E):g!==0&&(c=Qr(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Wt(i),h=1<<a,c|=r[a],i&=~h;return c}function od(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,h=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Wt(g),S=1<<E,R=h[E];R===-1?((S&a)===0||(S&c)!==0)&&(h[E]=od(S,i)):R<=i&&(r.expiredLanes|=S),g&=~S}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Gs(){var r=zi;return zi<<=1,(zi&4194240)===0&&(zi=64),r}function Yr(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function Jr(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Wt(i),r[i]=a}function ze(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-Wt(a),g=1<<h;i[h]=0,c[h]=-1,r[h]=-1,a&=~g}}function Xr(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Wt(a),h=1<<c;h&i|r[c]&i&&(r[c]|=i),a&=~h}}var Ne=0;function Zr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var zl,qi,$l,ql,Wl,ha=!1,Gn=[],Rt=null,Nn=null,Pn=null,es=new Map,yn=new Map,Qn=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hl(r,i){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":es.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(i.pointerId)}}function Qt(r,i,a,c,h,g){return r===null||r.nativeEvent!==g?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&qi(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),r)}function ld(r,i,a,c,h){switch(i){case"focusin":return Rt=Qt(Rt,r,i,a,c,h),!0;case"dragenter":return Nn=Qt(Nn,r,i,a,c,h),!0;case"mouseover":return Pn=Qt(Pn,r,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return es.set(g,Qt(es.get(g)||null,r,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,yn.set(g,Qt(yn.get(g)||null,r,i,a,c,h)),!0}return!1}function Kl(r){var i=Zs(r.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=qs(a),i!==null){r.blockedOn=i,Wl(r.priority,function(){$l(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function wr(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Wi(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Us=c,a.target.dispatchEvent(c),Us=null}else return i=ka(a),i!==null&&qi(i),r.blockedOn=a,!1;i.shift()}return!0}function Qs(r,i,a){wr(r)&&a.delete(i)}function Gl(){ha=!1,Rt!==null&&wr(Rt)&&(Rt=null),Nn!==null&&wr(Nn)&&(Nn=null),Pn!==null&&wr(Pn)&&(Pn=null),es.forEach(Qs),yn.forEach(Qs)}function bn(r,i){r.blockedOn===i&&(r.blockedOn=null,ha||(ha=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gl)))}function Dn(r){function i(h){return bn(h,r)}if(0<Gn.length){bn(Gn[0],r);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&bn(Rt,r),Nn!==null&&bn(Nn,r),Pn!==null&&bn(Pn,r),es.forEach(i),yn.forEach(i),a=0;a<Qn.length;a++)c=Qn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Qn.length&&(a=Qn[0],a.blockedOn===null);)Kl(a),a.blockedOn===null&&Qn.shift()}var Er=ue.ReactCurrentBatchConfig,ts=!0;function Je(r,i,a,c){var h=Ne,g=Er.transition;Er.transition=null;try{Ne=1,fa(r,i,a,c)}finally{Ne=h,Er.transition=g}}function ud(r,i,a,c){var h=Ne,g=Er.transition;Er.transition=null;try{Ne=4,fa(r,i,a,c)}finally{Ne=h,Er.transition=g}}function fa(r,i,a,c){if(ts){var h=Wi(r,i,a,c);if(h===null)wd(r,i,c,Ys,a),Hl(r,c);else if(ld(h,r,i,a,c))c.stopPropagation();else if(Hl(r,c),i&4&&-1<ad.indexOf(r)){for(;h!==null;){var g=ka(h);if(g!==null&&zl(g),g=Wi(r,i,a,c),g===null&&wd(r,i,c,Ys,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else wd(r,i,c,null,a)}}var Ys=null;function Wi(r,i,a,c){if(Ys=null,r=Oi(c),r=Zs(r),r!==null)if(i=Cn(r),i===null)r=null;else if(a=i.tag,a===13){if(r=qs(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Ys=r,null}function pa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ll()){case Ws:return 1;case Gr:return 4;case gn:case ca:return 16;case jl:return 536870912;default:return 16}default:return 16}}var an=null,Hi=null,Yt=null;function ma(){if(Yt)return Yt;var r,i=Hi,a=i.length,c,h="value"in an?an.value:an.textContent,g=h.length;for(r=0;r<a&&i[r]===h[r];r++);var E=a-r;for(c=1;c<=E&&i[a-c]===h[g-c];c++);return Yt=h.slice(r,1<c?1-c:void 0)}function Ki(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Yn(){return!0}function ga(){return!1}function Nt(r){function i(a,c,h,g,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yn:ga,this.isPropagationStopped=ga,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),i}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=Nt(On),Jn=te({},On,{view:0,detail:0}),cd=Nt(Jn),Qi,Tr,ns,Js=te({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ns&&(ns&&r.type==="mousemove"?(Qi=r.screenX-ns.screenX,Tr=r.screenY-ns.screenY):Tr=Qi=0,ns=r),Qi)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Yi=Nt(Js),ya=te({},Js,{dataTransfer:0}),Ql=Nt(ya),Ji=te({},Jn,{relatedTarget:0}),Xi=Nt(Ji),Yl=te({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=Nt(Yl),Jl=te({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Xl=Nt(Jl),Zl=te({},On,{data:0}),va=Nt(Zl),Zi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=eu[r])?!!i[r]:!1}function Xn(){return tu}var u=te({},Jn,{key:function(r){if(r.key){var i=Zi[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Ki(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ht[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?Ki(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ki(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Nt(u),_=te({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Nt(_),j=te({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),H=Nt(j),se=te({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Nt(se),vt=te({},Js,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=Nt(vt),Tt=[9,13,27,32],lt=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var ln=f&&"TextEvent"in window&&!vn,Xs=f&&(!lt||vn&&8<vn&&11>=vn),eo=" ",Yp=!1;function Jp(r,i){switch(r){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var to=!1;function Yw(r,i){switch(r){case"compositionend":return Xp(i);case"keypress":return i.which!==32?null:(Yp=!0,eo);case"textInput":return r=i.data,r===eo&&Yp?null:r;default:return null}}function Jw(r,i){if(to)return r==="compositionend"||!lt&&Jp(r,i)?(r=ma(),Yt=Hi=an=null,to=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xs&&i.locale!=="ko"?null:i.data;default:return null}}var Xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Xw[r.type]:i==="textarea"}function em(r,i,a,c){Kn(c),i=ou(i,"onChange"),0<i.length&&(a=new Gi("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var _a=null,wa=null;function Zw(r){vm(r,0)}function nu(r){var i=oo(r);if(Ri(i))return r}function eE(r,i){if(r==="change")return i}var tm=!1;if(f){var dd;if(f){var hd="oninput"in document;if(!hd){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),hd=typeof nm.oninput=="function"}dd=hd}else dd=!1;tm=dd&&(!document.documentMode||9<document.documentMode)}function rm(){_a&&(_a.detachEvent("onpropertychange",sm),wa=_a=null)}function sm(r){if(r.propertyName==="value"&&nu(wa)){var i=[];em(i,wa,r,Oi(r)),oa(Zw,i)}}function tE(r,i,a){r==="focusin"?(rm(),_a=i,wa=a,_a.attachEvent("onpropertychange",sm)):r==="focusout"&&rm()}function nE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nu(wa)}function rE(r,i){if(r==="click")return nu(i)}function sE(r,i){if(r==="input"||r==="change")return nu(i)}function iE(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Vn=typeof Object.is=="function"?Object.is:iE;function Ea(r,i){if(Vn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Vn(r[h],i[h]))return!1}return!0}function im(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function om(r,i){var a=im(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=im(a)}}function am(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?am(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function lm(){for(var r=window,i=Hr();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Hr(r.document)}return i}function fd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function oE(r){var i=lm(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&am(a.ownerDocument.documentElement,a)){if(c!==null&&fd(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!r.extend&&g>c&&(h=c,c=g,g=h),h=om(a,g);var E=om(a,c);h&&E&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),r.removeAllRanges(),g>c?(r.addRange(i),r.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var aE=f&&"documentMode"in document&&11>=document.documentMode,no=null,pd=null,Ta=null,md=!1;function um(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;md||no==null||no!==Hr(c)||(c=no,"selectionStart"in c&&fd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&Ea(Ta,c)||(Ta=c,c=ou(pd,"onSelect"),0<c.length&&(i=new Gi("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=no)))}function ru(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var ro={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},gd={},cm={};f&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function su(r){if(gd[r])return gd[r];if(!ro[r])return r;var i=ro[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in cm)return gd[r]=i[a];return r}var dm=su("animationend"),hm=su("animationiteration"),fm=su("animationstart"),pm=su("transitionend"),mm=new Map,gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(r,i){mm.set(r,i),l(i,[r])}for(var yd=0;yd<gm.length;yd++){var vd=gm[yd],lE=vd.toLowerCase(),uE=vd[0].toUpperCase()+vd.slice(1);rs(lE,"on"+uE)}rs(dm,"onAnimationEnd"),rs(hm,"onAnimationIteration"),rs(fm,"onAnimationStart"),rs("dblclick","onDoubleClick"),rs("focusin","onFocus"),rs("focusout","onBlur"),rs(pm,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function ym(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,Ol(c,i,void 0,r),r.currentTarget=null}function vm(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var S=c[E],R=S.instance,z=S.currentTarget;if(S=S.listener,R!==g&&h.isPropagationStopped())break e;ym(h,S,z),g=R}else for(E=0;E<c.length;E++){if(S=c[E],R=S.instance,z=S.currentTarget,S=S.listener,R!==g&&h.isPropagationStopped())break e;ym(h,S,z),g=R}}}if(kn)throw r=aa,kn=!1,aa=null,r}function He(r,i){var a=i[Ad];a===void 0&&(a=i[Ad]=new Set);var c=r+"__bubble";a.has(c)||(_m(i,r,2,!1),a.add(c))}function _d(r,i,a){var c=0;i&&(c|=4),_m(a,r,c,i)}var iu="_reactListening"+Math.random().toString(36).slice(2);function xa(r){if(!r[iu]){r[iu]=!0,s.forEach(function(a){a!=="selectionchange"&&(cE.has(a)||_d(a,!1,r),_d(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[iu]||(i[iu]=!0,_d("selectionchange",!1,i))}}function _m(r,i,a,c){switch(pa(i)){case 1:var h=Je;break;case 4:h=ud;break;default:h=fa}a=h.bind(null,i,a,r),h=void 0,!Li||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?r.addEventListener(i,a,{capture:!0,passive:h}):r.addEventListener(i,a,!0):h!==void 0?r.addEventListener(i,a,{passive:h}):r.addEventListener(i,a,!1)}function wd(r,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var S=c.stateNode.containerInfo;if(S===h||S.nodeType===8&&S.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var R=E.tag;if((R===3||R===4)&&(R=E.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;E=E.return}for(;S!==null;){if(E=Zs(S),E===null)return;if(R=E.tag,R===5||R===6){c=g=E;continue e}S=S.parentNode}}c=c.return}oa(function(){var z=g,J=Oi(a),Z=[];e:{var Y=mm.get(r);if(Y!==void 0){var oe=Gi,de=r;switch(r){case"keypress":if(Ki(a)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":de="focus",oe=Xi;break;case"focusout":de="blur",oe=Xi;break;case"beforeblur":case"afterblur":oe=Xi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Yi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=H;break;case dm:case hm:case fm:oe=Ir;break;case pm:oe=Ue;break;case"scroll":oe=cd;break;case"wheel":oe=be;break;case"copy":case"cut":case"paste":oe=Xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=T}var fe=(i&4)!==0,it=!fe&&r==="scroll",F=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var D=z,U;D!==null;){U=D;var ne=U.stateNode;if(U.tag===5&&ne!==null&&(U=ne,F!==null&&(ne=st(D,F),ne!=null&&fe.push(Sa(D,ne,U)))),it)break;D=D.return}0<fe.length&&(Y=new oe(Y,de,null,a,J),Z.push({event:Y,listeners:fe}))}}if((i&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",Y&&a!==Us&&(de=a.relatedTarget||a.fromElement)&&(Zs(de)||de[xr]))break e;if((oe||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,oe?(de=a.relatedTarget||a.toElement,oe=z,de=de?Zs(de):null,de!==null&&(it=Cn(de),de!==it||de.tag!==5&&de.tag!==6)&&(de=null)):(oe=null,de=z),oe!==de)){if(fe=Yi,ne="onMouseLeave",F="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(fe=T,ne="onPointerLeave",F="onPointerEnter",D="pointer"),it=oe==null?Y:oo(oe),U=de==null?Y:oo(de),Y=new fe(ne,D+"leave",oe,a,J),Y.target=it,Y.relatedTarget=U,ne=null,Zs(J)===z&&(fe=new fe(F,D+"enter",de,a,J),fe.target=U,fe.relatedTarget=it,ne=fe),it=ne,oe&&de)t:{for(fe=oe,F=de,D=0,U=fe;U;U=so(U))D++;for(U=0,ne=F;ne;ne=so(ne))U++;for(;0<D-U;)fe=so(fe),D--;for(;0<U-D;)F=so(F),U--;for(;D--;){if(fe===F||F!==null&&fe===F.alternate)break t;fe=so(fe),F=so(F)}fe=null}else fe=null;oe!==null&&wm(Z,Y,oe,fe,!1),de!==null&&it!==null&&wm(Z,it,de,fe,!0)}}e:{if(Y=z?oo(z):window,oe=Y.nodeName&&Y.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Y.type==="file")var me=eE;else if(Zp(Y))if(tm)me=sE;else{me=nE;var ve=tE}else(oe=Y.nodeName)&&oe.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=rE);if(me&&(me=me(r,z))){em(Z,me,a,J);break e}ve&&ve(r,Y,z),r==="focusout"&&(ve=Y._wrapperState)&&ve.controlled&&Y.type==="number"&&Pi(Y,"number",Y.value)}switch(ve=z?oo(z):window,r){case"focusin":(Zp(ve)||ve.contentEditable==="true")&&(no=ve,pd=z,Ta=null);break;case"focusout":Ta=pd=no=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,um(Z,a,J);break;case"selectionchange":if(aE)break;case"keydown":case"keyup":um(Z,a,J)}var _e;if(lt)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else to?Jp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Xs&&a.locale!=="ko"&&(to||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&to&&(_e=ma()):(an=J,Hi="value"in an?an.value:an.textContent,to=!0)),ve=ou(z,Ee),0<ve.length&&(Ee=new va(Ee,r,null,a,J),Z.push({event:Ee,listeners:ve}),_e?Ee.data=_e:(_e=Xp(a),_e!==null&&(Ee.data=_e)))),(_e=ln?Yw(r,a):Jw(r,a))&&(z=ou(z,"onBeforeInput"),0<z.length&&(J=new va("onBeforeInput","beforeinput",null,a,J),Z.push({event:J,listeners:z}),J.data=_e))}vm(Z,i)})}function Sa(r,i,a){return{instance:r,listener:i,currentTarget:a}}function ou(r,i){for(var a=i+"Capture",c=[];r!==null;){var h=r,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=st(r,a),g!=null&&c.unshift(Sa(r,g,h)),g=st(r,i),g!=null&&c.push(Sa(r,g,h))),r=r.return}return c}function so(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function wm(r,i,a,c,h){for(var g=i._reactName,E=[];a!==null&&a!==c;){var S=a,R=S.alternate,z=S.stateNode;if(R!==null&&R===c)break;S.tag===5&&z!==null&&(S=z,h?(R=st(a,g),R!=null&&E.unshift(Sa(a,R,S))):h||(R=st(a,g),R!=null&&E.push(Sa(a,R,S)))),a=a.return}E.length!==0&&r.push({event:i,listeners:E})}var dE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function Em(r){return(typeof r=="string"?r:""+r).replace(dE,`
`).replace(hE,"")}function au(r,i,a){if(i=Em(i),Em(r)!==i&&a)throw Error(t(425))}function lu(){}var Ed=null,Td=null;function Id(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xd=typeof setTimeout=="function"?setTimeout:void 0,fE=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,pE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(r){return Tm.resolve(null).then(r).catch(mE)}:xd;function mE(r){setTimeout(function(){throw r})}function Sd(r,i){var a=i,c=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){r.removeChild(h),Dn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Dn(i)}function ss(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Im(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var io=Math.random().toString(36).slice(2),Zn="__reactFiber$"+io,Aa="__reactProps$"+io,xr="__reactContainer$"+io,Ad="__reactEvents$"+io,gE="__reactListeners$"+io,yE="__reactHandles$"+io;function Zs(r){var i=r[Zn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[xr]||a[Zn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Im(r);r!==null;){if(a=r[Zn])return a;r=Im(r)}return i}r=a,a=r.parentNode}return null}function ka(r){return r=r[Zn]||r[xr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function oo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function uu(r){return r[Aa]||null}var kd=[],ao=-1;function is(r){return{current:r}}function Ke(r){0>ao||(r.current=kd[ao],kd[ao]=null,ao--)}function We(r,i){ao++,kd[ao]=r.current,r.current=i}var os={},Mt=is(os),Jt=is(!1),ei=os;function lo(r,i){var a=r.type.contextTypes;if(!a)return os;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=h),h}function Xt(r){return r=r.childContextTypes,r!=null}function cu(){Ke(Jt),Ke(Mt)}function xm(r,i,a){if(Mt.current!==os)throw Error(t(168));We(Mt,i),We(Jt,a)}function Sm(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,je(r)||"Unknown",h));return te({},a,c)}function du(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||os,ei=Mt.current,We(Mt,r),We(Jt,Jt.current),!0}function Am(r,i,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Sm(r,i,ei),c.__reactInternalMemoizedMergedChildContext=r,Ke(Jt),Ke(Mt),We(Mt,r)):Ke(Jt),We(Jt,a)}var Sr=null,hu=!1,Cd=!1;function km(r){Sr===null?Sr=[r]:Sr.push(r)}function vE(r){hu=!0,km(r)}function as(){if(!Cd&&Sr!==null){Cd=!0;var r=0,i=Ne;try{var a=Sr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Sr=null,hu=!1}catch(h){throw Sr!==null&&(Sr=Sr.slice(r+1)),Bi(Ws,as),h}finally{Ne=i,Cd=!1}}return null}var uo=[],co=0,fu=null,pu=0,_n=[],wn=0,ti=null,Ar=1,kr="";function ni(r,i){uo[co++]=pu,uo[co++]=fu,fu=r,pu=i}function Cm(r,i,a){_n[wn++]=Ar,_n[wn++]=kr,_n[wn++]=ti,ti=r;var c=Ar;r=kr;var h=32-Wt(c)-1;c&=~(1<<h),a+=1;var g=32-Wt(i)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Ar=1<<32-Wt(i)+h|a<<h|c,kr=g+r}else Ar=1<<g|a<<h|c,kr=r}function Rd(r){r.return!==null&&(ni(r,1),Cm(r,1,0))}function Nd(r){for(;r===fu;)fu=uo[--co],uo[co]=null,pu=uo[--co],uo[co]=null;for(;r===ti;)ti=_n[--wn],_n[wn]=null,kr=_n[--wn],_n[wn]=null,Ar=_n[--wn],_n[wn]=null}var un=null,cn=null,Xe=!1,Mn=null;function Rm(r,i){var a=xn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Nm(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,un=r,cn=ss(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,un=r,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ti!==null?{id:Ar,overflow:kr}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=xn(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function Pd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function bd(r){if(Xe){var i=cn;if(i){var a=i;if(!Nm(r,i)){if(Pd(r))throw Error(t(418));i=ss(a.nextSibling);var c=un;i&&Nm(r,i)?Rm(c,a):(r.flags=r.flags&-4097|2,Xe=!1,un=r)}}else{if(Pd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,un=r}}}function Pm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function mu(r){if(r!==un)return!1;if(!Xe)return Pm(r),Xe=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Id(r.type,r.memoizedProps)),i&&(i=cn)){if(Pd(r))throw bm(),Error(t(418));for(;i;)Rm(r,i),i=ss(i.nextSibling)}if(Pm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){cn=ss(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}cn=null}}else cn=un?ss(r.stateNode.nextSibling):null;return!0}function bm(){for(var r=cn;r;)r=ss(r.nextSibling)}function ho(){cn=un=null,Xe=!1}function Dd(r){Mn===null?Mn=[r]:Mn.push(r)}var _E=ue.ReactCurrentBatchConfig;function Ca(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var h=c,g=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var S=h.refs;E===null?delete S[g]:S[g]=E},i._stringRef=g,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function gu(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Dm(r){var i=r._init;return i(r._payload)}function Om(r){function i(F,D){if(r){var U=F.deletions;U===null?(F.deletions=[D],F.flags|=16):U.push(D)}}function a(F,D){if(!r)return null;for(;D!==null;)i(F,D),D=D.sibling;return null}function c(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function h(F,D){return F=ms(F,D),F.index=0,F.sibling=null,F}function g(F,D,U){return F.index=U,r?(U=F.alternate,U!==null?(U=U.index,U<D?(F.flags|=2,D):U):(F.flags|=2,D)):(F.flags|=1048576,D)}function E(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,D,U,ne){return D===null||D.tag!==6?(D=xh(U,F.mode,ne),D.return=F,D):(D=h(D,U),D.return=F,D)}function R(F,D,U,ne){var me=U.type;return me===N?J(F,D,U.props.children,ne,U.key):D!==null&&(D.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===mt&&Dm(me)===D.type)?(ne=h(D,U.props),ne.ref=Ca(F,D,U),ne.return=F,ne):(ne=Uu(U.type,U.key,U.props,null,F.mode,ne),ne.ref=Ca(F,D,U),ne.return=F,ne)}function z(F,D,U,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Sh(U,F.mode,ne),D.return=F,D):(D=h(D,U.children||[]),D.return=F,D)}function J(F,D,U,ne,me){return D===null||D.tag!==7?(D=ci(U,F.mode,ne,me),D.return=F,D):(D=h(D,U),D.return=F,D)}function Z(F,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=xh(""+D,F.mode,U),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case le:return U=Uu(D.type,D.key,D.props,null,F.mode,U),U.ref=Ca(F,null,D),U.return=F,U;case ge:return D=Sh(D,F.mode,U),D.return=F,D;case mt:var ne=D._init;return Z(F,ne(D._payload),U)}if(mr(D)||re(D))return D=ci(D,F.mode,U,null),D.return=F,D;gu(F,D)}return null}function Y(F,D,U,ne){var me=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return me!==null?null:S(F,D,""+U,ne);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case le:return U.key===me?R(F,D,U,ne):null;case ge:return U.key===me?z(F,D,U,ne):null;case mt:return me=U._init,Y(F,D,me(U._payload),ne)}if(mr(U)||re(U))return me!==null?null:J(F,D,U,ne,null);gu(F,U)}return null}function oe(F,D,U,ne,me){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return F=F.get(U)||null,S(D,F,""+ne,me);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case le:return F=F.get(ne.key===null?U:ne.key)||null,R(D,F,ne,me);case ge:return F=F.get(ne.key===null?U:ne.key)||null,z(D,F,ne,me);case mt:var ve=ne._init;return oe(F,D,U,ve(ne._payload),me)}if(mr(ne)||re(ne))return F=F.get(U)||null,J(D,F,ne,me,null);gu(D,ne)}return null}function de(F,D,U,ne){for(var me=null,ve=null,_e=D,Ee=D=0,St=null;_e!==null&&Ee<U.length;Ee++){_e.index>Ee?(St=_e,_e=null):St=_e.sibling;var Ve=Y(F,_e,U[Ee],ne);if(Ve===null){_e===null&&(_e=St);break}r&&_e&&Ve.alternate===null&&i(F,_e),D=g(Ve,D,Ee),ve===null?me=Ve:ve.sibling=Ve,ve=Ve,_e=St}if(Ee===U.length)return a(F,_e),Xe&&ni(F,Ee),me;if(_e===null){for(;Ee<U.length;Ee++)_e=Z(F,U[Ee],ne),_e!==null&&(D=g(_e,D,Ee),ve===null?me=_e:ve.sibling=_e,ve=_e);return Xe&&ni(F,Ee),me}for(_e=c(F,_e);Ee<U.length;Ee++)St=oe(_e,F,Ee,U[Ee],ne),St!==null&&(r&&St.alternate!==null&&_e.delete(St.key===null?Ee:St.key),D=g(St,D,Ee),ve===null?me=St:ve.sibling=St,ve=St);return r&&_e.forEach(function(gs){return i(F,gs)}),Xe&&ni(F,Ee),me}function fe(F,D,U,ne){var me=re(U);if(typeof me!="function")throw Error(t(150));if(U=me.call(U),U==null)throw Error(t(151));for(var ve=me=null,_e=D,Ee=D=0,St=null,Ve=U.next();_e!==null&&!Ve.done;Ee++,Ve=U.next()){_e.index>Ee?(St=_e,_e=null):St=_e.sibling;var gs=Y(F,_e,Ve.value,ne);if(gs===null){_e===null&&(_e=St);break}r&&_e&&gs.alternate===null&&i(F,_e),D=g(gs,D,Ee),ve===null?me=gs:ve.sibling=gs,ve=gs,_e=St}if(Ve.done)return a(F,_e),Xe&&ni(F,Ee),me;if(_e===null){for(;!Ve.done;Ee++,Ve=U.next())Ve=Z(F,Ve.value,ne),Ve!==null&&(D=g(Ve,D,Ee),ve===null?me=Ve:ve.sibling=Ve,ve=Ve);return Xe&&ni(F,Ee),me}for(_e=c(F,_e);!Ve.done;Ee++,Ve=U.next())Ve=oe(_e,F,Ee,Ve.value,ne),Ve!==null&&(r&&Ve.alternate!==null&&_e.delete(Ve.key===null?Ee:Ve.key),D=g(Ve,D,Ee),ve===null?me=Ve:ve.sibling=Ve,ve=Ve);return r&&_e.forEach(function(XE){return i(F,XE)}),Xe&&ni(F,Ee),me}function it(F,D,U,ne){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case le:e:{for(var me=U.key,ve=D;ve!==null;){if(ve.key===me){if(me=U.type,me===N){if(ve.tag===7){a(F,ve.sibling),D=h(ve,U.props.children),D.return=F,F=D;break e}}else if(ve.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===mt&&Dm(me)===ve.type){a(F,ve.sibling),D=h(ve,U.props),D.ref=Ca(F,ve,U),D.return=F,F=D;break e}a(F,ve);break}else i(F,ve);ve=ve.sibling}U.type===N?(D=ci(U.props.children,F.mode,ne,U.key),D.return=F,F=D):(ne=Uu(U.type,U.key,U.props,null,F.mode,ne),ne.ref=Ca(F,D,U),ne.return=F,F=ne)}return E(F);case ge:e:{for(ve=U.key;D!==null;){if(D.key===ve)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(F,D.sibling),D=h(D,U.children||[]),D.return=F,F=D;break e}else{a(F,D);break}else i(F,D);D=D.sibling}D=Sh(U,F.mode,ne),D.return=F,F=D}return E(F);case mt:return ve=U._init,it(F,D,ve(U._payload),ne)}if(mr(U))return de(F,D,U,ne);if(re(U))return fe(F,D,U,ne);gu(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(F,D.sibling),D=h(D,U),D.return=F,F=D):(a(F,D),D=xh(U,F.mode,ne),D.return=F,F=D),E(F)):a(F,D)}return it}var fo=Om(!0),Vm=Om(!1),yu=is(null),vu=null,po=null,Od=null;function Vd(){Od=po=vu=null}function Md(r){var i=yu.current;Ke(yu),r._currentValue=i}function Ld(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function mo(r,i){vu=r,Od=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Zt=!0),r.firstContext=null)}function En(r){var i=r._currentValue;if(Od!==r)if(r={context:r,memoizedValue:i,next:null},po===null){if(vu===null)throw Error(t(308));po=r,vu.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return i}var ri=null;function jd(r){ri===null?ri=[r]:ri.push(r)}function Mm(r,i,a,c){var h=i.interleaved;return h===null?(a.next=a,jd(i)):(a.next=h.next,h.next=a),i.interleaved=a,Cr(r,c)}function Cr(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ls=!1;function Fd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lm(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Rr(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function us(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Cr(r,a)}return h=c.interleaved,h===null?(i.next=i,jd(c)):(i.next=h.next,h.next=i),c.interleaved=i,Cr(r,a)}function _u(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Xr(r,a)}}function jm(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function wu(r,i,a,c){var h=r.updateQueue;ls=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var R=S,z=R.next;R.next=null,E===null?g=z:E.next=z,E=R;var J=r.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==E&&(S===null?J.firstBaseUpdate=z:S.next=z,J.lastBaseUpdate=R))}if(g!==null){var Z=h.baseState;E=0,J=z=R=null,S=g;do{var Y=S.lane,oe=S.eventTime;if((c&Y)===Y){J!==null&&(J=J.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var de=r,fe=S;switch(Y=i,oe=a,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){Z=de.call(oe,Z,Y);break e}Z=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,Y=typeof de=="function"?de.call(oe,Z,Y):de,Y==null)break e;Z=te({},Z,Y);break e;case 2:ls=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Y=h.effects,Y===null?h.effects=[S]:Y.push(S))}else oe={eventTime:oe,lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(z=J=oe,R=Z):J=J.next=oe,E|=Y;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);if(J===null&&(R=Z),h.baseState=R,h.firstBaseUpdate=z,h.lastBaseUpdate=J,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);oi|=E,r.lanes=E,r.memoizedState=Z}}function Fm(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Ra={},er=is(Ra),Na=is(Ra),Pa=is(Ra);function si(r){if(r===Ra)throw Error(t(174));return r}function Ud(r,i){switch(We(Pa,i),We(Na,r),We(er,Ra),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:yt(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=yt(i,r)}Ke(er),We(er,i)}function go(){Ke(er),Ke(Na),Ke(Pa)}function Um(r){si(Pa.current);var i=si(er.current),a=yt(i,r.type);i!==a&&(We(Na,r),We(er,a))}function Bd(r){Na.current===r&&(Ke(er),Ke(Na))}var Ze=is(0);function Eu(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zd=[];function $d(){for(var r=0;r<zd.length;r++)zd[r]._workInProgressVersionPrimary=null;zd.length=0}var Tu=ue.ReactCurrentDispatcher,qd=ue.ReactCurrentBatchConfig,ii=0,et=null,_t=null,It=null,Iu=!1,ba=!1,Da=0,wE=0;function Lt(){throw Error(t(321))}function Wd(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Vn(r[a],i[a]))return!1;return!0}function Hd(r,i,a,c,h,g){if(ii=g,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Tu.current=r===null||r.memoizedState===null?xE:SE,r=a(c,h),ba){g=0;do{if(ba=!1,Da=0,25<=g)throw Error(t(301));g+=1,It=_t=null,i.updateQueue=null,Tu.current=AE,r=a(c,h)}while(ba)}if(Tu.current=Au,i=_t!==null&&_t.next!==null,ii=0,It=_t=et=null,Iu=!1,i)throw Error(t(300));return r}function Kd(){var r=Da!==0;return Da=0,r}function tr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?et.memoizedState=It=r:It=It.next=r,It}function Tn(){if(_t===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var i=It===null?et.memoizedState:It.next;if(i!==null)It=i,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},It===null?et.memoizedState=It=r:It=It.next=r}return It}function Oa(r,i){return typeof i=="function"?i(r):i}function Gd(r){var i=Tn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=_t,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var S=E=null,R=null,z=g;do{var J=z.lane;if((ii&J)===J)R!==null&&(R=R.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var Z={lane:J,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};R===null?(S=R=Z,E=c):R=R.next=Z,et.lanes|=J,oi|=J}z=z.next}while(z!==null&&z!==g);R===null?E=c:R.next=S,Vn(c,i.memoizedState)||(Zt=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=R,a.lastRenderedState=c}if(r=a.interleaved,r!==null){h=r;do g=h.lane,et.lanes|=g,oi|=g,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Qd(r){var i=Tn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=r(g,E.action),E=E.next;while(E!==h);Vn(g,i.memoizedState)||(Zt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Bm(){}function zm(r,i){var a=et,c=Tn(),h=i(),g=!Vn(c.memoizedState,h);if(g&&(c.memoizedState=h,Zt=!0),c=c.queue,Yd(Wm.bind(null,a,c,r),[r]),c.getSnapshot!==i||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Va(9,qm.bind(null,a,c,h,i),void 0,null),xt===null)throw Error(t(349));(ii&30)!==0||$m(a,i,h)}return h}function $m(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function qm(r,i,a,c){i.value=a,i.getSnapshot=c,Hm(i)&&Km(r)}function Wm(r,i,a){return a(function(){Hm(i)&&Km(r)})}function Hm(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Vn(r,a)}catch{return!0}}function Km(r){var i=Cr(r,1);i!==null&&Un(i,r,1,-1)}function Gm(r){var i=tr();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:r},i.queue=r,r=r.dispatch=IE.bind(null,et,r),[i.memoizedState,r]}function Va(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function Qm(){return Tn().memoizedState}function xu(r,i,a,c){var h=tr();et.flags|=r,h.memoizedState=Va(1|i,a,void 0,c===void 0?null:c)}function Su(r,i,a,c){var h=Tn();c=c===void 0?null:c;var g=void 0;if(_t!==null){var E=_t.memoizedState;if(g=E.destroy,c!==null&&Wd(c,E.deps)){h.memoizedState=Va(i,a,g,c);return}}et.flags|=r,h.memoizedState=Va(1|i,a,g,c)}function Ym(r,i){return xu(8390656,8,r,i)}function Yd(r,i){return Su(2048,8,r,i)}function Jm(r,i){return Su(4,2,r,i)}function Xm(r,i){return Su(4,4,r,i)}function Zm(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function eg(r,i,a){return a=a!=null?a.concat([r]):null,Su(4,4,Zm.bind(null,i,r),a)}function Jd(){}function tg(r,i){var a=Tn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wd(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function ng(r,i){var a=Tn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wd(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function rg(r,i,a){return(ii&21)===0?(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a):(Vn(a,i)||(a=Gs(),et.lanes|=a,oi|=a,r.baseState=!0),i)}function EE(r,i){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=qd.transition;qd.transition={};try{r(!1),i()}finally{Ne=a,qd.transition=c}}function sg(){return Tn().memoizedState}function TE(r,i,a){var c=fs(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ig(r))og(i,a);else if(a=Mm(r,i,a,c),a!==null){var h=Gt();Un(a,r,c,h),ag(a,i,c)}}function IE(r,i,a){var c=fs(r),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ig(r))og(i,h);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,S=g(E,a);if(h.hasEagerState=!0,h.eagerState=S,Vn(S,E)){var R=i.interleaved;R===null?(h.next=h,jd(i)):(h.next=R.next,R.next=h),i.interleaved=h;return}}catch{}finally{}a=Mm(r,i,h,c),a!==null&&(h=Gt(),Un(a,r,c,h),ag(a,i,c))}}function ig(r){var i=r.alternate;return r===et||i!==null&&i===et}function og(r,i){ba=Iu=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function ag(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Xr(r,a)}}var Au={readContext:En,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},xE={readContext:En,useCallback:function(r,i){return tr().memoizedState=[r,i===void 0?null:i],r},useContext:En,useEffect:Ym,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,xu(4194308,4,Zm.bind(null,i,r),a)},useLayoutEffect:function(r,i){return xu(4194308,4,r,i)},useInsertionEffect:function(r,i){return xu(4,2,r,i)},useMemo:function(r,i){var a=tr();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=tr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=TE.bind(null,et,r),[c.memoizedState,r]},useRef:function(r){var i=tr();return r={current:r},i.memoizedState=r},useState:Gm,useDebugValue:Jd,useDeferredValue:function(r){return tr().memoizedState=r},useTransition:function(){var r=Gm(!1),i=r[0];return r=EE.bind(null,r[1]),tr().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=et,h=tr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),xt===null)throw Error(t(349));(ii&30)!==0||$m(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Ym(Wm.bind(null,c,g,r),[r]),c.flags|=2048,Va(9,qm.bind(null,c,g,a,i),void 0,null),a},useId:function(){var r=tr(),i=xt.identifierPrefix;if(Xe){var a=kr,c=Ar;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=wE++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},SE={readContext:En,useCallback:tg,useContext:En,useEffect:Yd,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:Xm,useMemo:ng,useReducer:Gd,useRef:Qm,useState:function(){return Gd(Oa)},useDebugValue:Jd,useDeferredValue:function(r){var i=Tn();return rg(i,_t.memoizedState,r)},useTransition:function(){var r=Gd(Oa)[0],i=Tn().memoizedState;return[r,i]},useMutableSource:Bm,useSyncExternalStore:zm,useId:sg,unstable_isNewReconciler:!1},AE={readContext:En,useCallback:tg,useContext:En,useEffect:Yd,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:Xm,useMemo:ng,useReducer:Qd,useRef:Qm,useState:function(){return Qd(Oa)},useDebugValue:Jd,useDeferredValue:function(r){var i=Tn();return _t===null?i.memoizedState=r:rg(i,_t.memoizedState,r)},useTransition:function(){var r=Qd(Oa)[0],i=Tn().memoizedState;return[r,i]},useMutableSource:Bm,useSyncExternalStore:zm,useId:sg,unstable_isNewReconciler:!1};function Ln(r,i){if(r&&r.defaultProps){i=te({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function Xd(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:te({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ku={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=Gt(),h=fs(r),g=Rr(c,h);g.payload=i,a!=null&&(g.callback=a),i=us(r,g,h),i!==null&&(Un(i,r,h,c),_u(i,r,h))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=Gt(),h=fs(r),g=Rr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=us(r,g,h),i!==null&&(Un(i,r,h,c),_u(i,r,h))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Gt(),c=fs(r),h=Rr(a,c);h.tag=2,i!=null&&(h.callback=i),i=us(r,h,c),i!==null&&(Un(i,r,c,a),_u(i,r,c))}};function lg(r,i,a,c,h,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(h,g):!0}function ug(r,i,a){var c=!1,h=os,g=i.contextType;return typeof g=="object"&&g!==null?g=En(g):(h=Xt(i)?ei:Mt.current,c=i.contextTypes,g=(c=c!=null)?lo(r,h):os),i=new i(a,g),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ku,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=g),i}function cg(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&ku.enqueueReplaceState(i,i.state,null)}function Zd(r,i,a,c){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},Fd(r);var g=i.contextType;typeof g=="object"&&g!==null?h.context=En(g):(g=Xt(i)?ei:Mt.current,h.context=lo(r,g)),h.state=r.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Xd(r,i,g,a),h.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ku.enqueueReplaceState(h,h.state,null),wu(r,a,h,c),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function yo(r,i){try{var a="",c=i;do a+=xe(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:i,stack:h,digest:null}}function eh(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function th(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kE=typeof WeakMap=="function"?WeakMap:Map;function dg(r,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Ou||(Ou=!0,gh=c),th(r,i)},a}function hg(r,i,a){a=Rr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){th(r,i)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){th(r,i),typeof c!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function fg(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new kE;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),r=BE.bind(null,r,i,a),i.then(r,r))}function pg(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function mg(r,i,a,c,h){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,us(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var CE=ue.ReactCurrentOwner,Zt=!1;function Kt(r,i,a,c){i.child=r===null?Vm(i,null,a,c):fo(i,r.child,a,c)}function gg(r,i,a,c,h){a=a.render;var g=i.ref;return mo(i,h),c=Hd(r,i,a,c,g,h),a=Kd(),r!==null&&!Zt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~h,Nr(r,i,h)):(Xe&&a&&Rd(i),i.flags|=1,Kt(r,i,c,h),i.child)}function yg(r,i,a,c,h){if(r===null){var g=a.type;return typeof g=="function"&&!Ih(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,vg(r,i,g,c,h)):(r=Uu(a.type,null,c,i,i.mode,h),r.ref=i.ref,r.return=i,i.child=r)}if(g=r.child,(r.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(E,c)&&r.ref===i.ref)return Nr(r,i,h)}return i.flags|=1,r=ms(g,c),r.ref=i.ref,r.return=i,i.child=r}function vg(r,i,a,c,h){if(r!==null){var g=r.memoizedProps;if(Ea(g,c)&&r.ref===i.ref)if(Zt=!1,i.pendingProps=c=g,(r.lanes&h)!==0)(r.flags&131072)!==0&&(Zt=!0);else return i.lanes=r.lanes,Nr(r,i,h)}return nh(r,i,a,c,h)}function _g(r,i,a){var c=i.pendingProps,h=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(_o,dn),dn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,We(_o,dn),dn|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(_o,dn),dn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,We(_o,dn),dn|=c;return Kt(r,i,h,a),i.child}function wg(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function nh(r,i,a,c,h){var g=Xt(a)?ei:Mt.current;return g=lo(i,g),mo(i,h),a=Hd(r,i,a,c,g,h),c=Kd(),r!==null&&!Zt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~h,Nr(r,i,h)):(Xe&&c&&Rd(i),i.flags|=1,Kt(r,i,a,h),i.child)}function Eg(r,i,a,c,h){if(Xt(a)){var g=!0;du(i)}else g=!1;if(mo(i,h),i.stateNode===null)Ru(r,i),ug(i,a,c),Zd(i,a,c,h),c=!0;else if(r===null){var E=i.stateNode,S=i.memoizedProps;E.props=S;var R=E.context,z=a.contextType;typeof z=="object"&&z!==null?z=En(z):(z=Xt(a)?ei:Mt.current,z=lo(i,z));var J=a.getDerivedStateFromProps,Z=typeof J=="function"||typeof E.getSnapshotBeforeUpdate=="function";Z||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==c||R!==z)&&cg(i,E,c,z),ls=!1;var Y=i.memoizedState;E.state=Y,wu(i,c,E,h),R=i.memoizedState,S!==c||Y!==R||Jt.current||ls?(typeof J=="function"&&(Xd(i,a,J,c),R=i.memoizedState),(S=ls||lg(i,a,S,c,Y,R,z))?(Z||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=R),E.props=c,E.state=R,E.context=z,c=S):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Lm(r,i),S=i.memoizedProps,z=i.type===i.elementType?S:Ln(i.type,S),E.props=z,Z=i.pendingProps,Y=E.context,R=a.contextType,typeof R=="object"&&R!==null?R=En(R):(R=Xt(a)?ei:Mt.current,R=lo(i,R));var oe=a.getDerivedStateFromProps;(J=typeof oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==Z||Y!==R)&&cg(i,E,c,R),ls=!1,Y=i.memoizedState,E.state=Y,wu(i,c,E,h);var de=i.memoizedState;S!==Z||Y!==de||Jt.current||ls?(typeof oe=="function"&&(Xd(i,a,oe,c),de=i.memoizedState),(z=ls||lg(i,a,z,c,Y,de,R)||!1)?(J||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,de,R),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,de,R)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=de),E.props=c,E.state=de,E.context=R,c=z):(typeof E.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=1024),c=!1)}return rh(r,i,a,c,g,h)}function rh(r,i,a,c,h,g){wg(r,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&Am(i,a,!1),Nr(r,i,g);c=i.stateNode,CE.current=i;var S=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&E?(i.child=fo(i,r.child,null,g),i.child=fo(i,null,S,g)):Kt(r,i,S,g),i.memoizedState=c.state,h&&Am(i,a,!0),i.child}function Tg(r){var i=r.stateNode;i.pendingContext?xm(r,i.pendingContext,i.pendingContext!==i.context):i.context&&xm(r,i.context,!1),Ud(r,i.containerInfo)}function Ig(r,i,a,c,h){return ho(),Dd(h),i.flags|=256,Kt(r,i,a,c),i.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function ih(r){return{baseLanes:r,cachePool:null,transitions:null}}function xg(r,i,a){var c=i.pendingProps,h=Ze.current,g=!1,E=(i.flags&128)!==0,S;if((S=E)||(S=r!==null&&r.memoizedState===null?!1:(h&2)!==0),S?(g=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),We(Ze,h&1),r===null)return bd(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,r=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Bu(E,c,0,null),r=ci(r,c,a,null),g.return=i,r.return=i,g.sibling=r,i.child=g,i.child.memoizedState=ih(a),i.memoizedState=sh,r):oh(i,E));if(h=r.memoizedState,h!==null&&(S=h.dehydrated,S!==null))return RE(r,i,E,c,S,h,a);if(g){g=c.fallback,E=i.mode,h=r.child,S=h.sibling;var R={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=R,i.deletions=null):(c=ms(h,R),c.subtreeFlags=h.subtreeFlags&14680064),S!==null?g=ms(S,g):(g=ci(g,E,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=r.child.memoizedState,E=E===null?ih(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~a,i.memoizedState=sh,c}return g=r.child,r=g.sibling,c=ms(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function oh(r,i){return i=Bu({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Cu(r,i,a,c){return c!==null&&Dd(c),fo(i,r.child,null,a),r=oh(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function RE(r,i,a,c,h,g,E){if(a)return i.flags&256?(i.flags&=-257,c=eh(Error(t(422))),Cu(r,i,E,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Bu({mode:"visible",children:c.children},h,0,null),g=ci(g,h,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&fo(i,r.child,null,E),i.child.memoizedState=ih(E),i.memoizedState=sh,g);if((i.mode&1)===0)return Cu(r,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=eh(g,c,void 0),Cu(r,i,E,c)}if(S=(E&r.childLanes)!==0,Zt||S){if(c=xt,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Cr(r,h),Un(c,r,h,-1))}return Th(),c=eh(Error(t(421))),Cu(r,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=r.child,i=zE.bind(null,r),h._reactRetry=i,null):(r=g.treeContext,cn=ss(h.nextSibling),un=i,Xe=!0,Mn=null,r!==null&&(_n[wn++]=Ar,_n[wn++]=kr,_n[wn++]=ti,Ar=r.id,kr=r.overflow,ti=i),i=oh(i,c.children),i.flags|=4096,i)}function Sg(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),Ld(r.return,i,a)}function ah(r,i,a,c,h){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Ag(r,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Kt(r,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Sg(r,a,i);else if(r.tag===19)Sg(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)r=a.alternate,r!==null&&Eu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),ah(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(r=h.alternate,r!==null&&Eu(r)===null){i.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}ah(i,!0,a,null,g);break;case"together":ah(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ru(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Nr(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),oi|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=ms(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ms(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function NE(r,i,a){switch(i.tag){case 3:Tg(i),ho();break;case 5:Um(i);break;case 1:Xt(i.type)&&du(i);break;case 4:Ud(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;We(yu,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?xg(r,i,a):(We(Ze,Ze.current&1),r=Nr(r,i,a),r!==null?r.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return Ag(r,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,_g(r,i,a)}return Nr(r,i,a)}var kg,lh,Cg,Rg;kg=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lh=function(){},Cg=function(r,i,a,c){var h=r.memoizedProps;if(h!==c){r=i.stateNode,si(er.current);var g=null;switch(a){case"input":h=Ls(r,h),c=Ls(r,c),g=[];break;case"select":h=te({},h,{value:void 0}),c=te({},c,{value:void 0}),g=[];break;case"textarea":h=Yo(r,h),c=Yo(r,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=lu)}na(a,c);var E;a=null;for(z in h)if(!c.hasOwnProperty(z)&&h.hasOwnProperty(z)&&h[z]!=null)if(z==="style"){var S=h[z];for(E in S)S.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var R=c[z];if(S=h!=null?h[z]:void 0,c.hasOwnProperty(z)&&R!==S&&(R!=null||S!=null))if(z==="style")if(S){for(E in S)!S.hasOwnProperty(E)||R&&R.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in R)R.hasOwnProperty(E)&&S[E]!==R[E]&&(a||(a={}),a[E]=R[E])}else a||(g||(g=[]),g.push(z,a)),a=R;else z==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,S=S?S.__html:void 0,R!=null&&S!==R&&(g=g||[]).push(z,R)):z==="children"?typeof R!="string"&&typeof R!="number"||(g=g||[]).push(z,""+R):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(R!=null&&z==="onScroll"&&He("scroll",r),g||S===R||(g=[])):(g=g||[]).push(z,R))}a&&(g=g||[]).push("style",a);var z=g;(i.updateQueue=z)&&(i.flags|=4)}},Rg=function(r,i,a,c){a!==c&&(i.flags|=4)};function Ma(r,i){if(!Xe)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function jt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function PE(r,i,a){var c=i.pendingProps;switch(Nd(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return Xt(i.type)&&cu(),jt(i),null;case 3:return c=i.stateNode,go(),Ke(Jt),Ke(Mt),$d(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(mu(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mn!==null&&(_h(Mn),Mn=null))),lh(r,i),jt(i),null;case 5:Bd(i);var h=si(Pa.current);if(a=i.type,r!==null&&i.stateNode!=null)Cg(r,i,a,c,h),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jt(i),null}if(r=si(er.current),mu(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Zn]=i,c[Aa]=g,r=(i.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(h=0;h<Ia.length;h++)He(Ia[h],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":Ni(c,g),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},He("invalid",c);break;case"textarea":bi(c,g),He("invalid",c)}na(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var S=g[E];E==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&au(c.textContent,S,r),h=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&au(c.textContent,S,r),h=["children",""+S]):o.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&He("scroll",c)}switch(a){case"input":pr(c),Dl(c,g,!0);break;case"textarea":pr(c),Jo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=lu)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=E.createElement(a,{is:c.is}):(r=E.createElement(a),a==="select"&&(E=r,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):r=E.createElementNS(r,a),r[Zn]=i,r[Aa]=c,kg(r,i,!1,!1),i.stateNode=r;e:{switch(E=ra(a,c),a){case"dialog":He("cancel",r),He("close",r),h=c;break;case"iframe":case"object":case"embed":He("load",r),h=c;break;case"video":case"audio":for(h=0;h<Ia.length;h++)He(Ia[h],r);h=c;break;case"source":He("error",r),h=c;break;case"img":case"image":case"link":He("error",r),He("load",r),h=c;break;case"details":He("toggle",r),h=c;break;case"input":Ni(r,c),h=Ls(r,c),He("invalid",r);break;case"option":h=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},h=te({},c,{value:void 0}),He("invalid",r);break;case"textarea":bi(r,c),h=Yo(r,c),He("invalid",r);break;default:h=c}na(a,h),S=h;for(g in S)if(S.hasOwnProperty(g)){var R=S[g];g==="style"?ea(r,R):g==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Xo(r,R)):g==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Kr(r,R):typeof R=="number"&&Kr(r,""+R):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?R!=null&&g==="onScroll"&&He("scroll",r):R!=null&&ie(r,g,R,E))}switch(a){case"input":pr(r),Dl(r,c,!1);break;case"textarea":pr(r),Jo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?gr(r,!!c.multiple,g,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=lu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jt(i),null;case 6:if(r&&i.stateNode!=null)Rg(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=si(Pa.current),si(er.current),mu(i)){if(c=i.stateNode,a=i.memoizedProps,c[Zn]=i,(g=c.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:au(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&au(c.nodeValue,a,(r.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Zn]=i,i.stateNode=c}return jt(i),null;case 13:if(Ke(Ze),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bm(),ho(),i.flags|=98560,g=!1;else if(g=mu(i),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Zn]=i}else ho(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),g=!1}else Mn!==null&&(_h(Mn),Mn=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Ze.current&1)!==0?wt===0&&(wt=3):Th())),i.updateQueue!==null&&(i.flags|=4),jt(i),null);case 4:return go(),lh(r,i),r===null&&xa(i.stateNode.containerInfo),jt(i),null;case 10:return Md(i.type._context),jt(i),null;case 17:return Xt(i.type)&&cu(),jt(i),null;case 19:if(Ke(Ze),g=i.memoizedState,g===null)return jt(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)Ma(g,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(E=Eu(r),E!==null){for(i.flags|=128,Ma(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,r=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),i.child}r=r.sibling}g.tail!==null&&qe()>wo&&(i.flags|=128,c=!0,Ma(g,!1),i.lanes=4194304)}else{if(!c)if(r=Eu(E),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Xe)return jt(i),null}else 2*qe()-g.renderingStartTime>wo&&a!==1073741824&&(i.flags|=128,c=!0,Ma(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(a=g.last,a!==null?a.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qe(),i.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),i):(jt(i),null);case 22:case 23:return Eh(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(dn&1073741824)!==0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function bE(r,i){switch(Nd(i),i.tag){case 1:return Xt(i.type)&&cu(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return go(),Ke(Jt),Ke(Mt),$d(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return Bd(i),null;case 13:if(Ke(Ze),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ho()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Ke(Ze),null;case 4:return go(),null;case 10:return Md(i.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var Nu=!1,Ft=!1,DE=typeof WeakSet=="function"?WeakSet:Set,ce=null;function vo(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,i,c)}else a.current=null}function uh(r,i,a){try{a()}catch(c){nt(r,i,c)}}var Ng=!1;function OE(r,i){if(Ed=ts,r=lm(),fd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,S=-1,R=-1,z=0,J=0,Z=r,Y=null;t:for(;;){for(var oe;Z!==a||h!==0&&Z.nodeType!==3||(S=E+h),Z!==g||c!==0&&Z.nodeType!==3||(R=E+c),Z.nodeType===3&&(E+=Z.nodeValue.length),(oe=Z.firstChild)!==null;)Y=Z,Z=oe;for(;;){if(Z===r)break t;if(Y===a&&++z===h&&(S=E),Y===g&&++J===c&&(R=E),(oe=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=oe}a=S===-1||R===-1?null:{start:S,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Td={focusedElem:r,selectionRange:a},ts=!1,ce=i;ce!==null;)if(i=ce,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,ce=r;else for(;ce!==null;){i=ce;try{var de=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,it=de.memoizedState,F=i.stateNode,D=F.getSnapshotBeforeUpdate(i.elementType===i.type?fe:Ln(i.type,fe),it);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){nt(i,i.return,ne)}if(r=i.sibling,r!==null){r.return=i.return,ce=r;break}ce=i.return}return de=Ng,Ng=!1,de}function La(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&r)===r){var g=h.destroy;h.destroy=void 0,g!==void 0&&uh(i,a,g)}h=h.next}while(h!==c)}}function Pu(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ch(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Pg(r){var i=r.alternate;i!==null&&(r.alternate=null,Pg(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[Zn],delete i[Aa],delete i[Ad],delete i[gE],delete i[yE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function bg(r){return r.tag===5||r.tag===3||r.tag===4}function Dg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||bg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function dh(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=lu));else if(c!==4&&(r=r.child,r!==null))for(dh(r,i,a),r=r.sibling;r!==null;)dh(r,i,a),r=r.sibling}function hh(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(hh(r,i,a),r=r.sibling;r!==null;)hh(r,i,a),r=r.sibling}var Pt=null,jn=!1;function cs(r,i,a){for(a=a.child;a!==null;)Og(r,i,a),a=a.sibling}function Og(r,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Hs,a)}catch{}switch(a.tag){case 5:Ft||vo(a,i);case 6:var c=Pt,h=jn;Pt=null,cs(r,i,a),Pt=c,jn=h,Pt!==null&&(jn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(jn?(r=Pt,a=a.stateNode,r.nodeType===8?Sd(r.parentNode,a):r.nodeType===1&&Sd(r,a),Dn(r)):Sd(Pt,a.stateNode));break;case 4:c=Pt,h=jn,Pt=a.stateNode.containerInfo,jn=!0,cs(r,i,a),Pt=c,jn=h;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&uh(a,i,E),h=h.next}while(h!==c)}cs(r,i,a);break;case 1:if(!Ft&&(vo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){nt(a,i,S)}cs(r,i,a);break;case 21:cs(r,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,cs(r,i,a),Ft=c):cs(r,i,a);break;default:cs(r,i,a)}}function Vg(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new DE),i.forEach(function(c){var h=$E.bind(null,r,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Fn(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=r,E=i,S=E;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,jn=!1;break e;case 3:Pt=S.stateNode.containerInfo,jn=!0;break e;case 4:Pt=S.stateNode.containerInfo,jn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));Og(g,E,h),Pt=null,jn=!1;var R=h.alternate;R!==null&&(R.return=null),h.return=null}catch(z){nt(h,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mg(i,r),i=i.sibling}function Mg(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(i,r),nr(r),c&4){try{La(3,r,r.return),Pu(3,r)}catch(fe){nt(r,r.return,fe)}try{La(5,r,r.return)}catch(fe){nt(r,r.return,fe)}}break;case 1:Fn(i,r),nr(r),c&512&&a!==null&&vo(a,a.return);break;case 5:if(Fn(i,r),nr(r),c&512&&a!==null&&vo(a,a.return),r.flags&32){var h=r.stateNode;try{Kr(h,"")}catch(fe){nt(r,r.return,fe)}}if(c&4&&(h=r.stateNode,h!=null)){var g=r.memoizedProps,E=a!==null?a.memoizedProps:g,S=r.type,R=r.updateQueue;if(r.updateQueue=null,R!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&Go(h,g),ra(S,E);var z=ra(S,g);for(E=0;E<R.length;E+=2){var J=R[E],Z=R[E+1];J==="style"?ea(h,Z):J==="dangerouslySetInnerHTML"?Xo(h,Z):J==="children"?Kr(h,Z):ie(h,J,Z,z)}switch(S){case"input":Qo(h,g);break;case"textarea":Di(h,g);break;case"select":var Y=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?gr(h,!!g.multiple,oe,!1):Y!==!!g.multiple&&(g.defaultValue!=null?gr(h,!!g.multiple,g.defaultValue,!0):gr(h,!!g.multiple,g.multiple?[]:"",!1))}h[Aa]=g}catch(fe){nt(r,r.return,fe)}}break;case 6:if(Fn(i,r),nr(r),c&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,g=r.memoizedProps;try{h.nodeValue=g}catch(fe){nt(r,r.return,fe)}}break;case 3:if(Fn(i,r),nr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(i.containerInfo)}catch(fe){nt(r,r.return,fe)}break;case 4:Fn(i,r),nr(r);break;case 13:Fn(i,r),nr(r),h=r.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(mh=qe())),c&4&&Vg(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(z=Ft)||J,Fn(i,r),Ft=z):Fn(i,r),nr(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!J&&(r.mode&1)!==0)for(ce=r,J=r.child;J!==null;){for(Z=ce=J;ce!==null;){switch(Y=ce,oe=Y.child,Y.tag){case 0:case 11:case 14:case 15:La(4,Y,Y.return);break;case 1:vo(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){c=Y,a=Y.return;try{i=c,de.props=i.memoizedProps,de.state=i.memoizedState,de.componentWillUnmount()}catch(fe){nt(c,a,fe)}}break;case 5:vo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Fg(Z);continue}}oe!==null?(oe.return=Y,ce=oe):Fg(Z)}J=J.sibling}e:for(J=null,Z=r;;){if(Z.tag===5){if(J===null){J=Z;try{h=Z.stateNode,z?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=Z.stateNode,R=Z.memoizedProps.style,E=R!=null&&R.hasOwnProperty("display")?R.display:null,S.style.display=Zo("display",E))}catch(fe){nt(r,r.return,fe)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(fe){nt(r,r.return,fe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Fn(i,r),nr(r),c&4&&Vg(r);break;case 21:break;default:Fn(i,r),nr(r)}}function nr(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(bg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Kr(h,""),c.flags&=-33);var g=Dg(r);hh(r,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,S=Dg(r);dh(r,S,E);break;default:throw Error(t(161))}}catch(R){nt(r,r.return,R)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function VE(r,i,a){ce=r,Lg(r)}function Lg(r,i,a){for(var c=(r.mode&1)!==0;ce!==null;){var h=ce,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Nu;if(!E){var S=h.alternate,R=S!==null&&S.memoizedState!==null||Ft;S=Nu;var z=Ft;if(Nu=E,(Ft=R)&&!z)for(ce=h;ce!==null;)E=ce,R=E.child,E.tag===22&&E.memoizedState!==null?Ug(h):R!==null?(R.return=E,ce=R):Ug(h);for(;g!==null;)ce=g,Lg(g),g=g.sibling;ce=h,Nu=S,Ft=z}jg(r)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,ce=g):jg(r)}}function jg(r){for(;ce!==null;){var i=ce;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||Pu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ln(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Fm(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Fm(i,E,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var R=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var J=z.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&Dn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&ch(i)}catch(Y){nt(i,i.return,Y)}}if(i===r){ce=null;break}if(a=i.sibling,a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Fg(r){for(;ce!==null;){var i=ce;if(i===r){ce=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Ug(r){for(;ce!==null;){var i=ce;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Pu(4,i)}catch(R){nt(i,a,R)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(R){nt(i,h,R)}}var g=i.return;try{ch(i)}catch(R){nt(i,g,R)}break;case 5:var E=i.return;try{ch(i)}catch(R){nt(i,E,R)}}}catch(R){nt(i,i.return,R)}if(i===r){ce=null;break}var S=i.sibling;if(S!==null){S.return=i.return,ce=S;break}ce=i.return}}var ME=Math.ceil,bu=ue.ReactCurrentDispatcher,fh=ue.ReactCurrentOwner,In=ue.ReactCurrentBatchConfig,Oe=0,xt=null,ut=null,bt=0,dn=0,_o=is(0),wt=0,ja=null,oi=0,Du=0,ph=0,Fa=null,en=null,mh=0,wo=1/0,Pr=null,Ou=!1,gh=null,ds=null,Vu=!1,hs=null,Mu=0,Ua=0,yh=null,Lu=-1,ju=0;function Gt(){return(Oe&6)!==0?qe():Lu!==-1?Lu:Lu=qe()}function fs(r){return(r.mode&1)===0?1:(Oe&2)!==0&&bt!==0?bt&-bt:_E.transition!==null?(ju===0&&(ju=Gs()),ju):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:pa(r.type)),r)}function Un(r,i,a,c){if(50<Ua)throw Ua=0,yh=null,Error(t(185));Jr(r,a,c),((Oe&2)===0||r!==xt)&&(r===xt&&((Oe&2)===0&&(Du|=a),wt===4&&ps(r,bt)),tn(r,c),a===1&&Oe===0&&(i.mode&1)===0&&(wo=qe()+500,hu&&as()))}function tn(r,i){var a=r.callbackNode;_r(r,i);var c=Ks(r,r===xt?bt:0);if(c===0)a!==null&&ua(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&ua(a),i===1)r.tag===0?vE(zg.bind(null,r)):km(zg.bind(null,r)),pE(function(){(Oe&6)===0&&as()}),a=null;else{switch(Zr(c)){case 1:a=Ws;break;case 4:a=Gr;break;case 16:a=gn;break;case 536870912:a=jl;break;default:a=gn}a=Yg(a,Bg.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Bg(r,i){if(Lu=-1,ju=0,(Oe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Eo()&&r.callbackNode!==a)return null;var c=Ks(r,r===xt?bt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Fu(r,c);else{i=c;var h=Oe;Oe|=2;var g=qg();(xt!==r||bt!==i)&&(Pr=null,wo=qe()+500,li(r,i));do try{FE();break}catch(S){$g(r,S)}while(!0);Vd(),bu.current=g,Oe=h,ut!==null?i=0:(xt=null,bt=0,i=wt)}if(i!==0){if(i===2&&(h=on(r),h!==0&&(c=h,i=vh(r,h))),i===1)throw a=ja,li(r,0),ps(r,c),tn(r,qe()),a;if(i===6)ps(r,c);else{if(h=r.current.alternate,(c&30)===0&&!LE(h)&&(i=Fu(r,c),i===2&&(g=on(r),g!==0&&(c=g,i=vh(r,g))),i===1))throw a=ja,li(r,0),ps(r,c),tn(r,qe()),a;switch(r.finishedWork=h,r.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ui(r,en,Pr);break;case 3:if(ps(r,c),(c&130023424)===c&&(i=mh+500-qe(),10<i)){if(Ks(r,0)!==0)break;if(h=r.suspendedLanes,(h&c)!==c){Gt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=xd(ui.bind(null,r,en,Pr),i);break}ui(r,en,Pr);break;case 4:if(ps(r,c),(c&4194240)===c)break;for(i=r.eventTimes,h=-1;0<c;){var E=31-Wt(c);g=1<<E,E=i[E],E>h&&(h=E),c&=~g}if(c=h,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ME(c/1960))-c,10<c){r.timeoutHandle=xd(ui.bind(null,r,en,Pr),c);break}ui(r,en,Pr);break;case 5:ui(r,en,Pr);break;default:throw Error(t(329))}}}return tn(r,qe()),r.callbackNode===a?Bg.bind(null,r):null}function vh(r,i){var a=Fa;return r.current.memoizedState.isDehydrated&&(li(r,i).flags|=256),r=Fu(r,i),r!==2&&(i=en,en=a,i!==null&&_h(i)),r}function _h(r){en===null?en=r:en.push.apply(en,r)}function LE(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Vn(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ps(r,i){for(i&=~ph,i&=~Du,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Wt(i),c=1<<a;r[a]=-1,i&=~c}}function zg(r){if((Oe&6)!==0)throw Error(t(327));Eo();var i=Ks(r,0);if((i&1)===0)return tn(r,qe()),null;var a=Fu(r,i);if(r.tag!==0&&a===2){var c=on(r);c!==0&&(i=c,a=vh(r,c))}if(a===1)throw a=ja,li(r,0),ps(r,i),tn(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,ui(r,en,Pr),tn(r,qe()),null}function wh(r,i){var a=Oe;Oe|=1;try{return r(i)}finally{Oe=a,Oe===0&&(wo=qe()+500,hu&&as())}}function ai(r){hs!==null&&hs.tag===0&&(Oe&6)===0&&Eo();var i=Oe;Oe|=1;var a=In.transition,c=Ne;try{if(In.transition=null,Ne=1,r)return r()}finally{Ne=c,In.transition=a,Oe=i,(Oe&6)===0&&as()}}function Eh(){dn=_o.current,Ke(_o)}function li(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,fE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Nd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&cu();break;case 3:go(),Ke(Jt),Ke(Mt),$d();break;case 5:Bd(c);break;case 4:go();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:Md(c.type._context);break;case 22:case 23:Eh()}a=a.return}if(xt=r,ut=r=ms(r.current,null),bt=dn=i,wt=0,ja=null,ph=Du=oi=0,en=Fa=null,ri!==null){for(i=0;i<ri.length;i++)if(a=ri[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}a.pending=c}ri=null}return r}function $g(r,i){do{var a=ut;try{if(Vd(),Tu.current=Au,Iu){for(var c=et.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Iu=!1}if(ii=0,It=_t=et=null,ba=!1,Da=0,fh.current=null,a===null||a.return===null){wt=1,ja=i,ut=null;break}e:{var g=r,E=a.return,S=a,R=i;if(i=bt,S.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var z=R,J=S,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var oe=pg(E);if(oe!==null){oe.flags&=-257,mg(oe,E,S,g,i),oe.mode&1&&fg(g,z,i),i=oe,R=z;var de=i.updateQueue;if(de===null){var fe=new Set;fe.add(R),i.updateQueue=fe}else de.add(R);break e}else{if((i&1)===0){fg(g,z,i),Th();break e}R=Error(t(426))}}else if(Xe&&S.mode&1){var it=pg(E);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),mg(it,E,S,g,i),Dd(yo(R,S));break e}}g=R=yo(R,S),wt!==4&&(wt=2),Fa===null?Fa=[g]:Fa.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var F=dg(g,R,i);jm(g,F);break e;case 1:S=R;var D=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ds===null||!ds.has(U)))){g.flags|=65536,i&=-i,g.lanes|=i;var ne=hg(g,S,i);jm(g,ne);break e}}g=g.return}while(g!==null)}Hg(a)}catch(me){i=me,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function qg(){var r=bu.current;return bu.current=Au,r===null?Au:r}function Th(){(wt===0||wt===3||wt===2)&&(wt=4),xt===null||(oi&268435455)===0&&(Du&268435455)===0||ps(xt,bt)}function Fu(r,i){var a=Oe;Oe|=2;var c=qg();(xt!==r||bt!==i)&&(Pr=null,li(r,i));do try{jE();break}catch(h){$g(r,h)}while(!0);if(Vd(),Oe=a,bu.current=c,ut!==null)throw Error(t(261));return xt=null,bt=0,wt}function jE(){for(;ut!==null;)Wg(ut)}function FE(){for(;ut!==null&&!Ml();)Wg(ut)}function Wg(r){var i=Qg(r.alternate,r,dn);r.memoizedProps=r.pendingProps,i===null?Hg(r):ut=i,fh.current=null}function Hg(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=PE(a,i,dn),a!==null){ut=a;return}}else{if(a=bE(a,i),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{wt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=r}while(i!==null);wt===0&&(wt=5)}function ui(r,i,a){var c=Ne,h=In.transition;try{In.transition=null,Ne=1,UE(r,i,a,c)}finally{In.transition=h,Ne=c}return null}function UE(r,i,a,c){do Eo();while(hs!==null);if((Oe&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===xt&&(ut=xt=null,bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vu||(Vu=!0,Yg(gn,function(){return Eo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=In.transition,In.transition=null;var E=Ne;Ne=1;var S=Oe;Oe|=4,fh.current=null,OE(r,a),Mg(a,r),oE(Td),ts=!!Ed,Td=Ed=null,r.current=a,VE(a),id(),Oe=S,Ne=E,In.transition=g}else r.current=a;if(Vu&&(Vu=!1,hs=r,Mu=h),g=r.pendingLanes,g===0&&(ds=null),Fl(a.stateNode),tn(r,qe()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Ou)throw Ou=!1,r=gh,gh=null,r;return(Mu&1)!==0&&r.tag!==0&&Eo(),g=r.pendingLanes,(g&1)!==0?r===yh?Ua++:(Ua=0,yh=r):Ua=0,as(),null}function Eo(){if(hs!==null){var r=Zr(Mu),i=In.transition,a=Ne;try{if(In.transition=null,Ne=16>r?16:r,hs===null)var c=!1;else{if(r=hs,hs=null,Mu=0,(Oe&6)!==0)throw Error(t(331));var h=Oe;for(Oe|=4,ce=r.current;ce!==null;){var g=ce,E=g.child;if((ce.flags&16)!==0){var S=g.deletions;if(S!==null){for(var R=0;R<S.length;R++){var z=S[R];for(ce=z;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:La(8,J,g)}var Z=J.child;if(Z!==null)Z.return=J,ce=Z;else for(;ce!==null;){J=ce;var Y=J.sibling,oe=J.return;if(Pg(J),J===z){ce=null;break}if(Y!==null){Y.return=oe,ce=Y;break}ce=oe}}}var de=g.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var it=fe.sibling;fe.sibling=null,fe=it}while(fe!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ce=E;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:La(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ce=F;break e}ce=g.return}}var D=r.current;for(ce=D;ce!==null;){E=ce;var U=E.child;if((E.subtreeFlags&2064)!==0&&U!==null)U.return=E,ce=U;else e:for(E=D;ce!==null;){if(S=ce,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Pu(9,S)}}catch(me){nt(S,S.return,me)}if(S===E){ce=null;break e}var ne=S.sibling;if(ne!==null){ne.return=S.return,ce=ne;break e}ce=S.return}}if(Oe=h,as(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Hs,r)}catch{}c=!0}return c}finally{Ne=a,In.transition=i}}return!1}function Kg(r,i,a){i=yo(a,i),i=dg(r,i,1),r=us(r,i,1),i=Gt(),r!==null&&(Jr(r,1,i),tn(r,i))}function nt(r,i,a){if(r.tag===3)Kg(r,r,a);else for(;i!==null;){if(i.tag===3){Kg(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ds===null||!ds.has(c))){r=yo(a,r),r=hg(i,r,1),i=us(i,r,1),r=Gt(),i!==null&&(Jr(i,1,r),tn(i,r));break}}i=i.return}}function BE(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=Gt(),r.pingedLanes|=r.suspendedLanes&a,xt===r&&(bt&a)===a&&(wt===4||wt===3&&(bt&130023424)===bt&&500>qe()-mh?li(r,0):ph|=a),tn(r,i)}function Gg(r,i){i===0&&((r.mode&1)===0?i=1:(i=$i,$i<<=1,($i&130023424)===0&&($i=4194304)));var a=Gt();r=Cr(r,i),r!==null&&(Jr(r,i,a),tn(r,a))}function zE(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Gg(r,a)}function $E(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gg(r,a)}var Qg;Qg=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||Jt.current)Zt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return Zt=!1,NE(r,i,a);Zt=(r.flags&131072)!==0}else Zt=!1,Xe&&(i.flags&1048576)!==0&&Cm(i,pu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ru(r,i),r=i.pendingProps;var h=lo(i,Mt.current);mo(i,a),h=Hd(null,i,c,r,h,a);var g=Kd();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xt(c)?(g=!0,du(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Fd(i),h.updater=ku,i.stateNode=h,h._reactInternals=i,Zd(i,c,r,a),i=rh(null,i,c,!0,g,a)):(i.tag=0,Xe&&g&&Rd(i),Kt(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ru(r,i),r=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=WE(c),r=Ln(c,r),h){case 0:i=nh(null,i,c,r,a);break e;case 1:i=Eg(null,i,c,r,a);break e;case 11:i=gg(null,i,c,r,a);break e;case 14:i=yg(null,i,c,Ln(c.type,r),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ln(c,h),nh(r,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ln(c,h),Eg(r,i,c,h,a);case 3:e:{if(Tg(i),r===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Lm(r,i),wu(i,c,null,a);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=yo(Error(t(423)),i),i=Ig(r,i,c,a,h);break e}else if(c!==h){h=yo(Error(t(424)),i),i=Ig(r,i,c,a,h);break e}else for(cn=ss(i.stateNode.containerInfo.firstChild),un=i,Xe=!0,Mn=null,a=Vm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ho(),c===h){i=Nr(r,i,a);break e}Kt(r,i,c,a)}i=i.child}return i;case 5:return Um(i),r===null&&bd(i),c=i.type,h=i.pendingProps,g=r!==null?r.memoizedProps:null,E=h.children,Id(c,h)?E=null:g!==null&&Id(c,g)&&(i.flags|=32),wg(r,i),Kt(r,i,E,a),i.child;case 6:return r===null&&bd(i),null;case 13:return xg(r,i,a);case 4:return Ud(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=fo(i,null,c,a):Kt(r,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ln(c,h),gg(r,i,c,h,a);case 7:return Kt(r,i,i.pendingProps,a),i.child;case 8:return Kt(r,i,i.pendingProps.children,a),i.child;case 12:return Kt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,E=h.value,We(yu,c._currentValue),c._currentValue=E,g!==null)if(Vn(g.value,E)){if(g.children===h.children&&!Jt.current){i=Nr(r,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var S=g.dependencies;if(S!==null){E=g.child;for(var R=S.firstContext;R!==null;){if(R.context===c){if(g.tag===1){R=Rr(-1,a&-a),R.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var J=z.pending;J===null?R.next=R:(R.next=J.next,J.next=R),z.pending=R}}g.lanes|=a,R=g.alternate,R!==null&&(R.lanes|=a),Ld(g.return,a,i),S.lanes|=a;break}R=R.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,S=E.alternate,S!==null&&(S.lanes|=a),Ld(E,a,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Kt(r,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,mo(i,a),h=En(h),c=c(h),i.flags|=1,Kt(r,i,c,a),i.child;case 14:return c=i.type,h=Ln(c,i.pendingProps),h=Ln(c.type,h),yg(r,i,c,h,a);case 15:return vg(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ln(c,h),Ru(r,i),i.tag=1,Xt(c)?(r=!0,du(i)):r=!1,mo(i,a),ug(i,c,h),Zd(i,c,h,a),rh(null,i,c,!0,r,a);case 19:return Ag(r,i,a);case 22:return _g(r,i,a)}throw Error(t(156,i.tag))};function Yg(r,i){return Bi(r,i)}function qE(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(r,i,a,c){return new qE(r,i,a,c)}function Ih(r){return r=r.prototype,!(!r||!r.isReactComponent)}function WE(r){if(typeof r=="function")return Ih(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===pt)return 14}return 2}function ms(r,i){var a=r.alternate;return a===null?(a=xn(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Uu(r,i,a,c,h,g){var E=2;if(c=r,typeof r=="function")Ih(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case N:return ci(a.children,h,g,i);case x:E=8,h|=8;break;case k:return r=xn(12,a,i,h|2),r.elementType=k,r.lanes=g,r;case C:return r=xn(13,a,i,h),r.elementType=C,r.lanes=g,r;case Ye:return r=xn(19,a,i,h),r.elementType=Ye,r.lanes=g,r;case Le:return Bu(a,h,g,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:E=10;break e;case M:E=9;break e;case L:E=11;break e;case pt:E=14;break e;case mt:E=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=xn(E,a,i,h),i.elementType=r,i.type=c,i.lanes=g,i}function ci(r,i,a,c){return r=xn(7,r,c,i),r.lanes=a,r}function Bu(r,i,a,c){return r=xn(22,r,c,i),r.elementType=Le,r.lanes=a,r.stateNode={isHidden:!1},r}function xh(r,i,a){return r=xn(6,r,null,i),r.lanes=a,r}function Sh(r,i,a){return i=xn(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function HE(r,i,a,c,h){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yr(0),this.expirationTimes=Yr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Ah(r,i,a,c,h,g,E,S,R){return r=new HE(r,i,a,S,R),i===1?(i=1,g===!0&&(i|=8)):i=0,g=xn(3,null,null,i),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(g),r}function KE(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function Jg(r){if(!r)return os;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Xt(a))return Sm(r,a,i)}return i}function Xg(r,i,a,c,h,g,E,S,R){return r=Ah(a,c,!0,r,h,g,E,S,R),r.context=Jg(null),a=r.current,c=Gt(),h=fs(a),g=Rr(c,h),g.callback=i??null,us(a,g,h),r.current.lanes=h,Jr(r,h,c),tn(r,c),r}function zu(r,i,a,c){var h=i.current,g=Gt(),E=fs(h);return a=Jg(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(g,E),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=us(h,i,E),r!==null&&(Un(r,h,E,g),_u(r,h,E)),E}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Zg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function kh(r,i){Zg(r,i),(r=r.alternate)&&Zg(r,i)}function GE(){return null}var ey=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ch(r){this._internalRoot=r}qu.prototype.render=Ch.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));zu(r,i,null,null)},qu.prototype.unmount=Ch.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;ai(function(){zu(null,r,null,null)}),i[xr]=null}};function qu(r){this._internalRoot=r}qu.prototype.unstable_scheduleHydration=function(r){if(r){var i=ql();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Qn.length&&i!==0&&i<Qn[a].priority;a++);Qn.splice(a,0,r),a===0&&Kl(r)}};function Rh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ty(){}function QE(r,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var z=$u(E);g.call(z)}}var E=Xg(i,c,r,0,null,!1,!1,"",ty);return r._reactRootContainer=E,r[xr]=E.current,xa(r.nodeType===8?r.parentNode:r),ai(),E}for(;h=r.lastChild;)r.removeChild(h);if(typeof c=="function"){var S=c;c=function(){var z=$u(R);S.call(z)}}var R=Ah(r,0,!1,null,null,!1,!1,"",ty);return r._reactRootContainer=R,r[xr]=R.current,xa(r.nodeType===8?r.parentNode:r),ai(function(){zu(i,R,a,c)}),R}function Hu(r,i,a,c,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var S=h;h=function(){var R=$u(E);S.call(R)}}zu(i,E,r,h)}else E=QE(a,i,r,h,c);return $u(E)}zl=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=Qr(i.pendingLanes);a!==0&&(Xr(i,a|1),tn(i,qe()),(Oe&6)===0&&(wo=qe()+500,as()))}break;case 13:ai(function(){var c=Cr(r,1);if(c!==null){var h=Gt();Un(c,r,1,h)}}),kh(r,1)}},qi=function(r){if(r.tag===13){var i=Cr(r,134217728);if(i!==null){var a=Gt();Un(i,r,134217728,a)}kh(r,134217728)}},$l=function(r){if(r.tag===13){var i=fs(r),a=Cr(r,i);if(a!==null){var c=Gt();Un(a,r,i,c)}kh(r,i)}},ql=function(){return Ne},Wl=function(r,i){var a=Ne;try{return Ne=r,i()}finally{Ne=a}},Vi=function(r,i,a){switch(i){case"input":if(Qo(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var h=uu(c);if(!h)throw Error(t(90));Ri(c),Qo(c,h)}}}break;case"textarea":Di(r,a);break;case"select":i=a.value,i!=null&&gr(r,!!a.multiple,i,!1)}},Bs=wh,ia=ai;var YE={usingClientEntryPoint:!1,Events:[ka,oo,uu,Kn,sa,wh]},Ba={findFiberByHostInstance:Zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JE={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=la(r),r===null?null:r.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||GE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Hs=Ku.inject(JE),sn=Ku}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE,nn.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rh(i))throw Error(t(200));return KE(r,i,null,a)},nn.createRoot=function(r,i){if(!Rh(r))throw Error(t(299));var a=!1,c="",h=ey;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Ah(r,1,!1,null,null,a,!1,c,h),r[xr]=i.current,xa(r.nodeType===8?r.parentNode:r),new Ch(i)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=la(i),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return ai(r)},nn.hydrate=function(r,i,a){if(!Wu(i))throw Error(t(200));return Hu(null,r,i,!0,a)},nn.hydrateRoot=function(r,i,a){if(!Rh(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",E=ey;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Xg(i,null,r,1,a??null,h,!1,g,E),r[xr]=i.current,xa(r),c)for(r=0;r<c.length;r++)a=c[r],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new qu(i)},nn.render=function(r,i,a){if(!Wu(i))throw Error(t(200));return Hu(null,r,i,!1,a)},nn.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(ai(function(){Hu(null,null,r,!1,function(){r._reactRootContainer=null,r[xr]=null})}),!0):!1},nn.unstable_batchedUpdates=wh,nn.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Hu(r,i,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var uy;function Qv(){if(uy)return bh.exports;uy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),bh.exports=lT(),bh.exports}var cy;function uT(){if(cy)return Gu;cy=1;var n=Qv();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var cT=uT();Qv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},nl.apply(this,arguments)}var xs;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(xs||(xs={}));const dy="popstate";function dT(n){n===void 0&&(n={});function e(s,o){let{pathname:l,search:d,hash:f}=s.location;return tf("",{pathname:l,search:d,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:uc(o)}return fT(e,t,null,n)}function at(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Yv(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hT(){return Math.random().toString(36).substr(2,8)}function hy(n,e){return{usr:n.state,key:n.key,idx:e}}function tf(n,e,t,s){return t===void 0&&(t=null),nl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?jo(e):e,{state:t,key:e&&e.key||s||hT()})}function uc(n){let{pathname:e="/",search:t="",hash:s=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function jo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substr(s),n=n.substr(0,s)),n&&(e.pathname=n)}return e}function fT(n,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,d=o.history,f=xs.Pop,p=null,v=w();v==null&&(v=0,d.replaceState(nl({},d.state,{idx:v}),""));function w(){return(d.state||{idx:null}).idx}function I(){f=xs.Pop;let b=w(),q=b==null?null:b-v;v=b,p&&p({action:f,location:$.location,delta:q})}function A(b,q){f=xs.Push;let ee=tf($.location,b,q);v=w()+1;let ie=hy(ee,v),ue=$.createHref(ee);try{d.pushState(ie,"",ue)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(ue)}l&&p&&p({action:f,location:$.location,delta:1})}function O(b,q){f=xs.Replace;let ee=tf($.location,b,q);v=w();let ie=hy(ee,v),ue=$.createHref(ee);d.replaceState(ie,"",ue),l&&p&&p({action:f,location:$.location,delta:0})}function W(b){let q=o.location.origin!=="null"?o.location.origin:o.location.href,ee=typeof b=="string"?b:uc(b);return ee=ee.replace(/ $/,"%20"),at(q,"No window.location.(origin|href) available to create URL for href: "+ee),new URL(ee,q)}let $={get action(){return f},get location(){return n(o,d)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(dy,I),p=b,()=>{o.removeEventListener(dy,I),p=null}},createHref(b){return e(o,b)},createURL:W,encodeLocation(b){let q=W(b);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:A,replace:O,go(b){return d.go(b)}};return $}var fy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(fy||(fy={}));function pT(n,e,t){return t===void 0&&(t="/"),mT(n,e,t)}function mT(n,e,t,s){let o=typeof e=="string"?jo(e):e,l=jf(o.pathname||"/",t);if(l==null)return null;let d=Jv(n);gT(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let v=CT(l);f=ST(d[p],v)}return f}function Jv(n,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,d,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};p.relativePath.startsWith("/")&&(at(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let v=As([s,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(at(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Jv(l.children,e,w,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:IT(v,l.index),routesMeta:w})};return n.forEach((l,d)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,d);else for(let p of Xv(l.path))o(l,d,p)}),e}function Xv(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let d=Xv(s.join("/")),f=[];return f.push(...d.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...d),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function gT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:xT(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const yT=/^:[\w-]+$/,vT=3,_T=2,wT=1,ET=10,TT=-2,py=n=>n==="*";function IT(n,e){let t=n.split("/"),s=t.length;return t.some(py)&&(s+=TT),e&&(s+=_T),t.filter(o=>!py(o)).reduce((o,l)=>o+(yT.test(l)?vT:l===""?wT:ET),s)}function xT(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function ST(n,e,t){let{routesMeta:s}=n,o={},l="/",d=[];for(let f=0;f<s.length;++f){let p=s[f],v=f===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",I=AT({path:p.relativePath,caseSensitive:p.caseSensitive,end:v},w),A=p.route;if(!I)return null;Object.assign(o,I.params),d.push({params:o,pathname:As([l,I.pathname]),pathnameBase:bT(As([l,I.pathnameBase])),route:A}),I.pathnameBase!=="/"&&(l=As([l,I.pathnameBase]))}return d}function AT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=kT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((v,w,I)=>{let{paramName:A,isOptional:O}=w;if(A==="*"){let $=f[I]||"";d=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const W=f[I];return O&&!W?v[A]=void 0:v[A]=(W||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:d,pattern:n}}function kT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Yv(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function CT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yv(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function jf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function RT(n,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?jo(n):n;return{pathname:t?t.startsWith("/")?t:NT(t,e):e,search:DT(s),hash:OT(o)}}function NT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Vh(n,e,t,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ff(n,e){let t=PT(n);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Uf(n,e,t,s){s===void 0&&(s=!1);let o;typeof n=="string"?o=jo(n):(o=nl({},n),at(!o.pathname||!o.pathname.includes("?"),Vh("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),Vh("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),Vh("#","search","hash",o)));let l=n===""||o.pathname==="",d=l?"/":o.pathname,f;if(d==null)f=t;else{let I=e.length-1;if(!s&&d.startsWith("..")){let A=d.split("/");for(;A[0]==="..";)A.shift(),I-=1;o.pathname=A.join("/")}f=I>=0?e[I]:"/"}let p=RT(o,f),v=d&&d!=="/"&&d.endsWith("/"),w=(l||d===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(v||w)&&(p.pathname+="/"),p}const As=n=>n.join("/").replace(/\/\/+/g,"/"),bT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),DT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,OT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function VT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Zv=["post","put","patch","delete"];new Set(Zv);const MT=["get",...Zv];new Set(MT);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},rl.apply(this,arguments)}const Bf=Q.createContext(null),LT=Q.createContext(null),bs=Q.createContext(null),Rc=Q.createContext(null),Ds=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),e_=Q.createContext(null);function jT(n,e){let{relative:t}=e===void 0?{}:e;Fo()||at(!1);let{basename:s,navigator:o}=Q.useContext(bs),{hash:l,pathname:d,search:f}=n_(n,{relative:t}),p=d;return s!=="/"&&(p=d==="/"?s:As([s,d])),o.createHref({pathname:p,search:f,hash:l})}function Fo(){return Q.useContext(Rc)!=null}function Uo(){return Fo()||at(!1),Q.useContext(Rc).location}function t_(n){Q.useContext(bs).static||Q.useLayoutEffect(n)}function zf(){let{isDataRoute:n}=Q.useContext(Ds);return n?JT():FT()}function FT(){Fo()||at(!1);let n=Q.useContext(Bf),{basename:e,future:t,navigator:s}=Q.useContext(bs),{matches:o}=Q.useContext(Ds),{pathname:l}=Uo(),d=JSON.stringify(Ff(o,t.v7_relativeSplatPath)),f=Q.useRef(!1);return t_(()=>{f.current=!0}),Q.useCallback(function(v,w){if(w===void 0&&(w={}),!f.current)return;if(typeof v=="number"){s.go(v);return}let I=Uf(v,JSON.parse(d),l,w.relative==="path");n==null&&e!=="/"&&(I.pathname=I.pathname==="/"?e:As([e,I.pathname])),(w.replace?s.replace:s.push)(I,w.state,w)},[e,s,d,l,n])}function n_(n,e){let{relative:t}=e===void 0?{}:e,{future:s}=Q.useContext(bs),{matches:o}=Q.useContext(Ds),{pathname:l}=Uo(),d=JSON.stringify(Ff(o,s.v7_relativeSplatPath));return Q.useMemo(()=>Uf(n,JSON.parse(d),l,t==="path"),[n,d,l,t])}function UT(n,e){return BT(n,e)}function BT(n,e,t,s){Fo()||at(!1);let{navigator:o}=Q.useContext(bs),{matches:l}=Q.useContext(Ds),d=l[l.length-1],f=d?d.params:{};d&&d.pathname;let p=d?d.pathnameBase:"/";d&&d.route;let v=Uo(),w;if(e){var I;let b=typeof e=="string"?jo(e):e;p==="/"||(I=b.pathname)!=null&&I.startsWith(p)||at(!1),w=b}else w=v;let A=w.pathname||"/",O=A;if(p!=="/"){let b=p.replace(/^\//,"").split("/");O="/"+A.replace(/^\//,"").split("/").slice(b.length).join("/")}let W=pT(n,{pathname:O}),$=HT(W&&W.map(b=>Object.assign({},b,{params:Object.assign({},f,b.params),pathname:As([p,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?p:As([p,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,s);return e&&$?Q.createElement(Rc.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:xs.Pop}},$):$}function zT(){let n=YT(),e=VT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:o},t):null,null)}const $T=Q.createElement(zT,null);class qT extends Q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Q.createElement(Ds.Provider,{value:this.props.routeContext},Q.createElement(e_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WT(n){let{routeContext:e,match:t,children:s}=n,o=Q.useContext(Bf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Q.createElement(Ds.Provider,{value:e},s)}function HT(n,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let d=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=d.findIndex(I=>I.route.id&&(f==null?void 0:f[I.route.id])!==void 0);w>=0||at(!1),d=d.slice(0,Math.min(d.length,w+1))}let p=!1,v=-1;if(t&&s&&s.v7_partialHydration)for(let w=0;w<d.length;w++){let I=d[w];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(v=w),I.route.id){let{loaderData:A,errors:O}=t,W=I.route.loader&&A[I.route.id]===void 0&&(!O||O[I.route.id]===void 0);if(I.route.lazy||W){p=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}return d.reduceRight((w,I,A)=>{let O,W=!1,$=null,b=null;t&&(O=f&&I.route.id?f[I.route.id]:void 0,$=I.route.errorElement||$T,p&&(v<0&&A===0?(XT("route-fallback"),W=!0,b=null):v===A&&(W=!0,b=I.route.hydrateFallbackElement||null)));let q=e.concat(d.slice(0,A+1)),ee=()=>{let ie;return O?ie=$:W?ie=b:I.route.Component?ie=Q.createElement(I.route.Component,null):I.route.element?ie=I.route.element:ie=w,Q.createElement(WT,{match:I,routeContext:{outlet:w,matches:q,isDataRoute:t!=null},children:ie})};return t&&(I.route.ErrorBoundary||I.route.errorElement||A===0)?Q.createElement(qT,{location:t.location,revalidation:t.revalidation,component:$,error:O,children:ee(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):ee()},null)}var r_=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(r_||{}),s_=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(s_||{});function KT(n){let e=Q.useContext(Bf);return e||at(!1),e}function GT(n){let e=Q.useContext(LT);return e||at(!1),e}function QT(n){let e=Q.useContext(Ds);return e||at(!1),e}function i_(n){let e=QT(),t=e.matches[e.matches.length-1];return t.route.id||at(!1),t.route.id}function YT(){var n;let e=Q.useContext(e_),t=GT(),s=i_();return e!==void 0?e:(n=t.errors)==null?void 0:n[s]}function JT(){let{router:n}=KT(r_.UseNavigateStable),e=i_(s_.UseNavigateStable),t=Q.useRef(!1);return t_(()=>{t.current=!0}),Q.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,rl({fromRouteId:e},l)))},[n,e])}const my={};function XT(n,e,t){my[n]||(my[n]=!0)}function ZT(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function o_(n){let{to:e,replace:t,state:s,relative:o}=n;Fo()||at(!1);let{future:l,static:d}=Q.useContext(bs),{matches:f}=Q.useContext(Ds),{pathname:p}=Uo(),v=zf(),w=Uf(e,Ff(f,l.v7_relativeSplatPath),p,o==="path"),I=JSON.stringify(w);return Q.useEffect(()=>v(JSON.parse(I),{replace:t,state:s,relative:o}),[v,I,o,t,s]),null}function vs(n){at(!1)}function eI(n){let{basename:e="/",children:t=null,location:s,navigationType:o=xs.Pop,navigator:l,static:d=!1,future:f}=n;Fo()&&at(!1);let p=e.replace(/^\/*/,"/"),v=Q.useMemo(()=>({basename:p,navigator:l,static:d,future:rl({v7_relativeSplatPath:!1},f)}),[p,f,l,d]);typeof s=="string"&&(s=jo(s));let{pathname:w="/",search:I="",hash:A="",state:O=null,key:W="default"}=s,$=Q.useMemo(()=>{let b=jf(w,p);return b==null?null:{location:{pathname:b,search:I,hash:A,state:O,key:W},navigationType:o}},[p,w,I,A,O,W,o]);return $==null?null:Q.createElement(bs.Provider,{value:v},Q.createElement(Rc.Provider,{children:t,value:$}))}function gy(n){let{children:e,location:t}=n;return UT(nf(e),t)}new Promise(()=>{});function nf(n,e){e===void 0&&(e=[]);let t=[];return Q.Children.forEach(n,(s,o)=>{if(!Q.isValidElement(s))return;let l=[...e,o];if(s.type===Q.Fragment){t.push.apply(t,nf(s.props.children,l));return}s.type!==vs&&at(!1),!s.props.index||!s.props.children||at(!1);let d={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=nf(s.props.children,l)),t.push(d)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rf(){return rf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},rf.apply(this,arguments)}function tI(n,e){if(n==null)return{};var t={},s=Object.keys(n),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function nI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rI(n,e){return n.button===0&&(!e||e==="_self")&&!nI(n)}const sI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iI="6";try{window.__reactRouterVersion=iI}catch{}const oI="startTransition",yy=iT[oI];function aI(n){let{basename:e,children:t,future:s,window:o}=n,l=Q.useRef();l.current==null&&(l.current=dT({window:o,v5Compat:!0}));let d=l.current,[f,p]=Q.useState({action:d.action,location:d.location}),{v7_startTransition:v}=s||{},w=Q.useCallback(I=>{v&&yy?yy(()=>p(I)):p(I)},[p,v]);return Q.useLayoutEffect(()=>d.listen(w),[d,w]),Q.useEffect(()=>ZT(s),[s]),Q.createElement(eI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:d,future:s})}const lI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vy=Q.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:d,state:f,target:p,to:v,preventScrollReset:w,viewTransition:I}=e,A=tI(e,sI),{basename:O}=Q.useContext(bs),W,$=!1;if(typeof v=="string"&&uI.test(v)&&(W=v,lI))try{let ie=new URL(window.location.href),ue=v.startsWith("//")?new URL(ie.protocol+v):new URL(v),le=jf(ue.pathname,O);ue.origin===ie.origin&&le!=null?v=le+ue.search+ue.hash:$=!0}catch{}let b=jT(v,{relative:o}),q=cI(v,{replace:d,state:f,target:p,preventScrollReset:w,relative:o,viewTransition:I});function ee(ie){s&&s(ie),ie.defaultPrevented||q(ie)}return Q.createElement("a",rf({},A,{href:W||b,onClick:$||l?s:ee,ref:t,target:p}))});var _y;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(_y||(_y={}));var wy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(wy||(wy={}));function cI(n,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:d,viewTransition:f}=e===void 0?{}:e,p=zf(),v=Uo(),w=n_(n,{relative:d});return Q.useCallback(I=>{if(rI(I,t)){I.preventDefault();let A=s!==void 0?s:uc(v)===uc(w);p(n,{replace:A,state:o,preventScrollReset:l,relative:d,viewTransition:f})}},[v,p,w,s,o,t,n,l,d,f])}const dI="modulepreload",hI=function(n){return"/"+n},Ey={},Ty=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let d=function(v){return Promise.all(v.map(w=>Promise.resolve(w).then(I=>({status:"fulfilled",value:I}),I=>({status:"rejected",reason:I}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=d(t.map(v=>{if(v=hI(v),v in Ey)return;Ey[v]=!0;const w=v.endsWith(".css"),I=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${I}`))return;const A=document.createElement("link");if(A.rel=w?"stylesheet":dI,w||(A.as="script"),A.crossOrigin="",A.href=v,p&&A.setAttribute("nonce",p),document.head.appendChild(A),w)return new Promise((O,W)=>{A.addEventListener("load",O),A.addEventListener("error",()=>W(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return o.then(d=>{for(const f of d||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var Iy={};/**
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
 */const a_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},fI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],d=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],d=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|d&63)}}return e.join("")},l_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],d=o+1<n.length,f=d?n[o+1]:0,p=o+2<n.length,v=p?n[o+2]:0,w=l>>2,I=(l&3)<<4|f>>4;let A=(f&15)<<2|v>>6,O=v&63;p||(O=64,d||(A=64)),s.push(t[w],t[I],t[A],t[O])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(a_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const v=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||v==null||I==null)throw new pI;const A=l<<2|f>>4;if(s.push(A),v!==64){const O=f<<4&240|v>>2;if(s.push(O),I!==64){const W=v<<6&192|I;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(n){const e=a_(n);return l_.encodeByteArray(e,!0)},cc=function(n){return mI(n).replace(/\./g,"")},u_=function(n){try{return l_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yI=()=>gI().__FIREBASE_DEFAULTS__,vI=()=>{if(typeof process>"u"||typeof Iy>"u")return;const n=Iy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_I=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&u_(n[1]);return e&&JSON.parse(e)},Nc=()=>{try{return yI()||vI()||_I()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},c_=n=>{var e,t;return(t=(e=Nc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wI=n=>{const e=c_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},d_=()=>{var n;return(n=Nc())===null||n===void 0?void 0:n.config},h_=n=>{var e;return(e=Nc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function TI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cc(JSON.stringify(t)),cc(JSON.stringify(d)),""].join(".")}/**
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
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function II(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function xI(){var n;const e=(n=Nc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CI(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function RI(){return!xI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function f_(){try{return typeof indexedDB=="object"}catch{return!1}}function p_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function NI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const PI="FirebaseError";class hr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=PI,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],d=l?bI(l,s):"Error",f=`${this.serviceName}: ${d} (${o}).`;return new hr(o,f,s)}}function bI(n,e){return n.replace(DI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const DI=/\{\$([^}]+)}/g;function OI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dc(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],d=e[o];if(xy(l)&&xy(d)){if(!dc(l,d))return!1}else if(l!==d)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function xy(n){return n!==null&&typeof n=="object"}/**
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
 */function yl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function qa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Wa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function VI(n,e){const t=new MI(n,e);return t.subscribe.bind(t)}class MI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Mh),o.error===void 0&&(o.error=Mh),o.complete===void 0&&(o.complete=Mh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mh(){}/**
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
 */function rt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const di="[DEFAULT]";/**
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
 */class jI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new EI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UI(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&d.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const d=this.instances.get(o);return d&&e(d,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:FI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FI(n){return n===di?void 0:n}function UI(n){return n.instantiationMode==="EAGER"}/**
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
 */class BI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const zI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},$I=Pe.INFO,qI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},WI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=qI[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $f{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=WI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const HI=(n,e)=>e.some(t=>n instanceof t);let Sy,Ay;function KI(){return Sy||(Sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GI(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,sf=new WeakMap,g_=new WeakMap,Lh=new WeakMap,qf=new WeakMap;function QI(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",d)},l=()=>{t(Lr(n.result)),o()},d=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&m_.set(t,n)}).catch(()=>{}),qf.set(e,n),e}function YI(n){if(sf.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",d),n.removeEventListener("abort",d)},l=()=>{t(),o()},d=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",d),n.addEventListener("abort",d)});sf.set(n,e)}let of={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||g_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function JI(n){of=n(of)}function XI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(jh(this),e,...t);return g_.set(s,e.sort?e.sort():[e]),Lr(s)}:GI().includes(n)?function(...e){return n.apply(jh(this),e),Lr(m_.get(this))}:function(...e){return Lr(n.apply(jh(this),e))}}function ZI(n){return typeof n=="function"?XI(n):(n instanceof IDBTransaction&&YI(n),HI(n,KI())?new Proxy(n,of):n)}function Lr(n){if(n instanceof IDBRequest)return QI(n);if(Lh.has(n))return Lh.get(n);const e=ZI(n);return e!==n&&(Lh.set(n,e),qf.set(e,n)),e}const jh=n=>qf.get(n);function Pc(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const d=indexedDB.open(n,e),f=Lr(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Lr(d.result),p.oldVersion,p.newVersion,Lr(d.transaction),p)}),t&&d.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}function Fh(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),Lr(t).then(()=>{})}const ex=["get","getKey","getAll","getAllKeys","count"],tx=["put","add","delete","clear"],Uh=new Map;function ky(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=tx.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||ex.includes(t)))return;const l=async function(d,...f){const p=this.transaction(d,o?"readwrite":"readonly");let v=p.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&p.done]))[0]};return Uh.set(e,l),l}JI(n=>({...n,get:(e,t,s)=>ky(e,t)||n.get(e,t,s),has:(e,t)=>!!ky(e,t)||n.has(e,t)}));/**
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
 */class nx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function rx(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const af="@firebase/app",Cy="0.10.13";/**
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
 */const zr=new $f("@firebase/app"),sx="@firebase/app-compat",ix="@firebase/analytics-compat",ox="@firebase/analytics",ax="@firebase/app-check-compat",lx="@firebase/app-check",ux="@firebase/auth",cx="@firebase/auth-compat",dx="@firebase/database",hx="@firebase/data-connect",fx="@firebase/database-compat",px="@firebase/functions",mx="@firebase/functions-compat",gx="@firebase/installations",yx="@firebase/installations-compat",vx="@firebase/messaging",_x="@firebase/messaging-compat",wx="@firebase/performance",Ex="@firebase/performance-compat",Tx="@firebase/remote-config",Ix="@firebase/remote-config-compat",xx="@firebase/storage",Sx="@firebase/storage-compat",Ax="@firebase/firestore",kx="@firebase/vertexai-preview",Cx="@firebase/firestore-compat",Rx="firebase",Nx="10.14.1";/**
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
 */const lf="[DEFAULT]",Px={[af]:"fire-core",[sx]:"fire-core-compat",[ox]:"fire-analytics",[ix]:"fire-analytics-compat",[lx]:"fire-app-check",[ax]:"fire-app-check-compat",[ux]:"fire-auth",[cx]:"fire-auth-compat",[dx]:"fire-rtdb",[hx]:"fire-data-connect",[fx]:"fire-rtdb-compat",[px]:"fire-fn",[mx]:"fire-fn-compat",[gx]:"fire-iid",[yx]:"fire-iid-compat",[vx]:"fire-fcm",[_x]:"fire-fcm-compat",[wx]:"fire-perf",[Ex]:"fire-perf-compat",[Tx]:"fire-rc",[Ix]:"fire-rc-compat",[xx]:"fire-gcs",[Sx]:"fire-gcs-compat",[Ax]:"fire-fst",[Cx]:"fire-fst-compat",[kx]:"fire-vertex","fire-js":"fire-js",[Rx]:"fire-js-all"};/**
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
 */const hc=new Map,bx=new Map,uf=new Map;function Ry(n,e){try{n.container.addComponent(e)}catch(t){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cr(n){const e=n.name;if(uf.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,n);for(const t of hc.values())Ry(t,n);for(const t of bx.values())Ry(t,n);return!0}function Bo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rr(n){return n.settings!==void 0}/**
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
 */const Dx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ks=new Si("app","Firebase",Dx);/**
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
 */class Ox{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ks.create("app-deleted",{appName:this._name})}}/**
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
 */const zo=Nx;function y_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lf,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ks.create("bad-app-name",{appName:String(o)});if(t||(t=d_()),!t)throw ks.create("no-options");const l=hc.get(o);if(l){if(dc(t,l.options)&&dc(s,l.config))return l;throw ks.create("duplicate-app",{appName:o})}const d=new BI(o);for(const p of uf.values())d.addComponent(p);const f=new Ox(t,s,d);return hc.set(o,f),f}function Wf(n=lf){const e=hc.get(n);if(!e&&n===lf&&d_())return y_();if(!e)throw ks.create("no-app",{appName:n});return e}function Sn(n,e,t){var s;let o=(s=Px[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),d=e.match(/\s|\//);if(l||d){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(f.join(" "));return}cr(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Vx="firebase-heartbeat-database",Mx=1,sl="firebase-heartbeat-store";let Bh=null;function v_(){return Bh||(Bh=Pc(Vx,Mx,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(sl)}catch(t){console.warn(t)}}}}).catch(n=>{throw ks.create("idb-open",{originalErrorMessage:n.message})})),Bh}async function Lx(n){try{const t=(await v_()).transaction(sl),s=await t.objectStore(sl).get(__(n));return await t.done,s}catch(e){if(e instanceof hr)zr.warn(e.message);else{const t=ks.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(t.message)}}}async function Ny(n,e){try{const s=(await v_()).transaction(sl,"readwrite");await s.objectStore(sl).put(e,__(n)),await s.done}catch(t){if(t instanceof hr)zr.warn(t.message);else{const s=ks.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zr.warn(s.message)}}}function __(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jx=1024,Fx=720*60*60*1e3;class Ux{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Py();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(d=>d.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=Fx}),this._storage.overwrite(this._heartbeatsCache))}catch(s){zr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Py(),{heartbeatsToSend:s,unsentEntries:o}=Bx(this._heartbeatsCache.heartbeats),l=cc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return zr.warn(t),""}}}function Py(){return new Date().toISOString().substring(0,10)}function Bx(n,e=jx){const t=[];let s=n.slice();for(const o of n){const l=t.find(d=>d.agent===o.agent);if(l){if(l.dates.push(o.date),by(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),by(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Lx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ny(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ny(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function by(n){return cc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function $x(n){cr(new $n("platform-logger",e=>new nx(e),"PRIVATE")),cr(new $n("heartbeat",e=>new Ux(e),"PRIVATE")),Sn(af,Cy,n),Sn(af,Cy,"esm2017"),Sn("fire-js","")}$x("");function Hf(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t}function w_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qx=w_,E_=new Si("auth","Firebase",w_());/**
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
 */const fc=new $f("@firebase/auth");function Wx(n,...e){fc.logLevel<=Pe.WARN&&fc.warn(`Auth (${zo}): ${n}`,...e)}function ec(n,...e){fc.logLevel<=Pe.ERROR&&fc.error(`Auth (${zo}): ${n}`,...e)}/**
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
 */function qn(n,...e){throw Kf(n,...e)}function ir(n,...e){return Kf(n,...e)}function T_(n,e,t){const s=Object.assign(Object.assign({},qx()),{[e]:t});return new Si("auth","Firebase",s).create(e,{appName:n.name})}function jr(n){return T_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kf(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return E_.create(n,...e)}function we(n,e,...t){if(!n)throw Kf(e,...t)}function Or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ec(e),new Error(e)}function $r(n,e){n||Or(e)}/**
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
 */function cf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Hx(){return Dy()==="http:"||Dy()==="https:"}function Dy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Kx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hx()||AI()||"connection"in navigator)?navigator.onLine:!0}function Gx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,$r(t>e,"Short delay should be less than long delay!"),this.isMobile=II()||kI()}get(){return Kx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gf(n,e){$r(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class I_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yx=new vl(3e4,6e4);function Os(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vs(n,e,t,s,o={}){return x_(n,o,async()=>{let l={},d={};s&&(e==="GET"?d=s:l={body:JSON.stringify(s)});const f=yl(Object.assign({key:n.config.apiKey},d)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const v=Object.assign({method:e,headers:p},l);return SI()||(v.referrerPolicy="no-referrer"),I_.fetch()(S_(n,n.config.apiHost,t,f),v)})}async function x_(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Qx),e);try{const o=new Xx(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const d=await l.json();if("needConfirmation"in d)throw Qu(n,"account-exists-with-different-credential",d);if(l.ok&&!("errorMessage"in d))return d;{const f=l.ok?d.errorMessage:d.error.message,[p,v]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",d);if(p==="USER_DISABLED")throw Qu(n,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw T_(n,w,v);qn(n,w)}}catch(o){if(o instanceof hr)throw o;qn(n,"network-request-failed",{message:String(o)})}}async function _l(n,e,t,s,o={}){const l=await Vs(n,e,t,s,o);return"mfaPendingCredential"in l&&qn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function S_(n,e,t,s){const o=`${e}${t}?${s}`;return n.config.emulator?Gf(n.config,o):`${n.config.apiScheme}://${o}`}function Jx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ir(this.auth,"network-request-failed")),Yx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qu(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ir(n,e,s);return o.customData._tokenResponse=t,o}function Oy(n){return n!==void 0&&n.enterprise!==void 0}class Zx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function eS(n,e){return Vs(n,"GET","/v2/recaptchaConfig",Os(n,e))}/**
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
 */async function tS(n,e){return Vs(n,"POST","/v1/accounts:delete",e)}async function A_(n,e){return Vs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nS(n,e=!1){const t=rt(n),s=await t.getIdToken(e),o=Qf(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,d=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Qa(zh(o.auth_time)),issuedAtTime:Qa(zh(o.iat)),expirationTime:Qa(zh(o.exp)),signInProvider:d||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function zh(n){return Number(n)*1e3}function Qf(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const o=u_(t);return o?JSON.parse(o):(ec("Failed to decode base64 JWT payload"),null)}catch(o){return ec("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Vy(n){const e=Qf(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function il(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof hr&&rS(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function rS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class sS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class df{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pc(n){var e;const t=n.auth,s=await n.getIdToken(),o=await il(n,A_(t,{idToken:s}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const d=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?k_(l.providerUserInfo):[],f=oS(n.providerData,d),p=n.isAnonymous,v=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),w=p?v:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new df(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,I)}async function iS(n){const e=rt(n);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oS(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function k_(n){return n.map(e=>{var{providerId:t}=e,s=Hf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function aS(n,e){const t=await x_(n,{},async()=>{const s=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,d=S_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",I_.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lS(n,e){return Vs(n,"POST","/v2/accounts:revokeToken",Os(n,e))}/**
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
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Vy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await aS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,d=new Co;return s&&(we(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),d.expirationTime=l),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
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
 */function ys(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new df(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await il(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nS(this,e)}reload(){return iS(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await pc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await il(this,tS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,d,f,p,v,w;const I=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,W=(d=t.photoURL)!==null&&d!==void 0?d:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ee=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ie,emailVerified:ue,isAnonymous:le,providerData:ge,stsTokenManager:N}=t;we(ie&&N,e,"internal-error");const x=Co.fromJSON(this.name,N);we(typeof ie=="string",e,"internal-error"),ys(I,e.name),ys(A,e.name),we(typeof ue=="boolean",e,"internal-error"),we(typeof le=="boolean",e,"internal-error"),ys(O,e.name),ys(W,e.name),ys($,e.name),ys(b,e.name),ys(q,e.name),ys(ee,e.name);const k=new Vr({uid:ie,auth:e,email:A,emailVerified:ue,displayName:I,isAnonymous:le,photoURL:W,phoneNumber:O,tenantId:$,stsTokenManager:x,createdAt:q,lastLoginAt:ee});return ge&&Array.isArray(ge)&&(k.providerData=ge.map(P=>Object.assign({},P))),b&&(k._redirectEventId=b),k}static async _fromIdTokenResponse(e,t,s=!1){const o=new Co;o.updateFromServerResponse(t);const l=new Vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await pc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?k_(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Co;f.updateFromIdToken(s);const p=new Vr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:d}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new df(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,v),p}}/**
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
 */const My=new Map;function Mr(n){$r(n instanceof Function,"Expected a class definition");let e=My.get(n);return e?($r(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,My.set(n,e),e)}/**
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
 */class C_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}C_.type="NONE";const Ly=C_;/**
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
 */function tc(n,e,t){return`firebase:${n}:${e}:${t}`}class Ro{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=tc(this.userKey,o.apiKey,l),this.fullPersistenceKey=tc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ro(Mr(Ly),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Mr(Ly);const d=tc(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const w=await v._get(d);if(w){const I=Vr._fromJSON(e,w);v!==l&&(f=I),l=v;break}}catch{}const p=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ro(l,e,s):(l=p[0],f&&await l._set(d,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(d)}catch{}})),new Ro(l,e,s))}}/**
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
 */function jy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(V_(e))return"Webos";if(N_(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(D_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function R_(n=qt()){return/firefox\//i.test(n)}function N_(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(n=qt()){return/crios\//i.test(n)}function b_(n=qt()){return/iemobile/i.test(n)}function D_(n=qt()){return/android/i.test(n)}function O_(n=qt()){return/blackberry/i.test(n)}function V_(n=qt()){return/webos/i.test(n)}function Yf(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uS(n=qt()){var e;return Yf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cS(){return CI()&&document.documentMode===10}function M_(n=qt()){return Yf(n)||D_(n)||V_(n)||O_(n)||/windows phone/i.test(n)||b_(n)}/**
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
 */function L_(n,e=[]){let t;switch(n){case"Browser":t=jy(qt());break;case"Worker":t=`${jy(qt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zo}/${s}`}/**
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
 */class dS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((d,f)=>{try{const p=e(l);d(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function hS(n,e={}){return Vs(n,"GET","/v2/passwordPolicy",Os(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const fS=6;class pS{constructor(e){var t,s,o,l;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=d.minPasswordLength)!==null&&t!==void 0?t:fS,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class mS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fy(this),this.idTokenSubscription=new Fy(this),this.beforeStateQueue=new dS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await A_(this,{idToken:e}),s=await Vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rr(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(d){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(jr(this));const t=e?rt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hS(this),t=new pS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await lS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(f,this,"internal-error"),f.then(()=>{d||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{d=!0,p()}}else{const p=e.addObserver(t);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Wx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ai(n){return rt(n)}class Fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gS(n){bc=n}function j_(n){return bc.loadJS(n)}function yS(){return bc.recaptchaEnterpriseScript}function vS(){return bc.gapiScript}function _S(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const wS="recaptcha-enterprise",ES="NO_RECAPTCHA";class TS{constructor(e){this.type=wS,this.auth=Ai(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(d,f)=>{eS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new Zx(p);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,d(v.siteKey)}}).catch(p=>{f(p)})})}function o(l,d,f){const p=window.grecaptcha;Oy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(v=>{d(v)}).catch(()=>{d(ES)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,d)=>{s(this.auth).then(f=>{if(!t&&Oy(window.grecaptcha))o(f,l,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yS();p.length!==0&&(p+=f),j_(p).then(()=>{o(f,l,d)}).catch(v=>{d(v)})}}).catch(f=>{d(f)})})}}async function Uy(n,e,t,s=!1){const o=new TS(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const d=Object.assign({},e);return s?Object.assign(d,{captchaResp:l}):Object.assign(d,{captchaResponse:l}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function hf(n,e,t,s){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Uy(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Uy(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(l)})}/**
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
 */function IS(n,e){const t=Bo(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(dc(l,e??{}))return o;qn(o,"already-initialized")}return t.initialize({options:e})}function xS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function SS(n,e,t){const s=Ai(n);we(s._canInitEmulator,s,"emulator-config-failed"),we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=F_(e),{host:d,port:f}=AS(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),kS()}function F_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function AS(n){const e=F_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:By(s.substr(l.length+1))}}else{const[l,d]=s.split(":");return{host:l,port:By(d)}}}function By(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function CS(n,e){return Vs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RS(n,e){return _l(n,"POST","/v1/accounts:signInWithPassword",Os(n,e))}/**
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
 */async function NS(n,e){return _l(n,"POST","/v1/accounts:signInWithEmailLink",Os(n,e))}async function PS(n,e){return _l(n,"POST","/v1/accounts:signInWithEmailLink",Os(n,e))}/**
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
 */class ol extends Jf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ol(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ol(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hf(e,t,"signInWithPassword",RS);case"emailLink":return NS(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hf(e,s,"signUpPassword",CS);case"emailLink":return PS(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function No(n,e){return _l(n,"POST","/v1/accounts:signInWithIdp",Os(n,e))}/**
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
 */const bS="http://localhost";class gi extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Hf(t,["providerId","signInMethod"]);if(!s||!o)return null;const d=new gi(s,o);return d.idToken=l.idToken||void 0,d.accessToken=l.accessToken||void 0,d.secret=l.secret,d.nonce=l.nonce,d.pendingToken=l.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return No(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,No(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,No(e,t)}buildRequest(){const e={requestUri:bS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yl(t)}return e}}/**
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
 */function DS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OS(n){const e=qa(Wa(n)).link,t=e?qa(Wa(e)).deep_link_id:null,s=qa(Wa(n)).deep_link_id;return(s?qa(Wa(s)).link:null)||s||t||e||n}class Xf{constructor(e){var t,s,o,l,d,f;const p=qa(Wa(e)),v=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(s=p.oobCode)!==null&&s!==void 0?s:null,I=DS((o=p.mode)!==null&&o!==void 0?o:null);we(v&&w&&I,"argument-error"),this.apiKey=v,this.operation=I,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(d=p.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=OS(e);try{return new Xf(t)}catch{return null}}}/**
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
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,t){return ol._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Xf.parseLink(t);return we(s,"argument-error"),ol._fromEmailAndCode(e,s.code,s.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class U_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends U_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _s extends wl{constructor(){super("facebook.com")}static credential(e){return gi._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
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
 */class ws extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gi._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ws.credential(t,s)}catch{return null}}}ws.GOOGLE_SIGN_IN_METHOD="google.com";ws.PROVIDER_ID="google.com";/**
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
 */class Es extends wl{constructor(){super("github.com")}static credential(e){return gi._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch{return null}}}Es.GITHUB_SIGN_IN_METHOD="github.com";Es.PROVIDER_ID="github.com";/**
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
 */class Ts extends wl{constructor(){super("twitter.com")}static credential(e,t){return gi._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ts.credential(t,s)}catch{return null}}}Ts.TWITTER_SIGN_IN_METHOD="twitter.com";Ts.PROVIDER_ID="twitter.com";/**
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
 */async function VS(n,e){return _l(n,"POST","/v1/accounts:signUp",Os(n,e))}/**
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
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Vr._fromIdTokenResponse(e,s,o),d=zy(s);return new yi({user:l,providerId:d,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=zy(s);return new yi({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function zy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class mc extends hr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new mc(e,t,s,o)}}function B_(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(n,l,e,s):l})}async function MS(n,e,t=!1){const s=await il(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yi._forOperation(n,"link",s)}/**
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
 */async function LS(n,e,t=!1){const{auth:s}=n;if(rr(s.app))return Promise.reject(jr(s));const o="reauthenticate";try{const l=await il(n,B_(s,o,e,n),t);we(l.idToken,s,"internal-error");const d=Qf(l.idToken);we(d,s,"internal-error");const{sub:f}=d;return we(n.uid===f,s,"user-mismatch"),yi._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&qn(s,"user-mismatch"),l}}/**
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
 */async function z_(n,e,t=!1){if(rr(n.app))return Promise.reject(jr(n));const s="signIn",o=await B_(n,s,e),l=await yi._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function jS(n,e){return z_(Ai(n),e)}/**
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
 */async function $_(n){const e=Ai(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FS(n,e,t){if(rr(n.app))return Promise.reject(jr(n));const s=Ai(n),d=await hf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VS).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&$_(n),p}),f=await yi._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(f.user),f}function Zf(n,e,t){return rr(n.app)?Promise.reject(jr(n)):jS(rt(n),$o.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&$_(n),s})}function US(n,e,t,s){return rt(n).onIdTokenChanged(e,t,s)}function BS(n,e,t){return rt(n).beforeAuthStateChanged(e,t)}function zS(n,e,t,s){return rt(n).onAuthStateChanged(e,t,s)}function $h(n){return rt(n).signOut()}const gc="__sak";/**
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
 */class q_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $S=1e3,qS=10;class W_ extends q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(s);!t&&this.localCache[s]===d||this.notifyListeners(s,d)},l=this.storage.getItem(s);cS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,qS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const WS=W_;/**
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
 */class H_ extends q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}H_.type="SESSION";const K_=H_;/**
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
 */function HS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(d).map(async v=>v(t.origin,l)),p=await HS(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
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
 */function ep(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class KS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,d;return new Promise((f,p)=>{const v=ep("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:o,onMessage(I){const A=I;if(A.data.eventId===v)switch(A.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function or(){return window}function GS(n){or().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function G_(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function QS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function JS(){return G_()?self:null}/**
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
 */const Q_="firebaseLocalStorageDb",XS=1,yc="firebaseLocalStorage",Y_="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(n,e){return n.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function ZS(){const n=indexedDB.deleteDatabase(Q_);return new El(n).toPromise()}function ff(){const n=indexedDB.open(Q_,XS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(yc,{keyPath:Y_})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(yc)?e(s):(s.close(),await ZS(),e(await ff()))})})}async function $y(n,e,t){const s=Oc(n,!0).put({[Y_]:e,value:t});return new El(s).toPromise()}async function eA(n,e){const t=Oc(n,!1).get(e),s=await new El(t).toPromise();return s===void 0?null:s.value}function qy(n,e){const t=Oc(n,!0).delete(e);return new El(t).toPromise()}const tA=800,nA=3;class J_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ff(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>nA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(JS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await QS(),!this.activeServiceWorker)return;this.sender=new KS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ff();return await $y(e,gc,"1"),await qy(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>$y(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>eA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Oc(o,!1).getAll();return new El(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J_.type="LOCAL";const rA=J_;new vl(3e4,6e4);/**
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
 */function sA(n,e){return e?Mr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class tp extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,t){return No(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iA(n){return z_(n.auth,new tp(n),n.bypassAuthState)}function oA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),LS(t,new tp(n),n.bypassAuthState)}async function aA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),MS(t,new tp(n),n.bypassAuthState)}/**
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
 */class X_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iA;case"linkViaPopup":case"linkViaRedirect":return aA;case"reauthViaPopup":case"reauthViaRedirect":return oA;default:qn(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lA=new vl(2e3,1e4);class Ao extends X_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Ao.currentPopupAction&&Ao.currentPopupAction.cancel(),Ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lA.get())};e()}}Ao.currentPopupAction=null;/**
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
 */const uA="pendingRedirect",nc=new Map;class cA extends X_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const s=await dA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dA(n,e){const t=pA(e),s=fA(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function hA(n,e){nc.set(n._key(),e)}function fA(n){return Mr(n._redirectPersistence)}function pA(n){return tc(uA,n.config.apiKey,n.name)}async function mA(n,e,t=!1){if(rr(n.app))return Promise.reject(jr(n));const s=Ai(n),o=sA(s,e),d=await new cA(s,o,t).execute();return d&&!t&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const gA=600*1e3;class yA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Z_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wy(e))}saveEventToCache(e){this.cachedEventUids.add(Wy(e)),this.lastProcessedEventTime=Date.now()}}function Wy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Z_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z_(n);default:return!1}}/**
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
 */async function _A(n,e={}){return Vs(n,"GET","/v1/projects",e)}/**
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
 */const wA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EA=/^https?/;async function TA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _A(n);for(const t of e)try{if(IA(t))return}catch{}qn(n,"unauthorized-domain")}function IA(n){const e=cf(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const d=new URL(n);return d.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===s}if(!EA.test(t))return!1;if(wA.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const xA=new vl(3e4,6e4);function Hy(){const n=or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SA(n){return new Promise((e,t)=>{var s,o,l;function d(){Hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hy(),t(ir(n,"network-request-failed"))},timeout:xA.get()})}if(!((o=(s=or().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)d();else{const f=_S("iframefcb");return or()[f]=()=>{gapi.load?d():t(ir(n,"network-request-failed"))},j_(`${vS()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw rc=null,e})}let rc=null;function AA(n){return rc=rc||SA(n),rc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const kA=new vl(5e3,15e3),CA="__/auth/iframe",RA="emulator/auth/iframe",NA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bA(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gf(e,RA):`https://${n.config.authDomain}/${CA}`,s={apiKey:e.apiKey,appName:n.name,v:zo},o=PA.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${yl(s).slice(1)}`}async function DA(n){const e=await AA(n),t=or().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:bA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const d=ir(n,"network-request-failed"),f=or().setTimeout(()=>{l(d)},kA.get());function p(){or().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{l(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const OA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VA=500,MA=600,LA="_blank",jA="http://localhost";class Ky{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FA(n,e,t,s=VA,o=MA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},OA),{width:s.toString(),height:o.toString(),top:l,left:d}),v=qt().toLowerCase();t&&(f=P_(v)?LA:t),R_(v)&&(e=e||jA,p.scrollbars="yes");const w=Object.entries(p).reduce((A,[O,W])=>`${A}${O}=${W},`,"");if(uS(v)&&f!=="_self")return UA(e||"",f),new Ky(null);const I=window.open(e||"",f,w);we(I,n,"popup-blocked");try{I.focus()}catch{}return new Ky(I)}function UA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const BA="__/auth/handler",zA="emulator/auth/handler",$A=encodeURIComponent("fac");async function Gy(n,e,t,s,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const d={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:zo,eventId:o};if(e instanceof U_){e.setDefaultLanguage(n.languageCode),d.providerId=e.providerId||"",OI(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,I]of Object.entries({}))d[w]=I}if(e instanceof wl){const w=e.getScopes().filter(I=>I!=="");w.length>0&&(d.scopes=w.join(","))}n.tenantId&&(d.tid=n.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await n._getAppCheckToken(),v=p?`#${$A}=${encodeURIComponent(p)}`:"";return`${qA(n)}?${yl(f).slice(1)}${v}`}function qA({config:n}){return n.emulator?Gf(n,zA):`https://${n.authDomain}/${BA}`}/**
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
 */const qh="webStorageSupport";class WA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K_,this._completeRedirectFn=mA,this._overrideRedirectResult=hA}async _openPopup(e,t,s,o){var l;$r((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const d=await Gy(e,t,s,cf(),o);return FA(e,d,ep())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Gy(e,t,s,cf(),o);return GS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):($r(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await DA(e),s=new yA(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qh,{type:qh},o=>{var l;const d=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[qh];d!==void 0&&t(!!d),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return M_()||N_()||Yf()}}const HA=WA;var Qy="@firebase/auth",Yy="1.7.9";/**
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
 */class KA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QA(n){cr(new $n("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;we(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L_(n)},v=new mS(s,o,l,p);return xS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),cr(new $n("auth-internal",e=>{const t=Ai(e.getProvider("auth").getImmediate());return(s=>new KA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Qy,Yy,GA(n)),Sn(Qy,Yy,"esm2017")}/**
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
 */const YA=300,JA=h_("authIdTokenMaxAge")||YA;let Jy=null;const XA=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JA)return;const o=t==null?void 0:t.token;Jy!==o&&(Jy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ZA(n=Wf()){const e=Bo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=IS(n,{popupRedirectResolver:HA,persistence:[rA,WS,K_]}),s=h_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const d=XA(l.toString());BS(t,d,()=>d(t.currentUser)),US(t,f=>d(f))}}const o=c_("auth");return o&&SS(t,`http://${o}`),t}function ek(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gS({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",ek().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QA("Browser");var Xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pi,e0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,x){function k(){}k.prototype=x.prototype,N.D=x.prototype,N.prototype=new k,N.prototype.constructor=N,N.C=function(P,M,L){for(var C=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)C[Ye-2]=arguments[Ye];return x.prototype[M].apply(P,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,x,k){k||(k=0);var P=Array(16);if(typeof x=="string")for(var M=0;16>M;++M)P[M]=x.charCodeAt(k++)|x.charCodeAt(k++)<<8|x.charCodeAt(k++)<<16|x.charCodeAt(k++)<<24;else for(M=0;16>M;++M)P[M]=x[k++]|x[k++]<<8|x[k++]<<16|x[k++]<<24;x=N.g[0],k=N.g[1],M=N.g[2];var L=N.g[3],C=x+(L^k&(M^L))+P[0]+3614090360&4294967295;x=k+(C<<7&4294967295|C>>>25),C=L+(M^x&(k^M))+P[1]+3905402710&4294967295,L=x+(C<<12&4294967295|C>>>20),C=M+(k^L&(x^k))+P[2]+606105819&4294967295,M=L+(C<<17&4294967295|C>>>15),C=k+(x^M&(L^x))+P[3]+3250441966&4294967295,k=M+(C<<22&4294967295|C>>>10),C=x+(L^k&(M^L))+P[4]+4118548399&4294967295,x=k+(C<<7&4294967295|C>>>25),C=L+(M^x&(k^M))+P[5]+1200080426&4294967295,L=x+(C<<12&4294967295|C>>>20),C=M+(k^L&(x^k))+P[6]+2821735955&4294967295,M=L+(C<<17&4294967295|C>>>15),C=k+(x^M&(L^x))+P[7]+4249261313&4294967295,k=M+(C<<22&4294967295|C>>>10),C=x+(L^k&(M^L))+P[8]+1770035416&4294967295,x=k+(C<<7&4294967295|C>>>25),C=L+(M^x&(k^M))+P[9]+2336552879&4294967295,L=x+(C<<12&4294967295|C>>>20),C=M+(k^L&(x^k))+P[10]+4294925233&4294967295,M=L+(C<<17&4294967295|C>>>15),C=k+(x^M&(L^x))+P[11]+2304563134&4294967295,k=M+(C<<22&4294967295|C>>>10),C=x+(L^k&(M^L))+P[12]+1804603682&4294967295,x=k+(C<<7&4294967295|C>>>25),C=L+(M^x&(k^M))+P[13]+4254626195&4294967295,L=x+(C<<12&4294967295|C>>>20),C=M+(k^L&(x^k))+P[14]+2792965006&4294967295,M=L+(C<<17&4294967295|C>>>15),C=k+(x^M&(L^x))+P[15]+1236535329&4294967295,k=M+(C<<22&4294967295|C>>>10),C=x+(M^L&(k^M))+P[1]+4129170786&4294967295,x=k+(C<<5&4294967295|C>>>27),C=L+(k^M&(x^k))+P[6]+3225465664&4294967295,L=x+(C<<9&4294967295|C>>>23),C=M+(x^k&(L^x))+P[11]+643717713&4294967295,M=L+(C<<14&4294967295|C>>>18),C=k+(L^x&(M^L))+P[0]+3921069994&4294967295,k=M+(C<<20&4294967295|C>>>12),C=x+(M^L&(k^M))+P[5]+3593408605&4294967295,x=k+(C<<5&4294967295|C>>>27),C=L+(k^M&(x^k))+P[10]+38016083&4294967295,L=x+(C<<9&4294967295|C>>>23),C=M+(x^k&(L^x))+P[15]+3634488961&4294967295,M=L+(C<<14&4294967295|C>>>18),C=k+(L^x&(M^L))+P[4]+3889429448&4294967295,k=M+(C<<20&4294967295|C>>>12),C=x+(M^L&(k^M))+P[9]+568446438&4294967295,x=k+(C<<5&4294967295|C>>>27),C=L+(k^M&(x^k))+P[14]+3275163606&4294967295,L=x+(C<<9&4294967295|C>>>23),C=M+(x^k&(L^x))+P[3]+4107603335&4294967295,M=L+(C<<14&4294967295|C>>>18),C=k+(L^x&(M^L))+P[8]+1163531501&4294967295,k=M+(C<<20&4294967295|C>>>12),C=x+(M^L&(k^M))+P[13]+2850285829&4294967295,x=k+(C<<5&4294967295|C>>>27),C=L+(k^M&(x^k))+P[2]+4243563512&4294967295,L=x+(C<<9&4294967295|C>>>23),C=M+(x^k&(L^x))+P[7]+1735328473&4294967295,M=L+(C<<14&4294967295|C>>>18),C=k+(L^x&(M^L))+P[12]+2368359562&4294967295,k=M+(C<<20&4294967295|C>>>12),C=x+(k^M^L)+P[5]+4294588738&4294967295,x=k+(C<<4&4294967295|C>>>28),C=L+(x^k^M)+P[8]+2272392833&4294967295,L=x+(C<<11&4294967295|C>>>21),C=M+(L^x^k)+P[11]+1839030562&4294967295,M=L+(C<<16&4294967295|C>>>16),C=k+(M^L^x)+P[14]+4259657740&4294967295,k=M+(C<<23&4294967295|C>>>9),C=x+(k^M^L)+P[1]+2763975236&4294967295,x=k+(C<<4&4294967295|C>>>28),C=L+(x^k^M)+P[4]+1272893353&4294967295,L=x+(C<<11&4294967295|C>>>21),C=M+(L^x^k)+P[7]+4139469664&4294967295,M=L+(C<<16&4294967295|C>>>16),C=k+(M^L^x)+P[10]+3200236656&4294967295,k=M+(C<<23&4294967295|C>>>9),C=x+(k^M^L)+P[13]+681279174&4294967295,x=k+(C<<4&4294967295|C>>>28),C=L+(x^k^M)+P[0]+3936430074&4294967295,L=x+(C<<11&4294967295|C>>>21),C=M+(L^x^k)+P[3]+3572445317&4294967295,M=L+(C<<16&4294967295|C>>>16),C=k+(M^L^x)+P[6]+76029189&4294967295,k=M+(C<<23&4294967295|C>>>9),C=x+(k^M^L)+P[9]+3654602809&4294967295,x=k+(C<<4&4294967295|C>>>28),C=L+(x^k^M)+P[12]+3873151461&4294967295,L=x+(C<<11&4294967295|C>>>21),C=M+(L^x^k)+P[15]+530742520&4294967295,M=L+(C<<16&4294967295|C>>>16),C=k+(M^L^x)+P[2]+3299628645&4294967295,k=M+(C<<23&4294967295|C>>>9),C=x+(M^(k|~L))+P[0]+4096336452&4294967295,x=k+(C<<6&4294967295|C>>>26),C=L+(k^(x|~M))+P[7]+1126891415&4294967295,L=x+(C<<10&4294967295|C>>>22),C=M+(x^(L|~k))+P[14]+2878612391&4294967295,M=L+(C<<15&4294967295|C>>>17),C=k+(L^(M|~x))+P[5]+4237533241&4294967295,k=M+(C<<21&4294967295|C>>>11),C=x+(M^(k|~L))+P[12]+1700485571&4294967295,x=k+(C<<6&4294967295|C>>>26),C=L+(k^(x|~M))+P[3]+2399980690&4294967295,L=x+(C<<10&4294967295|C>>>22),C=M+(x^(L|~k))+P[10]+4293915773&4294967295,M=L+(C<<15&4294967295|C>>>17),C=k+(L^(M|~x))+P[1]+2240044497&4294967295,k=M+(C<<21&4294967295|C>>>11),C=x+(M^(k|~L))+P[8]+1873313359&4294967295,x=k+(C<<6&4294967295|C>>>26),C=L+(k^(x|~M))+P[15]+4264355552&4294967295,L=x+(C<<10&4294967295|C>>>22),C=M+(x^(L|~k))+P[6]+2734768916&4294967295,M=L+(C<<15&4294967295|C>>>17),C=k+(L^(M|~x))+P[13]+1309151649&4294967295,k=M+(C<<21&4294967295|C>>>11),C=x+(M^(k|~L))+P[4]+4149444226&4294967295,x=k+(C<<6&4294967295|C>>>26),C=L+(k^(x|~M))+P[11]+3174756917&4294967295,L=x+(C<<10&4294967295|C>>>22),C=M+(x^(L|~k))+P[2]+718787259&4294967295,M=L+(C<<15&4294967295|C>>>17),C=k+(L^(M|~x))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+x&4294967295,N.g[1]=N.g[1]+(M+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+M&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.u=function(N,x){x===void 0&&(x=N.length);for(var k=x-this.blockSize,P=this.B,M=this.h,L=0;L<x;){if(M==0)for(;L<=k;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<x;)if(P[M++]=N.charCodeAt(L++),M==this.blockSize){o(this,P),M=0;break}}else for(;L<x;)if(P[M++]=N[L++],M==this.blockSize){o(this,P),M=0;break}}this.h=M,this.o+=x},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var x=1;x<N.length-8;++x)N[x]=0;var k=8*this.o;for(x=N.length-8;x<N.length;++x)N[x]=k&255,k/=256;for(this.u(N),N=Array(16),x=k=0;4>x;++x)for(var P=0;32>P;P+=8)N[k++]=this.g[x]>>>P&255;return N};function l(N,x){var k=f;return Object.prototype.hasOwnProperty.call(k,N)?k[N]:k[N]=x(N)}function d(N,x){this.h=x;for(var k=[],P=!0,M=N.length-1;0<=M;M--){var L=N[M]|0;P&&L==x||(k[M]=L,P=!1)}this.g=k}var f={};function p(N){return-128<=N&&128>N?l(N,function(x){return new d([x|0],0>x?-1:0)}):new d([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return I;if(0>N)return b(v(-N));for(var x=[],k=1,P=0;N>=k;P++)x[P]=N/k|0,k*=4294967296;return new d(x,0)}function w(N,x){if(N.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(N.charAt(0)=="-")return b(w(N.substring(1),x));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=v(Math.pow(x,8)),P=I,M=0;M<N.length;M+=8){var L=Math.min(8,N.length-M),C=parseInt(N.substring(M,M+L),x);8>L?(L=v(Math.pow(x,L)),P=P.j(L).add(v(C))):(P=P.j(k),P=P.add(v(C)))}return P}var I=p(0),A=p(1),O=p(16777216);n=d.prototype,n.m=function(){if($(this))return-b(this).m();for(var N=0,x=1,k=0;k<this.g.length;k++){var P=this.i(k);N+=(0<=P?P:4294967296+P)*x,x*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(W(this))return"0";if($(this))return"-"+b(this).toString(N);for(var x=v(Math.pow(N,6)),k=this,P="";;){var M=ue(k,x).g;k=q(k,M.j(x));var L=((0<k.g.length?k.g[0]:k.h)>>>0).toString(N);if(k=M,W(k))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function W(N){if(N.h!=0)return!1;for(var x=0;x<N.g.length;x++)if(N.g[x]!=0)return!1;return!0}function $(N){return N.h==-1}n.l=function(N){return N=q(this,N),$(N)?-1:W(N)?0:1};function b(N){for(var x=N.g.length,k=[],P=0;P<x;P++)k[P]=~N.g[P];return new d(k,~N.h).add(A)}n.abs=function(){return $(this)?b(this):this},n.add=function(N){for(var x=Math.max(this.g.length,N.g.length),k=[],P=0,M=0;M<=x;M++){var L=P+(this.i(M)&65535)+(N.i(M)&65535),C=(L>>>16)+(this.i(M)>>>16)+(N.i(M)>>>16);P=C>>>16,L&=65535,C&=65535,k[M]=C<<16|L}return new d(k,k[k.length-1]&-2147483648?-1:0)};function q(N,x){return N.add(b(x))}n.j=function(N){if(W(this)||W(N))return I;if($(this))return $(N)?b(this).j(b(N)):b(b(this).j(N));if($(N))return b(this.j(b(N)));if(0>this.l(O)&&0>N.l(O))return v(this.m()*N.m());for(var x=this.g.length+N.g.length,k=[],P=0;P<2*x;P++)k[P]=0;for(P=0;P<this.g.length;P++)for(var M=0;M<N.g.length;M++){var L=this.i(P)>>>16,C=this.i(P)&65535,Ye=N.i(M)>>>16,pt=N.i(M)&65535;k[2*P+2*M]+=C*pt,ee(k,2*P+2*M),k[2*P+2*M+1]+=L*pt,ee(k,2*P+2*M+1),k[2*P+2*M+1]+=C*Ye,ee(k,2*P+2*M+1),k[2*P+2*M+2]+=L*Ye,ee(k,2*P+2*M+2)}for(P=0;P<x;P++)k[P]=k[2*P+1]<<16|k[2*P];for(P=x;P<2*x;P++)k[P]=0;return new d(k,0)};function ee(N,x){for(;(N[x]&65535)!=N[x];)N[x+1]+=N[x]>>>16,N[x]&=65535,x++}function ie(N,x){this.g=N,this.h=x}function ue(N,x){if(W(x))throw Error("division by zero");if(W(N))return new ie(I,I);if($(N))return x=ue(b(N),x),new ie(b(x.g),b(x.h));if($(x))return x=ue(N,b(x)),new ie(b(x.g),x.h);if(30<N.g.length){if($(N)||$(x))throw Error("slowDivide_ only works with positive integers.");for(var k=A,P=x;0>=P.l(N);)k=le(k),P=le(P);var M=ge(k,1),L=ge(P,1);for(P=ge(P,2),k=ge(k,2);!W(P);){var C=L.add(P);0>=C.l(N)&&(M=M.add(k),L=C),P=ge(P,1),k=ge(k,1)}return x=q(N,M.j(x)),new ie(M,x)}for(M=I;0<=N.l(x);){for(k=Math.max(1,Math.floor(N.m()/x.m())),P=Math.ceil(Math.log(k)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=v(k),C=L.j(x);$(C)||0<C.l(N);)k-=P,L=v(k),C=L.j(x);W(L)&&(L=A),M=M.add(L),N=q(N,C)}return new ie(M,N)}n.A=function(N){return ue(this,N).h},n.and=function(N){for(var x=Math.max(this.g.length,N.g.length),k=[],P=0;P<x;P++)k[P]=this.i(P)&N.i(P);return new d(k,this.h&N.h)},n.or=function(N){for(var x=Math.max(this.g.length,N.g.length),k=[],P=0;P<x;P++)k[P]=this.i(P)|N.i(P);return new d(k,this.h|N.h)},n.xor=function(N){for(var x=Math.max(this.g.length,N.g.length),k=[],P=0;P<x;P++)k[P]=this.i(P)^N.i(P);return new d(k,this.h^N.h)};function le(N){for(var x=N.g.length+1,k=[],P=0;P<x;P++)k[P]=N.i(P)<<1|N.i(P-1)>>>31;return new d(k,N.h)}function ge(N,x){var k=x>>5;x%=32;for(var P=N.g.length-k,M=[],L=0;L<P;L++)M[L]=0<x?N.i(L+k)>>>x|N.i(L+k+1)<<32-x:N.i(L+k);return new d(M,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,e0=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=w,pi=d}).apply(typeof Xy<"u"?Xy:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t0,Ha,n0,sc,pf,r0,s0,i0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in _))break e;_=_[j]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,T=!1,j={next:function(){if(!T&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,_){return u.call.apply(u.bind,arguments)}function I(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function A(u,m,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:I,A.apply(null,arguments)}function O(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function W(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,j,H){for(var se=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)se[Ue-2]=arguments[Ue];return m.prototype[j].apply(T,se)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function b(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const j=u.length||0,H=T.length||0;u.length=j+H;for(let se=0;se<H;se++)u[j+se]=T[se]}else u.push(T)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ee(u){return/^[\s\xa0]*$/.test(u)}function ie(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ue(u){return ue[" "](u),u}ue[" "]=function(){};var le=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function ge(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function x(u){const m={};for(const _ in u)m[_]=u[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let _,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(_ in T)u[_]=T[_];for(let H=0;H<k.length;H++)_=k[H],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function M(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function L(u){f.setTimeout(()=>{throw u},0)}function C(){var u=re;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ye{constructor(){this.h=this.g=null}add(m,_){const T=pt.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var pt=new q(()=>new mt,u=>u.reset());class mt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,B=!1,re=new Ye,te=()=>{const u=f.Promise.resolve(void 0);Le=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){L(_)}var m=pt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}B=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function xe(u,m){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(le){e:{try{ue(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ke[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&xe.aa.h.call(this)}}W(xe,he);var ke={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=j,this.key=++Fe,this.da=this.fa=!1}function Et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,_,T,j){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var se=Hr(u,m,T,j);return-1<se?(m=u[se],_||(m.fa=!1)):(m=new $e(m,this.src,H,!!T,j),m.fa=_,u.push(m)),m};function Ri(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],j=Array.prototype.indexOf.call(T,m,void 0),H;(H=0<=j)&&Array.prototype.splice.call(T,j,1),H&&(Et(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Hr(u,m,_,T){for(var j=0;j<u.length;++j){var H=u[j];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==T)return j}return-1}var Ls="closure_lm_"+(1e6*Math.random()|0),Ni={};function Go(u,m,_,T,j){if(Array.isArray(m)){for(var H=0;H<m.length;H++)Go(u,m[H],_,T,j);return null}return _=Jo(_),u&&u[je]?u.K(m,_,v(T)?!!T.capture:!1,j):Qo(u,m,_,!1,T,j)}function Qo(u,m,_,T,j,H){if(!m)throw Error("Invalid event type");var se=v(j)?!!j.capture:!!j,Ue=bi(u);if(Ue||(u[Ls]=Ue=new pr(u)),_=Ue.add(m,_,T,se,H),_.proxy)return _;if(T=Dl(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Ie||(j=se),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(gr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Dl(){function u(_){return m.call(u.src,u.listener,_)}const m=Yo;return u}function Pi(u,m,_,T,j){if(Array.isArray(m))for(var H=0;H<m.length;H++)Pi(u,m[H],_,T,j);else T=v(T)?!!T.capture:!!T,_=Jo(_),u&&u[je]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=Hr(H,_,T,j),-1<_&&(Et(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=bi(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Hr(m,_,T,j)),(_=-1<u?m[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[je])Ri(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(gr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=bi(m))?(Ri(_,u),_.h==0&&(_.src=null,m[Ls]=null)):Et(u)}}}function gr(u){return u in Ni?Ni[u]:Ni[u]="on"+u}function Yo(u,m){if(u.da)u=!0;else{m=new xe(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&mr(u),u=_.call(T,m)}return u}function bi(u){return u=u[Ls],u instanceof pr?u:null}var Di="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jo(u){return typeof u=="function"?u:(u[Di]||(u[Di]=function(m){return u.handleEvent(m)}),u[Di])}function gt(){K.call(this),this.i=new pr(this),this.M=this,this.F=null}W(gt,K),gt.prototype[je]=!0,gt.prototype.removeEventListener=function(u,m,_,T){Pi(this,u,m,_,T)};function yt(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new he(m,u);else if(m instanceof he)m.target=m.target||u;else{var j=m;m=new he(T,u),P(m,j)}if(j=!0,_)for(var H=_.length-1;0<=H;H--){var se=m.g=_[H];j=yr(se,T,!0,m)&&j}if(se=m.g=u,j=yr(se,T,!0,m)&&j,j=yr(se,T,!1,m)&&j,_)for(H=0;H<_.length;H++)se=m.g=_[H],j=yr(se,T,!1,m)&&j}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)Et(_[T]);delete u.g[m],u.h--}}this.F=null},gt.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},gt.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function yr(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,H=0;H<m.length;++H){var se=m[H];if(se&&!se.da&&se.capture==_){var Ue=se.listener,vt=se.ha||se.src;se.fa&&Ri(u.i,se),j=Ue.call(vt,T)!==!1&&j}}return j&&!T.defaultPrevented}function Xo(u,m,_){if(typeof u=="function")_&&(u=A(u,_));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Kr(u){u.g=Xo(()=>{u.g=null,u.i&&(u.i=!1,Kr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class js extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(u){K.call(this),this.h=u,this.g={}}W(Fs,K);var Zo=[];function ea(u){ge(u.g,function(m,_){this.g.hasOwnProperty(_)&&mr(m)},u),u.g={}}Fs.prototype.N=function(){Fs.aa.N.call(this),ea(this)},Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ta=f.JSON.stringify,na=f.JSON.parse,ra=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Us(){}Us.prototype.h=null;function Oi(u){return u.h||(u.h=u.i())}function Vi(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){he.call(this,"d")}W(Hn,he);function Mi(){he.call(this,"c")}W(Mi,he);var Kn={},sa=null;function Bs(){return sa=sa||new gt}Kn.La="serverreachability";function ia(u){he.call(this,Kn.La,u)}W(ia,he);function vr(u){const m=Bs();yt(m,new ia(m))}Kn.STAT_EVENT="statevent";function oa(u,m){he.call(this,Kn.STAT_EVENT,u),this.stat=m}W(oa,he);function st(u){const m=Bs();yt(m,new oa(m,u))}Kn.Ma="timingevent";function Li(u,m){he.call(this,Kn.Ma,u),this.size=m}W(Li,he);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function zs(){this.g=!0}zs.prototype.xa=function(){this.g=!1};function $s(u,m,_,T,j,H){u.info(function(){if(u.g)if(H)for(var se="",Ue=H.split("&"),vt=0;vt<Ue.length;vt++){var be=Ue[vt].split("=");if(1<be.length){var Tt=be[0];be=be[1];var lt=Tt.split("_");se=2<=lt.length&&lt[1]=="type"?se+(Tt+"="+be+"&"):se+(Tt+"=redacted&")}}else se=null;else se=H;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+_+`
`+se})}function ji(u,m,_,T,j,H,se){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+_+`
`+H+" "+se})}function kn(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+sd(u,_)+(T?" "+T:"")})}function aa(u,m){u.info(function(){return"TIMEOUT: "+m})}zs.prototype.info=function(){};function sd(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var H=j[0];if(H!="noop"&&H!="stop"&&H!="close")for(var se=1;se<j.length;se++)j[se]=""}}}}return ta(_)}catch{return m}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function qs(){}W(qs,Us),qs.prototype.g=function(){return new XMLHttpRequest},qs.prototype.i=function(){return{}},Cn=new qs;function Rn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new Fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vl}function Vl(){this.i=null,this.g="",this.h=!1}var la={},Ui={};function Bi(u,m,_){u.L=1,u.v=Xr(on(m)),u.m=_,u.P=!0,ua(u,null)}function ua(u,m){u.F=Date.now(),qe(u),u.A=on(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),es(_.i,"t",T),u.C=0,_=u.j.J,u.h=new Vl,u.g=Zl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new js(A(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(Zo[0]=j.toString()),j=Zo);for(var H=0;H<j.length;H++){var se=Go(_,j[H],T||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=u.H?x(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),vr(),$s(u.i,u.u,u.A,u.l,u.R,u.m)}Rn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},Rn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Yt(this.g);var m=this.g.Ba();const vn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ma(this.g)))){this.J||lt!=4||m==7||(m==8||0>=vn?vr(3):vr(2)),Ws(this);var _=this.g.Z();this.X=_;t:if(Ml(this)){var T=ma(this.g);u="";var j=T.length,H=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),Gr(this);var se="";break t}this.h.i=new f.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(H&&m==j-1)});T.length=0,this.h.g+=u,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,ji(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,vt=this.g;if((Ue=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Ue)){var be=Ue;break t}}be=null}if(_=be)kn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ca(this,_);else{this.o=!1,this.s=3,st(12),gn(this),Gr(this);break e}}if(this.P){_=!0;let ln;for(;!this.J&&this.C<se.length;)if(ln=id(this,se),ln==Ui){lt==4&&(this.s=4,st(14),_=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==la){this.s=4,st(15),kn(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else kn(this.i,this.l,ln,null),ca(this,ln);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||se.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)kn(this.i,this.l,se,"[Invalid Chunked Response]"),gn(this),Gr(this);else if(0<se.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),ya(Tt),Tt.M=!0,st(11))}}else kn(this.i,this.l,se,null),ca(this,se);lt==4&&gn(this),this.o&&!this.J&&(lt==4?Xi(this.j,this):(this.o=!1,qe(this)))}else Ki(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),gn(this),Gr(this)}}}catch{}finally{}};function Ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function id(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?Ui:(_=Number(m.substring(_,T)),isNaN(_)?la:(T+=1,T+_>m.length?Ui:(m=m.slice(T,T+_),u.C=T+_,m)))}Rn.prototype.cancel=function(){this.J=!0,gn(this)};function qe(u){u.S=Date.now()+u.I,Ll(u,u.I)}function Ll(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(A(u.ba,u),m)}function Ws(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Rn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(aa(this.i,this.A),this.L!=2&&(vr(),st(17)),gn(this),this.s=2,Gr(this)):Ll(this,this.S-u)};function Gr(u){u.j.G==0||u.J||Xi(u.j,u)}function gn(u){Ws(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ea(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ca(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Wt(_.h,u))){if(!u.K&&Wt(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ji(_),On(_);else break e;Yi(_),st(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=An(A(_.Za,_),6e3));if(1>=Fl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ir(_,11)}else if((u.K||_.g==u)&&Ji(_),!ee(m))for(j=_.Da.g.parse(m),m=0;m<j.length;m++){let be=j[m];if(_.T=be[0],be=be[1],_.G==2)if(be[0]=="c"){_.K=be[1],_.ia=be[2];const Tt=be[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const lt=be[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const vn=be[5];vn!=null&&typeof vn=="number"&&0<vn&&(T=1.5*vn,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const ln=u.g;if(ln){const Xs=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var H=T.h;H.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(da(H,H.h),H.h=null))}if(T.D){const eo=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(T.ya=eo,ze(T.I,T.D,eo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var se=u;if(T.qa=Xl(T,T.J?T.ia:null,T.W),se.K){Ul(T.h,se);var Ue=se,vt=T.L;vt&&(Ue.I=vt),Ue.B&&(Ws(Ue),qe(Ue)),T.g=se}else Js(T);0<_.i.length&&Jn(_)}else be[0]!="stop"&&be[0]!="close"||Ir(_,7);else _.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Ir(_,7):Nt(_):be[0]!="noop"&&_.l&&_.l.ta(be),_.v=0)}}vr(4)}catch{}}var jl=class{constructor(u,m){this.g=u,this.map=m}};function Hs(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fl(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function da(u,m){u.g?u.g.add(m):u.h=m}function Ul(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Hs.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Bl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function zi(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function $i(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function Qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=$i(u),T=zi(u),j=T.length,H=0;H<j;H++)m.call(void 0,T[H],_&&_[H],u)}var Ks=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),j=null;if(0<=T){var H=u[_].substring(0,T);j=u[_].substring(T+1)}else H=u[_];m(H,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,Gs(this,u.j),this.o=u.o,this.g=u.g,Yr(this,u.s),this.l=u.l;var m=u.i,_=new Gn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Jr(this,_),this.m=u.m}else u&&(m=String(u).match(Ks))?(this.h=!1,Gs(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Yr(this,m[4]),this.l=Ne(m[5]||"",!0),Jr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}_r.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Zr(m,qi,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Zr(m,qi,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Zr(_,_.charAt(0)=="/"?ql:$l,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Zr(_,ha)),u.join("")};function on(u){return new _r(u)}function Gs(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Yr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Jr(u,m,_){m instanceof Gn?(u.i=m,Qn(u.i,u.h)):(_||(m=Zr(m,Wl)),u.i=new Gn(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function Xr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Zr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,zl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function zl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var qi=/[#\/\?@]/g,$l=/[#\?:]/g,ql=/[#\?]/g,Wl=/[#\?@]/g,ha=/#/g;function Gn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&od(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Gn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=yn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Nn(u,m){Rt(u),m=yn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Pn(u,m){return Rt(u),m=yn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(_,T){_.forEach(function(j){u.call(m,j,T,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const j=u[T];for(let H=0;H<j.length;H++)_.push(m[T])}return _},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")Pn(this,u)&&(m=m.concat(this.g.get(yn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=yn(this,u),Pn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function es(u,m,_){Nn(u,m),0<_.length&&(u.i=null,u.g.set(yn(u,m),$(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const H=encodeURIComponent(String(T)),se=this.V(T);for(T=0;T<se.length;T++){var j=H;se[T]!==""&&(j+="="+encodeURIComponent(String(se[T]))),u.push(j)}}return this.i=u.join("&")};function yn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Qn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,T){var j=T.toLowerCase();T!=j&&(Nn(this,T),es(this,j,_))},u)),u.j=m}function ad(u,m){const _=new zs;if(f.Image){const T=new Image;T.onload=O(Qt,_,"TestLoadImage: loaded",!0,m,T),T.onerror=O(Qt,_,"TestLoadImage: error",!1,m,T),T.onabort=O(Qt,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=O(Qt,_,"TestLoadImage: timeout",!1,m,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Hl(u,m){const _=new zs,T=new AbortController,j=setTimeout(()=>{T.abort(),Qt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(H=>{clearTimeout(j),H.ok?Qt(_,"TestPingServer: ok",!0,m):Qt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Qt(_,"TestPingServer: error",!1,m)})}function Qt(u,m,_,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(_)}catch{}}function ld(){this.g=new ra}function Kl(u,m,_){const T=_||"";try{Qr(u,function(j,H){let se=j;v(j)&&(se=ta(j)),m.push(T+H+"="+encodeURIComponent(se))})}catch(j){throw m.push(T+"type="+encodeURIComponent("_badmap")),j}}function wr(u){this.l=u.Ub||null,this.j=u.eb||!1}W(wr,Us),wr.prototype.g=function(){return new Qs(this.l,this.j)},wr.prototype.i=function(u){return function(){return u}}({});function Qs(u,m){gt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Qs,gt),n=Qs.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?bn(this):Dn(this),this.readyState==3&&Gl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Er(u){let m="";return ge(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function ts(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Er(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Je(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Je,gt);var ud=/^https?$/i,fa=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Oi(this.o):Oi(Cn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){Ys(this,H);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)_.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const H of T.keys())_.set(H,T.get(H));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),j=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(fa,m,void 0))||T||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,se]of _)this.g.setRequestHeader(H,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hi(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){Ys(this,H)}};function Ys(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Wi(u),an(u)}function Wi(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,yt(this,"complete"),yt(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pa(this):this.bb())},n.bb=function(){pa(this)};function pa(u){if(u.h&&typeof d<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)Xo(u.Ea,0,u);else if(yt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const se=u.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=se===0){var j=String(u.D).match(Ks)[1]||null;!j&&f.self&&f.self.location&&(j=f.self.location.protocol.slice(0,-1)),T=!ud.test(j?j.toLowerCase():"")}_=T}if(_)yt(u,"complete"),yt(u,"success");else{u.m=6;try{var H=2<Yt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Wi(u)}}finally{an(u)}}}}function an(u,m){if(u.g){Hi(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||yt(u,"ready");try{_.onreadystatechange=T}catch{}}}function Hi(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),na(m)}};function ma(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ki(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ee(u[T]))continue;var _=M(u[T]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[j]||[];m[j]=H,H.push(_)}N(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ga(u){this.Aa=0,this.i=[],this.j=new zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Hs(u&&u.concurrentRequestLimit),this.Da=new ld,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ga.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){st(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=Xl(this,null,this.W),Jn(this)};function Nt(u){if(Gi(u),u.G==3){var m=u.U++,_=on(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),Tr(u,_),m=new Rn(u,u.j,m),m.L=2,m.v=Xr(on(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=Zl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}Jl(u)}function On(u){u.g&&(ya(u),u.g.cancel(),u.g=null)}function Gi(u){On(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ji(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Jn(u){if(!sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Le||te(),B||(Le(),B=!0),re.add(m,u),u.B=0}}function cd(u,m){return Fl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(A(u.Ga,u,m),Yl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new Rn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=x(H),P(H,this.S)):H=this.S),this.m!==null||this.O||(j.H=H,H=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ns(this,j,m),_=on(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Tr(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Er(H)))+"&"+m:this.m&&ts(_,this.m,H)),da(this.h,j),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),j.T=!0,Bi(j,_,null)):Bi(j,_,m),this.G=2}}else this.G==3&&(u?Qi(this,u):this.i.length==0||sn(this.h)||Qi(this))};function Qi(u,m){var _;m?_=m.l:_=u.U++;const T=on(u.I);ze(T,"SID",u.K),ze(T,"RID",_),ze(T,"AID",u.T),Tr(u,T),u.m&&u.o&&ts(T,u.m,u.o),_=new Rn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ns(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),da(u.h,_),Bi(_,T,m)}function Tr(u,m){u.H&&ge(u.H,function(_,T){ze(m,T,_)}),u.l&&Qr({},function(_,T){ze(m,T,_)})}function ns(u,m,_){_=Math.min(u.i.length,_);var T=u.l?A(u.l.Na,u.l,u):null;e:{var j=u.i;let H=-1;for(;;){const se=["count="+_];H==-1?0<_?(H=j[0].g,se.push("ofs="+H)):H=0:se.push("ofs="+H);let Ue=!0;for(let vt=0;vt<_;vt++){let be=j[vt].g;const Tt=j[vt].map;if(be-=H,0>be)H=Math.max(0,j[vt].g-100),Ue=!1;else try{Kl(Tt,se,"req"+be+"_")}catch{T&&T(Tt)}}if(Ue){T=se.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function Js(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Le||te(),B||(Le(),B=!0),re.add(m,u),u.v=0}}function Yi(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(A(u.Fa,u),Yl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(A(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),On(this),Ql(this))};function ya(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new Rn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&ts(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Xr(on(m)),_.m=null,_.P=!0,ua(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Yi(this),st(19))};function Ji(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Xi(u,m){var _=null;if(u.g==m){Ji(u),ya(u),u.g=null;var T=2}else if(Wt(u.h,m))_=m.D,Ul(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;T=Bs(),yt(T,new Li(T,_)),Jn(u)}else Js(u);else if(j=m.s,j==3||j==0&&0<m.X||!(T==1&&cd(u,m)||T==2&&Yi(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),j){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function Yl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var _=A(u.fb,u),T=u.Xa;const j=!T;T=new _r(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Gs(T,"https"),Xr(T),j?ad(T.toString(),_):Hl(T.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),Jl(u),Gi(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Jl(u){if(u.G=0,u.ka=[],u.l){const m=Bl(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Xl(u,m,_){var T=_ instanceof _r?on(_):new _r(_);if(T.g!="")m&&(T.g=m+"."+T.g),Yr(T,T.s);else{var j=f.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var H=new _r(null);T&&Gs(H,T),m&&(H.g=m),j&&Yr(H,j),_&&(H.l=_),T=H}return _=u.D,m=u.ya,_&&m&&ze(T,_,m),ze(T,"VER",u.la),Tr(u,T),T}function Zl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new wr({eb:_})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function va(){}n=va.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zi(){}Zi.prototype.g=function(u,m){return new Ht(u,m)};function Ht(u,m){gt.call(this),this.g=new ga(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ee(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ee(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Xn(this)}W(Ht,gt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Nt(this.g)},Ht.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ta(u),u=_);m.i.push(new jl(m.Ya++,u)),m.G==3&&Jn(m)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Nt(this.g),delete this.g,Ht.aa.N.call(this)};function eu(u){Hn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}W(eu,Hn);function tu(){Mi.call(this),this.status=1}W(tu,Mi);function Xn(u){this.g=u}W(Xn,va),Xn.prototype.ua=function(){yt(this.g,"a")},Xn.prototype.ta=function(u){yt(this.g,new eu(u))},Xn.prototype.sa=function(u){yt(this.g,new tu)},Xn.prototype.ra=function(){yt(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,i0=function(){return new Zi},s0=function(){return Bs()},r0=Kn,pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,sc=Fi,Ol.COMPLETE="complete",n0=Ol,Vi.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Ha=Vi,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,t0=Je}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});const Zy="@firebase/firestore";/**
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
 */let Bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
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
 */let qo="10.14.0";/**
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
 */const vi=new $f("@firebase/firestore");function $a(){return vi.logLevel}function pe(n,...e){if(vi.logLevel<=Pe.DEBUG){const t=e.map(np);vi.debug(`Firestore (${qo}): ${n}`,...t)}}function qr(n,...e){if(vi.logLevel<=Pe.ERROR){const t=e.map(np);vi.error(`Firestore (${qo}): ${n}`,...t)}}function _i(n,...e){if(vi.logLevel<=Pe.WARN){const t=e.map(np);vi.warn(`Firestore (${qo}): ${n}`,...t)}}function np(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+n;throw qr(e),new Error(e)}function Be(n,e){n||Te()}function Ae(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends hr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class o0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Bt.UNAUTHENTICATED))}shutdown(){}}class tk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nk{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Fr,e.enqueueRetryable(()=>o(this.currentUser))};const d=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Fr)}},0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string"),new o0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new Bt(e)}}class rk{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sk{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new rk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ik{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ok{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const s=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const d=l.token!==this.R;return this.R=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new ik(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ak(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class rp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=ak(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function Me(n,e){return n<e?-1:n>e?1:0}function bo(n,e,t){return n.length===e.length&&n.every((s,o)=>t(s,e[o]))}/**
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
 */class ft{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new ft(0,0))}static max(){return new Se(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class al{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(),s===void 0?s=e.length-t:s>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return al.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof al?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),d=t.get(o);if(l<d)return-1;if(l>d)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends al{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const lk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends al{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return lk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let d=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ae(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ae(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else f==="`"?(d=!d,o++):f!=="."||d?(s+=f,o++):(l(),o++)}if(l(),d)throw new ae(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ge.fromString(e))}static fromName(e){return new ye(Ge.fromString(e).popFirst(5))}static empty(){return new ye(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ge(e.slice()))}}function uk(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new Cs(o,ye.empty(),e)}function ck(n){return new Cs(n.readTime,n.key,-1)}class Cs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Cs(Se.min(),ye.empty(),-1)}static max(){return new Cs(Se.max(),ye.empty(),-1)}}function dk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
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
 */const hk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tl(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==hk)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):X.reject(t)}static resolve(e){return new X((t,s)=>{t(e)})}static reject(e){return new X((t,s)=>{s(e)})}static waitFor(e){return new X((t,s)=>{let o=0,l=0,d=!1;e.forEach(f=>{++o,f.next(()=>{++l,d&&l===o&&t()},p=>s(p))}),d=!0,l===o&&t()})}static or(e){let t=X.resolve(!1);for(const s of e)t=t.next(o=>o?X.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new X((s,o)=>{const l=e.length,d=new Array(l);let f=0;for(let p=0;p<l;p++){const v=p;t(e[v]).next(w=>{d[v]=w,++f,f===l&&s(d)},w=>o(w))}})}static doWhile(e,t){return new X((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function pk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Il(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class sp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sp.oe=-1;function Vc(n){return n==null}function vc(n){return n===0&&1/n==-1/0}function mk(n){return typeof n=="number"&&Number.isInteger(n)&&!vc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ev(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function l0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ju(this.root,e,this.comparator,!0)}}class Ju{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tv(this.data.getIterator())}getIteratorFrom(e){return new tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ot(this.comparator);return t.data=e,t}}class tv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new Ot(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class u0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new u0("Invalid base64 string: "+l):l}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let l="";for(let d=0;d<o.length;++d)l+=String.fromCharCode(o[d]);return l}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const gk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rs(n){if(Be(!!n),typeof n=="string"){let e=0;const t=gk.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wi(n){return typeof n=="string"?Ct.fromBase64String(n):Ct.fromUint8Array(n)}/**
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
 */function ip(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function op(n){const e=n.mapValue.fields.__previous_value__;return ip(e)?op(e):e}function ll(n){const e=Rs(n.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class yk{constructor(e,t,s,o,l,d,f,p,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=d,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=v}}class Do{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Do("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Do&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xu={mapValue:{}};function Ei(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ip(n)?4:_k(n)?9007199254740991:vk(n)?10:11:Te()}function dr(n,e){if(n===e)return!0;const t=Ei(n);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ll(n).isEqual(ll(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const d=Rs(o.timestampValue),f=Rs(l.timestampValue);return d.seconds===f.seconds&&d.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return wi(o.bytesValue).isEqual(wi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const d=ot(o.doubleValue),f=ot(l.doubleValue);return d===f?vc(d)===vc(f):isNaN(d)&&isNaN(f)}return!1}(n,e);case 9:return bo(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(o,l){const d=o.mapValue.fields||{},f=l.mapValue.fields||{};if(ev(d)!==ev(f))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(f[p]===void 0||!dr(d[p],f[p])))return!1;return!0}(n,e);default:return Te()}}function ul(n,e){return(n.values||[]).find(t=>dr(t,e))!==void 0}function Oo(n,e){if(n===e)return 0;const t=Ei(n),s=Ei(e);if(t!==s)return Me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return function(l,d){const f=ot(l.integerValue||l.doubleValue),p=ot(d.integerValue||d.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(n,e);case 3:return nv(n.timestampValue,e.timestampValue);case 4:return nv(ll(n),ll(e));case 5:return Me(n.stringValue,e.stringValue);case 6:return function(l,d){const f=wi(l),p=wi(d);return f.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,d){const f=l.split("/"),p=d.split("/");for(let v=0;v<f.length&&v<p.length;v++){const w=Me(f[v],p[v]);if(w!==0)return w}return Me(f.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,d){const f=Me(ot(l.latitude),ot(d.latitude));return f!==0?f:Me(ot(l.longitude),ot(d.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rv(n.arrayValue,e.arrayValue);case 10:return function(l,d){var f,p,v,w;const I=l.fields||{},A=d.fields||{},O=(f=I.value)===null||f===void 0?void 0:f.arrayValue,W=(p=A.value)===null||p===void 0?void 0:p.arrayValue,$=Me(((v=O==null?void 0:O.values)===null||v===void 0?void 0:v.length)||0,((w=W==null?void 0:W.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:rv(O,W)}(n.mapValue,e.mapValue);case 11:return function(l,d){if(l===Xu.mapValue&&d===Xu.mapValue)return 0;if(l===Xu.mapValue)return 1;if(d===Xu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),v=d.fields||{},w=Object.keys(v);p.sort(),w.sort();for(let I=0;I<p.length&&I<w.length;++I){const A=Me(p[I],w[I]);if(A!==0)return A;const O=Oo(f[p[I]],v[w[I]]);if(O!==0)return O}return Me(p.length,w.length)}(n.mapValue,e.mapValue);default:throw Te()}}function nv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=Rs(n),s=Rs(e),o=Me(t.seconds,s.seconds);return o!==0?o:Me(t.nanos,s.nanos)}function rv(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Oo(t[o],s[o]);if(l)return l}return Me(t.length,s.length)}function Vo(n){return mf(n)}function mf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Rs(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=mf(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const d of s)l?l=!1:o+=",",o+=`${d}:${mf(t.fields[d])}`;return o+"}"}(n.mapValue):Te()}function sv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gf(n){return!!n&&"integerValue"in n}function ap(n){return!!n&&"arrayValue"in n}function iv(n){return!!n&&"nullValue"in n}function ov(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ic(n){return!!n&&"mapValue"in n}function vk(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ya(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ki(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ya(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ya(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _k(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach((d,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=f.popLast()}d?s[f.lastSegment()]=Ya(d):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ic(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ki(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new rn(Ya(this.value))}}function c0(n){const e=[];return ki(n.fields,(t,s)=>{const o=new kt([t]);if(ic(s)){const l=c0(s.mapValue).fields;if(l.length===0)e.push(o);else for(const d of l)e.push(o.child(d))}else e.push(o)}),new fn(e)}/**
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
 */class zt{constructor(e,t,s,o,l,d,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=d,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Se.min(),Se.min(),Se.min(),rn.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,Se.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Se.min(),Se.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Se.min(),Se.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _c{constructor(e,t){this.position=e,this.inclusive=t}}function av(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const l=e[o],d=n.position[o];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(d.referenceValue),t.key):s=Oo(d,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function lv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class cl{constructor(e,t="asc"){this.field=e,this.dir=t}}function wk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class d0{}class ht extends d0{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Tk(e,t,s):t==="array-contains"?new Sk(e,s):t==="in"?new Ak(e,s):t==="not-in"?new kk(e,s):t==="array-contains-any"?new Ck(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Ik(e,s):new xk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Oo(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(Oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends d0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Wn(e,t)}matches(e){return h0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function h0(n){return n.op==="and"}function f0(n){return Ek(n)&&h0(n)}function Ek(n){for(const e of n.filters)if(e instanceof Wn)return!1;return!0}function yf(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Vo(n.value);if(f0(n))return n.filters.map(e=>yf(e)).join(",");{const e=n.filters.map(t=>yf(t)).join(",");return`${n.op}(${e})`}}function p0(n,e){return n instanceof ht?function(s,o){return o instanceof ht&&s.op===o.op&&s.field.isEqual(o.field)&&dr(s.value,o.value)}(n,e):n instanceof Wn?function(s,o){return o instanceof Wn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,d,f)=>l&&p0(d,o.filters[f]),!0):!1}(n,e):void Te()}function m0(n){return n instanceof ht?function(t){return`${t.field.canonicalString()} ${t.op} ${Vo(t.value)}`}(n):n instanceof Wn?function(t){return t.op.toString()+" {"+t.getFilters().map(m0).join(" ,")+"}"}(n):"Filter"}class Tk extends ht{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ik extends ht{constructor(e,t){super(e,"in",t),this.keys=g0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xk extends ht{constructor(e,t){super(e,"not-in",t),this.keys=g0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function g0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class Sk extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ap(t)&&ul(t.arrayValue,this.value)}}class Ak extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ul(this.value.arrayValue,t)}}class kk extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ul(this.value.arrayValue,t)}}class Ck extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ap(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ul(this.value.arrayValue,s))}}/**
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
 */class Rk{constructor(e,t=null,s=[],o=[],l=null,d=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=d,this.endAt=f,this.ue=null}}function uv(n,e=null,t=[],s=[],o=null,l=null,d=null){return new Rk(n,e,t,s,o,l,d)}function lp(n){const e=Ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>yf(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Vo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Vo(s)).join(",")),e.ue=t}return e.ue}function up(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!wk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!p0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lv(n.startAt,e.startAt)&&lv(n.endAt,e.endAt)}function vf(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Wo{constructor(e,t=null,s=[],o=[],l=null,d="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=d,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Nk(n,e,t,s,o,l,d,f){return new Wo(n,e,t,s,o,l,d,f)}function Mc(n){return new Wo(n)}function cv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function y0(n){return n.collectionGroup!==null}function Ja(n){const e=Ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let f=new Ot(kt.comparator);return d.filters.forEach(p=>{p.getFlattenedFilters().forEach(v=>{v.isInequality()&&(f=f.add(v.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new cl(l,s))}),t.has(kt.keyField().canonicalString())||e.ce.push(new cl(kt.keyField(),s))}return e.ce}function ar(n){const e=Ae(n);return e.le||(e.le=Pk(e,Ja(n))),e.le}function Pk(n,e){if(n.limitType==="F")return uv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new cl(o.field,l)});const t=n.endAt?new _c(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new _c(n.startAt.position,n.startAt.inclusive):null;return uv(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function _f(n,e){const t=n.filters.concat([e]);return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wc(n,e,t){return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Lc(n,e){return up(ar(n),ar(e))&&n.limitType===e.limitType}function v0(n){return`${lp(ar(n))}|lt:${n.limitType}`}function Io(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>m0(o)).join(", ")}]`),Vc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Vo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Vo(o)).join(",")),`Target(${s})`}(ar(n))}; limitType=${n.limitType})`}function jc(n,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,o){for(const l of Ja(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(s,o){return!(s.startAt&&!function(d,f,p){const v=av(d,f,p);return d.inclusive?v<=0:v<0}(s.startAt,Ja(s),o)||s.endAt&&!function(d,f,p){const v=av(d,f,p);return d.inclusive?v>=0:v>0}(s.endAt,Ja(s),o))}(n,e)}function bk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _0(n){return(e,t)=>{let s=!1;for(const o of Ja(n)){const l=Dk(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function Dk(n,e,t){const s=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,d,f){const p=d.data.field(l),v=f.data.field(l);return p!==null&&v!==null?Oo(p,v):Te()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
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
 */class Ho{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return l0(this.inner)}size(){return this.innerSize}}/**
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
 */const Ok=new tt(ye.comparator);function Wr(){return Ok}const w0=new tt(ye.comparator);function Ka(...n){let e=w0;for(const t of n)e=e.insert(t.key,t);return e}function E0(n){let e=w0;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function hi(){return Xa()}function T0(){return Xa()}function Xa(){return new Ho(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vk=new tt(ye.comparator),Mk=new Ot(ye.comparator);function Re(...n){let e=Mk;for(const t of n)e=e.add(t);return e}const Lk=new Ot(Me);function jk(){return Lk}/**
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
 */function cp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function I0(n){return{integerValue:""+n}}function Fk(n,e){return mk(e)?I0(e):cp(n,e)}/**
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
 */class Fc{constructor(){this._=void 0}}function Uk(n,e,t){return n instanceof dl?function(o,l){const d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&ip(l)&&(l=op(l)),l&&(d.fields.__previous_value__=l),{mapValue:d}}(t,e):n instanceof hl?S0(n,e):n instanceof fl?A0(n,e):function(o,l){const d=x0(o,l),f=dv(d)+dv(o.Pe);return gf(d)&&gf(o.Pe)?I0(f):cp(o.serializer,f)}(n,e)}function Bk(n,e,t){return n instanceof hl?S0(n,e):n instanceof fl?A0(n,e):t}function x0(n,e){return n instanceof Ec?function(s){return gf(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class dl extends Fc{}class hl extends Fc{constructor(e){super(),this.elements=e}}function S0(n,e){const t=k0(e);for(const s of n.elements)t.some(o=>dr(o,s))||t.push(s);return{arrayValue:{values:t}}}class fl extends Fc{constructor(e){super(),this.elements=e}}function A0(n,e){let t=k0(e);for(const s of n.elements)t=t.filter(o=>!dr(o,s));return{arrayValue:{values:t}}}class Ec extends Fc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function dv(n){return ot(n.integerValue||n.doubleValue)}function k0(n){return ap(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class zk{constructor(e,t){this.field=e,this.transform=t}}function $k(n,e){return n.field.isEqual(e.field)&&function(s,o){return s instanceof hl&&o instanceof hl||s instanceof fl&&o instanceof fl?bo(s.elements,o.elements,dr):s instanceof Ec&&o instanceof Ec?dr(s.Pe,o.Pe):s instanceof dl&&o instanceof dl}(n.transform,e.transform)}class qk{constructor(e,t){this.version=e,this.transformResults=t}}class lr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Uc{}function C0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new N0(n.key,lr.none()):new xl(n.key,n.data,lr.none());{const t=n.data,s=rn.empty();let o=new Ot(kt.comparator);for(let l of e.fields)if(!o.has(l)){let d=t.field(l);d===null&&l.length>1&&(l=l.popLast(),d=t.field(l)),d===null?s.delete(l):s.set(l,d),o=o.add(l)}return new Ms(n.key,s,new fn(o.toArray()),lr.none())}}function Wk(n,e,t){n instanceof xl?function(o,l,d){const f=o.value.clone(),p=fv(o.fieldTransforms,l,d.transformResults);f.setAll(p),l.convertToFoundDocument(d.version,f).setHasCommittedMutations()}(n,e,t):n instanceof Ms?function(o,l,d){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(d.version);const f=fv(o.fieldTransforms,l,d.transformResults),p=l.data;p.setAll(R0(o)),p.setAll(f),l.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,d){l.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,t)}function Za(n,e,t,s){return n instanceof xl?function(l,d,f,p){if(!oc(l.precondition,d))return f;const v=l.value.clone(),w=pv(l.fieldTransforms,p,d);return v.setAll(w),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ms?function(l,d,f,p){if(!oc(l.precondition,d))return f;const v=pv(l.fieldTransforms,p,d),w=d.data;return w.setAll(R0(l)),w.setAll(v),d.convertToFoundDocument(d.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(n,e,t,s):function(l,d,f){return oc(l.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):f}(n,e,t)}function Hk(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),l=x0(s.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(s.field,l))}return t||null}function hv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&bo(s,o,(l,d)=>$k(l,d))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xl extends Uc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ms extends Uc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function R0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function fv(n,e,t){const s=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],d=l.transform,f=e.data.field(l.field);s.set(l.field,Bk(d,f,t[o]))}return s}function pv(n,e,t){const s=new Map;for(const o of n){const l=o.transform,d=t.data.field(o.field);s.set(o.field,Uk(l,d,e))}return s}class N0 extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kk extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gk{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Wk(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=T0();return this.mutations.forEach(o=>{const l=e.get(o.key),d=l.overlayedDocument;let f=this.applyToLocalView(d,l.mutatedFields);f=t.has(o.key)?null:f;const p=C0(d,f);p!==null&&s.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(Se.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(t,s)=>hv(t,s))&&bo(this.baseMutations,e.baseMutations,(t,s)=>hv(t,s))}}class dp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length);let o=function(){return Vk}();const l=e.mutations;for(let d=0;d<l.length;d++)o=o.insert(l[d].key,s[d].version);return new dp(e,t,s,o)}}/**
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
 */class Qk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Yk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,De;function Jk(n){switch(n){default:return Te();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function P0(n){if(n===void 0)return qr("GRPC error has no .code"),G.UNKNOWN;switch(n){case ct.OK:return G.OK;case ct.CANCELLED:return G.CANCELLED;case ct.UNKNOWN:return G.UNKNOWN;case ct.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ct.INTERNAL:return G.INTERNAL;case ct.UNAVAILABLE:return G.UNAVAILABLE;case ct.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ct.NOT_FOUND:return G.NOT_FOUND;case ct.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ct.ABORTED:return G.ABORTED;case ct.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ct.DATA_LOSS:return G.DATA_LOSS;default:return Te()}}(De=ct||(ct={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Xk(){return new TextEncoder}/**
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
 */const Zk=new pi([4294967295,4294967295],0);function mv(n){const e=Xk().encode(n),t=new e0;return t.update(e),new Uint8Array(t.digest())}function gv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new pi([t,s],0),new pi([o,l],0)]}class hp{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ga(`Invalid padding: ${t}`);if(s<0)throw new Ga(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ga(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ga(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=pi.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(pi.fromNumber(s)));return o.compare(Zk)===1&&(o=new pi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=mv(e),[s,o]=gv(t);for(let l=0;l<this.hashCount;l++){const d=this.Ee(s,o,l);if(!this.de(d))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),d=new hp(l,o,t);return s.forEach(f=>d.insert(f)),d}insert(e){if(this.Ie===0)return;const t=mv(e),[s,o]=gv(t);for(let l=0;l<this.hashCount;l++){const d=this.Ee(s,o,l);this.Ae(d)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Bc(Se.min(),o,new tt(Me),Wr(),Re())}}class Sl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Sl(s,t,Re(),Re(),Re())}}/**
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
 */class ac{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class b0{constructor(e,t){this.targetId=e,this.me=t}}class D0{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class yv{constructor(){this.fe=0,this.ge=_v(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),t=Re(),s=Re();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Te()}}),new Sl(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=_v()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class e1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wr(),this.qe=vv(),this.Qe=new tt(Me)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const l=o.target;if(vf(l))if(s===0){const d=new ye(l.path);this.Ue(t,d,zt.newNoDocument(d,Se.min()))}else Be(s===1);else{const d=this.Ye(t);if(d!==s){const f=this.Ze(e),p=f?this.Xe(f,e,d):1;if(p!==0){this.je(t);const v=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let d,f;try{d=wi(s).toUint8Array()}catch(p){if(p instanceof u0)return _i("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new hp(d,o,l)}catch(p){return _i(p instanceof Ga?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Ie===0?null:f}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const d=this.Le.tt(),f=`projects/${d.projectId}/databases/${d.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,d)=>{const f=this.Je(d);if(f){if(l.current&&vf(f.target)){const p=new ye(f.target.path);this.ke.get(p)!==null||this.it(d,p)||this.Ue(d,p,zt.newNoDocument(p,e))}l.be&&(t.set(d,l.ve()),l.Ce())}});let s=Re();this.qe.forEach((l,d)=>{let f=!0;d.forEachWhile(p=>{const v=this.Je(p);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ke.forEach((l,d)=>d.setReadTime(e));const o=new Bc(e,t,this.Qe,this.ke,s);return this.ke=Wr(),this.qe=vv(),this.Qe=new tt(Me),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new yv,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ot(Me),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yv),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function vv(){return new tt(ye.comparator)}function _v(){return new tt(ye.comparator)}const t1={asc:"ASCENDING",desc:"DESCENDING"},n1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r1={and:"AND",or:"OR"};class s1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wf(n,e){return n.useProto3Json||Vc(e)?e:{value:e}}function Tc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function i1(n,e){return Tc(n,e.toTimestamp())}function ur(n){return Be(!!n),Se.fromTimestamp(function(t){const s=Rs(t);return new ft(s.seconds,s.nanos)}(n))}function fp(n,e){return Ef(n,e).canonicalString()}function Ef(n,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function V0(n){const e=Ge.fromString(n);return Be(U0(e)),e}function Tf(n,e){return fp(n.databaseId,e.path)}function Wh(n,e){const t=V0(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(L0(t))}function M0(n,e){return fp(n.databaseId,e)}function o1(n){const e=V0(n);return e.length===4?Ge.emptyPath():L0(e)}function If(n){return new Ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function L0(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wv(n,e,t){return{name:Tf(n,e),fields:t.value.mapValue.fields}}function a1(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(v,w){return v.useProto3Json?(Be(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),d=e.targetChange.cause,f=d&&function(v){const w=v.code===void 0?G.UNKNOWN:P0(v.code);return new ae(w,v.message||"")}(d);t=new D0(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Wh(n,s.document.name),l=ur(s.document.updateTime),d=s.document.createTime?ur(s.document.createTime):Se.min(),f=new rn({mapValue:{fields:s.document.fields}}),p=zt.newFoundDocument(o,l,d,f),v=s.targetIds||[],w=s.removedTargetIds||[];t=new ac(v,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Wh(n,s.document),l=s.readTime?ur(s.readTime):Se.min(),d=zt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new ac([],f,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Wh(n,s.document),l=s.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,d=new Yk(o,l),f=s.targetId;t=new b0(f,d)}}return t}function l1(n,e){let t;if(e instanceof xl)t={update:wv(n,e.key,e.value)};else if(e instanceof N0)t={delete:Tf(n,e.key)};else if(e instanceof Ms)t={update:wv(n,e.key,e.data),updateMask:y1(e.fieldMask)};else{if(!(e instanceof Kk))return Te();t={verify:Tf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,d){const f=d.transform;if(f instanceof dl)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof hl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof fl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ec)return{fieldPath:d.field.canonicalString(),increment:f.Pe};throw Te()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:i1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function u1(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(o,l){let d=o.updateTime?ur(o.updateTime):ur(l);return d.isEqual(Se.min())&&(d=ur(l)),new qk(d,o.transformResults||[])}(t,e))):[]}function c1(n,e){return{documents:[M0(n,e.path)]}}function d1(n,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=M0(n,o);const l=function(v){if(v.length!==0)return F0(Wn.create(v,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const d=function(v){if(v.length!==0)return v.map(w=>function(A){return{field:xo(A.field),direction:p1(A.dir)}}(w))}(e.orderBy);d&&(t.structuredQuery.orderBy=d);const f=wf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{_t:t,parent:o}}function h1(n){let e=o1(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(I){const A=j0(I);return A instanceof Wn&&f0(A)?A.getFilters():[A]}(t.where));let d=[];t.orderBy&&(d=function(I){return I.map(A=>function(W){return new cl(So(W.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(A))}(t.orderBy));let f=null;t.limit&&(f=function(I){let A;return A=typeof I=="object"?I.value:I,Vc(A)?null:A}(t.limit));let p=null;t.startAt&&(p=function(I){const A=!!I.before,O=I.values||[];return new _c(O,A)}(t.startAt));let v=null;return t.endAt&&(v=function(I){const A=!I.before,O=I.values||[];return new _c(O,A)}(t.endAt)),Nk(e,o,d,l,f,"F",p,v)}function f1(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function j0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=So(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=So(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=So(t.unaryFilter.field);return ht.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=So(t.unaryFilter.field);return ht.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return ht.create(So(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Wn.create(t.compositeFilter.filters.map(s=>j0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function p1(n){return t1[n]}function m1(n){return n1[n]}function g1(n){return r1[n]}function xo(n){return{fieldPath:n.canonicalString()}}function So(n){return kt.fromServerFormat(n.fieldPath)}function F0(n){return n instanceof ht?function(t){if(t.op==="=="){if(ov(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(iv(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ov(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(iv(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:m1(t.op),value:t.value}}}(n):n instanceof Wn?function(t){const s=t.getFilters().map(o=>F0(o));return s.length===1?s[0]:{compositeFilter:{op:g1(t.op),filters:s}}}(n):Te()}function y1(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function U0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ss{constructor(e,t,s,o,l=Se.min(),d=Se.min(),f=Ct.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ss(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class v1{constructor(e){this.ct=e}}function _1(n){const e=h1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wc(e,e.limit,"L"):e}/**
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
 */class w1{constructor(){this.un=new E1}addToCollectionParentIndex(e,t){return this.un.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(Cs.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(Cs.min())}updateCollectionGroup(e,t,s){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class E1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Ot(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ot(Ge.comparator)).toArray()}}/**
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
 */class Mo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Mo(0)}static kn(){return new Mo(-1)}}/**
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
 */class T1{constructor(){this.changes=new Ho(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?X.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class I1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class x1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Za(s.mutation,o,fn.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Re()){const o=hi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let d=Ka();return l.forEach((f,p)=>{d=d.insert(f,p.overlayedDocument)}),d}))}getOverlayedDocuments(e,t){const s=hi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Re()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((d,f)=>{t.set(d,f)})})}computeViews(e,t,s,o){let l=Wr();const d=Xa(),f=function(){return Xa()}();return t.forEach((p,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Ms)?l=l.insert(v.key,v):w!==void 0?(d.set(v.key,w.mutation.getFieldMask()),Za(w.mutation,v,w.mutation.getFieldMask(),ft.now())):d.set(v.key,fn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((v,w)=>d.set(v,w)),t.forEach((v,w)=>{var I;return f.set(v,new I1(w,(I=d.get(v))!==null&&I!==void 0?I:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Xa();let o=new tt((d,f)=>d-f),l=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(d=>{for(const f of d)f.keys().forEach(p=>{const v=t.get(p);if(v===null)return;let w=s.get(p)||fn.empty();w=f.applyToLocalView(v,w),s.set(p,w);const I=(o.get(f.batchId)||Re()).add(p);o=o.insert(f.batchId,I)})}).next(()=>{const d=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),v=p.key,w=p.value,I=T0();w.forEach(A=>{if(!l.has(A)){const O=C0(t.get(A),s.get(A));O!==null&&I.set(A,O),l=l.add(A)}}),d.push(this.documentOverlayCache.saveOverlays(e,v,I))}return X.waitFor(d)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(d){return ye.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):y0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const d=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):X.resolve(hi());let f=-1,p=l;return d.next(v=>X.forEach(v,(w,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(w)?X.resolve():this.remoteDocumentCache.getEntry(e,w).next(A=>{p=p.insert(w,A)}))).next(()=>this.populateOverlays(e,v,l)).next(()=>this.computeViews(e,p,v,Re())).next(w=>({batchId:f,changes:E0(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let o=Ka();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let d=Ka();return this.indexManager.getCollectionParents(e,l).next(f=>X.forEach(f,p=>{const v=function(I,A){return new Wo(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((I,A)=>{d=d.insert(I,A)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(d=>(l=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(d=>{l.forEach((p,v)=>{const w=v.getKey();d.get(w)===null&&(d=d.insert(w,zt.newInvalidDocument(w)))});let f=Ka();return d.forEach((p,v)=>{const w=l.get(p);w!==void 0&&Za(w.mutation,v,fn.empty(),ft.now()),jc(t,v)&&(f=f.insert(p,v))}),f})}}/**
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
 */class S1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return X.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ur(o.createTime)}}(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:_1(o.bundledQuery),readTime:ur(o.readTime)}}(t)),X.resolve()}}/**
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
 */class A1{constructor(){this.overlays=new tt(ye.comparator),this.Ir=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const s=hi();return X.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.ht(e,t,l)}),X.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(s)),X.resolve()}getOverlaysForCollection(e,t,s){const o=hi(),l=t.length+1,d=new ye(t.child("")),f=this.overlays.getIteratorFrom(d);for(;f.hasNext();){const p=f.getNext().value,v=p.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&p.largestBatchId>s&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new tt((v,w)=>v-w);const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=l.get(v.largestBatchId);w===null&&(w=hi(),l=l.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const f=hi(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((v,w)=>f.set(v,w)),!(f.size()>=o)););return X.resolve(f)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const d=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new Qk(t,s));let l=this.Ir.get(t);l===void 0&&(l=Re(),this.Ir.set(t,l)),this.Ir.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class k1{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
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
 */class pp{constructor(){this.Tr=new Ot(At.Er),this.dr=new Ot(At.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new At(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new At(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new ye(new Ge([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.dr.forEachInRange([s,o],d=>{this.Vr(d),l.push(d.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ye(new Ge([])),s=new At(t,e),o=new At(t,e+1);let l=Re();return this.dr.forEachInRange([s,o],d=>{l=l.add(d.key)}),l}containsKey(e){const t=new At(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ye.comparator(e.key,t.key)||Me(e.wr,t.wr)}static Ar(e,t){return Me(e.wr,t.wr)||ye.comparator(e.key,t.key)}}/**
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
 */class C1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ot(At.Er)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new Gk(l,t,s,o);this.mutationQueue.push(d);for(const f of o)this.br=this.br.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return X.resolve(d)}lookupMutationBatch(e,t){return X.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),l=o<0?0:o;return X.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([s,o],d=>{const f=this.Dr(d.wr);l.push(f)}),X.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ot(Me);return t.forEach(o=>{const l=new At(o,0),d=new At(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,d],f=>{s=s.add(f.wr)})}),X.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const d=new At(new ye(l),0);let f=new Ot(Me);return this.br.forEachWhile(p=>{const v=p.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(p.wr)),!0)},d),X.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach(s=>{const o=this.Dr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return X.forEach(t.mutations,o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new At(t,0),o=this.br.firstAfterOrEqual(s);return X.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class R1{constructor(e){this.Mr=e,this.docs=function(){return new tt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,d=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:d}),this.size+=d-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return X.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Wr();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Wr();const d=t.path,f=new ye(d.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:v,value:{document:w}}=p.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||dk(ck(w),s)<=0||(o.has(w.key)||jc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return X.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Te()}Or(e,t){return X.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new N1(this)}getSize(e){return X.resolve(this.size)}}class N1 extends T1{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)}),X.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class P1{constructor(e){this.persistence=e,this.Nr=new Ho(t=>lp(t),up),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pp,this.targetCount=0,this.kr=Mo.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,o)=>t(o)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),X.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Mo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Kn(t),X.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Nr.forEach((d,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Nr.delete(d),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),X.waitFor(l).next(()=>o)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return X.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),X.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(d=>{l.push(o.markPotentiallyOrphaned(e,d))}),X.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return X.resolve(s)}containsKey(e,t){return X.resolve(this.Br.containsKey(t))}}/**
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
 */class b1{constructor(e,t){this.qr={},this.overlays={},this.Qr=new sp(0),this.Kr=!1,this.Kr=!0,this.$r=new k1,this.referenceDelegate=e(this),this.Ur=new P1(this),this.indexManager=new w1,this.remoteDocumentCache=function(o){return new R1(o)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new v1(t),this.Gr=new S1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new A1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new C1(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){pe("MemoryPersistence","Starting transaction:",e);const o=new D1(this.Qr.next());return this.referenceDelegate.zr(),s(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return X.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class D1 extends fk{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.Jr=new pp,this.Yr=null}static Zr(e){return new mp(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),X.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),X.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Xr,s=>{const o=ye.fromPath(s);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Se.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return X.or([()=>X.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class gp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Re(),o=Re();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new gp(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class O1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class V1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return RI()?8:pk(qt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Yi(e,t).next(d=>{l.result=d}).next(()=>{if(!l.result)return this.Zi(e,t,o,s).next(d=>{l.result=d})}).next(()=>{if(l.result)return;const d=new O1;return this.Xi(e,t,d).next(f=>{if(l.result=f,this.zi)return this.es(e,t,d,f.size)})}).next(()=>l.result)}es(e,t,s,o){return s.documentReadCount<this.ji?($a()<=Pe.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),X.resolve()):($a()<=Pe.DEBUG&&pe("QueryEngine","Query:",Io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?($a()<=Pe.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):X.resolve())}Yi(e,t){if(cv(t))return X.resolve(null);let s=ar(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=wc(t,null,"F"),s=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const d=Re(...l);return this.Ji.getDocuments(e,d).next(f=>this.indexManager.getMinOffset(e,s).next(p=>{const v=this.ts(t,f);return this.ns(t,v,d,p.readTime)?this.Yi(e,wc(t,null,"F")):this.rs(e,v,t,p)}))})))}Zi(e,t,s,o){return cv(t)||o.isEqual(Se.min())?X.resolve(null):this.Ji.getDocuments(e,s).next(l=>{const d=this.ts(t,l);return this.ns(t,d,s,o)?X.resolve(null):($a()<=Pe.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.rs(e,d,t,uk(o,-1)).next(f=>f))})}ts(e,t){let s=new Ot(_0(e));return t.forEach((o,l)=>{jc(e,l)&&(s=s.add(l))}),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,s){return $a()<=Pe.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Io(t)),this.Ji.getDocumentsMatchingQuery(e,t,Cs.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(d=>{l=l.insert(d.key,d)}),l))}}/**
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
 */class M1{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new tt(Me),this._s=new Ho(l=>lp(l),up),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function L1(n,e,t,s){return new M1(n,e,t,s)}async function B0(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const d=[],f=[];let p=Re();for(const v of o){d.push(v.batchId);for(const w of v.mutations)p=p.add(w.key)}for(const v of l){f.push(v.batchId);for(const w of v.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(s,p).next(v=>({hs:v,removedBatchIds:d,addedBatchIds:f}))})})}function j1(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(f,p,v,w){const I=v.batch,A=I.keys();let O=X.resolve();return A.forEach(W=>{O=O.next(()=>w.getEntry(p,W)).next($=>{const b=v.docVersions.get(W);Be(b!==null),$.version.compareTo(b)<0&&(I.applyToRemoteDocument($,v),$.isValidDocument()&&($.setReadTime(v.commitVersion),w.addEntry($)))})}),O.next(()=>f.mutationQueue.removeMutationBatch(p,I))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let p=Re();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(p=p.add(f.batch.mutations[v].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function z0(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function F1(n,e){const t=Ae(n),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const d=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const f=[];e.targetChanges.forEach((w,I)=>{const A=o.get(I);if(!A)return;f.push(t.Ur.removeMatchingKeys(l,w.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(l,w.addedDocuments,I)));let O=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?O=O.withResumeToken(Ct.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):w.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(w.resumeToken,s)),o=o.insert(I,O),function($,b,q){return $.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(A,O,w)&&f.push(t.Ur.updateTargetData(l,O))});let p=Wr(),v=Re();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(U1(l,d,e.documentUpdates).next(w=>{p=w.Ps,v=w.Is})),!s.isEqual(Se.min())){const w=t.Ur.getLastRemoteSnapshotVersion(l).next(I=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(w)}return X.waitFor(f).next(()=>d.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,v)).next(()=>p)}).then(l=>(t.os=o,l))}function U1(n,e,t){let s=Re(),o=Re();return t.forEach(l=>s=s.add(l)),e.getEntries(n,s).next(l=>{let d=Wr();return t.forEach((f,p)=>{const v=l.get(f);p.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(f,p.readTime),d=d.insert(f,p)):!v.isValidDocument()||p.version.compareTo(v.version)>0||p.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(p),d=d.insert(f,p)):pe("LocalStore","Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",p.version)}),{Ps:d,Is:o}})}function B1(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function z1(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ur.getTargetData(s,e).next(l=>l?(o=l,X.resolve(o)):t.Ur.allocateTargetId(s).next(d=>(o=new Ss(e,d,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s})}async function xf(n,e,t){const s=Ae(n),o=s.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,d=>s.persistence.referenceDelegate.removeTarget(d,o))}catch(d){if(!Il(d))throw d;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function Ev(n,e,t){const s=Ae(n);let o=Se.min(),l=Re();return s.persistence.runTransaction("Execute query","readwrite",d=>function(p,v,w){const I=Ae(p),A=I._s.get(w);return A!==void 0?X.resolve(I.os.get(A)):I.Ur.getTargetData(v,w)}(s,d,ar(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(d,f.targetId).next(p=>{l=p})}).next(()=>s.ss.getDocumentsMatchingQuery(d,e,t?o:Se.min(),t?l:Re())).next(f=>($1(s,bk(e),f),{documents:f,Ts:l})))}function $1(n,e,t){let s=n.us.get(e)||Se.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),n.us.set(e,s)}class Tv{constructor(){this.activeTargetIds=jk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q1{constructor(){this.so=new Tv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Tv,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class W1{_o(e){}shutdown(){}}/**
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
 */class Iv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Zu=null;function Hh(){return Zu===null?Zu=function(){return 268435456+Math.round(2147483648*Math.random())}():Zu++,"0x"+Zu.toString(16)}/**
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
 */const H1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class K1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ut="WebChannelConnection";class G1 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,s,o,l,d){const f=Hh(),p=this.xo(t,s.toUriEncodedString());pe("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,l,d),this.No(t,p,v,o).then(w=>(pe("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw _i("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",p,"request:",o),w})}Lo(t,s,o,l,d,f){return this.Mo(t,s,o,l,d)}Oo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,d)=>t[d]=l),o&&o.headers.forEach((l,d)=>t[d]=l)}xo(t,s){const o=H1[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const l=Hh();return new Promise((d,f)=>{const p=new t0;p.setWithCredentials(!0),p.listenOnce(n0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case sc.NO_ERROR:const w=p.getResponseJson();pe(Ut,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),d(w);break;case sc.TIMEOUT:pe(Ut,`RPC '${e}' ${l} timed out`),f(new ae(G.DEADLINE_EXCEEDED,"Request time out"));break;case sc.HTTP_ERROR:const I=p.getStatus();if(pe(Ut,`RPC '${e}' ${l} failed with status:`,I,"response text:",p.getResponseText()),I>0){let A=p.getResponseJson();Array.isArray(A)&&(A=A[0]);const O=A==null?void 0:A.error;if(O&&O.status&&O.message){const W=function(b){const q=b.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(q)>=0?q:G.UNKNOWN}(O.status);f(new ae(W,O.message))}else f(new ae(G.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new ae(G.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{pe(Ut,`RPC '${e}' ${l} completed.`)}});const v=JSON.stringify(o);pe(Ut,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",v,s,15)})}Bo(e,t,s){const o=Hh(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=i0(),f=s0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(p.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const w=l.join("");pe(Ut,`Creating RPC '${e}' stream ${o}: ${w}`,p);const I=d.createWebChannel(w,p);let A=!1,O=!1;const W=new K1({Io:b=>{O?pe(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(A||(pe(Ut,`Opening RPC '${e}' stream ${o} transport.`),I.open(),A=!0),pe(Ut,`RPC '${e}' stream ${o} sending:`,b),I.send(b))},To:()=>I.close()}),$=(b,q,ee)=>{b.listen(q,ie=>{try{ee(ie)}catch(ue){setTimeout(()=>{throw ue},0)}})};return $(I,Ha.EventType.OPEN,()=>{O||(pe(Ut,`RPC '${e}' stream ${o} transport opened.`),W.yo())}),$(I,Ha.EventType.CLOSE,()=>{O||(O=!0,pe(Ut,`RPC '${e}' stream ${o} transport closed`),W.So())}),$(I,Ha.EventType.ERROR,b=>{O||(O=!0,_i(Ut,`RPC '${e}' stream ${o} transport errored:`,b),W.So(new ae(G.UNAVAILABLE,"The operation could not be completed")))}),$(I,Ha.EventType.MESSAGE,b=>{var q;if(!O){const ee=b.data[0];Be(!!ee);const ie=ee,ue=ie.error||((q=ie[0])===null||q===void 0?void 0:q.error);if(ue){pe(Ut,`RPC '${e}' stream ${o} received error:`,ue);const le=ue.status;let ge=function(k){const P=ct[k];if(P!==void 0)return P0(P)}(le),N=ue.message;ge===void 0&&(ge=G.INTERNAL,N="Unknown error status: "+le+" with message "+ue.message),O=!0,W.So(new ae(ge,N)),I.close()}else pe(Ut,`RPC '${e}' stream ${o} received:`,ee),W.bo(ee)}}),$(f,r0.STAT_EVENT,b=>{b.stat===pf.PROXY?pe(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===pf.NOPROXY&&pe(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.wo()},0),W}}function Kh(){return typeof document<"u"?document:null}/**
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
 */function zc(n){return new s1(n,!0)}/**
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
 */class $0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&pe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class q0{constructor(e,t,s,o,l,d,f,p){this.ui=e,this.Ho=s,this.Jo=o,this.connection=l,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $0(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(qr(t.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Yo===t&&this.P_(s,o)},s=>{e(()=>{const o=new ae(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{s(()=>this.I_(o))}),this.stream.onMessage(o=>{s(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Q1 extends q0{constructor(e,t,s,o,l,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,d),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=a1(this.serializer,e),s=function(l){if(!("targetChange"in l))return Se.min();const d=l.targetChange;return d.targetIds&&d.targetIds.length?Se.min():d.readTime?ur(d.readTime):Se.min()}(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=If(this.serializer),t.addTarget=function(l,d){let f;const p=d.target;if(f=vf(p)?{documents:c1(l,p)}:{query:d1(l,p)._t},f.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){f.resumeToken=O0(l,d.resumeToken);const v=wf(l,d.expectedCount);v!==null&&(f.expectedCount=v)}else if(d.snapshotVersion.compareTo(Se.min())>0){f.readTime=Tc(l,d.snapshotVersion.toTimestamp());const v=wf(l,d.expectedCount);v!==null&&(f.expectedCount=v)}return f}(this.serializer,e);const s=f1(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=If(this.serializer),t.removeTarget=e,this.a_(t)}}class Y1 extends q0{constructor(e,t,s,o,l,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,d),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=u1(e.writeResults,e.commitTime),s=ur(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=If(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>l1(this.serializer,s))};this.a_(t)}}/**
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
 */class J1 extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,d])=>this.connection.Mo(e,Ef(t,s),o,l,d)).catch(l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(G.UNKNOWN,l.toString())})}Lo(e,t,s,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,f])=>this.connection.Lo(e,Ef(t,s),o,d,f,l)).catch(d=>{throw d.name==="FirebaseError"?(d.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ae(G.UNKNOWN,d.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class X1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qr(t),this.D_=!1):pe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Z1{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(d=>{s.enqueueAndForget(async()=>{Ci(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const v=Ae(p);v.L_.add(4),await Al(v),v.q_.set("Unknown"),v.L_.delete(4),await $c(v)}(this))})}),this.q_=new X1(s,o)}}async function $c(n){if(Ci(n))for(const e of n.B_)await e(!0)}async function Al(n){for(const e of n.B_)await e(!1)}function W0(n,e){const t=Ae(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),wp(t)?_p(t):Ko(t).r_()&&vp(t,e))}function yp(n,e){const t=Ae(n),s=Ko(t);t.N_.delete(e),s.r_()&&H0(t,e),t.N_.size===0&&(s.r_()?s.o_():Ci(t)&&t.q_.set("Unknown"))}function vp(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(n).A_(e)}function H0(n,e){n.Q_.xe(e),Ko(n).R_(e)}function _p(n){n.Q_=new e1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ko(n).start(),n.q_.v_()}function wp(n){return Ci(n)&&!Ko(n).n_()&&n.N_.size>0}function Ci(n){return Ae(n).L_.size===0}function K0(n){n.Q_=void 0}async function eC(n){n.q_.set("Online")}async function tC(n){n.N_.forEach((e,t)=>{vp(n,e)})}async function nC(n,e){K0(n),wp(n)?(n.q_.M_(e),_p(n)):n.q_.set("Unknown")}async function rC(n,e,t){if(n.q_.set("Online"),e instanceof D0&&e.state===2&&e.cause)try{await async function(o,l){const d=l.cause;for(const f of l.targetIds)o.N_.has(f)&&(await o.remoteSyncer.rejectListen(f,d),o.N_.delete(f),o.Q_.removeTarget(f))}(n,e)}catch(s){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ic(n,s)}else if(e instanceof ac?n.Q_.Ke(e):e instanceof b0?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Se.min()))try{const s=await z0(n.localStore);t.compareTo(s)>=0&&await function(l,d){const f=l.Q_.rt(d);return f.targetChanges.forEach((p,v)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.N_.get(v);w&&l.N_.set(v,w.withResumeToken(p.resumeToken,d))}}),f.targetMismatches.forEach((p,v)=>{const w=l.N_.get(p);if(!w)return;l.N_.set(p,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),H0(l,p);const I=new Ss(w.target,p,v,w.sequenceNumber);vp(l,I)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(s){pe("RemoteStore","Failed to raise snapshot:",s),await Ic(n,s)}}async function Ic(n,e,t){if(!Il(e))throw e;n.L_.add(1),await Al(n),n.q_.set("Offline"),t||(t=()=>z0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await $c(n)})}function G0(n,e){return e().catch(t=>Ic(n,t,e))}async function qc(n){const e=Ae(n),t=Ns(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;sC(e);)try{const o=await B1(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,iC(e,o)}catch(o){await Ic(e,o)}Q0(e)&&Y0(e)}function sC(n){return Ci(n)&&n.O_.length<10}function iC(n,e){n.O_.push(e);const t=Ns(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Q0(n){return Ci(n)&&!Ns(n).n_()&&n.O_.length>0}function Y0(n){Ns(n).start()}async function oC(n){Ns(n).p_()}async function aC(n){const e=Ns(n);for(const t of n.O_)e.m_(t.mutations)}async function lC(n,e,t){const s=n.O_.shift(),o=dp.from(s,e,t);await G0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await qc(n)}async function uC(n,e){e&&Ns(n).V_&&await async function(s,o){if(function(d){return Jk(d)&&d!==G.ABORTED}(o.code)){const l=s.O_.shift();Ns(s).s_(),await G0(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await qc(s)}}(n,e),Q0(n)&&Y0(n)}async function xv(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const s=Ci(t);t.L_.add(3),await Al(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await $c(t)}async function cC(n,e){const t=Ae(n);e?(t.L_.delete(2),await $c(t)):e||(t.L_.add(2),await Al(t),t.q_.set("Unknown"))}function Ko(n){return n.K_||(n.K_=function(t,s,o){const l=Ae(t);return l.w_(),new Q1(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:eC.bind(null,n),Ro:tC.bind(null,n),mo:nC.bind(null,n),d_:rC.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),wp(n)?_p(n):n.q_.set("Unknown")):(await n.K_.stop(),K0(n))})),n.K_}function Ns(n){return n.U_||(n.U_=function(t,s,o){const l=Ae(t);return l.w_(),new Y1(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:oC.bind(null,n),mo:uC.bind(null,n),f_:aC.bind(null,n),g_:lC.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await qc(n)):(await n.U_.stop(),n.O_.length>0&&(pe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ep{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const d=Date.now()+s,f=new Ep(e,t,d,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(n,e){if(qr("AsyncQueue",`${e}: ${n}`),Il(n))return new ae(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Po{constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Ka(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Sv{constructor(){this.W_=new tt(ye.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Lo{constructor(e,t,s,o,l,d,f,p,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=d,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const d=[];return t.forEach(f=>{d.push({type:0,doc:f})}),new Lo(e,t,Po.emptySet(t),d,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class dC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class hC{constructor(){this.queries=Av(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=Ae(t),l=o.queries;o.queries=Av(),l.forEach((d,f)=>{for(const p of f.j_)p.onError(s)})})(this,new ae(G.ABORTED,"Firestore shutting down"))}}function Av(){return new Ho(n=>v0(n),Lc)}async function Ip(n,e){const t=Ae(n);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(s=2):(l=new dC,s=e.J_()?0:1);try{switch(s){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(d){const f=Tp(d,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Sp(t)}async function xp(n,e){const t=Ae(n),s=e.query;let o=3;const l=t.queries.get(s);if(l){const d=l.j_.indexOf(e);d>=0&&(l.j_.splice(d,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function fC(n,e){const t=Ae(n);let s=!1;for(const o of e){const l=o.query,d=t.queries.get(l);if(d){for(const f of d.j_)f.X_(o)&&(s=!0);d.z_=o}}s&&Sp(t)}function pC(n,e,t){const s=Ae(n),o=s.queries.get(e);if(o)for(const l of o.j_)l.onError(t);s.queries.delete(e)}function Sp(n){n.Y_.forEach(e=>{e.next()})}var Sf,kv;(kv=Sf||(Sf={})).ea="default",kv.Cache="cache";class Ap{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sf.Cache}}/**
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
 */class J0{constructor(e){this.key=e}}class X0{constructor(e){this.key=e}}class mC{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Re(),this.mutatedKeys=Re(),this.Aa=_0(e),this.Ra=new Po(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new Sv,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,d=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,I)=>{const A=o.get(w),O=jc(this.query,I)?I:null,W=!!A&&this.mutatedKeys.has(A.key),$=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let b=!1;A&&O?A.data.isEqual(O.data)?W!==$&&(s.track({type:3,doc:O}),b=!0):this.ga(A,O)||(s.track({type:2,doc:O}),b=!0,(p&&this.Aa(O,p)>0||v&&this.Aa(O,v)<0)&&(f=!0)):!A&&O?(s.track({type:0,doc:O}),b=!0):A&&!O&&(s.track({type:1,doc:A}),b=!0,(p||v)&&(f=!0)),b&&(O?(d=d.add(O),l=$?l.add(w):l.delete(w)):(d=d.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const w=this.query.limitType==="F"?d.last():d.first();d=d.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{Ra:d,fa:s,ns:f,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const d=e.fa.G_();d.sort((w,I)=>function(O,W){const $=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return $(O)-$(W)}(w.type,I.type)||this.Aa(w.doc,I.doc)),this.pa(s),o=o!=null&&o;const f=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,v=p!==this.Ea;return this.Ea=p,d.length!==0||v?{snapshot:new Lo(this.query,e.Ra,l,d,e.mutatedKeys,p===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Re(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const t=[];return e.forEach(s=>{this.da.has(s)||t.push(new X0(s))}),this.da.forEach(s=>{e.has(s)||t.push(new J0(s))}),t}ba(e){this.Ta=e.Ts,this.da=Re();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class gC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class yC{constructor(e){this.key=e,this.va=!1}}class vC{constructor(e,t,s,o,l,d){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=d,this.Ca={},this.Fa=new Ho(f=>v0(f),Lc),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(ye.comparator),this.Na=new Map,this.La=new pp,this.Ba={},this.ka=new Map,this.qa=Mo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _C(n,e,t=!0){const s=sw(n);let o;const l=s.Fa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await Z0(s,e,t,!0),o}async function wC(n,e){const t=sw(n);await Z0(t,e,!0,!1)}async function Z0(n,e,t,s){const o=await z1(n.localStore,ar(e)),l=o.targetId,d=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await EC(n,e,l,d==="current",o.resumeToken)),n.isPrimaryClient&&t&&W0(n.remoteStore,o),f}async function EC(n,e,t,s,o){n.Ka=(I,A,O)=>async function($,b,q,ee){let ie=b.view.ma(q);ie.ns&&(ie=await Ev($.localStore,b.query,!1).then(({documents:N})=>b.view.ma(N,ie)));const ue=ee&&ee.targetChanges.get(b.targetId),le=ee&&ee.targetMismatches.get(b.targetId)!=null,ge=b.view.applyChanges(ie,$.isPrimaryClient,ue,le);return Rv($,b.targetId,ge.wa),ge.snapshot}(n,I,A,O);const l=await Ev(n.localStore,e,!0),d=new mC(e,l.Ts),f=d.ma(l.documents),p=Sl.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",o),v=d.applyChanges(f,n.isPrimaryClient,p);Rv(n,t,v.wa);const w=new gC(e,t,d);return n.Fa.set(e,w),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),v.snapshot}async function TC(n,e,t){const s=Ae(n),o=s.Fa.get(e),l=s.Ma.get(o.targetId);if(l.length>1)return s.Ma.set(o.targetId,l.filter(d=>!Lc(d,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await xf(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&yp(s.remoteStore,o.targetId),Af(s,o.targetId)}).catch(Tl)):(Af(s,o.targetId),await xf(s.localStore,o.targetId,!0))}async function IC(n,e){const t=Ae(n),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),yp(t.remoteStore,s.targetId))}async function xC(n,e,t){const s=PC(n);try{const o=await function(d,f){const p=Ae(d),v=ft.now(),w=f.reduce((O,W)=>O.add(W.key),Re());let I,A;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let W=Wr(),$=Re();return p.cs.getEntries(O,w).next(b=>{W=b,W.forEach((q,ee)=>{ee.isValidDocument()||($=$.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,W)).next(b=>{I=b;const q=[];for(const ee of f){const ie=Hk(ee,I.get(ee.key).overlayedDocument);ie!=null&&q.push(new Ms(ee.key,ie,c0(ie.value.mapValue),lr.exists(!0)))}return p.mutationQueue.addMutationBatch(O,v,q,f)}).next(b=>{A=b;const q=b.applyToLocalDocumentSet(I,$);return p.documentOverlayCache.saveOverlays(O,b.batchId,q)})}).then(()=>({batchId:A.batchId,changes:E0(I)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(d,f,p){let v=d.Ba[d.currentUser.toKey()];v||(v=new tt(Me)),v=v.insert(f,p),d.Ba[d.currentUser.toKey()]=v}(s,o.batchId,t),await kl(s,o.changes),await qc(s.remoteStore)}catch(o){const l=Tp(o,"Failed to persist write");t.reject(l)}}async function ew(n,e){const t=Ae(n);try{const s=await F1(t.localStore,e);e.targetChanges.forEach((o,l)=>{const d=t.Na.get(l);d&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?d.va=!0:o.modifiedDocuments.size>0?Be(d.va):o.removedDocuments.size>0&&(Be(d.va),d.va=!1))}),await kl(t,s,e)}catch(s){await Tl(s)}}function Cv(n,e,t){const s=Ae(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach((l,d)=>{const f=d.view.Z_(e);f.snapshot&&o.push(f.snapshot)}),function(d,f){const p=Ae(d);p.onlineState=f;let v=!1;p.queries.forEach((w,I)=>{for(const A of I.j_)A.Z_(f)&&(v=!0)}),v&&Sp(p)}(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function SC(n,e,t){const s=Ae(n);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),l=o&&o.key;if(l){let d=new tt(ye.comparator);d=d.insert(l,zt.newNoDocument(l,Se.min()));const f=Re().add(l),p=new Bc(Se.min(),new Map,new tt(Me),d,f);await ew(s,p),s.Oa=s.Oa.remove(l),s.Na.delete(e),kp(s)}else await xf(s.localStore,e,!1).then(()=>Af(s,e,t)).catch(Tl)}async function AC(n,e){const t=Ae(n),s=e.batch.batchId;try{const o=await j1(t.localStore,e);nw(t,s,null),tw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await kl(t,o)}catch(o){await Tl(o)}}async function kC(n,e,t){const s=Ae(n);try{const o=await function(d,f){const p=Ae(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return p.mutationQueue.lookupMutationBatch(v,f).next(I=>(Be(I!==null),w=I.keys(),p.mutationQueue.removeMutationBatch(v,I))).next(()=>p.mutationQueue.performConsistencyCheck(v)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(v,w,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>p.localDocuments.getDocuments(v,w))})}(s.localStore,e);nw(s,e,t),tw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await kl(s,o)}catch(o){await Tl(o)}}function tw(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function nw(n,e,t){const s=Ae(n);let o=s.Ba[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function Af(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Ma.get(e))n.Fa.delete(s),t&&n.Ca.$a(s,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(s=>{n.La.containsKey(s)||rw(n,s)})}function rw(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(yp(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),kp(n))}function Rv(n,e,t){for(const s of t)s instanceof J0?(n.La.addReference(s.key,e),CC(n,s)):s instanceof X0?(pe("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,e),n.La.containsKey(s.key)||rw(n,s.key)):Te()}function CC(n,e){const t=e.key,s=t.path.canonicalString();n.Oa.get(t)||n.xa.has(s)||(pe("SyncEngine","New document in limbo: "+t),n.xa.add(s),kp(n))}function kp(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ye(Ge.fromString(e)),s=n.qa.next();n.Na.set(s,new yC(t)),n.Oa=n.Oa.insert(t,s),W0(n.remoteStore,new Ss(ar(Mc(t.path)),s,"TargetPurposeLimboResolution",sp.oe))}}async function kl(n,e,t){const s=Ae(n),o=[],l=[],d=[];s.Fa.isEmpty()||(s.Fa.forEach((f,p)=>{d.push(s.Ka(p,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const I=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(v){o.push(v);const I=gp.Wi(p.targetId,v);l.push(I)}}))}),await Promise.all(d),s.Ca.d_(o),await async function(p,v){const w=Ae(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>X.forEach(v,A=>X.forEach(A.$i,O=>w.persistence.referenceDelegate.addReference(I,A.targetId,O)).next(()=>X.forEach(A.Ui,O=>w.persistence.referenceDelegate.removeReference(I,A.targetId,O)))))}catch(I){if(!Il(I))throw I;pe("LocalStore","Failed to update sequence numbers: "+I)}for(const I of v){const A=I.targetId;if(!I.fromCache){const O=w.os.get(A),W=O.snapshotVersion,$=O.withLastLimboFreeSnapshotVersion(W);w.os=w.os.insert(A,$)}}}(s.localStore,l))}async function RC(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const s=await B0(t.localStore,e);t.currentUser=e,function(l,d){l.ka.forEach(f=>{f.forEach(p=>{p.reject(new ae(G.CANCELLED,d))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await kl(t,s.hs)}}function NC(n,e){const t=Ae(n),s=t.Na.get(e);if(s&&s.va)return Re().add(s.key);{let o=Re();const l=t.Ma.get(e);if(!l)return o;for(const d of l){const f=t.Fa.get(d);o=o.unionWith(f.view.Va)}return o}}function sw(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SC.bind(null,e),e.Ca.d_=fC.bind(null,e.eventManager),e.Ca.$a=pC.bind(null,e.eventManager),e}function PC(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kC.bind(null,e),e}class xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return L1(this.persistence,new V1,e.initialUser,this.serializer)}Ga(e){return new b1(mp.Zr,this.serializer)}Wa(e){return new q1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xc.provider={build:()=>new xc};class kf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RC.bind(null,this.syncEngine),await cC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hC}()}createDatastore(e){const t=zc(e.databaseInfo.databaseId),s=function(l){return new G1(l)}(e.databaseInfo);return function(l,d,f,p){return new J1(l,d,f,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,d,f){return new Z1(s,o,l,d,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Cv(this.syncEngine,t,0),function(){return Iv.D()?new Iv:new W1}())}createSyncEngine(e,t){return function(o,l,d,f,p,v,w){const I=new vC(o,l,d,f,p,v);return w&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ae(o);pe("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Al(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}kf.provider={build:()=>new kf};/**
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
 */class Cp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class bC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async d=>{pe("FirestoreClient","Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(s,d=>(pe("FirestoreClient","Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tp(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gh(n,e){n.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async o=>{s.isEqual(o)||(await B0(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await DC(n);pe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>xv(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,o)=>xv(e.remoteStore,o)),n._onlineComponents=e}async function DC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;_i("Error using user provided cache. Falling back to memory cache: "+t),await Gh(n,new xc)}}else pe("FirestoreClient","Using default OfflineComponentProvider"),await Gh(n,new xc);return n._offlineComponents}async function iw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe("FirestoreClient","Using user provided OnlineComponentProvider"),await Nv(n,n._uninitializedComponentsProvider._online)):(pe("FirestoreClient","Using default OnlineComponentProvider"),await Nv(n,new kf))),n._onlineComponents}function OC(n){return iw(n).then(e=>e.syncEngine)}async function Sc(n){const e=await iw(n),t=e.eventManager;return t.onListen=_C.bind(null,e.syncEngine),t.onUnlisten=TC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=wC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IC.bind(null,e.syncEngine),t}function VC(n,e,t={}){const s=new Fr;return n.asyncQueue.enqueueAndForget(async()=>function(l,d,f,p,v){const w=new Cp({next:A=>{w.Za(),d.enqueueAndForget(()=>xp(l,I));const O=A.docs.has(f);!O&&A.fromCache?v.reject(new ae(G.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&A.fromCache&&p&&p.source==="server"?v.reject(new ae(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(A)},error:A=>v.reject(A)}),I=new Ap(Mc(f.path),w,{includeMetadataChanges:!0,_a:!0});return Ip(l,I)}(await Sc(n),n.asyncQueue,e,t,s)),s.promise}function MC(n,e,t={}){const s=new Fr;return n.asyncQueue.enqueueAndForget(async()=>function(l,d,f,p,v){const w=new Cp({next:A=>{w.Za(),d.enqueueAndForget(()=>xp(l,I)),A.fromCache&&p.source==="server"?v.reject(new ae(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(A)},error:A=>v.reject(A)}),I=new Ap(f,w,{includeMetadataChanges:!0,_a:!0});return Ip(l,I)}(await Sc(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ow(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pv=new Map;/**
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
 */function aw(n,e,t){if(!t)throw new ae(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lw(n,e,t,s){if(e===!0&&s===!0)throw new ae(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bv(n){if(!ye.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dv(n){if(ye.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function pn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wc(n);throw new ae(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function LC(n,e){if(e<=0)throw new ae(G.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ov{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ow((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ov({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ov(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new a0;switch(s.type){case"firstParty":return new sk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Pv.get(t);s&&(pe("ComponentProvider","Removing Datastore"),Pv.delete(t),s.terminate())}(this),Promise.resolve()}}function uw(n,e,t,s={}){var o;const l=(n=pn(n,Hc))._getSettings(),d=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==d&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:d,ssl:!1})),s.mockUserToken){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Bt.MOCK_USER;else{f=TI(s.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ae(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Bt(v)}n._authCredentials=new tk(new o0(f,p))}}/**
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
 */class fr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fr(this.firestore,e,this._query)}}class Vt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Ur extends fr{constructor(e,t,s){super(e,t,Mc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new ye(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}function Bn(n,e,...t){if(n=rt(n),aw("collection","path",e),n instanceof Hc){const s=Ge.fromString(e,...t);return Dv(s),new Ur(n,null,s)}{if(!(n instanceof Vt||n instanceof Ur))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ge.fromString(e,...t));return Dv(s),new Ur(n.firestore,null,s)}}function zn(n,e,...t){if(n=rt(n),arguments.length===1&&(e=rp.newId()),aw("doc","path",e),n instanceof Hc){const s=Ge.fromString(e,...t);return bv(s),new Vt(n,null,new ye(s))}{if(!(n instanceof Vt||n instanceof Ur))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ge.fromString(e,...t));return bv(s),new Vt(n.firestore,n instanceof Ur?n.converter:null,new ye(s))}}/**
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
 */class Vv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $0(this,"async_queue_retry"),this.Vu=()=>{const s=Kh();s&&pe("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Kh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Kh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Fr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Il(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const o=function(d){let f=d.message||"";return d.stack&&(f=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),f}(s);throw qr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Ep.createAndSchedule(this,e,t,s,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Mv(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Ps extends Hc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Vv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vv(e),this._firestoreClient=void 0,await e}}}function cw(n,e){const t=typeof n=="object"?n:Wf(),s=typeof n=="string"?n:"(default)",o=Bo(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=wI("firestore");l&&uw(o,...l)}return o}function Cl(n){if(n._terminated)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jC(n),n._firestoreClient}function jC(n){var e,t,s;const o=n._freezeSettings(),l=function(f,p,v,w){return new yk(f,p,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,ow(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new bC(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class Ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ti(Ct.fromBase64String(e))}catch(t){throw new ae(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ti(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Rl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nl{constructor(e){this._methodName=e}}/**
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
 */class Kc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Gc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const FC=/^__.*__$/;class UC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new xl(e,this.data,t,this.fieldTransforms)}}class dw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ms(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Rp{constructor(e,t,s,o,l,d){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ac(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(hw(this.Cu)&&FC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class BC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||zc(e)}Qu(e,t,s,o=!1){return new Rp({Cu:e,methodName:t,qu:s,path:kt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Np(n){const e=n._freezeSettings(),t=zc(n._databaseId);return new BC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zC(n,e,t,s,o,l={}){const d=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);bp("Data must be an object, but it was:",d,s);const f=fw(s,d);let p,v;if(l.merge)p=new fn(d.fieldMask),v=d.fieldTransforms;else if(l.mergeFields){const w=[];for(const I of l.mergeFields){const A=Cf(e,I,t);if(!d.contains(A))throw new ae(G.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);mw(w,A)||w.push(A)}p=new fn(w),v=d.fieldTransforms.filter(I=>p.covers(I.field))}else p=null,v=d.fieldTransforms;return new UC(new rn(f),p,v)}class Qc extends Nl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}class Pp extends Nl{_toFieldTransform(e){return new zk(e.path,new dl)}isEqual(e){return e instanceof Pp}}function $C(n,e,t,s){const o=n.Qu(1,e,t);bp("Data must be an object, but it was:",o,s);const l=[],d=rn.empty();ki(s,(p,v)=>{const w=Dp(e,p,t);v=rt(v);const I=o.Nu(w);if(v instanceof Qc)l.push(w);else{const A=Pl(v,I);A!=null&&(l.push(w),d.set(w,A))}});const f=new fn(l);return new dw(d,f,o.fieldTransforms)}function qC(n,e,t,s,o,l){const d=n.Qu(1,e,t),f=[Cf(e,s,t)],p=[o];if(l.length%2!=0)throw new ae(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(Cf(e,l[A])),p.push(l[A+1]);const v=[],w=rn.empty();for(let A=f.length-1;A>=0;--A)if(!mw(v,f[A])){const O=f[A];let W=p[A];W=rt(W);const $=d.Nu(O);if(W instanceof Qc)v.push(O);else{const b=Pl(W,$);b!=null&&(v.push(O),w.set(O,b))}}const I=new fn(v);return new dw(w,I,d.fieldTransforms)}function WC(n,e,t,s=!1){return Pl(t,n.Qu(s?4:3,e))}function Pl(n,e){if(pw(n=rt(n)))return bp("Unsupported field value:",e,n),fw(n,e);if(n instanceof Nl)return function(s,o){if(!hw(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,o){const l=[];let d=0;for(const f of s){let p=Pl(f,o.Lu(d));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),d++}return{arrayValue:{values:l}}}(n,e)}return function(s,o){if((s=rt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Fk(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ft.fromDate(s);return{timestampValue:Tc(o.serializer,l)}}if(s instanceof ft){const l=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Tc(o.serializer,l)}}if(s instanceof Kc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ti)return{bytesValue:O0(o.serializer,s._byteString)};if(s instanceof Vt){const l=o.databaseId,d=s.firestore._databaseId;if(!d.isEqual(l))throw o.Bu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:fp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Gc)return function(d,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:d.toArray().map(p=>{if(typeof p!="number")throw f.Bu("VectorValues must only contain numeric values.");return cp(f.serializer,p)})}}}}}}(s,o);throw o.Bu(`Unsupported field value: ${Wc(s)}`)}(n,e)}function fw(n,e){const t={};return l0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(n,(s,o)=>{const l=Pl(o,e.Mu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function pw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof Kc||n instanceof Ti||n instanceof Vt||n instanceof Nl||n instanceof Gc)}function bp(n,e,t){if(!pw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Wc(t);throw s==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+s)}}function Cf(n,e,t){if((e=rt(e))instanceof Rl)return e._internalPath;if(typeof e=="string")return Dp(n,e);throw Ac("Field path arguments must be of type string or ",n,!1,void 0,t)}const HC=new RegExp("[~\\*/\\[\\]]");function Dp(n,e,t){if(e.search(HC)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rl(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ac(n,e,t,s,o){const l=s&&!s.isEmpty(),d=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||d)&&(p+=" (found",l&&(p+=` in field ${s}`),d&&(p+=` in document ${o}`),p+=")"),new ae(G.INVALID_ARGUMENT,f+n+p)}function mw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class gw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KC extends gw{data(){return super.data()}}function Yc(n,e){return typeof e=="string"?Dp(n,e):e instanceof Rl?e._internalPath:e._delegate._internalPath}/**
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
 */function yw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Op{}class Jc extends Op{}function hn(n,e,...t){let s=[];e instanceof Op&&s.push(e),s=s.concat(t),function(l){const d=l.filter(p=>p instanceof Xc).length,f=l.filter(p=>p instanceof bl).length;if(d>1||d>0&&f>0)throw new ae(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)n=o._apply(n);return n}class bl extends Jc{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new bl(e,t,s)}_apply(e){const t=this._parse(e);return vw(e._query,t),new fr(e.firestore,e.converter,_f(e._query,t))}_parse(e){const t=Np(e.firestore);return function(l,d,f,p,v,w,I){let A;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ae(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){jv(I,w);const O=[];for(const W of I)O.push(Lv(p,l,W));A={arrayValue:{values:O}}}else A=Lv(p,l,I)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||jv(I,w),A=WC(f,d,I,w==="in"||w==="not-in");return ht.create(v,w,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sr(n,e,t){const s=e,o=Yc("where",n);return bl._create(o,s,t)}class Xc extends Op{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xc(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let d=o;const f=l.getFlattenedFilters();for(const p of f)vw(d,p),d=_f(d,p)}(e._query,t),new fr(e.firestore,e.converter,_f(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zc extends Jc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Zc(e,t)}_apply(e){const t=function(o,l,d){if(o.startAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cl(l,d)}(e._query,this._field,this._direction);return new fr(e.firestore,e.converter,function(o,l){const d=o.explicitOrderBy.concat([l]);return new Wo(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function lc(n,e="asc"){const t=e,s=Yc("orderBy",n);return Zc._create(s,t)}class ed extends Jc{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new ed(e,t,s)}_apply(e){return new fr(e.firestore,e.converter,wc(e._query,this._limit,this._limitType))}}function Rf(n){return LC("limit",n),ed._create("limit",n,"F")}function Lv(n,e,t){if(typeof(t=rt(t))=="string"){if(t==="")throw new ae(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!y0(e)&&t.indexOf("/")!==-1)throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!ye.isDocumentKey(s))throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return sv(n,new ye(s))}if(t instanceof Vt)return sv(n,t._key);throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(t)}.`)}function jv(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vw(n,e){const t=function(o,l){for(const d of o)for(const f of d.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _w{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ki(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(d=>ot(d.doubleValue));return new Gc(l)}convertGeoPoint(e){return new Kc(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=op(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const t=Rs(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Be(U0(s));const o=new Do(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return o.isEqual(t)||qr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function GC(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
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
 */class ko{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vp extends gw{constructor(e,t,s,o,l,d){super(e,t,s,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Yc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class el extends Vp{data(e={}){return super.data(e)}}class Mp{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ko(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new el(this._firestore,this._userDataWriter,s.key,s,new ko(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map(f=>{const p=new el(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ko(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}})}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new el(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ko(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return f.type!==0&&(v=d.indexOf(f.doc.key),d=d.delete(f.doc.key)),f.type!==1&&(d=d.add(f.doc),w=d.indexOf(f.doc.key)),{type:QC(f.type),doc:p,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function QC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}/**
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
 */function td(n){n=pn(n,Vt);const e=pn(n.firestore,Ps);return VC(Cl(e),n._key).then(t=>ww(e,n,t))}class Lp extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ti(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,t)}}function Br(n){n=pn(n,fr);const e=pn(n.firestore,Ps),t=Cl(e),s=new Lp(e);return yw(n._query),MC(t,n._query).then(o=>new Mp(e,s,n,o))}function pl(n,e,t){n=pn(n,Vt);const s=pn(n.firestore,Ps),o=GC(n.converter,e,t);return jp(s,[zC(Np(s),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,lr.none())])}function kc(n,e,t,...s){n=pn(n,Vt);const o=pn(n.firestore,Ps),l=Np(o);let d;return d=typeof(e=rt(e))=="string"||e instanceof Rl?qC(l,"updateDoc",n._key,e,t,s):$C(l,"updateDoc",n._key,e),jp(o,[d.toMutation(n._key,lr.exists(!0))])}function Nf(n,...e){var t,s,o;n=rt(n);let l={includeMetadataChanges:!1,source:"default"},d=0;typeof e[d]!="object"||Mv(e[d])||(l=e[d],d++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Mv(e[d])){const I=e[d];e[d]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[d+1]=(s=I.error)===null||s===void 0?void 0:s.bind(I),e[d+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let p,v,w;if(n instanceof Vt)v=pn(n.firestore,Ps),w=Mc(n._key.path),p={next:I=>{e[d]&&e[d](ww(v,n,I))},error:e[d+1],complete:e[d+2]};else{const I=pn(n,fr);v=pn(I.firestore,Ps),w=I._query;const A=new Lp(v);p={next:O=>{e[d]&&e[d](new Mp(v,A,I,O))},error:e[d+1],complete:e[d+2]},yw(n._query)}return function(A,O,W,$){const b=new Cp($),q=new Ap(O,b,W);return A.asyncQueue.enqueueAndForget(async()=>Ip(await Sc(A),q)),()=>{b.Za(),A.asyncQueue.enqueueAndForget(async()=>xp(await Sc(A),q))}}(Cl(v),w,f,p)}function jp(n,e){return function(s,o){const l=new Fr;return s.asyncQueue.enqueueAndForget(async()=>xC(await OC(s),o,l)),l.promise}(Cl(n),e)}function ww(n,e,t){const s=t.docs.get(e._key),o=new Lp(n);return new Vp(n,o,e._key,s,new ko(t.hasPendingWrites,t.fromCache),e.converter)}function Dr(){return new Pp("serverTimestamp")}(function(e,t=!0){(function(o){qo=o})(zo),cr(new $n("firestore",(s,{instanceIdentifier:o,options:l})=>{const d=s.getProvider("app").getImmediate(),f=new Ps(new nk(s.getProvider("auth-internal")),new ok(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ae(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(v.options.projectId,w)}(d,o),d);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Sn(Zy,"4.7.3",e),Sn(Zy,"4.7.3","esm2017")})();const YC=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:_w,Bytes:Ti,CollectionReference:Ur,DocumentReference:Vt,DocumentSnapshot:Vp,FieldPath:Rl,FieldValue:Nl,Firestore:Ps,FirestoreError:ae,GeoPoint:Kc,Query:fr,QueryCompositeFilterConstraint:Xc,QueryConstraint:Jc,QueryDocumentSnapshot:el,QueryFieldFilterConstraint:bl,QueryLimitConstraint:ed,QueryOrderByConstraint:Zc,QuerySnapshot:Mp,SnapshotMetadata:ko,Timestamp:ft,VectorValue:Gc,_AutoId:rp,_ByteString:Ct,_DatabaseId:Do,_DocumentKey:ye,_EmptyAuthCredentialsProvider:a0,_FieldPath:kt,_cast:pn,_logWarn:_i,_validateIsNotUsedTogether:lw,collection:Bn,connectFirestoreEmulator:uw,doc:zn,ensureFirestoreConfigured:Cl,executeWrite:jp,getDoc:td,getDocs:Br,getFirestore:cw,limit:Rf,onSnapshot:Nf,orderBy:lc,query:hn,serverTimestamp:Dr,setDoc:pl,updateDoc:kc,where:sr},Symbol.toStringTag,{value:"Module"}));var JC="firebase",XC="10.14.1";/**
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
 */Sn(JC,XC,"app");const ZC={apiKey:"AIzaSyBZlvYq_yGf-u5qaWeBjVaSnqEqGl0QPiM",authDomain:"nithieshkumar-9a355.firebaseapp.com",projectId:"nithieshkumar-9a355",storageBucket:"nithieshkumar-9a355.firebasestorage.app",messagingSenderId:"68165785342",appId:"1:68165785342:web:4b476caea691acd81937af"},Ew=y_(ZC),Is=ZA(Ew),dt=cw(Ew),Tw="@firebase/installations",Fp="0.6.9";/**
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
 */const Iw=1e4,xw=`w:${Fp}`,Sw="FIS_v2",eR="https://firebaseinstallations.googleapis.com/v1",tR=3600*1e3,nR="installations",rR="Installations";/**
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
 */const sR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ii=new Si(nR,rR,sR);function Aw(n){return n instanceof hr&&n.code.includes("request-failed")}/**
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
 */function kw({projectId:n}){return`${eR}/projects/${n}/installations`}function Cw(n){return{token:n.token,requestStatus:2,expiresIn:oR(n.expiresIn),creationTime:Date.now()}}async function Rw(n,e){const s=(await e.json()).error;return Ii.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Nw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function iR(n,{refreshToken:e}){const t=Nw(n);return t.append("Authorization",aR(e)),t}async function Pw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function oR(n){return Number(n.replace("s","000"))}function aR(n){return`${Sw} ${n}`}/**
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
 */async function lR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=kw(n),o=Nw(n),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const d={fid:t,authVersion:Sw,appId:n.appId,sdkVersion:xw},f={method:"POST",headers:o,body:JSON.stringify(d)},p=await Pw(()=>fetch(s,f));if(p.ok){const v=await p.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:Cw(v.authToken)}}else throw await Rw("Create Installation",p)}/**
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
 */function bw(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function uR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const cR=/^[cdef][\w-]{21}$/,Pf="";function dR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=hR(n);return cR.test(t)?t:Pf}catch{return Pf}}function hR(n){return uR(n).substr(0,22)}/**
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
 */function nd(n){return`${n.appName}!${n.appId}`}/**
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
 */const Dw=new Map;function Ow(n,e){const t=nd(n);Vw(t,e),fR(t,e)}function Vw(n,e){const t=Dw.get(n);if(t)for(const s of t)s(e)}function fR(n,e){const t=pR();t&&t.postMessage({key:n,fid:e}),mR()}let fi=null;function pR(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=n=>{Vw(n.data.key,n.data.fid)}),fi}function mR(){Dw.size===0&&fi&&(fi.close(),fi=null)}/**
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
 */const gR="firebase-installations-database",yR=1,xi="firebase-installations-store";let Qh=null;function Up(){return Qh||(Qh=Pc(gR,yR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(xi)}}})),Qh}async function Cc(n,e){const t=nd(n),o=(await Up()).transaction(xi,"readwrite"),l=o.objectStore(xi),d=await l.get(t);return await l.put(e,t),await o.done,(!d||d.fid!==e.fid)&&Ow(n,e.fid),e}async function Mw(n){const e=nd(n),s=(await Up()).transaction(xi,"readwrite");await s.objectStore(xi).delete(e),await s.done}async function rd(n,e){const t=nd(n),o=(await Up()).transaction(xi,"readwrite"),l=o.objectStore(xi),d=await l.get(t),f=e(d);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!d||d.fid!==f.fid)&&Ow(n,f.fid),f}/**
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
 */async function Bp(n){let e;const t=await rd(n.appConfig,s=>{const o=vR(s),l=_R(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Pf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function vR(n){const e=n||{fid:dR(),registrationStatus:0};return Lw(e)}function _R(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=wR(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ER(n)}:{installationEntry:e}}async function wR(n,e){try{const t=await lR(n,e);return Cc(n.appConfig,t)}catch(t){throw Aw(t)&&t.customData.serverCode===409?await Mw(n.appConfig):await Cc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ER(n){let e=await Fv(n.appConfig);for(;e.registrationStatus===1;)await bw(100),e=await Fv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Bp(n);return s||t}return e}function Fv(n){return rd(n,e=>{if(!e)throw Ii.create("installation-not-found");return Lw(e)})}function Lw(n){return TR(n)?{fid:n.fid,registrationStatus:0}:n}function TR(n){return n.registrationStatus===1&&n.registrationTime+Iw<Date.now()}/**
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
 */async function IR({appConfig:n,heartbeatServiceProvider:e},t){const s=xR(n,t),o=iR(n,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const d={installation:{sdkVersion:xw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(d)},p=await Pw(()=>fetch(s,f));if(p.ok){const v=await p.json();return Cw(v)}else throw await Rw("Generate Auth Token",p)}function xR(n,{fid:e}){return`${kw(n)}/${e}/authTokens:generate`}/**
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
 */async function zp(n,e=!1){let t;const s=await rd(n.appConfig,l=>{if(!jw(l))throw Ii.create("not-registered");const d=l.authToken;if(!e&&kR(d))return l;if(d.requestStatus===1)return t=SR(n,e),l;{if(!navigator.onLine)throw Ii.create("app-offline");const f=RR(l);return t=AR(n,f),f}});return t?await t:s.authToken}async function SR(n,e){let t=await Uv(n.appConfig);for(;t.authToken.requestStatus===1;)await bw(100),t=await Uv(n.appConfig);const s=t.authToken;return s.requestStatus===0?zp(n,e):s}function Uv(n){return rd(n,e=>{if(!jw(e))throw Ii.create("not-registered");const t=e.authToken;return NR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AR(n,e){try{const t=await IR(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Cc(n.appConfig,s),t}catch(t){if(Aw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Mw(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cc(n.appConfig,s)}throw t}}function jw(n){return n!==void 0&&n.registrationStatus===2}function kR(n){return n.requestStatus===2&&!CR(n)}function CR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+tR}function RR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function NR(n){return n.requestStatus===1&&n.requestTime+Iw<Date.now()}/**
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
 */async function PR(n){const e=n,{installationEntry:t,registrationPromise:s}=await Bp(e);return s?s.catch(console.error):zp(e).catch(console.error),t.fid}/**
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
 */async function bR(n,e=!1){const t=n;return await DR(t),(await zp(t,e)).token}async function DR(n){const{registrationPromise:e}=await Bp(n);e&&await e}/**
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
 */function OR(n){if(!n||!n.options)throw Yh("App Configuration");if(!n.name)throw Yh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Yh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Yh(n){return Ii.create("missing-app-config-values",{valueName:n})}/**
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
 */const Fw="installations",VR="installations-internal",MR=n=>{const e=n.getProvider("app").getImmediate(),t=OR(e),s=Bo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},LR=n=>{const e=n.getProvider("app").getImmediate(),t=Bo(e,Fw).getImmediate();return{getId:()=>PR(t),getToken:o=>bR(t,o)}};function jR(){cr(new $n(Fw,MR,"PUBLIC")),cr(new $n(VR,LR,"PRIVATE"))}jR();Sn(Tw,Fp);Sn(Tw,Fp,"esm2017");/**
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
 */const FR="/firebase-messaging-sw.js",UR="/firebase-cloud-messaging-push-scope",Uw="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",BR="https://fcmregistrations.googleapis.com/v1",Bw="google.c.a.c_id",zR="google.c.a.c_l",$R="google.c.a.ts",qR="google.c.a.e";var Bv;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Bv||(Bv={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ml;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(ml||(ml={}));/**
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
 */function br(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function WR(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),o=new Uint8Array(s.length);for(let l=0;l<s.length;++l)o[l]=s.charCodeAt(l);return o}/**
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
 */const Jh="fcm_token_details_db",HR=5,zv="fcm_token_object_Store";async function KR(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Jh))return null;let e=null;return(await Pc(Jh,HR,{upgrade:async(s,o,l,d)=>{var f;if(o<2||!s.objectStoreNames.contains(zv))return;const p=d.objectStore(zv),v=await p.index("fcmSenderId").get(n);if(await p.clear(),!!v){if(o===2){const w=v;if(!w.auth||!w.p256dh||!w.endpoint)return;e={token:w.fcmToken,createTime:(f=w.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:br(w.vapidKey)}}}else if(o===3){const w=v;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:br(w.auth),p256dh:br(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:br(w.vapidKey)}}}else if(o===4){const w=v;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:br(w.auth),p256dh:br(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:br(w.vapidKey)}}}}}})).close(),await Fh(Jh),await Fh("fcm_vapid_details_db"),await Fh("undefined"),GR(e)?e:null}function GR(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const QR="firebase-messaging-database",YR=1,gl="firebase-messaging-store";let Xh=null;function zw(){return Xh||(Xh=Pc(QR,YR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(gl)}}})),Xh}async function JR(n){const e=$w(n),s=await(await zw()).transaction(gl).objectStore(gl).get(e);if(s)return s;{const o=await KR(n.appConfig.senderId);if(o)return await $p(n,o),o}}async function $p(n,e){const t=$w(n),o=(await zw()).transaction(gl,"readwrite");return await o.objectStore(gl).put(e,t),await o.done,e}function $w({appConfig:n}){return n.appId}/**
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
 */const XR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$t=new Si("messaging","Messaging",XR);/**
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
 */async function ZR(n,e){const t=await Wp(n),s=qw(e),o={method:"POST",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(qp(n.appConfig),o)).json()}catch(d){throw $t.create("token-subscribe-failed",{errorInfo:d==null?void 0:d.toString()})}if(l.error){const d=l.error.message;throw $t.create("token-subscribe-failed",{errorInfo:d})}if(!l.token)throw $t.create("token-subscribe-no-token");return l.token}async function eN(n,e){const t=await Wp(n),s=qw(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(`${qp(n.appConfig)}/${e.token}`,o)).json()}catch(d){throw $t.create("token-update-failed",{errorInfo:d==null?void 0:d.toString()})}if(l.error){const d=l.error.message;throw $t.create("token-update-failed",{errorInfo:d})}if(!l.token)throw $t.create("token-update-no-token");return l.token}async function tN(n,e){const s={method:"DELETE",headers:await Wp(n)};try{const l=await(await fetch(`${qp(n.appConfig)}/${e}`,s)).json();if(l.error){const d=l.error.message;throw $t.create("token-unsubscribe-failed",{errorInfo:d})}}catch(o){throw $t.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function qp({projectId:n}){return`${BR}/projects/${n}/registrations`}async function Wp({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function qw({p256dh:n,auth:e,endpoint:t,vapidKey:s}){const o={web:{endpoint:t,auth:e,p256dh:n}};return s!==Uw&&(o.web.applicationPubKey=s),o}/**
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
 */const nN=10080*60*1e3;async function rN(n){const e=await iN(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:br(e.getKey("auth")),p256dh:br(e.getKey("p256dh"))},s=await JR(n.firebaseDependencies);if(s){if(oN(s.subscriptionOptions,t))return Date.now()>=s.createTime+nN?sN(n,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await tN(n.firebaseDependencies,s.token)}catch(o){console.warn(o)}return $v(n.firebaseDependencies,t)}else return $v(n.firebaseDependencies,t)}async function sN(n,e){try{const t=await eN(n.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await $p(n.firebaseDependencies,s),t}catch(t){throw t}}async function $v(n,e){const s={token:await ZR(n,e),createTime:Date.now(),subscriptionOptions:e};return await $p(n,s),s.token}async function iN(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:WR(e)})}function oN(n,e){const t=e.vapidKey===n.vapidKey,s=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&s&&o&&l}/**
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
 */function qv(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return aN(e,n),lN(e,n),uN(e,n),e}function aN(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const s=e.notification.body;s&&(n.notification.body=s);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function lN(n,e){e.data&&(n.data=e.data)}function uN(n,e){var t,s,o,l,d;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const f=(o=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(n.fcmOptions.link=f);const p=(d=e.fcmOptions)===null||d===void 0?void 0:d.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function cN(n){return typeof n=="object"&&!!n&&Bw in n}/**
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
 */function dN(n){if(!n||!n.options)throw Zh("App Configuration Object");if(!n.name)throw Zh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const s of e)if(!t[s])throw Zh(s);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Zh(n){return $t.create("missing-app-config-values",{valueName:n})}/**
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
 */class hN{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=dN(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function fN(n){try{n.swRegistration=await navigator.serviceWorker.register(FR,{scope:UR}),n.swRegistration.update().catch(()=>{})}catch(e){throw $t.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function pN(n,e){if(!e&&!n.swRegistration&&await fN(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw $t.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function mN(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Uw)}/**
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
 */async function Ww(n,e){if(!navigator)throw $t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $t.create("permission-blocked");return await mN(n,e==null?void 0:e.vapidKey),await pN(n,e==null?void 0:e.serviceWorkerRegistration),rN(n)}/**
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
 */async function gN(n,e,t){const s=yN(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[Bw],message_name:t[zR],message_time:t[$R],message_device_time:Math.floor(Date.now()/1e3)})}function yN(n){switch(n){case ml.NOTIFICATION_CLICKED:return"notification_open";case ml.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function vN(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===ml.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(qv(t)):n.onMessageHandler.next(qv(t)));const s=t.data;cN(s)&&s[qR]==="1"&&await gN(n,t.messageType,s)}const Wv="@firebase/messaging",Hv="0.12.12";/**
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
 */const _N=n=>{const e=new hN(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>vN(e,t)),e},wN=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:s=>Ww(e,s)}};function EN(){cr(new $n("messaging",_N,"PUBLIC")),cr(new $n("messaging-internal",wN,"PRIVATE")),Sn(Wv,Hv),Sn(Wv,Hv,"esm2017")}/**
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
 */async function TN(){try{await p_()}catch{return!1}return typeof window<"u"&&f_()&&NI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function IN(n,e){if(!navigator)throw $t.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function xN(n=Wf()){return TN().then(e=>{if(!e)throw $t.create("unsupported-browser")},e=>{throw $t.create("indexed-db-unsupported")}),Bo(rt(n),"messaging").getImmediate()}async function SN(n,e){return n=rt(n),Ww(n,e)}function AN(n,e){return n=rt(n),IN(n,e)}EN();class kN{constructor(){this.messaging=null,this.currentToken=null,this.vapidKey="YOUR_VAPID_KEY",this.initializeMessaging()}async initializeMessaging(){if(typeof window<"u"&&"serviceWorker"in navigator)try{this.messaging=xN(),console.log("📱 Admin FCM Service initialized")}catch(e){console.error("❌ Error initializing Admin FCM:",e)}}async getToken(){try{if(window.ReactNativeWebView&&window.isAdminMobileApp)return console.log("📱 Running in Admin WebView, requesting FCM token from mobile app..."),new Promise(e=>{var s;const t=o=>{try{const l=JSON.parse(o.data);l.type==="ADMIN_FCM_TOKEN"&&l.token&&(console.log("📱 Received admin FCM token from mobile app:",l.token.substring(0,20)+"..."),this.currentToken=l.token,window.removeEventListener("message",t),e(l.token))}catch(l){console.error("Error parsing Admin WebView message:",l)}};window.addEventListener("message",t),(s=window.ReactNativeWebView)==null||s.postMessage(JSON.stringify({type:"REGISTER_ADMIN_FCM_TOKEN"})),setTimeout(()=>{window.removeEventListener("message",t),console.warn("⚠️ Timeout waiting for admin FCM token from mobile app"),e(null)},5e3)});if(this.messaging)if(console.log("🌐 Running in web browser, requesting admin FCM token..."),await Notification.requestPermission()==="granted"){const t=await SN(this.messaging,{vapidKey:this.vapidKey});if(t)return console.log("🌐 Web admin FCM token obtained:",t.substring(0,20)+"..."),this.currentToken=t,t}else console.warn("⚠️ Admin notification permission denied");return null}catch(e){return console.error("❌ Error getting admin FCM token:",e),null}}validateFCMToken(e){return!e||typeof e!="string"?!1:!!(e.startsWith("ExponentPushToken[")&&e.endsWith("]")||e.length>100&&/^[A-Za-z0-9_-]+$/.test(e))}async storeFCMToken(e,t,s="admin"){if(!e||!t)return console.warn("⚠️ Cannot store admin FCM token: missing userId or token"),!1;if(!this.validateFCMToken(t))return console.error("❌ Invalid admin FCM token format:",t.substring(0,20)+"..."),!1;try{const o=zn(dt,"users",e);return await kc(o,{fcm_token:t,fcm_token_updated:Dr(),fcm_token_platform:window.ReactNativeWebView?"mobile":"web",user_type:s,is_admin:!0,last_active:Dr()}),console.log("✅ Admin FCM token stored successfully for user:",e),!0}catch(o){console.error("❌ Error storing admin FCM token:",o);try{const l=zn(dt,"users",e);return await pl(l,{fcm_token:t,fcm_token_updated:Dr(),fcm_token_platform:window.ReactNativeWebView?"mobile":"web",user_type:s,is_admin:!0,has_admin:!0,last_active:Dr()},{merge:!0}),console.log("✅ Admin FCM token document created for user:",e),!0}catch(l){return console.error("❌ Error creating admin FCM token document:",l),!1}}}async removeFCMToken(e){if(!e)return!1;try{const t=zn(dt,"users",e);return await kc(t,{fcm_token:null,fcm_token_updated:Dr(),fcm_token_platform:null}),console.log("🗑️ Admin FCM token removed for user:",e),this.currentToken=null,!0}catch(t){return console.error("❌ Error removing admin FCM token:",t),!1}}onMessage(e){return this.messaging?AN(this.messaging,e):null}async autoRegisterToken(e,t="admin"){try{const s=await this.getToken();return s?(await this.storeFCMToken(e,s,t),s):null}catch(s){return console.error("❌ Error auto-registering admin FCM token:",s),null}}setupWebViewCommunication(){window.ReactNativeWebView&&(window.requestAdminFCMToken=()=>{console.log("📱 Admin FCM token requested by mobile app"),this.getToken()},window.addEventListener("message",e=>{try{const t=JSON.parse(e.data);t.type==="ADMIN_FCM_TOKEN"&&t.token&&(console.log("📱 Admin FCM token received from WebView:",t.token.substring(0,20)+"..."),this.currentToken=t.token,window.dispatchEvent(new CustomEvent("adminFcmTokenReceived",{detail:{token:t.token}})))}catch(t){console.error("Error handling Admin WebView message:",t)}}),console.log("📱 Admin WebView FCM communication setup complete"),window.isAdminMobileApp=!0)}getCurrentToken(){return this.currentToken}isMobileApp(){return!!window.ReactNativeWebView&&!!window.isAdminMobileApp}sendCustomerNotification(e,t){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"SEND_CUSTOMER_NOTIFICATION",customerData:e,notificationData:t}))}showAdminNotification(e,t,s={}){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"SHOW_ADMIN_NOTIFICATION",title:e,body:t,data:s}))}orderStatusUpdated(e,t){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"ORDER_STATUS_UPDATED",orderNumber:e,status:t}))}}const mi=new kN;typeof window<"u"&&mi.setupWebViewCommunication();const Hw=Q.createContext();function CN({children:n}){const[e,t]=Q.useState(null),[s,o]=Q.useState(!0),[l,d]=Q.useState(!1),[f,p]=Q.useState(null),[v,w]=Q.useState(!1),I=async $=>{try{console.log("🔍 Checking user role for:",$.email);let b=await td(zn(dt,"users",$.uid));if(!b.exists()){console.log("📄 User document not found by UID, checking by email");const ue=hn(Bn(dt,"users"),sr("email","==",$.email)),le=await Br(ue);if(!le.empty)b=le.docs[0];else{if($.email==="admin@gmail.com"){console.log("🔄 Creating admin user document...");const{createUserDocument:ge}=await Ty(async()=>{const{createUserDocument:k}=await import("./userDataStructure-BZWdr0TP.js");return{createUserDocument:k}},[]),N=ge($,{name:"Admin",has_admin:!0,role:"admin"}),{setDoc:x}=await Ty(async()=>{const{setDoc:k}=await Promise.resolve().then(()=>YC);return{setDoc:k}},void 0);return await x(zn(dt,"users",$.uid),N),console.log("✅ Admin user document created"),{hasAccess:!0,role:"admin",isSuperAdmin:!1,permissions:["dashboard","orders","customers"]}}return console.log("❌ User document not found"),{hasAccess:!1,role:null,isSuperAdmin:!1,permissions:[]}}}const q=b.data();console.log("📋 User data:",q);const ee=q.has_admin===!0,ie=q.admin===!0;if(ee||ie){console.log("✅ Admin access granted via has_admin field");const ue=q.role||"admin",le=ue==="super_admin";return{hasAccess:!0,role:ue,isSuperAdmin:le,permissions:le?["all"]:["dashboard","orders","customers"]}}return console.log("❌ User does not have admin access - has_admin:",q.has_admin),{hasAccess:!1,role:null,isSuperAdmin:!1,permissions:[]}}catch(b){return console.error("❌ Error checking user role:",b),console.log("❌ Admin access denied - user must have has_admin: true in Firestore"),{hasAccess:!1,role:null,isSuperAdmin:!1,permissions:[]}}};Q.useEffect(()=>zS(Is,async b=>{if(b){console.log("🔐 User authenticated:",b.email);const q=await I(b);if(q.hasAccess){t(b),d(!0),p(q.role),w(q.isSuperAdmin);try{console.log("👤 Admin session detected, ensuring FCM token is registered..."),await mi.autoRegisterToken(b.uid,"admin")}catch(ee){console.warn("⚠️ Failed to register admin FCM token for existing session:",ee)}console.log("✅ Access granted - Role:",q.role)}else console.log("❌ Access denied"),t(null),d(!1),p(null),w(!1),await $h(Is)}else t(null),d(!1),p(null),w(!1);o(!1)}),[]);const W={user:e,isAdminUser:l,userRole:f,isSuperAdmin:v,loading:s,login:async($,b)=>{try{console.log("🔑 Attempting login for:",$);const q=await Zf(Is,$,b),ee=await I(q.user);if(!ee.hasAccess)throw await $h(Is),new Error("Access denied. Admin privileges required.");p(ee.role),w(ee.isSuperAdmin);try{console.log("🔐 Admin logged in, registering FCM token..."),await mi.autoRegisterToken(q.user.uid,"admin")}catch(ie){console.warn("⚠️ Failed to register admin FCM token on login:",ie)}return console.log("✅ Login successful - Role:",ee.role),q}catch(q){throw console.error("❌ Login error:",q),q}},logout:async()=>{try{if(e)try{console.log("🚪 Admin logging out, removing FCM token..."),await mi.removeFCMToken(e.uid)}catch($){console.warn("⚠️ Failed to remove admin FCM token on logout:",$)}await $h(Is),console.log("👋 Admin logged out")}catch($){console.error("Logout error:",$)}}};return y.jsx(Hw.Provider,{value:W,children:n})}function Hp(){const n=Q.useContext(Hw);if(!n)throw new Error("useAdminAuth must be used within an AdminAuthProvider");return n}function RN({children:n}){const{user:e,isAdminUser:t,loading:s}=Hp();return s?y.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-bakery-500 mx-auto mb-4"}),y.jsx("p",{className:"text-gray-600",children:"Loading admin panel..."})]})}):!e||!t?y.jsx(o_,{to:"/login",replace:!0}):n}/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kw=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=Q.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:d,...f},p)=>Q.createElement("svg",{ref:p,...PN,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:Kw("lucide",o),...f},[...d.map(([v,w])=>Q.createElement(v,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(n,e)=>{const t=Q.forwardRef(({className:s,...o},l)=>Q.createElement(bN,{ref:l,iconNode:e,className:Kw(`lucide-${NN(n)}`,s),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=Qe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=Qe("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=Qe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Qe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=Qe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=Qe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=Qe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=Qe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=Qe("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=Qe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=Qe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Qe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=Qe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=Qe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=Qe("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=Qe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=Qe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=Qe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Qe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=Qe("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=Qe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=Qe("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=Qe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=Qe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function HN(){const[n,e]=Q.useState(""),[t,s]=Q.useState(""),[o,l]=Q.useState(!1),[d,f]=Q.useState(""),[p,v]=Q.useState(!1),{login:w}=Hp(),I=zf(),A=async O=>{if(O.preventDefault(),!n||!t){f("Please fill in all fields");return}v(!0),f("");try{await w(n,t),I("/dashboard")}catch(W){f(W.message||"Login failed. Please try again.")}finally{v(!1)}};return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 admin-container",children:[y.jsx("div",{className:"absolute inset-0 opacity-20",children:y.jsx("div",{className:"h-full w-full bg-gradient-to-br from-bakery-100/30 to-orange-100/30"})}),y.jsxs("div",{className:"relative max-w-md w-full space-y-6 sm:space-y-8 animate-fade-in",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"mx-auto h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-bakery-500 to-bakery-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-scale-in",children:y.jsx(ON,{className:"h-8 w-8 sm:h-10 sm:w-10 text-white"})}),y.jsx("h1",{className:"text-3xl sm:text-4xl font-bold bg-gradient-to-r from-bakery-600 to-bakery-800 bg-clip-text text-transparent mb-2",children:"Admin Portal"}),y.jsx("p",{className:"text-base sm:text-lg text-gray-600 font-medium",children:"Arunachalam Bakery Shop"}),y.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Management Dashboard"})]}),y.jsxs("div",{className:"bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/50 admin-card animate-scale-in",children:[y.jsxs("form",{className:"space-y-6",onSubmit:A,children:[d&&y.jsxs("div",{className:"bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 flex items-start animate-shake",children:[y.jsx(VN,{className:"h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5"}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-sm font-medium text-red-800",children:"Authentication Error"}),y.jsx("p",{className:"text-sm text-red-700 mt-1",children:d})]})]}),y.jsxs("div",{className:"space-y-5",children:[y.jsxs("div",{className:"group",children:[y.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-bakery-600 transition-colors",children:"Administrator Email"}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx(Gp,{className:"h-5 w-5 text-gray-400 group-focus-within:text-bakery-500 transition-colors"})}),y.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:n,onChange:O=>e(O.target.value),className:"w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bakery-500 focus:border-bakery-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-500 text-base admin-input",placeholder:"admin@arunachalambakery.com",disabled:p})]})]}),y.jsxs("div",{className:"group",children:[y.jsx("label",{htmlFor:"password",className:"block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-bakery-600 transition-colors",children:"Password"}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx(FN,{className:"h-5 w-5 text-gray-400 group-focus-within:text-bakery-500 transition-colors"})}),y.jsx("input",{id:"password",name:"password",type:o?"text":"password",autoComplete:"current-password",required:!0,value:t,onChange:O=>s(O.target.value),className:"w-full pl-12 pr-12 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bakery-500 focus:border-bakery-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-500 text-base admin-input",placeholder:"Enter your password",disabled:p}),y.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors",onClick:()=>l(!o),disabled:p,children:o?y.jsx(MN,{className:"h-5 w-5"}):y.jsx(Kp,{className:"h-5 w-5"})})]})]})]}),y.jsx("button",{type:"submit",disabled:p,className:"w-full bg-gradient-to-r from-bakery-500 to-bakery-600 hover:from-bakery-600 hover:to-bakery-700 disabled:from-bakery-300 disabled:to-bakery-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none",children:p?y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"}),y.jsx("span",{children:"Authenticating..."})]}):y.jsxs(y.Fragment,{children:[y.jsx(Gv,{className:"h-6 w-6 mr-3"}),y.jsx("span",{children:"Access Admin Panel"})]})})]}),y.jsx("div",{className:"mt-8 pt-6 border-t border-gray-200/50",children:y.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-xl p-5",children:y.jsxs("div",{className:"flex items-start",children:[y.jsx(Gv,{className:"h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-sm font-semibold text-blue-900 mb-2",children:"🔒 Secure Admin Access"}),y.jsx("p",{className:"text-xs text-blue-800 leading-relaxed",children:"This is a restricted administrative portal. Only authorized bakery staff with valid credentials can access the management dashboard. All login attempts are monitored and logged for security purposes."})]})]})})}),y.jsx("div",{className:"mt-6",children:y.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center",children:[y.jsxs("div",{className:"p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200/50",children:[y.jsx("div",{className:"text-green-600 text-xl mb-1",children:"📊"}),y.jsx("p",{className:"text-xs text-green-800 font-medium",children:"Analytics"})]}),y.jsxs("div",{className:"p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200/50",children:[y.jsx("div",{className:"text-purple-600 text-xl mb-1",children:"🛍️"}),y.jsx("p",{className:"text-xs text-purple-800 font-medium",children:"Orders"})]}),y.jsxs("div",{className:"p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200/50",children:[y.jsx("div",{className:"text-amber-600 text-xl mb-1",children:"🔔"}),y.jsx("p",{className:"text-xs text-amber-800 font-medium",children:"Live Updates"})]})]})})]}),y.jsx("div",{className:"text-center",children:y.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50",children:[y.jsx("p",{className:"text-sm text-gray-600 font-medium",children:"© 2024 Arunachalam Bakery Shop"}),y.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Admin Panel v1.0 | Secure & Responsive"})]})})]})]})}class KN{constructor(){console.log("🔔 Admin Notification Service initialized")}async getCustomerFCMTokenFromOrder(e){var t;try{if(e.userId){const s=await td(zn(dt,"users",e.userId));if(s.exists()){const o=s.data();if(o.fcm_token)return{token:o.fcm_token,userId:s.id,email:o.email,name:o.displayName||o.name,platform:o.fcm_token_platform}}}if(e.email||(t=e.deliveryInfo)!=null&&t.email){const s=e.email||e.deliveryInfo.email,o=hn(Bn(dt,"users"),sr("email","==",s),sr("fcm_token","!=",null)),l=await Br(o);if(!l.empty){const d=l.docs[0].data();return{token:d.fcm_token,userId:l.docs[0].id,email:d.email,name:d.displayName||d.name,platform:d.fcm_token_platform}}}return console.log("⚠️ No FCM token found for customer in order:",e.orderId),null}catch(s){return console.error("❌ Error getting customer FCM token from order:",s),null}}async sendOrderStatusUpdateToCustomer(e,t){var s;try{console.log("📱 Admin sending status update to customer...");const o=await this.getCustomerFCMTokenFromOrder(e);if(!o)return console.log("⚠️ No customer FCM token found for order:",e.orderId),{success:!1,message:"Customer FCM token not found",customerNotified:!1};const l={pending:{title:"📋 Order Received",body:`Your order #${e.orderId} has been received and is being processed.`,color:"#FF9800"},processing:{title:"👨‍🍳 Order in Progress",body:`Great news! Your order #${e.orderId} is now being prepared by our bakers.`,color:"#2196F3"},ready:{title:"🎉 Your Order is Ready!",body:`Amazing! Order #${e.orderId} is ready for pickup at Arunachalam Bakery.`,color:"#4CAF50"},pickup:{title:"🎉 Your Order is Ready for Pickup!",body:`Great news! Order #${e.orderId} is ready for pickup at Arunachalam Bakery.`,color:"#4CAF50"},completed:{title:"✅ Order Completed",body:`Thank you! Order #${e.orderId} has been completed successfully. We hope you enjoyed it!`,color:"#4CAF50"},cancelled:{title:"❌ Order Cancelled",body:`We're sorry, but order #${e.orderId} has been cancelled. Please contact us for details.`,color:"#f44336"}},d=l[t]||l.pending,f={title:d.title,body:d.body,data:{type:"order_status_update",status:t,orderId:e.orderId,orderNumber:e.orderId,total:((s=e.total)==null?void 0:s.toString())||"0",customerName:o.name,url:"/orders"}};return console.log("📱 Sending status update notification:"),console.log("📋 Order:",e.orderId,"→",t),console.log("👤 Customer:",o.name,o.email),window.ReactNativeWebView&&window.isAdminMobileApp&&(mi.orderStatusUpdated(e.orderId,t),window.ReactNativeWebView.postMessage(JSON.stringify({type:"SEND_CUSTOMER_STATUS_NOTIFICATION",customerToken:o.token,notification:f,status:t}))),(t==="pickup"||t==="ready")&&window.ReactNativeWebView&&mi.showAdminNotification("✅ Customer Notified",`Customer has been notified that Order #${e.orderId} is ready for pickup!`),{success:!0,message:`Status update sent to customer: ${o.name}`,customerNotified:!0,customerEmail:o.email,status:t}}catch(o){return console.error("❌ Error sending status update to customer:",o),{success:!1,error:o.message,customerNotified:!1}}}async sendOrderReadyNotification(e){return console.log('🎉 Sending "Order Ready" notification...'),await this.sendOrderStatusUpdateToCustomer(e,"pickup")}async sendCustomNotificationToCustomer(e,t,s){try{const o=await this.getCustomerFCMTokenFromOrder(e);if(!o)return{success:!1,message:"Customer FCM token not found",customerNotified:!1};const l={title:t,body:s,data:{type:"custom_notification",orderId:e.orderId,url:"/orders"}};return console.log("📱 Sending custom notification to customer:",t),window.ReactNativeWebView&&window.isAdminMobileApp&&mi.sendCustomerNotification(o,l),{success:!0,message:`Custom notification sent to customer: ${o.name}`,customerNotified:!0}}catch(o){return console.error("❌ Error sending custom notification:",o),{success:!1,error:o.message,customerNotified:!1}}}}const GN=new KN,To={ORDERS:"orders",USERS:"users"},tl={subscribeToOrders:(n,e={})=>{try{let t=Bn(dt,To.ORDERS);return e.status&&e.status!=="all"&&(t=hn(t,sr("status","==",e.status))),e.limit&&(t=hn(t,Rf(e.limit))),t=hn(t,lc("createdAt","desc")),Nf(t,o=>{const l=[];o.forEach(d=>{var f,p;l.push({id:d.id,...d.data(),createdAt:((p=(f=d.data().createdAt)==null?void 0:f.toDate)==null?void 0:p.call(f))||new Date(d.data().createdAt)})}),n(l)})}catch(t){throw console.error("❌ Error subscribing to orders:",t),new Error("Failed to subscribe to orders")}},getAllOrders:async(n={})=>{try{let e=Bn(dt,To.ORDERS);n.status&&n.status!=="all"&&(e=hn(e,sr("status","==",n.status))),n.limit&&(e=hn(e,Rf(n.limit))),e=hn(e,lc("createdAt","desc"));const t=await Br(e),s=[];return t.forEach(o=>{var l,d;s.push({id:o.id,...o.data(),createdAt:((d=(l=o.data().createdAt)==null?void 0:l.toDate)==null?void 0:d.call(l))||new Date(o.data().createdAt)})}),s}catch(e){throw console.error("❌ Error fetching orders:",e),new Error("Failed to fetch orders")}},updateOrderStatus:async(n,e)=>{try{const t=zn(dt,To.ORDERS,n),s=await td(t);if(!s.exists())throw new Error("Order not found");const o=s.data();await kc(t,{status:e,updatedAt:Dr(),...e==="pickup"&&{pickupTime:Dr()},...e==="completed"&&{completedTime:Dr()}}),console.log("✅ Order status updated:",n,e);try{const l=await GN.sendOrderStatusUpdateToCustomer({...o,orderId:n},e);console.log("📱 Customer notification result:",l)}catch(l){console.warn("⚠️ Failed to send customer notification:",l.message)}return!0}catch(t){throw console.error("❌ Error updating order status:",t),new Error("Failed to update order status")}},getPendingOrdersCount:async()=>{try{const n=hn(Bn(dt,To.ORDERS),sr("status","==","pending"));return(await Br(n)).size}catch(n){return console.error("❌ Error getting pending orders count:",n),0}},subscribeToNewOrders:n=>{try{const e=new Date(Date.now()-3e5),t=hn(Bn(dt,To.ORDERS),sr("status","==","pending"),lc("createdAt","desc"));return Nf(t,o=>{const l=[];o.forEach(d=>{var v,w;const f=d.data(),p=((w=(v=f.createdAt)==null?void 0:v.toDate)==null?void 0:w.call(v))||new Date(f.createdAt);p>e&&l.push({id:d.id,...f,createdAt:p})}),l.length>0&&n(l)})}catch(e){throw console.error("❌ Error subscribing to new orders:",e),new Error("Failed to subscribe to new orders")}},getOrderStats:async()=>{try{const n=Bn(dt,To.ORDERS),e=await Br(n),t={total:e.size,pending:0,pickup:0,completed:0,totalRevenue:0,todayOrders:0,todayRevenue:0},s=new Date;return s.setHours(0,0,0,0),e.forEach(o=>{var p,v;const l=o.data(),d=((v=(p=l.createdAt)==null?void 0:p.toDate)==null?void 0:v.call(p))||new Date(l.createdAt);l.status==="pending"?t.pending++:l.status==="pickup"?t.pickup++:l.status==="completed"&&t.completed++;const f=l.total||0;t.totalRevenue+=f,d>=s&&(t.todayOrders++,t.todayRevenue+=f)}),t}catch(n){throw console.error("❌ Error getting order stats:",n),new Error("Failed to get order statistics")}}};function QN(){const[n,e]=Q.useState({total:0,pending:0,pickup:0,completed:0,totalRevenue:0,todayOrders:0,todayRevenue:0}),[t,s]=Q.useState([]),[o,l]=Q.useState(!0),[d,f]=Q.useState("");Q.useEffect(()=>{p();const O=tl.subscribeToOrders($=>{s($.slice(0,5))},{limit:5}),W=tl.subscribeToNewOrders($=>{$.length>0&&v($[0])});return()=>{O==null||O(),W==null||W()}},[]);const p=async()=>{try{l(!0);const O=await tl.getOrderStats();e(O)}catch(O){console.error("Error loading dashboard data:",O),f("Failed to load dashboard data")}finally{l(!1)}},v=O=>{Notification.permission==="granted"&&new Notification("New Order Received!",{body:`Order #${O.id.slice(-6)} - ₹${O.total}`,icon:"/vite.svg"})};Q.useEffect(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]);const w=O=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(O),I=O=>O?new Date(O).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"N/A",A=O=>{const W={pending:"bg-yellow-100 text-yellow-800 border-yellow-200",pickup:"bg-blue-100 text-blue-800 border-blue-200",completed:"bg-green-100 text-green-800 border-green-200"},$={pending:"Pending",pickup:"Ready for Pickup",completed:"Completed"};return y.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${W[O]||W.pending}`,children:$[O]||O})};return o?y.jsxs("div",{className:"flex items-center justify-center h-64",children:[y.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-bakery-500"}),y.jsx("span",{className:"ml-2 text-gray-600",children:"Loading dashboard..."})]}):d?y.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:[y.jsx("p",{className:"text-red-700",children:d}),y.jsx("button",{onClick:p,className:"mt-2 text-sm text-red-600 hover:text-red-500 font-medium",children:"Try again"})]}):y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"mb-6",children:[y.jsx("h1",{className:"text-xl md:text-2xl font-bold text-gray-900",children:"Dashboard"}),y.jsx("p",{className:"text-sm text-gray-600",children:"Admin Panel"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6",children:[y.jsx("div",{className:"bg-white rounded-lg border border-gray-200 p-4",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"p-2 bg-blue-100 rounded-lg mb-2 mx-auto w-fit",children:y.jsx(Gw,{className:"h-5 w-5 text-blue-600"})}),y.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Total Orders"}),y.jsx("p",{className:"text-lg font-bold text-gray-900",children:n.total})]})}),y.jsx("div",{className:"bg-white rounded-lg border border-gray-200 p-4",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"p-2 bg-yellow-100 rounded-lg mb-2 mx-auto w-fit",children:y.jsx(bf,{className:"h-5 w-5 text-yellow-600"})}),y.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Pending"}),y.jsx("p",{className:"text-lg font-bold text-gray-900",children:n.pending})]})}),y.jsx("div",{className:"bg-white rounded-lg border border-gray-200 p-4",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"p-2 bg-green-100 rounded-lg mb-2 mx-auto w-fit",children:y.jsx(jN,{className:"h-5 w-5 text-green-600"})}),y.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Revenue"}),y.jsx("p",{className:"text-sm font-bold text-gray-900",children:w(n.totalRevenue)})]})}),y.jsx("div",{className:"bg-white rounded-lg border border-gray-200 p-4",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"p-2 bg-purple-100 rounded-lg mb-2 mx-auto w-fit",children:y.jsx($N,{className:"h-5 w-5 text-purple-600"})}),y.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Today"}),y.jsx("p",{className:"text-lg font-bold text-gray-900",children:n.todayOrders})]})})]}),y.jsxs("div",{className:"bg-white rounded-lg border border-gray-200",children:[y.jsx("div",{className:"p-4 border-b border-gray-200",children:y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Recent Orders"}),y.jsxs("a",{href:"/orders",className:"text-sm text-blue-600 hover:text-blue-500 font-medium flex items-center",children:[y.jsx(Kp,{className:"h-4 w-4 mr-1"}),"View All"]})]})}),y.jsx("div",{className:"p-4",children:t.length===0?y.jsxs("div",{className:"text-center py-8",children:[y.jsx(Of,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),y.jsx("p",{className:"text-gray-500",children:"No orders found"})]}):y.jsx("div",{className:"space-y-3",children:t.map(O=>{var W,$;return y.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("span",{className:"text-sm font-medium text-gray-900",children:["#",O.id.slice(-6)]}),A(O.status)]}),y.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-gray-500",children:"Customer"}),y.jsx("p",{className:"font-medium text-gray-900",children:((W=O.deliveryInfo)==null?void 0:W.name)||"N/A"})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-gray-500",children:"Total"}),y.jsx("p",{className:"font-medium text-gray-900",children:w(O.total||0)})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-gray-500",children:"Items"}),y.jsxs("p",{className:"text-gray-900",children:[(($=O.items)==null?void 0:$.length)||0," items"]})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-gray-500",children:"Date"}),y.jsx("p",{className:"text-gray-900",children:I(O.createdAt)})]})]})]},O.id)})})})]})]})}function YN(){var ge,N,x,k,P,M,L,C,Ye,pt,mt,Le;const[n,e]=Q.useState([]),[t,s]=Q.useState([]),[o,l]=Q.useState(!0),[d,f]=Q.useState(""),[p,v]=Q.useState(null),[w,I]=Q.useState(!1),[A,O]=Q.useState({status:"all",search:"",dateRange:"all"}),[W,$]=Q.useState({});Q.useEffect(()=>{const B=tl.subscribeToOrders(re=>{e(re),l(!1)});return()=>{B&&B()}},[]),Q.useEffect(()=>{let B=[...n];if(A.status!=="all"&&(B=B.filter(re=>re.status===A.status)),A.search.trim()){const re=A.search.toLowerCase();B=B.filter(te=>{var V,K,he,Ie,xe;return te.id.toLowerCase().includes(re)||((K=(V=te.deliveryInfo)==null?void 0:V.name)==null?void 0:K.toLowerCase().includes(re))||((Ie=(he=te.deliveryInfo)==null?void 0:he.phone)==null?void 0:Ie.includes(re))||((xe=te.items)==null?void 0:xe.some(ke=>ke.name.toLowerCase().includes(re)))})}if(A.dateRange!=="all"){const re=new Date;let te=new Date;switch(A.dateRange){case"today":te.setHours(0,0,0,0);break;case"week":te.setDate(re.getDate()-7);break;case"month":te.setMonth(re.getMonth()-1);break}B=B.filter(V=>new Date(V.createdAt)>=te)}s(B)},[n,A]);const b=async(B,re)=>{try{$(V=>({...V,[B]:!0})),await tl.updateOrderStatus(B,re);const te=n.findIndex(V=>V.id===B);if(te!==-1){const V=[...n];V[te]={...V[te],status:re},e(V)}}catch(te){console.error("Error updating order status:",te),f("Failed to update order status")}finally{$(te=>({...te,[B]:!1}))}},q=B=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(B),ee=B=>B?new Date(B).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A",ie=B=>{const re={pending:"bg-yellow-100 text-yellow-800 border-yellow-200",pickup:"bg-blue-100 text-blue-800 border-blue-200",completed:"bg-green-100 text-green-800 border-green-200"},te={pending:"Pending",pickup:"Ready for Pickup",completed:"Completed"},K={pending:bf,pickup:qN,completed:ef}[B]||bf;return y.jsxs("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${re[B]||re.pending}`,children:[y.jsx(K,{className:"h-3 w-3 mr-1"}),te[B]||B]})},ue=B=>{switch(B){case"pending":return{action:"pickup",label:"Mark as Pickup",color:"bg-blue-500 hover:bg-blue-600"};case"pickup":return{action:"completed",label:"Mark as Completed",color:"bg-green-500 hover:bg-green-600"};default:return null}},le=B=>{v(B),I(!0)};return o?y.jsxs("div",{className:"flex items-center justify-center h-64",children:[y.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-bakery-500"}),y.jsx("span",{className:"ml-2 text-gray-600",children:"Loading orders..."})]}):y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[y.jsxs("div",{children:[y.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Order Management"}),y.jsx("p",{className:"text-gray-600",children:"Manage all customer orders and track status"})]}),y.jsx("div",{className:"mt-4 sm:mt-0",children:y.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-bakery-100 text-bakery-800",children:[t.length," orders"]})})]}),y.jsx("div",{className:"bg-white rounded-lg border border-gray-200 p-4",children:y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"relative",children:[y.jsx(zN,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"}),y.jsx("input",{type:"text",placeholder:"Search orders...",value:A.search,onChange:B=>O(re=>({...re,search:B.target.value})),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[y.jsxs("select",{value:A.status,onChange:B=>O(re=>({...re,status:B.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",children:[y.jsx("option",{value:"all",children:"All Status"}),y.jsx("option",{value:"pending",children:"Pending"}),y.jsx("option",{value:"pickup",children:"Ready"}),y.jsx("option",{value:"completed",children:"Completed"})]}),y.jsxs("select",{value:A.dateRange,onChange:B=>O(re=>({...re,dateRange:B.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",children:[y.jsx("option",{value:"all",children:"All Time"}),y.jsx("option",{value:"today",children:"Today"}),y.jsx("option",{value:"week",children:"This Week"}),y.jsx("option",{value:"month",children:"This Month"})]})]})]})}),y.jsx("div",{className:"bg-white rounded-lg border border-gray-200",children:y.jsx("div",{className:"p-4",children:t.length===0?y.jsxs("div",{className:"text-center py-8",children:[y.jsx(Of,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),y.jsx("p",{className:"text-gray-500",children:"No orders found"})]}):y.jsx("div",{className:"space-y-3",children:t.map(B=>{var te,V,K,he,Ie;const re=ue(B.status);return y.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsxs("div",{children:[y.jsxs("p",{className:"text-sm font-bold text-gray-900",children:["#",B.id.slice(-6)]}),y.jsx("p",{className:"text-xs text-gray-500",children:ee(B.createdAt)})]}),y.jsxs("div",{className:"flex items-center space-x-2",children:[ie(B.status),y.jsx("button",{onClick:()=>le(B),className:"px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700",children:y.jsx(Kp,{className:"h-3 w-3"})})]})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("p",{className:"text-sm font-medium text-gray-900 mb-1",children:((te=B.deliveryInfo)==null?void 0:te.name)||"N/A"}),y.jsxs("div",{className:"flex items-center text-xs text-gray-600 mb-1",children:[y.jsx(Vf,{className:"h-3 w-3 mr-2"}),((V=B.deliveryInfo)==null?void 0:V.phone)||"N/A"]}),((K=B.deliveryInfo)==null?void 0:K.address)&&y.jsxs("div",{className:"flex items-start text-xs text-gray-600",children:[y.jsx(Df,{className:"h-3 w-3 mr-2 mt-0.5 flex-shrink-0"}),y.jsx("span",{className:"line-clamp-2",children:B.deliveryInfo.address})]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm mb-3",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-gray-500 mb-1",children:"Total Amount"}),y.jsx("p",{className:"font-bold text-green-600",children:q(B.total||0)})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-gray-500 mb-1",children:"Items"}),y.jsxs("p",{className:"font-medium",children:[((he=B.items)==null?void 0:he.length)||0," items"]})]})]}),((Ie=B.items)==null?void 0:Ie.some(xe=>{var ke;return xe.category==="Cakes"||((ke=xe.name)==null?void 0:ke.toLowerCase().includes("cake"))}))&&y.jsx("div",{className:"mb-3",children:y.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800",children:"🎂 Custom Cake Order"})}),re&&y.jsx("div",{className:"flex justify-end",children:y.jsxs("button",{onClick:()=>b(B.id,re.action),disabled:W[B.id],className:`inline-flex items-center px-3 py-1.5 text-xs font-medium text-white rounded transition-colors disabled:opacity-50 ${re.color}`,children:[W[B.id]?y.jsx(Kv,{className:"h-3 w-3 mr-1 animate-spin"}):y.jsx(ef,{className:"h-3 w-3 mr-1"}),re.label]})})]},B.id)})})})}),w&&p&&y.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4",children:y.jsxs("div",{className:"bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:rounded-xl sm:max-w-2xl overflow-y-auto",children:[y.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsxs("h2",{className:"text-lg font-bold text-gray-900",children:["Order #",p.id.slice(-6)]}),y.jsx("p",{className:"text-xs text-gray-500",children:ee(p.createdAt)})]}),y.jsx("button",{onClick:()=>I(!1),className:"p-2 hover:bg-gray-100 rounded-full",children:y.jsx(Qp,{className:"h-5 w-5 text-gray-500"})})]}),y.jsxs("div",{className:"p-4 space-y-4",children:[y.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[y.jsxs("div",{className:"flex items-center mb-3",children:[y.jsx("div",{className:"h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3",children:y.jsx("span",{className:"text-blue-600 font-bold",children:((x=(N=(ge=p.deliveryInfo)==null?void 0:ge.name)==null?void 0:N.charAt(0))==null?void 0:x.toUpperCase())||"U"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-bold text-gray-900 text-lg",children:((k=p.deliveryInfo)==null?void 0:k.name)||"Unknown Customer"}),y.jsx("div",{className:"flex items-center space-x-2",children:ie(p.status)})]})]}),y.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx(Vf,{className:"h-4 w-4 text-blue-600 mr-2"}),y.jsx("span",{className:"text-sm font-medium",children:((P=p.deliveryInfo)==null?void 0:P.phone)||"N/A"})]}),((M=p.deliveryInfo)==null?void 0:M.email)&&y.jsxs("div",{className:"flex items-center",children:[y.jsx(Gp,{className:"h-4 w-4 text-blue-600 mr-2"}),y.jsx("span",{className:"text-sm text-gray-700",children:p.deliveryInfo.email})]}),((L=p.deliveryInfo)==null?void 0:L.address)&&y.jsxs("div",{className:"flex items-start",children:[y.jsx(Df,{className:"h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0"}),y.jsxs("div",{children:[y.jsx("p",{className:"text-sm text-gray-700",children:p.deliveryInfo.address}),((C=p.deliveryInfo)==null?void 0:C.city)&&y.jsxs("p",{className:"text-xs text-gray-500",children:[p.deliveryInfo.city," - ",(Ye=p.deliveryInfo)==null?void 0:Ye.pincode]})]})]}),((pt=p.deliveryInfo)==null?void 0:pt.notes)&&y.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded",children:[y.jsx("p",{className:"text-xs font-medium text-yellow-800 mb-1",children:"Special Instructions:"}),y.jsx("p",{className:"text-sm text-yellow-700",children:p.deliveryInfo.notes})]})]})]}),y.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:[y.jsxs("h3",{className:"font-bold text-gray-900 mb-3 flex items-center",children:[y.jsx(Of,{className:"h-5 w-5 mr-2 text-gray-600"}),"Order Items (",((mt=p.items)==null?void 0:mt.length)||0,")"]}),y.jsx("div",{className:"space-y-3",children:(Le=p.items)==null?void 0:Le.map((B,re)=>y.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[y.jsxs("div",{className:"flex justify-between items-start mb-2",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("h4",{className:"font-medium text-gray-900",children:B.name}),y.jsxs("p",{className:"text-sm text-gray-600",children:[B.quantity," × ",B.unit," @ ",q(B.price*B.unitMultiplier)]})]}),y.jsx("div",{className:"text-right",children:y.jsx("p",{className:"font-bold text-gray-900",children:q(B.price*B.unitMultiplier*B.quantity)})})]}),B.customization&&y.jsxs("div",{className:"bg-pink-50 border border-pink-200 rounded p-2 mt-2",children:[y.jsxs("div",{className:"flex items-center mb-1",children:[y.jsx("span",{className:"text-pink-600 mr-1",children:"🎂"}),y.jsx("span",{className:"text-xs font-medium text-pink-800",children:"Custom Cake Details"})]}),y.jsxs("div",{className:"space-y-1 text-xs text-pink-700",children:[B.customization.purpose&&y.jsxs("p",{children:[y.jsx("span",{className:"font-medium",children:"Purpose:"})," ",B.customization.purpose]}),B.customization.customName&&y.jsxs("p",{children:[y.jsx("span",{className:"font-medium",children:"Custom Name:"})," ",B.customization.customName]}),B.customization.specialInstructions&&y.jsxs("p",{children:[y.jsx("span",{className:"font-medium",children:"Instructions:"})," ",B.customization.specialInstructions]})]})]})]},re))})]}),y.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[y.jsxs("div",{className:"flex justify-between items-center mb-2",children:[y.jsx("span",{className:"font-medium text-gray-700",children:"Payment Method:"}),y.jsx("span",{className:"text-sm text-gray-900",children:"Cash on Delivery"})]}),y.jsxs("div",{className:"flex justify-between items-center text-lg",children:[y.jsx("span",{className:"font-bold text-gray-900",children:"Total Amount:"}),y.jsx("span",{className:"font-bold text-green-600 text-xl",children:q(p.total)})]})]})]}),y.jsx("div",{className:"sticky bottom-0 bg-white border-t border-gray-200 p-4",children:y.jsxs("div",{className:"flex space-x-3",children:[y.jsx("button",{onClick:()=>I(!1),className:"flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",children:"Close"}),ue(p.status)&&y.jsx("button",{onClick:()=>{const B=ue(p.status);b(p.id,B.action),I(!1)},disabled:W[p.id],className:`flex-1 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors disabled:opacity-50 ${ue(p.status).color}`,children:W[p.id]?y.jsxs("div",{className:"flex items-center justify-center",children:[y.jsx(Kv,{className:"h-4 w-4 mr-2 animate-spin"}),"Updating..."]}):y.jsxs("div",{className:"flex items-center justify-center",children:[y.jsx(ef,{className:"h-4 w-4 mr-2"}),ue(p.status).label]})})]})})]})}),d&&y.jsxs("div",{className:"fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg",children:[d,y.jsx("button",{onClick:()=>f(""),className:"ml-4 text-red-500 hover:text-red-700",children:"×"})]})]})}function JN(){var O,W,$,b;const[n,e]=Q.useState([]),[t,s]=Q.useState(!0),[o,l]=Q.useState(null),[d,f]=Q.useState(!1);Q.useEffect(()=>{p()},[]);const p=async()=>{try{s(!0),console.log("Loading customers from database...");const q=Bn(dt,"users"),ee=await Br(q);console.log("Total users found:",ee.size);const ie=[];ee.forEach(ue=>{const le=ue.data();if(console.log("User data:",{id:ue.id,...le}),!le.has_admin&&!le.admin&&le.email){const ge=le.profile||{},N=le.personal||{};ie.push({id:ue.id,email:le.email,name:ge.name||ge.displayName||ge.firstName||N.name||N.displayName||N.firstName||le.name||le.displayName||le.firstName||"Unknown User",displayName:ge.displayName||ge.name||ge.firstName||N.displayName||N.name||N.firstName||le.displayName||le.name||le.firstName||"Unknown User",phone:ge.phone||ge.phoneNumber||ge.mobile||N.phone||N.phoneNumber||N.mobile||le.phone||le.phoneNumber||le.mobile||"",phoneNumber:ge.phone||ge.phoneNumber||ge.mobile||N.phone||N.phoneNumber||N.mobile||le.phone||le.phoneNumber||le.mobile||"",address:(()=>{const x=ge.address||ge.deliveryAddress||N.address||N.deliveryAddress||le.address||le.deliveryAddress||"";if(typeof x=="object"&&x!==null){const k=[];return x.street&&k.push(x.street),x.city&&k.push(x.city),x.state&&k.push(x.state),x.country&&k.push(x.country),x.pincode&&k.push(x.pincode),k.join(", ")||""}return x||""})(),createdAt:le.createdAt||le.joinDate||ge.createdAt||new Date().toISOString(),totalOrders:le.totalOrders||0,orderHistory:le.orderHistory||[],originalData:le})}}),console.log("Filtered customers (no admins):",ie),e(ie)}catch(q){console.error("Error loading customers:",q)}finally{s(!1)}},v=q=>{console.log("Viewing customer:",q),l(q),f(!0)},w=()=>{f(!1),l(null)},I=q=>{if(!q)return"N/A";try{return(q.toDate?q.toDate():new Date(q)).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}catch{return"N/A"}},A=q=>{if(!q)return"";if(typeof q=="string")return q;if(typeof q=="object"&&q!==null){const ee=[];return q.street&&ee.push(q.street),q.city&&ee.push(q.city),q.state&&ee.push(q.state),q.country&&ee.push(q.country),q.pincode&&ee.push(q.pincode),ee.join(", ")||""}return""};return t?y.jsxs("div",{className:"flex items-center justify-center h-64",children:[y.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"}),y.jsx("span",{className:"ml-3 text-gray-600",children:"Loading customers..."})]}):y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Customers"}),y.jsx("p",{className:"text-gray-600",children:"Manage customer information and view order history"})]}),y.jsx("div",{className:"bg-blue-50 px-4 py-2 rounded-lg",children:y.jsxs("span",{className:"text-blue-700 font-semibold",children:[n.length," Customers"]})})]}),y.jsxs("div",{className:"bg-white rounded-lg border border-gray-200",children:[y.jsx("div",{className:"p-4 border-b border-gray-200",children:y.jsxs("div",{className:"flex items-center",children:[y.jsx(Mf,{className:"h-5 w-5 text-blue-600 mr-2"}),y.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Customer List"})]})}),y.jsx("div",{className:"p-4",children:n.length===0?y.jsxs("div",{className:"text-center py-8",children:[y.jsx(Mf,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),y.jsx("p",{className:"text-gray-500",children:"No customers found"})]}):y.jsx("div",{className:"space-y-3",children:n.map(q=>{var ee,ie,ue,le;return y.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx("div",{className:"h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3",children:y.jsx("span",{className:"text-blue-600 font-medium text-sm",children:((ie=(ee=q.displayName)==null?void 0:ee.charAt(0))==null?void 0:ie.toUpperCase())||((le=(ue=q.email)==null?void 0:ue.charAt(0))==null?void 0:le.toUpperCase())||"U"})}),y.jsxs("div",{children:[y.jsx("p",{className:"font-medium text-gray-900 text-sm",children:q.displayName||q.name||"Unknown User"}),y.jsx("p",{className:"text-xs text-gray-500",children:q.email})]})]}),y.jsx("button",{onClick:()=>v(q),className:"px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700",children:"View"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-gray-500 mb-1",children:"Phone"}),y.jsx("p",{className:"text-gray-900",children:q.phone||q.phoneNumber||"N/A"})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-gray-500 mb-1",children:"Orders"}),y.jsx("p",{className:"text-gray-900",children:q.totalOrders||0})]})]}),A(q.address)&&y.jsxs("div",{className:"mt-2",children:[y.jsx("p",{className:"text-gray-500 mb-1 text-xs",children:"Address"}),y.jsx("p",{className:"text-gray-900 text-xs",children:A(q.address)})]})]},q.id)})})})]}),d&&o&&y.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4",children:y.jsxs("div",{className:"bg-white rounded-t-xl sm:rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto",children:[y.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[y.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Customer Details"}),y.jsx("button",{onClick:w,className:"p-2 hover:bg-gray-100 rounded-full",children:y.jsx(Qp,{className:"h-5 w-5 text-gray-500"})})]}),y.jsxs("div",{className:"p-4",children:[y.jsxs("div",{className:"text-center mb-6",children:[y.jsx("div",{className:"h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-3 shadow-sm",children:y.jsx("span",{className:"text-blue-600 font-bold text-2xl",children:((W=(O=o.name)==null?void 0:O.charAt(0))==null?void 0:W.toUpperCase())||((b=($=o.email)==null?void 0:$.charAt(0))==null?void 0:b.toUpperCase())||"U"})}),y.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-1",children:o.name||o.displayName||"Unknown User"}),y.jsxs("p",{className:"text-sm text-gray-500",children:["Customer since ",I(o.createdAt)]})]}),y.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[y.jsx("h5",{className:"font-semibold text-gray-900 mb-4 text-center",children:"Contact Information"}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"flex items-start",children:[y.jsx(Gp,{className:"h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"}),y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsx("p",{className:"text-xs font-medium text-gray-600 mb-1",children:"Email Address"}),y.jsx("p",{className:"text-sm text-gray-900 break-words leading-relaxed",children:o.email})]})]}),y.jsxs("div",{className:"flex items-start",children:[y.jsx(Vf,{className:"h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"}),y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsx("p",{className:"text-xs font-medium text-gray-600 mb-1",children:"Phone Number"}),y.jsx("p",{className:"text-sm text-gray-900 leading-relaxed",children:o.phone||o.phoneNumber||"Not provided"})]})]}),A(o.address)&&y.jsxs("div",{className:"flex items-start",children:[y.jsx(Df,{className:"h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0"}),y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Address"}),y.jsx("p",{className:"text-sm text-gray-900 break-words leading-relaxed",children:A(o.address)})]})]})]})]})]}),y.jsx("div",{className:"p-4 border-t border-gray-200",children:y.jsx("button",{onClick:w,className:"w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"Close"})})]})})]})}const XN=async(n,e="admin123456")=>{try{console.log("🔍 Checking if Firebase Auth user exists...");try{const t=await Zf(Is,n,e);return console.log("✅ Firebase Auth user found:",t.user.uid),t.user}catch(t){if(t.code==="auth/user-not-found"){console.log("📝 Firebase Auth user not found, creating new user...");const s=await FS(Is,n,e);return console.log("✅ Firebase Auth user created:",s.user.uid),s.user}else throw t.code==="auth/wrong-password"?(console.log("⚠️ User exists but password is different. Please use correct password or reset it."),new Error("User exists but password is incorrect. Please use the correct password or reset it in Firebase Console.")):t}}catch(t){throw console.error("❌ Error with Firebase Auth:",t),t}},Qw=async n=>{try{console.log("🔧 Setting up admin user...");const e="admin@gmail.com";console.log("🔍 Searching for existing admin user in Firestore...");const t=hn(Bn(dt,"users"),sr("email","==",e)),s=await Br(t);if(!s.empty){console.log("ℹ️ Admin user document found in Firestore");const d=s.docs[0],f=d.data();return console.log("📋 Existing user data:",f),f.has_admin!==!0&&(console.log("🔄 Updating user document with has_admin: true"),await pl(zn(dt,"users",d.id),{...f,has_admin:!0,role:"admin",updatedAt:new Date().toISOString()}),console.log("✅ Updated admin user with has_admin field")),{...f,docId:d.id}}let o;if(n)o=await XN(e,n);else{console.log("🔍 Checking for existing Firebase Auth user...");try{const d=await Zf(Is,e,"temp")}catch(d){throw d.code==="auth/wrong-password"?(console.log("✅ Firebase Auth user exists (password check failed, but user exists)"),new Error("Firebase Auth user exists but we need the correct password. Please provide the admin password.")):d.code==="auth/user-not-found"?new Error("No Firebase Auth user found. Please create admin@gmail.com user in Firebase Console first, or provide a password to create it."):d}}const l={uid:o.uid,email:e,displayName:"Admin User",name:"Admin",has_admin:!0,role:"admin",phoneNumber:"+91 9876543210",createdAt:new Date().toISOString(),lastLoginAt:new Date().toISOString(),active:!0,description:"System administrator with full access"};return await pl(zn(dt,"users",o.uid),l),console.log("✅ Admin user document created in Firestore with UID:",o.uid),console.log("📋 Admin user data:",l),{...l,docId:o.uid}}catch(e){throw console.error("❌ Error setting up admin user:",e),e}},ZN=async n=>{try{console.log("🚀 Starting database setup...");const e=await Qw(n);return console.log("🎉 Database setup completed successfully!"),console.log("📊 Summary:"),console.log("   - Admin users: 1"),console.log("   - Ready for real customer registrations"),{success:!0,adminUser:e}}catch(e){return console.error("💥 Database setup failed:",e),{success:!1,error:e.message}}},eP=async()=>{try{console.log("🔧 Fixing existing admin user...");const n=hn(Bn(dt,"users"),sr("email","==","admin@gmail.com")),e=await Br(n);if(e.empty)throw new Error("No admin user found with email admin@gmail.com");const t=e.docs[0],s=t.data();return console.log("📋 Found existing user:",s),console.log("📍 Document ID:",t.id),await pl(zn(dt,"users",t.id),{...s,has_admin:!0,role:"admin",active:!0,updatedAt:new Date().toISOString()}),console.log("✅ Updated existing admin user with has_admin: true"),{success:!0,adminUser:{...s,docId:t.id,has_admin:!0}}}catch(n){return console.error("❌ Error fixing admin user:",n),{success:!1,error:n.message}}};function tP(){var A,O,W,$;const[n,e]=Q.useState(!1),[t,s]=Q.useState(null),[o,l]=Q.useState([]),[d,f]=Q.useState(""),p=b=>{l(q=>[...q,{message:b,timestamp:new Date().toLocaleTimeString()}])},v=async()=>{e(!0),s(null),l([]);try{p("Starting database setup...");const b=console.log;console.log=ee=>{p(ee),b(ee)};const q=await ZN(d);console.log=b,s(q),q.success?p("✅ Database setup completed successfully!"):p(`❌ Setup failed: ${q.error}`)}catch(b){p(`💥 Error: ${b.message}`),s({success:!1,error:b.message})}finally{e(!1)}},w=async()=>{e(!0),s(null),l([]);try{p("Setting up admin user only...");const b=console.log;console.log=ee=>{p(ee),b(ee)};const q=await Qw(d);console.log=b,s({success:!0,adminUser:q,customers:[]}),p("✅ Admin user setup completed!")}catch(b){p(`❌ Error: ${b.message}`),s({success:!1,error:b.message})}finally{e(!1)}},I=async()=>{e(!0),s(null),l([]);try{p("Fixing existing admin user...");const b=console.log;console.log=ee=>{p(ee),b(ee)};const q=await eP();console.log=b,s(q),q.success?p("✅ Existing admin user fixed successfully!"):p(`❌ Fix failed: ${q.error}`)}catch(b){p(`💥 Error: ${b.message}`),s({success:!1,error:b.message})}finally{e(!1)}};return y.jsx("div",{className:"min-h-screen bg-gray-50 py-12 px-4",children:y.jsxs("div",{className:"max-w-4xl mx-auto",children:[y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Database Setup"}),y.jsx("p",{className:"text-gray-600",children:"Initialize your admin user and sample data"})]}),y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6",children:[y.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Admin Password (Optional)"}),y.jsx("p",{className:"text-gray-600 mb-4 text-sm",children:"If you want to create a new Firebase Auth user, provide a password. If the user already exists in Firebase Auth, leave this empty."}),y.jsx("input",{type:"password",value:d,onChange:b=>f(b.target.value),placeholder:"Enter admin password (min 6 characters)",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[y.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Fix Existing User"}),y.jsxs("p",{className:"text-gray-600 mb-4 text-sm",children:["If you already have an admin@gmail.com user document but can't login, this will add the ",y.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"has_admin"})," field."]}),y.jsx("button",{onClick:I,disabled:n,className:"w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:n?"Fixing...":"Fix Existing User"})]}),y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[y.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Setup Admin User"}),y.jsxs("p",{className:"text-gray-600 mb-4 text-sm",children:["Creates an admin user with email: ",y.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"admin@gmail.com"})]}),y.jsx("button",{onClick:w,disabled:n,className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:n?"Setting up...":"Setup Admin User"})]}),y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[y.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Full Setup"}),y.jsx("p",{className:"text-gray-600 mb-4 text-sm",children:"Creates admin user and sample customer data for testing"}),y.jsx("button",{onClick:v,disabled:n,className:"w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:n?"Setting up...":"Full Setup"})]})]}),o.length>0&&y.jsxs("div",{className:"bg-gray-900 rounded-xl p-6 mb-6",children:[y.jsx("h3",{className:"text-white text-lg font-semibold mb-4",children:"Setup Logs"}),y.jsx("div",{className:"space-y-2 max-h-64 overflow-y-auto",children:o.map((b,q)=>y.jsxs("div",{className:"flex items-start space-x-2",children:[y.jsx("span",{className:"text-gray-400 text-xs mt-0.5 font-mono",children:b.timestamp}),y.jsx("span",{className:"text-green-400 text-sm font-mono",children:b.message})]},q))})]}),t&&y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[y.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:t.success?"✅ Setup Results":"❌ Setup Failed"}),t.success?y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[y.jsx("h4",{className:"font-semibold text-green-900 mb-2",children:"Admin User Created"}),y.jsxs("div",{className:"text-sm text-green-700",children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Email:"})," ",(A=t.adminUser)==null?void 0:A.email]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Name:"})," ",(O=t.adminUser)==null?void 0:O.name]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Admin Access:"})," ",(W=t.adminUser)!=null&&W.has_admin?"Yes":"No"]})]})]}),(($=t.customers)==null?void 0:$.length)>0&&y.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[y.jsx("h4",{className:"font-semibold text-blue-900 mb-2",children:"Sample Customers Created"}),y.jsxs("div",{className:"text-sm text-blue-700",children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Total Customers:"})," ",t.customers.length]}),y.jsx("ul",{className:"mt-2 space-y-1",children:t.customers.map((b,q)=>y.jsxs("li",{children:["• ",b.name," (",b.email,")"]},q))})]})]}),y.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[y.jsx("h4",{className:"font-semibold text-yellow-900 mb-2",children:"Next Steps"}),y.jsxs("ol",{className:"text-sm text-yellow-700 space-y-1",children:[y.jsxs("li",{children:["1. Go to ",y.jsx("a",{href:"/login",className:"underline",children:"Admin Login"})]}),y.jsxs("li",{children:["2. Use email: ",y.jsx("code",{className:"bg-yellow-100 px-1 rounded",children:"admin@gmail.com"})]}),y.jsx("li",{children:"3. Use your Firebase Authentication password"}),y.jsx("li",{children:"4. You should now have access to the admin panel"})]})]})]}):y.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:y.jsxs("p",{className:"text-red-700",children:[y.jsx("strong",{children:"Error:"})," ",t.error]})})]}),y.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6",children:[y.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"Instructions"}),y.jsxs("ol",{className:"text-blue-800 space-y-2 list-decimal list-inside",children:[y.jsx("li",{children:"First, make sure you have Firebase Authentication set up"}),y.jsxs("li",{children:["Create a user with email ",y.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"admin@gmail.com"})," in Firebase Auth"]}),y.jsx("li",{children:'Click "Setup Admin User" or "Full Setup" above'}),y.jsxs("li",{children:["This will create the necessary user document in Firestore with ",y.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"has_admin: true"})]}),y.jsx("li",{children:"You can then login to the admin panel with your credentials"})]})]})]})})}function nP({setSidebarOpen:n}){var v;const[e,t]=Q.useState(!1),{user:s,userRole:o,isSuperAdmin:l,logout:d}=Hp(),[f]=Q.useState(0),p=async()=>{try{await d()}catch(w){console.error("Logout error:",w)}};return y.jsx("nav",{className:"bg-white border-b border-gray-200 px-4 py-3",children:y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx("button",{type:"button",className:"lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bakery-500",onClick:()=>n(!0),children:y.jsx(BN,{className:"h-6 w-6"})}),y.jsxs("div",{className:"flex items-center ml-4 lg:ml-0",children:[y.jsx("div",{className:"h-8 w-8 bg-bakery-500 rounded-lg flex items-center justify-center mr-3",children:y.jsx("span",{className:"text-white font-bold text-sm",children:"AB"})}),y.jsx("h1",{className:"text-xl font-semibold text-gray-900 hidden sm:block",children:"Admin Panel"})]})]}),y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsxs("button",{className:"relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-bakery-500 focus:ring-offset-2 rounded-full",children:[y.jsx(DN,{className:"h-6 w-6"}),f>0&&y.jsx("span",{className:"absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center notification-badge",children:f})]}),y.jsxs("div",{className:"relative",children:[y.jsxs("button",{onClick:()=>t(!e),className:"flex items-center p-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-bakery-500 focus:ring-offset-2",children:[y.jsx("div",{className:"h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center",children:y.jsx(WN,{className:"h-4 w-4 text-gray-600"})}),y.jsxs("div",{className:"ml-2 hidden sm:block",children:[y.jsx("span",{className:"text-gray-700 text-sm",children:((v=s==null?void 0:s.email)==null?void 0:v.split("@")[0])||"Admin"}),o&&y.jsx("span",{className:`block text-xs ${l?"text-purple-600 font-semibold":"text-gray-500"}`,children:l?"👑 Super Admin":o.replace("_"," ").toUpperCase()})]})]}),e&&y.jsxs("div",{className:"absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200",children:[y.jsxs("div",{className:"px-4 py-3 border-b border-gray-100",children:[y.jsx("p",{className:"text-sm text-gray-900 font-medium",children:"Signed in as"}),y.jsx("p",{className:"text-xs text-gray-500 truncate",children:s==null?void 0:s.email}),o&&y.jsxs("p",{className:`text-xs mt-1 ${l?"text-purple-600 font-semibold":"text-gray-600"}`,children:["Role: ",l?"👑 Super Admin":o.replace("_"," ").toUpperCase()]})]}),y.jsxs("button",{onClick:p,className:"flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors",children:[y.jsx(UN,{className:"h-4 w-4 mr-3"}),"Sign Out"]})]})]})]})]})})}function rP({sidebarOpen:n,setSidebarOpen:e}){const t=Uo(),s=[{name:"Dashboard",href:"/dashboard",icon:LN,current:t.pathname==="/dashboard"},{name:"Orders",href:"/orders",icon:Gw,current:t.pathname==="/orders"},{name:"Customers",href:"/customers",icon:Mf,current:t.pathname==="/customers"}];return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"hidden lg:flex lg:flex-shrink-0",children:y.jsx("div",{className:"flex flex-col w-64",children:y.jsxs("div",{className:"flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto",children:[y.jsxs("div",{className:"flex items-center flex-shrink-0 px-6",children:[y.jsx("div",{className:"h-10 w-10 bg-bakery-500 rounded-lg flex items-center justify-center",children:y.jsx("span",{className:"text-white font-bold",children:"AB"})}),y.jsxs("div",{className:"ml-3",children:[y.jsx("h1",{className:"text-lg font-semibold text-gray-900",children:"Arunachalam"}),y.jsx("p",{className:"text-sm text-gray-500",children:"Bakery Admin"})]})]}),y.jsx("div",{className:"mt-8 flex-grow flex flex-col",children:y.jsx("nav",{className:"flex-1 px-4 space-y-1",children:s.map(o=>{const l=o.icon;return y.jsxs(vy,{to:o.href,className:`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${o.current?"bg-bakery-100 text-bakery-900 border-r-2 border-bakery-500":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[y.jsx(l,{className:`mr-3 flex-shrink-0 h-5 w-5 ${o.current?"text-bakery-500":"text-gray-400 group-hover:text-gray-500"}`}),o.name]},o.name)})})})]})})}),y.jsxs("div",{className:`lg:hidden fixed inset-0 z-40 ${n?"":"pointer-events-none"}`,children:[y.jsx("div",{className:`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${n?"opacity-100":"opacity-0"}`}),y.jsxs("div",{className:`fixed inset-y-0 left-0 flex flex-col w-64 bg-white transform transition-transform ${n?"translate-x-0":"-translate-x-full"}`,children:[y.jsxs("div",{className:"flex items-center justify-between flex-shrink-0 px-4 py-4 border-b border-gray-200",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx("div",{className:"h-8 w-8 bg-bakery-500 rounded-lg flex items-center justify-center",children:y.jsx("span",{className:"text-white font-bold text-sm",children:"AB"})}),y.jsxs("div",{className:"ml-3",children:[y.jsx("h1",{className:"text-lg font-semibold text-gray-900",children:"Arunachalam"}),y.jsx("p",{className:"text-xs text-gray-500",children:"Bakery Admin"})]})]}),y.jsx("button",{onClick:()=>e(!1),className:"p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-bakery-500",children:y.jsx(Qp,{className:"h-5 w-5"})})]}),y.jsx("div",{className:"flex-1 flex flex-col overflow-y-auto",children:y.jsx("nav",{className:"flex-1 px-4 py-4 space-y-1",children:s.map(o=>{const l=o.icon;return y.jsxs(vy,{to:o.href,onClick:()=>e(!1),className:`group flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors ${o.current?"bg-bakery-100 text-bakery-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[y.jsx(l,{className:`mr-4 flex-shrink-0 h-6 w-6 ${o.current?"text-bakery-500":"text-gray-400 group-hover:text-gray-500"}`}),o.name]},o.name)})})})]})]})]})}function sP(){const[n,e]=Q.useState(!1);return y.jsx(CN,{children:y.jsx("div",{className:"min-h-screen bg-gray-50",children:y.jsxs(gy,{children:[y.jsx(vs,{path:"/login",element:y.jsx(HN,{})}),y.jsx(vs,{path:"/setup",element:y.jsx(tP,{})}),y.jsx(vs,{path:"/*",element:y.jsx(RN,{children:y.jsxs("div",{className:"flex h-screen overflow-hidden",children:[n&&y.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden",onClick:()=>e(!1)}),y.jsx(rP,{sidebarOpen:n,setSidebarOpen:e}),y.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[y.jsx(nP,{setSidebarOpen:e}),y.jsx("main",{className:"flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6",children:y.jsxs(gy,{children:[y.jsx(vs,{path:"/",element:y.jsx(o_,{to:"/dashboard",replace:!0})}),y.jsx(vs,{path:"/dashboard",element:y.jsx(QN,{})}),y.jsx(vs,{path:"/orders",element:y.jsx(YN,{})}),y.jsx(vs,{path:"/customers",element:y.jsx(JN,{})})]})})]})]})})})]})})})}cT.createRoot(document.getElementById("root")).render(y.jsx(Q.StrictMode,{children:y.jsx(aI,{children:y.jsx(sP,{})})}));
