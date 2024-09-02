"use client";

import { useAtomValue } from "jotai";
import { switchAtom } from "./switch-atom";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const BookCreate = () => {
  const clicked = useAtomValue(switchAtom);
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    summary: "",
  });
  const router = useRouter();

  function handleChanges(e) {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  }

  async function handleCreateBook() {
    await fetch("https://v1.appbackend.io/v1/rows/MVktbw3rgVpD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          title: book.title,
          author: book.author,
          genre: book.genre,
          published_year: book.publishedYear,
          summary: book.summary,
        },
      ]),
    });
    router.refresh();
  }

  return (
    <div className="text-slate-900">
      <input
        type="text"
        name="title"
        placeholder="title"
        value={book.title}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="author"
        placeholder="author"
        value={book.author}
        onChange={handleChanges}
      />
      <select name="genre" id="genre" value={book.genre} onChange={handleChanges}>
        <option value="">choose genre</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Fiction">Fiction</option>
        <option value="Travel">Travel</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Biography">Biography</option>
      </select>
      <input
        type="text"
        name="publishedYear"
        placeholder="published year"
        value={book.publishedYear}
        onChange={handleChanges}
      />
      <textarea
        name="summary"
        id="summary"
        value={book.summary}
        def
        onChange={handleChanges}
      ></textarea>
      <button onClick={handleCreateBook}>Add</button>
    </div>
  );
};
