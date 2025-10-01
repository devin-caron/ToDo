import { AddTodoForm } from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import TodoSummary from "../components/TodoSummary";
import useTodos from "../hooks/useTodos";

export default function HomePage() {
  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompleted } =
    useTodos();

  return (
    <main className="bg-gradient-to-br from-sky-100 to-slate-200 content-center pointer-events-auto py-10 px-5 h-screen overflow-y-auto">
      <div className="flex flex-col max-w-md mx-auto bg-slate-50 shadow-xl rounded-md p-10 space-y-4">
        <h1 className="font-bold text-3xl text-center p-2">Your ToDos</h1>
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
