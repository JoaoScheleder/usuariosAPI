import {isEmailValid} from "../../utils/textUtils"
import userService from "../../services/userService";

export async function canCreate(req,res,next){

    const body = req.body
    const canCreate = (await userService.canCreateUser(body.email)).length == 0

    if(!canCreate){
        res.status(409).send("Conflict, resource already exists")
        return
    }
    if(!isEmailValid(body.email)){
        res.status(400).send("Bad request, invalid email")
        return
    }
    if(body.name && body.email && body.password){
        next()
    }else{
        res.status(400).send("Bad request")
        return
    }
}
