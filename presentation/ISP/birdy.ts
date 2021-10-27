interface Bird {
  eat(): void
  tweet(): void
  fly(): void
  swing(): void
  run(): void
}

class Pigeon implements Bird {
  eat(): void { }
  tweet(): void { }
  fly(): void { }
  swing(): void {
    throw new Error('Pigeons cannot swing')
  }
  run(): void {
    throw new Error('Pigeons cannot run')
  }
}

class Penguin implements Bird {
  eat(): void { }
  tweet(): void { }
  fly(): void {
    throw new Error('Penguins cannot fly')
  }
  swing(): void { }
  run(): void {
    throw new Error('Penguins cannot run')
  }
}

class Ostrich implements Bird {
  eat(): void { }
  tweet(): void { }
  fly(): void {
    throw new Error('Ostriches cannot fly')
  }
  swing(): void {
    throw new Error('Ostriches cannot swing')
  }
  run(): void { }
}

// ---

interface Bird {
  eat(): void
  tweet(): void
}

interface Flying {
  fly(): void
}

interface Swinging {
  swing(): void
}

interface Running {
  run(): void
}

class Pigeon implements Bird, Flying {
  eat(): void { }
  tweet(): void { }
  fly(): void { }
}

class Penguin implements Bird, Swinging {
  eat(): void { }
  tweet(): void { }
  swing(): void { }
}

class Ostrich implements Bird, Running {
  eat(): void { }
  tweet(): void { }
  run(): void { }
}
