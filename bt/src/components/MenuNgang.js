import react from "react";
import { Link } from "react-router-dom";



export const MenuNgang = () =>{
    return(
        <div>
            <Link to="/about" className = "menuitem" >About</Link>
            <Link to="/" className = "menuitem" >Home</Link>
            
            {/* {routes.map((item) => (
                <Link to={item.path} className="menuItem">{item.label}</Link>
            ))} */}
        </div>
    )
};