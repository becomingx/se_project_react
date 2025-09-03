import React from "react";
import "../blocks/Footer.css";

const Footer = () => {
  const authorName = "Patricia Tirado";
  const year = "2025";

  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__name">{authorName}</p>
      </div>

      <div className="footer__right">
        <p className="footer__year">{year}</p>
      </div>
    </footer>
  );
};

export default Footer;
