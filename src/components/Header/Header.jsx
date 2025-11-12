
import './Header.css';
function Header () {

     
     return ( 
     <> {/* Lineas de anclaje*/}
          {/* <h1 className="header"> unicamente en react se encuentran los ClassName*/}
         <header className="header">
          <img
          alt="Magical Mexico Logo"
          className="header__logo"
          src="./images/logo-mexico.jpeg"
          />
           <h1  className='header__title'>This is my lil fullstack project</h1> 
          </header>
    </>
      );
}

export default Header;