"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
let id = 0;
let usuarios = [];
class UsersController {
    // função getAll
    static getAll(req, res) {
        res.send(usuarios);
    }
    // função getById
    static getById(req, res) {
        let userId = Number(req.params.id);
        let user = usuarios.find(user => user.id === userId);
        res.send(user);
    }
    // função save
    static save(req, res) {
        let user = req.body;
        user.id = ++id;
        usuarios.push(user);
        res.send({
            message: "Usuario criado com sucesso!"
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