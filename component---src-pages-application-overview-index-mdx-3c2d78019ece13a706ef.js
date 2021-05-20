(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"puW/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},c=n.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(c,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The application is a simple store front shopping application that displays a catalog of antique computing devices, where users can search and buy products. It has a web interface that relies on separate BFF (Backend for Frontend) services to interact with the backend data.  There is also a mobile application that uses IBM Mobile Foundation as the Mobile BFF to provide mobile app security, interact witth backend services and also enable sending of Mobile Push Notifications."),Object(r.b)("p",null,"There are several components of this architecture."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This OmniChannel application contains an ",Object(r.b)("a",i({parentName:"li"},{href:"https://angularjs.org/"}),"AngularJS")," based web application and a hybrid-ionic mobile application."),Object(r.b)("li",{parentName:"ul"},"The Web app invokes its own backend Microservice to fetch data, we call this component BFFs following the ",Object(r.b)("a",i({parentName:"li"},{href:"http://samnewman.io/patterns/architectural/bff/"}),"Backend for Frontends")," pattern.  In this Layer, front end developers usually write backend logic for their front end.  The Web BFF is implemented using the Node.js Express Framework. For the mobile application the mobile BFF function is provided out-of-the-box by IBM Mobile Foundation services that have to be configured appropriately.   These Microservices are packaged as Docker containers and managed by Kubernetes cluster."),Object(r.b)("li",{parentName:"ul"},"The BFFs invokes another layer of reusable Java Microservices. In a real world project, this is sometimes written by different teams.  The reusable microservices are written in Java. They run inside a Kubernetes cluster, for example the ",Object(r.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/container-service"}),"IBM Cloud Kubernetes Service")," or ",Object(r.b)("a",i({parentName:"li"},{href:"https://www.redhat.com/en/technologies/cloud-computing/openshift"}),"Red Hat Openshift"),", using ",Object(r.b)("a",i({parentName:"li"},{href:"https://www.docker.com/"}),"Docker"),"."),Object(r.b)("li",{parentName:"ul"},"The Java Microservices are as follows:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The Inventory Service uses an instance of ",Object(r.b)("a",i({parentName:"li"},{href:"https://www.mysql.com/"}),"MySQL")," to store the inventory items."),Object(r.b)("li",{parentName:"ul"},"The Catalog service retrieves items from a searchable JSON datasource using ",Object(r.b)("a",i({parentName:"li"},{href:"https://www.elastic.co/"}),"ElasticSearch"),"."),Object(r.b)("li",{parentName:"ul"},"The Customer service stores and retrieves Customer data from a searchable JSON datasource using ",Object(r.b)("a",i({parentName:"li"},{href:"http://couchdb.apache.org/"}),"CouchDB"),"."),Object(r.b)("li",{parentName:"ul"},"The Auth service delegates authentication and authorization."),Object(r.b)("li",{parentName:"ul"},"The Orders Service uses an instance of ",Object(r.b)("a",i({parentName:"li"},{href:"https://mariadb.org/"}),"MariaDB")," to store order information and integrates with IBM Mobile Foundation Push Notifications to send mobile push notifications on orders shipment status.")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-application-overview-index-mdx-3c2d78019ece13a706ef.js.map