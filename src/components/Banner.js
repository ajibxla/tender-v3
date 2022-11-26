import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
import bannerImage from "../Images/banner image.jpg";
import WindowResize from "./WindowResize";

function Banner() {
  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;
  return (
    <section className="banner" id="banner">
      <Nav />

      <div
        className={
          windowSize > 991 ? "banner-container banner-flex" : "banner-container"
        }
      >
        <div className="banner-content">
          <div className="banner-text">
            <p className="banner-heading">
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                Lend and borrow on your own terms
              </motion.div>
            </p>
            <p className="banner-paragraph">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 2 }}
              >
                We connect verified borrowers who need short-term loans with
                lenders who are looking to make extra income.
              </motion.div>
            </p>
          </div>
          <div className="form-container">
            <motion.form
              action=""
              id="form"
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ delay: 2, duration: 2 }}
            >
              <input type="email" placeholder="Your email..." />
              <button type="submit">Get early access</button>
            </motion.form>
          </div>
        </div>
        <div className="banner-image-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3, duration: 2 }}
            className="image-container"
          >
            <img src={bannerImage} alt="" />

            <div class="marquee-container">
              <div class="marquee">
                <span className="scroll-text amount ">Decide the amount</span>
                <span className="scroll-text interest ">
                  Decide the interest rate
                </span>
                <span className="scroll-text duration ">
                  Decide the duration
                </span>
                <span className="scroll-text amount ">Decide the amount</span>
                <span className="scroll-text interest ">
                  Decide the interest rate
                </span>
                <span className="scroll-text duration ">
                  Decide the duration
                </span>
                <span className="scroll-text amount ">Decide the amount</span>
                <span className="scroll-text interest ">
                  Decide the interest rate
                </span>
                <span className="scroll-text duration ">
                  Decide the duration
                </span>
                <span className="scroll-text amount ">Decide the amount</span>
                <span className="scroll-text interest ">
                  Decide the interest rate
                </span>
                <span className="scroll-text duration ">
                  Decide the duration
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
