class Student {
    constructor(student) {
        this.student = student;
    }

    student;

    getFullName() {
        return `${this.student.firstName} ${this.student.lastName}`;
    }

    getInitials() {
        return `${this.student.firstName.slice(0, 1)}.${this.student.lastName.slice(0, 1)}.`;
    }

    getPhone() {
        return `${this.student.phone}`;
    }

    getBirthday() {
        const current = new Date().getFullYear();
        const year = new Date(this.student.birthday).getFullYear();
        return current - year;

        // const rest = new Date() - new Date(this.student.birthday);
        // return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    }

    getCity() {
        return `${this.student.city}`;
    }

    getAverageTest() {
        const sum = this.student.grades.reduce((res, n) => res += n, 0);
        return Math.round(sum / this.student.grades.length);
    }

    getTestAmount() {
        return this.student.grades.length;
    }
}

const n = new Student({
    firstName: "יוסי",
    lastName: "אדלר",
    phone: "059-6506877",
    birthday: "2004-04-14",
    city: "חיפה",
    grades: [90, 80, 100, 95, 100, 100, 100],
});

console.log(n.getFullName());
console.log(n.getInitials());
console.log(n.getPhone());
console.log(n.getBirthday());
console.log(n.getCity());
console.log(n.getAverageTest());
console.log(n.getTestAmount());