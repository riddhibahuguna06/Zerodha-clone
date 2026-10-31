
import Logo from "./assets/logo.svg";

function Footer(){
    return(
     <footer id="footer" className="container py-5" style={{backgroundColor : "#fafafa"}}>
        <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
                <img src={Logo} alt="Zerodha" className="img-fluid" style={{ maxWidth: 180 }} />
            </div>
            <div className="col-12 col-sm-6 col-lg">
               <h2 style={{ fontSize: 18, fontWeight: 600 }}>Account</h2>
                <a className="d-block" href="">Open demat account</a>
                <a className="d-block" href="">Minor demat account</a>
                <a className="d-block" href="">NRI demat account</a>
                <a className="d-block" href="">HUF demat account</a>
                <a className="d-block" href="">Commodity</a>
                <a className="d-block" href="">Dematerialisation</a>
                <a className="d-block" href="">Fund transfer</a>
                <a className="d-block" href="">MTF</a>
            </div>
            <div className="col-12 col-sm-6 col-lg">
                <h2 style={{ fontSize: 18, fontWeight: 600 }}>Support</h2>
                <a className="d-block" href="">Contact us</a>
                <a className="d-block" href="">Support portal</a>
                <a className="d-block" href="">How to file a complaint?</a>
                <a className="d-block" href="">Status of your complaints</a>
                <a className="d-block" href="">Bulletin</a>
                <a className="d-block" href="">Circular</a>
                <a className="d-block" href="">Z-Connect blog</a>
                <a className="d-block" href="">Downloads</a>
            </div>
            <div className="col-12 col-sm-6 col-lg">
                <h2 style={{ fontSize: 18, fontWeight: 600 }}>Company</h2>
                <a className="d-block" href="">About</a>
                <a className="d-block" href="">Philosophy</a>
                <a className="d-block" href="">Press & media</a>
                <a className="d-block" href="">Careers</a>
                <a className="d-block" href="">Zerodha Cares (CSR)</a>
                <a className="d-block" href="">Zerodha.tech</a>
                <a className="d-block" href="">Open source</a>
                <a className="d-block" href="">MTF</a>

            </div>
            <div className="col-12 col-sm-6 col-lg">
                <h2 style={{ fontSize: 18, fontWeight: 600 }}>Quick Links</h2>
                <a className="d-block" href="">Upcoming IPOs</a>
                <a className="d-block" href="">Brokerage charges</a>
                <a className="d-block" href="">Market holidays</a>
                <a className="d-block" href="">Economic calendar</a>
                <a className="d-block" href="">Calculators</a>
                <a className="d-block" href="">Markets</a>
                <a className="d-block" href="">Sectors</a>
                <a className="d-block" href="">Gift Nifty</a>
            </div>
        </div>

        <div className="row mt-4">
        <div className="col-12" style={{ fontSize: 12, color: "#888" }}>
        <p>Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Limited – SEBI Registration no.: IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances</p>

        <p>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

        <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
        </div>
        </div>
     </footer>
    )
}
export default Footer;