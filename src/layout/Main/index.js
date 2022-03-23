import { Link, Outlet } from "react-router-dom";
import "./main.css"

const Main =()=>{
    return(
        <div className="container">
            <nav className="navbar">
                <div className="nav">
                    <h3>LOGO</h3>
                    <ul className="ul-nav">
                        <li className="li-nav">
                            <Link to='/' className="btn">Pokemon</Link>
                        </li>
                        <li className="li-nav">
                            <Link to='/flags' className="btn">Banderas</Link>
                        </li>
                        <li className="li-nav">
                            <Link to='/youtube' className="btn">Youtube</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Main;