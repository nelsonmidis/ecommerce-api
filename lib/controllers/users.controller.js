"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const firestore_1 = require("firebase-admin/firestore");
// let id = 0;
let usuarios = [];
class UsersController {
    // função getAll
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield (0, firestore_1.getFirestore)().collection("users").get();
            const users = snapshot.docs.map(doc => {
                return Object.assign({ id: doc.id }, doc.data());
            });
            res.send(users);
        });
    }
    // função getById
    // CONTINUANDO MODIFICAÇÕES - get by id 
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            const doc = yield (0, firestore_1.getFirestore)().collection("users").doc(userId).get();
            let user = Object.assign({ id: doc.id }, doc.data());
            res.send(user);
        });
    }
    // função save
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            // user.id = ++id;
            // usuarios.push(user);
            const userSalvo = yield (0, firestore_1.getFirestore)().collection("users").add(user);
            res.send({
                message: `Usuario ${userSalvo.id} criado com sucesso!`
            });
        });
    }
    // função update
    static update(req, res) {
        let userId = Number(req.params.id);
        let user = req.body;
        let indexOf = usuarios.findIndex(_user => _user.id === userId);
        usuarios[indexOf].nome = user.nome;
        usuarios[indexOf].email = user.email;
        res.send({
            message: "Usuario alterado com sucesso!"
        });
    }
    // função delete
    static delete(res, req) {
        let userId = Number(req.params.id);
        let indexOf = usuarios.findIndex((user) => user.id === userId);
        usuarios.splice(indexOf, 1);
        res.send({
            message: "Usuario removido com sucesso!"
        });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map