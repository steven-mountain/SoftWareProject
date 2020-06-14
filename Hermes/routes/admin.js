// 引用express框架
const express = require("express");
// 创建展示路由
const admin = express.Router();

admin.get('/mlogin', require("./admin/mloginPage.js"))

admin.get('/manage', require("./admin/managePage.js"))

admin.get('/change', require("./admin/changePage.js"))

admin.get('/delete', require("./admin/delete.js"));

admin.post('/mlogin', require("./admin/mlogin.js"));

admin.post('/user-modify', require('./admin/user-modify.js'));
module.exports = admin;