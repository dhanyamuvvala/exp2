import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const cardData = [
  {
    title: "Travel Explorer",
    desc: "Discover beautiful destinations and travel experiences.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Food Fiesta",
    desc: "Explore delicious cuisines and popular food spots.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "Music Hub",
    desc: "Listen, share, and explore trending music.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    title: "Fitness Zone",
    desc: "Track workouts and stay healthy.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
];

function App() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">
        Card-Based Layout Using Bootstrap
      </h2>

      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="card custom-card h-100">
              <img
                src={card.img}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.desc}</p>
                <button className="btn btn-outline-primary btn-sm">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
