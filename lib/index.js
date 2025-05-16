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
// id 
let id = 0;
// lista global 
let usuarios = [];
// app get 
app.get("/users", (req, res) => {
    res.send(usuarios);
});
// app get para pegar só um registro
// dependendo da info que eu enviar 
app.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = usuarios.find(user => user.id === userId);
    res.send(user);
});
// app post 
app.post("/users", (req, res) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuario criado com sucesso!"
    });
});
// app.put
app.put("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex(_user => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: "Usuario alterado com sucesso!"
    });
});
// app delete
app.delete("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
        message: "Usuario removido com sucesso!"
    });
});
// app listen 
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000.");
});
//# sourceMappingURL=index.js.map