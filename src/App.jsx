import "./App.css";
import Card from "./Card";
import Thankyou from "./Thankyou";
import { useState } from "react";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  function rate(value) {
    setRating(value);
  }

  console.log(rating);

  return (
    <div className="App">
      {isSubmitted === false ? (
        <Card submit={() => setIsSubmitted(true)} rate={rate} />
      ) : (
        <Thankyou rating={rating} />
      )}
    </div>
  );
}