import React from "react";

const Footer = () => {
    const authorName = "Patricia Tirado";
    const year = "2025";

    return (
        <footer className="footer">
            <div className="footer__left">
                <span className="footer__name">{authorName}</span>
            </div>
            
            <div className="footer__right">
                <span className="footer__year">{year}</span>
            </div>
        </footer>
    );
};

export default Footer;