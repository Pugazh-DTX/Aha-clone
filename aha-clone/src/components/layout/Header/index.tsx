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
  const language =
    (typeof window !== "undefined" &&
      localStorage.getItem("selectedLanguage")) ||
    "Telugu";

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

  const { onlyShowLogo, showOnlySearchBar } = useSelector(
    (state: RootState) => state.layout
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  console.log("showOnlySearchBar:", showOnlySearchBar, "pathname:", pathname);

  return (
    <>
      <header
        className={`${styles.header}  ${
          !onlyShowLogo ? (scrolled ? styles.scrolled : styles.atTop) : ""
        }`}
      >
        {!showOnlySearchBar ? (
          <div className={styles.headerContainer}>
            {/* Left side */}
            <div className={styles.headerLeftContainer}>
              <div className={`${styles.logo} cursor-pointer`}>
                <Image
                  src={headerIcons?.logo}
                  alt="Aha Logo"
                  priority
                  className={styles.logoImage}
                  onClick={() => router.push("/")}
                />
              </div>

              {/* Large screen Nav */}
              {!onlyShowLogo && (
                <>
                  <nav
                    className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
                  >
                    {navLinks.map((link) => {
                      const isActive = pathname === link.path;
                      return (
                        <div
                          key={link.name}
                          className={`${styles.navItem} ${
                            isActive ? styles.activeNav : ""
                          } cursor-pointer`}
                          onClick={() => router.push(link.path)}
                        >
                          {link.name}
                        </div>
                      );
                    })}
                  </nav>

                  {/* Mobile Nav */}
                  <nav
                    className={`${styles.mobileNav} ${
                      menuOpen ? styles.open : ""
                    }`}
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
                        <div
                          key={link.name}
                          className={`${styles.navItem} ${
                            isActive ? styles.activeNav : ""
                          }`}
                          onClick={() => router.push(link.path)}
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
                        </div>
                      );
                    })}
                  </nav>
                </>
              )}
            </div>

            {/* Right side */}
            {!onlyShowLogo && (
              <div className={styles.headerRightContainer}>
                <div className={styles.headerBellIcon}>
                  <Image src={headerIcons.bell} alt={""} />
                </div>
                <div className={styles.searchWrapper}>
                  {pathname !== "/search" && (
                    <Image
                      src={headerIcons.search}
                      alt={"Search icon"}
                      className={`${styles.searchIcon} cursor-pointer `}
                      onClick={handleIconClick}
                    />
                  )}

                  {pathname === "/search" && (
                    <div
                      className={`${styles.searchBarContainer} ${
                        styles.visible
                      } ${showInput ? styles.show : ""}`}
                      style={{
                        display: `${pathname === "/search" ? "flex" : "none"}`,
                        opacity: `${pathname === "/search" ? "1" : "0"}`,
                      }}
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
                      <Image
                        src={headerIcons?.mike}
                        alt={"search"}
                        className={styles.inputSearchIcon}
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`${styles.languageSelect} cursor-pointer`}
                  onClick={() => {
                    router.push("/profile/language");
                  }}
                >
                  {/* <p>{language}</p> */}
                  <Image
                    src={headerIcons?.langChange}
                    alt={""}
                    height={25}
                    width={25}
                  />
                </div>

                <Button
                  wrapperClass={styles.subscribeBtn}
                  onClick={handleClick}
                >
                  Subscribe Now
                </Button>

                <ProfileDropdown />
              </div>
            )}
          </div>
        ) : (
          <div className={styles.searchPageBarContainer}>
            <div
              className={`${styles.searchBackIcon} cursor-pointer`}
              style={{ width: "20px", height: "20px" }}
              onClick={() => {
                router.back();
              }}
            ></div>
            <div
              className={`${styles.searchBarContainer} ${styles.visible} ${
                showInput ? styles.show : ""
              }`}
              style={{
                display: `${pathname === "/search" ? "flex" : "none"}`,
                opacity: `${pathname === "/search" ? "1" : "0"}`,
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
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
              <Image
                src={headerIcons?.mike}
                alt={"search"}
                className={styles.inputSearchIcon}
              />
            </div>
          </div>
        )}
      </header>

      {/* Bottom Nav */}
      {!showOnlySearchBar && <BottomNav />}
    </>
  );
};

export default Header;
