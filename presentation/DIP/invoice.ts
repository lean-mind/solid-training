class ComputeSingleInvoice {
  exec(invoice: Invoice) {
    const repository = new InvoiceRepository()
    invoice.compute()
    repository.save(invoice)
  }
}

class InvoiceRepository {
  save(invoice: Invoice) { }
}

class Invoice { }

// ---

interface InvoiceRepository {
  save(invoice: Invoice)
}

class InvoiceMysqlRepository implements InvoiceRepository {
  save(invoice: Invoice) { }
}

class ComputeSingleInvoice {
  constructor(private repository: InvoiceRepository) { }

  exec(invoice: Invoice) {
    invoice.compute()
    this.repository.save(invoice)
  }
}
