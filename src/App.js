import React from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Testimonials from "./components/Testimonials";

import ReviewCard from "./components/ReviewCard";
import reviews from "./review_data";
import "./App.css";

console.log(reviews[0].name);
console.log(reviews[2].summary);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <Testimonials userTestimonial="This is the best website ever. I use it for all my meals" />
      <div className="container">
        <div className="row">
          <ReviewCard
            name={reviews[0].name}
            summary={reviews[0].summary}
            stars={reviews[0].stars}
          />

          <ReviewCard
            name={reviews[1].name}
            summary={reviews[1].summary}
            stars={reviews[1].stars}
          />

          <ReviewCard
            name={reviews[2].name}
            summary={reviews[2].summary}
            stars={reviews[2].stars}
          />

          <ReviewCard
            name={reviews[3].name}
            summary={reviews[3].summary}
            stars={reviews[3].stars}
          />

          <ReviewCard
            name={reviews[4].name}
            summary={reviews[4].summary}
            stars={reviews[4].stars}
          />

          <ReviewCard
            name={reviews[5].name}
            summary={reviews[5].summary}
            stars={reviews[5].stars}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
