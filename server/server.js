import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.json("its working!"));

app.listen(8080, () => console.log("App is running on PORT 8080"));
