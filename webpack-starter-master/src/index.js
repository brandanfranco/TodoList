
import './styles.css';

import { Todo, TodoList } from './classes';
import { creadoHtml } from './js/componentes';



 export const todoList = new TodoList();

 todoList.todos.forEach(creadoHtml)

 console.log("todos", todoList.todos);


