$(document).foundation()

const megaroster = {
    students: [],

    init() {
        this.max = 0
        this.studentList = document.querySelector('#student-list')
        this.setupEventListeners()
    },

    setupEventListeners() {
        document
            .querySelector('#new-student')
            .addEventListener('submit', this.addStudents.bind(this))
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
        const template = document.querySelector('.student.template')
        const li = template.cloneNode(true)
        li.querySelector('.student-name').textContent = student.name
        this.removeClassName(li,'template')
        li.dataset.id = student.id

        li
            
            .querySelector('button.remove')
            .addEventListener('click', this.removeStudent.bind(this))

        return li
    },

    removeStudent(e){
        const btn = e.target
        const name = btn.closest('.student')
            .querySelector('.student-name').textContent
        btn.closest('.student').remove()

        this.students.forEach(student => {
            if(student.name === name) {
                this.students.splice(this.students.indexOf(student),1)
                return
            }
        })
    },

    removeClassName(el, className){
        el.className = el.className.replace(className,'').trim()
    },
}
megaroster.init()