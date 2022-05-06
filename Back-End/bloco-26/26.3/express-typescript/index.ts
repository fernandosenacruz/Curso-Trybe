import express, { Request, Response } from "express";
import BooksRoutes from "./routes/Books";

const app: express.Application = express();

app.use(express.json());

const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript")
});

app.use(BooksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
