function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{whBs:function(t,e,n){"use strict";n.r(e),n.d(e,"LinkOptionsComponent",(function(){return y})),n.d(e,"LinkOptionsModule",(function(){return k}));var i=n("ofXK"),o=n("3Pt+"),s=n("fXoL"),r=n("XCOF"),a=n("TznM"),c=["optionsWrapper"],l=["canvas"];function p(t,e){if(1&t){var n=s.Xb();s.Wb(0,"div",10),s.Wb(1,"div",11),s.Dc(2),s.Vb(),s.Wb(3,"div",12),s.ec("click",(function(t){s.vc(n);var i=e.$implicit;return s.hc(2).getPositionA(t.target,i.order)}))("touchstart",(function(t){s.vc(n);var i=e.$implicit;return s.hc(2).getPositionA(t.target,i.order)})),s.Vb(),s.Vb()}if(2&t){var i=e.$implicit,o=s.hc(2);s.Gb("options-image-wrapper",o.IsImage),s.Cb(2),s.Fc(" ",i.value," "),s.Cb(1),s.Db("data-order",i.order)}}function h(t,e){if(1&t&&(s.Wb(0,"div",17),s.Dc(1),s.Vb()),2&t){var n=s.hc().$implicit;s.Cb(1),s.Fc(" ",n.value," ")}}function u(t,e){if(1&t&&(s.Wb(0,"div",18),s.Rb(1,"img",19),s.Vb()),2&t){var n=s.hc().$implicit,i=s.hc(2);s.Cb(1),s.kc("src",i.resourceLoadsService.getExerciseImage(n.value),s.xc)}}function v(t,e){if(1&t){var n=s.Xb();s.Wb(0,"div",20),s.ec("click",(function(t){s.vc(n);var e=s.hc().$implicit;return s.hc(2).getPositionA(t.target,e.order)}))("touchstart",(function(t){s.vc(n);var e=s.hc().$implicit;return s.hc(2).getPositionA(t.target,e.order)})),s.Vb()}if(2&t){var i=s.hc().$implicit;s.Db("data-order",i.order)}}function g(t,e){if(1&t){var n=s.Xb();s.Wb(0,"div",10),s.Wb(1,"div",13),s.ec("click",(function(t){s.vc(n);var i=e.$implicit,o=s.hc(2);return[o.getPositionB(t.target),o.getUserResult(i.order)]})),s.Vb(),s.Cc(2,h,2,1,"div",14),s.Cc(3,u,2,1,"div",15),s.Cc(4,v,1,1,"div",16),s.Vb()}if(2&t){var i=e.$implicit,o=s.hc(2);s.Gb("options-image-wrapper",o.IsImage),s.Cb(1),s.Db("data-order",i.order),s.Cb(1),s.kc("ngIf",!o.IsImage&&!o.LinkOptionsArray[2]||!o.IsImage&&o.LinkOptionsArray[2]||o.IsImage&&o.LinkOptionsArray[2]),s.Cb(1),s.kc("ngIf",o.IsImage&&!o.LinkOptionsArray[2]),s.Cb(1),s.kc("ngIf",o.LinkOptionsArray[2])}}function f(t,e){if(1&t&&(s.Wb(0,"div",24),s.Dc(1),s.Vb()),2&t){var n=s.hc().$implicit;s.Cb(1),s.Fc(" ",n.value," ")}}function d(t,e){if(1&t&&(s.Wb(0,"div",18),s.Rb(1,"img",19),s.Vb()),2&t){var n=s.hc().$implicit,i=s.hc(3);s.Cb(1),s.kc("src",i.resourceLoadsService.getExerciseImage(n.value),s.xc)}}function m(t,e){if(1&t){var n=s.Xb();s.Wb(0,"div",10),s.Wb(1,"div",22),s.ec("click",(function(t){s.vc(n);var i=e.$implicit,o=s.hc(3);return[o.getPositionB(t.target),o.getUserResult(i.order)]})),s.Vb(),s.Cc(2,f,2,1,"div",23),s.Cc(3,d,2,1,"div",15),s.Vb()}if(2&t){var i=e.$implicit,o=s.hc(3);s.Gb("options-image-wrapper",o.IsImage),s.Cb(1),s.Db("data-order",i.order),s.Cb(1),s.kc("ngIf",!o.IsImage),s.Cb(1),s.kc("ngIf",o.IsImage)}}function b(t,e){if(1&t&&(s.Ub(0),s.Wb(1,"div",21),s.Cc(2,m,4,5,"div",5),s.Vb(),s.Tb()),2&t){var n=s.hc(2);s.Cb(2),s.kc("ngForOf",n.LinkOptionsArray[2])}}function C(t,e){if(1&t){var n=s.Xb();s.Wb(0,"div",1,2),s.Wb(2,"div",3),s.ec("mousemove",(function(t){return s.vc(n),s.hc().lineMove(t,0)}))("touchmove",(function(t){return s.vc(n),s.hc().lineMove(t,0)}))("touchend",(function(t){return s.vc(n),s.hc().getTouchPositionB(t)}))("click",(function(t){return s.vc(n),s.hc().clearOnClick(t.target)})),s.Wb(3,"div",4),s.Cc(4,p,4,4,"div",5),s.Vb(),s.Wb(5,"div",6),s.Cc(6,g,5,6,"div",5),s.Vb(),s.Cc(7,b,3,1,"ng-container",7),s.Rb(8,"canvas",8,9),s.Vb(),s.Vb()}if(2&t){var i=s.hc();s.Gb("blockAfterGetResults",i.isCorrectValues),s.Cb(4),s.kc("ngForOf",i.LinkOptionsArray[0]),s.Cb(2),s.kc("ngForOf",i.LinkOptionsArray[1]),s.Cb(1),s.kc("ngIf",i.LinkOptionsArray[2])}}var y=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.exerciseDataService=e,this.resourceLoadsService=n,this.position={x1:null,y1:null,x2:null,y2:null},this.results={},this.saveLines={},this.domElems={canvas:null,canvasWrapper:null},this.lineStart=!1,this.startFlomLeftPoint=!1,this.startFromRightPoint=!1}return _createClass(t,[{key:"ngOnChanges",value:function(){var t,e,n=this,i=[];if(this.list.sort((function(t,e){return t.Order-e.Order})),this.isCorrectValues){this.saveLines={};var o=document.getElementsByClassName("js-left-point"),s=document.getElementsByClassName("js-right-point"),r=0;return this.list.forEach((function(t,e){var i,a;n.LinkOptionsArray.length>2?(o.length/2>r?(i=o[t.Order-1],a=o[+t.CorrectValue-1]):(i=s[t.Order-1-o.length/2],a=s[+t.CorrectValue-1-o.length/2]),r++):(i=o[t.Order-1],a=o[+t.CorrectValue-1]),n.saveLines[e]={isCorrect:null,x1:null,y1:null,x2:null,y2:null},n.saveLines[e].isCorrect=t.IsCorrect,n.saveLines[e].x1=n.getCenterPosition(i).x,n.saveLines[e].y1=n.getCenterPosition(i).y,n.saveLines[e].x2=n.getCenterPosition(a).x,n.saveLines[e].y2=n.getCenterPosition(a).y})),this.clearCanvas(),void this.paintSaveLines()}var a=[];this.list.forEach((function(i){"IsImage"===i.Metric&&(n.IsImage="True"===i.Value),"NumberOfColumns"===i.Metric&&(t=+i.Value),"NumberOfOptions"===i.Metric&&(e=+i.Value),"Value"===i.Metric&&a.push({order:i.Order,value:i.Value})}));for(var c=1;t>0;)i[c-1]=[],a.forEach((function(t,n){n<e*c&&n>=e*(c-1)&&i[c-1].push(t)})),c++,t--;this.LinkOptionsArray=i}},{key:"lineMove",value:function(t,e){if(this.lineStart){var n=this.optionsWrapper.nativeElement.getBoundingClientRect().left,i=this.optionsWrapper.nativeElement.getBoundingClientRect().top,o=this.getEventPosition(t).clientX-n,s=this.getEventPosition(t).clientY-i,r=this.position.x1-n,a=this.position.y1-i,c=this.canvas.nativeElement.getContext("2d");this.clearCanvas(),c.beginPath(),c.moveTo(r,a);var l=t.target;if(l.classList.contains("js-drop-point")){var p=this.getCenterPosition(l).x-n,h=this.getCenterPosition(l).y-i;c.lineTo(p,h)}else c.lineTo(o,s);c.stroke(),this.paintSaveLines()}}},{key:"getPositionA",value:function(t,e){t.classList.contains("js-left-point")&&(this.startFlomLeftPoint=!0,this.startFromRightPoint=!1),t.classList.contains("js-right-point")&&(this.startFlomLeftPoint=!1,this.startFromRightPoint=!0),this.elemAttention(t),this.position.x1=this.getCenterPosition(t).x,this.position.y1=this.getCenterPosition(t).y,this.lineStart=!0,this.saveStartNumber=e,this.saveLines[e]&&delete this.saveLines[e]}},{key:"getTouchPositionB",value:function(t){if(this.clearCanvas(),this.paintSaveLines(),this.lineStart){var e=document.elementFromPoint(t.changedTouches[0].clientX,t.changedTouches[0].clientY);if((!e.classList.contains("js-left-point")||this.startFlomLeftPoint)&&(!e.classList.contains("js-right-point")||this.startFromRightPoint)&&(e.classList.contains("js-center-left-point")||e.classList.contains("js-center-right-point"))){this.getUserResult(e.getAttribute("data-order")),this.elemAttention(e),this.position.x2=this.getCenterPosition(e).x,this.position.y2=this.getCenterPosition(e).y;var n={x1:null,y1:null,x2:null,y2:null};n.x1=this.position.x1,n.y1=this.position.y1,n.x2=this.position.x2,n.y2=this.position.y2,this.saveLines[this.saveStartNumber]=n,this.lineStart=!1,this.paintSaveLines()}}}},{key:"clearOnClick",value:function(t){t.classList.contains("js-drop-point")||t.classList.contains("js-right-point")||t.classList.contains("js-left-point")||(this.lineStart=!1,this.clearCanvas(),this.paintSaveLines())}},{key:"getPositionB",value:function(t){if((!t.classList.contains("js-left-point")||this.startFlomLeftPoint)&&(!t.classList.contains("js-right-point")||this.startFromRightPoint)&&this.lineStart){this.elemAttention(t),this.position.x2=this.getCenterPosition(t).x,this.position.y2=this.getCenterPosition(t).y;var e={x1:null,y1:null,x2:null,y2:null};e.x1=this.position.x1,e.y1=this.position.y1,e.x2=this.position.x2,e.y2=this.position.y2,this.saveLines[this.saveStartNumber]=e,this.lineStart=!1}}},{key:"clearCanvas",value:function(){this.canvas.nativeElement.getContext("2d").clearRect(0,0,this.optionsWrapper.nativeElement.getBoundingClientRect().width,this.optionsWrapper.nativeElement.getBoundingClientRect().height)}},{key:"getCenterPosition",value:function(t){var e=t.getBoundingClientRect().width/2,n=t.getBoundingClientRect().top;return{x:t.getBoundingClientRect().left+e,y:n+e}}},{key:"paintSaveLines",value:function(){var t=this.canvas.nativeElement.getContext("2d");for(var e in this.saveLines)if(Object.prototype.hasOwnProperty.call(this.saveLines,e)){var n=this.saveLines[e];Object.prototype.hasOwnProperty.call(n,"isCorrect")&&(t.strokeStyle=this.saveLines[e].isCorrect?"#92d050":"#FBACAC");var i=n.x1-this.canvas.nativeElement.getBoundingClientRect().left,o=n.y1-this.canvas.nativeElement.getBoundingClientRect().top,s=n.x2-this.canvas.nativeElement.getBoundingClientRect().left,r=n.y2-this.canvas.nativeElement.getBoundingClientRect().top;t.beginPath(),t.moveTo(i,o),t.lineTo(s,r),t.stroke()}}},{key:"getUserResult",value:function(t){for(var e in this.results[this.saveStartNumber]={Type:"LinkOptions",Order:this.Order,Data:{Order:this.saveStartNumber,Value:t+""}},this.results)Object.prototype.hasOwnProperty.call(this.results,e)&&this.exerciseDataService.subject.next(this.results[e])}},{key:"elemAttention",value:function(t){t.classList.add("elem-attention"),setTimeout((function(){t.classList.remove("elem-attention")}),300)}},{key:"getEventPosition",value:function(t){var e,n;return"mousemove"===t.type&&(e=t.clientX,n=t.clientY),"touchmove"===t.type&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}}},{key:"ngAfterViewInit",value:function(){this.canvas.nativeElement.width=this.optionsWrapper.nativeElement.getBoundingClientRect().width,this.canvas.nativeElement.height=this.optionsWrapper.nativeElement.getBoundingClientRect().height;var t=this.canvas.nativeElement.getContext("2d");t.strokeStyle="#fccd04",t.lineWidth=this.windowWidth()/100/2}},{key:"windowWidth",value:function(){var t=window,e=document,n=e.documentElement,i=e.getElementsByTagName("body")[0];return t.innerWidth||n.clientWidth||i.clientWidth}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Qb(r.a),s.Qb(a.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-link-options"]],viewQuery:function(t,e){var n;1&t&&(s.Hc(c,!0),s.Hc(l,!0)),2&t&&(s.rc(n=s.fc())&&(e.optionsWrapper=n.first),s.rc(n=s.fc())&&(e.canvas=n.first))},inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[s.Ab],decls:1,vars:1,consts:[["class","wrapper",3,"blockAfterGetResults",4,"ngIf"],[1,"wrapper"],["optionsWrapper",""],[1,"link-options-wrapper","d-flex","justify-content-center",3,"mousemove","touchmove","touchend","click"],[1,"left-options-container","options_container","d-flex","flex-column","justify-content-between"],["class","d-flex align-items-center",3,"options-image-wrapper",4,"ngFor","ngForOf"],[1,"center-options-container","options_container","d-flex","flex-column","justify-content-between"],[4,"ngIf"],[1,"canvas"],["canvas",""],[1,"d-flex","align-items-center"],[1,"left-option","option","main-f-size"],[1,"option-point","left-option-point","js-left-point",3,"click","touchstart"],[1,"option-point","center-option-point","js-center-left-point","js-drop-point","js-left-point",3,"click"],["class","center-option option main-f-size",4,"ngIf"],["class","option-image-wrapper",4,"ngIf"],["class","option-point center-option-point center_right-point js-right-point",3,"click","touchstart",4,"ngIf"],[1,"center-option","option","main-f-size"],[1,"option-image-wrapper"],[1,"option-image",3,"src"],[1,"option-point","center-option-point","center_right-point","js-right-point",3,"click","touchstart"],[1,"right-options-container","options_container"],[1,"option-point","right-option-point","js-center-right-point","js-drop-point","js-right-point",3,"click"],["class","right-option option main-f-size",4,"ngIf"],[1,"right-option","option","main-f-size"]],template:function(t,e){1&t&&s.Cc(0,C,10,5,"div",0),2&t&&s.kc("ngIf",e.LinkOptionsArray)},directives:[i.j,i.i],styles:["[_nghost-%COMP%]{width:100%}.blockAfterGetResults[_ngcontent-%COMP%]{pointer-events:none}.canvas[_ngcontent-%COMP%]{z-index:-1;position:absolute;top:0;left:0}.link-options-wrapper[_ngcontent-%COMP%]:not(:last-child){margin-right:3vw}.link-options-wrapper[_ngcontent-%COMP%]{position:relative}.center-options-container[_ngcontent-%COMP%], .left-options-container[_ngcontent-%COMP%]{margin-right:3vw}.option[_ngcontent-%COMP%]{border-radius:100px;display:flex;justify-content:center;align-items:center;padding:1vh 3vw;text-align:center;color:#fff;font-size:calc(1vh + .5vw);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;margin:1vh 0;width:100%}.options-image-wrapper[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5vh}.options-image-wrapper[_ngcontent-%COMP%]{height:10vh}.option-image-wrapper[_ngcontent-%COMP%]{height:inherit;background:#ffd2bb;border:.3vw solid #f47433;border-radius:10vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.option-image[_ngcontent-%COMP%]{width:100%;max-width:150px;height:100%;-o-object-fit:contain;object-fit:contain}.center_right-point[_ngcontent-%COMP%]:hover, .left-option-point[_ngcontent-%COMP%]:hover{opacity:.5}.option-point[_ngcontent-%COMP%]{padding:.7vw;border-radius:50%;cursor:pointer;transition:opacity .2s}.center_right-point[_ngcontent-%COMP%]{margin-left:1vw;margin-right:0!important}.left-option[_ngcontent-%COMP%]{background:#11afa9}.center-option[_ngcontent-%COMP%]{background:#ff712c}.right-option[_ngcontent-%COMP%]{background:#fccd05}.left-option-point[_ngcontent-%COMP%]{background:#0b7570;margin-left:1vw}.center-option-point[_ngcontent-%COMP%]{background:#c74200;margin-right:1vw}.right-option-point[_ngcontent-%COMP%]{background:#c09805;margin-right:1vw}.elem-attention[_ngcontent-%COMP%]{-webkit-animation:attention .3s;animation:attention .3s}@-webkit-keyframes attention{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}@keyframes attention{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}@media screen and (min-width:3000px){.option-image[_ngcontent-%COMP%]{width:10vw}}"]}),t}(),k=function(){var t=function(){function t(e){_classCallCheck(this,t),this.componentFactoryResolver=e}return _createClass(t,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(y)}}]),t}();return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)(s.ac(s.j))},imports:[[i.b,o.n]]}),t}()}}]);