import { Header } from "@/components/header";
import { BookCard } from "@/components/book-card";
import { BookCreate } from "@/components/book-create";

async function getBooks() {
  const response = await fetch(
    "https://v1.appbackend.io/v1/rows/MVktbw3rgVpD",
    {
      cache: "no-store",
    },
  );
  const books = await response.json();
  return books;
}

export default async function Home() {
  const { data } = await getBooks();

  return (
    <main className="space-y-4 p-10">
      <Header />

      <section className="grid grid-cols-2 gap-4">
        {data.map((book) => (
          <BookCard key={book._id} {...book} />
        ))}
      </section>

      <section>
        <BookCreate />
      </section>
    </main>
  );
}
