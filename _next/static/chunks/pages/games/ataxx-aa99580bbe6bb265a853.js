_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[96],{"Br/R":function(t,e,n){"use strict";n.r(e),n.d(e,"Game",(function(){return D}));var s=n("ERkP"),r=n.n(s),a=n("rePB"),i=n("cDpP");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var s=0,r=function(){};return{s:r,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){o=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}var p,m,T={},A={microbes:"pawn"},g={microbes:[["units","microbes"],["units","myunits","microbes"],["units","oppunits","microbes"]]},b={microbes:[["units","microbes"],["units","oppunits","microbes"],["units","myunits","microbes"]]},d={splittargets:{},movetargets:{},jumptargets:{},assimilated:{}},f={gameId:"ataxx",commands:{split:{},jump:{}},iconMap:A,setBoard:function(t){Object(i.P)(t,1),Object(i.P)(t,2),m={height:t.height,width:t.width},Object(i.e)(m),p=Object(i.d)(t),Object(i.A)(t)},newBattle:function(t,e){var n=Object(i.M)(t),s={units:{},myunits:{},oppunits:{},microbes:{}};for(var r in n){var a,o=n[r],u=o.group,l=o.pos,p=o.owner,m=c(b[u][p]);try{for(m.s();!(a=m.n()).done;){s[a.value][l]=o}}catch(T){m.e(T)}finally{m.f()}}return f.action["startTurn_".concat(e,"_1")]({NEXTSPAWNID:1,TURN:0,UNITDATA:n,UNITLAYERS:s})},action:{startTurn_basic_1:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,microbes:e.microbes},s={marks:{},commands:{}},r=0,a=Object.keys(n.myunits);r<a.length;r++){var i=a[r];s.marks[i]="selectunit_basic_1"}return{UNITDATA:t.UNITDATA,LINKS:s,UNITLAYERS:n,ARTIFACTS:d,MARKS:{},TURN:t.TURN+1,NEXTSPAWNID:t.NEXTSPAWNID}},startTurn_basic_2:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,microbes:e.microbes},s={marks:{},commands:{}},r=0,a=Object.keys(n.myunits);r<a.length;r++){var i=a[r];s.marks[i]="selectunit_basic_2"}return{UNITDATA:t.UNITDATA,LINKS:s,UNITLAYERS:n,ARTIFACTS:d,MARKS:{},TURN:t.TURN,NEXTSPAWNID:t.NEXTSPAWNID}},selectunit_basic_1:function(t,e){var n,s={jumptargets:{},movetargets:{},splittargets:{}},r={marks:{},commands:{}},a={selectunit:e},o=t.UNITLAYERS,u=p[a.selectunit],l=c(i.I);try{for(l.s();!(n=l.n()).done;){var m=u[n.value];m&&!o.units[m]&&(s.jumptargets[m]=T,s.movetargets[m]=T)}}catch(v){l.e(v)}finally{l.f()}var A,g=p[a.selectunit],b=c(i.J);try{for(b.s();!(A=b.n()).done;){var d=g[A.value];d&&!o.units[d]&&(s.splittargets[d]=T,s.movetargets[d]=T)}}catch(v){b.e(v)}finally{b.f()}for(var f=0,I=Object.keys(s.jumptargets);f<I.length;f++){var S=I[f];r.marks[S]="selectjumptarget_basic_1"}for(var N=0,R=Object.keys(s.splittargets);N<R.length;N++){var w=R[N];r.marks[w]="selectsplittarget_basic_1"}return{LINKS:r,ARTIFACTS:s,UNITLAYERS:o,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:a,NEXTSPAWNID:t.NEXTSPAWNID}},selectsplittarget_basic_1:function(t,e){var n,s={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:{}},r={marks:{},commands:{}},a={selectunit:t.MARKS.selectunit,selectsplittarget:e},o=t.UNITLAYERS,u=p[a.selectjumptarget||a.selectsplittarget],l=c(i.J);try{for(l.s();!(n=l.n()).done;){var m=u[n.value];m&&o.oppunits[m]&&(s.assimilated[m]=T)}}catch(A){l.e(A)}finally{l.f()}return r.commands.split="split_basic_1",{LINKS:r,ARTIFACTS:s,UNITLAYERS:o,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:a,NEXTSPAWNID:t.NEXTSPAWNID}},selectjumptarget_basic_1:function(t,e){var n,s={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:{}},r={marks:{},commands:{}},a={selectunit:t.MARKS.selectunit,selectjumptarget:e},o=t.UNITLAYERS,u=p[a.selectjumptarget||a.selectsplittarget],l=c(i.J);try{for(l.s();!(n=l.n()).done;){var m=u[n.value];m&&o.oppunits[m]&&(s.assimilated[m]=T)}}catch(A){l.e(A)}finally{l.f()}return r.commands.jump="jump_basic_1",{LINKS:r,ARTIFACTS:s,UNITLAYERS:o,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:a,NEXTSPAWNID:t.NEXTSPAWNID}},selectunit_basic_2:function(t,e){var n,s={jumptargets:{},movetargets:{},splittargets:{}},r={marks:{},commands:{}},a={selectunit:e},o=t.UNITLAYERS,u=p[a.selectunit],l=c(i.I);try{for(l.s();!(n=l.n()).done;){var m=u[n.value];m&&!o.units[m]&&(s.jumptargets[m]=T,s.movetargets[m]=T)}}catch(v){l.e(v)}finally{l.f()}var A,g=p[a.selectunit],b=c(i.J);try{for(b.s();!(A=b.n()).done;){var d=g[A.value];d&&!o.units[d]&&(s.splittargets[d]=T,s.movetargets[d]=T)}}catch(v){b.e(v)}finally{b.f()}for(var f=0,I=Object.keys(s.jumptargets);f<I.length;f++){var S=I[f];r.marks[S]="selectjumptarget_basic_2"}for(var N=0,R=Object.keys(s.splittargets);N<R.length;N++){var w=R[N];r.marks[w]="selectsplittarget_basic_2"}return{LINKS:r,ARTIFACTS:s,UNITLAYERS:o,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:a,NEXTSPAWNID:t.NEXTSPAWNID}},selectsplittarget_basic_2:function(t,e){var n,s={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:{}},r={marks:{},commands:{}},a={selectunit:t.MARKS.selectunit,selectsplittarget:e},o=t.UNITLAYERS,u=p[a.selectjumptarget||a.selectsplittarget],l=c(i.J);try{for(l.s();!(n=l.n()).done;){var m=u[n.value];m&&o.oppunits[m]&&(s.assimilated[m]=T)}}catch(A){l.e(A)}finally{l.f()}return r.commands.split="split_basic_2",{LINKS:r,ARTIFACTS:s,UNITLAYERS:o,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:a,NEXTSPAWNID:t.NEXTSPAWNID}},selectjumptarget_basic_2:function(t,e){var n,s={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:{}},r={marks:{},commands:{}},a={selectunit:t.MARKS.selectunit,selectjumptarget:e},o=t.UNITLAYERS,u=p[a.selectjumptarget||a.selectsplittarget],l=c(i.J);try{for(l.s();!(n=l.n()).done;){var m=u[n.value];m&&o.oppunits[m]&&(s.assimilated[m]=T)}}catch(A){l.e(A)}finally{l.f()}return r.commands.jump="jump_basic_2",{LINKS:r,ARTIFACTS:s,UNITLAYERS:o,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:a,NEXTSPAWNID:t.NEXTSPAWNID}},split_basic_1:function(t){var e={marks:{},commands:{}},n={enterFrom:{},exitTo:{},ghosts:[]},s={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:t.ARTIFACTS.assimilated},r=t.UNITLAYERS,a=u({},t.UNITDATA),i=t.NEXTSPAWNID,o=t.MARKS;n.enterFrom[o.selectsplittarget]=o.selectunit;var l="spawn"+i++;for(var p in a[l]={pos:o.selectsplittarget,id:l,group:"microbes",owner:1},s.assimilated){var m=(r.units[p]||{}).id;m&&(a[m]=u(u({},a[m]),{},{owner:1}))}for(var T in r={units:{},myunits:{},oppunits:{},microbes:{}},a){var A,b=a[T],d=b.group,f=b.pos,I=b.owner,S=c(g[d][I]);try{for(S.s();!(A=S.n()).done;){r[A.value][f]=b}}catch(N){S.e(N)}finally{S.f()}}return 49===Object.keys(r.units).length?(e.endGame=["draw","win","lose"][Object.keys(r.myunits).length>24?1:2],e.endedBy="dominance"):e.endTurn="startTurn_basic_2",{LINKS:e,MARKS:{},ARTIFACTS:s,TURN:t.TURN,UNITDATA:a,UNITLAYERS:r,NEXTSPAWNID:i,anim:n}},jump_basic_1:function(t){var e={marks:{},commands:{}},n={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:t.ARTIFACTS.assimilated},s=t.UNITLAYERS,r=u({},t.UNITDATA),a=t.MARKS,i=(s.units[a.selectunit]||{}).id;for(var o in i&&(r[i]=u(u({},r[i]),{},{pos:a.selectjumptarget})),n.assimilated){var l=(s.units[o]||{}).id;l&&(r[l]=u(u({},r[l]),{},{owner:1}))}for(var p in s={units:{},myunits:{},oppunits:{},microbes:{}},r){var m,T=r[p],A=T.group,b=T.pos,d=T.owner,f=c(g[A][d]);try{for(f.s();!(m=f.n()).done;){s[m.value][b]=T}}catch(I){f.e(I)}finally{f.f()}}return 49===Object.keys(s.units).length?(e.endGame=["draw","win","lose"][Object.keys(s.myunits).length>24?1:2],e.endedBy="dominance"):e.endTurn="startTurn_basic_2",{LINKS:e,MARKS:{},ARTIFACTS:n,TURN:t.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:t.NEXTSPAWNID}},split_basic_2:function(t){var e={marks:{},commands:{}},n={enterFrom:{},exitTo:{},ghosts:[]},s={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:t.ARTIFACTS.assimilated},r=t.UNITLAYERS,a=u({},t.UNITDATA),i=t.NEXTSPAWNID,o=t.MARKS;n.enterFrom[o.selectsplittarget]=o.selectunit;var l="spawn"+i++;for(var p in a[l]={pos:o.selectsplittarget,id:l,group:"microbes",owner:2},s.assimilated){var m=(r.units[p]||{}).id;m&&(a[m]=u(u({},a[m]),{},{owner:2}))}for(var T in r={units:{},myunits:{},oppunits:{},microbes:{}},a){var A,g=a[T],d=g.group,f=g.pos,I=g.owner,S=c(b[d][I]);try{for(S.s();!(A=S.n()).done;){r[A.value][f]=g}}catch(N){S.e(N)}finally{S.f()}}return 49===Object.keys(r.units).length?(e.endGame=["draw","lose","win"][Object.keys(r.myunits).length>24?2:1],e.endedBy="dominance"):e.endTurn="startTurn_basic_1",{LINKS:e,MARKS:{},ARTIFACTS:s,TURN:t.TURN,UNITDATA:a,UNITLAYERS:r,NEXTSPAWNID:i,anim:n}},jump_basic_2:function(t){var e={marks:{},commands:{}},n={jumptargets:t.ARTIFACTS.jumptargets,movetargets:t.ARTIFACTS.movetargets,splittargets:t.ARTIFACTS.splittargets,assimilated:t.ARTIFACTS.assimilated},s=t.UNITLAYERS,r=u({},t.UNITDATA),a=t.MARKS,i=(s.units[a.selectunit]||{}).id;for(var o in i&&(r[i]=u(u({},r[i]),{},{pos:a.selectjumptarget})),n.assimilated){var l=(s.units[o]||{}).id;l&&(r[l]=u(u({},r[l]),{},{owner:2}))}for(var p in s={units:{},myunits:{},oppunits:{},microbes:{}},r){var m,T=r[p],A=T.group,g=T.pos,d=T.owner,f=c(b[A][d]);try{for(f.s();!(m=f.n()).done;){s[m.value][g]=T}}catch(I){f.e(I)}finally{f.f()}}return 49===Object.keys(s.units).length?(e.endGame=["draw","lose","win"][Object.keys(s.myunits).length>24?2:1],e.endedBy="dominance"):e.endTurn="startTurn_basic_1",{LINKS:e,MARKS:{},ARTIFACTS:n,TURN:t.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:t.NEXTSPAWNID}}},instruction:{startTurn_basic_1:function(t){return Object(i.g)({line:[{select:"Select"},{unittype:["pawn",1]},{text:"to act with"}]})},split_basic_1:function(){return Object(i.l)(1)},jump_basic_1:function(){return Object(i.l)(1)},selectunit_basic_1:function(t){var e=t.MARKS,n=t.UNITLAYERS;return Object(i.g)({line:[{text:"Select where to jump or split with"},{unit:[A[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]}]})},selectsplittarget_basic_1:function(t){var e=t.ARTIFACTS,n=t.MARKS,s=t.UNITLAYERS;return Object(i.g)({line:[{text:"Press"},{command:"split"},{text:"to spawn"},{unit:["pawn",1,n.selectsplittarget]},0!==Object.keys(e.assimilated).length?Object(i.g)({line:[{text:"and assimilate"},Object(i.g)({line:Object.keys(e.assimilated).filter((function(t){return s.units[t]})).map((function(t){return{unit:[A[s.units[t].group],s.units[t].owner,t]}})).reduce((function(t,e,n,s){return t.push(e),n===s.length-2?t.push({text:" and "}):n<s.length-2&&t.push({text:", "}),t}),[])})]}):void 0]})},selectjumptarget_basic_1:function(t){var e=t.ARTIFACTS,n=t.MARKS,s=t.UNITLAYERS;return Object(i.g)({line:[{text:"Press"},{command:"jump"},{text:"to move"},{unit:[A[(s.units[n.selectunit]||{}).group],(s.units[n.selectunit]||{}).owner,n.selectunit]},{text:"to"},{pos:n.selectjumptarget},0!==Object.keys(e.assimilated).length?Object(i.g)({line:[{text:"and assimilate"},Object(i.g)({line:Object.keys(e.assimilated).filter((function(t){return s.units[t]})).map((function(t){return{unit:[A[s.units[t].group],s.units[t].owner,t]}})).reduce((function(t,e,n,s){return t.push(e),n===s.length-2?t.push({text:" and "}):n<s.length-2&&t.push({text:", "}),t}),[])})]}):void 0]})},startTurn_basic_2:function(t){return Object(i.g)({line:[{select:"Select"},{unittype:["pawn",2]},{text:"to act with"}]})},split_basic_2:function(){return Object(i.l)(2)},jump_basic_2:function(){return Object(i.l)(2)},selectunit_basic_2:function(t){var e=t.MARKS,n=t.UNITLAYERS;return Object(i.g)({line:[{text:"Select where to jump or split with"},{unit:[A[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]}]})},selectsplittarget_basic_2:function(t){var e=t.ARTIFACTS,n=t.MARKS,s=t.UNITLAYERS;return Object(i.g)({line:[{text:"Press"},{command:"split"},{text:"to spawn"},{unit:["pawn",2,n.selectsplittarget]},0!==Object.keys(e.assimilated).length?Object(i.g)({line:[{text:"and assimilate"},Object(i.g)({line:Object.keys(e.assimilated).filter((function(t){return s.units[t]})).map((function(t){return{unit:[A[s.units[t].group],s.units[t].owner,t]}})).reduce((function(t,e,n,s){return t.push(e),n===s.length-2?t.push({text:" and "}):n<s.length-2&&t.push({text:", "}),t}),[])})]}):void 0]})},selectjumptarget_basic_2:function(t){var e=t.ARTIFACTS,n=t.MARKS,s=t.UNITLAYERS;return Object(i.g)({line:[{text:"Press"},{command:"jump"},{text:"to move"},{unit:[A[(s.units[n.selectunit]||{}).group],(s.units[n.selectunit]||{}).owner,n.selectunit]},{text:"to"},{pos:n.selectjumptarget},0!==Object.keys(e.assimilated).length?Object(i.g)({line:[{text:"and assimilate"},Object(i.g)({line:Object.keys(e.assimilated).filter((function(t){return s.units[t]})).map((function(t){return{unit:[A[s.units[t].group],s.units[t].owner,t]}})).reduce((function(t,e,n,s){return t.push(e),n===s.length-2?t.push({text:" and "}):n<s.length-2&&t.push({text:", "}),t}),[])})]}):void 0]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"r",arr:{setup:{microbes:{1:["a1","a2","b1","b2","b6","c1","c2","c3","c6","d1","d2","d3","d4","e1","f3","f4","g1","g2"],2:["a3","a4","b3","b4","b5","c4","c5","d5","d6","e2","e3","e4","e5","e6","f1","f2","f5","g3","g4","g5"]}},marks:["b5"],potentialMarks:["a5","a6","a7","b7","c7","d7"]}}],boards:{basic:{height:7,width:7,terrain:{},offset:"ring2"}},setups:{basic:{microbes:{1:["a7","g1"],2:["a1","g7"]}}}},I=f,S=n("nIA/"),N=Object(S.a)(I),R=n("oI0t"),w=n("0R5R"),v=n("Wn2I"),j=n("Ffhh"),y={api:N,graphics:R.a,meta:w.a,demo:v.b,rules:j.a,imgsToPreload:["/images/games/ataxx/arcadescreen.jpg","/images/games/ataxx/7thguestinfection.jpg"]},h=n("krfZ"),_=n("Xity"),U=n("+zLY"),O=n("0IYK"),E=r.a.createElement,D=function(){var t=Object(O.c)(y.api);return E(_.d.Provider,{value:y},E(_.e.Provider,{value:t},E(h.a,null)))};D.domain="ataxx",D.mainImage="/images/games/ataxx/ataxx_active.png",D.metaDesc="Play the abstract board game Ataxx at Chessicals! Battle of the microbes!",D.metaTitle="Ataxx by Dave Crummack and Craig Galley",D.title="Ataxx",D.preloadImages=y.imgsToPreload,D.nav=Object(U.a)(y.meta);e.default=D},Wn2I:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s={initial:{unit1:{pos:"a7",id:"unit1",group:"microbes",owner:1,icon:"pawn"},unit2:{pos:"g1",id:"unit2",group:"microbes",owner:1,icon:"pawn"},unit3:{pos:"a1",id:"unit3",group:"microbes",owner:2,icon:"pawn"},unit4:{pos:"g7",id:"unit4",group:"microbes",owner:2,icon:"pawn"}},patches:[{spawn1:[{pos:"b6",id:"spawn1",group:"microbes",owner:1,icon:"pawn"}]},{unit4:{pos:["g7","e5"]}},{spawn2:[{pos:"f2",id:"spawn2",group:"microbes",owner:1,icon:"pawn"}]},{spawn3:[{pos:"f6",id:"spawn3",group:"microbes",owner:2,icon:"pawn"}]},{unit4:{owner:[2,1]},spawn1:{pos:["b6","d6"]}},{unit4:{owner:[1,2]},spawn1:{owner:[1,2]},spawn4:[{pos:"e6",id:"spawn4",group:"microbes",owner:2,icon:"pawn"}]},{spawn5:[{pos:"e2",id:"spawn5",group:"microbes",owner:1,icon:"pawn"}]},{unit4:{pos:["e5","f3"]},spawn2:{owner:[1,2]},spawn5:{owner:[1,2]}},{unit2:{pos:["g1","e3"]},unit4:{owner:[2,1]},spawn2:{owner:[2,1]},spawn5:{owner:[2,1]}},{unit4:{owner:[1,2]},spawn3:{pos:["f6","g4"]}},{unit4:{owner:[2,1]},spawn3:{owner:[2,1]},spawn6:[{pos:"g3",id:"spawn6",group:"microbes",owner:1,icon:"pawn"}]},{unit2:{owner:[1,2]},unit4:{owner:[1,2]},spawn1:{pos:["d6","f4"]},spawn3:{owner:[1,2]},spawn6:{owner:[1,2]}},{unit2:{owner:[2,1]},unit4:{owner:[2,1]},spawn1:{owner:[2,1]},spawn2:{pos:["f2","e4"]}}],anims:{1:{enterFrom:{b6:"a7"}},3:{enterFrom:{f2:"g1"}},4:{enterFrom:{f6:"e5"}},6:{enterFrom:{e6:"f6"}},7:{enterFrom:{e2:"f2"}},11:{enterFrom:{g3:"f2"}}}};e.b=s},"uX/z":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/ataxx",function(){return n("Br/R")}])}},[["uX/z",1,0,2,3,4,5,6,7,46]]]);