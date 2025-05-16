"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Bem Vindo ao Curso de Node Js - ver5 - usando npm start");
});
// lista global 
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
// app get 
app.get("/users", (req, res) => {
    res.send(usuarios);
});
// app post 
app.post("/users", (req, res) => {
    let user = req.body;
    usuarios.push(user);
    res.send({
        message: "Usuario criado com sucesso!"
    });
});
// app listen 
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000.");
});
//# sourceMappingURL=index.js.map