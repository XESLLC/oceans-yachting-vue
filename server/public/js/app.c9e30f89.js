(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Home"),n("CompanyProfile"),n("YachtManagement"),n("EngineeringServices"),n("Aviation"),n("Footer")],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{staticClass:"main-background-color nav-main",attrs:{toggleable:"lg"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-padding"},[a("b-navbar-brand",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:n("5ffe")}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":"",right:""}},[a("b-navbar-nav",{staticClass:"nav navbar-items"},[a("b-nav-item",{attrs:{href:"#company_profile"}},[e._v("Company Profile")]),a("b-nav-item",{attrs:{href:"#yacht_management"}},[e._v("Yacht Management")]),a("b-nav-item",{attrs:{href:"#engineering_services"}},[e._v("Engineering Services")]),a("b-nav-item",{attrs:{href:"#helicopter_aviation"}},[e._v("Helicopter/Aviation")]),a("b-nav-item",{attrs:{href:"#contact"}},[e._v("Contact Us")])],1)],1)],1)])]),a("b-carousel",{attrs:{id:"carousel-bg-image",interval:8e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[a("b-carousel-slide",{staticClass:"main-bg bg-1",attrs:{"img-src":n("fc88")}}),a("b-carousel-slide",{staticClass:"main-bg bg-2",attrs:{"img-src":n("e01e")}}),a("b-carousel-slide",{staticClass:"main-bg bg-3",attrs:{"img-src":n("8ced")}}),a("b-carousel-slide",{staticClass:"main-bg bg-4",attrs:{"img-src":n("9bf3")}}),a("b-carousel-slide",{staticClass:"main-bg bg-5",attrs:{"img-src":n("824b")}})],1)],1)},o=[],c={name:"Home",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1}}},l=c,u=n("2877"),d=Object(u["a"])(l,s,o,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.users,function(t){return n("div",{key:t._id},[n("p",[e._v(e._s(t.first_name))]),n("p",[e._v(e._s(t.last_name))]),n("p",[e._v(e._s(t.bio))]),n("p",[e._v(e._s(t.photo))])])}),0)},m=[],g=(n("96cf"),n("3b8d")),v=n("795b"),h=n.n(v),b=n("d225"),y=n("b0b4"),_=n("bc3a"),w=n.n(_),x="api/users/",C=function(){function e(){Object(b["a"])(this,e)}return Object(y["a"])(e,null,[{key:"getUsers",value:function(){return new h.a(function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(x);case 3:a=e.sent,i=a.data,t(i.users),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),n(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}())}},{key:"addUser",value:function(e,t,n,a){return w.a.post(x,{firstName:e,lastName:t,bio:n,photo:a})}},{key:"deleteUser",value:function(e){return w.a.delete("".concat(x).concat(e))}}]),e}(),k=C,O={name:"CompanyProfile",data:function(){return{users:[],errors:""}},created:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.getUsers();case 3:this.users=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()},S=O,j=Object(u["a"])(S,f,m,!1,null,null,null),E=j.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-center section-header"},[e._v("Yacht Management")]),a("div",{staticClass:"section-header-underline"}),a("div",{staticClass:"section-header-padding-bottom"}),a("div",{staticClass:"row section-content-container"},[a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[a("div",{staticClass:"image-container"},[a("img",{staticClass:"section-img",attrs:{src:n("c82a")}})])]),a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[a("div",{staticClass:"text-container"},[e._v("\n        Oceans Yachting created a superior product and operating standard to fill existing industry gaps.  Our system allows yacht Captains and crew to navigate our custom Safety Management System, saving yacht owners time and money. Owners have peace of mind knowing their asset is being guided through complex and virtually unknown private and commercial yachting laws and rules. Oceans Yachting’s extensive knowledge in the areas of ISPS, ISM and MLC make us the perfect choice for the serious owner. Our fully customizable Safety Management System (SMS) is tailored to specific needs and requirements.  If operating a compliant yacht or are looking to increase efficiency and compliance, Oceans Yachting is prepared to take you through the process.\n        "),a("br"),a("br"),e._v("\n        Service doesn’t end at the Yacht.\n        "),a("br"),a("br"),e._v("\n        Oceans Yachting offers a professional system of accounting across all operations. Working directly with Captains and Pursers to provide accurate on time accounting to ownership.\n        "),a("br"),a("br"),e._v("\n        Flag and MLC approved crew contracts are issued to all crew members.  Contracts are tailored to each yacht’s individual program making provisions for the above mentioned.\n        "),a("br"),a("br"),e._v("\n        SEA’s/contracts are important for both owners and crew alike, spelling out terms of employment protect both parties and ultimately build a better working environment.\n        "),a("br"),a("br"),e._v("\n        Through our extensive professional network, Oceans Yachting assists with crewing needs. Our ability as industry professionals to assist in the process of hiring fully vetted and qualified industry professionals and understanding the crew requirements make us invaluable.\n        "),a("br"),a("br"),e._v("\n        Every yachts payroll is handled according to flag state and MLC requirements. Our payroll system tracks all crew members pay to include holiday accrued, holiday taken, federal or local deductions, medical, dental, retirement or any other payroll deduction.\n      ")])])])])}],A={name:"YachtManagement",data:function(){return{}}},P=A,$=Object(u["a"])(P,M,Y,!1,null,null,null),q=$.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-center section-header"},[e._v("Engineering Services")]),a("div",{staticClass:"section-header-underline"}),a("div",{staticClass:"section-header-padding-bottom"}),a("div",{staticClass:"row section-content-container"},[a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[a("div",{staticClass:"text-container"},[e._v("\n        Engineering Services starts with experience. From main engine repair to the correct application of Bernoulli's Equation, each member of Oceans Yachting has a high level of practical and academic experience needed to successfully support the engine room. Our focus on preventive maintenance, solid daily service, inspections and timely corrective action reduces engineering surprises, schedule delays, and lifecycle costs. Our engineering acumen includes all ship systems, new and old, including, hydraulics, reverse osmosis, electric plant, propulsion plant, AC plant, gray, black and potable water, auxiliaries, pumps, transmissions, exhaust, electronics, communications, software & IT, fuel systems and tanks.\n        "),a("br"),a("br"),e._v("\n        Oceans Yachting will guarantee the continued certification with all flag and classification societies.\n      ")])]),a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[a("div",{staticClass:"image-container"},[a("img",{staticClass:"section-img",attrs:{src:n("9ab0")}})])])])])}],I={name:"EngineeringServices",data:function(){return{}}},L=I,T=Object(u["a"])(L,F,H,!1,null,null,null),U=T.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-center section-header"},[e._v("Helicopter/Aviation")]),a("div",{staticClass:"section-header-underline"}),a("div",{staticClass:"section-header-padding-bottom"}),a("div",{staticClass:"row section-content-container"},[a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[a("div",{staticClass:"image-container"},[a("img",{staticClass:"section-img",attrs:{src:n("6163")}})])]),a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[a("div",{staticClass:"text-container"},[e._v("\n        Oceans Yachting brings a diverse aviation expertise to manage navigating through both ICAO and FAA regulations.  We can assist during the full life cycle of aviation operations from procurement, through sustainment to end of life cycle.  We excel at Helideck design, and operations from structural and material considerations to clearance and frictional concerns. The equipment needs and inspection protocols will be part of our exceptional service.\n        "),a("br"),a("br"),e._v("\n        With our aviation engineering, maintenance and operations experience our team can develop a program to gain efficiencies resulting in greater flexibility, reliability, savings and safety. Lastly, Oceans Yachting has the expertise to train and instruct crew for aviation operations support.\n        "),a("br"),a("br"),e._v("\n        Oceans Yachting will comply with SOLAS Chapter 11-2, ICAO Doc. 9261, MSM 1792 (LY2).\n      ")])])])])}],W={name:"Aviation",data:function(){return{}}},z=W,J=Object(u["a"])(z,N,R,!1,null,null,null),B=J.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"footer main-background-color"},[e._m(0),n("div",{staticClass:"social-links text-center"},[n("a",{attrs:{href:"https://www.facebook.com",target:"_blank"}},[n("font-awesome-icon",{staticClass:"social-link-padding-fb",attrs:{icon:{prefix:"fab",iconName:"facebook"}}})],1),n("a",{attrs:{href:"https://www.linkedin.com",target:"_blank"}},[n("font-awesome-icon",{staticClass:"social-link-padding-li",attrs:{icon:{prefix:"fab",iconName:"linkedin"}}})],1)])])])},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center container-fluid footer-text-container"},[n("h4",[e._v("Contact Us")]),e._v("\n      Aaron Abramowitz\n      "),n("br"),n("div",{staticClass:"contact-footer"},[n("a",{attrs:{href:"tel:203-243-0191"}},[n("span",{staticClass:"glyphicon glyphicon-earphone",attrs:{"aria-hidden":"true"}}),e._v(" 203.243.0191\n        ")]),n("br"),n("span",[e._v("aaron@oceansyachting.com")])])])}],K={name:"Footer",data:function(){return{}}},Q=K,V=Object(u["a"])(Q,D,G,!1,null,null,null),X=V.exports,Z={name:"app",components:{Home:p,CompanyProfile:E,YachtManagement:q,EngineeringServices:U,Aviation:B,Footer:X}},ee=Z,te=Object(u["a"])(ee,i,r,!1,null,null,null),ne=te.exports,ae=n("9f7b"),ie=n.n(ae),re=n("ecee"),se=n("f2d1"),oe=n("ad3d");n("f9e3"),n("2dd8"),n("69f5"),n("e1cd");re["c"].add(se["a"]),a["a"].component("font-awesome-icon",oe["a"]),a["a"].use(ie.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ne)}}).$mount("#app")},"5ffe":function(e,t,n){e.exports=n.p+"img/oceans-yachting-logo.5e1b6757.png"},6163:function(e,t,n){e.exports=n.p+"img/aviation.2968e054.jpg"},"69f5":function(e,t,n){},"824b":function(e,t,n){e.exports=n.p+"img/bg-img-5.f4cb7969.jpg"},"8ced":function(e,t,n){e.exports=n.p+"img/bg-img-3.d7fa6fec.jpg"},"9ab0":function(e,t,n){e.exports=n.p+"img/engineering.d9bbfbfc.jpg"},"9bf3":function(e,t,n){e.exports=n.p+"img/bg-img-4.177909fe.jpg"},c82a:function(e,t,n){e.exports=n.p+"img/yacht-management.1d9df315.jpg"},e01e:function(e,t,n){e.exports=n.p+"img/bg-img-2.67892474.jpg"},e1cd:function(e,t){},fc88:function(e,t,n){e.exports=n.p+"img/bg-img-1.48eb228b.jpg"}});
//# sourceMappingURL=app.c9e30f89.js.map