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

        removeTodo(index) {

            const todoFormData = {
               deleteTodoIndex: index,
            }

            axios.post(
                this.apiUrl,
                todoFormData,
                { headers: { 'Content-Type': 'multipart/form-data' }}).then((res)=>{

                    this.getTodo()
                }
                )
            
        },

        toggle(index) {
            const todoFormData = {
                toggleTodoIndex: index,
            }

            axios.post(
                this.apiUrl,
                todoFormData,
                { headers: { 'Content-Type': 'multipart/form-data' }}).then((res)=>{

                    this.getTodo()
                }
                )

            
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