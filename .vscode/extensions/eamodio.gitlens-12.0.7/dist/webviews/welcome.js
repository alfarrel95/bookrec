(()=>{"use strict";var ke={},U=Object.defineProperty,J=(s,t,e)=>t in s?U(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,K=(s,t,e)=>(J(s,typeof t!="symbol"?t+"":t,e),e);class D{constructor(t){this.method=t,K(this,"_")}}class S extends D{}class $ extends D{}function _(s,t,e){s.method===t.method&&e(t.params)}const Q=new S("webview/ready"),we=new S("command/execute"),X=new S("configuration/preview"),ee=new S("configuration/update"),A=new $("configuration/didChange"),te=new $("configuration/didPreview"),B=new $("webview/didOpenAnchor"),N=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,F=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,ne=null;let y;const w=new Map;let g,k,p;function oe(s){typeof s=="string"?s==="system"?g=void 0:g=[s]:g=s??void 0,k=void 0,p=void 0,w.clear(),y=void 0}function Pe(s,t){const e=new Date(s.getTime());for(const[n,o]of Object.entries(t))if(!!o)switch(n){case"years":e.setFullYear(e.getFullYear()+o);break;case"months":e.setMonth(e.getMonth()+o);break;case"days":e.setDate(e.getDate()+o);break;case"hours":e.setHours(e.getHours()+o);break;case"minutes":e.setMinutes(e.getMinutes()+o);break;case"seconds":e.setSeconds(e.getSeconds()+o);break}return e}function Se(s,t){const e=s.getTime()-new Date().getTime();for(const[n,o,r,i]of ne){const l=Math.abs(e);if(l>=o||o===1e3)return t?(y==null&&(p!=null?y=p.resolvedOptions().locale:k!=null?y=k.resolvedOptions().locale:(p=new Intl.RelativeTimeFormat(g,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),y=p.resolvedOptions().locale)),y==="en"||y?.startsWith("en-")?`${Math.round(l/r)}${i}`:(p==null&&(p=new Intl.RelativeTimeFormat(g,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),p.format(Math.round(e/r),n))):(k==null&&(k=new Intl.RelativeTimeFormat(g,{localeMatcher:"best fit",numeric:"auto",style:"long"})),k.format(Math.round(e/r),n))}return""}function E(s,t,e,n=!0){t=t??void 0;const o=`${e??""}:${t}`;let r=w.get(o);if(r==null){const a=re(t);let c;e==null?c=g:e==="system"?c=void 0:c=[e],r=new Intl.DateTimeFormat(c,a),n&&w.set(o,r)}if(t==null||F.test(t))return r.format(s);function i(a){const c=`${e??""}:time:${a}`;let u=w.get(c);if(u==null){const f={localeMatcher:"best fit",timeStyle:a};let m;e==null?m=g:e==="system"?m=void 0:m=[e],u=new Intl.DateTimeFormat(m,f),n&&w.set(c,u)}return u}const l=r.formatToParts(s);return t.replace(N,(a,c,u,f,m,$e,_e,Ce,Ie,Ve,xe,Me,De,Ae,H)=>{if(c!=null)return c.substring(1,c.length-1);for(const Z in H){const M=H[Z];if(M==null)continue;const P=l.find(G=>G.type===Z);return M==="Do"&&P?.type==="day"?se(Number(P.value)):M==="a"&&P?.type==="dayPeriod"?` ${(i("short").formatToParts(s).find(ve=>ve.type==="dayPeriod")??P)?.value??""}`:P?.value??""}return""})}function Te(s,t,e){const n=(typeof t=="number"?t:t.getTime())-(typeof s=="number"?s:s.getTime());switch(e){case"days":return Math.floor(n/(1e3*60*60*24));case"hours":return Math.floor(n/(1e3*60*60));case"minutes":return Math.floor(n/(1e3*60));case"seconds":return Math.floor(n/1e3);default:return n}}function re(s){if(s==null)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=F.exec(s);if(t?.groups!=null){const{dateStyle:n,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:n||"full",timeStyle:o||void 0}}const e={localeMatcher:"best fit"};for(const{groups:n}of s.matchAll(N))if(n!=null)for(const o in n){const r=n[o];if(r!=null)switch(o){case"year":e.year=r.length===4?"numeric":"2-digit";break;case"month":switch(r.length){case 4:e.month="long";break;case 3:e.month="short";break;case 2:e.month="2-digit";break;case 1:e.month="numeric";break}break;case"day":r==="DD"?e.day="2-digit":e.day="numeric";break;case"weekday":switch(r.length){case 4:e.weekday="long";break;case 3:e.weekday="short";break;case 2:e.weekday="narrow";break}break;case"hour":e.hour=r.length===2?"2-digit":"numeric",e.hour12=r==="hh"||r==="h";break;case"minute":e.minute=r.length===2?"2-digit":"numeric";break;case"second":e.second=r.length===2?"2-digit":"numeric";break;case"fractionalSecond":e.fractionalSecondDigits=3;break;case"dayPeriod":e.dayPeriod="narrow",e.hour12=!0,e.hourCycle="h12";break;case"timeZoneName":e.timeZoneName=r.length===2?"long":"short";break}}return e}const C=["th","st","nd","rd"];function se(s){const t=s%100;return`${s}${C[(t-20)%10]??C[t]??C[0]}`}var d;(s=>{function t(o,r,i,l){let a=!1;if(typeof o=="string"){const u=function(f){const m=f?.target;!m?.matches(o)||i(f,m)};return document.addEventListener(r,u,l??!0),{dispose:()=>{a||(a=!0,document.removeEventListener(r,u,l??!0))}}}const c=function(u){i(u,this)};return o.addEventListener(r,c,l??!1),{dispose:()=>{a||(a=!0,o.removeEventListener(r,c,l??!1))}}}s.on=t;function e(o,r,i){const l=document.getElementById(o);if(r.replaceChildren(l?.content.cloneNode(!0)),r.className=l.className,i?.visible!=null){const a=r.querySelectorAll("[data-visible]");for(const c of a){const u=c.dataset.visible;!u||(i.visible[u]?c.style.display="initial":c.style.display="none")}}if(i?.bindings!=null){const a=r.querySelectorAll("[data-bind]");for(const c of a){const u=c.dataset.bind;if(!u)continue;const f=i.bindings[u];f!=null&&(c.textContent=String(f))}}}s.insertTemplate=e;function n(o){o.replaceChildren(),o.className=""}s.resetSlot=n})(d||(d={}));const ie=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i;function I(s,t){const e=s+t,n=t<0?e<0?0:e:e>255?255:e;return Math.round(n)}function h(s,t){return b(s,-t)}function b(s,t){const e=O(s);if(e==null)return s;const[n,o,r,i]=e,l=255*t/100;return`rgba(${I(n,l)}, ${I(o,l)}, ${I(r,l)}, ${i})`}function v(s,t){const e=O(s);if(e==null)return s;const[n,o,r,i]=e;return`rgba(${n}, ${o}, ${r}, ${i*(t/100)})`}function O(s){s=s.trim();const t=ie.exec(s);if(t==null)return null;if(t[1]==="#"){const e=t[2];switch(e.length){case 3:return[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),1];case 6:return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16),1]}return null}switch(t[3]){case"rgb":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),1];case"rgba":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),parseFloat(t[7])];default:return null}}function ae(){const s=()=>{const e=document.body,n=window.getComputedStyle(e),o=e.style;o.setProperty("--font-family",n.getPropertyValue("--vscode-font-family").trim()),o.setProperty("--font-size",n.getPropertyValue("--vscode-font-size").trim()),o.setProperty("--font-weight",n.getPropertyValue("--vscode-font-weight").trim()),o.setProperty("--editor-font-family",n.getPropertyValue("--vscode-editor-font-family").trim()),o.setProperty("--editor-font-size",n.getPropertyValue("--vscode-editor-font-size").trim()),o.setProperty("--editor-font-weight",n.getPropertyValue("--vscode-editor-font-weight").trim());let r=n.getPropertyValue("--vscode-editor-background").trim();o.setProperty("--color-background",r),o.setProperty("--color-background--lighten-05",b(r,5)),o.setProperty("--color-background--darken-05",h(r,5)),o.setProperty("--color-background--lighten-075",b(r,7.5)),o.setProperty("--color-background--darken-075",h(r,7.5)),o.setProperty("--color-background--lighten-15",b(r,15)),o.setProperty("--color-background--darken-15",h(r,15)),o.setProperty("--color-background--lighten-30",b(r,30)),o.setProperty("--color-background--darken-30",h(r,30)),o.setProperty("--color-background--lighten-50",b(r,50)),o.setProperty("--color-background--darken-50",h(r,50)),r=n.getPropertyValue("--vscode-button-background").trim(),o.setProperty("--color-button-background",r),o.setProperty("--color-button-background--darken-30",h(r,30)),r=n.getPropertyValue("--vscode-button-secondaryBackground").trim(),o.setProperty("--color-button-secondary-background",r),o.setProperty("--color-button-secondary-background--darken-30",h(r,30)),r=n.getPropertyValue("--vscode-button-background").trim(),o.setProperty("--color-highlight",r),o.setProperty("--color-highlight--75",v(r,75)),o.setProperty("--color-highlight--50",v(r,50)),o.setProperty("--color-highlight--25",v(r,25)),r=n.getPropertyValue("--vscode-button-foreground").trim(),o.setProperty("--color-button-foreground",r);let i=n.getPropertyValue("--vscode-editor-foreground").trim();i||(i=n.getPropertyValue("--vscode-foreground").trim()),o.setProperty("--color-foreground",i),o.setProperty("--color-foreground--85",v(i,85)),o.setProperty("--color-foreground--75",v(i,75)),o.setProperty("--color-foreground--65",v(i,65)),o.setProperty("--color-foreground--50",v(i,50)),r=n.getPropertyValue("--vscode-focusBorder").trim(),o.setProperty("--color-focus-border",r),r=n.getPropertyValue("--vscode-textLink-foreground").trim(),o.setProperty("--color-link-foreground",r),o.setProperty("--color-link-foreground--darken-20",h(r,20)),o.setProperty("--color-link-foreground--lighten-20",b(r,20)),r=n.getPropertyValue("--vscode-sideBar-foreground").trim(),o.setProperty("--color-view-foreground",r||i),o.setProperty("--color-view-header-foreground",n.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||r||i),r=n.getPropertyValue("--vscode-editorHoverWidget-background").trim(),o.setProperty("--color-hover-background",r),r=n.getPropertyValue("--vscode-editorHoverWidget-border").trim(),o.setProperty("--color-hover-border",r),r=n.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),o.setProperty("--color-hover-foreground",r),r=n.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),o.setProperty("--color-hover-statusBarBackground",r)},t=new MutationObserver(s);return t.observe(document.body,{attributes:!0,attributeFilter:["class"]}),s(),t}var le=Object.defineProperty,ce=(s,t,e)=>t in s?le(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,V=(s,t,e)=>(ce(s,typeof t!="symbol"?t+"":t,e),e);const ue=2**30;let T=0;function R(){return T===ue?T=1:T++,`webview:${T}`}class de{constructor(t){this.appName=t,V(this,"_api"),V(this,"state"),V(this,"bindDisposables"),this.state=window.bootstrap,window.bootstrap=void 0,this.log(`${this.appName}()`),this._api=acquireVsCodeApi(),ae(),requestAnimationFrame(()=>{this.log(`${this.appName}.initializing`);try{this.onInitialize?.(),this.bind(),this.onMessageReceived!=null&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand(Q,void 0),this.onInitialized?.()}finally{setTimeout(()=>{document.body.classList.remove("preload")},500)}})}bind(){this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=this.onBind?.()}log(t){}getState(){return this._api.getState()}sendCommand(t,e){const n=R();return this.log(`${this.appName}.sendCommand(${n}): name=${t.method}`),this.postMessage({id:n,method:t.method,params:e})}sendCommandWithCompletion(t,e,n,o){const r=R();this.log(`${this.appName}.sendCommandWithCompletion(${r}): name=${t.method}`);const i=d.on(window,"message",l=>{_(n,l.data,a=>{a.completionId===r&&(i.dispose(),o(a))})});return this.postMessage({id:r,method:t.method,params:e})}setState(t){this.state=t,t!=null&&this._api.setState(t)}postMessage(t){this._api.postMessage(t)}}var ge=Object.defineProperty,pe=(s,t,e)=>t in s?ge(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,x=(s,t,e)=>(pe(s,typeof t!="symbol"?t+"":t,e),e);const L=new Date().getTimezoneOffset()/60*100,W=new Date(`Wed Jul 25 2018 19:18:00 GMT${L>=0?"-":"+"}${String(Math.abs(L)).padStart(4,"0")}`);class he extends de{constructor(t){super(t);x(this,"_changes",Object.create(null)),x(this,"_updating",!1),x(this,"_scrollTimer")}onInitialized(){this.updateState()}onBind(){const t=super.onBind?.()??[];return t.push(d.on("input[type=checkbox][data-setting]","change",(e,n)=>this.onInputChecked(n)),d.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",(e,n)=>this.onInputBlurred(n)),d.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",(e,n)=>this.onInputFocused(n)),d.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",(e,n)=>this.onInputChanged(n)),d.on("select[data-setting]","change",(e,n)=>this.onInputSelected(n)),d.on(".token[data-token]","mousedown",(e,n)=>this.onTokenMouseDown(n,e))),t}onMessageReceived(t){const e=t.data;switch(this.log(`${this.appName}.onMessageReceived(${e.id}): name=${e.method}`),e.method){case B.method:{_(B,e,n=>{this.scrollToAnchor(n.anchor,n.scrollBehavior)});break}case A.method:_(A,e,n=>{this.state.config=n.config,this.state.customSettings=n.customSettings,this.updateState()});break;default:super.onMessageReceived?.(t)}}applyChanges(){this.sendCommand(ee,{changes:{...this._changes},removes:Object.keys(this._changes).filter(t=>this._changes[t]===void 0),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return"user"}onInputBlurred(t){this.log(`${this.appName}.onInputBlurred: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);e?.classList.add("hidden");let n=t.value;(n==null||n.length===0)&&(n=t.dataset.defaultValue,n===void 0&&(n=null)),this._changes[t.name]=t.type==="number"&&n!=null?Number(n):n,this.applyChanges()}onInputChanged(t){if(!this._updating)for(const e of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(e,t.value)}onInputChecked(t){if(!this._updating){switch(this.log(`${this.appName}.onInputChecked: name=${t.name}, checked=${t.checked}, value=${t.value}`),t.dataset.settingType){case"object":{const e=t.name.split("."),n=e.splice(0,1)[0],o=this.getSettingValue(n)??Object.create(null);t.checked?Y(o,e.join("."),z(t.value)):Y(o,e.join("."),!1),this._changes[n]=o;break}case"array":{const e=this.getSettingValue(t.name)??[];if(Array.isArray(e)){if(t.checked)e.includes(t.value)||e.push(t.value);else{const n=e.indexOf(t.value);n!==-1&&e.splice(n,1)}this._changes[t.name]=e}break}case"custom":{this._changes[t.name]=t.checked;break}default:{t.checked?this._changes[t.name]=z(t.value):this._changes[t.name]=t.dataset.valueOff==null?!1:t.dataset.valueOff;break}}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`${this.appName}.onInputFocused: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);if(e!=null){if(e.childElementCount===0){const n=document.querySelector("#token-popup")?.content.cloneNode(!0);e.appendChild(n)}e.classList.remove("hidden")}}onInputSelected(t){if(this._updating)return;const e=t.options[t.selectedIndex].value;this.log(`${this.appName}.onInputSelected: name=${t.name}, value=${e}`),this._changes[t.name]=q(e),this.applyChanges()}onTokenMouseDown(t,e){if(this._updating)return;this.log(`${this.appName}.onTokenClicked: id=${t.id}`);const n=t.closest(".setting");if(n==null)return;const o=n.querySelector("input[type=text], input:not([type])");if(o==null)return;const r=`\${${t.dataset.token}}`;let i=o.selectionStart;i!=null?(o.value=`${o.value.substring(0,i)}${r}${o.value.substr(o.selectionEnd??i)}`,i+=r.length):i=o.value.length,o.focus(),o.setSelectionRange(i,i),i===o.value.length&&(o.scrollLeft=o.scrollWidth),setTimeout(()=>this.onInputChanged(o),0),setTimeout(()=>o.focus(),250),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()}scrollToAnchor(t,e,n){const o=document.getElementById(t);o!=null&&this.scrollTo(o,e,n)}scrollTo(t,e,n){const o=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(n??0);window.scrollTo({top:o,behavior:e??"smooth"});const r=()=>{this._scrollTimer!=null&&clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(()=>{window.removeEventListener("scroll",r);const i=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(n??0);o!==i&&this.scrollTo(t,e,n)},50)};window.addEventListener("scroll",r,!1)}evaluateStateExpression(t,e){let n=!1;for(const o of t.trim().split("&")){const[r,i,l]=ye(o);switch(i){case"=":{let a=e[r];a===void 0&&(a=this.getSettingValue(r)??!1),n=l!==void 0?l===String(a):Boolean(a);break}case"!":{let a=e[r];a===void 0&&(a=this.getSettingValue(r)??!1),n=l!==void 0?l!==String(a):!a;break}case"+":{if(l!==void 0){const a=this.getSettingValue(r);n=a!==void 0?a.includes(l.toString()):!1}break}}if(!n)break}return n}getCustomSettingValue(t){return this.state.customSettings?.[t]}getSettingValue(t){const e=this.getCustomSettingValue(t);return e??fe(this.state.config,t)}updateState(){this._updating=!0,oe(this.state.config.defaultDateLocale);try{for(const e of document.querySelectorAll("input[type=checkbox][data-setting]"))if(e.dataset.settingType==="custom")e.checked=this.getCustomSettingValue(e.name)??!1;else if(e.dataset.settingType==="array")e.checked=(this.getSettingValue(e.name)??[]).includes(e.value);else if(e.dataset.valueOff!=null){const n=this.getSettingValue(e.name);e.checked=e.dataset.valueOff!==n}else e.checked=this.getSettingValue(e.name)??!1;for(const e of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))e.value=this.getSettingValue(e.name)??"";for(const e of document.querySelectorAll("select[data-setting]")){const n=this.getSettingValue(e.name),o=e.querySelector(`option[value='${n}']`);o!=null&&(o.selected=!0)}for(const e of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(e)}finally{this._updating=!1}const t=j(this.state.config);this.setVisibility(t),this.setEnablement(t)}setAdditionalSettings(t){if(!t)return;const e=me(t);for(const[n,o]of e)this._changes[n]=o}setEnablement(t){for(const e of document.querySelectorAll("[data-enablement]")){const n=!this.evaluateStateExpression(e.dataset.enablement,t);if(n?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.matches("input,select"))e.disabled=n;else{const o=e.querySelector("input,select");if(o==null)continue;o.disabled=n}}}setVisibility(t){for(const e of document.querySelectorAll("[data-visibility]"))e.classList.toggle("hidden",!this.evaluateStateExpression(e.dataset.visibility,t))}updatePreview(t,e){switch(t.dataset.settingPreviewType){case"date":{e===void 0&&(e=this.getSettingValue(t.dataset.settingPreview)),e||(e=t.dataset.settingPreviewDefault),t.innerText=e==null?"":E(W,e,void 0,!1);break}case"date-locale":{e===void 0&&(e=this.getSettingValue(t.dataset.settingPreview)),e||(e=void 0);const n=this.getSettingValue(t.dataset.settingPreviewDefault)??"MMMM Do, YYYY h:mma";try{t.innerText=E(W,n,e,!1)}catch(o){t.innerText=o.message}break}case"commit":{if(e===void 0&&(e=this.getSettingValue(t.dataset.settingPreview)),e||(e=t.dataset.settingPreviewDefault),e==null){t.innerText="";return}this.sendCommandWithCompletion(X,{key:t.dataset.settingPreview,type:"commit",format:e},te,n=>{t.innerText=n.preview??""});break}default:break}}}function q(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s}function fe(s,t){return t.split(".").reduce((e={},n)=>e?.[n],s)}function Y(s,t,e){const n=t.split("."),o=n.length,r=o-1;let i=-1,l=s;for(;l!=null&&++i<o;){const a=n[i];let c=e;if(i!==r){const u=l[a];c=typeof u=="object"?u:{}}l[a]=c,l=l[a]}return s}function me(s){return s.trim().split(",").map(e=>{const[n,o]=e.split("=");return[n,q(o)]})}function ye(s){const[t,e,n]=s.trim().split(/([=+!])/);return[t.trim(),e!==void 0?e.trim():"=",n!==void 0?n.trim():n]}function j(s,t){const e={};for(const n in s){const o=s[n];Array.isArray(o)||(typeof o=="object"?Object.assign(e,j(o,t===void 0?n:`${t}.${n}`)):e[t===void 0?n:`${t}.${n}`]=o)}return e}function z(s){switch(s){case"on":return!0;case"null":return null;case"undefined":return;default:return s}}class be extends he{constructor(){super("WelcomeApp")}}new be})();

//# sourceMappingURL=welcome.js.map