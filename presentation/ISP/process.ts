interface Process {
  begin(): void
  end(): void
  reboot(): void
  suspend(): void
}

class ManualProcess implements Process {
  begin(): void { }
  end(): void { }
  reboot(): void { }
  suspend(): void { }
}

class AutomatizedProcess implements Process {
  begin(): void { }
  end(): void { }
  reboot(): void { throw new Error('An automatized process cannot be rebooted.') }
  suspend(): void { throw new Error('An automatized process cannot be suspended.') }
}

// ---

interface Process {
  begin(): void
  end(): void
}

interface Manual {
  suspend(): void
  reboot(): void
}

class ManualProcess implements Process, Manual {
  begin(): void { }
  end(): void { }
  reboot(): void { }
  suspend(): void { }
}

class AutomatizedProcess implements Process {
  begin(): void { }
  end(): void { }
}
