import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(({ data }) => {
  console.log(data);

  const { id, title, completed } = data as Todo;

  logTodo(id, title, completed);
  logTodoObj(data);
  logTodoObj({ id, title, completed });
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
        `);
};

const logTodoObj = (todo: Todo) => {
  const { id, title, completed } = todo;
  console.log(`
        logTodoObj
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
        `);
};
const logTodoObjDestructure = ({ id, title, completed }: Todo) =>
  console.log(`
        logTodoObj
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
        `);
