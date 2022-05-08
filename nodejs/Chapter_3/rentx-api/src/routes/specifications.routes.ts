import { Request, Response, Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req: Request, res: Response) => {
    createSpecificationController.handle(req, res);
});

specificationsRoutes.get("/", (req: Request, res: Response) => {
    listSpecificationsController.handle(req, res);
});

export { specificationsRoutes };
