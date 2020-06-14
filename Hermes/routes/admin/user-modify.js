const { User } = require("../../model/user.js");
module.exports = async(req, res) => {
    const { account } = req.query;
    const body = req.body;
    let user = await User.findOne({ account: account });
    await User.updateOne({ account: account }, body);
    res.redirect('/admin/manage');
}