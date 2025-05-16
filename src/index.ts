import express, { Request, Response } from "express";
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Bem Vindo ao Curso de Node Js - ver5 - usando npm start");
});

app.get("/users", (req: Request, res: Response) => {
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