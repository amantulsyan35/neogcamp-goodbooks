import React from "react";
import "./styles.css";
import { useState } from "react";

import "./App.css";

const bookDB = {
  romantic: [
    { name: "The Lakehouse", rating: "4/5" },
    { name: "Definitely Maybe", rating: "3.5/5" },
    { name: "Love Rosie", rating: "3.5/5" }
  ],

  action: [
    {
      name: "John Wick",
      rating: "5/5"
    },
    {
      name: "Venom",
      rating: "4.5/5"
    },
    {
      name: "Rocky",
      rating: "4.5/5"
    }
  ],
  comedy: [
    {
      name: "Free Guy",
      rating: "3.5/5"
    },
    {
      name: "Dumb and Dumber",
      rating: "5/5"
    },
    {
      name: "Boss Baby",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎫 Good Movies </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ listStyleType: "none" }}>
          {bookDB[selectedGenre].map((book) => (
            <li key={book.name}>
              {/* {" "} */}
              <div> {book.name} </div>
              <div> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
