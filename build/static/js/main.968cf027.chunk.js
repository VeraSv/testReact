(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){},233:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),s=(n(154),n(70)),i=n(22),l=(n(155),n(103)),j=n(277),u=n(100),d=n(11),b=function(e){var t=e.saveTodo,n=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return{value:n,onChange:function(e){c(e.target.value)},reset:function(){return c("")}}}(),c=n.value,o=n.reset,r=n.onChange;return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(c),o()},children:Object(d.jsx)(j.a,{variant:"outlined",placeholder:"Add todo",margin:"normal",onChange:r,value:c})})},m=n(271),O=n(272),f=n(275),h=n(274),p=n(279),x=n(273),v=n(127),g=n.n(v),C=function(e){var t=e.todos,n=e.deleteTodo;return Object(d.jsx)(m.a,{children:t.map((function(e,t){return Object(d.jsxs)(O.a,{dense:!0,button:!0,children:[Object(d.jsx)(p.a,{tabIndex:-1,disableRipple:!0}),Object(d.jsx)(h.a,{primary:e}),Object(d.jsx)(f.a,{children:Object(d.jsx)(x.a,{"aria-label":"Delete",onClick:function(){n(t)},children:Object(d.jsx)(g.a,{})})})]},t.toString())}))})},P=n(137),T=function(){var e=function(e){var t=Object(a.useState)(e),n=Object(u.a)(t,2),c=n[0],o=n[1];return{todos:c,addTodo:function(e){o([].concat(Object(P.a)(c),[e]))},deleteTodo:function(e){var t=c.filter((function(t,n){return n!==e}));o(t)}}}([]),t=e.todos,n=e.addTodo,c=e.deleteTodo;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l.a,{component:"h1",variant:"h2",children:"Todos"}),Object(d.jsx)(b,{saveTodo:function(e){var t=e.trim();t.length>0&&n(t)}}),Object(d.jsx)(C,{todos:t,deleteTodo:c})]})},k=n(276),F=n(278),w=n(281),L=n(136),N=function(){return Object(d.jsxs)(k.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(d.jsx)(k.a.Item,{label:"Login",name:"login",rules:[{required:!0,message:"Please input your login!"}],children:Object(d.jsx)(F.a,{})}),Object(d.jsx)(k.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(d.jsx)(F.a.Password,{})}),Object(d.jsx)(k.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(d.jsx)(w.a,{children:"Remember me"})}),Object(d.jsx)(k.a.Item,{wrapperCol:{offset:8,span:16},children:Object(d.jsx)(L.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},S=function(){};n(233);var y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(s.b,{to:"/",exact:!0,className:"PageLink",activeClassName:"ActivePageLink",children:"Todo list"}),Object(d.jsx)(s.b,{to:"/form1",className:"PageLink",activeClassName:"ActivePageLink",children:"Form1"}),Object(d.jsx)(s.b,{to:"/form2",className:"PageLink",activeClassName:"ActivePageLink",children:"Form2"})]})};var I=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(y,{}),Object(d.jsx)(i.a,{path:"/",exact:!0,component:function(){return Object(d.jsx)(T,{})}}),Object(d.jsx)(i.a,{path:"/form1",component:function(){return Object(d.jsx)(N,{})}}),Object(d.jsx)(i.a,{path:"/form2",component:function(){return Object(d.jsx)(S,{})}})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,283)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),A()}},[[235,1,2]]]);
//# sourceMappingURL=main.968cf027.chunk.js.map