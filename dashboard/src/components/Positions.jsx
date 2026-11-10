import { positions } from "../data/data";
function Positions(){
    return(
        <>
        <h3 className="title">Positions ({positions.length})</h3>

        <div className="order-table">
       <table>
        <thead><tr>
            <th>Product</th>
             <th>Instruments</th>
              <th>Qty.</th>
               <th>P&L</th>
                <th>LTP</th>
                <th>Chg.</th>
        </tr></thead>

        <tbody>
        {positions.map((stock , index) => {
                        const pnl = (stock.price - stock.avg) * stock.qty;
                        const profClass = pnl >= 0 ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";
        
                        return(
                     <tr key={index} className="item">
                        <td>{stock.product}</td>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td className={profClass}>{pnl.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td className={dayClass}>{stock.day}</td>
                    </tr>
         
                        )
                    })}
        </tbody>
       </table>
        </div>
        </>
    )
}

export default Positions;
