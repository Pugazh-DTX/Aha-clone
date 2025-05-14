import "./styles.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import premiumIcon from "../../../../public/Assets/icons/Card/tag-icon.svg";
import playIcon from "../../../../public/Assets/icons/Card/play-icon.svg";
import cardAhaLogo from "../../../../public/Assets/icons/Card/card-aha-logo.svg";
import cardAhaLogoBg from "../../../../public/Assets/icons/Card/Intersect.svg";
export type CardTag = {
  enable: string; // "true" or "false"
  position: "topright" | "topleft"; // you can extend if needed
  tag_name: string;
  transparency: number; // from 0 to 100
};

export type CardProps = {
  isCastCard: boolean;
  isNoHoverAnimate?: boolean;
  isFooterTitle: boolean;
  footerTitle: string;
  imageSrc: StaticImageData | string;
  alt?: string;
  isPremium?: boolean;
  tag?: CardTag;
  cardWidth?: string;
  aspectRatio: "2/3" | "2/6" | "16/9" | "16/18" | "1/1" | "9/16";
  isRoundedImage: boolean;
  overlayPlayIcon: boolean;
  isOverlayText?: boolean;
  overlayText?: string;
  isAdultContent: boolean;
  isAhaTag?: boolean;
  isDaysToGo?: boolean;
  daysToGo?: string;
  isLiveTv?: boolean;
  isContinueWatching: boolean;
  totalTimeDuration: string;
  watchTimeDuration: string;
  // Removed duplicate tag property
};

const Card = ({
  isCastCard,
  isNoHoverAnimate,
  isFooterTitle,
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
  isAhaTag,
  isDaysToGo,
  daysToGo,
  isOverlayText,
  isLiveTv,
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
      className={`card ${
        isCastCard || isNoHoverAnimate ? "" : "hover-card"
      } ${getAspectClass()}`}
      style={{
        width: isCastCard
          ? "fit-content"
          : isRoundedImage
          ? "130px"
          : cardWidth,
      }}
    >
      <div
        className={`image-wrapper cursor-pointer ${
          isCastCard ? "cast-card-width" : "card-full-width"
        } ${isLiveTv ? "card-live-tv" : ""}`}
        style={{
          aspectRatio,
          borderRadius: `${isRoundedImage ? "50%" : "8px"}`,
        }}
      >
        {/* Skeleton loader */}
        <div
          className="card-skeleton-container"
          style={{ display: isLiveTv ? "none" : "flex" }}
        >
          <div className="card-skeleton-img"></div>
        </div>

        {/* Image */}
        <div>
          <Image
            src={imageSrc}
            alt={`${footerTitle}img`}
            {...(!isLiveTv ? { fill: true } : {})}
          />
        </div>

        {/* Premium Static Badge */}
        {isPremium && (
          <div className="premium-tag">
            <div style={{ display: "flex" }}>
              <Image
                src={premiumIcon}
                alt={"premium-tag"}
                width={12}
                height={12}
              />
            </div>
            <p className="premium-tag-text">Premium</p>
          </div>
        )}
        {/*Card Aha tag */}
        {isAhaTag && (
          <div>
            <div className="card-aha-logo-parent-container">
              <div className="card-aha-logo-inner">
                <Image src={cardAhaLogo} alt={""} width={34} height={17} />
              </div>
            </div>
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
          <div>
            <div className="overlay-play-icon-gradient"></div>
            <div className="play-icon-container">
              <Image src={playIcon} alt={"play-icon"} className="play-icon" />
            </div>
          </div>
        )}

        {/* Overlay Text */}
        {isOverlayText && (
          <div>
            {isAhaTag ? (
              <div className="card-aha-bottom-gradient"></div>
            ) : (
              <div className="overlay-gradient"></div>
            )}

            <div className="overlay-text-container">
              <div className="overlay-text-inner-container">
                <p className="overlay-text">{overlayText}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          width: "100%",
          padding: `${isCastCard ? "11px 0px 10px" : "5px 0"}`,
        }}
      >
        {/* Days to go */}
        {isDaysToGo && (
          <div className="card-coming-days-container">
            <div className="card-coming-days-gradient">
              <p className="card-coming-days">{daysToGo}</p>
            </div>
          </div>
        )}
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
        {isFooterTitle && (
          <div
            className={`${isCastCard ? "cast-card-footer" : "card-footer"} ${
              isDaysToGo ? "card-footer-positioning" : ""
            }`}
          >
            {footerTitle && (
              <p
                className={`${
                  isCastCard ? "cast-card-footer-title" : "card-footer-title"
                }`}
              >
                {footerTitle}
              </p>
            )}
            {isAdultContent && (
              <div
                className={`${
                  isCastCard ? "cast-card-footer-tag" : "card-footer-tag"
                }`}
              >
                18+
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
