import { Response, Request } from "express";
import { DetaillUserService } from "../../services/user/DetaillUserService";

class DetaillUserController{
    async handle(req:Request, res: Response){
        const detaillUserService = new DetaillUserService();
        const user = await detaillUserService.execute()

        return res.json(user)
    }
}

export {DetaillUserController}