import { Router, Request, Response } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoriesController } from "../modules/cars/useCases/ImportCategories";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (req: Request, res: Response) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
    return listCategoriesController.handle(req, res);
});

categoriesRoutes.post(
    "/imports",
    upload.single("file"),
    (req: Request, res: Response) => {
        return importCategoriesController.handle(req, res);
    }
);

export { categoriesRoutes };
