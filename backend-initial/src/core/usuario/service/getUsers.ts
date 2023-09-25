import UseCase from "../../shared/UseCase";
import Usuario from "../model/Usuario";
import RepositoryUsers from "./RepositoryUsers";

export default class GetUsers implements UseCase<void, Usuario[]>{

  constructor(readonly repository: RepositoryUsers){}

  async exec(): Promise<Usuario[] | []> {
    const result = await this.repository.getUsers()

    if(result.length === 0){
      return []
    }
    
    return result
  }

}