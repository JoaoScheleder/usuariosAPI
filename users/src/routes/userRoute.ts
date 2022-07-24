import { Router } from "express";
import { User } from "../entity/User";
import { clearText } from "../utils/textUtils";
import { canCreate } from "./middlewares/middleware";
import userService from "../services/userService";

const router = Router()
const bcrypt = require('bcrypt');

// lista todos os usuarios
router.get('/users',async (req, res, next)=>{
    try{
        const users = await userService.getUsers()
        res.status(200).send(users)
        return
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
        return
    }

})

// cria um usuario
router.post('/user/create', canCreate, async (req, res, next)=>{
    const body = req.body
    
    const user = new User()
    user.name = clearText(body.name)
    user.email = clearText(body.email)
    user.password = await bcrypt.hash(body.password, 10)

    try{
        await userService.createUser(user)
        res.status(201).send("Created")
        return
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
        return
    }
})

export default router