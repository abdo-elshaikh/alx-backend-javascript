const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter(Boolean);

    if (lines.length === 0) {
      throw new Error('Database is empty');
    }

    const students = {};
    let studentsCount = 0;
    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (field === 'field') {
        return;
      }
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
      studentsCount += 1;
    });

    console.log(`Number of students: ${studentsCount}`);

    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
