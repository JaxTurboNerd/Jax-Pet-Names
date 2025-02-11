import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import '../styles/footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <section className='contact'>
        <p>Contact:</p>
        <a href='mailto:petswithoutnames@gmail.com'>
          petswithoutnames@gmail.com
        </a>
      </section>
      <section className='legal'>
        <p>
          <FontAwesomeIcon icon={faCopyright} />
          {` ${year} Pets Without Names`}
        </p>
      </section>
      <section className='links'>
        {/* <p>external links</p> */}
        <a target='#' href='https://www.humanesociety.org'>
          Humane Society
        </a>
      </section>
    </footer>
  );
}

export default Footer;
