$(document).foundation()

const megaroster = {
    init() {
        this.max = 0
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
        this.max++
        this.buildListItem(student)
    },

    buildListItem(student){
        console.log(student)
    },
}
megaroster.init()