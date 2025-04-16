import "./styles.scss";
import Image from "next/image";
import premiumIcon from "../../../../public/Assets/icons/Card/tag-icon.svg";
import playIcon from "../../../../public/Assets/icons/Card/play-icon.svg";

export type CardProps = {
  isCastCard: boolean;
  footerTitle: string;
  imageSrc: string;
  alt?: string;
  isPremium: boolean;
  cardWidth?: string;
  aspectRatio: string;
  isRoundedImage: boolean;
  overlayPlayIcon: boolean;
  overlayText?: string;
  isAdultContent: boolean;
  isContinueWatching: boolean;
  totalTimeDuration: string;
  watchTimeDuration: string;
};

const Card = ({
  isCastCard,
  footerTitle,
  imageSrc,
  alt = "",
  isPremium,
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

  return (
    <div
      className={`card ${isCastCard ? "" : "hover-card"} ${
        aspectRatio === "2/3"
          ? "ap-2X3"
          : aspectRatio === "16/9"
          ? "ap-16X9"
          : aspectRatio === "2/6"
          ? "ap-2X6"
          : aspectRatio === "16/18"
          ? "ap-16X18"
          : aspectRatio === "1/1"
          ? "ap-1X1"
          : aspectRatio === "9/16"
          ? "ap-9X16"
          : ""
      }`}
      style={{
        width: isCastCard ? "fit-content" : isRoundedImage ? "130px" : "",
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
        <div className="card-skeleton-container">
          <div className="card-skeleton-img"></div>
        </div>
        <div>
          <Image src={imageSrc} alt={`${footerTitle}img`} fill />
        </div>
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
        {overlayPlayIcon && (
          <div className="play-icon-container">
            <Image src={playIcon} alt={"play-icon"} className="play-icon" />
          </div>
        )}
        <div className="overlay-text-container">
          <div className="overlay-text-inner-container">
            <p className="overlay-text">{overlayText}</p>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", padding: "5px 0" }}>
        {isContinueWatching && totalTimeDuration && watchTimeDuration && (
          <div className="card-progress-bar-container">
            <div
              className="card-progress-bar-inner"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
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
