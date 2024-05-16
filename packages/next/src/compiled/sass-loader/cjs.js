(function(){var __webpack_modules__={12:function(e,t){function set(e,t,s){if(typeof s.value==="object")s.value=klona(s.value);if(!s.enumerable||s.get||s.set||!s.configurable||!s.writable||t==="__proto__"){Object.defineProperty(e,t,s)}else e[t]=s.value}function klona(e){if(typeof e!=="object")return e;var t=0,s,r,n,o=Object.prototype.toString.call(e);if(o==="[object Object]"){n=Object.create(e.__proto__||null)}else if(o==="[object Array]"){n=Array(e.length)}else if(o==="[object Set]"){n=new Set;e.forEach((function(e){n.add(klona(e))}))}else if(o==="[object Map]"){n=new Map;e.forEach((function(e,t){n.set(klona(t),klona(e))}))}else if(o==="[object Date]"){n=new Date(+e)}else if(o==="[object RegExp]"){n=new RegExp(e.source,e.flags)}else if(o==="[object DataView]"){n=new e.constructor(klona(e.buffer))}else if(o==="[object ArrayBuffer]"){n=e.slice(0)}else if(o.slice(-6)==="Array]"){n=new e.constructor(e)}if(n){for(r=Object.getOwnPropertySymbols(e);t<r.length;t++){set(n,r[t],Object.getOwnPropertyDescriptor(e,r[t]))}for(t=0,r=Object.getOwnPropertyNames(e);t<r.length;t++){if(Object.hasOwnProperty.call(n,s=r[t])&&n[s]===e[s])continue;set(n,s,Object.getOwnPropertyDescriptor(e,s))}}return n||e}t.klona=klona},639:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;class SassError extends Error{constructor(e){super();this.name="SassError";this.originalSassError=e;this.loc={line:e.line,column:e.column};this.message=`${this.name}: ${this.originalSassError.message}`;if(this.originalSassError.formatted){this.message=`${this.name}: ${this.originalSassError.formatted.replace(/^Error: /,"")}`;this.hideStack=true;Error.captureStackTrace(this,this.constructor)}}}var s=SassError;t["default"]=s},611:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;class SassWarning extends Error{constructor(e,t){super(e);this.name="SassWarning";this.hideStack=true;if(t.span){this.loc={line:t.span.start.line,column:t.span.start.column}}}}var s=SassWarning;t["default"]=s},11:function(e,t,s){"use strict";const r=s(509);e.exports=r.default},509:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var r=_interopRequireDefault(s(17));var n=_interopRequireDefault(s(748));var o=s(633);var a=_interopRequireDefault(s(639));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}async function loader(e){const t=this.getOptions(n.default);const s=this.async();const i=(0,o.getSassImplementation)(this,t.implementation);if(!i){s();return}const c=typeof t.sourceMap==="boolean"?t.sourceMap:this.sourceMap;const l=await(0,o.getSassOptions)(this,t,e,i,c);const u=typeof t.webpackImporter==="boolean"?t.webpackImporter:true;if(u){const{includePaths:e}=l;l.importer.push((0,o.getWebpackImporter)(this,i,e))}const p=(0,o.getRenderFunctionFromSassImplementation)(i);p(l,((e,t)=>{if(e){if(e.file){this.addDependency(r.default.normalize(e.file))}s(new a.default(e));return}let n=t.map?JSON.parse(t.map):null;if(n&&c){n=(0,o.normalizeSourceMap)(n,this.rootContext)}t.stats.includedFiles.forEach((e=>{const t=r.default.normalize(e);if(r.default.isAbsolute(t)){this.addDependency(t)}}));s(null,t.css.toString(),n)}))}var i=loader;t["default"]=i},633:function(__unused_webpack_module,exports,__nccwpck_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getRenderFunctionFromSassImplementation=getRenderFunctionFromSassImplementation;exports.getSassImplementation=getSassImplementation;exports.getSassOptions=getSassOptions;exports.getWebpackImporter=getWebpackImporter;exports.getWebpackResolver=getWebpackResolver;exports.isSupportedFibers=isSupportedFibers;exports.normalizeSourceMap=normalizeSourceMap;var _url=_interopRequireDefault(__nccwpck_require__(310));var _path=_interopRequireDefault(__nccwpck_require__(17));var _full=__nccwpck_require__(12);var _neoAsync=_interopRequireDefault(__nccwpck_require__(874));var _SassWarning=_interopRequireDefault(__nccwpck_require__(611));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getDefaultSassImplementation(){let sassImplPkg="sass";try{eval("require").resolve("sass")}catch(error){try{eval("require").resolve("node-sass");sassImplPkg="node-sass"}catch(e){sassImplPkg="sass"}}return __nccwpck_require__(438)}function getSassImplementation(e,t){let s=t;if(!s){try{s=getDefaultSassImplementation()}catch(t){e.emitError(t);return}}if(typeof s==="string"){try{s=require(s)}catch(t){e.emitError(t);return}}const{info:r}=s;if(!r){e.emitError(new Error("Unknown Sass implementation."));return}const n=r.split("\t");if(n.length<2){e.emitError(new Error(`Unknown Sass implementation "${r}".`));return}const[o]=n;if(o==="dart-sass"){return s}else if(o==="node-sass"){return s}e.emitError(new Error(`Unknown Sass implementation "${o}".`))}function isProductionLikeMode(e){return e.mode==="production"||!e.mode}function proxyCustomImporters(e,t){return[].concat(e).map((e=>function proxyImporter(...s){const r={...this,webpackLoaderContext:t};return e.apply(r,s)}))}function isSupportedFibers(){const[e]=process.versions.node.split(".");return Number(e)<16}async function getSassOptions(e,t,s,r,n){const o=(0,_full.klona)(t.sassOptions?typeof t.sassOptions==="function"?t.sassOptions(e)||{}:t.sassOptions:{});const a=r.info.includes("dart-sass");if(a&&isSupportedFibers()){const e=!o.fiber&&o.fiber!==false;if(e){let e;try{e=require.resolve("fibers")}catch(e){}if(e){o.fiber=require(e)}}else if(o.fiber===false){delete o.fiber}}else{delete o.fiber}o.file=e.resourcePath;o.data=t.additionalData?typeof t.additionalData==="function"?await t.additionalData(s,e):`${t.additionalData}\n${s}`:s;if(!o.outputStyle&&isProductionLikeMode(e)){o.outputStyle="compressed"}if(n){o.sourceMap=true;o.outFile=_path.default.join(e.rootContext,"style.css.map");o.sourceMapContents=true;o.omitSourceMapUrl=true;o.sourceMapEmbed=false}const{resourcePath:i}=e;const c=_path.default.extname(i);if(c&&c.toLowerCase()===".sass"&&typeof o.indentedSyntax==="undefined"){o.indentedSyntax=true}else{o.indentedSyntax=Boolean(o.indentedSyntax)}o.importer=o.importer?proxyCustomImporters(Array.isArray(o.importer)?o.importer:[o.importer],e):[];o.includePaths=[].concat(process.cwd()).concat((o.includePaths||[]).map((e=>_path.default.isAbsolute(e)?e:_path.default.join(process.cwd(),e)))).concat(process.env.SASS_PATH?process.env.SASS_PATH.split(process.platform==="win32"?";":":"):[]);if(typeof o.charset==="undefined"){o.charset=true}if(!o.logger){const s=t.warnRuleAsWarning===true;const r=e.getLogger("sass-loader");const formatSpan=e=>`${e.url||"-"}:${e.start.line}:${e.start.column}: `;o.logger={debug(e,t){let s="";if(t.span){s=formatSpan(t.span)}s+=e;r.debug(s)},warn(t,n){let o="";if(n.deprecation){o+="Deprecation "}if(n.span&&!n.stack){o=formatSpan(n.span)}o+=t;if(n.stack){o+=`\n\n${n.stack}`}if(s){e.emitWarning(new _SassWarning.default(o,n))}else{r.warn(o)}}}}return o}const MODULE_REQUEST_REGEX=/^[^?]*~/;const IS_MODULE_IMPORT=/^~([^/]+|[^/]+\/|@[^/]+[/][^/]+|@[^/]+\/?|@[^/]+[/][^/]+\/)$/;function getPossibleRequests(e,t=false,s=false){let r=e;if(t){if(MODULE_REQUEST_REGEX.test(e)){r=r.replace(MODULE_REQUEST_REGEX,"")}if(IS_MODULE_IMPORT.test(e)){r=r[r.length-1]==="/"?r:`${r}/`;return[...new Set([r,e])]}}const n=_path.default.extname(r).toLowerCase();if(n===".css"){return[]}const o=_path.default.dirname(r);const a=o==="."?"":`${o}/`;const i=_path.default.basename(r);const c=_path.default.basename(r,n);return[...new Set([].concat(s?[`${a}_${c}.import${n}`,`${a}${c}.import${n}`]:[]).concat([`${a}_${i}`,`${a}${i}`]).concat(t?[e]:[]))]}function promiseResolve(e){return(t,s)=>new Promise(((r,n)=>{e(t,s,((e,t)=>{if(e){n(e)}else{r(t)}}))}))}const IS_SPECIAL_MODULE_IMPORT=/^~[^/]+$/;const IS_NATIVE_WIN32_PATH=/^[a-z]:[/\\]|^\\\\/i;function getWebpackResolver(e,t,s=[]){async function startResolving(e){if(e.length===0){return Promise.reject()}const[{possibleRequests:t}]=e;if(t.length===0){return Promise.reject()}const[{resolve:s,context:r}]=e;try{return await s(r,t[0])}catch(s){const[,...r]=t;if(r.length===0){const[,...t]=e;return startResolving(t)}e[0].possibleRequests=r;return startResolving(e)}}const r=t.info.includes("dart-sass");const n=promiseResolve(e({alias:[],aliasFields:[],conditionNames:[],descriptionFiles:[],extensions:[".sass",".scss",".css"],exportsFields:[],mainFields:[],mainFiles:["_index","index"],modules:[],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));const o=promiseResolve(e({alias:[],aliasFields:[],conditionNames:[],descriptionFiles:[],extensions:[".sass",".scss",".css"],exportsFields:[],mainFields:[],mainFiles:["_index.import","_index","index.import","index"],modules:[],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));const a=promiseResolve(e({dependencyType:"sass",conditionNames:["sass","style"],mainFields:["sass","style","main","..."],mainFiles:["_index","index","..."],extensions:[".sass",".scss",".css"],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));const i=promiseResolve(e({dependencyType:"sass",conditionNames:["sass","style"],mainFields:["sass","style","main","..."],mainFiles:["_index.import","_index","index.import","index","..."],extensions:[".sass",".scss",".css"],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));return(e,t,c)=>{if(!r&&!_path.default.isAbsolute(e)){return Promise.reject()}const l=t;const u=l.slice(0,5).toLowerCase()==="file:";if(u){try{t=_url.default.fileURLToPath(l)}catch(e){t=t.slice(7)}}let p=[];const f=!IS_SPECIAL_MODULE_IMPORT.test(t)&&!u&&!l.startsWith("/")&&!IS_NATIVE_WIN32_PATH.test(l);if(s.length>0&&f){const a=getPossibleRequests(t,false,c);if(!r){p=p.concat({resolve:c?o:n,context:_path.default.dirname(e),possibleRequests:a})}p=p.concat(s.map((e=>({resolve:c?o:n,context:e,possibleRequests:a}))))}const d=getPossibleRequests(t,true,c);p=p.concat({resolve:c?i:a,context:_path.default.dirname(e),possibleRequests:d});return startResolving(p)}}const MATCH_CSS=/\.css$/i;function getWebpackImporter(e,t,s){const r=getWebpackResolver(e.getResolve,t,s);return function importer(t,s,n){const{fromImport:o}=this;r(s,t,o).then((t=>{e.addDependency(_path.default.normalize(t));n({file:t.replace(MATCH_CSS,"")})})).catch((()=>{n({file:t})}))}}let nodeSassJobQueue=null;function getRenderFunctionFromSassImplementation(e){const t=e.info.includes("dart-sass");if(t){return e.render.bind(e)}if(nodeSassJobQueue===null){const t=Number(process.env.UV_THREADPOOL_SIZE||4);nodeSassJobQueue=_neoAsync.default.queue(e.render.bind(e),t-1)}return nodeSassJobQueue.push.bind(nodeSassJobQueue)}const ABSOLUTE_SCHEME=/^[A-Za-z0-9+\-.]+:/;function getURLType(e){if(e[0]==="/"){if(e[1]==="/"){return"scheme-relative"}return"path-absolute"}if(IS_NATIVE_WIN32_PATH.test(e)){return"path-absolute"}return ABSOLUTE_SCHEME.test(e)?"absolute":"path-relative"}function normalizeSourceMap(e,t){const s=e;delete s.file;s.sourceRoot="";s.sources=s.sources.map((e=>{const s=getURLType(e);if(s==="path-relative"){return _path.default.resolve(t,_path.default.normalize(e))}return e}));return s}},874:function(e){"use strict";e.exports=require("@next/vendored/neo-async")},17:function(e){"use strict";e.exports=require("path")},438:function(e){"use strict";e.exports=require("sass")},310:function(e){"use strict";e.exports=require("url")},748:function(e){"use strict";e.exports=JSON.parse('{"title":"Sass Loader options","type":"object","properties":{"implementation":{"description":"The implementation of the sass to be used.","link":"https://github.com/webpack-contrib/sass-loader#implementation","anyOf":[{"type":"string"},{"type":"object"}]},"sassOptions":{"description":"Options for `node-sass` or `sass` (`Dart Sass`) implementation.","link":"https://github.com/webpack-contrib/sass-loader#sassoptions","anyOf":[{"type":"object","additionalProperties":true},{"instanceof":"Function"}]},"additionalData":{"description":"Prepends/Appends `Sass`/`SCSS` code before the actual entry file.","link":"https://github.com/webpack-contrib/sass-loader#additionaldata","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"sourceMap":{"description":"Enables/Disables generation of source maps.","link":"https://github.com/webpack-contrib/sass-loader#sourcemap","type":"boolean"},"webpackImporter":{"description":"Enables/Disables default `webpack` importer.","link":"https://github.com/webpack-contrib/sass-loader#webpackimporter","type":"boolean"},"warnRuleAsWarning":{"description":"Treats the \'@warn\' rule as a webpack warning.","link":"https://github.com/webpack-contrib/sass-loader#warnruleaswarning","type":"boolean"}},"additionalProperties":false}')}};var __webpack_module_cache__={};function __nccwpck_require__(e){var t=__webpack_module_cache__[e];if(t!==undefined){return t.exports}var s=__webpack_module_cache__[e]={exports:{}};var r=true;try{__webpack_modules__[e](s,s.exports,__nccwpck_require__);r=false}finally{if(r)delete __webpack_module_cache__[e]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__=__nccwpck_require__(11);module.exports=__webpack_exports__})();