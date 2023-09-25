import { Usuario } from "@prisma/client";
import UseCase from "../../shared/UseCase";
import RepositoryUsers from "./RepositoryUsers";

export default class GetUsers implements UseCase<void, Usuario[]>{

  constructor(readonly repository: RepositoryUsers){}

  exec(param: void): Promise<Usuario[]> {
    throw new Error("Method not implemented.");
  }

}