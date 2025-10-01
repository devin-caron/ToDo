import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    //onSubmit(input);
    setInput("");
  }

  return (
    <main className="bg-gradient-to-br from-sky-100 to-slate-200 content-center pointer-events-auto py-10 px-5 h-screen overflow-y-auto">
      <div className="flex flex-col max-w-md mx-auto bg-slate-50 shadow-xl rounded-md p-10 space-y-4">
        <h1 className="font-bold text-3xl text-center p-2">ToDo Sign In</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Email"
            className="rounded-md grow border p-2 mb-2 border-gray-400 bg-white"
          />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            className="rounded-md grow border p-2 mb-2 border-gray-400 bg-white"
          />
          <button type="submit" className="btn grow p-2">
            Sign In
          </button>
        </form>
        <div className="flex justify-center">
          <h1>Don't have an account?</h1>
          <Link to="/signup" className="ps-2 text-red-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
