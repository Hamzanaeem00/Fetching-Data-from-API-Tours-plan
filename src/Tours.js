import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, setTours }) => {
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        {tours.map((tour) => {
          console.log("toursim place Info ===> ", tour);
          return (
            <Tour tours={tours} setTours={setTours} tour={tour} key={tour.id} />
          );
        })}
      </section>
    </main>
  );
};

export default Tours;
