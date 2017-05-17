$(document).foundation()

const megaroster = {
    init() {
        document
            .querySelector('#new-student')
            .addEventListener('submit', this.addStudents);
    },

    addStudents(e) {
        e.preventDefault()
        const studentName = e.target.studentName.value
        console.log(studentName)
    },
}
megaroster.init()