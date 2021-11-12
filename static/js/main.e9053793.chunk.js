(this["webpackJsonpreact-kata"]=this["webpackJsonpreact-kata"]||[]).push([[0],{171:function(e,t,a){},172:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),s=a.n(c),i=a(30),l=(a(171),a(62)),o=a(23),d=a(253),j=a(256),u=a(71),b=(a(172),a(6)),h=d.a.Header,O=d.a.Content,p=d.a.Footer,x=function(e){var t=e.children,a=Object(i.d)();return Object(n.useEffect)((function(){a({type:"FETCH_PEOPLE_START"}),a({type:"FETCH_STARSHIPS_START"})}),[]),Object(b.jsxs)(d.a,{className:"layout",children:[Object(b.jsxs)(h,{children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(j.a.Title,{children:"SW Manager"})}),Object(b.jsxs)(u.a,{theme:"dark",mode:"horizontal",children:[Object(b.jsx)(u.a.Item,{title:"Home",children:Object(b.jsx)(l.b,{to:"/",children:"Home Base"})},"home"),Object(b.jsx)(u.a.Item,{title:"People",children:Object(b.jsx)(l.b,{to:"/people",children:"People"})},"people"),Object(b.jsx)(u.a.Item,{title:"Starships",children:Object(b.jsx)(l.b,{to:"/starships",children:"Starships"})},"starships")]})]}),Object(b.jsx)(O,{style:{padding:"0 50px",minHeight:"50px"},children:Object(b.jsx)("div",{className:"site-content",children:t})}),Object(b.jsx)(p,{children:"React Kata \xa9 2021"})]})},f=(a(244),a(91)),m=a(49),y=a(70),v=a(254),g=function(){var e=Object(i.d)(),t=[{title:"Name",dataIndex:"name",key:"name"},{title:"Model",dataIndex:"model",key:"model"},{title:"Max Speed",dataIndex:"max_atmosphering_speed",key:"max_atmosphering_speed"},{title:"Crew",dataIndex:"crew",key:"crew"},{title:"Passengers",dataIndex:"passengers",key:"passengers"},{title:"Remove",dataIndex:"name",render:function(t,a,n){return{children:Object(b.jsx)(y.a,{type:"primary",onClick:function(){e(function(e){return{type:"REMOVE_FROM_HANGAR",payload:e}}(n))},children:"Remove"})}}}],a=Object(o.f)(),n=Object(i.e)((function(e){return e.homeBase.hangar})),r=Object(b.jsx)(v.a,{columns:t,dataSource:n}),c=Object(b.jsx)(y.a,{type:"primary",onClick:function(){return a("/starships")},children:"Buy Ships"});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a.Title,{level:3,children:"Hangar"}),0===n.length?c:r]})},_=a(255),S=a(26),E=a(157),w=a(257),T=function(e){return function(t){var a=t.loading,n=Object(E.a)(t,["loading"]);return e?Object(b.jsx)(w.a,{loading:a,avatar:!0,active:!0,children:Object(b.jsx)(e,Object(S.a)({},n))}):null}},k=function(e){return Object(i.b)((function(e){return{loading:e.people.loading}}))(T(e))},R=a(258),C=a(150),A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return"https://www.gravatar.com/avatar/".concat(C.Md5.hashStr(e),"?d=identicon&s=").concat(t)},H=function(e){var t=e.name;return""===t?null:Object(b.jsx)(R.a,{alt:"Gravatar",src:A(t,100),size:100})},I=r.a.memo(H),P=k((function(){var e=Math.floor(82*Math.random()),t=Object(i.e)((function(t){return t.people.list[e]}),i.c),a=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a.Title,{level:3,children:"Featured Person"}),Object(b.jsxs)(_.a,{title:null===t||void 0===t?void 0:t.name,style:{width:300,textAlign:"center"},children:[Object(b.jsx)(f.a,{justify:"center",children:Object(b.jsx)(I,{name:null===t||void 0===t?void 0:t.name})}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Birth Year"}),Object(b.jsx)(m.a,{children:null===t||void 0===t?void 0:t.birth_year})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Gender"}),Object(b.jsx)(m.a,{className:"title-case",children:null===t||void 0===t?void 0:t.gender})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Height"}),Object(b.jsx)(m.a,{children:null===t||void 0===t?void 0:t.height})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Hair Color"}),Object(b.jsx)(m.a,{children:null===t||void 0===t?void 0:t.hair_color})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Eye Color"}),Object(b.jsx)(m.a,{children:null===t||void 0===t?void 0:t.eye_color})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Skin Color"}),Object(b.jsx)(m.a,{children:null===t||void 0===t?void 0:t.skin_color})]})]})]});return t?a:null})),F=function(){var e=Object(i.d)(),t=[{title:"Name",dataIndex:"name",key:"name"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Height",dataIndex:"height",key:"height"},{title:"Birth Year",dataIndex:"birth_year",key:"birth_year"},{title:"Remove",dataIndex:"name",render:function(t,a,n){return{children:Object(b.jsx)(y.a,{type:"primary",onClick:function(){e(function(e){return{type:"REMOVE_FROM_SQUAD",payload:e}}(n))},children:"Remove"})}}}],a=Object(o.f)(),n=Object(i.e)((function(e){return e.homeBase.squad})),r=Object(b.jsx)(v.a,{columns:t,dataSource:n}),c=Object(b.jsx)(y.a,{type:"primary",onClick:function(){return a("/people")},children:"Build your Squad"});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a.Title,{level:3,children:"Squad Members"}),0===n.length?c:r]})},N=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(f.a,{justify:"space-around",children:[Object(b.jsx)(m.a,{span:5,children:Object(b.jsx)(P,{})}),Object(b.jsx)(m.a,{span:8,children:Object(b.jsx)(F,{})}),Object(b.jsx)(m.a,{span:10,children:Object(b.jsx)(g,{})})]})})},D=a(259),M=a(158),L=function(e){return e.homeBase.squad},B=function(e){var t=Object(i.e)((function(t){return(a=null===e||void 0===e?void 0:e.name,Object(M.a)([L],(function(e){return e.filter((function(e){return e.name===a})).length>0})))(t);var a})),a=Object(i.d)();return Object(b.jsxs)(_.a,{bordered:!1,style:{width:300,textAlign:"center",display:e?"":"none"},children:[Object(b.jsx)(f.a,{justify:"center",children:Object(b.jsxs)(D.b,{direction:"vertical",children:[Object(b.jsx)(I,{name:null===e||void 0===e?void 0:e.name}),Object(b.jsx)(j.a.Title,{level:3,children:null===e||void 0===e?void 0:e.name})]})}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Birth Year"}),Object(b.jsx)(m.a,{children:null===e||void 0===e?void 0:e.birth_year})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Gender"}),Object(b.jsx)(m.a,{className:"title-case",children:null===e||void 0===e?void 0:e.gender})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Height"}),Object(b.jsx)(m.a,{children:null===e||void 0===e?void 0:e.height})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Hair Color"}),Object(b.jsx)(m.a,{children:null===e||void 0===e?void 0:e.hair_color})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Eye Color"}),Object(b.jsx)(m.a,{children:null===e||void 0===e?void 0:e.eye_color})]}),Object(b.jsxs)(f.a,{justify:"space-between",children:[Object(b.jsx)(m.a,{className:"row-header",children:"Skin Color"}),Object(b.jsx)(m.a,{children:null===e||void 0===e?void 0:e.skin_color})]}),Object(b.jsx)(f.a,{justify:"center",children:Object(b.jsx)(y.a,{type:"primary",onClick:function(t){a({type:"REQUEST_ADD_TO_SQUAD",payload:null===e||void 0===e?void 0:e.name})},disabled:t,children:"Hire"})})]})},G=r.a.memo(B),U=k((function(){var e=Object(i.e)((function(e){return e.people.list}),i.c).map((function(e,t){return Object(b.jsx)(_.a.Grid,{style:{width:"25%",textAlign:"center"},children:Object(b.jsx)(G,Object(S.a)({},e))},t)}));return Object(b.jsx)("div",{children:Object(b.jsx)(_.a,{children:e})})})),q=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(U,{})})},Q=function(e){return Object(i.b)((function(e){return{loading:e.starships.loading}}))(T(e))}((function(){var e=Object(i.d)(),t=[{title:"Name",dataIndex:"name",key:"name"},{title:"Model",dataIndex:"model",key:"model"},{title:"Manufacturer",dataIndex:"manufacturer",key:"manufacturer"},{title:"Cost in Credits",dataIndex:"cost_in_credits",key:"cost_in_credits"},{title:"Length",dataIndex:"length",key:"length"},{title:"Max Speed",dataIndex:"max_atmosphering_speed",key:"max_atmosphering_speed"},{title:"Crew",dataIndex:"crew",key:"crew"},{title:"Passengers",dataIndex:"passengers",key:"passengers"},{title:"Cargo Capacity",dataIndex:"cargo_capacity",key:"cargo_capacity"},{title:"Consumables",dataIndex:"consumables",key:"consumables"},{title:"Hyperdrive Rating",dataIndex:"hyperdrive_rating",key:"hyperdrive_rating"},{title:"MGLT",dataIndex:"MGLT",key:"MGLT"},{title:"Starship Class",dataIndex:"starship_class",key:"starship_class"},{title:"Add to Hangar",dataIndex:"name",render:function(t,a,n){return{children:Object(b.jsx)(y.a,{type:"primary",onClick:function(){e({type:"REQUEST_ADD_TO_HANGAR",payload:t})},children:"Add"}),props:{colSpan:5}}}}],a=Object(i.e)((function(e){return e.starships.list.map((function(e,t){return Object(S.a)(Object(S.a)({},e),{},{key:t})}))}));return Object(b.jsx)(v.a,{columns:t,dataSource:a})}));var V=function(){return Object(b.jsx)(l.a,{basename:"react-kata",children:Object(b.jsx)(x,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(N,{})}),Object(b.jsx)(o.a,{path:"/people",element:Object(b.jsx)(q,{})}),Object(b.jsx)(o.a,{path:"/starships",element:Object(b.jsx)(Q,{})})]})})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,260)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},z=a(89),J=(a(250),a(154)),K=a(29),W=a.n(K),X=a(31),Z=a(153),$=W.a.mark(ne),ee=W.a.mark(re),te=W.a.mark(ce),ae=W.a.mark(se);function ne(e){var t,a;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(X.d)((function(e){return e.people.list}));case 2:return t=n.sent,a=t.filter((function(t){return t.name===e.payload})),n.next=6,Object(X.c)({type:"ADD_TO_SQUAD",payload:a});case 6:case"end":return n.stop()}}),$)}function re(e){var t,a,n,r,c;return W.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(X.d)((function(e){return e.starships.list}));case 2:return t=s.sent,s.next=5,Object(X.d)((function(e){return e.homeBase.hangar}));case 5:return a=s.sent,s.next=8,Object(X.d)((function(e){return e.homeBase.hangarCapacity}));case 8:if(n=s.sent,"Death Star"!==(r=e.payload)){s.next=14;break}Z.b.error("Dream on! Death Star is off limits"),s.next=22;break;case 14:if(!(a.length<n)){s.next=21;break}return c=t.filter((function(e){return e.name===r})),s.next=18,Object(X.c)({type:"ADD_TO_HANGAR",payload:c});case 18:Z.b.info("Added to hangar: ".concat(r)),s.next=22;break;case 21:Z.b.error("Hangar is fully occupied");case 22:case"end":return s.stop()}}),ee)}function ce(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("REQUEST_ADD_TO_SQUAD",ne);case 2:case"end":return e.stop()}}),te)}function se(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("REQUEST_ADD_TO_HANGAR",re);case 2:case"end":return e.stop()}}),ae)}var ie=a(47),le=a(130),oe="https://swapi.dev/api",de={PEOPLE:"".concat(oe,"/people/"),PLANETS:"".concat(oe,"/planets/"),FILMS:"".concat(oe,"/films/"),SPECIES:"".concat(oe,"/species/"),VEHICLES:"".concat(oe,"/vehicles/"),STARSHIPS:"".concat(oe,"/starships/")},je=function(e){return Object(le.a)(W.a.mark((function t(){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,fetch(e).then((function(e){return e.json()})).then((function(e){return a=e.results,e.count})).then((function(t){for(var a=Math.ceil(t/10),n=[],r=2;r<=a;r++)n.push(fetch("".concat(e,"?page=").concat(r)));return Promise.all(n)})).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){a=e.reduce((function(e,t){return[].concat(Object(ie.a)(e),Object(ie.a)(t.results))}),a)}));case 3:return t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))()},ue=W.a.mark(he),be=W.a.mark(Oe);function he(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(X.b)(je,de.PEOPLE);case 3:return e=t.sent,t.next=6,Object(X.c)({type:"FETCH_PEOPLE_SUCCESS",payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(X.c)({type:"FETCH_PEOPLE_ERROR",payload:t.t0});case 12:case"end":return t.stop()}}),ue,null,[[0,8]])}function Oe(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("FETCH_PEOPLE_START",he);case 2:case"end":return e.stop()}}),be)}var pe=W.a.mark(fe),xe=W.a.mark(me);function fe(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(X.b)(je,de.STARSHIPS);case 3:return e=t.sent,t.next=6,Object(X.c)({type:"FETCH_STARSHIPS_SUCCESS",payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(X.c)({type:"FETCH_STARSHIPS_ERROR",payload:t.t0.message||t.t0});case 12:case"end":return t.stop()}}),pe,null,[[0,8]])}function me(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("FETCH_STARSHIPS_START",fe);case 2:case"end":return e.stop()}}),xe)}var ye=W.a.mark(ve);function ve(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([Object(X.b)(Oe),Object(X.b)(me),Object(X.b)(ce),Object(X.b)(se)]);case 2:case"end":return e.stop()}}),ye)}var ge={list:[],loading:!1,error:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PEOPLE_START":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"FETCH_PEOPLE_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,list:t.payload});case"FETCH_PEOPLE_ERROR":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:t.payload});default:return e}},Se={list:[],loading:!1,error:null},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STARSHIPS_START":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"FETCH_STARSHIPS_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,list:t.payload});case"FETCH_STARSHIPS_ERROR":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:t.payload});default:return e}},we={squad:[],squadMax:10,hangar:[],hangarCapacity:10},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_SQUAD":return Object(S.a)(Object(S.a)({},e),{},{squad:e.squad.length<e.squadMax?[].concat(Object(ie.a)(e.squad),Object(ie.a)(t.payload)):e.squad});case"ADD_TO_HANGAR":return Object(S.a)(Object(S.a)({},e),{},{hangar:e.hangar.length<e.hangarCapacity?[].concat(Object(ie.a)(e.hangar),Object(ie.a)(t.payload)):e.hangar});case"REMOVE_FROM_SQUAD":var a=Object(ie.a)(e.squad);return a.splice(t.payload,1),Object(S.a)(Object(S.a)({},e),{},{squad:a});case"REMOVE_FROM_HANGAR":var n=Object(ie.a)(e.hangar);return n.splice(t.payload,1),Object(S.a)(Object(S.a)({},e),{},{hangar:n});case"SET_ERROR_HOMEBASE":return Object(S.a)(Object(S.a)({},e),{},{error:t.payload});default:return e}},ke=Object(J.a)(),Re=[ke];var Ce=Object(z.b)({people:_e,starships:Ee,homeBase:Te}),Ae=Object(z.d)(Ce,z.a.apply(void 0,Re));ke.run(ve);var He=Ae;s.a.render(Object(b.jsx)(i.a,{store:He,children:Object(b.jsx)(V,{})}),document.getElementById("root")),Y()}},[[251,1,2]]]);
//# sourceMappingURL=main.e9053793.chunk.js.map