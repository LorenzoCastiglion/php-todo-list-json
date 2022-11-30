<?php
include __DIR__ . '/partials/head.php'


    ?>

<body>


    <div id="app" class="position-absolute notepad text-center">



        <h1 class="text-uppercase">to do list</h1>
        <!-- utilizzo form e @submission così da integrare direttamente il :key="enter" del bonus -->
        <form @submit.prevent="addTodo">
            <input class="text-center fs-6 " v-model="newTodo" placeholder="insert task">
            <br>
            <button class="mt-2 px-3 rounded btn btn-warning">Add Todo</button>

            <div v-if="hasError" class="alert alert-danger mt-2">Il task richiede almeno 7 battute</div>
        </form>
        <div class=" row flex-column ">
            <ul class=" d-flex flex-column my-3 justify-content-center list-unstyled ">
                <li class="my-3 d-flex justify-content-between" v-for="(todo,index) in todos" :key="todo.id">
                    <span :class="{ done: todo.done }" @click="toggle(index)"> {{ todo.text }}</span>
                    <div class="remove ms-2  text-white" @click="removeTodo(todo)">--</i></div>
                </li>
            </ul>
        </div>
    </div>

</body>

</html>