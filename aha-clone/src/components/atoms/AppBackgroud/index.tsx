import React from "react";
import "./styles.scss";
const AppBackground = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="app-background"
    >
      {children}
    </div>
  );
};
export default AppBackground;
