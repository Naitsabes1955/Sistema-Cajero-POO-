import express from "express";
import cors from "cors";
import { CuentaRepository } from "./data/cajeroData";
import { Cajero } from "./models/cajeroModel";
import { CajeroService } from "./bussiness/cajeroService";


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

//prueba

const repo = new CuentaRepository();
const cajero = new Cajero(50000);
const service = new CajeroService();

try {
  const cuenta = repo.obtenerCuenta();

  console.log("Saldo inicial:", service.consultarSaldo(cuenta));

  // depósito
  service.depositar(cuenta, 500);
  console.log("Después de depositar:", service.consultarSaldo(cuenta));

  // retiro válido
  service.retirar(cuenta, cajero, 150000);
  console.log("Después de retirar:", service.consultarSaldo(cuenta));

} catch (error: any) {
  console.error("Error:", error.message);
}