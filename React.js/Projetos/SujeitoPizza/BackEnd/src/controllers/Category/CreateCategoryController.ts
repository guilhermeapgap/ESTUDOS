import { Request, Response } from "express";
import { CreateCategoyService } from "../../services/category/CreateCategoyService";

class CreateCategoryController{
    async handle(req:Request, res: Response){
        const {name} = req.body
        const createCategoyService = new CreateCategoyService

        const category = await createCategoyService.execute({name})

        return res.json(category)
    }
}

export {CreateCategoryController}