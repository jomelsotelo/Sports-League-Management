import User from "../config/models/User.js";

export const createUser = async (req, res) => {
  try {
    const { 
      username,
      firstname,
      lastname,
      email,
      password,
      role,
      dateOfBirth,
       } = req.body;

    //Check for existing username
    const existingUser = await User.findOne({ username })
    if (existingUser){
      return res.status(409).json({ message: 'Username already exists.'})
    }

    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getSpecificUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if(!user){ 
      return res.status(404).json({message: `cannot find any user with ID ${id}`})
    }
    const updatedUser = await User.findById(id)
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id, req.body);
    if(!user){ 
      return res.status(404).json({message: `cannot find any user with ID ${id}`})
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}