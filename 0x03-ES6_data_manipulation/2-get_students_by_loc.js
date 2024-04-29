export default function getStudentsByLocation(studentsList, city) {
  if (Array.isArray(studentsList)) {
    return studentsList.filter(({ location }) => location === city);
  }
  return [];
}
