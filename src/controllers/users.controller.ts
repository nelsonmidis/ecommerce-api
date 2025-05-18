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
    // COLOCANDO UM ERRO DE PROPOSITO - usando try catch
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
    // TB COLOCANDO TRY CATCH
    static async getById(req: Request, res: Response) {
try {
    let userId = req.params.id;
const doc = await getFirestore().collection("users").doc(userId).get();
let user = {
    id: doc.id,
    ...doc.data()
}
    // throw new Error("Erro ao ENVIAR RESPOSTA");
res.send(user);
} catch (error) {

            res.status(500).send({
                message: "Erro interno do Servidor no getById!!"
            });    
}
}
    // função save
    static async save(req: Request, res: Response) {
        try {
            
    let user = req.body;
        // throw new Error("Erro ao GRAVAR REGISTRO");
    const userSalvo =await getFirestore().collection("users").add(user);

    res.status(201).send({
        message: `Usuario ${userSalvo.id} criado com sucesso!`
    });
    
        } catch (error) {
                res.status(500).send({
                message: "Erro interno do Servidor no SAVE!!"
            });            
        }
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
    // ESTOU COLOCANDO TRY CATCH
    static async delete(req: Request, res: Response) {
        try {
    let userId = req.params.id;
        // throw new Error("Erro ao DELETAR REGISTRO");
    await getFirestore().collection("users").doc(userId).delete();
    res.status(204).end();

        } catch (error) {
            
                res.status(500).send({
                message: "Erro interno do Servidor no DELETE!!"
            });            
        
            
        }
    }


}