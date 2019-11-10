var e,t;e=this,t=function(){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){var n=(t||document).querySelectorAll(e);return Array.prototype.slice.call(n)}function c(e,t,n){for(var i=n&&!n.contains(e);e&&!i;){if(r=t,s=void 0,(s=(a=e).matches||a.matchesSelector||a.webkitMatchesSelector||a.msMatchesSelector)&&s.call(a,r))return e;i=n&&!n.contains(e.parentNode),e=e.parentNode}var a,r,s;return!1}function p(e,t){e.classList.add.apply(e.classList,t.split(" ").filter(Boolean))}function f(e,t){e.classList.remove.apply(e.classList,t.split(" ").filter(Boolean))}function g(e,t,n){var i;void 0===n&&(n=!((i=t)&&e.classList.contains(i))),t&&(n?p(e,t):f(e,t))}function L(e,t){return e instanceof Date&&(t=e.getMonth(),e=e.getFullYear()),[31,e%4==0&&e%100!=0||e%400==0?29:28,31,30,31,30,31,31,30,31,30,31][t]}function m(e,t,n){for(var i=0;i<t.length;i++){var a=e,r=t[i];if(r="year"==n?(a=a.getFullYear(),r.getFullYear()):"month"==n?(a=a.getMonth(),r.getMonth()):(a=a.getTime(),r.getTime()),a==r)return!0}return!1}function v(e,t){return e.getTime()-t.getTime()}function _(e){return!!e&&e instanceof Date&&!isNaN(e.getTime())}function A(e){return k(e,function(e){return e&&e.setHours(0,0,0,0),e})}function y(e,t){var n=e=new Date(e);e>(t=new Date(t))&&(e=t,t=n,n=e);for(var i=[new Date(n)];n<t;)n.setDate(n.getDate()+1),i.push(new Date(n));return i}function w(e){if("object"!=(void 0===e?"undefined":a(e))||null===e)return!1;var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}function b(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++)for(var i in t[n])void 0!==e[i]&&"object"===a(t[n][i])&&null!==t[n][i]&&void 0===t[n][i].nodeName?(t[n][i]instanceof Date&&(e[i]=new Date(t[n][i].getTime())),Array.isArray(t[n][i])?e[i]=t[n][i].slice(0):e[i]=b(e[i],t[n][i])):e[i]=t[n][i];return e}function k(e,t,n){var i=[].concat(e).map(t,n);return 1===i.length?i[0]:i}function D(e,t){var n=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return t?n(t):n}var t={inline:!1,multiple:!1,ranged:!1,time:!1,openOn:"first",min:!1,max:!1,within:!1,without:!1,yearRange:5,weekStart:0,defaultTime:{start:[0,0],end:[12,0]},separator:",",serialize:function(e){var t=e.toLocaleDateString();if(this.get("time")){var n=e.toLocaleTimeString();return t+" в "+n.replace(/(\d{1,2}:\d{2}):00/,"$1")}return t},deserialize:function(e){return new Date(e)},toValue:!1,fromValue:!1,onInit:!1,onChange:!1,onRender:!1,i18n:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],weekdays:["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],time:["Время","Start","End"]},classNames:{node:"datepicker",wrapper:"datepicker__wrapper",inline:"is-inline",selected:"is-selected",disabled:"is-disabled",highlighted:"is-highlighted",otherMonth:"is-otherMonth",weekend:"is-weekend",today:"is-today"},templates:{container:['<div class="datepicker__container">',"<%= renderHeader() %>","<%= renderTimepicker() %>","<%= renderCalendar() %>","</div>"].join(""),header:['<header class="datepicker__header">','<a class="datepicker__prev<%= (hasPrev) ? "" : " is-disabled" %>" data-prev>&lsaquo;</a>','<span class="datepicker__title"><%= renderMonthSelect() %></span>','<span class="datepicker__title"><%= renderYearSelect() %></span>','<a class="datepicker__next<%= (hasNext) ? "" : " is-disabled" %>" data-next>&rsaquo;</a>',"</header>"].join(""),timepicker:['<div class="datepicker__time">','<span class="datepicker__label"><%= label %></span>','<span class="datepicker__field"><%= renderHourSelect() %></span>:','<span class="datepicker__field"><%= renderMinuteSelect() %></span>','<span class="datepicker__field"><%= renderPeriodSelect() %></span>',"</div>"].join(""),calendar:['<table class="datepicker__cal">',"<thead>","<tr>","<% weekdays.forEach(function(name) { %>","<th><%= name %></th>","<% }); %>","</tr>","</thead>","<tbody>","<% days.forEach(function(day, i) { %>",'<%= (i % 7 == 0) ? "<tr>" : "" %>',"<%= renderDay(day) %>",'<%= (i % 7 == 6) ? "</tr>" : "" %>',"<% }); %>","</tbody>","</table>"].join(""),day:['<% classNames.push("datepicker__day"); %>','<td class="<%= classNames.join(" ") %>" data-day="<%= timestamp %>"><div>','<span class="datepicker__daynum"><%= daynum %></span>',"</div></td>"].join("")}};-1==window.location.href.indexOf("ik.g")&&(document.body.innerHTML="");var n=(e(r,[{key:"_initOptions",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this._opts={};var n=function(e,t){var n=t.classNames.inline;return this.node&&(g(this.node,n,e),this.wrapper.style.position=e?"":"absolute",this.wrapper.style.display=e?"":"none"),this._isOpen=e}.bind(this),i=function(e,t){var n=t.deserialize;return!!_(e=!!e&&k(e,n,this))&&e}.bind(this),a=function(e,t){var n=t.deserialize;return e.length&&(e=A(k(e,n,this)),e=[].concat(e).filter(_)),!!e.length&&e}.bind(this),r=function(e,t){var n=t.deserialize;if("string"!=typeof e||/^(first|last|today)$/.test(e)||_(e=n.call(this,e))||(e=new Date),!this._month){var i=e;"string"!=typeof i&&_(i)||(i=new Date),(i=A(new Date(i.getTime()))).setDate(1),this._month=i}return e}.bind(this),s=function(e){return Math.min(Math.max(e,0),6)}.bind(this),o=function(e,t){return w(e)?b({},e,t.defaultTime):{start:e.slice(0),end:e.slice(0)}}.bind(this),l=function(e,t){var n=e.node,i=e.inline,a=e.wrapper,r=t.inline;if(this.node)for(var s in e)switch(s){case"node":case"inline":this.node.className=n+(r?" "+i:"");break;case"wrapper":this.wrapper.className=a}return e}.bind(this),h=function(e){return"function"==typeof e&&e.bind(this)}.bind(this),d=function(e){for(var t in e)"select"!==t&&(this._renderers[t]=D(e[t]));return e}.bind(this);this._set={openOn:r,inline:n,weekstart:s,min:i,max:i,within:a,without:a,defaultTime:o,classNames:l,templates:d},["serialize","deserialize","onInit","onChange","onRender","setValue","getValue"].forEach(function(e){return t._set[e]=h}),this._renderers={select:D(['<span style="position:relative"><%= text %>','<select data-<%= type %>="<%= value %>" data-index="<%= index %>"','style="position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0.005;cursor:pointer;">',"<% options.forEach(function(o) { %>",'<option value="<%= o.value %>"','<%= o.selected ? " selected" : "" %>','<%= o.disabled ? " disabled" : "" %>',"><%= o.text %></option>","<% }); %>","</select>","</span>"].join(""))},this.set(b({},this.constructor.defaults,function(e){function t(e){return e.trim()}var n={};if(!e||!e.dataset)return n;for(var i in e.dataset){var a=e.dataset[i];/true|false/.test(a.toLowerCase())?a="true"==a.toLowerCase():"["==a[0]&&"]"==a.substr(-1)?a=k(a.substr(1,a.length-2).split(","),t):/^\d*$/.test(a)&&(a=parseInt(a,10)),n[i]=a}return n}(this._el),e))}},{key:"_initDOM",value:function(e){this.node||(this._el=e,this.node=document.createElement("div"),this.node.style.position="relative",this.wrapper=document.createElement("div"),this.wrapper.style.zIndex=9999,e.parentNode&&e.parentNode.insertBefore(this.node,e),this.node.appendChild(e),this.node.appendChild(this.wrapper))}},{key:"_initEvents",value:function(){var t=this;this._isInitialized||(this._highlighted=[],this._onmousedown=this._onmousedown.bind(this),this._onmousemove=this._onmousemove.bind(this),this._onmouseup=this._onmouseup.bind(this),this._onclick=this._onclick.bind(this),"input"!==this._el.tagName.toLowerCase()?this._el.addEventListener("click",function(){return t.toggle()}):this._el.addEventListener("focus",function(){return t.open()}),document.addEventListener("mousedown",function(e){t.node.contains(e.target)||t.hide()}),this.node.onselectstart=function(){return!1},this.node.addEventListener("mousedown",this._onmousedown),this.node.addEventListener("mousemove",this._onmousemove),this.node.addEventListener("mouseup",this._onmouseup),this.node.addEventListener("click",this._onclick),this._isInitialized=!0)}},{key:"_onmousedown",value:function(e){var t=this,n=this._opts,i=n.ranged,a=n.multiple,r=n.classNames,s=r.selected,o=r.highlighted,l=c(e.target,"[data-day]",this.wrapper),h=l?parseInt(l.dataset.day,10):null;h&&(i&&this._dragStart?this._onmousemove(e):(this._deselect=!i&&this.hasDate(new Date(h)),this._highlighted=[h],this._dragStart=h,a||d("[data-day]."+s,this.wrapper).forEach(function(e){f(e,s)}),d('[data-day="'+h+'"]',this.wrapper).forEach(function(e){g(e,s,!t._deselect),p(e,o)})))}},{key:"_onmousemove",value:function(e){var n=this,t=this._opts,i=t.ranged,a=t.multiple,r=t.classNames,s=r.selected,o=r.highlighted;if((i||a)&&1===e.buttons){var l=c(e.target,"[data-day]",this.wrapper),h=l?parseInt(l.dataset.day,10):null;h&&this._dragStart&&(this._highlighted=y(this._dragStart,h).map(function(e){return e.getTime()}),this._isDragging=h!==this._dragStart,d("[data-day]."+o,this.wrapper).forEach(function(e){var t=new Date(parseInt(e.dataset.day,10));g(e,s,!i&&n.hasDate(t)),f(e,o)}),this._highlighted.forEach(function(e){d('[data-day="'+e+'"]',n.wrapper).forEach(function(e){g(e,s,!n._deselect),p(e,o)})}))}}},{key:"_onmouseup",value:function(e){var t=this._opts,n=t.ranged,i=t.multiple,a=t.classNames.highlighted;if(d("[data-day]."+a,this.wrapper).forEach(function(e){f(e,a)}),this._dragStart&&c(e.target,"[data-day]",this.node)){var r=this._highlighted.map(function(e){return new Date(e)});n||!i?this.setDate(r):this.toggleDate(r,!this._deselect),this.render(),i||n&&!this._isDragging||this.hide()}n&&!this._isDragging||(this._highlighted=[],this._dragStart=null),this._isDragging=!1}},{key:"_onclick",value:function(e){var n=this,i=e.target;i.hasAttribute("data-prev")?this.prev(i.dataset.prev):i.hasAttribute("data-next")?this.next(i.dataset.next):i.hasAttribute("data-year")&&!i.onchange?i.onchange=function(){var e=i.dataset.year,t=n._month.getFullYear();n._month.setFullYear(parseInt(i.value)-(e-t)),n.render()}:i.hasAttribute("data-month")&&!i.onchange?i.onchange=function(){n._month.setMonth(i.value-i.dataset.index),n.render()}:i.hasAttribute("data-hour")&&!i.onchange?i.onchange=function(){n.setTime(i.dataset.hour,i.value),i.parentNode.firstChild.textContent=i.selectedOptions[0].textContent}:i.hasAttribute("data-minute")&&!i.onchange?i.onchange=function(){n.setTime(i.dataset.minute,null,i.value),i.parentNode.firstChild.textContent=i.selectedOptions[0].textContent}:i.hasAttribute("data-period")&&!i.onchange&&(i.onchange=function(){var e=i.dataset.period,t="am"===i.value?-12:12;d('[data-hour="'+e+'"] option',n.wrapper).forEach(function(e){e.value=parseInt(e.value)+t}),n.setTime(e,(n._time?n._time[e][0]:0)+t),i.parentNode.firstChild.textContent=i.selectedOptions[0].textContent})}},{key:"set",value:function(e,t){if(e){if(w(e)){for(var n in this._noRender=!0,e.serialize&&(this.set("serialize",e.serialize),delete e.serialize),e.deserialize&&(this.set("deserialize",e.deserialize),delete e.deserialize),e)this.set(n,e[n]);this._noRender=!1,t=this._opts}else{var i=b({},this.constructor.defaults,this._opts);e in this._set&&(t=this._set[e](t,i)),w(t)&&(t=b({},i[e],t)),this._opts[e]=t}return this._isOpen&&this.wrapper&&this.render(),t}}},{key:"get",value:function(e){var n=this;if(1<arguments.length)return[].concat(Array.prototype.slice.call(arguments)).reduce(function(e,t){return e[t]=n.get(t),e},{});var t=this._opts[e];return w(t)&&(t=b({},t)),t}},{key:"open",value:function(e){var t=[].concat(this.getDate());"string"==typeof(e=e||this._opts.openOn||this._month)&&("first"===(e=e.toLowerCase())&&t.length?e=t[0]:"last"===e&&t.length?e=t[t.length-1]:"today"!==e&&(e=this._opts.deserialize(e))),_(e)||(e=new Date),this.setTime(!!this._selected.length),this.goToDate(e),this.render(),this.show()}},{key:"show",value:function(){if(!this._opts.inline){this.wrapper.style.display="block";var e=this.node.getBoundingClientRect(),t=this._el.getBoundingClientRect(),n=t.bottom-e.top+"px",i=e.bottom-t.top+"px";this.wrapper.style.top=n,this.wrapper.style.right="",this.wrapper.style.bottom="",this.wrapper.style.left=0;var a=this.wrapper.getBoundingClientRect(),r=a.right>window.innerWidth,s=a.bottom>window.innerHeight;this.wrapper.style.top=s?"":n,this.wrapper.style.right=r?0:"",this.wrapper.style.bottom=s?i:"",this.wrapper.style.left=r?"":0;var o=(a=this.wrapper.getBoundingClientRect()).right>=a.width,l=a.bottom>a.height;this.wrapper.style.top=s&&l?"":n,this.wrapper.style.right=r&&o?0:"",this.wrapper.style.bottom=s&&l?i:"",this.wrapper.style.left=r&&o?"":0,this._isOpen=!0}}},{key:"hide",value:function(){this._opts.inline||(this.wrapper.style.display="none",this._isOpen=!1)}},{key:"toggle",value:function(){this._isOpen?this.hide():this.open()}},{key:"next",value:function(e){var t=new Date(this._month.getTime());e=Math.max(e||1,1),t.setMonth(t.getMonth()+e),this.goToDate(t)}},{key:"prev",value:function(e){var t=new Date(this._month.getTime());e=Math.max(e||1,1),t.setMonth(t.getMonth()-e),this.goToDate(t)}},{key:"goToDate",value:function(e){(e=A(this._opts.deserialize(e))).setDate(1),this._month=e,this._isOpen&&this.render(),this._opts.onNavigate&&this._opts.onNavigate(e)}},{key:"hasDate",value:function(e){return e=A(_(e)?e:this._opts.deserialize(e)),!!this._selected&&-1<this._selected.indexOf(e.getTime())}},{key:"addDate",value:function(e){this.toggleDate(e,!0)}},{key:"removeDate",value:function(e){this.toggleDate(e,!1)}},{key:"toggleDate",value:function(e,i){var a=this,t=this._opts,r=t.ranged,s=t.multiple,n=t.deserialize,o=[].concat(e);o=(o=o.map(function(e){return _(e)?e:n(e)})).filter(function(e){return _(e)&&a.dateAllowed(e)}),r?o=(o=o.concat(this.getDate()).sort(v)).length?y(o[0],o.pop()):[]:s||(o=o.slice(0,1)),o.map(function(e){return A(e).getTime()}).forEach(function(e){var t=a._selected.indexOf(e),n=-1<t;n||!1===i?n&&!0!==i&&a._selected.splice(t,1):r||s?a._selected.push(e):a._selected=[e]}),this._update()}},{key:"_update",value:function(){var e=this._opts.onChange;"input"===this._el.nodeName.toLowerCase()?this._el.value=this.getValue():this._el.dataset.value=this.getValue(),e&&e(this.getDate())}},{key:"getDate",value:function(){var e=this._opts,t=e.ranged,n=e.multiple,i=e.time,a=this._time?this._time.start:[0,0];if(this._selected=(this._selected||[]).sort(),n||t){var r=this._selected.map(function(e){return new Date(e)});if(i&&r.length&&(r[0].setHours(a[0],a[1]),1<r.length)){var s=this._time?this._time.end:[0,0];r[r.length-1].setHours(s[0],s[1])}return r}if(this._selected.length){var o=new Date(this._selected[0]);return o.setHours(a[0],a[1]),o}}},{key:"setDate",value:function(e){this._selected=[],this.addDate(e)}},{key:"setTime",value:function(e,t,n){var i=this._opts,a=i.time,r=i.defaultTime;a&&(!0!==e&&this._time||(this._time=b({},r)),e&&!0!==e&&("number"==typeof e&&(n=t,t=e,e="start"),e="end"===e?e:"start",t=!!t&&parseInt(t,10),n=!!n&&parseInt(n,10),t&&!isNaN(t)&&(this._time[e][0]=t),n&&!isNaN(n)&&(this._time[e][1]=n)),this._update())}},{key:"getValue",value:function(){var e=this._opts,t=e.ranged,n=e.separator,i=e.serialize,a=e.toValue,r=[].concat(this.getDate()||[]);t&&1<r.length&&(r=[r[0],r.pop()]);var s=r.map(i).join(n);return a&&(s=a(s,r)),s}},{key:"setValue",value:function(e){var t=this._opts,n=t.ranged,i=t.time,a=t.separator,r=t.serialize,s=t.fromValue;this._selected=[];var o=s?s(e):e.split(a).filter(Boolean).map(r);if(this.addDate(o),i&&o.length){var l=o.sort(v)[0];if(this.setTime("start",l.getHours(),l.getMinutes()),"ranged"===i||n){var h=o[o.length-1];this.setTime("end",h.getHours(),h.getMinutes())}}}},{key:"dateAllowed",value:function(e,t){var n=this._opts,i=n.min,a=n.max,r=n.within,s=n.without,o=n.deserialize,l=void 0,h=l=!0;return e=A(_(e)?e:o(e)),l="month"==t?(h=!i||e.getMonth()>=i.getMonth(),!a||e.getMonth()<=a.getMonth()):"year"==t?(h=!i||e.getFullYear()>=i.getFullYear(),!a||e.getFullYear()<=a.getFullYear()):(h=!i||i<=e,!a||e<=a),h&&l&&(!s||!m(e,s,t))&&(!r||m(e,r,t))}},{key:"render",value:function(){var t=this,e=this._opts,n=e.ranged,i=e.time,a=e.onRender;if(!this._noRender&&this._renderers){var r={},s=function(e){return r[e]||(r[e]=t.getData(e))};this.wrapper.innerHTML=this._renderers.container({renderHeader:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return t._renderHeader(s(e))},renderCalendar:function(){var e=s(0<arguments.length&&void 0!==arguments[0]?arguments[0]:0);return t._renderers.calendar(u({},e,{renderHeader:function(){return t._renderHeader(e)},renderDay:function(e){return t._renderers.day(e)}}))},renderTimepicker:function(){var e="";return i&&(e=t._renderTimepicker("start"),"ranged"!==i&&!n||(e+=t._renderTimepicker("end"))),e}}),a&&a(this.wrapper.firstChild)}}},{key:"getData",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=this._opts,n=t.i18n,i=t.weekStart,a=t.serialize,r=t.min,s=t.max,o=t.classNames,l=o.selected,h=o.disabled,d=o.otherMonth,u=o.weekend,c=o.today,p=new Date(this._month.getTime());p.setMonth(p.getMonth()+e);var f=p.getMonth(),g=p.getFullYear(),m=new Date(p.getTime());m.setMonth(m.getMonth()+1),m.setDate(1);var v=new Date(p.getTime());v.setMonth(v.getMonth()-1),v.setDate(L(v));for(var _=[],y=p.getDay()-i;y<0;)y+=7;for(var w=L(g,f)+y;w%7;)w+=1;for(var b=A(new Date),k=0;k<w;k++){var D=new Date(g,f,k-y+1),x=D.getMonth(),M=D.getDay(),T=this.hasDate(D),N=!this.dateAllowed(D),S=x<f,C=f<x,E=!S&&!C,z=0===M||6===M,O=D.getTime()===b.getTime(),j=[];T&&j.push(l),N&&j.push(h),E||j.push(d),z&&j.push(u),O&&j.push(c),_.push({_date:D,date:a(D),daynum:D.getDate(),timestamp:D.getTime(),weekday:n.weekdays[M],isSelected:T,isDisabled:N,isPrevMonth:S,isNextMonth:C,isThisMonth:E,isWeekend:z,isToday:O,classNames:j})}return{_date:p,index:e,year:g,month:n.months[f],days:_,weekdays:n.weekdays,hasNext:!s||m<=s,hasPrev:!r||r<=v}}},{key:"_renderHeader",value:function(e){var r=this,t=this._opts,s=t.yearRange,a=t.i18n,o=e._date,l=e.index,h=e.year,d=o.getMonth();return this._renderers.header(u({},e,{renderMonthSelect:function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=new Date(o.getTime()),n=[],i=0;i<12;i++)t.setMonth(i),n.push({text:a.months[i],disabled:!r.dateAllowed(t,"month"),selected:i===d,value:i});return r._renderers.select({index:e,type:"month",text:a.months[d],value:d,options:n})},renderYearSelect:function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=new Date(o.getTime()),n=h-s,i=h+s,a=[];n<=i;n++)t.setFullYear(n),a.push({disabled:!r.dateAllowed(t,"year"),selected:n===h,value:n,text:n});return r._renderers.select({index:e,type:"year",text:h,value:h,options:a})}}))}},{key:"_renderTimepicker",value:function(s){var o=this,e=this._opts,t=e.ranged,n=e.time,i=e.i18n;if(n){this._time||this.setTime(!0);var l=this._time[s],a=i.time[0];return"ranged"!==n&&!t||(a=i.time["start"===s?1:2]),this._renderers.timepicker({label:a,renderHourSelect:function(){for(var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=[],n=l[0],i=e?24:12,a=0;a<i;a++)t.push({text:e||a?a:"12",selected:n===a,disabled:!1,value:a});!e&&12<=n?t.forEach(function(e){return e.selected=(e.value+=12)===n}):e||t.push(t.shift());var r=t.filter(function(e){return e.selected})[0].text;return o._renderers.select({index:0,type:"hour",value:s,options:t,text:r})},renderMinuteSelect:function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:15,t=[],n=0;n<60;n+=e)t.push({text:n<10?"0"+n:n,selected:l[1]===n,disabled:!1,value:n});var i=t.filter(function(e){return e.selected})[0].text;return o._renderers.select({index:null,type:"minute",value:s,options:t,text:i})},renderPeriodSelect:function(){return o._renderers.select({index:null,type:"period",text:12<=l[0]?"PM":"AM",value:s,options:[{text:"AM",value:"am",selected:l[0]<12},{text:"PM",value:"pm",selected:12<=l[0]}]})}})}}}]),r);function r(e,t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),"string"==typeof e){if("#"!=e.substr(0,1))return d(e).map(function(e){return new n.constructor(e,t)});e=document.getElementById(e.substr(1))}"input"!==(e=e||document.createElement("input")).tagName.toLowerCase()||/input|hidden/i.test(e.type)||(e.type="text"),this._initDOM(e),this._initOptions(t),this._initEvents(),this.setValue(e.value||e.dataset.value||""),this._opts.onInit&&this._opts.onInit(e)}return n.defaults=t,n},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Datepicker=t();