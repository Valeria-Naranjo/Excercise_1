import "./Section.css"
function Section ({children}) {
     return ( 
    <>
    
     <div className="children">
            {children}
             <p>este componente tendrá un children</p>
     </div>
    </>
     );
}

export default Section ;