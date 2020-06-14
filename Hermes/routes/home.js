// 引用express框架
const express = require('express');

// 创建展示路由
const home = express.Router();

home.get('/change', require("./home/changePage.js"));

home.get('/index', require("./home/indexPage.js"));

home.get('/login', require("./home/loginPage.js"));

home.post('/login', require("./home/login.js"));

home.post('/user-modify', require("./home/user-modify"));

module.exports = home;