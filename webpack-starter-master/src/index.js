
import './styles.css';

import { Todo, TodoList } from './classes';
import { creadoHtml } from './js/componentes';



 export const todoList = new TodoList()


const tarea = new Todo("Estudiar programamcion ");



creadoHtml(tarea)


