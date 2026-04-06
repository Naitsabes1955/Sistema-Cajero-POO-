import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/retirar", (req, res) => {
  const { monto } = req.body;
  res.json({ mensaje: `Retiraste ${monto}` });
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});