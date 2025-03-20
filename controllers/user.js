import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.json({
      success: true,
      data: {
        allUsers,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if(!user){
        throw new Error("User not found!");
    }

    res.json({
        success: true,
        data: user,
    })
  } catch (error) {
    console.log(error);
  }
};
