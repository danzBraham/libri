"use client";

import Image from "next/image";
import { useState } from "react";
import deleteIcon from "@/assets/delete.svg";

export const BookCard = ({ _id, title, author, genre, published_year: publishedYear, summary }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortSummary = summary.substring(0, 100);

  function handleExpanded() {
    setIsExpanded((currentValue) => !currentValue);
  }

  return (
    <div key={_id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{genre}</p>
      <p>{publishedYear}</p>
      <p>{isExpanded ? summary : shortSummary}</p>
      <span className="cursor-pointer hover:underline inline-block" onClick={handleExpanded}>
        {isExpanded ? "less" : "more..."}
      </span>
      <Image src={deleteIcon} alt="delete icon" />
    </div>
  );
};
