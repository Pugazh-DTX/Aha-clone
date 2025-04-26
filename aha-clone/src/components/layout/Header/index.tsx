"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { navLinks } from "@/utils/Header";
import { headerIcons } from "./header-icons";
import { Button } from "../../atoms/button";
import BottomNav from "./BottomNav";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProfileDropdown from "./ProfileDropdown";

const Header = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const router = useRouter();
  // Search Logic---
  const searchParams = useSearchParams();

  // Handle search param changes
  useEffect(() => {
    const currentValue = searchParams.get("q") || "";
    setValue(currentValue);
  }, [searchParams]);

  // Update URL based on input value
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      router.push(`?${params.toString()}`);
    }, 500);
    return () => clearTimeout(timeout);
  }, [value]);

  // Check if container overflows (for mobile navigation)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const checkOverflow = () => setHasOverflow(el.scrollWidth > el.clientWidth);

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Handle scroll logic (to change header styles)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Redirect to subscription page
  const handleClick = useCallback(() => {
    router.push("/subscription/viewplans");
  }, [router]);

  // Show or hide the search bar
  const handleIconClick = useCallback(() => {
    if (!visible) {
      setVisible(true); // Add to DOM
      setTimeout(() => setShowInput(true), 10); // Trigger animation
    } else {
      setShowInput(false); // Start exit animation
      setTimeout(() => setVisible(false), 400); // Remove from DOM after animation
    }
    router.push("/search");
  }, [visible, router]);

  // Show only logo in header (from Redux store)
  const onlyShowLogo = useSelector((state: RootState) => state.layout.onlyShowLogo);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <header
        className={`${styles.header}  ${
          !onlyShowLogo ? (scrolled ? styles.scrolled : styles.atTop) : ""
        }`}
      >
        <div className={styles.headerContainer}>
          {/* Left side */}
          <div className={styles.headerLeftContainer}>
            <Link href="/" className={styles.logo}>
              <Image
                src={headerIcons?.logo}
                alt="Aha Logo"
                priority
                className={styles.logoImage}
              />
            </Link>

            {/* Large screen Nav */}
            {!onlyShowLogo && (
              <>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                  {navLinks.map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        className={`${styles.navItem} ${isActive ? styles.activeNav : ""}`}
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
                  {navLinks.slice(0, 4).map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        className={`${styles.navItem} ${isActive ? styles.activeNav : ""}`}
                      >
                        {isActive && (
                          <div
                            style={{
                              backgroundImage: `url(${link.icon.src})`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              height: "25px",
                              width: "25px",
                            }}
                          />
                        )}
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </>
            )}
          </div>

          {/* Right side */}
          {!onlyShowLogo && (
            <div className={styles.headerRightContainer}>
              <div className={styles.searchWrapper}>
                {!visible && (
                  <Image
                    src={headerIcons.search}
                    alt={"Search icon"}
                    className={`${styles.searchIcon} cursor-pointer`}
                    onClick={handleIconClick}
                  />
                )}

                {visible && pathname === "/search" && (
                  <div
                    className={`${styles.searchBarContainer} ${styles.visible} ${showInput ? styles.show : ""}`}
                  >
                    <Image
                      src={headerIcons?.search}
                      alt={"search"}
                      className={styles.inputSearchIcon}
                    />
                    <input
                      type="text"
                      placeholder="Search Title, Movie or Cast"
                      className={styles.searchInput}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <select className={styles.languageSelect}>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
              </select>

              <Button wrapperClass={styles.subscribeBtn} onClick={handleClick}>
                Subscribe Now
              </Button>

              <ProfileDropdown />
            </div>
          )}
        </div>
      </header>

      {/* Bottom Nav */}
      <BottomNav />
    </>
  );
};

export default Header;
