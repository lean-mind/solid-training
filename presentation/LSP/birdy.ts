interface Bird {
  eat(): void
  tweet(): void
}

interface FlyingBird extends Bird {
  fly(): void
}

class Pigeon implements FlyingBird {
  eat() {
    // eat implementation
  }

  tweet() {
    // tweet implementation
  }

  fly() {
    // fly implementation
  }
}

class Penguin implements Bird {
  eat() {
    // eat implementation
  }

  tweet() {
    // tweet implementation
  }
}
