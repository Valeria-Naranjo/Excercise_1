import { useContext } from "react";
import {AppContext} from "../../../AppContext/AppContext";  

function CopyRight() {
     const { CopyRight } = useContext(AppContext);
     return (  
          <>
          <p>{CopyRight}</p>
          </>
     );
}

export default CopyRight;