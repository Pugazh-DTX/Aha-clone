import { ImageProps, StaticImageData } from "next/image";
import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type VariantType = "outlined" | "text" | "danger" | "default"| 'contained' | "primary" | "secondary" | "tertiary" | "success" | "warning" | "info" | "light" | "dark";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: VariantType; // If you have variant types like "primary", "secondary", etc.
    wrapperClass?: string;
    
    // ✅ Icons
    leadingIcon?: string | StaticImageData;
    trailingIcon?: string | StaticImageData;
    onClickLeadingIcon?: () => void;
    onClickTrailingIcon?: () => void;
    
    // ✅ Button Size
    buttonWidth?: string | number;  // e.g., "200px" or 200
    buttonHeight?: string | number; // e.g., "50px" or 50
    
    // ✅ Icon Size
    iconWidth?: number;  // e.g., 16, 24, 32
    iconHeight?: number; // e.g., 16, 24, 32
}

export interface ImageViewProps extends Partial<ImageProps> {
    wrapperClass?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgSize?: number;
    placeHolder?: string;
    borderRadius?: number | string; // Supports values like '50%'
    overflow?: "visible" | "hidden" | "scroll" | "auto"; // Matches CSS values
    onClick?: MouseEventHandler<HTMLElement>; // More flexible for div/img
    imageLayout?: "cover" | "contain";
}