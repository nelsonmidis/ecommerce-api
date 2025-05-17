import express from "express";
import { initializeApp } from 'firebase-admin/app';
import { routes } from "./routes/index";

initializeApp();
// app nao é uma palavra nativa. Neste caso ea está sendo um "tipo" de express
const app = express();

// nao sei o que significa
routes(app);

// app listen 

app.listen(3000, () => {
console.log("Servidor ativo na porta 3000.");
});