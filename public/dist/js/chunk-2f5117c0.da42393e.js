(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f5117c0"],{"06f7":function(t,e,n){},"08f4":function(t,e,n){"use strict";n("06f7")},"77fd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app-base-test-api"}},[t._m(0),e("div",{staticClass:"one-block-2"},[e("a-timeline",[e("a-timeline-item",[e("a",{attrs:{href:t.loginUrl,target:"_blank"}},[t._v(" 登录 ")])]),e("a-timeline-item",[e("a",{attrs:{href:t.tokenUrl,target:"_blank"}},[t._v(" getToken ")])])],1)],1)])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"one-block-1"},[e("span",[t._v(" 1. 测试一些操作系统api ")])])}],i=n("a358"),a={data(){return{type:1,loginUrl:'https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=KUM768r2I1qA00RUUAyp&state={"app_id":"oschina_desktop"}&redirect_uri=https%3A%2F%2Fwww.kaka996.com%2Fapi%2Foschina%2Fverify'}},methods:{exec(t){const e={id:t};this.$ipcInvoke(i["a"].test,e).then(t=>{console.log("res:",t)})},exec2(t){const e={id:t};Object(i["b"])(i["a"].test,e).then(t=>{console.log("res2:",t)})}}},r=a,c=(n("08f4"),n("2877")),l=Object(c["a"])(r,o,s,!1,null,"4219c654",null);e["default"]=l.exports},a358:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var o=n("cff8"),s=n.n(o),i=n("b775");const a={common:{changeWindowSize:"controller.common.changeWindowSize"},oschina:{authInfo:"controller.oschina.authInfo",getAuthToken:"controller.oschina.getAuthToken",getNews:"controller.oschina.getNews",getNewsDetail:"controller.oschina.getNewsDetail"},gitee:{test:"controller.example.test"},user:{test:"controller.example.test"},setting:{test:"controller.example.test"}},r=(t,e)=>{const n=s.a.get("httpServiceConfig"),o=n.server||"http://127.0.0.1:7071";let a=t.split(".").join("/");return a=o+"/"+a,console.log("url:",a),Object(i["b"])({url:a,method:"post",data:e,params:{},timeout:6e4})}}}]);
//# sourceMappingURL=chunk-2f5117c0.da42393e.js.map