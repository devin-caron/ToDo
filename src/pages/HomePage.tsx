import { AddTodoForm } from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import TodoSummary from "../components/TodoSummary";
import useTodos from "../hooks/useTodos";

export default function HomePage() {
  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompleted } =
    useTodos();

  return (
    <main className="pointer-events-auto py-10 px-5 h-screen overflow-y-auto">
      <div className="flex flex-col max-w-lg mx-auto bg-slate-100 rounded-md p-4 space-y-4">
        <h1 className="font-bold text-3xl text-center p-2">Your To Dos</h1>
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
      </div>
    </main>
  );
}
