import React from "react";

export default function Thankyou({ rating }) {
  return (
    <div>
      <p className="para-rating">You selected {rating} out of 5</p>
      <h1 className="thank-header">Thank you!</h1>
      <p className="thank-para">
        We appreciate you taking the tme to give a rating. If you ever need more
        support, don't hesitate to get in touh!
      </p>
    </div>
  );
}
