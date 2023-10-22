const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
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