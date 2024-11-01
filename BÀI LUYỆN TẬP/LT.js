class Student {
    constructor(id, name, gender, dob, hometown) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.hometown = hometown;
    }
}

class StudentManager {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.displayStudents();
    }

    addStudent(student) {
        this.students.push(student);
        this.updateLocalStorage();
        this.displayStudents();
    }

    editStudent(id) {
        const student = this.students.find(s => s.id === id);
        document.getElementById('studentId').value = student.id;
        document.getElementById('studentName').value = student.name;
        document.getElementById('gender').value = student.gender;
        document.getElementById('dob').value = student.dob;
        document.getElementById('hometown').value = student.hometown;
        this.deleteStudent(id);
    }

    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.updateLocalStorage();
        this.displayStudents();
    }

    updateLocalStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    displayStudents() {
        const tableBody = document.getElementById('studentTable');
        tableBody.innerHTML = '';
        this.students.forEach(student => {
            const row = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.gender}</td>
                    <td>${student.dob}</td>
                    <td>${student.hometown}</td>
                    <td>
                        <button onclick="studentManager.editStudent('${student.id}')">Sửa</button>
                        <button onclick="studentManager.deleteStudent('${student.id}')">Xóa</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }
}

const studentManager = new StudentManager();

function addStudent() {
    const id = document.getElementById('studentId').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hometown = document.getElementById('hometown').value;
   

    // Kiểm tra xem các trường có giá trị hay không
    if (id && name && gender && dob ) {
        const student = new Student(id, name, gender, dob, hometown);
        studentManager.addStudent(student);

        // Sau khi thêm sinh viên, xóa dữ liệu trong các input
        document.getElementById('studentId').value = '';
        document.getElementById('studentName').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('dob').value = '';
        document.getElementById('hometown').value = '';
       
    } else {
        alert("Vui lòng điền đầy đủ thông tin và kiểm tra chính xác lại thông tin!");
    }
}
