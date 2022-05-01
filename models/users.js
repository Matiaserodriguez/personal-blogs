module.exports = (mongoose) => {
    const Users = mongoose.model(
      'users',
      mongoose.Schema(
        {
            userName: String,
            email: String,
            password: String,
          },
          { 
            versionKey: false 
          }
      )
    );
  
    return Users;
  };
  