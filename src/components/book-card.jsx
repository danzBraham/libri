"use client";

import Image from "next/image";
import deleteIcon from "@/assets/delete.svg";
import { useRouter } from "next/navigation";

export const BookCard = ({
  _id,
  title,
  author,
  genre,
  published_year: publishedYear,
  summary,
}) => {
  const router = useRouter();

  function handleExpanded() {
    setIsExpanded((currentValue) => !currentValue);
  }

  async function handleDeleteBook() {
    await fetch("https://v1.appbackend.io/v1/rows/MVktbw3rgVpD", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([_id]),
    });
    router.refresh();
  }

  return (
    <div
      key={_id}
      className="space-y-2 rounded-lg bg-slate-600 p-4 text-slate-50"
    >
      <h3 className="text-3xl font-medium tracking-tight">{title}</h3>
      <div className="flex items-center gap-2">
        <p className="text-lg">{author}</p>
        <p className="w-fit rounded-lg bg-slate-800 p-2">
          {genre} | {publishedYear}
        </p>
      </div>
      <p>{summary}</p>
      <Image
        src={deleteIcon}
        alt="delete icon"
        className="rounded-lg bg-rose-500 p-2"
        onClick={handleDeleteBook}
      />
    </div>
  );
};
