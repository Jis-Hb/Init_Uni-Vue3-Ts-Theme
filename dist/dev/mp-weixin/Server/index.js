"use strict";const t=require("../common/vendor.js"),e=require("../utils/auth.js"),o={send:o=>{console.log("dwadawd","http://localhost:8000/Api/");let{url:a,data:r,method:s}=o;return new Promise(((o,n)=>{t.index$1.request({url:"http://localhost:8000/Api/"+a,data:r,method:s,header:{"content-type":"application/json",Authorization:"bearer "+e.getToken()},success:t=>{o(t.data)},fail:t=>{n(t)}})}))}};exports.Http=o;
//# sourceMappingURL=index.js.map