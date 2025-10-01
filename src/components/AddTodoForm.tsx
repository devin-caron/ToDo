import React, { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="rounded-md grow border border-gray-400 p-2  bg-white me-1"
      />
      <button type="submit" className="btn w-16">
        Add
      </button>
    </form>
  );
}
