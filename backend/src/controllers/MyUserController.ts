import { RequestHandler } from "express";
import User from "../models/user";

const createCurrentUser: RequestHandler = async (req, res) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(200).send(); 
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject()); 
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the user." });
  }
};

export default {
  createCurrentUser,
};
