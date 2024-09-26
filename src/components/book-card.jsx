"use client";

import Image from "next/image";
import deleteIcon from "@/assets/delete.svg";
import { useRouter } from "next/navigation";

export const BookCard = ({ _id, title, author, genre, published_year: publishedYear, summary }) => {
  const router = useRouter();

  async function handleDeleteBook() {
    try {
      await fetch("https://v1.appbackend.io/v1/rows/MVktbw3rgVpD", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([_id]),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      key={_id}
      className="flex h-fit w-full flex-col justify-between gap-6 rounded-lg border-t-[5px] border-violet-500 bg-gray-50 p-6 text-gray-950 lg:px-8 lg:py-6"
    >
      <div className="space-y-2">
        <h3 className="text-3xl font-bold leading-none tracking-tight md:text-4xl">{title}</h3>
        <p className="text-lg font-medium tracking-tight md:text-xl">{author}</p>
        <div className="flex items-center gap-2">
          <p className="rounded-lg bg-violet-500 px-2 py-1 text-white">{genre}</p>
          <p>{publishedYear}</p>
        </div>
      </div>

      <p className="h-full">{summary}</p>

      <Image
        src={deleteIcon}
        alt="delete icon"
        className="self-end rounded-lg bg-rose-500 p-2"
        onClick={handleDeleteBook}
      />
    </div>
  );
};
