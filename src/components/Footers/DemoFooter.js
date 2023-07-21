/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

import './style.css'

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white test">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              Edited by Khanh, Pham Quang
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
