import{s as Jt,B as zt,E as le,p as ue,j as Pt,q as de,e as g,t as W,k as B,c as _,a as p,b as Y,d as o,o as L,A as Ot,f as s,i as G,g as a,C as $t,u as ft,D as He,h as ut,F as se,y as yt,m as ze,z as Dt,n as fe,H as Ue,l as we}from"../chunks/scheduler.Dz-NSSWT.js";import{S as ae,i as re,f as ne,b as Lt,d as Nt,m as Ct,t as ct,a as pt,e as Ht,g as Kt,c as te}from"../chunks/index.CVQtJBk6.js";import{g as qe}from"../chunks/globals.D0QH3NT1.js";import{e as ee}from"../chunks/each.CwcyO-D0.js";import{t as St}from"../chunks/Toaster.svelte_svelte_type_style_lang.Bxfrv8ue.js";import{f as Re}from"../chunks/FileSaver.min.CimDdHIv.js";import{n as Bt,S as Ae,y as Oe,W as Ge,s as Je}from"../chunks/index.D2mQNFJF.js";import{u as Qe,g as Ut,t as ke,d as ye,c as De}from"../chunks/index.CVedh36t.js";import{u as Xe,p as We}from"../chunks/index.CF_prFGd.js";import{i as Ye,t as Ze}from"../chunks/index.C8OzP8zI.js";import{C as je}from"../chunks/Checkbox.W3Q7q_uq.js";import"../chunks/dayjs.min.CnqrW7zs.js";import{M as Fe}from"../chunks/Modal.Cx3fPC8l.js";import{T as Pe}from"../chunks/Tags.rNughajE.js";import"../chunks/sha256.CRlV3BEV.js";import{A as Ke}from"../chunks/AddFilesPlaceholder.CiYjLXlh.js";import{t as tl}from"../chunks/index.GZY0tup4.js";function el(e){let t,l,r,f=e[3].t("Edit Doc")+"",c,n,u,h='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',b,i,v,w,k,D,M,S=e[3].t("Name Tag")+"",E,J,y,N,Z="#",mt,z,A,U,X,lt=e[3].t("Title")+"",it,K,F,q,nt,ot,R,tt=e[3].t("Tags")+"",O,et,d,x,j,C,H=e[3].t("Save")+"",Q,V,P,rt;return d=new Pe({props:{tags:e[1],addTag:e[6],deleteTag:e[7]}}),{c(){t=g("div"),l=g("div"),r=g("div"),c=W(f),n=B(),u=g("button"),u.innerHTML=h,b=B(),i=g("div"),v=g("div"),w=g("form"),k=g("div"),D=g("div"),M=g("div"),E=W(S),J=B(),y=g("div"),N=g("div"),N.textContent=Z,mt=B(),z=g("input"),A=B(),U=g("div"),X=g("div"),it=W(lt),K=B(),F=g("div"),q=g("input"),nt=B(),ot=g("div"),R=g("div"),O=W(tt),et=B(),Lt(d.$$.fragment),x=B(),j=g("div"),C=g("button"),Q=W(H),this.h()},l(T){t=_(T,"DIV",{});var $=p(t);l=_($,"DIV",{class:!0});var gt=p(l);r=_(gt,"DIV",{class:!0});var It=p(r);c=Y(It,f),It.forEach(o),n=L(gt),u=_(gt,"BUTTON",{class:!0,"data-svelte-h":!0}),Ot(u)!=="svelte-745w2y"&&(u.innerHTML=h),gt.forEach(o),b=L($),i=_($,"DIV",{class:!0});var ht=p(i);v=_(ht,"DIV",{class:!0});var Et=p(v);w=_(Et,"FORM",{class:!0});var bt=p(w);k=_(bt,"DIV",{class:!0});var kt=p(k);D=_(kt,"DIV",{class:!0});var Tt=p(D);M=_(Tt,"DIV",{class:!0});var xt=p(M);E=Y(xt,S),xt.forEach(o),J=L(Tt),y=_(Tt,"DIV",{class:!0});var Vt=p(y);N=_(Vt,"DIV",{class:!0,"data-svelte-h":!0}),Ot(N)!=="svelte-1xdm6fj"&&(N.textContent=Z),mt=L(Vt),z=_(Vt,"INPUT",{class:!0,type:!0,autocomplete:!0}),Vt.forEach(o),Tt.forEach(o),A=L(kt),U=_(kt,"DIV",{class:!0});var _t=p(U);X=_(_t,"DIV",{class:!0});var jt=p(X);it=Y(jt,lt),jt.forEach(o),K=L(_t),F=_(_t,"DIV",{class:!0});var qt=p(F);q=_(qt,"INPUT",{class:!0,type:!0,autocomplete:!0}),qt.forEach(o),_t.forEach(o),nt=L(kt),ot=_(kt,"DIV",{class:!0});var st=p(ot);R=_(st,"DIV",{class:!0});var wt=p(R);O=Y(wt,tt),wt.forEach(o),et=L(st),Nt(d.$$.fragment,st),st.forEach(o),kt.forEach(o),x=L(bt),j=_(bt,"DIV",{class:!0});var Qt=p(j);C=_(Qt,"BUTTON",{class:!0,type:!0});var Rt=p(C);Q=Y(Rt,H),Rt.forEach(o),Qt.forEach(o),bt.forEach(o),Et.forEach(o),ht.forEach(o),$.forEach(o),this.h()},h(){s(r,"class","text-lg font-medium self-center"),s(u,"class","self-center"),s(l,"class","flex justify-between dark:text-gray-300 px-5 pt-4"),s(M,"class","mb-1 text-xs text-gray-500"),s(N,"class","bg-gray-200 dark:bg-gray-800 font-semibold px-3 py-0.5 border border-r-0 dark:border-gray-800 rounded-l-xl flex items-center"),s(z,"class","w-full rounded-r-xl py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 disabled:text-gray-500 dark:disabled:text-gray-500 outline-none svelte-1vx7r9s"),s(z,"type","text"),s(z,"autocomplete","off"),z.required=!0,s(y,"class","flex flex-1"),s(D,"class","flex flex-col w-full"),s(X,"class","mb-1 text-xs text-gray-500"),s(q,"class","w-full rounded-xl py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-none svelte-1vx7r9s"),s(q,"type","text"),s(q,"autocomplete","off"),q.required=!0,s(F,"class","flex-1"),s(U,"class","flex flex-col w-full"),s(R,"class","mb-2 text-xs text-gray-500"),s(ot,"class","flex flex-col w-full"),s(k,"class","flex flex-col space-y-1.5"),s(C,"class","px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-gray-100 transition rounded-lg"),s(C,"type","submit"),s(j,"class","flex justify-end pt-5 text-sm font-medium"),s(w,"class","flex flex-col w-full"),s(v,"class","flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"),s(i,"class","flex flex-col md:flex-row w-full px-5 py-4 md:space-x-4 dark:text-gray-200")},m(T,$){G(T,t,$),a(t,l),a(l,r),a(r,c),a(l,n),a(l,u),a(t,b),a(t,i),a(i,v),a(v,w),a(w,k),a(k,D),a(D,M),a(M,E),a(D,J),a(D,y),a(y,N),a(y,mt),a(y,z),$t(z,e[2].name),a(k,A),a(k,U),a(U,X),a(X,it),a(U,K),a(U,F),a(F,q),$t(q,e[2].title),a(k,nt),a(k,ot),a(ot,R),a(R,O),a(ot,et),Ct(d,ot,null),a(w,x),a(w,j),a(j,C),a(C,Q),V=!0,P||(rt=[ft(u,"click",e[9]),ft(z,"input",e[10]),ft(q,"input",e[11]),ft(w,"submit",He(e[12]))],P=!0)},p(T,$){(!V||$&8)&&f!==(f=T[3].t("Edit Doc")+"")&&ut(c,f),(!V||$&8)&&S!==(S=T[3].t("Name Tag")+"")&&ut(E,S),$&4&&z.value!==T[2].name&&$t(z,T[2].name),(!V||$&8)&&lt!==(lt=T[3].t("Title")+"")&&ut(it,lt),$&4&&q.value!==T[2].title&&$t(q,T[2].title),(!V||$&8)&&tt!==(tt=T[3].t("Tags")+"")&&ut(O,tt);const gt={};$&2&&(gt.tags=T[1]),d.$set(gt),(!V||$&8)&&H!==(H=T[3].t("Save")+"")&&ut(Q,H)},i(T){V||(ct(d.$$.fragment,T),V=!0)},o(T){pt(d.$$.fragment,T),V=!1},d(T){T&&o(t),Ht(d),P=!1,se(rt)}}}function ll(e){let t,l,r;function f(n){e[13](n)}let c={size:"sm",$$slots:{default:[el]},$$scope:{ctx:e}};return e[0]!==void 0&&(c.show=e[0]),t=new Fe({props:c}),zt.push(()=>ne(t,"show",f)),{c(){Lt(t.$$.fragment)},l(n){Nt(t.$$.fragment,n)},m(n,u){Ct(t,n,u),r=!0},p(n,[u]){const h={};u&16399&&(h.$$scope={dirty:u,ctx:n}),!l&&u&1&&(l=!0,h.show=n[0],le(()=>l=!1)),t.$set(h)},i(n){r||(ct(t.$$.fragment,n),r=!0)},o(n){pt(t.$$.fragment,n),r=!1},d(n){Ht(t,n)}}}function sl(e,t,l){let r;const f=ue("i18n");Pt(e,f,E=>l(3,r=E));let{show:c=!1}=t,{selectedDoc:n}=t,u=[],h={name:"",title:"",content:null};const b=async()=>{await Qe(localStorage.token,n.name,{title:h.title,name:h.name}).catch(J=>{St.error(J)})&&(l(0,c=!1),Bt.set(await Ut(localStorage.token)))},i=async E=>{!u.find(J=>J.name===E)&&E!==""?(l(1,u=[...u,{name:E}]),await ke(localStorage.token,h.name,{name:h.name,tags:u}),Bt.set(await Ut(localStorage.token))):console.log("tag already exists")},v=async E=>{l(1,u=u.filter(J=>J.name!==E)),await ke(localStorage.token,h.name,{name:h.name,tags:u}),Bt.set(await Ut(localStorage.token))};de(()=>{var E;n&&(l(2,h=JSON.parse(JSON.stringify(n))),l(1,u=((E=h==null?void 0:h.content)==null?void 0:E.tags)??[]))});const w=()=>{l(0,c=!1)};function k(){h.name=this.value,l(2,h)}function D(){h.title=this.value,l(2,h)}const M=()=>{b()};function S(E){c=E,l(0,c)}return e.$$set=E=>{"show"in E&&l(0,c=E.show),"selectedDoc"in E&&l(8,n=E.selectedDoc)},[c,u,h,r,f,b,i,v,n,w,k,D,M,S]}class al extends ae{constructor(t){super(),re(this,t,sl,ll,Jt,{show:0,selectedDoc:8})}}function rl(e){let t=e[4].t("Click here to select documents.")+"",l;return{c(){l=W(t)},l(r){l=Y(r,t)},m(r,f){G(r,l,f)},p(r,f){f&16&&t!==(t=r[4].t("Click here to select documents.")+"")&&ut(l,t)},d(r){r&&o(l)}}}function nl(e){let t=e[2].length>0?`${e[2].length}`:"",l,r;return{c(){l=W(t),r=W(" document(s) selected.")},l(f){l=Y(f,t),r=Y(f," document(s) selected.")},m(f,c){G(f,l,c),G(f,r,c)},p(f,c){c&4&&t!==(t=f[2].length>0?`${f[2].length}`:"")&&ut(l,t)},d(f){f&&(o(l),o(r))}}}function ol(e){let t,l,r,f=e[4].t("Add Docs")+"",c,n,u,h='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',b,i,v,w,k,D,M,S,E,J,y,N,Z=e[4].t("Tags")+"",mt,z,A,U,X,lt,it=e[4].t("Save")+"",K,F,q,nt;function ot(O,et){return O[2]?nl:rl}let R=ot(e),tt=R(e);return A=new Pe({props:{tags:e[3],addTag:e[7],deleteTag:e[8]}}),{c(){t=g("div"),l=g("div"),r=g("div"),c=W(f),n=B(),u=g("button"),u.innerHTML=h,b=B(),i=g("div"),v=g("div"),w=g("form"),k=g("div"),D=g("input"),M=B(),S=g("button"),tt.c(),E=B(),J=g("div"),y=g("div"),N=g("div"),mt=W(Z),z=B(),Lt(A.$$.fragment),U=B(),X=g("div"),lt=g("button"),K=W(it),this.h()},l(O){t=_(O,"DIV",{});var et=p(t);l=_(et,"DIV",{class:!0});var d=p(l);r=_(d,"DIV",{class:!0});var x=p(r);c=Y(x,f),x.forEach(o),n=L(d),u=_(d,"BUTTON",{class:!0,"data-svelte-h":!0}),Ot(u)!=="svelte-745w2y"&&(u.innerHTML=h),d.forEach(o),b=L(et),i=_(et,"DIV",{class:!0});var j=p(i);v=_(j,"DIV",{class:!0});var C=p(v);w=_(C,"FORM",{class:!0});var H=p(w);k=_(H,"DIV",{class:!0});var Q=p(k);D=_(Q,"INPUT",{id:!0,type:!0,class:!0}),M=L(Q),S=_(Q,"BUTTON",{class:!0,type:!0});var V=p(S);tt.l(V),V.forEach(o),Q.forEach(o),E=L(H),J=_(H,"DIV",{class:!0});var P=p(J);y=_(P,"DIV",{class:!0});var rt=p(y);N=_(rt,"DIV",{class:!0});var T=p(N);mt=Y(T,Z),T.forEach(o),z=L(rt),Nt(A.$$.fragment,rt),rt.forEach(o),P.forEach(o),U=L(H),X=_(H,"DIV",{class:!0});var $=p(X);lt=_($,"BUTTON",{class:!0,type:!0});var gt=p(lt);K=Y(gt,it),gt.forEach(o),$.forEach(o),H.forEach(o),C.forEach(o),j.forEach(o),et.forEach(o),this.h()},h(){s(r,"class","text-lg font-medium self-center"),s(u,"class","self-center"),s(l,"class","flex justify-between dark:text-gray-300 px-5 pt-4"),s(D,"id","upload-doc-input"),D.hidden=!0,s(D,"type","file"),D.multiple=!0,s(D,"class","svelte-1vx7r9s"),s(S,"class","w-full text-sm font-medium py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-850 dark:hover:bg-gray-800 text-center rounded-xl"),s(S,"type","button"),s(k,"class","mb-3 w-full"),s(N,"class","mb-1.5 text-xs text-gray-500"),s(y,"class","flex flex-col w-full"),s(J,"class","flex flex-col space-y-1.5"),s(lt,"class","px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-gray-100 transition rounded-lg"),s(lt,"type","submit"),s(X,"class","flex justify-end pt-5 text-sm font-medium"),s(w,"class","flex flex-col w-full"),s(v,"class","flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"),s(i,"class","flex flex-col md:flex-row w-full px-5 py-4 md:space-x-4 dark:text-gray-200")},m(O,et){G(O,t,et),a(t,l),a(l,r),a(r,c),a(l,n),a(l,u),a(t,b),a(t,i),a(i,v),a(v,w),a(w,k),a(k,D),e[11](D),a(k,M),a(k,S),tt.m(S,null),a(w,E),a(w,J),a(J,y),a(y,N),a(N,mt),a(y,z),Ct(A,y,null),a(w,U),a(w,X),a(X,lt),a(lt,K),F=!0,q||(nt=[ft(u,"click",e[10]),ft(D,"change",e[12]),ft(S,"click",e[13]),ft(w,"submit",He(e[14]))],q=!0)},p(O,et){(!F||et&16)&&f!==(f=O[4].t("Add Docs")+"")&&ut(c,f),R===(R=ot(O))&&tt?tt.p(O,et):(tt.d(1),tt=R(O),tt&&(tt.c(),tt.m(S,null))),(!F||et&16)&&Z!==(Z=O[4].t("Tags")+"")&&ut(mt,Z);const d={};et&8&&(d.tags=O[3]),A.$set(d),(!F||et&16)&&it!==(it=O[4].t("Save")+"")&&ut(K,it)},i(O){F||(ct(A.$$.fragment,O),F=!0)},o(O){pt(A.$$.fragment,O),F=!1},d(O){O&&o(t),e[11](null),tt.d(),Ht(A),q=!1,se(nt)}}}function il(e){let t,l,r;function f(n){e[15](n)}let c={size:"sm",$$slots:{default:[ol]},$$scope:{ctx:e}};return e[0]!==void 0&&(c.show=e[0]),t=new Fe({props:c}),zt.push(()=>ne(t,"show",f)),{c(){Lt(t.$$.fragment)},l(n){Nt(t.$$.fragment,n)},m(n,u){Ct(t,n,u),r=!0},p(n,[u]){const h={};u&131103&&(h.$$scope={dirty:u,ctx:n}),!l&&u&1&&(l=!0,h.show=n[0],le(()=>l=!1)),t.$set(h)},i(n){r||(ct(t.$$.fragment,n),r=!0)},o(n){pt(t.$$.fragment,n),r=!1},d(n){Ht(t,n)}}}function cl(e,t,l){let r;const f=ue("i18n");Pt(e,f,y=>l(4,r=y));let{show:c=!1}=t,{uploadDoc:n}=t,u,h,b=[];const i=async()=>{if(h&&h.length>0){for(const y of h)console.log(y,y.name.split(".").at(-1)),Ae.includes(y.type)||Oe.includes(y.name.split(".").at(-1))||St.error(`Unknown File Type '${y.type}', but accepting and treating as plain text`),n(y,b);l(2,h=null),l(1,u.value="",u)}else St.error(r.t("File not found."));l(0,c=!1),Bt.set(await Ut(localStorage.token))},v=async y=>{!b.find(N=>N.name===y)&&y!==""?l(3,b=[...b,{name:y}]):console.log("tag already exists")},w=async y=>{l(3,b=b.filter(N=>N.name!==y))};de(()=>{});const k=()=>{l(0,c=!1)};function D(y){zt[y?"unshift":"push"](()=>{u=y,l(1,u)})}function M(){h=this.files,l(2,h)}const S=()=>{u.click()},E=()=>{i()};function J(y){c=y,l(0,c)}return e.$$set=y=>{"show"in y&&l(0,c=y.show),"uploadDoc"in y&&l(9,n=y.uploadDoc)},[c,u,h,b,r,f,i,v,w,n,k,D,M,S,E,J]}class ul extends ae{constructor(t){super(),re(this,t,cl,il,Jt,{show:0,uploadDoc:9})}}const{document:ce}=qe;function xe(e,t,l){const r=e.slice();return r[35]=t[l],r[36]=t,r[37]=l,r}function Ee(e,t,l){const r=e.slice();return r[38]=t[l],r}function Ie(e){let t,l,r,f,c,n,u;return c=new Ke({props:{$$slots:{default:[dl]},$$scope:{ctx:e}}}),{c(){t=g("div"),l=g("div"),r=g("div"),f=g("div"),Lt(c.$$.fragment),this.h()},l(h){t=_(h,"DIV",{class:!0,id:!0,role:!0,"aria-label":!0});var b=p(t);l=_(b,"DIV",{class:!0});var i=p(l);r=_(i,"DIV",{class:!0});var v=p(r);f=_(v,"DIV",{class:!0});var w=p(f);Nt(c.$$.fragment,w),w.forEach(o),v.forEach(o),i.forEach(o),b.forEach(o),this.h()},h(){s(f,"class","max-w-md"),s(r,"class","m-auto pt-64 flex flex-col justify-center"),s(l,"class","absolute w-full h-full backdrop-blur bg-gray-800/40 flex justify-center"),s(t,"class",n="fixed "+(e[13]?"left-0 md:left-[260px] md:w-[calc(100%-260px)]":"left-0")+" w-full h-full flex z-50 touch-none pointer-events-none"),s(t,"id","dropzone"),s(t,"role","region"),s(t,"aria-label","Drag and Drop Container")},m(h,b){G(h,t,b),a(t,l),a(l,r),a(r,f),Ct(c,f,null),u=!0},p(h,b){const i={};b[1]&1024&&(i.$$scope={dirty:b,ctx:h}),c.$set(i),(!u||b[0]&8192&&n!==(n="fixed "+(h[13]?"left-0 md:left-[260px] md:w-[calc(100%-260px)]":"left-0")+" w-full h-full flex z-50 touch-none pointer-events-none"))&&s(t,"class",n)},i(h){u||(ct(c.$$.fragment,h),u=!0)},o(h){pt(c.$$.fragment,h),u=!1},d(h){h&&o(t),Ht(c)}}}function dl(e){let t,l="Drop any files here to add to my documents";return{c(){t=g("div"),t.textContent=l,this.h()},l(r){t=_(r,"DIV",{class:!0,"data-svelte-h":!0}),Ot(t)!=="svelte-19eg75t"&&(t.textContent=l),this.h()},h(){s(t,"class","mt-2 text-center text-sm dark:text-gray-200 w-full")},m(r,f){G(r,t,f)},p:fe,d(r){r&&o(t)}}}function Te(e){let t,l,r;function f(n){e[19](n)}let c={selectedDoc:e[8]};return e[7]!==void 0&&(c.show=e[7]),t=new al({props:c}),zt.push(()=>ne(t,"show",f)),{c(){Lt(t.$$.fragment)},l(n){Nt(t.$$.fragment,n)},m(n,u){Ct(t,n,u),r=!0},p(n,u){const h={};u[0]&256&&(h.selectedDoc=n[8]),!l&&u[0]&128&&(l=!0,h.show=n[7],le(()=>l=!1)),t.$set(h)},i(n){r||(ct(t.$$.fragment,n),r=!0)},o(n){pt(t.$$.fragment,n),r=!1},d(n){Ht(t,n)}}}function Ve(e){let t,l,r,f,c,n;r=new je({props:{state:e[10].filter(Be).length===e[10].length?"checked":"unchecked",indeterminate:e[10].filter(Le).length>0&&e[10].filter(Ne).length!==e[10].length}}),r.$on("change",e[23]);function u(i,v){return v[0]&1024&&(c=null),c==null&&(c=i[10].filter(gl).length===0),c?hl:fl}let h=u(e,[-1,-1]),b=h(e);return{c(){t=g("div"),l=g("div"),Lt(r.$$.fragment),f=B(),b.c(),this.h()},l(i){t=_(i,"DIV",{class:!0});var v=p(t);l=_(v,"DIV",{class:!0});var w=p(l);Nt(r.$$.fragment,w),w.forEach(o),f=L(v),b.l(v),v.forEach(o),this.h()},h(){s(l,"class","ml-0.5 pr-3 my-auto flex items-center"),s(t,"class","px-2.5 pt-1 flex gap-1 flex-wrap")},m(i,v){G(i,t,v),a(t,l),Ct(r,l,null),a(t,f),b.m(t,null),n=!0},p(i,v){const w={};v[0]&1024&&(w.state=i[10].filter(Be).length===i[10].length?"checked":"unchecked"),v[0]&1024&&(w.indeterminate=i[10].filter(Le).length>0&&i[10].filter(Ne).length!==i[10].length),r.$set(w),h===(h=u(i,v))&&b?b.p(i,v):(b.d(1),b=h(i),b&&(b.c(),b.m(t,null)))},i(i){n||(ct(r.$$.fragment,i),n=!0)},o(i){pt(r.$$.fragment,i),n=!1},d(i){i&&o(t),Ht(r),b.d()}}}function fl(e){let t,l,r=e[10].filter(Ce).length+"",f,c,n,u,h,b,i=e[11].t("delete")+"",v,w,k;return{c(){t=g("div"),l=g("div"),f=W(r),c=W(" Selected"),n=B(),u=g("div"),h=g("button"),b=g("div"),v=W(i),this.h()},l(D){t=_(D,"DIV",{class:!0});var M=p(t);l=_(M,"DIV",{class:!0});var S=p(l);f=Y(S,r),c=Y(S," Selected"),S.forEach(o),n=L(M),u=_(M,"DIV",{class:!0});var E=p(u);h=_(E,"BUTTON",{class:!0});var J=p(h);b=_(J,"DIV",{class:!0});var y=p(b);v=Y(y,i),y.forEach(o),J.forEach(o),E.forEach(o),M.forEach(o),this.h()},h(){s(l,"class","text-xs font-medium py-0.5 self-center mr-1"),s(b,"class","text-xs font-medium self-center line-clamp-1"),s(h,"class","px-2 py-0.5 space-x-1 flex h-fit items-center rounded-full transition bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:text-white"),s(u,"class","flex gap-1"),s(t,"class","flex-1 flex w-full justify-between items-center")},m(D,M){G(D,t,M),a(t,l),a(l,f),a(l,c),a(t,n),a(t,u),a(u,h),a(h,b),a(b,v),w||(k=ft(h,"click",e[26]),w=!0)},p(D,M){M[0]&1024&&r!==(r=D[10].filter(Ce).length+"")&&ut(f,r),M[0]&2048&&i!==(i=D[11].t("delete")+"")&&ut(v,i)},d(D){D&&o(t),w=!1,k()}}}function hl(e){let t,l,r=e[11].t("all")+"",f,c,n,u,h,b=ee(e[5]),i=[];for(let v=0;v<b.length;v+=1)i[v]=Me(Ee(e,b,v));return{c(){t=g("button"),l=g("div"),f=W(r),c=B();for(let v=0;v<i.length;v+=1)i[v].c();n=we(),this.h()},l(v){t=_(v,"BUTTON",{class:!0});var w=p(t);l=_(w,"DIV",{class:!0});var k=p(l);f=Y(k,r),k.forEach(o),w.forEach(o),c=L(v);for(let D=0;D<i.length;D+=1)i[D].l(v);n=we(),this.h()},h(){s(l,"class","text-xs font-medium self-center line-clamp-1"),s(t,"class","px-2 py-0.5 space-x-1 flex h-fit items-center rounded-full transition bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:text-white")},m(v,w){G(v,t,w),a(t,l),a(l,f),G(v,c,w);for(let k=0;k<i.length;k+=1)i[k]&&i[k].m(v,w);G(v,n,w),u||(h=ft(t,"click",e[24]),u=!0)},p(v,w){if(w[0]&2048&&r!==(r=v[11].t("all")+"")&&ut(f,r),w[0]&34){b=ee(v[5]);let k;for(k=0;k<b.length;k+=1){const D=Ee(v,b,k);i[k]?i[k].p(D,w):(i[k]=Me(D),i[k].c(),i[k].m(n.parentNode,n))}for(;k<i.length;k+=1)i[k].d(1);i.length=b.length}},d(v){v&&(o(t),o(c),o(n)),Ue(i,v),u=!1,h()}}}function Me(e){let t,l,r,f=e[38]+"",c,n,u,h;function b(){return e[25](e[38])}return{c(){t=g("button"),l=g("div"),r=W("#"),c=W(f),n=B(),this.h()},l(i){t=_(i,"BUTTON",{class:!0});var v=p(t);l=_(v,"DIV",{class:!0});var w=p(l);r=Y(w,"#"),c=Y(w,f),w.forEach(o),n=L(v),v.forEach(o),this.h()},h(){s(l,"class","text-xs font-medium self-center line-clamp-1"),s(t,"class","px-2 py-0.5 space-x-1 flex h-fit items-center rounded-full transition bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:text-white")},m(i,v){G(i,t,v),a(t,l),a(l,r),a(l,c),a(t,n),u||(h=ft(t,"click",b),u=!0)},p(i,v){e=i,v[0]&32&&f!==(f=e[38]+"")&&ut(c,f)},d(i){i&&o(t),u=!1,h()}}}function ml(e){let t,l,r,f,c,n;return{c(){t=yt("svg"),l=yt("style"),r=W(`.spinner_qM83 {
										animation: spinner_8HQG 1.05s infinite;
									}
									.spinner_oXPr {
										animation-delay: 0.1s;
									}
									.spinner_ZTLf {
										animation-delay: 0.2s;
									}
									@keyframes spinner_8HQG {
										0%,
										57.14% {
											animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
											transform: translate(0);
										}
										28.57% {
											animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
											transform: translateY(-6px);
										}
										100% {
											transform: translate(0);
										}
									}
								`),f=yt("circle"),c=yt("circle"),n=yt("circle"),this.h()},l(u){t=Dt(u,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var h=p(t);l=Dt(h,"style",{});var b=p(l);r=Y(b,`.spinner_qM83 {
										animation: spinner_8HQG 1.05s infinite;
									}
									.spinner_oXPr {
										animation-delay: 0.1s;
									}
									.spinner_ZTLf {
										animation-delay: 0.2s;
									}
									@keyframes spinner_8HQG {
										0%,
										57.14% {
											animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
											transform: translate(0);
										}
										28.57% {
											animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
											transform: translateY(-6px);
										}
										100% {
											transform: translate(0);
										}
									}
								`),b.forEach(o),f=Dt(h,"circle",{class:!0,cx:!0,cy:!0,r:!0}),p(f).forEach(o),c=Dt(h,"circle",{class:!0,cx:!0,cy:!0,r:!0}),p(c).forEach(o),n=Dt(h,"circle",{class:!0,cx:!0,cy:!0,r:!0}),p(n).forEach(o),h.forEach(o),this.h()},h(){s(f,"class","spinner_qM83"),s(f,"cx","4"),s(f,"cy","12"),s(f,"r","2.5"),s(c,"class","spinner_qM83 spinner_oXPr"),s(c,"cx","12"),s(c,"cy","12"),s(c,"r","2.5"),s(n,"class","spinner_qM83 spinner_ZTLf"),s(n,"cx","20"),s(n,"cy","12"),s(n,"r","2.5"),s(t,"class","w-6 h-6 translate-y-[0.5px]"),s(t,"fill","currentColor"),s(t,"viewBox","0 0 24 24"),s(t,"xmlns","http://www.w3.org/2000/svg")},m(u,h){G(u,t,h),a(t,l),a(l,r),a(t,f),a(t,c),a(t,n)},d(u){u&&o(t)}}}function vl(e){let t,l,r;return{c(){t=yt("svg"),l=yt("path"),r=yt("path"),this.h()},l(f){t=Dt(f,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var c=p(t);l=Dt(c,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),p(l).forEach(o),r=Dt(c,"path",{d:!0}),p(r).forEach(o),c.forEach(o),this.h()},h(){s(l,"fill-rule","evenodd"),s(l,"d","M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"),s(l,"clip-rule","evenodd"),s(r,"d","M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"viewBox","0 0 24 24"),s(t,"fill","currentColor"),s(t,"class","w-6 h-6")},m(f,c){G(f,t,c),a(t,l),a(t,r)},d(f){f&&o(t)}}}function Se(e){var Q;let t,l,r,f,c,n,u,h,b,i,v,w=e[35].name+"",k,D,M=e[35].filename+"",S,E,J,y,N=e[35].title+"",Z,mt,z,A,U,X,lt,it,K,F,q,nt,ot,R,tt,O;r=new je({props:{state:((Q=e[35])==null?void 0:Q.selected)??"unchecked"}});function et(V,P){return V[35]?vl:ml}let d=et(e),x=d(e);function j(...V){return e[27](e[35],...V)}function C(...V){return e[28](e[35],...V)}function H(){return e[29](e[35],e[36],e[37])}return{c(){t=g("button"),l=g("div"),Lt(r.$$.fragment),f=B(),c=g("div"),n=g("div"),u=g("div"),x.c(),h=B(),b=g("div"),i=g("div"),v=W("#"),k=W(w),D=W(" ("),S=W(M),E=W(")"),J=B(),y=g("div"),Z=W(N),mt=B(),z=g("div"),A=g("button"),U=yt("svg"),X=yt("path"),it=B(),K=g("button"),F=yt("svg"),q=yt("path"),ot=B(),this.h()},l(V){t=_(V,"BUTTON",{class:!0});var P=p(t);l=_(P,"DIV",{class:!0});var rt=p(l);Nt(r.$$.fragment,rt),rt.forEach(o),f=L(P),c=_(P,"DIV",{class:!0});var T=p(c);n=_(T,"DIV",{class:!0});var $=p(n);u=_($,"DIV",{class:!0});var gt=p(u);x.l(gt),gt.forEach(o),h=L($),b=_($,"DIV",{class:!0});var It=p(b);i=_(It,"DIV",{class:!0});var ht=p(i);v=Y(ht,"#"),k=Y(ht,w),D=Y(ht," ("),S=Y(ht,M),E=Y(ht,")"),ht.forEach(o),J=L(It),y=_(It,"DIV",{class:!0});var Et=p(y);Z=Y(Et,N),Et.forEach(o),It.forEach(o),$.forEach(o),T.forEach(o),mt=L(P),z=_(P,"DIV",{class:!0});var bt=p(z);A=_(bt,"BUTTON",{class:!0,type:!0,"aria-label":!0});var kt=p(A);U=Dt(kt,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Tt=p(U);X=Dt(Tt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),p(X).forEach(o),Tt.forEach(o),kt.forEach(o),it=L(bt),K=_(bt,"BUTTON",{class:!0,type:!0,"aria-label":!0});var xt=p(K);F=Dt(xt,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Vt=p(F);q=Dt(Vt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),p(q).forEach(o),Vt.forEach(o),xt.forEach(o),bt.forEach(o),ot=L(P),P.forEach(o),this.h()},h(){s(l,"class","my-auto flex items-center"),s(u,"class","p-2.5 bg-red-400 text-white rounded-lg"),s(i,"class","font-semibold line-clamp-1"),s(y,"class","text-xs overflow-hidden text-ellipsis line-clamp-1"),s(b,"class","self-center flex-1"),s(n,"class","flex items-center space-x-3"),s(c,"class","flex flex-1 space-x-4 cursor-pointer w-full"),s(X,"stroke-linecap","round"),s(X,"stroke-linejoin","round"),s(X,"d","M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"),s(U,"xmlns","http://www.w3.org/2000/svg"),s(U,"fill","none"),s(U,"viewBox","0 0 24 24"),s(U,"stroke-width","1.5"),s(U,"stroke","currentColor"),s(U,"class","w-4 h-4"),s(A,"class","self-center w-fit text-sm z-20 px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"),s(A,"type","button"),s(A,"aria-label",lt=e[11].t("Edit Doc")),s(q,"stroke-linecap","round"),s(q,"stroke-linejoin","round"),s(q,"d","M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"),s(F,"xmlns","http://www.w3.org/2000/svg"),s(F,"fill","none"),s(F,"viewBox","0 0 24 24"),s(F,"stroke-width","1.5"),s(F,"stroke","currentColor"),s(F,"class","w-4 h-4"),s(K,"class","self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"),s(K,"type","button"),s(K,"aria-label",nt=e[11].t("Delete Doc")),s(z,"class","flex flex-row space-x-1 self-center"),s(t,"class","flex space-x-4 cursor-pointer text-left w-full px-3 py-2 dark:hover:bg-white/5 hover:bg-black/5 rounded-xl")},m(V,P){G(V,t,P),a(t,l),Ct(r,l,null),a(t,f),a(t,c),a(c,n),a(n,u),x.m(u,null),a(n,h),a(n,b),a(b,i),a(i,v),a(i,k),a(i,D),a(i,S),a(i,E),a(b,J),a(b,y),a(y,Z),a(t,mt),a(t,z),a(z,A),a(A,U),a(U,X),a(z,it),a(z,K),a(K,F),a(F,q),a(t,ot),R=!0,tt||(O=[ft(A,"click",j),ft(K,"click",C),ft(t,"click",H)],tt=!0)},p(V,P){var T;e=V;const rt={};P[0]&1024&&(rt.state=((T=e[35])==null?void 0:T.selected)??"unchecked"),r.$set(rt),d!==(d=et(e))&&(x.d(1),x=d(e),x&&(x.c(),x.m(u,null))),(!R||P[0]&1024)&&w!==(w=e[35].name+"")&&ut(k,w),(!R||P[0]&1024)&&M!==(M=e[35].filename+"")&&ut(S,M),(!R||P[0]&1024)&&N!==(N=e[35].title+"")&&ut(Z,N),(!R||P[0]&2048&&lt!==(lt=e[11].t("Edit Doc")))&&s(A,"aria-label",lt),(!R||P[0]&2048&&nt!==(nt=e[11].t("Delete Doc")))&&s(K,"aria-label",nt)},i(V){R||(ct(r.$$.fragment,V),R=!0)},o(V){pt(r.$$.fragment,V),R=!1},d(V){V&&o(t),Ht(r),x.d(),tt=!1,se(O)}}}function pl(e){let t,l,r,f=e[8],c,n,u,h,b,i,v,w=e[11].t("Documents")+"",k,D,M,S,E,J='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg>',y,N,Z,mt,z,A,U,X,lt,it,K,F,q,nt,ot,R,tt,O=e[11].t("Use '#' in the prompt input to load and select your documents.")+"",et,d,x,j,C,H,Q,V,P=e[11].t("Import Documents Mapping")+"",rt,T,$,gt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 9.5a.75.75 0 0 1-.75-.75V8.06l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v2.69a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"></path></svg>',It,ht,Et,bt=e[11].t("Export Documents Mapping")+"",kt,Tt,xt,Vt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 3.5a.75.75 0 0 1 .75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V6.25A.75.75 0 0 1 8 5.5Z" clip-rule="evenodd"></path></svg>',_t,jt,qt;ce.title=t=`
		`+e[11].t("Documents")+" | "+e[12]+`
	`;let st=e[9]&&Ie(e),wt=Te(e);function Qt(m){e[20](m)}let Rt={uploadDoc:e[18]};e[6]!==void 0&&(Rt.show=e[6]),n=new ul({props:Rt}),zt.push(()=>ne(n,"show",Qt));let dt=e[5].length>0&&Ve(e),At=ee(e[10]),at=[];for(let m=0;m<At.length;m+=1)at[m]=Se(xe(e,At,m));const $e=m=>pt(at[m],1,1,()=>{at[m]=null});return{c(){l=B(),st&&st.c(),r=B(),wt.c(),c=B(),Lt(n.$$.fragment),h=B(),b=g("div"),i=g("div"),v=g("div"),k=W(w),D=B(),M=g("div"),S=g("div"),E=g("div"),E.innerHTML=J,y=B(),N=g("input"),mt=B(),z=g("div"),A=g("button"),U=yt("svg"),X=yt("path"),it=B(),K=g("hr"),F=B(),dt&&dt.c(),q=B(),nt=g("div");for(let m=0;m<at.length;m+=1)at[m].c();ot=B(),R=g("div"),tt=W("ⓘ "),et=W(O),d=B(),x=g("div"),j=g("div"),C=g("input"),H=B(),Q=g("button"),V=g("div"),rt=W(P),T=B(),$=g("div"),$.innerHTML=gt,It=B(),ht=g("button"),Et=g("div"),kt=W(bt),Tt=B(),xt=g("div"),xt.innerHTML=Vt,this.h()},l(m){ze("svelte-vxyf60",ce.head).forEach(o),l=L(m),st&&st.l(m),r=L(m),wt.l(m),c=L(m),Nt(n.$$.fragment,m),h=L(m),b=_(m,"DIV",{class:!0});var Mt=p(b);i=_(Mt,"DIV",{class:!0});var vt=p(i);v=_(vt,"DIV",{class:!0});var Gt=p(v);k=Y(Gt,w),Gt.forEach(o),vt.forEach(o),Mt.forEach(o),D=L(m),M=_(m,"DIV",{class:!0});var Xt=p(M);S=_(Xt,"DIV",{class:!0});var Wt=p(S);E=_(Wt,"DIV",{class:!0,"data-svelte-h":!0}),Ot(E)!=="svelte-v38fm1"&&(E.innerHTML=J),y=L(Wt),N=_(Wt,"INPUT",{class:!0,placeholder:!0}),Wt.forEach(o),mt=L(Xt),z=_(Xt,"DIV",{});var he=p(z);A=_(he,"BUTTON",{class:!0,"aria-label":!0});var me=p(A);U=Dt(me,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var ve=p(U);X=Dt(ve,"path",{d:!0}),p(X).forEach(o),ve.forEach(o),me.forEach(o),he.forEach(o),Xt.forEach(o),it=L(m),K=_(m,"HR",{class:!0}),F=L(m),dt&&dt.l(m),q=L(m),nt=_(m,"DIV",{class:!0});var pe=p(nt);for(let ie=0;ie<at.length;ie+=1)at[ie].l(pe);pe.forEach(o),ot=L(m),R=_(m,"DIV",{class:!0});var oe=p(R);tt=Y(oe,"ⓘ "),et=Y(oe,O),oe.forEach(o),d=L(m),x=_(m,"DIV",{class:!0});var ge=p(x);j=_(ge,"DIV",{class:!0});var Ft=p(j);C=_(Ft,"INPUT",{id:!0,type:!0,accept:!0}),H=L(Ft),Q=_(Ft,"BUTTON",{class:!0});var Yt=p(Q);V=_(Yt,"DIV",{class:!0});var _e=p(V);rt=Y(_e,P),_e.forEach(o),T=L(Yt),$=_(Yt,"DIV",{class:!0,"data-svelte-h":!0}),Ot($)!=="svelte-aqr4dt"&&($.innerHTML=gt),Yt.forEach(o),It=L(Ft),ht=_(Ft,"BUTTON",{class:!0});var Zt=p(ht);Et=_(Zt,"DIV",{class:!0});var be=p(Et);kt=Y(be,bt),be.forEach(o),Tt=L(Zt),xt=_(Zt,"DIV",{class:!0,"data-svelte-h":!0}),Ot(xt)!=="svelte-1n7zye"&&(xt.innerHTML=Vt),Zt.forEach(o),Ft.forEach(o),ge.forEach(o),this.h()},h(){s(v,"class","text-lg font-semibold self-center"),s(i,"class","flex justify-between items-center"),s(b,"class","mb-3"),s(E,"class","self-center ml-1 mr-3"),s(N,"class","w-full text-sm pr-4 py-1 rounded-r-xl outline-none bg-transparent"),s(N,"placeholder",Z=e[11].t("Search Documents")),s(S,"class","flex flex-1"),s(X,"d","M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"),s(U,"xmlns","http://www.w3.org/2000/svg"),s(U,"viewBox","0 0 16 16"),s(U,"fill","currentColor"),s(U,"class","w-4 h-4"),s(A,"class","px-2 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:border-0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition font-medium text-sm flex items-center space-x-1"),s(A,"aria-label",lt=e[11].t("Add Docs")),s(M,"class","flex w-full space-x-2"),s(K,"class","dark:border-gray-850 my-2.5"),s(nt,"class","my-3 mb-5"),s(R,"class","text-gray-500 text-xs mt-1 mb-2"),s(C,"id","documents-import-input"),s(C,"type","file"),s(C,"accept",".json"),C.hidden=!0,s(V,"class","self-center mr-2 font-medium line-clamp-1"),s($,"class","self-center"),s(Q,"class","flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition"),s(Et,"class","self-center mr-2 font-medium line-clamp-1"),s(xt,"class","self-center"),s(ht,"class","flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition"),s(j,"class","flex space-x-2"),s(x,"class","flex justify-end w-full mb-2")},m(m,I){G(m,l,I),st&&st.m(m,I),G(m,r,I),wt.m(m,I),G(m,c,I),Ct(n,m,I),G(m,h,I),G(m,b,I),a(b,i),a(i,v),a(v,k),G(m,D,I),G(m,M,I),a(M,S),a(S,E),a(S,y),a(S,N),$t(N,e[0]),a(M,mt),a(M,z),a(z,A),a(A,U),a(U,X),G(m,it,I),G(m,K,I),G(m,F,I),dt&&dt.m(m,I),G(m,q,I),G(m,nt,I);for(let Mt=0;Mt<at.length;Mt+=1)at[Mt]&&at[Mt].m(nt,null);G(m,ot,I),G(m,R,I),a(R,tt),a(R,et),G(m,d,I),G(m,x,I),a(x,j),a(j,C),e[30](C),a(j,H),a(j,Q),a(Q,V),a(V,rt),a(Q,T),a(Q,$),a(j,It),a(j,ht),a(ht,Et),a(Et,kt),a(ht,Tt),a(ht,xt),_t=!0,jt||(qt=[ft(N,"input",e[21]),ft(A,"click",e[22]),ft(C,"change",e[31]),ft(C,"change",e[32]),ft(Q,"click",e[33]),ft(ht,"click",e[34])],jt=!0)},p(m,I){(!_t||I[0]&6144)&&t!==(t=`
		`+m[11].t("Documents")+" | "+m[12]+`
	`)&&(ce.title=t),m[9]?st?(st.p(m,I),I[0]&512&&ct(st,1)):(st=Ie(m),st.c(),ct(st,1),st.m(r.parentNode,r)):st&&(Kt(),pt(st,1,1,()=>{st=null}),te()),I[0]&256&&Jt(f,f=m[8])?(Kt(),pt(wt,1,1,fe),te(),wt=Te(m),wt.c(),ct(wt,1),wt.m(c.parentNode,c)):wt.p(m,I);const Mt={};if(!u&&I[0]&64&&(u=!0,Mt.show=m[6],le(()=>u=!1)),n.$set(Mt),(!_t||I[0]&2048)&&w!==(w=m[11].t("Documents")+"")&&ut(k,w),(!_t||I[0]&2048&&Z!==(Z=m[11].t("Search Documents")))&&s(N,"placeholder",Z),I[0]&1&&N.value!==m[0]&&$t(N,m[0]),(!_t||I[0]&2048&&lt!==(lt=m[11].t("Add Docs")))&&s(A,"aria-label",lt),m[5].length>0?dt?(dt.p(m,I),I[0]&32&&ct(dt,1)):(dt=Ve(m),dt.c(),ct(dt,1),dt.m(q.parentNode,q)):dt&&(Kt(),pt(dt,1,1,()=>{dt=null}),te()),I[0]&68992){At=ee(m[10]);let vt;for(vt=0;vt<At.length;vt+=1){const Gt=xe(m,At,vt);at[vt]?(at[vt].p(Gt,I),ct(at[vt],1)):(at[vt]=Se(Gt),at[vt].c(),ct(at[vt],1),at[vt].m(nt,null))}for(Kt(),vt=At.length;vt<at.length;vt+=1)$e(vt);te()}(!_t||I[0]&2048)&&O!==(O=m[11].t("Use '#' in the prompt input to load and select your documents.")+"")&&ut(et,O),(!_t||I[0]&2048)&&P!==(P=m[11].t("Import Documents Mapping")+"")&&ut(rt,P),(!_t||I[0]&2048)&&bt!==(bt=m[11].t("Export Documents Mapping")+"")&&ut(kt,bt)},i(m){if(!_t){ct(st),ct(wt),ct(n.$$.fragment,m),ct(dt);for(let I=0;I<At.length;I+=1)ct(at[I]);_t=!0}},o(m){pt(st),pt(wt),pt(n.$$.fragment,m),pt(dt),at=at.filter(Boolean);for(let I=0;I<at.length;I+=1)pt(at[I]);_t=!1},d(m){m&&(o(l),o(r),o(c),o(h),o(b),o(D),o(M),o(it),o(K),o(F),o(q),o(nt),o(ot),o(R),o(d),o(x)),st&&st.d(m),wt.d(m),Ht(n,m),dt&&dt.d(m),Ue(at,m),e[30](null),jt=!1,se(qt)}}}const gl=e=>(e==null?void 0:e.selected)==="checked",Be=e=>(e==null?void 0:e.selected)==="checked",Le=e=>(e==null?void 0:e.selected)==="checked",Ne=e=>(e==null?void 0:e.selected)==="checked",Ce=e=>(e==null?void 0:e.selected)==="checked";function _l(e,t,l){let r,f,c,n;Pt(e,Bt,d=>l(2,r=d)),Pt(e,Ge,d=>l(12,c=d)),Pt(e,Je,d=>l(13,n=d));const{saveAs:u}=Re,h=ue("i18n");Pt(e,h,d=>l(11,f=d));let b="",i="",v,w=[],k=!1,D=!1,M,S="",E=!1;const J=async d=>{await ye(localStorage.token,d),await Bt.set(await Ut(localStorage.token))},y=async d=>{await Promise.all(d.map(async x=>await ye(localStorage.token,x.name))),await Bt.set(await Ut(localStorage.token))},N=async(d,x)=>{if(console.log(d),["audio/mpeg","audio/wav"].includes(d.type)){const H=await tl(localStorage.token,d).catch(Q=>(St.error(Q),null));if(H){console.log(H);const Q=new Blob([H.text],{type:"text/plain"});d=Ye(Q,`${d.name}.txt`)}}const j=await Xe(localStorage.token,d).catch(H=>(St.error(H),null)),C=await We(localStorage.token,j.id).catch(H=>(St.error(H),null));C&&(await De(localStorage.token,C.collection_name,C.filename,Ze(C.filename),C.filename,(x==null?void 0:x.length)>0?{tags:x}:null).catch(H=>(St.error(H),null)),await Bt.set(await Ut(localStorage.token)))};de(()=>{Bt.subscribe(H=>{l(5,w=H.reduce((Q,V,P,rt)=>{var T;return[...new Set([...Q,...(((T=V==null?void 0:V.content)==null?void 0:T.tags)??[]).map($=>$.name)])]},[]))});const d=document.querySelector("body"),x=H=>{H.preventDefault(),l(9,E=!0)},j=()=>{l(9,E=!1)},C=async H=>{var Q,V;if(H.preventDefault(),(Q=H.dataTransfer)!=null&&Q.files){let P=new FileReader;P.onload=T=>{files=[...files,{type:"image",url:`${T.target.result}`}]};const rt=(V=H.dataTransfer)==null?void 0:V.files;if(rt&&rt.length>0)for(const T of rt)console.log(T,T.name.split(".").at(-1)),Ae.includes(T.type)||Oe.includes(T.name.split(".").at(-1))||St.error(`Unknown File Type '${T.type}', but accepting and treating as plain text`),N(T);else St.error(f.t("File not found."))}l(9,E=!1)};return d==null||d.addEventListener("dragover",x),d==null||d.addEventListener("drop",C),d==null||d.addEventListener("dragleave",j),()=>{d==null||d.removeEventListener("dragover",x),d==null||d.removeEventListener("drop",C),d==null||d.removeEventListener("dragleave",j)}});let Z;function mt(d){D=d,l(7,D)}function z(d){k=d,l(6,k)}function A(){i=this.value,l(0,i)}const U=()=>{l(6,k=!0)},X=d=>{d.detail==="checked"?l(10,Z=Z.map(x=>({...x,selected:"checked"}))):d.detail==="unchecked"&&l(10,Z=Z.map(x=>({...x,selected:"unchecked"})))},lt=async()=>{l(1,S="")},it=async d=>{l(1,S=d)},K=async()=>{y(Z.filter(d=>d.selected==="checked"))},F=async(d,x)=>{x.stopPropagation(),l(7,D=!D),l(8,M=d)},q=(d,x)=>{x.stopPropagation(),J(d.name)},nt=(d,x,j)=>{(d==null?void 0:d.selected)==="checked"?l(10,x[j].selected="unchecked",Z):l(10,x[j].selected="checked",Z)};function ot(d){zt[d?"unshift":"push"](()=>{v=d,l(4,v)})}function R(){b=this.files,l(3,b)}const tt=()=>{console.log(b);const d=new FileReader;d.onload=async x=>{const j=JSON.parse(x.target.result);console.log(j);for(const C of j)await De(localStorage.token,C.collection_name,C.filename,C.name,C.title,C.content).catch(H=>(St.error(H),null));await Bt.set(await Ut(localStorage.token))},d.readAsText(b[0])},O=()=>{v.click()},et=async()=>{let d=new Blob([JSON.stringify(r)],{type:"application/json"});u(d,`documents-mapping-export-${Date.now()}.json`)};return e.$$.update=()=>{e.$$.dirty[0]&7&&l(10,Z=r.filter(d=>{var x;return(S===""||(((x=d==null?void 0:d.content)==null?void 0:x.tags)??[]).map(j=>j.name).includes(S))&&(i===""||d.name.includes(i))}))},[i,S,r,b,v,w,k,D,M,E,Z,f,c,n,u,h,J,y,N,mt,z,A,U,X,lt,it,K,F,q,nt,ot,R,tt,O,et]}class bl extends ae{constructor(t){super(),re(this,t,_l,pl,Jt,{},null,[-1,-1])}}function wl(e){let t,l;return t=new bl({}),{c(){Lt(t.$$.fragment)},l(r){Nt(t.$$.fragment,r)},m(r,f){Ct(t,r,f),l=!0},p:fe,i(r){l||(ct(t.$$.fragment,r),l=!0)},o(r){pt(t.$$.fragment,r),l=!1},d(r){Ht(t,r)}}}class Ol extends ae{constructor(t){super(),re(this,t,null,wl,Jt,{})}}export{Ol as component};
//# sourceMappingURL=12.wxyK0Q_3.js.map
