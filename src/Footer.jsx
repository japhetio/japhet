 import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-grid">
        <section>
          <h5>Contact</h5>
          <ul>
            <li><a href="japhet@gmail.com">Email Me</a></li>
            <li><a href="tel:+1234567890">Call</a></li>
            <li><a href="/contact">Reach Out</a></li>
          </ul>
        </section>
        <section>
          <h5>Community</h5>
          <ul>
            <li><a href="https://github.com/">GitHub</a></li>
            <li><a href="https://twitter.com/">X (Twitter)</a></li>
            <li><a href="https://discord.com/">Discord</a></li>
          </ul>
        </section>
        <section>
          <h5>Society</h5>
          <ul>
            <li><a href="#">Meetups</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Discussions</a></li>
          </ul>
        </section>
        <section>
          <h5>Company</h5>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Honor Portfolio. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;