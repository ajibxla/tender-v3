import React, { useState } from "react";
import NavLinksData from "./NavLinksData";
import WindowResize from "./WindowResize";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";

function Nav() {
  const [mobileNavLinks, setMobileNavLinks] = useState(false);

  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;
  const variants = {
    open: { x: 0 },
    close: { x: "-100vw" },
  };

  const handleMobileNavLinks = () => {
    setMobileNavLinks(false);
  };

  const handleHamburger = () => {
    setMobileNavLinks(true);
  };

  return (
    <nav id="nav">
      <div className="nav-holder">
        <div
          className={
            windowSize > 991 ? "nav-container flex-container" : "nav-container"
          }
        >
          <div className="logo--hamburger">
            <div className="logo">
              <svg
                width="167"
                height="54"
                viewBox="0 0 167 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 54C41.912 54 54 41.912 54 27C54 12.0883 41.912 0 27 0C12.0883 0 0 12.0883 0 27C0 41.912 12.0883 54 27 54Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44 26.5C44 36.1648 36.3887 44 27 44C17.6111 44 10 36.1648 10 26.5C10 16.835 17.6111 9 27 9C36.3887 9 44 16.835 44 26.5ZM41.41 32.2359C39.1753 38.1825 33.566 42.4003 27 42.4003C18.4696 42.4003 11.5543 35.2809 11.5543 26.5C11.5543 25.136 11.7211 23.812 12.035 22.5485L17.7776 26.0936C18.3297 26.4344 18.5089 27.1712 18.1779 27.7396L17.0335 29.7042C16.5719 30.4962 17.1166 31.5057 18.0139 31.5215L27.061 31.6759C27.9582 31.691 28.5353 30.7007 28.0993 29.8929L23.7057 21.7504C23.2701 20.9428 22.1483 20.9237 21.6871 21.7159L20.5425 23.6804C20.2115 24.2488 19.4955 24.4332 18.9433 24.0924L12.7782 20.2865C15.1285 14.5928 20.6113 10.6 27 10.6C35.53 10.6 42.446 17.7187 42.446 26.5C42.446 27.694 42.318 28.8572 42.0753 29.976L36.0007 26.2264C35.4487 25.8856 35.2693 25.1488 35.6 24.5804L36.7447 22.6157C37.206 21.8234 36.6613 20.814 35.764 20.7988L26.7167 20.645C25.8195 20.6297 25.2429 21.6201 25.6785 22.4276L30.0727 30.5703C30.5087 31.3774 31.63 31.3966 32.092 30.6046L33.236 28.64C33.5667 28.0712 34.2827 27.8868 34.8353 28.2276L41.1253 32.1103C41.2167 32.1666 41.3127 32.2077 41.41 32.2359Z"
                  fill="white"
                />
                <path
                  d="M65.776 34.232C65.776 37.688 67.504 39.256 71.184 39.256C72.304 39.256 73.36 39.096 74.352 38.808V35.512C73.616 35.672 72.816 35.768 72.016 35.768C70.352 35.768 69.68 35.224 69.68 33.72V26.136H74.288V22.712H69.68V17.912H65.776V22.712H62.704V26.136H65.776V34.232ZM92.7228 32.024C92.7868 31.512 92.8188 31 92.8188 30.52C92.8188 25.56 89.5868 22.264 84.8828 22.264C79.9868 22.264 76.6268 25.88 76.6268 30.936C76.6268 36.024 80.0828 39.448 85.2668 39.448C88.2428 39.448 90.7388 38.328 92.2748 36.312L89.9388 34.008C88.7548 35.384 87.2508 36.056 85.3948 36.056C82.7068 36.056 81.0108 34.616 80.5948 32.024H92.7228ZM80.5948 29.368C81.0108 27.032 82.5148 25.656 84.9148 25.656C87.2508 25.656 88.7548 26.968 88.9148 29.368H80.5948ZM111.436 28.44C111.436 24.504 109.324 22.264 105.772 22.264C103.308 22.264 101.324 23.384 100.428 25.208V22.712H96.5883V39H100.492V29.656C100.492 27.256 102.028 25.848 104.428 25.848C106.572 25.848 107.532 26.968 107.532 29.432V39H111.436V28.44ZM128.119 15.576V25.208C127.127 23.384 125.047 22.264 122.615 22.264C118.295 22.264 115.127 25.816 115.127 30.872C115.127 35.896 118.295 39.448 122.615 39.448C125.079 39.448 127.255 38.328 128.183 36.408V39H132.023V15.576H128.119ZM128.279 30.872C128.279 33.848 126.487 35.896 123.703 35.896C120.919 35.896 119.127 33.848 119.127 30.872C119.127 27.832 120.919 25.816 123.703 25.816C126.487 25.816 128.279 27.832 128.279 30.872ZM151.973 32.024C152.037 31.512 152.069 31 152.069 30.52C152.069 25.56 148.837 22.264 144.133 22.264C139.237 22.264 135.877 25.88 135.877 30.936C135.877 36.024 139.333 39.448 144.517 39.448C147.493 39.448 149.989 38.328 151.525 36.312L149.189 34.008C148.005 35.384 146.501 36.056 144.645 36.056C141.957 36.056 140.261 34.616 139.845 32.024H151.973ZM139.845 29.368C140.261 27.032 141.765 25.656 144.165 25.656C146.501 25.656 148.005 26.968 148.165 29.368H139.845ZM165.886 22.648C165.47 22.488 164.99 22.424 164.478 22.424C162.27 22.424 160.478 23.544 159.678 25.432V22.712H155.838V39H159.742V30.968C159.742 27.64 161.182 26.136 164.094 26.136C164.606 26.136 165.214 26.2 165.886 26.296V22.648Z"
                  fill="black"
                />
              </svg>
            </div>

            {windowSize > 991 ? (
              ""
            ) : (
              <div className="hamburger" onClick={handleHamburger}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </div>
            )}
          </div>

          <div className="navlinks">
            {windowSize > 991 ? (
              <ul className="navlinks-container">
                {NavLinksData.map((link) => {
                  return (
                    <li className="navlink">
                      <a href={link.address}>{link.name}</a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <>
                {mobileNavLinks && (
                  <motion.div
                    className="mobile-nav"
                    initial={{ x: "-100vw" }}
                    animate={mobileNavLinks ? "open" : "close"}
                    exit={{
                      x: "-100vw",
                      transition: { delay: 0.7, duration: 1 },
                    }}
                    variants={variants}
                    transition={{ type: "spring", stiffness: 50 }}
                  >
                    <div className="mobile-nav-inner">
                      <ul className="navlinks-container">
                        {NavLinksData.map((link) => {
                          return (
                            <li className="navlink">
                              <a href={link.address}>{link.name}</a>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="close-btn" onClick={handleMobileNavLinks}>
                        <VscClose
                          size={30}
                          style={{ color: "rgba(0, 0, 0, 0.75)" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
