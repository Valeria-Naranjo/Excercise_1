
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

  return (
    
    <AppContext.Provider value={{cards, setCards}} >
      
    <div className="app">
      <div className="app__wraper">
        <Header />
        <Main cards = {cards}/>
      </div>
    </div>
    
    </AppContext.Provider>
  );
}

export default App;