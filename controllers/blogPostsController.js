const db = require('../models');
const Post = db.blogPost;

exports.getAllPosts = async (req, res) => {
    const allPosts = await Post.find({}, { _id: 0 });

    res.status(200).json(allPosts);
};

exports.postPost = async (req, res) => {

    const body = req.body

    if(!body.postName || !body.postInfo || !body.writtenBy || !body.comments || !body.donations) {
        res.status(400).json({status: 400, msg: 'Include postName, postInfo, writtenBy, comments and donations'});
        return
    };

    const newPost = new Post({
        postName: body.postName,
        postInfo: body.postInfo,
        writtenBy: body.writtenBy,
        comments: body.comments,
        donations: body.donations
      });

    let post = await newPost.save(newPost);

    res.status(200).json(post);

};
