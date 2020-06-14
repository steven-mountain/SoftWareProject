const guard = (req, res, next) => {
    // 判断用户访问的是否是登陆页面
    // 判断用户的登陆状态
    // 如果用户时登陆的 将请求放行
    // 如果用户不是登陆的 将请求重定向到登陆页面
    if (req.url != '/mlogin' && !req.session.managername) {
        res.redirect("/admin/mlogin");
    } else {
        // 如果是登陆状态，将请求放行
        next();
    }
}

module.exports = guard;