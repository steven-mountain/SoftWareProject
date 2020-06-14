const { User } = require("../../model/user.js");
module.exports = async(req, res) => {
    const { account } = req.query;
    await User.findOneAndDelete({ account: account });
    res.redirect('/admin/manage');
}