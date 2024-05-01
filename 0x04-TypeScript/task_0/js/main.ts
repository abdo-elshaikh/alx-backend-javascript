interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const firstStudent: Student = {
    firstName: "ali",
    lastName: "ahmed",
    age: 30,
    location: "cairo"
}

const SecondStudent: Student = {
    firstName: "asmaa",
    lastName: "galal",
    age: 24,
    location: "BNS"
}

const studentsList: Student[] = [firstStudent, SecondStudent]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
