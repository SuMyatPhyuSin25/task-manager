
import Todo from "./src/Todo.js";

import { v4 as uuidv4 } from 'uuid';


console.log(uuidv4());

import './style.css';

const app = new Todo();

app.init();