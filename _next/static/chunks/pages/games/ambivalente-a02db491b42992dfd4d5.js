_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[90],{h6AE:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={initial:{},patches:[{spawn1:[{pos:"a3",id:"spawn1",group:"pawns",owner:1,icon:"pawn"}]},{spawn2:[{pos:"b3",id:"spawn2",group:"pawns",owner:2,icon:"pawn"}]},{spawn3:[{pos:"e4",id:"spawn3",group:"pawns",owner:1,icon:"pawn"}]},{spawn4:[{pos:"c2",id:"spawn4",group:"pawns",owner:2,icon:"pawn"}]},{spawn5:[{pos:"a6",id:"spawn5",group:"pawns",owner:1,icon:"pawn"}]},{spawn6:[{pos:"c4",id:"spawn6",group:"pawns",owner:2,icon:"pawn"}]},{spawn2:{owner:[2,0]},spawn4:{owner:[2,0]},spawn6:{owner:[2,0]},spawn7:[{pos:"c3",id:"spawn7",group:"pawns",owner:1,icon:"pawn"}]}],anims:{}};e.b=r},iEqm:function(t,e,n){"use strict";n.r(e),n.d(e,"Game",(function(){return K}));var r=n("ERkP"),a=n.n(r),s=n("rePB"),i=n("ODXe"),o=n("cDpP");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){o=!0,s=t},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l,f,b,m,v,w,T={},y={pawns:"pawn"},A={pawns:[["units","pawns"],["units","myunits","pawns"],["units","oppunits","pawns"]]},g={pawns:[["units","pawns"],["units","oppunits","pawns"],["units","myunits","pawns"]]},h={touchedfoes:{},victims:{}},O={gameId:"ambivalente",commands:{drop:{}},iconMap:y,setBoard:function(t){l=Object(o.O)(t,1),f=Object(o.O)(t,2),w={height:t.height,width:t.width},v=Object(o.e)(w),b=Object(o.d)(t),m=Object(o.z)(t)},newBattle:function(t,e){var n=Object(o.L)(t),r={units:{},myunits:{},oppunits:{},pawns:{}};for(var a in n){var s,i=n[a],c=i.group,u=i.pos,d=i.owner,l=p(g[c][d]);try{for(l.s();!(s=l.n()).done;){r[s.value][u]=i}}catch(f){l.e(f)}finally{l.f()}}return O.action["startTurn_".concat(e,"_1")]({NEXTSPAWNID:1,TURN:0,UNITDATA:n,UNITLAYERS:r})},action:{startTurn_basic_1:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,pawns:e.pawns},r={marks:{},commands:{}},a=0,s=Object.keys(Object.keys(v.board).filter((function(t){return!n.units.hasOwnProperty(t)})).reduce((function(t,e){return t[e]=T,t}),{}));a<s.length;a++){var i=s[a];r.marks[i]="selectdroptarget_basic_1"}return{UNITDATA:t.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:h,MARKS:{},TURN:t.TURN+1,NEXTSPAWNID:t.NEXTSPAWNID}},startTurn_basic_2:function(t){for(var e=t.UNITLAYERS,n={units:e.units,myunits:e.oppunits,oppunits:e.myunits,pawns:e.pawns},r={marks:{},commands:{}},a=0,s=Object.keys(Object.keys(v.board).filter((function(t){return!n.units.hasOwnProperty(t)})).reduce((function(t,e){return t[e]=T,t}),{}));a<s.length;a++){var i=s[a];r.marks[i]="selectdroptarget_basic_2"}return{UNITDATA:t.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:h,MARKS:{},TURN:t.TURN,NEXTSPAWNID:t.NEXTSPAWNID}},selectdroptarget_basic_1:function(t,e){var n,r={touchedfoes:{},victims:{}},a={marks:{},commands:{}},c={selectdroptarget:e},d=t.UNITLAYERS,f=b[c.selectdroptarget],v=p(o.I);try{for(v.s();!(n=v.n()).done;){var w=n.value,y=f[w];y&&d.oppunits[y]&&(r.touchedfoes[y]={dir:w})}}catch(Y){v.e(Y)}finally{v.f()}for(var A in r.touchedfoes){var g=b[A][m.d5f2r0[(r.touchedfoes[A]||{}).dir]];g&&d.oppunits[g]&&(r.victims[g]=T)}for(var h in r.touchedfoes){var O=0,N=b[h][(r.touchedfoes[h]||{}).dir];N&&d.myunits[N]&&(O=1),O&&(r.victims[h]=T)}if(l.corners[c.selectdroptarget]){var j,I=[],S=b[c.selectdroptarget],_=p(o.C);try{for(_.s();!(j=_.n()).done;){var R=S[j.value];R&&d.oppunits[R]&&I.push(R)}}catch(Y){_.e(Y)}finally{_.f()}for(var E=I.length,k=0;k<E;k++){var U=I[k];2===E&&(r.victims[U]=T)}}for(var P in Object.entries(Object.keys(l.corners).concat(Object.keys(d.oppunits)).reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})).filter((function(t){var e=Object(i.a)(t,2);e[0];return 2===e[1]})).reduce((function(t,e){return t[Object(i.a)(e,1)[0]]=T,t}),{})){var D,L=[],C=b[P],K=p(o.C);try{for(K.s();!(D=K.n()).done;){var X=C[D.value];X&&u(u({},d.myunits),Object(s.a)({},c.selectdroptarget,1))[X]&&L.push(X)}}catch(Y){K.e(Y)}finally{K.f()}2===L.length&&(r.victims[P]=T)}return a.commands.drop="drop_basic_1",{LINKS:a,ARTIFACTS:r,UNITLAYERS:d,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:c,NEXTSPAWNID:t.NEXTSPAWNID,canAlwaysEnd:!0}},selectdroptarget_basic_2:function(t,e){var n,r={touchedfoes:{},victims:{}},a={marks:{},commands:{}},c={selectdroptarget:e},d=t.UNITLAYERS,l=b[c.selectdroptarget],v=p(o.I);try{for(v.s();!(n=v.n()).done;){var w=n.value,y=l[w];y&&d.oppunits[y]&&(r.touchedfoes[y]={dir:w})}}catch(Y){v.e(Y)}finally{v.f()}for(var A in r.touchedfoes){var g=b[A][m.d5f2r0[(r.touchedfoes[A]||{}).dir]];g&&d.oppunits[g]&&(r.victims[g]=T)}for(var h in r.touchedfoes){var O=0,N=b[h][(r.touchedfoes[h]||{}).dir];N&&d.myunits[N]&&(O=1),O&&(r.victims[h]=T)}if(f.corners[c.selectdroptarget]){var j,I=[],S=b[c.selectdroptarget],_=p(o.C);try{for(_.s();!(j=_.n()).done;){var R=S[j.value];R&&d.oppunits[R]&&I.push(R)}}catch(Y){_.e(Y)}finally{_.f()}for(var E=I.length,k=0;k<E;k++){var U=I[k];2===E&&(r.victims[U]=T)}}for(var P in Object.entries(Object.keys(f.corners).concat(Object.keys(d.oppunits)).reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})).filter((function(t){var e=Object(i.a)(t,2);e[0];return 2===e[1]})).reduce((function(t,e){return t[Object(i.a)(e,1)[0]]=T,t}),{})){var D,L=[],C=b[P],K=p(o.C);try{for(K.s();!(D=K.n()).done;){var X=C[D.value];X&&u(u({},d.myunits),Object(s.a)({},c.selectdroptarget,1))[X]&&L.push(X)}}catch(Y){K.e(Y)}finally{K.f()}2===L.length&&(r.victims[P]=T)}return a.commands.drop="drop_basic_2",{LINKS:a,ARTIFACTS:r,UNITLAYERS:d,UNITDATA:t.UNITDATA,TURN:t.TURN,MARKS:c,NEXTSPAWNID:t.NEXTSPAWNID,canAlwaysEnd:!0}},drop_basic_1:function(t){var e={marks:{},commands:{}},n={touchedfoes:t.ARTIFACTS.touchedfoes,victims:t.ARTIFACTS.victims},r=t.UNITLAYERS,a=u({},t.UNITDATA),s=t.NEXTSPAWNID,i=t.MARKS,c="spawn"+s++;for(var d in a[c]={pos:i.selectdroptarget,id:c,group:"pawns",owner:1},n.victims){var l=(r.units[d]||{}).id;l&&(a[l]=u(u({},a[l]),{},{owner:0}))}for(var f in r={units:{},myunits:{},oppunits:{},pawns:{}},a){var b,m=a[f],v=m.group,w=m.pos,y=m.owner,g=p(A[v][y]);try{for(g.s();!(b=g.n()).done;){r[b.value][w]=m}}catch(h){g.e(h)}finally{g.f()}}return 36===Object.keys(r.units).length?(e.endGame=["draw","win","lose"][Object(o.Q)(Object.keys(r.myunits).length,Object.keys(r.oppunits).length)],e.endedBy="filledboard",e.endMarks=Object.keys([T,r.myunits,r.oppunits][Object(o.Q)(Object.keys(r.myunits).length,Object.keys(r.oppunits).length)])):e.endTurn="startTurn_basic_2",{LINKS:e,MARKS:{},ARTIFACTS:n,TURN:t.TURN,UNITDATA:a,UNITLAYERS:r,NEXTSPAWNID:s}},drop_basic_2:function(t){var e={marks:{},commands:{}},n={touchedfoes:t.ARTIFACTS.touchedfoes,victims:t.ARTIFACTS.victims},r=t.UNITLAYERS,a=u({},t.UNITDATA),s=t.NEXTSPAWNID,i=t.MARKS,c="spawn"+s++;for(var d in a[c]={pos:i.selectdroptarget,id:c,group:"pawns",owner:2},n.victims){var l=(r.units[d]||{}).id;l&&(a[l]=u(u({},a[l]),{},{owner:0}))}for(var f in r={units:{},myunits:{},oppunits:{},pawns:{}},a){var b,m=a[f],v=m.group,w=m.pos,y=m.owner,A=p(g[v][y]);try{for(A.s();!(b=A.n()).done;){r[b.value][w]=m}}catch(h){A.e(h)}finally{A.f()}}return 36===Object.keys(r.units).length?(e.endGame=["draw","lose","win"][Object(o.Q)(Object.keys(r.oppunits).length,Object.keys(r.myunits).length)],e.endedBy="filledboard",e.endMarks=Object.keys([T,r.myunits,r.oppunits][Object(o.Q)(Object.keys(r.myunits).length,Object.keys(r.oppunits).length)])):e.endTurn="startTurn_basic_1",{LINKS:e,MARKS:{},ARTIFACTS:n,TURN:t.TURN,UNITDATA:a,UNITLAYERS:r,NEXTSPAWNID:s}}},instruction:{startTurn_basic_1:function(t){return Object(o.g)({line:[{text:"Select an empty square to drop a"},{unittype:["pawn",1]}]})},drop_basic_1:function(){return Object(o.l)(1)},selectdroptarget_basic_1:function(t){var e=t.ARTIFACTS,n=t.MARKS,r=t.UNITLAYERS;return Object(o.g)({line:[{text:"Press"},{command:"drop"},{text:"to spawn"},{unit:["pawn",1,n.selectdroptarget]},0!==Object.keys(e.victims).length?Object(o.g)({line:[{text:"and turn"},Object(o.g)({line:Object.keys(e.victims).filter((function(t){return r.units[t]})).map((function(t){return{unit:[y[r.units[t].group],r.units[t].owner,t]}})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])}),{text:"into"},{unittype:["pawn",0]}]}):void 0]})},startTurn_basic_2:function(t){return Object(o.g)({line:[{text:"Select an empty square to drop a"},{unittype:["pawn",2]}]})},drop_basic_2:function(){return Object(o.l)(2)},selectdroptarget_basic_2:function(t){var e=t.ARTIFACTS,n=t.MARKS,r=t.UNITLAYERS;return Object(o.g)({line:[{text:"Press"},{command:"drop"},{text:"to spawn"},{unit:["pawn",2,n.selectdroptarget]},0!==Object.keys(e.victims).length?Object(o.g)({line:[{text:"and turn"},Object(o.g)({line:Object.keys(e.victims).filter((function(t){return r.units[t]})).map((function(t){return{unit:[y[r.units[t].group],r.units[t].owner,t]}})).reduce((function(t,e,n,r){return t.push(e),n===r.length-2?t.push({text:" and "}):n<r.length-2&&t.push({text:", "}),t}),[])}),{text:"into"},{unittype:["pawn",0]}]}):void 0]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"r",arr:{setup:{pawns:{0:["a6","e6","b2","b3","d3","e1","f2"],1:["b5","c3","f1","f5"],2:["a5","b1","b6","d6","f6"]}},marks:[],potentialMarks:["a1","a2","a3","a4","b4","c1","c2","c4","c5","c6","d1","d2","d4","d5","e2","e3","e4","e5","f3","f4"]}}],boards:{basic:{height:6,width:6,terrain:{corners:["a1","f1","a6","f6"]},offsets:[["rose",2,0]]}},setups:{basic:{}}},N=O,j=n("nIA/"),I=Object(j.a)(N),S=n("l/a2"),_=n("en7/"),R=n("h6AE"),E=n("GMyn"),k={api:I,graphics:S.a,meta:_.a,demo:R.b,rules:E.a,imgsToPreload:["/images/games/ambivalente/ambivalente_book.jpg"]},U=n("krfZ"),P=n("Xity"),D=n("+zLY"),L=n("0IYK"),C=a.a.createElement,K=function(){var t=Object(L.c)(k.api);return C(P.d.Provider,{value:k},C(P.e.Provider,{value:t},C(U.a,null)))};K.domain="ambivalente",K.mainImage="/images/games/ambivalente/ambivalente_active.png",K.metaDesc="Play the abstract board game Ambivalente at Chessicals! Encircle and intrude in an ever-closer dance!",K.metaTitle="Ambivalente by Walter Joris",K.title="Ambivalente",K.preloadImages=k.imgsToPreload,K.nav=Object(D.a)(k.meta);e.default=K},iOzn:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/ambivalente",function(){return n("iEqm")}])}},[["iOzn",1,0,2,3,4,5,6,7,28]]]);