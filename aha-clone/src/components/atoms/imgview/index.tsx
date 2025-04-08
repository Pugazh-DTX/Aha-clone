

import Image, { ImageProps } from "next/image";
import { MouseEvent } from "react";
import { ImageViewProps } from "../../../types/component"; // Adjust the import path as necessary
import "./styles.scss"; // Import the CSS file

export const ImageView = ({
    wrapperClass = "",
    imgWidth,
    imgHeight,
    imgSize,
    alt = "",
    src,
    onClick,
    layout,
    placeHolder = "",
    borderRadius,
    overflow,
    imageLayout = "contain",
}: ImageViewProps) => {
    const onClickImage = (event: MouseEvent<HTMLDivElement>) => {
        if (onClick) onClick(event);
    };

    if (!src && !placeHolder) return null; // Return null if no image source or placeholder

    const imageProps: ImageProps = {
        width: imgSize || imgWidth,
        height: imgSize || imgHeight,
        src: src || "",
        unoptimized: true,
        alt,
        layout: layout || imgSize || imgWidth || imgHeight ? "fixed" : "fill",
        style: { objectFit: imageLayout },
    };

    return (
        <div
            className={`image-container flex-center ${wrapperClass}`}
            onClick={onClickImage}
            style={{ borderRadius, overflow }}
        >
            <Image {...imageProps} />
        </div>
    );
};
