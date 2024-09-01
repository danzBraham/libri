import { BookCard } from "@/components/book-card";

async function getBooks() {
  const response = await fetch("https://v1.appbackend.io/v1/rows/MVktbw3rgVpD", {
    cache: "no-store",
  });
  const books = await response.json();
  return books;
}

export default async function Home() {
  const { data } = await getBooks();

  return (
    <main>
      <h1>Libri</h1>

      <section>
        {data.map((book) => (
          <BookCard key={book._id} {...book} />
        ))}
      </section>
    </main>
  );
}
