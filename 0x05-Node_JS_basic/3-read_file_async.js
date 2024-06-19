const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n').filter(Boolean);

      if (lines.length === 0) {
        reject(Error('Database is empty'));
        return;
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
      resolve();
    });
  });
}
module.exports = countStudents;
