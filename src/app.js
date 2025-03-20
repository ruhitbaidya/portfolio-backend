import express, { urlencoded } from "express";
import cors from "cors";
import { rootRouter } from "./router/routes.js";
const app = express();

app.use(cors())
app.use(express.json());
app.use(urlencoded({extended : true}))
app.use(rootRouter)



export default app