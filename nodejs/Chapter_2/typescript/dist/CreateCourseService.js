"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, education, duration }) {
        console.log(name, education, duration);
    }
}
exports.default = new CreateCourseService();
