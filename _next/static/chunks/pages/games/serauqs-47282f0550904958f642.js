_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[225],{"6dVO":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/serauqs",function(){return n("FtHu")}])},FtHu:function(t,e,n){"use strict";n.r(e),n.d(e,"Game",(function(){return M}));var r=n("ERkP"),i=n.n(r),o=n("ODXe"),s=n("rePB"),a=n("cDpP");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m,p,b,T,f={},w={soldiers:"pawn",wild:"king"},y={soldiers:[["units"],["units","myunits"],["units","oppunits"]],wild:[["units","wild"],["units","myunits","wild","mywild"],["units","oppunits","wild","oppwild"]]},A={soldiers:[["units"],["units","oppunits"],["units","myunits"]],wild:[["units","wild"],["units","oppunits","wild","oppwild"],["units","myunits","wild","mywild"]]},v={movetargets:{},winline:{}},g={gameId:"serauqs",commands:{promote:{},move:{}},iconMap:w,setBoard:function(t){m=Object(a.P)(t,1),p=Object(a.P)(t,2),T={height:t.height,width:t.width},Object(a.e)(T),b=Object(a.d)(t),Object(a.A)(t)},newBattle:function(t,e){var n=Object(a.M)(t),r={units:{},myunits:{},oppunits:{},wild:{},mywild:{},oppwild:{}};for(var i in n){var o,s=n[i],u=s.group,c=s.pos,d=s.owner,m=l(A[u][d]);try{for(m.s();!(o=m.n()).done;){r[o.value][c]=s}}catch(p){m.e(p)}finally{m.f()}}return g.action["startTurn_".concat(e,"_1")]({TURN:0,UNITDATA:n,UNITLAYERS:r})},action:{startTurn_basic_1:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,wild:e.wild,mywild:e.oppwild,oppwild:e.mywild},r={marks:{},commands:{}},i=0,o=Object.keys(n.myunits);i<o.length;i++){var s=o[i];r.marks[s]="selectunit_basic_1"}return{UNITDATA:t.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:v,MARKS:{},TURN:t.TURN+1}},startTurn_basic_2:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,wild:e.wild,mywild:e.oppwild,oppwild:e.mywild},r={marks:{},commands:{}},i=0,o=Object.keys(n.myunits);i<o.length;i++){var s=o[i];r.marks[s]="selectunit_basic_2"}return{UNITDATA:t.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:v,MARKS:{},TURN:t.TURN}},selectunit_basic_1:function(t,e){var n,r={movetargets:{}},i={marks:{},commands:{}},o={selectunit:e},s=t.UNITLAYERS,u=t.TURN,c=b[o.selectunit],d=l(a.J);try{for(d.s();!(n=d.n()).done;){var m=c[n.value];m&&!s.units[m]&&(r.movetargets[m]=f)}}catch(y){d.e(y)}finally{d.f()}if(u>1)for(var p=0,T=Object.keys(r.movetargets);p<T.length;p++){var w=T[p];i.marks[w]="selectmovetarget_basic_1"}else i.commands.promote="promote_basic_1";return{LINKS:i,ARTIFACTS:r,UNITLAYERS:s,UNITDATA:t.UNITDATA,TURN:u,MARKS:o}},selectmovetarget_basic_1:function(t,e){var n={marks:{},commands:{}};return n.commands.move="move_basic_1",{LINKS:n,ARTIFACTS:t.ARTIFACTS,UNITLAYERS:t.UNITLAYERS,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:{selectunit:t.MARKS.selectunit,selectmovetarget:e}}},selectunit_basic_2:function(t,e){var n,r={movetargets:{}},i={marks:{},commands:{}},o={selectunit:e},s=t.UNITLAYERS,u=t.TURN,c=b[o.selectunit],d=l(a.J);try{for(d.s();!(n=d.n()).done;){var m=c[n.value];m&&!s.units[m]&&(r.movetargets[m]=f)}}catch(y){d.e(y)}finally{d.f()}if(u>1)for(var p=0,T=Object.keys(r.movetargets);p<T.length;p++){var w=T[p];i.marks[w]="selectmovetarget_basic_2"}else i.commands.promote="promote_basic_2";return{LINKS:i,ARTIFACTS:r,UNITLAYERS:s,UNITDATA:t.UNITDATA,TURN:u,MARKS:o}},selectmovetarget_basic_2:function(t,e){var n={marks:{},commands:{}};return n.commands.move="move_basic_2",{LINKS:n,ARTIFACTS:t.ARTIFACTS,UNITLAYERS:t.UNITLAYERS,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:{selectunit:t.MARKS.selectunit,selectmovetarget:e}}},promote_basic_1:function(t){var e={marks:{},commands:{}},n=t.UNITLAYERS,r=c({},t.UNITDATA),i=t.MARKS,o=(n.units[i.selectunit]||{}).id;for(var s in o&&(r[o]=c(c({},r[o]),{},{group:"wild"})),n={units:{},myunits:{},oppunits:{},wild:{},mywild:{},oppwild:{}},r){var a,u=r[s],d=u.group,m=u.pos,p=u.owner,b=l(y[d][p]);try{for(b.s();!(a=b.n()).done;){n[a.value][m]=u}}catch(T){b.e(T)}finally{b.f()}}return e.endTurn="startTurn_basic_2",{LINKS:e,MARKS:{},ARTIFACTS:t.ARTIFACTS,TURN:t.TURN,UNITDATA:r,UNITLAYERS:n}},move_basic_1:function(t){var e={marks:{},commands:{}},n={movetargets:t.ARTIFACTS.movetargets,winline:{}},r=t.UNITLAYERS,i=c({},t.UNITDATA),s=t.MARKS,u=(r.units[s.selectunit]||{}).id;for(var d in u&&(i[u]=c(c({},i[u]),{},{pos:s.selectmovetarget})),r={units:{},myunits:{},oppunits:{},wild:{},mywild:{},oppwild:{}},i){var p,T=i[d],w=T.group,A=T.pos,v=T.owner,g=l(y[w][v]);try{for(g.s();!(p=g.n()).done;){r[p.value][A]=T}}catch(E){g.e(E)}finally{g.f()}}var S=c(c({},r.myunits),r.oppwild);for(var R in c(c({},r.myunits),r.oppwild)){var N,O=l(a.J);try{for(O.s();!(N=O.n()).done;){var I=N.value,_=[],j="faux";b.faux[I]=R;for(var U=m.mybase,h=0;(j=b[j][I])&&S[j];)_.push(j),h+=U[j]?1:0;for(var k=_.length,x=h,L=0;L<k;L++)j=_[L],4===k&&4!==x&&(n.winline[j]=f)}}catch(E){O.e(E)}finally{O.f()}}return 0!==Object.keys(n.winline).length?(e.endGame="win",e.endedBy="madeline",e.endMarks=Object.keys(n.winline)):Object.keys(Object.entries(Object.keys(m.corners).concat(Object.keys(c(c({},r.myunits),r.oppwild))).reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})).filter((function(t){var e=Object(o.a)(t,2);e[0];return 2===e[1]})).reduce((function(t,e){return t[Object(o.a)(e,1)[0]]=f,t}),{})).length>3?(e.endGame="win",e.endedBy="madex",e.endMarks=Object.keys(m.corners)):Object.keys(Object.entries(Object.keys(m.middle).concat(Object.keys(c(c({},r.myunits),r.oppwild))).reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})).filter((function(t){var e=Object(o.a)(t,2);e[0];return 2===e[1]})).reduce((function(t,e){return t[Object(o.a)(e,1)[0]]=f,t}),{})).length>3?(e.endGame="win",e.endedBy="tookcenter",e.endMarks=Object.keys(m.middle)):e.endTurn="startTurn_basic_2",{LINKS:e,MARKS:{},ARTIFACTS:n,TURN:t.TURN,UNITDATA:i,UNITLAYERS:r}},promote_basic_2:function(t){var e={marks:{},commands:{}},n=t.UNITLAYERS,r=c({},t.UNITDATA),i=t.MARKS,o=(n.units[i.selectunit]||{}).id;for(var s in o&&(r[o]=c(c({},r[o]),{},{group:"wild"})),n={units:{},myunits:{},oppunits:{},wild:{},mywild:{},oppwild:{}},r){var a,u=r[s],d=u.group,m=u.pos,p=u.owner,b=l(A[d][p]);try{for(b.s();!(a=b.n()).done;){n[a.value][m]=u}}catch(T){b.e(T)}finally{b.f()}}return e.endTurn="startTurn_basic_1",{LINKS:e,MARKS:{},ARTIFACTS:t.ARTIFACTS,TURN:t.TURN,UNITDATA:r,UNITLAYERS:n}},move_basic_2:function(t){var e={marks:{},commands:{}},n={movetargets:t.ARTIFACTS.movetargets,winline:{}},r=t.UNITLAYERS,i=c({},t.UNITDATA),s=t.MARKS,u=(r.units[s.selectunit]||{}).id;for(var d in u&&(i[u]=c(c({},i[u]),{},{pos:s.selectmovetarget})),r={units:{},myunits:{},oppunits:{},wild:{},mywild:{},oppwild:{}},i){var m,T=i[d],w=T.group,y=T.pos,v=T.owner,g=l(A[w][v]);try{for(g.s();!(m=g.n()).done;){r[m.value][y]=T}}catch(E){g.e(E)}finally{g.f()}}var S=c(c({},r.myunits),r.oppwild);for(var R in c(c({},r.myunits),r.oppwild)){var N,O=l(a.J);try{for(O.s();!(N=O.n()).done;){var I=N.value,_=[],j="faux";b.faux[I]=R;for(var U=p.mybase,h=0;(j=b[j][I])&&S[j];)_.push(j),h+=U[j]?1:0;for(var k=_.length,x=h,L=0;L<k;L++)j=_[L],4===k&&4!==x&&(n.winline[j]=f)}}catch(E){O.e(E)}finally{O.f()}}return 0!==Object.keys(n.winline).length?(e.endGame="win",e.endedBy="madeline",e.endMarks=Object.keys(n.winline)):Object.keys(Object.entries(Object.keys(p.corners).concat(Object.keys(c(c({},r.myunits),r.oppwild))).reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})).filter((function(t){var e=Object(o.a)(t,2);e[0];return 2===e[1]})).reduce((function(t,e){return t[Object(o.a)(e,1)[0]]=f,t}),{})).length>3?(e.endGame="win",e.endedBy="madex",e.endMarks=Object.keys(p.corners)):Object.keys(Object.entries(Object.keys(p.middle).concat(Object.keys(c(c({},r.myunits),r.oppwild))).reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})).filter((function(t){var e=Object(o.a)(t,2);e[0];return 2===e[1]})).reduce((function(t,e){return t[Object(o.a)(e,1)[0]]=f,t}),{})).length>3?(e.endGame="win",e.endedBy="tookcenter",e.endMarks=Object.keys(p.middle)):e.endTurn="startTurn_basic_1",{LINKS:e,MARKS:{},ARTIFACTS:n,TURN:t.TURN,UNITDATA:i,UNITLAYERS:r}}},instruction:{startTurn_basic_1:function(t){return t.TURN>1?Object(a.g)({line:[{select:"Select"},{text:"which"},{unittype:["pawn",1]},{text:"or"},{unittype:["king",1]},{text:"to move"}]}):Object(a.g)({line:[{select:"Select"},{text:"which"},{unittype:["pawn",1]},{text:"to promote to"},{unittype:["king",1]}]})},promote_basic_1:function(){return Object(a.l)(1)},move_basic_1:function(){return Object(a.l)(1)},selectunit_basic_1:function(t){var e=t.MARKS,n=t.UNITLAYERS;return t.TURN>1?Object(a.g)({line:[{select:"Select"},{text:"where to move"},{unit:[w[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]},n.wild[e.selectunit]?{text:"(remember that it matches for your opponent too!)"}:void 0]}):Object(a.g)({line:[{text:"Press"},{command:"promote"},{text:"to turn"},{unit:[w[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]},{text:"into"},{unittype:["king",1]},{text:", making it match for your opponent too"}]})},selectmovetarget_basic_1:function(t){var e=t.MARKS,n=t.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"move"},{text:"to make"},{unit:[w[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]},{text:"go to"},{pos:e.selectmovetarget}]})},startTurn_basic_2:function(t){return t.TURN>1?Object(a.g)({line:[{select:"Select"},{text:"which"},{unittype:["pawn",2]},{text:"or"},{unittype:["king",2]},{text:"to move"}]}):Object(a.g)({line:[{select:"Select"},{text:"which"},{unittype:["pawn",2]},{text:"to promote to"},{unittype:["king",2]}]})},promote_basic_2:function(){return Object(a.l)(2)},move_basic_2:function(){return Object(a.l)(2)},selectunit_basic_2:function(t){var e=t.MARKS,n=t.UNITLAYERS;return t.TURN>1?Object(a.g)({line:[{select:"Select"},{text:"where to move"},{unit:[w[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]},n.wild[e.selectunit]?{text:"(remember that it matches for your opponent too!)"}:void 0]}):Object(a.g)({line:[{text:"Press"},{command:"promote"},{text:"to turn"},{unit:[w[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]},{text:"into"},{unittype:["king",2]},{text:", making it match for your opponent too"}]})},selectmovetarget_basic_2:function(t){var e=t.MARKS,n=t.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"move"},{text:"to make"},{unit:[w[(n.units[e.selectunit]||{}).group],(n.units[e.selectunit]||{}).owner,e.selectunit]},{text:"go to"},{pos:e.selectmovetarget}]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"c",arr:{marks:["b3"],potentialMarks:["a2","c2","b4","c4"],setup:{soldiers:{1:["b1","a3","b3"],2:["b2","c3","d3"]},wild:{1:["c1"],2:["a4"]}}}}],boards:{basic:{height:4,width:4,terrain:{base:{1:[{rect:["a1","d1"]}],2:[{rect:["a4","d4"]}]},corners:["a1","a4","d1","d4"],middle:[{rect:["b2","c3"]}]}}},setups:{basic:{soldiers:{1:[{rect:["a1","d1"]}],2:[{rect:["a4","d4"]}]}}}},S=g,R=n("nIA/"),N=Object(R.a)(S),O=n("cVj0"),I=n("notV"),_=n("PPMx"),j=n("J0Xw"),U={api:N,graphics:O.a,meta:I.a,demo:_.a,rules:j.a,imgsToPreload:["/images/games/serauqs/serauqs.jpg"]},h=n("krfZ"),k=n("Xity"),x=n("+zLY"),L=n("0IYK"),E=i.a.createElement,M=function(){var t=Object(L.c)(U.api);return E(k.d.Provider,{value:U},E(k.e.Provider,{value:t},E(h.a,null)))};M.domain="serauqs",M.mainImage="/images/games/serauqs/serauqs_active.png",M.metaDesc="Play the abstract board game Serauqs at Chessicals! Trick your opponent to help you win!",M.metaTitle="Serauqs",M.title="Serauqs",M.preloadImages=U.imgsToPreload,M.nav=Object(x.a)(U.meta);e.default=M},PPMx:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var r={initial:{unit1:{pos:"a1",id:"unit1",group:"soldiers",owner:1,icon:"pawn"},unit2:{pos:"b1",id:"unit2",group:"soldiers",owner:1,icon:"pawn"},unit3:{pos:"c1",id:"unit3",group:"soldiers",owner:1,icon:"pawn"},unit4:{pos:"d1",id:"unit4",group:"soldiers",owner:1,icon:"pawn"},unit5:{pos:"a4",id:"unit5",group:"soldiers",owner:2,icon:"pawn"},unit6:{pos:"b4",id:"unit6",group:"soldiers",owner:2,icon:"pawn"},unit7:{pos:"c4",id:"unit7",group:"soldiers",owner:2,icon:"pawn"},unit8:{pos:"d4",id:"unit8",group:"soldiers",owner:2,icon:"pawn"}},patches:[{unit4:{group:["soldiers","wild"],icon:["pawn","king"]}},{unit5:{group:["soldiers","wild"],icon:["pawn","king"]}},{unit2:{pos:["b1","b2"]}}],anims:{}};e.a=r}},[["6dVO",1,0,2,3,4,5,6,7,26]]]);