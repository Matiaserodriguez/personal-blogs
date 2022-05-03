const db = require('../models');
const User = db.users;

exports.getAllUsers = async (req, res) => {
    const allUsers = await User.find({}, { _id: 0, password: 0 });

    res.status(200).json(allUsers);
}

exports.postUser = async (req, res) => {

    const body = req.body

    if(!body.userName || !body.email || !body.password) {
        res.status(400).json({status: 400, msg: 'Include userName, email and password'});
        return
    };

    const newUser = new User({
        userName: body.userName,
        email: body.email,
        password: body.password
    });

    let user = await newUser.save(newUser);
    user = user.toObject();
    
    delete user.password;

    res.status(200).json(user);
};

exports.putUser = async(req, res) => {

    const body = req.body

    if (body.userName || body.email || body.password) {
        try{
            let userToUpdate = await User.updateOne({ _id: req.params.id }, body);
            res.status(200).json(userToUpdate);
        } catch(e) {
            console.log(e)
            res.status(400).json({status: 400, msg: 'Verify the ID is a valid one'});
        }

    } else {
        res.status(400).json({status: 400, msg: 'Include userName, email and/or password'});
        return
    }

}