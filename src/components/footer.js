import React from "react";
import "../styles/footer.scss";

import { Link } from "react-router-dom";

export default () => (
  <footer className="footer">
    <p className="footer--copyright">
      © Isophex LLC 2019. All rights reserved. See
      <Link to="/privacy"> our privacy policy </Link>
      for more details.
    </p>
  </footer>
);
