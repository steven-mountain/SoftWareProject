// 引入mongoogse
const mongoose = require("mongoose");
const Joi = require("joi");

// 创建用户集合规则
const userSchema = new mongoose.Schema({
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
    username: {
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
const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
    const schema = {
        username: Joi.string().min(2).max(20).required().error(new Error('用户名格式不对')),
        email: Joi.string().email().required().error(new Error('邮箱格式错误')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,15}$/).required().error(new Error('密码格式错误')),
        account: Joi.string().regex(/^[a-zA-Z0-9]{5,10}$/).required().error(new Error('账号格式错误'))
    }

    return Joi.validate(user, schema);
};


module.exports = {
    User: User,
    validateUser: validateUser,
};