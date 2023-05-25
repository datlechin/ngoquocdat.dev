function nt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Le(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],c=typeof n;(c==="object"||c==="function")&&!Object.isFrozen(n)&&Le(n)}),e}class ye{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function De(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function X(e,...t){const n=Object.create(null);for(const c in e)n[c]=e[c];return t.forEach(function(c){for(const p in c)n[p]=c[p]}),n}const st="</span>",Te=e=>!!e.scope,rt=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((c,p)=>`${c}${"_".repeat(p+1)}`)].join(" ")}return`${t}${e}`};class it{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=De(t)}openNode(t){if(!Te(t))return;const n=rt(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Te(t)&&(this.buffer+=st)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ie=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class be{constructor(){this.rootNode=Ie(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ie({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(c=>this._walk(t,c)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{be._collapse(n)}))}}class at extends be{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const c=t.root;n&&(c.scope=`language:${n}`),this.add(c)}toHTML(){return new it(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function se(e){return e?typeof e=="string"?e:e.source:null}function Be(e){return J("(?=",e,")")}function ct(e){return J("(?:",e,")*")}function ot(e){return J("(?:",e,")?")}function J(...e){return e.map(n=>se(n)).join("")}function lt(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function _e(...e){return"("+(lt(e).capture?"":"?:")+e.map(c=>se(c)).join("|")+")"}function Ue(e){return new RegExp(e.toString()+"|").exec("").length-1}function ut(e,t){const n=e&&e.exec(t);return n&&n.index===0}const gt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Se(e,{joinWith:t}){let n=0;return e.map(c=>{n+=1;const p=n;let E=se(c),a="";for(;E.length>0;){const r=gt.exec(E);if(!r){a+=E;break}a+=E.substring(0,r.index),E=E.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?a+="\\"+String(Number(r[1])+p):(a+=r[0],r[0]==="("&&n++)}return a}).map(c=>`(${c})`).join(t)}const ft=/\b\B/,Pe="[a-zA-Z]\\w*",Ne="[a-zA-Z_]\\w*",He="\\b\\d+(\\.\\d+)?",$e="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ge="\\b(0b[01]+)",dt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",pt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=J(t,/.*\b/,e.binary,/\b.*/)),X({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,c)=>{n.index!==0&&c.ignoreMatch()}},e)},re={begin:"\\\\[\\s\\S]",relevance:0},ht={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[re]},Et={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[re]},bt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ge=function(e,t,n={}){const c=X({scope:"comment",begin:e,end:t,contains:[]},n);c.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const p=_e("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return c.contains.push({begin:J(/[ ]+/,"(",p,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),c},_t=ge("//","$"),St=ge("/\\*","\\*/"),Nt=ge("#","$"),Ot={scope:"number",begin:He,relevance:0},At={scope:"number",begin:$e,relevance:0},Rt={scope:"number",begin:Ge,relevance:0},Mt={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[re,{begin:/\[/,end:/\]/,relevance:0,contains:[re]}]}]},wt={scope:"title",begin:Pe,relevance:0},yt={scope:"title",begin:Ne,relevance:0},Tt={begin:"\\.\\s*"+Ne,relevance:0},It=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var le=Object.freeze({__proto__:null,MATCH_NOTHING_RE:ft,IDENT_RE:Pe,UNDERSCORE_IDENT_RE:Ne,NUMBER_RE:He,C_NUMBER_RE:$e,BINARY_NUMBER_RE:Ge,RE_STARTERS_RE:dt,SHEBANG:pt,BACKSLASH_ESCAPE:re,APOS_STRING_MODE:ht,QUOTE_STRING_MODE:Et,PHRASAL_WORDS_MODE:bt,COMMENT:ge,C_LINE_COMMENT_MODE:_t,C_BLOCK_COMMENT_MODE:St,HASH_COMMENT_MODE:Nt,NUMBER_MODE:Ot,C_NUMBER_MODE:At,BINARY_NUMBER_MODE:Rt,REGEXP_MODE:Mt,TITLE_MODE:wt,UNDERSCORE_TITLE_MODE:yt,METHOD_GUARD:Tt,END_SAME_AS_BEGIN:It});function xt(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function mt(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Ct(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=xt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function vt(e,t){Array.isArray(e.illegal)&&(e.illegal=_e(...e.illegal))}function kt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Lt(e,t){e.relevance===void 0&&(e.relevance=1)}const Dt=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(c=>{delete e[c]}),e.keywords=n.keywords,e.begin=J(n.beforeMatch,Be(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Bt=["of","and","for","in","not","or","if","then","parent","list","value"],Ut="keyword";function ze(e,t,n=Ut){const c=Object.create(null);return typeof e=="string"?p(n,e.split(" ")):Array.isArray(e)?p(n,e):Object.keys(e).forEach(function(E){Object.assign(c,ze(e[E],t,E))}),c;function p(E,a){t&&(a=a.map(r=>r.toLowerCase())),a.forEach(function(r){const u=r.split("|");c[u[0]]=[E,Pt(u[0],u[1])]})}}function Pt(e,t){return t?Number(t):Ht(e)?0:1}function Ht(e){return Bt.includes(e.toLowerCase())}const xe={},q=e=>{console.error(e)},me=(e,...t)=>{console.log(`WARN: ${e}`,...t)},ee=(e,t)=>{xe[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),xe[`${e}/${t}`]=!0)},ue=new Error;function Fe(e,t,{key:n}){let c=0;const p=e[n],E={},a={};for(let r=1;r<=t.length;r++)a[r+c]=p[r],E[r+c]=!0,c+=Ue(t[r-1]);e[n]=a,e[n]._emit=E,e[n]._multi=!0}function $t(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ue;if(typeof e.beginScope!="object"||e.beginScope===null)throw q("beginScope must be object"),ue;Fe(e,e.begin,{key:"beginScope"}),e.begin=Se(e.begin,{joinWith:""})}}function Gt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ue;if(typeof e.endScope!="object"||e.endScope===null)throw q("endScope must be object"),ue;Fe(e,e.end,{key:"endScope"}),e.end=Se(e.end,{joinWith:""})}}function zt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Ft(e){zt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),$t(e),Gt(e)}function Kt(e){function t(a,r){return new RegExp(se(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,r]),this.matchAt+=Ue(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(u=>u[1]);this.matcherRe=t(Se(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(r);if(!u)return null;const _=u.findIndex((m,M)=>M>0&&m!==void 0),S=this.matchIndexes[_];return u.splice(0,_),Object.assign(u,S)}}class c{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const u=new n;return this.rules.slice(r).forEach(([_,S])=>u.addRule(_,S)),u.compile(),this.multiRegexes[r]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,u){this.rules.push([r,u]),u.type==="begin"&&this.count++}exec(r){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let _=u.exec(r);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const S=this.getMatcher(0);S.lastIndex=this.lastIndex+1,_=S.exec(r)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function p(a){const r=new c;return a.contains.forEach(u=>r.addRule(u.begin,{rule:u,type:"begin"})),a.terminatorEnd&&r.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&r.addRule(a.illegal,{type:"illegal"}),r}function E(a,r){const u=a;if(a.isCompiled)return u;[mt,kt,Ft,Dt].forEach(S=>S(a,r)),e.compilerExtensions.forEach(S=>S(a,r)),a.__beforeBegin=null,[Ct,vt,Lt].forEach(S=>S(a,r)),a.isCompiled=!0;let _=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),_=a.keywords.$pattern,delete a.keywords.$pattern),_=_||/\w+/,a.keywords&&(a.keywords=ze(a.keywords,e.case_insensitive)),u.keywordPatternRe=t(_,!0),r&&(a.begin||(a.begin=/\B|\b/),u.beginRe=t(u.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(u.endRe=t(u.end)),u.terminatorEnd=se(u.end)||"",a.endsWithParent&&r.terminatorEnd&&(u.terminatorEnd+=(a.end?"|":"")+r.terminatorEnd)),a.illegal&&(u.illegalRe=t(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(S){return Zt(S==="self"?a:S)})),a.contains.forEach(function(S){E(S,u)}),a.starts&&E(a.starts,r),u.matcher=p(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=X(e.classNameAliases||{}),E(e)}function Ke(e){return e?e.endsWithParent||Ke(e.starts):!1}function Zt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return X(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Ke(e)?X(e,{starts:e.starts?X(e.starts):null}):Object.isFrozen(e)?X(e):e}var Wt="11.8.0";class Xt extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Ee=De,Ce=X,ve=Symbol("nomatch"),jt=7,Ze=function(e){const t=Object.create(null),n=Object.create(null),c=[];let p=!0;const E="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:at};function u(s){return r.noHighlightRe.test(s)}function _(s){let o=s.className+" ";o+=s.parentNode?s.parentNode.className:"";const f=r.languageDetectRe.exec(o);if(f){const h=I(f[1]);return h||(me(E.replace("{}",f[1])),me("Falling back to no-highlight mode for this block.",s)),h?f[1]:"no-highlight"}return o.split(/\s+/).find(h=>u(h)||I(h))}function S(s,o,f){let h="",O="";typeof o=="object"?(h=s,f=o.ignoreIllegals,O=o.language):(ee("10.7.0","highlight(lang, code, ...args) has been deprecated."),ee("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),O=s,h=o),f===void 0&&(f=!0);const y={code:h,language:O};k("before:highlight",y);const U=y.result?y.result:m(y.language,y.code,f);return U.code=y.code,k("after:highlight",U),U}function m(s,o,f,h){const O=Object.create(null);function y(i,l){return i.keywords[l]}function U(){if(!g.keywords){A.addText(N);return}let i=0;g.keywordPatternRe.lastIndex=0;let l=g.keywordPatternRe.exec(N),d="";for(;l;){d+=N.substring(i,l.index);const b=$.case_insensitive?l[0].toLowerCase():l[0],R=y(g,b);if(R){const[F,et]=R;if(A.addText(d),d="",O[b]=(O[b]||0)+1,O[b]<=jt&&(oe+=et),F.startsWith("_"))d+=l[0];else{const tt=$.classNameAliases[F]||F;H(l[0],tt)}}else d+=l[0];i=g.keywordPatternRe.lastIndex,l=g.keywordPatternRe.exec(N)}d+=N.substring(i),A.addText(d)}function ae(){if(N==="")return;let i=null;if(typeof g.subLanguage=="string"){if(!t[g.subLanguage]){A.addText(N);return}i=m(g.subLanguage,N,!0,we[g.subLanguage]),we[g.subLanguage]=i._top}else i=T(N,g.subLanguage.length?g.subLanguage:null);g.relevance>0&&(oe+=i.relevance),A.__addSublanguage(i._emitter,i.language)}function x(){g.subLanguage!=null?ae():U(),N=""}function H(i,l){i!==""&&(A.startScope(l),A.addText(i),A.endScope())}function Oe(i,l){let d=1;const b=l.length-1;for(;d<=b;){if(!i._emit[d]){d++;continue}const R=$.classNameAliases[i[d]]||i[d],F=l[d];R?H(F,R):(N=F,U(),N=""),d++}}function Ae(i,l){return i.scope&&typeof i.scope=="string"&&A.openNode($.classNameAliases[i.scope]||i.scope),i.beginScope&&(i.beginScope._wrap?(H(N,$.classNameAliases[i.beginScope._wrap]||i.beginScope._wrap),N=""):i.beginScope._multi&&(Oe(i.beginScope,l),N="")),g=Object.create(i,{parent:{value:g}}),g}function Re(i,l,d){let b=ut(i.endRe,d);if(b){if(i["on:end"]){const R=new ye(i);i["on:end"](l,R),R.isMatchIgnored&&(b=!1)}if(b){for(;i.endsParent&&i.parent;)i=i.parent;return i}}if(i.endsWithParent)return Re(i.parent,l,d)}function Qe(i){return g.matcher.regexIndex===0?(N+=i[0],1):(he=!0,0)}function Ye(i){const l=i[0],d=i.rule,b=new ye(d),R=[d.__beforeBegin,d["on:begin"]];for(const F of R)if(F&&(F(i,b),b.isMatchIgnored))return Qe(l);return d.skip?N+=l:(d.excludeBegin&&(N+=l),x(),!d.returnBegin&&!d.excludeBegin&&(N=l)),Ae(d,i),d.returnBegin?0:l.length}function Ve(i){const l=i[0],d=o.substring(i.index),b=Re(g,i,d);if(!b)return ve;const R=g;g.endScope&&g.endScope._wrap?(x(),H(l,g.endScope._wrap)):g.endScope&&g.endScope._multi?(x(),Oe(g.endScope,i)):R.skip?N+=l:(R.returnEnd||R.excludeEnd||(N+=l),x(),R.excludeEnd&&(N=l));do g.scope&&A.closeNode(),!g.skip&&!g.subLanguage&&(oe+=g.relevance),g=g.parent;while(g!==b.parent);return b.starts&&Ae(b.starts,i),R.returnEnd?0:l.length}function qe(){const i=[];for(let l=g;l!==$;l=l.parent)l.scope&&i.unshift(l.scope);i.forEach(l=>A.openNode(l))}let ce={};function Me(i,l){const d=l&&l[0];if(N+=i,d==null)return x(),0;if(ce.type==="begin"&&l.type==="end"&&ce.index===l.index&&d===""){if(N+=o.slice(l.index,l.index+1),!p){const b=new Error(`0 width match regex (${s})`);throw b.languageName=s,b.badRule=ce.rule,b}return 1}if(ce=l,l.type==="begin")return Ye(l);if(l.type==="illegal"&&!f){const b=new Error('Illegal lexeme "'+d+'" for mode "'+(g.scope||"<unnamed>")+'"');throw b.mode=g,b}else if(l.type==="end"){const b=Ve(l);if(b!==ve)return b}if(l.type==="illegal"&&d==="")return 1;if(pe>1e5&&pe>l.index*3)throw new Error("potential infinite loop, way more iterations than matches");return N+=d,d.length}const $=I(s);if(!$)throw q(E.replace("{}",s)),new Error('Unknown language: "'+s+'"');const Je=Kt($);let de="",g=h||Je;const we={},A=new r.__emitter(r);qe();let N="",oe=0,V=0,pe=0,he=!1;try{if($.__emitTokens)$.__emitTokens(o,A);else{for(g.matcher.considerAll();;){pe++,he?he=!1:g.matcher.considerAll(),g.matcher.lastIndex=V;const i=g.matcher.exec(o);if(!i)break;const l=o.substring(V,i.index),d=Me(l,i);V=i.index+d}Me(o.substring(V))}return A.finalize(),de=A.toHTML(),{language:s,value:de,relevance:oe,illegal:!1,_emitter:A,_top:g}}catch(i){if(i.message&&i.message.includes("Illegal"))return{language:s,value:Ee(o),illegal:!0,relevance:0,_illegalBy:{message:i.message,index:V,context:o.slice(V-100,V+100),mode:i.mode,resultSoFar:de},_emitter:A};if(p)return{language:s,value:Ee(o),illegal:!1,relevance:0,errorRaised:i,_emitter:A,_top:g};throw i}}function M(s){const o={value:Ee(s),illegal:!1,relevance:0,_top:a,_emitter:new r.__emitter(r)};return o._emitter.addText(s),o}function T(s,o){o=o||r.languages||Object.keys(t);const f=M(s),h=o.filter(I).filter(Y).map(x=>m(x,s,!1));h.unshift(f);const O=h.sort((x,H)=>{if(x.relevance!==H.relevance)return H.relevance-x.relevance;if(x.language&&H.language){if(I(x.language).supersetOf===H.language)return 1;if(I(H.language).supersetOf===x.language)return-1}return 0}),[y,U]=O,ae=y;return ae.secondBest=U,ae}function L(s,o,f){const h=o&&n[o]||f;s.classList.add("hljs"),s.classList.add(`language-${h}`)}function C(s){let o=null;const f=_(s);if(u(f))return;if(k("before:highlightElement",{el:s,language:f}),s.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),r.throwUnescapedHTML))throw new Xt("One of your code blocks includes unescaped HTML.",s.innerHTML);o=s;const h=o.textContent,O=f?S(h,{language:f,ignoreIllegals:!0}):T(h);s.innerHTML=O.value,L(s,f,O.language),s.result={language:O.language,re:O.relevance,relevance:O.relevance},O.secondBest&&(s.secondBest={language:O.secondBest.language,relevance:O.secondBest.relevance}),k("after:highlightElement",{el:s,result:O,text:h})}function G(s){r=Ce(r,s)}const K=()=>{B(),ee("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Z(){B(),ee("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let D=!1;function B(){if(document.readyState==="loading"){D=!0;return}document.querySelectorAll(r.cssSelector).forEach(C)}function z(){D&&B()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",z,!1);function P(s,o){let f=null;try{f=o(e)}catch(h){if(q("Language definition for '{}' could not be registered.".replace("{}",s)),p)q(h);else throw h;f=a}f.name||(f.name=s),t[s]=f,f.rawDefinition=o.bind(null,e),f.aliases&&Q(f.aliases,{languageName:s})}function W(s){delete t[s];for(const o of Object.keys(n))n[o]===s&&delete n[o]}function j(){return Object.keys(t)}function I(s){return s=(s||"").toLowerCase(),t[s]||t[n[s]]}function Q(s,{languageName:o}){typeof s=="string"&&(s=[s]),s.forEach(f=>{n[f.toLowerCase()]=o})}function Y(s){const o=I(s);return o&&!o.disableAutodetect}function ne(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=o=>{s["before:highlightBlock"](Object.assign({block:o.el},o))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=o=>{s["after:highlightBlock"](Object.assign({block:o.el},o))})}function v(s){ne(s),c.push(s)}function w(s){const o=c.indexOf(s);o!==-1&&c.splice(o,1)}function k(s,o){const f=s;c.forEach(function(h){h[f]&&h[f](o)})}function ie(s){return ee("10.7.0","highlightBlock will be removed entirely in v12.0"),ee("10.7.0","Please use highlightElement now."),C(s)}Object.assign(e,{highlight:S,highlightAuto:T,highlightAll:B,highlightElement:C,highlightBlock:ie,configure:G,initHighlighting:K,initHighlightingOnLoad:Z,registerLanguage:P,unregisterLanguage:W,listLanguages:j,getLanguage:I,registerAliases:Q,autoDetection:Y,inherit:Ce,addPlugin:v,removePlugin:w}),e.debugMode=function(){p=!1},e.safeMode=function(){p=!0},e.versionString=Wt,e.regex={concat:J,lookahead:Be,either:_e,optional:ot,anyNumberOfTimes:ct};for(const s in le)typeof le[s]=="object"&&Le(le[s]);return Object.assign(e,le),e},te=Ze({});te.newInstance=()=>Ze({});var Qt=te;te.HighlightJS=te;te.default=te;const fe=nt(Qt);function Yt(e){const t=e.regex,n={},c={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},c]});const p={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},E={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,p]};p.contains.push(a);const r={className:"",begin:/\\"/},u={className:"string",begin:/'/,end:/'/},_={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},S=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],m=e.SHEBANG({binary:`(${S.join("|")})`,relevance:10}),M={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},T=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],L=["true","false"],C={match:/(\/[a-z._-]+)+/},G=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],K=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],Z=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],D=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:T,literal:L,built_in:[...G,...K,"set","shopt",...Z,...D]},contains:[m,e.SHEBANG(),M,_,e.HASH_COMMENT_MODE,E,C,a,r,u,n]}}function Vt(e){const t=e.regex,n=/(?![A-Za-z0-9])(?![$])/,c=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,n),p=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,n),E={scope:"variable",match:"\\$+"+c},a={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},r={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},u=e.inherit(e.APOS_STRING_MODE,{illegal:null}),_=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(r)}),S={begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(r),"on:begin":(v,w)=>{w.data._beginMatch=v[1]||v[2]},"on:end":(v,w)=>{w.data._beginMatch!==v[1]&&w.ignoreMatch()}},m=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/}),M=`[ 	
]`,T={scope:"string",variants:[_,u,S,m]},L={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},C=["false","null","true"],G=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],K=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],D={keyword:G,literal:(v=>{const w=[];return v.forEach(k=>{w.push(k),k.toLowerCase()===k?w.push(k.toUpperCase()):w.push(k.toLowerCase())}),w})(C),built_in:K},B=v=>v.map(w=>w.replace(/\|\d+$/,"")),z={variants:[{match:[/new/,t.concat(M,"+"),t.concat("(?!",B(K).join("\\b|"),"\\b)"),p],scope:{1:"keyword",4:"title.class"}}]},P=t.concat(c,"\\b(?!\\()"),W={variants:[{match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),P],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[p,t.concat(/::/,t.lookahead(/(?!class\b)/)),P],scope:{1:"title.class",3:"variable.constant"}},{match:[p,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[p,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},j={scope:"attr",match:t.concat(c,t.lookahead(":"),t.lookahead(/(?!::)/))},I={relevance:0,begin:/\(/,end:/\)/,keywords:D,contains:[j,E,W,e.C_BLOCK_COMMENT_MODE,T,L,z]},Q={relevance:0,match:[/\b/,t.concat("(?!fn\\b|function\\b|",B(G).join("\\b|"),"|",B(K).join("\\b|"),"\\b)"),c,t.concat(M,"*"),t.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[I]};I.contains.push(Q);const Y=[j,W,e.C_BLOCK_COMMENT_MODE,T,L,z],ne={begin:t.concat(/#\[\s*/,p),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:C,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:C,keyword:["new","array"]},contains:["self",...Y]},...Y,{scope:"meta",match:p}]};return{case_insensitive:!1,keywords:D,contains:[ne,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},a,{scope:"variable.language",match:/\$this\b/},E,Q,W,{match:[/const/,/\s/,c],scope:{1:"keyword",3:"variable.constant"}},z,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:D,contains:["self",E,W,e.C_BLOCK_COMMENT_MODE,T,L]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},T,L]}}const ke="[A-Za-z$_][0-9A-Za-z$_]*",qt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Jt=["true","false","null","undefined","NaN","Infinity"],We=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],je=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],en=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],tn=[].concat(je,We,Xe);function nn(e){const t=e.regex,n=(o,{after:f})=>{const h="</"+o[0].slice(1);return o.input.indexOf(h,f)!==-1},c=ke,p={begin:"<>",end:"</>"},E=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(o,f)=>{const h=o[0].length+o.index,O=o.input[h];if(O==="<"||O===","){f.ignoreMatch();return}O===">"&&(n(o,{after:h})||f.ignoreMatch());let y;const U=o.input.substring(h);if(y=U.match(/^\s*=/)){f.ignoreMatch();return}if((y=U.match(/^\s+extends\s+/))&&y.index===0){f.ignoreMatch();return}}},r={$pattern:ke,keyword:qt,literal:Jt,built_in:tn,"variable.language":en},u="[0-9](_?[0-9])*",_=`\\.(${u})`,S="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${S})((${_})|\\.)?|(${_}))[eE][+-]?(${u})\\b`},{begin:`\\b(${S})\\b((${_})\\b|\\.)?|(${_})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},M={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},T={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,M],subLanguage:"xml"}},L={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,M],subLanguage:"css"}},C={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,M],subLanguage:"graphql"}},G={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,M]},Z={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},D=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,T,L,C,G,{match:/\$\d+/},m];M.contains=D.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(D)});const B=[].concat(Z,M.contains),z=B.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(B)}]),P={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:z},W={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,t.concat(c,"(",t.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},j={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...We,...Xe]}},I={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[P],illegal:/%/},Y={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ne(o){return t.concat("(?!",o.join("|"),")")}const v={match:t.concat(/\b/,ne([...je,"super","import"]),c,t.lookahead(/\(/)),className:"title.function",relevance:0},w={begin:t.concat(/\./,t.lookahead(t.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},k={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},P]},ie="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",s={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ie)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[P]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:z,CLASS_REFERENCE:j},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),I,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,T,L,C,G,Z,{match:/\$\d+/},m,j,{className:"attr",begin:c+t.lookahead(":"),relevance:0},s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[Z,e.REGEXP_MODE,{className:"function",begin:ie,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:z}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:p.begin,end:p.end},{match:E},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[P,e.inherit(e.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},w,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[P]},v,Y,W,k,{match:/\$[(.]/}]}}fe.registerLanguage("bash",Yt);fe.registerLanguage("php",Vt);fe.registerLanguage("javascript",nn);fe.highlightAll();
