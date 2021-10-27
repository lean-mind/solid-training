class Bird {
  eat(): void { }
  tweet(): void { }
  fly(): void { }
}

class Pigeon extends Bird { }

class Penguin extends Bird { }

class Bird {
  eat(): void { }
  tweet(): void { }
}

class FlyingBird extends Bird {
  fly(): void { }
}

class Pigeon extends FlyingBird { }

class Penguin extends Bird { }
