import { Children } from "react";
import "./Main.css";
import Profile from "./components/Profile/Profile.jsx";
import CardContainer from "./components/CardConteiner/CardConteriner.jsx"

const Main = (props)  => {
  const {cards, _handleDeleteCard, _handleUpdateCard } = props;
  return (
    <>
      <main className="main">
        <section className="gallery">
          <Profile></Profile>
        </section>
        <section className="user">
          <CardContainer cards={cards}
          _handleDeleteCard={_handleDeleteCard}
          _handleUpdateCard={_handleUpdateCard}>

          </CardContainer>
        </section>
      </main>
     
    </>
  );
}

export default Main;