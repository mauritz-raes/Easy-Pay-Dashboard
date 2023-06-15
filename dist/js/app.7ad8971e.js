(()=>{var e={2661:(e,t,r)=>{"use strict";r(6992),r(8674),r(9601),r(7727);var a=r(5010),s=r(3396),o=r(7139),n={class:"flex bg-gray-50 font-lexend dark:bg-gray-900"},l={class:"lg:flex-auto w-sidebar bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 lg:z-0 z-20 overflow-auto lg:relative fixed"},i={class:"flex-auto w-full overflow-auto h-screen transition-colors",id:"body-scroll"};function d(e,t,r,d,c,u){var g=(0,s.up)("Sidebar"),p=(0,s.up)("perfect-scrollbar"),m=(0,s.up)("Header"),x=(0,s.up)("router-view"),b=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",n,[e.$route.meta.hideNav?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,o.C_)(["lg:block",{"lg:block hidden":!c.sidebar,block:c.sidebar}])},[(0,s._)("div",l,[(0,s.Wm)(p,{class:"h-screen"},{default:(0,s.w5)((function(){return[e.$route.meta.hideNav?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(g,{key:0,onSidebarToggle:u.close},null,8,["onSidebarToggle"]))]})),_:1})])],2)),(0,s._)("div",i,[e.$route.meta.hideNav?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(m,{key:0,onSidebarToggle:u.open},null,8,["onSidebarToggle"])),(0,s.Wm)(a.uT,{name:"slide-up",mode:"out-in"},{default:(0,s.w5)((function(){return[(0,s.Wm)(x)]})),_:1}),e.$route.meta.hideNav?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(b,{key:1}))])])}var c={class:"sidebar bg-white dark:bg-gray-800"},u={class:"sidebar-head p-4"},g=(0,s._)("h2",{class:"text-2xl font-normal ml-1 mt-2 text-gray-800 dark:text-gray-200",translate:"no"},[(0,s.Uk)(" Easy Pay"),(0,s._)("span",{class:"text-primary"},".")],-1),p=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"25px",height:"25px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},[(0,s._)("path",{fill:"currentColor",d:"M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"})],-1),m=[p],x={class:"sidebar-list p-4 mt-4 divide-y dark:divide-gray-700"},b={class:"pb-5"},f=(0,s._)("p",{class:"font-medium text-gray-400 dark:text-gray-400"},"Menu",-1),h={class:"wrap-item mt-4 dark:text-gray-500"},y={class:"item"},v={class:"mr-3 text-xl"},w=(0,s._)("span",{class:"w-full"}," Dashboard ",-1),k={class:"item mt-3"},_=(0,s.Uk)(" API "),T=(0,s.Uk)(" Alerts "),M=(0,s.Uk)(" Healthcheck "),L={class:"item mt-3"},D=(0,s.Uk)(" Support "),E={class:""},W=(0,s.Uk)(" Tickets "),O={class:"pb-5"},A=(0,s._)("p",{class:"font-medium text-gray-400 mt-4 dark:text-gray-400"}," Logs ",-1),z={class:"item mt-3"},S={class:"text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"},I={class:"mr-3 text-xl"},j=(0,s._)("span",{class:"w-full"}," Logs ",-1),B=(0,s._)("span",{class:"box-border mt-1 text-gray-500"},null,-1),C={class:"item mt-3"},F=(0,s.Uk)(" Exporteer logs "),R=(0,s._)("p",{class:"text-gray-800 dark:text-gray-500"},"...",-1);function q(e,t,r,a,o,n){var l=(0,s.up)("router-link"),i=(0,s.up)("Icon"),d=(0,s.up)("menu-accordion");return(0,s.wg)(),(0,s.iD)("nav",c,[(0,s._)("div",u,[(0,s.Wm)(l,{to:"/",exact:"",class:"flex"},{default:(0,s.w5)((function(){return[g]})),_:1}),(0,s._)("button",{class:"lg:hidden block dark:text-gray-400 float-right -mt-7",onClick:t[0]||(t[0]=function(t){return e.$emit("sidebarToggle")})},m)]),(0,s._)("div",x,[(0,s._)("div",b,[f,(0,s._)("div",h,[(0,s._)("div",y,[(0,s.Wm)(l,{to:"/",exact:"",class:"w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"},{default:(0,s.w5)((function(){return[(0,s._)("span",v,[(0,s.Wm)(i,{icon:"bxs:dashboard"})]),w]})),_:1})]),(0,s._)("div",k,[(0,s.Wm)(d,null,{icon:(0,s.w5)((function(){return[(0,s.Wm)(i,{icon:"gg:components"})]})),title:(0,s.w5)((function(){return[_]})),content:(0,s.w5)((function(){return[(0,s.Wm)(l,{to:"/blank",class:"w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"},{default:(0,s.w5)((function(){return[T]})),_:1}),(0,s.Wm)(l,{to:"/blank",class:"w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"},{default:(0,s.w5)((function(){return[M]})),_:1})]})),_:1})]),(0,s._)("div",L,[(0,s.Wm)(d,null,{icon:(0,s.w5)((function(){return[(0,s.Wm)(i,{icon:"ri:pages-fill"})]})),title:(0,s.w5)((function(){return[D]})),content:(0,s.w5)((function(){return[(0,s._)("div",E,[(0,s.Wm)(l,{to:"/blank",class:"w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"},{default:(0,s.w5)((function(){return[W]})),_:1})])]})),_:1})])])]),(0,s._)("div",O,[A,(0,s._)("div",z,[(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((function(){return[(0,s._)("button",S,[(0,s._)("span",I,[(0,s.Wm)(i,{icon:"bi:table"})]),j,B])]})),_:1})]),(0,s._)("div",C,[(0,s.Wm)(d,null,{icon:(0,s.w5)((function(){return[(0,s.Wm)(i,{icon:"ant-design:form-outlined"})]})),title:(0,s.w5)((function(){return[F]})),content:(0,s.w5)((function(){return[R]})),_:1})])])])])}var Z=r(4682),P=["aria-expanded","aria-controls"],U={class:"mr-3 text-xl"},H={class:"w-full"},$={class:"float-right"},N=["id"];function Y(e,t,r,n,l,i){var d=(0,s.up)("Icon");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("button",{onClick:t[0]||(t[0]=function(e){return i.toggleAccordion()}),class:(0,o.C_)(["text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3",{"bg-gray-200  dark:bg-gray-700":l.isOpen,"bg-transparent":!l.isOpen}]),"aria-expanded":l.isOpen,"aria-controls":"collapse".concat(e._uid)},[(0,s._)("span",U,[(0,s.WI)(e.$slots,"icon")]),(0,s._)("span",H,[(0,s.WI)(e.$slots,"title")]),(0,s._)("span",{class:(0,o.C_)(["box-border mt-1 text-gray-500 dark:text-gray-500",{"rotate-180":l.isOpen,"rotate-0":!l.isOpen}])},[(0,s._)("span",$,[(0,s.Wm)(d,{icon:"fa6-solid:angle-down"})])],2)],10,P),(0,s.wy)((0,s._)("div",{class:"dark:bg-gray-900 bg-gray-100 rounded-md mt-2 p-2",id:"collapse".concat(e._uid)},[(0,s.WI)(e.$slots,"content")],8,N),[[a.F8,l.isOpen]])],64)}const V={data:function(){return{isOpen:!1}},methods:{toggleAccordion:function(){this.isOpen=!this.isOpen}},components:{Icon:Z.JO}};var J=r(89);const G=(0,J.Z)(V,[["render",Y]]),K=G,Q={components:{Icon:Z.JO,MenuAccordion:K}},X=(0,J.Z)(Q,[["render",q]]),ee=X;r(8309);var te=r(7712),re={class:"bg-white dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700"},ae={class:"wrap-header flex items-center gap-5 justify-between flex-wrap"},se={class:"flex flex-no-shrink items-center"},oe=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"2em",height:"2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},[(0,s._)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"})],-1),ne=[oe],le={class:"input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700"},ie={class:"text-3xl p-2 text-gray-400"},de=(0,s._)("input",{type:"text",placeholder:"Zoeken...",class:"p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"},null,-1),ce={class:"mr-5 flex gap-3"},ue={class:"lg:hidden block mr-5 text-2xl text-gray-500 relative"},ge={key:0},pe={key:1},me=(0,s._)("i",{class:"bg-red-500 rounded-full p-1.5 border border-white dark:border-gray-700 -mt-1 absolute"},null,-1),xe={id:"notificaitons",class:"block absolute lg:right-56 right-28 mt-12 z-50 w-96 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"},be=(0,s._)("div",{class:"flex justify-between p-3 text-gray-800 dark:text-gray-300"},[(0,s._)("h2",null,"Notificaties"),(0,s._)("button",{class:"text-blue-500 text-sm"},"Markeren als gelezen")],-1),fe={key:0,class:"p-5 text-center"},he=(0,s._)("p",{class:"text-gray-800 dark:text-gray-300"}," Nog geen notificaties. ",-1),ye=[he],ve={class:"flex gap-5"},we=["src"],ke={class:"mt-1"},_e={class:"flex gap-3"},Te={class:"dark:text-gray-200"},Me={class:"dark:text-gray-500 text-gray-400 text-xs"},Le={class:"text-sm dark:text-gray-500 text-gray-400"},De=(0,s._)("div",{class:"p-2"},[(0,s._)("button",{class:"w-full p-2 text-gray-800 dark:text-gray-300"}," Bekijk allles ")],-1),Ee=(0,s.uE)('<div class="user-avatar flex p-1 cursor-pointer rounded-md"><div><img src="'+te+'" class="rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500" alt=""></div><div class="text-left lg:block md:block hidden"><h2 class="dark:text-white text-gray-800">Mauritz</h2><p class="text-xs text-gray-400 dark:text-gray-500"> Admin </p></div></div>',1),We=[Ee],Oe={id:"dropdownSmall",class:"block absolute right-10 mt-12 z-50 w-52 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"},Ae=(0,s._)("div",{class:"py-3 px-4 text-sm text-gray-900 dark:text-gray-200"},[(0,s._)("div",null,"Ingelogt als"),(0,s._)("div",{class:"font-medium truncate"},"Mauritz Raes")],-1),ze=(0,s._)("ul",{class:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownSmallButton"},[(0,s._)("li",null,[(0,s._)("a",{href:"#",class:"block py-2 px-4 hover:bg-primary hover:text-white"},"Profiel")]),(0,s._)("li",null,[(0,s._)("a",{href:"#",class:"block py-2 px-4 hover:bg-primary hover:text-white"},"Instellingen")])],-1),Se=(0,s._)("div",{class:"py-1"},[(0,s._)("a",{href:"#",class:"block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white"},"Uitloggen")],-1),Ie=[Ae,ze,Se];function je(e,t,r,n,l,i){var d=(0,s.up)("Icon");return(0,s.wg)(),(0,s.iD)("header",re,[(0,s._)("div",ae,[(0,s._)("div",se,[(0,s._)("button",{class:"text-gray-500 lg:hidden ml-3 block",onClick:t[0]||(t[0]=function(t){return e.$emit("sidebarToggle",!0)})},ne),(0,s._)("div",le,[(0,s._)("span",ie,[(0,s.Wm)(d,{icon:"ei:search"})]),de])]),(0,s._)("div",ce,[(0,s._)("button",ue,[(0,s._)("i",null,[(0,s.Wm)(d,{icon:"ic:outline-search"})])]),(0,s._)("button",{onClick:t[1]||(t[1]=function(){return i.fullscreenToggle&&i.fullscreenToggle.apply(i,arguments)}),class:"mr-5 text-2xl text-gray-500 relative"},[l.fullscreenMode?((0,s.wg)(),(0,s.iD)("i",pe,[(0,s.Wm)(d,{icon:"ic:outline-fullscreen-exit"})])):((0,s.wg)(),(0,s.iD)("i",ge,[(0,s.Wm)(d,{icon:"ic:outline-fullscreen"})]))]),l.darkMode?((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:t[3]||(t[3]=function(e){return i.setTheme(!1)}),class:"mr-5 text-2xl text-gray-500"},[(0,s.Wm)(d,{icon:"ri:moon-fill"})])):((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:t[2]||(t[2]=function(e){return i.setTheme(!0)}),class:"mr-5 text-2xl text-gray-500"},[(0,s.Wm)(d,{icon:"ph:sun-dim"})])),(0,s._)("button",{onClick:t[4]||(t[4]=function(){return i.notifToggle&&i.notifToggle.apply(i,arguments)}),class:"mr-5 text-2xl text-gray-500 relative"},[me,(0,s.Wm)(d,{icon:"clarity:notification-line"})]),(0,s.Wm)(a.uT,{name:"fade"},{default:(0,s.w5)((function(){return[(0,s.wy)((0,s._)("div",xe,[be,l.notifList.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",fe,ye)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.notifList,(function(e,t){return(0,s.wg)(),(0,s.iD)("div",{class:"p-2 pl-3 w-full",key:t},[(0,s._)("div",ve,[(0,s._)("div",null,[(0,s._)("img",{class:"w-9 rounded-full",src:i.imageAssets(e.image),alt:""},null,8,we)]),(0,s._)("div",ke,[(0,s._)("div",_e,[(0,s._)("h2",Te,(0,o.zw)(e.name),1),(0,s._)("p",Me,(0,o.zw)(i.limitText(e.message)),1)]),(0,s._)("p",Le,(0,o.zw)(e.hours),1)])])])})),128)),De],512),[[a.F8,l.notification]])]})),_:1}),(0,s._)("button",{onBlur:t[5]||(t[5]=function(){return i.menuToggleBlur&&i.menuToggleBlur.apply(i,arguments)}),onClick:t[6]||(t[6]=function(){return i.menuToggle&&i.menuToggle.apply(i,arguments)})},We,32),(0,s.Wm)(a.uT,{name:"fade"},{default:(0,s.w5)((function(){return[(0,s.wy)((0,s._)("div",Oe,Ie,512),[[a.F8,l.menu]])]})),_:1})])])])}var Be=document.documentElement;function Ce(e){e?Fe():Re()}function Fe(){Be.requestFullscreen?Be.requestFullscreen():Be.webkitRequestFullscreen?Be.webkitRequestFullscreen():Be.msRequestFullscreen&&Be.msRequestFullscreen()}function Re(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}var qe=function(e){localStorage.getItem("color-theme")?e?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("light")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))},Ze=function(){var e="dark"==localStorage.getItem("color-theme");return localStorage.getItem("color-theme")?"dark"===localStorage.getItem("color-theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("light")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")),e};const Pe={data:function(){return{menu:!1,darkMode:!1,notification:!1,fullscreenMode:!1,notifList:[{name:"Seppe Derweduwen",image:"user2.png",message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora culpa blanditiis neque animi sequi sunt incidunt beatae? Aperiam facilis consectetur,",hours:"10 uur geleden"},{name:"Robbe De Geyter",image:"user2.png",message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora culpa blanditiis neque animi sequi sunt incidunt beatae? Aperiam facilis consectetur,",hours:"1 dag geleden"},{name:"Tijs Baevens",image:"user2.png",message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora culpa blanditiis neque animi sequi sunt incidunt beatae? Aperiam facilis consectetur,",hours:"1 dag geleden"}]}},components:{Icon:Z.JO},watch:{$route:function(){this.menu=!1,this.notification=!1}},methods:{fullscreen:Ce,setDarkMode:qe,loadDarkMode:Ze,menuToggle:function(){this.menu=!this.menu},menuToggleBlur:function(){this.menu=!1},notifToggle:function(){this.notification=!this.notification},notifToggleBlur:function(){this.notification=!1},limitText:function(e){var t=e.length>25?e.substring(0,25)+"...":e;return t},fullscreenToggle:function(){this.fullscreenMode=!this.fullscreenMode,this.fullscreen(this.fullscreenMode)},setTheme:function(e){this.darkMode=e,this.setDarkMode(e)},imageAssets:function(e){return r(5459)("./"+e)}},mounted:function(){var e=this;this.darkMode=this.loadDarkMode(),document.onfullscreenchange=function(t){document.fullscreenElement?e.fullscreenMode=!0:e.fullscreenMode=!1}}},Ue=(0,J.Z)(Pe,[["render",je]]),He=Ue;var $e={class:"p-4"},Ne=(0,s._)("footer",{class:"w-full box-border p-5 mt-3 text-center"},[(0,s._)("p",{class:"text-sm dark:text-gray-400"}," Gemaakt door Mauritz Raes ")],-1),Ye=[Ne];function Ve(e,t){return(0,s.wg)(),(0,s.iD)("div",$e,Ye)}const Je={},Ge=(0,J.Z)(Je,[["render",Ve]]),Ke=Ge;var Qe=r(3863);const Xe={name:"App",data:function(){return{sidebarDark:!1,sidebar:!1}},components:{Header:He,Footer:Ke,Sidebar:ee},methods:{open:function(){this.sidebar=!0},close:function(){this.sidebar=!1}},watch:{$route:function(){this.sidebar=!1}},mounted:function(){Qe.Z.init(document.querySelector("#body-scroll"))}},et=(0,J.Z)(Xe,[["render",d]]),tt=et;var rt=r(678),at={class:"dashboard p-4"},st=(0,s._)("div",{class:"mt-2 w-full"},[(0,s._)("div",{class:"lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between"},[(0,s._)("div",null,[(0,s._)("p",{class:"uppercase text-xs text-gray-700 font-semibold"},"overzicht"),(0,s._)("h1",{class:"text-2xl text-gray-900 dark:text-gray-200 font-medium"}," Dashboard ")])])],-1),ot=(0,s._)("div",{class:"wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5"},[(0,s._)("div",{class:"card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"},[(0,s._)("div",{class:"p-2 max-w-sm"},[(0,s._)("div",{class:"bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto"},[(0,s._)("span",{class:""},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"30px",height:"30px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"})])])])]),(0,s._)("div",{class:"block p-2 w-full"},[(0,s._)("p",{class:"font-semibold text-gray-900 dark:text-gray-200 text-xl"}," €554.214,74 "),(0,s._)("h2",{class:"font-normal text-gray-400 text-md mt-1"},"Omzet")])]),(0,s._)("div",{class:"card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"},[(0,s._)("div",{class:"p-2 max-w-sm"},[(0,s._)("div",{class:"bg-green-200 rounded-full w-14 h-14 text-lg p-3 text-green-600 mx-auto"},[(0,s._)("span",{class:""},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"30px",height:"30px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"})])])])]),(0,s._)("div",{class:"block p-2 w-full"},[(0,s._)("p",{class:"font-semibold text-gray-900 dark:text-gray-200 text-xl"}," 2153 "),(0,s._)("h2",{class:"font-normal text-gray-400 text-md mt-1"},"Transacties")])]),(0,s._)("div",{class:"card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"},[(0,s._)("div",{class:"p-2 max-w-sm"},[(0,s._)("div",{class:"bg-red-200 rounded-full w-14 h-14 text-lg p-3 text-red-600 mx-auto"},[(0,s._)("span",{class:""},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"30px",height:"30px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},[(0,s._)("path",{fill:"none",d:"M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"}),(0,s._)("path",{fill:"currentColor",d:"M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"})])])])]),(0,s._)("div",{class:"block p-2 w-full"},[(0,s._)("p",{class:"font-semibold text-gray-900 dark:text-gray-200 text-xl"}," 1453 "),(0,s._)("h2",{class:"font-normal text-gray-400 text-md mt-1"}," Gebruikers ")])]),(0,s._)("div",{class:"card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"},[(0,s._)("div",{class:"p-2 max-w-sm"},[(0,s._)("div",{class:"bg-purple-200 rounded-full w-14 h-14 text-lg p-3 text-purple-600 mx-auto"},[(0,s._)("span",{class:""},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"30px",height:"30px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},[(0,s._)("g",{fill:"currentColor"},[(0,s._)("path",{d:"M15 13v1H1.5l-.5-.5V0h1v13h13Z"}),(0,s._)("path",{d:"M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z"})])])])])]),(0,s._)("div",{class:"block p-2 w-full"},[(0,s._)("p",{class:"font-semibold text-gray-900 dark:text-gray-200 text-xl"}," 154852 "),(0,s._)("h2",{class:"font-normal text-gray-400 text-md mt-1"},"API Calls")])])],-1),nt={class:"mt-2 lg:flex block lg:gap-2"},lt={class:"mt-2 bg-white dark:bg-gray-800 p-0 w-full rounded-md box-border border dark:border-gray-700"},it={class:"head p-5"},dt=(0,s._)("h2",{class:"font-bold text-lg text-gray-800 dark:text-gray-200"}," 1,780 ",-1),ct=(0,s._)("p",{class:"text-gray-400 font-lexend font-normal"}," Transacties ",-1),ut={class:"float-right"},gt={class:"text-green-500 -mt-12 flex"},pt=(0,s._)("span",{class:"mr-2"}," 108.9% ",-1),mt={class:"wrapper-chart mt-5 pr-2 pl-2"},xt=(0,s.uE)('<br><hr><div class="footer p-5"><div class="wrapper-button flex justify-between mt-3"><select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"><option value="">Laatste 7 dagen</option></select><button class="uppercase border-b border-red-600 text-red-600"> Export report </button></div></div>',3),bt={class:"mt-2 bg-white dark:bg-gray-800 p-0 w-full rounded-md box-border border dark:border-gray-700"},ft={class:"head p-5"},ht=(0,s._)("h2",{class:"font-bold text-lg text-gray-800 dark:text-gray-200"}," 5,355 ",-1),yt=(0,s._)("p",{class:"text-gray-400 font-lexend font-normal"},"APÏ Calls",-1),vt={class:"float-right"},wt={class:"text-green-500 -mt-12 flex"},kt=(0,s._)("span",{class:"mr-2"}," 47.9% ",-1),_t={class:"wrapper-chart mt-5"},Tt=(0,s.uE)('<br><hr><div class="footer p-5"><div class="wrapper-button flex justify-between mt-3"><select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"><option value="">Laatste 7 dagen</option></select><button class="uppercase border-b border-red-600 text-red-600"> Export report </button></div></div>',3),Mt={class:"mt-2 bg-white dark:bg-gray-800 p-0 w-full rounded-md box-border border dark:border-gray-700"},Lt=(0,s._)("div",{class:"head p-5"},[(0,s._)("h2",{class:"font-bold text-lg text-gray-800 dark:text-gray-200"}," 475 "),(0,s._)("p",{class:"text-gray-400 font-lexend font-normal"}," Nieuwe gebruikers ")],-1),Dt={class:"wrapper-chart mt-5"},Et=(0,s.uE)('<div class="p-3"></div><br><hr><div class="footer p-5"><div class="wrapper-button flex justify-between mt-3"><select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"><option value="">Laatste 7 dagen</option></select><button class="uppercase border-b border-red-600 text-red-600"> Export report </button></div></div>',4),Wt={class:"mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"},Ot=(0,s._)("h2",{class:"font-bold text-lg text-gray-800 dark:text-gray-200"}," Transacties ",-1),At=(0,s._)("p",{class:"text-gray-400 font-lexend font-normal"}," Lijst van de laatste transacties ",-1),zt={class:"wrapping-table mt-10"},St={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"},It=(0,s._)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[(0,s._)("tr",null,[(0,s._)("th",{scope:"col",class:"uppercase px-6 py-3"}," Transactie "),(0,s._)("th",{scope:"col",class:"uppercase px-6 py-3"}," Datum & Tijdstip "),(0,s._)("th",{scope:"col",class:"uppercase px-6 py-3"}," Bedrag "),(0,s._)("th",{scope:"col",class:"uppercase px-6 py-3"}," Status ")])],-1),jt={class:"px-6 py-4"},Bt={class:"px-6 py-4"},Ct={class:"px-6 py-4"},Ft={class:"px-6 py-4"},Rt={key:0,class:"text-green-800 bg-green-300 px-3 py-1 rounded-md"},qt={key:1,class:"text-purple-800 bg-purple-300 px-3 py-1 rounded-md"},Zt={key:2,class:"text-red-800 bg-red-300 px-3 py-1 rounded-md"},Pt=(0,s._)("div",{class:"wrapper-button flex justify-between mt-3"},[(0,s._)("select",{name:"",id:"",class:"dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"},[(0,s._)("option",{value:""},"Laatste 7 dagen")]),(0,s._)("button",{class:"uppercase border-b border-red-600 text-red-600"}," Export Report ")],-1);function Ut(e,t,r,a,n,l){var i=(0,s.up)("Icon"),d=(0,s.up)("apexchart");return(0,s.wg)(),(0,s.iD)("div",at,[st,ot,(0,s._)("div",nt,[(0,s._)("div",lt,[(0,s._)("div",it,[dt,ct,(0,s._)("span",ut,[(0,s._)("h2",gt,[pt,(0,s._)("span",null,[(0,s.Wm)(i,{icon:"akar-icons:arrow-up"})])])])]),(0,s._)("div",mt,[(0,s.Wm)(d,{width:"100%",height:"380",type:"bar",options:n.optionsBar,series:n.seriesBar},null,8,["options","series"]),xt])]),(0,s._)("div",bt,[(0,s._)("div",ft,[ht,yt,(0,s._)("span",vt,[(0,s._)("h2",wt,[kt,(0,s._)("span",null,[(0,s.Wm)(i,{icon:"akar-icons:arrow-up"})])])])]),(0,s._)("div",_t,[(0,s.Wm)(d,{width:"100%",height:"380",type:"area",options:n.optionsTrans,series:n.seriesTrans},null,8,["options","series"]),Tt])]),(0,s._)("div",Mt,[Lt,(0,s._)("div",Dt,[(0,s.Wm)(d,{width:"100%",height:"380",type:"pie",options:n.optionsDonut,series:n.seriesDonut},null,8,["options","series"]),Et])])]),(0,s._)("div",Wt,[Ot,At,(0,s._)("div",zt,[(0,s._)("table",St,[It,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tableTransaction,(function(e){return(0,s.wg)(),(0,s.iD)("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50",key:e.transaction},[(0,s._)("td",jt,(0,o.zw)(e.transaction),1),(0,s._)("td",Bt,(0,o.zw)(e.datetime),1),(0,s._)("td",Ct,(0,o.zw)(e.amount),1),(0,s._)("td",Ft,["compleet"==e.statusTransaction?((0,s.wg)(),(0,s.iD)("span",Rt,(0,o.zw)(e.statusTransaction),1)):"in verwerking"==e.statusTransaction?((0,s.wg)(),(0,s.iD)("span",qt,(0,o.zw)(e.statusTransaction),1)):((0,s.wg)(),(0,s.iD)("span",Zt,(0,o.zw)(e.statusTransaction),1))])])})),128))])])]),Pt])])}const Ht={name:"Dashboard",data:function(){return{optionsBar:{chart:{toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},legend:{show:!1},xaxis:{show:!1},yaxis:{show:!1},colors:["#8a0000","#46b000"],dataLabels:{enabled:!1},stroke:{curve:"straight"}},seriesBar:[{name:"geannuleerd",data:[2,4,5,5,3,6,7,9]},{name:"compleet",data:[20,34,45,55,79,87,90,98]}],optionsTrans:{chart:{toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},legend:{show:!1},xaxis:{show:!1},yaxis:{show:!1},colors:["#4f46e5"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shadeIntensity:0,opacityFrom:0,opacityTo:.3,stops:[0,90,100]}},stroke:{curve:"smooth"}},seriesTrans:[{name:"Transacties ",data:[30,40,45,50,49,60,70,91]}],optionsDonut:{chart:{type:"donut"},legend:!1,dataLabels:{enabled:!1},labels:["Bank","Webshop","Consument"]},seriesDonut:[5,15,83],tableTransaction:[{transaction:"Betaling van Luc Vervoort",datetime:"Apr 22, 2023",amount:"EUR 750,00",statusTransaction:"compleet"},{transaction:"Betaling van Emma Rossum",datetime:"Mei 2, 2023",amount:"EUR 33,20",statusTransaction:"compleet"},{transaction:"Betaling van Felix Lengyel",datetime:"Mei 5, 2023",amount:"EUR 51,95",statusTransaction:"in verwerking"},{transaction:"Betaling van Abraham Lincoln",datetime:"Mei 5, 2023",amount:"EUR 54,00",statusTransaction:"geannuleerd"}]}},components:{Icon:Z.JO},mounted:function(){}},$t=(0,J.Z)(Ht,[["render",Ut]]),Nt=$t;var Yt={class:"h-screen p-5 flex justify-center dark:text-white text-gray-700"},Vt=(0,s._)("div",null,[(0,s._)("h2",{class:"text-5xl mt-48"},"Lege pagina")],-1),Jt=[Vt];function Gt(e,t){return(0,s.wg)(),(0,s.iD)("div",Yt,Jt)}const Kt={},Qt=(0,J.Z)(Kt,[["render",Gt]]),Xt=Qt;var er=" - Easy Pay Dashboard",tr=[{path:"/",name:"Dashboard",component:Nt,meta:{title:"Dashboard "+er}},{path:"/Blank",name:"Blank Page",component:Xt,meta:{title:"Lege Pagina"+er}}],rr=(0,rt.p7)({history:(0,rt.PO)("/"),routes:tr,linkExactActiveClass:"exact-active"});rr.beforeEach((function(e,t,r){document.title=e.meta.title,r()}));const ar=rr;var sr=r(407),or=r.n(sr),nr=r(145),lr=r(2393),ir=r(3051),dr=r.n(ir),cr=(0,a.ri)(tt);cr.use(ar),cr.use((0,lr.WB)()),cr.use(or()),cr.use(nr.Z),cr.use(dr()),cr.mount("#app")},5459:(e,t,r)=>{var a={"./user.jpg":7712,"./user1.png":555,"./user2.png":1013,"./user3.png":8179,"./user4.png":491,"./user5.png":9415};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id=5459},7712:(e,t,r)=>{"use strict";e.exports=r.p+"img/user.323e0148.jpg"},555:(e,t,r)=>{"use strict";e.exports=r.p+"img/user1.0d4be88d.png"},1013:(e,t,r)=>{"use strict";e.exports=r.p+"img/user2.a77e78d5.png"},8179:(e,t,r)=>{"use strict";e.exports=r.p+"img/user3.254b8fc6.png"},491:(e,t,r)=>{"use strict";e.exports=r.p+"img/user4.f2d8646c.png"},9415:(e,t,r)=>{"use strict";e.exports=r.p+"img/user5.f05448ae.png"}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,(()=>{var e=[];r.O=(t,a,s,o)=>{if(!a){var n=1/0;for(c=0;c<e.length;c++){for(var[a,s,o]=e[c],l=!0,i=0;i<a.length;i++)(!1&o||n>=o)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(l=!1,o<n&&(n=o));if(l){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,s,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/"})(),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var s,o,[n,l,i]=a,d=0;if(n.some((t=>0!==e[t]))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(i)var c=i(r)}for(t&&t(a);d<n.length;d++)o=n[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},a=self["webpackChunkEasyPayApp"]=self["webpackChunkEasyPayApp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[998],(()=>r(2661)));a=r.O(a)})();
//# sourceMappingURL=app.7ad8971e.js.map