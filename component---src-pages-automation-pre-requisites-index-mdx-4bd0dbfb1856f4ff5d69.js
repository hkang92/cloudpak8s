(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+oyu":function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return s}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var n=r("7ljp"),o=r("013z");r("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c={},l={_frontmatter:c},i=o.a;function s(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return Object(n.b)(i,a({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Install"),Object(n.b)("h3",null,"NFS"),Object(n.b)("p",null,"The persistent volumes used by the different Cloud Pak for Automation components in the following chapters are relying on NFS. Before starting the install of any component, it is thus required to set-up an NFS server. An example for how to set-up and verify an NFS server for Redhat 7 can be found ",Object(n.b)("a",a({parentName:"p"},{href:"https://linuxconfig.org/quick-nfs-server-configuration-on-redhat-7-linux"}),"here"),"."),Object(n.b)("h2",null,"Prepare"),Object(n.b)("h3",null,"Logging-in to your cluster"),Object(n.b)("h4",null,"IBM Cloud OpenShift cluster"),Object(n.b)("p",null,"Start by loging in to IBM Cloud with the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud login")," or ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud login --sso")," command, then select your cluster and login to it."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),"ibmcloud oc cluster-config --cluster <your-cluster-name>\noc login \n")),Object(n.b)("h4",null,"On-prem OpenShift cluster"),Object(n.b)("p",null,"Login directly to your cluster:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),"oc login -u admin -p admin https://<your-cluster-url>/\n")),Object(n.b)("h3",null,"Accessing the Docker registry"),Object(n.b)("h4",null,"IBM Cloud OpenShift cluster"),Object(n.b)("p",null,"To expose the ",Object(n.b)("inlineCode",{parentName:"p"},"docker-registry.default.svc"),", open a command window, login to OpenShift and run the following command:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),"kubectl -n default port-forward svc/docker-registry 5000:5000 &\n")),Object(n.b)("p",null,"This is exposing port 5000 on the boot node (wherever this is run). You need to leave the command window open or else the port-forwarding will stop. Be aware of the potential timeout of port forwarding during the images push."),Object(n.b)("h4",null,"On-prem OpenShift cluster"),Object(n.b)("p",null,"To prepare Docker access, edit the ",Object(n.b)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," Docker daemon configuration file to include the ",Object(n.b)("inlineCode",{parentName:"p"},'"insecure-registries"')," property, as shown on the example below:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),'{\n  "insecure-registries" : ["docker-registry-default.apps-cp4a-res.rtp.raleigh.ibm.com"]\n}\n')),Object(n.b)("p",null,"Restart docker daemon:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),"systemctl restart docker\n")),Object(n.b)("h4",null,"OpenShift cluster accessing IBM Cloud image registry"),Object(n.b)("p",null,"You need to use a ",Object(n.b)("inlineCode",{parentName:"p"},"secret")," containing credentials to access IBM Cloud registry. To create this secret you need to generate a key from your IBM Cloud entitlment to access Cloud Pak for Automation docker images."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),"oc create secret docker-registry cp-entitlement --docker-server=cp.icr.io --docker-username=ekey --docker-password=<GENERATED_KEY_FROM_IBM_CLOUD_ENTATLMENT> --docker-email=unused\n")))}s.isMDXComponent=!0},"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var n=r("pOBw"),o=r("q1tI"),a=r.n(o),c=r("NmYn"),l=r.n(c),i=r("OKom"),s=r("k4MR"),b=r("TSYQ"),p=r.n(b),u=r("QH2O"),d=r("qKvR"),m=function(e){var t,r=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},r)))))},O=r("pEPl"),h=r("BAC9"),g=function(e){var t=e.relativePagePath,r=e.repository,n=O.data.site.siteMetadata.repository,o=r||n,a=o.baseUrl,c=o.subDirectory,l=a+"/edit/"+o.branch+c+"/src/pages"+t;return a?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},j=r("FCXl"),f=(r("Oyvg"),r("Wbzz")),y=r("I8xM");var v=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),a=o===n,c=new RegExp(n+"(?!-)"),i=r.replace(c,o);return Object(d.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=a,t),y.listItem)},Object(d.b)(f.Link,{className:y.link,to:""+i},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},o))))))},n}(a.a.Component),N=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,o=e.location,a=e.Title,c=t.frontmatter,b=void 0===c?{}:c,p=t.relativePagePath,u=t.titleType,O=b.tabs,h=b.title,f=b.theme,y=b.description,w=b.keywords,k=n.data.site.pathPrefix,x=k?o.pathname.replace(k,""):o.pathname,C=O?x.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:O,homepage:!1,theme:f,pageTitle:h,pageDescription:y,pageKeywords:w,titleType:u},Object(d.b)(m,{title:a?Object(d.b)(a,null):h,label:"label",tabs:O}),O&&Object(d.b)(v,{slug:x,tabs:O,currentTab:C}),Object(d.b)(N.a,{padded:!0},r,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:o,slug:x,tabs:O,currentTab:C}),Object(d.b)(i.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-automation-pre-requisites-index-mdx-4bd0dbfb1856f4ff5d69.js.map