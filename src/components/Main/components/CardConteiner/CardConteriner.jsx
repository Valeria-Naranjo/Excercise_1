import Card from "../Card/Card.jsx";
import "./CardConteriner.css";


const cardContainer = (props)  => {
     const {cards} = props;

     console.log("Dentro de card");
     console.log(cards);
     return ( 
          <div className="cardContainer">
               <ul className="card-container__list">
                    {cards.map}
                    <Card></Card>
               </ul>
          </div>
     );
}

export default cardContainer;