_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[117],{"2njD":function(e,n,r){"use strict";r.d(n,"a",(function(){return t}));var t={initial:{},patches:[{spawn1:[{pos:"c3",id:"spawn1",group:"soldiers",owner:1,icon:"pawn"}],spawn2:[{pos:"d2",id:"spawn2",group:"soldiers",owner:0,icon:"pawn"}],spawn3:[{pos:"e1",id:"spawn3",group:"soldiers",owner:0,icon:"pawn"}],spawn4:[{pos:"b4",id:"spawn4",group:"soldiers",owner:0,icon:"pawn"}],spawn5:[{pos:"a5",id:"spawn5",group:"soldiers",owner:0,icon:"pawn"}]},{spawn2:[{pos:"d2",id:"spawn2",group:"soldiers",owner:0,icon:"pawn"},0,0],spawn3:[{pos:"e1",id:"spawn3",group:"soldiers",owner:0,icon:"pawn"},0,0],spawn4:{owner:[0,2]},spawn5:[{pos:"a5",id:"spawn5",group:"soldiers",owner:0,icon:"pawn"},0,0],spawn6:[{pos:"c5",id:"spawn6",group:"soldiers",owner:0,icon:"pawn"}],spawn7:[{pos:"a3",id:"spawn7",group:"soldiers",owner:0,icon:"pawn"}]},{spawn6:{owner:[0,1]},spawn7:[{pos:"a3",id:"spawn7",group:"soldiers",owner:0,icon:"pawn"},0,0],spawn8:[{pos:"c4",id:"spawn8",group:"soldiers",owner:0,icon:"pawn"}],spawn9:[{pos:"c2",id:"spawn9",group:"soldiers",owner:0,icon:"pawn"}],spawn10:[{pos:"c1",id:"spawn10",group:"soldiers",owner:0,icon:"pawn"}]}],anims:{1:{enterFrom:{d2:"c3",e1:"c3",b4:"c3",a5:"c3"}},2:{enterFrom:{c5:"b4",a3:"b4"}},3:{enterFrom:{c4:"c5",c2:"c5",c1:"c5"}}}};n.b=t},mW7O:function(e,n,r){"use strict";r.r(n),r.d(n,"Game",(function(){return U}));var t=r("ERkP"),i=r.n(t),o=r("rePB"),s=r("cDpP");function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){Object(o.a)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"===typeof e)return c(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,n)}(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var d,p,f,T={},A={soldiers:[["units","neutralunits","soldiers"],["units","myunits","soldiers"],["units","oppunits","soldiers"]]},h={soldiers:[["units","neutralunits","soldiers"],["units","oppunits","soldiers"],["units","myunits","soldiers"]]},w={FOOBAR:{},vertical:{},uphill:{},horisontal:{},downhill:{},winline:{}},v={gameId:"coffee",commands:{uphill:{},downhill:{},horisontal:{},vertical:{}},iconMap:{soldiers:"pawn"},setBoard:function(e){Object(s.P)(e,1),Object(s.P)(e,2),f={height:e.height,width:e.width},p=Object(s.e)(f),d=Object(s.d)(e),Object(s.A)(e)},newBattle:function(e,n){var r=Object(s.M)(e),t={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}};for(var i in r){var o,a=r[i],l=a.group,c=a.pos,d=a.owner,p=u(h[l][d]);try{for(p.s();!(o=p.n()).done;){t[o.value][c]=a}}catch(f){p.e(f)}finally{p.f()}}return v.action["startTurn_".concat(n,"_1")]({NEXTSPAWNID:1,TURN:0,UNITDATA:r,UNITLAYERS:t})},action:{startTurn_basic_1:function(e){for(var n=e.UNITLAYERS,r={units:n.units,myunits:n.oppunits,oppunits:n.myunits,neutralunits:n.neutralunits,soldiers:n.soldiers},t={marks:{},commands:{}},i=0,o=Object.keys(0===Object.keys(r.neutralunits).length?p.board:r.neutralunits);i<o.length;i++){var s=o[i];t.marks[s]="selectdrop_basic_1"}return{UNITDATA:e.UNITDATA,LINKS:t,UNITLAYERS:r,ARTIFACTS:w,MARKS:{},TURN:e.TURN+1,NEXTSPAWNID:e.NEXTSPAWNID}},startTurn_basic_2:function(e){for(var n=e.UNITLAYERS,r={units:n.units,myunits:n.oppunits,oppunits:n.myunits,neutralunits:n.neutralunits,soldiers:n.soldiers},t={marks:{},commands:{}},i=0,o=Object.keys(0===Object.keys(r.neutralunits).length?p.board:r.neutralunits);i<o.length;i++){var s=o[i];t.marks[s]="selectdrop_basic_2"}return{UNITDATA:e.UNITDATA,LINKS:t,UNITLAYERS:r,ARTIFACTS:w,MARKS:{},TURN:e.TURN,NEXTSPAWNID:e.NEXTSPAWNID}},selectdrop_basic_1:function(e,n){var r,t={FOOBAR:{},vertical:{},uphill:{},horisontal:{},downhill:{}},i={marks:{},commands:{}},o={selectdrop:n},a=e.UNITLAYERS,l=u(s.J);try{for(l.s();!(r=l.n()).done;)for(var c=r.value,p=o.selectdrop;p=d[p][c];)a.units[p]||(t[["FOOBAR","vertical","uphill","horisontal","downhill","vertical","uphill","horisontal","downhill"][c]][p]=T)}catch(f){l.e(f)}finally{l.f()}return i.commands.uphill="uphill_basic_1",i.commands.downhill="downhill_basic_1",i.commands.vertical="vertical_basic_1",i.commands.horisontal="horisontal_basic_1",{LINKS:i,ARTIFACTS:t,UNITLAYERS:a,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:o,NEXTSPAWNID:e.NEXTSPAWNID}},selectdrop_basic_2:function(e,n){var r,t={FOOBAR:{},vertical:{},uphill:{},horisontal:{},downhill:{}},i={marks:{},commands:{}},o={selectdrop:n},a=e.UNITLAYERS,l=u(s.J);try{for(l.s();!(r=l.n()).done;)for(var c=r.value,p=o.selectdrop;p=d[p][c];)a.units[p]||(t[["FOOBAR","vertical","uphill","horisontal","downhill","vertical","uphill","horisontal","downhill"][c]][p]=T)}catch(f){l.e(f)}finally{l.f()}return i.commands.uphill="uphill_basic_2",i.commands.downhill="downhill_basic_2",i.commands.vertical="vertical_basic_2",i.commands.horisontal="horisontal_basic_2",{LINKS:i,ARTIFACTS:t,UNITLAYERS:a,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:o,NEXTSPAWNID:e.NEXTSPAWNID}},uphill_basic_1:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.uphill)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var h=(i.units[c.selectdrop]||{}).id;h&&(o[h]=l(l({},o[h]),{},{owner:1}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:1}}for(var v in t.uphill){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(A[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.uphill).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_2"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}},downhill_basic_1:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.downhill)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var h=(i.units[c.selectdrop]||{}).id;h&&(o[h]=l(l({},o[h]),{},{owner:1}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:1}}for(var v in t.downhill){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(A[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.downhill).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_2"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}},horisontal_basic_1:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.horisontal)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var h=(i.units[c.selectdrop]||{}).id;h&&(o[h]=l(l({},o[h]),{},{owner:1}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:1}}for(var v in t.horisontal){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(A[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.horisontal).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_2"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}},vertical_basic_1:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.vertical)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var h=(i.units[c.selectdrop]||{}).id;h&&(o[h]=l(l({},o[h]),{},{owner:1}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:1}}for(var v in t.vertical){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(A[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.vertical).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_2"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}},uphill_basic_2:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.uphill)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var A=(i.units[c.selectdrop]||{}).id;A&&(o[A]=l(l({},o[A]),{},{owner:2}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:2}}for(var v in t.uphill){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(h[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.uphill).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_1"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}},downhill_basic_2:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.downhill)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var A=(i.units[c.selectdrop]||{}).id;A&&(o[A]=l(l({},o[A]),{},{owner:2}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:2}}for(var v in t.downhill){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(h[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.downhill).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_1"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}},horisontal_basic_2:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.horisontal)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var A=(i.units[c.selectdrop]||{}).id;A&&(o[A]=l(l({},o[A]),{},{owner:2}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:2}}for(var v in t.horisontal){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(h[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.horisontal).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_1"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}},vertical_basic_2:function(e){var n={marks:{},commands:{}},r={enterFrom:{},exitTo:{},ghosts:[]},t={FOOBAR:e.ARTIFACTS.FOOBAR,vertical:e.ARTIFACTS.vertical,uphill:e.ARTIFACTS.uphill,horisontal:e.ARTIFACTS.horisontal,downhill:e.ARTIFACTS.downhill,winline:{}},i=e.UNITLAYERS,o=l({},e.UNITDATA),a=e.NEXTSPAWNID,c=e.MARKS;for(var p in t.vertical)r.enterFrom[p]=c.selectdrop;for(var f in Object.keys(i.neutralunits).filter((function(e){return e!==c.selectdrop})).reduce((function(e,n){return e[n]=T,e}),{}))delete o[(i.units[f]||{}).id];if(i.units[c.selectdrop]){var A=(i.units[c.selectdrop]||{}).id;A&&(o[A]=l(l({},o[A]),{},{owner:2}))}else{var w="spawn"+a++;o[w]={pos:c.selectdrop,id:w,group:"soldiers",owner:2}}for(var v in t.vertical){var m="spawn"+a++;o[m]={pos:v,id:m,group:"soldiers",owner:0}}for(var b in i={units:{},myunits:{},oppunits:{},neutralunits:{},soldiers:{}},o){var y,I=o[b],S=I.group,R=I.pos,g=I.owner,N=u(h[S][g]);try{for(N.s();!(y=N.n()).done;){i[y.value][R]=I}}catch(P){N.e(P)}finally{N.f()}}var O=i.myunits;for(var _ in i.myunits){var j,F=u(s.J);try{for(F.s();!(j=F.n()).done;){var k=j.value,U=[],E="faux";for(d.faux[k]=_;(E=d[E][k])&&O[E];)U.push(E);for(var D=U.length,C=0;C<D;C++)E=U[C],D>3&&(t.winline[E]=T)}}catch(P){F.e(P)}finally{F.f()}}return 0===Object.keys(t.winline).length&&0===Object.keys(t.vertical).length||(0!==Object.keys(t.winline).length?(n.endGame="win",n.endedBy="madeline",n.endMarks=Object.keys(t.winline)):n.endTurn="startTurn_basic_1"),{LINKS:n,MARKS:{},ARTIFACTS:t,TURN:e.TURN,UNITDATA:o,UNITLAYERS:i,NEXTSPAWNID:a,anim:r}}},instruction:{startTurn_basic_1:function(e){var n=e.UNITLAYERS;return 0===Object.keys(n.neutralunits).length?Object(s.g)({line:[{select:"Select"},{text:"any square to place the first"},{unittype:["pawn",1]},{text:"of the game"}]}):Object(s.g)({line:[{select:"Select"},{unittype:["pawn",0]},{text:"to turn into"},{unittype:["pawn",1]}]})},uphill_basic_1:function(){return Object(s.l)(1)},downhill_basic_1:function(){return Object(s.l)(1)},horisontal_basic_1:function(){return Object(s.l)(1)},vertical_basic_1:function(){return Object(s.l)(1)},selectdrop_basic_1:function(e){var n=e.ARTIFACTS;return Object(s.g)({line:[{text:"Press"},Object(s.g)({line:[0!==Object.keys(n.uphill).length?{command:"uphill"}:void 0,0!==Object.keys(n.downhill).length?{command:"downhill"}:void 0,0!==Object.keys(n.vertical).length?{command:"vertical"}:void 0,0!==Object.keys(n.horisontal).length?{command:"horisontal"}:void 0].filter((function(e){return!!e})).reduce((function(e,n,r,t){return e.push(n),r===t.length-2?e.push({text:" or "}):r<t.length-2&&e.push({text:", "}),e}),[])}),{text:"to give"},{player:2},{text:"placing options in that direction"}]})},startTurn_basic_2:function(e){var n=e.UNITLAYERS;return 0===Object.keys(n.neutralunits).length?Object(s.g)({line:[{select:"Select"},{text:"any square to place the first"},{unittype:["pawn",2]},{text:"of the game"}]}):Object(s.g)({line:[{select:"Select"},{unittype:["pawn",0]},{text:"to turn into"},{unittype:["pawn",2]}]})},uphill_basic_2:function(){return Object(s.l)(2)},downhill_basic_2:function(){return Object(s.l)(2)},horisontal_basic_2:function(){return Object(s.l)(2)},vertical_basic_2:function(){return Object(s.l)(2)},selectdrop_basic_2:function(e){var n=e.ARTIFACTS;return Object(s.g)({line:[{text:"Press"},Object(s.g)({line:[0!==Object.keys(n.uphill).length?{command:"uphill"}:void 0,0!==Object.keys(n.downhill).length?{command:"downhill"}:void 0,0!==Object.keys(n.vertical).length?{command:"vertical"}:void 0,0!==Object.keys(n.horisontal).length?{command:"horisontal"}:void 0].filter((function(e){return!!e})).reduce((function(e,n,r,t){return e.push(n),r===t.length-2?e.push({text:" or "}):r<t.length-2&&e.push({text:", "}),e}),[])}),{text:"to give"},{player:1},{text:"placing options in that direction"}]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"z",arr:{marks:[],potentialMarks:["b2","b3","b4","b5"],setup:{soldiers:{0:["b2","b3","b4","b5"],1:["d1","c3","e5"],2:["b1","e3","d4"]}}}}],boards:{basic:{height:5,width:5,terrain:{}}},setups:{basic:{}}},m=v,b=r("nIA/"),y=Object(b.a)(m),I=r("4fJx"),S=r("NJkx"),R=r("2njD"),g=r("HaDk"),N={api:y,graphics:I.a,meta:S.a,demo:R.b,rules:g.a,imgsToPreload:["/images/games/coffee/tokyo.jpg","/images/games/coffee/nestor.jpg"]},O=r("krfZ"),_=r("Xity"),j=r("+zLY"),F=r("0IYK"),k=i.a.createElement,U=function(){var e=Object(F.c)(N.api);return k(_.d.Provider,{value:N},k(_.e.Provider,{value:e},k(O.a,null)))};U.domain="coffee",U.mainImage="/images/games/coffee/coffee_active.png",U.metaDesc="Play the abstract board game Coffee at Chessicals! Dictate your opponent's options!",U.metaTitle="Coffee by N\xe9stor Romeral Andr\xe9s",U.title="Coffee",U.preloadImages=N.imgsToPreload,U.nav=Object(j.a)(N.meta);n.default=U},npgh:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/coffee",function(){return r("mW7O")}])}},[["npgh",1,0,2,3,4,5,6,7,50]]]);