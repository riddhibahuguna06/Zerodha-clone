import { holdings } from "../data/data";

function Summary(){
    const invested = holdings.reduce((total, stock) => total + stock.avg * stock.qty, 0);
    const current = holdings.reduce((total, stock) => total + stock.price * stock.qty, 0);
    const returns = current - invested;
    const formatCurrency = (value) => `₹ ${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return (
        <section className="summary-page">
            <div className="summary-heading">
                <div>
                    <p className="eyebrow">ACCOUNT OVERVIEW</p>
                    <h1>Good morning</h1>
                    <p className="summary-subtitle">Here’s how your investments are doing today.</p>
                </div>
                <span className="market-status"><i /> Market open</span>
            </div>
            <div className="summary-cards">
                <article className="summary-card">
                    <span className="card-label">Equity investment</span>
                    <strong>{formatCurrency(invested)}</strong>
                    <span className="card-note">Across {holdings.length} holdings</span>
                </article>
                <article className="summary-card">
                    <span className="card-label">Current value</span>
                    <strong>{formatCurrency(current)}</strong>
                    <span className="card-note">Sample portfolio value</span>
                </article>
                <article className="summary-card summary-card-positive">
                    <span className="card-label">Total returns</span>
                    <strong>{returns >= 0 ? "+" : "−"}{formatCurrency(Math.abs(returns))}</strong>
                    <span className="card-note">{invested ? `${((returns / invested) * 100).toFixed(2)}%` : "0.00%"} overall</span>
                </article>
            </div>
            <div className="summary-lower">
                <article className="summary-panel">
                    <div className="panel-heading"><h2>Portfolio performance</h2><span>Preview</span></div>
                    <div className="performance-placeholder">
                        <div className="chart-grid"><i /><i /><i /><i /></div>
                        <svg viewBox="0 0 700 180" role="img" aria-label="Illustrative portfolio performance line">
                            <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#387ed1" stopOpacity=".16"/><stop offset="100%" stopColor="#387ed1" stopOpacity="0"/></linearGradient></defs>
                            <path d="M0 145 C55 128 60 150 112 115 S190 127 235 92 S300 105 352 75 S420 105 468 54 S530 82 578 40 S650 55 700 18 L700 180 L0 180Z" fill="url(#chartFill)" />
                            <path d="M0 145 C55 128 60 150 112 115 S190 127 235 92 S300 105 352 75 S420 105 468 54 S530 82 578 40 S650 55 700 18" fill="none" stroke="#387ed1" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <div className="chart-labels"><span>09:15</span><span>11:00</span><span>13:00</span><span>15:30</span></div>
                    </div>
                </article>
                <article className="summary-panel market-panel">
                    <div className="panel-heading"><h2>Market watch</h2><span>Sample</span></div>
                    <div className="market-row"><span>NIFTY 50</span><strong>100.20</strong><em className="up">+0.42%</em></div>
                    <div className="market-row"><span>SENSEX</span><strong>100.20</strong><em className="up">+0.31%</em></div>
                    <p className="market-caption">Sample values for layout preview.</p>
                </article>
            </div>
        </section>
    )
}

export default Summary;
