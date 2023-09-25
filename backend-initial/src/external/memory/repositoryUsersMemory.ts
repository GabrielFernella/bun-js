import { randomUUID } from "crypto";
import Usuario from "../../core/usuario/model/Usuario";
import RepositoryUsers from "../../core/usuario/service/RepositoryUsers";

export default class RepositoryUsersMemory implements RepositoryUsers{

  private readonly users: Usuario[] = []

  async getUsers(): Promise<Usuario[]> {
    return this.users
  }

  async getUserByEmail(email: string): Promise<Usuario | null> {
    return this.users.find(index => index.email === email) || null
  }

  async create(user: Usuario): Promise<Usuario> {
    const newUser = {...user, id: randomUUID()}
    this.users.push(newUser)

    return newUser
  }

}