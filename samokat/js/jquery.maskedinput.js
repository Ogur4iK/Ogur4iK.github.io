var e;e=function(S){var a,e=navigator.userAgent,A=/iphone/i.test(e),i=/chrome/i.test(e),T=/android/i.test(e);S.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},S.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,v){var n,b,k,y,x,j,R;if(!t&&0<this.length){var e=S(this[0]).data(S.mask.dataName);return e?e():void 0}return v=S.extend({autoclear:S.mask.autoclear,placeholder:S.mask.placeholder,completed:null},v),n=S.mask.definitions,b=[],k=j=t.length,y=null,S.each(t.split(""),function(e,t){"?"==t?(j--,k=e):n[t]?(b.push(new RegExp(n[t])),null===y&&(y=b.length-1),e<k&&(x=b.length-1)):b.push(null)}),this.trigger("unmask").each(function(){function o(){if(v.completed){for(var e=y;e<=x;e++)if(b[e]&&m[e]===c(e))return;v.completed.call(g)}}function c(e){return v.placeholder.charAt(e<v.placeholder.length?e:0)}function l(e){for(;++e<j&&!b[e];);return e}function u(e,t){var n,a;if(!(e<0)){for(n=e,a=l(t);n<j;n++)if(b[n]){if(!(a<j&&b[n].test(m[a])))break;m[n]=m[a],m[a]=c(a),a=l(a)}s(),g.caret(Math.max(y,e))}}function r(){h(),g.val()!=p&&g.change()}function f(e,t){var n;for(n=e;n<t&&n<j;n++)b[n]&&(m[n]=c(n))}function s(){g.val(m.join(""))}function h(e){var t,n,a,i=g.val(),r=-1;for(a=t=0;t<j;t++)if(b[t]){for(m[t]=c(t);a++<i.length;)if(n=i.charAt(a-1),b[t].test(n)){m[t]=n,r=t;break}if(a>i.length){f(t+1,j);break}}else m[t]===i.charAt(a)&&a++,t<k&&(r=t);return e?s():r+1<k?v.autoclear||m.join("")===d?(g.val()&&g.val(""),f(0,j)):s():(s(),g.val(g.val().substring(0,r+1))),k?t:y}var g=S(this),m=S.map(t.split(""),function(e,t){return"?"!=e?n[e]?c(t):e:void 0}),d=m.join(""),p=g.val();g.data(S.mask.dataName,function(){return S.map(m,function(e,t){return b[t]&&e!=c(t)?e:null}).join("")}),g.one("unmask",function(){g.off(".mask").removeData(S.mask.dataName)}).on("focus.mask",function(){var e;g.prop("readonly")||(clearTimeout(a),p=g.val(),e=h(),a=setTimeout(function(){g.get(0)===document.activeElement&&(s(),e==t.replace("?","").length?g.caret(0,e):g.caret(e))},10))}).on("blur.mask",r).on("keydown.mask",function(e){if(!g.prop("readonly")){var t,n,a,i=e.which||e.keyCode;R=g.val(),8===i||46===i||A&&127===i?(n=(t=g.caret()).begin,(a=t.end)-n==0&&(n=46!==i?function(e){for(;0<=--e&&!b[e];);return e}(n):a=l(n-1),a=46===i?l(a):a),f(n,a),u(n,a-1),e.preventDefault()):13===i?r.call(this,e):27===i&&(g.val(p),g.caret(0,h()),e.preventDefault())}}).on("keypress.mask",function(e){if(!g.prop("readonly")){var t,n,a,i=e.which||e.keyCode,r=g.caret();if(!(e.ctrlKey||e.altKey||e.metaKey||i<32)&&i&&13!==i){if(r.end-r.begin!=0&&(f(r.begin,r.end),u(r.begin,r.end-1)),(t=l(r.begin-1))<j&&(n=String.fromCharCode(i),b[t].test(n))){if(function(e){var t,n,a,i;for(n=c(t=e);t<j;t++)if(b[t]){if(a=l(t),i=m[t],m[t]=n,!(a<j&&b[a].test(i)))break;n=i}}(t),m[t]=n,s(),a=l(t),T){setTimeout(function(){S.proxy(S.fn.caret,g,a)()},0)}else g.caret(a);r.begin<=x&&o()}e.preventDefault()}}}).on("input.mask paste.mask",function(){g.prop("readonly")||setTimeout(function(){var e=h(!0);g.caret(e),o()},0)}),i&&T&&g.off("input.mask").on("input.mask",function(){var e=g.val(),t=g.caret();if(R&&R.length&&R.length>e.length){for(h(!0);0<t.begin&&!b[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<y&&!b[t.begin];)t.begin++;g.caret(t.begin,t.begin)}else{for(h(!0);t.begin<j&&!b[t.begin];)t.begin++;g.caret(t.begin,t.begin)}o()}),h()})}})},"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery);