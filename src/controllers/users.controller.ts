import { Request } from "express";
import { Response } from "express";


// lista global 
// usuários - pode copiar sem medo

type User = {
    id: Number;
    nome: String;
    email: String;
};
let id = 0;

let usuarios: User[] = [];

export class UsersController {
    // função getAll
    static getAll(req: Request, res: Response) {
        res.send(usuarios);
    }
    // função getById
    static getById(req: Request, res: Response) {
let userId = Number(req.params.id);
let user = usuarios.find(user => user.id === userId);
res.send(user);
}
    // função save
    static save(req: Request, res: Response) {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuario criado com sucesso!"
    });
    }
    // função update
    static update(req: Request, res: Response) {
        let userId = Number(req.params.id);
        let user = req.body; 
        let indexOf = usuarios.findIndex(_user => _user.id === userId);
        usuarios[indexOf].nome = user.nome;
        usuarios[indexOf].email = user.email;
        res.send({
            message: "Usuario alterado com sucesso!"
        })
    
    }

    // função delete
    static delete(res: Response, req: Request) {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user: User) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
        message: "Usuario removido com sucesso!"
    });
}


}