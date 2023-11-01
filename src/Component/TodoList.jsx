import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";


const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />
      })}
    </div>
  );
};

export default TodoList;
