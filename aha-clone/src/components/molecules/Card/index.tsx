import "./styles.scss";
import Image from "next/image";
import premiumIcon from "../../../../public/Assets/icons/Card/tag-icon.svg";
import playIcon from "../../../../public/Assets/icons/Card/play-icon.svg";

export type CardTag = {
  enable: string; // "true" or "false"
  position: "topright" | "topleft"; // you can extend if needed
  tag_name: string;
  transparency: number; // from 0 to 100
};

export type CardProps = {
  isCastCard: boolean;
  isNoHoverAnimate?: boolean;
  footerTitle: string;
  imageSrc: string;
  alt?: string;
  isPremium?: boolean;
  tag?: CardTag;
  cardWidth?: string;
  aspectRatio: "2/3" | "2/6" | "16/9" | "16/18" | "1/1" | "9/16";
  isRoundedImage: boolean;
  overlayPlayIcon: boolean;
  overlayText?: string;
  isAdultContent: boolean;
  isContinueWatching: boolean;
  totalTimeDuration: string;
  watchTimeDuration: string;
  // Removed duplicate tag property
};

const Card = ({
  isCastCard,
  isNoHoverAnimate,
  footerTitle,
  imageSrc,
  alt = "",
  isPremium = false,
  tag,
  aspectRatio = "2/3",
  cardWidth,
  isRoundedImage,
  overlayPlayIcon,
  overlayText,
  isAdultContent,
  isContinueWatching,
  totalTimeDuration,
  watchTimeDuration,
}: CardProps) => {
  const runTime = Number(watchTimeDuration);
  const totalDuration = Number(totalTimeDuration);

  const progress = (runTime / totalDuration) * 100;

  const getAspectClass = () => {
    switch (aspectRatio) {
      case "2/3":
        return "ap-2X3";
      case "16/9":
        return "ap-16X9";
      case "2/6":
        return "ap-2X6";
      case "16/18":
        return "ap-16X18";
      case "1/1":
        return "ap-1X1";
      case "9/16":
        return "ap-9X16";
      default:
        return "";
    }
  };

  return (
    <div
      className={`card ${isCastCard || isNoHoverAnimate ? "" : "hover-card"} ${getAspectClass()}`}
      style={{
        width: isCastCard ? "fit-content" : isRoundedImage ? "130px" : cardWidth,
      }}
    >
      <div
        className={`image-wrapper cursor-pointer ${
          isCastCard ? "cast-card-width" : "card-full-width"
        }`}
        style={{
          aspectRatio,
          borderRadius: `${isRoundedImage ? "50%" : "8px"}`,
        }}
      >
        {/* Skeleton loader */}
        <div className="card-skeleton-container">
          <div className="card-skeleton-img"></div>
        </div>

        {/* Image */}
        <div>
          <Image src={imageSrc} alt={`${footerTitle}img`} fill />
        </div>

        {/* Premium Static Badge */}
        {isPremium && (
          <div className="premium-tag">
            <div style={{ display: "flex" }}>
              <Image
                src={premiumIcon}
                alt={"premium-tag"}
                width={10}
                height={10}
              />
            </div>
            <p className="premium-tag-text">Premium</p>
          </div>
        )}

        {/* ✅ Dynamic Tag Support */}
        {tag?.enable === "true" && (
          <div
            className={`absolute ${
              tag.position === "topright" ? "top-2 right-2" : "top-2 left-2"
            } bg-red-600 text-white text-xs px-2 py-1 rounded-md z-10`}
            style={{ opacity: tag.transparency / 100 }}
          >
            {tag.tag_name}
          </div>
        )}

        {/* Play Icon */}
        {overlayPlayIcon && (
          <div className="play-icon-container">
            <Image src={playIcon} alt={"play-icon"} className="play-icon" />
          </div>
        )}

        {/* Overlay Text */}
        <div className="overlay-text-container">
          <div className="overlay-text-inner-container">
            <p className="overlay-text">{overlayText}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          width: "100%",
          padding: `${isCastCard ? "11px 0px 10px" : "5px 0"}`,
        }}
      >
        {/* Continue Watching Progress */}
        {isContinueWatching && totalTimeDuration && watchTimeDuration && (
          <div className="card-progress-bar-container">
            <div
              className="card-progress-bar-inner"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* Footer Title and A-Tag */}
        {footerTitle && (
          <div className={`${isCastCard ? "cast-card-footer" : "card-footer"}`}>
            <p
              className={`${
                isCastCard ? "cast-card-footer-title" : "card-footer-title"
              }`}
            >
              {footerTitle}
            </p>
            {isAdultContent && (
              <div
                className={`${
                  isCastCard ? "cast-card-footer-tag" : "card-footer-tag"
                }`}
              >
                A
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
