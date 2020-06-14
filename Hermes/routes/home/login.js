// 引入用户模块
const { User, validateUser } = require("../../model/user.js");
module.exports = async(req, res) => {
    // 需要用到第三方模块 body-parser
    // console.log(req.body);
    if (req.body.email) {
        try {
            await validateUser(req.body);
        } catch (e) {
            res.status(400).render("home/error", { msg: e.message });
        }
        let user = await User.findOne({ account: req.body.account });
        if (user) {
            res.status(400).render("home/error", { msg: '当前账号已经被注册' });
        }
        await User.create(req.body);
        res.status(200).render("home/error", { msg: '注册成功' });
    } else {
        const { account, password } = req.body;
        if (account.trim().length == 0 || password.trim().length == 0) {
            return res.status(400).render('home/error', { msg: '账号或密码错误' });
        }
        // 根据账号查询用户信息
        let user = await User.findOne({ account: account });
        // console.log(account);
        // console.log(password);
        // console.log(user);
        if (user) {
            // 查询到了用户
            if (password == user.password) {
                // 将用户名存储在请求对象中
                req.session.username = user.username;
                req.session.account = user.account;
                req.app.locals.userInfo = user;
                res.redirect("/home/index");
            } else {
                res.status(400).render('home/error', { msg: '密码错误' });
            }
        } else {
            // 没有查询到用户
            res.status(400).render('home/error', { msg: '账号或密码错误' });
        }
    }
}