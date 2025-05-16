"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Bem Vindo ao Curso de Node Js - ver5 - usando npm start");
});
app.get("/users", (req, res) => {
    let usuarios = [{
            nome: "Darth Vader",
            idade: 40
        }, {
            nome: "Amarildinha",
            idade: 35
        }, {
            nome: "Arthur Sahur",
            idade: 6
        }];
    res.send(usuarios);
});
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000.");
});
//# sourceMappingURL=index.js.map