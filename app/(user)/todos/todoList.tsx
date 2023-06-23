import { Todo } from "@/typings";
import Link from "next/link";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  return todos;
};

async function ToDoList() {
  const todos = await fetchData();

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="list-none ml-4">
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </li>
      ))}
    </div>
  );
}

export default ToDoList;
