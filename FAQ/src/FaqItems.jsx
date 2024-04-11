import "./App.css";

function FaqItems({ itemDetails }) {
  const { itemsData, currentId, setCurrentId } = itemDetails;

  return (
    <div className="faqItems">
      <h2 onClick={() => setCurrentId(itemsData.id)}>{itemsData.Question}</h2>
      <p className={currentId === itemsData.id ? "activeAns" : ""}>
        {itemsData.Answer}
      </p>
    </div>
  );
}

export default FaqItems;
