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
        this.students.unshift(student)
        this.max++

        const listItem = this.buildListItem(student)
        this.prependChild(this.studentList,listItem)
        f.reset()
    },

    prependChild(parent,child) {
        parent.insertBefore(child,parent.firstChild)
    },

    buildListItem(student){
        const li = document.createElement('li')
        li.dataset.id = student.id
        li.textContent = student.name
        return li
    },
}
megaroster.init()