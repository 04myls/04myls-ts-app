// 型情報のみのインポートには import type 型 という書き方をすることもできる（import type { Todo } from "./Example"）

import { Todo } from "./App";

type TaskListProps = {
  todos: Todo[];
};

const TaskList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};
export default TaskList;
