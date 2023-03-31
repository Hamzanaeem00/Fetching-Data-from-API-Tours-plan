import React, { useState } from "react";

const Tour = ({ tour, tours, setTours }) => {
  console.log("tours", tours);
  const [readMore, setReadmore] = useState(false);

  const handleRemove = (id) => {
    const newTours = tours?.filter((tour) => tour.id !== id);
    console.log("newTours==>", newTours);
    setTours(newTours);
  };
  return (
    <div>
      <div className="single-tour">
        <img src={tour.image} alt={tour.name} />
        <footer>
          <div className="tour-info">
            <h4>{tour.name}</h4>
            <h4 className="price">${tour.price}</h4>
          </div>
          <p>
            {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
            <button onClick={() => setReadmore(!readMore)}>
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => handleRemove(tour.id)}>
            Not Interested
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Tour;
