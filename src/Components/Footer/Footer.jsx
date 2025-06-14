import React from "react";
import "./Footer.css";
import darklogo from "../../Assets/logodark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <section id="footer">
      <div className="footerMainContainer">
        {/* Footer Section 1 */}

        <div className="footer_col">
          <div className="col_image_container">
            <img src={darklogo} alt="logo" />
          </div>
          <p>
            Dive into interesting tales, thoughtful opinions, and news that's
            hot off the press. Stick with us for updates that matter and stories
            you won't want to miss!
          </p>
        </div>

        {/* footer Section 2 */}

        <div className="footer_col">
          <h3>Trending News</h3>
          <div className="footer_col_items">
            <ul>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/breakingNews" onClick={scrollToTop}>
                  Breaking News
                </Link>
              </li>
              <li>
                <Link to="/technology" onClick={scrollToTop}>
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* footer section 3 */}

        <div className="footer_col">
          <h3>News</h3>
          <div className="footer_col_items">
            <ul>
              <li>
                <Link to="/sports" onClick={scrollToTop}>
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/entertainment" onClick={scrollToTop}>
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/world" onClick={scrollToTop}>
                  World
                </Link>
              </li>
              <li>
                <Link to="/business" onClick={scrollToTop}>
                  Business
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* footer section 4 */}

        <div className="footer_col">
        </div>
      </div>
      <div className="copyright_section">
        <p>
          Copyright&copy; {getCurrentYear()} All rights reserved | Design
          by&nbsp;
          <a href="https://github.com/DeepuGagan">DeepuGagan</a>&nbsp;with
          ❤️
        </p>
      </div>
    </section>
  );
};

export default Footer;
