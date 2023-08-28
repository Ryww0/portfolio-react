import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header({ toggleAbout, aboutIsActive }) {
  return (
    <nav className={aboutIsActive ? "active" : undefined}>
      <div className="navLogo">
        <Link to="/">
          <motion.svg
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.15 }}
            className={aboutIsActive ? "active" : undefined}
            width="175"
            height="88"
            viewBox="0 0 175 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3_109)">
              <path
                d="M0.343941 86.1042C44.6258 52.9157 27.9894 -8.26276 90.6479 0.930011C90.8113 0.95406 90.9641 1.0253 91.0877 1.13502C91.2113 1.24474 91.3003 1.38818 91.3438 1.54781C91.3874 1.70744 91.3836 1.87634 91.333 2.03386C91.2823 2.19137 91.187 2.33068 91.0586 2.43474C46.502 38.4697 64.7693 92.9703 0.779757 87.6356C0.607561 87.6218 0.443688 87.5555 0.310065 87.4458C0.176442 87.336 0.0794438 87.188 0.03205 87.0214C-0.0153439 86.8549 -0.0108725 86.6778 0.0448657 86.5139C0.100604 86.35 0.20495 86.207 0.343941 86.1042Z"
                fill="currentColor"
              />
              <path
                d="M42.7278 86.1043C87.0096 52.9158 70.3733 -8.26268 133.033 0.930087C133.197 0.953905 133.35 1.02498 133.473 1.1346C133.597 1.24423 133.686 1.38765 133.73 1.54732C133.774 1.70699 133.77 1.87598 133.72 2.0336C133.669 2.19123 133.574 2.33066 133.445 2.43482C88.8888 38.4698 107.149 92.9704 43.1621 87.6357C42.9905 87.6208 42.8274 87.554 42.6945 87.444C42.5616 87.3341 42.4652 87.1863 42.4181 87.0201C42.371 86.854 42.3754 86.6774 42.4307 86.5139C42.486 86.3503 42.5896 86.2075 42.7278 86.1043Z"
                fill="currentColor"
              />
              <path
                d="M83.9691 86.1043C128.251 52.9158 111.615 -8.26268 174.273 0.930087C174.436 0.954137 174.589 1.02538 174.713 1.13509C174.836 1.24481 174.925 1.38826 174.969 1.54789C175.013 1.70752 175.009 1.87642 174.958 2.03393C174.908 2.19145 174.812 2.33075 174.684 2.43482C130.127 38.4698 148.387 92.9704 84.4005 87.6357C84.2287 87.621 84.0654 87.5542 83.9324 87.4442C83.7994 87.3341 83.7031 87.186 83.6562 87.0196C83.6093 86.8533 83.6142 86.6765 83.6701 86.513C83.726 86.3494 83.8303 86.2068 83.9691 86.1043Z"
                fill="currentColor"
              />
              <path
                d="M44.8787 0.244376C-14.6759 -2.61106 14.1204 19.7525 16.1902 55.2085C16.2449 56.1386 17.5434 56.3074 17.8448 55.4262C29.8113 20.5094 35.6542 9.44011 45.3603 1.76836C45.497 1.66121 45.5977 1.51475 45.649 1.3486C45.7003 1.18244 45.6997 1.00454 45.6473 0.838737C45.5949 0.672931 45.4932 0.527144 45.3558 0.420913C45.2184 0.314682 45.052 0.253084 44.8787 0.244376Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_109">
                <rect width="175" height="88" fill="white" />
              </clipPath>
            </defs>
          </motion.svg>
        </Link>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.15, delay: 0.5 }}
        >
          Développeur web
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.15, delay: 0.5 }}
        >
          Lyon, France
        </motion.p>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="navItems">
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.15, delay: 1 }}
          onClick={() => toggleAbout()}
        >
          .about
        </motion.li>
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.15, delay: 1.2 }}
        >
          <a href="mailto:laurent@icloud.com">.contact</a>
        </motion.li>
      </ul>
    </nav>
  );
}

export default Header;
