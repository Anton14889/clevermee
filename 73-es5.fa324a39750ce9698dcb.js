function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{v3hf:function(e,t,r){"use strict";r.r(t),r.d(t,"TableChainComponent",(function(){return b})),r.d(t,"TableChainModule",(function(){return m}));var n=r("ofXK"),o=r("3Pt+"),a=r("fXoL"),i=r("XCOF"),c=["table"],l=function(e){return{transform:e}};function s(e,t){if(1&e&&(a.Wb(0,"span",11),a.Wb(1,"span",12),a.Dc(2),a.Vb(),a.Vb()),2&e){var r=a.hc().$implicit,n=a.hc(3);a.kc("ngStyle",a.nc(2,l,"translateX("+n.getArrowPosition()+"px)")),a.Cb(2),a.Fc(" ",r.ColumnStep,": ")}}function u(e,t){if(1&e){var r=a.Xb();a.Wb(0,"td",7),a.Wb(1,"div",8),a.Wb(2,"input",9),a.ec("input",(function(e){a.vc(r);var n=t.$implicit,o=a.hc(3);return[o.isIcon(e.target),o.getUserResult(e.target.value,n.Order)]})),a.Vb(),a.Vb(),a.Cc(3,s,3,4,"span",10),a.Vb()}if(2&e){var n=t.$implicit;a.Cb(2),a.Gb("input-disabled",n.defaultValue)("correct-exercise-answer",n.IsCorrect)("incorrect-exercise-answer",null!==n.IsCorrect&&!n.IsCorrect),a.kc("disabled",n.defaultValue)("value",n.defaultValue||n.CorrectValue),a.Cb(1),a.kc("ngIf",n.ColumnStep)}}function f(e,t){if(1&e&&(a.Wb(0,"span",13),a.Wb(1,"span",12),a.Dc(2),a.Vb(),a.Vb()),2&e){var r=a.hc().index,n=a.hc(2);a.Cb(2),a.Fc(" ",n.rowsArrows[r].Value,": ")}}function d(e,t){if(1&e&&(a.Wb(0,"tr"),a.Cc(1,u,4,9,"td",5),a.Cc(2,f,3,1,"span",6),a.Vb()),2&e){var r=t.$implicit,n=t.index,o=a.hc(2);a.Cb(1),a.kc("ngForOf",r),a.Cb(1),a.kc("ngIf",o.rowsArrows[n])}}function p(e,t){if(1&e&&(a.Wb(0,"div",1),a.Wb(1,"table",2,3),a.Cc(3,d,3,2,"tr",4),a.Vb(),a.Vb()),2&e){var r=a.hc();a.Cb(3),a.kc("ngForOf",r.tableArray)}}var b=function(){var e=function(){function e(t){_classCallCheck(this,e),this.exerciseDataService=t,this.tableWidth={1:"35%",2:"35%",3:"55%",4:"77%"},this.tableArray=[],this.rowsArrows=[]}return _createClass(e,[{key:"ngOnChanges",value:function(){var e=this;if(this.list.sort((function(e,t){return e.Order-t.Order})),this.isCorrectValues)this.list.forEach((function(t){t.Order--;var r={row:null,column:null};t.Order/e.saveColumns<1?(r.row=0,r.column=t.Order):(r.row=Math.floor(t.Order/e.saveColumns),r.column=t.Order-r.row*e.saveColumns);try{e.tableArray[r.row][r.column].CorrectValue=t.CorrectValue,e.tableArray[r.row][r.column].IsCorrect=t.IsCorrect}catch(n){}}));else{var t,r,n=[],o=[],a=[],i=[];this.list.forEach((function(e){"ColumnSize"===e.Metric&&(t=e.Value),"RowSize"===e.Metric&&(r=e.Value),"DefaultValue"===e.Metric&&(--e.Order,n.push(e)),"ColumnStep"===e.Metric&&o.push(e),"RowStep"===e.Metric&&a.push(e)}));var c=0;a.sort((function(e,t){return e.Order-t.Order})),this.rowsArrows=a,o.sort((function(e,t){return e.Order-t.Order}));var l=t;this.saveColumns=l;for(var s=0;r>0;){for(var u=[];t>0;){var f={defaultValue:null,ColumnStep:null,CorrectValue:null,IsCorrect:null,Order:++s};1===r&&(o[c]&&o[c].hasOwnProperty("Value")&&(f.ColumnStep=o[c].Value),c++),u.push(f),t--}i.push(u),t=l,r--}var d={row:null,column:null};n.forEach((function(e){e.Order/l<1?(d.row=0,d.column=e.Order):(d.row=Math.floor(e.Order/l),d.column=e.Order-d.row*l);try{i[d.row][d.column].defaultValue=e.Value}catch(t){}})),this.tableArray=i,setTimeout((function(){e.tableWidth.hasOwnProperty(t)&&(e.table.nativeElement.style.width=e.tableWidth[t]),t<5&&(e.table.nativeElement.style.margin="auto")}),0)}}},{key:"getUserResult",value:function(e,t){this.exerciseDataService.subject.next({Type:"TableChain",Order:this.Order,Data:{Order:t,Value:e}})}},{key:"isIcon",value:function(e){e.value?e.classList.remove("form_input-edit-icon"):e.classList.add("form_input-edit-icon")}},{key:"getArrowPosition",value:function(){if(!this.isCorrectValues){var e=window,t=document,r=t.documentElement,n=t.getElementsByTagName("body")[0],o=e.innerWidth||r.clientWidth||n.clientWidth,a=document.querySelector("td").getBoundingClientRect().width;return Math.floor(a-o/100*3.5)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Qb(i.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-table-chain"]],viewQuery:function(e,t){var r;1&e&&a.Hc(c,!0),2&e&&a.rc(r=a.fc())&&(t.table=r.first)},inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[a.Ab],decls:1,vars:1,consts:[["class","table-wrapper",4,"ngIf"],[1,"table-wrapper"],[1,"table","ml-auto","main-f-size"],["table",""],[4,"ngFor","ngForOf"],["class","table__td text-center",4,"ngFor","ngForOf"],["class","arrow row main-f-size d-flex flex-column justify-content-center",4,"ngIf"],[1,"table__td","text-center"],[1,"form_input-wrapper"],[1,"form_input","answers__input","form_input-edit-icon","text-center","input-f-size",3,"disabled","value","input"],["class","arrow main-f-size",3,"ngStyle",4,"ngIf"],[1,"arrow","main-f-size",3,"ngStyle"],[1,"text"],[1,"arrow","row","main-f-size","d-flex","flex-column","justify-content-center"]],template:function(e,t){1&e&&a.Cc(0,p,4,1,"div",0),2&e&&a.kc("ngIf",t.tableArray.length)},directives:[n.j,n.i,n.k],styles:['[_nghost-%COMP%]{width:100%;padding:1vw}.table-wrapper[_ngcontent-%COMP%]{margin-top:9vh;padding-left:6vw}.form_input[_ngcontent-%COMP%]{padding:0!important}.table[_ngcontent-%COMP%]{width:90%;position:relative;margin-right:auto}.table__td[_ngcontent-%COMP%]{border:.15vw solid #a64ac9;background:#f4f5cd;padding:1.5vh}.arrow[_ngcontent-%COMP%]{text-align:center;white-space:nowrap;top:-3.3em;z-index:1}.arrow[_ngcontent-%COMP%], .arrow[_ngcontent-%COMP%]:before{display:block;position:absolute}.arrow[_ngcontent-%COMP%]:before{content:"";background:url(/assets/Images/OtherImages/exercise-arrow.png) no-repeat;background-position:bottom;background-size:contain;width:5.5vw;margin:auto;left:0;right:0;top:0;bottom:-100%}.arrow.row[_ngcontent-%COMP%]{top:inherit;left:-6em}.arrow.row[_ngcontent-%COMP%]:before{transform:rotate(90deg) rotateX(180deg) translateX(1.5em);width:3.5em}.arrow.row[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:block;padding-right:5em;transform:translateY(2.5em)}.input-f-size[_ngcontent-%COMP%]{font-size:20px!important}@media screen and (min-width:1680px) and (max-width:1919px){.arrow.row[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding-top:.5vh}}@media screen and (min-width:1920px){.input-f-size[_ngcontent-%COMP%]{font-size:calc(1.15vw + .8vh)!important}}']}),e}(),m=function(){var e=function(){function e(t){_classCallCheck(this,e),this.componentFactoryResolver=t}return _createClass(e,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(b)}}]),e}();return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)(a.ac(a.j))},imports:[[n.b,o.n]]}),e}()}}]);