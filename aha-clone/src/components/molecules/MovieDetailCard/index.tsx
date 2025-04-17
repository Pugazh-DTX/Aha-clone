import Card from "../Card";
import "./styles.scss";

export const DetailCard = ({ data }: { data: any }) => {
  return (
    <div className="detail-card-main">
      <Card
        isCastCard={false}
        isNoHoverAnimate={true}
        footerTitle={""}
        imageSrc={
          data.imageSrc ||
          "https://image-resizer-cloud-api.akamaized.net/image/772D8CD2-3FCD-4771-9DFD-E603ACAFC711/0-16x9.jpg?width=300&updatedTime=2025-02-13T03:18:42Z&dt=Web"
        }
        isPremium={false}
        aspectRatio={"16/9"}
        isRoundedImage={false}
        overlayPlayIcon={true}
        isAdultContent={false}
        isContinueWatching={false}
        totalTimeDuration={""}
        watchTimeDuration={""}
      />
      <div>
        <h2 className="season-title">{data.movieTitle}</h2>
        <h3 className="season-sup-title">{data.movieSupTitle}</h3>
        <p className="season-card-des">{data.movieDescription}</p>
      </div>
    </div>
  );
};
