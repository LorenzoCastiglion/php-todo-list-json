const { createApp } = Vue;


let done;
let id = 0;

const app = createApp({
    data() {
        return {

            newTodo: '',
            todos: [
                { id: id++, text: 'Imparare HTML', done: false, hasError: false },
                { id: id++, text: 'Imparare JavaScript', done: false, hasError: false },
                { id: id++, text: 'Imparare Vue', done: false, hasError: false }
            ]


        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.length < 7) {
                this.hasError = true
            } else {
                this.hasError = false;
                this.send()
                // 
            }
            this.newTodo = ''

        },

        removeTodo(todo) {
            this.todos = this.todos.filter((btn) => btn !== todo)
        },

        toggle(index) {
            this.todos[index].done = !this.todos[index].done;
        },

        send() {
            axios.post('server.php', { 'todo': this.newTodo }, { headers: { 'Content-Type': 'multipart/form-data' } }).then(
                (response) => {
                    this.todos.unshift({ id: id++, text: response.data, done: false })
                }
            )
        }

    }
})
app.mount('#app')