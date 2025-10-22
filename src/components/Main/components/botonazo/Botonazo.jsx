import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

function Botonazo() {
  const { setCopyRight } = useContext(AppContext);

  return (
    <button
      onClick={() => {
        setCopyRight("Ya no hay copyright");
      }}
    >
      Click me
    </button>
  );
}

export default Botonazo;
