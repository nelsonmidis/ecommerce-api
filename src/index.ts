import express, { Request, Response } from "express";
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Bem Vindo ao Curso de Node Js - ver5 - usando npm start");
});

// id 
let id = 0;
type User = {id: number; nome: string; email: string;};

// lista global 

let usuarios: User[] = [];

// app get 

app.get("/users", (req: Request, res: Response) => {    
    res.send(usuarios);
});
 
// app get para pegar só um registro
// dependendo da info que eu enviar 

app.get("/users/:id", (req: Request, res: Response) => {
let userId = Number(req.params.id);
let user = usuarios.find(user => user.id === userId);
res.send(user);
});

// app post 

app.post("/users", (req: Request, res: Response) => {
let user = req.body;
user.id = ++id;
usuarios.push(user);
res.send({
    message: "Usuario criado com sucesso!"
});
});

// app.put

app.put("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = req.body; 
    let indexOf = usuarios.findIndex(_user => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: "Usuario alterado com sucesso!"
    })

});

// app delete
app.delete("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user: User) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
        message: "Usuario removido com sucesso!"
    });
});

// app listen 

app.listen(3000, () => {
console.log("Servidor ativo na porta 3000.");
});