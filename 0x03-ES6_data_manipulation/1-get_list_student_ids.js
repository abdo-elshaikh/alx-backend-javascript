export default function getListStudentIds(employeesList) {
  if (Array.isArray(employeesList)) {
    return employeesList.map(({ id }) => id);
  }
  return [];
}
