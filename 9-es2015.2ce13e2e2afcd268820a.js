(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"iSw/":function(e,t,i){"use strict";i.r(t),i.d(t,"MediaModule",function(){return m});var r=i("PCNd"),c=i("tyNb"),n=i("tB2r"),a=i.n(n),o=i("fXoL"),s=i("tgey"),l=i("zkoq"),b=i("ofXK"),p=i("FKr1");function u(e,t){if(1&e){const e=o.ac();o.Zb(0,"mat-grid-tile"),o.Zb(1,"mat-grid-tile-header"),o.Zb(2,"span",4),o.Tc(3),o.Yb(),o.Yb(),o.Zb(4,"img",5),o.hc("click",function(){o.Ic(e);const i=t.index;return o.lc().preview(i)}),o.Yb(),o.Yb()}if(2&e){const e=t.$implicit,i=t.index;o.Gb(3),o.Vc("Gallery Image: ",i,""),o.Gb(1),o.vc("src",e.src,o.Kc)}}const d=[{path:"gallery",component:(()=>{class e{constructor(){this.dir="assets/images/pixabay/",this.images=[];for(let e=1;e<=20;e++)this.images.push({title:e,src:this.dir+e+".jpg"})}preview(e){new a.a(this.images,{index:e})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Nb({type:e,selectors:[["app-media-gallery"]],decls:8,vars:1,consts:[["title","Media",1,"bg-pink-A100"],["href","https://github.com/nzbin/photoviewer","target","_blank"],["cols","4","rowHeight","1:1"],[4,"ngFor","ngForOf"],["matLine",""],["alt","Gallery Image",1,"w-full","h-full","object-cover","cursor-pointer",3,"src","click"]],template:function(e,t){1&e&&(o.Ub(0,"page-header",0),o.Zb(1,"p"),o.Tc(2,"The media picture is powered by "),o.Zb(3,"a",1),o.Tc(4,"PhotoViewer"),o.Yb(),o.Tc(5,", you can click the picture to enlarge it."),o.Yb(),o.Zb(6,"mat-grid-list",2),o.Rc(7,u,5,2,"mat-grid-tile",3),o.Yb()),2&e&&(o.Gb(7),o.uc("ngForOf",t.images))},directives:[s.a,l.a,b.o,l.c,l.f,l.e,p.k],encapsulation:2}),e})()}];let g=(()=>{class e{}return e.\u0275mod=o.Rb({type:e}),e.\u0275inj=o.Qb({factory:function(t){return new(t||e)},imports:[[c.i.forChild(d)],c.i]}),e})(),m=(()=>{class e{}return e.\u0275mod=o.Rb({type:e}),e.\u0275inj=o.Qb({factory:function(t){return new(t||e)},imports:[[r.a,g]]}),e})()}}]);