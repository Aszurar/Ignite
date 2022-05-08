import { Request, Response } from "express";

import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

    handle(req: Request, res: Response): Response {
        const { file } = req;

        const readedFilte = this.importCategoriesUseCase.execute(file);

        return res.status(200).json({ readedFilte });
    }
}

export { ImportCategoriesController };
