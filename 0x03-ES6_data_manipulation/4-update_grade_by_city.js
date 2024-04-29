export default function updateGradesByCityList(students, city, gradesList) {
  return students
    .filter(({ location }) => location === city)
    .map((student) => {
      const matchingGrade = gradesList.find((grade) => grade.studentId === student.id);
      return { ...student, grade: matchingGrade ? matchingGrade.grade : 'N/A' };
    });
}
