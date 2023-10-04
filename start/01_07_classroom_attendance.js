// Write your code here

const getStudents = (classroom) => {
  let { hasTeachingAssistant, classlist} = classroom;
  let teacher, theachingAssistant, students;

  if(hasTeachingAssistant) {
    [teacher,theachingAssistant, ...students] = classlist;
  } else {
    [teacher,...students] = classlist;
  }
  return students
}


const classroom = {hasTeachingAssistant: true, classlist: ["Teacher","TeachingAssistant","Student 1","Studen 2"] };

console.log ("Sturdents : ", getStudents(classroom));