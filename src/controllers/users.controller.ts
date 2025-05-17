import { Request } from "express";
import { Response } from "express";
import {getFirestore} from "firebase-admin/firestore";


// lista global 
// usuários - pode copiar sem medo

type User = {
    id: Number;
    nome: String;
    email: String;
};
// let id = 0;

let usuarios: User[] = [];

export class UsersController {
    // função getAll
    static async getAll(req: Request, res: Response) {
        const snapshot = await getFirestore().collection("users").get();
        const users = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        };
        });
        res.send(users);
    }
    // função getById
    static async getById(req: Request, res: Response) {
let userId = req.params.id;
const doc = await getFirestore().collection("users").doc(userId).get();
let user = {
    id: doc.id,
    ...doc.data()
}

res.send(user);
}
    // função save
    static async save(req: Request, res: Response) {
    let user = req.body;
    const userSalvo =await getFirestore().collection("users").add(user);

    res.send({
        message: `Usuario ${userSalvo.id} criado com sucesso!`
    });
    }
    // função update
    // CONTINUANDO MODIFICAÇÕES - FUNÇÃO UPDATE 
    // depois dessas modificações de funções para firestore,
    // teremos de apagar as linhas anteriores para variável
    static update(req: Request, res: Response) {
        let userId = req.params.id;
        let user = req.body as User; 
        // este método set é novo para mim ↘️
        getFirestore().collection("users").doc(userId).set({
            nome: user.nome,
            email: user.email
        })
        
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