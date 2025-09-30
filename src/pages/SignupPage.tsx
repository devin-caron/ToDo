import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    //onSubmit(input);
    setInput("");
  }

  return (
    <main className="pointer-events-auto py-10 px-5 h-screen overflow-y-auto">
      <div className="flex flex-col max-w-lg mx-auto bg-slate-100 rounded-md p-4 space-y-4">
        <h1 className="font-bold text-3xl text-center p-2">ToDo Sign Up</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Email"
            className="rounded-md grow border p-2 mb-2 border-gray-400 bg-white"
          />
          <input
            placeholder="Confirm Email"
            className="rounded-md grow border p-2 mb-2 border-gray-400 bg-white"
          />
          <input
            placeholder="Password"
            className="rounded-md grow border p-2 mb-2 border-gray-400 bg-white"
          />
          <input
            placeholder="Confirm Password"
            className="rounded-md grow border p-2 mb-2 border-gray-400 bg-white"
          />
          <button
            type="submit"
            className="rounded-md grow p-2 bg-slate-900 text-white hover:bg-slate-700"
          >
            Create Account
          </button>
        </form>
        <div className="flex justify-center">
          <h1>Have an account?</h1>
          <Link to="/" className="ps-2 text-red-500 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
