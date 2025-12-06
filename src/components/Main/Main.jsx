import { Children } from "react";
import "./Main.css";
import Traveler from "./components/Traveler/Traveler.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Card from "./components/Card/Card.jsx";
import CardContainer from "./components/CardConteiner/CardConteriner.jsx"

const Main = (props)  => {
  const {cards} = props;
  return (
    <>
      <main className="main">
        <section className="gallery">
          <Profile></Profile>
        </section>
        <section className="user">
          <CardContainer cards={cards}>

          </CardContainer>
        </section>
      </main>
     
    </>
  );
}

export default Main;