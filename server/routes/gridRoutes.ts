import express from "express";
import * as gridController from "../controllers/gridController.js";

export const gridRouter = express.Router();

gridRouter.get("/", gridController.getAll);
