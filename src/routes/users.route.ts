import express from "express";
// import { Request, Response } from "express";
import { UsersController } from "../controllers/users.controller";
export const userRoutes = express.Router();

// userRoutes get 
// isto é um endpoint
// get all 
// a implementação está em users.controllers
userRoutes.get("/users", UsersController.getAll);
// getById
userRoutes.get("/users/:id", UsersController.getById);
// save
userRoutes.post("/users", UsersController.save);
// change
userRoutes.put("/users/:id", UsersController.update);
// userRoutes delete
userRoutes.delete("/users/:id", UsersController.delete);
