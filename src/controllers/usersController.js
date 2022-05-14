const db = require('../models');
const User = db.users;
const { getOauthUrl } = require('../helpers/googleURI');

exports.getOauthUser = (req, res) => {
    res.redirect(getOauthUrl())
}

exports.getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.find({}, { _id: 0, password: 0 });
        res.status(200).json(allUsers);
    } catch(e) {
        console.log(e);
        res.status(400).json({status: 400, msg: 'Something went wrong, please try again'});
    }
}

exports.postUser = async (req, res) => {
    const body = req.body

    try {
        const newUser = new User(body);
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
