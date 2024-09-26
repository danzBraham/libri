"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const BookCreate = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    summary: "",
  });
  const router = useRouter();

  function handleInputChange(e) {
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
    setBook({
      title: "",
      author: "",
      genre: "",
      publishedYear: "",
      summary: "",
    });
    router.refresh();
  }

  return (
    <div className="flex h-fit w-full flex-col gap-3 rounded-lg bg-violet-700 p-6 lg:sticky lg:top-8">
      <input
        type="text"
        name="title"
        value={book.title}
        placeholder="Title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="author"
        value={book.author}
        placeholder="Author"
        onChange={handleInputChange}
      />
      <select id="genre" name="genre" value={book.genre} onChange={handleInputChange}>
        <option value="">Choose Genre</option>
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
        value={book.publishedYear}
        placeholder="Published Year"
        onChange={handleInputChange}
      />
      <textarea
        id="summary"
        name="summary"
        value={book.summary}
        placeholder="Summary"
        onChange={handleInputChange}
        rows={5}
      ></textarea>
      <button onClick={handleCreateBook}>Add</button>
    </div>
  );
};
