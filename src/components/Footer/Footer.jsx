import"./Footer.css";


function Footer ({companyName, setCompanyName}) {
     return ( 
          <footer className="footer">
               <h1 className="footer__title">
                    {companyName}
               </h1>
               <button
               onClick={() => {
          setCompanyName("En terminos de compañia no tenemos compañía")
        }}>
               Click me
               </button>
          </footer>
      );
}

export default Footer ;