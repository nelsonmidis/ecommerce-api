"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
// import { Request, Response } from "express";
const users_controller_1 = require("../controllers/users.controller");
exports.userRoutes = express_1.default.Router();
// userRoutes get 
// isto é um endpoint
// get all 
// a implementação está em users.controllers
exports.userRoutes.get("/users", users_controller_1.UsersController.getAll);
// getById
exports.userRoutes.get("/users/:id", users_controller_1.UsersController.getById);
// save
exports.userRoutes.post("/users", users_controller_1.UsersController.save);
// change
exports.userRoutes.put("/users/:id", users_controller_1.UsersController.update);
// userRoutes delete
exports.userRoutes.delete("/users/:id", users_controller_1.UsersController.delete);
//# sourceMappingURL=users.route.js.map