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
            Coded by <a href="https://github.com/ak-run">Agata</a>,{" "}
            <a href="https://github.com/efhewett">Ellen</a> and{" "}
            <a href="https://github.com/natlmartin">Natalie</a>.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
