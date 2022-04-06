interface Course {
  name: string;
  education?: string;
  duration: number;
}

class CreateCourseService {
  execute({ name, education = 'React-Native', duration }: Course) {
    console.log(name, education, duration);
  }
}

export default new CreateCourseService();
