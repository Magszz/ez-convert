(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(21),a=c.n(r),s=(c(45),c(46),c(63)),i=c(59),j=c(62),l=c(3),d=function(){return Object(l.jsx)(s.a,{bg:"light",expand:"lg",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(s.a.Brand,{href:"/",children:"EZ Convert"}),Object(l.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(j.a,{className:"me-auto",children:[Object(l.jsx)(j.a.Link,{href:"/",children:"PDF to Word"}),Object(l.jsx)(j.a.Link,{href:"/convert/word-pdf",children:"Word to PDF"})]})})]})})},o=c(15),b=c(64),O=c(61),u=c(60),m=c(26),x=c(27),h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),j=s[0],d=s[1],h=Object(n.useState)(!1),p=Object(o.a)(h,2),f=p[0],v=p[1];Object(n.useEffect)((function(){setTimeout((function(){v(!1)}),1500)}),[f,v]);return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsx)("div",{className:"my-2 d-flex align-items-center justify-content-center",children:Object(l.jsxs)("div",{className:"my-5 text-center w-75",children:[f&&Object(l.jsx)(b.a,{variant:"danger",children:"WHOOPS! You inserted unsupported file. Please insert PDF file only."}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{children:[Object(l.jsx)(m.a,{icon:x.a,className:"fa-fw text-primary"})," ","PDF to Word Converter"]}),Object(l.jsx)("p",{className:"lead",children:"It converts PDF to Word easily"})]}),Object(l.jsx)("div",{children:Object(l.jsxs)(O.a,{action:"https://vy2m8ma9t4.herokuapp.com/convert/pdf-to-word",encType:"multipart/form-data",method:"POST",onSubmit:function(e){d("")},children:[Object(l.jsxs)("div",{className:"Form__input p-2",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"file",value:c,onChange:function(e){var t=e.target.files[0].type,c=e.target.value,n=e.target.files[0].name;if(!["application/pdf"].includes(t))return r(""),v(!0);r(c),d(n)},name:"file",required:!0}),Object(l.jsx)("p",{className:"Form__btn d-flex align-items-center justify-content-center rounded-circle border border-primary",children:"+"})]}),Object(l.jsx)("p",{className:"lead",children:j})]}),Object(l.jsx)("div",{className:"",children:Object(l.jsx)(u.a,{variant:"primary",type:"submit",className:"btn-block",children:"Convert"})})]})})]})})})})},p=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),j=s[0],d=s[1],h=Object(n.useState)(!1),p=Object(o.a)(h,2),f=p[0],v=p[1];Object(n.useEffect)((function(){setTimeout((function(){v(!1)}),1500)}),[f,v]);return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsx)("div",{className:"my-2 d-flex align-items-center justify-content-center",children:Object(l.jsxs)("div",{className:"my-5 text-center w-75",children:[f&&Object(l.jsx)(b.a,{variant:"danger",children:"WHOOPS! You inserted unsupported file. Please insert Docx file only."}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{children:[Object(l.jsx)(m.a,{icon:x.b,className:"fa-fw text-primary"})," ","Word to PDF Converter"]}),Object(l.jsx)("p",{className:"lead",children:"It converts Word to PDF easily"})]}),Object(l.jsx)("div",{children:Object(l.jsxs)(O.a,{action:"https://vy2m8ma9t4.herokuapp.com/convert/word-to-pdf",encType:"multipart/form-data",method:"POST",onSubmit:function(e){d("")},children:[Object(l.jsxs)("div",{className:"Form__input p-2",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"file",value:c,onChange:function(e){var t=e.target.files[0].type,c=e.target.value,n=e.target.files[0].name;if(!["application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(t))return r(""),v(!0);r(c),d(n)},name:"file",required:!0}),Object(l.jsx)("p",{className:"Form__btn d-flex align-items-center justify-content-center rounded-circle border border-primary",children:"+"})]}),Object(l.jsx)("p",{className:"lead",children:j})]}),Object(l.jsx)("div",{className:"",children:Object(l.jsx)(u.a,{variant:"primary",type:"submit",className:"btn-block",children:"Convert"})})]})})]})})})})},f=c(38),v=c(7),y=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(v.a,{path:"/convert/word-pdf",component:p})]})]})})};c(56);a.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6f302bdf.chunk.js.map