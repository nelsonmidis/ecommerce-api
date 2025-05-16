import express, { Request, Response } from "express";
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
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

app.get("/users", (req: Request, res: Response) => {    
    res.send(usuarios);
});

// app post 

app.post("/users", (req: Request, res: Response) => {
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