(this["webpackJsonpportfolio-frontend"]=this["webpackJsonpportfolio-frontend"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},141:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),s=a(11),l=a.n(s),r=(a(119),a(10)),o=(a(120),a(121),a(67)),j=a.n(o),d=function(e){return Object(n.jsx)("div",{className:"homePage",children:Object(n.jsxs)("div",{className:"leftContent",children:[(a=e.data.name,Object(n.jsx)(j.a,{speed:20,children:Object(n.jsx)("p",{className:"title",children:a})})),(t=e.data.skills,Object(n.jsx)(j.a,{speed:1,hideCursor:!0,children:Object(n.jsx)("p",{className:"content",children:t.map((function(e){return Object(n.jsxs)("div",{children:[e,Object(n.jsx)("br",{})]})}))})}))]})});var t,a},b=a(214),u=a(217),m=a(218),h=a(219),O=a(220),p=a(94),x=a.n(p),f=(a(141),function(e){return Object(n.jsxs)("div",{className:"aboutPage",children:[Object(n.jsxs)("div",{className:"leftContent",children:[Object(n.jsx)("img",{className:"hvr-grow",src:"".concat("https://manjotportfolio.herokuapp.com","/").concat(e.data.profilePicture),alt:"MyPhoto",width:"250px",height:"300px",loading:"lazy"}),Object(n.jsx)("p",{className:"content hvr-grow",children:e.data.name})]}),Object(n.jsxs)("div",{className:"rightContent",children:[Object(n.jsx)("p",{className:"collegeName",children:e.data.university}),Object(n.jsx)("p",{className:"branch",children:e.data.branch}),Object(n.jsx)("div",{className:"skills hvr-grow",children:Object(n.jsxs)(b.a,{component:"nav","aria-label":"mailbox folders",children:[Object(n.jsx)(u.a,{button:!0,children:Object(n.jsx)(m.a,{primary:e.data.skills.map((function(e,t){return Object(n.jsxs)("span",{children:[" ",e," |"]},t)}))})}),Object(n.jsx)(h.a,{dark:!0})]})}),Object(n.jsx)("p",{className:"content",children:e.data.aboutMyIntro}),Object(n.jsx)(O.a,{style:{marginTop:"30px"},variant:"contained",endIcon:Object(n.jsx)(x.a,{}),className:"hvr-shutter-out-horizontal",href:"".concat("https://manjotportfolio.herokuapp.com","/").concat(e.data.resume),target:"_blank",children:"My Resume"})]})]})}),v=(a(144),a(20)),g=a(222),N=a(221),k=a(49),D=a(232);function y(e){return Object(n.jsxs)(D.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(D.a,{width:"100%",mr:1,children:Object(n.jsx)(N.a,Object(v.a)({variant:"determinate"},e))}),Object(n.jsx)(D.a,{minWidth:35,children:Object(n.jsx)(k.a,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}var S=Object(g.a)({root:{width:"100%"}});function C(e){var t=S(),a=i.a.useState(10),c=Object(r.a)(a,2),s=c[0],l=c[1];return i.a.useEffect((function(){var t=setInterval((function(){l((function(t){return t>=e.val?t>=e.val?e.val:t+e.val%5:t+5}))}),1);return function(){clearInterval(t)}}),[e.val]),Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(y,{value:s})})}var P=function(e){return Object(n.jsx)("div",{className:"SkillsCard animate__animated  animate__rotateInDownLeft hvr-bounce-to-bottom ",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:e.data.Title}),e.data.details.map((function(e,t){return Object(n.jsxs)("div",{className:"skills",children:[Object(n.jsx)("div",{className:"skillsName",children:e.name}),Object(n.jsx)("div",{className:"skillsPercent",children:Object(n.jsx)(C,{val:e.percent})})]},t)}))]})})},w=(a(145),function(e){return Object(n.jsxs)("div",{className:"skillsPage",children:[Object(n.jsx)("div",{className:"top",children:Object(n.jsx)("p",{className:"title",children:"Skills"})}),Object(n.jsx)("div",{className:"skills_content",children:e.data.skillsDetails.map((function(e,t){return Object(n.jsx)(P,{data:e},t)}))})]})}),_=(a(146),a(102)),L=a(5),I=a(234),B=a(227),E=a(229),A=a(228),M=a(95),q=a.n(M),z=a(96),T=a.n(z),R=a(18),F=a(223),U=a(224),W=a(226),G=a(225),J=(a.p,Object(g.a)({root:{maxWidth:400},media:{height:200}}));function V(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),i=a[0],s=a[1],l=function(e){s([].concat(Object(R.a)(i),[e]))},o=function(e){for(var t=0;t<i.length;t++)if(i[t]===e)return!1;return!0},j=J();return Object(n.jsxs)(F.a,{className:j.root,children:[Object(n.jsxs)(U.a,{children:[Object(n.jsx)("img",{src:"".concat("https://manjotportfolio.herokuapp.com","/media/projectPicture_").concat(e.data.name,".png"),width:"300px",height:"auto",alt:e.data.name+".png",style:{display:"".concat(o(1)?"block":"none")},onError:function(){l(1)}}),Object(n.jsx)("img",{src:"".concat("https://manjotportfolio.herokuapp.com","/media/projectPicture_").concat(e.data.name,".jpg"),width:"300px",height:"auto",alt:e.data.name+".jpg",style:{display:"".concat(o(2)?"block":"none")},onError:function(){l(2)}}),Object(n.jsx)("img",{src:"".concat("https://manjotportfolio.herokuapp.com","/media/projectPicture_").concat(e.data.name,".jpeg"),width:"300px",height:"auto",alt:e.data.name+".jpeg",style:{display:"".concat(o(3)?"block":"none")},onError:function(){l(3)}}),Object(n.jsx)(G.a,{children:Object(n.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:e.data.mainDescription})})]}),Object(n.jsxs)(W.a,{children:[Object(n.jsx)(O.a,{size:"small",color:"primary",href:e.data.githubLink,target:"_blank",children:"Github Repo"}),Object(n.jsx)(O.a,{size:"small",color:"primary",href:e.data.websiteLink,target:"_blank",children:"Visit Website"})]})]})}var H=Object(L.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,c=e.onClose,i=Object(_.a)(e,["children","classes","onClose"]);return Object(n.jsxs)(B.a,Object(v.a)(Object(v.a)({disableTypography:!0,className:a.root},i),{},{children:[Object(n.jsx)(k.a,{variant:"h6",children:t}),c?Object(n.jsx)(A.a,{"aria-label":"close",className:a.closeButton,onClick:c,children:Object(n.jsx)(q.a,{})}):null]}))})),K=Object(L.a)((function(e){return{root:{padding:e.spacing(2)}}}))(E.a);function Q(e){var t=i.a.useState(!1),a=Object(r.a)(t,2),c=a[0],s=a[1],l=function(){s(!1)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{cursor:"pointer"},children:Object(n.jsx)(T.a,{variant:"outlined",onClick:function(){s(!0)}})}),Object(n.jsxs)(I.a,{onClose:l,"aria-labelledby":"customized-dialog-title",open:c,children:[Object(n.jsx)(H,{id:"customized-dialog-title",onClose:l,children:e.data.name}),Object(n.jsx)(K,{dividers:!0,children:Object(n.jsx)(V,{data:e.data})})]})]})}var X=a(230),Y=function(e){return Object(n.jsxs)("div",{className:"projectsModel hvr-bounce-in",children:[Object(n.jsx)("div",{className:"number",children:e.index<10?"0"+e.index:e.index}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("div",{className:"name",children:e.data.name}),Object(n.jsx)(Q,{data:e.data})]}),Object(n.jsx)("div",{className:"description",children:e.data.shortDescription}),Object(n.jsx)("div",{className:"link",children:Object(n.jsx)(X.a,{variant:"body2",href:e.data.websiteLink,target:"_blank",children:e.data.websiteLink})})]})]})},Z=(a(147),function(e){return Object(n.jsxs)("div",{className:"projectsPage",children:[Object(n.jsx)("div",{className:"title",children:"My Projects"}),Object(n.jsxs)("div",{className:"projectsList",children:[Object(n.jsx)("div",{className:"left",children:e.data.projectsDetails.map((function(t,a){return a<e.data.projectsDetails.length/2?Object(n.jsx)(Y,{index:a+1,data:t}):null}))}),Object(n.jsx)("div",{className:"right",children:e.data.projectsDetails.map((function(t,a){return a>=e.data.projectsDetails.length/2?Object(n.jsx)(Y,{index:a+1,data:t}):null}))})]})]})}),$=a(97),ee=a.n($),te=a(98),ae=a.n(te),ne=a(99),ce=a.n(ne),ie=(a(148),a.p+"static/media/contactImage.ab97258b.webp"),se=function(e){return Object(n.jsxs)("div",{className:"contactPage",children:[Object(n.jsx)("div",{className:"title",children:"Reach Me..."}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"left",children:Object(n.jsx)("img",{src:ie,alt:"contactImage"})}),Object(n.jsxs)("div",{className:"right",children:[Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("div",{className:"titleIcon",children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)("div",{className:"titleName",children:"Mailing Address"})]}),Object(n.jsx)("div",{className:"content",children:e.data.address}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("div",{className:"titleIcon",children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)("div",{className:"titleName",children:"Phone Number"})]}),Object(n.jsx)("div",{className:"content",children:e.data.phoneNumber}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("div",{className:"titleIcon",children:Object(n.jsx)(ce.a,{})}),Object(n.jsx)("div",{className:"titleName",children:"Email Address"})]}),Object(n.jsx)("div",{className:"content",children:e.data.email})]})]})]})},le=a(28),re=a.n(le),oe=(a(166),function(){return Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"})]})}),je=a(101),de=a(12),be=a(38),ue=a(100),me=a(231),he=(a(167),a(168),function(e){return Object(n.jsxs)("div",{className:"DeletableComponent",children:[Object(n.jsx)("div",{className:"DeletableComponent_name",children:Object(n.jsx)("input",{value:e.name})}),Object(n.jsx)(O.a,{className:"DeletableComponent_cancel",onClick:function(){return e.deleteElement(e.name,"skillName")},children:"x"})]})}),Oe=(a(169),a(170),function(e){return Object(n.jsxs)("div",{className:"AddingSkillsDetails",children:[Object(n.jsx)("p",{className:"AddingSkillsDetails_name",children:e.skill.name}),Object(n.jsxs)("p",{className:"AddingSkillsDetails_percent",children:[e.skill.percent,"%"]}),Object(n.jsx)(O.a,{className:"AddingSkillsDetails_cancel",onClick:function(){return e.deleteElement(e.index)},children:"x"})]})}),pe=function(e){var t=Object(c.useState)(e.data.details||[]),a=Object(r.a)(t,2),i=a[0],s=a[1],l=Object(c.useState)({name:"",percent:""}),o=Object(r.a)(l,2),j=o[0],d=o[1];function b(e){var t=e.target,a=t.name,n=t.value;d((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(be.a)({},a,n))}))}var u=function(e){s(i.filter((function(t,a){return a!==e}))),d({name:"",percent:""})};if(null!==i)return Object(n.jsxs)("div",{className:"AddingSkills",children:[Object(n.jsxs)("div",{className:"AddingSkills_content",children:[Object(n.jsx)("p",{className:"AddingSkills_name",children:e.data.Title}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsxs)("form",{action:"/",onSubmit:function(e){e.preventDefault(),s(Object(R.a)(new Set([].concat(Object(R.a)(i),[j])))),d({name:"",percent:""})},children:[Object(n.jsx)(me.a,{id:"outlined-basic",label:"Skill Name",variant:"outlined",name:"name",onChange:b,value:j.name,required:!0}),Object(n.jsx)(me.a,{id:"outlined-basic",label:"Percent",variant:"outlined",name:"percent",onChange:b,value:j.percent,required:!0}),Object(n.jsx)(O.a,{variant:"outlined",type:"submit",children:"Submit"})]})}),Object(n.jsx)("div",{className:"forms",children:i.map((function(e,t){return Object(n.jsx)(Oe,{skill:e,index:t,setSkillsDetails:s,deleteElement:u},t)}))}),Object(n.jsx)(O.a,{variant:"contained",onClick:function(){e.handleAddingSkills(e.index,i)},children:"Submit"})]}),Object(n.jsx)(O.a,{className:"AddingSkills_cancel",onClick:function(){return e.deleteElement(i.Title,"skillDetails",e.index)},children:"x"})]})},xe=(a(171),function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),i=a[0],s=a[1],l=function(e){s([].concat(Object(R.a)(i),[e]))},o=function(e){for(var t=0;t<i.length;t++)if(i[t]===e)return!1;return!0};return e.data?Object(n.jsxs)("div",{className:"AddingProjects",children:[Object(n.jsx)("img",{src:"".concat("https://manjotportfolio.herokuapp.com","/media/projectPicture_").concat(e.data.name,".png"),width:"300px",height:"auto",alt:e.data.name+".png",style:{display:"".concat(o(1)?"block":"none")},onError:function(){l(1)}}),Object(n.jsx)("img",{src:"".concat("https://manjotportfolio.herokuapp.com","/media/projectPicture_").concat(e.data.name,".jpg"),width:"300px",height:"auto",alt:e.data.name+".jpg",style:{display:"".concat(o(2)?"block":"none")},onError:function(){l(2)}}),Object(n.jsx)("img",{src:"".concat("https://manjotportfolio.herokuapp.com","/media/projectPicture_").concat(e.data.name,".jpeg"),width:"300px",height:"auto",alt:e.data.name+".jpeg",style:{display:"".concat(o(3)?"block":"none")},onError:function(){l(3)}}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"AddingProjects_name",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Project Name : "}),e.data.name]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Short Description : "}),e.data.shortDescription]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Main Description : "}),e.data.mainDescription]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Website Link : "}),e.data.websiteLink]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Github Link : "}),e.data.githubLink]})]}),Object(n.jsx)(O.a,{variant:"contained",color:"secondary",className:"AddingProjects_cancel",onClick:function(){return e.deleteElement(e.data,"projectDetails",e.index)},children:"Delete"})]}):Object(n.jsx)(oe,{})}),fe=(a(172),function(e){return Object(n.jsx)("div",{className:"BasicDetails",children:Object(n.jsxs)("div",{className:"BasicDetails_name",children:[Object(n.jsx)("img",{src:e.profilePicture,alt:"profilePicture",width:"250px",height:"auto",style:{marginLeft:"60px",marginRight:"auto"}}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Name : "}),e.data.name]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Mailing Address : "}),e.data.address]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Phone Number : "}),e.data.phoneNumber]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Email Address : "}),e.data.email]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"University : "}),e.data.university]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Branch | Duration : "}),e.data.branch]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"About page Info : "}),e.data.aboutMyIntro]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Skills Intro"}),e.data.skillsIntro]})]})})}),ve=function(e){var t=new FormData,a=function(){var e,a=t.entries(),n=Object(ue.a)(a);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.delete(c[0])}}catch(i){n.e(i)}finally{n.f()}},i=Object(c.useState)(e.data.skills||[]),s=Object(r.a)(i,2),l=s[0],o=s[1],j=Object(c.useState)("".concat("https://manjotportfolio.herokuapp.com","/").concat(e.data.profilePicture)),d=Object(r.a)(j,2),b=d[0],u=d[1],m=Object(c.useState)(""),h=Object(r.a)(m,2),p=h[0],x=h[1],f=Object(c.useState)(e.data.skillsDetails||[]),g=Object(r.a)(f,2),N=g[0],k=g[1],D=Object(c.useState)(e.data.projectsDetails||[]),y=Object(r.a)(D,2),S=y[0],C=y[1],P=Object(c.useState)(""),w=Object(r.a)(P,2),_=w[0],L=w[1],I=Object(c.useState)({name:e.data.name,profilePicture:e.data.profilePicture,address:e.data.address,phoneNumber:e.data.phoneNumber,email:e.data.email,university:e.data.university,branch:e.data.branch,aboutMyIntro:e.data.aboutMyIntro,skillsIntro:e.data.skillsIntro}),B=Object(r.a)(I,2),E=B[0],A=B[1],M=Object(c.useState)({name:"",value:""}),q=Object(r.a)(M,2),z=q[0],T=q[1],F=Object(c.useState)({name:"",shortDescription:"",mainDescription:"",websiteLink:"",githubLink:""}),U=Object(r.a)(F,2),W=U[0],G=U[1],J=Object(c.useState)({}),V=Object(r.a)(J,2),H=V[0],K=V[1],Q={headers:{"content-type":"multipart/form-data"}},X=function(e){switch(e){case"basicDetails":re.a.patch("".concat("https://manjotportfolio.herokuapp.com/api","/19012001/basicDetails"),_.formData,_.config).then((function(e){console.log(e)}));break;case"resume":H!=={}?re.a.post("".concat("https://manjotportfolio.herokuapp.com/api","/19012001/resume"),H.formData,H.config).then((function(e){console.log(e)})):console.log("Please add the resume first");break;case"skillsNameBox":re.a.patch("".concat("https://manjotportfolio.herokuapp.com/api","/19012001/skillsName"),l).then((function(e){console.log(e)}));break;case"skillsDetailsBox":re.a.patch("".concat("https://manjotportfolio.herokuapp.com/api","/19012001/technologyDetails"),N).then((function(e){console.log(e)}));break;case"projectDetailsBox":re.a.patch("".concat("https://manjotportfolio.herokuapp.com/api","/19012001/projectDetails"),S).then((function(e){console.log(e)}));break;default:console.log("Default Case")}},Y=function(e,t){switch(e.preventDefault(),t){case"skillName":"skillName"===z.name&&""!==z.value&&o(Object(R.a)(new Set([].concat(Object(R.a)(l),[z.value])))),T({name:"",value:""});break;case"skillDetails":"skillDetails"===z.name&&""!==z.value&&k(Object(R.a)(new Set([].concat(Object(R.a)(N),[{name:z.value,values:[]}])))),T({name:"",value:""});break;case"projectDetails":C(Object(R.a)(new Set([].concat(Object(R.a)(S),[W])))),re.a.post("".concat("https://manjotportfolio.herokuapp.com/api","/projectPictures/").concat(W.name),p.formData,p.config).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),G({name:"",shortDescription:"",mainDescription:"",websiteLink:"",githubLink:""});break;default:console.log("Default Case")}},Z=function(e){var t=e.target,a=t.name,n=t.value;T({name:a,value:n})},$=function(e){var t=e.target,a=t.name,n=t.value;G((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(be.a)({},a,n))}))},ee=function(e){var t=e.target,a=t.name,n=t.value;A((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(be.a)({},a,n))}))},te=function(e,t,a){switch(t){case"skillName":o(l.filter((function(t){return t!==e}))),T({name:"",value:""});break;case"skillDetails":k(N.filter((function(e,t){return t!==a}))),T({name:"",value:""});break;case"projectDetails":C(S.filter((function(e,t){return a!==t}))),G({name:"",shortDescription:"",mainDescription:"",websiteLink:"",githubLink:""});break;default:console.log("Default Case")}},ae=function(e,t){k([].concat(Object(R.a)(N),[N[e].details=t])),k(N.filter((function(e){return 0!==e.details.length})))};return null===e.data?Object(n.jsx)(oe,{}):Object(n.jsxs)("div",{className:"editForms",children:[Object(n.jsxs)("div",{className:"basicDetails",children:[Object(n.jsx)("p",{className:"headings",children:"Basic Details"}),Object(n.jsx)("form",{action:"/",onSubmit:function(e){X(e)},children:Object(n.jsxs)("div",{className:"forms",children:[Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Name",variant:"outlined",name:"name",value:E.name,onChange:ee,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Mailing Address",variant:"outlined",name:"address",value:E.address,required:!0,onChange:ee})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Phone Number",variant:"outlined",name:"phoneNumber",value:E.phoneNumber,onChange:ee,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Email Address",variant:"outlined",name:"email",value:E.email,onChange:ee,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"University",variant:"outlined",name:"university",value:E.university,onChange:ee,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Branch | Duration",variant:"outlined",name:"branch",value:E.branch,onChange:ee,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{required:!0,id:"outlined-basic",label:"AboutPage Intro",variant:"outlined",name:"aboutMyIntro",value:E.aboutMyIntro,onChange:ee})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)("input",{type:"file",name:"profilePicture",onChange:function(e){return function(e){for(var n in a(),t.append("profilePicture",e.target.files[0]),E)t.append(n,E[n]);u(URL.createObjectURL(e.target.files[0])),L({formData:t,config:Q})}(e)}})})]})}),Object(n.jsx)("div",{className:"forms",children:Object(n.jsx)(fe,{data:E,profilePicture:b})}),Object(n.jsx)(O.a,{variant:"contained",size:"large",color:"primary",className:"submitButton",onClick:function(){return X("basicDetails")},children:"Submit"})]}),Object(n.jsxs)("div",{className:"basicDetails",children:[Object(n.jsx)("p",{className:"headings",children:"Resume"}),Object(n.jsx)("div",{className:"forms",children:Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)("input",{type:"file",name:"resume",onChange:function(e){return n=e.target.files,a(),t.append("resume",n[0]),void K({formData:t,config:Q});var n}})})}),Object(n.jsx)(O.a,{variant:"contained",size:"large",color:"primary",className:"submitButton",onClick:function(){return X("resume")},children:"Submit"})]}),Object(n.jsxs)("div",{className:"skillsNameBox",children:[Object(n.jsx)("p",{className:"headings",children:"Skills Name"}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)("form",{onSubmit:function(e){return Y(e,"skillName")},children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Skill Name",variant:"outlined",onChange:Z,value:"skillName"===z.name?z.value:"",name:"skillName"})})}),Object(n.jsx)("div",{className:"forms",children:l.map((function(e,t){return Object(n.jsx)(he,{name:e,deleteElement:te},t)}))}),Object(n.jsx)(O.a,{variant:"contained",size:"large",color:"primary",className:"submitButton",onClick:function(){X("skillsNameBox")},children:"Submit"})]}),Object(n.jsxs)("div",{className:"skillsDetailsBox",children:[Object(n.jsx)("p",{className:"headings",children:"Technology Details"}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)("form",{onSubmit:function(e){return Y(e,"skillDetails")},children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Technology Name",variant:"outlined",name:"skillDetails",onChange:Z,value:"skillDetails"===z.name?z.value:""})})}),Object(n.jsx)("div",{className:"forms",children:N.map((function(e,t){return Object(n.jsx)(pe,{data:e,index:t,handleAddingSkills:ae,setSkillsDetails:k,SkillsDetails:N,deleteElement:te},t)}))}),Object(n.jsx)(O.a,{variant:"contained",size:"large",color:"primary",className:"submitButton",onClick:function(){X("skillsDetailsBox")},children:"Submit"})]}),Object(n.jsxs)("div",{className:"projectDetailsBox",children:[Object(n.jsx)("p",{className:"headings",children:"Projects Details"}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsxs)("form",{onSubmit:function(e){return Y(e,"projectDetails")},children:[Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"Project Name",variant:"outlined",name:"name",onChange:$,value:W.name,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"short description",variant:"outlined",name:"shortDescription",onChange:$,value:W.shortDescription,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"main description",variant:"outlined",name:"mainDescription",onChange:$,value:W.mainDescription,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"website link",variant:"outlined",name:"websiteLink",onChange:$,value:W.websiteLink,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)(me.a,{id:"outlined-basic",label:"github link",variant:"outlined",name:"githubLink",onChange:$,value:W.githubLink,required:!0})}),Object(n.jsx)("div",{className:"inputs",children:Object(n.jsx)("input",{type:"file",name:"picture",onChange:function(e){return function(e){a(),t.append("picture",e.target.files[0]),x({formData:t,config:Q})}(e)},required:!0})}),Object(n.jsx)(O.a,{type:"submit",variant:"contained",size:"large",children:"Submit"})]})}),Object(n.jsx)("div",{className:"forms",children:S.map((function(e,t){return Object(n.jsx)(xe,{data:e,index:t,deleteElement:te},t)}))}),Object(n.jsx)(O.a,{variant:"contained",size:"large",color:"primary",className:"submitButton",onClick:function(){X("projectDetailsBox")},children:"Submit"})]})]})};var ge=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(c.useState)(!0),l=Object(r.a)(s,2),o=l[0],j=l[1],b=Object(c.useState)(""),u=Object(r.a)(b,2),m=(u[0],u[1]);return Object(c.useEffect)((function(){re.a.get("".concat("https://manjotportfolio.herokuapp.com/api","/19012001")).then((function(e){j(!1),i(e.data.foundUser),m(e.data.resume)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){}),[o,a]),o||null===a?Object(n.jsx)(oe,{}):Object(n.jsx)(je.a,{children:Object(n.jsxs)(de.c,{children:[Object(n.jsx)(de.a,{exact:!0,path:"/",children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(d,{data:a}),Object(n.jsx)(f,{data:a}),Object(n.jsx)(w,{data:a}),Object(n.jsx)(Z,{data:a}),Object(n.jsx)(se,{data:a})]})}),Object(n.jsx)(de.a,{exact:!0,path:"/manjotEdit/19012001",children:Object(n.jsx)(ve,{data:a})})]})})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,237)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(ge,{})}),document.getElementById("root")),Ne()}},[[174,1,2]]]);
//# sourceMappingURL=main.1cbbaa83.chunk.js.map