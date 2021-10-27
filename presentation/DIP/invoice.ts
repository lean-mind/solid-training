class InvoiceService {
  compute (invoice: Invoice) {
    const repository = new InvoiceRepository()
    // Domain logic
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

class InvoiceService {
  constructor(private repository: InvoiceRepository) { }

  compute (invoice: Invoice) {
    // Domain logic
    this.repository.save(invoice)
  }
}
