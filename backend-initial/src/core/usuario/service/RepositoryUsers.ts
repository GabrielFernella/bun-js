import Usuario from "../model/Usuario";

export default interface RepositoryUsers {
  getUsers(): Promise<Usuario[]>
  getUserByEmail(email: string): Promise<Usuario | null>
  create(user: Usuario): Promise<Usuario>
}