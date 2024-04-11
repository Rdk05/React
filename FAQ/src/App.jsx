import { useState } from "react";
import "./App.css";
import { questions } from "./Data/FAQ";
import FaqItems from "./FaqItems";

function App() {
  let [currentId, setCurrentId] = useState(questions[0].id);

  let items = questions.map((itemsData, i) => {
    let itemDetails = {
      itemsData,
      currentId,
      setCurrentId,
    };

    return <FaqItems itemDetails={itemDetails} key={i} />;
  });

  return (
    <>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter">{items}</div>
    </>
  );
}

export default App;
