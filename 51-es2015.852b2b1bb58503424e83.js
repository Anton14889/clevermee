(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"8FW7":function(e,r,t){"use strict";t.r(r),t.d(r,"MarkTheLineComponent",(function(){return f})),t.d(r,"MarkTheLineModule",(function(){return d}));var n=t("ofXK"),c=t("3Pt+"),a=t("fXoL"),s=t("XCOF");function i(e,r){if(1&e&&(a.Wb(0,"span"),a.Dc(1),a.Vb()),2&e){const e=a.hc().$implicit;a.Cb(1),a.Fc("\xa0",e.symbolValue,"\xa0")}}function o(e,r){if(1&e){const e=a.Xb();a.Wb(0,"span",6),a.ec("click",(function(r){a.vc(e);const t=a.hc().$implicit,n=a.hc(2);return[n.active(r.target),n.getUserResult(t.textValue,t.order,r.target)]})),a.Dc(1),a.Vb()}if(2&e){const e=a.hc().$implicit;a.Gb("correct-exercise-answer",e.IsCorrect)("incorrect-exercise-answer",null!==e.IsCorrect&&!e.IsCorrect),a.Cb(1),a.Ec(e.textValue)}}function l(e,r){if(1&e&&(a.Wb(0,"div"),a.Cc(1,i,2,1,"span",4),a.Cc(2,o,2,5,"span",5),a.Vb()),2&e){const e=r.$implicit;a.Cb(1),a.kc("ngIf",e.symbolValue),a.Cb(1),a.kc("ngIf",e.textValue)}}function u(e,r){if(1&e&&(a.Wb(0,"div",1),a.Wb(1,"span",2),a.Dc(2),a.Vb(),a.Cc(3,l,3,2,"div",3),a.Vb()),2&e){const e=a.hc();a.Cb(2),a.Fc("",e.defaultValue,"\xa0"),a.Cb(1),a.kc("ngForOf",e.markLineArray)}}let f=(()=>{class e{constructor(e){this.exerciseDataService=e}ngOnChanges(){if(this.list.sort((e,r)=>e.Order-r.Order),this.isCorrectValues)return void this.list.forEach(e=>{this.markLineArray.forEach(r=>{e.Order===r.order&&(r.CorrectValue=e.CorrectValue,r.IsCorrect=e.IsCorrect)})});const e=[],r=[];this.list.forEach(t=>{const n={CorrectValue:null,IsCorrect:null,value:t.Value,order:t.Order};"DefaultValue"===t.Metric&&(this.defaultValue=t.Value),"Symbol"===t.Metric&&e.push(n),"Text"===t.Metric&&r.push(n)});const t=[];r.forEach((r,n)=>{const c={CorrectValue:null,IsCorrect:null,order:r.order,textValue:r.value,symbolValue:null};e[n]&&(c.symbolValue=e[n].value),t.push(c)}),this.markLineArray=t}active(e){this.isCorrectValues||e.classList.toggle("mark-line__text-value--active")}getUserResult(e,r,t){const n={Type:"MarkTheLine",Order:this.Order,Data:{Order:r,Value:e}};t.classList.contains("mark-line__text-value--active")||(n.Data.Value=null),this.exerciseDataService.subject.next(n)}}return e.\u0275fac=function(r){return new(r||e)(a.Qb(s.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-mark-the-line"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[a.Ab],decls:1,vars:1,consts:[["class","mark-line-wrapper d-flex align-items-center text-center big-f-size",4,"ngIf"],[1,"mark-line-wrapper","d-flex","align-items-center","text-center","big-f-size"],[1,"mark-line__default-value"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","mark-line__text-value",3,"correct-exercise-answer","incorrect-exercise-answer","click",4,"ngIf"],[1,"mark-line__text-value",3,"click"]],template:function(e,r){1&e&&a.Cc(0,u,4,2,"div",0),2&e&&a.kc("ngIf",r.markLineArray)},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{width:100%;margin:1vh auto}.mark-line-wrapper[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mark-line__default-value[_ngcontent-%COMP%]{width:15vw;padding:1vh 2vw;border-radius:10vh;margin-right:.5vw;background:#ff712c;color:#fff}.mark-line__text-value[_ngcontent-%COMP%]{padding:1vh 1vw;border-radius:10vh;cursor:pointer;transition:background .2s}.mark-line__text-value--active[_ngcontent-%COMP%]{background:#11afa9;color:#fff}"]}),e})(),d=(()=>{class e{constructor(e){this.componentFactoryResolver=e}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(f)}}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(r){return new(r||e)(a.ac(a.j))},imports:[[n.b,c.n]]}),e})()}}]);