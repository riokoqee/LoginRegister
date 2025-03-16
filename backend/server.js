import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    console.log("Маршрут /test был вызван");
    res.json({ message: "Связь между React и Express установлена!" });
});

app.get("/profile", (req, res) => {
    res.json({ name: "Rioko", email: "rioko988@gmail.com" });
});

app.listen(5000, () => console.log("Сервер запущен на порту 5000"));
