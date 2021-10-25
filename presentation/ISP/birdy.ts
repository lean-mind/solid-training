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
