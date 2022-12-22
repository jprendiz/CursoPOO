import { Comment } from "./Comment.mjs";
import { Student } from "./Student.mjs";

export class TeacherStudent extends Student{
    constructor(props) {
        super(props);
        this.skills = skills;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
          content: commentContent,
          studentName: this.name,
          studentRole: "profesor de "+ this.skills.join() 
        });
        return comment.publicar();
      }
}

const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  profesor.publicarComentario('Mi primer comentario')

  // console.log(profesor.publicarComentario('Mi primer comentario'));