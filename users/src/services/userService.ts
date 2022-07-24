import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

class UserService {
    getUsers(){
        const usersPromise = AppDataSource
            .getRepository(User)
            .createQueryBuilder("user")
            .select(["user.id","user.name","user.email"])
            .getMany()

        return usersPromise
    }

    createUser(user : User){
        const userPromise = AppDataSource
            .getRepository(User)
            .insert(user)
        
        return userPromise
    }

    canCreateUser(reqEmail : string){
        const userPromise = AppDataSource
            .getRepository(User)
            .createQueryBuilder("user")
            .select(["user.email"])
            .where("user.email = :email",{"email":reqEmail})
            .getMany()

        return userPromise
    }
}

export default new UserService()


