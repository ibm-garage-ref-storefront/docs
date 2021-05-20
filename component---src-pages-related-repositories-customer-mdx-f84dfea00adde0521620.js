(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{RiGo:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return c})),t.d(e,"default",(function(){return m}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var a=t("7ljp"),i=t("013z");t("qKvR");function o(){return(o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(A[a]=t[a])}return A}).apply(this,arguments)}var c={},r=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}},l=r("Tabs"),s=r("Tab"),b=r("Row"),n=r("Column"),p=r("ImageCard"),g={_frontmatter:c},d=i.a;function m(A){var e=A.components,t=function(A,e){if(null==A)return{};var t,a,i={},o=Object.keys(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,["components"]);return Object(a.b)(d,o({},g,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Introduction"),Object(a.b)("p",null,"This project is built to demonstrate how to build Customer Microservice. This application provides basic operations of creating and querying customer profiles from ",Object(a.b)("a",o({parentName:"p"},{href:"http://couchdb.apache.org/"}),"Apache’s CouchDB")," NoSQL database as part of the Customer Profile functionality of Storfront. Additionally, the Auth Microservice calls this microservice to perform Customer ",Object(a.b)("inlineCode",{parentName:"p"},"username/password")," authentication."),Object(a.b)("p",null,"Though it is a part of a bigger application, Customer service is itself an application in turn that queries the CouchDB Database."),Object(a.b)("h2",null,"Architecture"),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"321px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABoklEQVQoz42Sz0sbQRTH92/zrP+A1179cZXSHqQXD63gRWyQnloQi6iHYg9JwIhKiYfGtJRuWzG7STTZ7M7+mMzuzu68b2eWIkgr9sGH4X2ZeXzfe2M5jrObZgQWThULBTGWgLEQYfg4URQhFZxCxpQqJVzXPbREKgF+DHH9jPLbbSC/ApFCWZb3KIrir7woJN432ni6uYejsy5Bh+W5TTX9uUCxvQj2eYaEu46MO4hjrok0ceXEtm2Mx2MkSYJQ50Uu8HrnA5ZfvSPn1qcnL97g05dfyhr3jij5OovYXiJ2OYfUXcPk5hK+z6rHpqCh3+9rza80ptsFStT2GlitHRhjtPTyLT6ed8kKAp/kqAb+fZ7S6xVAXCAKJ5gKUbVkWkvTFMPhEKLSCuR5jlKfMZ9iY6eO51v7tH14AkVEVhTFqlTAzbBHg8GAvEmA/w8yY6BvP67IcXoopFQW5xydToeOWydotVpot9vVBqvrRA9iwjiv1+s4PztFo9kkKSWs0Wh0Ybam56Q0ZGaUZdldwX/6+qMrpfQXYxQEgTJvPM/r/gYJnlCPXeNydAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Customer Microservice",title:"Customer Microservice",src:"/static/92af0cc5505bd57cd87232a1a8ed4cf1/19170/customer.png",srcSet:["/static/92af0cc5505bd57cd87232a1a8ed4cf1/7fc1e/customer.png 288w","/static/92af0cc5505bd57cd87232a1a8ed4cf1/19170/customer.png 321w"],sizes:"(max-width: 321px) 100vw, 321px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("h2",null,"APIs"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"APIs"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Function"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"/customer/{id}")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Get a customer by id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"/customer/update/{id}")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Update a customer by id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"/customer/delete/{id}")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Delete a customer by id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"/customer/add")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Post a customer")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"/customer/list")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Get a list of available customers")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"/customer/search")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Search a customer")))),Object(a.b)("h2",null,"Frameworks"),Object(a.b)(l,{mdxType:"Tabs"},Object(a.b)(s,{label:"SpringBoot",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-ref-storefront/customer-ms-spring"}),"Customer Github Repo")),Object(a.b)("h3",null,"Project Features"),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Leverage ",Object(a.b)("a",o({parentName:"li"},{href:"https://projects.spring.io/spring-boot/"}),"Spring Boot")," framework to build a Microservices application."),Object(a.b)("li",{parentName:"ul"},"Uses ",Object(a.b)("a",o({parentName:"li"},{href:"http://couchdb.apache.org/"}),"CouchDB")," as the customer database.")),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(b,{mdxType:"Row"},Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app locally",titleColor:"light",aspectRatio:"1:1",href:"https://github.com/ibm-garage-ref-storefront/customer-ms-spring/blob/master/README.md",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Appsody",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//aAAwDAQACEAMQAAABWlZ53PS//8QAGRABAQEBAQEAAAAAAAAAAAAAAQIDABIi/9oACAEBAAEFAvP1ZJzvQ12yzhSr/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AYx//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/Aa2P/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAExAhBBcZH/2gAIAQEABj8CTgW8EU8EJq3/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMYH/2gAIAQEAAT8hmx6PcxMSOruSA5c7+LlNi5Sr3f/aAAwDAQACAAMAAAAQ3A//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAVH/2gAIAQMBAT8Q2lP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAATFR/9oACAECAQE/ELJwf//EAB0QAQEAAQQDAAAAAAAAAAAAAAERACExQVFhceH/2gAIAQEAAT8QdCiluzzOsOLa2tPZt8cHKED7eMOgrCJeaa5ZJiob4h9S5//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg",srcSet:["/static/f279444ed74a822d768cc7b76191de8a/69549/local_run.jpg 288w","/static/f279444ed74a822d768cc7b76191de8a/473e3/local_run.jpg 576w","/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg 1152w","/static/f279444ed74a822d768cc7b76191de8a/74f4b/local_run.jpg 1728w","/static/f279444ed74a822d768cc7b76191de8a/de5bb/local_run.jpg 2304w","/static/f279444ed74a822d768cc7b76191de8a/cc621/local_run.jpg 5712w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app to Openshift",titleColor:"light",aspectRatio:"1:1",href:"/",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Appsody",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4rsziIh//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQAQIUFD/9oACAEBAAEFAqghZlv/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAESAy/9oACAEBAAY/AjSn/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAIUEQUf/aAAgBAQABPyE6tOLYeERi7i7/AP/aAAwDAQACAAMAAAAQs8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAADAAIDAAAAAAAAAAAAAAAAARExYSGB8P/aAAgBAQABPxBIqOjKdCf1PAyQewiONmDHk//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg",srcSet:["/static/cdb2baf9353d923691970e11ccfa6806/69549/redhat_openshift.jpg 288w","/static/cdb2baf9353d923691970e11ccfa6806/473e3/redhat_openshift.jpg 576w","/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app using CP4Apps",titleColor:"light",aspectRatio:"1:1",href:"/",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"CP4Apps",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"445px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHHpmcpoANP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECAxD/2gAIAQEAAQUCKzSnlaNo/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIREP/aAAgBAwEBPwFg1Ez/xAAXEQADAQAAAAAAAAAAAAAAAAACEBFB/9oACAECAQE/ARmr/8QAFhAAAwAAAAAAAAAAAAAAAAAAEBEg/9oACAEBAAY/AoQ//8QAGBABAAMBAAAAAAAAAAAAAAAAAQAQESH/2gAIAQEAAT8hDUJsjdo4zgxX/9oADAMBAAIAAwAAABCLz//EABYRAQEBAAAAAAAAAAAAAAAAAEEBEP/aAAgBAwEBPxCwLn//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBEY//EABwQAQABBQEBAAAAAAAAAAAAAAERABAhQVExgf/aAAgBAQABPxD2TLGCaKpBt38soGBjpQJB2Lf/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg",srcSet:["/static/8f3c4279a52c34780b26f354b809a401/69549/cloud-pak-for-applications.jpg 288w","/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg 445w"],sizes:"(max-width: 445px) 100vw, 445px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(a.b)(s,{label:"OpenLiberty",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-ref-storefront/customer-ms-openliberty"}),"Customer Github Repo")),Object(a.b)("h3",null,"Project Features"),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Based on ",Object(a.b)("a",o({parentName:"li"},{href:"https://microprofile.io/"}),"MicroProfile"),"."),Object(a.b)("li",{parentName:"ul"},"Uses ",Object(a.b)("a",o({parentName:"li"},{href:"http://couchdb.apache.org/"}),"CouchDB")," as the customer database.")),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(b,{mdxType:"Row"},Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app locally",titleColor:"light",aspectRatio:"1:1",href:"https://github.com/ibm-garage-ref-storefront/customer-ms-openliberty/blob/master/README.md",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Appsody",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//aAAwDAQACEAMQAAABWlZ53PS//8QAGRABAQEBAQEAAAAAAAAAAAAAAQIDABIi/9oACAEBAAEFAvP1ZJzvQ12yzhSr/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AYx//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/Aa2P/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAExAhBBcZH/2gAIAQEABj8CTgW8EU8EJq3/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMYH/2gAIAQEAAT8hmx6PcxMSOruSA5c7+LlNi5Sr3f/aAAwDAQACAAMAAAAQ3A//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAVH/2gAIAQMBAT8Q2lP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAATFR/9oACAECAQE/ELJwf//EAB0QAQEAAQQDAAAAAAAAAAAAAAERACExQVFhceH/2gAIAQEAAT8QdCiluzzOsOLa2tPZt8cHKED7eMOgrCJeaa5ZJiob4h9S5//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg",srcSet:["/static/f279444ed74a822d768cc7b76191de8a/69549/local_run.jpg 288w","/static/f279444ed74a822d768cc7b76191de8a/473e3/local_run.jpg 576w","/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg 1152w","/static/f279444ed74a822d768cc7b76191de8a/74f4b/local_run.jpg 1728w","/static/f279444ed74a822d768cc7b76191de8a/de5bb/local_run.jpg 2304w","/static/f279444ed74a822d768cc7b76191de8a/cc621/local_run.jpg 5712w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app to Openshift",titleColor:"light",aspectRatio:"1:1",href:"/",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Appsody",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4rsziIh//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQAQIUFD/9oACAEBAAEFAqghZlv/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAESAy/9oACAEBAAY/AjSn/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAIUEQUf/aAAgBAQABPyE6tOLYeERi7i7/AP/aAAwDAQACAAMAAAAQs8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAADAAIDAAAAAAAAAAAAAAAAARExYSGB8P/aAAgBAQABPxBIqOjKdCf1PAyQewiONmDHk//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg",srcSet:["/static/cdb2baf9353d923691970e11ccfa6806/69549/redhat_openshift.jpg 288w","/static/cdb2baf9353d923691970e11ccfa6806/473e3/redhat_openshift.jpg 576w","/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app using CP4Apps",titleColor:"light",aspectRatio:"1:1",href:"/",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"CP4Apps",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"445px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHHpmcpoANP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECAxD/2gAIAQEAAQUCKzSnlaNo/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIREP/aAAgBAwEBPwFg1Ez/xAAXEQADAQAAAAAAAAAAAAAAAAACEBFB/9oACAECAQE/ARmr/8QAFhAAAwAAAAAAAAAAAAAAAAAAEBEg/9oACAEBAAY/AoQ//8QAGBABAAMBAAAAAAAAAAAAAAAAAQAQESH/2gAIAQEAAT8hDUJsjdo4zgxX/9oADAMBAAIAAwAAABCLz//EABYRAQEBAAAAAAAAAAAAAAAAAEEBEP/aAAgBAwEBPxCwLn//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBEY//EABwQAQABBQEBAAAAAAAAAAAAAAERABAhQVExgf/aAAgBAQABPxD2TLGCaKpBt38soGBjpQJB2Lf/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg",srcSet:["/static/8f3c4279a52c34780b26f354b809a401/69549/cloud-pak-for-applications.jpg 288w","/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg 445w"],sizes:"(max-width: 445px) 100vw, 445px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(a.b)(s,{label:"Quarkus",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-ref-storefront/customer-ms-quarkus"}),"Customer Github Repo")),Object(a.b)("h3",null,"Project Features"),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Leverages ",Object(a.b)("a",o({parentName:"li"},{href:"https://quarkus.io/"}),"Quarkus"),", the Supersonic Subatomic Java Framework."),Object(a.b)("li",{parentName:"ul"},"Uses ",Object(a.b)("a",o({parentName:"li"},{href:"http://couchdb.apache.org/"}),"CouchDB")," as the customer database.")),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(b,{mdxType:"Row"},Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app locally",titleColor:"light",aspectRatio:"1:1",href:"https://github.com/ibm-garage-ref-storefront/customer-ms-quarkus/blob/master/README.md",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Local",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//aAAwDAQACEAMQAAABWlZ53PS//8QAGRABAQEBAQEAAAAAAAAAAAAAAQIDABIi/9oACAEBAAEFAvP1ZJzvQ12yzhSr/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AYx//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/Aa2P/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAExAhBBcZH/2gAIAQEABj8CTgW8EU8EJq3/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMYH/2gAIAQEAAT8hmx6PcxMSOruSA5c7+LlNi5Sr3f/aAAwDAQACAAMAAAAQ3A//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAVH/2gAIAQMBAT8Q2lP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAATFR/9oACAECAQE/ELJwf//EAB0QAQEAAQQDAAAAAAAAAAAAAAERACExQVFhceH/2gAIAQEAAT8QdCiluzzOsOLa2tPZt8cHKED7eMOgrCJeaa5ZJiob4h9S5//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg",srcSet:["/static/f279444ed74a822d768cc7b76191de8a/69549/local_run.jpg 288w","/static/f279444ed74a822d768cc7b76191de8a/473e3/local_run.jpg 576w","/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg 1152w","/static/f279444ed74a822d768cc7b76191de8a/74f4b/local_run.jpg 1728w","/static/f279444ed74a822d768cc7b76191de8a/de5bb/local_run.jpg 2304w","/static/f279444ed74a822d768cc7b76191de8a/cc621/local_run.jpg 5712w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app to Openshift",titleColor:"light",aspectRatio:"1:1",href:"https://github.com/ibm-garage-ref-storefront/customer-ms-quarkus/blob/master/openshift.md",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Openshift",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4rsziIh//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQAQIUFD/9oACAEBAAEFAqghZlv/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAESAy/9oACAEBAAY/AjSn/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAIUEQUf/aAAgBAQABPyE6tOLYeERi7i7/AP/aAAwDAQACAAMAAAAQs8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAADAAIDAAAAAAAAAAAAAAAAARExYSGB8P/aAAgBAQABPxBIqOjKdCf1PAyQewiONmDHk//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg",srcSet:["/static/cdb2baf9353d923691970e11ccfa6806/69549/redhat_openshift.jpg 288w","/static/cdb2baf9353d923691970e11ccfa6806/473e3/redhat_openshift.jpg 576w","/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(a.b)(n,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(p,{title:"Deploy the app using CP4Apps",titleColor:"light",aspectRatio:"1:1",href:"https://github.com/ibm-garage-ref-storefront/customer-ms-quarkus/blob/master/cntk.md",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Cloudnative toolkit",mdxType:"ImageCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"445px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHHpmcpoANP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECAxD/2gAIAQEAAQUCKzSnlaNo/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIREP/aAAgBAwEBPwFg1Ez/xAAXEQADAQAAAAAAAAAAAAAAAAACEBFB/9oACAECAQE/ARmr/8QAFhAAAwAAAAAAAAAAAAAAAAAAEBEg/9oACAEBAAY/AoQ//8QAGBABAAMBAAAAAAAAAAAAAAAAAQAQESH/2gAIAQEAAT8hDUJsjdo4zgxX/9oADAMBAAIAAwAAABCLz//EABYRAQEBAAAAAAAAAAAAAAAAAEEBEP/aAAgBAwEBPxCwLn//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBEY//EABwQAQABBQEBAAAAAAAAAAAAAAERABAhQVExgf/aAAgBAQABPxD2TLGCaKpBt38soGBjpQJB2Lf/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg",srcSet:["/static/8f3c4279a52c34780b26f354b809a401/69549/cloud-pak-for-applications.jpg 288w","/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg 445w"],sizes:"(max-width: 445px) 100vw, 445px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-related-repositories-customer-mdx-f84dfea00adde0521620.js.map