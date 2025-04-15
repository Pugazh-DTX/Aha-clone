import "./styles.scss";
import Image from "next/image";
import premiumIcon from "../../../../public/Assets/icons/Card/tag-icon.svg";
import playIcon from "../../../../public/Assets/icons/Card/play-icon.svg";

type CardProps = {
  isCastCard: boolean;
  footerTitle: string;
  imageSrc: string;
  alt?: string;
  isPremium: boolean;
  cardWidth: string;
  aspectRatio: string;
  isRoundedImage: boolean;
  overlayPlayIcon: boolean;
  overlayText?: string;
  isAdultContent: boolean;
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
}: CardProps) => {
  return (
    <div
      className={`card ${isCastCard ? "" : "hover-card"}`}
      style={{ width: isCastCard ? "fit-content" : cardWidth }}
    >
      <div
        className="image-wrapper"
        style={{
          aspectRatio,
          borderRadius: `${isRoundedImage ? "50%" : "8px"}`,
          width: isCastCard ? "96px" : "100%",
        }}
      >
        <div className="card-skeleton-container">
          <div className="card-skeleton-img"></div>
        </div>
        <div>
          <Image src={imageSrc} alt={alt} fill />
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
  );
};

export default Card;
