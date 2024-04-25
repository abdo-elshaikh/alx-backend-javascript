export default class HolbertonCourse {
  constructor(name, length, students) {
    this.__name = name;
    this.__length = length;
    this.__students = students;
  }

  get name() {
    return this.__name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this.__name = newName;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this.__length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this.__length = newLength;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this.__students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this.__students = newStudents;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
