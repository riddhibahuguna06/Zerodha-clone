import Menu from "./Menu"

function TouchBar(){
    return(
        <header className="top-container">
          <div className="indices-containter" aria-label="Market indices">
            <div className="nifty">
                <p className="index">NIFTY 50</p>
                <p className="index-points up">{100.20}</p>
                <p className="percent">+0.42%</p>
            </div>
            <div className="sensex">
                <p className="index">SENSEX</p>
                <p className="index-points up">{100.20}</p>
                <p className="percent">+0.31%</p>
            </div>
          </div>
          <Menu/>
        </header>
    )
}
export default TouchBar;
