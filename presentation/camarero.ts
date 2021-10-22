
class VasoAgua {
  servir(): Vaso {
    const vaso = new Vaso()
    vaso.llenar()
    return vaso
  }
}

class VasoClipper {
  servir(): Vaso {
    const vaso = new Vaso()
    this.vaso.añadirHielo()
    this.vaso.llenar()
    return vaso
  }
}

class Camarero {
  readonly vasoAgua: VasoAgua
  readonly vasoClipper: VasoClipper

  constructor(vasoAgua: VasoAgua, vasoClipper: VasoClipper) {
    this.vasoAgua = vasoAgua
    this.vasoClipper = vasoClipper
  }

  servirAgua() {
    this.vasoAgua.servir()
  }

  servirClipper() {
    this.vasoClipper.servir()
  }
}


// ------

interface Bebida {
  servir(): Vaso
}

class VasoAgua implements Bebida {
  servir(): Vaso {
    const vaso = new Vaso()
    vaso.llenar()
    return vaso
  }
}

class VasoClipper implements Bebida {
  servir(): Vaso {
    const vaso = new Vaso()
    this.vaso.añadirHielo()
    this.vaso.llenar()
    return vaso
  }
}

class Camarero {
  readonly bebida: Bebida

  constructor(bebida: Bebida) {
    this.bebida = bebida
  }

  servirBebida(): Vaso {
    return this.bebida.servir()
  }
}
