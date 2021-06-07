import React from "react";

function Footer() {
     const a = new Date();
  return (
    

    <div>
      <footer>
          <p> Copyright @ {a.getFullYear()}</p>
      </footer>
    </div>
  );
}
export default Footer;