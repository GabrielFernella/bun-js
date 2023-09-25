import Usuario from "../model/Usuario";

export default interface RepositoryUsers {
  getUsers(): Promise<Usuario[]>
  getUserById(id: string): Promise<Usuario | null>
  getUserByEmail(email: string): Promise<Usuario | null>
  create(user: Usuario): Promise<Usuario>
}