class Invoice {
  computeFixedPart(): void { }
  computeVariablePart(): void { }
  computeFeeCost(): void { }
  computeQuotaCost(): void { }
}

class FeeInvoice extends Invoice {
  override computeQuotaCost(): void {
    throw new Error('Fee invoice cannot compute Quota')
  }
}

class QuotaInvoice extends Invoice {
  override computeFeeCost(): void {
    throw new Error('Quota invoice cannot compute Fee')
  }
}

// ---

class Invoice {
  computeFixedPart(): void { }
  computeVariablePart(): void { }
}

class FeeInvoice extends Invoice {
  computeFeeCost(): void { }
}

class QuotaInvoice extends Invoice {
  computeQuotaCost(): void { }
}
