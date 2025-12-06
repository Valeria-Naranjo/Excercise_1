import "./Card.css";
const Card = (props) => {
  const {card}= props;
     return(
      <li class="place-card">
        <img class="place-card__image" src={card.link} alt={card.name} />
        <button
          aria-label="Remove place"
          class="place-card__delete-button"
          type="button"
        ></button>
        <div class="place-card__description">
          <h2 class="place-card__title">{card.name}</h2>
          <button
            aria-label="Like place"
            class="place-card__like-button"
            type="button"
          ></button>
        </div>
      </li>
     );
};

export default Card;