import { NavLink } from "react-router-dom";
function Menu(){
    const links = [
        ["Dashboard", "/"],
        ["Orders", "/orders"],
        ["Holdings", "/holdings"],
        ["Positions", "/positions"],
        ["Funds", "/funds"],
        ["Apps", "/apps"],
    ];
    return(
        <div className="menu-container">
            <img className="brand-logo" src="/logo.png" alt="Zerodha" />
            <nav className="menu-nav" aria-label="Main navigation">
                <ul>
                    {links.map(([label, to]) => (
                        <li key={to}>
                            <NavLink to={to} end={to === "/"}>{label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="profile" aria-label="Signed in as User">
                <span className="avatar">U</span>
                <span className="username">USER</span>
            </div>
        </div>
    )
}
export default Menu ;
