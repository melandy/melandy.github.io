webpackJsonp([0],[,,,,,,,,,,function(t,e,a){"use strict";var s=a(1),n=a(90),i=a(91),c=a(93),r=a(94),o=a.n(r),l=a(95),u=a.n(l);s.a.use(n.a),e.a=new n.a.Store({state:{prices:[],loc:"ru",service:"",i18n:{locale:"ru",messages:{ru:o.a,ua:u.a}}},actions:i.a,mutations:c.a})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(13),i=a(15),c=a(17),r=(a.n(c),a(18)),o=(a.n(r),a(19)),l=a(10),u=a(96),d=a(98),f=a.n(d);s.a.use(i.a),s.a.use(n.a),window.onload=(new r).init(),c.sync(l.a,o.a);new s.a({el:"#app",router:o.a,store:l.a,i18n:u.a,template:"<App/>",components:{App:f.a}})},,,function(t,e){},,,,,function(t,e,a){"use strict";var s=a(1),n=a(20),i=a(21),c=a.n(i),r=a(41),o=a.n(r),l=a(53),u=a.n(l);s.a.use(n.a);var d=new n.a({mode:"history",linkExactActiveClass:"router-link-exact-active",routes:[{path:"/price",redirect:"/price/tr"},{path:"/price/:id",component:u.a},{path:"/contacts",component:o.a},{path:"/",component:c.a}]});e.a=d},,function(t,e,a){var s=a(0)(a(22),a(40),null,null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(23),n=a.n(s),i=a(28),c=a.n(i),r=a(32),o=a.n(r),l=a(36),u=a.n(l);e.default={components:{HomeFirst:u.a,HomeCards:n.a,HomeServices:o.a,HomeClients:c.a}}},function(t,e,a){function s(t){a(24)}var n=a(0)(a(26),a(27),s,"data-v-5b7fdbb6",null);t.exports=n.exports},function(t,e){},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{iconSize:"fa fa-4x"}},methods:{getIcon:function(t){return this.iconSize+" "+t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cards row align-items-center container"},[a("div",{staticClass:"col-12 row wow slideInUp"},t._l(t.$t("cards.blocks"),function(e,s){return a("div",{key:s,staticClass:"col-lg-4"},[a("div",{staticClass:"card"},[a("i",{class:t.getIcon(e.icon),attrs:{"aria-hidden":"true"}}),t._v(" "),a("section",{staticClass:"card-block"},[a("h3",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.text))])])])])}))])},staticRenderFns:[]}},function(t,e,a){function s(t){a(29)}var n=a(0)(a(30),a(31),s,"data-v-61cf13ca",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clients container-fluid"},[a("h2",[t._v(t._s(t.$t("clients.title")))]),t._v(" "),t._l(t.$t("clients.cards"),function(e,s){return a("div",{key:s},[a("div",{staticClass:"row align-items-center justify-content-center wow fadeIn data-wow-delay='.5s'"},[a("div",{staticClass:"head-block col-lg-2"},[a("h3",{staticClass:"featurette-heading"},[t._v(t._s(e.head))])]),t._v(" "),a("section",{staticClass:"col-lg-7"},[a("h3",{staticClass:"featurette-heading"},[a("span",{staticClass:"text-muted"},[t._v(t._s(e.muted))])]),t._v(" "),a("p",{staticClass:"lead"},[t._v(t._s(e.lead))])])]),t._v(" "),a("hr",{staticClass:"featurette-divider"})])})],2)},staticRenderFns:[]}},function(t,e,a){function s(t){a(33)}var n=a(0)(a(34),a(35),s,"data-v-11252a0c",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{iconSize:"fa fa-2x"}},methods:{getIcon:function(t){return this.iconSize+" "+t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"services row align-items-center container-fluid",staticStyle:{margin:"auto"}},[a("div",{staticClass:"col-12 row justify-content-center"},t._l(t.$t("hCards.blocks"),function(e,s){return a("div",{key:s,staticClass:"col-lg-5 mt-4"},[a("div",{staticClass:"panel row align-items-center wow zoomIn data-wow-delay='.5s'",staticStyle:{height:"50px"}},[a("div",{staticClass:"col icon"},[a("i",{class:t.getIcon(e.icon),attrs:{"aria-hidden":"true"}})]),t._v(" "),a("section",{staticClass:"col-8 text-left"},[a("p",[t._v(t._s(e.text))])])])])}))])},staticRenderFns:[]}},function(t,e,a){function s(t){a(37)}var n=a(0)(a(38),a(39),s,"data-v-3084e21c",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{slides:function(){return this.$t("carousel.slides")}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-container container-fluid"},t._l(t.slides,function(e){return a("div",{key:e.id,staticClass:"row align-items-center slide-text wow zoomIn",class:e.align,staticStyle:{height:"33%"},attrs:{"data-wow-delay":2*e.id+"s"}},[a("div",{staticClass:"col-8"},[a("h3",[t._v(t._s(e.caption))]),t._v(" "),a("p",{staticClass:"text-center"},[t._v(t._s(e.text))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("home-first"),t._v(" "),a("home-cards"),t._v(" "),a("home-services"),t._v(" "),a("home-clients")],1)},staticRenderFns:[]}},function(t,e,a){function s(t){a(42)}var n=a(0)(a(43),a(52),s,"data-v-85ad34e6",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(44),n=a.n(s),i=a(48),c=a.n(i);e.default={name:"contacts",components:{ContactDetail:n.a,MessageTo:c.a}}},function(t,e,a){function s(t){a(45)}var n=a(0)(a(46),a(47),s,"data-v-2e857e50",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contactDetail",computed:{mailTo:function(){return"mailto:"+this.$t("contacts.mail.data")}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("address",[a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-block"},[a("h3",{staticClass:"card-title text-muted"},[t._v(t._s(t.$t("contacts.phone.head")))]),t._v(" "),a("p",{staticClass:"card-text text-muted",staticStyle:{height:"30px"}},[a("img",{attrs:{src:"/static/assets/png/vodafone.png",alt:"Vodafone",width:"30px"}}),t._v("\n        "+t._s(t.$t("contacts.phone.data[0]"))+"\n      ")]),t._v(" "),a("p",{staticClass:"card-text  text-muted",staticStyle:{height:"30px"}},[a("img",{attrs:{src:"/static/assets/png/lifecell.png",alt:"Lifecell",width:"30px"}}),t._v("\n        "+t._s(t.$t("contacts.phone.data[1]"))+"\n      ")])])]),t._v(" "),a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-block"},[a("h3",{staticClass:"card-title text-muted",staticStyle:{height:"58px"}},[t._v(t._s(t.$t("contacts.mail.head")))]),t._v(" "),a("div",{staticClass:"row justify-content-center",staticStyle:{height:"45px"}},[t._m(0),t._v(" "),a("div",{staticClass:"col-6 text-left"},[a("a",{staticClass:"card-link",staticStyle:{margin:"0"},attrs:{href:t.mailTo}},[t._v(t._s(t.$t("contacts.mail.text")))])])])])]),t._v(" "),a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-block"},[a("h3",{staticClass:"card-title text-muted",staticStyle:{height:"58px"}},[t._v(t._s(t.$t("contacts.social.head")))]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3 text-right"},[a("i",{staticClass:"fa fa-envelope fa-2x",staticStyle:{color:"#84b27c"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-text text-muted",staticStyle:{height:"46px"}},[a("a",{staticClass:"card-link",attrs:{href:"skype:melentyev.eugene?call"}},[a("i",{staticClass:"fa fa-skype fa-2x",staticStyle:{color:"#0275d8"}})]),t._v(" "),a("a",{staticClass:"card-link",attrs:{href:"https://www.facebook.com/eugene.melentyev",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook-official fa-2x",staticStyle:{color:"#3b589e"}})])])}]}},function(t,e,a){function s(t){a(49)}var n=a(0)(a(50),a(51),s,"data-v-6c6896bd",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"message",data:function(){return{senderName:"",senderEmail:"",messageText:""}},computed:{isEmail:function(){return/[a-zA-Z0-9_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/.test(this.senderEmail)},formValid:function(){return this.isNotEmpty(this.senderName)&&this.isNotEmpty(this.messageText)&&this.isEmail}},methods:{isNotEmpty:function(t){return t.length>=2}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center mb-3"},[a("div",{staticClass:"card-block"},[a("h3",{staticClass:"card-title text-muted"},[t._v(t._s(t.$t("mess.mesHeader")))]),t._v(" "),a("form",{staticClass:"container-fluid",attrs:{action:t.$t("mess.messageTo"),method:"POST"}},[a("input",{attrs:{type:"hidden",name:"_next",value:"/contacts"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"_subject",value:"Сообщение с моего сайта"}}),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"_gotcha"}}),t._v(" "),a("div",{staticClass:"form-group text-muted",class:t.isNotEmpty(t.senderName)?"has-success":""},[a("label",{attrs:{for:"exampleInputName"}},[t._v(t._s(t.$t("mess.name.yourName")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.senderName,expression:"senderName"}],staticClass:"form-control",class:t.isNotEmpty(t.senderName)?"form-control-success":"",attrs:{type:"text",name:"Name",id:"exampleInputName",placeholder:t.$t("mess.name.phName"),required:""},domProps:{value:t.senderName},on:{input:function(e){e.target.composing||(t.senderName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group text-muted",class:t.isEmail?"has-success":""},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v(t._s(t.$t("mess.mail.yourEmail")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.senderEmail,expression:"senderEmail"}],staticClass:"form-control",class:t.isEmail?"form-control-success":"",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:t.$t("mess.mail.phEmail"),name:"Отправитель",required:""},domProps:{value:t.senderEmail},on:{input:function(e){e.target.composing||(t.senderEmail=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v(t._s(t.$t("mess.mail.attEmail")))])]),t._v(" "),a("div",{staticClass:"form-group text-muted",class:t.isNotEmpty(t.messageText)?"has-success":""},[a("label",{attrs:{for:"exampleTextarea"}},[t._v(t._s(t.$t("mess.text")))]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.messageText,expression:"messageText"}],staticClass:"form-control",attrs:{id:"exampleTextarea",rows:"4",name:"Сообщение",required:""},domProps:{value:t.messageText},on:{input:function(e){e.target.composing||(t.messageText=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-block btn-primary pt-3 fa fa-paper-plane-o",attrs:{type:"submit",disabled:!t.formValid}},[t._v("\n        "+t._s(t.$t("mess.button"))+"\n      ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-contact",staticStyle:{width:"100% !important"}},[a("div",{staticClass:"row container-fluid justify-content-center"},[a("section",{staticClass:"col-lg-5"},[a("contact-detail")],1),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("message-to")],1)])])},staticRenderFns:[]}},function(t,e,a){function s(t){a(54)}var n=a(0)(a(55),a(89),s,"data-v-eb96a2fe",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(56),n=a.n(s),i=a(83),c=a.n(i);e.default={components:{Tbl:c.a},computed:{prices:function(){return this.$store.state.prices?this.$store.state.prices[this.service]:(console.log("no data"),[])},service:function(){return this.$store.state.service},loc:function(){return this.$store.state.loc},fields:function(){var t={};return t.langFrom={label:this.$t(this.service+".tbl.langFrom"),sortable:!1},"tr"===this.service&&(t.langTo={label:this.$t(this.service+".tbl.langTo"),sortable:!1}),t.cost={label:this.$t(this.service+".tbl.langPrice")},t},languages:function(){var t=[{text:"All",value:null}];return this.prices?t.concat(n.a(this.prices.reduce(function(t,e){return t[e.langFrom]=!0,e.langTo&&(t[e.langTo]=!0),t},{}))):t}},asyncData:function(t){var e=t.store,a=t.route.params.id;return e.dispatch("UPDATE_SERVICE",{srv:a})},methods:{loadItems:function(){this.$store.dispatch("UPDATE_SERVICE",{srv:this.$store.state.route.params.id}),this.$store.dispatch("FETCH_PRICES")}},beforeMount:function(){this.loadItems()},beforeRouteUpdate:function(t,e,a){var s=this.$options.asyncData;s?s({store:this.$store,route:t}).then(a).catch(a):a()}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){function s(t){a(84)}var n=a(0)(a(85),a(88),s,null,null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(86),n=a.n(s);e.default={props:["prices","fields","languages"],watch:{languages:"resetFilter"},data:function(){return{dismissCountDown:3,currentPage:1,perPage:10,filter:null}},methods:{resetFilter:function(){this.filter=null},countDownChanged:function(t){this.dismissCountDown=t}},computed:{rowsAfterFilter:function(){var t=[];if(this.filter){var e=new RegExp(this.filter,"ig");return t=this.prices.filter(function(t){var a=e.test(n.a(t));return e.lastIndex=0,a}),t.length}return this.prices.length}}}},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row justify-content-center"},[a("b-form-fieldset",{staticClass:"col-lg-6 text-center",attrs:{horizontal:"",label:t.$t("pr.labelRows"),"label-size":8}},[a("b-form-select",{attrs:{size:"md",options:[{text:10,value:10},{text:15,value:15},{text:20,value:20}]},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),t._v(" "),a("b-form-fieldset",{staticClass:"col-lg-6 text-center",attrs:{horizontal:"",label:t.$t("pr.labelFilter"),"label-size":6}},[a("b-form-select",{attrs:{options:t.languages},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),t._v(" "),a("section",[a("div",[a("b-table",{staticClass:"text-center",attrs:{striped:"",hover:"",small:"",items:t.prices,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter}})],1)]),t._v(" "),t.prices?a("div",{staticClass:"justify-content-center row"},[t.prices.length>0?a("b-pagination",{staticClass:"mb-2",attrs:{size:"sm","total-rows":t.rowsAfterFilter,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e(),t._v(" "),a("b-alert",{attrs:{variant:"danger",show:0==t.prices.length&&t.dismissCountDown},on:{"dismiss-count-down":function(e){t.countDownChanged()}}},[t._v("\n      "+t._s(t.$t("pr.emptyPrices"))+"\n    ")])],1):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block-price"},[a("div",{staticClass:"price-panel",staticStyle:{width:"100%"}},[a("div",{staticClass:"container-fluid row justify-content-around"},[a("div",{staticClass:"col-lg-4"},[a("div",[a("b-button-group",{staticClass:"mt-5 pt-4",attrs:{vertical:"",size:"lg"}},[a("b-button",{staticClass:"mb-2",attrs:{variant:"primary",to:"tr"}},[t._v(t._s(t.$t("pr.btn.translate")))]),t._v(" "),a("b-button",{staticClass:"mb-2",attrs:{variant:"primary",to:"ed"}},[t._v(t._s(t.$t("pr.btn.edit")))])],1)],1),t._v(" "),a("div",{staticClass:"note mt-5 text-align-justify"},[a("p",{staticClass:"text-center pl-4"},[t._v(t._s(t.$t("pr.note")))])])]),t._v(" "),a("div",{staticClass:"col-lg-8"},[a("tbl",{attrs:{prices:t.prices,fields:t.fields,languages:t.languages}})],1)])])])},staticRenderFns:[]}},,function(t,e,a){"use strict";var s=a(92);e.a={FETCH_PRICES:function(t){var e=t.commit,a=t.state;s.a(a.loc).then(function(t){t.body||console.error("DATA FILE ERROR"),e("SET_PRICES",{items:t.body})}).catch(function(t){e("SET_PRICES",{items:[""]}),console.error("GET FILE ERROR",t,t.statusText)})},UPDATE_SERVICE:function(t,e){return(0,t.commit)("SET_SERVICE",{srv:e.srv})},CHANGE_LOCALE:function(t,e){return(0,t.commit)("SET_LOCALE",{loc:e.loc})}}},function(t,e,a){"use strict";function s(t){var e={headers:{Accept:"application/json"}};return n.a.http.get("../static/assets/price/"+t+".json",e)}e.a=s;var n=a(1)},function(t,e,a){"use strict";e.a={SET_PRICES:function(t,e){var a=e.items;t.prices=a},SET_SERVICE:function(t,e){var a=e.srv;t.service=a},SET_LOCALE:function(t,e){var a=e.loc;t.loc=a}}},function(t,e){t.exports={locales:["ru","ua"],header:{title:"Евгений Мелентьев",menus:[{title:"Тариф",linkTo:"/price",icon:"fa-usd"},{title:"Контакты",linkTo:"/contacts",icon:"fa-envelope"}]},carousel:{slides:[{id:1,caption:"Более 5 лет на рынке",text:"Более 5 лет на рынке увлекательной работы",align:"justify-content-end"},{id:0,caption:"Более 1000 переводов",text:"СОТНИ выполненных проектов и довольных клиентов",align:"justify-content-center"},{id:2,caption:"А также:",text:"Переводы - это дополнительный источник знаний",align:"justify-content-start"}]},cards:{title:"Преимущества",blocks:[{title:"Клиентам",icon:"fa-handshake-o",text:"Каждый клиент – это отдельная история, которая непременно должна стать счастливой. Для меня очень важно найти подход к каждому заказчику, которому необходима моя помощь, чтобы наше сотрудничество стало простым и взаимовыгодным"},{title:"24/7",icon:"fa-clock-o",text:"Готовность работать 24 часа в сутки и 7 дней в неделю для выполнения объемных проектов – это профессионализм и любовь к профессии. В выходные или праздничные дни проект будет принят так же, как и в будни"},{title:"Качество",icon:"fa-thumbs-o-up",text:"Каждый проект обязательно будет выполнен качественно и в указанный срок с выполнением всех требований и пожеланий клиента. Уверенность в качественном выполнении работы является основным критерием как для клиентов, так и для переводчика"}]},hCards:{title:"Услуги",blocks:[{icon:"fa-wrench",text:"Техническая тематика"},{icon:"fa-medkit",text:"Медицина"},{icon:"fa-book",text:"Юриспруденция"},{icon:"fa-gavel",text:"Судебное дело"},{icon:"fa-money",text:"Экономика"},{icon:"fa-money",text:"Финансы"},{icon:"fa-university",text:"Банковское дело"},{icon:"fa-handshake-o",text:"Реклама"},{icon:"fa-clock-o",text:"Маркетинг"},{icon:"fa-flask",text:"Химия"},{icon:"fa-gamepad",text:"Компьютерные игры"},{icon:"fa-building",text:"Строительство"},{icon:"fa-medkit",text:"Фармация"},{icon:"fa-laptop",text:"ИT"}]},clients:{title:"Выполненные проекты для конечных заказчиков",cards:[{head:"Toyota.",muted:"Юбилейный сайт",lead:"Перевод юбилейного сайта компании Toyota включал в себя сотни страниц о компании, истории ее создания и вехах развития, а также модельном ряде, начиная с первых дней существования великого бренда и людях, которые творили историю автомобилестроения."},{head:"Jysk.",muted:"Организация работы магазина",lead:"Для компании Jysk, как конечного потребителя, были переведены сотни страниц по организации работы магазинов, а именно: интерьер, товарный ряд, структура магазина и его отделов. Выполнение переводов было необходимо для расширения сети торговых центров Jysk в странах Восточной Европы."},{head:"Аттракционы",muted:"Центральный парк культуры и отдыха имени Максима Горького (Харьков).",lead:"Для реконструкции лучшего ныне парка Украины мной переводилась документация по аттракционам, которая включала в себя информацию о ремонте и эксплуатации аттракционов, их монтаже и демонтаже, а также другая необходимая техническая документация."}]},contacts:{phone:{head:"Телефоны",data:["+380 95 490 10 82","+380 63 870 28 95"]},mail:{head:"E-mail",data:"cooltranslations@mail.ru",text:"Написать письмо"},social:{head:"Социальные сети",data:""}},mess:{mesHeader:"Отправить сообщение",messageTo:"https://formspree.io/eugenemelentyev@mail.ru",name:{yourName:"*Ваше имя",phName:"Введите ваше имя"},mail:{yourEmail:"*Ваш e-mail адрес",phEmail:"Введите e-mail",attEmail:"Мы никогда и никому не сообщим ваш e-mail."},text:"*Текст сообщения",button:"Отправить"},pr:{pageHead:"Стоимость",labelRows:"Строк в таблице",labelFilter:"Фильтр",btn:{translate:"Перевод",edit:"Корректирование"},note:"*Постоянным клиентам индивидуальные условия",emptyPrices:"Ошибка получения данных. Повторите позже."},tr:{tbl:{langFrom:"С языка",langTo:"На язык",langPrice:"1800 зсп,<br>RUB"}},ed:{tbl:{langFrom:"Язык",langPrice:"1800 зсп,<br>RUB"}}}},function(t,e){t.exports={locales:["ru","ua"],header:{title:"Мелентьев Євген",menus:[{title:"Тариф",linkTo:"/price",icon:"fa-usd"},{title:"Контакти",linkTo:"/contacts",icon:"fa-envelope"}]},carousel:{slides:[{id:1,caption:"Більше 5 років досвіду",text:"Більше 5 років захоплюючої роботи",align:"justify-content-end"},{id:0,caption:"Більше 1000 проектів",text:"Сотні виконаних проектів та задоволених клієнтів",align:"justify-content-center"},{id:2,caption:"А також:",text:"Переклад текстів – це джерело додаткових знань",align:"justify-content-start"}]},cards:{title:"Переваги",blocks:[{title:"Клієнтам",icon:"fa-handshake-o",text:"Кожен клієнт - це окрема історія, яка неодмінно повинна стати щасливою. Для мене дуже важливо знайти підхід до кожного замовника, якому необхідна моя допомога, щоб наша співпраця стала простою та взаємовигідною"},{title:"24/7",icon:"fa-clock-o",text:"Готовність працювати 24 години на добу і 7 днів на тиждень для виконання об'ємних проектів - це професіоналізм і любов до професії. У вихідні або святкові дні проект буде прийнятий так само, як і в будні"},{title:"Якість",icon:"fa-thumbs-o-up",text:"Кожен проект обов'язково буде виконано якісно і в зазначений термін з виконанням всіх вимог та побажань клієнта. Впевненість в якісному виконанні роботи є основним критерієм як для клієнта, так і для перекладача"}]},hCards:{title:"Послуги",blocks:[{icon:"fa-wrench",text:"Технічна тематика"},{icon:"fa-medkit",text:"Медицина"},{icon:"fa-book",text:"Юриспруденція"},{icon:"fa-gavel",text:"Судова справа"},{icon:"fa-money",text:"Економіка"},{icon:"fa-money",text:"Фінанси"},{icon:"fa-university",text:"Банківська справа"},{icon:"fa-handshake-o",text:"Реклама"},{icon:"fa-clock-o",text:"Маркетинг"},{icon:"fa-flask",text:"Хімія"},{icon:"fa-gamepad",text:"Комп'ютерні ігри"},{icon:"fa-building",text:"Будівництво"},{icon:"fa-medkit",text:"Фармація"},{icon:"fa-laptop",text:"IT"}]},clients:{title:"Виконані проекти для кінцевих замовників",cards:[{head:"Toyota.",muted:"Ювілейний сайт",lead:"Переклад ювілейного сайту компанії Toyota включав в себе сотні сторінок про компанію, історію її створення та віхи розвитку, а також модельний ряд, починаючи з перших днів існування великого бренду,а також людей, які творили історію автомобілебудування."},{head:"Jysk.",muted:"Організація роботи магазину",lead:"Для компанії Jysk, як кінцевого споживача, були переведені сотні сторінок по організації роботи магазинів, а саме: інтер'єр, товарний ряд, структура магазину та його відділів. Виконання перекладів було необхідно для розширення мережі торговельних центрів Jysk в країнах Східної Європи."},{head:"Атракціони",muted:"Центральний парк культури та відпочинку імені Максима Горького (Харків).",lead:"Для реконструкції найкращого нині парку України мною перекладалася документація про атракціони, що включала в себе інформацію про ремонт та експлуатацію атракціонів, їх монтаж та демонтаж, а також інша необхідна технічна документація."}]},contacts:{phone:{head:"Телефони",data:["+380 95 490 10 82","+380 63 870 28 95"]},mail:{head:"E-mail",data:"cooltranslations@mail.ru",text:"Написати листа"},social:{head:"Соціальні мережі",data:""}},mess:{mesHeader:"Надіслати повідомлення",messageTo:"https://formspree.io/eugenemelentyev@mail.ru",name:{yourName:"*Ваше ім'я",phName:"Введіть ваше ім'я"},mail:{yourEmail:"*Ваша e-mail адреса",phEmail:"Введіть e-mail",attEmail:"Ми ніколи і нікому не повідомимо ваш e-mail."},text:"*Текст повідомлення",button:"Відправити"},pr:{pageHead:"Вартість",labelRows:"Рядків в таблиці",labelFilter:"Фільтр",btn:{translate:"Переклад",edit:"Редагування"},note:"*Постійним клієнтам індивідуальні умови",emptyPrices:"Помилка отримання даних. Повторіть пізніше."},tr:{tbl:{langFrom:"Мова оригіналу",langTo:"На мову",langPrice:"1800 зсп,<br>RUB"}},ed:{tbl:{langFrom:"Мова",langPrice:"1800 зсп,<br>RUB"}}}},function(t,e,a){"use strict";var s=a(1),n=a(97),i=a(10);s.a.use(n.a),e.a=new n.a(i.a.state.i18n)},,function(t,e,a){function s(t){a(99)}var n=a(0)(a(100),a(109),s,null,null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(a(1),a(101)),n=a.n(s),i=a(105),c=a.n(i);e.default={name:"app",components:{AppHeader:n.a,AppFooter:c.a}}},function(t,e,a){function s(t){a(102)}var n=a(0)(a(103),a(104),s,"data-v-b50afb3a",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getIcon:function(t){return"fa "+this.$t("header.menus")[t].icon},getFlagPng:function(t){return"./../../../static/assets/png/"+t+".png"},changeLocale:function(t){this.$i18n.locale=t,this.$store.dispatch("CHANGE_LOCALE",{loc:t}),this.$store.dispatch("FETCH_PRICES")}},computed:{loc:function(){return this.$store.state.loc}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{fixed:"top",toggleable:"","toggle-breakpoint":"md",type:"inverse",variant:"primary"}},[a("b-nav-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-link",{staticClass:"navbar-brand",attrs:{to:"/",exact:""}},[a("span",[t._v(t._s(t.$t("header.title")))])]),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-nav",{attrs:{"is-nav-bar":"",id:"nav-bar"}},t._l(t.$t("header.menus"),function(e,s){return a("b-nav-item",{key:s,attrs:{to:e.linkTo}},[a("span",{class:t.getIcon(s),attrs:{"aria-hidden":"true"}}),t._v("\n        "+t._s(e.title)+"\n      ")])})),t._v(" "),a("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},t._l(t.$t("locales"),function(e,s){return a("b-nav-item",{key:s,class:{active:t.$i18n.locale===e},attrs:{to:t.$router.replace(t.$route.path)},on:{click:function(a){t.changeLocale(e)}}},[a("img",{attrs:{src:t.getFlagPng(e),alt:"",height:"16px"}})])}))],1)],1)},staticRenderFns:[]}},function(t,e,a){function s(t){a(106)}var n=a(0)(a(107),a(108),s,"data-v-8af912ba",null);t.exports=n.exports},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{mailTo:function(){return"mailto:"+this.$t("contacts.mail.data")}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer container-fluid"},[a("address",{staticClass:"row text-center",staticStyle:{"margin-bottom":"0"}},[a("div",{staticClass:"col-lg-2"},[a("h5",{staticClass:"text-center"},[t._v(t._s(t.$t("contacts.phone.head")))])]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("span",[t._v(t._s(t.$t("contacts.phone.data[0]")))]),a("br"),t._v(" "),a("span",[t._v(t._s(t.$t("contacts.phone.data[1]")))])]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("h5",{staticClass:"text-center"},[t._v(t._s(t.$t("contacts.mail.head")))])]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("a",{attrs:{href:t.mailTo}},[t._v(t._s(t.$t("contacts.mail.data")))])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("small",{staticClass:"fixed-bottom text-right"},[t._v("© 2017 CoolTranslations  ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("app-header")],1),t._v(" "),a("main",{attrs:{id:"mainSector"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),t._v(" "),a("footer",[a("app-footer")],1)])},staticRenderFns:[]}}],[11]);