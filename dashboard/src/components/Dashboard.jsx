import {Routes , Route} from "react-router-dom";
import WatchList from "./WatchList" ;
import Summary from "./Summary" ;
import Positions from "./Positions";
import Orders from "./Orders";
import App from "./App" ;
import Funds from "./Funds"
import Holdings from "./Holdings";

function Dashboard(){
    return(
       <div className="dashboard-container">
        <WatchList/>
        <div className="content">
            <Routes>
            <Route exact path="/" element={<Summary/>} />
             <Route exact path="/orders" element={<Orders/>} />
              <Route exact path="/holdings" element={<Holdings/>} />
               <Route exact path="/positions" element={<Positions/>} />
                <Route exact path="/funds" element={<Funds/>} />
                 <Route exact path="/apps" element={<App/>} />

                  </Routes>
        </div>
       </div>
    )
}

export default Dashboard;