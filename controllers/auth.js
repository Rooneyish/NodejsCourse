import User from "../models/user.js";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
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

export const loginUser = () => {
  console.log("testing");
};