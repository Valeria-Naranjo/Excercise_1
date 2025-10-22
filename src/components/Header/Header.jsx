
import './Header.css';
function Header ({companyName}) {

     
     return ( 
     <> {/* Lineas de anclaje*/}
          {/* <h1 className="header"> unicamente en react se encuentran los ClassName*/}
         <header className="header">
           <h1>{companyName}</h1> 
          </header>
    </>
      );
}

export default Header;