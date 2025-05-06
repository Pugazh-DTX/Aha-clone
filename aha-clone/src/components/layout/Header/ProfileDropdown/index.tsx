"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.scss";
import { headerIcons } from "../header-icons";

type Profile = {
  img: any;
  name: string;
};

const profileOptions: Profile[] = [
  { img: headerIcons.profile, name: "Profile" },
  { img: headerIcons.kids, name: "Kids" },
  { img: headerIcons.family, name: "Family" }, // typo fixed from famliy
];

const ProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const router = useRouter();

  const handleAddClick = () => router.push("/account/profiles/0");
  const handleManageProfiles = () => router.push("/account/profiles");
  const handleSettings = () => router.push("/account/info");

  const menuActions = [
    {
      icon: headerIcons.pen,
      label: "Manage Profiles",
      onClick: handleManageProfiles,
    },
    { icon: headerIcons.settings, label: "Settings", onClick: handleSettings },
    { icon: headerIcons.watch, label: "Watchlist", onClick: () => {} }, // Placeholder for action
    { icon: headerIcons.link, label: "Link TV App", onClick: () => {} }, // Placeholder for action
    { icon: headerIcons.refer, label: "Refer and Earn", onClick: () => {} }, // Placeholder for action
    { icon: headerIcons.logout, label: "Logout", onClick: () => {} }, // Placeholder for action
  ];

  return (
    <div
      className={styles.signinMenu}
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="profile-menu">
        <div className={styles.signIn}>
          <div className={styles.avatar}>
            <Image
              src={selectedProfile?.img || headerIcons.avatar}
              alt="Profile"
              width={32}
              height={32}
            />
          </div>
          <p>{selectedProfile?.name || "Sign In"}</p>
        </div>
      </div>

      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdowncontent}>
            <div className={styles.profilesmenu}>
              <div className={styles.profiles}>
                {/* Add New Profile */}
                <div className={styles.profile1} style={{ cursor: "pointer" }}>
                  <div className={styles.addicon}>
                    <div className="icon">
                      <Image
                        src={headerIcons.add}
                        alt="Add Profile"
                        width={13}
                        height={13}
                      />
                    </div>
                  </div>
                  <button className={styles.addbtn} onClick={handleAddClick}>
                    Add
                  </button>
                </div>

                {/* Profile Buttons */}
                {profileOptions.map((profile) => (
                  <div
                    key={profile.name}
                    className={styles.profile2}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedProfile(profile)}
                  >
                    <div className={styles.icon}>
                      <Image
                        src={profile.img}
                        alt={profile.name}
                        width={33}
                        height={33}
                        className={
                          selectedProfile?.name === profile.name
                            ? styles.activeImage
                            : ""
                        }
                      />
                    </div>
                    <p>{profile.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider" style={{ height: "1vh" }} />

            {/* Menu Actions */}
            <div className={styles.menu}>
              {menuActions.map(({ icon, label, onClick }) => (
                <div key={label} className={styles.ngstarinserted}>
                  <div className="icon1">
                    <Image src={icon} alt={label} width={12} height={12} />
                  </div>
                  <button className={styles.menubtn} onClick={onClick}>
                    {label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
