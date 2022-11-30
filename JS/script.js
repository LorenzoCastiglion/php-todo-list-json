const { createApp } = Vue;


let done;
let id = 0;

const app = createApp({
    data() {
        return {

            newTodo: '',
            todos: [],
            apiUrl: './server.php'


        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.length < 7) {
                this.hasError = true
            } else {
                this.hasError = false;
                this.send()
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

            axios.post(this.apiUrl, { 'todo': this.newTodo }, { headers: { 'Content-Type': 'multipart/form-data' } }).then(
                (response) => {
                   this.getTodo()
                }
            )
        },

        getTodo(){
            axios.get(this.apiUrl).then(
                (res)=>{

                    this.todos = res.data

                }
            )

        }

    },

    mounted () {

        this.getTodo()

    }
})
app.mount('#app')