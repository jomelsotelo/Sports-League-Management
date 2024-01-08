import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },
  firstname: {
    type: String,
    required: [true, "Please enter a username"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter a username"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: { 
    type: String, 
    required: true 
  },
  role: {
    type: String,
    enum: ['admin', 'player', 'coach'],
    default: 'player'
  },
  dateOfBirth: {
    type: Date
  }
},{
    timestamps : true
});

userSchema.pre("save", function(next){
  const user = this;
  if(!user.isModified("password")) return next();

  //Hashes the password before saving the user
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
  next();
})

const User = mongoose.model("User", userSchema);

export default User;
