"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/utils/Header";
import { headerIcons } from "./header-icons";
import { Button } from "../../atoms/button";
import BottomNav from "./BottomNav";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const [currentPath, setCurrentPath] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<{
    img: any;
    name: string;
  } | null>(null); // State to track the selected profile
  const router = useRouter();
  // Search Logic---
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentValue = searchParams.get("q") || "";
    setValue(currentValue);
  }, [searchParams]);

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

  const handleClick = () => {
    router.push("/subscription/viewplans");
  };

  const manageProfileClick = () => {
    router.push("/account/profiles");
  };

  const addClick = () => {
    router.push("/account/profiles/0");
  };

  const settingsClick = () => {
    router.push("/account/info");
  };

  //Show only logo in header
  const onlyShowLogo = useSelector(
    (state: RootState) => state.layout.onlyShowLogo
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  //search------------------------------

  const handleIconClick = () => {
    if (!visible) {
      setVisible(true); // add to DOM
      setTimeout(() => setShowInput(true), 10); // trigger animation
    } else {
      setShowInput(false); // start exit animation
      setTimeout(() => setVisible(false), 400); // remove from DOM after animation
    }
    router.push("/search");
  };
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
                {" "}
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
              </>
            )}
          </div>

          {/* Right side */}
          {!onlyShowLogo && (
            <div>
              <div className={styles.headerRightContainer}>
                <Image
                  src={headerIcons.search}
                  alt={"Search icon"}
                  className={styles.searchIcon}
                />

                {visible && pathname === "/search" && (
                  <div
                    className={`${styles.searchBarContainer} ${
                      styles.visible
                    } ${showInput ? styles.show : ""}`}
                  >
                    <Image
                      src={headerIcons?.search}
                      alt={"search"}
                      className={styles.inputSearchIcon}
                    />
                    <input
                      type="text"
                      placeholder="Search Title, Movie or Cast"
                      className={`${styles.searchInput} `}
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
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

              <div
                className="menu"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="profile-menu">
                  <div className={styles.signIn}>
                    <div className={styles.avatar}>
                      <Image
                        src={
                          selectedProfile
                            ? selectedProfile.img
                            : headerIcons.avatar
                        }
                        alt="Profile"
                        width={32}
                        height={32}
                      />
                    </div>
                    <p>{selectedProfile ? selectedProfile.name : "Sign In"}</p>
                  </div>
                </div>

                {isDropdownOpen && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdowncontent}>
                      <div className={styles.profilesmenu}>
                        <div className={styles.profiles}>
                          <div
                            className={styles.profile1}
                            style={{ cursor: "pointer" }}
                          >
                            <div className={styles.addicon}>
                              <div className="icon">
                                <Image
                                  src={headerIcons.add}
                                  alt="Profile"
                                  width={13}
                                  height={13}
                                />
                              </div>
                            </div>
                            <button
                              className={styles.addbtn}
                              onClick={addClick}
                            >
                              Add
                            </button>
                          </div>

                          <div
                            className={styles.profile2}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setSelectedProfile({
                                img: headerIcons.profile,
                                name: "Profile",
                              })
                            }
                          >
                            <div className={styles.icon2}>
                              <div className="icon2">
                                <Image
                                  src={headerIcons.profile}
                                  alt="Profile"
                                  width={33}
                                  height={33}
                                  className={
                                    selectedProfile?.name === "Profile"
                                      ? styles.activeImage
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                            <p>Profile</p>
                          </div>

                          <div
                            className={styles.profile2}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setSelectedProfile({
                                img: headerIcons.kids,
                                name: "Kids",
                              })
                            }
                          >
                            <div className={styles.icon3}>
                              <div className="icon">
                                <Image
                                  src={headerIcons.kids}
                                  alt="Profile"
                                  width={33}
                                  height={33}
                                  className={
                                    selectedProfile?.name === "Kids"
                                      ? styles.activeImage
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                            <p>Kids</p>
                          </div>

                          <div
                            className={styles.profile2}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setSelectedProfile({
                                img: headerIcons.famliy,
                                name: "Famliy",
                              })
                            }
                          >
                            <div className={styles.icon4}>
                              <div className="icon">
                                <Image
                                  src={headerIcons.famliy}
                                  alt="Profile"
                                  width={33}
                                  height={33}
                                  className={
                                    selectedProfile?.name === "Famliy"
                                      ? styles.activeImage
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                            <p>Famliy</p>
                          </div>
                        </div>
                      </div>

                      <div className="divider" style={{ height: "1vh" }} />

                      <div className={styles.menu}>
                        <div className={styles.ngstarinserted}>
                          <div className="icon1">
                            <Image
                              src={headerIcons.pen}
                              alt="Profile"
                              width={12}
                              height={12}
                            />
                          </div>
                          <button
                            className={styles.menubtn}
                            onClick={manageProfileClick}
                          >
                            Manage Profiles
                          </button>
                        </div>

                        <div className={styles.ngstarinserted}>
                          <div className="icon1">
                            <Image
                              src={headerIcons.settings}
                              alt="Profile"
                              width={12}
                              height={12}
                            />
                          </div>
                          <button
                            className={styles.menubtn}
                            onClick={settingsClick}
                          >
                            Settings
                          </button>
                        </div>

                        <div className={styles.ngstarinserted}>
                          <div className="icon1">
                            <Image
                              src={headerIcons.watch}
                              alt="Profile"
                              width={12}
                              height={12}
                            />
                          </div>
                          <button className={styles.menubtn}>Watchlist</button>
                        </div>

                        <div className={styles.ngstarinserted}>
                          <div className="icon1">
                            <Image
                              src={headerIcons.link}
                              alt="Profile"
                              width={12}
                              height={12}
                            />
                          </div>
                          <button className={styles.menubtn}>
                            Link TV App
                          </button>
                        </div>

                        <div className={styles.ngstarinserted}>
                          <div className="icon1">
                            <Image
                              src={headerIcons.refer}
                              alt="Profile"
                              width={12}
                              height={12}
                            />
                          </div>
                          <button className={styles.menubtn}>
                            Refer and Earn
                          </button>
                        </div>

                        <div className={styles.ngstarinserted}>
                          <div className="icon1">
                            <Image
                              src={headerIcons.logout}
                              alt="Profile"
                              width={12}
                              height={12}
                            />
                          </div>
                          <button className={styles.menubtn}>Logout</button>
                        </div>

                        {/* <div className={styles.menuitem}>
                       
                        <a href="/settings">Settings</a>
                        <a href="/logout">Logout</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
