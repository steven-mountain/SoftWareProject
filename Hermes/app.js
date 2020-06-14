// 引用express框架
const express = require("express");
// 处理路径
const path = require("path");
// 引入 body-parser 模块 用来处理 post 请求参数
const bodyParser = require('body-parser');
// 导入express-session模块
const session = require("express-session");
// 创建网站服务器
const app = express();
// 数据库连接
require("./model/connect.js");
require("./model/user.js");
require("./model/manager.js");

// 处理 post 请求参数
app.use(bodyParser.urlencoded({ extended: false }));

// 配置session
app.use(session({ secret: 'chicken legs' })); // 里面随便加

// 告诉 express 框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
// 告诉 express框架模板的默认后缀是什么
app.set('view engine', 'art');
// 当渲染后缀为 art 的模板时 所使用的模板引擎时什么
app.engine('art', require('express-art-template'));

// 开放静态资源
app.use(express.static(path.join(__dirname, "public")));

// 引入路由模块
const home = require("./routes/home.js");
const admin = require("./routes/admin.js");
const { nextTick } = require("process");

// 拦截请求 判断用户登陆状态
app.use('/admin', require("./middleware/mloginGuard.js"));

// 为路由匹配请求路径
app.use("/home", home);
app.use("/admin", admin);

// 监听端口
app.listen(3000);
console.log("启动成功");