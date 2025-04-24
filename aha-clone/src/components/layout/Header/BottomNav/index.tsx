import React from "react";
import "./styles.scss";
import { bottomNavLinks } from "@/utils/Header";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const BottomNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="bottomNav">
        <div className="bottomNavContainer">
          {bottomNavLinks.map((bottomLink, index) => {
            const isActive = pathname === bottomLink.path;
            return (
              <Link
                href={bottomLink.path}
                className={`bottomNavItem ${isActive ? "activeNav" : ""}`}
                key={index}
              >
                <div className="bottomNavItemIcon">
                  <Image
                    src={bottomLink.icon}
                    alt={bottomLink.name}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Image>
                </div>
                <h6 style={{ fontSize: "10px" }}>{bottomLink.name}</h6>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
