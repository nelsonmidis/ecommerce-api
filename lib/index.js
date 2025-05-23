"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("firebase-admin/app");
const index_1 = require("./routes/index");
const error_handler_middleware_1 = require("./middlewares/error-handler.middleware");
(0, app_1.initializeApp)();
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = (0, express_1.default)();
// nao sei o que significa
(0, index_1.routes)(app);
// este cara vai capturar os erros ↘️
(0, error_handler_middleware_1.errorHandler)(app);
// app listen 
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000.");
});
//# sourceMappingURL=index.js.map