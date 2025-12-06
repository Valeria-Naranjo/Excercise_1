import "./Card.css";
const Card = (props) => {
  const {card, _handleUpdateCard, _handleDeleteCard}= props;
     return(
      <li className="place-card">
        <img className="place-card__image" src={card.link} alt={card.name} />
        <button
          aria-label="Remove place"
          className="card__delete-button"
          type="button"
          onClick={() => {
            console.log(card + "has been deleted");
            _handleDeleteCard(card);
          }}
        ></button>
        <div className="place-card__description">
          <h2 className="place-card__title">{card.name}</h2>
          <button
            aria-label="Like place"
            className={
              card.like
                ? "card__like-button"
                : "card__like-button card__like-button_is-active"
            }
            type="button"
            onClick={() => {
              _handleUpdateCard(card);
            }}
          ></button>
        </div>
      </li>
    
     );
};

export default Card;