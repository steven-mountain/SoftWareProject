const { Manager } = require("../../model/manager.js");

module.exports = async(req, res) => {
    // 需要用到第三方模块 body-parser
    // console.log(req.body);

    const { account, password } = req.body;
    if (account.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: '账号或密码错误' });
    }
    // 根据账号查询用户信息
    let manager = await Manager.findOne({ account: account });
    // console.log(account);
    // console.log(password);
    // console.log(user);
    if (manager) {
        // 查询到了用户
        if (password == manager.password) {
            // 将用户名存储在请求对象中
            req.session.managername = manager.managername;
            req.app.locals.managerInfo = manager;
            res.redirect("/admin/manage");
        } else {
            res.status(400).render('admin/error', { msg: '密码错误' });
        }
    } else {
        // 没有查询到用户
        res.status(400).render('admin/error', { msg: '账号或密码错误' });
    }
}