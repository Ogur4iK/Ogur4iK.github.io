function s(t,e){this.element=t,this.options=m.extend({},i,e),this._defaults=i,this._name=n,this.init()}var m,o,t,v,n,i,r,l,a,e,_,L,f;function c(){for(var t=$(".tag"),e=$("#srv_tags").innerWidth(),i=$(t[0]).width(),s=1;s<t.length;s++)(i+=$(t[s]).width()+44)<e?$(t[s]).addClass("dotted"):($(t[s]).before('<div class="break">'),i=$(t[s]).width())}function h(t){$("#overlay").fadeIn(),$("body").addClass("lock"),$(t).fadeIn(),$(t).addClass("active"),$(".nav_part").removeClass("active"),$("#burger").removeClass("active")}function p(t){t||$("#overlay").fadeOut(),$(".modal.active").fadeOut(),$(".modal.active").removeClass("active"),$("body").removeClass("lock")}m=jQuery,o=this,t=document,i={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!(n="stellar"),parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},r={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[a];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[a];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,i,s,o){t[0].style[a]="translate3d("+(e-i)+"px, "+(s-o)+"px, 0)"}}},a=function(){var t,e=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,i=m("script")[0].style,s="";for(t in i)if(e.test(t)){s=t.match(e)[0];break}return"WebkitOpacity"in i&&(s="Webkit"),"KhtmlOpacity"in i&&(s="Khtml"),function(t){return s+(0<s.length?t.charAt(0).toUpperCase()+t.slice(1):t)}}()("transform"),e=m("<div />",{style:"background:#fff"}).css("background-position-x")!==v,_=e?function(t,e,i){t.css({"background-position-x":e,"background-position-y":i})}:function(t,e,i){t.css("background-position",e+" "+i)},L=e?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},f=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},s.prototype={init:function(){this.options.name=n+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===t.body&&(this.element=o),this.$scrollElement=m(this.element),this.$element=this.element===o?m("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==v?m(this.options.viewportElement):this.$scrollElement[0]===o||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=r[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var n=this,t=r[n.options.scrollProperty],a=l[n.options.positionProperty],e=t.setLeft,i=t.setTop;this._setScrollLeft="function"==typeof e?function(t){e(n.$scrollElement,t)}:m.noop,this._setScrollTop="function"==typeof i?function(t){i(n.$scrollElement,t)}:m.noop,this._setPosition=a.setPosition||function(t,e,i,s,o){n.options.horizontalScrolling&&a.setLeft(t,e,i),n.options.verticalScrolling&&a.setTop(t,s,o)}},_handleWindowLoadAndResize:function(){var t=this,e=m(o);t.options.responsive&&e.bind("load."+this.name,function(){t.refresh()}),e.bind("resize."+this.name,function(){t._detectViewport(),t.options.responsive&&t.refresh()})},refresh:function(t){var i=this,e=i._getScrollLeft(),s=i._getScrollTop();t&&t.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),t&&t.firstLoad&&/WebKit/.test(navigator.userAgent)&&m(o).on("load",function(){var t=i._getScrollLeft(),e=i._getScrollTop();i._setScrollLeft(t+1),i._setScrollTop(e+1),i._setScrollLeft(t),i._setScrollTop(e)}),this._setScrollLeft(e),this._setScrollTop(s)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==v;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){var u=this;if(this._getScrollLeft(),this._getScrollTop(),this.particles!==v)for(var t=this.particles.length-1;0<=t;t--)this.particles[t].$element.data("stellar-elementIsActive",v);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var t,e,i,s,o,n,a,r,l,f=m(this),c=0,h=0,p=0,d=0;if(f.data("stellar-elementIsActive")){if(f.data("stellar-elementIsActive")!==this)return}else f.data("stellar-elementIsActive",this);u.options.showElement(f),f.data("stellar-startingLeft")?(f.css("left",f.data("stellar-startingLeft")),f.css("top",f.data("stellar-startingTop"))):(f.data("stellar-startingLeft",f.css("left")),f.data("stellar-startingTop",f.css("top"))),i=f.position().left,s=f.position().top,o="auto"===f.css("margin-left")?0:parseInt(f.css("margin-left"),10),n="auto"===f.css("margin-top")?0:parseInt(f.css("margin-top"),10),r=f.offset().left-o,l=f.offset().top-n,f.parents().each(function(){var t=m(this);return!0===t.data("stellar-offset-parent")?(c=p,h=d,a=t,!1):(p+=t.position().left,void(d+=t.position().top))}),t=f.data("stellar-horizontal-offset")!==v?f.data("stellar-horizontal-offset"):a!==v&&a.data("stellar-horizontal-offset")!==v?a.data("stellar-horizontal-offset"):u.horizontalOffset,e=f.data("stellar-vertical-offset")!==v?f.data("stellar-vertical-offset"):a!==v&&a.data("stellar-vertical-offset")!==v?a.data("stellar-vertical-offset"):u.verticalOffset,u.particles.push({$element:f,$offsetParent:a,isFixed:"fixed"===f.css("position"),horizontalOffset:t,verticalOffset:e,startingPositionLeft:i,startingPositionTop:s,startingOffsetLeft:r,startingOffsetTop:l,parentOffsetLeft:c,parentOffsetTop:h,stellarRatio:f.data("stellar-ratio")!==v?f.data("stellar-ratio"):1,width:f.outerWidth(!0),height:f.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t,d=this,u=this._getScrollLeft(),g=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(t=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(t=t.add(this.$element)),t.each(function(){var t,e,i,s,o,n,a,r=m(this),l=L(r),f=0,c=0,h=0,p=0;if(r.data("stellar-backgroundIsActive")){if(r.data("stellar-backgroundIsActive")!==this)return}else r.data("stellar-backgroundIsActive",this);r.data("stellar-backgroundStartingLeft")?_(r,r.data("stellar-backgroundStartingLeft"),r.data("stellar-backgroundStartingTop")):(r.data("stellar-backgroundStartingLeft",l[0]),r.data("stellar-backgroundStartingTop",l[1])),i="auto"===r.css("margin-left")?0:parseInt(r.css("margin-left"),10),s="auto"===r.css("margin-top")?0:parseInt(r.css("margin-top"),10),o=r.offset().left-i-u,n=r.offset().top-s-g,r.parents().each(function(){var t=m(this);return!0===t.data("stellar-offset-parent")?(f=h,c=p,a=t,!1):(h+=t.position().left,void(p+=t.position().top))}),t=r.data("stellar-horizontal-offset")!==v?r.data("stellar-horizontal-offset"):a!==v&&a.data("stellar-horizontal-offset")!==v?a.data("stellar-horizontal-offset"):d.horizontalOffset,e=r.data("stellar-vertical-offset")!==v?r.data("stellar-vertical-offset"):a!==v&&a.data("stellar-vertical-offset")!==v?a.data("stellar-vertical-offset"):d.verticalOffset,d.backgrounds.push({$element:r,$offsetParent:a,isFixed:"fixed"===r.css("background-attachment"),horizontalOffset:t,verticalOffset:e,startingValueLeft:l[0],startingValueTop:l[1],startingBackgroundPositionLeft:isNaN(parseInt(l[0],10))?0:parseInt(l[0],10),startingBackgroundPositionTop:isNaN(parseInt(l[1],10))?0:parseInt(l[1],10),startingPositionLeft:r.position().left,startingPositionTop:r.position().top,startingOffsetLeft:o,startingOffsetTop:n,parentOffsetLeft:f,parentOffsetTop:c,stellarRatio:r.data("stellar-background-ratio")===v?1:r.data("stellar-background-ratio")})}))},_reset:function(){var t,e,i,s,o;for(o=this.particles.length-1;0<=o;o--)e=(t=this.particles[o]).$element.data("stellar-startingLeft"),i=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,i,i),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(o=this.backgrounds.length-1;0<=o;o--)(s=this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),_(s.$element,s.startingValueLeft,s.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=m.noop,m(o).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var t=this,e=m(o);e.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),e.bind("resize.horizontal-"+this.name,function(){t.horizontalOffset=t.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),e.bind("resize.vertical-"+this.name,function(){t.verticalOffset=t.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,e,i,s,o,n,a,r,l,f,c=this._getScrollLeft(),h=this._getScrollTop(),p=!0,d=!0;if(this.currentScrollLeft!==c||this.currentScrollTop!==h||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=c,this.currentScrollTop=h,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,f=this.particles.length-1;0<=f;f--)e=(t=this.particles[f]).isFixed?1:0,r=this.options.horizontalScrolling?(n=(c+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+e-1)+t.startingPositionLeft)-t.startingPositionLeft+t.startingOffsetLeft:(n=t.startingPositionLeft,t.startingOffsetLeft),l=this.options.verticalScrolling?(a=(h+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+e-1)+t.startingPositionTop)-t.startingPositionTop+t.startingOffsetTop:(a=t.startingPositionTop,t.startingOffsetTop),this.options.hideDistantElements&&(d=!this.options.horizontalScrolling||r+t.width>(t.isFixed?0:c)&&r<(t.isFixed?0:c)+this.viewportWidth+this.viewportOffsetLeft,p=!this.options.verticalScrolling||l+t.height>(t.isFixed?0:h)&&l<(t.isFixed?0:h)+this.viewportHeight+this.viewportOffsetTop),d&&p?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,n,t.startingPositionLeft,a,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(f=this.backgrounds.length-1;0<=f;f--)e=(i=this.backgrounds[f]).isFixed?0:1,s=this.options.horizontalScrolling?(c+i.horizontalOffset-this.viewportOffsetLeft-i.startingOffsetLeft+i.parentOffsetLeft-i.startingBackgroundPositionLeft)*(e-i.stellarRatio)+"px":i.startingValueLeft,o=this.options.verticalScrolling?(h+i.verticalOffset-this.viewportOffsetTop-i.startingOffsetTop+i.parentOffsetTop-i.startingBackgroundPositionTop)*(e-i.stellarRatio)+"px":i.startingValueTop,_(i.$element,s,o)}},_handleScrollEvent:function(){function t(){i._repositionElements(),s=!1}function e(){s||(f(t),s=!0)}var i=this,s=!1;this.$scrollElement.bind("scroll."+this.name,e),e()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){f(t._animationLoop),t._repositionElements()},this._animationLoop()}},m.fn[n]=function(e){var i=arguments;return e===v||"object"==typeof e?this.each(function(){m.data(this,"plugin_"+n)||m.data(this,"plugin_"+n,new s(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var t=m.data(this,"plugin_"+n);t instanceof s&&"function"==typeof t[e]&&t[e].apply(t,Array.prototype.slice.call(i,1)),"destroy"===e&&m.data(this,"plugin_"+n,null)}):void 0},m[n]=function(){var t=m(o);return t.stellar.apply(t,Array.prototype.slice.call(arguments,0))},m[n].scrollProperty=r,m[n].positionProperty=l,o.Stellar=s,$(window).load(function(){$(window).stellar({horizontalScrolling:!1,responsive:!1,hideDistantElements:!1,positionProperty:"transform"}),$("#burger").on("click",function(){$("body").toggleClass("lock"),$(this).toggleClass("active"),$(".nav_part").toggleClass("active")}),$(window).on("resize",function(){$(".tag").removeClass("dotted"),$("#srv_tags>.break").remove(),c(),console.log("resized")}),$(".menu_btn").on("click",function(){h("#modal_feedback")}),$(".close_modal, #overlay").on("click",function(){p()}),$(".modal").on("click",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}),$(".feedback_btn").on("click",function(){return p(!0),h("#modal_thank"),!1}),c()});