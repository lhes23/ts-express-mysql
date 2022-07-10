import { Request, Response } from "express";
import con from "../db";
import User from "../models/userModels";
const UserData = new User();
import { IFields } from "../models/userModels";

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

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, age }: IFields = req.body;
    con.query(UserData.create({ name, age }), (err, result) => {
      if (err) throw err;
      return res.status(201).json({ message: "Success", result });
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

export const deleteSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    con.query(UserData.deleteById(Number(id)), (err, result) => {
      if (err) throw err;
      return res.status(201).json({ message: "Successfully Deleted" });
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const updateSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age }: IFields = req.body;
  try {
    con.query(UserData.updateByID(Number(id), { name, age }), (err, result) => {
      if (err) throw err;
      return res.status(201).json({ message: "Succesfully Updated!", result });
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};
