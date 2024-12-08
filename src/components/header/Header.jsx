import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerlist } from "@/static";
import { MotionConfig, motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa6";
import logo from "@/images/logo.png";

const Header = () => {
  const [clicks, setClicks] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleDropdown = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const styles = [
    { height: "200px", overflow: "hidden" },
    { height: "135px", overflow: "hidden" },
    { height: "auto", overflow: "hidden" },
  ];
  const list = headerlist.map((e, inx) => (
    <li
      className=" text-neutral-600 relative link__item lg:pb-4 dark:text-neutral-300  font-semibold  transition-all"
      key={inx}
    >
      <NavLink
        className="border-b-2 hover:border-black flex items-center gap-x-2 border-white dark:border-slate-900"
        to={e.link}
        onClick={() => {
          e.link1 && setClicks(!clicks),
            e.link1 ? toggleDropdown(inx) : null,
            !e.link1 && setOpenMenu(!openMenu);
        }}
      >
        {e.title}
        {e.link1 && <FaCaretDown />}
      </NavLink>
      {
        (clicks == true && e.link1,
        activeIndex === inx && e.link1 && (
          <div
            style={styles[inx % styles.length]}
            className="flex lg:hidden flex-col relative bottom-0 lg:absolute left-[-20px] lg:top-10 border-t w-[250px] lg:w-[300px] linkheader__box text-sm"
          >
            <NavLink
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-3 lg:hidden bg-stone-100 border-x-2 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-600 border-b pl-5"
              to={e.link1}
            >
              {e.name1}
            </NavLink>
            <NavLink
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-3 lg:hidden bg-stone-100 border-x-2 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-600 border-b pl-5"
              to={e.link2}
            >
              {e.name2}
            </NavLink>
            <NavLink
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-3 lg:hidden bg-stone-100 border-x-2 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-600 border-b pl-5"
              to={e.link3}
            >
              {e.name3}
            </NavLink>
            <NavLink
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-3 lg:hidden bg-stone-100 border-x-2 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-600 border-b pl-5"
              to={e.link4}
            >
              {e.name4}
            </NavLink>
            <NavLink
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-3 lg:hidden bg-stone-100 border-x-2 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-600 border-b pl-5"
              to={e.link5}
            >
              {e.name5}
            </NavLink>
            <NavLink
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-3 lg:hidden bg-stone-100 border-x-2 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-600 border-b pl-5"
              to={e.link6}
            >
              {e.name6}
            </NavLink>
            <NavLink
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-3 lg:hidden bg-stone-100 border-x-2 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-600 border-b pl-5"
              to={e.link7}
            >
              {e.name7}
            </NavLink>
          </div>
        ))
      }
      <div className="hidden flex-col z-50 rounded-xl overflow-hidden relative lg:absolute top-10 border-t w-[300px] linkheader__box text-sm">
        <NavLink
          className="py-3 bg-[#d6f5ffe2] border-x-2 hover:bg-blue-400 hover:text-white text-[#041A57] dark:border-black border-b px-5"
          to={e.link1}
        >
          {e.name1}
        </NavLink>
        <NavLink
          className="py-3 bg-[#d6f5ffe2] border-x-2 hover:bg-blue-400 hover:text-white dark:border-black text-[#041A57] border-b px-5"
          to={e.link2}
        >
          {e.name2}
        </NavLink>
        <NavLink
          className="py-3 bg-[#d6f5ffe2] border-x-2 hover:bg-blue-400 hover:text-white dark:border-black text-[#041A57] border-b px-5"
          to={e.link3}
        >
          {e.name3}
        </NavLink>
        <NavLink
          className="py-3 bg-[#d6f5ffe2] border-x-2 hover:bg-blue-400 hover:text-white dark:border-black text-[#041A57] border-b px-5"
          to={e.link4}
        >
          {e.name4}
        </NavLink>
        <NavLink
          className="py-3 bg-[#d6f5ffe2] border-x-2 hover:bg-blue-400 hover:text-white dark:border-black text-[#041A57] border-b px-5"
          to={e.link5}
        >
          {e.name5}
        </NavLink>
        <NavLink
          className="py-3 bg-[#d6f5ffe2] border-x-2 hover:bg-blue-400 hover:text-white dark:border-black text-[#041A57] border-b px-5"
          to={e.link6}
        >
          {e.name6}
        </NavLink>
        <NavLink
          className="py-3 bg-[#d6f5ffe2] border-x-2 hover:bg-blue-400 hover:text-white dark:border-black text-[#041A57] border-b px-5"
          to={e.link7}
        >
          {e.name7}
        </NavLink>
      </div>
    </li>
  ));
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="fixed dark:bg-gray-900 py-4 lg:py-0 lg:pt-4 bg-white site-header border-b shadow-md left-0 lg:top-[50px] z-40 w-full">
      <div className="container max-w-[1240px] mx-auto px-5">
        <div className="flex items-center justify-between">
          <Link
            onClick={() => setOpenMenu(false)}
            className="text-2xl dark:text-white lg:pb-4 italic font-bold"
            to={"/"}
          >
            <img className="w-[45px]" src={logo} alt="Site's logo" />
          </Link>
          <nav
            className={
              openMenu
                ? "block border-t lg:border-t-0 border-black dark:border-white lg:block min-[500px]:px-16 md:px-20 lg:p-0 lg:left-[-35px] lg:h-auto lg:top-0 lg:relative absolute top-[65px] transition-[0.5s] pl-12 pr-12 pt-3 dark:bg-slate-900  left-0 z-10 bg-white  h-screen"
                : "block lg:block min-[500px]:px-16 md:px-20 lg:p-0 lg:left-[-35px] lg:h-auto lg:top-0 lg:relative absolute top-[65px] transition-[0.5s] pl-5 left-[-3000px] dark:bg-slate-900 z-10 bg-white h-screen"
            }
          >
            <ul className="flex flex-col header__list lg:flex-row items-start gap-x-6 gap-y-3">
              {list}
            </ul>
          </nav>
          <div
            onClick={() => setOpenMenu(false)}
            className={
              openMenu === false
                ? "hidden"
                : "fixed left-0 top-[88px] w-full lg:hidden h-screen bg-[#0009]"
            }
          ></div>
          <AnimatedHamburgerButton
            setOpenMenu={setOpenMenu}
            openMenu={openMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

const AnimatedHamburgerButton = ({ setOpenMenu, openMenu }) => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={(active, openMenu) ? "open" : "closed"}
        onClick={() => {
          setActive((pv) => !pv), setOpenMenu(!openMenu);
        }}
        className="fixed top-2 right-2 h-[60px] w-[60px] lg:hidden rounded-full transition-colors"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[2px] w-8 bg-black dark:bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[2px] w-8 bg-black dark:bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[2px] w-5 bg-black dark:bg-white"
          style={{
            x: "-70%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "56%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
