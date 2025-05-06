import React from "react";
import "./styles.scss";
import { bottomNavLinks } from "@/utils/Header";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav>
      <div className="bottomNav">
        <div className="bottomNavContainer">
          {bottomNavLinks.map((bottomLink, index) => {
            const isActive = pathname === bottomLink.path;
            return (
              <div
                className={`bottomNavItem ${
                  isActive ? "activeNav" : ""
                } cursor-pointer`}
                key={index}
                onClick={() => router.push(bottomLink.path)}
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
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
