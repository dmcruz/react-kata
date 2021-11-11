(this["webpackJsonpreact-kata"]=this["webpackJsonpreact-kata"]||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),s=n.n(r),i=n(35),l=(n(165),n(87)),o=n(23),j=n(247),d=n(250),u=n(68),b=(n(166),n(8)),h=j.a.Header,O=j.a.Content,x=j.a.Footer,p=function(e){var t=e.children,n=Object(i.d)();return Object(a.useEffect)((function(){n({type:"FETCH_PEOPLE_START"}),n({type:"FETCH_STARSHIPS_START"})}),[]),Object(b.jsxs)(j.a,{className:"layout",children:[Object(b.jsxs)(h,{children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(d.a.Title,{children:"SW Manager"})}),Object(b.jsxs)(u.a,{theme:"dark",mode:"horizontal",children:[Object(b.jsx)(u.a.Item,{title:"Home",children:Object(b.jsx)(l.b,{to:"/",children:"Home Base"})},"home"),Object(b.jsx)(u.a.Item,{title:"People",children:Object(b.jsx)(l.b,{to:"/people",children:"People"})},"people"),Object(b.jsx)(u.a.Item,{title:"Starships",children:Object(b.jsx)(l.b,{to:"/starships",children:"Starships"})},"starships")]})]}),Object(b.jsx)(O,{style:{padding:"0 50px",minHeight:"50px"},children:Object(b.jsx)("div",{className:"site-content",children:t})}),Object(b.jsx)(x,{children:"React Kata \xa9 2021"})]})},v=(n(238),n(88)),f=n(48),m=n(249),y=n(29),S=n(152),g=n(251),w=function(e){return function(t){var n=t.loading,a=Object(S.a)(t,["loading"]);return e?Object(b.jsx)(g.a,{loading:n,avatar:!0,active:!0,children:Object(b.jsx)(e,Object(y.a)({},a))}):null}},_=function(e){return Object(i.b)((function(e){return{loading:e.people.loading}}))(w(e))},E=n(252),T=n(143),C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return"https://www.gravatar.com/avatar/".concat(T.Md5.hashStr(e),"?d=identicon&s=").concat(t)},P=function(e){var t=e.name;return""===t?null:Object(b.jsx)(E.a,{alt:"Gravatar",src:C(t,100),size:100})},H=c.a.memo(P),k=_((function(){var e=Math.floor(82*Math.random()),t=Object(i.e)((function(t){return t.people.list[e]}),i.c),n=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a.Title,{level:3,children:"Featured Person"}),Object(b.jsxs)(m.a,{title:null===t||void 0===t?void 0:t.name,style:{width:300,textAlign:"center"},children:[Object(b.jsx)(v.a,{justify:"center",children:Object(b.jsx)(H,{name:null===t||void 0===t?void 0:t.name})}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Birth Year"}),Object(b.jsx)(f.a,{children:null===t||void 0===t?void 0:t.birth_year})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Gender"}),Object(b.jsx)(f.a,{className:"title-case",children:null===t||void 0===t?void 0:t.gender})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Height"}),Object(b.jsx)(f.a,{children:null===t||void 0===t?void 0:t.height})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Hair Color"}),Object(b.jsx)(f.a,{children:null===t||void 0===t?void 0:t.hair_color})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Eye Color"}),Object(b.jsx)(f.a,{children:null===t||void 0===t?void 0:t.eye_color})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Skin Color"}),Object(b.jsx)(f.a,{children:null===t||void 0===t?void 0:t.skin_color})]})]})]});return t?n:null})),I=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)(f.a,{span:8,children:Object(b.jsx)(k,{})}),Object(b.jsx)(f.a,{span:8}),Object(b.jsx)(f.a,{span:8})]})})},R=n(253),F=function(e){return Object(b.jsxs)(m.a,{bordered:!1,style:{width:300,textAlign:"center",display:e?"":"none"},children:[Object(b.jsx)(v.a,{justify:"center",children:Object(b.jsxs)(R.b,{direction:"vertical",children:[Object(b.jsx)(H,{name:null===e||void 0===e?void 0:e.name}),Object(b.jsx)(d.a.Title,{level:3,children:null===e||void 0===e?void 0:e.name})]})}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Birth Year"}),Object(b.jsx)(f.a,{children:null===e||void 0===e?void 0:e.birth_year})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Gender"}),Object(b.jsx)(f.a,{className:"title-case",children:null===e||void 0===e?void 0:e.gender})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Height"}),Object(b.jsx)(f.a,{children:null===e||void 0===e?void 0:e.height})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Hair Color"}),Object(b.jsx)(f.a,{children:null===e||void 0===e?void 0:e.hair_color})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Eye Color"}),Object(b.jsx)(f.a,{children:null===e||void 0===e?void 0:e.eye_color})]}),Object(b.jsxs)(v.a,{justify:"space-between",children:[Object(b.jsx)(f.a,{className:"row-header",children:"Skin Color"}),Object(b.jsx)(f.a,{children:null===e||void 0===e?void 0:e.skin_color})]})]})},A=c.a.memo(F),N=_((function(){var e=Object(i.e)((function(e){return e.people.list}),i.c).map((function(e,t){return Object(b.jsx)(m.a.Grid,{style:{width:"25%",textAlign:"center"},children:Object(b.jsx)(A,Object(y.a)({},e))},t)}));return Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{children:e})})})),L=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(N,{})})},M=n(248),G=[{title:"Name",dataIndex:"name",key:"name"},{title:"Model",dataIndex:"model",key:"model"},{title:"Manufacturer",dataIndex:"manufacturer",key:"manufacturer"},{title:"Cost in Credits",dataIndex:"cost_in_credits",key:"cost_in_credits"},{title:"Length",dataIndex:"length",key:"length"},{title:"Max Speed",dataIndex:"max_atmosphering_speed",key:"max_atmosphering_speed"},{title:"Crew",dataIndex:"crew",key:"crew"},{title:"Passengers",dataIndex:"passengers",key:"passengers"},{title:"Cargo Capacity",dataIndex:"cargo_capacity",key:"cargo_capacity"},{title:"Consumables",dataIndex:"consumables",key:"consumables"},{title:"Hyperdrive Rating",dataIndex:"hyperdrive_rating",key:"hyperdrive_rating"},{title:"MGLT",dataIndex:"MGLT",key:"MGLT"},{title:"Starship Class",dataIndex:"starship_class",key:"starship_class"}],B=function(e){return Object(i.b)((function(e){return{loading:e.starships.loading}}))(w(e))}((function(){var e=Object(i.e)((function(e){return e.starships.list.map((function(e,t){return Object(y.a)(Object(y.a)({},e),{},{key:t})}))}));return Object(b.jsx)(M.a,{columns:G,dataSource:e})}));var U=function(){return Object(b.jsx)(l.a,{children:Object(b.jsx)(p,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{path:"/people",element:Object(b.jsx)(L,{})}),Object(b.jsx)(o.a,{path:"/starships",element:Object(b.jsx)(B,{})})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},J=n(85),Y=(n(244),n(149)),D=n(34),K=n.n(D),V=n(38),W=n(97),q=n(126),Q="https://swapi.dev/api",X={PEOPLE:"".concat(Q,"/people/"),PLANETS:"".concat(Q,"/planets/"),FILMS:"".concat(Q,"/films/"),SPECIES:"".concat(Q,"/species/"),VEHICLES:"".concat(Q,"/vehicles/"),STARSHIPS:"".concat(Q,"/starships/")},Z=function(e){return Object(q.a)(K.a.mark((function t(){var n;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,fetch(e).then((function(e){return e.json()})).then((function(e){return n=e.results,e.count})).then((function(t){for(var n=Math.ceil(t/10),a=[],c=2;c<=n;c++)a.push(fetch("".concat(e,"?page=").concat(c)));return Promise.all(a)})).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){n=e.reduce((function(e,t){return[].concat(Object(W.a)(e),Object(W.a)(t.results))}),n)}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},$=K.a.mark(te),ee=K.a.mark(ne);function te(){var e;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(V.b)(Z,X.PEOPLE);case 3:return e=t.sent,t.next=6,Object(V.c)({type:"FETCH_PEOPLE_SUCCESS",payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(V.c)({type:"FETCH_PEOPLE_ERROR",payload:t.t0});case 12:case"end":return t.stop()}}),$,null,[[0,8]])}function ne(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.d)("FETCH_PEOPLE_START",te);case 2:case"end":return e.stop()}}),ee)}var ae=K.a.mark(re),ce=K.a.mark(se);function re(){var e;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(V.b)(Z,X.STARSHIPS);case 3:return e=t.sent,t.next=6,Object(V.c)({type:"FETCH_STARSHIPS_SUCCESS",payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(V.c)({type:"FETCH_STARSHIPS_ERROR",payload:t.t0.message||t.t0});case 12:case"end":return t.stop()}}),ae,null,[[0,8]])}function se(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.d)("FETCH_STARSHIPS_START",re);case 2:case"end":return e.stop()}}),ce)}var ie=K.a.mark(le);function le(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([Object(V.b)(ne),Object(V.b)(se)]);case 2:case"end":return e.stop()}}),ie)}var oe={list:[],loading:!1,error:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PEOPLE_START":return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case"FETCH_PEOPLE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,list:t.payload});case"FETCH_PEOPLE_ERROR":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,error:t.payload});default:return e}},de={list:[],loading:!1,error:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STARSHIPS_START":return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case"FETCH_STARSHIPS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,list:t.payload});case"FETCH_STARSHIPS_ERROR":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,error:t.payload});default:return e}},be=Object(Y.a)(),he=[be];var Oe=Object(J.b)({people:je,starships:ue}),xe=Object(J.d)(Oe,J.a.apply(void 0,he));be.run(le);var pe=xe;s.a.render(Object(b.jsx)(i.a,{store:pe,children:Object(b.jsx)(U,{})}),document.getElementById("root")),z()}},[[245,1,2]]]);
//# sourceMappingURL=main.a951078a.chunk.js.map