//funciones reutilizables 
export function validarNoNulo<T>(valor: T | null | undefined): T {
  if (valor === null || valor === undefined) {
    throw new Error("Valor requerido");
  }

  return valor;
}