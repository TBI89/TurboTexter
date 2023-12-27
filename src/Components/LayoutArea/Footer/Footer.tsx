import "./Footer.css";

function Footer(): JSX.Element {

    const now = new Date();
    const currentYear = now.getFullYear();
    return (
        <div className="Footer">
            <hr />
            Copyright © {currentYear} Tomer Ben Israel, All rights reserved
        </div>
    );
}

export default Footer;
