const db = require('../models');
const Post = db.blogPost;

exports.getAllPosts = async (req, res) => {
    try{
        const allPosts = await Post.find({}, { _id: 0 });
        res.status(200).json(allPosts);
    } catch(e) {
        console.log(e);
        res.status(400).json({status: 400, msg: 'Something went wrong, please try again'});
    }
};

exports.postPost = async (req, res) => {

    const body = req.body

    try {    
        const newPost = new Post(body);
        let post = await newPost.save(newPost);   

        res.status(200).json(post);
    } catch(e){
        console.log(e)
        res.status(400).json({status: 400, msg: 'Something went wrong, please try again'});
    }

};

exports.putPost = async(req, res) => {

    const body = req.body

    try{
        let postToUpdate = await Post.updateOne({ _id: req.params.id }, body);

        if (postToUpdate.modifiedCount === 0){
            res.status(400).json({status: 400, msg: 'Verify the ID is a valid one'});
            return
        }
        res.status(200).json(postToUpdate);
        return
    } catch(e) {
        console.log(e)
        res.status(400).json({status: 400, msg: 'Verify the ID is a valid one'});
        return
    }

}

exports.deletePost = async(req, res) => {
    try{
        const postToDelete = await Post.deleteOne({_id: req.params.id})
    
        if (postToDelete.deletedCount === 0) {
            res.status(400).json({status: 400, msg: 'Record not found or already out of table. Not deleted'});
            return
        }
        
        res.status(204).json({204: "Deleted"})

    } catch(e){
        console.log(e)
        res.status(400).json({status: 400, msg: 'Not found'});
    }
};
