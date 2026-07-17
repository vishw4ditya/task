import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-links">

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Terms & Policies</h4>
            <ul>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Return Policy</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">LinkedIn</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Dribbble</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>hello@elementum.tech</li>
              <li>+123 456 7890</li>
              <li>123 Street, City</li>
              <li>Country 123456</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elementum. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;