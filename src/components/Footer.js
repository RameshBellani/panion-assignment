import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="fotter">
        <div className="container-buttons">
          <button className="buttons">
            Currency: <span className="span-element">INR</span>
          </button>
          <button className="buttons">
            Inv Basic Amount: <span className="span-element">15000</span>
          </button>
          <button className="buttons">
            Basic Tax Amount: <span className="span-element">1000</span>
          </button>
          <button className="buttons">
            Inv Total Amount: <span className="span-element">1600</span>
          </button>
          <button className="buttons">
            Net Payable Amount: <span className="span-element">10000</span>
          </button>
          <button className="buttons">
            TDS Amount: <span className="span-element">1900</span>
          </button>
        </div>
        <div>
          <button className="button">Reject</button>
          <button className="button">Aprove</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
