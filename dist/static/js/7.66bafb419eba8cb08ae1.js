webpackJsonp([7],{xJsL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={methods:{login:function(){var e=this.$refs.username.value,t=this.$refs.password.value;e?t?this.$store.commit("login/doLogin",{username:e,password:t}):alert("请输入密码"):alert("请输入用户名")}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("input",{ref:"username",attrs:{type:"text",placeholder:"请输入你的用户名"}}),this._v(" "),t("input",{ref:"password",attrs:{type:"password",placeholder:"请输入你的密码"}}),this._v(" "),t("button",{on:{click:this.login}},[this._v("登陆")])])},staticRenderFns:[]},i=s("VU/8")(r,n,!1,null,null,null);t.default=i.exports}});
//# sourceMappingURL=7.66bafb419eba8cb08ae1.js.map