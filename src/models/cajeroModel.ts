export class Cajero {
  private efectivoDisponible: number;

  constructor(efectivoInicial: number) {
    this.efectivoDisponible = efectivoInicial;
  }

  public tieneFondos(monto: number): boolean {
    return this.efectivoDisponible >= monto;
  }

  public entregarDinero(monto: number): void {
    if (!this.tieneFondos(monto)) {
      throw new Error("El cajero no tiene suficiente efectivo");
    }

    this.efectivoDisponible -= monto;
  }

  public obtenerEfectivo(): number {
    return this.efectivoDisponible;
  }
}