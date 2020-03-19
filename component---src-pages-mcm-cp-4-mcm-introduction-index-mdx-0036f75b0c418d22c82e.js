(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),i=a.n(o),r=a("NmYn"),l=a.n(r),c=a("OKom"),s=a("k4MR"),u=a("TSYQ"),b=a.n(u),p=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:b()(p.pageHeader,(t={},t[p.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},a)))))},g=a("pEPl"),h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=g.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,l=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},v=a("FCXl"),O=(a("Oyvg"),a("Wbzz")),j=a("I8xM");var M=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),i=o===n,r=new RegExp(n+"(?!-)"),c=a.replace(r,o);return Object(d.b)("li",{key:e,className:b()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(d.b)(O.Link,{className:j.link,to:""+c},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:j.list},o))))))},n}(i.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,r=t.frontmatter,u=void 0===r?{}:r,b=t.relativePagePath,p=t.titleType,g=u.tabs,h=u.title,O=u.theme,j=u.description,w=u.keywords,C=n.data.site.pathPrefix,P=C?o.pathname.replace(C,""):o.pathname,k=g?P.split("/").filter(Boolean).slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:g,homepage:!1,theme:O,pageTitle:h,pageDescription:j,pageKeywords:w,titleType:p},Object(d.b)(m,{title:i?Object(d.b)(i,null):h,label:"label",tabs:g}),g&&Object(d.b)(M,{slug:P,tabs:g,currentTab:k}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:b})),Object(d.b)(v.a,{pageContext:t,location:o,slug:P,tabs:g,currentTab:k}),Object(d.b)(c.a,null))}},"ESj+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},l={_frontmatter:r},c=o.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution Overview"),Object(n.b)("p",null,"The IBM Cloud Pak™ for Multicloud Management, running on Red Hat® OpenShift®, provides consistent visibility, governance and automation from on premises to the edge. Enterprises gain capabilities such as multicluster management, event management, application management and infrastructure management. Enterprises can leverage this IBM Cloud Pak to help increase operational efficiency that is driven by intelligent data analysis and predictive golden signals, and gain built-in support for their compliance management."),Object(n.b)("p",null,"The IBM Cloud Pak for Multicloud Management includes IBM Multicloud Manager, IBM Cloud Automation Manager, and IBM Cloud App Management, which includes IBM Cloud Event Management. With IBM Cloud Pak for Multicloud Management, you get more application and cluster visibility across the enterprise to any public or private cloud. You can improve automation by simplifying your IT and application operations management with increased flexibility and cost savings, and intelligent data analysis driven by predictive signals."),Object(n.b)("p",null,"You can also take advantage of the governance, as with this IBM Cloud Pak for Multicloud Management, you can manage your multicloud environments with a consistent set of configuration and security policies across all applications and clusters."),Object(n.b)("img",{src:"/assets/img/cp4mcm/cp4mcm_overview.png",alt:"CP4MCM Overview"}),Object(n.b)("p",null,"This repository provides documentation and access to automation for:\n1. Installing the Cloud Pak for Multicloud Management on Red Hat OpenShift on IBM Cloud, including automation (terraforms) for the installation.\n2. Installating Cloud Pak for Multicloud Management on VMWare, including automation (terraforms) for the installation.\n3. A set of common use cases the documentation on how to demonstrate them."),Object(n.b)("h2",null,"MCM Component Architecture"),Object(n.b)("img",{src:"/assets/img/cp4mcm/mcm_arch_3.2.1.png",alt:"CP4MCM Component Architecture"}),Object(n.b)("h2",null,"Other Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_1.2.0/kc_welcome_cloud_pak.html"},"Cloud Pak for MCM Knowledge Center")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Multicloud-Management/"},"IBM Demos (Videos, Product Tours and Hands on Labs)"))))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-introduction-index-mdx-0036f75b0c418d22c82e.js.map