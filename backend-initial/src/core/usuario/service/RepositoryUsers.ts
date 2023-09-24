import Usuario from "../model/Usuario";

export default interface RepositoryUsers {
  getUserByEmail(email: string): Promise<Usuario | null>
  create(user: Usuario): Promise<Usuario>
}