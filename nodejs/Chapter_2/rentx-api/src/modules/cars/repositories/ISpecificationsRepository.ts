import { Specification } from "../model/Specification";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Specification;
    create({ name, description }: ICreateSpecificationsDTO): void;
    list(): Specification[];
}

export { ICreateSpecificationsDTO, ISpecificationsRepository };
