"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9262],{9262:(y,d,i)=>{i.r(d),i.d(d,{LoginPageModule:()=>P});var p=i(177),u=i(4341),a=i(4742),c=i(70),f=i(467),e=i(3953);let m=(()=>{var n;class r{constructor(){this.temporaryUserName="user",this.temporaryPass="pass"}performLogin(o,t){return o==this.temporaryUserName&&t==this.temporaryPass}performLogout(){}}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),r})();var h=i(5339);const M=[{path:"",component:(()=>{var n;class r{constructor(o,t,l){this.router=o,this.sessionManager=t,this.localStorageManager=l,this.user="",this.password=""}ngOnInit(){}onLoginButtonPressed(){var o=this;return(0,f.A)(function*(){o.sessionManager.performLogin(o.user,o.password)?(yield o.localStorageManager.set("isSessionActive",!0),o.router.navigate(["/home"])):(o.user="",o.password="",alert("Las credenciales ingresadas son inv\xe1lidas."))})()}onRegisterButtonPressed(){this.router.navigate(["/register"])}}return(n=r).\u0275fac=function(o){return new(o||n)(e.rXU(c.Ix),e.rXU(m),e.rXU(h.q))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-login"]],decls:20,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"content-container"],[1,"input-container"],["placeholder","Usuario","type","text",3,"ngModelChange","ngModel"],["placeholder","Contrase\xf1a","type","password",3,"ngModelChange","ngModel"],[1,"button-container"],["expand","block",3,"click"]],template:function(o,t){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"login"),e.k0s()()(),e.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e.EFF(8,"LOGIN"),e.k0s()()(),e.j41(9,"div",4)(10,"div",5)(11,"ion-item")(12,"ion-input",6),e.mxI("ngModelChange",function(g){return e.DH7(t.user,g)||(t.user=g),g}),e.k0s()(),e.j41(13,"ion-item")(14,"ion-input",7),e.mxI("ngModelChange",function(g){return e.DH7(t.password,g)||(t.password=g),g}),e.k0s()()(),e.j41(15,"div",8)(16,"ion-button",9),e.bIt("click",function(){return t.onLoginButtonPressed()}),e.EFF(17,"Login"),e.k0s(),e.j41(18,"ion-button",9),e.bIt("click",function(){return t.onRegisterButtonPressed()}),e.EFF(19,"Register"),e.k0s()()()()),2&o&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(8),e.R50("ngModel",t.user),e.R7$(2),e.R50("ngModel",t.password))},dependencies:[u.BC,u.vS,a.Jm,a.W9,a.eU,a.$w,a.uz,a.BC,a.ai,a.Gw],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;width:100%;padding:32px;gap:16px;height:100%}']}),r})()}];let L=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[c.iI.forChild(M),c.iI]}),r})(),P=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[p.MD,u.YN,a.bv,L]}),r})()}}]);