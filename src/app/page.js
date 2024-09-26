import { Header } from "@/components/header";
import { BookCreate } from "@/components/book-create";
import { BookCard } from "@/components/book-card";

async function getBooks() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/MVktbw3rgVpD", {
      cache: "no-store",
    });
    const books = await res.json();
    return books;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const { data } = await getBooks();

  return (
    <main className="space-y-8 p-5 lg:p-8">
      <Header />
      <section className="max-lg:space-y-8 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3">
        <BookCreate />
        <div className="space-y-4 xl:col-span-2">
          {data.map((book) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      </section>
    </main>
  );
}
