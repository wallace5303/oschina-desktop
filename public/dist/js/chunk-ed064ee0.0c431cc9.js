(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed064ee0"],{"1f24":function(t,e,n){},"4dfa":function(t,e,n){"use strict";n("1f24")},a358:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var o=n("cff8"),a=n.n(o),s=n("b775");const i={common:{changeWindowSize:"controller.common.changeWindowSize"},oschina:{authInfo:"controller.oschina.authInfo",getAuthToken:"controller.oschina.getAuthToken",getNews:"controller.oschina.getNews",getNewsDetail:"controller.oschina.getNewsDetail"},gitee:{test:"controller.example.test"},user:{test:"controller.example.test"},setting:{test:"controller.example.test"}},r=(t,e)=>{const n=a.a.get("httpServiceConfig"),o=n.server||"http://127.0.0.1:7071";let i=t.split(".").join("/");return i=o+"/"+i,console.log("url:",i),Object(s["b"])({url:i,method:"post",data:e,params:{},timeout:6e4})}},fb29:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app-base-test-api"}},[t._m(0),e("div",{staticClass:"one-block-2"},[e("a-timeline",[e("a-timeline-item",[e("a",{attrs:{href:t.loginUrl,target:"_blank"}},[t._v(" 登录 ")])]),e("a-timeline-item",[e("a",{attrs:{href:t.tokenUrl,target:"_blank"}},[t._v(" getToken ")])])],1)],1)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"one-block-1"},[e("span",[t._v(" 1. 测试一些操作系统api ")])])}],s=n("a358"),i={data(){return{type:1,loginUrl:'https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=KUM768r2I1qA00RUUAyp&state={"app_id":"oschina_desktop"}&redirect_uri=https%3A%2F%2Fwww.kaka996.com%2Fapi%2Foschina%2Fverify'}},methods:{exec(t){const e={id:t};this.$ipcInvoke(s["a"].test,e).then(t=>{console.log("res:",t)})},exec2(t){const e={id:t};Object(s["b"])(s["a"].test,e).then(t=>{console.log("res2:",t)})}}},r=i,c=(n("4dfa"),n("2877")),l=Object(c["a"])(r,o,a,!1,null,"5fa47d62",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-ed064ee0.0c431cc9.js.map