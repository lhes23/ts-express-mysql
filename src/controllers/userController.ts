import { Request, Response } from "express";
import con from "../db";
import User from "../models/userModels";
const UserData = new User();
import { IFields } from "../models/userModels";

const createQueryHandler = (query: string, res: Response) => {
  con.query(query, (err, result) => {
    if (err) throw err;
    return res.status(201).json({ status: 201, message: "Success", result });
  });
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    createQueryHandler(UserData.find(), res);
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, age }: IFields = req.body;
    createQueryHandler(UserData.create({ name, age }), res);
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    createQueryHandler(UserData.findById({ id: Number(id) }), res);
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    createQueryHandler(UserData.deleteById({ id }), res);
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, age }: IFields = req.body;
    createQueryHandler(UserData.updateByID({ id }, { name, age }), res);
  } catch (error) {
    return res.status(401).json({ error });
  }
};
