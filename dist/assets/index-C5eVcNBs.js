function n7(r,a){for(var d=0;d<a.length;d++){const h=a[d];if(typeof h!="string"&&!Array.isArray(h)){for(const g in h)if(g!=="default"&&!(g in r)){const k=Object.getOwnPropertyDescriptor(h,g);k&&Object.defineProperty(r,g,k.get?k:{enumerable:!0,get:()=>h[g]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const k of g)if(k.type==="childList")for(const w of k.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&h(w)}).observe(document,{childList:!0,subtree:!0});function d(g){const k={};return g.integrity&&(k.integrity=g.integrity),g.referrerPolicy&&(k.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?k.credentials="include":g.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function h(g){if(g.ep)return;g.ep=!0;const k=d(g);fetch(g.href,k)}})();var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ug(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var k2={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xl=Symbol.for("react.element"),o7=Symbol.for("react.portal"),i7=Symbol.for("react.fragment"),r7=Symbol.for("react.strict_mode"),s7=Symbol.for("react.profiler"),a7=Symbol.for("react.provider"),l7=Symbol.for("react.context"),c7=Symbol.for("react.forward_ref"),d7=Symbol.for("react.suspense"),u7=Symbol.for("react.memo"),h7=Symbol.for("react.lazy"),Py=Symbol.iterator;function p7(r){return r===null||typeof r!="object"?null:(r=Py&&r[Py]||r["@@iterator"],typeof r=="function"?r:null)}var b2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w2=Object.assign,A2={};function js(r,a,d){this.props=r,this.context=a,this.refs=A2,this.updater=d||b2}js.prototype.isReactComponent={};js.prototype.setState=function(r,a){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,a,"setState")};js.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function _2(){}_2.prototype=js.prototype;function Hg(r,a,d){this.props=r,this.context=a,this.refs=A2,this.updater=d||b2}var Wg=Hg.prototype=new _2;Wg.constructor=Hg;w2(Wg,js.prototype);Wg.isPureReactComponent=!0;var Ly=Array.isArray,C2=Object.prototype.hasOwnProperty,qg={current:null},v2={key:!0,ref:!0,__self:!0,__source:!0};function y2(r,a,d){var h,g={},k=null,w=null;if(a!=null)for(h in a.ref!==void 0&&(w=a.ref),a.key!==void 0&&(k=""+a.key),a)C2.call(a,h)&&!v2.hasOwnProperty(h)&&(g[h]=a[h]);var C=arguments.length-2;if(C===1)g.children=d;else if(1<C){for(var b=Array(C),y=0;y<C;y++)b[y]=arguments[y+2];g.children=b}if(r&&r.defaultProps)for(h in C=r.defaultProps,C)g[h]===void 0&&(g[h]=C[h]);return{$$typeof:xl,type:r,key:k,ref:w,props:g,_owner:qg.current}}function m7(r,a){return{$$typeof:xl,type:r.type,key:a,ref:r.ref,props:r.props,_owner:r._owner}}function Gg(r){return typeof r=="object"&&r!==null&&r.$$typeof===xl}function g7(r){var a={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(d){return a[d]})}var Oy=/\/+/g;function nm(r,a){return typeof r=="object"&&r!==null&&r.key!=null?g7(""+r.key):a.toString(36)}function Td(r,a,d,h,g){var k=typeof r;(k==="undefined"||k==="boolean")&&(r=null);var w=!1;if(r===null)w=!0;else switch(k){case"string":case"number":w=!0;break;case"object":switch(r.$$typeof){case xl:case o7:w=!0}}if(w)return w=r,g=g(w),r=h===""?"."+nm(w,0):h,Ly(g)?(d="",r!=null&&(d=r.replace(Oy,"$&/")+"/"),Td(g,a,d,"",function(y){return y})):g!=null&&(Gg(g)&&(g=m7(g,d+(!g.key||w&&w.key===g.key?"":(""+g.key).replace(Oy,"$&/")+"/")+r)),a.push(g)),1;if(w=0,h=h===""?".":h+":",Ly(r))for(var C=0;C<r.length;C++){k=r[C];var b=h+nm(k,C);w+=Td(k,a,d,b,g)}else if(b=p7(r),typeof b=="function")for(r=b.call(r),C=0;!(k=r.next()).done;)k=k.value,b=h+nm(k,C++),w+=Td(k,a,d,b,g);else if(k==="object")throw a=String(r),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return w}function ld(r,a,d){if(r==null)return r;var h=[],g=0;return Td(r,h,"","",function(k){return a.call(d,k,g++)}),h}function f7(r){if(r._status===-1){var a=r._result;a=a(),a.then(function(d){(r._status===0||r._status===-1)&&(r._status=1,r._result=d)},function(d){(r._status===0||r._status===-1)&&(r._status=2,r._result=d)}),r._status===-1&&(r._status=0,r._result=a)}if(r._status===1)return r._result.default;throw r._result}var ln={current:null},Id={transition:null},k7={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Id,ReactCurrentOwner:qg};Ie.Children={map:ld,forEach:function(r,a,d){ld(r,function(){a.apply(this,arguments)},d)},count:function(r){var a=0;return ld(r,function(){a++}),a},toArray:function(r){return ld(r,function(a){return a})||[]},only:function(r){if(!Gg(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};Ie.Component=js;Ie.Fragment=i7;Ie.Profiler=s7;Ie.PureComponent=Hg;Ie.StrictMode=r7;Ie.Suspense=d7;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k7;Ie.cloneElement=function(r,a,d){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var h=w2({},r.props),g=r.key,k=r.ref,w=r._owner;if(a!=null){if(a.ref!==void 0&&(k=a.ref,w=qg.current),a.key!==void 0&&(g=""+a.key),r.type&&r.type.defaultProps)var C=r.type.defaultProps;for(b in a)C2.call(a,b)&&!v2.hasOwnProperty(b)&&(h[b]=a[b]===void 0&&C!==void 0?C[b]:a[b])}var b=arguments.length-2;if(b===1)h.children=d;else if(1<b){C=Array(b);for(var y=0;y<b;y++)C[y]=arguments[y+2];h.children=C}return{$$typeof:xl,type:r.type,key:g,ref:k,props:h,_owner:w}};Ie.createContext=function(r){return r={$$typeof:l7,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:a7,_context:r},r.Consumer=r};Ie.createElement=y2;Ie.createFactory=function(r){var a=y2.bind(null,r);return a.type=r,a};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(r){return{$$typeof:c7,render:r}};Ie.isValidElement=Gg;Ie.lazy=function(r){return{$$typeof:h7,_payload:{_status:-1,_result:r},_init:f7}};Ie.memo=function(r,a){return{$$typeof:u7,type:r,compare:a===void 0?null:a}};Ie.startTransition=function(r){var a=Id.transition;Id.transition={};try{r()}finally{Id.transition=a}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(r,a){return ln.current.useCallback(r,a)};Ie.useContext=function(r){return ln.current.useContext(r)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(r){return ln.current.useDeferredValue(r)};Ie.useEffect=function(r,a){return ln.current.useEffect(r,a)};Ie.useId=function(){return ln.current.useId()};Ie.useImperativeHandle=function(r,a,d){return ln.current.useImperativeHandle(r,a,d)};Ie.useInsertionEffect=function(r,a){return ln.current.useInsertionEffect(r,a)};Ie.useLayoutEffect=function(r,a){return ln.current.useLayoutEffect(r,a)};Ie.useMemo=function(r,a){return ln.current.useMemo(r,a)};Ie.useReducer=function(r,a,d){return ln.current.useReducer(r,a,d)};Ie.useRef=function(r){return ln.current.useRef(r)};Ie.useState=function(r){return ln.current.useState(r)};Ie.useSyncExternalStore=function(r,a,d){return ln.current.useSyncExternalStore(r,a,d)};Ie.useTransition=function(){return ln.current.useTransition()};Ie.version="18.2.0";k2.exports=Ie;var le=k2.exports;const L=Ug(le),b7=n7({__proto__:null,default:L},[le]);var Rm={},x2={exports:{}},Ln={},E2={exports:{}},D2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function a(ee,he){var ne=ee.length;ee.push(he);e:for(;0<ne;){var me=ne-1>>>1,ue=ee[me];if(0<g(ue,he))ee[me]=he,ee[ne]=ue,ne=me;else break e}}function d(ee){return ee.length===0?null:ee[0]}function h(ee){if(ee.length===0)return null;var he=ee[0],ne=ee.pop();if(ne!==he){ee[0]=ne;e:for(var me=0,ue=ee.length,Ve=ue>>>1;me<Ve;){var Ce=2*(me+1)-1,xt=ee[Ce],Ne=Ce+1,tn=ee[Ne];if(0>g(xt,ne))Ne<ue&&0>g(tn,xt)?(ee[me]=tn,ee[Ne]=ne,me=Ne):(ee[me]=xt,ee[Ce]=ne,me=Ce);else if(Ne<ue&&0>g(tn,ne))ee[me]=tn,ee[Ne]=ne,me=Ne;else break e}}return he}function g(ee,he){var ne=ee.sortIndex-he.sortIndex;return ne!==0?ne:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;r.unstable_now=function(){return k.now()}}else{var w=Date,C=w.now();r.unstable_now=function(){return w.now()-C}}var b=[],y=[],T=1,E=null,_=3,D=!1,M=!1,B=!1,j=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(ee){for(var he=d(y);he!==null;){if(he.callback===null)h(y);else if(he.startTime<=ee)h(y),he.sortIndex=he.expirationTime,a(b,he);else break;he=d(y)}}function U(ee){if(B=!1,R(ee),!M)if(d(b)!==null)M=!0,tt(q);else{var he=d(y);he!==null&&Lt(U,he.startTime-ee)}}function q(ee,he){M=!1,B&&(B=!1,P(J),J=-1),D=!0;var ne=_;try{for(R(he),E=d(b);E!==null&&(!(E.expirationTime>he)||ee&&!fe());){var me=E.callback;if(typeof me=="function"){E.callback=null,_=E.priorityLevel;var ue=me(E.expirationTime<=he);he=r.unstable_now(),typeof ue=="function"?E.callback=ue:E===d(b)&&h(b),R(he)}else h(b);E=d(b)}if(E!==null)var Ve=!0;else{var Ce=d(y);Ce!==null&&Lt(U,Ce.startTime-he),Ve=!1}return Ve}finally{E=null,_=ne,D=!1}}var X=!1,$=null,J=-1,z=5,Y=-1;function fe(){return!(r.unstable_now()-Y<z)}function xe(){if($!==null){var ee=r.unstable_now();Y=ee;var he=!0;try{he=$(!0,ee)}finally{he?ve():(X=!1,$=null)}}else X=!1}var ve;if(typeof N=="function")ve=function(){N(xe)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,st=Te.port2;Te.port1.onmessage=xe,ve=function(){st.postMessage(null)}}else ve=function(){j(xe,0)};function tt(ee){$=ee,X||(X=!0,ve())}function Lt(ee,he){J=j(function(){ee(r.unstable_now())},he)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){M||D||(M=!0,tt(q))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return d(b)},r.unstable_next=function(ee){switch(_){case 1:case 2:case 3:var he=3;break;default:he=_}var ne=_;_=he;try{return ee()}finally{_=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=_;_=ee;try{return he()}finally{_=ne}},r.unstable_scheduleCallback=function(ee,he,ne){var me=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?me+ne:me):ne=me,ee){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=ne+ue,ee={id:T++,callback:he,priorityLevel:ee,startTime:ne,expirationTime:ue,sortIndex:-1},ne>me?(ee.sortIndex=ne,a(y,ee),d(b)===null&&ee===d(y)&&(B?(P(J),J=-1):B=!0,Lt(U,ne-me))):(ee.sortIndex=ue,a(b,ee),M||D||(M=!0,tt(q))),ee},r.unstable_shouldYield=fe,r.unstable_wrapCallback=function(ee){var he=_;return function(){var ne=_;_=he;try{return ee.apply(this,arguments)}finally{_=ne}}}})(D2);E2.exports=D2;var w7=E2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S2=le,Nn=w7;function te(r){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+r,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T2=new Set,rl={};function Sr(r,a){Ms(r,a),Ms(r+"Capture",a)}function Ms(r,a){for(rl[r]=a,r=0;r<a.length;r++)T2.add(a[r])}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jm=Object.prototype.hasOwnProperty,A7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zy={},Ry={};function _7(r){return jm.call(Ry,r)?!0:jm.call(zy,r)?!1:A7.test(r)?Ry[r]=!0:(zy[r]=!0,!1)}function C7(r,a,d,h){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return h?!1:d!==null?!d.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function v7(r,a,d,h){if(a===null||typeof a>"u"||C7(r,a,d,h))return!0;if(h)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function cn(r,a,d,h,g,k,w){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=d,this.propertyName=r,this.type=a,this.sanitizeURL=k,this.removeEmptyString=w}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){$t[r]=new cn(r,0,!1,r,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var a=r[0];$t[a]=new cn(a,1,!1,r[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(r){$t[r]=new cn(r,2,!1,r.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){$t[r]=new cn(r,2,!1,r,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){$t[r]=new cn(r,3,!1,r.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(r){$t[r]=new cn(r,3,!0,r,null,!1,!1)});["capture","download"].forEach(function(r){$t[r]=new cn(r,4,!1,r,null,!1,!1)});["cols","rows","size","span"].forEach(function(r){$t[r]=new cn(r,6,!1,r,null,!1,!1)});["rowSpan","start"].forEach(function(r){$t[r]=new cn(r,5,!1,r.toLowerCase(),null,!1,!1)});var $g=/[\-:]([a-z])/g;function Kg(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var a=r.replace($g,Kg);$t[a]=new cn(a,1,!1,r,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var a=r.replace($g,Kg);$t[a]=new cn(a,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(r){var a=r.replace($g,Kg);$t[a]=new cn(a,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(r){$t[r]=new cn(r,1,!1,r.toLowerCase(),null,!1,!1)});$t.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(r){$t[r]=new cn(r,1,!1,r.toLowerCase(),null,!0,!0)});function Yg(r,a,d,h){var g=$t.hasOwnProperty(a)?$t[a]:null;(g!==null?g.type!==0:h||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(v7(a,d,g,h)&&(d=null),h||g===null?_7(a)&&(d===null?r.removeAttribute(a):r.setAttribute(a,""+d)):g.mustUseProperty?r[g.propertyName]=d===null?g.type===3?!1:"":d:(a=g.attributeName,h=g.attributeNamespace,d===null?r.removeAttribute(a):(g=g.type,d=g===3||g===4&&d===!0?"":""+d,h?r.setAttributeNS(h,a,d):r.setAttribute(a,d))))}var si=S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cd=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),I2=Symbol.for("react.provider"),M2=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),Vm=Symbol.for("react.suspense"),Um=Symbol.for("react.suspense_list"),Jg=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),B2=Symbol.for("react.offscreen"),jy=Symbol.iterator;function Na(r){return r===null||typeof r!="object"?null:(r=jy&&r[jy]||r["@@iterator"],typeof r=="function"?r:null)}var gt=Object.assign,om;function qa(r){if(om===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);om=a&&a[1]||""}return`
`+om+r}var im=!1;function rm(r,a){if(!r||im)return"";im=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(y){var h=y}Reflect.construct(r,[],a)}else{try{a.call()}catch(y){h=y}r.call(a.prototype)}else{try{throw Error()}catch(y){h=y}r()}}catch(y){if(y&&h&&typeof y.stack=="string"){for(var g=y.stack.split(`
`),k=h.stack.split(`
`),w=g.length-1,C=k.length-1;1<=w&&0<=C&&g[w]!==k[C];)C--;for(;1<=w&&0<=C;w--,C--)if(g[w]!==k[C]){if(w!==1||C!==1)do if(w--,C--,0>C||g[w]!==k[C]){var b=`
`+g[w].replace(" at new "," at ");return r.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",r.displayName)),b}while(1<=w&&0<=C);break}}}finally{im=!1,Error.prepareStackTrace=d}return(r=r?r.displayName||r.name:"")?qa(r):""}function y7(r){switch(r.tag){case 5:return qa(r.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return r=rm(r.type,!1),r;case 11:return r=rm(r.type.render,!1),r;case 1:return r=rm(r.type,!0),r;default:return""}}function Hm(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case ps:return"Fragment";case hs:return"Portal";case Fm:return"Profiler";case Qg:return"StrictMode";case Vm:return"Suspense";case Um:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case M2:return(r.displayName||"Context")+".Consumer";case I2:return(r._context.displayName||"Context")+".Provider";case Zg:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Jg:return a=r.displayName||null,a!==null?a:Hm(r.type)||"Memo";case xi:a=r._payload,r=r._init;try{return Hm(r(a))}catch{}}return null}function x7(r){var a=r.type;switch(r.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=a.render,r=r.displayName||r.name||"",a.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hm(a);case 8:return a===Qg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Vi(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function N2(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function E7(r){var a=N2(r)?"checked":"value",d=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),h=""+r[a];if(!r.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var g=d.get,k=d.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return g.call(this)},set:function(w){h=""+w,k.call(this,w)}}),Object.defineProperty(r,a,{enumerable:d.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function dd(r){r._valueTracker||(r._valueTracker=E7(r))}function P2(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var d=a.getValue(),h="";return r&&(h=N2(r)?r.checked?"true":"false":r.value),r=h,r!==d?(a.setValue(r),!0):!1}function qd(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Wm(r,a){var d=a.checked;return gt({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??r._wrapperState.initialChecked})}function Fy(r,a){var d=a.defaultValue==null?"":a.defaultValue,h=a.checked!=null?a.checked:a.defaultChecked;d=Vi(a.value!=null?a.value:d),r._wrapperState={initialChecked:h,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function L2(r,a){a=a.checked,a!=null&&Yg(r,"checked",a,!1)}function qm(r,a){L2(r,a);var d=Vi(a.value),h=a.type;if(d!=null)h==="number"?(d===0&&r.value===""||r.value!=d)&&(r.value=""+d):r.value!==""+d&&(r.value=""+d);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}a.hasOwnProperty("value")?Gm(r,a.type,d):a.hasOwnProperty("defaultValue")&&Gm(r,a.type,Vi(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(r.defaultChecked=!!a.defaultChecked)}function Vy(r,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var h=a.type;if(!(h!=="submit"&&h!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+r._wrapperState.initialValue,d||a===r.value||(r.value=a),r.defaultValue=a}d=r.name,d!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,d!==""&&(r.name=d)}function Gm(r,a,d){(a!=="number"||qd(r.ownerDocument)!==r)&&(d==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+d&&(r.defaultValue=""+d))}var Ga=Array.isArray;function ys(r,a,d,h){if(r=r.options,a){a={};for(var g=0;g<d.length;g++)a["$"+d[g]]=!0;for(d=0;d<r.length;d++)g=a.hasOwnProperty("$"+r[d].value),r[d].selected!==g&&(r[d].selected=g),g&&h&&(r[d].defaultSelected=!0)}else{for(d=""+Vi(d),a=null,g=0;g<r.length;g++){if(r[g].value===d){r[g].selected=!0,h&&(r[g].defaultSelected=!0);return}a!==null||r[g].disabled||(a=r[g])}a!==null&&(a.selected=!0)}}function $m(r,a){if(a.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},a,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Uy(r,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(te(92));if(Ga(d)){if(1<d.length)throw Error(te(93));d=d[0]}a=d}a==null&&(a=""),d=a}r._wrapperState={initialValue:Vi(d)}}function O2(r,a){var d=Vi(a.value),h=Vi(a.defaultValue);d!=null&&(d=""+d,d!==r.value&&(r.value=d),a.defaultValue==null&&r.defaultValue!==d&&(r.defaultValue=d)),h!=null&&(r.defaultValue=""+h)}function Hy(r){var a=r.textContent;a===r._wrapperState.initialValue&&a!==""&&a!==null&&(r.value=a)}function z2(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Km(r,a){return r==null||r==="http://www.w3.org/1999/xhtml"?z2(a):r==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ud,R2=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,h,g){MSApp.execUnsafeLocalFunction(function(){return r(a,d,h,g)})}:r}(function(r,a){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=a;else{for(ud=ud||document.createElement("div"),ud.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=ud.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;a.firstChild;)r.appendChild(a.firstChild)}});function sl(r,a){if(a){var d=r.firstChild;if(d&&d===r.lastChild&&d.nodeType===3){d.nodeValue=a;return}}r.textContent=a}var Qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D7=["Webkit","ms","Moz","O"];Object.keys(Qa).forEach(function(r){D7.forEach(function(a){a=a+r.charAt(0).toUpperCase()+r.substring(1),Qa[a]=Qa[r]})});function j2(r,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||Qa.hasOwnProperty(r)&&Qa[r]?(""+a).trim():a+"px"}function F2(r,a){r=r.style;for(var d in a)if(a.hasOwnProperty(d)){var h=d.indexOf("--")===0,g=j2(d,a[d],h);d==="float"&&(d="cssFloat"),h?r.setProperty(d,g):r[d]=g}}var S7=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ym(r,a){if(a){if(S7[r]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(te(137,r));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(te(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(te(61))}if(a.style!=null&&typeof a.style!="object")throw Error(te(62))}}function Qm(r,a){if(r.indexOf("-")===-1)return typeof a.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zm=null;function Xg(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Jm=null,xs=null,Es=null;function Wy(r){if(r=Sl(r)){if(typeof Jm!="function")throw Error(te(280));var a=r.stateNode;a&&(a=vu(a),Jm(r.stateNode,r.type,a))}}function V2(r){xs?Es?Es.push(r):Es=[r]:xs=r}function U2(){if(xs){var r=xs,a=Es;if(Es=xs=null,Wy(r),a)for(r=0;r<a.length;r++)Wy(a[r])}}function H2(r,a){return r(a)}function W2(){}var sm=!1;function q2(r,a,d){if(sm)return r(a,d);sm=!0;try{return H2(r,a,d)}finally{sm=!1,(xs!==null||Es!==null)&&(W2(),U2())}}function al(r,a){var d=r.stateNode;if(d===null)return null;var h=vu(d);if(h===null)return null;d=h[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(d&&typeof d!="function")throw Error(te(231,a,typeof d));return d}var Xm=!1;if(ni)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){Xm=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{Xm=!1}function T7(r,a,d,h,g,k,w,C,b){var y=Array.prototype.slice.call(arguments,3);try{a.apply(d,y)}catch(T){this.onError(T)}}var Za=!1,Gd=null,$d=!1,eg=null,I7={onError:function(r){Za=!0,Gd=r}};function M7(r,a,d,h,g,k,w,C,b){Za=!1,Gd=null,T7.apply(I7,arguments)}function B7(r,a,d,h,g,k,w,C,b){if(M7.apply(this,arguments),Za){if(Za){var y=Gd;Za=!1,Gd=null}else throw Error(te(198));$d||($d=!0,eg=y)}}function Tr(r){var a=r,d=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,a.flags&4098&&(d=a.return),r=a.return;while(r)}return a.tag===3?d:null}function G2(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function qy(r){if(Tr(r)!==r)throw Error(te(188))}function N7(r){var a=r.alternate;if(!a){if(a=Tr(r),a===null)throw Error(te(188));return a!==r?null:r}for(var d=r,h=a;;){var g=d.return;if(g===null)break;var k=g.alternate;if(k===null){if(h=g.return,h!==null){d=h;continue}break}if(g.child===k.child){for(k=g.child;k;){if(k===d)return qy(g),r;if(k===h)return qy(g),a;k=k.sibling}throw Error(te(188))}if(d.return!==h.return)d=g,h=k;else{for(var w=!1,C=g.child;C;){if(C===d){w=!0,d=g,h=k;break}if(C===h){w=!0,h=g,d=k;break}C=C.sibling}if(!w){for(C=k.child;C;){if(C===d){w=!0,d=k,h=g;break}if(C===h){w=!0,h=k,d=g;break}C=C.sibling}if(!w)throw Error(te(189))}}if(d.alternate!==h)throw Error(te(190))}if(d.tag!==3)throw Error(te(188));return d.stateNode.current===d?r:a}function $2(r){return r=N7(r),r!==null?K2(r):null}function K2(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var a=K2(r);if(a!==null)return a;r=r.sibling}return null}var Y2=Nn.unstable_scheduleCallback,Gy=Nn.unstable_cancelCallback,P7=Nn.unstable_shouldYield,L7=Nn.unstable_requestPaint,yt=Nn.unstable_now,O7=Nn.unstable_getCurrentPriorityLevel,ef=Nn.unstable_ImmediatePriority,Q2=Nn.unstable_UserBlockingPriority,Kd=Nn.unstable_NormalPriority,z7=Nn.unstable_LowPriority,Z2=Nn.unstable_IdlePriority,wu=null,Oo=null;function R7(r){if(Oo&&typeof Oo.onCommitFiberRoot=="function")try{Oo.onCommitFiberRoot(wu,r,void 0,(r.current.flags&128)===128)}catch{}}var Ao=Math.clz32?Math.clz32:V7,j7=Math.log,F7=Math.LN2;function V7(r){return r>>>=0,r===0?32:31-(j7(r)/F7|0)|0}var hd=64,pd=4194304;function $a(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Yd(r,a){var d=r.pendingLanes;if(d===0)return 0;var h=0,g=r.suspendedLanes,k=r.pingedLanes,w=d&268435455;if(w!==0){var C=w&~g;C!==0?h=$a(C):(k&=w,k!==0&&(h=$a(k)))}else w=d&~g,w!==0?h=$a(w):k!==0&&(h=$a(k));if(h===0)return 0;if(a!==0&&a!==h&&!(a&g)&&(g=h&-h,k=a&-a,g>=k||g===16&&(k&4194240)!==0))return a;if(h&4&&(h|=d&16),a=r.entangledLanes,a!==0)for(r=r.entanglements,a&=h;0<a;)d=31-Ao(a),g=1<<d,h|=r[d],a&=~g;return h}function U7(r,a){switch(r){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H7(r,a){for(var d=r.suspendedLanes,h=r.pingedLanes,g=r.expirationTimes,k=r.pendingLanes;0<k;){var w=31-Ao(k),C=1<<w,b=g[w];b===-1?(!(C&d)||C&h)&&(g[w]=U7(C,a)):b<=a&&(r.expiredLanes|=C),k&=~C}}function tg(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function J2(){var r=hd;return hd<<=1,!(hd&4194240)&&(hd=64),r}function am(r){for(var a=[],d=0;31>d;d++)a.push(r);return a}function El(r,a,d){r.pendingLanes|=a,a!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,a=31-Ao(a),r[a]=d}function W7(r,a){var d=r.pendingLanes&~a;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=a,r.mutableReadLanes&=a,r.entangledLanes&=a,a=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<d;){var g=31-Ao(d),k=1<<g;a[g]=0,h[g]=-1,r[g]=-1,d&=~k}}function tf(r,a){var d=r.entangledLanes|=a;for(r=r.entanglements;d;){var h=31-Ao(d),g=1<<h;g&a|r[h]&a&&(r[h]|=a),d&=~g}}var qe=0;function X2(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var eE,nf,tE,nE,oE,ng=!1,md=[],Bi=null,Ni=null,Pi=null,ll=new Map,cl=new Map,Di=[],q7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $y(r,a){switch(r){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":ll.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(a.pointerId)}}function La(r,a,d,h,g,k){return r===null||r.nativeEvent!==k?(r={blockedOn:a,domEventName:d,eventSystemFlags:h,nativeEvent:k,targetContainers:[g]},a!==null&&(a=Sl(a),a!==null&&nf(a)),r):(r.eventSystemFlags|=h,a=r.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),r)}function G7(r,a,d,h,g){switch(a){case"focusin":return Bi=La(Bi,r,a,d,h,g),!0;case"dragenter":return Ni=La(Ni,r,a,d,h,g),!0;case"mouseover":return Pi=La(Pi,r,a,d,h,g),!0;case"pointerover":var k=g.pointerId;return ll.set(k,La(ll.get(k)||null,r,a,d,h,g)),!0;case"gotpointercapture":return k=g.pointerId,cl.set(k,La(cl.get(k)||null,r,a,d,h,g)),!0}return!1}function iE(r){var a=br(r.target);if(a!==null){var d=Tr(a);if(d!==null){if(a=d.tag,a===13){if(a=G2(d),a!==null){r.blockedOn=a,oE(r.priority,function(){tE(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){r.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Md(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var d=og(r.domEventName,r.eventSystemFlags,a[0],r.nativeEvent);if(d===null){d=r.nativeEvent;var h=new d.constructor(d.type,d);Zm=h,d.target.dispatchEvent(h),Zm=null}else return a=Sl(d),a!==null&&nf(a),r.blockedOn=d,!1;a.shift()}return!0}function Ky(r,a,d){Md(r)&&d.delete(a)}function $7(){ng=!1,Bi!==null&&Md(Bi)&&(Bi=null),Ni!==null&&Md(Ni)&&(Ni=null),Pi!==null&&Md(Pi)&&(Pi=null),ll.forEach(Ky),cl.forEach(Ky)}function Oa(r,a){r.blockedOn===a&&(r.blockedOn=null,ng||(ng=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,$7)))}function dl(r){function a(g){return Oa(g,r)}if(0<md.length){Oa(md[0],r);for(var d=1;d<md.length;d++){var h=md[d];h.blockedOn===r&&(h.blockedOn=null)}}for(Bi!==null&&Oa(Bi,r),Ni!==null&&Oa(Ni,r),Pi!==null&&Oa(Pi,r),ll.forEach(a),cl.forEach(a),d=0;d<Di.length;d++)h=Di[d],h.blockedOn===r&&(h.blockedOn=null);for(;0<Di.length&&(d=Di[0],d.blockedOn===null);)iE(d),d.blockedOn===null&&Di.shift()}var Ds=si.ReactCurrentBatchConfig,Qd=!0;function K7(r,a,d,h){var g=qe,k=Ds.transition;Ds.transition=null;try{qe=1,of(r,a,d,h)}finally{qe=g,Ds.transition=k}}function Y7(r,a,d,h){var g=qe,k=Ds.transition;Ds.transition=null;try{qe=4,of(r,a,d,h)}finally{qe=g,Ds.transition=k}}function of(r,a,d,h){if(Qd){var g=og(r,a,d,h);if(g===null)km(r,a,h,Zd,d),$y(r,h);else if(G7(g,r,a,d,h))h.stopPropagation();else if($y(r,h),a&4&&-1<q7.indexOf(r)){for(;g!==null;){var k=Sl(g);if(k!==null&&eE(k),k=og(r,a,d,h),k===null&&km(r,a,h,Zd,d),k===g)break;g=k}g!==null&&h.stopPropagation()}else km(r,a,h,null,d)}}var Zd=null;function og(r,a,d,h){if(Zd=null,r=Xg(h),r=br(r),r!==null)if(a=Tr(r),a===null)r=null;else if(d=a.tag,d===13){if(r=G2(a),r!==null)return r;r=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null);return Zd=r,null}function rE(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O7()){case ef:return 1;case Q2:return 4;case Kd:case z7:return 16;case Z2:return 536870912;default:return 16}default:return 16}}var Ti=null,rf=null,Bd=null;function sE(){if(Bd)return Bd;var r,a=rf,d=a.length,h,g="value"in Ti?Ti.value:Ti.textContent,k=g.length;for(r=0;r<d&&a[r]===g[r];r++);var w=d-r;for(h=1;h<=w&&a[d-h]===g[k-h];h++);return Bd=g.slice(r,1<h?1-h:void 0)}function Nd(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function gd(){return!0}function Yy(){return!1}function On(r){function a(d,h,g,k,w){this._reactName=d,this._targetInst=g,this.type=h,this.nativeEvent=k,this.target=w,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(d=r[C],this[C]=d?d(k):k[C]);return this.isDefaultPrevented=(k.defaultPrevented!=null?k.defaultPrevented:k.returnValue===!1)?gd:Yy,this.isPropagationStopped=Yy,this}return gt(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=gd)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=gd)},persist:function(){},isPersistent:gd}),a}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=On(Fs),Dl=gt({},Fs,{view:0,detail:0}),Q7=On(Dl),lm,cm,za,Au=gt({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==za&&(za&&r.type==="mousemove"?(lm=r.screenX-za.screenX,cm=r.screenY-za.screenY):cm=lm=0,za=r),lm)},movementY:function(r){return"movementY"in r?r.movementY:cm}}),Qy=On(Au),Z7=gt({},Au,{dataTransfer:0}),J7=On(Z7),X7=gt({},Dl,{relatedTarget:0}),dm=On(X7),ez=gt({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),tz=On(ez),nz=gt({},Fs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),oz=On(nz),iz=gt({},Fs,{data:0}),Zy=On(iz),rz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},az={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lz(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=az[r])?!!a[r]:!1}function af(){return lz}var cz=gt({},Dl,{key:function(r){if(r.key){var a=rz[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=Nd(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?sz[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(r){return r.type==="keypress"?Nd(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Nd(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),dz=On(cz),uz=gt({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jy=On(uz),hz=gt({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),pz=On(hz),mz=gt({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gz=On(mz),fz=gt({},Au,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),kz=On(fz),bz=[9,13,27,32],lf=ni&&"CompositionEvent"in window,Ja=null;ni&&"documentMode"in document&&(Ja=document.documentMode);var wz=ni&&"TextEvent"in window&&!Ja,aE=ni&&(!lf||Ja&&8<Ja&&11>=Ja),Xy=" ",ex=!1;function lE(r,a){switch(r){case"keyup":return bz.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cE(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ms=!1;function Az(r,a){switch(r){case"compositionend":return cE(a);case"keypress":return a.which!==32?null:(ex=!0,Xy);case"textInput":return r=a.data,r===Xy&&ex?null:r;default:return null}}function _z(r,a){if(ms)return r==="compositionend"||!lf&&lE(r,a)?(r=sE(),Bd=rf=Ti=null,ms=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return aE&&a.locale!=="ko"?null:a.data;default:return null}}var Cz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tx(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!Cz[r.type]:a==="textarea"}function dE(r,a,d,h){V2(h),a=Jd(a,"onChange"),0<a.length&&(d=new sf("onChange","change",null,d,h),r.push({event:d,listeners:a}))}var Xa=null,ul=null;function vz(r){_E(r,0)}function _u(r){var a=ks(r);if(P2(a))return r}function yz(r,a){if(r==="change")return a}var uE=!1;if(ni){var um;if(ni){var hm="oninput"in document;if(!hm){var nx=document.createElement("div");nx.setAttribute("oninput","return;"),hm=typeof nx.oninput=="function"}um=hm}else um=!1;uE=um&&(!document.documentMode||9<document.documentMode)}function ox(){Xa&&(Xa.detachEvent("onpropertychange",hE),ul=Xa=null)}function hE(r){if(r.propertyName==="value"&&_u(ul)){var a=[];dE(a,ul,r,Xg(r)),q2(vz,a)}}function xz(r,a,d){r==="focusin"?(ox(),Xa=a,ul=d,Xa.attachEvent("onpropertychange",hE)):r==="focusout"&&ox()}function Ez(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return _u(ul)}function Dz(r,a){if(r==="click")return _u(a)}function Sz(r,a){if(r==="input"||r==="change")return _u(a)}function Tz(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Co=typeof Object.is=="function"?Object.is:Tz;function hl(r,a){if(Co(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var d=Object.keys(r),h=Object.keys(a);if(d.length!==h.length)return!1;for(h=0;h<d.length;h++){var g=d[h];if(!jm.call(a,g)||!Co(r[g],a[g]))return!1}return!0}function ix(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function rx(r,a){var d=ix(r);r=0;for(var h;d;){if(d.nodeType===3){if(h=r+d.textContent.length,r<=a&&h>=a)return{node:d,offset:a-r};r=h}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=ix(d)}}function pE(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?pE(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function mE(){for(var r=window,a=qd();a instanceof r.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)r=a.contentWindow;else break;a=qd(r.document)}return a}function cf(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}function Iz(r){var a=mE(),d=r.focusedElem,h=r.selectionRange;if(a!==d&&d&&d.ownerDocument&&pE(d.ownerDocument.documentElement,d)){if(h!==null&&cf(d)){if(a=h.start,r=h.end,r===void 0&&(r=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(r,d.value.length);else if(r=(a=d.ownerDocument||document)&&a.defaultView||window,r.getSelection){r=r.getSelection();var g=d.textContent.length,k=Math.min(h.start,g);h=h.end===void 0?k:Math.min(h.end,g),!r.extend&&k>h&&(g=h,h=k,k=g),g=rx(d,k);var w=rx(d,h);g&&w&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),r.removeAllRanges(),k>h?(r.addRange(a),r.extend(w.node,w.offset)):(a.setEnd(w.node,w.offset),r.addRange(a)))}}for(a=[],r=d;r=r.parentNode;)r.nodeType===1&&a.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)r=a[d],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Mz=ni&&"documentMode"in document&&11>=document.documentMode,gs=null,ig=null,el=null,rg=!1;function sx(r,a,d){var h=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;rg||gs==null||gs!==qd(h)||(h=gs,"selectionStart"in h&&cf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),el&&hl(el,h)||(el=h,h=Jd(ig,"onSelect"),0<h.length&&(a=new sf("onSelect","select",null,a,d),r.push({event:a,listeners:h}),a.target=gs)))}function fd(r,a){var d={};return d[r.toLowerCase()]=a.toLowerCase(),d["Webkit"+r]="webkit"+a,d["Moz"+r]="moz"+a,d}var fs={animationend:fd("Animation","AnimationEnd"),animationiteration:fd("Animation","AnimationIteration"),animationstart:fd("Animation","AnimationStart"),transitionend:fd("Transition","TransitionEnd")},pm={},gE={};ni&&(gE=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Cu(r){if(pm[r])return pm[r];if(!fs[r])return r;var a=fs[r],d;for(d in a)if(a.hasOwnProperty(d)&&d in gE)return pm[r]=a[d];return r}var fE=Cu("animationend"),kE=Cu("animationiteration"),bE=Cu("animationstart"),wE=Cu("transitionend"),AE=new Map,ax="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hi(r,a){AE.set(r,a),Sr(a,[r])}for(var mm=0;mm<ax.length;mm++){var gm=ax[mm],Bz=gm.toLowerCase(),Nz=gm[0].toUpperCase()+gm.slice(1);Hi(Bz,"on"+Nz)}Hi(fE,"onAnimationEnd");Hi(kE,"onAnimationIteration");Hi(bE,"onAnimationStart");Hi("dblclick","onDoubleClick");Hi("focusin","onFocus");Hi("focusout","onBlur");Hi(wE,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function lx(r,a,d){var h=r.type||"unknown-event";r.currentTarget=d,B7(h,a,void 0,r),r.currentTarget=null}function _E(r,a){a=(a&4)!==0;for(var d=0;d<r.length;d++){var h=r[d],g=h.event;h=h.listeners;e:{var k=void 0;if(a)for(var w=h.length-1;0<=w;w--){var C=h[w],b=C.instance,y=C.currentTarget;if(C=C.listener,b!==k&&g.isPropagationStopped())break e;lx(g,C,y),k=b}else for(w=0;w<h.length;w++){if(C=h[w],b=C.instance,y=C.currentTarget,C=C.listener,b!==k&&g.isPropagationStopped())break e;lx(g,C,y),k=b}}}if($d)throw r=eg,$d=!1,eg=null,r}function it(r,a){var d=a[dg];d===void 0&&(d=a[dg]=new Set);var h=r+"__bubble";d.has(h)||(CE(a,r,2,!1),d.add(h))}function fm(r,a,d){var h=0;a&&(h|=4),CE(d,r,h,a)}var kd="_reactListening"+Math.random().toString(36).slice(2);function pl(r){if(!r[kd]){r[kd]=!0,T2.forEach(function(d){d!=="selectionchange"&&(Pz.has(d)||fm(d,!1,r),fm(d,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[kd]||(a[kd]=!0,fm("selectionchange",!1,a))}}function CE(r,a,d,h){switch(rE(a)){case 1:var g=K7;break;case 4:g=Y7;break;default:g=of}d=g.bind(null,a,d,r),g=void 0,!Xm||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),h?g!==void 0?r.addEventListener(a,d,{capture:!0,passive:g}):r.addEventListener(a,d,!0):g!==void 0?r.addEventListener(a,d,{passive:g}):r.addEventListener(a,d,!1)}function km(r,a,d,h,g){var k=h;if(!(a&1)&&!(a&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var C=h.stateNode.containerInfo;if(C===g||C.nodeType===8&&C.parentNode===g)break;if(w===4)for(w=h.return;w!==null;){var b=w.tag;if((b===3||b===4)&&(b=w.stateNode.containerInfo,b===g||b.nodeType===8&&b.parentNode===g))return;w=w.return}for(;C!==null;){if(w=br(C),w===null)return;if(b=w.tag,b===5||b===6){h=k=w;continue e}C=C.parentNode}}h=h.return}q2(function(){var y=k,T=Xg(d),E=[];e:{var _=AE.get(r);if(_!==void 0){var D=sf,M=r;switch(r){case"keypress":if(Nd(d)===0)break e;case"keydown":case"keyup":D=dz;break;case"focusin":M="focus",D=dm;break;case"focusout":M="blur",D=dm;break;case"beforeblur":case"afterblur":D=dm;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Qy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=J7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=pz;break;case fE:case kE:case bE:D=tz;break;case wE:D=gz;break;case"scroll":D=Q7;break;case"wheel":D=kz;break;case"copy":case"cut":case"paste":D=oz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Jy}var B=(a&4)!==0,j=!B&&r==="scroll",P=B?_!==null?_+"Capture":null:_;B=[];for(var N=y,R;N!==null;){R=N;var U=R.stateNode;if(R.tag===5&&U!==null&&(R=U,P!==null&&(U=al(N,P),U!=null&&B.push(ml(N,U,R)))),j)break;N=N.return}0<B.length&&(_=new D(_,M,null,d,T),E.push({event:_,listeners:B}))}}if(!(a&7)){e:{if(_=r==="mouseover"||r==="pointerover",D=r==="mouseout"||r==="pointerout",_&&d!==Zm&&(M=d.relatedTarget||d.fromElement)&&(br(M)||M[oi]))break e;if((D||_)&&(_=T.window===T?T:(_=T.ownerDocument)?_.defaultView||_.parentWindow:window,D?(M=d.relatedTarget||d.toElement,D=y,M=M?br(M):null,M!==null&&(j=Tr(M),M!==j||M.tag!==5&&M.tag!==6)&&(M=null)):(D=null,M=y),D!==M)){if(B=Qy,U="onMouseLeave",P="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(B=Jy,U="onPointerLeave",P="onPointerEnter",N="pointer"),j=D==null?_:ks(D),R=M==null?_:ks(M),_=new B(U,N+"leave",D,d,T),_.target=j,_.relatedTarget=R,U=null,br(T)===y&&(B=new B(P,N+"enter",M,d,T),B.target=R,B.relatedTarget=j,U=B),j=U,D&&M)t:{for(B=D,P=M,N=0,R=B;R;R=us(R))N++;for(R=0,U=P;U;U=us(U))R++;for(;0<N-R;)B=us(B),N--;for(;0<R-N;)P=us(P),R--;for(;N--;){if(B===P||P!==null&&B===P.alternate)break t;B=us(B),P=us(P)}B=null}else B=null;D!==null&&cx(E,_,D,B,!1),M!==null&&j!==null&&cx(E,j,M,B,!0)}}e:{if(_=y?ks(y):window,D=_.nodeName&&_.nodeName.toLowerCase(),D==="select"||D==="input"&&_.type==="file")var q=yz;else if(tx(_))if(uE)q=Sz;else{q=Ez;var X=xz}else(D=_.nodeName)&&D.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(q=Dz);if(q&&(q=q(r,y))){dE(E,q,d,T);break e}X&&X(r,_,y),r==="focusout"&&(X=_._wrapperState)&&X.controlled&&_.type==="number"&&Gm(_,"number",_.value)}switch(X=y?ks(y):window,r){case"focusin":(tx(X)||X.contentEditable==="true")&&(gs=X,ig=y,el=null);break;case"focusout":el=ig=gs=null;break;case"mousedown":rg=!0;break;case"contextmenu":case"mouseup":case"dragend":rg=!1,sx(E,d,T);break;case"selectionchange":if(Mz)break;case"keydown":case"keyup":sx(E,d,T)}var $;if(lf)e:{switch(r){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else ms?lE(r,d)&&(J="onCompositionEnd"):r==="keydown"&&d.keyCode===229&&(J="onCompositionStart");J&&(aE&&d.locale!=="ko"&&(ms||J!=="onCompositionStart"?J==="onCompositionEnd"&&ms&&($=sE()):(Ti=T,rf="value"in Ti?Ti.value:Ti.textContent,ms=!0)),X=Jd(y,J),0<X.length&&(J=new Zy(J,r,null,d,T),E.push({event:J,listeners:X}),$?J.data=$:($=cE(d),$!==null&&(J.data=$)))),($=wz?Az(r,d):_z(r,d))&&(y=Jd(y,"onBeforeInput"),0<y.length&&(T=new Zy("onBeforeInput","beforeinput",null,d,T),E.push({event:T,listeners:y}),T.data=$))}_E(E,a)})}function ml(r,a,d){return{instance:r,listener:a,currentTarget:d}}function Jd(r,a){for(var d=a+"Capture",h=[];r!==null;){var g=r,k=g.stateNode;g.tag===5&&k!==null&&(g=k,k=al(r,d),k!=null&&h.unshift(ml(r,k,g)),k=al(r,a),k!=null&&h.push(ml(r,k,g))),r=r.return}return h}function us(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function cx(r,a,d,h,g){for(var k=a._reactName,w=[];d!==null&&d!==h;){var C=d,b=C.alternate,y=C.stateNode;if(b!==null&&b===h)break;C.tag===5&&y!==null&&(C=y,g?(b=al(d,k),b!=null&&w.unshift(ml(d,b,C))):g||(b=al(d,k),b!=null&&w.push(ml(d,b,C)))),d=d.return}w.length!==0&&r.push({event:a,listeners:w})}var Lz=/\r\n?/g,Oz=/\u0000|\uFFFD/g;function dx(r){return(typeof r=="string"?r:""+r).replace(Lz,`
`).replace(Oz,"")}function bd(r,a,d){if(a=dx(a),dx(r)!==a&&d)throw Error(te(425))}function Xd(){}var sg=null,ag=null;function lg(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var cg=typeof setTimeout=="function"?setTimeout:void 0,zz=typeof clearTimeout=="function"?clearTimeout:void 0,ux=typeof Promise=="function"?Promise:void 0,Rz=typeof queueMicrotask=="function"?queueMicrotask:typeof ux<"u"?function(r){return ux.resolve(null).then(r).catch(jz)}:cg;function jz(r){setTimeout(function(){throw r})}function bm(r,a){var d=a,h=0;do{var g=d.nextSibling;if(r.removeChild(d),g&&g.nodeType===8)if(d=g.data,d==="/$"){if(h===0){r.removeChild(g),dl(a);return}h--}else d!=="$"&&d!=="$?"&&d!=="$!"||h++;d=g}while(d);dl(a)}function Li(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return r}function hx(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var d=r.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return r;a--}else d==="/$"&&a++}r=r.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),Po="__reactFiber$"+Vs,gl="__reactProps$"+Vs,oi="__reactContainer$"+Vs,dg="__reactEvents$"+Vs,Fz="__reactListeners$"+Vs,Vz="__reactHandles$"+Vs;function br(r){var a=r[Po];if(a)return a;for(var d=r.parentNode;d;){if(a=d[oi]||d[Po]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(r=hx(r);r!==null;){if(d=r[Po])return d;r=hx(r)}return a}r=d,d=r.parentNode}return null}function Sl(r){return r=r[Po]||r[oi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ks(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(te(33))}function vu(r){return r[gl]||null}var ug=[],bs=-1;function Wi(r){return{current:r}}function rt(r){0>bs||(r.current=ug[bs],ug[bs]=null,bs--)}function et(r,a){bs++,ug[bs]=r.current,r.current=a}var Ui={},en=Wi(Ui),wn=Wi(!1),vr=Ui;function Bs(r,a){var d=r.type.contextTypes;if(!d)return Ui;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===a)return h.__reactInternalMemoizedMaskedChildContext;var g={},k;for(k in d)g[k]=a[k];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=a,r.__reactInternalMemoizedMaskedChildContext=g),g}function An(r){return r=r.childContextTypes,r!=null}function eu(){rt(wn),rt(en)}function px(r,a,d){if(en.current!==Ui)throw Error(te(168));et(en,a),et(wn,d)}function vE(r,a,d){var h=r.stateNode;if(a=a.childContextTypes,typeof h.getChildContext!="function")return d;h=h.getChildContext();for(var g in h)if(!(g in a))throw Error(te(108,x7(r)||"Unknown",g));return gt({},d,h)}function tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Ui,vr=en.current,et(en,r),et(wn,wn.current),!0}function mx(r,a,d){var h=r.stateNode;if(!h)throw Error(te(169));d?(r=vE(r,a,vr),h.__reactInternalMemoizedMergedChildContext=r,rt(wn),rt(en),et(en,r)):rt(wn),et(wn,d)}var Zo=null,yu=!1,wm=!1;function yE(r){Zo===null?Zo=[r]:Zo.push(r)}function Uz(r){yu=!0,yE(r)}function qi(){if(!wm&&Zo!==null){wm=!0;var r=0,a=qe;try{var d=Zo;for(qe=1;r<d.length;r++){var h=d[r];do h=h(!0);while(h!==null)}Zo=null,yu=!1}catch(g){throw Zo!==null&&(Zo=Zo.slice(r+1)),Y2(ef,qi),g}finally{qe=a,wm=!1}}return null}var ws=[],As=0,nu=null,ou=0,Kn=[],Yn=0,yr=null,Jo=1,Xo="";function mr(r,a){ws[As++]=ou,ws[As++]=nu,nu=r,ou=a}function xE(r,a,d){Kn[Yn++]=Jo,Kn[Yn++]=Xo,Kn[Yn++]=yr,yr=r;var h=Jo;r=Xo;var g=32-Ao(h)-1;h&=~(1<<g),d+=1;var k=32-Ao(a)+g;if(30<k){var w=g-g%5;k=(h&(1<<w)-1).toString(32),h>>=w,g-=w,Jo=1<<32-Ao(a)+g|d<<g|h,Xo=k+r}else Jo=1<<k|d<<g|h,Xo=r}function df(r){r.return!==null&&(mr(r,1),xE(r,1,0))}function uf(r){for(;r===nu;)nu=ws[--As],ws[As]=null,ou=ws[--As],ws[As]=null;for(;r===yr;)yr=Kn[--Yn],Kn[Yn]=null,Xo=Kn[--Yn],Kn[Yn]=null,Jo=Kn[--Yn],Kn[Yn]=null}var Bn=null,Mn=null,ct=!1,wo=null;function EE(r,a){var d=Qn(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=r,a=r.deletions,a===null?(r.deletions=[d],r.flags|=16):a.push(d)}function gx(r,a){switch(r.tag){case 5:var d=r.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(r.stateNode=a,Bn=r,Mn=Li(a.firstChild),!0):!1;case 6:return a=r.pendingProps===""||a.nodeType!==3?null:a,a!==null?(r.stateNode=a,Bn=r,Mn=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=yr!==null?{id:Jo,overflow:Xo}:null,r.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Qn(18,null,null,0),d.stateNode=a,d.return=r,r.child=d,Bn=r,Mn=null,!0):!1;default:return!1}}function hg(r){return(r.mode&1)!==0&&(r.flags&128)===0}function pg(r){if(ct){var a=Mn;if(a){var d=a;if(!gx(r,a)){if(hg(r))throw Error(te(418));a=Li(d.nextSibling);var h=Bn;a&&gx(r,a)?EE(h,d):(r.flags=r.flags&-4097|2,ct=!1,Bn=r)}}else{if(hg(r))throw Error(te(418));r.flags=r.flags&-4097|2,ct=!1,Bn=r}}}function fx(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Bn=r}function wd(r){if(r!==Bn)return!1;if(!ct)return fx(r),ct=!0,!1;var a;if((a=r.tag!==3)&&!(a=r.tag!==5)&&(a=r.type,a=a!=="head"&&a!=="body"&&!lg(r.type,r.memoizedProps)),a&&(a=Mn)){if(hg(r))throw DE(),Error(te(418));for(;a;)EE(r,a),a=Li(a.nextSibling)}if(fx(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(te(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8){var d=r.data;if(d==="/$"){if(a===0){Mn=Li(r.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}r=r.nextSibling}Mn=null}}else Mn=Bn?Li(r.stateNode.nextSibling):null;return!0}function DE(){for(var r=Mn;r;)r=Li(r.nextSibling)}function Ns(){Mn=Bn=null,ct=!1}function hf(r){wo===null?wo=[r]:wo.push(r)}var Hz=si.ReactCurrentBatchConfig;function ko(r,a){if(r&&r.defaultProps){a=gt({},a),r=r.defaultProps;for(var d in r)a[d]===void 0&&(a[d]=r[d]);return a}return a}var iu=Wi(null),ru=null,_s=null,pf=null;function mf(){pf=_s=ru=null}function gf(r){var a=iu.current;rt(iu),r._currentValue=a}function mg(r,a,d){for(;r!==null;){var h=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,h!==null&&(h.childLanes|=a)):h!==null&&(h.childLanes&a)!==a&&(h.childLanes|=a),r===d)break;r=r.return}}function Ss(r,a){ru=r,pf=_s=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&a&&(bn=!0),r.firstContext=null)}function Xn(r){var a=r._currentValue;if(pf!==r)if(r={context:r,memoizedValue:a,next:null},_s===null){if(ru===null)throw Error(te(308));_s=r,ru.dependencies={lanes:0,firstContext:r}}else _s=_s.next=r;return a}var wr=null;function ff(r){wr===null?wr=[r]:wr.push(r)}function SE(r,a,d,h){var g=a.interleaved;return g===null?(d.next=d,ff(a)):(d.next=g.next,g.next=d),a.interleaved=d,ii(r,h)}function ii(r,a){r.lanes|=a;var d=r.alternate;for(d!==null&&(d.lanes|=a),d=r,r=r.return;r!==null;)r.childLanes|=a,d=r.alternate,d!==null&&(d.childLanes|=a),d=r,r=r.return;return d.tag===3?d.stateNode:null}var Ei=!1;function kf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TE(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ei(r,a){return{eventTime:r,lane:a,tag:0,payload:null,callback:null,next:null}}function Oi(r,a,d){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,je&2){var g=h.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),h.pending=a,ii(r,d)}return g=h.interleaved,g===null?(a.next=a,ff(h)):(a.next=g.next,g.next=a),h.interleaved=a,ii(r,d)}function Pd(r,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var h=a.lanes;h&=r.pendingLanes,d|=h,a.lanes=d,tf(r,d)}}function kx(r,a){var d=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,d===h)){var g=null,k=null;if(d=d.firstBaseUpdate,d!==null){do{var w={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};k===null?g=k=w:k=k.next=w,d=d.next}while(d!==null);k===null?g=k=a:k=k.next=a}else g=k=a;d={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:k,shared:h.shared,effects:h.effects},r.updateQueue=d;return}r=d.lastBaseUpdate,r===null?d.firstBaseUpdate=a:r.next=a,d.lastBaseUpdate=a}function su(r,a,d,h){var g=r.updateQueue;Ei=!1;var k=g.firstBaseUpdate,w=g.lastBaseUpdate,C=g.shared.pending;if(C!==null){g.shared.pending=null;var b=C,y=b.next;b.next=null,w===null?k=y:w.next=y,w=b;var T=r.alternate;T!==null&&(T=T.updateQueue,C=T.lastBaseUpdate,C!==w&&(C===null?T.firstBaseUpdate=y:C.next=y,T.lastBaseUpdate=b))}if(k!==null){var E=g.baseState;w=0,T=y=b=null,C=k;do{var _=C.lane,D=C.eventTime;if((h&_)===_){T!==null&&(T=T.next={eventTime:D,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var M=r,B=C;switch(_=a,D=d,B.tag){case 1:if(M=B.payload,typeof M=="function"){E=M.call(D,E,_);break e}E=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=B.payload,_=typeof M=="function"?M.call(D,E,_):M,_==null)break e;E=gt({},E,_);break e;case 2:Ei=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,_=g.effects,_===null?g.effects=[C]:_.push(C))}else D={eventTime:D,lane:_,tag:C.tag,payload:C.payload,callback:C.callback,next:null},T===null?(y=T=D,b=E):T=T.next=D,w|=_;if(C=C.next,C===null){if(C=g.shared.pending,C===null)break;_=C,C=_.next,_.next=null,g.lastBaseUpdate=_,g.shared.pending=null}}while(!0);if(T===null&&(b=E),g.baseState=b,g.firstBaseUpdate=y,g.lastBaseUpdate=T,a=g.shared.interleaved,a!==null){g=a;do w|=g.lane,g=g.next;while(g!==a)}else k===null&&(g.shared.lanes=0);Er|=w,r.lanes=w,r.memoizedState=E}}function bx(r,a,d){if(r=a.effects,a.effects=null,r!==null)for(a=0;a<r.length;a++){var h=r[a],g=h.callback;if(g!==null){if(h.callback=null,h=d,typeof g!="function")throw Error(te(191,g));g.call(h)}}}var IE=new S2.Component().refs;function gg(r,a,d,h){a=r.memoizedState,d=d(h,a),d=d==null?a:gt({},a,d),r.memoizedState=d,r.lanes===0&&(r.updateQueue.baseState=d)}var xu={isMounted:function(r){return(r=r._reactInternals)?Tr(r)===r:!1},enqueueSetState:function(r,a,d){r=r._reactInternals;var h=sn(),g=Ri(r),k=ei(h,g);k.payload=a,d!=null&&(k.callback=d),a=Oi(r,k,g),a!==null&&(_o(a,r,g,h),Pd(a,r,g))},enqueueReplaceState:function(r,a,d){r=r._reactInternals;var h=sn(),g=Ri(r),k=ei(h,g);k.tag=1,k.payload=a,d!=null&&(k.callback=d),a=Oi(r,k,g),a!==null&&(_o(a,r,g,h),Pd(a,r,g))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var d=sn(),h=Ri(r),g=ei(d,h);g.tag=2,a!=null&&(g.callback=a),a=Oi(r,g,h),a!==null&&(_o(a,r,h,d),Pd(a,r,h))}};function wx(r,a,d,h,g,k,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,k,w):a.prototype&&a.prototype.isPureReactComponent?!hl(d,h)||!hl(g,k):!0}function ME(r,a,d){var h=!1,g=Ui,k=a.contextType;return typeof k=="object"&&k!==null?k=Xn(k):(g=An(a)?vr:en.current,h=a.contextTypes,k=(h=h!=null)?Bs(r,g):Ui),a=new a(d,k),r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xu,r.stateNode=a,a._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=k),a}function Ax(r,a,d,h){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,h),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,h),a.state!==r&&xu.enqueueReplaceState(a,a.state,null)}function fg(r,a,d,h){var g=r.stateNode;g.props=d,g.state=r.memoizedState,g.refs=IE,kf(r);var k=a.contextType;typeof k=="object"&&k!==null?g.context=Xn(k):(k=An(a)?vr:en.current,g.context=Bs(r,k)),g.state=r.memoizedState,k=a.getDerivedStateFromProps,typeof k=="function"&&(gg(r,a,k,d),g.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&xu.enqueueReplaceState(g,g.state,null),su(r,d,g,h),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function Ra(r,a,d){if(r=d.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(te(309));var h=d.stateNode}if(!h)throw Error(te(147,r));var g=h,k=""+r;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===k?a.ref:(a=function(w){var C=g.refs;C===IE&&(C=g.refs={}),w===null?delete C[k]:C[k]=w},a._stringRef=k,a)}if(typeof r!="string")throw Error(te(284));if(!d._owner)throw Error(te(290,r))}return r}function Ad(r,a){throw r=Object.prototype.toString.call(a),Error(te(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r))}function _x(r){var a=r._init;return a(r._payload)}function BE(r){function a(P,N){if(r){var R=P.deletions;R===null?(P.deletions=[N],P.flags|=16):R.push(N)}}function d(P,N){if(!r)return null;for(;N!==null;)a(P,N),N=N.sibling;return null}function h(P,N){for(P=new Map;N!==null;)N.key!==null?P.set(N.key,N):P.set(N.index,N),N=N.sibling;return P}function g(P,N){return P=ji(P,N),P.index=0,P.sibling=null,P}function k(P,N,R){return P.index=R,r?(R=P.alternate,R!==null?(R=R.index,R<N?(P.flags|=2,N):R):(P.flags|=2,N)):(P.flags|=1048576,N)}function w(P){return r&&P.alternate===null&&(P.flags|=2),P}function C(P,N,R,U){return N===null||N.tag!==6?(N=Em(R,P.mode,U),N.return=P,N):(N=g(N,R),N.return=P,N)}function b(P,N,R,U){var q=R.type;return q===ps?T(P,N,R.props.children,U,R.key):N!==null&&(N.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===xi&&_x(q)===N.type)?(U=g(N,R.props),U.ref=Ra(P,N,R),U.return=P,U):(U=Fd(R.type,R.key,R.props,null,P.mode,U),U.ref=Ra(P,N,R),U.return=P,U)}function y(P,N,R,U){return N===null||N.tag!==4||N.stateNode.containerInfo!==R.containerInfo||N.stateNode.implementation!==R.implementation?(N=Dm(R,P.mode,U),N.return=P,N):(N=g(N,R.children||[]),N.return=P,N)}function T(P,N,R,U,q){return N===null||N.tag!==7?(N=Cr(R,P.mode,U,q),N.return=P,N):(N=g(N,R),N.return=P,N)}function E(P,N,R){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Em(""+N,P.mode,R),N.return=P,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case cd:return R=Fd(N.type,N.key,N.props,null,P.mode,R),R.ref=Ra(P,null,N),R.return=P,R;case hs:return N=Dm(N,P.mode,R),N.return=P,N;case xi:var U=N._init;return E(P,U(N._payload),R)}if(Ga(N)||Na(N))return N=Cr(N,P.mode,R,null),N.return=P,N;Ad(P,N)}return null}function _(P,N,R,U){var q=N!==null?N.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return q!==null?null:C(P,N,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case cd:return R.key===q?b(P,N,R,U):null;case hs:return R.key===q?y(P,N,R,U):null;case xi:return q=R._init,_(P,N,q(R._payload),U)}if(Ga(R)||Na(R))return q!==null?null:T(P,N,R,U,null);Ad(P,R)}return null}function D(P,N,R,U,q){if(typeof U=="string"&&U!==""||typeof U=="number")return P=P.get(R)||null,C(N,P,""+U,q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case cd:return P=P.get(U.key===null?R:U.key)||null,b(N,P,U,q);case hs:return P=P.get(U.key===null?R:U.key)||null,y(N,P,U,q);case xi:var X=U._init;return D(P,N,R,X(U._payload),q)}if(Ga(U)||Na(U))return P=P.get(R)||null,T(N,P,U,q,null);Ad(N,U)}return null}function M(P,N,R,U){for(var q=null,X=null,$=N,J=N=0,z=null;$!==null&&J<R.length;J++){$.index>J?(z=$,$=null):z=$.sibling;var Y=_(P,$,R[J],U);if(Y===null){$===null&&($=z);break}r&&$&&Y.alternate===null&&a(P,$),N=k(Y,N,J),X===null?q=Y:X.sibling=Y,X=Y,$=z}if(J===R.length)return d(P,$),ct&&mr(P,J),q;if($===null){for(;J<R.length;J++)$=E(P,R[J],U),$!==null&&(N=k($,N,J),X===null?q=$:X.sibling=$,X=$);return ct&&mr(P,J),q}for($=h(P,$);J<R.length;J++)z=D($,P,J,R[J],U),z!==null&&(r&&z.alternate!==null&&$.delete(z.key===null?J:z.key),N=k(z,N,J),X===null?q=z:X.sibling=z,X=z);return r&&$.forEach(function(fe){return a(P,fe)}),ct&&mr(P,J),q}function B(P,N,R,U){var q=Na(R);if(typeof q!="function")throw Error(te(150));if(R=q.call(R),R==null)throw Error(te(151));for(var X=q=null,$=N,J=N=0,z=null,Y=R.next();$!==null&&!Y.done;J++,Y=R.next()){$.index>J?(z=$,$=null):z=$.sibling;var fe=_(P,$,Y.value,U);if(fe===null){$===null&&($=z);break}r&&$&&fe.alternate===null&&a(P,$),N=k(fe,N,J),X===null?q=fe:X.sibling=fe,X=fe,$=z}if(Y.done)return d(P,$),ct&&mr(P,J),q;if($===null){for(;!Y.done;J++,Y=R.next())Y=E(P,Y.value,U),Y!==null&&(N=k(Y,N,J),X===null?q=Y:X.sibling=Y,X=Y);return ct&&mr(P,J),q}for($=h(P,$);!Y.done;J++,Y=R.next())Y=D($,P,J,Y.value,U),Y!==null&&(r&&Y.alternate!==null&&$.delete(Y.key===null?J:Y.key),N=k(Y,N,J),X===null?q=Y:X.sibling=Y,X=Y);return r&&$.forEach(function(xe){return a(P,xe)}),ct&&mr(P,J),q}function j(P,N,R,U){if(typeof R=="object"&&R!==null&&R.type===ps&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case cd:e:{for(var q=R.key,X=N;X!==null;){if(X.key===q){if(q=R.type,q===ps){if(X.tag===7){d(P,X.sibling),N=g(X,R.props.children),N.return=P,P=N;break e}}else if(X.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===xi&&_x(q)===X.type){d(P,X.sibling),N=g(X,R.props),N.ref=Ra(P,X,R),N.return=P,P=N;break e}d(P,X);break}else a(P,X);X=X.sibling}R.type===ps?(N=Cr(R.props.children,P.mode,U,R.key),N.return=P,P=N):(U=Fd(R.type,R.key,R.props,null,P.mode,U),U.ref=Ra(P,N,R),U.return=P,P=U)}return w(P);case hs:e:{for(X=R.key;N!==null;){if(N.key===X)if(N.tag===4&&N.stateNode.containerInfo===R.containerInfo&&N.stateNode.implementation===R.implementation){d(P,N.sibling),N=g(N,R.children||[]),N.return=P,P=N;break e}else{d(P,N);break}else a(P,N);N=N.sibling}N=Dm(R,P.mode,U),N.return=P,P=N}return w(P);case xi:return X=R._init,j(P,N,X(R._payload),U)}if(Ga(R))return M(P,N,R,U);if(Na(R))return B(P,N,R,U);Ad(P,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,N!==null&&N.tag===6?(d(P,N.sibling),N=g(N,R),N.return=P,P=N):(d(P,N),N=Em(R,P.mode,U),N.return=P,P=N),w(P)):d(P,N)}return j}var Ps=BE(!0),NE=BE(!1),Tl={},zo=Wi(Tl),fl=Wi(Tl),kl=Wi(Tl);function Ar(r){if(r===Tl)throw Error(te(174));return r}function bf(r,a){switch(et(kl,a),et(fl,r),et(zo,Tl),r=a.nodeType,r){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Km(null,"");break;default:r=r===8?a.parentNode:a,a=r.namespaceURI||null,r=r.tagName,a=Km(a,r)}rt(zo),et(zo,a)}function Ls(){rt(zo),rt(fl),rt(kl)}function PE(r){Ar(kl.current);var a=Ar(zo.current),d=Km(a,r.type);a!==d&&(et(fl,r),et(zo,d))}function wf(r){fl.current===r&&(rt(zo),rt(fl))}var pt=Wi(0);function au(r){for(var a=r;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Am=[];function Af(){for(var r=0;r<Am.length;r++)Am[r]._workInProgressVersionPrimary=null;Am.length=0}var Ld=si.ReactCurrentDispatcher,_m=si.ReactCurrentBatchConfig,xr=0,mt=null,Nt=null,jt=null,lu=!1,tl=!1,bl=0,Wz=0;function Zt(){throw Error(te(321))}function _f(r,a){if(a===null)return!1;for(var d=0;d<a.length&&d<r.length;d++)if(!Co(r[d],a[d]))return!1;return!0}function Cf(r,a,d,h,g,k){if(xr=k,mt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ld.current=r===null||r.memoizedState===null?Kz:Yz,r=d(h,g),tl){k=0;do{if(tl=!1,bl=0,25<=k)throw Error(te(301));k+=1,jt=Nt=null,a.updateQueue=null,Ld.current=Qz,r=d(h,g)}while(tl)}if(Ld.current=cu,a=Nt!==null&&Nt.next!==null,xr=0,jt=Nt=mt=null,lu=!1,a)throw Error(te(300));return r}function vf(){var r=bl!==0;return bl=0,r}function No(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?mt.memoizedState=jt=r:jt=jt.next=r,jt}function eo(){if(Nt===null){var r=mt.alternate;r=r!==null?r.memoizedState:null}else r=Nt.next;var a=jt===null?mt.memoizedState:jt.next;if(a!==null)jt=a,Nt=r;else{if(r===null)throw Error(te(310));Nt=r,r={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},jt===null?mt.memoizedState=jt=r:jt=jt.next=r}return jt}function wl(r,a){return typeof a=="function"?a(r):a}function Cm(r){var a=eo(),d=a.queue;if(d===null)throw Error(te(311));d.lastRenderedReducer=r;var h=Nt,g=h.baseQueue,k=d.pending;if(k!==null){if(g!==null){var w=g.next;g.next=k.next,k.next=w}h.baseQueue=g=k,d.pending=null}if(g!==null){k=g.next,h=h.baseState;var C=w=null,b=null,y=k;do{var T=y.lane;if((xr&T)===T)b!==null&&(b=b.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),h=y.hasEagerState?y.eagerState:r(h,y.action);else{var E={lane:T,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};b===null?(C=b=E,w=h):b=b.next=E,mt.lanes|=T,Er|=T}y=y.next}while(y!==null&&y!==k);b===null?w=h:b.next=C,Co(h,a.memoizedState)||(bn=!0),a.memoizedState=h,a.baseState=w,a.baseQueue=b,d.lastRenderedState=h}if(r=d.interleaved,r!==null){g=r;do k=g.lane,mt.lanes|=k,Er|=k,g=g.next;while(g!==r)}else g===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function vm(r){var a=eo(),d=a.queue;if(d===null)throw Error(te(311));d.lastRenderedReducer=r;var h=d.dispatch,g=d.pending,k=a.memoizedState;if(g!==null){d.pending=null;var w=g=g.next;do k=r(k,w.action),w=w.next;while(w!==g);Co(k,a.memoizedState)||(bn=!0),a.memoizedState=k,a.baseQueue===null&&(a.baseState=k),d.lastRenderedState=k}return[k,h]}function LE(){}function OE(r,a){var d=mt,h=eo(),g=a(),k=!Co(h.memoizedState,g);if(k&&(h.memoizedState=g,bn=!0),h=h.queue,yf(jE.bind(null,d,h,r),[r]),h.getSnapshot!==a||k||jt!==null&&jt.memoizedState.tag&1){if(d.flags|=2048,Al(9,RE.bind(null,d,h,g,a),void 0,null),Ft===null)throw Error(te(349));xr&30||zE(d,a,g)}return g}function zE(r,a,d){r.flags|=16384,r={getSnapshot:a,value:d},a=mt.updateQueue,a===null?(a={lastEffect:null,stores:null},mt.updateQueue=a,a.stores=[r]):(d=a.stores,d===null?a.stores=[r]:d.push(r))}function RE(r,a,d,h){a.value=d,a.getSnapshot=h,FE(a)&&VE(r)}function jE(r,a,d){return d(function(){FE(a)&&VE(r)})}function FE(r){var a=r.getSnapshot;r=r.value;try{var d=a();return!Co(r,d)}catch{return!0}}function VE(r){var a=ii(r,1);a!==null&&_o(a,r,1,-1)}function Cx(r){var a=No();return typeof r=="function"&&(r=r()),a.memoizedState=a.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:r},a.queue=r,r=r.dispatch=$z.bind(null,mt,r),[a.memoizedState,r]}function Al(r,a,d,h){return r={tag:r,create:a,destroy:d,deps:h,next:null},a=mt.updateQueue,a===null?(a={lastEffect:null,stores:null},mt.updateQueue=a,a.lastEffect=r.next=r):(d=a.lastEffect,d===null?a.lastEffect=r.next=r:(h=d.next,d.next=r,r.next=h,a.lastEffect=r)),r}function UE(){return eo().memoizedState}function Od(r,a,d,h){var g=No();mt.flags|=r,g.memoizedState=Al(1|a,d,void 0,h===void 0?null:h)}function Eu(r,a,d,h){var g=eo();h=h===void 0?null:h;var k=void 0;if(Nt!==null){var w=Nt.memoizedState;if(k=w.destroy,h!==null&&_f(h,w.deps)){g.memoizedState=Al(a,d,k,h);return}}mt.flags|=r,g.memoizedState=Al(1|a,d,k,h)}function vx(r,a){return Od(8390656,8,r,a)}function yf(r,a){return Eu(2048,8,r,a)}function HE(r,a){return Eu(4,2,r,a)}function WE(r,a){return Eu(4,4,r,a)}function qE(r,a){if(typeof a=="function")return r=r(),a(r),function(){a(null)};if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function GE(r,a,d){return d=d!=null?d.concat([r]):null,Eu(4,4,qE.bind(null,a,r),d)}function xf(){}function $E(r,a){var d=eo();a=a===void 0?null:a;var h=d.memoizedState;return h!==null&&a!==null&&_f(a,h[1])?h[0]:(d.memoizedState=[r,a],r)}function KE(r,a){var d=eo();a=a===void 0?null:a;var h=d.memoizedState;return h!==null&&a!==null&&_f(a,h[1])?h[0]:(r=r(),d.memoizedState=[r,a],r)}function YE(r,a,d){return xr&21?(Co(d,a)||(d=J2(),mt.lanes|=d,Er|=d,r.baseState=!0),a):(r.baseState&&(r.baseState=!1,bn=!0),r.memoizedState=d)}function qz(r,a){var d=qe;qe=d!==0&&4>d?d:4,r(!0);var h=_m.transition;_m.transition={};try{r(!1),a()}finally{qe=d,_m.transition=h}}function QE(){return eo().memoizedState}function Gz(r,a,d){var h=Ri(r);if(d={lane:h,action:d,hasEagerState:!1,eagerState:null,next:null},ZE(r))JE(a,d);else if(d=SE(r,a,d,h),d!==null){var g=sn();_o(d,r,h,g),XE(d,a,h)}}function $z(r,a,d){var h=Ri(r),g={lane:h,action:d,hasEagerState:!1,eagerState:null,next:null};if(ZE(r))JE(a,g);else{var k=r.alternate;if(r.lanes===0&&(k===null||k.lanes===0)&&(k=a.lastRenderedReducer,k!==null))try{var w=a.lastRenderedState,C=k(w,d);if(g.hasEagerState=!0,g.eagerState=C,Co(C,w)){var b=a.interleaved;b===null?(g.next=g,ff(a)):(g.next=b.next,b.next=g),a.interleaved=g;return}}catch{}finally{}d=SE(r,a,g,h),d!==null&&(g=sn(),_o(d,r,h,g),XE(d,a,h))}}function ZE(r){var a=r.alternate;return r===mt||a!==null&&a===mt}function JE(r,a){tl=lu=!0;var d=r.pending;d===null?a.next=a:(a.next=d.next,d.next=a),r.pending=a}function XE(r,a,d){if(d&4194240){var h=a.lanes;h&=r.pendingLanes,d|=h,a.lanes=d,tf(r,d)}}var cu={readContext:Xn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},Kz={readContext:Xn,useCallback:function(r,a){return No().memoizedState=[r,a===void 0?null:a],r},useContext:Xn,useEffect:vx,useImperativeHandle:function(r,a,d){return d=d!=null?d.concat([r]):null,Od(4194308,4,qE.bind(null,a,r),d)},useLayoutEffect:function(r,a){return Od(4194308,4,r,a)},useInsertionEffect:function(r,a){return Od(4,2,r,a)},useMemo:function(r,a){var d=No();return a=a===void 0?null:a,r=r(),d.memoizedState=[r,a],r},useReducer:function(r,a,d){var h=No();return a=d!==void 0?d(a):a,h.memoizedState=h.baseState=a,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:a},h.queue=r,r=r.dispatch=Gz.bind(null,mt,r),[h.memoizedState,r]},useRef:function(r){var a=No();return r={current:r},a.memoizedState=r},useState:Cx,useDebugValue:xf,useDeferredValue:function(r){return No().memoizedState=r},useTransition:function(){var r=Cx(!1),a=r[0];return r=qz.bind(null,r[1]),No().memoizedState=r,[a,r]},useMutableSource:function(){},useSyncExternalStore:function(r,a,d){var h=mt,g=No();if(ct){if(d===void 0)throw Error(te(407));d=d()}else{if(d=a(),Ft===null)throw Error(te(349));xr&30||zE(h,a,d)}g.memoizedState=d;var k={value:d,getSnapshot:a};return g.queue=k,vx(jE.bind(null,h,k,r),[r]),h.flags|=2048,Al(9,RE.bind(null,h,k,d,a),void 0,null),d},useId:function(){var r=No(),a=Ft.identifierPrefix;if(ct){var d=Xo,h=Jo;d=(h&~(1<<32-Ao(h)-1)).toString(32)+d,a=":"+a+"R"+d,d=bl++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=Wz++,a=":"+a+"r"+d.toString(32)+":";return r.memoizedState=a},unstable_isNewReconciler:!1},Yz={readContext:Xn,useCallback:$E,useContext:Xn,useEffect:yf,useImperativeHandle:GE,useInsertionEffect:HE,useLayoutEffect:WE,useMemo:KE,useReducer:Cm,useRef:UE,useState:function(){return Cm(wl)},useDebugValue:xf,useDeferredValue:function(r){var a=eo();return YE(a,Nt.memoizedState,r)},useTransition:function(){var r=Cm(wl)[0],a=eo().memoizedState;return[r,a]},useMutableSource:LE,useSyncExternalStore:OE,useId:QE,unstable_isNewReconciler:!1},Qz={readContext:Xn,useCallback:$E,useContext:Xn,useEffect:yf,useImperativeHandle:GE,useInsertionEffect:HE,useLayoutEffect:WE,useMemo:KE,useReducer:vm,useRef:UE,useState:function(){return vm(wl)},useDebugValue:xf,useDeferredValue:function(r){var a=eo();return Nt===null?a.memoizedState=r:YE(a,Nt.memoizedState,r)},useTransition:function(){var r=vm(wl)[0],a=eo().memoizedState;return[r,a]},useMutableSource:LE,useSyncExternalStore:OE,useId:QE,unstable_isNewReconciler:!1};function Os(r,a){try{var d="",h=a;do d+=y7(h),h=h.return;while(h);var g=d}catch(k){g=`
Error generating stack: `+k.message+`
`+k.stack}return{value:r,source:a,stack:g,digest:null}}function ym(r,a,d){return{value:r,source:null,stack:d??null,digest:a??null}}function kg(r,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var Zz=typeof WeakMap=="function"?WeakMap:Map;function e5(r,a,d){d=ei(-1,d),d.tag=3,d.payload={element:null};var h=a.value;return d.callback=function(){uu||(uu=!0,Dg=h),kg(r,a)},d}function t5(r,a,d){d=ei(-1,d),d.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var g=a.value;d.payload=function(){return h(g)},d.callback=function(){kg(r,a)}}var k=r.stateNode;return k!==null&&typeof k.componentDidCatch=="function"&&(d.callback=function(){kg(r,a),typeof h!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})}),d}function yx(r,a,d){var h=r.pingCache;if(h===null){h=r.pingCache=new Zz;var g=new Set;h.set(a,g)}else g=h.get(a),g===void 0&&(g=new Set,h.set(a,g));g.has(d)||(g.add(d),r=uR.bind(null,r,a,d),a.then(r,r))}function xx(r){do{var a;if((a=r.tag===13)&&(a=r.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return r;r=r.return}while(r!==null);return null}function Ex(r,a,d,h,g){return r.mode&1?(r.flags|=65536,r.lanes=g,r):(r===a?r.flags|=65536:(r.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=ei(-1,1),a.tag=2,Oi(d,a,1))),d.lanes|=1),r)}var Jz=si.ReactCurrentOwner,bn=!1;function rn(r,a,d,h){a.child=r===null?NE(a,null,d,h):Ps(a,r.child,d,h)}function Dx(r,a,d,h,g){d=d.render;var k=a.ref;return Ss(a,g),h=Cf(r,a,d,h,k,g),d=vf(),r!==null&&!bn?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~g,ri(r,a,g)):(ct&&d&&df(a),a.flags|=1,rn(r,a,h,g),a.child)}function Sx(r,a,d,h,g){if(r===null){var k=d.type;return typeof k=="function"&&!Nf(k)&&k.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=k,n5(r,a,k,h,g)):(r=Fd(d.type,null,h,a,a.mode,g),r.ref=a.ref,r.return=a,a.child=r)}if(k=r.child,!(r.lanes&g)){var w=k.memoizedProps;if(d=d.compare,d=d!==null?d:hl,d(w,h)&&r.ref===a.ref)return ri(r,a,g)}return a.flags|=1,r=ji(k,h),r.ref=a.ref,r.return=a,a.child=r}function n5(r,a,d,h,g){if(r!==null){var k=r.memoizedProps;if(hl(k,h)&&r.ref===a.ref)if(bn=!1,a.pendingProps=h=k,(r.lanes&g)!==0)r.flags&131072&&(bn=!0);else return a.lanes=r.lanes,ri(r,a,g)}return bg(r,a,d,h,g)}function o5(r,a,d){var h=a.pendingProps,g=h.children,k=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(vs,In),In|=d;else{if(!(d&1073741824))return r=k!==null?k.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:r,cachePool:null,transitions:null},a.updateQueue=null,et(vs,In),In|=r,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=k!==null?k.baseLanes:d,et(vs,In),In|=h}else k!==null?(h=k.baseLanes|d,a.memoizedState=null):h=d,et(vs,In),In|=h;return rn(r,a,g,d),a.child}function i5(r,a){var d=a.ref;(r===null&&d!==null||r!==null&&r.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function bg(r,a,d,h,g){var k=An(d)?vr:en.current;return k=Bs(a,k),Ss(a,g),d=Cf(r,a,d,h,k,g),h=vf(),r!==null&&!bn?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~g,ri(r,a,g)):(ct&&h&&df(a),a.flags|=1,rn(r,a,d,g),a.child)}function Tx(r,a,d,h,g){if(An(d)){var k=!0;tu(a)}else k=!1;if(Ss(a,g),a.stateNode===null)zd(r,a),ME(a,d,h),fg(a,d,h,g),h=!0;else if(r===null){var w=a.stateNode,C=a.memoizedProps;w.props=C;var b=w.context,y=d.contextType;typeof y=="object"&&y!==null?y=Xn(y):(y=An(d)?vr:en.current,y=Bs(a,y));var T=d.getDerivedStateFromProps,E=typeof T=="function"||typeof w.getSnapshotBeforeUpdate=="function";E||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==h||b!==y)&&Ax(a,w,h,y),Ei=!1;var _=a.memoizedState;w.state=_,su(a,h,w,g),b=a.memoizedState,C!==h||_!==b||wn.current||Ei?(typeof T=="function"&&(gg(a,d,T,h),b=a.memoizedState),(C=Ei||wx(a,d,C,h,_,b,y))?(E||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(a.flags|=4194308)):(typeof w.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=h,a.memoizedState=b),w.props=h,w.state=b,w.context=y,h=C):(typeof w.componentDidMount=="function"&&(a.flags|=4194308),h=!1)}else{w=a.stateNode,TE(r,a),C=a.memoizedProps,y=a.type===a.elementType?C:ko(a.type,C),w.props=y,E=a.pendingProps,_=w.context,b=d.contextType,typeof b=="object"&&b!==null?b=Xn(b):(b=An(d)?vr:en.current,b=Bs(a,b));var D=d.getDerivedStateFromProps;(T=typeof D=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==E||_!==b)&&Ax(a,w,h,b),Ei=!1,_=a.memoizedState,w.state=_,su(a,h,w,g);var M=a.memoizedState;C!==E||_!==M||wn.current||Ei?(typeof D=="function"&&(gg(a,d,D,h),M=a.memoizedState),(y=Ei||wx(a,d,y,h,_,M,b)||!1)?(T||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,M,b),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,M,b)),typeof w.componentDidUpdate=="function"&&(a.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&_===r.memoizedState||(a.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&_===r.memoizedState||(a.flags|=1024),a.memoizedProps=h,a.memoizedState=M),w.props=h,w.state=M,w.context=b,h=y):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&_===r.memoizedState||(a.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&_===r.memoizedState||(a.flags|=1024),h=!1)}return wg(r,a,d,h,k,g)}function wg(r,a,d,h,g,k){i5(r,a);var w=(a.flags&128)!==0;if(!h&&!w)return g&&mx(a,d,!1),ri(r,a,k);h=a.stateNode,Jz.current=a;var C=w&&typeof d.getDerivedStateFromError!="function"?null:h.render();return a.flags|=1,r!==null&&w?(a.child=Ps(a,r.child,null,k),a.child=Ps(a,null,C,k)):rn(r,a,C,k),a.memoizedState=h.state,g&&mx(a,d,!0),a.child}function r5(r){var a=r.stateNode;a.pendingContext?px(r,a.pendingContext,a.pendingContext!==a.context):a.context&&px(r,a.context,!1),bf(r,a.containerInfo)}function Ix(r,a,d,h,g){return Ns(),hf(g),a.flags|=256,rn(r,a,d,h),a.child}var Ag={dehydrated:null,treeContext:null,retryLane:0};function _g(r){return{baseLanes:r,cachePool:null,transitions:null}}function s5(r,a,d){var h=a.pendingProps,g=pt.current,k=!1,w=(a.flags&128)!==0,C;if((C=w)||(C=r!==null&&r.memoizedState===null?!1:(g&2)!==0),C?(k=!0,a.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),et(pt,g&1),r===null)return pg(a),r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(a.mode&1?r.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(w=h.children,r=h.fallback,k?(h=a.mode,k=a.child,w={mode:"hidden",children:w},!(h&1)&&k!==null?(k.childLanes=0,k.pendingProps=w):k=Tu(w,h,0,null),r=Cr(r,h,d,null),k.return=a,r.return=a,k.sibling=r,a.child=k,a.child.memoizedState=_g(d),a.memoizedState=Ag,r):Ef(a,w));if(g=r.memoizedState,g!==null&&(C=g.dehydrated,C!==null))return Xz(r,a,w,h,C,g,d);if(k){k=h.fallback,w=a.mode,g=r.child,C=g.sibling;var b={mode:"hidden",children:h.children};return!(w&1)&&a.child!==g?(h=a.child,h.childLanes=0,h.pendingProps=b,a.deletions=null):(h=ji(g,b),h.subtreeFlags=g.subtreeFlags&14680064),C!==null?k=ji(C,k):(k=Cr(k,w,d,null),k.flags|=2),k.return=a,h.return=a,h.sibling=k,a.child=h,h=k,k=a.child,w=r.child.memoizedState,w=w===null?_g(d):{baseLanes:w.baseLanes|d,cachePool:null,transitions:w.transitions},k.memoizedState=w,k.childLanes=r.childLanes&~d,a.memoizedState=Ag,h}return k=r.child,r=k.sibling,h=ji(k,{mode:"visible",children:h.children}),!(a.mode&1)&&(h.lanes=d),h.return=a,h.sibling=null,r!==null&&(d=a.deletions,d===null?(a.deletions=[r],a.flags|=16):d.push(r)),a.child=h,a.memoizedState=null,h}function Ef(r,a){return a=Tu({mode:"visible",children:a},r.mode,0,null),a.return=r,r.child=a}function _d(r,a,d,h){return h!==null&&hf(h),Ps(a,r.child,null,d),r=Ef(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function Xz(r,a,d,h,g,k,w){if(d)return a.flags&256?(a.flags&=-257,h=ym(Error(te(422))),_d(r,a,w,h)):a.memoizedState!==null?(a.child=r.child,a.flags|=128,null):(k=h.fallback,g=a.mode,h=Tu({mode:"visible",children:h.children},g,0,null),k=Cr(k,g,w,null),k.flags|=2,h.return=a,k.return=a,h.sibling=k,a.child=h,a.mode&1&&Ps(a,r.child,null,w),a.child.memoizedState=_g(w),a.memoizedState=Ag,k);if(!(a.mode&1))return _d(r,a,w,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var C=h.dgst;return h=C,k=Error(te(419)),h=ym(k,h,void 0),_d(r,a,w,h)}if(C=(w&r.childLanes)!==0,bn||C){if(h=Ft,h!==null){switch(w&-w){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=g&(h.suspendedLanes|w)?0:g,g!==0&&g!==k.retryLane&&(k.retryLane=g,ii(r,g),_o(h,r,g,-1))}return Bf(),h=ym(Error(te(421))),_d(r,a,w,h)}return g.data==="$?"?(a.flags|=128,a.child=r.child,a=hR.bind(null,r),g._reactRetry=a,null):(r=k.treeContext,Mn=Li(g.nextSibling),Bn=a,ct=!0,wo=null,r!==null&&(Kn[Yn++]=Jo,Kn[Yn++]=Xo,Kn[Yn++]=yr,Jo=r.id,Xo=r.overflow,yr=a),a=Ef(a,h.children),a.flags|=4096,a)}function Mx(r,a,d){r.lanes|=a;var h=r.alternate;h!==null&&(h.lanes|=a),mg(r.return,a,d)}function xm(r,a,d,h,g){var k=r.memoizedState;k===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:h,tail:d,tailMode:g}:(k.isBackwards=a,k.rendering=null,k.renderingStartTime=0,k.last=h,k.tail=d,k.tailMode=g)}function a5(r,a,d){var h=a.pendingProps,g=h.revealOrder,k=h.tail;if(rn(r,a,h.children,d),h=pt.current,h&2)h=h&1|2,a.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Mx(r,d,a);else if(r.tag===19)Mx(r,d,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(et(pt,h),!(a.mode&1))a.memoizedState=null;else switch(g){case"forwards":for(d=a.child,g=null;d!==null;)r=d.alternate,r!==null&&au(r)===null&&(g=d),d=d.sibling;d=g,d===null?(g=a.child,a.child=null):(g=d.sibling,d.sibling=null),xm(a,!1,g,d,k);break;case"backwards":for(d=null,g=a.child,a.child=null;g!==null;){if(r=g.alternate,r!==null&&au(r)===null){a.child=g;break}r=g.sibling,g.sibling=d,d=g,g=r}xm(a,!0,d,null,k);break;case"together":xm(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function zd(r,a){!(a.mode&1)&&r!==null&&(r.alternate=null,a.alternate=null,a.flags|=2)}function ri(r,a,d){if(r!==null&&(a.dependencies=r.dependencies),Er|=a.lanes,!(d&a.childLanes))return null;if(r!==null&&a.child!==r.child)throw Error(te(153));if(a.child!==null){for(r=a.child,d=ji(r,r.pendingProps),a.child=d,d.return=a;r.sibling!==null;)r=r.sibling,d=d.sibling=ji(r,r.pendingProps),d.return=a;d.sibling=null}return a.child}function eR(r,a,d){switch(a.tag){case 3:r5(a),Ns();break;case 5:PE(a);break;case 1:An(a.type)&&tu(a);break;case 4:bf(a,a.stateNode.containerInfo);break;case 10:var h=a.type._context,g=a.memoizedProps.value;et(iu,h._currentValue),h._currentValue=g;break;case 13:if(h=a.memoizedState,h!==null)return h.dehydrated!==null?(et(pt,pt.current&1),a.flags|=128,null):d&a.child.childLanes?s5(r,a,d):(et(pt,pt.current&1),r=ri(r,a,d),r!==null?r.sibling:null);et(pt,pt.current&1);break;case 19:if(h=(d&a.childLanes)!==0,r.flags&128){if(h)return a5(r,a,d);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),et(pt,pt.current),h)break;return null;case 22:case 23:return a.lanes=0,o5(r,a,d)}return ri(r,a,d)}var l5,Cg,c5,d5;l5=function(r,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}};Cg=function(){};c5=function(r,a,d,h){var g=r.memoizedProps;if(g!==h){r=a.stateNode,Ar(zo.current);var k=null;switch(d){case"input":g=Wm(r,g),h=Wm(r,h),k=[];break;case"select":g=gt({},g,{value:void 0}),h=gt({},h,{value:void 0}),k=[];break;case"textarea":g=$m(r,g),h=$m(r,h),k=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Xd)}Ym(d,h);var w;d=null;for(y in g)if(!h.hasOwnProperty(y)&&g.hasOwnProperty(y)&&g[y]!=null)if(y==="style"){var C=g[y];for(w in C)C.hasOwnProperty(w)&&(d||(d={}),d[w]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(rl.hasOwnProperty(y)?k||(k=[]):(k=k||[]).push(y,null));for(y in h){var b=h[y];if(C=g!=null?g[y]:void 0,h.hasOwnProperty(y)&&b!==C&&(b!=null||C!=null))if(y==="style")if(C){for(w in C)!C.hasOwnProperty(w)||b&&b.hasOwnProperty(w)||(d||(d={}),d[w]="");for(w in b)b.hasOwnProperty(w)&&C[w]!==b[w]&&(d||(d={}),d[w]=b[w])}else d||(k||(k=[]),k.push(y,d)),d=b;else y==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,C=C?C.__html:void 0,b!=null&&C!==b&&(k=k||[]).push(y,b)):y==="children"?typeof b!="string"&&typeof b!="number"||(k=k||[]).push(y,""+b):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(rl.hasOwnProperty(y)?(b!=null&&y==="onScroll"&&it("scroll",r),k||C===b||(k=[])):(k=k||[]).push(y,b))}d&&(k=k||[]).push("style",d);var y=k;(a.updateQueue=y)&&(a.flags|=4)}};d5=function(r,a,d,h){d!==h&&(a.flags|=4)};function ja(r,a){if(!ct)switch(r.tailMode){case"hidden":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?r.tail=null:d.sibling=null;break;case"collapsed":d=r.tail;for(var h=null;d!==null;)d.alternate!==null&&(h=d),d=d.sibling;h===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Jt(r){var a=r.alternate!==null&&r.alternate.child===r.child,d=0,h=0;if(a)for(var g=r.child;g!==null;)d|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)d|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=h,r.childLanes=d,a}function tR(r,a,d){var h=a.pendingProps;switch(uf(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(a),null;case 1:return An(a.type)&&eu(),Jt(a),null;case 3:return h=a.stateNode,Ls(),rt(wn),rt(en),Af(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(wd(a)?a.flags|=4:r===null||r.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,wo!==null&&(Ig(wo),wo=null))),Cg(r,a),Jt(a),null;case 5:wf(a);var g=Ar(kl.current);if(d=a.type,r!==null&&a.stateNode!=null)c5(r,a,d,h,g),r.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!h){if(a.stateNode===null)throw Error(te(166));return Jt(a),null}if(r=Ar(zo.current),wd(a)){h=a.stateNode,d=a.type;var k=a.memoizedProps;switch(h[Po]=a,h[gl]=k,r=(a.mode&1)!==0,d){case"dialog":it("cancel",h),it("close",h);break;case"iframe":case"object":case"embed":it("load",h);break;case"video":case"audio":for(g=0;g<Ka.length;g++)it(Ka[g],h);break;case"source":it("error",h);break;case"img":case"image":case"link":it("error",h),it("load",h);break;case"details":it("toggle",h);break;case"input":Fy(h,k),it("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!k.multiple},it("invalid",h);break;case"textarea":Uy(h,k),it("invalid",h)}Ym(d,k),g=null;for(var w in k)if(k.hasOwnProperty(w)){var C=k[w];w==="children"?typeof C=="string"?h.textContent!==C&&(k.suppressHydrationWarning!==!0&&bd(h.textContent,C,r),g=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(k.suppressHydrationWarning!==!0&&bd(h.textContent,C,r),g=["children",""+C]):rl.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&it("scroll",h)}switch(d){case"input":dd(h),Vy(h,k,!0);break;case"textarea":dd(h),Hy(h);break;case"select":case"option":break;default:typeof k.onClick=="function"&&(h.onclick=Xd)}h=g,a.updateQueue=h,h!==null&&(a.flags|=4)}else{w=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=z2(d)),r==="http://www.w3.org/1999/xhtml"?d==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(d,{is:h.is}):(r=w.createElement(d),d==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,d),r[Po]=a,r[gl]=h,l5(r,a,!1,!1),a.stateNode=r;e:{switch(w=Qm(d,h),d){case"dialog":it("cancel",r),it("close",r),g=h;break;case"iframe":case"object":case"embed":it("load",r),g=h;break;case"video":case"audio":for(g=0;g<Ka.length;g++)it(Ka[g],r);g=h;break;case"source":it("error",r),g=h;break;case"img":case"image":case"link":it("error",r),it("load",r),g=h;break;case"details":it("toggle",r),g=h;break;case"input":Fy(r,h),g=Wm(r,h),it("invalid",r);break;case"option":g=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},g=gt({},h,{value:void 0}),it("invalid",r);break;case"textarea":Uy(r,h),g=$m(r,h),it("invalid",r);break;default:g=h}Ym(d,g),C=g;for(k in C)if(C.hasOwnProperty(k)){var b=C[k];k==="style"?F2(r,b):k==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&R2(r,b)):k==="children"?typeof b=="string"?(d!=="textarea"||b!=="")&&sl(r,b):typeof b=="number"&&sl(r,""+b):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(rl.hasOwnProperty(k)?b!=null&&k==="onScroll"&&it("scroll",r):b!=null&&Yg(r,k,b,w))}switch(d){case"input":dd(r),Vy(r,h,!1);break;case"textarea":dd(r),Hy(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Vi(h.value));break;case"select":r.multiple=!!h.multiple,k=h.value,k!=null?ys(r,!!h.multiple,k,!1):h.defaultValue!=null&&ys(r,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Xd)}switch(d){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Jt(a),null;case 6:if(r&&a.stateNode!=null)d5(r,a,r.memoizedProps,h);else{if(typeof h!="string"&&a.stateNode===null)throw Error(te(166));if(d=Ar(kl.current),Ar(zo.current),wd(a)){if(h=a.stateNode,d=a.memoizedProps,h[Po]=a,(k=h.nodeValue!==d)&&(r=Bn,r!==null))switch(r.tag){case 3:bd(h.nodeValue,d,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&bd(h.nodeValue,d,(r.mode&1)!==0)}k&&(a.flags|=4)}else h=(d.nodeType===9?d:d.ownerDocument).createTextNode(h),h[Po]=a,a.stateNode=h}return Jt(a),null;case 13:if(rt(pt),h=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(ct&&Mn!==null&&a.mode&1&&!(a.flags&128))DE(),Ns(),a.flags|=98560,k=!1;else if(k=wd(a),h!==null&&h.dehydrated!==null){if(r===null){if(!k)throw Error(te(318));if(k=a.memoizedState,k=k!==null?k.dehydrated:null,!k)throw Error(te(317));k[Po]=a}else Ns(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Jt(a),k=!1}else wo!==null&&(Ig(wo),wo=null),k=!0;if(!k)return a.flags&65536?a:null}return a.flags&128?(a.lanes=d,a):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(a.child.flags|=8192,a.mode&1&&(r===null||pt.current&1?Pt===0&&(Pt=3):Bf())),a.updateQueue!==null&&(a.flags|=4),Jt(a),null);case 4:return Ls(),Cg(r,a),r===null&&pl(a.stateNode.containerInfo),Jt(a),null;case 10:return gf(a.type._context),Jt(a),null;case 17:return An(a.type)&&eu(),Jt(a),null;case 19:if(rt(pt),k=a.memoizedState,k===null)return Jt(a),null;if(h=(a.flags&128)!==0,w=k.rendering,w===null)if(h)ja(k,!1);else{if(Pt!==0||r!==null&&r.flags&128)for(r=a.child;r!==null;){if(w=au(r),w!==null){for(a.flags|=128,ja(k,!1),h=w.updateQueue,h!==null&&(a.updateQueue=h,a.flags|=4),a.subtreeFlags=0,h=d,d=a.child;d!==null;)k=d,r=h,k.flags&=14680066,w=k.alternate,w===null?(k.childLanes=0,k.lanes=r,k.child=null,k.subtreeFlags=0,k.memoizedProps=null,k.memoizedState=null,k.updateQueue=null,k.dependencies=null,k.stateNode=null):(k.childLanes=w.childLanes,k.lanes=w.lanes,k.child=w.child,k.subtreeFlags=0,k.deletions=null,k.memoizedProps=w.memoizedProps,k.memoizedState=w.memoizedState,k.updateQueue=w.updateQueue,k.type=w.type,r=w.dependencies,k.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),d=d.sibling;return et(pt,pt.current&1|2),a.child}r=r.sibling}k.tail!==null&&yt()>zs&&(a.flags|=128,h=!0,ja(k,!1),a.lanes=4194304)}else{if(!h)if(r=au(w),r!==null){if(a.flags|=128,h=!0,d=r.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),ja(k,!0),k.tail===null&&k.tailMode==="hidden"&&!w.alternate&&!ct)return Jt(a),null}else 2*yt()-k.renderingStartTime>zs&&d!==1073741824&&(a.flags|=128,h=!0,ja(k,!1),a.lanes=4194304);k.isBackwards?(w.sibling=a.child,a.child=w):(d=k.last,d!==null?d.sibling=w:a.child=w,k.last=w)}return k.tail!==null?(a=k.tail,k.rendering=a,k.tail=a.sibling,k.renderingStartTime=yt(),a.sibling=null,d=pt.current,et(pt,h?d&1|2:d&1),a):(Jt(a),null);case 22:case 23:return Mf(),h=a.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(a.flags|=8192),h&&a.mode&1?In&1073741824&&(Jt(a),a.subtreeFlags&6&&(a.flags|=8192)):Jt(a),null;case 24:return null;case 25:return null}throw Error(te(156,a.tag))}function nR(r,a){switch(uf(a),a.tag){case 1:return An(a.type)&&eu(),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return Ls(),rt(wn),rt(en),Af(),r=a.flags,r&65536&&!(r&128)?(a.flags=r&-65537|128,a):null;case 5:return wf(a),null;case 13:if(rt(pt),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(te(340));Ns()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return rt(pt),null;case 4:return Ls(),null;case 10:return gf(a.type._context),null;case 22:case 23:return Mf(),null;case 24:return null;default:return null}}var Cd=!1,Xt=!1,oR=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Cs(r,a){var d=r.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(h){bt(r,a,h)}else d.current=null}function vg(r,a,d){try{d()}catch(h){bt(r,a,h)}}var Bx=!1;function iR(r,a){if(sg=Qd,r=mE(),cf(r)){if("selectionStart"in r)var d={start:r.selectionStart,end:r.selectionEnd};else e:{d=(d=r.ownerDocument)&&d.defaultView||window;var h=d.getSelection&&d.getSelection();if(h&&h.rangeCount!==0){d=h.anchorNode;var g=h.anchorOffset,k=h.focusNode;h=h.focusOffset;try{d.nodeType,k.nodeType}catch{d=null;break e}var w=0,C=-1,b=-1,y=0,T=0,E=r,_=null;t:for(;;){for(var D;E!==d||g!==0&&E.nodeType!==3||(C=w+g),E!==k||h!==0&&E.nodeType!==3||(b=w+h),E.nodeType===3&&(w+=E.nodeValue.length),(D=E.firstChild)!==null;)_=E,E=D;for(;;){if(E===r)break t;if(_===d&&++y===g&&(C=w),_===k&&++T===h&&(b=w),(D=E.nextSibling)!==null)break;E=_,_=E.parentNode}E=D}d=C===-1||b===-1?null:{start:C,end:b}}else d=null}d=d||{start:0,end:0}}else d=null;for(ag={focusedElem:r,selectionRange:d},Qd=!1,ce=a;ce!==null;)if(a=ce,r=a.child,(a.subtreeFlags&1028)!==0&&r!==null)r.return=a,ce=r;else for(;ce!==null;){a=ce;try{var M=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var B=M.memoizedProps,j=M.memoizedState,P=a.stateNode,N=P.getSnapshotBeforeUpdate(a.elementType===a.type?B:ko(a.type,B),j);P.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var R=a.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(U){bt(a,a.return,U)}if(r=a.sibling,r!==null){r.return=a.return,ce=r;break}ce=a.return}return M=Bx,Bx=!1,M}function nl(r,a,d){var h=a.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&r)===r){var k=g.destroy;g.destroy=void 0,k!==void 0&&vg(a,d,k)}g=g.next}while(g!==h)}}function Du(r,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&r)===r){var h=d.create;d.destroy=h()}d=d.next}while(d!==a)}}function yg(r){var a=r.ref;if(a!==null){var d=r.stateNode;switch(r.tag){case 5:r=d;break;default:r=d}typeof a=="function"?a(r):a.current=r}}function u5(r){var a=r.alternate;a!==null&&(r.alternate=null,u5(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&(delete a[Po],delete a[gl],delete a[dg],delete a[Fz],delete a[Vz])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function h5(r){return r.tag===5||r.tag===3||r.tag===4}function Nx(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||h5(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function xg(r,a,d){var h=r.tag;if(h===5||h===6)r=r.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(r,a):d.insertBefore(r,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(r,d)):(a=d,a.appendChild(r)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=Xd));else if(h!==4&&(r=r.child,r!==null))for(xg(r,a,d),r=r.sibling;r!==null;)xg(r,a,d),r=r.sibling}function Eg(r,a,d){var h=r.tag;if(h===5||h===6)r=r.stateNode,a?d.insertBefore(r,a):d.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Eg(r,a,d),r=r.sibling;r!==null;)Eg(r,a,d),r=r.sibling}var qt=null,bo=!1;function vi(r,a,d){for(d=d.child;d!==null;)p5(r,a,d),d=d.sibling}function p5(r,a,d){if(Oo&&typeof Oo.onCommitFiberUnmount=="function")try{Oo.onCommitFiberUnmount(wu,d)}catch{}switch(d.tag){case 5:Xt||Cs(d,a);case 6:var h=qt,g=bo;qt=null,vi(r,a,d),qt=h,bo=g,qt!==null&&(bo?(r=qt,d=d.stateNode,r.nodeType===8?r.parentNode.removeChild(d):r.removeChild(d)):qt.removeChild(d.stateNode));break;case 18:qt!==null&&(bo?(r=qt,d=d.stateNode,r.nodeType===8?bm(r.parentNode,d):r.nodeType===1&&bm(r,d),dl(r)):bm(qt,d.stateNode));break;case 4:h=qt,g=bo,qt=d.stateNode.containerInfo,bo=!0,vi(r,a,d),qt=h,bo=g;break;case 0:case 11:case 14:case 15:if(!Xt&&(h=d.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var k=g,w=k.destroy;k=k.tag,w!==void 0&&(k&2||k&4)&&vg(d,a,w),g=g.next}while(g!==h)}vi(r,a,d);break;case 1:if(!Xt&&(Cs(d,a),h=d.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=d.memoizedProps,h.state=d.memoizedState,h.componentWillUnmount()}catch(C){bt(d,a,C)}vi(r,a,d);break;case 21:vi(r,a,d);break;case 22:d.mode&1?(Xt=(h=Xt)||d.memoizedState!==null,vi(r,a,d),Xt=h):vi(r,a,d);break;default:vi(r,a,d)}}function Px(r){var a=r.updateQueue;if(a!==null){r.updateQueue=null;var d=r.stateNode;d===null&&(d=r.stateNode=new oR),a.forEach(function(h){var g=pR.bind(null,r,h);d.has(h)||(d.add(h),h.then(g,g))})}}function mo(r,a){var d=a.deletions;if(d!==null)for(var h=0;h<d.length;h++){var g=d[h];try{var k=r,w=a,C=w;e:for(;C!==null;){switch(C.tag){case 5:qt=C.stateNode,bo=!1;break e;case 3:qt=C.stateNode.containerInfo,bo=!0;break e;case 4:qt=C.stateNode.containerInfo,bo=!0;break e}C=C.return}if(qt===null)throw Error(te(160));p5(k,w,g),qt=null,bo=!1;var b=g.alternate;b!==null&&(b.return=null),g.return=null}catch(y){bt(g,a,y)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)m5(a,r),a=a.sibling}function m5(r,a){var d=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(mo(a,r),Bo(r),h&4){try{nl(3,r,r.return),Du(3,r)}catch(B){bt(r,r.return,B)}try{nl(5,r,r.return)}catch(B){bt(r,r.return,B)}}break;case 1:mo(a,r),Bo(r),h&512&&d!==null&&Cs(d,d.return);break;case 5:if(mo(a,r),Bo(r),h&512&&d!==null&&Cs(d,d.return),r.flags&32){var g=r.stateNode;try{sl(g,"")}catch(B){bt(r,r.return,B)}}if(h&4&&(g=r.stateNode,g!=null)){var k=r.memoizedProps,w=d!==null?d.memoizedProps:k,C=r.type,b=r.updateQueue;if(r.updateQueue=null,b!==null)try{C==="input"&&k.type==="radio"&&k.name!=null&&L2(g,k),Qm(C,w);var y=Qm(C,k);for(w=0;w<b.length;w+=2){var T=b[w],E=b[w+1];T==="style"?F2(g,E):T==="dangerouslySetInnerHTML"?R2(g,E):T==="children"?sl(g,E):Yg(g,T,E,y)}switch(C){case"input":qm(g,k);break;case"textarea":O2(g,k);break;case"select":var _=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!k.multiple;var D=k.value;D!=null?ys(g,!!k.multiple,D,!1):_!==!!k.multiple&&(k.defaultValue!=null?ys(g,!!k.multiple,k.defaultValue,!0):ys(g,!!k.multiple,k.multiple?[]:"",!1))}g[gl]=k}catch(B){bt(r,r.return,B)}}break;case 6:if(mo(a,r),Bo(r),h&4){if(r.stateNode===null)throw Error(te(162));g=r.stateNode,k=r.memoizedProps;try{g.nodeValue=k}catch(B){bt(r,r.return,B)}}break;case 3:if(mo(a,r),Bo(r),h&4&&d!==null&&d.memoizedState.isDehydrated)try{dl(a.containerInfo)}catch(B){bt(r,r.return,B)}break;case 4:mo(a,r),Bo(r);break;case 13:mo(a,r),Bo(r),g=r.child,g.flags&8192&&(k=g.memoizedState!==null,g.stateNode.isHidden=k,!k||g.alternate!==null&&g.alternate.memoizedState!==null||(Tf=yt())),h&4&&Px(r);break;case 22:if(T=d!==null&&d.memoizedState!==null,r.mode&1?(Xt=(y=Xt)||T,mo(a,r),Xt=y):mo(a,r),Bo(r),h&8192){if(y=r.memoizedState!==null,(r.stateNode.isHidden=y)&&!T&&r.mode&1)for(ce=r,T=r.child;T!==null;){for(E=ce=T;ce!==null;){switch(_=ce,D=_.child,_.tag){case 0:case 11:case 14:case 15:nl(4,_,_.return);break;case 1:Cs(_,_.return);var M=_.stateNode;if(typeof M.componentWillUnmount=="function"){h=_,d=_.return;try{a=h,M.props=a.memoizedProps,M.state=a.memoizedState,M.componentWillUnmount()}catch(B){bt(h,d,B)}}break;case 5:Cs(_,_.return);break;case 22:if(_.memoizedState!==null){Ox(E);continue}}D!==null?(D.return=_,ce=D):Ox(E)}T=T.sibling}e:for(T=null,E=r;;){if(E.tag===5){if(T===null){T=E;try{g=E.stateNode,y?(k=g.style,typeof k.setProperty=="function"?k.setProperty("display","none","important"):k.display="none"):(C=E.stateNode,b=E.memoizedProps.style,w=b!=null&&b.hasOwnProperty("display")?b.display:null,C.style.display=j2("display",w))}catch(B){bt(r,r.return,B)}}}else if(E.tag===6){if(T===null)try{E.stateNode.nodeValue=y?"":E.memoizedProps}catch(B){bt(r,r.return,B)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===r)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===r)break e;for(;E.sibling===null;){if(E.return===null||E.return===r)break e;T===E&&(T=null),E=E.return}T===E&&(T=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:mo(a,r),Bo(r),h&4&&Px(r);break;case 21:break;default:mo(a,r),Bo(r)}}function Bo(r){var a=r.flags;if(a&2){try{e:{for(var d=r.return;d!==null;){if(h5(d)){var h=d;break e}d=d.return}throw Error(te(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(sl(g,""),h.flags&=-33);var k=Nx(r);Eg(r,k,g);break;case 3:case 4:var w=h.stateNode.containerInfo,C=Nx(r);xg(r,C,w);break;default:throw Error(te(161))}}catch(b){bt(r,r.return,b)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function rR(r,a,d){ce=r,g5(r)}function g5(r,a,d){for(var h=(r.mode&1)!==0;ce!==null;){var g=ce,k=g.child;if(g.tag===22&&h){var w=g.memoizedState!==null||Cd;if(!w){var C=g.alternate,b=C!==null&&C.memoizedState!==null||Xt;C=Cd;var y=Xt;if(Cd=w,(Xt=b)&&!y)for(ce=g;ce!==null;)w=ce,b=w.child,w.tag===22&&w.memoizedState!==null?zx(g):b!==null?(b.return=w,ce=b):zx(g);for(;k!==null;)ce=k,g5(k),k=k.sibling;ce=g,Cd=C,Xt=y}Lx(r)}else g.subtreeFlags&8772&&k!==null?(k.return=g,ce=k):Lx(r)}}function Lx(r){for(;ce!==null;){var a=ce;if(a.flags&8772){var d=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:Xt||Du(5,a);break;case 1:var h=a.stateNode;if(a.flags&4&&!Xt)if(d===null)h.componentDidMount();else{var g=a.elementType===a.type?d.memoizedProps:ko(a.type,d.memoizedProps);h.componentDidUpdate(g,d.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var k=a.updateQueue;k!==null&&bx(a,k,h);break;case 3:var w=a.updateQueue;if(w!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}bx(a,w,d)}break;case 5:var C=a.stateNode;if(d===null&&a.flags&4){d=C;var b=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&d.focus();break;case"img":b.src&&(d.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var y=a.alternate;if(y!==null){var T=y.memoizedState;if(T!==null){var E=T.dehydrated;E!==null&&dl(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||a.flags&512&&yg(a)}catch(_){bt(a,a.return,_)}}if(a===r){ce=null;break}if(d=a.sibling,d!==null){d.return=a.return,ce=d;break}ce=a.return}}function Ox(r){for(;ce!==null;){var a=ce;if(a===r){ce=null;break}var d=a.sibling;if(d!==null){d.return=a.return,ce=d;break}ce=a.return}}function zx(r){for(;ce!==null;){var a=ce;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{Du(4,a)}catch(b){bt(a,d,b)}break;case 1:var h=a.stateNode;if(typeof h.componentDidMount=="function"){var g=a.return;try{h.componentDidMount()}catch(b){bt(a,g,b)}}var k=a.return;try{yg(a)}catch(b){bt(a,k,b)}break;case 5:var w=a.return;try{yg(a)}catch(b){bt(a,w,b)}}}catch(b){bt(a,a.return,b)}if(a===r){ce=null;break}var C=a.sibling;if(C!==null){C.return=a.return,ce=C;break}ce=a.return}}var sR=Math.ceil,du=si.ReactCurrentDispatcher,Df=si.ReactCurrentOwner,Zn=si.ReactCurrentBatchConfig,je=0,Ft=null,St=null,Gt=0,In=0,vs=Wi(0),Pt=0,_l=null,Er=0,Su=0,Sf=0,ol=null,kn=null,Tf=0,zs=1/0,Qo=null,uu=!1,Dg=null,zi=null,vd=!1,Ii=null,hu=0,il=0,Sg=null,Rd=-1,jd=0;function sn(){return je&6?yt():Rd!==-1?Rd:Rd=yt()}function Ri(r){return r.mode&1?je&2&&Gt!==0?Gt&-Gt:Hz.transition!==null?(jd===0&&(jd=J2()),jd):(r=qe,r!==0||(r=window.event,r=r===void 0?16:rE(r.type)),r):1}function _o(r,a,d,h){if(50<il)throw il=0,Sg=null,Error(te(185));El(r,d,h),(!(je&2)||r!==Ft)&&(r===Ft&&(!(je&2)&&(Su|=d),Pt===4&&Si(r,Gt)),_n(r,h),d===1&&je===0&&!(a.mode&1)&&(zs=yt()+500,yu&&qi()))}function _n(r,a){var d=r.callbackNode;H7(r,a);var h=Yd(r,r===Ft?Gt:0);if(h===0)d!==null&&Gy(d),r.callbackNode=null,r.callbackPriority=0;else if(a=h&-h,r.callbackPriority!==a){if(d!=null&&Gy(d),a===1)r.tag===0?Uz(Rx.bind(null,r)):yE(Rx.bind(null,r)),Rz(function(){!(je&6)&&qi()}),d=null;else{switch(X2(h)){case 1:d=ef;break;case 4:d=Q2;break;case 16:d=Kd;break;case 536870912:d=Z2;break;default:d=Kd}d=v5(d,f5.bind(null,r))}r.callbackPriority=a,r.callbackNode=d}}function f5(r,a){if(Rd=-1,jd=0,je&6)throw Error(te(327));var d=r.callbackNode;if(Ts()&&r.callbackNode!==d)return null;var h=Yd(r,r===Ft?Gt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||a)a=pu(r,h);else{a=h;var g=je;je|=2;var k=b5();(Ft!==r||Gt!==a)&&(Qo=null,zs=yt()+500,_r(r,a));do try{cR();break}catch(C){k5(r,C)}while(!0);mf(),du.current=k,je=g,St!==null?a=0:(Ft=null,Gt=0,a=Pt)}if(a!==0){if(a===2&&(g=tg(r),g!==0&&(h=g,a=Tg(r,g))),a===1)throw d=_l,_r(r,0),Si(r,h),_n(r,yt()),d;if(a===6)Si(r,h);else{if(g=r.current.alternate,!(h&30)&&!aR(g)&&(a=pu(r,h),a===2&&(k=tg(r),k!==0&&(h=k,a=Tg(r,k))),a===1))throw d=_l,_r(r,0),Si(r,h),_n(r,yt()),d;switch(r.finishedWork=g,r.finishedLanes=h,a){case 0:case 1:throw Error(te(345));case 2:gr(r,kn,Qo);break;case 3:if(Si(r,h),(h&130023424)===h&&(a=Tf+500-yt(),10<a)){if(Yd(r,0)!==0)break;if(g=r.suspendedLanes,(g&h)!==h){sn(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=cg(gr.bind(null,r,kn,Qo),a);break}gr(r,kn,Qo);break;case 4:if(Si(r,h),(h&4194240)===h)break;for(a=r.eventTimes,g=-1;0<h;){var w=31-Ao(h);k=1<<w,w=a[w],w>g&&(g=w),h&=~k}if(h=g,h=yt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*sR(h/1960))-h,10<h){r.timeoutHandle=cg(gr.bind(null,r,kn,Qo),h);break}gr(r,kn,Qo);break;case 5:gr(r,kn,Qo);break;default:throw Error(te(329))}}}return _n(r,yt()),r.callbackNode===d?f5.bind(null,r):null}function Tg(r,a){var d=ol;return r.current.memoizedState.isDehydrated&&(_r(r,a).flags|=256),r=pu(r,a),r!==2&&(a=kn,kn=d,a!==null&&Ig(a)),r}function Ig(r){kn===null?kn=r:kn.push.apply(kn,r)}function aR(r){for(var a=r;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var h=0;h<d.length;h++){var g=d[h],k=g.getSnapshot;g=g.value;try{if(!Co(k(),g))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Si(r,a){for(a&=~Sf,a&=~Su,r.suspendedLanes|=a,r.pingedLanes&=~a,r=r.expirationTimes;0<a;){var d=31-Ao(a),h=1<<d;r[d]=-1,a&=~h}}function Rx(r){if(je&6)throw Error(te(327));Ts();var a=Yd(r,0);if(!(a&1))return _n(r,yt()),null;var d=pu(r,a);if(r.tag!==0&&d===2){var h=tg(r);h!==0&&(a=h,d=Tg(r,h))}if(d===1)throw d=_l,_r(r,0),Si(r,a),_n(r,yt()),d;if(d===6)throw Error(te(345));return r.finishedWork=r.current.alternate,r.finishedLanes=a,gr(r,kn,Qo),_n(r,yt()),null}function If(r,a){var d=je;je|=1;try{return r(a)}finally{je=d,je===0&&(zs=yt()+500,yu&&qi())}}function Dr(r){Ii!==null&&Ii.tag===0&&!(je&6)&&Ts();var a=je;je|=1;var d=Zn.transition,h=qe;try{if(Zn.transition=null,qe=1,r)return r()}finally{qe=h,Zn.transition=d,je=a,!(je&6)&&qi()}}function Mf(){In=vs.current,rt(vs)}function _r(r,a){r.finishedWork=null,r.finishedLanes=0;var d=r.timeoutHandle;if(d!==-1&&(r.timeoutHandle=-1,zz(d)),St!==null)for(d=St.return;d!==null;){var h=d;switch(uf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&eu();break;case 3:Ls(),rt(wn),rt(en),Af();break;case 5:wf(h);break;case 4:Ls();break;case 13:rt(pt);break;case 19:rt(pt);break;case 10:gf(h.type._context);break;case 22:case 23:Mf()}d=d.return}if(Ft=r,St=r=ji(r.current,null),Gt=In=a,Pt=0,_l=null,Sf=Su=Er=0,kn=ol=null,wr!==null){for(a=0;a<wr.length;a++)if(d=wr[a],h=d.interleaved,h!==null){d.interleaved=null;var g=h.next,k=d.pending;if(k!==null){var w=k.next;k.next=g,h.next=w}d.pending=h}wr=null}return r}function k5(r,a){do{var d=St;try{if(mf(),Ld.current=cu,lu){for(var h=mt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}lu=!1}if(xr=0,jt=Nt=mt=null,tl=!1,bl=0,Df.current=null,d===null||d.return===null){Pt=1,_l=a,St=null;break}e:{var k=r,w=d.return,C=d,b=a;if(a=Gt,C.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var y=b,T=C,E=T.tag;if(!(T.mode&1)&&(E===0||E===11||E===15)){var _=T.alternate;_?(T.updateQueue=_.updateQueue,T.memoizedState=_.memoizedState,T.lanes=_.lanes):(T.updateQueue=null,T.memoizedState=null)}var D=xx(w);if(D!==null){D.flags&=-257,Ex(D,w,C,k,a),D.mode&1&&yx(k,y,a),a=D,b=y;var M=a.updateQueue;if(M===null){var B=new Set;B.add(b),a.updateQueue=B}else M.add(b);break e}else{if(!(a&1)){yx(k,y,a),Bf();break e}b=Error(te(426))}}else if(ct&&C.mode&1){var j=xx(w);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ex(j,w,C,k,a),hf(Os(b,C));break e}}k=b=Os(b,C),Pt!==4&&(Pt=2),ol===null?ol=[k]:ol.push(k),k=w;do{switch(k.tag){case 3:k.flags|=65536,a&=-a,k.lanes|=a;var P=e5(k,b,a);kx(k,P);break e;case 1:C=b;var N=k.type,R=k.stateNode;if(!(k.flags&128)&&(typeof N.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(zi===null||!zi.has(R)))){k.flags|=65536,a&=-a,k.lanes|=a;var U=t5(k,C,a);kx(k,U);break e}}k=k.return}while(k!==null)}A5(d)}catch(q){a=q,St===d&&d!==null&&(St=d=d.return);continue}break}while(!0)}function b5(){var r=du.current;return du.current=cu,r===null?cu:r}function Bf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(Er&268435455)&&!(Su&268435455)||Si(Ft,Gt)}function pu(r,a){var d=je;je|=2;var h=b5();(Ft!==r||Gt!==a)&&(Qo=null,_r(r,a));do try{lR();break}catch(g){k5(r,g)}while(!0);if(mf(),je=d,du.current=h,St!==null)throw Error(te(261));return Ft=null,Gt=0,Pt}function lR(){for(;St!==null;)w5(St)}function cR(){for(;St!==null&&!P7();)w5(St)}function w5(r){var a=C5(r.alternate,r,In);r.memoizedProps=r.pendingProps,a===null?A5(r):St=a,Df.current=null}function A5(r){var a=r;do{var d=a.alternate;if(r=a.return,a.flags&32768){if(d=nR(d,a),d!==null){d.flags&=32767,St=d;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Pt=6,St=null;return}}else if(d=tR(d,a,In),d!==null){St=d;return}if(a=a.sibling,a!==null){St=a;return}St=a=r}while(a!==null);Pt===0&&(Pt=5)}function gr(r,a,d){var h=qe,g=Zn.transition;try{Zn.transition=null,qe=1,dR(r,a,d,h)}finally{Zn.transition=g,qe=h}return null}function dR(r,a,d,h){do Ts();while(Ii!==null);if(je&6)throw Error(te(327));d=r.finishedWork;var g=r.finishedLanes;if(d===null)return null;if(r.finishedWork=null,r.finishedLanes=0,d===r.current)throw Error(te(177));r.callbackNode=null,r.callbackPriority=0;var k=d.lanes|d.childLanes;if(W7(r,k),r===Ft&&(St=Ft=null,Gt=0),!(d.subtreeFlags&2064)&&!(d.flags&2064)||vd||(vd=!0,v5(Kd,function(){return Ts(),null})),k=(d.flags&15990)!==0,d.subtreeFlags&15990||k){k=Zn.transition,Zn.transition=null;var w=qe;qe=1;var C=je;je|=4,Df.current=null,iR(r,d),m5(d,r),Iz(ag),Qd=!!sg,ag=sg=null,r.current=d,rR(d),L7(),je=C,qe=w,Zn.transition=k}else r.current=d;if(vd&&(vd=!1,Ii=r,hu=g),k=r.pendingLanes,k===0&&(zi=null),R7(d.stateNode),_n(r,yt()),a!==null)for(h=r.onRecoverableError,d=0;d<a.length;d++)g=a[d],h(g.value,{componentStack:g.stack,digest:g.digest});if(uu)throw uu=!1,r=Dg,Dg=null,r;return hu&1&&r.tag!==0&&Ts(),k=r.pendingLanes,k&1?r===Sg?il++:(il=0,Sg=r):il=0,qi(),null}function Ts(){if(Ii!==null){var r=X2(hu),a=Zn.transition,d=qe;try{if(Zn.transition=null,qe=16>r?16:r,Ii===null)var h=!1;else{if(r=Ii,Ii=null,hu=0,je&6)throw Error(te(331));var g=je;for(je|=4,ce=r.current;ce!==null;){var k=ce,w=k.child;if(ce.flags&16){var C=k.deletions;if(C!==null){for(var b=0;b<C.length;b++){var y=C[b];for(ce=y;ce!==null;){var T=ce;switch(T.tag){case 0:case 11:case 15:nl(8,T,k)}var E=T.child;if(E!==null)E.return=T,ce=E;else for(;ce!==null;){T=ce;var _=T.sibling,D=T.return;if(u5(T),T===y){ce=null;break}if(_!==null){_.return=D,ce=_;break}ce=D}}}var M=k.alternate;if(M!==null){var B=M.child;if(B!==null){M.child=null;do{var j=B.sibling;B.sibling=null,B=j}while(B!==null)}}ce=k}}if(k.subtreeFlags&2064&&w!==null)w.return=k,ce=w;else e:for(;ce!==null;){if(k=ce,k.flags&2048)switch(k.tag){case 0:case 11:case 15:nl(9,k,k.return)}var P=k.sibling;if(P!==null){P.return=k.return,ce=P;break e}ce=k.return}}var N=r.current;for(ce=N;ce!==null;){w=ce;var R=w.child;if(w.subtreeFlags&2064&&R!==null)R.return=w,ce=R;else e:for(w=N;ce!==null;){if(C=ce,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Du(9,C)}}catch(q){bt(C,C.return,q)}if(C===w){ce=null;break e}var U=C.sibling;if(U!==null){U.return=C.return,ce=U;break e}ce=C.return}}if(je=g,qi(),Oo&&typeof Oo.onPostCommitFiberRoot=="function")try{Oo.onPostCommitFiberRoot(wu,r)}catch{}h=!0}return h}finally{qe=d,Zn.transition=a}}return!1}function jx(r,a,d){a=Os(d,a),a=e5(r,a,1),r=Oi(r,a,1),a=sn(),r!==null&&(El(r,1,a),_n(r,a))}function bt(r,a,d){if(r.tag===3)jx(r,r,d);else for(;a!==null;){if(a.tag===3){jx(a,r,d);break}else if(a.tag===1){var h=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(zi===null||!zi.has(h))){r=Os(d,r),r=t5(a,r,1),a=Oi(a,r,1),r=sn(),a!==null&&(El(a,1,r),_n(a,r));break}}a=a.return}}function uR(r,a,d){var h=r.pingCache;h!==null&&h.delete(a),a=sn(),r.pingedLanes|=r.suspendedLanes&d,Ft===r&&(Gt&d)===d&&(Pt===4||Pt===3&&(Gt&130023424)===Gt&&500>yt()-Tf?_r(r,0):Sf|=d),_n(r,a)}function _5(r,a){a===0&&(r.mode&1?(a=pd,pd<<=1,!(pd&130023424)&&(pd=4194304)):a=1);var d=sn();r=ii(r,a),r!==null&&(El(r,a,d),_n(r,d))}function hR(r){var a=r.memoizedState,d=0;a!==null&&(d=a.retryLane),_5(r,d)}function pR(r,a){var d=0;switch(r.tag){case 13:var h=r.stateNode,g=r.memoizedState;g!==null&&(d=g.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(te(314))}h!==null&&h.delete(a),_5(r,d)}var C5;C5=function(r,a,d){if(r!==null)if(r.memoizedProps!==a.pendingProps||wn.current)bn=!0;else{if(!(r.lanes&d)&&!(a.flags&128))return bn=!1,eR(r,a,d);bn=!!(r.flags&131072)}else bn=!1,ct&&a.flags&1048576&&xE(a,ou,a.index);switch(a.lanes=0,a.tag){case 2:var h=a.type;zd(r,a),r=a.pendingProps;var g=Bs(a,en.current);Ss(a,d),g=Cf(null,a,h,r,g,d);var k=vf();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,An(h)?(k=!0,tu(a)):k=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,kf(a),g.updater=xu,a.stateNode=g,g._reactInternals=a,fg(a,h,r,d),a=wg(null,a,h,!0,k,d)):(a.tag=0,ct&&k&&df(a),rn(null,a,g,d),a=a.child),a;case 16:h=a.elementType;e:{switch(zd(r,a),r=a.pendingProps,g=h._init,h=g(h._payload),a.type=h,g=a.tag=gR(h),r=ko(h,r),g){case 0:a=bg(null,a,h,r,d);break e;case 1:a=Tx(null,a,h,r,d);break e;case 11:a=Dx(null,a,h,r,d);break e;case 14:a=Sx(null,a,h,ko(h.type,r),d);break e}throw Error(te(306,h,""))}return a;case 0:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:ko(h,g),bg(r,a,h,g,d);case 1:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:ko(h,g),Tx(r,a,h,g,d);case 3:e:{if(r5(a),r===null)throw Error(te(387));h=a.pendingProps,k=a.memoizedState,g=k.element,TE(r,a),su(a,h,null,d);var w=a.memoizedState;if(h=w.element,k.isDehydrated)if(k={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},a.updateQueue.baseState=k,a.memoizedState=k,a.flags&256){g=Os(Error(te(423)),a),a=Ix(r,a,h,d,g);break e}else if(h!==g){g=Os(Error(te(424)),a),a=Ix(r,a,h,d,g);break e}else for(Mn=Li(a.stateNode.containerInfo.firstChild),Bn=a,ct=!0,wo=null,d=NE(a,null,h,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Ns(),h===g){a=ri(r,a,d);break e}rn(r,a,h,d)}a=a.child}return a;case 5:return PE(a),r===null&&pg(a),h=a.type,g=a.pendingProps,k=r!==null?r.memoizedProps:null,w=g.children,lg(h,g)?w=null:k!==null&&lg(h,k)&&(a.flags|=32),i5(r,a),rn(r,a,w,d),a.child;case 6:return r===null&&pg(a),null;case 13:return s5(r,a,d);case 4:return bf(a,a.stateNode.containerInfo),h=a.pendingProps,r===null?a.child=Ps(a,null,h,d):rn(r,a,h,d),a.child;case 11:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:ko(h,g),Dx(r,a,h,g,d);case 7:return rn(r,a,a.pendingProps,d),a.child;case 8:return rn(r,a,a.pendingProps.children,d),a.child;case 12:return rn(r,a,a.pendingProps.children,d),a.child;case 10:e:{if(h=a.type._context,g=a.pendingProps,k=a.memoizedProps,w=g.value,et(iu,h._currentValue),h._currentValue=w,k!==null)if(Co(k.value,w)){if(k.children===g.children&&!wn.current){a=ri(r,a,d);break e}}else for(k=a.child,k!==null&&(k.return=a);k!==null;){var C=k.dependencies;if(C!==null){w=k.child;for(var b=C.firstContext;b!==null;){if(b.context===h){if(k.tag===1){b=ei(-1,d&-d),b.tag=2;var y=k.updateQueue;if(y!==null){y=y.shared;var T=y.pending;T===null?b.next=b:(b.next=T.next,T.next=b),y.pending=b}}k.lanes|=d,b=k.alternate,b!==null&&(b.lanes|=d),mg(k.return,d,a),C.lanes|=d;break}b=b.next}}else if(k.tag===10)w=k.type===a.type?null:k.child;else if(k.tag===18){if(w=k.return,w===null)throw Error(te(341));w.lanes|=d,C=w.alternate,C!==null&&(C.lanes|=d),mg(w,d,a),w=k.sibling}else w=k.child;if(w!==null)w.return=k;else for(w=k;w!==null;){if(w===a){w=null;break}if(k=w.sibling,k!==null){k.return=w.return,w=k;break}w=w.return}k=w}rn(r,a,g.children,d),a=a.child}return a;case 9:return g=a.type,h=a.pendingProps.children,Ss(a,d),g=Xn(g),h=h(g),a.flags|=1,rn(r,a,h,d),a.child;case 14:return h=a.type,g=ko(h,a.pendingProps),g=ko(h.type,g),Sx(r,a,h,g,d);case 15:return n5(r,a,a.type,a.pendingProps,d);case 17:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:ko(h,g),zd(r,a),a.tag=1,An(h)?(r=!0,tu(a)):r=!1,Ss(a,d),ME(a,h,g),fg(a,h,g,d),wg(null,a,h,!0,r,d);case 19:return a5(r,a,d);case 22:return o5(r,a,d)}throw Error(te(156,a.tag))};function v5(r,a){return Y2(r,a)}function mR(r,a,d,h){this.tag=r,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(r,a,d,h){return new mR(r,a,d,h)}function Nf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function gR(r){if(typeof r=="function")return Nf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Zg)return 11;if(r===Jg)return 14}return 2}function ji(r,a){var d=r.alternate;return d===null?(d=Qn(r.tag,a,r.key,r.mode),d.elementType=r.elementType,d.type=r.type,d.stateNode=r.stateNode,d.alternate=r,r.alternate=d):(d.pendingProps=a,d.type=r.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=r.flags&14680064,d.childLanes=r.childLanes,d.lanes=r.lanes,d.child=r.child,d.memoizedProps=r.memoizedProps,d.memoizedState=r.memoizedState,d.updateQueue=r.updateQueue,a=r.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=r.sibling,d.index=r.index,d.ref=r.ref,d}function Fd(r,a,d,h,g,k){var w=2;if(h=r,typeof r=="function")Nf(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case ps:return Cr(d.children,g,k,a);case Qg:w=8,g|=8;break;case Fm:return r=Qn(12,d,a,g|2),r.elementType=Fm,r.lanes=k,r;case Vm:return r=Qn(13,d,a,g),r.elementType=Vm,r.lanes=k,r;case Um:return r=Qn(19,d,a,g),r.elementType=Um,r.lanes=k,r;case B2:return Tu(d,g,k,a);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case I2:w=10;break e;case M2:w=9;break e;case Zg:w=11;break e;case Jg:w=14;break e;case xi:w=16,h=null;break e}throw Error(te(130,r==null?r:typeof r,""))}return a=Qn(w,d,a,g),a.elementType=r,a.type=h,a.lanes=k,a}function Cr(r,a,d,h){return r=Qn(7,r,h,a),r.lanes=d,r}function Tu(r,a,d,h){return r=Qn(22,r,h,a),r.elementType=B2,r.lanes=d,r.stateNode={isHidden:!1},r}function Em(r,a,d){return r=Qn(6,r,null,a),r.lanes=d,r}function Dm(r,a,d){return a=Qn(4,r.children!==null?r.children:[],r.key,a),a.lanes=d,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}function fR(r,a,d,h,g){this.tag=a,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=am(0),this.expirationTimes=am(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=am(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Pf(r,a,d,h,g,k,w,C,b){return r=new fR(r,a,d,C,b),a===1?(a=1,k===!0&&(a|=8)):a=0,k=Qn(3,null,null,a),r.current=k,k.stateNode=r,k.memoizedState={element:h,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(k),r}function kR(r,a,d){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:h==null?null:""+h,children:r,containerInfo:a,implementation:d}}function y5(r){if(!r)return Ui;r=r._reactInternals;e:{if(Tr(r)!==r||r.tag!==1)throw Error(te(170));var a=r;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(An(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(te(171))}if(r.tag===1){var d=r.type;if(An(d))return vE(r,d,a)}return a}function x5(r,a,d,h,g,k,w,C,b){return r=Pf(d,h,!0,r,g,k,w,C,b),r.context=y5(null),d=r.current,h=sn(),g=Ri(d),k=ei(h,g),k.callback=a??null,Oi(d,k,g),r.current.lanes=g,El(r,g,h),_n(r,h),r}function Iu(r,a,d,h){var g=a.current,k=sn(),w=Ri(g);return d=y5(d),a.context===null?a.context=d:a.pendingContext=d,a=ei(k,w),a.payload={element:r},h=h===void 0?null:h,h!==null&&(a.callback=h),r=Oi(g,a,w),r!==null&&(_o(r,g,w,k),Pd(r,g,w)),w}function mu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Fx(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var d=r.retryLane;r.retryLane=d!==0&&d<a?d:a}}function Lf(r,a){Fx(r,a),(r=r.alternate)&&Fx(r,a)}function bR(){return null}var E5=typeof reportError=="function"?reportError:function(r){console.error(r)};function Of(r){this._internalRoot=r}Mu.prototype.render=Of.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(te(409));Iu(r,a,null,null)};Mu.prototype.unmount=Of.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;Dr(function(){Iu(null,r,null,null)}),a[oi]=null}};function Mu(r){this._internalRoot=r}Mu.prototype.unstable_scheduleHydration=function(r){if(r){var a=nE();r={blockedOn:null,target:r,priority:a};for(var d=0;d<Di.length&&a!==0&&a<Di[d].priority;d++);Di.splice(d,0,r),d===0&&iE(r)}};function zf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Bu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Vx(){}function wR(r,a,d,h,g){if(g){if(typeof h=="function"){var k=h;h=function(){var y=mu(w);k.call(y)}}var w=x5(a,h,r,0,null,!1,!1,"",Vx);return r._reactRootContainer=w,r[oi]=w.current,pl(r.nodeType===8?r.parentNode:r),Dr(),w}for(;g=r.lastChild;)r.removeChild(g);if(typeof h=="function"){var C=h;h=function(){var y=mu(b);C.call(y)}}var b=Pf(r,0,!1,null,null,!1,!1,"",Vx);return r._reactRootContainer=b,r[oi]=b.current,pl(r.nodeType===8?r.parentNode:r),Dr(function(){Iu(a,b,d,h)}),b}function Nu(r,a,d,h,g){var k=d._reactRootContainer;if(k){var w=k;if(typeof g=="function"){var C=g;g=function(){var b=mu(w);C.call(b)}}Iu(a,w,r,g)}else w=wR(d,a,r,g,h);return mu(w)}eE=function(r){switch(r.tag){case 3:var a=r.stateNode;if(a.current.memoizedState.isDehydrated){var d=$a(a.pendingLanes);d!==0&&(tf(a,d|1),_n(a,yt()),!(je&6)&&(zs=yt()+500,qi()))}break;case 13:Dr(function(){var h=ii(r,1);if(h!==null){var g=sn();_o(h,r,1,g)}}),Lf(r,1)}};nf=function(r){if(r.tag===13){var a=ii(r,134217728);if(a!==null){var d=sn();_o(a,r,134217728,d)}Lf(r,134217728)}};tE=function(r){if(r.tag===13){var a=Ri(r),d=ii(r,a);if(d!==null){var h=sn();_o(d,r,a,h)}Lf(r,a)}};nE=function(){return qe};oE=function(r,a){var d=qe;try{return qe=r,a()}finally{qe=d}};Jm=function(r,a,d){switch(a){case"input":if(qm(r,d),a=d.name,d.type==="radio"&&a!=null){for(d=r;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var h=d[a];if(h!==r&&h.form===r.form){var g=vu(h);if(!g)throw Error(te(90));P2(h),qm(h,g)}}}break;case"textarea":O2(r,d);break;case"select":a=d.value,a!=null&&ys(r,!!d.multiple,a,!1)}};H2=If;W2=Dr;var AR={usingClientEntryPoint:!1,Events:[Sl,ks,vu,V2,U2,If]},Fa={findFiberByHostInstance:br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_R={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:si.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=$2(r),r===null?null:r.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||bR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yd.isDisabled&&yd.supportsFiber)try{wu=yd.inject(_R),Oo=yd}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AR;Ln.createPortal=function(r,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(a))throw Error(te(200));return kR(r,a,null,d)};Ln.createRoot=function(r,a){if(!zf(r))throw Error(te(299));var d=!1,h="",g=E5;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=Pf(r,1,!1,null,null,d,!1,h,g),r[oi]=a.current,pl(r.nodeType===8?r.parentNode:r),new Of(a)};Ln.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(te(188)):(r=Object.keys(r).join(","),Error(te(268,r)));return r=$2(a),r=r===null?null:r.stateNode,r};Ln.flushSync=function(r){return Dr(r)};Ln.hydrate=function(r,a,d){if(!Bu(a))throw Error(te(200));return Nu(null,r,a,!0,d)};Ln.hydrateRoot=function(r,a,d){if(!zf(r))throw Error(te(405));var h=d!=null&&d.hydratedSources||null,g=!1,k="",w=E5;if(d!=null&&(d.unstable_strictMode===!0&&(g=!0),d.identifierPrefix!==void 0&&(k=d.identifierPrefix),d.onRecoverableError!==void 0&&(w=d.onRecoverableError)),a=x5(a,null,r,1,d??null,g,!1,k,w),r[oi]=a.current,pl(r),h)for(r=0;r<h.length;r++)d=h[r],g=d._getVersion,g=g(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,g]:a.mutableSourceEagerHydrationData.push(d,g);return new Mu(a)};Ln.render=function(r,a,d){if(!Bu(a))throw Error(te(200));return Nu(null,r,a,!1,d)};Ln.unmountComponentAtNode=function(r){if(!Bu(r))throw Error(te(40));return r._reactRootContainer?(Dr(function(){Nu(null,null,r,!1,function(){r._reactRootContainer=null,r[oi]=null})}),!0):!1};Ln.unstable_batchedUpdates=If;Ln.unstable_renderSubtreeIntoContainer=function(r,a,d,h){if(!Bu(d))throw Error(te(200));if(r==null||r._reactInternals===void 0)throw Error(te(38));return Nu(r,a,d,!1,h)};Ln.version="18.2.0-next-9e3b772b8-20220608";function D5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D5)}catch(r){console.error(r)}}D5(),x2.exports=Ln;var S5=x2.exports;const CR=Ug(S5);var Ux=S5;Rm.createRoot=Ux.createRoot,Rm.hydrateRoot=Ux.hydrateRoot;var gu={exports:{}};gu.exports;(function(r,a){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,h){r.exports=h()}(self,()=>(()=>{var d={9246:(w,C,b)=>{const y=b(6931),T={};for(const _ of Object.keys(y))T[y[_]]=_;const E={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};w.exports=E;for(const _ of Object.keys(E)){if(!("channels"in E[_]))throw new Error("missing channels property: "+_);if(!("labels"in E[_]))throw new Error("missing channel labels property: "+_);if(E[_].labels.length!==E[_].channels)throw new Error("channel and label counts mismatch: "+_);const{channels:D,labels:M}=E[_];delete E[_].channels,delete E[_].labels,Object.defineProperty(E[_],"channels",{value:D}),Object.defineProperty(E[_],"labels",{value:M})}E.rgb.hsl=function(_){const D=_[0]/255,M=_[1]/255,B=_[2]/255,j=Math.min(D,M,B),P=Math.max(D,M,B),N=P-j;let R,U;P===j?R=0:D===P?R=(M-B)/N:M===P?R=2+(B-D)/N:B===P&&(R=4+(D-M)/N),R=Math.min(60*R,360),R<0&&(R+=360);const q=(j+P)/2;return U=P===j?0:q<=.5?N/(P+j):N/(2-P-j),[R,100*U,100*q]},E.rgb.hsv=function(_){let D,M,B,j,P;const N=_[0]/255,R=_[1]/255,U=_[2]/255,q=Math.max(N,R,U),X=q-Math.min(N,R,U),$=function(J){return(q-J)/6/X+.5};return X===0?(j=0,P=0):(P=X/q,D=$(N),M=$(R),B=$(U),N===q?j=B-M:R===q?j=.3333333333333333+D-B:U===q&&(j=.6666666666666666+M-D),j<0?j+=1:j>1&&(j-=1)),[360*j,100*P,100*q]},E.rgb.hwb=function(_){const D=_[0],M=_[1];let B=_[2];const j=E.rgb.hsl(_)[0],P=1/255*Math.min(D,Math.min(M,B));return B=1-.00392156862745098*Math.max(D,Math.max(M,B)),[j,100*P,100*B]},E.rgb.cmyk=function(_){const D=_[0]/255,M=_[1]/255,B=_[2]/255,j=Math.min(1-D,1-M,1-B);return[100*((1-D-j)/(1-j)||0),100*((1-M-j)/(1-j)||0),100*((1-B-j)/(1-j)||0),100*j]},E.rgb.keyword=function(_){const D=T[_];if(D)return D;let M,B=1/0;for(const N of Object.keys(y)){const R=y[N],U=(P=R,((j=_)[0]-P[0])**2+(j[1]-P[1])**2+(j[2]-P[2])**2);U<B&&(B=U,M=N)}var j,P;return M},E.keyword.rgb=function(_){return y[_]},E.rgb.xyz=function(_){let D=_[0]/255,M=_[1]/255,B=_[2]/255;return D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,B=B>.04045?((B+.055)/1.055)**2.4:B/12.92,[100*(.4124*D+.3576*M+.1805*B),100*(.2126*D+.7152*M+.0722*B),100*(.0193*D+.1192*M+.9505*B)]},E.rgb.lab=function(_){const D=E.rgb.xyz(_);let M=D[0],B=D[1],j=D[2];return M/=95.047,B/=100,j/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,j=j>.008856?j**.3333333333333333:7.787*j+.13793103448275862,[116*B-16,500*(M-B),200*(B-j)]},E.hsl.rgb=function(_){const D=_[0]/360,M=_[1]/100,B=_[2]/100;let j,P,N;if(M===0)return N=255*B,[N,N,N];j=B<.5?B*(1+M):B+M-B*M;const R=2*B-j,U=[0,0,0];for(let q=0;q<3;q++)P=D+.3333333333333333*-(q-1),P<0&&P++,P>1&&P--,N=6*P<1?R+6*(j-R)*P:2*P<1?j:3*P<2?R+(j-R)*(.6666666666666666-P)*6:R,U[q]=255*N;return U},E.hsl.hsv=function(_){const D=_[0];let M=_[1]/100,B=_[2]/100,j=M;const P=Math.max(B,.01);return B*=2,M*=B<=1?B:2-B,j*=P<=1?P:2-P,[D,100*(B===0?2*j/(P+j):2*M/(B+M)),100*((B+M)/2)]},E.hsv.rgb=function(_){const D=_[0]/60,M=_[1]/100;let B=_[2]/100;const j=Math.floor(D)%6,P=D-Math.floor(D),N=255*B*(1-M),R=255*B*(1-M*P),U=255*B*(1-M*(1-P));switch(B*=255,j){case 0:return[B,U,N];case 1:return[R,B,N];case 2:return[N,B,U];case 3:return[N,R,B];case 4:return[U,N,B];case 5:return[B,N,R]}},E.hsv.hsl=function(_){const D=_[0],M=_[1]/100,B=_[2]/100,j=Math.max(B,.01);let P,N;N=(2-M)*B;const R=(2-M)*j;return P=M*j,P/=R<=1?R:2-R,P=P||0,N/=2,[D,100*P,100*N]},E.hwb.rgb=function(_){const D=_[0]/360;let M=_[1]/100,B=_[2]/100;const j=M+B;let P;j>1&&(M/=j,B/=j);const N=Math.floor(6*D),R=1-B;P=6*D-N,1&N&&(P=1-P);const U=M+P*(R-M);let q,X,$;switch(N){default:case 6:case 0:q=R,X=U,$=M;break;case 1:q=U,X=R,$=M;break;case 2:q=M,X=R,$=U;break;case 3:q=M,X=U,$=R;break;case 4:q=U,X=M,$=R;break;case 5:q=R,X=M,$=U}return[255*q,255*X,255*$]},E.cmyk.rgb=function(_){const D=_[0]/100,M=_[1]/100,B=_[2]/100,j=_[3]/100;return[255*(1-Math.min(1,D*(1-j)+j)),255*(1-Math.min(1,M*(1-j)+j)),255*(1-Math.min(1,B*(1-j)+j))]},E.xyz.rgb=function(_){const D=_[0]/100,M=_[1]/100,B=_[2]/100;let j,P,N;return j=3.2406*D+-1.5372*M+-.4986*B,P=-.9689*D+1.8758*M+.0415*B,N=.0557*D+-.204*M+1.057*B,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,j=Math.min(Math.max(0,j),1),P=Math.min(Math.max(0,P),1),N=Math.min(Math.max(0,N),1),[255*j,255*P,255*N]},E.xyz.lab=function(_){let D=_[0],M=_[1],B=_[2];return D/=95.047,M/=100,B/=108.883,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,[116*M-16,500*(D-M),200*(M-B)]},E.lab.xyz=function(_){let D,M,B;M=(_[0]+16)/116,D=_[1]/500+M,B=M-_[2]/200;const j=M**3,P=D**3,N=B**3;return M=j>.008856?j:(M-.13793103448275862)/7.787,D=P>.008856?P:(D-.13793103448275862)/7.787,B=N>.008856?N:(B-.13793103448275862)/7.787,D*=95.047,M*=100,B*=108.883,[D,M,B]},E.lab.lch=function(_){const D=_[0],M=_[1],B=_[2];let j;return j=360*Math.atan2(B,M)/2/Math.PI,j<0&&(j+=360),[D,Math.sqrt(M*M+B*B),j]},E.lch.lab=function(_){const D=_[0],M=_[1],B=_[2]/360*2*Math.PI;return[D,M*Math.cos(B),M*Math.sin(B)]},E.rgb.ansi16=function(_,D=null){const[M,B,j]=_;let P=D===null?E.rgb.hsv(_)[2]:D;if(P=Math.round(P/50),P===0)return 30;let N=30+(Math.round(j/255)<<2|Math.round(B/255)<<1|Math.round(M/255));return P===2&&(N+=60),N},E.hsv.ansi16=function(_){return E.rgb.ansi16(E.hsv.rgb(_),_[2])},E.rgb.ansi256=function(_){const D=_[0],M=_[1],B=_[2];return D===M&&M===B?D<8?16:D>248?231:Math.round((D-8)/247*24)+232:16+36*Math.round(D/255*5)+6*Math.round(M/255*5)+Math.round(B/255*5)},E.ansi16.rgb=function(_){let D=_%10;if(D===0||D===7)return _>50&&(D+=3.5),D=D/10.5*255,[D,D,D];const M=.5*(1+~~(_>50));return[(1&D)*M*255,(D>>1&1)*M*255,(D>>2&1)*M*255]},E.ansi256.rgb=function(_){if(_>=232){const M=10*(_-232)+8;return[M,M,M]}let D;return _-=16,[Math.floor(_/36)/5*255,Math.floor((D=_%36)/6)/5*255,D%6/5*255]},E.rgb.hex=function(_){const D=(((255&Math.round(_[0]))<<16)+((255&Math.round(_[1]))<<8)+(255&Math.round(_[2]))).toString(16).toUpperCase();return"000000".substring(D.length)+D},E.hex.rgb=function(_){const D=_.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!D)return[0,0,0];let M=D[0];D[0].length===3&&(M=M.split("").map(j=>j+j).join(""));const B=parseInt(M,16);return[B>>16&255,B>>8&255,255&B]},E.rgb.hcg=function(_){const D=_[0]/255,M=_[1]/255,B=_[2]/255,j=Math.max(Math.max(D,M),B),P=Math.min(Math.min(D,M),B),N=j-P;let R,U;return R=N<1?P/(1-N):0,U=N<=0?0:j===D?(M-B)/N%6:j===M?2+(B-D)/N:4+(D-M)/N,U/=6,U%=1,[360*U,100*N,100*R]},E.hsl.hcg=function(_){const D=_[1]/100,M=_[2]/100,B=M<.5?2*D*M:2*D*(1-M);let j=0;return B<1&&(j=(M-.5*B)/(1-B)),[_[0],100*B,100*j]},E.hsv.hcg=function(_){const D=_[1]/100,M=_[2]/100,B=D*M;let j=0;return B<1&&(j=(M-B)/(1-B)),[_[0],100*B,100*j]},E.hcg.rgb=function(_){const D=_[0]/360,M=_[1]/100,B=_[2]/100;if(M===0)return[255*B,255*B,255*B];const j=[0,0,0],P=D%1*6,N=P%1,R=1-N;let U=0;switch(Math.floor(P)){case 0:j[0]=1,j[1]=N,j[2]=0;break;case 1:j[0]=R,j[1]=1,j[2]=0;break;case 2:j[0]=0,j[1]=1,j[2]=N;break;case 3:j[0]=0,j[1]=R,j[2]=1;break;case 4:j[0]=N,j[1]=0,j[2]=1;break;default:j[0]=1,j[1]=0,j[2]=R}return U=(1-M)*B,[255*(M*j[0]+U),255*(M*j[1]+U),255*(M*j[2]+U)]},E.hcg.hsv=function(_){const D=_[1]/100,M=D+_[2]/100*(1-D);let B=0;return M>0&&(B=D/M),[_[0],100*B,100*M]},E.hcg.hsl=function(_){const D=_[1]/100,M=_[2]/100*(1-D)+.5*D;let B=0;return M>0&&M<.5?B=D/(2*M):M>=.5&&M<1&&(B=D/(2*(1-M))),[_[0],100*B,100*M]},E.hcg.hwb=function(_){const D=_[1]/100,M=D+_[2]/100*(1-D);return[_[0],100*(M-D),100*(1-M)]},E.hwb.hcg=function(_){const D=_[1]/100,M=1-_[2]/100,B=M-D;let j=0;return B<1&&(j=(M-B)/(1-B)),[_[0],100*B,100*j]},E.apple.rgb=function(_){return[_[0]/65535*255,_[1]/65535*255,_[2]/65535*255]},E.rgb.apple=function(_){return[_[0]/255*65535,_[1]/255*65535,_[2]/255*65535]},E.gray.rgb=function(_){return[_[0]/100*255,_[0]/100*255,_[0]/100*255]},E.gray.hsl=function(_){return[0,0,_[0]]},E.gray.hsv=E.gray.hsl,E.gray.hwb=function(_){return[0,100,_[0]]},E.gray.cmyk=function(_){return[0,0,0,_[0]]},E.gray.lab=function(_){return[_[0],0,0]},E.gray.hex=function(_){const D=255&Math.round(_[0]/100*255),M=((D<<16)+(D<<8)+D).toString(16).toUpperCase();return"000000".substring(M.length)+M},E.rgb.gray=function(_){return[(_[0]+_[1]+_[2])/3/255*100]}},9047:(w,C,b)=>{const y=b(9246),T=b(802),E={};Object.keys(y).forEach(_=>{E[_]={},Object.defineProperty(E[_],"channels",{value:y[_].channels}),Object.defineProperty(E[_],"labels",{value:y[_].labels});const D=T(_);Object.keys(D).forEach(M=>{const B=D[M];E[_][M]=function(j){const P=function(...N){const R=N[0];if(R==null)return R;R.length>1&&(N=R);const U=j(N);if(typeof U=="object")for(let q=U.length,X=0;X<q;X++)U[X]=Math.round(U[X]);return U};return"conversion"in j&&(P.conversion=j.conversion),P}(B),E[_][M].raw=function(j){const P=function(...N){const R=N[0];return R==null?R:(R.length>1&&(N=R),j(N))};return"conversion"in j&&(P.conversion=j.conversion),P}(B)})}),w.exports=E},802:(w,C,b)=>{const y=b(9246);function T(D){const M=function(){const j={},P=Object.keys(y);for(let N=P.length,R=0;R<N;R++)j[P[R]]={distance:-1,parent:null};return j}(),B=[D];for(M[D].distance=0;B.length;){const j=B.pop(),P=Object.keys(y[j]);for(let N=P.length,R=0;R<N;R++){const U=P[R],q=M[U];q.distance===-1&&(q.distance=M[j].distance+1,q.parent=j,B.unshift(U))}}return M}function E(D,M){return function(B){return M(D(B))}}function _(D,M){const B=[M[D].parent,D];let j=y[M[D].parent][D],P=M[D].parent;for(;M[P].parent;)B.unshift(M[P].parent),j=E(y[M[P].parent][P],j),P=M[P].parent;return j.conversion=B,j}w.exports=function(D){const M=T(D),B={},j=Object.keys(M);for(let P=j.length,N=0;N<P;N++){const R=j[N];M[R].parent!==null&&(B[R]=_(R,M))}return B}},6931:w=>{w.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const D=_},8708:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const D=_},1866:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const D=_},7793:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const D=_},7388:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},4098:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const D=_},8264:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=_},6269:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const D=_},265:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const D=_},5247:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const D=_},3350:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const D=_},7378:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const D=_},3469:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const D=_},6386:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},7693:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const D=_},1559:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const D=_},2267:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const D=_},4062:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},7719:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const D=_},8762:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},3817:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},4808:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const D=_},1232:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const D=_},6903:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},9968:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const D=_},7141:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const D=_},8991:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const D=_},70:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const D=_},7048:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},5651:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},5506:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},4043:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},2655:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=_},5032:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=_},2329:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const D=_},4143:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const D=_},8986:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},8795:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const D=_},8137:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const D=_},1623:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},5562:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},8423:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},1801:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const D=_},5727:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},9715:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD2ID,CCxIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF4ID,CA3IA,wIEGE,qCFwIF,CA3IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAsID,CA5GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIpFD,oDJwFC,CAOA,gLK/FD,kCLiGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC9HA,+CDkIA,CC/HC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CD+GA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC9IC,mDDmJD,CChJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CD+HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=_},4391:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=_},25:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const D=_},7317:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const D=_},1905:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const D=_},6309:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const D=_},9819:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},9822:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const D=_},8149:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},3629:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},1792:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},1666:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const D=_},8527:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},1185:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},7913:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const D=_},9529:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const D=_},7621:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},253:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},7801:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const D=_},4962:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},5199:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},497:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const D=_},4:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const D=_},3344:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=_},9481:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const D=_},977:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const D=_},9108:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},3710:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},991:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const D=_},5380:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},8298:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},2722:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},8107:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const D=_},109:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const D=_},1671:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const D=_},2710:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const D=_},9677:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},9205:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDTnC,sCACD,CCUC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const D=_},7676:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const D=_},695:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},4095:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const D=_},8508:(w,C,b)=>{b.d(C,{A:()=>D});var y=b(9372),T=b.n(y),E=b(935),_=b.n(E)()(T());_.push([w.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const D=_},935:w=>{w.exports=function(C){var b=[];return b.toString=function(){return this.map(function(y){var T=C(y);return y[2]?"@media ".concat(y[2]," {").concat(T,"}"):T}).join("")},b.i=function(y,T,E){typeof y=="string"&&(y=[[null,y,""]]);var _={};if(E)for(var D=0;D<this.length;D++){var M=this[D][0];M!=null&&(_[M]=!0)}for(var B=0;B<y.length;B++){var j=[].concat(y[B]);E&&_[j[0]]||(T&&(j[2]?j[2]="".concat(T," and ").concat(j[2]):j[2]=T),b.push(j))}},b}},9372:w=>{function C(y,T){return function(E){if(Array.isArray(E))return E}(y)||function(E,_){var D=E&&(typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"]);if(D!=null){var M,B,j=[],P=!0,N=!1;try{for(D=D.call(E);!(P=(M=D.next()).done)&&(j.push(M.value),!_||j.length!==_);P=!0);}catch(R){N=!0,B=R}finally{try{P||D.return==null||D.return()}finally{if(N)throw B}}return j}}(y,T)||function(E,_){if(E){if(typeof E=="string")return b(E,_);var D=Object.prototype.toString.call(E).slice(8,-1);if(D==="Object"&&E.constructor&&(D=E.constructor.name),D==="Map"||D==="Set")return Array.from(E);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return b(E,_)}}(y,T)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(y,T){(T==null||T>y.length)&&(T=y.length);for(var E=0,_=new Array(T);E<T;E++)_[E]=y[E];return _}w.exports=function(y){var T=C(y,4),E=T[1],_=T[3];if(!_)return E;if(typeof btoa=="function"){var D=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(D),B="/*# ".concat(M," */"),j=_.sources.map(function(P){return"/*# sourceURL=".concat(_.sourceRoot||"").concat(P," */")});return[E].concat(j).concat([B]).join(`
`)}return[E].join(`
`)}},2591:(w,C,b)=>{var y,T=function(){return y===void 0&&(y=!!(window&&document&&document.all&&!window.atob)),y},E=function(){var $={};return function(J){if($[J]===void 0){var z=document.querySelector(J);if(window.HTMLIFrameElement&&z instanceof window.HTMLIFrameElement)try{z=z.contentDocument.head}catch{z=null}$[J]=z}return $[J]}}(),_=[];function D($){for(var J=-1,z=0;z<_.length;z++)if(_[z].identifier===$){J=z;break}return J}function M($,J){for(var z={},Y=[],fe=0;fe<$.length;fe++){var xe=$[fe],ve=J.base?xe[0]+J.base:xe[0],Te=z[ve]||0,st="".concat(ve," ").concat(Te);z[ve]=Te+1;var tt=D(st),Lt={css:xe[1],media:xe[2],sourceMap:xe[3]};tt!==-1?(_[tt].references++,_[tt].updater(Lt)):_.push({identifier:st,updater:X(Lt,J),references:1}),Y.push(st)}return Y}function B($){var J=document.createElement("style"),z=$.attributes||{};if(z.nonce===void 0){var Y=b.nc;Y&&(z.nonce=Y)}if(Object.keys(z).forEach(function(xe){J.setAttribute(xe,z[xe])}),typeof $.insert=="function")$.insert(J);else{var fe=E($.insert||"head");if(!fe)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");fe.appendChild(J)}return J}var j,P=(j=[],function($,J){return j[$]=J,j.filter(Boolean).join(`
`)});function N($,J,z,Y){var fe=z?"":Y.media?"@media ".concat(Y.media," {").concat(Y.css,"}"):Y.css;if($.styleSheet)$.styleSheet.cssText=P(J,fe);else{var xe=document.createTextNode(fe),ve=$.childNodes;ve[J]&&$.removeChild(ve[J]),ve.length?$.insertBefore(xe,ve[J]):$.appendChild(xe)}}function R($,J,z){var Y=z.css,fe=z.media,xe=z.sourceMap;if(fe?$.setAttribute("media",fe):$.removeAttribute("media"),xe&&typeof btoa<"u"&&(Y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(xe))))," */")),$.styleSheet)$.styleSheet.cssText=Y;else{for(;$.firstChild;)$.removeChild($.firstChild);$.appendChild(document.createTextNode(Y))}}var U=null,q=0;function X($,J){var z,Y,fe;if(J.singleton){var xe=q++;z=U||(U=B(J)),Y=N.bind(null,z,xe,!1),fe=N.bind(null,z,xe,!0)}else z=B(J),Y=R.bind(null,z,J),fe=function(){(function(ve){if(ve.parentNode===null)return!1;ve.parentNode.removeChild(ve)})(z)};return Y($),function(ve){if(ve){if(ve.css===$.css&&ve.media===$.media&&ve.sourceMap===$.sourceMap)return;Y($=ve)}else fe()}}w.exports=function($,J){(J=J||{}).singleton||typeof J.singleton=="boolean"||(J.singleton=T());var z=M($=$||[],J);return function(Y){if(Y=Y||[],Object.prototype.toString.call(Y)==="[object Array]"){for(var fe=0;fe<z.length;fe++){var xe=D(z[fe]);_[xe].references--}for(var ve=M(Y,J),Te=0;Te<z.length;Te++){var st=D(z[Te]);_[st].references===0&&(_[st].updater(),_.splice(st,1))}z=ve}}}}},h={};function g(w){var C=h[w];if(C!==void 0)return C.exports;var b=h[w]={id:w,exports:{}};return d[w](b,b.exports,g),b.exports}g.n=w=>{var C=w&&w.__esModule?()=>w.default:()=>w;return g.d(C,{a:C}),C},g.d=(w,C)=>{for(var b in C)g.o(C,b)&&!g.o(w,b)&&Object.defineProperty(w,b,{enumerable:!0,get:C[b]})},g.o=(w,C)=>Object.prototype.hasOwnProperty.call(w,C),g.nc=void 0;var k={};return(()=>{function w({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(i,s)=>{if(!e())return;const l=typeof s.composedPath=="function"?s.composedPath():[],c=typeof n=="function"?n():n;for(const u of c)if(u.contains(s.target)||l.includes(u))return;t()})}function C(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function b({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}function y({keystrokeHandler:o,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:i}){const s=typeof n=="number"?()=>n:n;function l(p){return m=>{const f=t.find(x=>x.element===e.focusedElement),A=t.getIndex(f),v=p(A,t);t.get(v).focus(),m.stopPropagation(),m.preventDefault()}}function c(p,m){return p===m-1?0:p+1}function u(p,m){return p===0?m-1:p-1}o.set("arrowright",l((p,m)=>i==="rtl"?u(p,m.length):c(p,m.length))),o.set("arrowleft",l((p,m)=>i==="rtl"?c(p,m.length):u(p,m.length))),o.set("arrowup",l((p,m)=>{let f=p-s();return f<0&&(f=p+s()*Math.floor(m.length/s()),f>m.length-1&&(f-=s())),f})),o.set("arrowdown",l((p,m)=>{let f=p+s();return f>m.length-1&&(f=p%s()),f}))}g.d(k,{default:()=>tm});const T=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var E;const _={isMac:D(T),isWindows:(E=T,E.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(T),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(T),isiOS:function(o){return!!o.match(/iphone|ipad/i)||D(o)&&navigator.maxTouchPoints>0}(T),isAndroid:function(o){return o.indexOf("android")>-1}(T),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(T),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function D(o){return o.indexOf("macintosh")>-1}function M(o,e,t,n){t=t||function(u,p){return u===p};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),s=Array.isArray(e)?e:Array.prototype.slice.call(e),l=function(u,p,m){const f=B(u,p,m);if(f===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const A=j(u,f),v=j(p,f),x=B(A,v,m),S=u.length-x,I=p.length-x;return{firstIndex:f,lastIndexOld:S,lastIndexNew:I}}(i,s,t);return n?function(u,p){const{firstIndex:m,lastIndexOld:f,lastIndexNew:A}=u;if(m===-1)return Array(p).fill("equal");let v=[];return m>0&&(v=v.concat(Array(m).fill("equal"))),A-m>0&&(v=v.concat(Array(A-m).fill("insert"))),f-m>0&&(v=v.concat(Array(f-m).fill("delete"))),A<p&&(v=v.concat(Array(p-A).fill("equal"))),v}(l,s.length):function(u,p){const m=[],{firstIndex:f,lastIndexOld:A,lastIndexNew:v}=p;return v-f>0&&m.push({index:f,type:"insert",values:u.slice(f,v)}),A-f>0&&m.push({index:f+(v-f),type:"delete",howMany:A-f}),m}(s,l)}function B(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function j(o,e){return o.slice(e).reverse()}function P(o,e,t){t=t||function(S,I){return S===I};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return P.fastDiff(o,e,t,!0);let s,l;if(i<n){const S=o;o=e,e=S,s="delete",l="insert"}else s="insert",l="delete";const c=o.length,u=e.length,p=u-c,m={},f={};function A(S){const I=(f[S-1]!==void 0?f[S-1]:-1)+1,O=f[S+1]!==void 0?f[S+1]:-1,F=I>O?-1:1;m[S+F]&&(m[S]=m[S+F].slice(0)),m[S]||(m[S]=[]),m[S].push(I>O?s:l);let H=Math.max(I,O),G=H-S;for(;G<c&&H<u&&t(o[G],e[H]);)G++,H++,m[S].push("equal");return H}let v,x=0;do{for(v=-x;v<p;v++)f[v]=A(v);for(v=p+x;v>p;v--)f[v]=A(v);f[p]=A(p),x++}while(f[p]!==u);return m[p].slice(1)}P.fastDiff=M;const N=function(){return function o(){o.called=!0}};class R{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=N(),this.off=N()}}const U=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function q(){const o=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+U[255&o]+U[o>>8&255]+U[o>>16&255]+U[o>>24&255]+U[255&e]+U[e>>8&255]+U[e>>16&255]+U[e>>24&255]+U[255&t]+U[t>>8&255]+U[t>>16&255]+U[t>>24&255]+U[255&n]+U[n>>8&255]+U[n>>16&255]+U[n>>24&255]}const X={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function $(o,e){const t=X.get(e.priority);for(let n=0;n<o.length;n++)if(X.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}const J="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class z extends Error{constructor(e,t,n){super(function(i,s){const l=new WeakSet,c=(m,f)=>{if(typeof f=="object"&&f!==null){if(l.has(f))return`[object ${f.constructor.name}]`;l.add(f)}return f},u=s?` ${JSON.stringify(s,c)}`:"",p=xe(i);return i+u+p}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new z(e.message,t);throw n.stack=e.stack,n}}function Y(o,e){console.warn(...ve(o,e))}function fe(o,e){console.error(...ve(o,e))}function xe(o){return`
Read more: ${J}#error-${o}`}function ve(o,e){const t=xe(o);return e?[o,e,t]:[o,t]}const Te="41.3.1",st=new Date(2024,3,16);if(globalThis.CKEDITOR_VERSION)throw new z("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=Te;const tt=Symbol("listeningTo"),Lt=Symbol("emitterId"),ee=Symbol("delegations"),he=ne(Object);function ne(o){return o?class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(s,...l)=>{i||(i=!0,s.off(),t.call(this,s,...l))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let s,l;this[tt]||(this[tt]={});const c=this[tt];ue(e)||me(e);const u=ue(e);(s=c[u])||(s=c[u]={emitter:e,callbacks:{}}),(l=s.callbacks[t])||(l=s.callbacks[t]=[]),l.push(n),function(p,m,f,A,v){m._addEventListener?m._addEventListener(f,A,v):p._addEventListener.call(m,f,A,v)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[tt];let s=e&&ue(e);const l=i&&s?i[s]:void 0,c=l&&t?l.callbacks[t]:void 0;if(!(!i||e&&!l||t&&!c))if(n)tn(this,e,t,n),c.indexOf(n)!==-1&&(c.length===1?delete l.callbacks[t]:tn(this,e,t,n));else if(c){for(;n=c.pop();)tn(this,e,t,n);delete l.callbacks[t]}else if(l){for(t in l.callbacks)this.stopListening(e,t);delete i[s]}else{for(s in i)this.stopListening(i[s].emitter);delete this[tt]}}fire(e,...t){try{const n=e instanceof R?e:new R(this,e),i=n.name;let s=xt(this,i);if(n.path.push(this),s){const c=[n,...t];s=Array.from(s);for(let u=0;u<s.length&&(s[u].callback.apply(this,c),n.off.called&&(delete n.off.called,this._removeEventListener(i,s[u].callback)),!n.stop.called);u++);}const l=this[ee];if(l){const c=l.get(i),u=l.get("*");c&&Ne(c,n,t),u&&Ne(u,n,t)}return n.return}catch(n){z.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[ee]||(this[ee]=new Map),e.forEach(i=>{const s=this[ee].get(i);s?s.set(t,n):this[ee].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[ee])if(e)if(t){const n=this[ee].get(e);n&&n.delete(t)}else this[ee].delete(e);else this[ee].clear()}_addEventListener(e,t,n){(function(l,c){const u=Ve(l);if(u[c])return;let p=c,m=null;const f=[];for(;p!==""&&!u[p];)u[p]={callbacks:[],childEvents:[]},f.push(u[p]),m&&u[p].childEvents.push(m),m=p,p=p.substr(0,p.lastIndexOf(":"));if(p!==""){for(const A of f)A.callbacks=u[p].callbacks.slice();u[p].childEvents.push(m)}})(this,e);const i=Ce(this,e),s={callback:t,priority:X.get(n.priority)};for(const l of i)$(l,s)}_removeEventListener(e,t){const n=Ce(this,e);for(const i of n)for(let s=0;s<i.length;s++)i[s].callback==t&&(i.splice(s,1),s--)}}:he}function me(o,e){o[Lt]||(o[Lt]=e||q())}function ue(o){return o[Lt]}function Ve(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Ce(o,e){const t=Ve(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const s=Ce(o,t.childEvents[i]);n=n.concat(s)}return n}function xt(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?xt(o,e.substr(0,e.lastIndexOf(":"))):null}function Ne(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const s=new R(e.source,i);s.path=[...e.path],n.fire(s,...t)}}function tn(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ne[o]=he.prototype[o]});const Ee=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},zn=Symbol("observableProperties"),dn=Symbol("boundObservables"),un=Symbol("boundProperties"),wt=Symbol("decoratedMethods"),ai=Symbol("decoratedOriginal"),li=we(ne());function we(o){return o?class extends o{set(e,t){if(Ee(e))return void Object.keys(e).forEach(i=>{this.set(i,e[i])},this);nn(this);const n=this[zn];if(e in this&&!n.has(e))throw new z("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(i){const s=n.get(e);let l=this.fire(`set:${e}`,e,i,s);l===void 0&&(l=i),s===l&&n.has(e)||(n.set(e,l),this.fire(`change:${e}`,e,l,s))}}),this[e]=t}bind(...e){if(!e.length||!vo(e))throw new z("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new z("observable-bind-duplicate-properties",this);nn(this);const t=this[un];e.forEach(i=>{if(t.has(i))throw new z("observable-bind-rebind",this)});const n=new Map;return e.forEach(i=>{const s={property:i,to:[]};t.set(i,s),n.set(i,s)}),{to:ci,toMany:Br,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[zn])return;const t=this[un],n=this[dn];if(e.length){if(!vo(e))throw new z("observable-unbind-wrong-properties",this);e.forEach(i=>{const s=t.get(i);s&&(s.to.forEach(([l,c])=>{const u=n.get(l),p=u[c];p.delete(s),p.size||delete u[c],Object.keys(u).length||(n.delete(l),this.stopListening(l,"change"))}),t.delete(i))})}else n.forEach((i,s)=>{this.stopListening(s,"change")}),n.clear(),t.clear()}decorate(e){nn(this);const t=this[e];if(!t)throw new z("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,i)=>{n.return=t.apply(this,i)}),this[e]=function(...n){return this.fire(e,n)},this[e][ai]=t,this[wt]||(this[wt]=[]),this[wt].push(e)}stopListening(e,t,n){if(!e&&this[wt]){for(const i of this[wt])this[i]=this[i][ai];delete this[wt]}super.stopListening(e,t,n)}}:li}function nn(o){o[zn]||(Object.defineProperty(o,zn,{value:new Map}),Object.defineProperty(o,dn,{value:new Map}),Object.defineProperty(o,un,{value:new Map}))}function ci(...o){const e=function(...s){if(!s.length)throw new z("observable-bind-to-parse-error",null);const l={to:[]};let c;return typeof s[s.length-1]=="function"&&(l.callback=s.pop()),s.forEach(u=>{if(typeof u=="string")c.properties.push(u);else{if(typeof u!="object")throw new z("observable-bind-to-parse-error",null);c={observable:u,properties:[]},l.to.push(c)}}),l}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new z("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new z("observable-bind-to-extra-callback",this);var i;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new z("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(s=>{const l=i[dn];let c;l.get(s.observable)||i.listenTo(s.observable,"change",(u,p)=>{c=l.get(s.observable)[p],c&&c.forEach(m=>{Nr(i,m.property)})})}),function(s){let l;s._bindings.forEach((c,u)=>{s._to.forEach(p=>{l=p.properties[c.callback?0:s._bindProperties.indexOf(u)],c.to.push([p.observable,l]),function(m,f,A,v){const x=m[dn],S=x.get(A),I=S||{};I[v]||(I[v]=new Set),I[v].add(f),S||x.set(A,I)}(s._observable,c,p.observable,l)})})}(this),this._bindProperties.forEach(s=>{Nr(this._observable,s)})}function Br(o,e,t){if(this._bindings.size>1)throw new z("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const s=n.map(l=>[l,i]);return Array.prototype.concat.apply([],s)}(o,e),t)}function vo(o){return o.every(e=>typeof e=="string")}function Nr(o,e){const t=o[un].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{we[o]=li.prototype[o]});class di{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Cn(o){let e=0;for(const t of o)e++;return e}function Ue(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function ut(o){return!(!o||!o[Symbol.iterator])}const Rn=typeof ad=="object"&&ad&&ad.Object===Object&&ad;var Gi=typeof self=="object"&&self&&self.Object===Object&&self;const Kt=Rn||Gi||Function("return this")(),Vt=Kt.Symbol;var ui=Object.prototype,hi=ui.hasOwnProperty,yo=ui.toString,at=Vt?Vt.toStringTag:void 0;const xo=function(o){var e=hi.call(o,at),t=o[at];try{o[at]=void 0;var n=!0}catch{}var i=yo.call(o);return n&&(e?o[at]=t:delete o[at]),i};var pi=Object.prototype.toString;const ke=function(o){return pi.call(o)};var lt=Vt?Vt.toStringTag:void 0;const Me=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":lt&&lt in Object(o)?xo(o):ke(o)},Ze=Array.isArray,nt=function(o){return o!=null&&typeof o=="object"},Je=function(o){return typeof o=="string"||!Ze(o)&&nt(o)&&Me(o)=="[object String]"};function At(o,e,t={},n=[]){const i=t&&t.xmlns,s=i?o.createElementNS(i,e):o.createElement(e);for(const l in t)s.setAttribute(l,t[l]);!Je(n)&&ut(n)||(n=[n]);for(let l of n)Je(l)&&(l=o.createTextNode(l)),s.appendChild(l);return s}const Nl=function(o,e){return function(t){return o(e(t))}},Pr=Nl(Object.getPrototypeOf,Object);var Ws=Function.prototype,Pl=Object.prototype,qs=Ws.toString,Vu=Pl.hasOwnProperty,Ll=qs.call(Object);const Yt=function(o){if(!nt(o)||Me(o)!="[object Object]")return!1;var e=Pr(o);if(e===null)return!0;var t=Vu.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&qs.call(t)==Ll},Uu=function(){this.__data__=[],this.size=0},jn=function(o,e){return o===e||o!=o&&e!=e},mi=function(o,e){for(var t=o.length;t--;)if(jn(o[t][0],e))return t;return-1};var Ol=Array.prototype.splice;const zl=function(o){var e=this.__data__,t=mi(e,o);return!(t<0)&&(t==e.length-1?e.pop():Ol.call(e,t,1),--this.size,!0)},Hu=function(o){var e=this.__data__,t=mi(e,o);return t<0?void 0:e[t][1]},Rl=function(o){return mi(this.__data__,o)>-1},no=function(o,e){var t=this.__data__,n=mi(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function jo(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}jo.prototype.clear=Uu,jo.prototype.delete=zl,jo.prototype.get=Hu,jo.prototype.has=Rl,jo.prototype.set=no;const $i=jo,jl=function(){this.__data__=new $i,this.size=0},Fl=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},Wu=function(o){return this.__data__.get(o)},V=function(o){return this.__data__.has(o)},ae=function(o){if(!Ee(o))return!1;var e=Me(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},se=Kt["__core-js_shared__"];var Fe=function(){var o=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const It=function(o){return!!Fe&&Fe in o};var ht=Function.prototype.toString;const Ut=function(o){if(o!=null){try{return ht.call(o)}catch{}try{return o+""}catch{}}return""};var oo=/^\[object .+?Constructor\]$/,Fn=Function.prototype,Qt=Object.prototype,Vl=Fn.toString,Ul=Qt.hasOwnProperty,pD=RegExp("^"+Vl.call(Ul).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const mD=function(o){return!(!Ee(o)||It(o))&&(ae(o)?pD:oo).test(Ut(o))},gD=function(o,e){return o==null?void 0:o[e]},Ki=function(o,e){var t=gD(o,e);return mD(t)?t:void 0},Gs=Ki(Kt,"Map"),$s=Ki(Object,"create"),fD=function(){this.__data__=$s?$s(null):{},this.size=0},kD=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var bD=Object.prototype.hasOwnProperty;const wD=function(o){var e=this.__data__;if($s){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return bD.call(e,o)?e[o]:void 0};var AD=Object.prototype.hasOwnProperty;const _D=function(o){var e=this.__data__;return $s?e[o]!==void 0:AD.call(e,o)},CD=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=$s&&e===void 0?"__lodash_hash_undefined__":e,this};function Lr(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}Lr.prototype.clear=fD,Lr.prototype.delete=kD,Lr.prototype.get=wD,Lr.prototype.has=_D,Lr.prototype.set=CD;const $f=Lr,vD=function(){this.size=0,this.__data__={hash:new $f,map:new(Gs||$i),string:new $f}},yD=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},Hl=function(o,e){var t=o.__data__;return yD(e)?t[typeof e=="string"?"string":"hash"]:t.map},xD=function(o){var e=Hl(this,o).delete(o);return this.size-=e?1:0,e},ED=function(o){return Hl(this,o).get(o)},DD=function(o){return Hl(this,o).has(o)},SD=function(o,e){var t=Hl(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function Or(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}Or.prototype.clear=vD,Or.prototype.delete=xD,Or.prototype.get=ED,Or.prototype.has=DD,Or.prototype.set=SD;const Wl=Or,TD=function(o,e){var t=this.__data__;if(t instanceof $i){var n=t.__data__;if(!Gs||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new Wl(n)}return t.set(o,e),this.size=t.size,this};function zr(o){var e=this.__data__=new $i(o);this.size=e.size}zr.prototype.clear=jl,zr.prototype.delete=Fl,zr.prototype.get=Wu,zr.prototype.has=V,zr.prototype.set=TD;const Rr=zr,ID=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},ql=function(){try{var o=Ki(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Gl=function(o,e,t){e=="__proto__"&&ql?ql(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var MD=Object.prototype.hasOwnProperty;const qu=function(o,e,t){var n=o[e];MD.call(o,e)&&jn(n,t)&&(t!==void 0||e in o)||Gl(o,e,t)},jr=function(o,e,t,n){var i=!t;t||(t={});for(var s=-1,l=e.length;++s<l;){var c=e[s],u=n?n(t[c],o[c],c,t,o):void 0;u===void 0&&(u=o[c]),i?Gl(t,c,u):qu(t,c,u)}return t},BD=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},Kf=function(o){return nt(o)&&Me(o)=="[object Arguments]"};var Yf=Object.prototype,ND=Yf.hasOwnProperty,PD=Yf.propertyIsEnumerable;const $l=Kf(function(){return arguments}())?Kf:function(o){return nt(o)&&ND.call(o,"callee")&&!PD.call(o,"callee")},LD=function(){return!1};var Qf=a&&!a.nodeType&&a,Zf=Qf&&!0&&r&&!r.nodeType&&r,Jf=Zf&&Zf.exports===Qf?Kt.Buffer:void 0;const Ks=(Jf?Jf.isBuffer:void 0)||LD;var OD=/^(?:0|[1-9]\d*)$/;const Kl=function(o,e){var t=typeof o;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&OD.test(o))&&o>-1&&o%1==0&&o<e},Gu=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var ot={};ot["[object Float32Array]"]=ot["[object Float64Array]"]=ot["[object Int8Array]"]=ot["[object Int16Array]"]=ot["[object Int32Array]"]=ot["[object Uint8Array]"]=ot["[object Uint8ClampedArray]"]=ot["[object Uint16Array]"]=ot["[object Uint32Array]"]=!0,ot["[object Arguments]"]=ot["[object Array]"]=ot["[object ArrayBuffer]"]=ot["[object Boolean]"]=ot["[object DataView]"]=ot["[object Date]"]=ot["[object Error]"]=ot["[object Function]"]=ot["[object Map]"]=ot["[object Number]"]=ot["[object Object]"]=ot["[object RegExp]"]=ot["[object Set]"]=ot["[object String]"]=ot["[object WeakMap]"]=!1;const zD=function(o){return nt(o)&&Gu(o.length)&&!!ot[Me(o)]},$u=function(o){return function(e){return o(e)}};var Xf=a&&!a.nodeType&&a,Ys=Xf&&!0&&r&&!r.nodeType&&r,Ku=Ys&&Ys.exports===Xf&&Rn.process;const Fr=function(){try{var o=Ys&&Ys.require&&Ys.require("util").types;return o||Ku&&Ku.binding&&Ku.binding("util")}catch{}}();var ek=Fr&&Fr.isTypedArray;const Yu=ek?$u(ek):zD;var RD=Object.prototype.hasOwnProperty;const tk=function(o,e){var t=Ze(o),n=!t&&$l(o),i=!t&&!n&&Ks(o),s=!t&&!n&&!i&&Yu(o),l=t||n||i||s,c=l?BD(o.length,String):[],u=c.length;for(var p in o)!e&&!RD.call(o,p)||l&&(p=="length"||i&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Kl(p,u))||c.push(p);return c};var jD=Object.prototype;const Qu=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||jD)},FD=Nl(Object.keys,Object);var VD=Object.prototype.hasOwnProperty;const UD=function(o){if(!Qu(o))return FD(o);var e=[];for(var t in Object(o))VD.call(o,t)&&t!="constructor"&&e.push(t);return e},Yl=function(o){return o!=null&&Gu(o.length)&&!ae(o)},Qs=function(o){return Yl(o)?tk(o):UD(o)},HD=function(o,e){return o&&jr(e,Qs(e),o)},WD=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var qD=Object.prototype.hasOwnProperty;const GD=function(o){if(!Ee(o))return WD(o);var e=Qu(o),t=[];for(var n in o)(n!="constructor"||!e&&qD.call(o,n))&&t.push(n);return t},Vr=function(o){return Yl(o)?tk(o,!0):GD(o)},$D=function(o,e){return o&&jr(e,Vr(e),o)};var nk=a&&!a.nodeType&&a,ok=nk&&!0&&r&&!r.nodeType&&r,ik=ok&&ok.exports===nk?Kt.Buffer:void 0,rk=ik?ik.allocUnsafe:void 0;const sk=function(o,e){if(e)return o.slice();var t=o.length,n=rk?rk(t):new o.constructor(t);return o.copy(n),n},ak=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},KD=function(o,e){for(var t=-1,n=o==null?0:o.length,i=0,s=[];++t<n;){var l=o[t];e(l,t,o)&&(s[i++]=l)}return s},lk=function(){return[]};var YD=Object.prototype.propertyIsEnumerable,ck=Object.getOwnPropertySymbols;const Zu=ck?function(o){return o==null?[]:(o=Object(o),KD(ck(o),function(e){return YD.call(o,e)}))}:lk,QD=function(o,e){return jr(o,Zu(o),e)},dk=function(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o},uk=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)dk(e,Zu(o)),o=Pr(o);return e}:lk,ZD=function(o,e){return jr(o,uk(o),e)},hk=function(o,e,t){var n=e(o);return Ze(o)?n:dk(n,t(o))},Ju=function(o){return hk(o,Qs,Zu)},JD=function(o){return hk(o,Vr,uk)},Xu=Ki(Kt,"DataView"),eh=Ki(Kt,"Promise"),th=Ki(Kt,"Set"),nh=Ki(Kt,"WeakMap");var pk="[object Map]",mk="[object Promise]",gk="[object Set]",fk="[object WeakMap]",kk="[object DataView]",XD=Ut(Xu),eS=Ut(Gs),tS=Ut(eh),nS=Ut(th),oS=Ut(nh),Yi=Me;(Xu&&Yi(new Xu(new ArrayBuffer(1)))!=kk||Gs&&Yi(new Gs)!=pk||eh&&Yi(eh.resolve())!=mk||th&&Yi(new th)!=gk||nh&&Yi(new nh)!=fk)&&(Yi=function(o){var e=Me(o),t=e=="[object Object]"?o.constructor:void 0,n=t?Ut(t):"";if(n)switch(n){case XD:return kk;case eS:return pk;case tS:return mk;case nS:return gk;case oS:return fk}return e});const Zs=Yi;var iS=Object.prototype.hasOwnProperty;const rS=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&iS.call(o,"index")&&(t.index=o.index,t.input=o.input),t},Ql=Kt.Uint8Array,oh=function(o){var e=new o.constructor(o.byteLength);return new Ql(e).set(new Ql(o)),e},sS=function(o,e){var t=e?oh(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var aS=/\w*$/;const lS=function(o){var e=new o.constructor(o.source,aS.exec(o));return e.lastIndex=o.lastIndex,e};var bk=Vt?Vt.prototype:void 0,wk=bk?bk.valueOf:void 0;const cS=function(o){return wk?Object(wk.call(o)):{}},Ak=function(o,e){var t=e?oh(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},dS=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return oh(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return sS(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ak(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return lS(o);case"[object Symbol]":return cS(o)}};var _k=Object.create;const uS=function(){function o(){}return function(e){if(!Ee(e))return{};if(_k)return _k(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),Ck=function(o){return typeof o.constructor!="function"||Qu(o)?{}:uS(Pr(o))},hS=function(o){return nt(o)&&Zs(o)=="[object Map]"};var vk=Fr&&Fr.isMap;const pS=vk?$u(vk):hS,mS=function(o){return nt(o)&&Zs(o)=="[object Set]"};var yk=Fr&&Fr.isSet;const gS=yk?$u(yk):mS;var xk="[object Arguments]",Ek="[object Function]",Dk="[object Object]",Xe={};Xe[xk]=Xe["[object Array]"]=Xe["[object ArrayBuffer]"]=Xe["[object DataView]"]=Xe["[object Boolean]"]=Xe["[object Date]"]=Xe["[object Float32Array]"]=Xe["[object Float64Array]"]=Xe["[object Int8Array]"]=Xe["[object Int16Array]"]=Xe["[object Int32Array]"]=Xe["[object Map]"]=Xe["[object Number]"]=Xe[Dk]=Xe["[object RegExp]"]=Xe["[object Set]"]=Xe["[object String]"]=Xe["[object Symbol]"]=Xe["[object Uint8Array]"]=Xe["[object Uint8ClampedArray]"]=Xe["[object Uint16Array]"]=Xe["[object Uint32Array]"]=!0,Xe["[object Error]"]=Xe[Ek]=Xe["[object WeakMap]"]=!1;const ih=function o(e,t,n,i,s,l){var c,u=1&t,p=2&t,m=4&t;if(n&&(c=s?n(e,i,s,l):n(e)),c!==void 0)return c;if(!Ee(e))return e;var f=Ze(e);if(f){if(c=rS(e),!u)return ak(e,c)}else{var A=Zs(e),v=A==Ek||A=="[object GeneratorFunction]";if(Ks(e))return sk(e,u);if(A==Dk||A==xk||v&&!s){if(c=p||v?{}:Ck(e),!u)return p?ZD(e,$D(c,e)):QD(e,HD(c,e))}else{if(!Xe[A])return s?e:{};c=dS(e,A,u)}}l||(l=new Rr);var x=l.get(e);if(x)return x;l.set(e,c),gS(e)?e.forEach(function(I){c.add(o(I,t,n,I,e,l))}):pS(e)&&e.forEach(function(I,O){c.set(O,o(I,t,n,O,e,l))});var S=f?void 0:(m?p?JD:Ju:p?Vr:Qs)(e);return ID(S||e,function(I,O){S&&(I=e[O=I]),qu(c,O,o(I,t,n,O,e,l))}),c},rh=function(o,e){return ih(o,5,e=typeof e=="function"?e:void 0)},Qi=function(o){return nt(o)&&o.nodeType===1&&!Yt(o)};class Sk{constructor(e,t){this._config={},t&&this.define(Tk(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(Yt(t))return void this._setObjectToTarget(e,t,i);const s=t.split(".");t=s.pop();for(const l of s)Yt(e[l])||(e[l]={}),e=e[l];if(Yt(n))return Yt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!Yt(e[i])){e=null;break}e=e[i]}return e?Tk(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Tk(o){return rh(o,fS)}function fS(o){return Qi(o)||typeof o=="function"?o:void 0}function gi(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Zl(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const Ik=Vn(ne());function Vn(o){return o?class extends o{listenTo(e,t,n,i={}){if(gi(e)||Zl(e)){const s={capture:!!i.useCapture,passive:!!i.usePassive},l=this._getProxyEmitter(e,s)||new kS(e,s);this.listenTo(l,t,n,i)}else super.listenTo(e,t,n,i)}stopListening(e,t,n){if(gi(e)||Zl(e)){const i=this._getAllProxyEmitters(e);for(const s of i)this.stopListening(s,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,i){const s=n[tt];return s&&s[i]?s[i].emitter:null}(this,Mk(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Ik}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Vn[o]=Ik.prototype[o]});class kS extends ne(){constructor(e,t){super(),me(this,Mk(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),ne().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){ne().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Mk(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=q())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let sh;try{sh={window,document}}catch{sh={window:{},document:{}}}const de=sh;function Bk(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function Et(o){return Object.prototype.toString.call(o)=="[object Text]"}function Jl(o){return Object.prototype.toString.apply(o)=="[object Range]"}function Nk(o){return o&&o.parentNode?o.offsetParent===de.document.body?null:o.offsetParent:null}const Pk=["top","right","bottom","left","width","height"];class De{constructor(e){const t=Jl(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),ah(e)||t)if(t){const n=De.getDomRangeRects(e);Xl(this,De.getBoundingRect(n))}else Xl(this,e.getBoundingClientRect());else if(Zl(e)){const{innerWidth:n,innerHeight:i}=e;Xl(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Xl(this,e)}clone(){return new De(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new De(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Lk(e))return t;let n,i=e,s=e.parentNode||e.commonAncestorContainer;for(;s&&!Lk(s);){const c=((l=s)instanceof HTMLElement?l.ownerDocument.defaultView.getComputedStyle(l).overflow:"visible")==="visible";i instanceof HTMLElement&&Ok(i)==="absolute"&&(n=i);const u=Ok(s);if(c||n&&(u==="relative"&&c||u!=="relative")){i=s,s=s.parentNode;continue}const p=new De(s),m=t.getIntersection(p);if(!m)return null;m.getArea()<t.getArea()&&(t=m),i=s,s=s.parentNode}var l;return t}isEqual(e){for(const t of Pk)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=de.window,n=this.clone().moveBy(e,t);if(ah(n._source)){const i=Nk(n._source);i&&function(s,l){const c=new De(l),u=Bk(l);let p=0,m=0;p-=c.left,m-=c.top,p+=l.scrollLeft,m+=l.scrollTop,p-=u.left,m-=u.top,s.moveBy(p,m)}(n,i)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(Zl(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const s=Bk(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new De(i));else{let i=e.startContainer;Et(i)&&(i=i.parentNode);const s=new De(i.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new De(t))}}function Xl(o,e){for(const t of Pk)o[t]=e[t]}function Lk(o){return!!ah(o)&&o===o.ownerDocument.body}function ah(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function Ok(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const _t=class{constructor(o,e){_t._observerInstance||_t._createObserver(),this._element=o,this._callback=e,_t._addElementCallback(o,e),_t._observerInstance.observe(o)}get element(){return this._element}destroy(){_t._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,e){_t._elementCallbacks||(_t._elementCallbacks=new Map);let t=_t._elementCallbacks.get(o);t||(t=new Set,_t._elementCallbacks.set(o,t)),t.add(e)}static _deleteElementCallback(o,e){const t=_t._getElementCallbacks(o);t&&(t.delete(e),t.size||(_t._elementCallbacks.delete(o),_t._observerInstance.unobserve(o))),_t._elementCallbacks&&!_t._elementCallbacks.size&&(_t._observerInstance=null,_t._elementCallbacks=null)}static _getElementCallbacks(o){return _t._elementCallbacks?_t._elementCallbacks.get(o):null}static _createObserver(){_t._observerInstance=new de.window.ResizeObserver(o=>{for(const e of o){const t=_t._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let Js=_t;function zk(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function Ur(o){return e=>e+o}function ec(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function Rk(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function Xs(o){return o&&o.nodeType===Node.COMMENT_NODE}function Zi(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}Js._observerInstance=null,Js._elementCallbacks=null;var jk=Math.pow;function tc({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:s}){ae(e)&&(e=e()),ae(n)&&(n=n());const l=Nk(o),c=function(A){A=Object.assign({top:0,bottom:0,left:0,right:0},A);const v=new De(de.window);return v.top+=A.top,v.height-=A.top,v.bottom-=A.bottom,v.height-=A.bottom,v}(s),u=new De(o),p=Fk(e,c);let m;if(!p||!c.getIntersection(p))return null;const f={targetRect:p,elementRect:u,positionedElementAncestor:l,viewportRect:c};if(n||i){if(n){const A=Fk(n,c);A&&(f.limiterRect=A)}m=function(A,v){const{elementRect:x}=v,S=x.getArea(),I=A.map(H=>new Vk(H,v)).filter(H=>!!H.name);let O=0,F=null;for(const H of I){const{limiterIntersectionArea:G,viewportIntersectionArea:re}=H;if(G===S)return H;const ge=jk(re,2)+jk(G,2);ge>O&&(O=ge,F=H)}return F}(t,f)}else m=new Vk(t[0],f);return m}function Fk(o,e){const t=new De(o).getVisible();return t?t.getIntersection(e):null}class Vk{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:i,top:s,name:l,config:c}=n;this.name=l,this.config=c,this._positioningFunctionCoordinates={left:i,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Uk(o){const e=o.parentNode;e&&e.removeChild(o)}function bS({window:o,rect:e,alignToTop:t,forceScroll:n,viewportOffset:i}){const s=e.clone().moveBy(0,i.bottom),l=e.clone().moveBy(0,-i.top),c=new De(o).excludeScrollbarsAndBorders(),u=t&&n,p=[l,s].every(x=>c.contains(x));let{scrollX:m,scrollY:f}=o;const A=m,v=f;u?f-=c.top-e.top+i.top:p||(Wk(l,c)?f-=c.top-e.top+i.top:Hk(s,c)&&(f+=t?e.top-c.top-i.top:e.bottom-c.bottom+i.bottom)),p||(qk(e,c)?m-=c.left-e.left+i.left:Gk(e,c)&&(m+=e.right-c.right+i.right)),m==A&&f===v||o.scrollTo(m,f)}function wS({parent:o,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:i=0,limiterElement:s}){const l=lh(o),c=t&&n;let u,p,m;const f=s||l.document.body;for(;o!=f;)p=e(),u=new De(o).excludeScrollbarsAndBorders(),m=u.contains(p),c?o.scrollTop-=u.top-p.top+i:m||(Wk(p,u)?o.scrollTop-=u.top-p.top+i:Hk(p,u)&&(o.scrollTop+=t?p.top-u.top-i:p.bottom-u.bottom+i)),m||(qk(p,u)?o.scrollLeft-=u.left-p.left+i:Gk(p,u)&&(o.scrollLeft+=p.right-u.right+i)),o=o.parentNode}function Hk(o,e){return o.bottom>e.bottom}function Wk(o,e){return o.top<e.top}function qk(o,e){return o.left<e.left}function Gk(o,e){return o.right>e.right}function lh(o){return Jl(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function AS(o){if(Jl(o)){let e=o.commonAncestorContainer;return Et(e)&&(e=e.parentNode),e}return o.parentNode}function $k(o,e){const t=lh(o),n=new De(o);if(t===e)return n;{let i=t;for(;i!=e;){const s=i.frameElement,l=new De(s).excludeScrollbarsAndBorders();n.moveBy(l.left,l.top),i=i.parent}}return n}const _S={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},CS={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Kk={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},Be=function(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)o[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}(),vS=Object.fromEntries(Object.entries(Be).map(([o,e])=>{let t;return t=e in Kk?Kk[e]:o.charAt(0).toUpperCase()+o.slice(1),[e,t]}));function Hr(o){let e;if(typeof o=="string"){if(e=Be[o.toLowerCase()],!e)throw new z("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?Be.alt:0)+(o.ctrlKey?Be.ctrl:0)+(o.shiftKey?Be.shift:0)+(o.metaKey?Be.cmd:0);return e}function ea(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Hr(t.slice(0,-1));const n=Hr(t);return(_.isMac||_.isiOS)&&n==Be.ctrl?Be.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function nc(o){let e=ea(o);return Object.entries(_.isMac||_.isiOS?_S:CS).reduce((t,[n,i])=>(e&Be[n]&&(e&=~Be[n],t+=i),t),"")+(e?vS[e]:"")}function ch(o,e){const t=e==="ltr";switch(o){case Be.arrowleft:return t?"left":"right";case Be.arrowright:return t?"right":"left";case Be.arrowup:return"up";case Be.arrowdown:return"down"}}function Ye(o){return Array.isArray(o)?o:[o]}const dh=function(o,e,t){(t!==void 0&&!jn(o[e],t)||t===void 0&&!(e in o))&&Gl(o,e,t)},Yk=function(o){return function(e,t,n){for(var i=-1,s=Object(e),l=n(e),c=l.length;c--;){var u=l[o?c:++i];if(t(s[u],u,s)===!1)break}return e}}(),yS=function(o){return nt(o)&&Yl(o)},uh=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},xS=function(o){return jr(o,Vr(o))},ES=function(o,e,t,n,i,s,l){var c=uh(o,t),u=uh(e,t),p=l.get(u);if(p)dh(o,t,p);else{var m=s?s(c,u,t+"",o,e,l):void 0,f=m===void 0;if(f){var A=Ze(u),v=!A&&Ks(u),x=!A&&!v&&Yu(u);m=u,A||v||x?Ze(c)?m=c:yS(c)?m=ak(c):v?(f=!1,m=sk(u,!0)):x?(f=!1,m=Ak(u,!0)):m=[]:Yt(u)||$l(u)?(m=c,$l(c)?m=xS(c):Ee(c)&&!ae(c)||(m=Ck(u))):f=!1}f&&(l.set(u,m),i(m,u,n,s,l),l.delete(u)),dh(o,t,m)}},DS=function o(e,t,n,i,s){e!==t&&Yk(t,function(l,c){if(s||(s=new Rr),Ee(l))ES(e,t,c,n,o,i,s);else{var u=i?i(uh(e,c),l,c+"",e,t,s):void 0;u===void 0&&(u=l),dh(e,c,u)}},Vr)},fi=function(o){return o},SS=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var Qk=Math.max;const TS=function(o,e,t){return e=Qk(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,s=Qk(n.length-e,0),l=Array(s);++i<s;)l[i]=n[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=n[i];return c[e]=t(l),SS(o,this,c)}},IS=function(o){return function(){return o}},MS=ql?function(o,e){return ql(o,"toString",{configurable:!0,enumerable:!1,value:IS(e),writable:!0})}:fi;var BS=Date.now;const NS=function(o){var e=0,t=0;return function(){var n=BS(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(MS),PS=function(o,e){return NS(TS(o,e,fi),o+"")},LS=function(o,e,t){if(!Ee(t))return!1;var n=typeof e;return!!(n=="number"?Yl(t)&&Kl(e,t.length):n=="string"&&e in t)&&jn(t[e],o)},Zk=function(o){return PS(function(e,t){var n=-1,i=t.length,s=i>1?t[i-1]:void 0,l=i>2?t[2]:void 0;for(s=o.length>3&&typeof s=="function"?(i--,s):void 0,l&&LS(t[0],t[1],l)&&(s=i<3?void 0:s,i=1),e=Object(e);++n<i;){var c=t[n];c&&o(e,c,n,s)}return e})},hh=Zk(function(o,e,t){DS(o,e,t)});function OS(o,e,t=1,n){if(typeof t!="number")throw new z("translation-service-quantity-not-a-number",null,{quantity:t});const i=n||de.window.CKEDITOR_TRANSLATIONS,s=function(m){return Object.keys(m).length}(i);s===1&&(o=Object.keys(i)[0]);const l=e.id||e.string;if(s===0||!function(m,f,A){return!!A[m]&&!!A[m].dictionary[f]}(o,l,i))return t!==1?e.plural:e.string;const c=i[o].dictionary,u=i[o].getPluralForm||(m=>m===1?0:1),p=c[l];return typeof p=="string"?p:p[Number(u(t))]}de.window.CKEDITOR_TRANSLATIONS||(de.window.CKEDITOR_TRANSLATIONS={});const zS=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function Jk(o){return zS.includes(o)?"rtl":"ltr"}class RS{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Jk(this.uiLanguage),this.contentLanguageDirection=Jk(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((s,l)=>hh(s,l)):i}(n),this.t=(i,s)=>this._t(i,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Ye(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,s){return i.replace(/%(\d+)/g,(l,c)=>c<s.length?s[c]:l)}(OS(this.uiLanguage,e,n,this.translations),t)}}class io extends ne(){constructor(e={},t={}){super();const n=ut(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new z("collection-add-item-invalid-index",this);let n=0;for(const i of e){const s=this._getItemIdBeforeAdding(i),l=t+n;this._items.splice(l,0,i),this._itemMap.set(s,i),this.fire("add",i,l),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new z("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new z("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,s,l)=>{const c=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(s);if(c&&u)this._bindToExternalToInternalMap.set(s,u),this._bindToInternalToExternalMap.set(u,s);else{const p=e(s);if(!p)return void this._skippedIndexesFromExternal.push(l);let m=l;for(const f of this._skippedIndexesFromExternal)l>f&&m--;for(const f of t._skippedIndexesFromExternal)m>=f&&m++;this._bindToExternalToInternalMap.set(s,p),this._bindToInternalToExternalMap.set(p,s),this.add(p,m);for(let f=0;f<t._skippedIndexesFromExternal.length;f++)m<=t._skippedIndexesFromExternal[f]&&t._skippedIndexesFromExternal[f]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,s,l)=>{const c=this._bindToExternalToInternalMap.get(s);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,p)=>(l<p&&u.push(p-1),l>p&&u.push(p),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new z("collection-add-invalid-id",this);if(this.get(n))throw new z("collection-add-item-already-exists",this)}else e[t]=n=q();return n}_remove(e){let t,n,i,s=!1;const l=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),s=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],s=!i,i&&(n=i[l])):(i=e,n=i[l],t=this._items.indexOf(i),s=t==-1||!this._itemMap.get(n)),s)throw new z("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(c),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Ot(o){const e=o.next();return e.done?null:e.value}class zt extends Vn(we()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new z("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class on{constructor(){this._listener=new(Vn())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Hr(n),n)})}set(e,t,n={}){const i=ea(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(l,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),l.stop()}),l.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+Hr(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function Eo(o){return ut(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}function ph(o,e){let t;function n(...i){n.cancel(),t=setTimeout(()=>o(...i),e)}return n.cancel=()=>{clearTimeout(t)},n}function mh(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function gh(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const jS=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function Xk(o,e){const t=String(o).matchAll(jS);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Z extends we(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",eb,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",eb),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function eb(o){o.return=!1,o.stop()}class ye extends we(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",tb,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",tb),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function tb(o){o.return=!1,o.stop()}class nb extends ye{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){$(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class ob extends ne(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,s]of n)this._contextPlugins.set(i,s),this._contextPlugins.set(s,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new z("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,s=this._context;(function x(S,I=new Set){S.forEach(O=>{u(O)&&(I.has(O)||(I.add(O),O.pluginName&&!i._availablePlugins.has(O.pluginName)&&i._availablePlugins.set(O.pluginName,O),O.requires&&x(O.requires,I)))})})(e),A(e);const l=[...function x(S,I=new Set){return S.map(O=>u(O)?O:i._availablePlugins.get(O)).reduce((O,F)=>I.has(F)?O:(I.add(F),F.requires&&(A(F.requires,F),x(F.requires,I).forEach(H=>O.add(H))),O.add(F)),new Set)}(e.filter(x=>!m(x,t)))];(function(x,S){for(const I of S){if(typeof I!="function")throw new z("plugincollection-replace-plugin-invalid-type",null,{pluginItem:I});const O=I.pluginName;if(!O)throw new z("plugincollection-replace-plugin-missing-name",null,{pluginItem:I});if(I.requires&&I.requires.length)throw new z("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:O});const F=i._availablePlugins.get(O);if(!F)throw new z("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:O});const H=x.indexOf(F);if(H===-1){if(i._contextPlugins.has(F))return;throw new z("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:O})}if(F.requires&&F.requires.length)throw new z("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:O});x.splice(H,1,I),i._availablePlugins.set(O,I)}})(l,n);const c=l.map(x=>{let S=i._contextPlugins.get(x);return S=S||new x(s),i._add(x,S),S});return v(c,"init").then(()=>v(c,"afterInit")).then(()=>c);function u(x){return typeof x=="function"}function p(x){return u(x)&&!!x.isContextPlugin}function m(x,S){return S.some(I=>I===x||f(x)===I||f(I)===x)}function f(x){return u(x)?x.pluginName||x.name:x}function A(x,S=null){x.map(I=>u(I)?I:i._availablePlugins.get(I)||I).forEach(I=>{(function(O,F){if(!u(O))throw F?new z("plugincollection-soft-required",s,{missingPlugin:O,requiredBy:f(F)}):new z("plugincollection-plugin-not-found",s,{plugin:O})})(I,S),function(O,F){if(p(F)&&!p(O))throw new z("plugincollection-context-required",s,{plugin:f(O),requiredBy:f(F)})}(I,S),function(O,F){if(F&&m(O,t))throw new z("plugincollection-required",s,{plugin:f(O),requiredBy:f(F)})}(I,S)})}function v(x,S){return x.reduce((I,O)=>O[S]?i._contextPlugins.has(O)?I:I.then(O[S].bind(O)):I,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new z("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}var ib=Object.getOwnPropertySymbols,FS=Object.prototype.hasOwnProperty,VS=Object.prototype.propertyIsEnumerable;class rb{constructor(e){this._contextOwner=null;const t=e||{},{translations:n}=t,i=((c,u)=>{var p={};for(var m in c)FS.call(c,m)&&u.indexOf(m)<0&&(p[m]=c[m]);if(c!=null&&ib)for(var m of ib(c))u.indexOf(m)<0&&VS.call(c,m)&&(p[m]=c[m]);return p})(t,["translations"]);this.config=new Sk(i,this.constructor.defaultConfig);const s=this.constructor.builtinPlugins;this.config.define("plugins",s),this.plugins=new ob(this,s);const l=this.config.get("language")||{};this.locale=new RS({uiLanguage:typeof l=="string"?l:l.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new io}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new z("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new z("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new z("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class oc extends we(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class US extends on{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(s,l)=>{this.editor.execute(i),l()}}super.set(e,t,n)}}var HS=g(2591),oe=g.n(HS),sb=g(4098),WS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(sb.A,WS),sb.A.locals;const ic=new WeakMap;let ab=!1;function lb({view:o,element:e,text:t,isDirectHost:n=!0,keepOnFocus:i=!1}){const s=o.document;function l(c){ic.get(s).set(e,{text:c,isDirectHost:n,keepOnFocus:i,hostElement:n?e:null}),o.change(u=>fh(s,u))}ic.has(s)||(ic.set(s,new Map),s.registerPostFixer(c=>fh(s,c)),s.on("change:isComposing",()=>{o.change(c=>fh(s,c))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(c,u,p)=>{l(p)}),e.placeholder?l(e.placeholder):t&&l(t),t&&function(){ab||Y("enableplaceholder-deprecated-text-option"),ab=!0}()}function qS(o,e){return!e.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",e),!0)}function GS(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function $S(o,e){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const t=o.document,n=t.selection.anchor;return(!t.isComposing||!n||n.parent!==o)&&(!!e||!t.isFocused||!!n&&n.parent!==o)}function fh(o,e){const t=ic.get(o),n=[];let i=!1;for(const[s,l]of t)l.isDirectHost&&(n.push(s),cb(e,s,l)&&(i=!0));for(const[s,l]of t){if(l.isDirectHost)continue;const c=KS(s);c&&(n.includes(c)||(l.hostElement=c,cb(e,s,l)&&(i=!0)))}return i}function cb(o,e,t){const{text:n,isDirectHost:i,hostElement:s}=t;let l=!1;return s.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,s),l=!0),(i||e.childCount==1)&&$S(s,t.keepOnFocus)?qS(o,s)&&(l=!0):GS(o,s)&&(l=!0),l}function KS(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Ji{is(){throw new Error("is() method is abstract")}}const db=function(o){return ih(o,4)};class Xi extends ne(Ji){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new z("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=Ue(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=db(this);return delete e.parent,e}}Xi.prototype.is=function(o){return o==="node"||o==="view:node"};class Ge extends Xi{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Ge&&(this===e||this.data===e.data)}_clone(){return new Ge(this.document,this.data)}}Ge.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class Do extends Ji{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new z("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new z("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}Do.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class So{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=ub(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const s=ub(n,i);s&&t.push({element:n,pattern:i,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function ub(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const s=new Set(i.getAttributeKeys());return Yt(n)?(n.style!==void 0&&Y("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&Y("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),kh(n,s,l=>i.getAttribute(l))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,i){return kh(n,i.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,i){return kh(n,i.getStyleNames(!0),s=>i.getStyle(s))}(e.styles,o),!t.styles)?null:t}function kh(o,e,t){const n=function(l){return Array.isArray(l)?l.map(c=>Yt(c)?(c.key!==void 0&&c.value!==void 0||Y("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):Yt(l)?Object.entries(l):[[l,!0]]}(o),i=Array.from(e),s=[];if(n.forEach(([l,c])=>{i.forEach(u=>{(function(p,m){return p===!0||p===m||p instanceof RegExp&&m.match(p)})(l,u)&&function(p,m,f){if(p===!0)return!0;const A=f(m);return p===A||p instanceof RegExp&&!!String(A).match(p)}(c,u,t)&&s.push(u)})}),n.length&&!(s.length<n.length))return s}const rc=function(o){return typeof o=="symbol"||nt(o)&&Me(o)=="[object Symbol]"};var YS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,QS=/^\w*$/;const bh=function(o,e){if(Ze(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!rc(o))||QS.test(o)||!YS.test(o)||e!=null&&o in Object(e)};function wh(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var l=o.apply(this,n);return t.cache=s.set(i,l)||s,l};return t.cache=new(wh.Cache||Wl),t}wh.Cache=Wl;const ZS=wh,JS=function(o){var e=ZS(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var XS=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,e4=/\\(\\)?/g,t4=JS(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(XS,function(t,n,i,s){e.push(i?s.replace(e4,"$1"):n||t)}),e});const n4=t4,o4=function(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i};var hb=Vt?Vt.prototype:void 0,pb=hb?hb.toString:void 0;const i4=function o(e){if(typeof e=="string")return e;if(Ze(e))return o4(e,o)+"";if(rc(e))return pb?pb.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Ah=function(o){return o==null?"":i4(o)},sc=function(o,e){return Ze(o)?o:bh(o,e)?[o]:n4(Ah(o))},r4=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},Wr=function(o){if(typeof o=="string"||rc(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},_h=function(o,e){for(var t=0,n=(e=sc(e,o)).length;o!=null&&t<n;)o=o[Wr(e[t++])];return t&&t==n?o:void 0},mb=function(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(i);++n<i;)s[n]=o[n+e];return s},s4=function(o,e){return e.length<2?o:_h(o,mb(e,0,-1))},a4=function(o,e){return e=sc(e,o),(o=s4(o,e))==null||delete o[Wr(r4(e))]},l4=function(o,e){return o==null||a4(o,e)},ta=function(o,e,t){var n=o==null?void 0:_h(o,e);return n===void 0?t:n},c4=function(o,e,t,n){if(!Ee(o))return o;for(var i=-1,s=(e=sc(e,o)).length,l=s-1,c=o;c!=null&&++i<s;){var u=Wr(e[i]),p=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return o;if(i!=l){var m=c[u];(p=n?n(m,u,c):void 0)===void 0&&(p=Ee(m)?m:Kl(e[i+1])?[]:{})}qu(c,u,p),c=c[u]}return o},d4=function(o,e,t){return o==null?o:c4(o,e,t)};class Ch{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let i=null,s=0,l=0,c=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let p=0;p<n.length;p++){const m=n.charAt(p);if(i===null)switch(m){case":":c||(c=n.substr(s,p-s),l=p+1);break;case'"':case"'":i=m;break;case";":{const f=n.substr(l,p-l);c&&u.set(c.trim(),f.trim()),c=null,s=p+1;break}}else m===i&&(i=null)}return u}(e);for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Ee(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=vh(e);l4(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Ee(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=ta(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class u4{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Ee(t))yh(n,vh(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:s,value:l}=i(t);yh(n,s,l)}else yh(n,e,t)}getNormalized(e,t){if(!e)return hh({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return ta(t,n);const i=n(e,t);if(i)return i}return ta(t,vh(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const s=this.getNormalized(i,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function vh(o){return o.replace("-",".")}function yh(o,e,t){let n=t;Ee(t)&&(n=hh({},ta(o,e),t)),d4(o,e,n)}class vn extends Xi{constructor(e,t,n,i){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(s){const l=Eo(s);for(const[c,u]of l)u===null?l.delete(c):typeof u!="string"&&l.set(c,String(u));return l}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");gb(this._classes,s),this._attrs.delete("class")}this._styles=new Ch(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof vn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new So(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,l){return typeof l=="string"?[new Ge(s,l)]:(ut(l)||(l=[l]),Array.from(l).map(c=>typeof c=="string"?new Ge(s,c):c instanceof Do?new Ge(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?gb(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Ye(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Ye(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Ye(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function gb(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}vn.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class na extends vn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=h4}}function h4(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}na.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ac extends we(na){constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",s=>s&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}ac.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const fb=Symbol("rootName");class kb extends ac{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(fb)}set rootName(e){this._setCustomProperty(fb,e)}set _name(e){this.name=e}}kb.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class er{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new z("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new z("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=ie._createAt(e.startPosition):this._position=ie._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof Ge){if(e.isAtEnd)return this._position=ie._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof vn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new ie(i,0);return this._position=e,this._formatReturnValue("elementStart",i,t,e,1)}if(i instanceof Ge){if(this.singleCharacters)return e=new ie(i,0),this._position=e,this._next();let s,l=i.data.length;return i==this._boundaryEndParent?(l=this.boundaries.end.offset,s=new Do(i,0,l),e=ie._createAfter(s)):(s=new Do(i,0,i.data.length),e.offset++),this._position=e,this._formatReturnValue("text",s,t,e,l)}if(typeof i=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const l=new Do(n,e.offset,s);return e.offset+=s,this._position=e,this._formatReturnValue("text",l,t,e,s)}return e=ie._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof Ge){if(e.isAtStart)return this._position=ie._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof vn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new ie(i,i.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof Ge){if(this.singleCharacters)return e=new ie(i,i.data.length),this._position=e,this._previous();let s,l=i.data.length;if(i==this._boundaryStartParent){const c=this.boundaries.start.offset;s=new Do(i,c,i.data.length-c),l=s.data.length,e=ie._createBefore(s)}else s=new Do(i,0,i.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",s,t,e,l)}if(typeof i=="string"){let s;if(this.singleCharacters)s=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-c}e.offset-=s;const l=new Do(n,e.offset,s);return this._position=e,this._formatReturnValue("text",l,t,e,s)}return e=ie._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,s){return t instanceof Do&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=ie._createAfter(t.textNode):(i=ie._createAfter(t.textNode),this._position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=ie._createBefore(t.textNode):(i=ie._createBefore(t.textNode),this._position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:s}}}}class ie extends Ji{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof ac);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ie._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new er(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=Ue(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new er(e)}clone(){return new ie(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ie)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new z("view-createpositionat-offset-required",n)}return new ie(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ie(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new z("view-position-after-root",e,{root:e});return new ie(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ie(e.textNode,e.offsetInText);if(!e.parent)throw new z("view-position-before-root",e,{root:e});return new ie(e.parent,e.index)}}ie.prototype.is=function(o){return o==="position"||o==="view:position"};class be extends Ji{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new er({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(lc,{direction:"backward"}),t=this.end.getLastMatchingPosition(lc);return e.parent.is("$text")&&e.isAtStart&&(e=ie._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ie._createAfter(t.parent)),new be(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(lc);if(e.isAfter(this.end)||e.isEqual(this.end))return new be(e,e);let t=this.end.getLastMatchingPosition(lc,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new ie(n,0)),i&&i.is("$text")&&(t=new ie(i,i.data.length)),new be(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new be(this.start,e.start)),this.containsPosition(e.end)&&t.push(new be(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new be(t,n)}return null}getWalker(e={}){return e.boundaries=this,new er(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new be(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new er(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new er(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new ie(e,t),new ie(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ie._createBefore(e),t)}}function lc(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}be.prototype.is=function(o){return o==="range"||o==="view:range"};class ro extends ne(Ji){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Cn(this.getRanges());if(t!=Cn(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof ro||t instanceof xh)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof be)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof ie)this._setRanges([new be(t)]),this._setFakeOptions(i);else if(t instanceof Xi){const s=!!i&&!!i.backward;let l;if(n===void 0)throw new z("view-selection-setto-required-second-parameter",this);l=n=="in"?be._createIn(t):n=="on"?be._createOn(t):new be(ie._createAt(t,n)),this._setRanges([l],s),this._setFakeOptions(i)}else{if(!ut(t))throw new z("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new z("view-selection-setfocus-no-ranges",this);const n=ie._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new be(n,i),!0):this._addRange(new be(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof be))throw new z("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new z("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new be(e.start,e.end))}}ro.prototype.is=function(o){return o==="selection"||o==="view:selection"};class xh extends ne(Ji){constructor(...e){super(),this._selection=new ro,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}xh.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class qr extends R{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Eh=Symbol("bubbling contexts");function Dh(o){return class extends o{fire(e,...t){try{const n=e instanceof R?e:new R(this,e),i=Sh(this);if(!i.size)return;if(oa(n,"capturing",this),Gr(i,"$capture",n,...t))return n.return;const s=n.startRange||this.selection.getFirstRange(),l=s?s.getContainedElement():null,c=!!l&&!!bb(i,l);let u=l||function(p){if(!p)return null;const m=p.start.parent,f=p.end.parent,A=m.getPath(),v=f.getPath();return A.length>v.length?m:f}(s);if(oa(n,"atTarget",u),!c){if(Gr(i,"$text",n,...t))return n.return;oa(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(Gr(i,"$root",n,...t))return n.return}else if(u.is("element")&&Gr(i,u.name,n,...t))return n.return;if(Gr(i,u,n,...t))return n.return;u=u.parent,oa(n,"bubbling",u)}return oa(n,"bubbling",this),Gr(i,"$document",n,...t),n.return}catch(n){z.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=Ye(n.context||"$document"),s=Sh(this);for(const l of i){let c=s.get(l);c||(c=new(ne()),s.set(l,c)),this.listenTo(c,e,t,n)}}_removeEventListener(e,t){const n=Sh(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const o=Dh(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Dh[e]=o.prototype[e]})}function oa(o,e,t){o instanceof qr&&(o._eventPhase=e,o._currentTarget=t)}function Gr(o,e,t,...n){const i=typeof e=="string"?o.get(e):bb(o,e);return!!i&&(i.fire(t,...n),t.stop.called)}function bb(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function Sh(o){return o[Eh]||(o[Eh]=new Map),o[Eh]}class cc extends Dh(we()){constructor(e){super(),this._postFixers=new Set,this.selection=new xh,this.roots=new io({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class tr extends vn{constructor(e,t,n,i){super(e,t,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=p4}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new z("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function p4(){if(Th(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Th(o)>1)return null;o=o.parent}return!o||Th(o)>1?null:this.childCount}function Th(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}tr.DEFAULT_PRIORITY=10,tr.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ih extends vn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=m4}_insertChild(e,t){if(t&&(t instanceof Xi||Array.from(t).length>0))throw new z("view-emptyelement-cannot-add",[this,t]);return 0}}function m4(){return null}Ih.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class dc extends vn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=f4}_insertChild(e,t){if(t&&(t instanceof Xi||Array.from(t).length>0))throw new z("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function g4(o){o.document.on("arrowKey",(e,t)=>function(n,i,s){if(i.keyCode==Be.arrowright){const l=i.domTarget.ownerDocument.defaultView.getSelection(),c=l.rangeCount==1&&l.getRangeAt(0).collapsed;if(c||i.shiftKey){const u=l.focusNode,p=l.focusOffset,m=s.domPositionToView(u,p);if(m===null)return;let f=!1;const A=m.getLastMatchingPosition(v=>(v.item.is("uiElement")&&(f=!0),!(!v.item.is("uiElement")&&!v.item.is("attributeElement"))));if(f){const v=s.viewPositionToDom(A);c?l.collapse(v.parent,v.offset):l.extend(v.parent,v.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function f4(){return null}dc.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Mh extends vn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=k4}_insertChild(e,t){if(t&&(t instanceof Xi||Array.from(t).length>0))throw new z("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function k4(){return null}Mh.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class nr extends ne(Ji){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,l){return typeof l=="string"?[new Ge(s,l)]:(ut(l)||(l=[l]),Array.from(l).map(c=>typeof c=="string"?new Ge(s,c):c instanceof Do?new Ge(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}nr.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class wb{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new nr(this.document,e)}createText(e){return new Ge(this.document,e)}createAttributeElement(e,t,n={}){const i=new tr(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let s=null;Yt(n)?i=n:s=n;const l=new na(this.document,e,t,s);return i.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),l}createEditableElement(e,t,n={}){const i=new ac(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new Ih(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new dc(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const s=new Mh(this.document,e,t);return n&&(s.render=n),i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Yt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ie?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new z("view-writer-break-non-container-element",this.document);if(!t.parent)throw new z("view-writer-break-root",this.document);if(e.isAtStart)return ie._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ie._createAfter(t),n);const i=new be(e,ie._createAt(t,"end")),s=new ie(n,0);this.move(i,s)}return ie._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const l=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ie(l,c))}const i=n.getChild(t-1),s=n.getChild(t);if(!i||!s)return e;if(i.is("$text")&&s.is("$text"))return _b(i,s);if(i.is("attributeElement")&&s.is("attributeElement")&&i.isSimilar(s)){const l=i.childCount;return i._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new ie(i,l))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new z("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),s=i instanceof Ge?ie._createAt(i,"end"):ie._createAt(t,"end");return this.move(be._createIn(n),ie._createAt(t,"end")),this.remove(be._createOn(n)),s}insert(e,t){Cb(t=ut(t)?[...t]:[t],this.document);const n=t.reduce((l,c)=>{const u=l[l.length-1],p=!c.is("uiElement");return u&&u.breakAttributes==p?u.nodes.push(c):l.push({breakAttributes:p,nodes:[c]}),l},[]);let i=null,s=e;for(const{nodes:l,breakAttributes:c}of n){const u=this._insertNodes(s,l,c);i||(i=u.start),s=u.end}return i?new be(i,s):new be(e)}remove(e){const t=e instanceof be?e:be._createOn(e);if(ia(t,this.document),t.isCollapsed)return new nr(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),s=n.parent,l=i.offset-n.offset,c=s._removeChildren(n.offset,l);for(const p of c)this._removeFromClonedElementsGroup(p);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new nr(this.document,c)}clear(e,t){ia(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const s=i.item;let l;if(s.is("element")&&t.isSimilar(s))l=be._createOn(s);else if(!i.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const c=s.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));c&&(l=be._createIn(c))}l&&(l.end.isAfter(e.end)&&(l.end=e.end),l.start.isBefore(e.start)&&(l.start=e.start),this.remove(l))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,s=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof tr))throw new z("view-writer-wrap-invalid-attribute",this.document);if(ia(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(l=>!l.is("uiElement")))&&(i=i.getLastMatchingPosition(l=>l.item.is("uiElement"))),i=this._wrapPosition(i,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new be(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof tr))throw new z("view-writer-unwrap-invalid-attribute",this.document);if(ia(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,l=this._unwrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new be(c,u)}rename(e,t){const n=new na(this.document,e,t.getAttributes());return this.insert(ie._createAfter(t),n),this.move(be._createIn(t),ie._createAt(n,0)),this.remove(be._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ie._createAt(e,t)}createPositionAfter(e){return ie._createAfter(e)}createPositionBefore(e){return ie._createBefore(e)}createRange(e,t){return new be(e,t)}createRangeOn(e){return be._createOn(e)}createRangeIn(e){return be._createIn(e)}createSelection(...e){return new ro(...e)}createSlot(e="children"){if(!this._slotFactory)throw new z("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,s;if(i=n?Bh(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new z("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?Nh(e):e;const l=i._insertChild(s.offset,t);for(const m of t)this._addToClonedElementsGroup(m);const c=s.getShiftedBy(l),u=this.mergeAttributes(s);u.isEqual(s)||c.offset--;const p=this.mergeAttributes(c);return new be(u,p)}_wrapChildren(e,t,n,i){let s=t;const l=[];for(;s<n;){const u=e.getChild(s),p=u.is("$text"),m=u.is("attributeElement");if(m&&this._wrapAttributeElement(i,u))l.push(new ie(e,s));else if(p||!m||b4(i,u)){const f=i._clone();u._remove(),f._appendChild(u),e._insertChild(s,f),this._addToClonedElementsGroup(f),l.push(new ie(e,s))}else this._wrapChildren(u,0,u.childCount,i);s++}let c=0;for(const u of l)u.offset-=c,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return be._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let s=t;const l=[];for(;s<n;){const u=e.getChild(s);if(u.is("attributeElement"))if(u.isSimilar(i)){const p=u.getChildren(),m=u.childCount;u._remove(),e._insertChild(s,p),this._removeFromClonedElementsGroup(u),l.push(new ie(e,s),new ie(e,s+m)),s+=m,n+=m-1}else this._unwrapAttributeElement(i,u)?(l.push(new ie(e,s),new ie(e,s+1)),s++):(this._unwrapChildren(u,0,u.childCount,i),s++);else s++}let c=0;for(const u of l)u.offset-=c,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return be._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,l=this._wrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new be(c,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Ab(e.clone());e.parent.is("$text")&&(e=Nh(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new be(e,e.getShiftedBy(1));this.wrap(i,t);const s=new ie(n.parent,n.index);n._remove();const l=s.nodeBefore,c=s.nodeAfter;return l instanceof Ge&&c instanceof Ge?_b(l,c):Ab(s)}_wrapAttributeElement(e,t){if(!vb(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!vb(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(ia(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new be(u,u)}const s=this._breakAttributes(i,t),l=s.parent.childCount,c=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-l,new be(c,s)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new z("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new z("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new z("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&Ph(i.parent)||Ph(i))return e.clone();if(i.is("$text"))return this._breakAttributes(Nh(e),t);if(n==i.childCount){const s=new ie(i.parent,i.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new ie(i.parent,i.index);return this._breakAttributes(s,t)}{const s=i.index+1,l=i._clone();i.parent._insertChild(s,l),this._addToClonedElementsGroup(l);const c=i.childCount-n,u=i._removeChildren(n,c);l._appendChild(u);const p=new ie(i.parent,s);return this._breakAttributes(p,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Bh(o){let e=o.parent;for(;!Ph(e);){if(!e)return;e=e.parent}return e}function b4(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function Ab(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new ie(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new ie(t,0):o}function Nh(o){if(o.offset==o.parent.data.length)return new ie(o.parent.parent,o.parent.index+1);if(o.offset===0)return new ie(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new Ge(o.root.document,e)),new ie(o.parent.parent,o.parent.index+1)}function _b(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new ie(o,t)}const w4=[Ge,tr,na,Ih,Mh,dc];function Cb(o,e){for(const t of o){if(!w4.some(n=>t instanceof n))throw new z("view-writer-insert-invalid-node-type",e);t.is("$text")||Cb(t.getChildren(),e)}}function Ph(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function ia(o,e){const t=Bh(o.start),n=Bh(o.end);if(!t||!n||t!==n)throw new z("view-writer-invalid-range-container",e)}function vb(o,e){return o.id===null&&e.id===null}const yb=o=>o.createTextNode(" "),xb=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Eb=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},so=7,ra="⁠".repeat(so);function yn(o){return typeof o=="string"?o.substr(0,so)===ra:Et(o)&&o.data.substr(0,so)===ra}function sa(o){return o.data.length==so&&yn(o)}function Db(o){const e=typeof o=="string"?o:o.data;return yn(o)?e.slice(so):e}function A4(o,e){if(e.keyCode==Be.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;yn(n)&&i<=so&&t.collapse(n,0)}}}var Sb=g(8264),_4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Sb.A,_4),Sb.A.locals;class C4 extends we(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),_.isBlink&&!_.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new z("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!_.isAndroid)return;let e=null;const t=!(_.isBlink&&!_.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ie._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;yn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Tb(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),s=this._diffNodeLists(n,i),l=this._findUpdateActions(s,n,i,v4);if(l.indexOf("update")!==-1){const c={equal:0,insert:0,delete:0};for(const u of l)if(u==="update"){const p=c.equal+c.insert,m=c.equal+c.delete,f=e.getChild(p);!f||f.is("uiElement")||f.is("rawElement")||this._updateElementMappings(f,n[m]),Uk(i[p]),c.equal++}else c[u]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ie._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Et(t.parent)&&yn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!yn(e))throw new z("view-renderer-filler-was-lost",this);sa(e)?e.remove():e.data=e.data.substr(so),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(l){if(l.getAttribute("contenteditable")=="false")return!1;const c=l.findAncestor(u=>u.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,s=e.nodeAfter;return!(i instanceof Ge||s instanceof Ge)&&(!_.isAndroid||!i&&!s)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(i=ra+i),Ib(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),i=e.getAttributeKeys();for(const s of i)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(_.isAndroid){let f=null;for(const A of Array.from(n.childNodes)){if(f&&Et(f)&&Et(A)){n.normalize();break}f=A}}const i=t.inlineFillerPosition,s=n.childNodes,l=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Tb(n.ownerDocument,l,i.offset);const c=this._diffNodeLists(s,l),u=this._findUpdateActions(c,s,l,y4);let p=0;const m=new Set;for(const f of u)f==="delete"?(m.add(s[p]),Uk(s[p])):f!=="equal"&&f!=="update"||p++;p=0;for(const f of u)f==="insert"?(Rk(n,p,l[p]),p++):f==="update"?(Ib(s[p],l[p].data),p++):f==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(l[p])),p++);for(const f of m)f.parentNode||this.domConverter.unbindDomElement(f)}_diffNodeLists(e,t){return e=function(n,i){const s=Array.from(n);return s.length==0||!i||s[s.length-1]==i&&s.pop(),s}(e,this._fakeSelectionContainer),P(e,t,x4.bind(null,this.domConverter))}_findUpdateActions(e,t,n,i){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let s=[],l=[],c=[];const u={equal:0,insert:0,delete:0};for(const p of e)p==="insert"?c.push(n[u.equal+u.insert]):p==="delete"?l.push(t[u.equal+u.delete]):(s=s.concat(P(l,c,i).map(m=>m==="equal"?"update":m)),s.push("equal"),l=[],c=[]),u[p]++;return s.concat(P(l,c,i).map(p=>p==="equal"?"update":p))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(_.isBlink&&!_.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&_.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(l){const c=l.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent=" ",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=t.getSelection(),s=t.createRange();i.removeAllRanges(),s.selectNodeContents(n),i.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),_.isGecko&&function(s,l){const c=s.parent;if(c.nodeType!=Node.ELEMENT_NODE||s.offset!=c.childNodes.length-1)return;const u=c.childNodes[s.offset];u&&u.tagName=="BR"&&l.addRange(l.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Tb(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(Et(i))return i.data=ra+i.data,i;{const s=o.createTextNode(ra);return Array.isArray(e)?n.splice(t,0,s):Rk(e,t,s),s}}function v4(o,e){return gi(o)&&gi(e)&&!Et(o)&&!Et(e)&&!Xs(o)&&!Xs(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function y4(o,e){return gi(o)&&gi(e)&&Et(o)&&Et(e)}function x4(o,e,t){return e===t||(Et(e)&&Et(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}function Ib(o,e){const t=o.data;if(t==e)return;const n=M(t,e);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const E4=Eb(de.document),D4=yb(de.document),S4=xb(de.document),uc="data-ck-unsafe-attribute-",Mb="data-ck-unsafe-element";class hc{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new So,this._inlineObjectElementMatcher=new So,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?de.document:de.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new ro(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)i.appendChild(s[0]);const l=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),c=[];let u;for(;u=l.nextNode();)c.push(u);for(const p of c){for(const f of p.getAttributeNames())this.setDomElementAttribute(p,f,p.getAttribute(f));const m=p.tagName.toLowerCase();this._shouldRenameElement(m)&&(Pb(m),p.replaceWith(this._createReplacementDomElement(m,p)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(Pb(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),t.bind&&this.bindElements(i,n);for(const s of n.getAttributeKeys())this.setDomElementAttribute(i,s,n.getAttribute(s),n)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(n,t))i.appendChild(s);return i}}setDomElementAttribute(e,t,n,i){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);s||Y("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(l){try{de.document.createAttribute(l)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(uc+t)&&s&&e.removeAttribute(uc+t),e.setAttribute(s?t:uc+t,n)):Y("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=Mb&&(e.removeAttribute(t),e.removeAttribute(uc+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const s of e.getChildren()){n===i&&(yield this._getBlockFiller());const l=s.is("element")&&!!s.getCustomProperty("dataPipeline:transparentRendering")&&!Ot(s.getAttributes());l&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(l&&Y("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return yn(n)&&(i+=so),{parent:n,offset:i}}{let n,i,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const l=e.nodeBefore;if(i=l.is("$text")?this.findCorrespondingDomText(l):this.mapViewToDom(l),!i)return null;n=i.parentNode,s=i.nextSibling}return Et(s)&&yn(s)?{parent:s,offset:so}:{parent:n,offset:i?ec(i)+1:0}}}domToView(e,t={}){const n=[],i=this._domToView(e,t,n),s=i.next().value;return s?(i.next(),this._processDomInlineNodes(null,n,t),s.is("$text")&&s.data.length==0?null:s):null}*domChildrenToView(e,t={},n=[]){for(let i=0;i<e.childNodes.length;i++){const s=e.childNodes[i],l=this._domToView(s,t,n),c=l.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(e,n,t),yield c,l.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(i){if(!_.isGecko||!i.rangeCount)return!1;const s=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(s)}catch{return!0}return!1}(e))return new ro([]);if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;Et(i)&&(i=i.parentNode);const s=this.fakeSelectionToView(i);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const s=e.getRangeAt(i),l=this.domRangeToView(s);l&&n.push(l)}return new ro(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new be(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,ec(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ie._createBefore(n);if(Et(e)){if(sa(e))return this.domPositionToView(e.parentNode,ec(e));const i=this.findCorrespondingViewText(e);let s=t;return i?(yn(e)&&(s-=so,s=s<0?0:s),new ie(i,s)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new ie(i,0)}else{const i=e.childNodes[t-1];if(Et(i)&&sa(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,ec(i));const s=Et(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(s&&s.parent)return new ie(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(sa(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const s=i.nextSibling;return s instanceof Ge?s:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const s=i.getChild(0);return s instanceof Ge?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=de.window,s=[];Bb(t,l=>{const{scrollLeft:c,scrollTop:u}=l;s.push([c,u])}),t.focus(),Bb(t,l=>{const[c,u]=s.shift();l.scrollLeft=c,l.scrollTop=u}),de.window.scrollTo(n,i)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(E4):!(e.tagName!=="BR"||!Nb(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(S4)||function(t,n){return t.isEqualNode(D4)&&Nb(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const i=[];let s=n;for(;s&&s.nodeType!=Node.DOCUMENT_NODE;)i.unshift(s),s=s.parentNode;return i}(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return yb(this._domDocument);case"markedNbsp":return xb(this._domDocument);case"br":return Eb(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Et(e)&&yn(e)&&t<so||this.isElement(e)&&yn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(Xs(e)&&t.skipComments)return null;if(Et(e)){if(sa(e))return null;{const s=e.data;if(s==="")return null;const l=new Ge(this.document,s);return n.push(l),l}}{let s=this.mapDomToView(e);if(s)return this._isInlineObjectElement(s)&&n.push(s),s;if(this.isDocumentFragment(e))s=new nr(this.document),t.bind&&this.bindDocumentFragments(e,s);else{s=this._createViewElement(e,t),t.bind&&this.bindElements(e,s);const c=e.attributes;if(c)for(let u=c.length,p=0;p<u;p++)s._setAttribute(c[p].name,c[p].value);if(this._isViewElementWithRawContent(s,t))return s._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(s)||n.push(s),s;if(Xs(e))return s._setCustomProperty("$rawContent",e.data),s}yield s;const l=[];if(t.withChildren!==!1)for(const c of this.domChildrenToView(e,t,l))s._appendChild(c);if(this._isInlineObjectElement(s))n.push(s);else for(const c of l)n.push(c)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let i=!1;for(let s=0;s<t.length;s++){const l=t[s];if(!l.is("$text")){i=!1;continue}let c,u=!1;if(T4(l,this.preElements))c=Db(l.data);else{c=l.data.replace(/[ \n\t\r]{1,}/g," "),u=/[^\S\u00A0]/.test(c.charAt(c.length-1));const p=s>0?t[s-1]:null,m=s+1<t.length?t[s+1]:null,f=!p||p.is("element")&&p.name=="br"||i,A=!m&&!yn(l.data);n.withChildren!==!1&&(f&&(c=c.replace(/^ /,"")),A&&(c=c.replace(/ $/,""))),c=Db(c),c=c.replace(/ \u00A0/g,"  ");const v=m&&m.is("element")&&m.name!="br",x=m&&m.is("$text")&&m.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(c)||!m||v||x)&&(c=c.replace(/\u00A0$/," ")),(f||p&&p.is("element")&&p.name!="br")&&(c=c.replace(/^\u00A0/," "))}c.length==0&&l.parent?(l._remove(),t.splice(s,1),s--):(l._data=c,i=u)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new er({startPosition:t?ie._createAfter(e):ie._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Xs(e))return new dc(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new vn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Mb,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function T4(o,e){return o.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Bb(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function Nb(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Pb(o){o==="script"&&Y("domconverter-unsafe-script-element-detected"),o==="style"&&Y("domconverter-unsafe-style-element-detected")}class To extends Vn(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Lb=Zk(function(o,e){jr(e,Vr(e),o)});class $r{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Lb(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class ki extends To{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new $r(this.view,t,n))}}class I4 extends ki{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Hr(this)}};this.fire(e.type,e,t)}}const Lh=function(){return Kt.Date.now()};var M4=/\s/;const B4=function(o){for(var e=o.length;e--&&M4.test(o.charAt(e)););return e};var N4=/^\s+/;const P4=function(o){return o&&o.slice(0,B4(o)+1).replace(N4,"")};var L4=/^[-+]0x[0-9a-f]+$/i,O4=/^0b[01]+$/i,z4=/^0o[0-7]+$/i,R4=parseInt;const Ob=function(o){if(typeof o=="number")return o;if(rc(o))return NaN;if(Ee(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=Ee(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=P4(o);var t=O4.test(o);return t||z4.test(o)?R4(o.slice(2),t?2:8):L4.test(o)?NaN:+o};var j4=Math.max,F4=Math.min;const Kr=function(o,e,t){var n,i,s,l,c,u,p=0,m=!1,f=!1,A=!0;if(typeof o!="function")throw new TypeError("Expected a function");function v(F){var H=n,G=i;return n=i=void 0,p=F,l=o.apply(G,H)}function x(F){var H=F-u;return u===void 0||H>=e||H<0||f&&F-p>=s}function S(){var F=Lh();if(x(F))return I(F);c=setTimeout(S,function(H){var G=e-(H-u);return f?F4(G,s-(H-p)):G}(F))}function I(F){return c=void 0,A&&n?v(F):(n=i=void 0,l)}function O(){var F=Lh(),H=x(F);if(n=arguments,i=this,u=F,H){if(c===void 0)return function(G){return p=G,c=setTimeout(S,e),m?v(G):l}(u);if(f)return clearTimeout(c),c=setTimeout(S,e),v(u)}return c===void 0&&(c=setTimeout(S,e)),l}return e=Ob(e)||0,Ee(t)&&(m=!!t.leading,s=(f="maxWait"in t)?j4(Ob(t.maxWait)||0,e):s,A="trailing"in t?!!t.trailing:A),O.cancel=function(){c!==void 0&&clearTimeout(c),p=0,n=u=i=c=void 0},O.flush=function(){return c===void 0?l:I(Lh())},O};class V4 extends To{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Kr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new ro(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Be.arrowleft&&e!=Be.arrowup||n.setTo(n.getFirstPosition()),e!=Be.arrowright&&e!=Be.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const U4=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},H4=function(o){return this.__data__.has(o)};function pc(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new Wl;++e<t;)this.add(o[e])}pc.prototype.add=pc.prototype.push=U4,pc.prototype.has=H4;const W4=pc,q4=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},G4=function(o,e){return o.has(e)},zb=function(o,e,t,n,i,s){var l=1&t,c=o.length,u=e.length;if(c!=u&&!(l&&u>c))return!1;var p=s.get(o),m=s.get(e);if(p&&m)return p==e&&m==o;var f=-1,A=!0,v=2&t?new W4:void 0;for(s.set(o,e),s.set(e,o);++f<c;){var x=o[f],S=e[f];if(n)var I=l?n(S,x,f,e,o,s):n(x,S,f,o,e,s);if(I!==void 0){if(I)continue;A=!1;break}if(v){if(!q4(e,function(O,F){if(!G4(v,F)&&(x===O||i(x,O,t,n,s)))return v.push(F)})){A=!1;break}}else if(x!==S&&!i(x,S,t,n,s)){A=!1;break}}return s.delete(o),s.delete(e),A},$4=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t},K4=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var Rb=Vt?Vt.prototype:void 0,Oh=Rb?Rb.valueOf:void 0;const Y4=function(o,e,t,n,i,s,l){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!s(new Ql(o),new Ql(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return jn(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var c=$4;case"[object Set]":var u=1&n;if(c||(c=K4),o.size!=e.size&&!u)return!1;var p=l.get(o);if(p)return p==e;n|=2,l.set(o,e);var m=zb(c(o),c(e),n,i,s,l);return l.delete(o),m;case"[object Symbol]":if(Oh)return Oh.call(o)==Oh.call(e)}return!1};var Q4=Object.prototype.hasOwnProperty;const Z4=function(o,e,t,n,i,s){var l=1&t,c=Ju(o),u=c.length;if(u!=Ju(e).length&&!l)return!1;for(var p=u;p--;){var m=c[p];if(!(l?m in e:Q4.call(e,m)))return!1}var f=s.get(o),A=s.get(e);if(f&&A)return f==e&&A==o;var v=!0;s.set(o,e),s.set(e,o);for(var x=l;++p<u;){var S=o[m=c[p]],I=e[m];if(n)var O=l?n(I,S,m,e,o,s):n(S,I,m,o,e,s);if(!(O===void 0?S===I||i(S,I,t,n,s):O)){v=!1;break}x||(x=m=="constructor")}if(v&&!x){var F=o.constructor,H=e.constructor;F==H||!("constructor"in o)||!("constructor"in e)||typeof F=="function"&&F instanceof F&&typeof H=="function"&&H instanceof H||(v=!1)}return s.delete(o),s.delete(e),v};var jb="[object Arguments]",Fb="[object Array]",mc="[object Object]",Vb=Object.prototype.hasOwnProperty;const J4=function(o,e,t,n,i,s){var l=Ze(o),c=Ze(e),u=l?Fb:Zs(o),p=c?Fb:Zs(e),m=(u=u==jb?mc:u)==mc,f=(p=p==jb?mc:p)==mc,A=u==p;if(A&&Ks(o)){if(!Ks(e))return!1;l=!0,m=!1}if(A&&!m)return s||(s=new Rr),l||Yu(o)?zb(o,e,t,n,i,s):Y4(o,e,u,t,n,i,s);if(!(1&t)){var v=m&&Vb.call(o,"__wrapped__"),x=f&&Vb.call(e,"__wrapped__");if(v||x){var S=v?o.value():o,I=x?e.value():e;return s||(s=new Rr),i(S,I,t,n,s)}}return!!A&&(s||(s=new Rr),Z4(o,e,t,n,i,s))},gc=function o(e,t,n,i,s){return e===t||(e==null||t==null||!nt(e)&&!nt(t)?e!=e&&t!=t:J4(e,t,n,i,o,s))},X4=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?gc(o,e,void 0,t):!!n};class Ub extends To{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const l of e){const c=t.mapDomToView(l.target);c&&(c.is("uiElement")||c.is("rawElement")||l.type!=="childList"||this._isBogusBrMutation(l)||i.add(c))}for(const l of e){const c=t.mapDomToView(l.target);if((!c||!c.is("uiElement")&&!c.is("rawElement"))&&l.type==="characterData"){const u=t.findCorrespondingViewText(l.target);u&&!i.has(u.parent)?n.add(u):!u&&yn(l.target)&&i.add(t.mapDomToView(l.target.parentNode))}}let s=!1;for(const l of n)s=!0,this.renderer.markToSync("text",l);for(const l of i){const c=t.mapViewToDom(l),u=Array.from(l.getChildren()),p=Array.from(t.domChildrenToView(c,{withChildren:!1}));X4(u,p,eT)||(s=!0,this.renderer.markToSync("children",l))}s&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function eT(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class fc extends ki{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,i)=>{const s=t.selection.editableElement;s!==null&&s!==i.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class tT extends To{constructor(e){super(e),this.mutationObserver=e.getObserver(Ub),this.focusObserver=e.getObserver(fc),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Kr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Kr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(i,s)=>{this.document.isComposing&&!_.isAndroid||(this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class nT extends ki{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Hb{constructor(e,t={}){this._files=t.cacheFiles?Wb(e):null,this._native=e}get files(){return this._files||(this._files=Wb(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Wb(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class oT extends ki{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let s=null,l=null,c=[];if(e.dataTransfer&&(s=new Hb(e.dataTransfer)),e.data!==null?l=e.data:s&&(l=s.getData("text/plain")),i.selection.isFake)c=Array.from(i.selection.getRanges());else if(t.length)c=t.map(u=>{const p=n.domConverter.domPositionToView(u.startContainer,u.startOffset),m=n.domConverter.domPositionToView(u.endContainer,u.endOffset);return p?n.createRange(p,m):m?n.createRange(m):void 0}).filter(u=>!!u);else if(_.isAndroid){const u=e.target.ownerDocument.defaultView.getSelection();c=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(_.isAndroid&&e.inputType=="insertCompositionText"&&l&&l.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(c[0].end)]});else if(e.inputType=="insertText"&&l&&l.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:i.to(s=>s.preventDefault())}}]})}}function mA(o,e,t){return(n,i)=>{const s=new De(o);if(s.width<s3||s.height<r3)return null;let l;l=e.position==="inside"?s.bottom-i.height:s.bottom-i.height/2,l-=e.verticalOffset;const c=t(s,i),u=n.clone().moveTo(c,l).getIntersection(i.clone().moveTo(c,l)).getVisible();return!u||u.getArea()<i.getArea()?null:{top:l,left:c,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function gA(o){const e=o.config.get("ui.poweredBy"),t=e&&e.position||"border";return i3({position:t,label:a3,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var fA=g(1801),d3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(fA.A,d3),fA.A.locals;const kA="polite";class u3{constructor(e){this.editor=e}announce(e,t,n=kA){const i=this.editor;this.view||(this.view=new h3(i.locale),i.ui.view.body.add(this.view));let s=this.view.regionViews.find(l=>l.regionName===e);s||(s=new p3(this.view.locale),this.view.regionViews.add(s)),s.set({regionName:e,text:t,politeness:n})}}class h3 extends pe{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class p3 extends pe{constructor(e){super(e);const t=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",kA),this.setTemplate({tag:"div",attributes:{role:"region","data-region":t.to("regionName"),"aria-live":t.to("politeness")},children:[{text:t.to("text")}]})}}var m3=Object.defineProperty,bA=Object.getOwnPropertySymbols,g3=Object.prototype.hasOwnProperty,f3=Object.prototype.propertyIsEnumerable,wA=(o,e,t)=>e in o?m3(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class k3 extends we(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new zM(e),this.focusTracker=new zt,this.tooltipManager=new Bc(e),this.poweredBy=new l3(e),this.ariaLiveAnnouncer=new u3(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(s,l)=>{const c=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(c)&&!Array.from(t.domRoots.values()).includes(c)&&(n=c);const u=this._getCurrentFocusedToolbarDefinition();u&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let p=0;p<i.length;p++){const m=i.shift();if(i.push(m),m!==u&&this._focusFocusableCandidateToolbar(m)){u&&u.options.afterBlur&&u.options.afterBlur();break}}l()}),e.keystrokes.set("Esc",(s,l)=>{const c=this._getCurrentFocusedToolbarDefinition();c&&(n?(n.focus(),n=null):e.editing.view.focus(),c.options.afterBlur&&c.options.afterBlur(),l())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(Zi(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>AA(t)-AA(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!Zi(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n=((i,s)=>{for(var l in s||(s={}))g3.call(s,l)&&wA(i,l,s[l]);if(bA)for(var l of bA(s))f3.call(s,l)&&wA(i,l,s[l]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function AA(o){const{toolbarView:e,options:t}=o;let n=10;return Zi(e.element)&&n--,t.isContextual&&n--,n}var _A=g(1185),b3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(_A.A,b3),_A.A.locals;class w3 extends pe{constructor(e){super(e),this.body=new iM(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class A3 extends w3{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new vc;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class _3 extends pe{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const s=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",s),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(s,l,c)=>{c?n(i):t(i)})}(this):t(this)}}class C3 extends _3{constructor(e,t,n,i={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class dp extends oc{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class CA extends we(){constructor(e,t){super(),t&&Lb(this,t),e&&this.set(e)}}var vA=g(991),v3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(vA.A,v3),vA.A.locals;var yA=g(5380),y3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(yA.A,y3),yA.A.locals;const Pc=Ur("px");class Lc extends Z{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new z("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new z("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new z("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new mn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new x3(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new E3(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class x3 extends pe{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new zt,this.buttonPrevView=this._createButtonView(t("Previous"),Ae.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),Ae.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new ze(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class E3 extends pe{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Pc),left:n.to("left",Pc),width:n.to("width",Pc),height:n.to("height",Pc)}},children:this.content}),this.on("change:numberOfPanels",(i,s,l,c)=>{l>c?this._addPanels(l-c):this._removePanels(c-l),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new pe;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new De(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var xA=g(8298),D3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(xA.A,D3),xA.A.locals;const es=Ur("px");class S3 extends pe{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new uo({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?es(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new uo({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?es(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&es(n)),bottom:t.to("_stickyBottomOffset",n=>n&&es(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(de.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new De(this.limiterElement);let t=e.getVisible();if(t){const n=new De(de.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const i=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-i>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=es(-de.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=es(-de.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new De(this.contentPanelElement)}}class T3 extends Ec{constructor(e,t){const n=e.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Tc},t);super(e,i.creator),this.label=t.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Wo,this.iconView.content=Ae.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new ze(e),this.resetButtonView.set({label:n("Clear"),icon:Ae.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",s=>!s),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class I3 extends pe{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class M3 extends pe{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new zt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Wn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var EA=/[\\^$.*+?()[\]{}|]/g,B3=RegExp(EA.source);const DA=function(o){return(o=Ah(o))&&B3.test(o)?o.replace(EA,"\\$&"):o};var SA=g(8107),N3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(SA.A,N3),SA.A.locals;var P3=Object.defineProperty,TA=Object.getOwnPropertySymbols,L3=Object.prototype.hasOwnProperty,O3=Object.prototype.propertyIsEnumerable,IA=(o,e,t)=>e in o?P3(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class z3 extends pe{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new zt,this.keystrokes=new on,this.resultsView=new M3(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new I3,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Wn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:s})=>{this.resultsCount=i,this.totalItemsCount=s}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(DA(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",((i,s)=>{for(var l in s||(s={}))L3.call(s,l)&&IA(i,l,s[l]);if(TA)for(var l of TA(s))O3.call(s,l)&&IA(i,l,s[l]);return i})({query:e},n))}_createSearchTextQueryView(){const e=new T3(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(i,{query:s,resultsCount:l,totalItemsCount:c}){return typeof i=="function"?i(s,l,c):i}this.on("search",(i,s)=>{if(s.resultsCount)t.set({isVisible:!1});else{const l=this._config.infoView&&this._config.infoView.text;let c,u;s.totalItemsCount?l&&l.notFound?(c=l.notFound.primary,u=l.notFound.secondary):(c=e("No results found"),u=""):l&&l.noSearchableItems?(c=l.noSearchableItems.primary,u=l.noSearchableItems.secondary):(c=e("No searchable items"),u=""),t.set({primaryText:n(c,s),secondaryText:n(u,s),isVisible:!0})}})}}var MA=g(5727),R3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(MA.A,R3),MA.A.locals;const up=class extends z3{constructor(o,e){super(o,e),this._config=e;const t=Ur("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(i,s,l)=>{this._updateResultsVisibility(),l?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,s)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,s())}),this.listenTo(de.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:s})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=s,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new De(this.queryView.fieldView.element).width;const o=up._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:up.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=o}};let BA=up;BA.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,e)=>({top:o.top-e.height,left:o.left,name:"n"})],BA._getOptimalPosition=tc;var NA=g(9529),j3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(NA.A,j3),NA.A.locals;var PA=g(109),F3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(PA.A,F3),PA.A.locals;var LA=g(2710),V3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(LA.A,V3),LA.A.locals;var OA=g(3344),U3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(OA.A,U3),OA.A.locals;class H3 extends ze{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Wo;return e.content=xc,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var zA=g(9481),W3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(zA.A,W3),zA.A.locals;class hp extends Xr{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var q3=Object.defineProperty,RA=Object.getOwnPropertySymbols,G3=Object.prototype.hasOwnProperty,$3=Object.prototype.propertyIsEnumerable,jA=(o,e,t)=>e in o?q3(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,FA=(o,e)=>{for(var t in e||(e={}))G3.call(e,t)&&jA(o,t,e[t]);if(RA)for(var t of RA(e))$3.call(e,t)&&jA(o,t,e[t]);return o};const ba={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",e=>{if(o.isOpen){for(const t of o.menus){const n=e.path[0],i=n instanceof hp&&n.children.first===t;t.isOpen=(e.path.includes(t)||i)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(o){const e=o.locale.uiLanguageDirection==="rtl";function t(n,i){const s=o.children.getIndex(n),l=n.isOpen,c=o.children.length,u=o.children.get((s+c+i)%c);n.isOpen=!1,l&&(u.isOpen=!0),u.buttonView.focus()}o.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),o.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(e,t,n)=>{n&&o.menus.filter(i=>e.source.parentMenuView===i.parentMenuView&&e.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){w({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(e=>e.element)})}},ar={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(e,t)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),t())})},openOnArrowRightKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(e,(t,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0,o.panelView.focus()})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen,o.isOpen&&o.panelView.focus()})},closeOnArrowLeftKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(e,(t,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(e,t)=>{o.isOpen&&(o.isOpen=!1,o.focus(),t())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==o.parentMenuView||(o.isOpen=!1)})}},K3={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,e)=>({top:o.top-e.height,left:o.right-5,name:"en"}),westSouth:(o,e)=>({top:o.top,left:o.left-e.width+5,name:"ws"}),westNorth:(o,e)=>({top:o.top-e.height,left:o.left-e.width+5,name:"wn"})},Y3=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function Q3({normalizedConfig:o,locale:e,componentFactory:t}){const n=ao(o);return function(i,s){const l=s.removeItems,c=[];s.items=s.items.filter(({menuId:u})=>!l.includes(u)||(c.push(u),!1)),ts(s.items,u=>{u.groups=u.groups.filter(({groupId:p})=>!l.includes(p)||(c.push(p),!1));for(const p of u.groups)p.items=p.items.filter(m=>{const f=HA(m);return!l.includes(f)||(c.push(f),!1)})});for(const u of l)c.includes(u)||Y("menu-bar-item-could-not-be-removed",{menuBarConfig:i,itemName:u})}(o,n),function(i,s){const l=s.addItems,c=[];for(const u of l){const p=X3(u.position),m=eB(u.position);if(Z3(u))if(m){const f=s.items.findIndex(A=>A.menuId===m);f!=-1?p==="before"?(s.items.splice(f,0,u.menu),c.push(u)):p==="after"&&(s.items.splice(f+1,0,u.menu),c.push(u)):VA(s,u.menu,m,p)&&c.push(u)}else p==="start"?(s.items.unshift(u.menu),c.push(u)):p==="end"&&(s.items.push(u.menu),c.push(u));else J3(u)?ts(s.items,f=>{if(f.menuId===m)p==="start"?(f.groups.unshift(u.group),c.push(u)):p==="end"&&(f.groups.push(u.group),c.push(u));else{const A=f.groups.findIndex(v=>v.groupId===m);A!==-1&&(p==="before"?(f.groups.splice(A,0,u.group),c.push(u)):p==="after"&&(f.groups.splice(A+1,0,u.group),c.push(u)))}}):VA(s,u.item,m,p)&&c.push(u)}for(const u of l)c.includes(u)||Y("menu-bar-item-could-not-be-added",{menuBarConfig:i,addedItemConfig:u})}(o,n),function(i,s,l){ts(s.items,c=>{for(const u of c.groups)u.items=u.items.filter(p=>{const m=typeof p=="string"&&!l.has(p);return m&&!s.isUsingDefaultConfig&&Y("menu-bar-item-unavailable",{menuBarConfig:i,parentMenuConfig:ao(c),componentName:p}),!m})})}(o,n,t),UA(o,n),function(i,s){const l=s.t,c={File:l({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:l({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:l({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:l({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:l({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:l({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:l({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:l({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:l({string:"Font",id:"MENU_BAR_MENU_FONT"})};ts(i.items,u=>{u.label in c&&(u.label=c[u.label])})}(n,e),n}function VA(o,e,t,n){let i=!1;return ts(o.items,s=>{for(const{groupId:l,items:c}of s.groups){if(i)return;if(l===t)n==="start"?(c.unshift(e),i=!0):n==="end"&&(c.push(e),i=!0);else{const u=c.findIndex(p=>HA(p)===t);u!==-1&&(n==="before"?(c.splice(u,0,e),i=!0):n==="after"&&(c.splice(u+1,0,e),i=!0))}}}),i}function UA(o,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(i=>!!i.groups.length||(pp(o,i,t),!1)),e.items.length?(ts(e.items,i=>{i.groups=i.groups.filter(s=>!!s.items.length||(n=!0,!1));for(const s of i.groups)s.items=s.items.filter(l=>!(WA(l)&&!l.groups.length)||(pp(o,l,t),n=!0,!1))}),n&&UA(o,e)):pp(o,o,t)}function pp(o,e,t){t||Y("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:e})}function ts(o,e){if(Array.isArray(o))for(const n of o)t(n);function t(n){e(n);for(const i of n.groups)for(const s of i.items)WA(s)&&t(s)}}function Z3(o){return typeof o=="object"&&"menu"in o}function J3(o){return typeof o=="object"&&"group"in o}function X3(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function eB(o){const e=o.match(/^[^:]+:(.+)/);return e?e[1]:null}function HA(o){return typeof o=="string"?o:o.menuId}function WA(o){return typeof o=="object"&&"menuId"in o}var qA=g(9108),tB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(qA.A,tB),qA.A.locals;class nB extends pe{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var GA=g(4),oB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(GA.A,oB),GA.A.locals;const $A=class extends pe{constructor(o){super(o);const e=this.bindTemplate;this.buttonView=new H3(o),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new nB(o),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new on,this.focusTracker=new zt,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),ar.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(ar.openOnButtonClick(this),ar.openOnArrowRightKey(this),ar.closeOnArrowLeftKey(this),ar.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),ar.openAndFocusPanelOnArrowDownKey(this),ar.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(o,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(o,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(o,e,t)=>{if(!t)return;const n=$A._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:o,southWest:e,northEast:t,northWest:n,westSouth:i,eastSouth:s,westNorth:l,eastNorth:c}=K3;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[s,c,i,l]:[o,e,t,n]:this.parentMenuView?[i,l,s,c]:[e,o,n,t]}};let ns=$A;ns._getOptimalPosition=tc;class mp extends ip{constructor(e){super(e),this.role="menu"}}var KA=g(977),iB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(KA.A,iB),KA.A.locals;class Sn extends ze{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class YA extends Ew{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var QA=g(497),rB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(QA.A,rB),QA.A.locals;const ZA=["mouseenter","arrowleft","arrowright","change:isOpen"];class sB extends pe{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const n=Q3({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(i=>this._createMenu({componentFactory:t,menuDefinition:i}));this.children.addMany(n)}render(){super.render(),ba.toggleMenusAndFocusItemsOnHover(this),ba.closeMenusWhenTheBarCloses(this),ba.closeMenuWhenAnotherOnTheSameLevelOpens(this),ba.focusCycleMenusOnArrows(this),ba.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...ZA).to(t),e.parentMenuView=t):e.delegate(...ZA).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const i=this.locale,s=new ns(i);return this.registerMenu(s,n),s.buttonView.set({label:t.label}),s.once("change:isOpen",()=>{const l=new mp(i);l.ariaLabel=t.label,s.panelView.children.add(l),l.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:s,componentFactory:e}))}),s}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const i=this.locale,s=[];for(const l of e.groups){for(const c of l.items){const u=new hp(i,t);if(Ee(c))u.children.add(this._createMenu({componentFactory:n,menuDefinition:c,parentMenuView:t}));else{const p=this._createMenuItemContentFromFactory({componentName:c,componentFactory:n,parentMenuView:t});if(!p)continue;u.children.add(p)}s.push(u)}l!==e.groups[e.groups.length-1]&&s.push(new op(i))}return s}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const i=n.create(e);return i instanceof ns||i instanceof Sn||i instanceof YA?(this._registerMenuTree(i,t),i.on("execute",()=>{this.close()}),i):(Y("menu-bar-component-unsupported",{componentName:e,componentView:i}),null)}_registerMenuTree(e,t){if(!(e instanceof ns))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(s=>s instanceof mp)[0];if(!n)return void e.delegate("mouseenter").to(t);const i=n.items.filter(s=>s instanceof Xr);for(const s of i)this._registerMenuTree(s.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,i)=>{clearTimeout(e),i?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(s=>s.isOpen)},0)})}}class aB extends k3{constructor(e,t){super(e),this.view=t,this._toolbarConfig=zw(e.config.get("toolbar")),this._menuBarConfig=function(n){let i;return i="items"in n&&n.items?FA({items:n.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},n):FA({items:ao(Y3),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},n),i}(e.config.get("menuBar")||{}),this._elementReplacer=new di,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,i=t.editing.view,s=n.editable,l=i.document.getRoot();s.name=l.rootName,n.render();const c=s.element;this.setEditableElement(s.name,c),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this._initMenuBar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initMenuBar(){const e=this.view;e.menuBarView&&(this._setupMenuBarBehaviors(e.menuBarView.element),e.menuBarView.fillFromConfig(this._menuBarConfig,this.componentFactory))}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement;let s;const l=e.config.get("placeholder");l&&(s=typeof l=="string"?l:l[this.view.editable.name]),!s&&i&&i.tagName.toLowerCase()==="textarea"&&(s=i.getAttribute("placeholder")),s&&(n.placeholder=s),lb({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const i=this.view.stickyPanel;if(i.isSticky){const s=new De(i.element).height;t.viewportOffset.top+=s}else{const s=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",s),setTimeout(()=>{this.stopListening(i,"change:isSticky",s)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(i,s)=>{if(!e.isSticky||n.wasMoved)return;const l=new De(e.contentPanelElement);s[1]<l.bottom+Mc.defaultOffset&&(s[1]=l.bottom+Mc.defaultOffset)},{priority:"high"})},{priority:"low"})}_setupMenuBarBehaviors(e){const t=this.editor;this.focusTracker.add(e),t.keystrokes.listenTo(e),t.keystrokes.set("Esc",(n,i)=>{e.contains(this.focusTracker.focusedElement)&&(t.editing.view.focus(),i())}),t.keystrokes.set("Alt+F9",(n,i)=>{e.contains(this.focusTracker.focusedElement)||(this.view.menuBarView.focus(),i())})}}var JA=g(7388),lB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(JA.A,lB),JA.A.locals;class cB extends A3{constructor(e,t,n={}){super(e),this.stickyPanel=new S3(e),this.toolbar=new np(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new sB(e)),this.editable=new C3(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class XA{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const i of n)i.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function gp(o,e=new Set){const t=[o],n=new Set;let i=0;for(;t.length>i;){const s=t[i++];if(!n.has(s)&&dB(s)&&!e.has(s))if(n.add(s),Symbol.iterator in s)try{for(const l of s)t.push(l)}catch{}else for(const l in s)l!=="defaultValue"&&t.push(s[l])}return n}function dB(o){const e=Object.prototype.toString.call(o),t=typeof o;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function e_(o,e,t=new Set){if(o===e&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=gp(o,t),s=gp(e,t);for(const l of i)if(s.has(l))return!0;return!1}var uB=Object.defineProperty,hB=Object.defineProperties,pB=Object.getOwnPropertyDescriptors,Oc=Object.getOwnPropertySymbols,t_=Object.prototype.hasOwnProperty,n_=Object.prototype.propertyIsEnumerable,o_=(o,e,t)=>e in o?uB(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,fp=(o,e)=>{for(var t in e||(e={}))t_.call(e,t)&&o_(o,t,e[t]);if(Oc)for(var t of Oc(e))n_.call(e,t)&&o_(o,t,e[t]);return o};class i_ extends XA{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=Nc(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,i)=>e.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},i={};for(const[u,p]of Object.entries(this._data.roots))p.isLoaded?(e[u]="",i[u]=n[u]||{}):t.push(u);const s=(l=fp({},this._config),c={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:i,_watchdogInitialData:this._data},hB(l,pB(c)));var l,c;return delete s.initialData,s.extraPlugins.push(mB),this._initUsingData?this.create(e,s,s.context):Qi(this._elementOrData)?this.create(this._elementOrData,s,s.context):this.create(this._editables,s,s.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(c=>c.isAttached()&&c.rootName!="$graveyard"),{plugins:n}=e,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),s=n.has("TrackChanges")&&n.get("TrackChanges"),l={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(c=>{l.roots[c.rootName]={content:JSON.stringify(Array.from(c.getChildren())),attributes:JSON.stringify(Array.from(c.getAttributes())),isLoaded:c._isLoaded}});for(const c of e.model.markers)c._affectsData&&(l.markers[c.name]={rangeJSON:c.getRange().toJSON(),usingOperation:c._managedUsingOperations,affectsData:c._affectsData});return i&&(l.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),s&&(l.suggestions=JSON.stringify(s.getSuggestions({toJSON:!0,skipNotAttached:!0}))),l}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return e_(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return rh(e,(t,n)=>Qi(t)||n==="context"?t:void 0)}}class mB{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const i of t.children)n._appendChild(this._createNode(e,i));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:s}])=>{const l=JSON.parse(i),c=JSON.parse(s),u=t.model.document.getRoot(n);for(const[p,m]of c)e.setAttribute(p,m,u);for(const p of l){const m=this._createNode(e,p);e.insert(m,u,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:s}=t.model,l=i,{rangeJSON:{start:c,end:u}}=l,p=((x,S)=>{var I={};for(var O in x)t_.call(x,O)&&S.indexOf(O)<0&&(I[O]=x[O]);if(x!=null&&Oc)for(var O of Oc(x))S.indexOf(O)<0&&n_.call(x,O)&&(I[O]=x[O]);return I})(l,["rangeJSON"]),m=s.getRoot(c.root),f=e.createPositionFromPath(m,c.path,c.stickiness),A=e.createPositionFromPath(m,u.path,u.stickiness),v=e.createRange(f,A);e.addMarker(n,fp({range:v},p))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),s=this.editor.plugins.get("CommentsRepository");s.hasCommentThread(n.threadId)&&s.getCommentThread(n.threadId).remove(),s.addCommentThread(fp({channelId:i},n))}),t.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const wa=Symbol("MainQueueId");class gB{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===wa;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(wa),this._queues.get(e)])).then(t),s=i.catch(()=>{});return this._queues.set(e,s),i.finally(()=>{this._activeActions--,this._queues.get(e)===s&&this._activeActions===0&&this._onEmptyCallbacks.forEach(l=>l())})}}function r_(o){return Array.isArray(o)?o:[o]}class zc extends Qh($I){constructor(e,t={}){if(!Rc(e)&&t.initialData!==void 0)throw new z("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(l){return Rc(l)?(c=l,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):l;var c}(e)),Rc(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=this.config.get("menuBar"),s=new cB(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:i.isVisible});this.ui=new aB(this,s),function(l){if(!ae(l.updateSourceElement))throw new z("attachtoform-missing-elementapi-interface",l);const c=l.sourceElement;if(function(u){return!!u&&u.tagName.toLowerCase()==="textarea"}(c)&&c.form){let u;const p=c.form,m=()=>l.updateSourceElement();ae(p.submit)&&(u=p.submit,p.submit=()=>{m(),u.apply(p)}),p.addEventListener("submit",m),l.on("destroy",()=>{p.removeEventListener("submit",m),u&&(p.submit=u)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init(Rc(e)?e:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Rc(o){return Qi(o)}zc.Context=rb,zc.EditorWatchdog=i_,zc.ContextWatchdog=class extends XA{constructor(o,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new gB,this._watchdogConfig=e,this._creator=t=>o.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(wa,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const e=r_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new i_(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(i,{error:s,causesRestart:l})=>{this._fire("itemError",{itemId:t.id,error:s}),l&&this._actionQueues.enqueue(t.id,()=>new Promise(c=>{const u=()=>{n.off("restart",u),this._fire("itemRestart",{itemId:t.id}),c()};n.on("restart",u)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(o){const e=r_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(wa,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(wa,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=gp(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const e=this._watchdogs.get(o);if(!e)throw new Error(`Item with the given id was not registered: ${o}.`);return e}_isErrorComingFromThisItem(o){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(o))return!1;return e_(this._context,o.context)}};class Aa extends ki{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(i){return(s,l)=>{l.preventDefault();const c=l.dropRange?[l.dropRange]:null,u=new R(t,i);t.fire(u,{dataTransfer:l.dataTransfer,method:s.name,targetRanges:c,target:l.target,domEvent:l.domEvent}),u.stop.called&&l.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",i={dataTransfer:new Hb(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(i.dropRange=function(s,l){const c=l.target.ownerDocument,u=l.clientX,p=l.clientY;let m;return c.caretRangeFromPoint&&c.caretRangeFromPoint(u,p)?m=c.caretRangeFromPoint(u,p):l.rangeParent&&(m=c.createRange(),m.setStart(l.rangeParent,l.rangeOffset),m.collapse(!0)),m?s.domConverter.domRangeToView(m):null}(this.view,e)),this.fire(e.type,e,i)}}const s_=["figcaption","li"],a_=["ol","ul"];function l_(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let e="",t=null;for(const n of o.getChildren())e+=fB(n,t)+l_(n),t=n;return e}function fB(o,e){return e?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||a_.includes(o.name)&&a_.includes(e.name)?`

`:o.is("containerElement")||e.is("containerElement")?s_.includes(o.name)||s_.includes(e.name)?`
`:`

`).forEach(function(w){g=w.indexOf(":"),d=w.substring(0,g).trim().toLowerCase(),h=w.substring(g+1).trim(),!(!d||a[d]&&w9[d])&&(d==="set-cookie"?a[d]?a[d].push(h):a[d]=[h]:a[d]=a[d]?a[d]+", "+h:h)}),a},Kx=Symbol("internals");function Va(r){return r&&String(r).trim().toLowerCase()}function Ud(r){return r===!1||r==null?r:K.isArray(r)?r.map(Ud):String(r)}function _9(r){const a=Object.create(null),d=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let h;for(;h=d.exec(r);)a[h[1]]=h[2];return a}const C9=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function Tm(r,a,d,h,g){if(K.isFunction(h))return h.call(this,a,d);if(g&&(a=d),!!K.isString(a)){if(K.isString(h))return a.indexOf(h)!==-1;if(K.isRegExp(h))return h.test(a)}}function v9(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,d,h)=>d.toUpperCase()+h)}function y9(r,a){const d=K.toCamelCase(" "+a);["get","set","has"].forEach(h=>{Object.defineProperty(r,h+d,{value:function(g,k,w){return this[h].call(this,a,g,k,w)},configurable:!0})})}class Ru{constructor(a){a&&this.set(a)}set(a,d,h){const g=this;function k(C,b,y){const T=Va(b);if(!T)throw new Error("header name must be a non-empty string");const E=K.findKey(g,T);(!E||g[E]===void 0||y===!0||y===void 0&&g[E]!==!1)&&(g[E||b]=Ud(C))}const w=(C,b)=>K.forEach(C,(y,T)=>k(y,T,b));return K.isPlainObject(a)||a instanceof this.constructor?w(a,d):K.isString(a)&&(a=a.trim())&&!C9(a)?w(A9(a),d):a!=null&&k(d,a,h),this}get(a,d){if(a=Va(a),a){const h=K.findKey(this,a);if(h){const g=this[h];if(!d)return g;if(d===!0)return _9(g);if(K.isFunction(d))return d.call(this,g,h);if(K.isRegExp(d))return d.exec(g);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,d){if(a=Va(a),a){const h=K.findKey(this,a);return!!(h&&this[h]!==void 0&&(!d||Tm(this,this[h],h,d)))}return!1}delete(a,d){const h=this;let g=!1;function k(w){if(w=Va(w),w){const C=K.findKey(h,w);C&&(!d||Tm(h,h[C],C,d))&&(delete h[C],g=!0)}}return K.isArray(a)?a.forEach(k):k(a),g}clear(a){const d=Object.keys(this);let h=d.length,g=!1;for(;h--;){const k=d[h];(!a||Tm(this,this[k],k,a,!0))&&(delete this[k],g=!0)}return g}normalize(a){const d=this,h={};return K.forEach(this,(g,k)=>{const w=K.findKey(h,k);if(w){d[w]=Ud(g),delete d[k];return}const C=a?v9(k):String(k).trim();C!==k&&delete d[k],d[C]=Ud(g),h[C]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const d=Object.create(null);return K.forEach(this,(h,g)=>{h!=null&&h!==!1&&(d[g]=a&&K.isArray(h)?h.join(", "):h)}),d}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,d])=>a+": "+d).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...d){const h=new this(a);return d.forEach(g=>h.set(g)),h}static accessor(a){const h=(this[Kx]=this[Kx]={accessors:{}}).accessors,g=this.prototype;function k(w){const C=Va(w);h[C]||(y9(g,w),h[C]=!0)}return K.isArray(a)?a.forEach(k):k(a),this}}Ru.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(Ru.prototype,({value:r},a)=>{let d=a[0].toUpperCase()+a.slice(1);return{get:()=>r,set(h){this[d]=h}}});K.freezeMethods(Ru);const ti=Ru;function Im(r,a){const d=this||Vf,h=a||d,g=ti.from(h.headers);let k=h.data;return K.forEach(r,function(C){k=C.call(d,k,g.normalize(),a?a.status:void 0)}),g.normalize(),k}function G5(r){return!!(r&&r.__CANCEL__)}function Ml(r,a,d){Le.call(this,r??"canceled",Le.ERR_CANCELED,a,d),this.name="CanceledError"}K.inherits(Ml,Le,{__CANCEL__:!0});function x9(r,a,d){const h=d.config.validateStatus;!d.status||!h||h(d.status)?r(d):a(new Le("Request failed with status code "+d.status,[Le.ERR_BAD_REQUEST,Le.ERR_BAD_RESPONSE][Math.floor(d.status/100)-4],d.config,d.request,d))}const E9=Lo.hasStandardBrowserEnv?{write(r,a,d,h,g,k){const w=[r+"="+encodeURIComponent(a)];K.isNumber(d)&&w.push("expires="+new Date(d).toGMTString()),K.isString(h)&&w.push("path="+h),K.isString(g)&&w.push("domain="+g),k===!0&&w.push("secure"),document.cookie=w.join("; ")},read(r){const a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function D9(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function S9(r,a){return a?r.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):r}function $5(r,a){return r&&!D9(a)?S9(r,a):a}const T9=Lo.hasStandardBrowserEnv?function(){const a=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a");let h;function g(k){let w=k;return a&&(d.setAttribute("href",w),w=d.href),d.setAttribute("href",w),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return h=g(window.location.href),function(w){const C=K.isString(w)?g(w):w;return C.protocol===h.protocol&&C.host===h.host}}():function(){return function(){return!0}}();function I9(r){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return a&&a[1]||""}function M9(r,a){r=r||10;const d=new Array(r),h=new Array(r);let g=0,k=0,w;return a=a!==void 0?a:1e3,function(b){const y=Date.now(),T=h[k];w||(w=y),d[g]=b,h[g]=y;let E=k,_=0;for(;E!==g;)_+=d[E++],E=E%r;if(g=(g+1)%r,g===k&&(k=(k+1)%r),y-w<a)return;const D=T&&y-T;return D?Math.round(_*1e3/D):void 0}}function Yx(r,a){let d=0;const h=M9(50,250);return g=>{const k=g.loaded,w=g.lengthComputable?g.total:void 0,C=k-d,b=h(C),y=k<=w;d=k;const T={loaded:k,total:w,progress:w?k/w:void 0,bytes:C,rate:b||void 0,estimated:b&&w&&y?(w-k)/b:void 0,event:g};T[a?"download":"upload"]=!0,r(T)}}const B9=typeof XMLHttpRequest<"u",N9=B9&&function(r){return new Promise(function(d,h){let g=r.data;const k=ti.from(r.headers).normalize();let{responseType:w,withXSRFToken:C}=r,b;function y(){r.cancelToken&&r.cancelToken.unsubscribe(b),r.signal&&r.signal.removeEventListener("abort",b)}let T;if(K.isFormData(g)){if(Lo.hasStandardBrowserEnv||Lo.hasStandardBrowserWebWorkerEnv)k.setContentType(!1);else if((T=k.getContentType())!==!1){const[B,...j]=T?T.split(";").map(P=>P.trim()).filter(Boolean):[];k.setContentType([B||"multipart/form-data",...j].join("; "))}}let E=new XMLHttpRequest;if(r.auth){const B=r.auth.username||"",j=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";k.set("Authorization","Basic "+btoa(B+":"+j))}const _=$5(r.baseURL,r.url);E.open(r.method.toUpperCase(),U5(_,r.params,r.paramsSerializer),!0),E.timeout=r.timeout;function D(){if(!E)return;const B=ti.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),P={data:!w||w==="text"||w==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:B,config:r,request:E};x9(function(R){d(R),y()},function(R){h(R),y()},P),E=null}if("onloadend"in E?E.onloadend=D:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(D)},E.onabort=function(){E&&(h(new Le("Request aborted",Le.ECONNABORTED,r,E)),E=null)},E.onerror=function(){h(new Le("Network Error",Le.ERR_NETWORK,r,E)),E=null},E.ontimeout=function(){let j=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const P=r.transitional||H5;r.timeoutErrorMessage&&(j=r.timeoutErrorMessage),h(new Le(j,P.clarifyTimeoutError?Le.ETIMEDOUT:Le.ECONNABORTED,r,E)),E=null},Lo.hasStandardBrowserEnv&&(C&&K.isFunction(C)&&(C=C(r)),C||C!==!1&&T9(_))){const B=r.xsrfHeaderName&&r.xsrfCookieName&&E9.read(r.xsrfCookieName);B&&k.set(r.xsrfHeaderName,B)}g===void 0&&k.setContentType(null),"setRequestHeader"in E&&K.forEach(k.toJSON(),function(j,P){E.setRequestHeader(P,j)}),K.isUndefined(r.withCredentials)||(E.withCredentials=!!r.withCredentials),w&&w!=="json"&&(E.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&E.addEventListener("progress",Yx(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&E.upload&&E.upload.addEventListener("progress",Yx(r.onUploadProgress)),(r.cancelToken||r.signal)&&(b=B=>{E&&(h(!B||B.type?new Ml(null,r,E):B),E.abort(),E=null)},r.cancelToken&&r.cancelToken.subscribe(b),r.signal&&(r.signal.aborted?b():r.signal.addEventListener("abort",b)));const M=I9(_);if(M&&Lo.protocols.indexOf(M)===-1){h(new Le("Unsupported protocol "+M+":",Le.ERR_BAD_REQUEST,r));return}E.send(g||null)})},Ng={http:i9,xhr:N9};K.forEach(Ng,(r,a)=>{if(r){try{Object.defineProperty(r,"name",{value:a})}catch{}Object.defineProperty(r,"adapterName",{value:a})}});const Qx=r=>`- ${r}`,P9=r=>K.isFunction(r)||r===null||r===!1,K5={getAdapter:r=>{r=K.isArray(r)?r:[r];const{length:a}=r;let d,h;const g={};for(let k=0;k<a;k++){d=r[k];let w;if(h=d,!P9(d)&&(h=Ng[(w=String(d)).toLowerCase()],h===void 0))throw new Le(`Unknown adapter '${w}'`);if(h)break;g[w||"#"+k]=h}if(!h){const k=Object.entries(g).map(([C,b])=>`adapter ${C} `+(b===!1?"is not supported by the environment":"is not available in the build"));let w=a?k.length>1?`since :
`+k.map(Qx).join(`
`):" "+Qx(k[0]):"as no adapter specified";throw new Le("There is no suitable adapter to dispatch the request "+w,"ERR_NOT_SUPPORT")}return h},adapters:Ng};function Mm(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ml(null,r)}function Zx(r){return Mm(r),r.headers=ti.from(r.headers),r.data=Im.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),K5.getAdapter(r.adapter||Vf.adapter)(r).then(function(h){return Mm(r),h.data=Im.call(r,r.transformResponse,h),h.headers=ti.from(h.headers),h},function(h){return G5(h)||(Mm(r),h&&h.response&&(h.response.data=Im.call(r,r.transformResponse,h.response),h.response.headers=ti.from(h.response.headers))),Promise.reject(h)})}const Jx=r=>r instanceof ti?{...r}:r;function Rs(r,a){a=a||{};const d={};function h(y,T,E){return K.isPlainObject(y)&&K.isPlainObject(T)?K.merge.call({caseless:E},y,T):K.isPlainObject(T)?K.merge({},T):K.isArray(T)?T.slice():T}function g(y,T,E){if(K.isUndefined(T)){if(!K.isUndefined(y))return h(void 0,y,E)}else return h(y,T,E)}function k(y,T){if(!K.isUndefined(T))return h(void 0,T)}function w(y,T){if(K.isUndefined(T)){if(!K.isUndefined(y))return h(void 0,y)}else return h(void 0,T)}function C(y,T,E){if(E in a)return h(y,T);if(E in r)return h(void 0,y)}const b={url:k,method:k,data:k,baseURL:w,transformRequest:w,transformResponse:w,paramsSerializer:w,timeout:w,timeoutMessage:w,withCredentials:w,withXSRFToken:w,adapter:w,responseType:w,xsrfCookieName:w,xsrfHeaderName:w,onUploadProgress:w,onDownloadProgress:w,decompress:w,maxContentLength:w,maxBodyLength:w,beforeRedirect:w,transport:w,httpAgent:w,httpsAgent:w,cancelToken:w,socketPath:w,responseEncoding:w,validateStatus:C,headers:(y,T)=>g(Jx(y),Jx(T),!0)};return K.forEach(Object.keys(Object.assign({},r,a)),function(T){const E=b[T]||g,_=E(r[T],a[T],T);K.isUndefined(_)&&E!==C||(d[T]=_)}),d}const Y5="1.6.8",Uf={};["object","boolean","number","function","string","symbol"].forEach((r,a)=>{Uf[r]=function(h){return typeof h===r||"a"+(a<1?"n ":" ")+r}});const Xx={};Uf.transitional=function(a,d,h){function g(k,w){return"[Axios v"+Y5+"] Transitional option '"+k+"'"+w+(h?". "+h:"")}return(k,w,C)=>{if(a===!1)throw new Le(g(w," has been removed"+(d?" in "+d:"")),Le.ERR_DEPRECATED);return d&&!Xx[w]&&(Xx[w]=!0,console.warn(g(w," has been deprecated since v"+d+" and will be removed in the near future"))),a?a(k,w,C):!0}};function L9(r,a,d){if(typeof r!="object")throw new Le("options must be an object",Le.ERR_BAD_OPTION_VALUE);const h=Object.keys(r);let g=h.length;for(;g-- >0;){const k=h[g],w=a[k];if(w){const C=r[k],b=C===void 0||w(C,k,r);if(b!==!0)throw new Le("option "+k+" must be "+b,Le.ERR_BAD_OPTION_VALUE);continue}if(d!==!0)throw new Le("Unknown option "+k,Le.ERR_BAD_OPTION)}}const Pg={assertOptions:L9,validators:Uf},yi=Pg.validators;class fu{constructor(a){this.defaults=a,this.interceptors={request:new $x,response:new $x}}async request(a,d){try{return await this._request(a,d)}catch(h){if(h instanceof Error){let g;Error.captureStackTrace?Error.captureStackTrace(g={}):g=new Error;const k=g.stack?g.stack.replace(/^.+\n/,""):"";h.stack?k&&!String(h.stack).endsWith(k.replace(/^.+\n.+\n/,""))&&(h.stack+=`
`+k):h.stack=k}throw h}}_request(a,d){typeof a=="string"?(d=d||{},d.url=a):d=a||{},d=Rs(this.defaults,d);const{transitional:h,paramsSerializer:g,headers:k}=d;h!==void 0&&Pg.assertOptions(h,{silentJSONParsing:yi.transitional(yi.boolean),forcedJSONParsing:yi.transitional(yi.boolean),clarifyTimeoutError:yi.transitional(yi.boolean)},!1),g!=null&&(K.isFunction(g)?d.paramsSerializer={serialize:g}:Pg.assertOptions(g,{encode:yi.function,serialize:yi.function},!0)),d.method=(d.method||this.defaults.method||"get").toLowerCase();let w=k&&K.merge(k.common,k[d.method]);k&&K.forEach(["delete","get","head","post","put","patch","common"],M=>{delete k[M]}),d.headers=ti.concat(w,k);const C=[];let b=!0;this.interceptors.request.forEach(function(B){typeof B.runWhen=="function"&&B.runWhen(d)===!1||(b=b&&B.synchronous,C.unshift(B.fulfilled,B.rejected))});const y=[];this.interceptors.response.forEach(function(B){y.push(B.fulfilled,B.rejected)});let T,E=0,_;if(!b){const M=[Zx.bind(this),void 0];for(M.unshift.apply(M,C),M.push.apply(M,y),_=M.length,T=Promise.resolve(d);E<_;)T=T.then(M[E++],M[E++]);return T}_=C.length;let D=d;for(E=0;E<_;){const M=C[E++],B=C[E++];try{D=M(D)}catch(j){B.call(this,j);break}}try{T=Zx.call(this,D)}catch(M){return Promise.reject(M)}for(E=0,_=y.length;E<_;)T=T.then(y[E++],y[E++]);return T}getUri(a){a=Rs(this.defaults,a);const d=$5(a.baseURL,a.url);return U5(d,a.params,a.paramsSerializer)}}K.forEach(["delete","get","head","options"],function(a){fu.prototype[a]=function(d,h){return this.request(Rs(h||{},{method:a,url:d,data:(h||{}).data}))}});K.forEach(["post","put","patch"],function(a){function d(h){return function(k,w,C){return this.request(Rs(C||{},{method:a,headers:h?{"Content-Type":"multipart/form-data"}:{},url:k,data:w}))}}fu.prototype[a]=d(),fu.prototype[a+"Form"]=d(!0)});const Hd=fu;class Hf{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let d;this.promise=new Promise(function(k){d=k});const h=this;this.promise.then(g=>{if(!h._listeners)return;let k=h._listeners.length;for(;k-- >0;)h._listeners[k](g);h._listeners=null}),this.promise.then=g=>{let k;const w=new Promise(C=>{h.subscribe(C),k=C}).then(g);return w.cancel=function(){h.unsubscribe(k)},w},a(function(k,w,C){h.reason||(h.reason=new Ml(k,w,C),d(h.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const d=this._listeners.indexOf(a);d!==-1&&this._listeners.splice(d,1)}static source(){let a;return{token:new Hf(function(g){a=g}),cancel:a}}}const O9=Hf;function z9(r){return function(d){return r.apply(null,d)}}function R9(r){return K.isObject(r)&&r.isAxiosError===!0}const Lg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lg).forEach(([r,a])=>{Lg[a]=r});const j9=Lg;function Q5(r){const a=new Hd(r),d=I5(Hd.prototype.request,a);return K.extend(d,Hd.prototype,a,{allOwnKeys:!0}),K.extend(d,a,null,{allOwnKeys:!0}),d.create=function(g){return Q5(Rs(r,g))},d}const dt=Q5(Vf);dt.Axios=Hd;dt.CanceledError=Ml;dt.CancelToken=O9;dt.isCancel=G5;dt.VERSION=Y5;dt.toFormData=zu;dt.AxiosError=Le;dt.Cancel=dt.CanceledError;dt.all=function(a){return Promise.all(a)};dt.spread=z9;dt.isAxiosError=R9;dt.mergeConfig=Rs;dt.AxiosHeaders=ti;dt.formToJSON=r=>q5(K.isHTMLForm(r)?new FormData(r):r);dt.getAdapter=K5.getAdapter;dt.HttpStatusCode=j9;dt.default=dt;var{entries:Z5,setPrototypeOf:e2,isFrozen:F9,getPrototypeOf:V9,getOwnPropertyDescriptor:U9}=Object,{freeze:an,seal:to,create:J5}=Object,{apply:Og,construct:zg}=typeof Reflect<"u"&&Reflect;an||(an=function(r){return r});to||(to=function(r){return r});Og||(Og=function(r,a,d){return r.apply(a,d)});zg||(zg=function(r,a){return new r(...a)});var xd=Pn(Array.prototype.forEach),t2=Pn(Array.prototype.pop),Ua=Pn(Array.prototype.push),Wd=Pn(String.prototype.toLowerCase),Bm=Pn(String.prototype.toString),n2=Pn(String.prototype.match),Ha=Pn(String.prototype.replace),H9=Pn(String.prototype.indexOf),W9=Pn(String.prototype.trim),go=Pn(Object.prototype.hasOwnProperty),Tn=Pn(RegExp.prototype.test),Wa=q9(TypeError);function Pn(r){return function(a){for(var d=arguments.length,h=new Array(d>1?d-1:0),g=1;g<d;g++)h[g-1]=arguments[g];return Og(r,a,h)}}function q9(r){return function(){for(var a=arguments.length,d=new Array(a),h=0;h<a;h++)d[h]=arguments[h];return zg(r,d)}}function Se(r,a){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Wd;e2&&e2(r,null);let h=a.length;for(;h--;){let g=a[h];if(typeof g=="string"){let k=d(g);k!==g&&(F9(a)||(a[h]=k),g=k)}r[g]=!0}return r}function G9(r){for(let a=0;a<r.length;a++)go(r,a)||(r[a]=null);return r}function fr(r){let a=J5(null);for(let[d,h]of Z5(r))go(r,d)&&(Array.isArray(h)?a[d]=G9(h):h&&typeof h=="object"&&h.constructor===Object?a[d]=fr(h):a[d]=h);return a}function Ed(r,a){for(;r!==null;){let h=U9(r,a);if(h){if(h.get)return Pn(h.get);if(typeof h.value=="function")return Pn(h.value)}r=V9(r)}function d(){return null}return d}var o2=an(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Nm=an(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Pm=an(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),$9=an(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Lm=an(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),K9=an(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),i2=an(["#text"]),r2=an(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Om=an(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),s2=an(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Dd=an(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Y9=to(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Q9=to(/<%[\w\W]*|[\w\W]*%>/gm),Z9=to(/\${[\w\W]*}/gm),J9=to(/^data-[\-\w.\u00B7-\uFFFF]/),X9=to(/^aria-[\-\w]+$/),X5=to(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),e8=to(/^(?:\w+script|data):/i),t8=to(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),eD=to(/^html$/i),n8=to(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i),a2=Object.freeze({__proto__:null,MUSTACHE_EXPR:Y9,ERB_EXPR:Q9,TMPLIT_EXPR:Z9,DATA_ATTR:J9,ARIA_ATTR:X9,IS_ALLOWED_URI:X5,IS_SCRIPT_OR_DATA:e8,ATTR_WHITESPACE:t8,DOCTYPE_NAME:eD,CUSTOM_ELEMENT:n8}),o8=function(){return typeof window>"u"?null:window},i8=function(r,a){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let d=null,h="data-tt-policy-suffix";a&&a.hasAttribute(h)&&(d=a.getAttribute(h));let g="dompurify"+(d?"#"+d:"");try{return r.createPolicy(g,{createHTML(k){return k},createScriptURL(k){return k}})}catch{return console.warn("TrustedTypes policy "+g+" could not be created."),null}};function tD(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o8(),a=V=>tD(V);if(a.version="3.0.10",a.removed=[],!r||!r.document||r.document.nodeType!==9)return a.isSupported=!1,a;let{document:d}=r,h=d,g=h.currentScript,{DocumentFragment:k,HTMLTemplateElement:w,Node:C,Element:b,NodeFilter:y,NamedNodeMap:T=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:E,DOMParser:_,trustedTypes:D}=r,M=b.prototype,B=Ed(M,"cloneNode"),j=Ed(M,"nextSibling"),P=Ed(M,"childNodes"),N=Ed(M,"parentNode");if(typeof w=="function"){let V=d.createElement("template");V.content&&V.content.ownerDocument&&(d=V.content.ownerDocument)}let R,U="",{implementation:q,createNodeIterator:X,createDocumentFragment:$,getElementsByTagName:J}=d,{importNode:z}=h,Y={};a.isSupported=typeof Z5=="function"&&typeof N=="function"&&q&&q.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:fe,ERB_EXPR:xe,TMPLIT_EXPR:ve,DATA_ATTR:Te,ARIA_ATTR:st,IS_SCRIPT_OR_DATA:tt,ATTR_WHITESPACE:Lt,CUSTOM_ELEMENT:ee}=a2,{IS_ALLOWED_URI:he}=a2,ne=null,me=Se({},[...o2,...Nm,...Pm,...Lm,...i2]),ue=null,Ve=Se({},[...r2,...Om,...s2,...Dd]),Ce=Object.seal(J5(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),xt=null,Ne=null,tn=!0,Ee=!0,zn=!1,dn=!0,un=!1,wt=!1,ai=!1,li=!1,we=!1,nn=!1,ci=!1,Br=!0,vo=!1,Nr="user-content-",di=!0,Cn=!1,Ue={},ut=null,Rn=Se({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gi=null,Kt=Se({},["audio","video","img","source","image","track"]),Vt=null,ui=Se({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),hi="http://www.w3.org/1998/Math/MathML",yo="http://www.w3.org/2000/svg",at="http://www.w3.org/1999/xhtml",xo=at,pi=!1,ke=null,lt=Se({},[hi,yo,at],Bm),Me=null,Ze=["application/xhtml+xml","text/html"],nt="text/html",Je=null,At=null,Nl=d.createElement("form"),Pr=function(V){return V instanceof RegExp||V instanceof Function},Ws=function(){let V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(At&&At===V)){if((!V||typeof V!="object")&&(V={}),V=fr(V),Me=Ze.indexOf(V.PARSER_MEDIA_TYPE)===-1?nt:V.PARSER_MEDIA_TYPE,Je=Me==="application/xhtml+xml"?Bm:Wd,ne=go(V,"ALLOWED_TAGS")?Se({},V.ALLOWED_TAGS,Je):me,ue=go(V,"ALLOWED_ATTR")?Se({},V.ALLOWED_ATTR,Je):Ve,ke=go(V,"ALLOWED_NAMESPACES")?Se({},V.ALLOWED_NAMESPACES,Bm):lt,Vt=go(V,"ADD_URI_SAFE_ATTR")?Se(fr(ui),V.ADD_URI_SAFE_ATTR,Je):ui,Gi=go(V,"ADD_DATA_URI_TAGS")?Se(fr(Kt),V.ADD_DATA_URI_TAGS,Je):Kt,ut=go(V,"FORBID_CONTENTS")?Se({},V.FORBID_CONTENTS,Je):Rn,xt=go(V,"FORBID_TAGS")?Se({},V.FORBID_TAGS,Je):{},Ne=go(V,"FORBID_ATTR")?Se({},V.FORBID_ATTR,Je):{},Ue=go(V,"USE_PROFILES")?V.USE_PROFILES:!1,tn=V.ALLOW_ARIA_ATTR!==!1,Ee=V.ALLOW_DATA_ATTR!==!1,zn=V.ALLOW_UNKNOWN_PROTOCOLS||!1,dn=V.ALLOW_SELF_CLOSE_IN_ATTR!==!1,un=V.SAFE_FOR_TEMPLATES||!1,wt=V.WHOLE_DOCUMENT||!1,we=V.RETURN_DOM||!1,nn=V.RETURN_DOM_FRAGMENT||!1,ci=V.RETURN_TRUSTED_TYPE||!1,li=V.FORCE_BODY||!1,Br=V.SANITIZE_DOM!==!1,vo=V.SANITIZE_NAMED_PROPS||!1,di=V.KEEP_CONTENT!==!1,Cn=V.IN_PLACE||!1,he=V.ALLOWED_URI_REGEXP||X5,xo=V.NAMESPACE||at,Ce=V.CUSTOM_ELEMENT_HANDLING||{},V.CUSTOM_ELEMENT_HANDLING&&Pr(V.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ce.tagNameCheck=V.CUSTOM_ELEMENT_HANDLING.tagNameCheck),V.CUSTOM_ELEMENT_HANDLING&&Pr(V.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ce.attributeNameCheck=V.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),V.CUSTOM_ELEMENT_HANDLING&&typeof V.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Ce.allowCustomizedBuiltInElements=V.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),un&&(Ee=!1),nn&&(we=!0),Ue&&(ne=Se({},i2),ue=[],Ue.html===!0&&(Se(ne,o2),Se(ue,r2)),Ue.svg===!0&&(Se(ne,Nm),Se(ue,Om),Se(ue,Dd)),Ue.svgFilters===!0&&(Se(ne,Pm),Se(ue,Om),Se(ue,Dd)),Ue.mathMl===!0&&(Se(ne,Lm),Se(ue,s2),Se(ue,Dd))),V.ADD_TAGS&&(ne===me&&(ne=fr(ne)),Se(ne,V.ADD_TAGS,Je)),V.ADD_ATTR&&(ue===Ve&&(ue=fr(ue)),Se(ue,V.ADD_ATTR,Je)),V.ADD_URI_SAFE_ATTR&&Se(Vt,V.ADD_URI_SAFE_ATTR,Je),V.FORBID_CONTENTS&&(ut===Rn&&(ut=fr(ut)),Se(ut,V.FORBID_CONTENTS,Je)),di&&(ne["#text"]=!0),wt&&Se(ne,["html","head","body"]),ne.table&&(Se(ne,["tbody"]),delete xt.tbody),V.TRUSTED_TYPES_POLICY){if(typeof V.TRUSTED_TYPES_POLICY.createHTML!="function")throw Wa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof V.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Wa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');R=V.TRUSTED_TYPES_POLICY,U=R.createHTML("")}else R===void 0&&(R=i8(D,g)),R!==null&&typeof U=="string"&&(U=R.createHTML(""));an&&an(V),At=V}},Pl=Se({},["mi","mo","mn","ms","mtext"]),qs=Se({},["foreignobject","desc","title","annotation-xml"]),Vu=Se({},["title","style","font","a","script"]),Ll=Se({},[...Nm,...Pm,...$9]),Yt=Se({},[...Lm,...K9]),Uu=function(V){let ae=N(V);(!ae||!ae.tagName)&&(ae={namespaceURI:xo,tagName:"template"});let se=Wd(V.tagName),Fe=Wd(ae.tagName);return ke[V.namespaceURI]?V.namespaceURI===yo?ae.namespaceURI===at?se==="svg":ae.namespaceURI===hi?se==="svg"&&(Fe==="annotation-xml"||Pl[Fe]):!!Ll[se]:V.namespaceURI===hi?ae.namespaceURI===at?se==="math":ae.namespaceURI===yo?se==="math"&&qs[Fe]:!!Yt[se]:V.namespaceURI===at?ae.namespaceURI===yo&&!qs[Fe]||ae.namespaceURI===hi&&!Pl[Fe]?!1:!Yt[se]&&(Vu[se]||!Ll[se]):!!(Me==="application/xhtml+xml"&&ke[V.namespaceURI]):!1},jn=function(V){Ua(a.removed,{element:V});try{V.parentNode.removeChild(V)}catch{V.remove()}},mi=function(V,ae){try{Ua(a.removed,{attribute:ae.getAttributeNode(V),from:ae})}catch{Ua(a.removed,{attribute:null,from:ae})}if(ae.removeAttribute(V),V==="is"&&!ue[V])if(we||nn)try{jn(ae)}catch{}else try{ae.setAttribute(V,"")}catch{}},Ol=function(V){let ae=null,se=null;if(li)V="<remove></remove>"+V;else{let ht=n2(V,/^[\r\n\t ]+/);se=ht&&ht[0]}Me==="application/xhtml+xml"&&xo===at&&(V='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+V+"</body></html>");let Fe=R?R.createHTML(V):V;if(xo===at)try{ae=new _().parseFromString(Fe,Me)}catch{}if(!ae||!ae.documentElement){ae=q.createDocument(xo,"template",null);try{ae.documentElement.innerHTML=pi?U:Fe}catch{}}let It=ae.body||ae.documentElement;return V&&se&&It.insertBefore(d.createTextNode(se),It.childNodes[0]||null),xo===at?J.call(ae,wt?"html":"body")[0]:wt?ae.documentElement:It},zl=function(V){return X.call(V.ownerDocument||V,V,y.SHOW_ELEMENT|y.SHOW_COMMENT|y.SHOW_TEXT|y.SHOW_PROCESSING_INSTRUCTION,null)},Hu=function(V){return V instanceof E&&(typeof V.nodeName!="string"||typeof V.textContent!="string"||typeof V.removeChild!="function"||!(V.attributes instanceof T)||typeof V.removeAttribute!="function"||typeof V.setAttribute!="function"||typeof V.namespaceURI!="string"||typeof V.insertBefore!="function"||typeof V.hasChildNodes!="function")},Rl=function(V){return typeof C=="function"&&V instanceof C},no=function(V,ae,se){Y[V]&&xd(Y[V],Fe=>{Fe.call(a,ae,se,At)})},jo=function(V){let ae=null;if(no("beforeSanitizeElements",V,null),Hu(V))return jn(V),!0;let se=Je(V.nodeName);if(no("uponSanitizeElement",V,{tagName:se,allowedTags:ne}),V.hasChildNodes()&&!Rl(V.firstElementChild)&&Tn(/<[/\w]/g,V.innerHTML)&&Tn(/<[/\w]/g,V.textContent))return jn(V),!0;if(!ne[se]||xt[se]){if(!xt[se]&&jl(se)&&(Ce.tagNameCheck instanceof RegExp&&Tn(Ce.tagNameCheck,se)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(se)))return!1;if(di&&!ut[se]){let Fe=N(V)||V.parentNode,It=P(V)||V.childNodes;if(It&&Fe){let ht=It.length;for(let Ut=ht-1;Ut>=0;--Ut)Fe.insertBefore(B(It[Ut],!0),j(V))}}return jn(V),!0}return V instanceof b&&!Uu(V)||(se==="noscript"||se==="noembed"||se==="noframes")&&Tn(/<\/no(script|embed|frames)/i,V.innerHTML)?(jn(V),!0):(un&&V.nodeType===3&&(ae=V.textContent,xd([fe,xe,ve],Fe=>{ae=Ha(ae,Fe," ")}),V.textContent!==ae&&(Ua(a.removed,{element:V.cloneNode()}),V.textContent=ae)),no("afterSanitizeElements",V,null),!1)},$i=function(V,ae,se){if(Br&&(ae==="id"||ae==="name")&&(se in d||se in Nl))return!1;if(!(Ee&&!Ne[ae]&&Tn(Te,ae))&&!(tn&&Tn(st,ae))){if(!ue[ae]||Ne[ae]){if(!(jl(V)&&(Ce.tagNameCheck instanceof RegExp&&Tn(Ce.tagNameCheck,V)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(V))&&(Ce.attributeNameCheck instanceof RegExp&&Tn(Ce.attributeNameCheck,ae)||Ce.attributeNameCheck instanceof Function&&Ce.attributeNameCheck(ae))||ae==="is"&&Ce.allowCustomizedBuiltInElements&&(Ce.tagNameCheck instanceof RegExp&&Tn(Ce.tagNameCheck,se)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(se))))return!1}else if(!Vt[ae]&&!Tn(he,Ha(se,Lt,""))&&!((ae==="src"||ae==="xlink:href"||ae==="href")&&V!=="script"&&H9(se,"data:")===0&&Gi[V])&&!(zn&&!Tn(tt,Ha(se,Lt,"")))&&se)return!1}return!0},jl=function(V){return V!=="annotation-xml"&&n2(V,ee)},Fl=function(V){no("beforeSanitizeAttributes",V,null);let{attributes:ae}=V;if(!ae)return;let se={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ue},Fe=ae.length;for(;Fe--;){let It=ae[Fe],{name:ht,namespaceURI:Ut,value:oo}=It,Fn=Je(ht),Qt=ht==="value"?oo:W9(oo);if(se.attrName=Fn,se.attrValue=Qt,se.keepAttr=!0,se.forceKeepAttr=void 0,no("uponSanitizeAttribute",V,se),Qt=se.attrValue,se.forceKeepAttr||(mi(ht,V),!se.keepAttr))continue;if(!dn&&Tn(/\/>/i,Qt)){mi(ht,V);continue}un&&xd([fe,xe,ve],Ul=>{Qt=Ha(Qt,Ul," ")});let Vl=Je(V.nodeName);if($i(Vl,Fn,Qt)){if(vo&&(Fn==="id"||Fn==="name")&&(mi(ht,V),Qt=Nr+Qt),R&&typeof D=="object"&&typeof D.getAttributeType=="function"&&!Ut)switch(D.getAttributeType(Vl,Fn)){case"TrustedHTML":{Qt=R.createHTML(Qt);break}case"TrustedScriptURL":{Qt=R.createScriptURL(Qt);break}}try{Ut?V.setAttributeNS(Ut,ht,Qt):V.setAttribute(ht,Qt),t2(a.removed)}catch{}}}no("afterSanitizeAttributes",V,null)},Wu=function V(ae){let se=null,Fe=zl(ae);for(no("beforeSanitizeShadowDOM",ae,null);se=Fe.nextNode();)no("uponSanitizeShadowNode",se,null),!jo(se)&&(se.content instanceof k&&V(se.content),Fl(se));no("afterSanitizeShadowDOM",ae,null)};return a.sanitize=function(V){let ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},se=null,Fe=null,It=null,ht=null;if(pi=!V,pi&&(V="<!-->"),typeof V!="string"&&!Rl(V))if(typeof V.toString=="function"){if(V=V.toString(),typeof V!="string")throw Wa("dirty is not a string, aborting")}else throw Wa("toString is not a function");if(!a.isSupported)return V;if(ai||Ws(ae),a.removed=[],typeof V=="string"&&(Cn=!1),Cn){if(V.nodeName){let Fn=Je(V.nodeName);if(!ne[Fn]||xt[Fn])throw Wa("root node is forbidden and cannot be sanitized in-place")}}else if(V instanceof C)se=Ol("<!---->"),Fe=se.ownerDocument.importNode(V,!0),Fe.nodeType===1&&Fe.nodeName==="BODY"||Fe.nodeName==="HTML"?se=Fe:se.appendChild(Fe);else{if(!we&&!un&&!wt&&V.indexOf("<")===-1)return R&&ci?R.createHTML(V):V;if(se=Ol(V),!se)return we?null:ci?U:""}se&&li&&jn(se.firstChild);let Ut=zl(Cn?V:se);for(;It=Ut.nextNode();)jo(It)||(It.content instanceof k&&Wu(It.content),Fl(It));if(Cn)return V;if(we){if(nn)for(ht=$.call(se.ownerDocument);se.firstChild;)ht.appendChild(se.firstChild);else ht=se;return(ue.shadowroot||ue.shadowrootmode)&&(ht=z.call(h,ht,!0)),ht}let oo=wt?se.outerHTML:se.innerHTML;return wt&&ne["!doctype"]&&se.ownerDocument&&se.ownerDocument.doctype&&se.ownerDocument.doctype.name&&Tn(eD,se.ownerDocument.doctype.name)&&(oo="<!DOCTYPE "+se.ownerDocument.doctype.name+`>
`+oo),un&&xd([fe,xe,ve],Fn=>{oo=Ha(oo,Fn," ")}),R&&ci?R.createHTML(oo):oo},a.setConfig=function(){let V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ws(V),ai=!0},a.clearConfig=function(){At=null,ai=!1},a.isValidAttribute=function(V,ae,se){At||Ws({});let Fe=Je(V),It=Je(ae);return $i(Fe,It,se)},a.addHook=function(V,ae){typeof ae=="function"&&(Y[V]=Y[V]||[],Ua(Y[V],ae))},a.removeHook=function(V){if(Y[V])return t2(Y[V])},a.removeHooks=function(V){Y[V]&&(Y[V]=[])},a.removeAllHooks=function(){Y={}},a}var r8=tD(),s8=r=>{switch(r){case"success":return c8;case"info":return u8;case"warning":return d8;case"error":return h8;default:return null}},a8=Array(12).fill(0),l8=({visible:r})=>L.createElement("div",{className:"sonner-loading-wrapper","data-visible":r},L.createElement("div",{className:"sonner-spinner"},a8.map((a,d)=>L.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${d}`})))),c8=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),d8=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),u8=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),h8=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),p8=()=>{let[r,a]=L.useState(!1);return L.useEffect(()=>{let d=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",d),()=>window.removeEventListener("visibilitychange",d)},[]),r},Rg=1,m8=class{constructor(){this.subscribe=r=>(this.subscribers.push(r),()=>{let a=this.subscribers.indexOf(r);this.subscribers.splice(a,1)}),this.publish=r=>{this.subscribers.forEach(a=>a(r))},this.addToast=r=>{this.publish(r),this.toasts=[...this.toasts,r]},this.create=r=>{var a;let{message:d,...h}=r,g=typeof(r==null?void 0:r.id)=="number"||((a=r.id)==null?void 0:a.length)>0?r.id:Rg++,k=this.toasts.find(C=>C.id===g),w=r.dismissible===void 0?!0:r.dismissible;return k?this.toasts=this.toasts.map(C=>C.id===g?(this.publish({...C,...r,id:g,title:d}),{...C,...r,id:g,dismissible:w,title:d}):C):this.addToast({title:d,...h,dismissible:w,id:g}),g},this.dismiss=r=>(r||this.toasts.forEach(a=>{this.subscribers.forEach(d=>d({id:a.id,dismiss:!0}))}),this.subscribers.forEach(a=>a({id:r,dismiss:!0})),r),this.message=(r,a)=>this.create({...a,message:r}),this.error=(r,a)=>this.create({...a,message:r,type:"error"}),this.success=(r,a)=>this.create({...a,type:"success",message:r}),this.info=(r,a)=>this.create({...a,type:"info",message:r}),this.warning=(r,a)=>this.create({...a,type:"warning",message:r}),this.loading=(r,a)=>this.create({...a,type:"loading",message:r}),this.promise=(r,a)=>{if(!a)return;let d;a.loading!==void 0&&(d=this.create({...a,promise:r,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));let h=r instanceof Promise?r:r(),g=d!==void 0;return h.then(k=>{if(k&&typeof k.ok=="boolean"&&!k.ok){g=!1;let w=typeof a.error=="function"?a.error(`HTTP error! status: ${k.status}`):a.error,C=typeof a.description=="function"?a.description(`HTTP error! status: ${k.status}`):a.description;this.create({id:d,type:"error",message:w,description:C})}else if(a.success!==void 0){g=!1;let w=typeof a.success=="function"?a.success(k):a.success,C=typeof a.description=="function"?a.description(k):a.description;this.create({id:d,type:"success",message:w,description:C})}}).catch(k=>{if(a.error!==void 0){g=!1;let w=typeof a.error=="function"?a.error(k):a.error,C=typeof a.description=="function"?a.description(k):a.description;this.create({id:d,type:"error",message:w,description:C})}}).finally(()=>{var k;g&&(this.dismiss(d),d=void 0),(k=a.finally)==null||k.call(a)}),d},this.custom=(r,a)=>{let d=(a==null?void 0:a.id)||Rg++;return this.create({jsx:r(d),id:d,...a}),d},this.subscribers=[],this.toasts=[]}},fo=new m8,g8=(r,a)=>{let d=(a==null?void 0:a.id)||Rg++;return fo.addToast({title:r,...a,id:d}),d},f8=g8,Is=Object.assign(f8,{success:fo.success,info:fo.info,warning:fo.warning,error:fo.error,custom:fo.custom,message:fo.message,promise:fo.promise,dismiss:fo.dismiss,loading:fo.loading});function k8(r,{insertAt:a}={}){if(!r||typeof document>"u")return;let d=document.head||document.getElementsByTagName("head")[0],h=document.createElement("style");h.type="text/css",a==="top"&&d.firstChild?d.insertBefore(h,d.firstChild):d.appendChild(h),h.styleSheet?h.styleSheet.cssText=r:h.appendChild(document.createTextNode(r))}k8(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Sd(r){return r.label!==void 0&&typeof r.onClick=="function"}var b8=3,w8="32px",A8=4e3,_8=356,C8=14,v8=20,y8=200;function x8(...r){return r.filter(Boolean).join(" ")}var E8=r=>{var a,d,h,g,k,w,C;let{invert:b,toast:y,unstyled:T,interacting:E,setHeights:_,visibleToasts:D,heights:M,index:B,toasts:j,expanded:P,removeToast:N,closeButton:R,style:U,cancelButtonStyle:q,actionButtonStyle:X,className:$="",descriptionClassName:J="",duration:z,position:Y,gap:fe,loadingIcon:xe,expandByDefault:ve,classNames:Te,icons:st,closeButtonAriaLabel:tt="Close toast",pauseWhenPageIsHidden:Lt,cn:ee}=r,[he,ne]=L.useState(!1),[me,ue]=L.useState(!1),[Ve,Ce]=L.useState(!1),[xt,Ne]=L.useState(!1),[tn,Ee]=L.useState(0),[zn,dn]=L.useState(0),un=L.useRef(null),wt=L.useRef(null),ai=B===0,li=B+1<=D,we=y.type,nn=y.dismissible!==!1,ci=y.className||"",Br=y.descriptionClassName||"",vo=L.useMemo(()=>M.findIndex(ke=>ke.toastId===y.id)||0,[M,y.id]),Nr=L.useMemo(()=>{var ke;return(ke=y.closeButton)!=null?ke:R},[y.closeButton,R]),di=L.useMemo(()=>y.duration||z||A8,[y.duration,z]),Cn=L.useRef(0),Ue=L.useRef(0),ut=L.useRef(0),Rn=L.useRef(null),[Gi,Kt]=Y.split("-"),Vt=L.useMemo(()=>M.reduce((ke,lt,Me)=>Me>=vo?ke:ke+lt.height,0),[M,vo]),ui=p8(),hi=y.invert||b,yo=we==="loading";Ue.current=L.useMemo(()=>vo*fe+Vt,[vo,Vt]),L.useEffect(()=>{ne(!0)},[]),L.useLayoutEffect(()=>{if(!he)return;let ke=wt.current,lt=ke.style.height;ke.style.height="auto";let Me=ke.getBoundingClientRect().height;ke.style.height=lt,dn(Me),_(Ze=>Ze.find(nt=>nt.toastId===y.id)?Ze.map(nt=>nt.toastId===y.id?{...nt,height:Me}:nt):[{toastId:y.id,height:Me,position:y.position},...Ze])},[he,y.title,y.description,_,y.id]);let at=L.useCallback(()=>{ue(!0),Ee(Ue.current),_(ke=>ke.filter(lt=>lt.toastId!==y.id)),setTimeout(()=>{N(y)},y8)},[y,N,_,Ue]);L.useEffect(()=>{if(y.promise&&we==="loading"||y.duration===1/0||y.type==="loading")return;let ke,lt=di;return P||E||Lt&&ui?(()=>{if(ut.current<Cn.current){let Me=new Date().getTime()-Cn.current;lt=lt-Me}ut.current=new Date().getTime()})():lt!==1/0&&(Cn.current=new Date().getTime(),ke=setTimeout(()=>{var Me;(Me=y.onAutoClose)==null||Me.call(y,y),at()},lt)),()=>clearTimeout(ke)},[P,E,ve,y,di,at,y.promise,we,Lt,ui]),L.useEffect(()=>{let ke=wt.current;if(ke){let lt=ke.getBoundingClientRect().height;return dn(lt),_(Me=>[{toastId:y.id,height:lt,position:y.position},...Me]),()=>_(Me=>Me.filter(Ze=>Ze.toastId!==y.id))}},[_,y.id]),L.useEffect(()=>{y.delete&&at()},[at,y.delete]);function xo(){return st!=null&&st.loading?L.createElement("div",{className:"sonner-loader","data-visible":we==="loading"},st.loading):xe?L.createElement("div",{className:"sonner-loader","data-visible":we==="loading"},xe):L.createElement(l8,{visible:we==="loading"})}function pi(ke){return{__html:r8.sanitize(ke)}}return L.createElement("li",{"aria-live":y.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:wt,className:ee($,ci,Te==null?void 0:Te.toast,(a=y==null?void 0:y.classNames)==null?void 0:a.toast,Te==null?void 0:Te.default,Te==null?void 0:Te[we],(d=y==null?void 0:y.classNames)==null?void 0:d[we]),"data-sonner-toast":"","data-styled":!(y.jsx||y.unstyled||T),"data-mounted":he,"data-promise":!!y.promise,"data-removed":me,"data-visible":li,"data-y-position":Gi,"data-x-position":Kt,"data-index":B,"data-front":ai,"data-swiping":Ve,"data-dismissible":nn,"data-type":we,"data-invert":hi,"data-swipe-out":xt,"data-expanded":!!(P||ve&&he),style:{"--index":B,"--toasts-before":B,"--z-index":j.length-B,"--offset":`${me?tn:Ue.current}px`,"--initial-height":ve?"auto":`${zn}px`,...U,...y.style},onPointerDown:ke=>{yo||!nn||(un.current=new Date,Ee(Ue.current),ke.target.setPointerCapture(ke.pointerId),ke.target.tagName!=="BUTTON"&&(Ce(!0),Rn.current={x:ke.clientX,y:ke.clientY}))},onPointerUp:()=>{var ke,lt,Me,Ze;if(xt||!nn)return;Rn.current=null;let nt=Number(((ke=wt.current)==null?void 0:ke.style.getPropertyValue("--swipe-amount").replace("px",""))||0),Je=new Date().getTime()-((lt=un.current)==null?void 0:lt.getTime()),At=Math.abs(nt)/Je;if(Math.abs(nt)>=v8||At>.11){Ee(Ue.current),(Me=y.onDismiss)==null||Me.call(y,y),at(),Ne(!0);return}(Ze=wt.current)==null||Ze.style.setProperty("--swipe-amount","0px"),Ce(!1)},onPointerMove:ke=>{var lt;if(!Rn.current||!nn)return;let Me=ke.clientY-Rn.current.y,Ze=ke.clientX-Rn.current.x,nt=(Gi==="top"?Math.min:Math.max)(0,Me),Je=ke.pointerType==="touch"?10:2;Math.abs(nt)>Je?(lt=wt.current)==null||lt.style.setProperty("--swipe-amount",`${Me}px`):Math.abs(Ze)>Je&&(Rn.current=null)}},Nr&&!y.jsx?L.createElement("button",{"aria-label":tt,"data-disabled":yo,"data-close-button":!0,onClick:yo||!nn?()=>{}:()=>{var ke;at(),(ke=y.onDismiss)==null||ke.call(y,y)},className:ee(Te==null?void 0:Te.closeButton,(h=y==null?void 0:y.classNames)==null?void 0:h.closeButton)},L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},L.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),L.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,y.jsx||L.isValidElement(y.title)?y.jsx||y.title:L.createElement(L.Fragment,null,we||y.icon||y.promise?L.createElement("div",{"data-icon":"",className:ee(Te==null?void 0:Te.icon)},y.promise||y.type==="loading"&&!y.icon?y.icon||xo():null,y.type!=="loading"?y.icon||(st==null?void 0:st[we])||s8(we):null):null,L.createElement("div",{"data-content":"",className:ee(Te==null?void 0:Te.content)},L.createElement("div",{"data-title":"",className:ee(Te==null?void 0:Te.title,(g=y==null?void 0:y.classNames)==null?void 0:g.title),dangerouslySetInnerHTML:pi(y.title)}),y.description?L.createElement("div",{"data-description":"",className:ee(J,Br,Te==null?void 0:Te.description,(k=y==null?void 0:y.classNames)==null?void 0:k.description),dangerouslySetInnerHTML:pi(y.description)}):null),L.isValidElement(y.cancel)?y.cancel:y.cancel&&Sd(y.cancel)?L.createElement("button",{"data-button":!0,"data-cancel":!0,style:y.cancelButtonStyle||q,onClick:ke=>{Sd(y.cancel)&&nn&&(at(),y.cancel.onClick(ke))},className:ee(Te==null?void 0:Te.cancelButton,(w=y==null?void 0:y.classNames)==null?void 0:w.cancelButton)},y.cancel.label):null,L.isValidElement(y.action)?y.action:y.action&&Sd(y.action)?L.createElement("button",{"data-button":"",style:y.actionButtonStyle||X,onClick:ke=>{Sd(y.action)&&(y.action.onClick(ke),!ke.defaultPrevented&&at())},className:ee(Te==null?void 0:Te.actionButton,(C=y==null?void 0:y.classNames)==null?void 0:C.actionButton)},y.action.label):null))};function l2(){if(typeof window>"u"||typeof document>"u")return"ltr";let r=document.documentElement.getAttribute("dir");return r==="auto"||!r?window.getComputedStyle(document.documentElement).direction:r}var Wf=r=>{let{invert:a,position:d="bottom-right",hotkey:h=["altKey","KeyT"],expand:g,closeButton:k,className:w,offset:C,theme:b="light",richColors:y,duration:T,style:E,visibleToasts:_=b8,toastOptions:D,dir:M=l2(),gap:B=C8,loadingIcon:j,icons:P,containerAriaLabel:N="Notifications",pauseWhenPageIsHidden:R,cn:U=x8}=r,[q,X]=L.useState([]),$=L.useMemo(()=>Array.from(new Set([d].concat(q.filter(me=>me.position).map(me=>me.position)))),[q,d]),[J,z]=L.useState([]),[Y,fe]=L.useState(!1),[xe,ve]=L.useState(!1),[Te,st]=L.useState(b!=="system"?b:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),tt=L.useRef(null),Lt=h.join("+").replace(/Key/g,"").replace(/Digit/g,""),ee=L.useRef(null),he=L.useRef(!1),ne=L.useCallback(me=>X(ue=>ue.filter(({id:Ve})=>Ve!==me.id)),[]);return L.useEffect(()=>fo.subscribe(me=>{if(me.dismiss){X(ue=>ue.map(Ve=>Ve.id===me.id?{...Ve,delete:!0}:Ve));return}setTimeout(()=>{CR.flushSync(()=>{X(ue=>{let Ve=ue.findIndex(Ce=>Ce.id===me.id);return Ve!==-1?[...ue.slice(0,Ve),{...ue[Ve],...me},...ue.slice(Ve+1)]:[me,...ue]})})})}),[]),L.useEffect(()=>{if(b!=="system"){st(b);return}b==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?st("dark"):st("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:me})=>{st(me?"dark":"light")})},[b]),L.useEffect(()=>{q.length<=1&&fe(!1)},[q]),L.useEffect(()=>{let me=ue=>{var Ve,Ce;h.every(xt=>ue[xt]||ue.code===xt)&&(fe(!0),(Ve=tt.current)==null||Ve.focus()),ue.code==="Escape"&&(document.activeElement===tt.current||(Ce=tt.current)!=null&&Ce.contains(document.activeElement))&&fe(!1)};return document.addEventListener("keydown",me),()=>document.removeEventListener("keydown",me)},[h]),L.useEffect(()=>{if(tt.current)return()=>{ee.current&&(ee.current.focus({preventScroll:!0}),ee.current=null,he.current=!1)}},[tt.current]),q.length?L.createElement("section",{"aria-label":`${N} ${Lt}`,tabIndex:-1},$.map((me,ue)=>{var Ve;let[Ce,xt]=me.split("-");return L.createElement("ol",{key:me,dir:M==="auto"?l2():M,tabIndex:-1,ref:tt,className:w,"data-sonner-toaster":!0,"data-theme":Te,"data-rich-colors":y,"data-y-position":Ce,"data-x-position":xt,style:{"--front-toast-height":`${((Ve=J[0])==null?void 0:Ve.height)||0}px`,"--offset":typeof C=="number"?`${C}px`:C||w8,"--width":`${_8}px`,"--gap":`${B}px`,...E},onBlur:Ne=>{he.current&&!Ne.currentTarget.contains(Ne.relatedTarget)&&(he.current=!1,ee.current&&(ee.current.focus({preventScroll:!0}),ee.current=null))},onFocus:Ne=>{Ne.target instanceof HTMLElement&&Ne.target.dataset.dismissible==="false"||he.current||(he.current=!0,ee.current=Ne.relatedTarget)},onMouseEnter:()=>fe(!0),onMouseMove:()=>fe(!0),onMouseLeave:()=>{xe||fe(!1)},onPointerDown:Ne=>{Ne.target instanceof HTMLElement&&Ne.target.dataset.dismissible==="false"||ve(!0)},onPointerUp:()=>ve(!1)},q.filter(Ne=>!Ne.position&&ue===0||Ne.position===me).map((Ne,tn)=>{var Ee,zn;return L.createElement(E8,{key:Ne.id,icons:P,index:tn,toast:Ne,duration:(Ee=D==null?void 0:D.duration)!=null?Ee:T,className:D==null?void 0:D.className,descriptionClassName:D==null?void 0:D.descriptionClassName,invert:a,visibleToasts:_,closeButton:(zn=D==null?void 0:D.closeButton)!=null?zn:k,interacting:xe,position:me,style:D==null?void 0:D.style,unstyled:D==null?void 0:D.unstyled,classNames:D==null?void 0:D.classNames,cancelButtonStyle:D==null?void 0:D.cancelButtonStyle,actionButtonStyle:D==null?void 0:D.actionButtonStyle,removeToast:ne,toasts:q.filter(dn=>dn.position==Ne.position),heights:J.filter(dn=>dn.position==Ne.position),setHeights:z,expandByDefault:g,gap:B,loadingIcon:j,expanded:Y,pauseWhenPageIsHidden:R,cn:U})}))})):null};/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/const D8=()=>{const[r,a]=le.useState({title:"",content:"",category:"",imageUrl:""});console.log(r);const d=async g=>{g.preventDefault();try{const k=await dt.post("/api/createPost",r);Is.success("Post Added..")}catch(k){Is.error("Post Add Failed.."),console.error("Error fetching post:",k)}a({title:"",content:"",category:"",imageUrl:""})};le.useEffect(()=>{const g=T5.create(document.querySelector("#content")).then(k=>{k.model.document.on("change:data",()=>{const w=k.getData();a(C=>({...C,content:w}))})}).catch(k=>{console.error(k)});return()=>{g.then(k=>{k.destroy()})}},[]);const h=g=>{const{name:k,value:w}=g.target;a(C=>({...C,[k]:w}))};return L.createElement("div",{className:"max-w-2xl mx-auto p-4"},L.createElement(Wf,null),L.createElement("form",{onSubmit:d},L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"title",className:"block text-lg font-medium text-gray-800 mb-1"},"Title"),L.createElement("input",{type:"text",id:"title",name:"title",value:r.title,onChange:h,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",required:!0})),L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"content",className:"block text-lg font-medium text-gray-800 mb-1"},"Content"),L.createElement("textarea",{id:"content",name:"content",value:r.content,onChange:h,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",rows:"3"})),L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"category",className:"block text-lg font-medium text-gray-800 mb-1"},"Category"),L.createElement("input",{type:"text",id:"category",name:"category",value:r.category,onChange:h,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",required:!0})),L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"category",className:"block text-lg font-medium text-gray-800 mb-1"},"Thumbnail Image URL"),L.createElement("input",{type:"text",id:"img",name:"imageUrl",value:r.imageUrl,onChange:h,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",required:!0})),L.createElement("div",{className:"flex justify-end"},L.createElement("button",{type:"submit",className:"px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"},"Submit"))))};/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},vl.apply(this,arguments)}var Mi;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Mi||(Mi={}));const c2="popstate";function S8(r){r===void 0&&(r={});function a(h,g){let{pathname:k,search:w,hash:C}=h.location;return jg("",{pathname:k,search:w,hash:C},g.state&&g.state.usr||null,g.state&&g.state.key||"default")}function d(h,g){return typeof g=="string"?g:ku(g)}return I8(a,d,null,r)}function Tt(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function nD(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function T8(){return Math.random().toString(36).substr(2,8)}function d2(r,a){return{usr:r.state,key:r.key,idx:a}}function jg(r,a,d,h){return d===void 0&&(d=null),vl({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof a=="string"?Hs(a):a,{state:d,key:a&&a.key||h||T8()})}function ku(r){let{pathname:a="/",search:d="",hash:h=""}=r;return d&&d!=="?"&&(a+=d.charAt(0)==="?"?d:"?"+d),h&&h!=="#"&&(a+=h.charAt(0)==="#"?h:"#"+h),a}function Hs(r){let a={};if(r){let d=r.indexOf("#");d>=0&&(a.hash=r.substr(d),r=r.substr(0,d));let h=r.indexOf("?");h>=0&&(a.search=r.substr(h),r=r.substr(0,h)),r&&(a.pathname=r)}return a}function I8(r,a,d,h){h===void 0&&(h={});let{window:g=document.defaultView,v5Compat:k=!1}=h,w=g.history,C=Mi.Pop,b=null,y=T();y==null&&(y=0,w.replaceState(vl({},w.state,{idx:y}),""));function T(){return(w.state||{idx:null}).idx}function E(){C=Mi.Pop;let j=T(),P=j==null?null:j-y;y=j,b&&b({action:C,location:B.location,delta:P})}function _(j,P){C=Mi.Push;let N=jg(B.location,j,P);d&&d(N,j),y=T()+1;let R=d2(N,y),U=B.createHref(N);try{w.pushState(R,"",U)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;g.location.assign(U)}k&&b&&b({action:C,location:B.location,delta:1})}function D(j,P){C=Mi.Replace;let N=jg(B.location,j,P);d&&d(N,j),y=T();let R=d2(N,y),U=B.createHref(N);w.replaceState(R,"",U),k&&b&&b({action:C,location:B.location,delta:0})}function M(j){let P=g.location.origin!=="null"?g.location.origin:g.location.href,N=typeof j=="string"?j:ku(j);return N=N.replace(/ $/,"%20"),Tt(P,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,P)}let B={get action(){return C},get location(){return r(g,w)},listen(j){if(b)throw new Error("A history only accepts one active listener");return g.addEventListener(c2,E),b=j,()=>{g.removeEventListener(c2,E),b=null}},createHref(j){return a(g,j)},createURL:M,encodeLocation(j){let P=M(j);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:_,replace:D,go(j){return w.go(j)}};return B}var u2;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(u2||(u2={}));function M8(r,a,d){d===void 0&&(d="/");let h=typeof a=="string"?Hs(a):a,g=qf(h.pathname||"/",d);if(g==null)return null;let k=oD(r);B8(k);let w=null;for(let C=0;w==null&&C<k.length;++C){let b=W8(g);w=V8(k[C],b)}return w}function oD(r,a,d,h){a===void 0&&(a=[]),d===void 0&&(d=[]),h===void 0&&(h="");let g=(k,w,C)=>{let b={relativePath:C===void 0?k.path||"":C,caseSensitive:k.caseSensitive===!0,childrenIndex:w,route:k};b.relativePath.startsWith("/")&&(Tt(b.relativePath.startsWith(h),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+h+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(h.length));let y=Fi([h,b.relativePath]),T=d.concat(b);k.children&&k.children.length>0&&(Tt(k.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),oD(k.children,a,T,y)),!(k.path==null&&!k.index)&&a.push({path:y,score:j8(y,k.index),routesMeta:T})};return r.forEach((k,w)=>{var C;if(k.path===""||!((C=k.path)!=null&&C.includes("?")))g(k,w);else for(let b of iD(k.path))g(k,w,b)}),a}function iD(r){let a=r.split("/");if(a.length===0)return[];let[d,...h]=a,g=d.endsWith("?"),k=d.replace(/\?$/,"");if(h.length===0)return g?[k,""]:[k];let w=iD(h.join("/")),C=[];return C.push(...w.map(b=>b===""?k:[k,b].join("/"))),g&&C.push(...w),C.map(b=>r.startsWith("/")&&b===""?"/":b)}function B8(r){r.sort((a,d)=>a.score!==d.score?d.score-a.score:F8(a.routesMeta.map(h=>h.childrenIndex),d.routesMeta.map(h=>h.childrenIndex)))}const N8=/^:[\w-]+$/,P8=3,L8=2,O8=1,z8=10,R8=-2,h2=r=>r==="*";function j8(r,a){let d=r.split("/"),h=d.length;return d.some(h2)&&(h+=R8),a&&(h+=L8),d.filter(g=>!h2(g)).reduce((g,k)=>g+(N8.test(k)?P8:k===""?O8:z8),h)}function F8(r,a){return r.length===a.length&&r.slice(0,-1).every((h,g)=>h===a[g])?r[r.length-1]-a[a.length-1]:0}function V8(r,a){let{routesMeta:d}=r,h={},g="/",k=[];for(let w=0;w<d.length;++w){let C=d[w],b=w===d.length-1,y=g==="/"?a:a.slice(g.length)||"/",T=U8({path:C.relativePath,caseSensitive:C.caseSensitive,end:b},y);if(!T)return null;Object.assign(h,T.params);let E=C.route;k.push({params:h,pathname:Fi([g,T.pathname]),pathnameBase:K8(Fi([g,T.pathnameBase])),route:E}),T.pathnameBase!=="/"&&(g=Fi([g,T.pathnameBase]))}return k}function U8(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,h]=H8(r.path,r.caseSensitive,r.end),g=a.match(d);if(!g)return null;let k=g[0],w=k.replace(/(.)\/+$/,"$1"),C=g.slice(1);return{params:h.reduce((y,T,E)=>{let{paramName:_,isOptional:D}=T;if(_==="*"){let B=C[E]||"";w=k.slice(0,k.length-B.length).replace(/(.)\/+$/,"$1")}const M=C[E];return D&&!M?y[_]=void 0:y[_]=(M||"").replace(/%2F/g,"/"),y},{}),pathname:k,pathnameBase:w,pattern:r}}function H8(r,a,d){a===void 0&&(a=!1),d===void 0&&(d=!0),nD(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let h=[],g="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,C,b)=>(h.push({paramName:C,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(h.push({paramName:"*"}),g+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?g+="\\/*$":r!==""&&r!=="/"&&(g+="(?:(?=\\/|$))"),[new RegExp(g,a?void 0:"i"),h]}function W8(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return nD(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),r}}function qf(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let d=a.endsWith("/")?a.length-1:a.length,h=r.charAt(d);return h&&h!=="/"?null:r.slice(d)||"/"}function q8(r,a){a===void 0&&(a="/");let{pathname:d,search:h="",hash:g=""}=typeof r=="string"?Hs(r):r;return{pathname:d?d.startsWith("/")?d:G8(d,a):a,search:Y8(h),hash:Q8(g)}}function G8(r,a){let d=a.replace(/\/+$/,"").split("/");return r.split("/").forEach(g=>{g===".."?d.length>1&&d.pop():g!=="."&&d.push(g)}),d.length>1?d.join("/"):"/"}function zm(r,a,d,h){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(h)+"].  Please separate it out to the ")+("`to."+d+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $8(r){return r.filter((a,d)=>d===0||a.route.path&&a.route.path.length>0)}function rD(r,a){let d=$8(r);return a?d.map((h,g)=>g===r.length-1?h.pathname:h.pathnameBase):d.map(h=>h.pathnameBase)}function sD(r,a,d,h){h===void 0&&(h=!1);let g;typeof r=="string"?g=Hs(r):(g=vl({},r),Tt(!g.pathname||!g.pathname.includes("?"),zm("?","pathname","search",g)),Tt(!g.pathname||!g.pathname.includes("#"),zm("#","pathname","hash",g)),Tt(!g.search||!g.search.includes("#"),zm("#","search","hash",g)));let k=r===""||g.pathname==="",w=k?"/":g.pathname,C;if(w==null)C=d;else{let E=a.length-1;if(!h&&w.startsWith("..")){let _=w.split("/");for(;_[0]==="..";)_.shift(),E-=1;g.pathname=_.join("/")}C=E>=0?a[E]:"/"}let b=q8(g,C),y=w&&w!=="/"&&w.endsWith("/"),T=(k||w===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(y||T)&&(b.pathname+="/"),b}const Fi=r=>r.join("/").replace(/\/\/+/g,"/"),K8=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Y8=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Q8=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Z8(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const aD=["post","put","patch","delete"];new Set(aD);const J8=["get",...aD];new Set(J8);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},yl.apply(this,arguments)}const Gf=le.createContext(null),X8=le.createContext(null),Ir=le.createContext(null),ju=le.createContext(null),Mr=le.createContext({outlet:null,matches:[],isDataRoute:!1}),lD=le.createContext(null);function ej(r,a){let{relative:d}=a===void 0?{}:a;Bl()||Tt(!1);let{basename:h,navigator:g}=le.useContext(Ir),{hash:k,pathname:w,search:C}=dD(r,{relative:d}),b=w;return h!=="/"&&(b=w==="/"?h:Fi([h,w])),g.createHref({pathname:b,search:C,hash:k})}function Bl(){return le.useContext(ju)!=null}function Fu(){return Bl()||Tt(!1),le.useContext(ju).location}function cD(r){le.useContext(Ir).static||le.useLayoutEffect(r)}function tj(){let{isDataRoute:r}=le.useContext(Mr);return r?mj():nj()}function nj(){Bl()||Tt(!1);let r=le.useContext(Gf),{basename:a,future:d,navigator:h}=le.useContext(Ir),{matches:g}=le.useContext(Mr),{pathname:k}=Fu(),w=JSON.stringify(rD(g,d.v7_relativeSplatPath)),C=le.useRef(!1);return cD(()=>{C.current=!0}),le.useCallback(function(y,T){if(T===void 0&&(T={}),!C.current)return;if(typeof y=="number"){h.go(y);return}let E=sD(y,JSON.parse(w),k,T.relative==="path");r==null&&a!=="/"&&(E.pathname=E.pathname==="/"?a:Fi([a,E.pathname])),(T.replace?h.replace:h.push)(E,T.state,T)},[a,h,w,k,r])}function dD(r,a){let{relative:d}=a===void 0?{}:a,{future:h}=le.useContext(Ir),{matches:g}=le.useContext(Mr),{pathname:k}=Fu(),w=JSON.stringify(rD(g,h.v7_relativeSplatPath));return le.useMemo(()=>sD(r,JSON.parse(w),k,d==="path"),[r,w,k,d])}function oj(r,a){return ij(r,a)}function ij(r,a,d,h){Bl()||Tt(!1);let{navigator:g}=le.useContext(Ir),{matches:k}=le.useContext(Mr),w=k[k.length-1],C=w?w.params:{};w&&w.pathname;let b=w?w.pathnameBase:"/";w&&w.route;let y=Fu(),T;if(a){var E;let j=typeof a=="string"?Hs(a):a;b==="/"||(E=j.pathname)!=null&&E.startsWith(b)||Tt(!1),T=j}else T=y;let _=T.pathname||"/",D=_;if(b!=="/"){let j=b.replace(/^\//,"").split("/");D="/"+_.replace(/^\//,"").split("/").slice(j.length).join("/")}let M=M8(r,{pathname:D}),B=cj(M&&M.map(j=>Object.assign({},j,{params:Object.assign({},C,j.params),pathname:Fi([b,g.encodeLocation?g.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?b:Fi([b,g.encodeLocation?g.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),k,d,h);return a&&B?le.createElement(ju.Provider,{value:{location:yl({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:Mi.Pop}},B):B}function rj(){let r=pj(),a=Z8(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,g={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},a),d?le.createElement("pre",{style:g},d):null,null)}const sj=le.createElement(rj,null);class aj extends le.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,d){return d.location!==a.location||d.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:d.error,location:d.location,revalidation:a.revalidation||d.revalidation}}componentDidCatch(a,d){console.error("React Router caught the following error during render",a,d)}render(){return this.state.error!==void 0?le.createElement(Mr.Provider,{value:this.props.routeContext},le.createElement(lD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lj(r){let{routeContext:a,match:d,children:h}=r,g=le.useContext(Gf);return g&&g.static&&g.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(g.staticContext._deepestRenderedBoundaryId=d.route.id),le.createElement(Mr.Provider,{value:a},h)}function cj(r,a,d,h){var g;if(a===void 0&&(a=[]),d===void 0&&(d=null),h===void 0&&(h=null),r==null){var k;if((k=d)!=null&&k.errors)r=d.matches;else return null}let w=r,C=(g=d)==null?void 0:g.errors;if(C!=null){let T=w.findIndex(E=>E.route.id&&(C==null?void 0:C[E.route.id]));T>=0||Tt(!1),w=w.slice(0,Math.min(w.length,T+1))}let b=!1,y=-1;if(d&&h&&h.v7_partialHydration)for(let T=0;T<w.length;T++){let E=w[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=T),E.route.id){let{loaderData:_,errors:D}=d,M=E.route.loader&&_[E.route.id]===void 0&&(!D||D[E.route.id]===void 0);if(E.route.lazy||M){b=!0,y>=0?w=w.slice(0,y+1):w=[w[0]];break}}}return w.reduceRight((T,E,_)=>{let D,M=!1,B=null,j=null;d&&(D=C&&E.route.id?C[E.route.id]:void 0,B=E.route.errorElement||sj,b&&(y<0&&_===0?(gj("route-fallback",!1),M=!0,j=null):y===_&&(M=!0,j=E.route.hydrateFallbackElement||null)));let P=a.concat(w.slice(0,_+1)),N=()=>{let R;return D?R=B:M?R=j:E.route.Component?R=le.createElement(E.route.Component,null):E.route.element?R=E.route.element:R=T,le.createElement(lj,{match:E,routeContext:{outlet:T,matches:P,isDataRoute:d!=null},children:R})};return d&&(E.route.ErrorBoundary||E.route.errorElement||_===0)?le.createElement(aj,{location:d.location,revalidation:d.revalidation,component:B,error:D,children:N(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):N()},null)}var uD=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(uD||{}),bu=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(bu||{});function dj(r){let a=le.useContext(Gf);return a||Tt(!1),a}function uj(r){let a=le.useContext(X8);return a||Tt(!1),a}function hj(r){let a=le.useContext(Mr);return a||Tt(!1),a}function hD(r){let a=hj(),d=a.matches[a.matches.length-1];return d.route.id||Tt(!1),d.route.id}function pj(){var r;let a=le.useContext(lD),d=uj(bu.UseRouteError),h=hD(bu.UseRouteError);return a!==void 0?a:(r=d.errors)==null?void 0:r[h]}function mj(){let{router:r}=dj(uD.UseNavigateStable),a=hD(bu.UseNavigateStable),d=le.useRef(!1);return cD(()=>{d.current=!0}),le.useCallback(function(g,k){k===void 0&&(k={}),d.current&&(typeof g=="number"?r.navigate(g):r.navigate(g,yl({fromRouteId:a},k)))},[r,a])}const p2={};function gj(r,a,d){!a&&!p2[r]&&(p2[r]=!0)}function Ya(r){Tt(!1)}function fj(r){let{basename:a="/",children:d=null,location:h,navigationType:g=Mi.Pop,navigator:k,static:w=!1,future:C}=r;Bl()&&Tt(!1);let b=a.replace(/^\/*/,"/"),y=le.useMemo(()=>({basename:b,navigator:k,static:w,future:yl({v7_relativeSplatPath:!1},C)}),[b,C,k,w]);typeof h=="string"&&(h=Hs(h));let{pathname:T="/",search:E="",hash:_="",state:D=null,key:M="default"}=h,B=le.useMemo(()=>{let j=qf(T,b);return j==null?null:{location:{pathname:j,search:E,hash:_,state:D,key:M},navigationType:g}},[b,T,E,_,D,M,g]);return B==null?null:le.createElement(Ir.Provider,{value:y},le.createElement(ju.Provider,{children:d,value:B}))}function kj(r){let{children:a,location:d}=r;return oj(Fg(a),d)}new Promise(()=>{});function Fg(r,a){a===void 0&&(a=[]);let d=[];return le.Children.forEach(r,(h,g)=>{if(!le.isValidElement(h))return;let k=[...a,g];if(h.type===le.Fragment){d.push.apply(d,Fg(h.props.children,k));return}h.type!==Ya&&Tt(!1),!h.props.index||!h.props.children||Tt(!1);let w={id:h.props.id||k.join("-"),caseSensitive:h.props.caseSensitive,element:h.props.element,Component:h.props.Component,index:h.props.index,path:h.props.path,loader:h.props.loader,action:h.props.action,errorElement:h.props.errorElement,ErrorBoundary:h.props.ErrorBoundary,hasErrorBoundary:h.props.ErrorBoundary!=null||h.props.errorElement!=null,shouldRevalidate:h.props.shouldRevalidate,handle:h.props.handle,lazy:h.props.lazy};h.props.children&&(w.children=Fg(h.props.children,k)),d.push(w)}),d}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vg(){return Vg=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},Vg.apply(this,arguments)}function bj(r,a){if(r==null)return{};var d={},h=Object.keys(r),g,k;for(k=0;k<h.length;k++)g=h[k],!(a.indexOf(g)>=0)&&(d[g]=r[g]);return d}function wj(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Aj(r,a){return r.button===0&&(!a||a==="_self")&&!wj(r)}const _j=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Cj="6";try{window.__reactRouterVersion=Cj}catch{}const vj="startTransition",m2=b7[vj];function yj(r){let{basename:a,children:d,future:h,window:g}=r,k=le.useRef();k.current==null&&(k.current=S8({window:g,v5Compat:!0}));let w=k.current,[C,b]=le.useState({action:w.action,location:w.location}),{v7_startTransition:y}=h||{},T=le.useCallback(E=>{y&&m2?m2(()=>b(E)):b(E)},[b,y]);return le.useLayoutEffect(()=>w.listen(T),[w,T]),le.createElement(fj,{basename:a,children:d,location:C.location,navigationType:C.action,navigator:w,future:h})}const xj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ej=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kr=le.forwardRef(function(a,d){let{onClick:h,relative:g,reloadDocument:k,replace:w,state:C,target:b,to:y,preventScrollReset:T,unstable_viewTransition:E}=a,_=bj(a,_j),{basename:D}=le.useContext(Ir),M,B=!1;if(typeof y=="string"&&Ej.test(y)&&(M=y,xj))try{let R=new URL(window.location.href),U=y.startsWith("//")?new URL(R.protocol+y):new URL(y),q=qf(U.pathname,D);U.origin===R.origin&&q!=null?y=q+U.search+U.hash:B=!0}catch{}let j=ej(y,{relative:g}),P=Dj(y,{replace:w,state:C,target:b,preventScrollReset:T,relative:g,unstable_viewTransition:E});function N(R){h&&h(R),R.defaultPrevented||P(R)}return le.createElement("a",Vg({},_,{href:M||j,onClick:B||k?h:N,ref:d,target:b}))});var g2;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(g2||(g2={}));var f2;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(f2||(f2={}));function Dj(r,a){let{target:d,replace:h,state:g,preventScrollReset:k,relative:w,unstable_viewTransition:C}=a===void 0?{}:a,b=tj(),y=Fu(),T=dD(r,{relative:w});return le.useCallback(E=>{if(Aj(E,d)){E.preventDefault();let _=h!==void 0?h:ku(y)===ku(T);b(r,{replace:_,state:g,preventScrollReset:k,relative:w,unstable_viewTransition:C})}},[y,b,T,h,g,d,r,k,w,C])}const Sj=({title:r,content:a,category:d,publishingDate:h,imageUrl:g,onClick:k})=>{const w=C=>C.split(" ").slice(0,20).join(" ")+"...";return L.createElement("div",{className:"group my-20 mx-10  flex w-full max-w-xs flex-col overflow-hidden bg-white"},L.createElement(kr,{to:"/singlePost",onClick:k},L.createElement("div",{className:"relative flex h-80 w-72 overflow-hidden"},L.createElement("img",{className:"absolute top-0 right-0 h-full w-full object-cover",src:g,alt:"Thumbnail"}),L.createElement("div",{className:"absolute bottom-0 mb-4 flex w-full justify-center space-x-4"},L.createElement("div",{className:"h-3 w-3 rounded-full border-2 border-white bg-white"}),L.createElement("div",{className:"h-3 w-3 rounded-full border-2 border-white bg-transparent"}),L.createElement("div",{className:"h-3 w-3 rounded-full border-2 border-white bg-transparent"})),L.createElement("div",{className:"absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0"},L.createElement("button",{className:"flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700"},L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},L.createElement("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}))),L.createElement("button",{className:"flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700"}))),L.createElement("div",{className:"mt-4 pb-5"},L.createElement("h5",{className:"text-center tracking-tight text-xl font-bold"},r),L.createElement("div",{dangerouslySetInnerHTML:{__html:w(a)}}),L.createElement("div",{className:"mb-5 flex justify-between"},L.createElement("span",{className:"text-sm font-bold text-gray-700"},d),L.createElement("span",{className:"text-sm  text-gray-700"},h)))))},Tj=()=>{const[r,a]=le.useState([]);async function d(){var g;try{const k=await dt.get("/api/posts");a((g=k==null?void 0:k.data)==null?void 0:g.data),Is.success("Loading Blogs..")}catch(k){console.error("Error fetching blogs:",k)}}le.useEffect(()=>{d()},[]);function h(g){console.log(g),localStorage.setItem("blogId",g)}return L.createElement("div",null,L.createElement(Wf,null),L.createElement("div",{className:"text-center mt-5"},L.createElement("h2",{className:"text-2xl font-bold"},"Latest from our blog"),L.createElement("p",{className:"text-gray-500 font-light"},"Create custom Blogs in this new Generation")),L.createElement("div",{className:"flex justify-evenly flex-wrap items-center"},(r==null?void 0:r.length)<1?L.createElement("h1",null,"No Blog Posted Yet..."):r==null?void 0:r.map(g=>L.createElement(Sj,{key:g._id,title:g.title,content:g.content,category:g.category,publishingDate:g.publishingDate,imageUrl:g.imageUrl,onClick:()=>h(g._id)}))))},Ij=()=>L.createElement("section",{className:"py-10 bg-gray-50 sm:pt-16 lg:pt-24"},L.createElement("div",{className:"px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"},L.createElement("div",{className:"grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12"},L.createElement("div",{className:"col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8"},L.createElement("img",{className:"w-auto h-9",src:"https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",alt:""}),L.createElement("p",{className:"text-base leading-relaxed text-gray-600 mt-7"},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."),L.createElement("ul",{className:"flex items-center space-x-3 mt-9"},L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"},L.createElement("svg",{className:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},L.createElement("path",{d:"M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"})))),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"},L.createElement("svg",{className:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},L.createElement("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})))),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"},L.createElement("svg",{className:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},L.createElement("path",{d:"M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"}),L.createElement("circle",{cx:"16.806",cy:"7.207",r:"1.078"}),L.createElement("path",{d:"M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"})))),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"},L.createElement("svg",{className:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},L.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"})))))),L.createElement("div",null,L.createElement("p",{className:"text-sm font-semibold tracking-widest text-gray-400 uppercase"},"Company"),L.createElement("ul",{className:"mt-6 space-y-4"},L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," About ")),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," Features ")),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," Works ")),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," Career ")))),L.createElement("div",null,L.createElement("p",{className:"text-sm font-semibold tracking-widest text-gray-400 uppercase"},"Help"),L.createElement("ul",{className:"mt-6 space-y-4"},L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," Customer Support ")),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," Delivery Details ")),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," Terms & Conditions ")),L.createElement("li",null,L.createElement("a",{href:"#",title:"",className:"flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"}," Privacy Policy ")))),L.createElement("div",{className:"col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8"},L.createElement("p",{className:"text-sm font-semibold tracking-widest text-gray-400 uppercase"},"Subscribe to newsletter"),L.createElement("form",{action:"#",method:"POST",className:"mt-6"},L.createElement("div",null,L.createElement("label",{htmlFor:"email",className:"sr-only"},"Email"),L.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email",className:"block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"})),L.createElement("button",{type:"submit",className:"inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"},"Subscribe")))),L.createElement("hr",{className:"mt-16 mb-10 border-gray-200"}),L.createElement("p",{className:"text-sm text-center text-gray-600"},"© Copyright 2021, All Rights Reserved by Postcraft"))),Mj=()=>L.createElement("div",{className:"bg-gradient-to-b from-green-50 to-green-100"},L.createElement("section",{className:"py-10 sm:py-16 lg:py-24"},L.createElement("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},L.createElement("div",{className:"grid items-center grid-cols-1 gap-12 lg:grid-cols-2"},L.createElement("div",null,L.createElement("h1",{className:"text-4xl font-bold text-black sm:text-6xl lg:text-7xl"},"Collaborate remotely, with",L.createElement("div",{className:"relative inline-flex"},L.createElement("span",{className:"absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"}),L.createElement("h1",{className:"relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl"},"Blogs"))),L.createElement("p",{className:"mt-8 text-base text-black sm:text-xl"},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."),L.createElement("div",{className:"mt-10 sm:flex sm:items-center sm:space-x-8"},L.createElement("a",{href:"#",title:"",className:"inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600",role:"button"}," ","Start exploring"," "),L.createElement("a",{href:"#",title:"",className:"inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"},L.createElement("svg",{className:"w-10 h-10 mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},L.createElement("path",{fill:"#F97316",stroke:"#F97316",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),L.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),"Watch video"))),L.createElement("div",null,L.createElement("img",{className:"w-full",src:"https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png",alt:""})))))),Bj=()=>L.createElement("div",null,L.createElement(Mj,null),L.createElement(Tj,null),L.createElement(Ij,null)),Nj=()=>L.createElement("header",{className:""},L.createElement("div",{className:"px-4 mx-auto sm:px-6 lg:px-8"},L.createElement("div",{className:"flex items-center justify-between h-16 lg:h-20"},L.createElement("div",{className:"flex-shrink-0"},L.createElement("a",{href:"#",title:"",className:"flex"},L.createElement("h1",{className:"text-3xl font-bold"},"BlogSheets"))),L.createElement("button",{type:"button",className:"inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"},L.createElement("svg",{className:"block w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},L.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})),L.createElement("svg",{className:"hidden w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},L.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))),L.createElement("div",{className:"hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10"},L.createElement(kr,{to:"/",className:"text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"}," ","Home"," "),L.createElement(kr,{to:"#",className:"text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"}," ","About"," "),L.createElement(kr,{to:"#",className:"text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"}," ","Contact"," "),L.createElement("div",{className:"w-px h-5 bg-black/20"}),L.createElement(kr,{to:"#",title:"",className:"text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"}," ","Log in"," "),L.createElement(kr,{to:"createPost",title:"",className:"inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white",role:"button"}," ","Add Post"," "))))),Pj=({history:r})=>{const[a,d]=le.useState();async function h(y){var T;try{const E=await dt.get(`/api/post/${y}`);console.log(E),d((T=E==null?void 0:E.data)==null?void 0:T.data)}catch(E){console.error("Error fetching blogs:",E)}}le.useEffect(()=>{h(localStorage.getItem("blogId"))},[]);const[g,k]=le.useState(!1),[w,C]=le.useState(!1),b=()=>{r.goBack()};return L.createElement("div",{className:"md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4"},L.createElement("button",{onClick:b,className:"bg-gray-200 px-4 py-2 rounded-md mr-4"},"Back"),L.createElement("div",{className:"xl:w-2/6 lg:w-2/5 w-80 md:block hidden"},L.createElement("img",{className:"w-full",alt:"img of a girl posing",src:a==null?void 0:a.imageUrl}),L.createElement("img",{className:"mt-6 w-full",alt:"img of a Blogs",src:"https://i.ibb.co/qxkRXSq/component-image-two.png"})),L.createElement("div",{className:"md:hidden"},L.createElement("img",{className:"w-full",alt:"img of a girl posing",src:"https://i.ibb.co/QMdWfzX/component-image-one.png"}),L.createElement("div",{className:"flex items-center justify-between mt-3 space-x-4 md:space-x-0"},L.createElement("img",{alt:"img-tag-one",className:"md:w-48 md:h-48 w-full",src:"https://i.ibb.co/cYDrVGh/Rectangle-245.png"}),L.createElement("img",{alt:"img-tag-one",className:"md:w-48 md:h-48 w-full",src:"https://i.ibb.co/f17NXrW/Rectangle-244.png"}),L.createElement("img",{alt:"img-tag-one",className:"md:w-48 md:h-48 w-full",src:"https://i.ibb.co/cYDrVGh/Rectangle-245.png"}),L.createElement("img",{alt:"img-tag-one",className:"md:w-48 md:h-48 w-full",src:"https://i.ibb.co/f17NXrW/Rectangle-244.png"}))),L.createElement("div",{className:"xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6"},L.createElement("div",{className:"border-b border-gray-200 pb-6"},L.createElement("p",{className:"text-sm leading-none text-gray-600"},"Blogs Fall Collection"),L.createElement("div",{className:"flex justify-between items-center"},L.createElement("h1",{className:`
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-900
							mt-2
						`},a==null?void 0:a.title),L.createElement(kr,{onClick:()=>localStorage.setItem("updateId",a==null?void 0:a._id),to:"/updatePost",className:"border rounded px-3 py-1 text-sm"},"Edit"))),L.createElement("div",{className:"py-4 border-b border-gray-200 flex items-center justify-between"},L.createElement("p",{className:"text-base leading-4 text-gray-800"},"Catogary"),L.createElement("div",{className:"flex items-center justify-center"},L.createElement("p",{className:"text-sm leading-none text-gray-600"},a==null?void 0:a.category),L.createElement("div",{className:`
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							`}),L.createElement("svg",{className:"cursor-pointer",width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M1 1L5 5L1 9",stroke:"#4B5563",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})))),L.createElement("div",{className:"py-4 border-b border-gray-200 flex items-center justify-between"},L.createElement("p",{className:"text-base leading-4 text-gray-800"},"Published On"),L.createElement("div",{className:"flex items-center justify-center"},L.createElement("p",{className:"text-sm leading-none text-gray-600 mr-3"},a==null?void 0:a.publishingDate),L.createElement("svg",{className:"cursor-pointer",width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M1 1L5 5L1 9",stroke:"#4B5563",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})))),L.createElement("button",{className:`
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					`},L.createElement("svg",{className:"mr-3",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z",stroke:"white",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),L.createElement("path",{d:"M4.66699 4.83333V4.84166",stroke:"white",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),L.createElement("path",{d:"M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z",stroke:"white",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),L.createElement("path",{d:"M11.333 11.5V11.5083",stroke:"white",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})),"Check More availability Blogs"),L.createElement("div",null,L.createElement("div",{className:"flex justify-evenly flex-wrap items-center"},a?L.createElement("div",{dangerouslySetInnerHTML:{__html:a.content}}):L.createElement("h1",null,"Loading..."))),L.createElement("div",null,L.createElement("div",{className:"border-t border-b py-4 mt-7 border-gray-200"},L.createElement("div",{onClick:()=>k(!g),className:"flex justify-between items-center cursor-pointer"},L.createElement("p",{className:"text-base leading-4 text-gray-800"},"Delete and Update"),L.createElement("button",{className:`
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								`,"aria-label":"show or hide"},L.createElement("svg",{className:"transform "+(g?"rotate-180":"rotate-0"),width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M9 1L5 5L1 1",stroke:"#4B5563",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})))),L.createElement("div",{className:"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 "+(g?"block":"hidden"),id:"sect"},"You will be solely responsible for any legal action resulting from misleading content posted on your blog."))),L.createElement("div",null,L.createElement("div",{className:"border-b py-4 border-gray-200"},L.createElement("div",{onClick:()=>C(!w),className:"flex justify-between items-center cursor-pointer"},L.createElement("p",{className:"text-base leading-4 text-gray-800"},"Contact us"),L.createElement("button",{className:`
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								`,"aria-label":"show or hide"},L.createElement("svg",{className:"transform "+(w?"rotate-180":"rotate-0"),width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M9 1L5 5L1 1",stroke:"#4B5563",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})))),L.createElement("div",{className:"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 "+(w?"block":"hidden"),id:"sect"},"If you have any questions on how to Post,delete,edit and get these Lastest Blogs Post, contact us.")))))},Lj=()=>{const[r,a]=le.useState({title:"",content:"",category:"",imageUrl:""}),d=localStorage.getItem("updateId");console.log(d),le.useEffect(()=>{(async()=>{try{const C=(await dt.get(`/api/post/${d}`)).data.data;a({title:C.title,content:C.content,category:C.category,imageUrl:C.imageUrl})}catch(w){Is.error("Failed To Failed.."),console.error("Error fetching post:",w)}})()},[d]);const h=async k=>{k.preventDefault(),console.log(r);try{const w=await dt.put(`http://localhost:2000/api/updatePost/${d}`,r);console.log(w),Is.success("Update Successfully.."),a({title:"",content:"",category:"",imageUrl:""})}catch(w){console.error("Error updating post:",w),Is.error("Post Update Failed..")}};le.useEffect(()=>{const k=T5.create(document.querySelector("#content")).then(w=>{w.model.document.on("change:data",()=>{const C=w.getData();a(b=>({...b,content:C}))})}).catch(w=>{console.error(w)});return()=>{k.then(w=>{w.destroy()})}},[]);const g=k=>{const{name:w,value:C}=k.target;a(b=>({...b,[w]:C}))};return L.createElement("div",{className:"max-w-2xl mx-auto p-4"},L.createElement(Wf,null),L.createElement("form",{onSubmit:h},L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"title",className:"block text-lg font-medium text-gray-800 mb-1"},"Update Title"),L.createElement("input",{type:"text",id:"title",name:"title",value:r.title,onChange:g,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",required:!0})),L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"content",className:"block text-lg font-medium text-gray-800 mb-1"},"Update Content"),L.createElement("textarea",{id:"content",name:"content",value:r.content,onChange:g,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",rows:"3"})),L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"category",className:"block text-lg font-medium text-gray-800 mb-1"},"Update Category"),L.createElement("input",{type:"text",id:"category",name:"category",value:r.category,onChange:g,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",required:!0})),L.createElement("div",{className:"mb-6"},L.createElement("label",{htmlFor:"imageUrl",className:"block text-lg font-medium text-gray-800 mb-1"},"Update Thumbnail Image URL"),L.createElement("input",{type:"text",id:"imageUrl",name:"imageUrl",value:r.imageUrl,onChange:g,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500",required:!0})),L.createElement("div",{className:"flex justify-end"},L.createElement("button",{type:"submit",className:"px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"},"Update"))))},Oj=()=>L.createElement(yj,null,L.createElement(Nj,null),L.createElement(kj,null,L.createElement(Ya,{path:"/",element:L.createElement(Bj,null)}),L.createElement(Ya,{path:"/createPost",element:L.createElement(D8,null)}),L.createElement(Ya,{path:"/singlePost",element:L.createElement(Pj,null)}),L.createElement(Ya,{path:"/updatePost",element:L.createElement(Lj,null)})));Rm.createRoot(document.getElementById("root")).render(L.createElement(L.StrictMode,null,L.createElement(Oj,null)));