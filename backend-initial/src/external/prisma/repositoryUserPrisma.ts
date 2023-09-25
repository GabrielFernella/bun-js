import { PrismaClient } from "@prisma/client";
import Usuario from "../../core/usuario/model/Usuario";
import RepositoryUsers from "../../core/usuario/service/RepositoryUsers";

export default class RepositoryUserPrisma implements RepositoryUsers {

  private prisma: PrismaClient

  constructor(){
    this.prisma = new PrismaClient()
  }

  async getUsers(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany()
  }

  async getUserById(id: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        id
      }
    })
  }

  async getUserByEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        email
      }
    })
  }

  async create(user: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: user
    })
  }

}