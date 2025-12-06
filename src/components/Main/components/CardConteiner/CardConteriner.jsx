import Card from "./Card/Card.jsx";
import "./CardConteiner.css";

const CardContainer = (props) => {
  const { cards } = props;

  console.log("Dentro de card");
  console.log(cards);
  
  return ( 
    <div className="cardContainer">
      <ul className="card-container__list">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default CardContainer;