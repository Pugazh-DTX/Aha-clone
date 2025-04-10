"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/utils/Header";
import logo from "../../../../public/Assets/icons/Logo.svg";
import search from "../../../../public/Assets/icons/Header/search-icon.svg";
import avatar from "../../../../public/Assets/icons/Header/avator-icon.svg";
import { Button } from "../../atoms/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const checkOverflow = () => {
      setHasOverflow(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    // Optional: listen to resize events to re-check
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : styles.atTop
      }`}
    >
      <div className={styles.headerContainer}>
        {/* Left side */}
        <div className={styles.headerLeftContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              alt="Aha Logo"
              priority
              className={styles.logoImage}
            />
          </Link>
          {/* Large screen Nav */}
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${styles.navItem} ${
                    isActive ? styles.activeNav : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* Mobile Nav */}
          <nav
            className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}
            ref={containerRef}
            style={{
              overflowX: "auto",
              padding: hasOverflow ? "0 14px" : "0",
              transition: "padding 0.2s ease",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${styles.navItem} ${
                    isActive ? styles.activeNav : ""
                  }`}
                >
                  {isActive ? (
                    <div
                      style={{
                        backgroundImage: `url(${link.icon.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "25px",
                        width: "25px",
                      }}
                    ></div>
                  ) : (
                    ""
                  )}

                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side */}
        <div className={styles.headerRightContainer}>
          <Image
            src={search}
            alt={"Search icon"}
            className={styles.searchIcon}
          />

          <select className={styles.languageSelect}>
            <option value="telugu">Telugu</option>
            <option value="tamil">Tamil</option>
          </select>

          <Button wrapperClass={styles.subscribeBtn}>Subscribe Now</Button>
          <div className={styles.signIn}>
            <div className={styles.avatar}>
              <Image src={avatar} alt="Profile" width={32} height={32} />
            </div>
            <p>Sign In</p>
          </div>
        </div>

        {/* Mobile menu */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Image src={logo} alt="Menu Icon" width={24} height={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
