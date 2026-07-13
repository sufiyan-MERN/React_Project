import { logoURL } from "../utils/constants";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoURL} />
        <h4>@2026 Marvel Limited</h4>
      </div>
      <div className="page-links">
        <h4>Company:</h4>
        <ul>
          <li>About Us</li>
          <li>Home</li>
          <li>Help</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="social-links">
        <h4>Social Media:</h4>

        <p>Instagram</p>
        <p>Facebook</p>
        <p>Whatsapp</p>
      </div>
    </div>
  );
}

export default Footer;
