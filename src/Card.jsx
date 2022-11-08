export default function Card({ submit, rate }) {
    return (
      <div className="Card">
        <i class="ri-star-fill icon" ></i>
        <h1>How did we do?</h1>
        <p className="para">
          Please let us know how we did with your support request. All feedback is
          appreciated to help us imporve our offering!
        </p>
        <div className="rating-button-container">
          <button className="btn" onClick={() => rate(1)}>
            1
          </button>
          <button className="btn" onClick={() => rate(2)}>
            2
          </button>
          <button className="btn" onClick={() => rate(3)}>
            3
          </button>
          <button className="btn" onClick={() => rate(4)}>
            4
          </button>
          <button className="btn" onClick={() => rate(5)}>
            5
          </button>
        </div>
        <button className="btn-submit" onClick={submit}>
          SUBMIT
        </button>
      </div>
    );
  }
  