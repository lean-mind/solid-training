class User {
  readonly name: string
  readonly surname: string
  readonly db: DB

  constructor(name: string, surname: string, db: DB) {
    this.name = name
    this.surname = name
    this.db = db
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`
  }

  save(): void {
    this.db.save(this.getFullName())
  }
}

// ----

class User {
  readonly name: string
  readonly surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = name
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`
  }
}

class UserRepository {
  readonly db: DB = new DB()

  save(user: User): void {
    this.db.save(user)
  }
}
