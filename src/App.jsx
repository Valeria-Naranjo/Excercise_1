import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { AppContext } from "./components/AppContext/AppContext";
import "./App.css"
import { useState } from "react";

function App() {
 
  const [companyName, setCompanyName] = useState ("Rowan Networks");
  const [CopyRigth, setCopyRight] = useState ("Derechos reservados UTLD");

  return (
    <AppContext.Provider value={{CopyRigth, setCopyRight}}>
    <>
      <Header companyName={companyName}/>
      <Main/>
      
      <Footer  companyName={companyName} setCompanyName = {setCompanyName}/>
    </>
    </AppContext.Provider>
  );
}

export default App;