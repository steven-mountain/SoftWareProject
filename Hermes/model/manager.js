// 引入mongoogse
const mongoose = require("mongoose");

// 创建用户集合规则
const managerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    account: {
        type: String,
        unique: true,
        required: true
    },
    managername: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    password: {
        type: String,
        required: true
    }
});

// 创建集合
const Manager = mongoose.model('Manager', managerSchema);

// 测试代码
// Manager.create({
//     email: '1989440760@qq.com',
//     account: '1234567',
//     managername: 'xiangjie',
//     password: '1234567'
// }).then(() => console.log("管理员创建成功")).catch(() => console.log("管理员创建失败"));


module.exports = {
    Manager: Manager,
};