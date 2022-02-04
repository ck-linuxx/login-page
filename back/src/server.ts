import express from "express"
import 'express-async-errors';
import { logInRouter } from "./routes/login.routes";
import { singInRouter } from "./routes/singin.routes";

const app = express()

app.use(express.json())

app.use("/login", logInRouter)
app.use("/singin", singInRouter)

app.listen(3333, () => console.log("<-- Server is running -->"))