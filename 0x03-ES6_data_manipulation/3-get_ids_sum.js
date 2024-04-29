export default function getStudentIdsSum(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.reduce((acc, { id }) => acc + id, 0);
  }
  return 0;
}
