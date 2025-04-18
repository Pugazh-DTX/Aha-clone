import Card from "../Card";
import "./styles.scss";

interface CastItem {
  footerTitle: string;
  imageSrc?: string;
}

export const MovieCastList = ({ data }: { data: CastItem[] }) => {
  return (
    <div className="cast-list-main">
      {data.map((item, index) => (
        <Card
          key={index}
          isCastCard={true}
          footerTitle={item.footerTitle}
          imageSrc={
            item.imageSrc ||
            "https://image-resizer-cloud-api.akamaized.net/image/rj-vijay/0-1x1.jpg?width=120&updatedTime=2025-03-25T06:48:44Z"
          }
          isPremium={false}
          aspectRatio={"1/1"}
          isRoundedImage={false}
          overlayPlayIcon={false}
          isAdultContent={false}
          isContinueWatching={false}
          totalTimeDuration={""}
          watchTimeDuration={""}
        />
      ))}
    </div>
  );
};
