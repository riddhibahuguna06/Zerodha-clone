import Menu from "./Menu"

function TouchBar(){
    return(
        <div className="top-container">
          <div className="indices-containter">
            <div className="nifty">
                <p className="index">NIFTY 50</p>
                <p className="index-points">{100.2}</p>
                <p className="percent"></p>
            </div>
            <div className="sensex">
                <p className="index">SENSEX</p>
                <p className="index-points">{100.2}</p>
                <p className="percent"></p>
            </div>
          </div>
          <Menu/>
        </div>
    )
}
export default TouchBar;
