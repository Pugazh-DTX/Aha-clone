import { ImageView } from "../imgview";
import { ButtonProps } from "../../../types/component";
import { StaticImageData } from "next/image";
import "./styles.scss";



export const Button = ({
    onClick,
    children,
    wrapperClass = "",
    trailingIcon,
    leadingIcon,
    type = "button",
    onClickLeadingIcon,
    onClickTrailingIcon,
    buttonWidth = "auto", // ✅ Separate button width
    buttonHeight = "auto", // ✅ Separate button height
    iconWidth = 16, // ✅ Separate icon width
    iconHeight = 16, // ✅ Separate icon height
}: ButtonProps) => {
    const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

    const renderIcon = (icon: string | StaticImageData, alt: string, onClick?: () => void) => (
        <ImageView 
            wrapperClass="button-image" 
            alt={alt} 
            src={typeof icon === "string" ? icon : icon.src} 
            imgWidth={iconWidth} // ✅ Custom icon width
            imgHeight={iconHeight} // ✅ Custom icon height
            onClick={onClick} 
        />
    );

    return (
        <button 
            className={classNames("button-container flex-center", wrapperClass)} 
            onClick={onClick} 
            type={type}
            style={{ width: buttonWidth, height: buttonHeight }} // ✅ Custom button size
        >
            {leadingIcon && renderIcon(leadingIcon, "leading-icon", onClickLeadingIcon)}
            {children}
            {trailingIcon && renderIcon(trailingIcon, "trailing-icon", onClickTrailingIcon)}
        </button>
    );
};
