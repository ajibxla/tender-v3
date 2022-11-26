import React from "react";
import twitter from "../Images/twitter.png";
import instagram from "../Images/ig.png";
import telegram from "../Images/Frame.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>
          <a href="mailto:info@tender.credit">info@tender.credit</a>
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/tendercredit?s=21&t=WO4huG7bZcKHSFc_SGoF2w"
            target="_blank"
          >
            <img src={twitter} alt="" />
          </a>
          <a
            href="https://instagram.com/tendercredit?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <img src={instagram} alt="" />
          </a>
          <a href="https://t.me/+I8K9wjIWP_w2ZWVk" target="_blank">
            <img src={telegram} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
