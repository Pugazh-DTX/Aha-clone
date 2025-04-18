import "./styles.scss";
export const MovieDetailList = ({ data }: { data: any }) => {
  return (
    <div className="movie-detail-list">
      <p className="detail-left-content">Director</p>
      <p className="detail-right-content">{data.director || "no data found"}</p>
      <p className="detail-left-content">Studio</p>
      <p className="detail-right-content">{data.studio || "no data found"}</p>
    </div>
  );
};
