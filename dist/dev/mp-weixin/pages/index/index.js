"use strict";const e=require("../../common/vendor.js"),s=require("../../Pinia/modules/user.js"),r=require("../../Api/User.js");require("../../Server/index.js"),require("../../utils/auth.js");const n=e.defineComponent({__name:"index",setup(n){const i=s.useUser();console.log(i.token);const o=e.ref("Hello");return r.AppUpgrade({user_name:"admin",password:"admin"}).then((e=>{console.log(e)})),(s,r)=>({a:e.t(o.value)})}}),i=e._export_sfc(n,[["__scopeId","data-v-83a5a03c"],["__file","D:/桌面/Uni+Vue3+Vue2初始化项目/Uni+Vite+Ts+主题切换/src/pages/index/index.vue"]]);wx.createPage(i);
//# sourceMappingURL=index.js.map
