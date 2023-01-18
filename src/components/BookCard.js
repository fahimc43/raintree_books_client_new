import React from "react";
import { toast } from "react-toastify";

function BookCard({ book }) {
  const { bookName, authorName, bookPrice, imageUrl } = book;
  // console.log(book);

  const orderedBook = {
    bookName,
    authorName,
    bookPrice,
    imageUrl,
    quantity: 1,
    sum: bookPrice,
  };

  const handleProduct = () => {
    fetch("https://raintree-books-server.onrender.com/ordered-book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully add your Order page");
        } else if (data.add) {
          const count = orderedBook.quantity + data.exists.quantity;
          toast.info(`Same book ${count} Times add your Order page`);
        }
        console.log(data);
      });
  };
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure className=" px-5 pt-5">
          <img src={imageUrl} alt={bookName} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className=" text-base font-normal">{authorName}</p>
          <div className="card-actions justify-between">
            <div className="stat-value text-primary">${bookPrice}</div>
            <button onClick={handleProduct} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
