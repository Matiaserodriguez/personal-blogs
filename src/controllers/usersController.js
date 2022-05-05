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

    try {
        const newUser = new User({
            userName: body.userName,
            email: body.email,
            password: body.password
        });
    
        let user = await newUser.save(newUser);
        user = user.toObject();
        
        delete user.password;
    
        res.status(200).json(user);
    } catch(e) {
        console.log(e)
        res.status(400).json({status: 400, msg: 'Something went wrong, please try again'});
    }

};

exports.putUser = async(req, res) => {

    const body = req.body

    if (body.userName || body.email || body.password) {
        try{
            let userToUpdate = await User.updateOne({ _id: req.params.id }, body);

            if (userToUpdate.modifiedCount === 0){
                res.status(400).json({status: 400, msg: 'Verify the ID is a valid one'});
                return
            }

            res.status(200).json(userToUpdate);
            return

        } catch(e) {
            console.log(e)
            res.status(400).json({status: 400, msg: 'Verify the ID is a valid one'});
            return
        }

    }

    res.status(400).json({status: 400, msg: 'Include userName, email and/or password'});
    return
};

exports.deleteUser = async(req, res) => {
    try{
        const userToDelete = await User.deleteOne({_id: req.params.id})
    
        if (userToDelete.deletedCount === 0) {
            res.status(400).json({status: 400, msg: 'Record not found or already out of table. Not deleted'});
            return
        }
        
        res.status(204).json({204: "Deleted"})

    } catch(e){
        console.log(e)
        res.status(400).json({status: 400, msg: 'Not found'});
    }
};