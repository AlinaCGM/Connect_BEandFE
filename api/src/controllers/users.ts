// create product controllers here
import { Request, Response } from "express";
import userList from "../data/userList";

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    userList.push(newUser);
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};
export const logInUser = async (req: Request, res: Response) => {
  try {
    res.json("user log in");
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const foundUser = userList.filter((user) => user.id === Number(userId));
    res.json(foundUser);
  } catch (error) {
    console.log(error);
  }
};
