_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[156],{"9eW4":function(e,t,n){"use strict";n.r(t),n.d(t,"Game",(function(){return F}));var i=n("ERkP"),r=n.n(i),s=n("rePB"),o=n("ODXe"),a=n("cDpP");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw s}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var p,g,T,m,A,k,y={},b={kings:"king",soldiers:"pawn"},f={kings:[["units","kings"],["units","myunits","kings","mykings"],["units","oppunits","kings","oppkings"]],soldiers:[["units"],["units","myunits","mysoldiers"],["units","oppunits","oppsoldiers"]]},j={kings:[["units","kings"],["units","oppunits","kings","oppkings"],["units","myunits","kings","mykings"]],soldiers:[["units"],["units","oppunits","oppsoldiers"],["units","myunits","mysoldiers"]]},S={gameId:"gogol",commands:{deploy:{},move:{},jump:{}},iconMap:b,setBoard:function(e){p=Object(a.O)(e,1),g=Object(a.O)(e,2),k={height:e.height,width:e.width},A=Object(a.e)(k),T=Object(a.d)(e),m=Object(a.z)(e)},newBattle:function(e,t){var n=Object(a.L)(e),i={units:{},myunits:{},oppunits:{},kings:{},mykings:{},oppkings:{},mysoldiers:{},oppsoldiers:{}};for(var r in n){var s,o=n[r],c=o.group,u=o.pos,d=o.owner,p=l(j[c][d]);try{for(p.s();!(s=p.n()).done;){i[s.value][u]=o}}catch(g){p.e(g)}finally{p.f()}}return S.action["startTurn_".concat(t,"_1")]({NEXTSPAWNID:1,TURN:0,UNITDATA:n,UNITLAYERS:i})},action:{startTurn_basic_1:function(e){var t={nokings:{},nosoldiers:{}},n=e.UNITLAYERS,i={units:n.units,myunits:n.oppunits,oppunits:n.myunits,kings:n.kings,mykings:n.oppkings,oppkings:n.mykings,mysoldiers:n.oppsoldiers,oppsoldiers:n.mysoldiers},r={marks:{},commands:{}},s=e.TURN+1;for(var c in Object.entries(Object.keys(p.edges).concat(Object.keys(i.mysoldiers)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})){var d,g=T[c],m=l(p.homerow[c]?a.C:[1,5]);try{for(m.s();!(d=m.n()).done;){var k=g[d.value];k&&(t.nokings[k]=y)}}catch(_){m.e(_)}finally{m.f()}}for(var b in i.mykings){var f,j=T[b],S=l(a.C);try{for(S.s();!(f=S.n()).done;){var N=j[f.value];N&&(p.homerow[N]||p.edges[b]&&p.edges[N])&&(t.nosoldiers[N]=y)}}catch(_){S.e(_)}finally{S.f()}}if(s>1)for(var I=0,v=Object.keys(i.myunits);I<v.length;I++){var R=v[I];r.marks[R]="selectunit_basic_1"}else for(var w=0,O=Object.keys(Object.keys(A.board).filter((function(e){return!u(u({},i.units),t.nokings).hasOwnProperty(e)})).reduce((function(e,t){return e[t]=y,e}),{}));w<O.length;w++){var h=O[w];r.marks[h]="selectkingdeploy_basic_1"}return{UNITDATA:e.UNITDATA,LINKS:r,UNITLAYERS:i,ARTIFACTS:t,MARKS:{},TURN:s,NEXTSPAWNID:e.NEXTSPAWNID}},startTurn_basic_2:function(e){var t={nokings:{},nosoldiers:{}},n=e.UNITLAYERS,i={units:n.units,myunits:n.oppunits,oppunits:n.myunits,kings:n.kings,mykings:n.oppkings,oppkings:n.mykings,mysoldiers:n.oppsoldiers,oppsoldiers:n.mysoldiers},r={marks:{},commands:{}},s=e.TURN;for(var c in Object.entries(Object.keys(g.edges).concat(Object.keys(i.mysoldiers)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})){var d,p=T[c],m=l(g.homerow[c]?a.C:[1,5]);try{for(m.s();!(d=m.n()).done;){var k=p[d.value];k&&(t.nokings[k]=y)}}catch(_){m.e(_)}finally{m.f()}}for(var b in i.mykings){var f,j=T[b],S=l(a.C);try{for(S.s();!(f=S.n()).done;){var N=j[f.value];N&&(g.homerow[N]||g.edges[b]&&g.edges[N])&&(t.nosoldiers[N]=y)}}catch(_){S.e(_)}finally{S.f()}}if(s>1)for(var I=0,v=Object.keys(i.myunits);I<v.length;I++){var R=v[I];r.marks[R]="selectunit_basic_2"}else for(var w=0,O=Object.keys(Object.keys(A.board).filter((function(e){return!u(u({},i.units),t.nokings).hasOwnProperty(e)})).reduce((function(e,t){return e[t]=y,e}),{}));w<O.length;w++){var h=O[w];r.marks[h]="selectkingdeploy_basic_2"}return{UNITDATA:e.UNITDATA,LINKS:r,UNITLAYERS:i,ARTIFACTS:t,MARKS:{},TURN:s,NEXTSPAWNID:e.NEXTSPAWNID}},selectkingdeploy_basic_1:function(e,t){var n={marks:{},commands:{}};return n.commands.deploy="deploy_basic_1",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectkingdeploy:t},NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},selectunit_basic_1:function(e,t){var n={nokings:e.ARTIFACTS.nokings,nosoldiers:e.ARTIFACTS.nosoldiers,kingwalk:{},adjacentenemies:{},willdie:{},jumptargets:{}},i={marks:{},commands:{}},r={selectunit:t},o=e.UNITLAYERS,c=o.units;for(var d in u(u({},o.mykings),Object(s.a)({},r.selectunit,1))){var p,g=l(a.I);try{for(g.s();!(p=g.n()).done;)for(var k=p.value,b=d;(b=T[b][k])&&!c[b];)n.nokings[b]||(n.kingwalk[b]=y)}catch(P){g.e(P)}finally{g.f()}}var f,j=T[r.selectunit],S=l(a.I);try{for(S.s();!(f=S.n()).done;){var N=f.value,I=j[N];I&&o.oppunits[I]&&(n.adjacentenemies[I]={dir:N})}}catch(P){S.e(P)}finally{S.f()}for(var v in n.adjacentenemies){var R=m[1][(n.adjacentenemies[v]||{}).dir],w=0,O=T[v][R];O&&!u(u({},o.units),o.mykings[r.selectunit]?n.nokings:n.nosoldiers)[O]&&(w=1,n.jumptargets[O]={dir:R}),w&&(n.willdie[v]={dir:R})}for(var h=0,_=Object.keys(o.mykings[r.selectunit]?n.kingwalk:Object.keys(A.board).filter((function(e){return!u(u(u({},o.units),n.nosoldiers),n.jumptargets).hasOwnProperty(e)})).reduce((function(e,t){return e[t]=y,e}),{}));h<_.length;h++){var U=_[h];i.marks[U]="selectmovetarget_basic_1"}for(var E=0,D=Object.keys(n.jumptargets);E<D.length;E++){var C=D[E];i.marks[C]="selectjumptarget_basic_1"}return{LINKS:i,ARTIFACTS:n,UNITLAYERS:o,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,NEXTSPAWNID:e.NEXTSPAWNID}},selectmovetarget_basic_1:function(e,t){var n={marks:{},commands:{}};return n.commands.move="move_basic_1",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectmovetarget:t},NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},selectjumptarget_basic_1:function(e,t){var n={nokings:e.ARTIFACTS.nokings,nosoldiers:e.ARTIFACTS.nosoldiers,kingwalk:e.ARTIFACTS.kingwalk,adjacentenemies:e.ARTIFACTS.adjacentenemies,willdie:e.ARTIFACTS.willdie,jumptargets:e.ARTIFACTS.jumptargets,splashed:{}},i={marks:{},commands:{}},r={selectunit:e.MARKS.selectunit,selectjumptarget:t},s=n.willdie,o=n.splashed;for(var a in s){var c=s[a];c.dir===(n.jumptargets[r.selectjumptarget]||{}).dir&&(o[a]=c)}return i.commands.jump="jump_basic_1",{LINKS:i,ARTIFACTS:n,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},selectkingdeploy_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.deploy="deploy_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectkingdeploy:t},NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},selectunit_basic_2:function(e,t){var n={nokings:e.ARTIFACTS.nokings,nosoldiers:e.ARTIFACTS.nosoldiers,kingwalk:{},adjacentenemies:{},willdie:{},jumptargets:{}},i={marks:{},commands:{}},r={selectunit:t},o=e.UNITLAYERS,c=o.units;for(var d in u(u({},o.mykings),Object(s.a)({},r.selectunit,1))){var p,g=l(a.I);try{for(g.s();!(p=g.n()).done;)for(var k=p.value,b=d;(b=T[b][k])&&!c[b];)n.nokings[b]||(n.kingwalk[b]=y)}catch(P){g.e(P)}finally{g.f()}}var f,j=T[r.selectunit],S=l(a.I);try{for(S.s();!(f=S.n()).done;){var N=f.value,I=j[N];I&&o.oppunits[I]&&(n.adjacentenemies[I]={dir:N})}}catch(P){S.e(P)}finally{S.f()}for(var v in n.adjacentenemies){var R=m[1][(n.adjacentenemies[v]||{}).dir],w=0,O=T[v][R];O&&!u(u({},o.units),o.mykings[r.selectunit]?n.nokings:n.nosoldiers)[O]&&(w=1,n.jumptargets[O]={dir:R}),w&&(n.willdie[v]={dir:R})}for(var h=0,_=Object.keys(o.mykings[r.selectunit]?n.kingwalk:Object.keys(A.board).filter((function(e){return!u(u(u({},o.units),n.nosoldiers),n.jumptargets).hasOwnProperty(e)})).reduce((function(e,t){return e[t]=y,e}),{}));h<_.length;h++){var U=_[h];i.marks[U]="selectmovetarget_basic_2"}for(var E=0,D=Object.keys(n.jumptargets);E<D.length;E++){var C=D[E];i.marks[C]="selectjumptarget_basic_2"}return{LINKS:i,ARTIFACTS:n,UNITLAYERS:o,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,NEXTSPAWNID:e.NEXTSPAWNID}},selectmovetarget_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.move="move_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectunit:e.MARKS.selectunit,selectmovetarget:t},NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},selectjumptarget_basic_2:function(e,t){var n={nokings:e.ARTIFACTS.nokings,nosoldiers:e.ARTIFACTS.nosoldiers,kingwalk:e.ARTIFACTS.kingwalk,adjacentenemies:e.ARTIFACTS.adjacentenemies,willdie:e.ARTIFACTS.willdie,jumptargets:e.ARTIFACTS.jumptargets,splashed:{}},i={marks:{},commands:{}},r={selectunit:e.MARKS.selectunit,selectjumptarget:t},s=n.willdie,o=n.splashed;for(var a in s){var c=s[a];c.dir===(n.jumptargets[r.selectjumptarget]||{}).dir&&(o[a]=c)}return i.commands.jump="jump_basic_2",{LINKS:i,ARTIFACTS:n,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,NEXTSPAWNID:e.NEXTSPAWNID,canAlwaysEnd:!0}},deploy_basic_1:function(e){var t={marks:{},commands:{}},n=e.UNITLAYERS,i=u({},e.UNITDATA),r=e.NEXTSPAWNID,s=e.MARKS,o="spawn"+r++;for(var a in i[o]={pos:s.selectkingdeploy,id:o,group:"kings",owner:1},n={units:{},myunits:{},oppunits:{},kings:{},mykings:{},oppkings:{},mysoldiers:{},oppsoldiers:{}},i){var c,d=i[a],p=d.group,g=d.pos,T=d.owner,m=l(f[p][T]);try{for(m.s();!(c=m.n()).done;){n[c.value][g]=d}}catch(A){m.e(A)}finally{m.f()}}return t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:e.ARTIFACTS,TURN:e.TURN,UNITDATA:i,UNITLAYERS:n,NEXTSPAWNID:r}},move_basic_1:function(e){var t={marks:{},commands:{}},n=e.UNITLAYERS,i=u({},e.UNITDATA),r=e.TURN,s=e.MARKS,a=(n.units[s.selectunit]||{}).id;for(var c in a&&(i[a]=u(u({},i[a]),{},{pos:s.selectmovetarget})),n={units:{},myunits:{},oppunits:{},kings:{},mykings:{},oppkings:{},mysoldiers:{},oppsoldiers:{}},i){var d,g=i[c],T=g.group,m=g.pos,A=g.owner,k=l(f[T][A]);try{for(k.s();!(d=k.n()).done;){n[d.value][m]=g}}catch(b){k.e(b)}finally{k.f()}}return 0!==Object.keys(Object.entries(Object.keys(n.mykings).concat(Object.keys(p.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})).length?(t.endGame="win",t.endedBy="infiltration",t.endMarks=Object.keys(Object.entries(Object.keys(n.mykings).concat(Object.keys(p.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{}))):r>1&&0===Object.keys(n.oppkings).length?(t.endGame="win",t.endedBy="regicide"):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:e.ARTIFACTS,TURN:r,UNITDATA:i,UNITLAYERS:n,NEXTSPAWNID:e.NEXTSPAWNID}},jump_basic_1:function(e){var t={marks:{},commands:{}},n={nokings:e.ARTIFACTS.nokings,nosoldiers:e.ARTIFACTS.nosoldiers,kingwalk:e.ARTIFACTS.kingwalk,adjacentenemies:e.ARTIFACTS.adjacentenemies,willdie:e.ARTIFACTS.willdie,jumptargets:e.ARTIFACTS.jumptargets,splashed:e.ARTIFACTS.splashed},i=e.UNITLAYERS,r=u({},e.UNITDATA),s=e.TURN,a=e.MARKS;delete r[(i.units[Object.keys(n.splashed)[0]]||{}).id];var c=(i.units[a.selectunit]||{}).id;for(var d in c&&(r[c]=u(u({},r[c]),{},{pos:a.selectjumptarget})),i={units:{},myunits:{},oppunits:{},kings:{},mykings:{},oppkings:{},mysoldiers:{},oppsoldiers:{}},r){var g,T=r[d],m=T.group,A=T.pos,k=T.owner,b=l(f[m][k]);try{for(b.s();!(g=b.n()).done;){i[g.value][A]=T}}catch(j){b.e(j)}finally{b.f()}}return 0!==Object.keys(Object.entries(Object.keys(i.mykings).concat(Object.keys(p.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})).length?(t.endGame="win",t.endedBy="infiltration",t.endMarks=Object.keys(Object.entries(Object.keys(i.mykings).concat(Object.keys(p.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{}))):s>1&&0===Object.keys(i.oppkings).length?(t.endGame="win",t.endedBy="regicide"):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:s,UNITDATA:r,UNITLAYERS:i,NEXTSPAWNID:e.NEXTSPAWNID}},deploy_basic_2:function(e){var t={marks:{},commands:{}},n=e.UNITLAYERS,i=u({},e.UNITDATA),r=e.NEXTSPAWNID,s=e.MARKS,o="spawn"+r++;for(var a in i[o]={pos:s.selectkingdeploy,id:o,group:"kings",owner:2},n={units:{},myunits:{},oppunits:{},kings:{},mykings:{},oppkings:{},mysoldiers:{},oppsoldiers:{}},i){var c,d=i[a],p=d.group,g=d.pos,T=d.owner,m=l(j[p][T]);try{for(m.s();!(c=m.n()).done;){n[c.value][g]=d}}catch(A){m.e(A)}finally{m.f()}}return t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:e.ARTIFACTS,TURN:e.TURN,UNITDATA:i,UNITLAYERS:n,NEXTSPAWNID:r}},move_basic_2:function(e){var t={marks:{},commands:{}},n=e.UNITLAYERS,i=u({},e.UNITDATA),r=e.TURN,s=e.MARKS,a=(n.units[s.selectunit]||{}).id;for(var c in a&&(i[a]=u(u({},i[a]),{},{pos:s.selectmovetarget})),n={units:{},myunits:{},oppunits:{},kings:{},mykings:{},oppkings:{},mysoldiers:{},oppsoldiers:{}},i){var d,p=i[c],T=p.group,m=p.pos,A=p.owner,k=l(j[T][A]);try{for(k.s();!(d=k.n()).done;){n[d.value][m]=p}}catch(b){k.e(b)}finally{k.f()}}return 0!==Object.keys(Object.entries(Object.keys(n.mykings).concat(Object.keys(g.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})).length?(t.endGame="win",t.endedBy="infiltration",t.endMarks=Object.keys(Object.entries(Object.keys(n.mykings).concat(Object.keys(g.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{}))):r>1&&0===Object.keys(n.oppkings).length?(t.endGame="win",t.endedBy="regicide"):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:e.ARTIFACTS,TURN:r,UNITDATA:i,UNITLAYERS:n,NEXTSPAWNID:e.NEXTSPAWNID}},jump_basic_2:function(e){var t={marks:{},commands:{}},n={nokings:e.ARTIFACTS.nokings,nosoldiers:e.ARTIFACTS.nosoldiers,kingwalk:e.ARTIFACTS.kingwalk,adjacentenemies:e.ARTIFACTS.adjacentenemies,willdie:e.ARTIFACTS.willdie,jumptargets:e.ARTIFACTS.jumptargets,splashed:e.ARTIFACTS.splashed},i=e.UNITLAYERS,r=u({},e.UNITDATA),s=e.TURN,a=e.MARKS;delete r[(i.units[Object.keys(n.splashed)[0]]||{}).id];var c=(i.units[a.selectunit]||{}).id;for(var d in c&&(r[c]=u(u({},r[c]),{},{pos:a.selectjumptarget})),i={units:{},myunits:{},oppunits:{},kings:{},mykings:{},oppkings:{},mysoldiers:{},oppsoldiers:{}},r){var p,T=r[d],m=T.group,A=T.pos,k=T.owner,b=l(j[m][k]);try{for(b.s();!(p=b.n()).done;){i[p.value][A]=T}}catch(f){b.e(f)}finally{b.f()}}return 0!==Object.keys(Object.entries(Object.keys(i.mykings).concat(Object.keys(g.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})).length?(t.endGame="win",t.endedBy="infiltration",t.endMarks=Object.keys(Object.entries(Object.keys(i.mykings).concat(Object.keys(g.opphomerow)).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{}))):s>1&&0===Object.keys(i.oppkings).length?(t.endGame="win",t.endedBy="regicide"):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:s,UNITDATA:r,UNITLAYERS:i,NEXTSPAWNID:e.NEXTSPAWNID}}},instruction:{startTurn_basic_1:function(e){return e.TURN>1?Object(a.g)({line:[{select:"Select"},{unittype:["king",1]},{text:"or"},{unittype:["pawn",1]},{text:"to move"}]}):Object(a.g)({line:[{select:"Select"},{text:"where to deploy your"},{unittype:["king",1]}]})},deploy_basic_1:function(){return Object(a.l)(1)},move_basic_1:function(){return Object(a.l)(1)},jump_basic_1:function(){return Object(a.l)(1)},selectkingdeploy_basic_1:function(e){var t=e.MARKS;return Object(a.g)({line:[{text:"Press"},{command:"deploy"},{text:"to spawn"},{unit:["king",1,t.selectkingdeploy]}]})},selectunit_basic_1:function(e){var t=e.ARTIFACTS,n=e.MARKS;return e.UNITLAYERS.kings[n.selectunit]?Object(a.g)({line:[{select:"Select"},{text:"where to"},Object(a.g)({line:[0!==Object.keys(t.kingwalk).length?{text:"move"}:void 0,0!==Object.keys(t.jumptargets).length?{text:"jump"}:void 0].filter((function(e){return!!e})).reduce((function(e,t,n,i){return e.push(t),n===i.length-2?e.push({text:" or "}):n<i.length-2&&e.push({text:", "}),e}),[])}),{text:"your"},{unittype:["king",1]},0!==Object.keys(Object.entries(Object.keys(t.nokings).concat(Object.keys(u(u({},t.kingwalk),t.jumptargets))).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})).length?{text:"without making a forbidden configuration"}:void 0]}):Object(a.g)({line:[{select:"Select"},{text:"where to move"},0!==Object.keys(t.jumptargets).length?{text:"or jump"}:void 0,{text:"your"},{unittype:["pawn",1]},0!==Object.keys(t.nosoldiers).length?{text:"without making a forbidden configuration"}:void 0]})},selectmovetarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"move"},{text:"to make"},{unit:[b[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"go"},{text:"to"},{pos:t.selectmovetarget}]})},selectjumptarget_basic_1:function(e){var t=e.ARTIFACTS,n=e.MARKS,i=e.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"jump"},{text:"to make"},{unit:[b[(i.units[n.selectunit]||{}).group],(i.units[n.selectunit]||{}).owner,n.selectunit]},{text:"jump to"},{pos:n.selectjumptarget},{text:"and kill"},{unit:[b[(i.units[Object.keys(t.splashed)[0]]||{}).group],(i.units[Object.keys(t.splashed)[0]]||{}).owner,Object.keys(t.splashed)[0]]}]})},startTurn_basic_2:function(e){return e.TURN>1?Object(a.g)({line:[{select:"Select"},{unittype:["king",2]},{text:"or"},{unittype:["pawn",2]},{text:"to move"}]}):Object(a.g)({line:[{select:"Select"},{text:"where to deploy your"},{unittype:["king",2]}]})},deploy_basic_2:function(){return Object(a.l)(2)},move_basic_2:function(){return Object(a.l)(2)},jump_basic_2:function(){return Object(a.l)(2)},selectkingdeploy_basic_2:function(e){var t=e.MARKS;return Object(a.g)({line:[{text:"Press"},{command:"deploy"},{text:"to spawn"},{unit:["king",2,t.selectkingdeploy]}]})},selectunit_basic_2:function(e){var t=e.ARTIFACTS,n=e.MARKS;return e.UNITLAYERS.kings[n.selectunit]?Object(a.g)({line:[{select:"Select"},{text:"where to"},Object(a.g)({line:[0!==Object.keys(t.kingwalk).length?{text:"move"}:void 0,0!==Object.keys(t.jumptargets).length?{text:"jump"}:void 0].filter((function(e){return!!e})).reduce((function(e,t,n,i){return e.push(t),n===i.length-2?e.push({text:" or "}):n<i.length-2&&e.push({text:", "}),e}),[])}),{text:"your"},{unittype:["king",2]},0!==Object.keys(Object.entries(Object.keys(t.nokings).concat(Object.keys(u(u({},t.kingwalk),t.jumptargets))).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).filter((function(e){var t=Object(o.a)(e,2);t[0];return 2===t[1]})).reduce((function(e,t){return e[Object(o.a)(t,1)[0]]=y,e}),{})).length?{text:"without making a forbidden configuration"}:void 0]}):Object(a.g)({line:[{select:"Select"},{text:"where to move"},0!==Object.keys(t.jumptargets).length?{text:"or jump"}:void 0,{text:"your"},{unittype:["pawn",2]},0!==Object.keys(t.nosoldiers).length?{text:"without making a forbidden configuration"}:void 0]})},selectmovetarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"move"},{text:"to make"},{unit:[b[(n.units[t.selectunit]||{}).group],(n.units[t.selectunit]||{}).owner,t.selectunit]},{text:"go"},{text:"to"},{pos:t.selectmovetarget}]})},selectjumptarget_basic_2:function(e){var t=e.ARTIFACTS,n=e.MARKS,i=e.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"jump"},{text:"to make"},{unit:[b[(i.units[n.selectunit]||{}).group],(i.units[n.selectunit]||{}).owner,n.selectunit]},{text:"jump to"},{pos:n.selectjumptarget},{text:"and kill"},{unit:[b[(i.units[Object.keys(t.splashed)[0]]||{}).group],(i.units[Object.keys(t.splashed)[0]]||{}).owner,Object.keys(t.splashed)[0]]}]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"d",arr:{marks:["b1"],potentialMarks:["c1","e1","f1","h1","a2","b2","c2","d2","e2","f2","g2","h2","a3","c3","e3","f3","g3","b4","c4","d4","e4","f4","g4","d5","e5","f5","g5","a6","b6","e6","g6","h6","a7","c7","d7","e7","f7","g7","h7","a8","c8","e8","g8","h8"],setup:{soldiers:{1:["a1","b1","d1","g1","b3","d3","a4","a5"],2:["c5","c6","d6","f6","b7","b8","d8","f8"]},kings:{1:["h4"],2:["b5"]}}}}],boards:{basic:{height:8,width:8,terrain:{homerow:{1:[{rect:["a1","h1"]}],2:[{rect:["a8","h8"]}]},edges:[{rect:["a1","a8"]},{rect:["h1","h8"]},{rect:["b8","g8"]},{rect:["b1","g1"]}]}}},setups:{basic:{soldiers:{1:[{rect:["a1","h1"]}],2:[{rect:["a8","h8"]}]}}}},N=S,I=n("nIA/"),v=Object(I.a)(N),R=n("+dzV"),w=n("WYlK"),O=n("R7Qo"),h=n("dP+y"),_={api:v,graphics:R.a,meta:w.a,demo:O.a,rules:h.a,imgsToPreload:["/images/games/gogol/gogolwood.jpg","/images/games/gogol/gogolbook.jpg"]},U=n("krfZ"),E=n("Xity"),D=n("+zLY"),C=n("0IYK"),P=r.a.createElement,F=function(){var e=Object(C.c)(_.api);return P(E.d.Provider,{value:_},P(E.e.Provider,{value:e},P(U.a,null)))};F.domain="gogol",F.mainImage="/images/games/gogol/gogol_active.png",F.metaDesc="Play the abstract board game Gogol at Chessicals! Move anywhere!",F.metaTitle="Gogol by Gustav Levay",F.title="Gogol",F.preloadImages=_.imgsToPreload,F.nav=Object(D.a)(_.meta);t.default=F},R7Qo:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var i={initial:{unit1:{pos:"a1",id:"unit1",group:"soldiers",owner:1,icon:"pawn"},unit2:{pos:"b1",id:"unit2",group:"soldiers",owner:1,icon:"pawn"},unit3:{pos:"c1",id:"unit3",group:"soldiers",owner:1,icon:"pawn"},unit4:{pos:"d1",id:"unit4",group:"soldiers",owner:1,icon:"pawn"},unit5:{pos:"e1",id:"unit5",group:"soldiers",owner:1,icon:"pawn"},unit6:{pos:"f1",id:"unit6",group:"soldiers",owner:1,icon:"pawn"},unit7:{pos:"g1",id:"unit7",group:"soldiers",owner:1,icon:"pawn"},unit8:{pos:"h1",id:"unit8",group:"soldiers",owner:1,icon:"pawn"},unit9:{pos:"a8",id:"unit9",group:"soldiers",owner:2,icon:"pawn"},unit10:{pos:"b8",id:"unit10",group:"soldiers",owner:2,icon:"pawn"},unit11:{pos:"c8",id:"unit11",group:"soldiers",owner:2,icon:"pawn"},unit12:{pos:"d8",id:"unit12",group:"soldiers",owner:2,icon:"pawn"},unit13:{pos:"e8",id:"unit13",group:"soldiers",owner:2,icon:"pawn"},unit14:{pos:"f8",id:"unit14",group:"soldiers",owner:2,icon:"pawn"},unit15:{pos:"g8",id:"unit15",group:"soldiers",owner:2,icon:"pawn"},unit16:{pos:"h8",id:"unit16",group:"soldiers",owner:2,icon:"pawn"}},patches:[{spawn1:[{pos:"g4",id:"spawn1",group:"kings",owner:1,icon:"king"}]},{spawn2:[{pos:"f4",id:"spawn2",group:"kings",owner:2,icon:"king"}]},{spawn1:{pos:["g4","d7"]}},{unit13:{pos:["e8","d6"]}},{unit13:[{pos:"d6",x:5,y:8,id:"unit13",group:"soldiers",owner:2,icon:"pawn"},0,0],spawn1:{pos:["d7","d5"]}}],anims:{}};t.a=i},erG2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/gogol",function(){return n("9eW4")}])}},[["erG2",1,0,2,3,4,5,6,7,30]]]);