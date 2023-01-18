import React from "react";
import { useQuery } from "react-query";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import Search from "../components/Search";

function Home() {
  const { data: books, isLoading } = useQuery("books", () =>
    fetch("https://raintree-books-server.onrender.com/books").then((res) =>
      res.json()
    )
  );
  // console.log(books);
  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <Search />
      <div className="md:container md:mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center mt-10">
        {isLoading ? (
          <Loading />
        ) : (
          books?.map((book, index) => <BookCard book={book} key={index} />)
        )}
      </div>
    </div>
  );
}

export default Home;
