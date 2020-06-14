const { User } = require("../../model/user.js");

module.exports = async(req, res) => {
    const { account } = req.query;
    let user = await User.findOne({ account: account });
    // res.render('admin/change');
    res.render('admin/change', { user: user });
}