import { Request, Response } from "express";
import * as gridService from "../services/grid";

export const getAll = async (req: Request, res: Response) => {
  const result = await gridService.getAllPersons();

  return res.send(result);
}