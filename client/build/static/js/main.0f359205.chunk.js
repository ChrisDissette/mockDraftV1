(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},34:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var s=c(1),j=c.n(s),n=c(17),r=c.n(n),l=(c(26),c(20)),i=(c(33),c(34),c(4)),d=c(19),b=c.n(d),a=c(0),h=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Available Players"}),Object(a.jsx)("div",{children:Object(a.jsxs)("table",{className:"table table-sm table-bordered table-striped",children:[Object(a.jsx)("thead",{className:"thead thead-dark",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Rank"}),Object(a.jsx)("th",{scope:"col",children:"Player Name"}),Object(a.jsx)("th",{scope:"col",children:"Team"}),Object(a.jsx)("th",{scope:"col",children:"Position"}),Object(a.jsx)("th",{scope:"col",children:"ADP"}),Object(a.jsx)("th",{scope:"col",children:"2020 Points"}),Object(a.jsx)("th",{scope:"col",children:"Draft"})]})}),Object(a.jsx)("tbody",{children:e.playerList.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.ranking}),Object(a.jsx)("td",{children:e.playerName}),Object(a.jsx)("td",{children:e.teamName}),Object(a.jsx)("td",{children:e.playerPosition}),Object(a.jsx)("td",{children:e.aDP}),Object(a.jsx)("td",{children:e.ptsLastYear}),Object(a.jsxs)("td",{children:[" ",Object(a.jsx)("button",{className:"btn btn-success",children:"Draft"})," "]})]},t)}))})]})})]})},o=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("table",{className:"table table-sm table-bordered table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Position"}),Object(a.jsx)("th",{scope:"col",children:"Player Name"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"QB"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"RB"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"RB"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"WR"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"WR"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"WR"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"TE"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Flex"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"DST"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Bench"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Bench"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Bench"}),Object(a.jsx)("td",{})]})]})]})})},O=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"grid-container",children:[1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((function(e,t){return Object(a.jsx)("div",{className:"grid-item",style:{height:"200px",width:"200px",border:"1px solid black"},children:Object(a.jsx)("p",{children:e})})}))})})},x=c(21),u=function(e){var t=Object(s.useState)([]),c=Object(i.a)(t,2),j=c[0],n=c[1],r=Object(s.useState)(1),l=Object(i.a)(r,2),d=l[0],b=l[1];return Object(a.jsxs)("div",{style:{width:"300px",margin:"auto"},children:[Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(Object(x.a)(Array(parseInt(d)).keys()))},children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"numberOfTeams",children:"How many teams?"}),Object(a.jsxs)("select",{className:"form-control",name:"numberOfTeams",onChange:function(e){return b(e.target.value)},children:[Object(a.jsx)("option",{value:"1",children:"1"}),Object(a.jsx)("option",{value:"2",children:"2"}),Object(a.jsx)("option",{value:"3",children:"3"}),Object(a.jsx)("option",{value:"4",children:"4"}),Object(a.jsx)("option",{value:"5",children:"5"}),Object(a.jsx)("option",{value:"6",children:"6"}),Object(a.jsx)("option",{value:"7",children:"7"}),Object(a.jsx)("option",{value:"8",children:"8"}),Object(a.jsx)("option",{value:"9",children:"9"}),Object(a.jsx)("option",{value:"10",children:"10"})]}),Object(a.jsx)("button",{className:"btn btn-outline-success mt-3",style:{width:"300px"},children:"Submit"})]})}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"draftSpot",children:"Which spot are you drafting in?"}),Object(a.jsx)("select",{className:"form-control",name:"draftSpot",children:j.map((function(e,t){return Object(a.jsx)("option",{value:e+1,children:e+1},t)}))})]}),Object(a.jsx)("button",{className:"btn btn-outline-success mt-3",style:{width:"300px"},children:"Let's Draft"})]})]})},p=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],j=t[1],n=Object(s.useState)(),r=Object(i.a)(n,2);r[0],r[1];return Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/player").then((function(e){console.log(e.data.player),j(e.data.player)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{}),Object(a.jsx)(O,{}),Object(a.jsx)(h,{playerList:c,setPlayerList:j}),Object(a.jsx)(o,{})]})};var m=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(l.a,{children:Object(a.jsx)(p,{path:"/"})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,s=t.getFID,j=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),j(e),n(e),r(e)}))};r.a.render(Object(a.jsx)(j.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),f()}},[[54,1,2]]]);
//# sourceMappingURL=main.0f359205.chunk.js.map