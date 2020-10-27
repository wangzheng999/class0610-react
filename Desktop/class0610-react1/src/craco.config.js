const path = require("path");
const pxtoviewport= require('postcss-px-to-viewport')
module.exports = {
    webpack: {
        // 配置路径别名 将来写路径可以简写
        alias: {
            "@redux": path.resolve(_dirname, "./src/redux"),
            "@utils": path.resolve(_dirname, "./src/utils"),
            "@api": path.resolve(_dirname, "./src/api")
        }
    },
    style:{
        postcss:{
            plugins:[
                pxtoviewport({
                    viewportWidth:375,
                })
            ]
        }
    }
} 