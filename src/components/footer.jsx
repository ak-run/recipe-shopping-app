import React from "react";
import "./Components.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Get in touch</h3>
      <div className="footer-info">
        <p>
          📧 <strong>Email:</strong> Email@email.com
        </p>
        <p>
          📞 <strong>Phone:</strong> 0000 000 000
        </p>
        <p>
          <strong>
            Coded by <a href="https://github.com/ak-run" target="_blank">Agata</a>,{" "}
            <a href="https://github.com/efhewett" target="_blank" >Ellen</a> and{" "}
            <a href="https://github.com/natlmartin" target="_blank" >Natalie</a>.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
