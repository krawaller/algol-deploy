_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[153],{LtZE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/go_with_the_floe",function(){return n("ev4l")}])},N6Cr:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var s={initial:{unit1:{pos:"b2",id:"unit1",group:"seals",owner:1,icon:"king"},unit2:{pos:"b7",id:"unit2",group:"seals",owner:1,icon:"king"},unit3:{pos:"g2",id:"unit3",group:"bears",owner:2,icon:"queen"},unit4:{pos:"g7",id:"unit4",group:"bears",owner:2,icon:"queen"}},patches:[{unit2:{pos:["b7","d5"]},spawn1:[{pos:"c6",id:"spawn1",group:"holes",owner:0,icon:"pawn"}],spawn2:[{pos:"b7",id:"spawn2",group:"holes",owner:0,icon:"pawn"}]},{unit4:{pos:["g7","e5"]},spawn3:[{pos:"f6",id:"spawn3",group:"holes",owner:0,icon:"pawn"}],spawn4:[{pos:"g7",id:"spawn4",group:"holes",owner:0,icon:"pawn"}]},{unit2:{pos:["d5","d3"]},spawn5:[{pos:"d4",id:"spawn5",group:"holes",owner:0,icon:"pawn"}],spawn6:[{pos:"d5",id:"spawn6",group:"holes",owner:0,icon:"pawn"}]},{unit4:{pos:["e5","c3"]},spawn7:[{pos:"e5",id:"spawn7",group:"holes",owner:0,icon:"pawn"}]},{unit2:{pos:["d3","e4"]},spawn8:[{pos:"d3",id:"spawn8",group:"holes",owner:0,icon:"pawn"}]},{unit1:[{pos:"b2",x:2,y:2,id:"unit1",group:"seals",owner:1,icon:"king"},0,0],unit4:[{pos:"c3",x:7,y:7,id:"unit4",group:"bears",owner:2,icon:"queen"},0,0]},{unit2:{pos:["e4","c4"]},spawn9:[{pos:"e4",id:"spawn9",group:"holes",owner:0,icon:"pawn"}]},{unit3:{pos:["g2","e2"]},spawn10:[{pos:"f2",id:"spawn10",group:"holes",owner:0,icon:"pawn"}],spawn11:[{pos:"g2",id:"spawn11",group:"holes",owner:0,icon:"pawn"}]},{unit2:{pos:["c4","c5"]},spawn12:[{pos:"c4",id:"spawn12",group:"holes",owner:0,icon:"pawn"}]},{unit3:{pos:["e2","d2"]},spawn13:[{pos:"e2",id:"spawn13",group:"holes",owner:0,icon:"pawn"}]},{unit2:{pos:["c5","b4"]},spawn14:[{pos:"c5",id:"spawn14",group:"holes",owner:0,icon:"pawn"}]},{unit3:{pos:["d2","c3"]},spawn15:[{pos:"d2",id:"spawn15",group:"holes",owner:0,icon:"pawn"}]},{unit2:{pos:["b4","d6"]},spawn16:[{pos:"b4",id:"spawn16",group:"holes",owner:0,icon:"pawn"}]}],anims:{6:{exitTo:{c3:"b2"}}}};t.a=s},ev4l:function(e,t,n){"use strict";n.r(t),n.d(t,"Game",(function(){return D}));var s=n("ERkP"),r=n.n(s),a=n("rePB"),o=n("cDpP");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,r=function(){};return{s:r,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var p,m,T,A,g={},f={seals:"king",bears:"queen",holes:"pawn"},b={seals:[["units","seals"],["units","myunits","seals"],["units","oppunits","seals"]],bears:[["units","bears"],["units","myunits","bears"],["units","oppunits","bears"]],holes:[["units","holes"],["units","myunits","holes"],["units","oppunits","holes"]]},v={seals:[["units","seals"],["units","oppunits","seals"],["units","myunits","seals"]],bears:[["units","bears"],["units","oppunits","bears"],["units","myunits","bears"]],holes:[["units","holes"],["units","oppunits","holes"],["units","myunits","holes"]]},d={eattargets:{},movetargets:{},jumptargets:{},canmove:{},cracks:{}},N={gameId:"gowiththefloe",commands:{move:{},jump:{},eat:{}},iconMap:f,setBoard:function(e){Object(o.P)(e,1),Object(o.P)(e,2),A={height:e.height,width:e.width},T=Object(o.e)(A),p=Object(o.d)(e),m=Object(o.A)(e)},newBattle:function(e,t){var n=Object(o.M)(e),s={units:{},myunits:{},oppunits:{},seals:{},bears:{},holes:{}};for(var r in n){var a,i=n[r],c=i.group,l=i.pos,p=i.owner,m=u(v[c][p]);try{for(m.s();!(a=m.n()).done;){s[a.value][l]=i}}catch(T){m.e(T)}finally{m.f()}}return N.action["startTurn_".concat(t,"_1")]({NEXTSPAWNID:1,TURN:0,UNITDATA:n,UNITLAYERS:s})},action:{startTurn_basic_1:function(e){for(var t=e.UNITLAYERS,n={units:t.units,myunits:t.oppunits,oppunits:t.myunits,seals:t.seals,bears:t.bears,holes:t.holes},s={marks:{},commands:{}},r=0,a=Object.keys(n.myunits);r<a.length;r++){var o=a[r];s.marks[o]="selectunit_basic_1"}return{UNITDATA:e.UNITDATA,LINKS:s,UNITLAYERS:n,ARTIFACTS:d,MARKS:{},TURN:e.TURN+1,NEXTSPAWNID:e.NEXTSPAWNID}},startTurn_basic_2:function(e){for(var t=e.UNITLAYERS,n={units:t.units,myunits:t.oppunits,oppunits:t.myunits,seals:t.seals,bears:t.bears,holes:t.holes},s={marks:{},commands:{}},r=0,a=Object.keys(n.myunits);r<a.length;r++){var o=a[r];s.marks[o]="selectunit_basic_2"}return{UNITDATA:e.UNITDATA,LINKS:s,UNITLAYERS:n,ARTIFACTS:d,MARKS:{},TURN:e.TURN,NEXTSPAWNID:e.NEXTSPAWNID}},selectunit_basic_1:function(e,t){var n,s={movetargets:{},jumptargets:{}},r={marks:{},commands:{}},a={selectunit:t},i=e.UNITLAYERS,c=i.units,l=u(o.J);try{for(l.s();!(n=l.n()).done;)for(var m=n.value,A=a.selectunit,f=0;f<2&&(A=p[A][m])&&!c[A];)f++,s.movetargets[A]={dir:m}}catch(E){l.e(E)}finally{l.f()}var b,v=i.holes,d=Object.keys(T.board).filter((function(e){return!i.units.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}),N=u(o.J);try{for(N.s();!(b=N.n()).done;){for(var h=b.value,S=[],I=a.selectunit,w=0;!((I=p[I][h])?d[I]?"hitblock":v[I]?1===w?"reachedmax":null:"nomoresteps":"outofbounds");)S.push(I),w++;var y=S.length;d[I]&&1===y&&(s.jumptargets[I]=g)}}catch(E){N.e(E)}finally{N.f()}for(var R=0,j=Object.keys(s.movetargets);R<j.length;R++){var _=j[R];r.marks[_]="selectmovetarget_basic_1"}for(var k=0,O=Object.keys(s.jumptargets);k<O.length;k++){var U=O[k];r.marks[U]="selectjumptarget_basic_1"}return{LINKS:r,ARTIFACTS:s,UNITLAYERS:i,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:a,NEXTSPAWNID:e.NEXTSPAWNID}},selectmovetarget_basic_1:function(e,t){for(var n={movetargets:e.ARTIFACTS.movetargets,jumptargets:e.ARTIFACTS.jumptargets,cracks:{}},s={marks:{},commands:{}},r={selectunit:e.MARKS.selectunit,selectmovetarget:t},o=Object(a.a)({},r.selectunit,1),i=r.selectmovetarget;(i=p[i][m[(n.movetargets[r.selectmovetarget]||{}).dir][5]])&&!o[i];)n.cracks[i]=g;return o[i]&&(n.cracks[i]=g),s.commands.move="move_basic_1",{LINKS:s,ARTIFACTS:n,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},selectjumptarget_basic_1:function(e,t){var n={marks:{},commands:{}};return n.commands.jump="jump_basic_1",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectjumptarget:t},NEXTSPAWNID:e.NEXTSPAWNID}},selectunit_basic_2:function(e,t){var n,s={movetargets:{},jumptargets:{},eattargets:{}},r={marks:{},commands:{}},a={selectunit:t},i=e.UNITLAYERS,c=i.units,l=u(o.J);try{for(l.s();!(n=l.n()).done;)for(var m=n.value,A=a.selectunit,f=0;f<2&&(A=p[A][m])&&!c[A];)f++,s.movetargets[A]={dir:m}}catch(F){l.e(F)}finally{l.f()}var b,v=i.holes,d=Object.keys(T.board).filter((function(e){return!i.units.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}),N=u(o.J);try{for(N.s();!(b=N.n()).done;){for(var h=b.value,S=[],I=a.selectunit,w=0;!((I=p[I][h])?d[I]?"hitblock":v[I]?1===w?"reachedmax":null:"nomoresteps":"outofbounds");)S.push(I),w++;var y=S.length;d[I]&&1===y&&(s.jumptargets[I]=g)}}catch(F){N.e(F)}finally{N.f()}var R,j=p[a.selectunit],_=u(o.J);try{for(_.s();!(R=_.n()).done;){var k=j[R.value];k&&i.seals[k]&&(s.eattargets[k]=g)}}catch(F){_.e(F)}finally{_.f()}for(var O=0,U=Object.keys(s.movetargets);O<U.length;O++){var E=U[O];r.marks[E]="selectmovetarget_basic_2"}for(var P=0,D=Object.keys(s.jumptargets);P<D.length;P++){var L=D[P];r.marks[L]="selectjumptarget_basic_2"}for(var K=0,C=Object.keys(s.eattargets);K<C.length;K++){var M=C[K];r.marks[M]="selecteattarget_basic_2"}return{LINKS:r,ARTIFACTS:s,UNITLAYERS:i,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:a,NEXTSPAWNID:e.NEXTSPAWNID}},selectmovetarget_basic_2:function(e,t){for(var n={movetargets:e.ARTIFACTS.movetargets,jumptargets:e.ARTIFACTS.jumptargets,eattargets:e.ARTIFACTS.eattargets,cracks:{}},s={marks:{},commands:{}},r={selectunit:e.MARKS.selectunit,selectmovetarget:t},o=Object(a.a)({},r.selectunit,1),i=r.selectmovetarget;(i=p[i][m[(n.movetargets[r.selectmovetarget]||{}).dir][5]])&&!o[i];)n.cracks[i]=g;return o[i]&&(n.cracks[i]=g),s.commands.move="move_basic_2",{LINKS:s,ARTIFACTS:n,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},selectjumptarget_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.jump="jump_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectjumptarget:t},NEXTSPAWNID:e.NEXTSPAWNID}},selecteattarget_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.eat="eat_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selecteattarget:t},NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},move_basic_1:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,jumptargets:e.ARTIFACTS.jumptargets,cracks:e.ARTIFACTS.cracks,canmove:{}},s=e.UNITLAYERS,r=c({},e.UNITDATA),a=e.NEXTSPAWNID,i=e.MARKS,l=(s.units[i.selectunit]||{}).id;for(var m in l&&(r[l]=c(c({},r[l]),{},{pos:i.selectmovetarget})),n.cracks){var A="spawn"+a++;r[A]={pos:m,id:A,group:"holes",owner:0}}for(var f in s={units:{},myunits:{},oppunits:{},seals:{},bears:{},holes:{}},r){var v,d=r[f],N=d.group,h=d.pos,S=d.owner,I=u(b[N][S]);try{for(I.s();!(v=I.n()).done;){var w=v.value;s[w][h]=d}}catch(P){I.e(P)}finally{I.f()}}for(var y in s.seals){var R,j=u(o.J);try{for(j.s();!(R=j.n()).done;){for(var _=R.value,k=y,O=Object.keys(T.board).filter((function(e){return!s.holes.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}),U=0,E=0;E<2&&(k=p[k][_]);)U+=O[k]?1:0,E++;k=y,U>0&&(n.canmove[k]=g)}}catch(P){j.e(P)}finally{j.f()}}return 0===Object.keys(s.seals).length?(t.endGame="lose",t.endedBy="sealseaten"):Object.keys(n.canmove).length!==Object.keys(s.seals).length?(t.endGame="win",t.endedBy="safeseal",t.endMarks=Object.keys(Object.keys(s.seals).filter((function(e){return!n.canmove.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}))):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:a}},jump_basic_1:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,jumptargets:e.ARTIFACTS.jumptargets,canmove:{}},s=e.UNITLAYERS,r=c({},e.UNITDATA),a=e.NEXTSPAWNID,i=e.MARKS,l=(s.units[i.selectunit]||{}).id;l&&(r[l]=c(c({},r[l]),{},{pos:i.selectjumptarget}));var m="spawn"+a++;for(var A in r[m]={pos:i.selectunit,id:m,group:"holes",owner:0},s={units:{},myunits:{},oppunits:{},seals:{},bears:{},holes:{}},r){var f,v=r[A],d=v.group,N=v.pos,h=v.owner,S=u(b[d][h]);try{for(S.s();!(f=S.n()).done;){var I=f.value;s[I][N]=v}}catch(E){S.e(E)}finally{S.f()}}for(var w in s.seals){var y,R=u(o.J);try{for(R.s();!(y=R.n()).done;){for(var j=y.value,_=w,k=Object.keys(T.board).filter((function(e){return!s.holes.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}),O=0,U=0;U<2&&(_=p[_][j]);)O+=k[_]?1:0,U++;_=w,O>0&&(n.canmove[_]=g)}}catch(E){R.e(E)}finally{R.f()}}return 0===Object.keys(s.seals).length?(t.endGame="lose",t.endedBy="sealseaten"):Object.keys(n.canmove).length!==Object.keys(s.seals).length?(t.endGame="win",t.endedBy="safeseal",t.endMarks=Object.keys(Object.keys(s.seals).filter((function(e){return!n.canmove.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}))):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:a}},move_basic_2:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,jumptargets:e.ARTIFACTS.jumptargets,eattargets:e.ARTIFACTS.eattargets,cracks:e.ARTIFACTS.cracks,canmove:{}},s=e.UNITLAYERS,r=c({},e.UNITDATA),a=e.NEXTSPAWNID,i=e.MARKS,l=(s.units[i.selectunit]||{}).id;for(var m in l&&(r[l]=c(c({},r[l]),{},{pos:i.selectmovetarget})),n.cracks){var A="spawn"+a++;r[A]={pos:m,id:A,group:"holes",owner:0}}for(var f in s={units:{},myunits:{},oppunits:{},seals:{},bears:{},holes:{}},r){var b,d=r[f],N=d.group,h=d.pos,S=d.owner,I=u(v[N][S]);try{for(I.s();!(b=I.n()).done;){var w=b.value;s[w][h]=d}}catch(P){I.e(P)}finally{I.f()}}for(var y in s.seals){var R,j=u(o.J);try{for(j.s();!(R=j.n()).done;){for(var _=R.value,k=y,O=Object.keys(T.board).filter((function(e){return!s.holes.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}),U=0,E=0;E<2&&(k=p[k][_]);)U+=O[k]?1:0,E++;k=y,U>0&&(n.canmove[k]=g)}}catch(P){j.e(P)}finally{j.f()}}return 0===Object.keys(s.seals).length?(t.endGame="win",t.endedBy="sealseaten"):Object.keys(n.canmove).length!==Object.keys(s.seals).length?(t.endGame="lose",t.endedBy="safeseal",t.endMarks=Object.keys(Object.keys(s.seals).filter((function(e){return!n.canmove.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}))):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:a}},jump_basic_2:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,jumptargets:e.ARTIFACTS.jumptargets,eattargets:e.ARTIFACTS.eattargets,canmove:{}},s=e.UNITLAYERS,r=c({},e.UNITDATA),a=e.NEXTSPAWNID,i=e.MARKS,l=(s.units[i.selectunit]||{}).id;l&&(r[l]=c(c({},r[l]),{},{pos:i.selectjumptarget}));var m="spawn"+a++;for(var A in r[m]={pos:i.selectunit,id:m,group:"holes",owner:0},s={units:{},myunits:{},oppunits:{},seals:{},bears:{},holes:{}},r){var f,b=r[A],d=b.group,N=b.pos,h=b.owner,S=u(v[d][h]);try{for(S.s();!(f=S.n()).done;){var I=f.value;s[I][N]=b}}catch(E){S.e(E)}finally{S.f()}}for(var w in s.seals){var y,R=u(o.J);try{for(R.s();!(y=R.n()).done;){for(var j=y.value,_=w,k=Object.keys(T.board).filter((function(e){return!s.holes.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}),O=0,U=0;U<2&&(_=p[_][j]);)O+=k[_]?1:0,U++;_=w,O>0&&(n.canmove[_]=g)}}catch(E){R.e(E)}finally{R.f()}}return 0===Object.keys(s.seals).length?(t.endGame="win",t.endedBy="sealseaten"):Object.keys(n.canmove).length!==Object.keys(s.seals).length?(t.endGame="lose",t.endedBy="safeseal",t.endMarks=Object.keys(Object.keys(s.seals).filter((function(e){return!n.canmove.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}))):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:a}},eat_basic_2:function(e){var t={marks:{},commands:{}},n={enterFrom:{},exitTo:{},ghosts:[]},s={movetargets:e.ARTIFACTS.movetargets,jumptargets:e.ARTIFACTS.jumptargets,eattargets:e.ARTIFACTS.eattargets,canmove:{}},r=e.UNITLAYERS,a=c({},e.UNITDATA),i=e.MARKS;for(var l in n.exitTo[i.selectunit]=i.selecteattarget,delete a[(r.units[i.selectunit]||{}).id],delete a[(r.units[i.selecteattarget]||{}).id],r={units:{},myunits:{},oppunits:{},seals:{},bears:{},holes:{}},a){var m,A=a[l],f=A.group,b=A.pos,d=A.owner,N=u(v[f][d]);try{for(N.s();!(m=N.n()).done;){var h=m.value;r[h][b]=A}}catch(O){N.e(O)}finally{N.f()}}for(var S in r.seals){var I,w=u(o.J);try{for(w.s();!(I=w.n()).done;){for(var y=I.value,R=S,j=Object.keys(T.board).filter((function(e){return!r.holes.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}),_=0,k=0;k<2&&(R=p[R][y]);)_+=j[R]?1:0,k++;R=S,_>0&&(s.canmove[R]=g)}}catch(O){w.e(O)}finally{w.f()}}return 0===Object.keys(r.seals).length?(t.endGame="win",t.endedBy="sealseaten"):Object.keys(s.canmove).length!==Object.keys(r.seals).length?(t.endGame="lose",t.endedBy="safeseal",t.endMarks=Object.keys(Object.keys(r.seals).filter((function(e){return!s.canmove.hasOwnProperty(e)})).reduce((function(e,t){return e[t]=g,e}),{}))):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:s,TURN:e.TURN,UNITDATA:a,UNITLAYERS:r,NEXTSPAWNID:e.NEXTSPAWNID,anim:n}}},instruction:{startTurn_basic_1:function(e){return Object(o.g)({line:[{select:"Select"},{unittype:["king",1]},{text:"to move"}]})},move_basic_1:function(){return Object(o.l)(1)},jump_basic_1:function(){return Object(o.l)(1)},selectunit_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(o.g)({line:[{select:"Select"},{text:"where to move"},{unit:[f[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]}]})},selectmovetarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(o.g)({line:[{text:"Press"},{command:"move"},{text:"to move the"},{unit:[f[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"to"},{pos:t.selectmovetarget}]})},selectjumptarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(o.g)({line:[{text:"Press"},{command:"jump"},{text:"to make"},{unit:[f[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"jump to"},{pos:t.selectjumptarget}]})},startTurn_basic_2:function(e){return Object(o.g)({line:[{select:"Select"},{unittype:["queen",2]},{text:"to move"}]})},move_basic_2:function(){return Object(o.l)(2)},jump_basic_2:function(){return Object(o.l)(2)},eat_basic_2:function(){return Object(o.l)(2)},selectunit_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(o.g)({line:[{select:"Select"},{text:"where to move"},{unit:[f[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},Object(o.g)({line:[{text:"or a neighbouring"},{unittype:["king",1]},{text:"to eat"}]})]})},selectmovetarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(o.g)({line:[{text:"Press"},{command:"move"},{text:"to move the"},{unit:[f[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"to"},{pos:t.selectmovetarget}]})},selectjumptarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(o.g)({line:[{text:"Press"},{command:"jump"},{text:"to make"},{unit:[f[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"jump to"},{pos:t.selectjumptarget}]})},selecteattarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(o.g)({line:[{text:"Press"},{command:"eat"},{text:"to make"},{unit:[f[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"consume"},{unit:[f[(n.units[t.selecteattarget]||{}).group],(n.units[t.selecteattarget]||{}).owner,t.selecteattarget]},{text:", removing both units from the battle"}]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"s",arr:{marks:["c7"],potentialMarks:["a5","c5","e5","c6","d6","c8","d8"],setup:{holes:{0:["b2","g2","c3","f3","b4","c4","d4","b6","b7","d7","e7","f7","g7"]},seals:{1:["d2","b5"]},bears:{2:["e4","c7"]}}}}],boards:{basic:{height:8,width:8,holes:["a1","a2","a7","a8","b1","b8","g1","g8","h1","h2","h7","h8"]}},setups:{basic:{seals:{1:["b2","b7"]},bears:{2:["g2","g7"]}}}},h=N,S=n("nIA/"),I=Object(S.a)(h),w=n("zBTg"),y=n("rKr+"),R=n("N6Cr"),j=n("NWxk"),_={api:I,graphics:w.a,meta:y.a,demo:R.a,rules:j.a,imgsToPreload:["/images/games/gowiththefloe/gowiththefloe.jpg"]},k=n("krfZ"),O=n("Xity"),U=n("+zLY"),E=n("0IYK"),P=r.a.createElement,D=function(){var e=Object(E.c)(_.api);return P(O.d.Provider,{value:_},P(O.e.Provider,{value:e},P(k.a,null)))};D.domain="gowiththefloe",D.mainImage="/images/games/gowiththefloe/gowiththefloe_active.png",D.metaDesc="Play the abstract board game Go with the floe at Chessicals! Can the seals escape the polar bears?",D.metaTitle="Go with the floe by Phillip L. Leduc",D.title="Go with the floe",D.preloadImages=_.imgsToPreload,D.nav=Object(U.a)(_.meta);t.default=D}},[["LtZE",1,0,2,3,4,5,6,7,14]]]);