_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[84],{"08Sv":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={initial:{unit1:{pos:"a1",id:"unit1",group:"queens",owner:1,icon:"queen"},unit2:{pos:"c1",id:"unit2",group:"queens",owner:1,icon:"queen"},unit3:{pos:"e1",id:"unit3",group:"queens",owner:1,icon:"queen"},unit4:{pos:"b5",id:"unit4",group:"queens",owner:1,icon:"queen"},unit5:{pos:"d5",id:"unit5",group:"queens",owner:1,icon:"queen"},unit6:{pos:"a3",id:"unit6",group:"queens",owner:1,icon:"queen"},unit7:{pos:"a5",id:"unit7",group:"queens",owner:2,icon:"queen"},unit8:{pos:"c5",id:"unit8",group:"queens",owner:2,icon:"queen"},unit9:{pos:"e5",id:"unit9",group:"queens",owner:2,icon:"queen"},unit10:{pos:"b1",id:"unit10",group:"queens",owner:2,icon:"queen"},unit11:{pos:"d1",id:"unit11",group:"queens",owner:2,icon:"queen"},unit12:{pos:"e3",id:"unit12",group:"queens",owner:2,icon:"queen"}},patches:[{unit3:{pos:["e1","c3"]}},{unit10:{pos:["b1","b3"]}},{unit5:{pos:["d5","c4"]}},{unit9:{pos:["e5","d5"]}}],anims:{}};t.b=r},"4acm":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/all_queens_chess",function(){return n("wSf/")}])},"wSf/":function(e,t,n){"use strict";n.r(t),n.d(t,"Game",(function(){return E}));var r=n("ERkP"),i=n.n(r),s=n("rePB"),u=n("cDpP");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){o=!0,s=e},f:function(){try{u||null==n.return||n.return()}finally{if(o)throw s}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,T,v={},p={queens:"queen"},f={queens:[["units"],["units","myunits"],["units","oppunits"]]},A={queens:[["units"],["units","oppunits"],["units","myunits"]]},b={movetargets:{},winline:{}},d={gameId:"allqueenschess",commands:{move:{}},iconMap:p,setBoard:function(e){Object(u.O)(e,1),Object(u.O)(e,2),T={height:e.height,width:e.width},Object(u.e)(T),m=Object(u.d)(e),Object(u.z)(e)},newBattle:function(e,t){var n=Object(u.L)(e),r={units:{},myunits:{},oppunits:{}};for(var i in n){var s,o=n[i],a=o.group,l=o.pos,m=o.owner,T=c(A[a][m]);try{for(T.s();!(s=T.n()).done;){r[s.value][l]=o}}catch(v){T.e(v)}finally{T.f()}}return d.action["startTurn_".concat(t,"_1")]({TURN:0,UNITDATA:n,UNITLAYERS:r})},action:{startTurn_basic_1:function(e){for(var t=e.UNITLAYERS,n={units:t.units,myunits:t.oppunits,oppunits:t.myunits},r={marks:{},commands:{}},i=0,s=Object.keys(n.myunits);i<s.length;i++){var u=s[i];r.marks[u]="selectunit_basic_1"}return{UNITDATA:e.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:b,MARKS:{},TURN:e.TURN+1}},startTurn_basic_2:function(e){for(var t=e.UNITLAYERS,n={units:t.units,myunits:t.oppunits,oppunits:t.myunits},r={marks:{},commands:{}},i=0,s=Object.keys(n.myunits);i<s.length;i++){var u=s[i];r.marks[u]="selectunit_basic_2"}return{UNITDATA:e.UNITDATA,LINKS:r,UNITLAYERS:n,ARTIFACTS:b,MARKS:{},TURN:e.TURN}},selectunit_basic_1:function(e,t){var n,r={movetargets:{}},i={marks:{},commands:{}},s={selectunit:t},o=e.UNITLAYERS,a=o.units,l=c(u.I);try{for(l.s();!(n=l.n()).done;)for(var T=n.value,p=s.selectunit;(p=m[p][T])&&!a[p];)r.movetargets[p]=v}catch(d){l.e(d)}finally{l.f()}for(var f=0,A=Object.keys(r.movetargets);f<A.length;f++){var b=A[f];i.marks[b]="selectmovetarget_basic_1"}return{LINKS:i,ARTIFACTS:r,UNITLAYERS:o,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:s}},selectmovetarget_basic_1:function(e,t){var n={marks:{},commands:{}};return n.commands.move="move_basic_1",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectmovetarget:t}}},selectunit_basic_2:function(e,t){var n,r={movetargets:{}},i={marks:{},commands:{}},s={selectunit:t},o=e.UNITLAYERS,a=o.units,l=c(u.I);try{for(l.s();!(n=l.n()).done;)for(var T=n.value,p=s.selectunit;(p=m[p][T])&&!a[p];)r.movetargets[p]=v}catch(d){l.e(d)}finally{l.f()}for(var f=0,A=Object.keys(r.movetargets);f<A.length;f++){var b=A[f];i.marks[b]="selectmovetarget_basic_2"}return{LINKS:i,ARTIFACTS:r,UNITLAYERS:o,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:s}},selectmovetarget_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.move="move_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectmovetarget:t}}},move_basic_1:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,winline:{}},r=e.UNITLAYERS,i=a({},e.UNITDATA),s=e.MARKS,o=(r.units[s.selectunit]||{}).id;for(var l in o&&(i[o]=a(a({},i[o]),{},{pos:s.selectmovetarget})),r={units:{},myunits:{},oppunits:{}},i){var T,p=i[l],A=p.group,b=p.pos,d=p.owner,g=c(f[A][d]);try{for(g.s();!(T=g.n()).done;){r[T.value][b]=p}}catch(O){g.e(O)}finally{g.f()}}var y=r.myunits;for(var S in r.myunits){var I,N=c(u.I);try{for(N.s();!(I=N.n()).done;){var R=I.value,w=[],_="faux";for(m.faux[R]=S;(_=m[_][R])&&y[_];)w.push(_);for(var h=w.length,U=0;U<h;U++)_=w[U],h>3&&(n.winline[_]=v)}}catch(O){N.e(O)}finally{N.f()}}return 0!==Object.keys(n.winline).length?(t.endGame="win",t.endedBy="winline",t.endMarks=Object.keys(n.winline)):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:i,UNITLAYERS:r}},move_basic_2:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,winline:{}},r=e.UNITLAYERS,i=a({},e.UNITDATA),s=e.MARKS,o=(r.units[s.selectunit]||{}).id;for(var l in o&&(i[o]=a(a({},i[o]),{},{pos:s.selectmovetarget})),r={units:{},myunits:{},oppunits:{}},i){var T,p=i[l],f=p.group,b=p.pos,d=p.owner,g=c(A[f][d]);try{for(g.s();!(T=g.n()).done;){r[T.value][b]=p}}catch(O){g.e(O)}finally{g.f()}}var y=r.myunits;for(var S in r.myunits){var I,N=c(u.I);try{for(N.s();!(I=N.n()).done;){var R=I.value,w=[],_="faux";for(m.faux[R]=S;(_=m[_][R])&&y[_];)w.push(_);for(var h=w.length,U=0;U<h;U++)_=w[U],h>3&&(n.winline[_]=v)}}catch(O){N.e(O)}finally{N.f()}}return 0!==Object.keys(n.winline).length?(t.endGame="win",t.endedBy="winline",t.endMarks=Object.keys(n.winline)):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:i,UNITLAYERS:r}}},instruction:{startTurn_basic_1:function(e){return Object(u.g)({line:[{text:"Select which"},{unittype:["queen",1]},{text:"to move"}]})},move_basic_1:function(){return Object(u.l)(1)},selectunit_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Select where to move"},{unit:[p[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]}]})},selectmovetarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"move"},{text:"to move"},{unit:[p[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"to"},{pos:t.selectmovetarget}]})},startTurn_basic_2:function(e){return Object(u.g)({line:[{text:"Select which"},{unittype:["queen",2]},{text:"to move"}]})},move_basic_2:function(){return Object(u.l)(2)},selectunit_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Select where to move"},{unit:[p[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]}]})},selectmovetarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"move"},{text:"to move"},{unit:[p[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"to"},{pos:t.selectmovetarget}]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"r",arr:{setup:{queens:{1:["a3","b5","c1","c4","d4","d5"],2:["b1","c3","c5","d3","e3"]}},marks:["b1"],potentialMarks:["a1","a2","c2","b2","b3","b4"]}}],boards:{basic:{height:5,width:5,terrain:{}}},setups:{basic:{queens:{1:["a1","c1","e1","b5","d5","a3"],2:["a5","c5","e5","b1","d1","e3"]}}}},g=d,y=n("nIA/"),S=Object(y.a)(g),I=n("WcuC"),N=n("zTsl"),R=n("08Sv"),w=n("s/aT"),_={api:S,graphics:I.a,meta:N.a,demo:R.b,rules:w.a,imgsToPreload:["/images/games/allqueenschess/blackwin.jpg","/images/games/allqueenschess/ducksinarow.jpg"]},h=n("krfZ"),U=n("Xity"),O=n("+zLY"),j=n("0IYK"),q=i.a.createElement,E=function(){var e=Object(j.c)(_.api);return q(U.d.Provider,{value:_},q(U.e.Provider,{value:e},q(h.a,null)))};E.domain="allqueenschess",E.mainImage="/images/games/allqueenschess/allqueenschess_active.png",E.metaDesc="Play the abstract board game All Queens Chess at Chessicals! Everyone's a queen!",E.metaTitle="All Queens Chess by Elliot Rudell",E.title="All Queens Chess",E.preloadImages=_.imgsToPreload,E.nav=Object(O.a)(_.meta);t.default=E}},[["4acm",1,0,2,3,4,5,6,7,16]]]);