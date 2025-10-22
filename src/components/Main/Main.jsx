import "./Main.css";
import Section from "./components/Section/Section";
import Row from "./components/Row/Row";
import Botonazo from "./components/botonazo/Botonazo"

function Main() {
  return (
    <>
      <main>
        <p>Estamos dentro del componente Main</p>
        <Section>
          <Row />
        </Section>
      </main>
     
    </>
  );
}

export default Main;