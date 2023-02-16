// create product controllers here
import { Request, Response } from "express";
import productList from "../data/productList";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    res.json(productList);
  } catch (error) {
    console.log(error);
  }
};
export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = req.body;
    productList.push(newItem);
    res.json(productList);
  } catch (error) {
    console.log(error);
  }
};
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params;
    const result = productList.filter((item) => item.id !== Number(itemId.id));
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
