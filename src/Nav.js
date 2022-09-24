import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">ABout Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}
