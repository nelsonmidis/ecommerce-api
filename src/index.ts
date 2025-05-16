import express, { Request, Response } from "express";
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Bem Vindo ao Curso de Node Js - ver5 - usando npm start");
});

// id 
let id = 0;

// lista global 

let usuarios: {id: number, nome: string, email: string}[] = [];

// app get 

app.get("/users", (req: Request, res: Response) => {    
    res.send(usuarios);
});
 
// app get para pegar só um registro
// dependendo da info que eu enviar 



// app post 

app.post("/users", (req: Request, res: Response) => {
let user = req.body;
user.id = ++id;
usuarios.push(user);
res.send({
    message: "Usuario criado com sucesso!"
});
});

// app listen 

app.listen(3000, () => {
console.log("Servidor ativo na porta 3000.");
});