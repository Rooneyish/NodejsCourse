import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const isUserExist = await User.findOne({ email: email });

    console.log(isUserExist);

    if (isUserExist) {
      throw new Error("User already exist.");
    }

    // Hashing
    const salt = bcrypt.genSaltSync(10);
    const hastedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hastedPassword,
    });

    res.json({
      success: true,
      message: "User registered successfully !",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req,res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email: email });

    console.log(isUserExist);

    if (!isUserExist) {
      throw new Error("Email or Password not valid!");
    }

    const isPasswordValid = await bcrypt.compare(password, isUserExist.password);

    if(!isPasswordValid){
      throw new Error("Email or Password not valid!");
    }

    res.json({
      success: true,
      message: "User Logged-In successfully !",
      data: {
        user: isUserExist,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
