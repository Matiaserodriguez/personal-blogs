module.exports = (mongoose) => {
    const Post = mongoose.model(
      'blog_posts',
      mongoose.Schema(
        {
            postName: String,
            postInfo: String,
            writtenBy: String,
            comments: Object,
            donations: String
          },
        { 
            timestamps: true,
            versionKey: false  
          }
      )
    );
  
    return Post;
  };
  