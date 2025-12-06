
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { AppContext } from "./components/AppContext/AppContext";
import "./App.css"
import api from "./components/dataProvider/Api.js"; 
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState ([]); // состояние для хранения карточек
  console.log("componenteeeeeeeeeeeee");

 useEffect(() => {
  async function loadCards() {
    try {
      const data = await api.getCards();
      setCards(data);
    } catch (err) {
      console.error("Failed to fetch cards: " + err);
    }
  }

  loadCards();
}, []); // пустой массив зависимостей, чтобы эффект выполнился только один раз при монтировании компонента  


  async function _handleDeleteCard(card) {
    await api.deleteCard(card._id).then(() => {
      const newArray = cards.filter((currentCard) => currentCard._id !== card._id);
      setCards(newArray);
    })
    .catch((error) => console.error(error));
  }

  async function _handleUpdateCard(card) {
      const likeinvertido = !card.like;
      console.log(likeinvertido);
      await api.updateCard(card._id, likeinvertido).then(() => {
        const temp = {...card, like: likeinvertido};

        setCards ((prev) => { return prev.map((element) => {
          return element._id === temp._id ? temp : element;
        });
      });
    })
    .catch((error) => console.error(error));
       console.log(cards);
  }


  return (
    
    <AppContext.Provider value={{cards, setCards}} >
      
    <div className="app">
      <div className="app__wraper">
        <Header />
        <Main cards = {cards} _handleDeleteCard={_handleDeleteCard} _handleUpdateCard={_handleUpdateCard}/>
      </div>
    </div>
    
    </AppContext.Provider>
  );
}

export default App;