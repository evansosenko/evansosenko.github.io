function FastClick(e){"use strict";function t(e,t){return function(){return e.apply(t,arguments)}}var n;this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=e,FastClick.notNeeded(e)||(deviceIsAndroid&&(e.addEventListener("mouseover",t(this.onMouse,this),!0),e.addEventListener("mousedown",t(this.onMouse,this),!0),e.addEventListener("mouseup",t(this.onMouse,this),!0)),e.addEventListener("click",t(this.onClick,this),!0),e.addEventListener("touchstart",t(this.onTouchStart,this),!1),e.addEventListener("touchmove",t(this.onTouchMove,this),!1),e.addEventListener("touchend",t(this.onTouchEnd,this),!1),e.addEventListener("touchcancel",t(this.onTouchCancel,this),!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,r):i.call(e,t,n,r)},e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),r):i.call(e,t,n,r)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null))}window.Modernizr=function(e,t,n){function r(e){k.cssText=e}function i(e,t){return r(S.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&k[i]!==n)return"pfx"==t?i:!0}return!1}function s(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+T.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?c(i,t):(i=(e+" "+x.join(r+" ")+r).split(" "),s(i,t,n))}function l(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)N[n[r]]=!!(n[r]in b);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,i,o,a=0,c=e.length;c>a;a++)b.setAttribute("type",i=e[a]),r="text"!==b.type,r&&(b.value=C,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&b.style.WebkitAppearance!==n?(v.appendChild(b),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,v.removeChild(b)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?b.checkValidity&&b.checkValidity()===!1:b.value!=C)),L[e[a]]=!!r;return L}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.7.1",h={},m=!0,v=t.documentElement,g="modernizr",y=t.createElement(g),k=y.style,b=t.createElement("input"),C=":)",E={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",T=w.split(" "),x=w.toLowerCase().split(" "),I={svg:"http://www.w3.org/2000/svg"},F={},L={},N={},M=[],O=M.slice,P=function(e,n,r,i){var o,a,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=i?i[r]:g+(r+1),u.appendChild(c);return o=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),u.id=g,(l?u:d).innerHTML+=o,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=v.style.overflow,v.style.overflow="hidden",v.appendChild(d)),a=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),v.style.overflow=s),!!a},A=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return P("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},j=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty;f=o(D,"undefined")||o(D.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=O.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(O.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(O.call(arguments)))};return r}),F.flexbox=function(){return u("flexWrap")},F.flexboxlegacy=function(){return u("boxDirection")},F.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},F.canvastext=function(){return!(!h.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},F.webgl=function(){return!!e.WebGLRenderingContext},F.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:P(["@media (",S.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},F.geolocation=function(){return"geolocation"in navigator},F.postmessage=function(){return!!e.postMessage},F.websqldatabase=function(){return!!e.openDatabase},F.indexedDB=function(){return!!u("indexedDB",e)},F.hashchange=function(){return j("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},F.history=function(){return!(!e.history||!history.pushState)},F.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},F.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},F.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(k.backgroundColor,"rgba")},F.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(k.backgroundColor,"rgba")||a(k.backgroundColor,"hsla")},F.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(k.background)},F.backgroundsize=function(){return u("backgroundSize")},F.borderimage=function(){return u("borderImage")},F.borderradius=function(){return u("borderRadius")},F.boxshadow=function(){return u("boxShadow")},F.textshadow=function(){return""===t.createElement("div").style.textShadow},F.opacity=function(){return i("opacity:.55"),/^0.55$/.test(k.opacity)},F.cssanimations=function(){return u("animationName")},F.csscolumns=function(){return u("columnCount")},F.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),a(k.backgroundImage,"gradient")},F.cssreflections=function(){return u("boxReflect")},F.csstransforms=function(){return!!u("transform")},F.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in v.style&&P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},F.csstransitions=function(){return u("transition")},F.fontface=function(){var e;return P('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},F.generatedcontent=function(){var e;return P(["#",g,"{font:0/0 a}#",g,':after{content:"',C,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},F.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},F.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},F.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},F.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},F.webworkers=function(){return!!e.Worker},F.applicationcache=function(){return!!e.applicationCache},F.svg=function(){return!!t.createElementNS&&!!t.createElementNS(I.svg,"svg").createSVGRect},F.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==I.svg},F.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(I.svg,"animate")))},F.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(I.svg,"clipPath")))};for(var B in F)f(F,B)&&(d=B.toLowerCase(),h[d]=F[B](),M.push((h[d]?"":"no-")+d));return h.input||l(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(v.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=b=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=g[e[m]];return t||(t={},v++,e[m]=v,g[v]=t),t}function o(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)o.createElement(c[a]);return o}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=i(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:o,createDocumentFragment:a};e.html5=y,s(t)}(this,t),h._version=p,h._prefixes=S,h._domPrefixes=x,h._cssomPrefixes=T,h.mq=A,h.hasEvent=j,h.testProp=function(e){return c([e])},h.testAllProps=u,h.testStyles=P,h.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+M.join(" "):""),h}(this,this.document),function(e,t,n){function r(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function i(e,n,i,o,c,s){var u,l,f=t.createElement("script");o=o||d.errorTimeout,f.src=e;for(l in i)f.setAttribute(l,i[l]);n=s?a:n||y,f.onreadystatechange=f.onload=function(){!u&&r(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},p(function(){u||(u=1,n(1))},o),c?f.onload():h.parentNode.insertBefore(f,h)}function o(e,n,r,i,o,c){var s,u=t.createElement("link");i=i||d.errorTimeout,n=c?a:n||y,u.href=e,u.rel="stylesheet",u.type="text/css";for(s in r)u.setAttribute(s,r[s]);o||(h.parentNode.insertBefore(u,h),p(n,0))}function a(){var e=v.shift();g=1,e?e.t?p(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),a()):g=0}function c(e,n,i,o,c,s,u){function l(t){if(!m&&r(f.readyState)&&(k.r=m=1,!g&&a(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&p(function(){C.removeChild(f)},50);for(var i in M[n])M[n].hasOwnProperty(i)&&M[n][i].onload()}}u=u||d.errorTimeout;var f=t.createElement(e),m=0,y=0,k={t:i,s:n,e:c,a:s,x:u};1===M[n]&&(y=1,M[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,y)},v.splice(o,0,k),"img"!=e&&(y||2===M[n]?(C.insertBefore(f,b?null:h),p(l,u)):M[n].push(f))}function s(e,t,n,r,i){return g=0,t=t||"j",F(e)?c("c"==t?T:w,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&a()),this}function u(){var e=d;return e.loader={load:s,i:0},e}var l,d,f=t.documentElement,p=e.setTimeout,h=t.getElementsByTagName("script")[0],m={}.toString,v=[],g=0,y=function(){},k="MozAppearance"in f.style,b=k&&!!t.createRange().compareNode,C=b?f:h.parentNode,E=e.opera&&"[object Opera]"==m.call(e.opera),S=!!t.attachEvent&&!E,w=k?"object":S?"script":"img",T=S?"script":w,x=Array.isArray||function(e){return"[object Array]"==m.call(e)},I=function(e){return Object(e)===e},F=function(e){return"string"==typeof e},L=function(e){return"[object Function]"==m.call(e)},N=[],M={},O={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,i=e.split("!"),o=N.length,a=i.pop(),c=i.length,s={url:a,origUrl:a,prefixes:i};for(n=0;c>n;n++)r=i[n].split("="),t=O[r.shift()],t&&(s=t(s,r));for(n=0;o>n;n++)s=N[n](s);return s}function r(e){return e.split(".").pop().split("?").shift()}function i(e,i,o,a,c){{var s=t(e),l=s.autoCallback;r(s.url)}if(!s.bypass)return i&&(i=L(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,i,o,a,c):(M[s.url]?s.noexec=!0:M[s.url]=1,o.load(s.url,s.forceCSS||!s.forceJS&&"css"==r(s.url)?"c":n,s.noexec,s.attrs,s.timeout),(L(i)||L(l))&&o.load(function(){u(),i&&i(s.origUrl,c,a),l&&l(s.origUrl,c,a),M[s.url]=2}),void 0)}function o(e,t){function n(e,n){if(e){if(F(e))n||(u=function(){var e=[].slice.call(arguments);l.apply(this,e),d()}),i(e,u,t,0,a);else if(I(e)){r=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}();for(o in e)e.hasOwnProperty(o)&&(n||--r||(L(u)?u=function(){var e=[].slice.call(arguments);l.apply(this,e),d()}:u[o]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(l[o])),i(e[o],u,t,o,a))}}else!n&&d()}var r,o,a=!!e.test,c=a?e.yep:e.nope,s=e.load||e.both,u=e.callback||y,l=u,d=e.complete||y;n(c,!!s),s&&n(s)}var a,c,s=this.yepnope.loader;if(F(e))i(e,0,s,0);else if(x(e))for(a=0;a<e.length;a++)c=e[a],F(c)?i(c,0,s,0):x(c)?d(c):I(c)&&o(c,s);else I(e)&&o(e,s)},d.addPrefix=function(e,t){O[e]=t},d.addFilter=function(e){N.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",l=function(){t.removeEventListener("DOMContentLoaded",l,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=a,e.yepnope.injectJs=i,e.yepnope.injectCss=o}(this,document);var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<200&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},FastClick.prototype.onTouchMove=function(e){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,o,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(o=e.changedTouches[0],a=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=a.tagName.toLowerCase(),"label"===r){if(t=this.findControl(a)){if(this.focus(a),deviceIsAndroid)return!1;a=t}}else if(this.needsFocus(a))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,e),deviceIsIOS4&&"select"===r||(this.targetElement=null,e.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(i=a.fastClickScrollParent,i&&i.fastClickLastScrollTop!==i.scrollTop)?!0:(this.needsClick(a)||(e.preventDefault(),this.sendClick(a,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===e.style.msTouchAction?!0:!1},FastClick.attach=function(e){"use strict";return new FastClick(e)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,function(){}.call(this);