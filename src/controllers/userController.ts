import { Request, Response } from "express";
import con from "../db";
import User from "../models/userModels";
const UserData = new User();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    con.query(UserData.find(), (err, result) => {
      if (err) throw err;
      return res.status(201).json({ result });
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    con.query(UserData.findById(Number(id)), (err, result) => {
      if (err) throw err;
      return res.status(201).json({ result });
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  res.send(req.files);
};