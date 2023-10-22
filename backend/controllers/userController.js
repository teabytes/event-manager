const User = require('../models/user');

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    const isPresent = await User.findOne(req.body);
    // console.log(isPresent);
    if (!isPresent) {
      // user does not exist
      // create new user and save to db
      try {
        await user.save();
        res.status(201).json(user);
      }
      catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
    else {
      // render new page
      console.log("new page");
    }
    
};

exports.getUser = async (req, res) => {
  try {
    //const usersCollection = new User(req.body);
    const users = await User.find();
    res.json(users);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
  }