module.exports = (mongoose) => {
    const Users = mongoose.model(
      'users',
      mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            email: String,
          },
          { 
            versionKey: false 
          }
      )
    );
  
    return Users;
  };
  