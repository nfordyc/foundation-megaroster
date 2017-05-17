$(document).foundation()

const megaroster = {
    students: [],

    init() {
        this.max = 0
        this.studentList = document.querySelector('#student-list')
        document
            .querySelector('#new-student')
            .addEventListener('submit', this.addStudents.bind(this));
    },

    addStudents(e) {
        e.preventDefault()
        const f = e.target
        const student = {
            id: this.max + 1,
            name: f.studentName.value,
        }
        this.students.push(student)
        this.max++

        this.studentList.appendChild(this.buildListItem(student))
    },

    buildListItem(student){
        const li = document.createElement('li')
        li.textContent = student.name
        return li
    },
}
megaroster.init()