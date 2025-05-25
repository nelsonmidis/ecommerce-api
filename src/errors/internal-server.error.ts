import { ErrorBase } from "./base.error";

export class InternalServerError extends ErrorBase {
    constructor(message = "Erro Interno do Servidor - método novíssimo") {
        super(500, message);

    }
}