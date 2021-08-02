class Cliente {
  constructor(nombre, impuesto) {
    if (typeof nombre !== "string") {
      console.warn("se supone que nombre debiese ser un texto para la persona ");
    }

    if (!(impuesto instanceof Impuestos)) {
      console.warn("se supone que impuesto es de tipo Impuesto para la persona " + nombre);
    }

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
  }

}

const impuestosDeFranco = new Impuestos(100, 5);
const clienteFranco = new Cliente("Franco", impuestosDeFranco);
const impuestosDeJuanita = new Impuestos(300, 15);
const clienteJuanita = new Cliente("Juanita", impuestosDeJuanita);
const calculoDeFranco = clienteFranco.calcularImpuesto();
const calculoDeJuanita = clienteJuanita.calcularImpuesto();
console.log({
  calculoDeFranco,
  calculoDeJuanita
});