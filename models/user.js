import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email name is required."],
      minLength: 2,
      maxLength: 50,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password required !"],
      minLength: 8,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;