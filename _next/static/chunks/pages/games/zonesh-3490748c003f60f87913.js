_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[276],{"HU/V":function(e,t,n){"use strict";n.r(t),n.d(t,"Game",(function(){return K}));var i=n("ERkP"),r=n.n(i),o=n("ODXe"),s=n("rePB"),u=n("cDpP");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var m,d,b,g,v={},T={soldiers:"pawn"},f={soldiers:[["units"],["units","myunits"],["units","oppunits"]]},A={soldiers:[["units"],["units","oppunits"],["units","myunits"]]},w={movetargets:{}},y={gameId:"zonesh",commands:{move:{}},iconMap:T,setBoard:function(e){m=Object(u.P)(e,1),d=Object(u.P)(e,2),g={height:e.height,width:e.width},Object(u.e)(g),b=Object(u.d)(e),Object(u.A)(e)},newBattle:function(e,t){var n=Object(u.M)(e),i={units:{},myunits:{},oppunits:{}};for(var r in n){var o,s=n[r],a=s.group,c=s.pos,p=s.owner,m=l(A[a][p]);try{for(m.s();!(o=m.n()).done;){i[o.value][c]=s}}catch(d){m.e(d)}finally{m.f()}}return y.action["startTurn_".concat(t,"_1")]({TURN:0,UNITDATA:n,UNITLAYERS:i})},action:{startTurn_basic_1:function(e){for(var t=e.UNITLAYERS,n={units:t.units,myunits:t.oppunits,oppunits:t.myunits},i={marks:{},commands:{}},r=0,o=Object.keys(n.myunits);r<o.length;r++){var s=o[r];i.marks[s]="selectunit_basic_1"}return{UNITDATA:e.UNITDATA,LINKS:i,UNITLAYERS:n,ARTIFACTS:w,MARKS:{},TURN:e.TURN+1}},startTurn_basic_2:function(e){for(var t=e.UNITLAYERS,n={units:t.units,myunits:t.oppunits,oppunits:t.myunits},i={marks:{},commands:{}},r=0,o=Object.keys(n.myunits);r<o.length;r++){var s=o[r];i.marks[s]="selectunit_basic_2"}return{UNITDATA:e.UNITDATA,LINKS:i,UNITLAYERS:n,ARTIFACTS:w,MARKS:{},TURN:e.TURN}},selectunit_basic_1:function(e,t){var n,i={movetargets:{}},r={marks:{},commands:{}},o={selectunit:t},s=e.UNITLAYERS,a=o.selectunit,c=b[a],p=l(m.mybase[a]||m.mythrone[a]?u.D:u.J);try{for(p.s();!(n=p.n()).done;){var d=c[n.value];d&&!s.myunits[d]&&(i.movetargets[d]=v)}}catch(A){p.e(A)}finally{p.f()}for(var g=0,T=Object.keys(i.movetargets);g<T.length;g++){var f=T[g];r.marks[f]="selectmovetarget_basic_1"}return{LINKS:r,ARTIFACTS:i,UNITLAYERS:s,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:o}},selectmovetarget_basic_1:function(e,t){var n={marks:{},commands:{}};return n.commands.move="move_basic_1",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectmovetarget:t}}},selectunit_basic_2:function(e,t){var n,i={movetargets:{}},r={marks:{},commands:{}},o={selectunit:t},s=e.UNITLAYERS,a=o.selectunit,c=b[a],p=l(d.mybase[a]||d.mythrone[a]?u.D:u.J);try{for(p.s();!(n=p.n()).done;){var m=c[n.value];m&&!s.myunits[m]&&(i.movetargets[m]=v)}}catch(A){p.e(A)}finally{p.f()}for(var g=0,T=Object.keys(i.movetargets);g<T.length;g++){var f=T[g];r.marks[f]="selectmovetarget_basic_2"}return{LINKS:r,ARTIFACTS:i,UNITLAYERS:s,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:o}},selectmovetarget_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.move="move_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectmovetarget:t}}},move_basic_1:function(e){var t={marks:{},commands:{}},n=e.UNITLAYERS,i=c({},e.UNITDATA),r=e.MARKS;delete i[(n.units[r.selectmovetarget]||{}).id];var s=(n.units[r.selectunit]||{}).id;for(var u in s&&(i[s]=c(c({},i[s]),{},{pos:r.selectmovetarget})),n={units:{},myunits:{},oppunits:{}},i){var a,p=i[u],d=p.group,b=p.pos,g=p.owner,T=l(f[d][g]);try{for(T.s();!(a=T.n()).done;){n[a.value][b]=p}}catch(A){T.e(A)}finally{T.f()}}return 0!==Object.keys(Object.entries(Object.keys(m.oppthrone).concat(Object.keys(n.myunits)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=v,e}),{})).length?(t.endGame="win",t.endedBy="infiltration",t.endMarks=Object.keys(m.oppthrone)):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:e.ARTIFACTS,TURN:e.TURN,UNITDATA:i,UNITLAYERS:n}},move_basic_2:function(e){var t={marks:{},commands:{}},n=e.UNITLAYERS,i=c({},e.UNITDATA),r=e.MARKS;delete i[(n.units[r.selectmovetarget]||{}).id];var s=(n.units[r.selectunit]||{}).id;for(var u in s&&(i[s]=c(c({},i[s]),{},{pos:r.selectmovetarget})),n={units:{},myunits:{},oppunits:{}},i){var a,p=i[u],m=p.group,b=p.pos,g=p.owner,T=l(A[m][g]);try{for(T.s();!(a=T.n()).done;){n[a.value][b]=p}}catch(f){T.e(f)}finally{T.f()}}return 0!==Object.keys(Object.entries(Object.keys(d.oppthrone).concat(Object.keys(n.myunits)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=v,e}),{})).length?(t.endGame="win",t.endedBy="infiltration",t.endMarks=Object.keys(d.oppthrone)):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:e.ARTIFACTS,TURN:e.TURN,UNITDATA:i,UNITLAYERS:n}}},instruction:{startTurn_basic_1:function(e){return Object(u.g)({line:[{text:"Select which"},{unittype:["pawn",1]},{text:"to act with"}]})},move_basic_1:function(){return Object(u.l)(1)},selectunit_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Select where to move"},{unit:[T[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},m.mybase[t.selectunit]||m.mythrone[t.selectunit]?{text:"(but only orthogonally since you are in the home base)"}:void 0]})},selectmovetarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"move"},{text:"to"},n.units[t.selectmovetarget]?Object(u.g)({line:[{text:"make"},{unit:[T[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"stomp"},{unit:[T[(n.units[t.selectmovetarget]||{}).group],(n.units[t.selectmovetarget]||{}).owner,t.selectmovetarget]}]}):Object(u.g)({line:[{text:"make"},{unit:[T[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"move to"},{unit:[T[(n.units[t.selectmovetarget]||{}).group],(n.units[t.selectmovetarget]||{}).owner,t.selectmovetarget]}]})]})},startTurn_basic_2:function(e){return Object(u.g)({line:[{text:"Select which"},{unittype:["pawn",2]},{text:"to act with"}]})},move_basic_2:function(){return Object(u.l)(2)},selectunit_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Select where to move"},{unit:[T[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},d.mybase[t.selectunit]||d.mythrone[t.selectunit]?{text:"(but only orthogonally since you are in the home base)"}:void 0]})},selectmovetarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"move"},{text:"to"},n.units[t.selectmovetarget]?Object(u.g)({line:[{text:"make"},{unit:[T[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"stomp"},{unit:[T[(n.units[t.selectmovetarget]||{}).group],(n.units[t.selectmovetarget]||{}).owner,t.selectmovetarget]}]}):Object(u.g)({line:[{text:"make"},{unit:[T[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"move to"},{unit:[T[(n.units[t.selectmovetarget]||{}).group],(n.units[t.selectmovetarget]||{}).owner,t.selectmovetarget]}]})]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"r",arr:{setup:{soldiers:{1:["a1","a2","a3","a5","b1","b2","c2","c3","d1","e1"],2:["c5","c6","d5","e3","e4","e6","f3","f4","f5","f6"]}},marks:["c3"],potentialMarks:["b3","b4","c4","d2","d3","d4"]}},{ruleset:"basic",board:"mini",setup:"mini",desc:"mini",code:"m",arr:{setup:{},marks:[],potentialMarks:[]}}],boards:{basic:{height:6,width:6,terrain:{throne:{1:["a1"],2:["f6"]},base:{1:[{holerect:["a1","d4","a1","b4","c3","c4","d2","d3","d4"]}],2:[{holerect:["c3","f6","f6","c3","c4","c5","d3","d4","e3"]}]}}},mini:{height:5,width:5,terrain:{throne:{1:["a1"],2:["e5"]},base:{1:["a2","a3","b1","b2","c1"],2:["c5","d4","d5","e3","e4"]}}}},setups:{basic:{soldiers:{1:[{holerect:["a1","d4","b4","c3","c4","d2","d3","d4"]}],2:[{holerect:["c3","f6","c3","c4","c5","d3","d4","e3"]}]}},mini:{soldiers:{1:["a1","a2","a3","b1","b2","c1"],2:["c5","d4","d5","e3","e4","e5"]}}}},h=y,N=n("nIA/"),S=Object(N.a)(h),R=n("USsu"),I=n("HBf3"),U=n("hsUw"),_=n("W91Y"),O={api:S,graphics:R.a,meta:I.a,demo:U.a,rules:_.a,imgsToPreload:["/images/games/zonesh/skava.jpg"]},j=n("krfZ"),k=n("Xity"),L=n("+zLY"),E=n("0IYK"),D=r.a.createElement,K=function(){var e=Object(E.c)(O.api);return D(k.d.Provider,{value:O},D(k.e.Provider,{value:e},D(j.a,null)))};K.domain="zonesh",K.mainImage="/images/games/zonesh/zonesh_active.png",K.metaDesc="Play the abstract board game Zonesh at Chessicals! Where zones dictate movement and winner!",K.metaTitle="Zonesh by Dan Troyka",K.title="Zonesh",K.preloadImages=O.imgsToPreload,K.nav=Object(L.a)(O.meta);t.default=K},ULwN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/zonesh",function(){return n("HU/V")}])},hsUw:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var i={initial:{unit1:{pos:"a1",id:"unit1",group:"soldiers",owner:1,icon:"pawn"},unit2:{pos:"a2",id:"unit2",group:"soldiers",owner:1,icon:"pawn"},unit3:{pos:"a3",id:"unit3",group:"soldiers",owner:1,icon:"pawn"},unit4:{pos:"a4",id:"unit4",group:"soldiers",owner:1,icon:"pawn"},unit5:{pos:"b1",id:"unit5",group:"soldiers",owner:1,icon:"pawn"},unit6:{pos:"b2",id:"unit6",group:"soldiers",owner:1,icon:"pawn"},unit7:{pos:"b3",id:"unit7",group:"soldiers",owner:1,icon:"pawn"},unit8:{pos:"c1",id:"unit8",group:"soldiers",owner:1,icon:"pawn"},unit9:{pos:"c2",id:"unit9",group:"soldiers",owner:1,icon:"pawn"},unit10:{pos:"d1",id:"unit10",group:"soldiers",owner:1,icon:"pawn"},unit11:{pos:"c6",id:"unit11",group:"soldiers",owner:2,icon:"pawn"},unit12:{pos:"d5",id:"unit12",group:"soldiers",owner:2,icon:"pawn"},unit13:{pos:"d6",id:"unit13",group:"soldiers",owner:2,icon:"pawn"},unit14:{pos:"e4",id:"unit14",group:"soldiers",owner:2,icon:"pawn"},unit15:{pos:"e5",id:"unit15",group:"soldiers",owner:2,icon:"pawn"},unit16:{pos:"e6",id:"unit16",group:"soldiers",owner:2,icon:"pawn"},unit17:{pos:"f3",id:"unit17",group:"soldiers",owner:2,icon:"pawn"},unit18:{pos:"f4",id:"unit18",group:"soldiers",owner:2,icon:"pawn"},unit19:{pos:"f5",id:"unit19",group:"soldiers",owner:2,icon:"pawn"},unit20:{pos:"f6",id:"unit20",group:"soldiers",owner:2,icon:"pawn"}},patches:[{unit10:{pos:["d1","e1"]}},{unit11:{pos:["c6","c5"]}},{unit7:{pos:["b3","c3"]}},{unit14:{pos:["e4","e3"]}},{unit8:{pos:["c1","d1"]}},{unit13:{pos:["d6","c6"]}},{unit4:{pos:["a4","a5"]}},{unit15:{pos:["e5","e4"]}},{unit8:{pos:["d1","d2"]}},{unit19:{pos:["f5","e5"]}},{unit8:{pos:["d2","e3"]},unit14:[{pos:"e3",x:5,y:4,id:"unit14",group:"soldiers",owner:2,icon:"pawn"},0,0]},{unit8:[{pos:"e3",x:3,y:1,id:"unit8",group:"soldiers",owner:1,icon:"pawn"},0,0],unit15:{pos:["e4","e3"]}},{unit6:{pos:["b2","b3"]}},{unit19:{pos:["e5","e4"]}}],anims:{}};t.a=i}},[["ULwN",1,0,2,3,4,5,6,7,66]]]);