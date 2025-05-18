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

export class UsersController {
    // função getAll
    // COLOCANDO UM ERRO DE PROPOSITO 
    static async getAll(req: Request, res: Response) {
        try {
            const snapshot = await getFirestore().collection("users").get();
            const users = snapshot.docs.map(doc => {
                // throw new Error("Erro ao converter documento");
            return {
                id: doc.id,
                ...doc.data()
            };
            });
            res.send(users);
        } catch (error) {
            res.status(500).send({
                message: "Erro interno do Servidor!!"
            });
        }
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

    res.status(201).send({
        message: `Usuario ${userSalvo.id} criado com sucesso!`
    });
    }
    // função update
    static update(req: Request, res: Response) {
        let userId = req.params.id;
        let user = req.body as User; 
        getFirestore().collection("users").doc(userId).set({
            nome: user.nome,
            email: user.email
        })
        
        res.send({
            message: "Usuario alterado com sucesso!"
        })
    
    }

    // função delete
    static async delete(req: Request, res: Response) {
    let userId = req.params.id;
    await getFirestore().collection("users").doc(userId).delete();
    res.status(204).end();
}


}