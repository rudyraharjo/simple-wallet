(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{58:function(t,e,r){"use strict";r.r(e);var n=r(2);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={name:"signup",data:function(){return{btnLoading:!1,form:{email:"",password:""}}},methods:{GoLogin:function(){this.$router.push({name:"signin"})},DoLogin:function(){var t=this;if(this.btnLoading=!0,""!=this.form.email&&this.form.password){var e=this.form;this.$store.dispatch("auth/AC_SIGNUP",e).then((function(e){console.log(e),t.$router.push({name:"dashboard"})})).catch((function(t){toast.fire({type:"error",title:t})})).finally((function(){t.btnLoading=!1}))}else toast.fire({type:"error",title:"Unauthorized Please Check Email & Password"}),this.btnLoading=!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.c)({title:function(t){return t.auth.title}}))},s=r(1),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticStyle:{"margin-top":"6%"},attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v(t._s(t.title))])],1),t._v(" "),r("form",{attrs:{method:"POST"}},[r("v-card-text",[r("v-text-field",{attrs:{"prepend-icon":"account_circle",label:"Name",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"email",label:"Email",type:"text"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"person",label:"Username",type:"text"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"primary","x-small":""},on:{click:function(e){return t.GoLogin()}}},[t._v("\n                Sudah Memiliki Akun\n                ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{loading:t.btnLoading,color:"primary"},on:{click:function(e){return t.DoLogin()}}},[t._v("\n                    Sign up\n                ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);