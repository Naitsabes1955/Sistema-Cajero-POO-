export class CuentaBancaria {
  private saldo: number;

  constructor(
    private titular: string,
    private numeroCuenta: string,
    saldoInicial: number
  ) {
    this.saldo = saldoInicial;
  }

  public obtenerSaldo(): number {
    return this.saldo;
  }

  public depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error("Monto inválido");
    }

    this.saldo += monto;
  }

  public retirar(monto: number): void {
    if (monto > this.saldo) {
      throw new Error("Saldo insuficiente");
    }

    this.saldo -= monto;
  }
}