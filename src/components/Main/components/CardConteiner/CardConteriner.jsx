import Card from "./Card/Card.jsx";
import "./CardConteiner.css";

const CardContainer = (props) => {
  const { cards, _handleUpdateCard, _handleDeleteCard } = props;

  console.log("Dentro de card");
  console.log(cards);
  
  return ( 
    <div className="cardContainer">
      <ul className="card-container__list">
        {cards.map((card, index) => (
          <Card key={index} card={card} _handleDeleteCard={_handleDeleteCard} _handleUpdateCard={_handleUpdateCard}/>
        ))}
      </ul>
    </div>
  );
}

export default CardContainer;