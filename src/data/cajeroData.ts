//Simular datos y tener datos 

//intermedio entre logica y almacenamiento

import { CuentaBancaria } from "../models/cuentaModel";

export class CuentaRepository {
  private cuenta: CuentaBancaria;

  constructor() {
    this.cuenta = new CuentaBancaria("Juan", "123", 100000);
  }

  public obtenerCuenta(): CuentaBancaria {
    return this.cuenta;
  }

  public guardarCuenta(cuenta: CuentaBancaria): void {
    this.cuenta = cuenta;
  }
}