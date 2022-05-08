import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategoriesDTO {
    name: string;
    description: string;
}

class ImportCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategoriesDTO[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategoriesDTO[] = [];
            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line: string[]) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err: Error) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async ({ name, description }) => {
            const categoryAlreadyExists =
                this.categoriesRepository.findByName(name);

            if (!categoryAlreadyExists) {
                this.categoriesRepository.create({ name, description });
            }
        });
    }
}
export { ImportCategoriesUseCase };
