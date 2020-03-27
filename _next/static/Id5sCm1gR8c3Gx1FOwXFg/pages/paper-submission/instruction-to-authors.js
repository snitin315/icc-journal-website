(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+NN1":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return C}));var n=i("wx14"),r=i("q1tI"),o=i.n(r),a=i("TSYQ"),s=i.n(a),l=i("R/WZ"),c=i("8x5e"),d=i("HXcA"),u=i("mtPR"),p=i("i4t8"),h=i("8E12"),f=i("Z2Lm"),m=i("A5r5"),v=(i("/eHF"),i("Kg+a")),b=i("A2So"),y=i("UsYt"),w=i("2zww"),g=i("eDSW"),O=(i("8Gi6"),i("D7v1")),x=o.a.createElement,E={cardTitle:g.b,textCenter:{textAlign:"center"},textMuted:{color:"#6c757d"}};var j=Object(l.a)(E),R=Object(l.a)(O.a);function S(){var e=R(),t={textAlign:"justify"},i=j();return x("div",{className:e.section},x(u.a,{justify:"center"},x(p.a,{xs:12,sm:12,md:11},x("h2",{className:e.title}," Instructions To Authors"),x("h5",{className:e.description,style:t},"Papers for the regular issues of the journal can be submitted, round the year, electronically at ",x("a",null," editor@icc-journal.com")," . After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online. However, assignment of the paper to an specific Volume / Issue of the Journal will be taken up by the Editorial Board later; and the author will be intimated accordingly. For Theme Based Special Issues, time bound Special Call for Papers will be announced and the same will be applicable for that specific issue only.",x("br",null),"Submission of a paper implies that the work described has not been published previously (except in the form of an abstract or academic thesis) and is not under consideration for publication elsewhere. The submission should be approved by all the authors of the paper. If a paper is finally accepted, the authorities, where the work had been carried out, shall be responsible for not publishing the work elsewhere in the same form. Paper, once submitted for consideration in IJICC, cannot be withdrawn unless the same is finally rejected."))),x(u.a,{justify:"center"},x(p.a,{xs:12,sm:12,md:11},x("h2",{className:e.title}," Manuscript Submission"),x("h5",{className:e.description,style:t},"Submission of a manuscript implies: that the work described has not been published before; that it is not under consideration for publication anywhere else; that its publication has been approved by all co-authors, if any, as well as by the responsible authorities \u2013 tacitly or explicitly \u2013 at the institute where the work has been carried out. The publisher will not be held legally responsible should there be any claims for compensation."))),x(u.a,{justify:"center"},x(p.a,{xs:12,sm:12,md:11},x("h2",{className:e.title}," Permissions"),x("h5",{className:e.description,style:t},"Authors wishing to include figures, tables, or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s) for both the print and online format and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the authors."))),x("br",null),x(u.a,{justify:"center"},x(p.a,{xs:12,sm:12,md:11},x(b.a,{className:i.textCenter},x(w.a,{color:"primary"}," ",x("strong",null,"Online Paper Submission")),x(y.a,null,x("h5",{className:i.cardTitle},"Prospective authors are invited to submit full text papers including abstract, keywords, introduction, methodology, result description, tables, figures and references. Full text papers (.doc, .pdf) may send by e-mail at ",x("a",null,"  editor@icc-journal.com ")),x("h6",null,"Paper Template of it is available. CLick the button below."),x(v.a,{color:"primary"}," ",x("strong",null," Get Paper Template")))))))}var k=o.a.createElement,P=[],T=Object(l.a)(m.a);function C(e){var t=T(),r=Object(n.a)({},e);return k("div",null,k(c.a,Object(n.a)({color:"transparent",routes:P,brand:"ICC-Journal",rightLinks:k(h.a,null),fixed:!0,changeColorOnScroll:{height:400,color:"white"}},r)),k(f.a,{filter:!0,responsive:!0,image:i("veCo")},k("div",{className:t.container},k(u.a,null,k(p.a,{xs:12,sm:12,md:8},k("h1",{className:t.title},"Instruction"),k("br",null))))),k("div",{className:s()(t.main,t.mainRaised)},k("div",{className:t.container},k(S,null))),k(d.a,null))}},"/eHF":function(e,t,i){"use strict";function n(e,t){var i=t.distance,n=t.left,r=t.right,o=t.up,a=t.down,l=t.top,c=t.bottom,d=t.big,p=t.mirror,h=t.opposite,f=(i?i.toString():0)+((n?1:0)|(r?2:0)|(l||a?4:0)|(c||o?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(d?128:0));if(u.hasOwnProperty(f))return u[f];var m=n||r||o||a||l||c,v=void 0,b=void 0;if(m){if(!p!=!(e&&h)){var y=[r,n,c,l,a,o];n=y[0],r=y[1],l=y[2],c=y[3],o=y[4],a=y[5]}var w=i||(d?"2000px":"100%");v=n?"-"+w:r?w:"0",b=a||l?"-"+w:o||c?w:"0"}return u[f]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,r=(e.out,e.forever),o=e.timeout,a=e.duration,l=void 0===a?s.defaults.duration:a,d=e.delay,u=void 0===d?s.defaults.delay:d,p=e.count,h=void 0===p?s.defaults.count:p,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),m={make:n,duration:void 0===o?l:o,delay:u,forever:r,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,c.default)(f,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var o,a=i("17x9"),s=i("ar19"),l=i("eH+L"),c=(o=l)&&o.__esModule?o:{default:o},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},u={};r.propTypes=d,t.default=r,e.exports=t.default},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i("q1tI"),c=(n=l)&&n.__esModule?n:{default:n},d=i("17x9"),u=i("ar19"),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},m=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,r=i.forever,o=i.count,a=i.delay,s=i.duration;if(!r){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),a+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),r=this.isOn?this.getDimensionValue():0,o=void 0,a=void 0;if(t.collapseOnly)o=i.duration/3,a=i.delay;else{var s=n>>2,l=s>>1;o=s,a=i.delay+(this.isOn?0:n-s-l),e.style.animationDuration=n-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:r,transition:"height "+o+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,r=void 0;e.collapseOnly?r={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),r={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(r,e,i):r),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,s=n.reverse,l=i.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var p=s?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":r(e))&&e?c.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(s?p--:p++,0,l,o,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===r(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,r=n.style,o=n.className,s=n.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(i=this.cascade(s),d=a({},r,{opacity:1})):d=this.props.disabled?r:a({},r,this.state.style);var p=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?i||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),r=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>r-window.innerHeight&&n<i-r}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);m.propTypes=h,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},"2zww":function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var n=i("wx14"),r=i("rePB"),o=i("Ff2n"),a=i("q1tI"),s=i.n(a),l=i("TSYQ"),c=i.n(l),d=i("R/WZ"),u=i("eDSW"),p={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px"},warningCardHeader:u.x,successCardHeader:u.s,dangerCardHeader:u.e,infoCardHeader:u.k,primaryCardHeader:u.n},h=s.a.createElement,f=Object(d.a)(p);function m(e){var t,i=f(),a=e.className,s=e.children,l=e.color,d=e.plain,u=Object(o.a)(e,["className","children","color","plain"]),p=c()((t={},Object(r.a)(t,i.cardHeader,!0),Object(r.a)(t,i[l+"CardHeader"],l),Object(r.a)(t,i.cardHeaderPlain,d),Object(r.a)(t,a,void 0!==a),t));return h("div",Object(n.a)({className:p},u),s)}},"8Gi6":function(e,t,i){"use strict";var n=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("q1tI")),o=(0,n(i("8/g6")).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"}),"Album");t.default=o},A2So:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var n=i("wx14"),r=i("rePB"),o=i("Ff2n"),a=i("q1tI"),s=i.n(a),l=i("TSYQ"),c=i.n(l),d=i("R/WZ"),u={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"},cardPlain:{background:"transparent",boxShadow:"none"},cardCarousel:{overflow:"hidden"}},p=s.a.createElement,h=Object(d.a)(u);function f(e){var t,i=h(),a=e.className,s=e.children,l=e.plain,d=e.carousel,u=Object(o.a)(e,["className","children","plain","carousel"]),f=c()((t={},Object(r.a)(t,i.card,!0),Object(r.a)(t,i.cardPlain,l),Object(r.a)(t,i.cardCarousel,d),Object(r.a)(t,a,void 0!==a),t));return p("div",Object(n.a)({className:f},u),s)}},A5r5:function(e,t,i){"use strict";var n=i("rePB"),r=i("eDSW");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var s={container:a({zIndex:"12",color:"#FFFFFF"},r.c),title:a({},r.u,{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#FFFFFF",textDecoration:"none"}),subtitle:{fontSize:"1.313rem",maxWidth:"500px",margin:"10px auto 0"},main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{margin:"-60px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"}};t.a=s},D7v1:function(e,t,i){"use strict";var n=i("rePB"),r=i("eDSW"),o=i("Ilpk");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var l=s({section:{padding:"70px 0",textAlign:"center"},title:s({},r.u,{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"})},o.a,{itemGrid:{marginLeft:"auto",marginRight:"auto"},cardTitle:r.b,smallTitle:{color:"#6c757d"},description:{color:"#999"},justifyCenter:{justifyContent:"center !important"},socials:{marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px",color:"#999"},margin5:{margin:"5px"}});t.a=l},Ilpk:function(e,t,i){"use strict";t.a={imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}}},RVsb:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/paper-submission/instruction-to-authors",function(){return i("+NN1")}])},UsYt:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var n=i("wx14"),r=i("rePB"),o=i("Ff2n"),a=i("q1tI"),s=i.n(a),l=i("TSYQ"),c=i.n(l),d=i("R/WZ"),u={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}},p=s.a.createElement,h=Object(d.a)(u);function f(e){var t,i=h(),a=e.className,s=e.children,l=Object(o.a)(e,["className","children"]),d=c()((t={},Object(r.a)(t,i.cardBody,!0),Object(r.a)(t,a,void 0!==a),t));return p("div",Object(n.a)({className:d},l),s)}},Z2Lm:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var n=i("rePB"),r=i("ODXe"),o=i("q1tI"),a=i.n(o),s=i("TSYQ"),l=i.n(s),c=i("R/WZ"),d=function(e){return{parallax:{height:"90vh",maxHeight:"1000px",overflow:"hidden",position:"relative",backgroundPosition:"center top",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center"},filter:{"&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:after,&:before":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"380px"},parallaxResponsive:Object(n.a)({},e.breakpoints.down("md"),{minHeight:"660px"})}},u=a.a.createElement;function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var f=Object(c.a)(d);function m(e){var t,i=a.a.useState("translate3d(0,0px,0)"),o=Object(r.a)(i,2),s=o[0],c=o[1];a.a.useEffect((function(){return window.innerWidth>=768&&window.addEventListener("scroll",d),function(){window.innerWidth>=768&&window.removeEventListener("scroll",d)}}));var d=function(){var e=window.pageYOffset/3;c("translate3d(0,"+e+"px,0)")},p=e.filter,m=e.className,v=e.children,b=e.style,y=e.image,w=e.small,g=e.responsive,O=f(),x=l()((t={},Object(n.a)(t,O.parallax,!0),Object(n.a)(t,O.filter,p),Object(n.a)(t,O.small,w),Object(n.a)(t,O.parallaxResponsive,g),Object(n.a)(t,m,void 0!==m),t));return u("div",{className:x,style:h({},b,{backgroundImage:"url("+y+")",transform:s})},v)}},ar19:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function r(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",r,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,r){var o=Math.log(n),a=(Math.log(r)-o)/(i-t);return Math.exp(o+a*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+p)+"{"+e+"}",i=h[e];return i?""+m+i:(f.insertRule(t,f.cssRules.length),h[e]=p,""+m+p++)},t.hideAll=r,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=a=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(c,1500),s||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},"eH+L":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(a.default,r({},e,{inEffect:t,outEffect:i,children:n})):(n=o.default.Children.map(n,(function(n){return o.default.createElement(a.default,r({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(i("q1tI")),a=n(i("28nh"));e.exports=t.default},veCo:function(e,t){e.exports="/_next/static/images/landing-bg-df8fd3efcd662b64b44de07f351c838b.jpg"}},[["RVsb",0,2,1,3,4]]]);