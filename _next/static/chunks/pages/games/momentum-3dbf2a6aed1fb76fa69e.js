_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[192],{"/BdS":function(t,e,n){"use strict";n.r(e),n.d(e,"Game",(function(){return k}));var r=n("ERkP"),o=n.n(r),s=n("rePB"),i=n("cDpP");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,s=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw s}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d,l,m,f={},b={stones:"pawn"},g={stones:[["units","stones"],["units","myunits","stones"],["units","oppunits","stones"]]},T={stones:[["units","stones"],["units","oppunits","stones"],["units","myunits","stones"]]},h={doomed:{},pushed:{}},A={gameId:"momentum",commands:{pie:{},drop:{}},iconMap:b,setBoard:function(t){Object(i.O)(t,1),Object(i.O)(t,2),m={height:t.height,width:t.width},l=Object(i.e)(m),d=Object(i.d)(t),Object(i.z)(t)},newBattle:function(t,e){var n=Object(i.L)(t),r={units:{},myunits:{},oppunits:{},stones:{}};for(var o in n){var s,u=n[o],a=u.group,p=u.pos,d=u.owner,l=c(T[a][d]);try{for(l.s();!(s=l.n()).done;){r[s.value][p]=u}}catch(m){l.e(m)}finally{l.f()}}return A.action["startTurn_".concat(e,"_1")]({NEXTSPAWNID:1,TURN:0,UNITDATA:n,UNITLAYERS:r})},action:{startTurn_basic_1:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,stones:e.stones},r={marks:{},commands:{}},o=0,s=Object.keys(Object.keys(l.board).filter((function(t){return!n.units.hasOwnProperty(t)})).reduce((function(t,e){return t[e]=f,t}),{}));o<s.length;o++){var i=s[o];r.marks[i]="selectdroptarget_basic_1"}return{UNITDATA:t.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:h,MARKS:{},TURN:t.TURN+1,NEXTSPAWNID:t.NEXTSPAWNID}},startTurn_basic_2:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,stones:e.stones},r={marks:{},commands:{}},o=t.TURN,s=0,i=Object.keys(Object.keys(l.board).filter((function(t){return!n.units.hasOwnProperty(t)})).reduce((function(t,e){return t[e]=f,t}),{}));s<i.length;s++){var u=i[s];r.marks[u]="selectdroptarget_basic_2"}return 1===o&&(r.commands.pie="pie_basic_2"),{UNITDATA:t.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:h,MARKS:{},TURN:o,NEXTSPAWNID:t.NEXTSPAWNID}},selectdroptarget_basic_1:function(t,e){var n,r={doomed:{},pushed:{}},o={marks:{},commands:{}},s={selectdroptarget:e},u=t.UNITLAYERS,a=u.units,p=c(i.I);try{for(p.s();!(n=p.n()).done;){for(var l=n.value,m=[],f="",b=s.selectdroptarget;!(f=(b=d[b][l])?a[b]?null:"nomoresteps":"outofbounds");)m.push(b);var g=m.length;g&&("outofbounds"===f&&(r.doomed[m[g-1]]={pushdir:l}),"nomoresteps"===f&&(r.pushed[m[g-1]]={pushdir:l}))}}catch(T){p.e(T)}finally{p.f()}return o.commands.drop="drop_basic_1",{LINKS:o,ARTIFACTS:r,UNITLAYERS:u,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:s,NEXTSPAWNID:t.NEXTSPAWNID}},selectdroptarget_basic_2:function(t,e){var n,r={doomed:{},pushed:{}},o={marks:{},commands:{}},s={selectdroptarget:e},u=t.UNITLAYERS,a=u.units,p=c(i.I);try{for(p.s();!(n=p.n()).done;){for(var l=n.value,m=[],f="",b=s.selectdroptarget;!(f=(b=d[b][l])?a[b]?null:"nomoresteps":"outofbounds");)m.push(b);var g=m.length;g&&("outofbounds"===f&&(r.doomed[m[g-1]]={pushdir:l}),"nomoresteps"===f&&(r.pushed[m[g-1]]={pushdir:l}))}}catch(T){p.e(T)}finally{p.f()}return o.commands.drop="drop_basic_2",{LINKS:o,ARTIFACTS:r,UNITLAYERS:u,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:s,NEXTSPAWNID:t.NEXTSPAWNID}},drop_basic_1:function(t){var e={marks:{},commands:{}},n={enterFrom:{},exitTo:{},ghosts:[]},r={doomed:t.ARTIFACTS.doomed,pushed:t.ARTIFACTS.pushed},o=t.UNITLAYERS,s=a({},t.UNITDATA),u=t.NEXTSPAWNID,p=t.MARKS,l=r.doomed;for(var m in l)n.exitTo[m]=Object(i.B)(m,(l[m]||{}).pushdir,1,0);var f="spawn"+u++;for(var b in s[f]={pos:p.selectdroptarget,id:f,group:"stones",owner:1},r.doomed)delete s[(o.units[b]||{}).id];var T=r.pushed;for(var h in T){var A=h,w=(o.units[A]||{}).id;w&&(s[w]=a(a({},s[w]),{},{pos:d[A][(T[h]||{}).pushdir]}))}for(var y in o={units:{},myunits:{},oppunits:{},stones:{}},s){var N,O=s[y],I=O.group,S=O.pos,v=O.owner,j=c(g[I][v]);try{for(j.s();!(N=j.n()).done;){o[N.value][S]=O}}catch(R){j.e(R)}finally{j.f()}}return 8===Object.keys(o.myunits).length?(e.endGame="win",e.endedBy="allout"):e.endTurn="startTurn_basic_2",{LINKS:e,MARKS:{},ARTIFACTS:r,TURN:t.TURN,UNITDATA:s,UNITLAYERS:o,NEXTSPAWNID:u,anim:n}},pie_basic_2:function(t){var e={marks:{},commands:{}},n=t.UNITLAYERS,r=a({},t.UNITDATA),o=(n.units[Object.keys(n.oppunits)[0]]||{}).id;for(var s in o&&(r[o]=a(a({},r[o]),{},{owner:2})),n={units:{},myunits:{},oppunits:{},stones:{}},r){var i,u=r[s],p=u.group,d=u.pos,l=u.owner,m=c(T[p][l]);try{for(m.s();!(i=m.n()).done;){n[i.value][d]=u}}catch(f){m.e(f)}finally{m.f()}}return e.endTurn="startTurn_basic_1",{LINKS:e,MARKS:{},ARTIFACTS:t.ARTIFACTS,TURN:t.TURN,UNITDATA:r,UNITLAYERS:n,NEXTSPAWNID:t.NEXTSPAWNID}},drop_basic_2:function(t){var e={marks:{},commands:{}},n={enterFrom:{},exitTo:{},ghosts:[]},r={doomed:t.ARTIFACTS.doomed,pushed:t.ARTIFACTS.pushed},o=t.UNITLAYERS,s=a({},t.UNITDATA),u=t.NEXTSPAWNID,p=t.MARKS,l=r.doomed;for(var m in l)n.exitTo[m]=Object(i.B)(m,(l[m]||{}).pushdir,1,0);var f="spawn"+u++;for(var b in s[f]={pos:p.selectdroptarget,id:f,group:"stones",owner:2},r.doomed)delete s[(o.units[b]||{}).id];var g=r.pushed;for(var h in g){var A=h,w=(o.units[A]||{}).id;w&&(s[w]=a(a({},s[w]),{},{pos:d[A][(g[h]||{}).pushdir]}))}for(var y in o={units:{},myunits:{},oppunits:{},stones:{}},s){var N,O=s[y],I=O.group,S=O.pos,v=O.owner,j=c(T[I][v]);try{for(j.s();!(N=j.n()).done;){o[N.value][S]=O}}catch(R){j.e(R)}finally{j.f()}}return 8===Object.keys(o.myunits).length?(e.endGame="win",e.endedBy="allout"):e.endTurn="startTurn_basic_1",{LINKS:e,MARKS:{},ARTIFACTS:r,TURN:t.TURN,UNITDATA:s,UNITLAYERS:o,NEXTSPAWNID:u,anim:n}}},instruction:{startTurn_basic_1:function(t){var e=t.UNITLAYERS;return Object(i.g)({line:[Object(i.g)({line:[{text:"Select where to drop"},7===Object.keys(e.myunits).length?Object(i.g)({line:[{text:"your last remaining"},{unittype:["pawn",1]}]}):Object(i.g)({line:[{text:"one of your"},{text:8-Object.keys(e.myunits).length},{text:"remaining"},{unittype:["pawn",1]}]})]}),void 0].filter((function(t){return!!t})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" or "}):n<r.length-2&&t.push({text:", "}),t}),[])})},drop_basic_1:function(){return Object(i.l)(1)},selectdroptarget_basic_1:function(t){var e=t.ARTIFACTS,n=t.MARKS,r=t.UNITLAYERS;return Object(i.g)({line:[{text:"Press"},{command:"drop"},{text:"to"},Object(i.g)({line:[Object(i.g)({line:[{text:"spawn"},{unit:["pawn",1,n.selectdroptarget]}]}),0!==Object.keys(e.pushed).length?Object(i.g)({line:[{text:"push"},Object(i.g)({line:Object.keys(e.pushed).filter((function(t){return r.units[t]})).map((function(t){return{unit:[b[r.units[t].group],r.units[t].owner,t]}})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])})]}):void 0,0!==Object.keys(e.doomed).length?Object(i.g)({line:[{text:"kill"},Object(i.g)({line:Object.keys(e.doomed).filter((function(t){return r.units[t]})).map((function(t){return{unit:[b[r.units[t].group],r.units[t].owner,t]}})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])})]}):void 0].filter((function(t){return!!t})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])})]})},startTurn_basic_2:function(t){var e=t.UNITLAYERS,n=t.TURN;return Object(i.g)({line:[Object(i.g)({line:[{text:"Select where to drop"},7===Object.keys(e.myunits).length?Object(i.g)({line:[{text:"your last remaining"},{unittype:["pawn",2]}]}):Object(i.g)({line:[{text:"one of your"},{text:8-Object.keys(e.myunits).length},{text:"remaining"},{unittype:["pawn",2]}]})]}),1===n?Object(i.g)({line:[{text:"press"},{command:"pie"},{text:"to take over"},{unit:[b[(e.units[Object.keys(e.units)[0]]||{}).group],(e.units[Object.keys(e.units)[0]]||{}).owner,Object.keys(e.units)[0]]}]}):void 0].filter((function(t){return!!t})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" or "}):n<r.length-2&&t.push({text:", "}),t}),[])})},pie_basic_2:function(){return Object(i.l)(2)},drop_basic_2:function(){return Object(i.l)(2)},selectdroptarget_basic_2:function(t){var e=t.ARTIFACTS,n=t.MARKS,r=t.UNITLAYERS;return Object(i.g)({line:[{text:"Press"},{command:"drop"},{text:"to"},Object(i.g)({line:[Object(i.g)({line:[{text:"spawn"},{unit:["pawn",2,n.selectdroptarget]}]}),0!==Object.keys(e.pushed).length?Object(i.g)({line:[{text:"push"},Object(i.g)({line:Object.keys(e.pushed).filter((function(t){return r.units[t]})).map((function(t){return{unit:[b[r.units[t].group],r.units[t].owner,t]}})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])})]}):void 0,0!==Object.keys(e.doomed).length?Object(i.g)({line:[{text:"kill"},Object(i.g)({line:Object.keys(e.doomed).filter((function(t){return r.units[t]})).map((function(t){return{unit:[b[r.units[t].group],r.units[t].owner,t]}})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])})]}):void 0].filter((function(t){return!!t})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])})]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"k",arr:{marks:[],potentialMarks:["b1","d1","f1","g1","b2","c2","d2","e2","f2","g2","a3","b3","d3","f3","g3","b4","d4","e4","f4","g4","a5","b5","c5","d5","f5","g5","a6","d6","e6","f6","a7","b7","c7","d7","e7","f7","g7"],setup:{stones:{1:["a1","c1","e1","c4","b6","c6"],2:["a2","c3","e3","a4","e5","g6"]}}}}],boards:{basic:{height:7,width:7,terrain:{}}},setups:{basic:{}}},w=A,y=n("nIA/"),N=Object(y.a)(w),O=n("eovb"),I=n("4wO8"),S=n("Xl2W"),v=n("nQqd"),j={api:N,graphics:O.a,meta:I.a,demo:S.a,rules:v.a,imgsToPreload:["/images/games/momentum/momentum.jpg"]},R=n("krfZ"),_=n("Xity"),U=n("+zLY"),x=n("0IYK"),E=o.a.createElement,k=function(){var t=Object(x.c)(j.api);return E(_.d.Provider,{value:j},E(_.e.Provider,{value:t},E(R.a,null)))};k.domain="momentum",k.mainImage="/images/games/momentum/momentum_active.png",k.metaDesc="Play the abstract board game Momentum at Chessicals! Newton's cradle on the battlefield!",k.metaTitle="Momentum by Phillip L. Leduc",k.title="Momentum",k.preloadImages=j.imgsToPreload,k.nav=Object(U.a)(j.meta);e.default=k},TxnJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/momentum",function(){return n("/BdS")}])},Xl2W:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var r={initial:{},patches:[{spawn1:[{pos:"a1",id:"spawn1",group:"stones",owner:1,icon:"pawn"}]},{spawn2:[{pos:"c3",id:"spawn2",group:"stones",owner:2,icon:"pawn"}]},{spawn2:{pos:["c3","b2"]},spawn3:[{pos:"d4",id:"spawn3",group:"stones",owner:1,icon:"pawn"}]},{spawn1:[{pos:"a1",id:"spawn1",group:"stones",owner:1,icon:"pawn"},0,0],spawn3:{pos:["d4","e5"]},spawn4:[{pos:"c3",id:"spawn4",group:"stones",owner:2,icon:"pawn"}]},{spawn2:{pos:["b2","a1"]},spawn3:{pos:["e5","f6"]},spawn5:[{pos:"d4",id:"spawn5",group:"stones",owner:1,icon:"pawn"}]},{spawn2:[{pos:"a1",id:"spawn2",group:"stones",owner:2,icon:"pawn"},0,0],spawn5:{pos:["d4","e5"]},spawn6:[{pos:"b2",id:"spawn6",group:"stones",owner:2,icon:"pawn"}]},{spawn3:{pos:["f6","g7"]},spawn6:{pos:["b2","a1"]},spawn7:[{pos:"d4",id:"spawn7",group:"stones",owner:1,icon:"pawn"}]}],anims:{4:{exitTo:{a1:"Z0"}},6:{exitTo:{a1:"Z0"}}}};e.a=r}},[["TxnJ",1,0,2,3,4,5,6,7,21]]]);