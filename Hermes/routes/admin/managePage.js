const { User } = require("../../model/user.js");
module.exports = async(req, res) => {
    let users = await User.find({});
    res.render('admin/manage', { users: users });
}