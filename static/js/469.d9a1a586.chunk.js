"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{4469:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(5861),s=t(9439),a=t(4687),u=t.n(a),c=t(2791),i=t(7689),o=t(4849),f=t(18),h=t(1398),l=t(5070),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=f0f2066a0c712f14855aeae6be3905f3"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("some troubles...");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=t(184),d=function(){var e=(0,i.UO)().moviesId,r=(0,c.useState)(!1),t=(0,s.Z)(r,2),a=t[0],d=t[1],x=(0,c.useState)(null),m=(0,s.Z)(x,2),Z=m[0],k=m[1],w=(0,c.useState)(null),j=(0,s.Z)(w,2),b=j[0],g=j[1];(0,c.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,d(!0),r.next=4,p(e);case 4:t=r.sent,k(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),g(r.t0.message);case 11:return r.prev=11,d(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]);var y=Z&&Z.results&&Z.results.length>0;return(0,v.jsxs)(v.Fragment,{children:[a&&(0,v.jsx)(o.Z,{animation:"border",role:"status"}),b&&(0,v.jsx)(f.Z,{variant:"danger",children:b}),y?(0,v.jsx)(h.Z,{children:Z.results.map((function(e){return(0,v.jsx)(h.Z.Item,{children:(0,v.jsx)(l.Z,{children:(0,v.jsxs)(l.Z.Body,{children:[(0,v.jsxs)(l.Z.Title,{children:["Author: ",e.author]}),(0,v.jsx)(l.Z.Text,{children:e.content})]})})},e.id)}))}):(0,v.jsx)(f.Z,{variant:"info",children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=469.d9a1a586.chunk.js.map