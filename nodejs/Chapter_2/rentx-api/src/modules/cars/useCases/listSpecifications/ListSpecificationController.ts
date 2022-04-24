import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    handle(req: Request, res: Response): Response {
        const specifications = this.listSpecificationsUseCase.execute();

        return res.status(200).json({ specifications });
    }
}

export { ListSpecificationsController };
