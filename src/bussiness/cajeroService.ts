/* Reglas del cajero:
validar saldo
permitir/rechazar retiro
aplicar lógica

LOGICA DE NEGOCIO
*/
import { CuentaBancaria } from "../models/cuentaModel";
import { Cajero } from "../models/cajeroModel";
import { validarNoNulo } from "../utils/cajero.utils";

export class CajeroService {

  consultarSaldo(cuenta: CuentaBancaria): number {
    return cuenta.obtenerSaldo();
  }

  depositar(cuenta: CuentaBancaria, monto: number): number {
  validarNoNulo(cuenta);
    if (monto <= 0) {
      throw new Error("Monto inválido");
    }

    cuenta.depositar(monto);

    return cuenta.obtenerSaldo();
 }

  retirar(
  cuenta: CuentaBancaria,
  cajero: Cajero,
  monto: number
): number {

  validarNoNulo(cuenta);
  validarNoNulo(cajero);

  if (monto <= 0) {
    throw new Error("Monto inválido");
  }

  if (!cajero.tieneFondos(monto)) {
    throw new Error("El cajero no tiene suficiente efectivo");
  }

  cuenta.retirar(monto);
  cajero.entregarDinero(monto);

  return cuenta.obtenerSaldo();
}
}